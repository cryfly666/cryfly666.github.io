// ============================================================
// 宝可梦对战 — AI 决策系统
// ============================================================

class BattleAI {
  constructor(engine) {
    this.engine = engine;
  }

  // 选择最佳技能
  chooseBestMove(attacker, defender) {
    let bestMove = null;
    let bestScore = -Infinity;

    for (const move of attacker.moves) {
      if (move.pp <= 0) continue;
      const score = this.scoreMove(attacker, defender, move);
      if (score > bestScore) {
        bestScore = score;
        bestMove = move;
      }
    }

    return bestMove || attacker.moves.find(m => m.pp > 0);
  }

  // 评估一个技能的分数
  scoreMove(attacker, defender, move) {
    let score = 0;

    if (move.category === 'Status') {
      score = this.scoreStatusMove(attacker, defender, move);
    } else {
      score = this.scoreAttackMove(attacker, defender, move);
    }

    // 优先度加成 (先制技在低HP时很有价值)
    if (move.priority > 0) {
      const hpRatio = attacker.hp / attacker.maxHp;
      score += move.priority * 20 * (1 - hpRatio); // HP越低越值
    }

    return score;
  }

  scoreAttackMove(attacker, defender, move) {
    const effectiveness = getTypeEffectiveness(move.type, defender.types);
    const stab = attacker.types.includes(move.type) ? 1.5 : 1.0;
    const power = move.power;

    // 基础分数 = 威力 × 克制 × STAB
    let score = power * effectiveness * stab;

    // 特殊加成
    // 如果克制 > 1，大幅加分
    if (effectiveness >= 2) score *= 2;
    if (effectiveness >= 4) score *= 2;

    // 如果无效或抵抗，大幅减分
    if (effectiveness === 0) score = -100;
    if (effectiveness < 1 && effectiveness > 0) score *= 0.3;

    // 物攻/特攻选择 (看哪个更高)
    if (move.category === 'Physical') {
      score *= (attacker.getEffectiveStat('atk') / attacker.getEffectiveStat('spa'));
      // 灼伤减物攻
      if (attacker.status === 'burn') score *= 0.3;
    } else {
      score *= (attacker.getEffectiveStat('spa') / attacker.getEffectiveStat('atk'));
    }

    // 命中率
    const acc = move.accuracy || 100;
    score *= (acc / 100);

    // 对方HP低时偏好高威力收割
    const defHpRatio = defender.hp / defender.maxHp;
    if (defHpRatio < 0.3) {
      score *= 1.5;
    }

    // 附加效果加分
    if (move.effect) {
      const effectChance = (move.effectChance || 100) / 100;
      if (['burn','paralysis','poison','freeze'].includes(move.effect) && !defender.status) {
        score += 15 * effectChance;
      }
    }

    // 自身减益扣分
    if (move.selfDebuff) {
      score *= 0.7;
    }

    // 反伤扣分
    if (move.recoil) {
      score *= (1 - move.recoil * 0.3);
    }

    // 回复类技能在低HP时加分
    if (move.effect === 'heal' && attacker.hp / attacker.maxHp < 0.5) {
      score += 50;
    }

    return score;
  }

  scoreStatusMove(attacker, defender, move) {
    let score = 0;

    // 强化技
    if (move.selfBuff) {
      const stage = attacker.statStages[move.selfBuff] || 0;
      if (stage < 3) {
        score += 30 + move.selfBuffStages * 15;
        // HP充足时更愿意强化
        if (attacker.hp / attacker.maxHp > 0.6) score += 20;
      }
    }

    // 回复技
    if (move.effect === 'heal') {
      const hpRatio = attacker.hp / attacker.maxHp;
      if (hpRatio < 0.5) score += 60;
      if (hpRatio < 0.3) score += 40;
      if (hpRatio > 0.8) score -= 30;
    }

    // 状态异常
    if (['burn','paralysis','poison','toxic','sleep','freeze'].includes(move.effect)) {
      if (!defender.status) {
        score += 35;
        if (move.effect === 'sleep') score += 25; // 睡眠最强
        if (move.effect === 'paralysis') score += 15; // 麻痹减速
      }
    }

    // 守住
    if (move.effect === 'protect') {
      // 在中毒/灼伤/寄生种子时使用守住消耗
      if (defender.status === 'toxic' || defender.status === 'burn' || defender.leechSeed) {
        score += 25;
      }
      // 防止连续使用
      if (attacker.protectCount > 0) score -= 30 * attacker.protectCount;
    }

    // 寄生种子
    if (move.effect === 'leech_seed' && !defender.leechSeed && !defender.types.includes('Grass')) {
      score += 30;
    }

    // 替身
    if (move.effect === 'substitute' && !attacker.substitute && attacker.hp / attacker.maxHp > 0.5) {
      score += 20;
    }

    // 命中率
    const acc = move.accuracy || 100;
    score *= (acc / 100);

    return score;
  }

  // 是否应该换人
  shouldSwitch(currentPokemon, opponentPokemon, team) {
    const effectiveness = this.getMaxEffectiveness(opponentPokemon, currentPokemon);

    // 被四倍克制时强烈建议换人
    if (effectiveness >= 4) {
      const switchTarget = this.findBestSwitch(opponentPokemon, team, currentPokemon);
      if (switchTarget) return { should:true, target:switchTarget, reason:'被四倍克制' };
    }

    // 被两倍克制且HP低于50%
    if (effectiveness >= 2 && currentPokemon.hp / currentPokemon.maxHp < 0.5) {
      const switchTarget = this.findBestSwitch(opponentPokemon, team, currentPokemon);
      if (switchTarget) return { should:true, target:switchTarget, reason:'属性不利且HP低' };
    }

    // 对方在强化时考虑换人
    if (opponentPokemon.statStages.atk >= 2 || opponentPokemon.statStages.spa >= 2) {
      const switchTarget = this.findBestSwitch(opponentPokemon, team, currentPokemon);
      if (switchTarget && switchTarget !== currentPokemon) {
        return { should:true, target:switchTarget, reason:'对方强化了' };
      }
    }

    return { should:false };
  }

  // 找到最佳换入
  findBestSwitch(opponentPokemon, team, currentPokemon) {
    let bestPoke = null;
    let bestScore = -Infinity;

    for (const poke of team) {
      if (poke.isFainted || poke === currentPokemon) continue; // 跳过濒死和当前

      const offScore = this.getMaxEffectiveness(poke, opponentPokemon) * 2;
      const defScore = this.getMaxEffectiveness(opponentPokemon, poke);
      const hpScore = poke.hp / poke.maxHp;

      const score = offScore - defScore + hpScore;
      if (score > bestScore) {
        bestScore = score;
        bestPoke = poke;
      }
    }

    return bestPoke;
  }

  // 获取最大克制倍率
  getMaxEffectiveness(attacker, defender) {
    let maxEff = 0;
    for (const move of attacker.moves) {
      if (move.category === 'Status') continue;
      const eff = getTypeEffectiveness(move.type, defender.types);
      maxEff = Math.max(maxEff, eff);
    }
    return maxEff;
  }

  // 完整的AI回合决策
  decideTurn(aiPokemon, playerPokemon, aiTeam) {
    // 先检查是否需要换人
    const switchDecision = this.shouldSwitch(aiPokemon, playerPokemon, aiTeam);
    if (switchDecision.should && switchDecision.target) {
      return {
        action:'switch',
        target:switchDecision.target,
        reason:switchDecision.reason
      };
    }

    // 选择最佳技能
    const move = this.chooseBestMove(aiPokemon, playerPokemon);
    return {
      action:'attack',
      move:move,
      reason:'选择最佳技能'
    };
  }
}
