// ============================================================
// 宝可梦对战 — 战斗引擎
// ============================================================

class Pokemon {
  constructor(data, level = 50) {
    this.data = data;
    this.name = data.name;
    this.types = data.types;
    this.ability = data.ability;
    this.level = level;
    this.sprite = data.sprite;

    // 计算实际种族值 (简化公式: 基础值 * 2 + 5)
    const bs = data.baseStats;
    this.maxHp = Math.floor((bs.hp * 2 + 110) * level / 100 + 10);
    this.hp = this.maxHp;
    this.atk = Math.floor((bs.atk * 2 + 31) * level / 100 + 5);
    this.def = Math.floor((bs.def * 2 + 31) * level / 100 + 5);
    this.spa = Math.floor((bs.spa * 2 + 31) * level / 100 + 5);
    this.spd = Math.floor((bs.spd * 2 + 31) * level / 100 + 5);
    this.spe = Math.floor((bs.spe * 2 + 31) * level / 100 + 5);

    // 原始值(用于能力变化还原)
    this.baseAtk = this.atk;
    this.baseDef = this.def;
    this.baseSpa = this.spa;
    this.baseSpd = this.spd;
    this.baseSpe = this.spe;

    // 能力变化等级 (-6 ~ +6)
    this.statStages = { atk:0, def:0, spa:0, spd:0, spe:0, acc:0, eva:0 };

    // 状态异常
    this.status = null;     // 'burn','paralysis','poison','toxic','sleep','freeze'
    this.statusTurns = 0;   // 状态持续回合
    this.sleepTurns = 0;    // 睡眠剩余回合

    // 技能 (取前4个)
    this.moves = data.moves.slice(0, 4).map(id => ({
      ...MOVES[id],
      id,
      pp: MOVES[id].pp,
      maxPp: MOVES[id].pp
    }));

    // 临时状态
    this.substitute = false;
    this.subHp = 0;
    this.protect = false;
    this.protectCount = 0;  // 连续使用守住次数(概率递减)
    this.leechSeed = false;
    this.confused = false;
    this.confuseTurns = 0;
    this.isFainted = false;
  }

  // 获取考虑能力变化后的实际数值
  getEffectiveStat(stat) {
    const base = this[stat];
    const stage = this.statStages[stat] || 0;
    const mult = stage >= 0 ? (2 + stage) / 2 : 2 / (2 - stage);
    let val = Math.floor(base * mult);

    // 灼伤减物攻
    if (stat === 'atk' && this.status === 'burn') val = Math.floor(val * 0.5);
    // 麻痹减速
    if (stat === 'spe' && this.status === 'paralysis') val = Math.floor(val * 0.5);

    return Math.max(1, val);
  }

  // 改变能力等级
  changeStatStage(stat, stages) {
    const old = this.statStages[stat] || 0;
    this.statStages[stat] = Math.max(-6, Math.min(6, old + stages));
    return this.statStages[stat] - old;
  }

  // 回复HP
  heal(amount) {
    const old = this.hp;
    this.hp = Math.min(this.maxHp, this.hp + amount);
    return this.hp - old;
  }

  // 受到伤害
  takeDamage(amount) {
    const actual = Math.min(this.hp, amount);
    this.hp -= actual;
    if (this.hp <= 0) {
      this.hp = 0;
      this.isFainted = true;
    }
    return actual;
  }
}

// ============================================================
// 战斗引擎
// ============================================================
class BattleEngine {
  constructor() {
    this.log = [];
  }

  addLog(msg) {
    this.log.push(msg);
  }

  clearLog() {
    this.log = [];
  }

  // 计算伤害
  calcDamage(attacker, defender, move) {
    if (move.category === 'Status') return 0;

    const level = attacker.level;
    const power = move.power;

    // 攻防数值
    let atkStat, defStat;
    if (move.category === 'Physical') {
      atkStat = attacker.getEffectiveStat('atk');
      defStat = defender.getEffectiveStat('def');
    } else {
      atkStat = attacker.getEffectiveStat('spa');
      // 精神冲击用特攻打防御
      defStat = move.targetDef ? defender.getEffectiveStat('def') : defender.getEffectiveStat('spd');
    }

    // 基础伤害
    let damage = ((2 * level / 5 + 2) * power * atkStat / defStat) / 50 + 2;

    // STAB
    const stab = attacker.types.includes(move.type) ? 1.5 : 1.0;
    damage *= stab;

    // 属性克制
    const effectiveness = getTypeEffectiveness(move.type, defender.types);
    damage *= effectiveness;

    // 会心一击 (1/16 基础概率, 有critRate加成时 1/8)
    const critChance = move.critRate ? 1/8 : 1/16;
    const isCrit = Math.random() < critChance;
    if (isCrit) damage *= 1.5;

    // 随机因子 0.85-1.00
    damage *= (0.85 + Math.random() * 0.15);

    // 双倍伤害(多人目标，此处单人跳过)

    return {
      damage: Math.max(1, Math.floor(damage)),
      effectiveness,
      isCrit,
      stab: stab > 1
    };
  }

  // 执行一个技能
  executeMove(attacker, defender, move) {
    const messages = [];

    // PP减少
    if (move.pp > 0) move.pp--;

    // 变化技处理
    if (move.category === 'Status') {
      return this.executeStatusMove(attacker, defender, move, messages);
    }

    // 守住检测 (仅对攻击技生效)
    if (defender.protect) {
      messages.push(`${attacker.name} 使用了 ${move.name}！`);
      messages.push(`${defender.name} 守住了攻击！`);
      return { messages, attacker, defender, damage:0 };
    }

    // 命中判定
    const accuracy = move.accuracy || 100;
    if (Math.random() * 100 >= accuracy) {
      messages.push(`${attacker.name} 使用了 ${move.name}！但是没有命中！`);
      return { messages, attacker, defender, damage:0 };
    }

    // 计算伤害
    const result = this.calcDamage(attacker, defender, move);
    let damage = result.damage;

    // 伤害结算
    let actualDamage = 0;
    if (attacker.substitute && move.category !== 'Status') {
      // 打到替身上
      attacker.subHp -= damage;
      if (attacker.subHp <= 0) {
        attacker.substitute = false;
        attacker.subHp = 0;
        messages.push(`${attacker.name} 的替身消失了！`);
      }
    } else {
      actualDamage = defender.takeDamage(damage);
    }

    // 消息
    messages.push(`${attacker.name} 使用了 ${move.name}！`);
    if (result.stab) messages.push(`本系加成！`);
    if (result.effectiveness > 1) messages.push(`效果绝佳！`);
    else if (result.effectiveness > 0 && result.effectiveness < 1) messages.push(`效果不太好...`);
    else if (result.effectiveness === 0) messages.push(`对 ${defender.name} 没有效果！`);
    if (result.isCrit) messages.push(`会心一击！`);
    if (actualDamage > 0) messages.push(`${defender.name} 受到了 ${actualDamage} 点伤害！`);

    // 附加效果
    if (move.effect && defender.hp > 0 && !defender.isFainted) {
      const effectChance = move.effectChance || 100;
      if (Math.random() * 100 < effectChance) {
        const effectMsg = this.applyEffect(move.effect, attacker, defender, move);
        if (effectMsg) messages.push(...effectMsg);
      }
    }

    // 反伤
    if (move.recoil && actualDamage > 0) {
      const recoilDmg = Math.max(1, Math.floor(actualDamage * move.recoil));
      attacker.takeDamage(recoilDmg);
      messages.push(`${attacker.name} 因为反冲受到了 ${recoilDmg} 点伤害！`);
    }

    // 自身能力下降
    if (move.selfDebuff && move.selfDebuffStages) {
      const s = attacker.changeStatStage(move.selfDebuff, -move.selfDebuffStages);
      if (s !== 0) messages.push(`${attacker.name} 的 ${this.statName(move.selfDebuff)} 降低了！`);
    }

    return { messages, attacker, defender, damage: actualDamage, effectiveness: result.effectiveness };
  }

  // 执行变化技
  executeStatusMove(attacker, defender, move, messages) {
    // 守住检测 (守住本身不受影响)
    if (defender.protect && move.effect !== 'protect') {
      messages.push(`${attacker.name} 使用了 ${move.name}！`);
      messages.push(`${defender.name} 守住了攻击！`);
      return { messages, attacker, defender, damage:0 };
    }

    // 命中判定
    const accuracy = move.accuracy || 100;
    if (accuracy < 100 && Math.random() * 100 >= accuracy) {
      messages.push(`${attacker.name} 使用了 ${move.name}！但是没有命中！`);
      return { messages, attacker, defender, damage:0 };
    }

    messages.push(`${attacker.name} 使用了 ${move.name}！`);

    // 自身强化
    if (move.selfBuff && move.selfBuffStages) {
      const s = attacker.changeStatStage(move.selfBuff, move.selfBuffStages);
      if (s > 0) messages.push(`${attacker.name} 的 ${this.statName(move.selfBuff)} 大幅提升了！`);
      else messages.push(`${attacker.name} 的 ${this.statName(move.selfBuff)} 已经无法再提升了！`);
    }
    if (move.selfBuff2 && move.selfBuffStages2) {
      const s = attacker.changeStatStage(move.selfBuff2, move.selfBuffStages2);
      if (s > 0) messages.push(`${attacker.name} 的 ${this.statName(move.selfBuff2)} 提升了！`);
    }

    // 回复
    if (move.effect === 'heal') {
      const healAmt = Math.floor(attacker.maxHp * move.healPercent);
      const healed = attacker.heal(healAmt);
      messages.push(`${attacker.name} 回复了 ${healed} 点HP！`);
    }

    // 状态异常
    if (move.effect === 'burn' && !defender.status) {
      defender.status = 'burn';
      messages.push(`${defender.name} 被灼伤了！`);
    }
    if (move.effect === 'paralysis' && !defender.status) {
      defender.status = 'paralysis';
      messages.push(`${defender.name} 被麻痹了！`);
    }
    if (move.effect === 'poison' && !defender.status) {
      defender.status = 'poison';
      messages.push(`${defender.name} 中毒了！`);
    }
    if (move.effect === 'toxic' && !defender.status) {
      defender.status = 'toxic';
      defender.statusTurns = 0;
      messages.push(`${defender.name} 中了剧毒！`);
    }
    if (move.effect === 'sleep' && !defender.status) {
      defender.status = 'sleep';
      defender.sleepTurns = 2 + Math.floor(Math.random() * 2);
      messages.push(`${defender.name} 睡着了！`);
    }
    if (move.effect === 'freeze' && !defender.status) {
      defender.status = 'freeze';
      messages.push(`${defender.name} 被冰冻了！`);
    }

    // 电磁波
    if (move.effect === 'paralysis' && move.category === 'Status' && !defender.status) {
      // 已在上面处理
    }

    // 鬼火
    if (move.id === 'will_o_wisp' && !defender.status) {
      defender.status = 'burn';
      messages.push(`${defender.name} 被灼伤了！`);
    }

    // 寄生种子
    if (move.effect === 'leech_seed') {
      if (defender.types.includes('Grass')) {
        messages.push(`对 ${defender.name} 没有效果！`);
      } else {
        defender.leechSeed = true;
        messages.push(`${defender.name} 被种下了寄生种子！`);
      }
    }

    // 替身
    if (move.effect === 'substitute') {
      const cost = Math.floor(attacker.maxHp / 4);
      if (attacker.hp > cost) {
        attacker.takeDamage(cost);
        attacker.substitute = true;
        attacker.subHp = Math.floor(attacker.maxHp / 4);
        messages.push(`${attacker.name} 制造了一个替身！`);
      } else {
        messages.push(`${attacker.name} 的HP不够制造替身！`);
      }
    }

    // 守住
    if (move.effect === 'protect') {
      const success = attacker.protectCount === 0 ? true : Math.random() < Math.pow(0.5, attacker.protectCount);
      if (success) {
        attacker.protect = true;
        attacker.protectCount++;
        messages.push(`${attacker.name} 守住了攻击！`);
      } else {
        messages.push(`${attacker.name} 守住失败了！`);
        attacker.protectCount = 0;
      }
    }

    return { messages, attacker, defender, damage:0 };
  }

  applyEffect(effect, attacker, defender, move) {
    const msgs = [];
    switch(effect) {
      case 'burn':
        if (!defender.status) { defender.status = 'burn'; msgs.push(`${defender.name} 被灼伤了！`); }
        break;
      case 'paralysis':
        if (!defender.status) { defender.status = 'paralysis'; msgs.push(`${defender.name} 被麻痹了！`); }
        break;
      case 'poison':
        if (!defender.status) { defender.status = 'poison'; msgs.push(`${defender.name} 中毒了！`); }
        break;
      case 'freeze':
        if (!defender.status) { defender.status = 'freeze'; msgs.push(`${defender.name} 被冰冻了！`); }
        break;
      case 'flinch':
        // 仅当对方先手且本回合受到攻击时生效，简化处理
        break;
      case 'confusion':
        if (!defender.confused) {
          defender.confused = true;
          defender.confuseTurns = 2 + Math.floor(Math.random() * 3);
          msgs.push(`${defender.name} 混乱了！`);
        }
        break;
      case 'confusion_self':
        if (!attacker.confused) {
          attacker.confused = true;
          attacker.confuseTurns = move.effectDuration || 2;
        }
        break;
      case 'spd_debuff':
        if (Math.random() * 100 < (move.effectChance || 30)) {
          defender.changeStatStage('spd', -1);
          msgs.push(`${defender.name} 的特防降低了！`);
        }
        break;
      case 'def_debuff':
        if (Math.random() * 100 < (move.effectChance || 20)) {
          defender.changeStatStage('def', -1);
          msgs.push(`${defender.name} 的防御降低了！`);
        }
        break;
      case 'spa_debuff':
        if (Math.random() * 100 < (move.effectChance || 30)) {
          defender.changeStatStage('spa', -1);
          msgs.push(`${defender.name} 的特攻降低了！`);
        }
        break;
      case 'atk_debuff':
        if (Math.random() * 100 < (move.effectChance || 10)) {
          defender.changeStatStage('atk', -1);
          msgs.push(`${defender.name} 的攻击降低了！`);
        }
        break;
      case 'atk_buff':
        if (Math.random() * 100 < (move.effectChance || 20)) {
          attacker.changeStatStage('atk', 1);
          msgs.push(`${attacker.name} 的攻击提升了！`);
        }
        break;
      case 'switch_user':
        msgs.push(`${attacker.name} 返回了！`);
        break;
    }
    return msgs;
  }

  // 处理回合结束效果
  processEndOfTurn(pokemon) {
    const msgs = [];
    if (pokemon.isFainted) return msgs;

    // 灼伤伤害
    if (pokemon.status === 'burn') {
      const dmg = Math.max(1, Math.floor(pokemon.maxHp / 16));
      pokemon.takeDamage(dmg);
      msgs.push(`${pokemon.name} 因为灼伤受到了 ${dmg} 点伤害！`);
    }

    // 中毒伤害
    if (pokemon.status === 'poison') {
      const dmg = Math.max(1, Math.floor(pokemon.maxHp / 8));
      pokemon.takeDamage(dmg);
      msgs.push(`${pokemon.name} 因为中毒受到了 ${dmg} 点伤害！`);
    }

    // 剧毒伤害 (递增)
    if (pokemon.status === 'toxic') {
      pokemon.statusTurns++;
      const dmg = Math.max(1, Math.floor(pokemon.maxHp * pokemon.statusTurns / 16));
      pokemon.takeDamage(dmg);
      msgs.push(`${pokemon.name} 因为剧毒受到了 ${dmg} 点伤害！`);
    }

    // 寄生种子
    if (pokemon.leechSeed) {
      const dmg = Math.max(1, Math.floor(pokemon.maxHp / 8));
      pokemon.takeDamage(dmg);
      msgs.push(`${pokemon.name} 的体力被寄生种子吸取了！`);
    }

    // 检查濒死
    if (pokemon.isFainted) {
      msgs.push(`${pokemon.name} 倒下了！`);
    }

    return msgs;
  }

  // 处理回合开始效果
  processStartOfTurn(pokemon) {
    const msgs = [];
    if (pokemon.isFainted) return msgs;

    // 重置守住
    pokemon.protect = false;

    // 睡眠
    if (pokemon.status === 'sleep') {
      pokemon.sleepTurns--;
      if (pokemon.sleepTurns <= 0) {
        pokemon.status = null;
        msgs.push(`${pokemon.name} 醒来了！`);
      } else {
        msgs.push(`${pokemon.name} 还在睡觉...`);
      }
    }

    // 冰冻
    if (pokemon.status === 'freeze') {
      if (Math.random() < 0.2) {
        pokemon.status = null;
        msgs.push(`${pokemon.name} 解冻了！`);
      } else {
        msgs.push(`${pokemon.name} 被冻住了！`);
      }
    }

    // 混乱
    if (pokemon.confused) {
      pokemon.confuseTurns--;
      if (pokemon.confuseTurns <= 0) {
        pokemon.confused = false;
        msgs.push(`${pokemon.name} 从混乱中恢复了！`);
      }
    }

    return msgs;
  }

  // 检查是否能行动
  canAct(pokemon) {
    if (pokemon.isFainted) return { can:false, reason:'fainted' };
    if (pokemon.status === 'sleep') return { can:false, reason:'sleep' };
    if (pokemon.status === 'freeze') return { can:false, reason:'freeze' };
    if (pokemon.status === 'paralysis' && Math.random() < 0.25) {
      return { can:false, reason:'paralysis' };
    }
    if (pokemon.confused && Math.random() < 0.33) {
      return { can:false, reason:'confusion', selfHit:true };
    }
    return { can:true };
  }

  statName(stat) {
    const names = { atk:'攻击', def:'防御', spa:'特攻', spd:'特防', spe:'速度', acc:'命中', eva:'回避' };
    return names[stat] || stat;
  }
}
