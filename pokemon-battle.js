// Pokemon Battle Challenge - Main JavaScript
// Complete battle system with PokeAPI integration and Chinese localization

// ==================== Chinese Localization Helper ====================

function getCNName(idOrName, type = 'pokemon') {
    if (type === 'pokemon') {
        // If it's a number (ID), use it directly
        if (typeof idOrName === 'number') {
            return POKEMON_CN_NAMES[idOrName] || `Pokemon #${idOrName}`;
        }
        // If it's a name, find the ID first
        for (let id in POKEMON_DATA) {
            if (POKEMON_DATA[id].name === idOrName) {
                return POKEMON_CN_NAMES[id] || idOrName;
            }
        }
        return idOrName;
    } else if (type === 'type') {
        return TYPE_CN_NAMES[idOrName] || idOrName;
    } else if (type === 'move') {
        return MOVE_CN_NAMES[idOrName] || idOrName;
    }
    return idOrName;
}

// ==================== Data Structures ====================

// Constants
const MAX_TEAM_SIZE = 6;
const GEN_1_POKEMON_LIMIT = 151;
const MAX_EV_PER_STAT = 252;
const MAX_TOTAL_EVS = 510;

const TYPE_EFFECTIVENESS = {
    normal: { rock: 0.5, ghost: 0, steel: 0.5 },
    fire: { fire: 0.5, water: 0.5, grass: 2, ice: 2, bug: 2, rock: 0.5, dragon: 0.5, steel: 2 },
    water: { fire: 2, water: 0.5, grass: 0.5, ground: 2, rock: 2, dragon: 0.5 },
    electric: { water: 2, electric: 0.5, grass: 0.5, ground: 0, flying: 2, dragon: 0.5 },
    grass: { fire: 0.5, water: 2, grass: 0.5, poison: 0.5, ground: 2, flying: 0.5, bug: 0.5, rock: 2, dragon: 0.5, steel: 0.5 },
    ice: { fire: 0.5, water: 0.5, grass: 2, ice: 0.5, ground: 2, flying: 2, dragon: 2, steel: 0.5 },
    fighting: { normal: 2, ice: 2, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, rock: 2, ghost: 0, dark: 2, steel: 2, fairy: 0.5 },
    poison: { grass: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0, fairy: 2 },
    ground: { fire: 2, electric: 2, grass: 0.5, poison: 2, flying: 0, bug: 0.5, rock: 2, steel: 2 },
    flying: { electric: 0.5, grass: 2, fighting: 2, bug: 2, rock: 0.5, steel: 0.5 },
    psychic: { fighting: 2, poison: 2, psychic: 0.5, dark: 0, steel: 0.5 },
    bug: { fire: 0.5, grass: 2, fighting: 0.5, poison: 0.5, flying: 0.5, psychic: 2, ghost: 0.5, dark: 2, steel: 0.5, fairy: 0.5 },
    rock: { fire: 2, ice: 2, fighting: 0.5, ground: 0.5, flying: 2, bug: 2, steel: 0.5 },
    ghost: { normal: 0, psychic: 2, ghost: 2, dark: 0.5 },
    dragon: { dragon: 2, steel: 0.5, fairy: 0 },
    dark: { fighting: 0.5, psychic: 2, ghost: 2, dark: 0.5, fairy: 0.5 },
    steel: { fire: 0.5, water: 0.5, electric: 0.5, ice: 2, rock: 2, steel: 0.5, fairy: 2 },
    fairy: { fire: 0.5, fighting: 2, poison: 0.5, dragon: 2, dark: 2, steel: 0.5 }
};

// Predefined opponent team (Gen 1 competitive optimal team)
// Based on Gen 1 OU (OverUsed) tier competitive play
const OPPONENT_TEAM = [
    { 
        id: 150, // Mewtwo - Special Sweeper
        name: 'Mewtwo',
        level: 50,
        nature: 'Timid',
        ability: 'Pressure',
        item: 'Life Orb',
        moves: ['psychic', 'ice-beam', 'thunderbolt', 'fire-blast'],
        evs: { hp: 0, attack: 0, defense: 0, spAttack: 252, spDefense: 4, speed: 252 }
    },
    {
        id: 65, // Alakazam - Fast Special Attacker
        name: 'Alakazam',
        level: 50,
        nature: 'Timid',
        ability: 'Magic Guard',
        item: 'Focus Sash',
        moves: ['psychic', 'psybeam', 'recover', 'thunder-wave'],
        evs: { hp: 0, attack: 0, defense: 0, spAttack: 252, spDefense: 4, speed: 252 }
    },
    {
        id: 143, // Snorlax - Tank/Wall
        name: 'Snorlax',
        level: 50,
        nature: 'Adamant',
        ability: 'Thick Fat',
        item: 'Leftovers',
        moves: ['body-slam', 'earthquake', 'rest', 'amnesia'],
        evs: { hp: 252, attack: 252, defense: 0, spAttack: 0, spDefense: 4, speed: 0 }
    },
    {
        id: 131, // Lapras - Bulky Water
        name: 'Lapras',
        level: 50,
        nature: 'Modest',
        ability: 'Water Absorb',
        item: 'Assault Vest',
        moves: ['surf', 'ice-beam', 'thunderbolt', 'hydro-pump'],
        evs: { hp: 252, attack: 0, defense: 0, spAttack: 252, spDefense: 4, speed: 0 }
    },
    {
        id: 103, // Exeggutor - Special Attacker with Sleep
        name: 'Exeggutor',
        level: 50,
        nature: 'Modest',
        ability: 'Chlorophyll',
        item: 'Choice Specs',
        moves: ['psychic', 'solar-beam', 'sleep-powder', 'explosion'],
        evs: { hp: 0, attack: 0, defense: 0, spAttack: 252, spDefense: 4, speed: 252 }
    },
    {
        id: 94, // Gengar - Fast Ghost/Poison
        name: 'Gengar',
        level: 50,
        nature: 'Timid',
        ability: 'Levitate',
        item: 'Life Orb',
        moves: ['shadow-ball', 'sludge-bomb', 'thunderbolt', 'ice-punch'],
        evs: { hp: 0, attack: 0, defense: 0, spAttack: 252, spDefense: 4, speed: 252 }
    }
];

// Global state
let gameState = {
    playerTeam: [], // Array of 6 Pokemon for the player
    currentPlayerIndex: 0, // Index of current active player Pokemon
    opponentTeam: [],
    currentOpponentIndex: 0,
    battleLog: [],
    availablePokemon: [],
    teamBeingBuilt: [], // Temporary array while building team
    currentConfig: null // Pokemon being configured
};

// ==================== API Functions ====================

async function fetchPokemonData(idOrName) {
    // Try to use fallback data first if available
    if (typeof POKEMON_DATA !== 'undefined' && POKEMON_DATA[idOrName]) {
        return POKEMON_DATA[idOrName];
    }
    
    // Check by name
    if (typeof POKEMON_DATA !== 'undefined') {
        const pokemonEntry = Object.values(POKEMON_DATA).find(p => p.name === idOrName);
        if (pokemonEntry) return pokemonEntry;
    }
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
        if (!response.ok) throw new Error('Pokemon not found');
        return await response.json();
    } catch (error) {
        console.error('Error fetching Pokemon:', error);
        return null;
    }
}

async function fetchMoveData(moveName) {
    // Try to use fallback data first if available
    if (typeof MOVE_DATA !== 'undefined' && MOVE_DATA[moveName]) {
        return MOVE_DATA[moveName];
    }
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/move/${moveName}`);
        if (!response.ok) throw new Error('Move not found');
        return await response.json();
    } catch (error) {
        console.error('Error fetching move:', error);
        return null;
    }
}

async function loadPokemonList() {
    // Try to use fallback data first if available
    if (typeof POKEMON_LIST !== 'undefined' && POKEMON_LIST.length > 0) {
        gameState.availablePokemon = POKEMON_LIST;
        return POKEMON_LIST;
    }
    
    try {
        // Load first 151 Pokemon (Gen 1) for simplicity, can be expanded
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        gameState.availablePokemon = data.results;
        return data.results;
    } catch (error) {
        console.error('Error loading Pokemon list:', error);
        return [];
    }
}

// ==================== Screen Management ====================

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// ==================== Battle Calculations ====================

function calculateStats(pokemon, level = 50, evs = { hp: 0, attack: 0, defense: 0, spAttack: 0, spDefense: 0, speed: 0 }) {
    const baseStats = pokemon.stats;
    
    // Ensure EVs is a valid object with default values
    const evSpread = {
        hp: evs?.hp || 0,
        attack: evs?.attack || 0,
        defense: evs?.defense || 0,
        spAttack: evs?.spAttack || 0,
        spDefense: evs?.spDefense || 0,
        speed: evs?.speed || 0
    };
    
    // HP calculation with EVs
    const hp = Math.floor(((2 * baseStats[0].base_stat + 31 + Math.floor(evSpread.hp / 4)) * level / 100) + level + 10);
    
    // Other stats calculation with EVs
    const attack = Math.floor(((2 * baseStats[1].base_stat + 31 + Math.floor(evSpread.attack / 4)) * level / 100) + 5);
    const defense = Math.floor(((2 * baseStats[2].base_stat + 31 + Math.floor(evSpread.defense / 4)) * level / 100) + 5);
    const spAttack = Math.floor(((2 * baseStats[3].base_stat + 31 + Math.floor(evSpread.spAttack / 4)) * level / 100) + 5);
    const spDefense = Math.floor(((2 * baseStats[4].base_stat + 31 + Math.floor(evSpread.spDefense / 4)) * level / 100) + 5);
    const speed = Math.floor(((2 * baseStats[5].base_stat + 31 + Math.floor(evSpread.speed / 4)) * level / 100) + 5);
    
    return { hp, attack, defense, spAttack, spDefense, speed };
}

function getTypeEffectiveness(attackType, defenderTypes) {
    let effectiveness = 1;
    
    defenderTypes.forEach(defType => {
        const defTypeName = defType.type.name;
        if (TYPE_EFFECTIVENESS[attackType] && TYPE_EFFECTIVENESS[attackType][defTypeName] !== undefined) {
            effectiveness *= TYPE_EFFECTIVENESS[attackType][defTypeName];
        }
    });
    
    return effectiveness;
}

async function calculateDamage(attacker, defender, move) {
    const moveData = await fetchMoveData(move.name);
    if (!moveData || !moveData.power) return 0;
    
    const level = 50;
    const power = moveData.power;
    const attackStat = moveData.damage_class.name === 'physical' ? attacker.stats.attack : attacker.stats.spAttack;
    const defenseStat = moveData.damage_class.name === 'physical' ? defender.stats.defense : defender.stats.spDefense;
    
    // Check STAB (Same Type Attack Bonus)
    const stab = attacker.data.types.some(t => t.type.name === moveData.type.name) ? 1.5 : 1;
    
    // Type effectiveness
    const effectiveness = getTypeEffectiveness(moveData.type.name, defender.data.types);
    
    // Random factor (85-100%)
    const random = (Math.random() * 0.15 + 0.85);
    
    // Critical hit (6.25% chance)
    const critical = Math.random() < 0.0625 ? 2 : 1;
    
    // Damage formula (simplified Gen VI formula)
    const baseDamage = ((2 * level / 5 + 2) * power * attackStat / defenseStat / 50 + 2);
    const damage = Math.floor(baseDamage * stab * effectiveness * random * critical);
    
    return {
        damage: Math.max(1, damage),
        effectiveness,
        critical: critical === 2,
        moveType: moveData.type.name
    };
}

// ==================== Battle AI ====================

function selectAIMove(attacker, defender) {
    // Strategic AI decision making
    const hpPercent = gameState.opponentHP / attacker.stats.hp;
    
    // If low HP, try to use setup moves or switch (simplified: just attack)
    // If opponent is weak to a type, prioritize that move
    
    let bestMove = attacker.moves[0];
    let bestScore = 0;
    
    attacker.moves.forEach(move => {
        let score = Math.random() * 50; // Base randomness
        
        // Prioritize moves that are super effective
        if (move.effectiveness && move.effectiveness > 1) {
            score += move.effectiveness * 100;
        }
        
        // Prioritize higher power moves
        if (move.power) {
            score += move.power / 2;
        }
        
        if (score > bestScore) {
            bestScore = score;
            bestMove = move;
        }
    });
    
    return bestMove;
}

function shouldAISwitch() {
    // Simplified switching logic
    // AI switches if current Pokemon is at disadvantage
    const hpPercent = gameState.opponentHP / gameState.opponentPokemon.stats.hp;
    
    // 20% chance to switch if HP is below 30% and there are other Pokemon available
    if (hpPercent < 0.3 && gameState.currentOpponentIndex < gameState.opponentTeam.length - 1) {
        return Math.random() < 0.2;
    }
    
    return false;
}

// ==================== Battle System ====================

async function initializeBattle() {
    // Prepare opponent team
    gameState.opponentTeam = [];
    for (const opponentData of OPPONENT_TEAM) {
        const pokemonData = await fetchPokemonData(opponentData.id);
        if (pokemonData) {
            const stats = calculateStats(pokemonData, opponentData.level, opponentData.evs);
            const moves = [];
            
            // Fetch move data
            for (const moveName of opponentData.moves) {
                const moveData = await fetchMoveData(moveName);
                if (moveData) {
                    moves.push({
                        name: moveName,
                        displayName: getCNName(moveName, 'move'),
                        power: moveData.power || 0,
                        type: moveData.type.name,
                        damageClass: moveData.damage_class.name,
                        pp: moveData.pp,
                        currentPP: moveData.pp
                    });
                }
            }
            
            gameState.opponentTeam.push({
                data: pokemonData,
                stats,
                moves,
                name: getCNName(pokemonData.id, 'pokemon'),
                level: opponentData.level,
                currentHP: stats.hp,
                maxHP: stats.hp,
                fainted: false
            });
        }
    }
    
    // Set first opponent
    gameState.currentOpponentIndex = 0;
    
    // Prepare player team - they're already configured
    gameState.currentPlayerIndex = 0;
    
    // Show battle screen
    showScreen('battleScreen');
    renderBattle();
    addLog(`对手派出了 ${gameState.opponentTeam[gameState.currentOpponentIndex].name}！`);
    addLog(`去吧，${gameState.playerTeam[gameState.currentPlayerIndex].name}！`);
}

function renderBattle() {
    const currentPlayer = gameState.playerTeam[gameState.currentPlayerIndex];
    const currentOpponent = gameState.opponentTeam[gameState.currentOpponentIndex];
    
    // Render opponent
    document.getElementById('opponentName').textContent = currentOpponent.name;
    document.getElementById('opponentLevel').textContent = `Lv.${currentOpponent.level}`;
    document.getElementById('opponentHP').textContent = `${currentOpponent.currentHP}/${currentOpponent.maxHP}`;
    updateHPBar('opponent', currentOpponent.currentHP, currentOpponent.maxHP);
    
    const opponentSprite = document.getElementById('opponentSprite');
    opponentSprite.innerHTML = `<img src="${currentOpponent.data.sprites.front_default}" alt="${currentOpponent.name}">`;
    
    // Render player
    document.getElementById('playerName').textContent = currentPlayer.name;
    document.getElementById('playerLevel').textContent = `Lv.${currentPlayer.level}`;
    document.getElementById('playerHP').textContent = `${currentPlayer.currentHP}/${currentPlayer.maxHP}`;
    updateHPBar('player', currentPlayer.currentHP, currentPlayer.maxHP);
    
    const playerSprite = document.getElementById('playerSprite');
    playerSprite.innerHTML = `<img src="${currentPlayer.data.sprites.back_default}" alt="${currentPlayer.name}">`;
    
    // Render move buttons
    renderMoveButtons();
    
    // Render team status
    renderTeamStatus();
}

function renderMoveButtons() {
    const moveButtonsContainer = document.getElementById('moveButtons');
    moveButtonsContainer.innerHTML = '';
    
    const currentPlayer = gameState.playerTeam[gameState.currentPlayerIndex];
    const currentOpponent = gameState.opponentTeam[gameState.currentOpponentIndex];
    
    currentPlayer.moves.forEach((move, index) => {
        const button = document.createElement('button');
        button.className = 'move-btn';
        button.onclick = () => executeTurn(index);
        
        // Calculate type effectiveness
        const effectiveness = getTypeEffectiveness(move.type, currentOpponent.data.types);
        let effectivenessText = '';
        let effectivenessClass = '';
        
        if (effectiveness > 1) {
            effectivenessText = ` (${effectiveness}x 效果拔群!)`;
            effectivenessClass = 'effectiveness-super';
        } else if (effectiveness < 1 && effectiveness > 0) {
            effectivenessText = ` (${effectiveness}x 效果不佳)`;
            effectivenessClass = 'effectiveness-weak';
        } else if (effectiveness === 0) {
            effectivenessText = ' (无效!)';
            effectivenessClass = 'effectiveness-none';
        }
        
        button.innerHTML = `
            <span class="move-name">${move.displayName}<span class="${effectivenessClass}">${effectivenessText}</span></span>
            <span class="move-info">
                <span class="type-badge type-${move.type}">${getCNName(move.type, 'type')}</span>
                <span>威力: ${move.power || '-'}</span>
            </span>
        `;
        
        moveButtonsContainer.appendChild(button);
    });
    
    // Add switch button
    const switchBtn = document.createElement('button');
    switchBtn.className = 'move-btn';
    switchBtn.onclick = () => showSwitchMenu();
    switchBtn.innerHTML = `<span class="move-name">切换宝可梦</span>`;
    moveButtonsContainer.appendChild(switchBtn);
}

function renderTeamStatus() {
    // Show player team status
    const playerTeamStatus = document.getElementById('playerTeamStatus');
    if (playerTeamStatus) {
        playerTeamStatus.innerHTML = '<div>我方队伍: ';
        gameState.playerTeam.forEach((pokemon, i) => {
            const status = pokemon.fainted ? '💀' : (i === gameState.currentPlayerIndex ? '⚔️' : '✓');
            playerTeamStatus.innerHTML += `<span style="margin: 0 3px;">${status}</span>`;
        });
        playerTeamStatus.innerHTML += '</div>';
    }
    
    // Show opponent team status
    const opponentTeamStatus = document.getElementById('opponentTeamStatus');
    if (opponentTeamStatus) {
        opponentTeamStatus.innerHTML = '<div>对手队伍: ';
        gameState.opponentTeam.forEach((pokemon, i) => {
            const status = pokemon.fainted ? '💀' : (i === gameState.currentOpponentIndex ? '⚔️' : '✓');
            opponentTeamStatus.innerHTML += `<span style="margin: 0 3px;">${status}</span>`;
        });
        opponentTeamStatus.innerHTML += '</div>';
    }
}

function showSwitchMenu() {
    const switchMenu = document.createElement('div');
    switchMenu.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); z-index: 1000; max-height: 80vh; overflow-y: auto;';
    
    switchMenu.innerHTML = '<h3 style="margin-top: 0;">选择宝可梦</h3>';
    
    gameState.playerTeam.forEach((pokemon, index) => {
        if (index === gameState.currentPlayerIndex || pokemon.fainted) return;
        
        const btn = document.createElement('button');
        btn.style.cssText = 'display: block; width: 100%; margin: 5px 0; padding: 10px; cursor: pointer;';
        btn.textContent = `${pokemon.name} (HP: ${pokemon.currentHP}/${pokemon.maxHP})`;
        btn.onclick = () => {
            document.body.removeChild(switchMenu);
            switchPokemon(index);
        };
        switchMenu.appendChild(btn);
    });
    
    const cancelBtn = document.createElement('button');
    cancelBtn.style.cssText = 'display: block; width: 100%; margin: 10px 0 0 0; padding: 10px; cursor: pointer;';
    cancelBtn.textContent = '取消';
    cancelBtn.onclick = () => document.body.removeChild(switchMenu);
    switchMenu.appendChild(cancelBtn);
    
    document.body.appendChild(switchMenu);
}

async function switchPokemon(newIndex) {
    const oldPokemon = gameState.playerTeam[gameState.currentPlayerIndex];
    gameState.currentPlayerIndex = newIndex;
    const newPokemon = gameState.playerTeam[newIndex];
    
    addLog(`回来吧，${oldPokemon.name}！`);
    await sleep(500);
    addLog(`去吧，${newPokemon.name}！`);
    
    renderBattle();
    
    // Opponent gets a free attack
    await sleep(500);
    const opponentMove = selectAIMove(gameState.opponentTeam[gameState.currentOpponentIndex], newPokemon);
    await executeAttack('opponent', opponentMove);
    checkBattleEnd();
}

function updateHPBar(side, currentHP, maxHP) {
    const percentage = (currentHP / maxHP) * 100;
    const hpBar = document.getElementById(`${side}HPBar`);
    hpBar.style.width = percentage + '%';
    
    // Change color based on HP
    if (percentage > 50) {
        hpBar.className = 'hp-bar';
    } else if (percentage > 20) {
        hpBar.className = 'hp-bar low';
    } else {
        hpBar.className = 'hp-bar critical';
    }
}

function addLog(message) {
    const battleLog = document.getElementById('battleLog');
    const p = document.createElement('p');
    p.textContent = message;
    battleLog.appendChild(p);
    battleLog.scrollTop = battleLog.scrollHeight;
}

async function executeTurn(moveIndex) {
    // Disable move buttons during turn
    const moveButtons = document.querySelectorAll('.move-btn');
    moveButtons.forEach(btn => btn.disabled = true);
    
    const currentPlayer = gameState.playerTeam[gameState.currentPlayerIndex];
    const currentOpponent = gameState.opponentTeam[gameState.currentOpponentIndex];
    
    const playerMove = currentPlayer.moves[moveIndex];
    const opponentMove = selectAIMove(currentOpponent, currentPlayer);
    
    // Determine turn order based on speed
    const playerSpeed = currentPlayer.stats.speed;
    const opponentSpeed = currentOpponent.stats.speed;
    
    let firstAttacker, firstMove, secondAttacker, secondMove;
    
    if (playerSpeed > opponentSpeed) {
        firstAttacker = 'player';
        firstMove = playerMove;
        secondAttacker = 'opponent';
        secondMove = opponentMove;
    } else {
        firstAttacker = 'opponent';
        firstMove = opponentMove;
        secondAttacker = 'player';
        secondMove = playerMove;
    }
    
    // Execute first attack
    await executeAttack(firstAttacker, firstMove);
    
    // Check if battle ended
    if (checkBattleEnd()) {
        return;
    }
    
    // Check if attacker's Pokemon fainted, forcing a switch
    if (firstAttacker === 'player' && currentPlayer.fainted) {
        await handleForcedSwitch('player');
        moveButtons.forEach(btn => btn.disabled = false);
        return;
    }
    if (firstAttacker === 'opponent' && currentOpponent.fainted) {
        await switchOpponentPokemon();
        if (checkBattleEnd()) return;
    }
    
    // Small delay between attacks
    await sleep(500);
    
    // Execute second attack if both Pokemon still alive
    const secondAttackerPokemon = secondAttacker === 'player' ? 
        gameState.playerTeam[gameState.currentPlayerIndex] : 
        gameState.opponentTeam[gameState.currentOpponentIndex];
    
    if (!secondAttackerPokemon.fainted) {
        await executeAttack(secondAttacker, secondMove);
    }
    
    // Check if battle ended
    if (checkBattleEnd()) {
        return;
    }
    
    // Check for faints after second attack
    if (secondAttacker === 'player' && secondAttackerPokemon.fainted) {
        await handleForcedSwitch('player');
    } else if (secondAttacker === 'opponent' && secondAttackerPokemon.fainted) {
        await switchOpponentPokemon();
    }
    
    checkBattleEnd();
    
    // Re-enable move buttons
    moveButtons.forEach(btn => btn.disabled = false);
}

async function handleForcedSwitch(side) {
    const team = side === 'player' ? gameState.playerTeam : gameState.opponentTeam;
    const alivePokemon = team.filter(p => !p.fainted);
    
    if (alivePokemon.length === 0) {
        return; // Battle will end
    }
    
    if (side === 'player') {
        // Show switch menu
        const availableIndices = [];
        gameState.playerTeam.forEach((p, i) => {
            if (!p.fainted) availableIndices.push(i);
        });
        
        if (availableIndices.length > 0) {
            // Force player to choose
            await new Promise(resolve => {
                const switchMenu = document.createElement('div');
                switchMenu.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); z-index: 1000;';
                
                switchMenu.innerHTML = '<h3 style="margin-top: 0;">选择下一只宝可梦</h3>';
                
                availableIndices.forEach(index => {
                    const pokemon = gameState.playerTeam[index];
                    const btn = document.createElement('button');
                    btn.style.cssText = 'display: block; width: 100%; margin: 5px 0; padding: 10px; cursor: pointer;';
                    btn.textContent = `${pokemon.name} (HP: ${pokemon.currentHP}/${pokemon.maxHP})`;
                    btn.onclick = async () => {
                        document.body.removeChild(switchMenu);
                        gameState.currentPlayerIndex = index;
                        addLog(`去吧，${pokemon.name}！`);
                        renderBattle();
                        resolve();
                    };
                    switchMenu.appendChild(btn);
                });
                
                document.body.appendChild(switchMenu);
            });
        }
    }
}

async function executeAttack(attacker, move) {
    const isPlayer = attacker === 'player';
    const attackerPokemon = isPlayer ? 
        gameState.playerTeam[gameState.currentPlayerIndex] : 
        gameState.opponentTeam[gameState.currentOpponentIndex];
    const defenderPokemon = isPlayer ? 
        gameState.opponentTeam[gameState.currentOpponentIndex] : 
        gameState.playerTeam[gameState.currentPlayerIndex];
    
    // Animation
    const sprite = document.getElementById(`${attacker}Sprite`);
    sprite.classList.add('attacking');
    
    addLog(`${attackerPokemon.name} 使用了 ${move.displayName}！`);
    
    await sleep(300);
    sprite.classList.remove('attacking');
    
    // Calculate damage
    const result = await calculateDamage(attackerPokemon, defenderPokemon, move);
    
    // Apply damage
    defenderPokemon.currentHP = Math.max(0, defenderPokemon.currentHP - result.damage);
    
    // Update display
    updateHPBar(isPlayer ? 'opponent' : 'player', defenderPokemon.currentHP, defenderPokemon.maxHP);
    document.getElementById(isPlayer ? 'opponentHP' : 'playerHP').textContent = 
        `${defenderPokemon.currentHP}/${defenderPokemon.maxHP}`;
    
    // Damage animation
    const defenderSprite = document.getElementById(isPlayer ? 'opponentSprite' : 'playerSprite');
    defenderSprite.classList.add('taking-damage');
    
    // Show effectiveness
    if (result.critical) {
        addLog('会心一击！');
    }
    if (result.effectiveness > 1) {
        addLog('效果拔群！');
    } else if (result.effectiveness < 1 && result.effectiveness > 0) {
        addLog('效果不理想...');
    } else if (result.effectiveness === 0) {
        addLog('对方没有受到伤害...');
    }
    
    await sleep(500);
    defenderSprite.classList.remove('taking-damage');
    
    // Check if Pokemon fainted
    if (defenderPokemon.currentHP === 0) {
        defenderPokemon.fainted = true;
        defenderSprite.classList.add('fainted');
        addLog(`${defenderPokemon.name} 失去了战斗能力！`);
        await sleep(800);
    }
}

async function switchOpponentPokemon() {
    // Find next non-fainted opponent
    let nextIndex = -1;
    for (let i = gameState.currentOpponentIndex + 1; i < gameState.opponentTeam.length; i++) {
        if (!gameState.opponentTeam[i].fainted) {
            nextIndex = i;
            break;
        }
    }
    
    if (nextIndex === -1) {
        // No more opponents, player wins
        return;
    }
    
    gameState.currentOpponentIndex = nextIndex;
    
    await sleep(500);
    addLog(`对手派出了 ${gameState.opponentTeam[nextIndex].name}！`);
    
    renderBattle();
}

function checkBattleEnd() {
    const playerAlive = gameState.playerTeam.some(p => !p.fainted);
    const opponentAlive = gameState.opponentTeam.some(p => !p.fainted);
    
    if (!playerAlive) {
        // Player lost
        showResult('defeat');
        return true;
    }
    
    if (!opponentAlive) {
        // Player won!
        showResult('victory');
        return true;
    }
    
    return false;
}

function showResult(result) {
    setTimeout(() => {
        showScreen('resultScreen');
        
        if (result === 'victory') {
            document.getElementById('resultTitle').textContent = '胜利！';
            document.getElementById('resultTitle').classList.add('victory');
            document.getElementById('resultMessage').textContent = '你击败了所有对手的宝可梦！';
        } else {
            document.getElementById('resultTitle').textContent = '失败';
            document.getElementById('resultTitle').classList.add('defeat');
            document.getElementById('resultMessage').textContent = '你的宝可梦失去了战斗能力...';
        }
    }, 1000);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ==================== UI Functions ====================

async function displayOpponentTeam() {
    const grid = document.getElementById('opponentTeamGrid');
    grid.innerHTML = '<p style="text-align: center; color: #999;">加载中...</p>';
    
    showScreen('opponentScreen');
    
    // Load opponent team if not loaded
    if (gameState.opponentTeam.length === 0) {
        for (const opponentData of OPPONENT_TEAM) {
            const pokemonData = await fetchPokemonData(opponentData.id);
            if (pokemonData) {
                const stats = calculateStats(pokemonData, opponentData.level, opponentData.evs);
                gameState.opponentTeam.push({
                    data: pokemonData,
                    stats,
                    name: getCNName(pokemonData.id, 'pokemon'),
                    level: opponentData.level,
                    ability: opponentData.ability,
                    item: opponentData.item
                });
            }
        }
    }
    
    grid.innerHTML = '';
    
    gameState.opponentTeam.forEach((pokemon, index) => {
        const card = createPokemonCard(pokemon, index, true);
        grid.appendChild(card);
    });
}

async function displayPokemonSelection() {
    const grid = document.getElementById('pokemonGrid');
    grid.innerHTML = '<p style="text-align: center; color: #999;">加载中...</p>';
    
    showScreen('selectionScreen');
    
    // Initialize team building
    gameState.teamBeingBuilt = [];
    updateTeamCounter();
    
    if (gameState.availablePokemon.length === 0) {
        await loadPokemonList();
    }
    
    // Load type filter options
    const typeFilter = document.getElementById('typeFilter');
    if (typeFilter && typeFilter.options.length === 1) {
        const types = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];
        types.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = getCNName(type, 'type');
            typeFilter.appendChild(option);
        });
    }
    
    await renderPokemonList();
}

function updateTeamCounter() {
    const counter = document.getElementById('teamCounter');
    if (counter) {
        counter.textContent = `队伍: ${gameState.teamBeingBuilt.length}/${MAX_TEAM_SIZE}`;
    }
    
    // Show/hide start battle button
    const startBattleBtn = document.getElementById('startBattleBtn');
    if (startBattleBtn) {
        startBattleBtn.style.display = gameState.teamBeingBuilt.length === MAX_TEAM_SIZE ? 'block' : 'none';
    }
    
    // Update team preview
    const teamPreview = document.getElementById('teamPreview');
    if (teamPreview) {
        teamPreview.innerHTML = '';
        gameState.teamBeingBuilt.forEach((pokemon, index) => {
            const card = document.createElement('div');
            card.style.cssText = 'display: inline-block; margin: 5px; padding: 10px; background: #f0f0f0; border-radius: 5px; position: relative;';
            card.innerHTML = `
                <img src="${pokemon.data.sprites.front_default}" style="width: 50px; height: 50px;" alt="${pokemon.name}">
                <div>${pokemon.name}</div>
                <button onclick="removeFromTeam(${index})" style="position: absolute; top: 5px; right: 5px; background: red; color: white; border: none; border-radius: 50%; width: 20px; height: 20px; cursor: pointer;">×</button>
            `;
            teamPreview.appendChild(card);
        });
    }
}

function removeFromTeam(index) {
    gameState.teamBeingBuilt.splice(index, 1);
    updateTeamCounter();
}

async function renderPokemonList(filter = '') {
    const grid = document.getElementById('pokemonGrid');
    grid.innerHTML = '';
    
    const searchTerm = document.getElementById('pokemonSearch')?.value.toLowerCase() || '';
    const typeFilter = document.getElementById('typeFilter')?.value || '';
    
    let count = 0;
    for (const pokemon of gameState.availablePokemon) {
        // Extract ID from URL if available
        const pokemonId = pokemon.url ? parseInt(pokemon.url.split('/').filter(Boolean).pop()) : count + 1;
        
        if (searchTerm && !pokemon.name.includes(searchTerm) && !getCNName(pokemonId, 'pokemon').includes(searchTerm)) {
            continue;
        }
        
        const pokemonData = await fetchPokemonData(pokemon.name);
        if (!pokemonData) continue;
        
        // Ensure ID is set on pokemon data
        if (!pokemonData.id) {
            pokemonData.id = pokemonId;
        }
        
        if (typeFilter) {
            const hasType = pokemonData.types.some(t => t.type.name === typeFilter);
            if (!hasType) continue;
        }
        
        const stats = calculateStats(pokemonData);
        const card = createPokemonCard({ 
            data: pokemonData, 
            stats, 
            name: getCNName(pokemonData.id, 'pokemon'), 
            level: 50,
            id: pokemonData.id,
            number: pokemonData.id // Add Pokemon number for display
        }, null, false);
        grid.appendChild(card);
        
        count++;
        if (count >= GEN_1_POKEMON_LIMIT) break; // Limit to Gen 1
    }
}

function createPokemonCard(pokemon, index, isOpponent) {
    const card = document.createElement('div');
    card.className = 'pokemon-card';
    
    const types = pokemon.data.types.map(t => 
        `<span class="type-badge type-${t.type.name}">${getCNName(t.type.name, 'type')}</span>`
    ).join('');
    
    const sprite = isOpponent ? 
        pokemon.data.sprites.front_default : 
        pokemon.data.sprites.front_default;
    
    // Add Pokemon number/ID if available
    const numberDisplay = pokemon.number ? `<div class="pokemon-number">No.${String(pokemon.number).padStart(3, '0')}</div>` : '';
    
    if (isOpponent) {
        card.innerHTML = `
            ${numberDisplay}
            <img src="${sprite}" alt="${pokemon.name}" class="pokemon-image">
            <h3>${pokemon.name}</h3>
            <div class="pokemon-types">${types}</div>
            <div class="pokemon-stats">
                HP: ${pokemon.stats.hp} | 攻击: ${pokemon.stats.attack} | 防御: ${pokemon.stats.defense}<br>
                特攻: ${pokemon.stats.spAttack} | 特防: ${pokemon.stats.spDefense} | 速度: ${pokemon.stats.speed}
            </div>
        `;
    } else {
        card.innerHTML = `
            ${numberDisplay}
            <img src="${sprite}" alt="${pokemon.name}" class="pokemon-image">
            <h3>${pokemon.name}</h3>
            <div class="pokemon-types">${types}</div>
            <div class="pokemon-stats">
                HP: ${pokemon.stats.hp} | 攻击: ${pokemon.stats.attack}<br>
                防御: ${pokemon.stats.defense} | 速度: ${pokemon.stats.speed}
            </div>
        `;
        
        card.onclick = async () => {
            if (gameState.teamBeingBuilt.length >= MAX_TEAM_SIZE) {
                alert('队伍已满！最多6只宝可梦。');
                return;
            }
            showConfigScreen(pokemon);
        };
    }
    
    return card;
}

function showConfigScreen(pokemon) {
    gameState.currentConfig = {
        pokemon: pokemon,
        selectedMoves: [],
        evs: { hp: 0, attack: 0, defense: 0, spAttack: 0, spDefense: 0, speed: 0 },
        evTotal: 0
    };
    
    showScreen('configScreen');
    
    // Set pokemon name
    document.getElementById('configPokemonName').textContent = pokemon.name;
    
    // Set pokemon image
    document.getElementById('configPokemonImage').src = pokemon.data.sprites.front_default;
    
    // Render available moves
    renderAvailableMoves();
    
    // Render EV sliders
    renderEVSliders();
}

function renderAvailableMoves() {
    const container = document.getElementById('availableMovesContainer');
    container.innerHTML = '<h3>选择4个招式</h3>';
    
    const pokemon = gameState.currentConfig.pokemon;
    const availableMoves = pokemon.data.moves.slice(0, 20); // Limit to first 20 moves
    
    availableMoves.forEach(moveEntry => {
        const moveName = moveEntry.move.name;
        const moveData = MOVE_DATA[moveName];
        
        // Skip moves without data, but allow status moves (power=0) for strategic depth
        if (!moveData) return;
        
        const isSelected = gameState.currentConfig.selectedMoves.includes(moveName);
        
        const moveBtn = document.createElement('button');
        moveBtn.style.cssText = `
            display: block;
            width: 100%;
            margin: 5px 0;
            padding: 10px;
            text-align: left;
            cursor: pointer;
            background: ${isSelected ? '#4CAF50' : '#f0f0f0'};
            color: ${isSelected ? 'white' : 'black'};
            border: 2px solid ${isSelected ? '#4CAF50' : '#ccc'};
            border-radius: 5px;
        `;
        
        const powerText = moveData.power > 0 ? `威力: ${moveData.power}` : '变化技能';
        moveBtn.innerHTML = `
            <strong>${getCNName(moveName, 'move')}</strong> - 
            ${getCNName(moveData.type.name, 'type')} - 
            ${powerText}
        `;
        
        moveBtn.onclick = () => toggleMoveSelection(moveName);
        
        container.appendChild(moveBtn);
    });
    
    // Show selected moves count
    const countDiv = document.createElement('div');
    countDiv.id = 'moveCount';
    countDiv.style.cssText = 'margin: 10px 0; font-weight: bold;';
    countDiv.textContent = `已选择: ${gameState.currentConfig.selectedMoves.length}/4`;
    container.insertBefore(countDiv, container.firstChild.nextSibling);
}

function toggleMoveSelection(moveName) {
    const index = gameState.currentConfig.selectedMoves.indexOf(moveName);
    
    if (index > -1) {
        // Remove move
        gameState.currentConfig.selectedMoves.splice(index, 1);
    } else {
        // Add move
        if (gameState.currentConfig.selectedMoves.length >= 4) {
            alert('最多选择4个招式！');
            return;
        }
        gameState.currentConfig.selectedMoves.push(moveName);
    }
    
    renderAvailableMoves();
}

function renderEVSliders() {
    const container = document.getElementById('evSlidersContainer');
    container.innerHTML = '<h3>努力值分配 (最多510总计，单项最多252)</h3>';
    
    const stats = ['hp', 'attack', 'defense', 'spAttack', 'spDefense', 'speed'];
    const statNames = {
        hp: 'HP',
        attack: '攻击',
        defense: '防御',
        spAttack: '特攻',
        spDefense: '特防',
        speed: '速度'
    };
    
    stats.forEach(stat => {
        const div = document.createElement('div');
        div.style.cssText = 'margin: 10px 0;';
        
        const label = document.createElement('label');
        label.textContent = `${statNames[stat]}: `;
        label.style.cssText = 'display: inline-block; width: 80px;';
        
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = 0;
        slider.max = MAX_EV_PER_STAT;
        slider.value = gameState.currentConfig.evs[stat];
        slider.step = 4;
        slider.style.cssText = 'width: 200px;';
        slider.oninput = () => updateEV(stat, parseInt(slider.value));
        
        const valueSpan = document.createElement('span');
        valueSpan.id = `ev-${stat}-value`;
        valueSpan.textContent = gameState.currentConfig.evs[stat];
        valueSpan.style.cssText = 'display: inline-block; width: 50px; text-align: right; margin-left: 10px;';
        
        div.appendChild(label);
        div.appendChild(slider);
        div.appendChild(valueSpan);
        container.appendChild(div);
    });
    
    // Total EV display
    const totalDiv = document.createElement('div');
    totalDiv.id = 'evTotal';
    totalDiv.style.cssText = 'margin: 15px 0; font-weight: bold; font-size: 18px;';
    totalDiv.textContent = `总计: 0/${MAX_TOTAL_EVS}`;
    container.appendChild(totalDiv);
}

function updateEV(stat, value) {
    // Calculate change in this stat
    const oldValue = gameState.currentConfig.evs[stat];
    const change = value - oldValue;
    
    // Check if total would exceed limit
    if (gameState.currentConfig.evTotal + change > MAX_TOTAL_EVS) {
        value = oldValue + (MAX_TOTAL_EVS - gameState.currentConfig.evTotal);
    }
    
    gameState.currentConfig.evs[stat] = value;
    gameState.currentConfig.evTotal = gameState.currentConfig.evTotal - oldValue + value;
    
    // Update display
    document.getElementById(`ev-${stat}-value`).textContent = value;
    document.getElementById('evTotal').textContent = `总计: ${gameState.currentConfig.evTotal}/${MAX_TOTAL_EVS}`;
    document.getElementById('evTotal').style.color = gameState.currentConfig.evTotal > MAX_TOTAL_EVS ? 'red' : 'black';
}

function saveConfiguration() {
    if (gameState.currentConfig.selectedMoves.length !== 4) {
        alert('请选择4个招式！');
        return;
    }
    
    const pokemon = gameState.currentConfig.pokemon;
    const evs = gameState.currentConfig.evs;
    
    // Recalculate stats with EVs
    const stats = calculateStats(pokemon.data, 50, evs);
    
    // Prepare moves with full data
    const moves = gameState.currentConfig.selectedMoves.map(moveName => {
        const moveData = MOVE_DATA[moveName];
        return {
            name: moveName,
            displayName: getCNName(moveName, 'move'),
            power: moveData.power,
            type: moveData.type.name,
            damageClass: moveData.damage_class.name,
            pp: moveData.pp,
            currentPP: moveData.pp
        };
    });
    
    // Add to team
    gameState.teamBeingBuilt.push({
        data: pokemon.data,
        stats,
        moves,
        name: pokemon.name,
        level: 50,
        evs: evs,
        currentHP: stats.hp,
        maxHP: stats.hp,
        fainted: false,
        id: pokemon.id
    });
    
    updateTeamCounter();
    showScreen('selectionScreen');
}

function startBattleWithTeam() {
    if (gameState.teamBeingBuilt.length !== MAX_TEAM_SIZE) {
        alert('请先组建完整的6只宝可梦队伍！');
        return;
    }
    
    // Copy team to player team
    gameState.playerTeam = gameState.teamBeingBuilt.slice();
    gameState.currentPlayerIndex = 0;
    
    // Initialize battle
    initializeBattle();
}

// ==================== Initialization ====================

// Make functions globally accessible for inline onclick handlers
window.removeFromTeam = removeFromTeam;
window.saveConfiguration = saveConfiguration;
window.startBattleWithTeam = startBattleWithTeam;

document.addEventListener('DOMContentLoaded', async () => {
    // Load Pokemon list in background
    loadPokemonList();
    
    // Simulate loading
    await sleep(1500);
    
    showScreen('mainMenu');
    
    // Event listeners
    document.getElementById('startButton')?.addEventListener('click', displayPokemonSelection);
    document.getElementById('viewOpponentButton')?.addEventListener('click', displayOpponentTeam);
    document.getElementById('backToHomeButton')?.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    
    document.getElementById('forfeitButton')?.addEventListener('click', () => {
        if (confirm('确定要认输吗？')) {
            showResult('defeat');
        }
    });
    
    document.getElementById('backToMenuButton')?.addEventListener('click', () => {
        showScreen('mainMenu');
    });
    
    document.getElementById('backToSelectionButton')?.addEventListener('click', () => {
        showScreen('selectionScreen');
    });
    
    document.getElementById('saveConfigButton')?.addEventListener('click', saveConfiguration);
    
    document.getElementById('startBattleBtn')?.addEventListener('click', startBattleWithTeam);
    
    // Search and filter
    document.getElementById('pokemonSearch')?.addEventListener('input', () => {
        renderPokemonList();
    });
    
    document.getElementById('typeFilter')?.addEventListener('change', () => {
        renderPokemonList();
    });
});
