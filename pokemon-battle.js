// Pokemon Battle Challenge - Main JavaScript
// Complete battle system with PokeAPI integration

// ==================== Data Structures ====================

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

// Predefined opponent team (high difficulty strategic team)
const OPPONENT_TEAM = [
    { 
        id: 445, // Garchomp
        name: 'Garchomp',
        level: 50,
        nature: 'Jolly',
        ability: 'Rough Skin',
        item: 'Choice Scarf',
        moves: ['earthquake', 'outrage', 'stone-edge', 'fire-fang'],
        evs: { hp: 0, attack: 252, defense: 0, spAttack: 0, spDefense: 4, speed: 252 }
    },
    {
        id: 658, // Greninja
        name: 'Greninja',
        level: 50,
        nature: 'Timid',
        ability: 'Protean',
        item: 'Life Orb',
        moves: ['hydro-pump', 'ice-beam', 'dark-pulse', 'water-shuriken'],
        evs: { hp: 0, attack: 0, defense: 0, spAttack: 252, spDefense: 4, speed: 252 }
    },
    {
        id: 257, // Blaziken
        name: 'Blaziken',
        level: 50,
        nature: 'Adamant',
        ability: 'Speed Boost',
        item: 'Blazikenite',
        moves: ['flare-blitz', 'high-jump-kick', 'protect', 'swords-dance'],
        evs: { hp: 0, attack: 252, defense: 0, spAttack: 0, spDefense: 4, speed: 252 }
    },
    {
        id: 376, // Metagross
        name: 'Metagross',
        level: 50,
        nature: 'Adamant',
        ability: 'Clear Body',
        item: 'Assault Vest',
        moves: ['meteor-mash', 'earthquake', 'zen-headbutt', 'bullet-punch'],
        evs: { hp: 252, attack: 252, defense: 0, spAttack: 0, spDefense: 4, speed: 0 }
    },
    {
        id: 130, // Gyarados
        name: 'Gyarados',
        level: 50,
        nature: 'Jolly',
        ability: 'Intimidate',
        item: 'Leftovers',
        moves: ['waterfall', 'ice-fang', 'dragon-dance', 'substitute'],
        evs: { hp: 0, attack: 252, defense: 0, spAttack: 0, spDefense: 4, speed: 252 }
    },
    {
        id: 282, // Gardevoir
        name: 'Gardevoir',
        level: 50,
        nature: 'Timid',
        ability: 'Trace',
        item: 'Choice Specs',
        moves: ['psychic', 'moonblast', 'thunderbolt', 'focus-blast'],
        evs: { hp: 0, attack: 0, defense: 0, spAttack: 252, spDefense: 4, speed: 252 }
    }
];

// Global state
let gameState = {
    playerPokemon: null,
    opponentPokemon: null,
    opponentTeam: [],
    currentOpponentIndex: 0,
    battleLog: [],
    playerHP: 0,
    opponentHP: 0,
    availablePokemon: []
};

// ==================== API Functions ====================

async function fetchPokemonData(idOrName) {
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

function calculateStats(pokemon, level = 50) {
    const baseStats = pokemon.stats;
    const hp = Math.floor(((2 * baseStats[0].base_stat + 31) * level / 100) + level + 10);
    const attack = Math.floor(((2 * baseStats[1].base_stat + 31) * level / 100) + 5);
    const defense = Math.floor(((2 * baseStats[2].base_stat + 31) * level / 100) + 5);
    const spAttack = Math.floor(((2 * baseStats[3].base_stat + 31) * level / 100) + 5);
    const spDefense = Math.floor(((2 * baseStats[4].base_stat + 31) * level / 100) + 5);
    const speed = Math.floor(((2 * baseStats[5].base_stat + 31) * level / 100) + 5);
    
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

async function initializeBattle(playerPokemon) {
    // Prepare opponent team
    gameState.opponentTeam = [];
    for (const opponentData of OPPONENT_TEAM) {
        const pokemonData = await fetchPokemonData(opponentData.id);
        if (pokemonData) {
            const stats = calculateStats(pokemonData);
            const moves = [];
            
            // Fetch move data
            for (const moveName of opponentData.moves) {
                const moveData = await fetchMoveData(moveName);
                if (moveData) {
                    moves.push({
                        name: moveName,
                        displayName: moveData.name,
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
                name: opponentData.name,
                level: opponentData.level
            });
        }
    }
    
    // Set first opponent
    gameState.currentOpponentIndex = 0;
    gameState.opponentPokemon = gameState.opponentTeam[0];
    gameState.opponentHP = gameState.opponentPokemon.stats.hp;
    
    // Prepare player Pokemon
    const playerStats = calculateStats(playerPokemon);
    const playerMoves = [];
    
    // Get first 4 moves
    for (let i = 0; i < Math.min(4, playerPokemon.moves.length); i++) {
        const moveData = await fetchMoveData(playerPokemon.moves[i].move.name);
        if (moveData && moveData.power) {
            playerMoves.push({
                name: playerPokemon.moves[i].move.name,
                displayName: moveData.name,
                power: moveData.power,
                type: moveData.type.name,
                damageClass: moveData.damage_class.name,
                pp: moveData.pp,
                currentPP: moveData.pp
            });
            if (playerMoves.length >= 4) break;
        }
    }
    
    gameState.playerPokemon = {
        data: playerPokemon,
        stats: playerStats,
        moves: playerMoves,
        name: playerPokemon.name,
        level: 50
    };
    gameState.playerHP = playerStats.hp;
    
    // Show battle screen
    showScreen('battleScreen');
    renderBattle();
    addLog(`对手派出了 ${gameState.opponentPokemon.name}！`);
    addLog(`去吧，${gameState.playerPokemon.name}！`);
}

function renderBattle() {
    // Render opponent
    document.getElementById('opponentName').textContent = gameState.opponentPokemon.name;
    document.getElementById('opponentLevel').textContent = `Lv.${gameState.opponentPokemon.level}`;
    document.getElementById('opponentHP').textContent = `${gameState.opponentHP}/${gameState.opponentPokemon.stats.hp}`;
    updateHPBar('opponent', gameState.opponentHP, gameState.opponentPokemon.stats.hp);
    
    const opponentSprite = document.getElementById('opponentSprite');
    opponentSprite.innerHTML = `<img src="${gameState.opponentPokemon.data.sprites.front_default}" alt="${gameState.opponentPokemon.name}">`;
    
    // Render player
    document.getElementById('playerName').textContent = gameState.playerPokemon.name;
    document.getElementById('playerLevel').textContent = `Lv.${gameState.playerPokemon.level}`;
    document.getElementById('playerHP').textContent = `${gameState.playerHP}/${gameState.playerPokemon.stats.hp}`;
    updateHPBar('player', gameState.playerHP, gameState.playerPokemon.stats.hp);
    
    const playerSprite = document.getElementById('playerSprite');
    playerSprite.innerHTML = `<img src="${gameState.playerPokemon.data.sprites.back_default}" alt="${gameState.playerPokemon.name}">`;
    
    // Render move buttons
    renderMoveButtons();
}

function renderMoveButtons() {
    const moveButtonsContainer = document.getElementById('moveButtons');
    moveButtonsContainer.innerHTML = '';
    
    gameState.playerPokemon.moves.forEach((move, index) => {
        const button = document.createElement('button');
        button.className = 'move-btn';
        button.onclick = () => executeTurn(index);
        
        button.innerHTML = `
            <span class="move-name">${move.displayName}</span>
            <span class="move-info">
                <span class="type-badge type-${move.type}">${move.type}</span>
                <span>威力: ${move.power}</span>
            </span>
        `;
        
        moveButtonsContainer.appendChild(button);
    });
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
    
    const playerMove = gameState.playerPokemon.moves[moveIndex];
    const opponentMove = selectAIMove(gameState.opponentPokemon, gameState.playerPokemon);
    
    // Determine turn order based on speed
    const playerSpeed = gameState.playerPokemon.stats.speed;
    const opponentSpeed = gameState.opponentPokemon.stats.speed;
    
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
    
    // Small delay between attacks
    await sleep(500);
    
    // Execute second attack
    await executeAttack(secondAttacker, secondMove);
    
    // Check if battle ended
    checkBattleEnd();
    
    // Re-enable move buttons
    moveButtons.forEach(btn => btn.disabled = false);
}

async function executeAttack(attacker, move) {
    const isPlayer = attacker === 'player';
    const attackerPokemon = isPlayer ? gameState.playerPokemon : gameState.opponentPokemon;
    const defenderPokemon = isPlayer ? gameState.opponentPokemon : gameState.playerPokemon;
    
    // Animation
    const sprite = document.getElementById(`${attacker}Sprite`);
    sprite.classList.add('attacking');
    
    addLog(`${attackerPokemon.name} 使用了 ${move.displayName}！`);
    
    await sleep(300);
    sprite.classList.remove('attacking');
    
    // Calculate damage
    const result = await calculateDamage(attackerPokemon, defenderPokemon, move);
    
    // Apply damage
    if (isPlayer) {
        gameState.opponentHP = Math.max(0, gameState.opponentHP - result.damage);
        updateHPBar('opponent', gameState.opponentHP, gameState.opponentPokemon.stats.hp);
        document.getElementById('opponentHP').textContent = `${gameState.opponentHP}/${gameState.opponentPokemon.stats.hp}`;
    } else {
        gameState.playerHP = Math.max(0, gameState.playerHP - result.damage);
        updateHPBar('player', gameState.playerHP, gameState.playerPokemon.stats.hp);
        document.getElementById('playerHP').textContent = `${gameState.playerHP}/${gameState.playerPokemon.stats.hp}`;
    }
    
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
    if ((isPlayer && gameState.opponentHP === 0) || (!isPlayer && gameState.playerHP === 0)) {
        defenderSprite.classList.add('fainted');
        addLog(`${defenderPokemon.name} 失去了战斗能力！`);
        await sleep(800);
        
        if (isPlayer) {
            // Opponent fainted, switch to next Pokemon
            await switchOpponentPokemon();
        }
    }
}

async function switchOpponentPokemon() {
    gameState.currentOpponentIndex++;
    
    if (gameState.currentOpponentIndex >= gameState.opponentTeam.length) {
        // Player won!
        return;
    }
    
    gameState.opponentPokemon = gameState.opponentTeam[gameState.currentOpponentIndex];
    gameState.opponentHP = gameState.opponentPokemon.stats.hp;
    
    await sleep(500);
    addLog(`对手派出了 ${gameState.opponentPokemon.name}！`);
    
    renderBattle();
}

function checkBattleEnd() {
    if (gameState.playerHP === 0) {
        // Player lost
        showResult('defeat');
        return true;
    }
    
    if (gameState.opponentHP === 0 && gameState.currentOpponentIndex >= gameState.opponentTeam.length - 1) {
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
                const stats = calculateStats(pokemonData);
                gameState.opponentTeam.push({
                    data: pokemonData,
                    stats,
                    name: opponentData.name,
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
    
    if (gameState.availablePokemon.length === 0) {
        await loadPokemonList();
    }
    
    // Load type filter options
    const typeFilter = document.getElementById('typeFilter');
    if (typeFilter.options.length === 1) {
        const types = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];
        types.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
            typeFilter.appendChild(option);
        });
    }
    
    await renderPokemonList();
}

async function renderPokemonList(filter = '') {
    const grid = document.getElementById('pokemonGrid');
    grid.innerHTML = '';
    
    const searchTerm = document.getElementById('pokemonSearch')?.value.toLowerCase() || '';
    const typeFilter = document.getElementById('typeFilter')?.value || '';
    
    for (const pokemon of gameState.availablePokemon) {
        if (searchTerm && !pokemon.name.includes(searchTerm)) {
            continue;
        }
        
        const pokemonData = await fetchPokemonData(pokemon.name);
        if (!pokemonData) continue;
        
        if (typeFilter) {
            const hasType = pokemonData.types.some(t => t.type.name === typeFilter);
            if (!hasType) continue;
        }
        
        const stats = calculateStats(pokemonData);
        const card = createPokemonCard({ data: pokemonData, stats, name: pokemonData.name, level: 50 }, null, false);
        grid.appendChild(card);
    }
}

function createPokemonCard(pokemon, index, isOpponent) {
    const card = document.createElement('div');
    card.className = 'pokemon-card';
    
    const types = pokemon.data.types.map(t => 
        `<span class="type-badge type-${t.type.name}">${t.type.name}</span>`
    ).join('');
    
    const sprite = isOpponent ? 
        pokemon.data.sprites.front_default : 
        pokemon.data.sprites.front_default;
    
    if (isOpponent) {
        card.innerHTML = `
            <img src="${sprite}" alt="${pokemon.name}" class="pokemon-image">
            <h3>${pokemon.name}</h3>
            <div class="pokemon-types">${types}</div>
            <div class="pokemon-stats">
                HP: ${pokemon.stats.hp} | Atk: ${pokemon.stats.attack} | Def: ${pokemon.stats.defense}<br>
                SpA: ${pokemon.stats.spAttack} | SpD: ${pokemon.stats.spDefense} | Spe: ${pokemon.stats.speed}
            </div>
        `;
    } else {
        card.innerHTML = `
            <img src="${sprite}" alt="${pokemon.name}" class="pokemon-image">
            <h3>${pokemon.name}</h3>
            <div class="pokemon-types">${types}</div>
            <div class="pokemon-stats">
                HP: ${pokemon.stats.hp} | Atk: ${pokemon.stats.attack}<br>
                Def: ${pokemon.stats.defense} | Spe: ${pokemon.stats.speed}
            </div>
        `;
        
        card.onclick = async () => {
            if (confirm(`选择 ${pokemon.name} 作为你的宝可梦？`)) {
                await initializeBattle(pokemon.data);
            }
        };
    }
    
    return card;
}

// ==================== Initialization ====================

document.addEventListener('DOMContentLoaded', async () => {
    // Load Pokemon list in background
    loadPokemonList();
    
    // Simulate loading
    await sleep(1500);
    
    showScreen('mainMenu');
    
    // Event listeners
    document.getElementById('startButton').addEventListener('click', displayPokemonSelection);
    document.getElementById('viewOpponentButton').addEventListener('click', displayOpponentTeam);
    document.getElementById('backToHomeButton').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    
    document.getElementById('forfeitButton').addEventListener('click', () => {
        if (confirm('确定要认输吗？')) {
            showResult('defeat');
        }
    });
    
    // Search and filter
    document.getElementById('pokemonSearch')?.addEventListener('input', () => {
        renderPokemonList();
    });
    
    document.getElementById('typeFilter')?.addEventListener('change', () => {
        renderPokemonList();
    });
});
