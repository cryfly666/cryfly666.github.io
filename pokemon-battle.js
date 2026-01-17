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
const MAX_POKEMON_ID = 1025; // Total number of Pokemon (Gen 1-9)
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

// Status condition constants
const STATUS_CONDITIONS = {
    NONE: 'none',
    BURN: 'burn',
    POISON: 'poison',
    BADLY_POISON: 'badly-poison',
    PARALYSIS: 'paralysis',
    SLEEP: 'sleep',
    FREEZE: 'freeze'
};

const VOLATILE_STATUS = {
    CONFUSION: 'confusion',
    FLINCH: 'flinch',
    LEECH_SEED: 'leech-seed',
    SUBSTITUTE: 'substitute',
    PROTECT: 'protect'
};

// Weather constants
const WEATHER_CONDITIONS = {
    NONE: 'none',
    SUN: 'sun',
    RAIN: 'rain',
    SANDSTORM: 'sandstorm',
    HAIL: 'hail'
};

// Terrain constants
const TERRAIN_CONDITIONS = {
    NONE: 'none',
    ELECTRIC: 'electric',
    GRASSY: 'grassy',
    MISTY: 'misty',
    PSYCHIC: 'psychic'
};

// Global state
let gameState = {
    playerTeam: [], // Array of 6 Pokemon for the player
    currentPlayerIndex: 0, // Index of current active player Pokemon
    opponentTeam: [],
    currentOpponentIndex: 0,
    battleLog: [],
    availablePokemon: [],
    teamBeingBuilt: [], // Temporary array while building team
    currentConfig: null, // Pokemon being configured
    scrollPosition: 0, // Save scroll position when navigating away
    weather: WEATHER_CONDITIONS.NONE,
    weatherTurns: 0,
    terrain: TERRAIN_CONDITIONS.NONE,
    terrainTurns: 0,
    turnCount: 0
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

// Get move priority (for turn order)
function getMovePriority(moveName) {
    // Priority moves go first regardless of speed
    const priorityMoves = {
        'quick-attack': 1,
        'aqua-jet': 1,
        'mach-punch': 1,
        'bullet-punch': 2,
        'accelerock': 2,
        'ice-shard': 1,
        'shadow-sneak': 1,
        'sucker-punch': 1,
        'extremespeed': 2,
        'fake-out': 3,
        'first-impression': 2,
        'water-shuriken': 1,
        'protect': 4,
        'detect': 4,
        'endure': 4
    };
    
    return priorityMoves[moveName] || 0;
}

// Apply move special effects
async function applyMoveEffects(attacker, defender, move, moveData, damageDealt = 0) {
    const effects = [];
    
    // OHKO moves
    if (moveData.name === 'Fissure' || moveData.name === 'fissure' ||
        moveData.name === 'Guillotine' || moveData.name === 'guillotine' ||
        moveData.name === 'Horn Drill' || moveData.name === 'horn-drill' ||
        moveData.name === 'Sheer Cold' || moveData.name === 'sheer-cold') {
        // OHKO moves have 30% base accuracy, fails if target is higher level
        if (defender.level > attacker.level) {
            effects.push('但是失败了！');
            return effects;
        }
        const accuracy = 0.3 + (attacker.level - defender.level) * 0.01;
        if (Math.random() < accuracy) {
            defender.currentHP = 0;
            effects.push('一击必杀！');
        } else {
            effects.push('但是没有命中！');
        }
        return effects;
    }
    
    // Healing moves
    if (moveData.name === 'Rest' || moveData.name === 'rest') {
        const healAmount = attacker.maxHP - attacker.currentHP;
        attacker.currentHP = attacker.maxHP;
        effects.push(`${attacker.name} 睡着了并恢复了体力！`);
        applyStatusCondition(attacker, STATUS_CONDITIONS.SLEEP);
        attacker.statusTurns = 0;
        return effects;
    } else if (moveData.name === 'Recover' || moveData.name === 'recover' || moveData.name === 'Roost' || moveData.name === 'roost') {
        const healAmount = Math.floor(attacker.maxHP * 0.5);
        const actualHeal = Math.min(healAmount, attacker.maxHP - attacker.currentHP);
        attacker.currentHP = Math.min(attacker.maxHP, attacker.currentHP + healAmount);
        if (actualHeal > 0) {
            effects.push(`${attacker.name} 恢复了体力！`);
        } else {
            effects.push(`${attacker.name} 的体力已经满了！`);
        }
        return effects;
    }
    
    // Draining moves (absorb HP)
    if (moveData.name === 'Drain Punch' || moveData.name === 'drain-punch' || 
        moveData.name === 'Giga Drain' || moveData.name === 'giga-drain' ||
        moveData.name === 'Mega Drain' || moveData.name === 'mega-drain' ||
        moveData.name === 'Absorb' || moveData.name === 'absorb') {
        const drainAmount = Math.floor(damageDealt * 0.5);
        if (drainAmount > 0) {
            const actualHeal = Math.min(drainAmount, attacker.maxHP - attacker.currentHP);
            attacker.currentHP = Math.min(attacker.maxHP, attacker.currentHP + drainAmount);
            if (actualHeal > 0) {
                effects.push(`${attacker.name} 吸取了${defender.name}的体力！`);
            }
        }
    }
    
    // Leech Seed
    if (moveData.name === 'Leech Seed' || moveData.name === 'leech-seed') {
        if (!defender.data.types.some(t => t.type.name === 'grass') && 
            !defender.volatileStatus.includes(VOLATILE_STATUS.LEECH_SEED)) {
            applyVolatileStatus(defender, VOLATILE_STATUS.LEECH_SEED);
            effects.push(`${defender.name} 被种下了寄生种子！`);
        } else {
            effects.push('但是失败了！');
        }
    }
    
    // Substitute
    if (moveData.name === 'Substitute' || moveData.name === 'substitute') {
        const cost = Math.floor(attacker.maxHP * 0.25);
        if (attacker.currentHP > cost && attacker.substituteHP === 0) {
            attacker.currentHP -= cost;
            attacker.substituteHP = cost;
            applyVolatileStatus(attacker, VOLATILE_STATUS.SUBSTITUTE);
            effects.push(`${attacker.name} 制造了替身！`);
        } else {
            effects.push('但是失败了！');
        }
    }
    
    // Status effect moves
    if (moveData.name === 'Thunder Wave' || moveData.name === 'thunder-wave' ||
        moveData.name === 'Stun Spore' || moveData.name === 'stun-spore' ||
        moveData.name === 'Glare' || moveData.name === 'glare') {
        if (applyStatusCondition(defender, STATUS_CONDITIONS.PARALYSIS)) {
            effects.push(`${defender.name} 被麻痹了！`);
        }
    } else if (moveData.name === 'Will-O-Wisp' || moveData.name === 'will-o-wisp') {
        if (applyStatusCondition(defender, STATUS_CONDITIONS.BURN)) {
            effects.push(`${defender.name} 被灼伤了！`);
        }
    } else if (moveData.name === 'Toxic' || moveData.name === 'toxic') {
        if (applyStatusCondition(defender, STATUS_CONDITIONS.BADLY_POISON)) {
            effects.push(`${defender.name} 中了剧毒！`);
        }
    } else if (moveData.name === 'Poison Powder' || moveData.name === 'poison-powder' ||
               moveData.name === 'Poisonpowder' || moveData.name === 'poisonpowder' ||
               moveData.name === 'Poison Gas' || moveData.name === 'poison-gas') {
        if (applyStatusCondition(defender, STATUS_CONDITIONS.POISON)) {
            effects.push(`${defender.name} 中毒了！`);
        }
    } else if (moveData.name === 'Sleep Powder' || moveData.name === 'sleep-powder' || 
               moveData.name === 'Hypnosis' || moveData.name === 'hypnosis' ||
               moveData.name === 'Spore' || moveData.name === 'spore' ||
               moveData.name === 'Lovely Kiss' || moveData.name === 'lovely-kiss') {
        if (applyStatusCondition(defender, STATUS_CONDITIONS.SLEEP)) {
            effects.push(`${defender.name} 睡着了！`);
        }
    } else if (moveData.name === 'Ice Beam' || moveData.name === 'ice-beam' ||
               moveData.name === 'Ice Punch' || moveData.name === 'ice-punch') {
        // 10% chance to freeze
        if (Math.random() < 0.1 && applyStatusCondition(defender, STATUS_CONDITIONS.FREEZE)) {
            effects.push(`${defender.name} 被冰冻了！`);
        }
    } else if (moveData.name === 'Blizzard' || moveData.name === 'blizzard') {
        // 10% chance to freeze
        if (Math.random() < 0.1 && applyStatusCondition(defender, STATUS_CONDITIONS.FREEZE)) {
            effects.push(`${defender.name} 被冰冻了！`);
        }
    } else if (moveData.name === 'Flamethrower' || moveData.name === 'flamethrower' || 
               moveData.name === 'Fire Blast' || moveData.name === 'fire-blast' ||
               moveData.name === 'Fire Punch' || moveData.name === 'fire-punch' ||
               moveData.name === 'Lava Plume' || moveData.name === 'lava-plume') {
        // 10-30% chance to burn depending on move
        const burnChance = (moveData.name === 'Lava Plume' || moveData.name === 'lava-plume') ? 0.3 : 0.1;
        if (Math.random() < burnChance && applyStatusCondition(defender, STATUS_CONDITIONS.BURN)) {
            effects.push(`${defender.name} 被灼伤了！`);
        }
    } else if (moveData.name === 'Scald' || moveData.name === 'scald') {
        // 30% chance to burn
        if (Math.random() < 0.3 && applyStatusCondition(defender, STATUS_CONDITIONS.BURN)) {
            effects.push(`${defender.name} 被灼伤了！`);
        }
    } else if (moveData.name === 'Thunderbolt' || moveData.name === 'thunderbolt' || 
               moveData.name === 'Thunder' || moveData.name === 'thunder' ||
               moveData.name === 'Thunder Punch' || moveData.name === 'thunder-punch' ||
               moveData.name === 'Discharge' || moveData.name === 'discharge') {
        // 10-30% chance to paralyze
        const paraChance = (moveData.name === 'Discharge' || moveData.name === 'discharge') ? 0.3 : 0.1;
        if (Math.random() < paraChance && applyStatusCondition(defender, STATUS_CONDITIONS.PARALYSIS)) {
            effects.push(`${defender.name} 被麻痹了！`);
        }
    } else if (moveData.name === 'Body Slam' || moveData.name === 'body-slam' ||
               moveData.name === 'Bounce' || moveData.name === 'bounce' ||
               moveData.name === 'Lick' || moveData.name === 'lick') {
        // 30% chance to paralyze for Body Slam, 10% for others
        const paraChance = (moveData.name === 'Body Slam' || moveData.name === 'body-slam') ? 0.3 : 0.1;
        if (Math.random() < paraChance && applyStatusCondition(defender, STATUS_CONDITIONS.PARALYSIS)) {
            effects.push(`${defender.name} 被麻痹了！`);
        }
    } else if (moveData.name === 'Sludge Bomb' || moveData.name === 'sludge-bomb' ||
               moveData.name === 'Poison Jab' || moveData.name === 'poison-jab' ||
               moveData.name === 'Gunk Shot' || moveData.name === 'gunk-shot') {
        // 30% chance to poison
        if (Math.random() < 0.3 && applyStatusCondition(defender, STATUS_CONDITIONS.POISON)) {
            effects.push(`${defender.name} 中毒了！`);
        }
    } else if (moveData.name === 'Rock Slide' || moveData.name === 'rock-slide' ||
               moveData.name === 'Waterfall' || moveData.name === 'waterfall' ||
               moveData.name === 'Icicle Crash' || moveData.name === 'icicle-crash') {
        // 30% chance to flinch (20% for Waterfall)
        const flinchChance = (moveData.name === 'Waterfall' || moveData.name === 'waterfall') ? 0.2 : 0.3;
        if (Math.random() < flinchChance) {
            applyVolatileStatus(defender, VOLATILE_STATUS.FLINCH);
            effects.push(`${defender.name} 畏缩了！`);
        }
    } else if (moveData.name === 'Crunch' || moveData.name === 'crunch' ||
               moveData.name === 'Shadow Ball' || moveData.name === 'shadow-ball') {
        // 20% chance to lower Sp.Def
        if (Math.random() < 0.2) {
            const msg = changeStatStage(defender, 'spDefense', -1);
            if (msg) effects.push(msg);
        }
    } else if (moveData.name === 'Psychic' || moveData.name === 'psychic') {
        // 10% chance to lower Sp.Def
        if (Math.random() < 0.1) {
            const msg = changeStatStage(defender, 'spDefense', -1);
            if (msg) effects.push(msg);
        }
    } else if (moveData.name === 'Earth Power' || moveData.name === 'earth-power') {
        // 10% chance to lower Sp.Def
        if (Math.random() < 0.1) {
            const msg = changeStatStage(defender, 'spDefense', -1);
            if (msg) effects.push(msg);
        }
    } else if (moveData.name === 'Energy Ball' || moveData.name === 'energy-ball' ||
               moveData.name === 'Focus Blast' || moveData.name === 'focus-blast') {
        // 10% chance to lower Sp.Def
        if (Math.random() < 0.1) {
            const msg = changeStatStage(defender, 'spDefense', -1);
            if (msg) effects.push(msg);
        }
    } else if (moveData.name === 'Flash Cannon' || moveData.name === 'flash-cannon') {
        // 10% chance to lower Sp.Def
        if (Math.random() < 0.1) {
            const msg = changeStatStage(defender, 'spDefense', -1);
            if (msg) effects.push(msg);
        }
    } else if (moveData.name === 'Moonblast' || moveData.name === 'moonblast') {
        // 30% chance to lower Sp.Atk
        if (Math.random() < 0.3) {
            const msg = changeStatStage(defender, 'spAttack', -1);
            if (msg) effects.push(msg);
        }
    } else if (moveData.name === 'Play Rough' || moveData.name === 'play-rough') {
        // 10% chance to lower Attack
        if (Math.random() < 0.1) {
            const msg = changeStatStage(defender, 'attack', -1);
            if (msg) effects.push(msg);
        }
    } else if (moveData.name === 'Bulldoze' || moveData.name === 'bulldoze' ||
               moveData.name === 'Icy Wind' || moveData.name === 'icy-wind' ||
               moveData.name === 'Rock Tomb' || moveData.name === 'rock-tomb') {
        // 100% chance to lower Speed
        const msg = changeStatStage(defender, 'speed', -1);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'Hammer Arm' || moveData.name === 'hammer-arm') {
        // Lowers user's Speed
        const msg = changeStatStage(attacker, 'speed', -1);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'Superpower' || moveData.name === 'superpower' ||
               moveData.name === 'Close Combat' || moveData.name === 'close-combat') {
        // Lowers user's Def and Sp.Def
        const msg1 = changeStatStage(attacker, 'defense', -1);
        const msg2 = changeStatStage(attacker, 'spDefense', -1);
        if (msg1) effects.push(msg1);
        if (msg2) effects.push(msg2);
    } else if (moveData.name === 'Draco Meteor' || moveData.name === 'draco-meteor' ||
               moveData.name === 'Leaf Storm' || moveData.name === 'leaf-storm' ||
               moveData.name === 'Overheat' || moveData.name === 'overheat') {
        // Harshly lowers user's Sp.Atk
        const msg = changeStatStage(attacker, 'spAttack', -2);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'V-create' || moveData.name === 'v-create') {
        // Lowers user's Def, Sp.Def, and Speed
        const msg1 = changeStatStage(attacker, 'defense', -1);
        const msg2 = changeStatStage(attacker, 'spDefense', -1);
        const msg3 = changeStatStage(attacker, 'speed', -1);
        if (msg1) effects.push(msg1);
        if (msg2) effects.push(msg2);
        if (msg3) effects.push(msg3);
    } else if (moveData.name === 'Ancient Power' || moveData.name === 'ancient-power' ||
               moveData.name === 'Silver Wind' || moveData.name === 'silver-wind' ||
               moveData.name === 'Ominous Wind' || moveData.name === 'ominous-wind') {
        // 10% chance to raise all stats
        if (Math.random() < 0.1) {
            const msg1 = changeStatStage(attacker, 'attack', 1);
            const msg2 = changeStatStage(attacker, 'defense', 1);
            const msg3 = changeStatStage(attacker, 'spAttack', 1);
            const msg4 = changeStatStage(attacker, 'spDefense', 1);
            const msg5 = changeStatStage(attacker, 'speed', 1);
            if (msg1) effects.push(msg1);
            if (msg2) effects.push(msg2);
            if (msg3) effects.push(msg3);
            if (msg4) effects.push(msg4);
            if (msg5) effects.push(msg5);
        }
    } else if (moveData.name === 'Iron Head' || moveData.name === 'iron-head' ||
               moveData.name === 'Zen Headbutt' || moveData.name === 'zen-headbutt' ||
               moveData.name === 'Headbutt' || moveData.name === 'headbutt') {
        // 30% chance to flinch (20% for Headbutt)
        const flinchChance = (moveData.name === 'Headbutt' || moveData.name === 'headbutt') ? 0.2 : 0.3;
        if (Math.random() < flinchChance) {
            applyVolatileStatus(defender, VOLATILE_STATUS.FLINCH);
            effects.push(`${defender.name} 畏缩了！`);
        }
    } else if (moveData.name === 'Steel Wing' || moveData.name === 'steel-wing') {
        // 10% chance to raise user's Defense
        if (Math.random() < 0.1) {
            const msg = changeStatStage(attacker, 'defense', 1);
            if (msg) effects.push(msg);
        }
    } else if (moveData.name === 'Stone Edge' || moveData.name === 'stone-edge') {
        // High crit ratio (already handled in damage calculation)
    } else if (moveData.name === 'Meteor Mash' || moveData.name === 'meteor-mash') {
        // 20% chance to raise Attack
        if (Math.random() < 0.2) {
            const msg = changeStatStage(attacker, 'attack', 1);
            if (msg) effects.push(msg);
        }
    } else if (moveData.name === 'Power-Up Punch' || moveData.name === 'power-up-punch') {
        // 100% chance to raise Attack
        const msg = changeStatStage(attacker, 'attack', 1);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'Charge Beam' || moveData.name === 'charge-beam') {
        // 70% chance to raise Sp.Atk
        if (Math.random() < 0.7) {
            const msg = changeStatStage(attacker, 'spAttack', 1);
            if (msg) effects.push(msg);
        }
    } else if (moveData.name === 'Fiery Dance' || moveData.name === 'fiery-dance') {
        // 50% chance to raise Sp.Atk
        if (Math.random() < 0.5) {
            const msg = changeStatStage(attacker, 'spAttack', 1);
            if (msg) effects.push(msg);
        }
    } else if (moveData.name === 'Icy Wind' || moveData.name === 'icy-wind') {
        // Already handled above with Bulldoze
    } else if (moveData.name === 'Razor Shell' || moveData.name === 'razor-shell') {
        // 50% chance to lower Defense
        if (Math.random() < 0.5) {
            const msg = changeStatStage(defender, 'defense', -1);
            if (msg) effects.push(msg);
        }
    } else if (moveData.name === 'Bug Buzz' || moveData.name === 'bug-buzz') {
        // 10% chance to lower Sp.Def
        if (Math.random() < 0.1) {
            const msg = changeStatStage(defender, 'spDefense', -1);
            if (msg) effects.push(msg);
        }
    } else if (moveData.name === 'Air Slash' || moveData.name === 'air-slash' ||
               moveData.name === 'Astonish' || moveData.name === 'astonish') {
        // 30% chance to flinch
        if (Math.random() < 0.3) {
            applyVolatileStatus(defender, VOLATILE_STATUS.FLINCH);
            effects.push(`${defender.name} 畏缩了！`);
        }
    } else if (moveData.name === 'Extrasensory' || moveData.name === 'extrasensory' ||
               moveData.name === 'Stomp' || moveData.name === 'stomp') {
        // 10-30% chance to flinch
        const flinchChance = (moveData.name === 'Extrasensory' || moveData.name === 'extrasensory') ? 0.1 : 0.3;
        if (Math.random() < flinchChance) {
            applyVolatileStatus(defender, VOLATILE_STATUS.FLINCH);
            effects.push(`${defender.name} 畏缩了！`);
        }
    } else if (moveData.name === 'Bite' || moveData.name === 'bite' ||
               moveData.name === 'Dark Pulse' || moveData.name === 'dark-pulse') {
        // 30% chance to flinch (20% for Bite)
        const flinchChance = (moveData.name === 'Bite' || moveData.name === 'bite') ? 0.2 : 0.3;
        if (Math.random() < flinchChance) {
            applyVolatileStatus(defender, VOLATILE_STATUS.FLINCH);
            effects.push(`${defender.name} 畏缩了！`);
        }
    } else if (moveData.name === 'Ice Beam' || moveData.name === 'ice-beam' ||
               moveData.name === 'Ice Punch' || moveData.name === 'ice-punch') {
        // 10% chance to freeze
        if (Math.random() < 0.1 && applyStatusCondition(defender, STATUS_CONDITIONS.FREEZE)) {
            effects.push(`${defender.name} 被冻结了！`);
        }
    } else if (moveData.name === 'Blizzard' || moveData.name === 'blizzard') {
        // 10% chance to freeze
        if (Math.random() < 0.1 && applyStatusCondition(defender, STATUS_CONDITIONS.FREEZE)) {
            effects.push(`${defender.name} 被冻结了！`);
        }
    } else if (moveData.name === 'Tri Attack' || moveData.name === 'tri-attack') {
        // 20% chance to burn, freeze, or paralyze
        if (Math.random() < 0.2) {
            const statusRoll = Math.random();
            if (statusRoll < 0.33 && applyStatusCondition(defender, STATUS_CONDITIONS.BURN)) {
                effects.push(`${defender.name} 被灼伤了！`);
            } else if (statusRoll < 0.67 && applyStatusCondition(defender, STATUS_CONDITIONS.FREEZE)) {
                effects.push(`${defender.name} 被冻结了！`);
            } else if (applyStatusCondition(defender, STATUS_CONDITIONS.PARALYSIS)) {
                effects.push(`${defender.name} 被麻痹了！`);
            }
        }
    } else if (moveData.name === 'Nuzzle' || moveData.name === 'nuzzle') {
        // 100% chance to paralyze
        if (applyStatusCondition(defender, STATUS_CONDITIONS.PARALYSIS)) {
            effects.push(`${defender.name} 被麻痹了！`);
        }
    } else if (moveData.name === 'Fake Out' || moveData.name === 'fake-out') {
        // 100% chance to flinch (only works on first turn, but we'll simplify)
        applyVolatileStatus(defender, VOLATILE_STATUS.FLINCH);
        effects.push(`${defender.name} 畏缩了！`);
    }
    
    // Stat-changing moves
    if (moveData.name === 'Swords Dance' || moveData.name === 'swords-dance') {
        const msg = changeStatStage(attacker, 'attack', 2);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'Dragon Dance' || moveData.name === 'dragon-dance') {
        const msg1 = changeStatStage(attacker, 'attack', 1);
        const msg2 = changeStatStage(attacker, 'speed', 1);
        if (msg1) effects.push(msg1);
        if (msg2) effects.push(msg2);
    } else if (moveData.name === 'Nasty Plot' || moveData.name === 'nasty-plot') {
        const msg = changeStatStage(attacker, 'spAttack', 2);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'Calm Mind' || moveData.name === 'calm-mind') {
        const msg1 = changeStatStage(attacker, 'spAttack', 1);
        const msg2 = changeStatStage(attacker, 'spDefense', 1);
        if (msg1) effects.push(msg1);
        if (msg2) effects.push(msg2);
    } else if (moveData.name === 'Quiver Dance' || moveData.name === 'quiver-dance') {
        const msg1 = changeStatStage(attacker, 'spAttack', 1);
        const msg2 = changeStatStage(attacker, 'spDefense', 1);
        const msg3 = changeStatStage(attacker, 'speed', 1);
        if (msg1) effects.push(msg1);
        if (msg2) effects.push(msg2);
        if (msg3) effects.push(msg3);
    } else if (moveData.name === 'Shell Smash' || moveData.name === 'shell-smash') {
        // +2 Atk, SpA, Spe; -1 Def, SpD
        const msg1 = changeStatStage(attacker, 'attack', 2);
        const msg2 = changeStatStage(attacker, 'spAttack', 2);
        const msg3 = changeStatStage(attacker, 'speed', 2);
        const msg4 = changeStatStage(attacker, 'defense', -1);
        const msg5 = changeStatStage(attacker, 'spDefense', -1);
        if (msg1) effects.push(msg1);
        if (msg2) effects.push(msg2);
        if (msg3) effects.push(msg3);
        if (msg4) effects.push(msg4);
        if (msg5) effects.push(msg5);
    } else if (moveData.name === 'Bulk Up' || moveData.name === 'bulk-up') {
        const msg1 = changeStatStage(attacker, 'attack', 1);
        const msg2 = changeStatStage(attacker, 'defense', 1);
        if (msg1) effects.push(msg1);
        if (msg2) effects.push(msg2);
    } else if (moveData.name === 'Curse' || moveData.name === 'curse') {
        // For Ghost types, different effect; for others: +1 Atk/Def, -1 Spe
        if (attacker.data.types.some(t => t.type.name === 'ghost')) {
            // Ghost-type Curse (self-damage, but we'll skip for now)
            effects.push('但是失败了！');
        } else {
            const msg1 = changeStatStage(attacker, 'attack', 1);
            const msg2 = changeStatStage(attacker, 'defense', 1);
            const msg3 = changeStatStage(attacker, 'speed', -1);
            if (msg1) effects.push(msg1);
            if (msg2) effects.push(msg2);
            if (msg3) effects.push(msg3);
        }
    } else if (moveData.name === 'Agility' || moveData.name === 'agility' ||
               moveData.name === 'Rock Polish' || moveData.name === 'rock-polish') {
        const msg = changeStatStage(attacker, 'speed', 2);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'Iron Defense' || moveData.name === 'iron-defense' ||
               moveData.name === 'Acid Armor' || moveData.name === 'acid-armor') {
        const msg = changeStatStage(attacker, 'defense', 2);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'Amnesia' || moveData.name === 'amnesia') {
        const msg = changeStatStage(attacker, 'spDefense', 2);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'Hone Claws' || moveData.name === 'hone-claws') {
        const msg1 = changeStatStage(attacker, 'attack', 1);
        const msg2 = changeStatStage(attacker, 'accuracy', 1);
        if (msg1) effects.push(msg1);
        if (msg2) effects.push(msg2);
    } else if (moveData.name === 'Work Up' || moveData.name === 'work-up') {
        const msg1 = changeStatStage(attacker, 'attack', 1);
        const msg2 = changeStatStage(attacker, 'spAttack', 1);
        if (msg1) effects.push(msg1);
        if (msg2) effects.push(msg2);
    } else if (moveData.name === 'Coil' || moveData.name === 'coil') {
        const msg1 = changeStatStage(attacker, 'attack', 1);
        const msg2 = changeStatStage(attacker, 'defense', 1);
        const msg3 = changeStatStage(attacker, 'accuracy', 1);
        if (msg1) effects.push(msg1);
        if (msg2) effects.push(msg2);
        if (msg3) effects.push(msg3);
    } else if (moveData.name === 'Growl' || moveData.name === 'growl') {
        const msg = changeStatStage(defender, 'attack', -1);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'Tail Whip' || moveData.name === 'tail-whip' || moveData.name === 'Leer' || moveData.name === 'leer') {
        const msg = changeStatStage(defender, 'defense', -1);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'String Shot' || moveData.name === 'string-shot') {
        const msg = changeStatStage(defender, 'speed', -1);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'Scary Face' || moveData.name === 'scary-face' ||
               moveData.name === 'Cotton Spore' || moveData.name === 'cotton-spore') {
        const msg = changeStatStage(defender, 'speed', -2);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'Screech' || moveData.name === 'screech') {
        const msg = changeStatStage(defender, 'defense', -2);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'Charm' || moveData.name === 'charm' ||
               moveData.name === 'Feather Dance' || moveData.name === 'feather-dance') {
        const msg = changeStatStage(defender, 'attack', -2);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'Fake Tears' || moveData.name === 'fake-tears') {
        const msg = changeStatStage(defender, 'spDefense', -2);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'Metal Sound' || moveData.name === 'metal-sound') {
        const msg = changeStatStage(defender, 'spDefense', -2);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'Tickle' || moveData.name === 'tickle') {
        const msg1 = changeStatStage(defender, 'attack', -1);
        const msg2 = changeStatStage(defender, 'defense', -1);
        if (msg1) effects.push(msg1);
        if (msg2) effects.push(msg2);
    } else if (moveData.name === 'Shift Gear' || moveData.name === 'shift-gear') {
        const msg1 = changeStatStage(attacker, 'attack', 1);
        const msg2 = changeStatStage(attacker, 'speed', 2);
        if (msg1) effects.push(msg1);
        if (msg2) effects.push(msg2);
    } else if (moveData.name === 'Autotomize' || moveData.name === 'autotomize') {
        const msg = changeStatStage(attacker, 'speed', 2);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'Stockpile' || moveData.name === 'stockpile') {
        const msg1 = changeStatStage(attacker, 'defense', 1);
        const msg2 = changeStatStage(attacker, 'spDefense', 1);
        if (msg1) effects.push(msg1);
        if (msg2) effects.push(msg2);
    } else if (moveData.name === 'Cosmic Power' || moveData.name === 'cosmic-power') {
        const msg1 = changeStatStage(attacker, 'defense', 1);
        const msg2 = changeStatStage(attacker, 'spDefense', 1);
        if (msg1) effects.push(msg1);
        if (msg2) effects.push(msg2);
    } else if (moveData.name === 'Growth' || moveData.name === 'growth') {
        // +1 Atk/SpA normally, +2 in sun
        const boost = (gameState.weather === WEATHER_CONDITIONS.SUN) ? 2 : 1;
        const msg1 = changeStatStage(attacker, 'attack', boost);
        const msg2 = changeStatStage(attacker, 'spAttack', boost);
        if (msg1) effects.push(msg1);
        if (msg2) effects.push(msg2);
    } else if (moveData.name === 'Acupressure' || moveData.name === 'acupressure') {
        // Sharply raises a random stat
        const stats = ['attack', 'defense', 'spAttack', 'spDefense', 'speed', 'accuracy', 'evasion'];
        const randomStat = stats[Math.floor(Math.random() * stats.length)];
        const msg = changeStatStage(attacker, randomStat, 2);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'Double Team' || moveData.name === 'double-team' ||
               moveData.name === 'Minimize' || moveData.name === 'minimize') {
        const msg = changeStatStage(attacker, 'evasion', 1);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'Flash' || moveData.name === 'flash' ||
               moveData.name === 'Sand Attack' || moveData.name === 'sand-attack' ||
               moveData.name === 'Smokescreen' || moveData.name === 'smokescreen') {
        const msg = changeStatStage(defender, 'accuracy', -1);
        if (msg) effects.push(msg);
    } else if (moveData.name === 'Swagger' || moveData.name === 'swagger' ||
               moveData.name === 'Flatter' || moveData.name === 'flatter') {
        // Raises target's Attack/SpA and confuses it
        const stat = (moveData.name === 'Flatter' || moveData.name === 'flatter') ? 'spAttack' : 'attack';
        const msg = changeStatStage(defender, stat, 2);
        if (msg) effects.push(msg);
        if (applyVolatileStatus(defender, VOLATILE_STATUS.CONFUSION)) {
            effects.push(`${defender.name} 混乱了！`);
            defender.confusionTurns = 0;
        }
    } else if (moveData.name === 'Noble Roar' || moveData.name === 'noble-roar' ||
               moveData.name === 'Venom Drench' || moveData.name === 'venom-drench') {
        // Lowers Attack and Sp.Atk
        const msg1 = changeStatStage(defender, 'attack', -1);
        const msg2 = changeStatStage(defender, 'spAttack', -1);
        if (msg1) effects.push(msg1);
        if (msg2) effects.push(msg2);
    } else if (moveData.name === 'Parting Shot' || moveData.name === 'parting-shot') {
        // Lowers Attack and Sp.Atk, then switches out
        const msg1 = changeStatStage(defender, 'attack', -1);
        const msg2 = changeStatStage(defender, 'spAttack', -1);
        if (msg1) effects.push(msg1);
        if (msg2) effects.push(msg2);
    }
    
    // Confusion
    if (moveData.name === 'Confuse Ray' || moveData.name === 'confuse-ray' || moveData.name === 'Supersonic' || moveData.name === 'supersonic') {
        if (applyVolatileStatus(defender, VOLATILE_STATUS.CONFUSION)) {
            effects.push(`${defender.name} 混乱了！`);
            defender.confusionTurns = 0;
        }
    }
    
    // Weather-setting moves
    if (moveData.name === 'Sunny Day' || moveData.name === 'sunny-day') {
        gameState.weather = WEATHER_CONDITIONS.SUN;
        gameState.weatherTurns = 5;
        effects.push('阳光变得很强烈！');
    } else if (moveData.name === 'Rain Dance' || moveData.name === 'rain-dance') {
        gameState.weather = WEATHER_CONDITIONS.RAIN;
        gameState.weatherTurns = 5;
        effects.push('开始下雨了！');
    } else if (moveData.name === 'Sandstorm' || moveData.name === 'sandstorm') {
        gameState.weather = WEATHER_CONDITIONS.SANDSTORM;
        gameState.weatherTurns = 5;
        effects.push('沙暴开始了！');
    } else if (moveData.name === 'Hail' || moveData.name === 'hail') {
        gameState.weather = WEATHER_CONDITIONS.HAIL;
        gameState.weatherTurns = 5;
        effects.push('开始下冰雹了！');
    }
    
    // Terrain-setting moves
    if (moveData.name === 'Electric Terrain' || moveData.name === 'electric-terrain') {
        gameState.terrain = TERRAIN_CONDITIONS.ELECTRIC;
        gameState.terrainTurns = 5;
        effects.push('脚下涌起了电流！');
    } else if (moveData.name === 'Grassy Terrain' || moveData.name === 'grassy-terrain') {
        gameState.terrain = TERRAIN_CONDITIONS.GRASSY;
        gameState.terrainTurns = 5;
        effects.push('脚下的草生长茂盛了！');
    } else if (moveData.name === 'Misty Terrain' || moveData.name === 'misty-terrain') {
        gameState.terrain = TERRAIN_CONDITIONS.MISTY;
        gameState.terrainTurns = 5;
        effects.push('脚下被雾笼罩了！');
    } else if (moveData.name === 'Psychic Terrain' || moveData.name === 'psychic-terrain') {
        gameState.terrain = TERRAIN_CONDITIONS.PSYCHIC;
        gameState.terrainTurns = 5;
        effects.push('脚下变得很奇怪！');
    }
    
    // Flinch-inducing moves (30% chance for most)
    if (moveData.name === 'Fake Out' || moveData.name === 'fake-out') {
        // Fake Out always flinches on first turn
        if (gameState.turnCount === 1) {
            applyVolatileStatus(defender, VOLATILE_STATUS.FLINCH);
            effects.push(`${defender.name} 畏缩了！`);
        }
    } else if (moveData.name === 'Air Slash' || moveData.name === 'air-slash' ||
               moveData.name === 'Iron Head' || moveData.name === 'iron-head' ||
               moveData.name === 'Zen Headbutt' || moveData.name === 'zen-headbutt') {
        // 30% flinch chance
        if (Math.random() < 0.3) {
            applyVolatileStatus(defender, VOLATILE_STATUS.FLINCH);
            effects.push(`${defender.name} 畏缩了！`);
        }
    }
    
    // Protect
    if (moveData.name === 'Protect' || moveData.name === 'protect' || moveData.name === 'Detect' || moveData.name === 'detect') {
        if (!attacker.protectUsed) {
            applyVolatileStatus(attacker, VOLATILE_STATUS.PROTECT);
            effects.push(`${attacker.name} 保护了自己！`);
            attacker.protectUsed = true;
        } else {
            effects.push('但是失败了！');
        }
    }
    
    return effects;
}

async function loadPokemonList() {
    // Try to use fallback data first if available
    if (typeof POKEMON_LIST !== 'undefined' && POKEMON_LIST.length > 0) {
        gameState.availablePokemon = POKEMON_LIST;
        return POKEMON_LIST;
    }
    
    try {
        // Load all Pokemon (Gen 1-9, 1025 total)
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
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
    // Save scroll position when leaving selection screen
    if (document.getElementById('selectionScreen').classList.contains('active')) {
        gameState.scrollPosition = window.scrollY || window.pageYOffset;
    }
    
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    
    // Restore scroll position when returning to selection screen
    if (screenId === 'selectionScreen' && gameState.scrollPosition > 0) {
        setTimeout(() => {
            window.scrollTo(0, gameState.scrollPosition);
        }, 0);
    }
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

// ==================== Status Condition Functions ====================

function applyStatusCondition(pokemon, status) {
    // Can't apply status if already has one (except volatile)
    if (pokemon.status !== STATUS_CONDITIONS.NONE && pokemon.status !== status) {
        return false;
    }
    
    // Type immunities
    if (status === STATUS_CONDITIONS.BURN && pokemon.data.types.some(t => t.type.name === 'fire')) {
        return false;
    }
    if (status === STATUS_CONDITIONS.POISON && pokemon.data.types.some(t => t.type.name === 'poison' || t.type.name === 'steel')) {
        return false;
    }
    if (status === STATUS_CONDITIONS.PARALYSIS && pokemon.data.types.some(t => t.type.name === 'electric')) {
        return false;
    }
    
    pokemon.status = status;
    pokemon.statusTurns = 0;
    return true;
}

function applyVolatileStatus(pokemon, volatileStatus) {
    if (!pokemon.volatileStatus.includes(volatileStatus)) {
        pokemon.volatileStatus.push(volatileStatus);
        return true;
    }
    return false;
}

function removeVolatileStatus(pokemon, volatileStatus) {
    const index = pokemon.volatileStatus.indexOf(volatileStatus);
    if (index > -1) {
        pokemon.volatileStatus.splice(index, 1);
    }
}

function getStatusDamage(pokemon) {
    let damage = 0;
    
    if (pokemon.status === STATUS_CONDITIONS.BURN) {
        damage = Math.floor(pokemon.maxHP / 16);
    } else if (pokemon.status === STATUS_CONDITIONS.POISON) {
        damage = Math.floor(pokemon.maxHP / 8);
    } else if (pokemon.status === STATUS_CONDITIONS.BADLY_POISON) {
        pokemon.statusTurns++;
        damage = Math.floor((pokemon.maxHP * pokemon.statusTurns) / 16);
    }
    
    return damage;
}

function canMove(pokemon) {
    // Check if Pokemon flinched
    if (pokemon.volatileStatus.includes(VOLATILE_STATUS.FLINCH)) {
        return { canMove: false, message: `${pokemon.name} 畏缩了！` };
    }
    
    // Check if Pokemon is frozen
    if (pokemon.status === STATUS_CONDITIONS.FREEZE) {
        // 20% chance to thaw
        if (Math.random() < 0.2) {
            pokemon.status = STATUS_CONDITIONS.NONE;
            return { canMove: true, message: `${pokemon.name} 解冻了！` };
        }
        return { canMove: false, message: `${pokemon.name} 冻住了！` };
    }
    
    // Check if Pokemon is asleep
    if (pokemon.status === STATUS_CONDITIONS.SLEEP) {
        pokemon.statusTurns++;
        if (pokemon.statusTurns >= 3) {
            pokemon.status = STATUS_CONDITIONS.NONE;
            pokemon.statusTurns = 0;
            return { canMove: true, message: `${pokemon.name} 醒了！` };
        }
        return { canMove: false, message: `${pokemon.name} 正在睡觉！` };
    }
    
    // Check if Pokemon is paralyzed (25% chance to be fully paralyzed)
    if (pokemon.status === STATUS_CONDITIONS.PARALYSIS) {
        if (Math.random() < 0.25) {
            return { canMove: false, message: `${pokemon.name} 身体麻痹了！` };
        }
    }
    
    // Check confusion
    if (pokemon.volatileStatus.includes(VOLATILE_STATUS.CONFUSION)) {
        pokemon.confusionTurns++;
        if (pokemon.confusionTurns >= 4 || Math.random() < 0.33) {
            removeVolatileStatus(pokemon, VOLATILE_STATUS.CONFUSION);
            pokemon.confusionTurns = 0;
            if (pokemon.confusionTurns === 0) {
                return { canMove: true, message: `${pokemon.name} 从混乱中恢复了！` };
            }
        }
        
        // 33% chance to hit itself in confusion
        if (Math.random() < 0.33) {
            const confusionDamage = Math.floor(pokemon.stats.attack * 40 / pokemon.stats.defense / 50 + 2);
            return { canMove: false, message: `${pokemon.name} 在混乱中攻击了自己！`, selfDamage: confusionDamage };
        }
    }
    
    return { canMove: true };
}

function getStatMultiplier(statChange) {
    if (statChange >= 0) {
        return (2 + statChange) / 2;
    } else {
        return 2 / (2 - statChange);
    }
}

function changeStatStage(pokemon, stat, stages) {
    const oldValue = pokemon.statChanges[stat];
    pokemon.statChanges[stat] = Math.max(-6, Math.min(6, oldValue + stages));
    
    if (pokemon.statChanges[stat] === oldValue) {
        return null; // No change
    }
    
    const direction = stages > 0 ? '上升' : '下降';
    const amount = Math.abs(stages) === 1 ? '' : 
                   Math.abs(stages) === 2 ? '大幅' : 
                   Math.abs(stages) === 3 ? '极大地' : '剧烈地';
    
    const statNames = {
        attack: '攻击',
        defense: '防御',
        spAttack: '特攻',
        spDefense: '特防',
        speed: '速度',
        accuracy: '命中率',
        evasion: '闪避率'
    };
    
    return `${pokemon.name} 的 ${statNames[stat]} ${amount}${direction}了！`;
}

function getModifiedStat(pokemon, statName) {
    let baseStat = pokemon.stats[statName];
    
    // Apply stat stage multiplier
    const multiplier = getStatMultiplier(pokemon.statChanges[statName]);
    let modifiedStat = Math.floor(baseStat * multiplier);
    
    // Apply status effects
    if (statName === 'attack' && pokemon.status === STATUS_CONDITIONS.BURN) {
        modifiedStat = Math.floor(modifiedStat * 0.5);
    }
    if (statName === 'speed' && pokemon.status === STATUS_CONDITIONS.PARALYSIS) {
        modifiedStat = Math.floor(modifiedStat * 0.5);
    }
    
    // Apply weather effects
    if (gameState.weather === WEATHER_CONDITIONS.SANDSTORM && 
        pokemon.data.types.some(t => t.type.name === 'rock') &&
        statName === 'spDefense') {
        modifiedStat = Math.floor(modifiedStat * 1.5);
    }
    
    // Apply ability effects
    if (statName === 'speed') {
        // Chlorophyll doubles speed in sun
        if (pokemon.ability === 'Chlorophyll' && gameState.weather === WEATHER_CONDITIONS.SUN) {
            modifiedStat = Math.floor(modifiedStat * 2);
        }
        // Swift Swim doubles speed in rain
        if (pokemon.ability === 'Swift Swim' && gameState.weather === WEATHER_CONDITIONS.RAIN) {
            modifiedStat = Math.floor(modifiedStat * 2);
        }
        // Sand Rush doubles speed in sandstorm
        if (pokemon.ability === 'Sand Rush' && gameState.weather === WEATHER_CONDITIONS.SANDSTORM) {
            modifiedStat = Math.floor(modifiedStat * 2);
        }
    }
    
    // Apply item effects - Choice Scarf
    if (statName === 'speed' && pokemon.item === 'Choice Scarf') {
        modifiedStat = Math.floor(modifiedStat * 1.5);
    }
    
    return modifiedStat;
}

async function calculateDamage(attacker, defender, move) {
    const moveData = await fetchMoveData(move.name);
    if (!moveData || !moveData.power) {
        // Check for fixed damage moves
        if (moveData && (moveData.name === 'Seismic Toss' || moveData.name === 'seismic-toss' ||
                         moveData.name === 'Night Shade' || moveData.name === 'night-shade')) {
            // Fixed damage = attacker's level
            return { 
                damage: attacker.level, 
                effectiveness: 1, 
                critical: false, 
                moveType: moveData.type.name,
                isFixedDamage: true
            };
        } else if (moveData && (moveData.name === 'Dragon Rage' || moveData.name === 'dragon-rage')) {
            // Fixed 40 damage
            return { 
                damage: 40, 
                effectiveness: 1, 
                critical: false, 
                moveType: moveData.type.name,
                isFixedDamage: true
            };
        } else if (moveData && (moveData.name === 'Sonic Boom' || moveData.name === 'sonic-boom')) {
            // Fixed 20 damage
            return { 
                damage: 20, 
                effectiveness: 1, 
                critical: false, 
                moveType: moveData.type.name,
                isFixedDamage: true
            };
        }
        
        return { damage: 0, effectiveness: 1, critical: false, moveType: 'normal' };
    }
    
    const level = 50;
    let power = moveData.power;
    
    // Multi-hit moves
    let hits = 1;
    if (moveData.name === 'Double Slap' || moveData.name === 'double-slap' ||
        moveData.name === 'Fury Attack' || moveData.name === 'fury-attack' ||
        moveData.name === 'Comet Punch' || moveData.name === 'comet-punch' ||
        moveData.name === 'Fury Swipes' || moveData.name === 'fury-swipes' ||
        moveData.name === 'Spike Cannon' || moveData.name === 'spike-cannon' ||
        moveData.name === 'Pin Missile' || moveData.name === 'pin-missile') {
        // 2-5 hits (35% 2 hits, 35% 3 hits, 15% 4 hits, 15% 5 hits)
        const rand = Math.random();
        if (rand < 0.35) hits = 2;
        else if (rand < 0.70) hits = 3;
        else if (rand < 0.85) hits = 4;
        else hits = 5;
    } else if (moveData.name === 'Double Kick' || moveData.name === 'double-kick' ||
               moveData.name === 'Bonemerang' || moveData.name === 'bonemerang' ||
               moveData.name === 'Double Hit' || moveData.name === 'double-hit') {
        hits = 2;
    } else if (moveData.name === 'Triple Kick' || moveData.name === 'triple-kick') {
        hits = 3;
    } else if (moveData.name === 'Bullet Seed' || moveData.name === 'bullet-seed' ||
               moveData.name === 'Icicle Spear' || moveData.name === 'icicle-spear' ||
               moveData.name === 'Rock Blast' || moveData.name === 'rock-blast') {
        // 2-5 hits (same as above)
        const rand = Math.random();
        if (rand < 0.35) hits = 2;
        else if (rand < 0.70) hits = 3;
        else if (rand < 0.85) hits = 4;
        else hits = 5;
    }
    
    // Get modified stats (with stat changes, status, weather)
    let attackStat = moveData.damage_class.name === 'physical' ? 
        getModifiedStat(attacker, 'attack') : 
        getModifiedStat(attacker, 'spAttack');
    let defenseStat = moveData.damage_class.name === 'physical' ? 
        getModifiedStat(defender, 'defense') : 
        getModifiedStat(defender, 'spDefense');
    
    // Ability effects on stats
    if (defender.ability === 'Thick Fat' && (moveData.type.name === 'fire' || moveData.type.name === 'ice')) {
        power = Math.floor(power * 0.5);
    }
    
    // Item effects - Assault Vest
    if (defender.item === 'Assault Vest' && moveData.damage_class.name === 'special') {
        defenseStat = Math.floor(defenseStat * 1.5);
    }
    
    // Item effects - Choice Specs/Band
    if (attacker.item === 'Choice Specs' && moveData.damage_class.name === 'special') {
        attackStat = Math.floor(attackStat * 1.5);
    } else if (attacker.item === 'Choice Band' && moveData.damage_class.name === 'physical') {
        attackStat = Math.floor(attackStat * 1.5);
    }
    
    // Check STAB (Same Type Attack Bonus)
    const stab = attacker.data.types.some(t => t.type.name === moveData.type.name) ? 1.5 : 1;
    
    // Type effectiveness
    let effectiveness = getTypeEffectiveness(moveData.type.name, defender.data.types);
    
    // Ability: Levitate - immune to ground moves
    if (defender.ability === 'Levitate' && moveData.type.name === 'ground') {
        effectiveness = 0;
    }
    
    // Ability: Water Absorb - immune to water moves and heal
    if (defender.ability === 'Water Absorb' && moveData.type.name === 'water') {
        effectiveness = 0;
        // Heal will be applied separately
    }
    
    // Weather effects
    let weatherMultiplier = 1;
    if (gameState.weather === WEATHER_CONDITIONS.SUN) {
        if (moveData.type.name === 'fire') weatherMultiplier = 1.5;
        if (moveData.type.name === 'water') weatherMultiplier = 0.5;
        // Chlorophyll doubles speed in sun (handled in getModifiedStat)
    } else if (gameState.weather === WEATHER_CONDITIONS.RAIN) {
        if (moveData.type.name === 'water') weatherMultiplier = 1.5;
        if (moveData.type.name === 'fire') weatherMultiplier = 0.5;
    }
    
    // Terrain effects
    let terrainMultiplier = 1;
    // Check if Pokemon is grounded (not flying type or Levitate)
    const isGrounded = !attacker.data.types.some(t => t.type.name === 'flying') && 
                       attacker.ability !== 'Levitate';
    
    if (isGrounded) {
        if (gameState.terrain === TERRAIN_CONDITIONS.ELECTRIC && moveData.type.name === 'electric') {
            terrainMultiplier = 1.3;
        } else if (gameState.terrain === TERRAIN_CONDITIONS.GRASSY && moveData.type.name === 'grass') {
            terrainMultiplier = 1.3;
        } else if (gameState.terrain === TERRAIN_CONDITIONS.PSYCHIC && moveData.type.name === 'psychic') {
            terrainMultiplier = 1.3;
        }
        
        // Grassy Terrain reduces Earthquake damage
        if (gameState.terrain === TERRAIN_CONDITIONS.GRASSY && moveData.name === 'earthquake') {
            terrainMultiplier = 0.5;
        }
    }
    
    // Misty Terrain reduces dragon move damage to grounded targets
    if (gameState.terrain === TERRAIN_CONDITIONS.MISTY && moveData.type.name === 'dragon') {
        const defenderGrounded = !defender.data.types.some(t => t.type.name === 'flying') && 
                                 defender.ability !== 'Levitate';
        if (defenderGrounded) {
            terrainMultiplier = 0.5;
        }
    }
    
    // Random factor (85-100%)
    const random = (Math.random() * 0.15 + 0.85);
    
    // Critical hit (6.25% chance)
    const critical = Math.random() < 0.0625 ? 2 : 1;
    
    // Damage formula (Gen VI formula)
    const baseDamage = ((2 * level / 5 + 2) * power * attackStat / defenseStat / 50 + 2);
    let damage = Math.floor(baseDamage * stab * effectiveness * weatherMultiplier * terrainMultiplier * random * critical);
    
    // Life Orb boosts damage by 30%
    if (attacker.item === 'Life Orb' && damage > 0) {
        damage = Math.floor(damage * 1.3);
    }
    
    // Apply multi-hit
    damage = damage * hits;
    
    return {
        damage: Math.max(1, damage),
        effectiveness,
        critical: critical === 2,
        moveType: moveData.type.name,
        hits: hits
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
                fainted: false,
                status: STATUS_CONDITIONS.NONE,
                volatileStatus: [],
                statChanges: { attack: 0, defense: 0, spAttack: 0, spDefense: 0, speed: 0, accuracy: 0, evasion: 0 },
                statusTurns: 0,
                confusionTurns: 0,
                substituteHP: 0,
                protectUsed: false,
                ability: opponentData.ability,
                item: opponentData.item
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
    let opponentNameText = currentOpponent.name;
    if (currentOpponent.status !== STATUS_CONDITIONS.NONE) {
        const statusIcons = {
            [STATUS_CONDITIONS.BURN]: '🔥',
            [STATUS_CONDITIONS.POISON]: '☠️',
            [STATUS_CONDITIONS.BADLY_POISON]: '💀',
            [STATUS_CONDITIONS.PARALYSIS]: '⚡',
            [STATUS_CONDITIONS.SLEEP]: '💤',
            [STATUS_CONDITIONS.FREEZE]: '❄️'
        };
        opponentNameText += ' ' + statusIcons[currentOpponent.status];
    }
    document.getElementById('opponentName').textContent = opponentNameText;
    document.getElementById('opponentLevel').textContent = `Lv.${currentOpponent.level}`;
    document.getElementById('opponentHP').textContent = `${currentOpponent.currentHP}/${currentOpponent.maxHP}`;
    updateHPBar('opponent', currentOpponent.currentHP, currentOpponent.maxHP);
    
    const opponentSprite = document.getElementById('opponentSprite');
    opponentSprite.innerHTML = `<img src="${currentOpponent.data.sprites.front_default}" alt="${currentOpponent.name}">`;
    
    // Render player
    let playerNameText = currentPlayer.name;
    if (currentPlayer.status !== STATUS_CONDITIONS.NONE) {
        const statusIcons = {
            [STATUS_CONDITIONS.BURN]: '🔥',
            [STATUS_CONDITIONS.POISON]: '☠️',
            [STATUS_CONDITIONS.BADLY_POISON]: '💀',
            [STATUS_CONDITIONS.PARALYSIS]: '⚡',
            [STATUS_CONDITIONS.SLEEP]: '💤',
            [STATUS_CONDITIONS.FREEZE]: '❄️'
        };
        playerNameText += ' ' + statusIcons[currentPlayer.status];
    }
    document.getElementById('playerName').textContent = playerNameText;
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
    
    gameState.turnCount++;
    
    const currentPlayer = gameState.playerTeam[gameState.currentPlayerIndex];
    const currentOpponent = gameState.opponentTeam[gameState.currentOpponentIndex];
    
    const playerMove = currentPlayer.moves[moveIndex];
    const opponentMove = selectAIMove(currentOpponent, currentPlayer);
    
    // Get move priorities
    const playerPriority = getMovePriority(playerMove.name);
    const opponentPriority = getMovePriority(opponentMove.name);
    
    // Determine turn order based on priority, then speed
    const playerSpeed = getModifiedStat(currentPlayer, 'speed');
    const opponentSpeed = getModifiedStat(currentOpponent, 'speed');
    
    let firstAttacker, firstMove, secondAttacker, secondMove;
    
    if (playerPriority > opponentPriority) {
        // Player has priority
        firstAttacker = 'player';
        firstMove = playerMove;
        secondAttacker = 'opponent';
        secondMove = opponentMove;
    } else if (opponentPriority > playerPriority) {
        // Opponent has priority
        firstAttacker = 'opponent';
        firstMove = opponentMove;
        secondAttacker = 'player';
        secondMove = playerMove;
    } else if (playerSpeed > opponentSpeed) {
        // Same priority, player faster
        firstAttacker = 'player';
        firstMove = playerMove;
        secondAttacker = 'opponent';
        secondMove = opponentMove;
    } else if (playerSpeed < opponentSpeed) {
        // Same priority, opponent faster
        firstAttacker = 'opponent';
        firstMove = opponentMove;
        secondAttacker = 'player';
        secondMove = playerMove;
    } else {
        // Speed tie - random
        if (Math.random() < 0.5) {
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
    }
    
    // Execute first attack
    const firstPokemon = firstAttacker === 'player' ? currentPlayer : currentOpponent;
    const canMoveResult = canMove(firstPokemon);
    
    if (canMoveResult.message) {
        addLog(canMoveResult.message);
        await sleep(500);
    }
    
    if (canMoveResult.canMove) {
        await executeAttack(firstAttacker, firstMove);
    } else if (canMoveResult.selfDamage) {
        // Confusion self-damage
        firstPokemon.currentHP = Math.max(0, firstPokemon.currentHP - canMoveResult.selfDamage);
        updateHPBar(firstAttacker, firstPokemon.currentHP, firstPokemon.maxHP);
        document.getElementById(`${firstAttacker}HP`).textContent = `${firstPokemon.currentHP}/${firstPokemon.maxHP}`;
        
        if (firstPokemon.currentHP === 0) {
            firstPokemon.fainted = true;
        }
    }
    
    // Check if battle ended
    if (checkBattleEnd()) {
        return;
    }
    
    // Check if DEFENDER's Pokemon fainted after first attack, forcing a switch
    if (firstAttacker === 'player' && currentOpponent.fainted) {
        await switchOpponentPokemon();
        if (checkBattleEnd()) return;
    } else if (firstAttacker === 'opponent' && currentPlayer.fainted) {
        await handleForcedSwitch('player');
        moveButtons.forEach(btn => btn.disabled = false);
        return;
    }
    
    // Small delay between attacks
    await sleep(500);
    
    // Execute second attack if both Pokemon still alive
    const secondPokemon = secondAttacker === 'player' ? 
        gameState.playerTeam[gameState.currentPlayerIndex] : 
        gameState.opponentTeam[gameState.currentOpponentIndex];
    
    if (!secondPokemon.fainted) {
        const canMoveResult2 = canMove(secondPokemon);
        
        if (canMoveResult2.message) {
            addLog(canMoveResult2.message);
            await sleep(500);
        }
        
        if (canMoveResult2.canMove) {
            await executeAttack(secondAttacker, secondMove);
        } else if (canMoveResult2.selfDamage) {
            // Confusion self-damage
            secondPokemon.currentHP = Math.max(0, secondPokemon.currentHP - canMoveResult2.selfDamage);
            updateHPBar(secondAttacker, secondPokemon.currentHP, secondPokemon.maxHP);
            document.getElementById(`${secondAttacker}HP`).textContent = `${secondPokemon.currentHP}/${secondPokemon.maxHP}`;
            
            if (secondPokemon.currentHP === 0) {
                secondPokemon.fainted = true;
            }
        }
    }
    
    // Check if battle ended
    if (checkBattleEnd()) {
        return;
    }
    
    // Check for faints after second attack
    if (secondAttacker === 'player' && secondPokemon.fainted) {
        await handleForcedSwitch('player');
    } else if (secondAttacker === 'opponent' && secondPokemon.fainted) {
        await switchOpponentPokemon();
    }
    
    // End of turn effects
    await applyEndOfTurnEffects();
    
    checkBattleEnd();
    
    // Re-enable move buttons
    moveButtons.forEach(btn => btn.disabled = false);
}

async function applyEndOfTurnEffects() {
    const currentPlayer = gameState.playerTeam[gameState.currentPlayerIndex];
    const currentOpponent = gameState.opponentTeam[gameState.currentOpponentIndex];
    
    // Apply status damage to player
    if (!currentPlayer.fainted && currentPlayer.status !== STATUS_CONDITIONS.NONE) {
        const damage = getStatusDamage(currentPlayer);
        if (damage > 0) {
            currentPlayer.currentHP = Math.max(0, currentPlayer.currentHP - damage);
            updateHPBar('player', currentPlayer.currentHP, currentPlayer.maxHP);
            document.getElementById('playerHP').textContent = `${currentPlayer.currentHP}/${currentPlayer.maxHP}`;
            
            if (currentPlayer.status === STATUS_CONDITIONS.BURN) {
                addLog(`${currentPlayer.name} 受到了灼伤的伤害！`);
            } else if (currentPlayer.status === STATUS_CONDITIONS.POISON || currentPlayer.status === STATUS_CONDITIONS.BADLY_POISON) {
                addLog(`${currentPlayer.name} 受到了中毒的伤害！`);
            }
            
            await sleep(500);
            
            if (currentPlayer.currentHP === 0) {
                currentPlayer.fainted = true;
                addLog(`${currentPlayer.name} 失去了战斗能力！`);
                await sleep(500);
            }
        }
    }
    
    // Apply status damage to opponent
    if (!currentOpponent.fainted && currentOpponent.status !== STATUS_CONDITIONS.NONE) {
        const damage = getStatusDamage(currentOpponent);
        if (damage > 0) {
            currentOpponent.currentHP = Math.max(0, currentOpponent.currentHP - damage);
            updateHPBar('opponent', currentOpponent.currentHP, currentOpponent.maxHP);
            document.getElementById('opponentHP').textContent = `${currentOpponent.currentHP}/${currentOpponent.maxHP}`;
            
            if (currentOpponent.status === STATUS_CONDITIONS.BURN) {
                addLog(`${currentOpponent.name} 受到了灼伤的伤害！`);
            } else if (currentOpponent.status === STATUS_CONDITIONS.POISON || currentOpponent.status === STATUS_CONDITIONS.BADLY_POISON) {
                addLog(`${currentOpponent.name} 受到了中毒的伤害！`);
            }
            
            await sleep(500);
            
            if (currentOpponent.currentHP === 0) {
                currentOpponent.fainted = true;
                addLog(`${currentOpponent.name} 失去了战斗能力！`);
                await sleep(500);
            }
        }
    }
    
    // Leech Seed damage
    if (!currentPlayer.fainted && currentPlayer.volatileStatus.includes(VOLATILE_STATUS.LEECH_SEED)) {
        const damage = Math.floor(currentPlayer.maxHP / 8);
        currentPlayer.currentHP = Math.max(0, currentPlayer.currentHP - damage);
        updateHPBar('player', currentPlayer.currentHP, currentPlayer.maxHP);
        document.getElementById('playerHP').textContent = `${currentPlayer.currentHP}/${currentPlayer.maxHP}`;
        addLog(`${currentPlayer.name} 被种子吸取了体力！`);
        
        // Heal opponent
        if (!currentOpponent.fainted) {
            const heal = Math.min(damage, currentOpponent.maxHP - currentOpponent.currentHP);
            currentOpponent.currentHP = Math.min(currentOpponent.maxHP, currentOpponent.currentHP + heal);
            updateHPBar('opponent', currentOpponent.currentHP, currentOpponent.maxHP);
            document.getElementById('opponentHP').textContent = `${currentOpponent.currentHP}/${currentOpponent.maxHP}`;
        }
        
        await sleep(500);
        
        if (currentPlayer.currentHP === 0) {
            currentPlayer.fainted = true;
            addLog(`${currentPlayer.name} 失去了战斗能力！`);
            await sleep(500);
        }
    }
    
    if (!currentOpponent.fainted && currentOpponent.volatileStatus.includes(VOLATILE_STATUS.LEECH_SEED)) {
        const damage = Math.floor(currentOpponent.maxHP / 8);
        currentOpponent.currentHP = Math.max(0, currentOpponent.currentHP - damage);
        updateHPBar('opponent', currentOpponent.currentHP, currentOpponent.maxHP);
        document.getElementById('opponentHP').textContent = `${currentOpponent.currentHP}/${currentOpponent.maxHP}`;
        addLog(`${currentOpponent.name} 被种子吸取了体力！`);
        
        // Heal player
        if (!currentPlayer.fainted) {
            const heal = Math.min(damage, currentPlayer.maxHP - currentPlayer.currentHP);
            currentPlayer.currentHP = Math.min(currentPlayer.maxHP, currentPlayer.currentHP + heal);
            updateHPBar('player', currentPlayer.currentHP, currentPlayer.maxHP);
            document.getElementById('playerHP').textContent = `${currentPlayer.currentHP}/${currentPlayer.maxHP}`;
        }
        
        await sleep(500);
        
        if (currentOpponent.currentHP === 0) {
            currentOpponent.fainted = true;
            addLog(`${currentOpponent.name} 失去了战斗能力！`);
            await sleep(500);
        }
    }
    
    // Apply weather damage
    if (gameState.weather !== WEATHER_CONDITIONS.NONE) {
        gameState.weatherTurns--;
        
        if (gameState.weather === WEATHER_CONDITIONS.SANDSTORM) {
            // Sandstorm damages non-Rock/Ground/Steel types
            if (!currentPlayer.fainted && 
                !currentPlayer.data.types.some(t => ['rock', 'ground', 'steel'].includes(t.type.name))) {
                const damage = Math.floor(currentPlayer.maxHP / 16);
                currentPlayer.currentHP = Math.max(0, currentPlayer.currentHP - damage);
                updateHPBar('player', currentPlayer.currentHP, currentPlayer.maxHP);
                document.getElementById('playerHP').textContent = `${currentPlayer.currentHP}/${currentPlayer.maxHP}`;
                addLog(`${currentPlayer.name} 受到了沙暴的伤害！`);
                await sleep(500);
            }
            
            if (!currentOpponent.fainted && 
                !currentOpponent.data.types.some(t => ['rock', 'ground', 'steel'].includes(t.type.name))) {
                const damage = Math.floor(currentOpponent.maxHP / 16);
                currentOpponent.currentHP = Math.max(0, currentOpponent.currentHP - damage);
                updateHPBar('opponent', currentOpponent.currentHP, currentOpponent.maxHP);
                document.getElementById('opponentHP').textContent = `${currentOpponent.currentHP}/${currentOpponent.maxHP}`;
                addLog(`${currentOpponent.name} 受到了沙暴的伤害！`);
                await sleep(500);
            }
        } else if (gameState.weather === WEATHER_CONDITIONS.HAIL) {
            // Hail damages non-Ice types
            if (!currentPlayer.fainted && 
                !currentPlayer.data.types.some(t => t.type.name === 'ice')) {
                const damage = Math.floor(currentPlayer.maxHP / 16);
                currentPlayer.currentHP = Math.max(0, currentPlayer.currentHP - damage);
                updateHPBar('player', currentPlayer.currentHP, currentPlayer.maxHP);
                document.getElementById('playerHP').textContent = `${currentPlayer.currentHP}/${currentPlayer.maxHP}`;
                addLog(`${currentPlayer.name} 受到了冰雹的伤害！`);
                await sleep(500);
            }
            
            if (!currentOpponent.fainted && 
                !currentOpponent.data.types.some(t => t.type.name === 'ice')) {
                const damage = Math.floor(currentOpponent.maxHP / 16);
                currentOpponent.currentHP = Math.max(0, currentOpponent.currentHP - damage);
                updateHPBar('opponent', currentOpponent.currentHP, currentOpponent.maxHP);
                document.getElementById('opponentHP').textContent = `${currentOpponent.currentHP}/${currentOpponent.maxHP}`;
                addLog(`${currentOpponent.name} 受到了冰雹的伤害！`);
                await sleep(500);
            }
        }
        
        if (gameState.weatherTurns <= 0) {
            const weatherNames = {
                [WEATHER_CONDITIONS.SUN]: '晴天',
                [WEATHER_CONDITIONS.RAIN]: '雨天',
                [WEATHER_CONDITIONS.SANDSTORM]: '沙暴',
                [WEATHER_CONDITIONS.HAIL]: '冰雹'
            };
            addLog(`${weatherNames[gameState.weather]} 停止了！`);
            gameState.weather = WEATHER_CONDITIONS.NONE;
        }
    }
    
    // Clear volatile statuses that last only one turn
    if (currentPlayer.volatileStatus.includes(VOLATILE_STATUS.PROTECT)) {
        removeVolatileStatus(currentPlayer, VOLATILE_STATUS.PROTECT);
    }
    if (currentOpponent.volatileStatus.includes(VOLATILE_STATUS.PROTECT)) {
        removeVolatileStatus(currentOpponent, VOLATILE_STATUS.PROTECT);
    }
    
    // Clear flinch status (only lasts one turn)
    if (currentPlayer.volatileStatus.includes(VOLATILE_STATUS.FLINCH)) {
        removeVolatileStatus(currentPlayer, VOLATILE_STATUS.FLINCH);
    }
    if (currentOpponent.volatileStatus.includes(VOLATILE_STATUS.FLINCH)) {
        removeVolatileStatus(currentOpponent, VOLATILE_STATUS.FLINCH);
    }
    
    // Terrain effects
    if (gameState.terrain !== TERRAIN_CONDITIONS.NONE) {
        gameState.terrainTurns--;
        
        // Grassy Terrain healing
        if (gameState.terrain === TERRAIN_CONDITIONS.GRASSY) {
            const playerGrounded = !currentPlayer.fainted && 
                                   !currentPlayer.data.types.some(t => t.type.name === 'flying') && 
                                   currentPlayer.ability !== 'Levitate';
            if (playerGrounded) {
                const heal = Math.floor(currentPlayer.maxHP / 16);
                const actualHeal = Math.min(heal, currentPlayer.maxHP - currentPlayer.currentHP);
                if (actualHeal > 0) {
                    currentPlayer.currentHP = Math.min(currentPlayer.maxHP, currentPlayer.currentHP + heal);
                    updateHPBar('player', currentPlayer.currentHP, currentPlayer.maxHP);
                    document.getElementById('playerHP').textContent = `${currentPlayer.currentHP}/${currentPlayer.maxHP}`;
                    addLog(`${currentPlayer.name} 被青草场地治愈了！`);
                    await sleep(500);
                }
            }
            
            const opponentGrounded = !currentOpponent.fainted && 
                                     !currentOpponent.data.types.some(t => t.type.name === 'flying') && 
                                     currentOpponent.ability !== 'Levitate';
            if (opponentGrounded) {
                const heal = Math.floor(currentOpponent.maxHP / 16);
                const actualHeal = Math.min(heal, currentOpponent.maxHP - currentOpponent.currentHP);
                if (actualHeal > 0) {
                    currentOpponent.currentHP = Math.min(currentOpponent.maxHP, currentOpponent.currentHP + heal);
                    updateHPBar('opponent', currentOpponent.currentHP, currentOpponent.maxHP);
                    document.getElementById('opponentHP').textContent = `${currentOpponent.currentHP}/${currentOpponent.maxHP}`;
                    addLog(`${currentOpponent.name} 被青草场地治愈了！`);
                    await sleep(500);
                }
            }
        }
        
        if (gameState.terrainTurns <= 0) {
            const terrainNames = {
                [TERRAIN_CONDITIONS.ELECTRIC]: '电气场地',
                [TERRAIN_CONDITIONS.GRASSY]: '青草场地',
                [TERRAIN_CONDITIONS.MISTY]: '薄雾场地',
                [TERRAIN_CONDITIONS.PSYCHIC]: '精神场地'
            };
            addLog(`${terrainNames[gameState.terrain]} 消失了！`);
            gameState.terrain = TERRAIN_CONDITIONS.NONE;
        }
    }
    
    // Reset protect success flag if not used this turn
    currentPlayer.protectUsed = false;
    currentOpponent.protectUsed = false;
}
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
    
    // Check if defender is protected
    if (defenderPokemon.volatileStatus.includes(VOLATILE_STATUS.PROTECT)) {
        addLog(`${attackerPokemon.name} 使用了 ${move.displayName}！`);
        await sleep(300);
        addLog(`${defenderPokemon.name} 保护了自己！`);
        return;
    }
    
    // Get move data for priority check
    const moveData = await fetchMoveData(move.name);
    const movePriority = getMovePriority(move.name);
    
    // Psychic Terrain blocks priority moves against grounded Pokemon
    if (gameState.terrain === TERRAIN_CONDITIONS.PSYCHIC && movePriority > 0) {
        const defenderGrounded = !defenderPokemon.data.types.some(t => t.type.name === 'flying') && 
                                 defenderPokemon.ability !== 'Levitate';
        if (defenderGrounded) {
            addLog(`${attackerPokemon.name} 使用了 ${move.displayName}！`);
            await sleep(300);
            addLog(`精神场地阻止了先制招式！`);
            return;
        }
    }
    
    // Animation
    const sprite = document.getElementById(`${attacker}Sprite`);
    sprite.classList.add('attacking');
    
    addLog(`${attackerPokemon.name} 使用了 ${move.displayName}！`);
    
    await sleep(300);
    sprite.classList.remove('attacking');
    
    // Check if this is a status move (no damage)
    if (moveData && moveData.damage_class && moveData.damage_class.name === 'status') {
        // Apply special effects
        const effects = await applyMoveEffects(attackerPokemon, defenderPokemon, move, moveData);
        for (const effect of effects) {
            addLog(effect);
            await sleep(300);
        }
        return;
    }
    
    // Calculate damage for attacking moves
    const result = await calculateDamage(attackerPokemon, defenderPokemon, move);
    
    // Apply damage
    let actualDamage = 0;
    if (result.damage > 0) {
        // Check if defender has substitute
        if (defenderPokemon.substituteHP > 0) {
            const substDamage = Math.min(result.damage, defenderPokemon.substituteHP);
            defenderPokemon.substituteHP -= substDamage;
            actualDamage = 0; // No HP damage when substitute takes it
            
            if (defenderPokemon.substituteHP <= 0) {
                defenderPokemon.substituteHP = 0;
                removeVolatileStatus(defenderPokemon, VOLATILE_STATUS.SUBSTITUTE);
                addLog(`${defenderPokemon.name} 的替身消失了！`);
            } else {
                addLog(`替身代替${defenderPokemon.name}承受了伤害！`);
            }
        } else {
            // Normal damage
            defenderPokemon.currentHP = Math.max(0, defenderPokemon.currentHP - result.damage);
            actualDamage = result.damage;
            
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
            
            // Show multi-hit count
            if (result.hits && result.hits > 1) {
                addLog(`击中了 ${result.hits} 次！`);
            }
            
            await sleep(500);
            defenderSprite.classList.remove('taking-damage');
        }
        
        // Apply secondary effects (for attacking moves with additional effects)
        if (moveData) {
            const effects = await applyMoveEffects(attackerPokemon, defenderPokemon, move, moveData, actualDamage);
            for (const effect of effects) {
                addLog(effect);
                await sleep(300);
            }
            
            // Update HP display if healing/draining occurred
            if (effects.some(e => e.includes('恢复') || e.includes('吸取'))) {
                updateHPBar(isPlayer ? 'player' : 'opponent', attackerPokemon.currentHP, attackerPokemon.maxHP);
                document.getElementById(isPlayer ? 'playerHP' : 'opponentHP').textContent = 
                    `${attackerPokemon.currentHP}/${attackerPokemon.maxHP}`;
            }
        }
        
        // Life Orb recoil (10% of max HP)
        if (attackerPokemon.item === 'Life Orb' && !attackerPokemon.fainted) {
            const recoil = Math.floor(attackerPokemon.maxHP * 0.1);
            attackerPokemon.currentHP = Math.max(0, attackerPokemon.currentHP - recoil);
            updateHPBar(isPlayer ? 'player' : 'opponent', attackerPokemon.currentHP, attackerPokemon.maxHP);
            document.getElementById(isPlayer ? 'playerHP' : 'opponentHP').textContent = 
                `${attackerPokemon.currentHP}/${attackerPokemon.maxHP}`;
            addLog(`${attackerPokemon.name} 受到了生命宝珠的反伤！`);
            await sleep(300);
        }
        
        // Recoil moves
        if (moveData && (moveData.name === 'Flare Blitz' || moveData.name === 'flare-blitz' ||
                         moveData.name === 'Brave Bird' || moveData.name === 'brave-bird' ||
                         moveData.name === 'Double-Edge' || moveData.name === 'double-edge')) {
            const recoil = Math.floor(actualDamage * 0.33);
            if (recoil > 0) {
                attackerPokemon.currentHP = Math.max(0, attackerPokemon.currentHP - recoil);
                updateHPBar(isPlayer ? 'player' : 'opponent', attackerPokemon.currentHP, attackerPokemon.maxHP);
                document.getElementById(isPlayer ? 'playerHP' : 'opponentHP').textContent = 
                    `${attackerPokemon.currentHP}/${attackerPokemon.maxHP}`;
                addLog(`${attackerPokemon.name} 受到了反作用力的伤害！`);
                await sleep(300);
            }
        }
    }
    
    // Check if Pokemon fainted
    if (defenderPokemon.currentHP === 0) {
        defenderPokemon.fainted = true;
        const defenderSprite = document.getElementById(isPlayer ? 'opponentSprite' : 'playerSprite');
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
    
    // Always load a fresh opponent team for preview (without battle-specific data like moves/fainted)
    // This prevents any bugs with team size
    const previewTeam = [];
    for (const opponentData of OPPONENT_TEAM) {
        const pokemonData = await fetchPokemonData(opponentData.id);
        if (pokemonData) {
            const stats = calculateStats(pokemonData, opponentData.level, opponentData.evs);
            previewTeam.push({
                data: pokemonData,
                stats,
                name: getCNName(pokemonData.id, 'pokemon'),
                level: opponentData.level,
                ability: opponentData.ability,
                item: opponentData.item
            });
        }
    }
    
    grid.innerHTML = '';
    
    previewTeam.forEach((pokemon, index) => {
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
    const generationFilter = document.getElementById('generationFilter')?.value || '';
    
    // Generation ranges
    const genRanges = {
        '1': [1, 151],
        '2': [152, 251],
        '3': [252, 386],
        '4': [387, 493],
        '5': [494, 649],
        '6': [650, 721],
        '7': [722, 809],
        '8': [810, 905],
        '9': [906, 1025]
    };
    
    let minId = 1;
    let maxId = MAX_POKEMON_ID;
    
    if (generationFilter && genRanges[generationFilter]) {
        [minId, maxId] = genRanges[generationFilter];
    }
    
    let count = 0;
    const MAX_DISPLAY_PER_PAGE = 200; // Limit to 200 Pokemon per page for performance
    
    for (const pokemon of gameState.availablePokemon) {
        // Extract ID from URL if available
        const pokemonId = pokemon.url ? parseInt(pokemon.url.split('/').filter(Boolean).pop()) : count + 1;
        
        // Filter by generation
        if (pokemonId < minId || pokemonId > maxId) {
            continue;
        }
        
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
        if (count >= MAX_DISPLAY_PER_PAGE) break; // Limit display count per filter for performance
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
    // Save scroll position before navigating away
    gameState.scrollPosition = window.scrollY || window.pageYOffset;
    
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
        id: pokemon.id,
        status: STATUS_CONDITIONS.NONE,
        volatileStatus: [],
        statChanges: { attack: 0, defense: 0, spAttack: 0, spDefense: 0, speed: 0, accuracy: 0, evasion: 0 },
        statusTurns: 0,
        confusionTurns: 0,
        substituteHP: 0,
        protectUsed: false,
        ability: 'None', // Default ability - could be customized later
        item: 'None' // Default item - could be customized later
    });
    
    updateTeamCounter();
    showScreen('selectionScreen');
    
    // Restore scroll position
    if (gameState.scrollPosition > 0) {
        setTimeout(() => {
            window.scrollTo(0, gameState.scrollPosition);
        }, 0);
    }
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
    
    document.getElementById('generationFilter')?.addEventListener('change', () => {
        renderPokemonList();
    });
});
