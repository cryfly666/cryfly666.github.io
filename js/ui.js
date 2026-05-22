// ============================================================
// 宝可梦对战 — 界面 & 游戏主逻辑
// ============================================================

class PokemonGame {
  constructor() {
    this.engine = new BattleEngine();
    this.ai = new BattleAI(this.engine);

    this.playerTeam = [];
    this.aiTeam = [];
    this.playerActive = null;
    this.aiActive = null;

    this.phase = 'select'; // 'select' | 'battle' | 'gameover'
    this.turnInProgress = false;
    this.selectedCount = 0;

    this.init();
  }

  init() {
    this.renderSelectScreen();
  }

  // ============================================================
  // 选队界面
  // ============================================================
  renderSelectScreen() {
    const app = document.getElementById('app');
    this.allPokemonKeys = Object.keys(POKEMON_DATA).filter(k => !AI_TEAM_KEYS.includes(k));
    this.activeTypeFilter = null;

    // 构建属性筛选按钮
    const typeButtonsHtml = TYPES.map(t =>
      `<button class="type-filter-btn" data-type="${t}" style="background:${TYPE_COLORS[t]}">${t}</button>`
    ).join('');

    app.innerHTML = `
      <div class="select-screen">
        <h1 class="title">选择你的队伍</h1>
        <p class="subtitle">从 151 只宝可梦中选择 6 只来挑战冠军！</p>
        <div class="select-controls">
          <input type="text" id="searchInput" class="search-input" placeholder="搜索宝可梦名称...">
          <div class="select-counter" id="selectCounter">已选择: 0 / 6</div>
        </div>
        <div class="type-filters" id="typeFilters">${typeButtonsHtml}</div>
        <div class="selected-preview" id="selectedPreview"></div>
        <div class="pokemon-grid" id="pokemonGrid"></div>
        <button class="btn-start" id="btnStart" disabled>开始对战</button>
      </div>
    `;

    // 渲染卡片
    this.renderPokemonGrid();

    // 搜索
    document.getElementById('searchInput').addEventListener('input', (e) => {
      this.renderPokemonGrid();
    });

    // 属性筛选
    document.getElementById('typeFilters').addEventListener('click', (e) => {
      const btn = e.target.closest('.type-filter-btn');
      if (!btn) return;
      const type = btn.dataset.type;
      if (this.activeTypeFilter === type) {
        this.activeTypeFilter = null;
        btn.classList.remove('active');
      } else {
        document.querySelectorAll('.type-filter-btn').forEach(b => b.classList.remove('active'));
        this.activeTypeFilter = type;
        btn.classList.add('active');
      }
      this.renderPokemonGrid();
    });

    document.getElementById('btnStart').addEventListener('click', () => this.startBattle());
  }

  renderPokemonGrid() {
    const grid = document.getElementById('pokemonGrid');
    const search = (document.getElementById('searchInput')?.value || '').toLowerCase();

    let filtered = this.allPokemonKeys;
    if (search) {
      filtered = filtered.filter(k => {
        const d = POKEMON_DATA[k];
        return d.name.includes(search) || k.includes(search) || String(d.id).includes(search);
      });
    }
    if (this.activeTypeFilter) {
      filtered = filtered.filter(k => POKEMON_DATA[k].types.includes(this.activeTypeFilter));
    }

    grid.innerHTML = '';
    filtered.forEach(key => {
      const data = POKEMON_DATA[key];
      const card = document.createElement('div');
      card.className = 'pokemon-card';
      card.dataset.key = key;
      if (this.playerTeam.includes(key)) card.classList.add('selected');

      const spriteUrl = this.getSpriteUrl(data.sprite);
      const typeHtml = data.types.map(t =>
        `<span class="type-badge" style="background:${TYPE_COLORS[t]}">${t}</span>`
      ).join('');

      card.innerHTML = `
        <div class="card-sprite">
          <img src="${spriteUrl}" alt="${data.name}" loading="lazy" onerror="this.style.display='none'">
        </div>
        <div class="card-name">${data.name}</div>
        <div class="card-types">${typeHtml}</div>
        <div class="card-stats">
          <span>HP:${data.baseStats.hp}</span>
          <span>攻:${data.baseStats.atk}</span>
          <span>防:${data.baseStats.def}</span>
          <span>速:${data.baseStats.spe}</span>
        </div>
      `;

      card.addEventListener('click', () => this.togglePokemon(key, card));
      grid.appendChild(card);
    });

    this.updateSelectedPreview();
  }

  updateSelectedPreview() {
    const preview = document.getElementById('selectedPreview');
    if (!preview) return;
    if (this.playerTeam.length === 0) {
      preview.innerHTML = '<span class="preview-hint">点击宝可梦卡片选择</span>';
      return;
    }
    preview.innerHTML = this.playerTeam.map(key => {
      const d = POKEMON_DATA[key];
      return `<div class="preview-poke" data-key="${key}">
        <img src="${this.getSpriteUrl(d.sprite)}" onerror="this.style.display='none'">
        <span>${d.name}</span>
        <button class="preview-remove" onclick="event.stopPropagation();window.game.removePokemon('${key}')">x</button>
      </div>`;
    }).join('');
  }

  removePokemon(key) {
    this.playerTeam = this.playerTeam.filter(k => k !== key);
    this.selectedCount = this.playerTeam.length;
    document.getElementById('selectCounter').textContent = `已选择: ${this.selectedCount} / 6`;
    document.getElementById('btnStart').disabled = this.selectedCount < 6;
    // 更新卡片状态
    document.querySelectorAll(`.pokemon-card[data-key="${key}"]`).forEach(c => c.classList.remove('selected'));
    this.updateSelectedPreview();
  }

  togglePokemon(key, card) {
    if (card.classList.contains('selected')) {
      card.classList.remove('selected');
      this.selectedCount--;
      this.playerTeam = this.playerTeam.filter(k => k !== key);
    } else {
      if (this.selectedCount >= 6) return;
      card.classList.add('selected');
      this.selectedCount++;
      this.playerTeam.push(key);
    }

    document.getElementById('selectCounter').textContent = `已选择: ${this.selectedCount} / 6`;
    document.getElementById('btnStart').disabled = this.selectedCount < 6;
    this.updateSelectedPreview();
  }

  // ============================================================
  // 开始战斗
  // ============================================================
  startBattle() {
    // 创建玩家队伍
    this.playerTeam = this.playerTeam.map(key => new Pokemon(POKEMON_DATA[key]));
    // 创建AI队伍
    this.aiTeam = AI_TEAM_KEYS.map(key => new Pokemon(POKEMON_DATA[key]));

    this.playerActive = this.playerTeam[0];
    this.aiActive = this.aiTeam[0];

    this.phase = 'battle';
    this.renderBattleScreen();
    this.updateBattleUI();
    this.addBattleLog(`对战开始！对手派出了 ${this.aiActive.name}！`);
    this.addBattleLog(`去吧！${this.playerActive.name}！`);
  }

  // ============================================================
  // 战斗界面
  // ============================================================
  renderBattleScreen() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="battle-screen">
        <!-- 对手区域 -->
        <div class="battle-field">
          <div class="pokemon-side opponent-side">
            <div class="pokemon-info opponent-info">
              <div class="pokemon-name-bar">
                <span class="poke-name" id="aiName"></span>
                <span class="poke-level">Lv.50</span>
              </div>
              <div class="hp-bar-container">
                <div class="hp-bar" id="aiHpBar"><div class="hp-fill" id="aiHpFill"></div></div>
                <span class="hp-text" id="aiHpText"></span>
              </div>
              <div class="status-icons" id="aiStatus"></div>
            </div>
            <div class="pokemon-sprite opponent-sprite" id="aiSprite"></div>
          </div>

          <!-- 我方区域 -->
          <div class="pokemon-side player-side">
            <div class="pokemon-sprite player-sprite" id="playerSprite"></div>
            <div class="pokemon-info player-info">
              <div class="pokemon-name-bar">
                <span class="poke-name" id="playerName"></span>
                <span class="poke-level">Lv.50</span>
              </div>
              <div class="hp-bar-container">
                <div class="hp-bar" id="playerHpBar"><div class="hp-fill" id="playerHpFill"></div></div>
                <span class="hp-text" id="playerHpText"></span>
              </div>
              <div class="status-icons" id="playerStatus"></div>
            </div>
          </div>
        </div>

        <!-- 操作区域 -->
        <div class="action-panel" id="actionPanel">
          <div class="battle-log" id="battleLog"></div>
          <div class="action-buttons" id="actionButtons">
            <div class="move-buttons" id="moveButtons"></div>
            <div class="side-buttons">
              <button class="btn-action btn-switch" id="btnSwitch">换人</button>
              <button class="btn-action btn-fight" id="btnFight">战斗</button>
            </div>
          </div>
        </div>

        <!-- 换人面板 -->
        <div class="switch-panel hidden" id="switchPanel">
          <h3>选择要换上的宝可梦</h3>
          <div class="switch-list" id="switchList"></div>
          <button class="btn-action btn-back" id="btnBack">返回</button>
        </div>

        <!-- 队伍HP指示器 -->
        <div class="team-hp-indicator player-team-hp" id="playerTeamHp"></div>
        <div class="team-hp-indicator ai-team-hp" id="aiTeamHp"></div>
      </div>
    `;

    // 绑定事件
    document.getElementById('btnFight').addEventListener('click', () => this.showMoveButtons());
    document.getElementById('btnSwitch').addEventListener('click', () => this.showSwitchPanel());
    document.getElementById('btnBack').addEventListener('click', () => this.hideSwitchPanel());
  }

  updateBattleUI() {
    if (!this.playerActive || !this.aiActive) return;

    const p = this.playerActive;
    const a = this.aiActive;

    // 名字
    document.getElementById('playerName').textContent = p.name;
    document.getElementById('aiName').textContent = a.name;

    // HP条
    const pHpPct = Math.max(0, p.hp / p.maxHp * 100);
    const aHpPct = Math.max(0, a.hp / a.maxHp * 100);
    document.getElementById('playerHpFill').style.width = pHpPct + '%';
    document.getElementById('aiHpFill').style.width = aHpPct + '%';

    // HP条颜色
    this.setHpBarColor('playerHpFill', pHpPct);
    this.setHpBarColor('aiHpFill', aHpPct);

    // HP文字
    document.getElementById('playerHpText').textContent = `${p.hp} / ${p.maxHp}`;
    document.getElementById('aiHpText').textContent = `${a.hp} / ${a.maxHp}`;

    // 精灵图
    document.getElementById('playerSprite').innerHTML = `<img src="${this.getSpriteBack(p.sprite)}" alt="${p.name}">`;
    document.getElementById('aiSprite').innerHTML = `<img src="${this.getSpriteUrl(a.sprite)}" alt="${a.name}">`;

    // 状态图标
    document.getElementById('playerStatus').innerHTML = this.getStatusHtml(p);
    document.getElementById('aiStatus').innerHTML = this.getStatusHtml(a);

    // 技能按钮
    this.renderMoveButtons();

    // 队伍HP
    this.renderTeamHp();
  }

  setHpBarColor(id, pct) {
    const el = document.getElementById(id);
    if (pct > 50) el.style.background = '#4CAF50';
    else if (pct > 20) el.style.background = '#FF9800';
    else el.style.background = '#F44336';
  }

  getStatusHtml(pokemon) {
    if (!pokemon.status) return '';
    const statusMap = {
      burn: { text:'灼伤', color:'#F08030' },
      paralysis: { text:'麻痹', color:'#F8D030' },
      poison: { text:'中毒', color:'#A040A0' },
      toxic: { text:'剧毒', color:'#A040A0' },
      sleep: { text:'睡眠', color:'#888' },
      freeze: { text:'冰冻', color:'#98D8D8' }
    };
    const s = statusMap[pokemon.status];
    if (!s) return '';
    return `<span class="status-tag" style="background:${s.color}">${s.text}</span>`;
  }

  renderMoveButtons() {
    const container = document.getElementById('moveButtons');
    if (!container) return;
    container.innerHTML = '';

    this.playerActive.moves.forEach((move, i) => {
      const btn = document.createElement('button');
      btn.className = 'btn-move';
      btn.style.background = move.category === 'Status' ? STATUS_COLOR : (TYPE_COLORS[move.type] || '#666');
      btn.disabled = move.pp <= 0 || this.turnInProgress;

      const ppText = `PP ${move.pp}/${move.maxPp}`;
      btn.innerHTML = `
        <span class="move-name">${move.name}</span>
        <span class="move-info">
          <span class="move-type" style="background:${TYPE_COLORS[move.type] || STATUS_COLOR}">${move.type}</span>
          <span class="move-pp">${ppText}</span>
          ${move.power ? `<span class="move-power">威力 ${move.power}</span>` : '<span class="move-power">变化</span>'}
        </span>
      `;

      btn.addEventListener('click', () => this.playerAttack(move));
      container.appendChild(btn);
    });
  }

  showMoveButtons() {
    document.getElementById('moveButtons').style.display = 'grid';
    document.getElementById('switchPanel').classList.add('hidden');
  }

  showSwitchPanel() {
    if (this.turnInProgress) return;
    const panel = document.getElementById('switchPanel');
    const list = document.getElementById('switchList');
    list.innerHTML = '';

    this.playerTeam.forEach((poke, i) => {
      const item = document.createElement('div');
      item.className = 'switch-item';
      if (poke.isFainted) item.classList.add('fainted');
      if (poke === this.playerActive) item.classList.add('active');

      const hpPct = Math.max(0, poke.hp / poke.maxHp * 100);
      const spriteUrl = this.getSpriteUrl(poke.sprite);
      const typeHtml = poke.types.map(t =>
        `<span class="type-badge-sm" style="background:${TYPE_COLORS[t]}">${t}</span>`
      ).join('');

      item.innerHTML = `
        <img src="${spriteUrl}" class="switch-sprite" onerror="this.style.display='none'">
        <div class="switch-info">
          <div class="switch-name">${poke.name} ${poke === this.playerActive ? '(当前)' : ''}</div>
          <div class="switch-types">${typeHtml}</div>
          <div class="switch-hp-bar">
            <div class="switch-hp-fill" style="width:${hpPct}%;background:${hpPct > 50 ? '#4CAF50' : hpPct > 20 ? '#FF9800' : '#F44336'}"></div>
          </div>
          <div class="switch-hp-text">${poke.hp}/${poke.maxHp}</div>
        </div>
      `;

      if (!poke.isFainted && poke !== this.playerActive) {
        item.addEventListener('click', () => this.playerSwitch(i));
      }

      list.appendChild(item);
    });

    panel.classList.remove('hidden');
    document.getElementById('moveButtons').style.display = 'none';
  }

  hideSwitchPanel() {
    document.getElementById('switchPanel').classList.add('hidden');
    document.getElementById('moveButtons').style.display = 'grid';
  }

  renderTeamHp() {
    const render = (team, containerId) => {
      const container = document.getElementById(containerId);
      if (!container) return;
      container.innerHTML = team.map(p => {
        const pct = Math.max(0, p.hp / p.maxHp * 100);
        const color = p.isFainted ? '#555' : pct > 50 ? '#4CAF50' : pct > 20 ? '#FF9800' : '#F44336';
        return `<div class="team-hp-dot" style="background:${color}" title="${p.name}: ${p.hp}/${p.maxHp}"></div>`;
      }).join('');
    };
    render(this.playerTeam, 'playerTeamHp');
    render(this.aiTeam, 'aiTeamHp');
  }

  addBattleLog(msg) {
    const log = document.getElementById('battleLog');
    if (!log) return;
    const p = document.createElement('p');
    p.className = 'log-entry';
    p.textContent = msg;
    log.appendChild(p);
    log.scrollTop = log.scrollHeight;
  }

  clearBattleLog() {
    const log = document.getElementById('battleLog');
    if (log) log.innerHTML = '';
  }

  getSpriteUrl(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`;
  }

  getSpriteBack(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/${id}.gif`;
  }

  // ============================================================
  // 战斗回合处理
  // ============================================================
  async playerAttack(move) {
    if (this.turnInProgress) return;
    this.turnInProgress = true;
    this.disableActions();

    // AI决策
    const aiDecision = this.ai.decideTurn(this.aiActive, this.playerActive, this.aiTeam);

    // 处理AI换人
    if (aiDecision.action === 'switch') {
      await this.executeAISwitch(aiDecision.target, aiDecision.reason);
    }

    // 判断先手
    const playerPriority = move.priority || 0;
    const aiPriority = aiDecision.action === 'attack' ? (aiDecision.move.priority || 0) : 0;
    const playerFirst = playerPriority > aiPriority ? true :
                        playerPriority < aiPriority ? false :
                        this.playerActive.getEffectiveStat('spe') >= this.aiActive.getEffectiveStat('spe');

    // 执行回合
    if (playerFirst) {
      await this.executePlayerTurn(move);
      if (!this.aiActive.isFainted && !this.playerActive.isFainted) {
        await this.executeAITurn(aiDecision);
      }
    } else {
      await this.executeAITurn(aiDecision);
      if (!this.playerActive.isFainted && !this.aiActive.isFainted) {
        await this.executePlayerTurn(move);
      }
    }

    // 回合结束效果
    await this.processEndOfTurn();

    // 检查胜负
    if (this.checkGameEnd()) return;

    // 检查是否需要强制换人
    await this.checkForceSwitch();

    this.turnInProgress = false;
    this.enableActions();
    this.updateBattleUI();
  }

  async playerSwitch(index) {
    if (this.turnInProgress) return;
    const target = this.playerTeam[index];
    if (target.isFainted || target === this.playerActive) return;

    this.turnInProgress = true;
    this.disableActions();

    // 换人
    this.playerActive = target;
    this.addBattleLog(`回来吧！`);
    await this.delay(500);
    this.addBattleLog(`去吧！${target.name}！`);
    this.hideSwitchPanel();
    this.updateBattleUI();

    // AI回合（换人后AI仍然行动）
    const aiDecision = this.ai.decideTurn(this.aiActive, this.playerActive, this.aiTeam);
    await this.executeAITurn(aiDecision);

    // 回合结束效果
    await this.processEndOfTurn();

    if (this.checkGameEnd()) return;
    await this.checkForceSwitch();

    this.turnInProgress = false;
    this.enableActions();
    this.updateBattleUI();
  }

  async executePlayerTurn(move) {
    this.clearBattleLog();

    // 检查是否能行动
    const actCheck = this.engine.canAct(this.playerActive);
    if (!actCheck.can) {
      if (actCheck.reason === 'sleep') {
        this.addBattleLog(`${this.playerActive.name} 还在睡觉...`);
      } else if (actCheck.reason === 'freeze') {
        this.addBattleLog(`${this.playerActive.name} 被冻住了！`);
      } else if (actCheck.reason === 'paralysis') {
        this.addBattleLog(`${this.playerActive.name} 因为麻痹无法行动！`);
      }
      await this.delay(1000);
      return;
    }

    // 混乱自伤
    if (actCheck.reason === 'confusion') {
      this.addBattleLog(`${this.playerActive.name} 在混乱中攻击了自己！`);
      const selfDmg = Math.max(1, Math.floor(this.playerActive.maxHp / 8));
      this.playerActive.takeDamage(selfDmg);
      this.updateBattleUI();
      await this.delay(1000);
      return;
    }

    const result = this.engine.executeMove(this.playerActive, this.aiActive, move);
    for (const msg of result.messages) {
      this.addBattleLog(msg);
      await this.delay(600);
    }

    this.updateBattleUI();

    // 闪白动画
    if (result.damage > 0) {
      this.flashSprite('aiSprite');
    }
  }

  async executeAITurn(decision) {
    if (this.aiActive.isFainted) return;

    // 检查是否能行动
    const actCheck = this.engine.canAct(this.aiActive);
    if (!actCheck.can) {
      if (actCheck.reason === 'sleep') {
        this.addBattleLog(`${this.aiActive.name} 还在睡觉...`);
      } else if (actCheck.reason === 'freeze') {
        this.addBattleLog(`${this.aiActive.name} 被冻住了！`);
      } else if (actCheck.reason === 'paralysis') {
        this.addBattleLog(`${this.aiActive.name} 因为麻痹无法行动！`);
      }
      await this.delay(1000);
      return;
    }

    if (actCheck.reason === 'confusion') {
      this.addBattleLog(`${this.aiActive.name} 在混乱中攻击了自己！`);
      const selfDmg = Math.max(1, Math.floor(this.aiActive.maxHp / 8));
      this.aiActive.takeDamage(selfDmg);
      this.updateBattleUI();
      await this.delay(1000);
      return;
    }

    if (decision.action === 'attack') {
      const move = decision.move;
      const result = this.engine.executeMove(this.aiActive, this.playerActive, move);
      for (const msg of result.messages) {
        this.addBattleLog(msg);
        await this.delay(600);
      }

      this.updateBattleUI();

      if (result.damage > 0) {
        this.flashSprite('playerSprite');
      }
    }
  }

  async executeAISwitch(target, reason) {
    this.addBattleLog(`对手收回了 ${this.aiActive.name}！`);
    await this.delay(600);
    this.aiActive = target;
    this.addBattleLog(`对手派出了 ${target.name}！${reason ? `(${reason})` : ''}`);
    this.updateBattleUI();
    await this.delay(600);
  }

  async processEndOfTurn() {
    // 玩家回合结束效果
    const pMsgs = this.engine.processEndOfTurn(this.playerActive);
    for (const msg of pMsgs) {
      this.addBattleLog(msg);
      await this.delay(500);
    }

    // AI回合结束效果
    const aMsgs = this.engine.processEndOfTurn(this.aiActive);
    for (const msg of aMsgs) {
      this.addBattleLog(msg);
      await this.delay(500);
    }

    // 寄生种子回复
    if (this.playerActive.leechSeed && !this.playerActive.isFainted) {
      const heal = Math.max(1, Math.floor(this.playerActive.maxHp / 8));
      this.aiActive.heal(heal);
    }
    if (this.aiActive.leechSeed && !this.aiActive.isFainted) {
      const heal = Math.max(1, Math.floor(this.aiActive.maxHp / 8));
      this.playerActive.heal(heal);
    }

    this.updateBattleUI();
  }

  checkGameEnd() {
    const playerAlive = this.playerTeam.some(p => !p.isFainted);
    const aiAlive = this.aiTeam.some(p => !p.isFainted);

    if (!aiAlive) {
      this.addBattleLog(`你赢了！恭喜成为新的冠军！`);
      this.showGameOver(true);
      return true;
    }
    if (!playerAlive) {
      this.addBattleLog(`你输了！再接再厉！`);
      this.showGameOver(false);
      return true;
    }
    return false;
  }

  async checkForceSwitch() {
    // 玩家宝可梦倒下，强制换人
    if (this.playerActive.isFainted) {
      const alive = this.playerTeam.findIndex(p => !p.isFainted);
      if (alive >= 0) {
        await this.delay(500);
        this.playerActive = this.playerTeam[alive];
        this.addBattleLog(`去吧！${this.playerActive.name}！`);
        this.updateBattleUI();
      }
    }

    // AI宝可梦倒下，自动换人
    if (this.aiActive.isFainted) {
      const alive = this.aiTeam.find(p => !p.isFainted);
      if (alive) {
        await this.delay(500);
        this.aiActive = alive;
        this.addBattleLog(`对手派出了 ${alive.name}！`);
        this.updateBattleUI();
      }
    }
  }

  showGameOver(won) {
    const app = document.getElementById('app');
    const overlay = document.createElement('div');
    overlay.className = 'game-over-overlay';
    overlay.innerHTML = `
      <div class="game-over-box">
        <h1 class="game-over-title ${won ? 'win' : 'lose'}">${won ? '胜利！' : '失败...'}</h1>
        <p class="game-over-text">${won ? '恭喜你击败了冠军！' : '继续努力，下次一定能赢！'}</p>
        <button class="btn-start" onclick="location.reload()">再来一局</button>
      </div>
    `;
    app.appendChild(overlay);
  }

  // ============================================================
  // 工具函数
  // ============================================================
  disableActions() {
    document.querySelectorAll('.btn-move').forEach(b => b.disabled = true);
    const fs = document.getElementById('btnFight');
    const sw = document.getElementById('btnSwitch');
    if (fs) fs.disabled = true;
    if (sw) sw.disabled = true;
  }

  enableActions() {
    document.querySelectorAll('.btn-move').forEach(b => {
      const move = this.playerActive.moves.find(m => m.name === b.querySelector('.move-name')?.textContent);
      if (move) b.disabled = move.pp <= 0;
    });
    const fs = document.getElementById('btnFight');
    const sw = document.getElementById('btnSwitch');
    if (fs) fs.disabled = false;
    if (sw) sw.disabled = false;
  }

  flashSprite(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.classList.add('flash');
    setTimeout(() => el.classList.remove('flash'), 500);
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// 启动游戏
document.addEventListener('DOMContentLoaded', () => {
  window.game = new PokemonGame();
});
