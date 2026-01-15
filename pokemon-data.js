// Pokemon data fallback for offline/restricted environments
// This file contains pre-cached data from PokeAPI for the most popular Pokemon

const POKEMON_DATA = {
    // Starter Pokemon
    1: { // Bulbasaur
        name: 'bulbasaur',
        displayName: 'Bulbasaur',
        types: [{type: {name: 'grass'}}, {type: {name: 'poison'}}],
        stats: [
            {base_stat: 45, stat: {name: 'hp'}},
            {base_stat: 49, stat: {name: 'attack'}},
            {base_stat: 49, stat: {name: 'defense'}},
            {base_stat: 65, stat: {name: 'special-attack'}},
            {base_stat: 65, stat: {name: 'special-defense'}},
            {base_stat: 45, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png'
        },
        moves: [
            {move: {name: 'vine-whip'}},
            {move: {name: 'razor-leaf'}},
            {move: {name: 'sludge-bomb'}},
            {move: {name: 'solar-beam'}}
        ]
    },
    4: { // Charmander
        name: 'charmander',
        displayName: 'Charmander',
        types: [{type: {name: 'fire'}}],
        stats: [
            {base_stat: 39, stat: {name: 'hp'}},
            {base_stat: 52, stat: {name: 'attack'}},
            {base_stat: 43, stat: {name: 'defense'}},
            {base_stat: 60, stat: {name: 'special-attack'}},
            {base_stat: 50, stat: {name: 'special-defense'}},
            {base_stat: 65, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png'
        },
        moves: [
            {move: {name: 'flamethrower'}},
            {move: {name: 'fire-fang'}},
            {move: {name: 'dragon-claw'}},
            {move: {name: 'slash'}}
        ]
    },
    7: { // Squirtle
        name: 'squirtle',
        displayName: 'Squirtle',
        types: [{type: {name: 'water'}}],
        stats: [
            {base_stat: 44, stat: {name: 'hp'}},
            {base_stat: 48, stat: {name: 'attack'}},
            {base_stat: 65, stat: {name: 'defense'}},
            {base_stat: 50, stat: {name: 'special-attack'}},
            {base_stat: 64, stat: {name: 'special-defense'}},
            {base_stat: 43, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png'
        },
        moves: [
            {move: {name: 'water-gun'}},
            {move: {name: 'bite'}},
            {move: {name: 'aqua-tail'}},
            {move: {name: 'ice-beam'}}
        ]
    },
    25: { // Pikachu
        name: 'pikachu',
        displayName: 'Pikachu',
        types: [{type: {name: 'electric'}}],
        stats: [
            {base_stat: 35, stat: {name: 'hp'}},
            {base_stat: 55, stat: {name: 'attack'}},
            {base_stat: 40, stat: {name: 'defense'}},
            {base_stat: 50, stat: {name: 'special-attack'}},
            {base_stat: 50, stat: {name: 'special-defense'}},
            {base_stat: 90, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png'
        },
        moves: [
            {move: {name: 'thunderbolt'}},
            {move: {name: 'quick-attack'}},
            {move: {name: 'iron-tail'}},
            {move: {name: 'electro-ball'}}
        ]
    },
    130: { // Gyarados
        name: 'gyarados',
        displayName: 'Gyarados',
        types: [{type: {name: 'water'}}, {type: {name: 'flying'}}],
        stats: [
            {base_stat: 95, stat: {name: 'hp'}},
            {base_stat: 125, stat: {name: 'attack'}},
            {base_stat: 79, stat: {name: 'defense'}},
            {base_stat: 60, stat: {name: 'special-attack'}},
            {base_stat: 100, stat: {name: 'special-defense'}},
            {base_stat: 81, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/130.png'
        },
        moves: [
            {move: {name: 'waterfall'}},
            {move: {name: 'ice-fang'}},
            {move: {name: 'dragon-dance'}},
            {move: {name: 'substitute'}}
        ]
    },
    257: { // Blaziken
        name: 'blaziken',
        displayName: 'Blaziken',
        types: [{type: {name: 'fire'}}, {type: {name: 'fighting'}}],
        stats: [
            {base_stat: 80, stat: {name: 'hp'}},
            {base_stat: 120, stat: {name: 'attack'}},
            {base_stat: 70, stat: {name: 'defense'}},
            {base_stat: 110, stat: {name: 'special-attack'}},
            {base_stat: 70, stat: {name: 'special-defense'}},
            {base_stat: 80, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/257.png'
        },
        moves: [
            {move: {name: 'flare-blitz'}},
            {move: {name: 'high-jump-kick'}},
            {move: {name: 'protect'}},
            {move: {name: 'swords-dance'}}
        ]
    },
    282: { // Gardevoir
        name: 'gardevoir',
        displayName: 'Gardevoir',
        types: [{type: {name: 'psychic'}}, {type: {name: 'fairy'}}],
        stats: [
            {base_stat: 68, stat: {name: 'hp'}},
            {base_stat: 65, stat: {name: 'attack'}},
            {base_stat: 65, stat: {name: 'defense'}},
            {base_stat: 125, stat: {name: 'special-attack'}},
            {base_stat: 115, stat: {name: 'special-defense'}},
            {base_stat: 80, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/282.png'
        },
        moves: [
            {move: {name: 'psychic'}},
            {move: {name: 'moonblast'}},
            {move: {name: 'thunderbolt'}},
            {move: {name: 'focus-blast'}}
        ]
    },
    376: { // Metagross
        name: 'metagross',
        displayName: 'Metagross',
        types: [{type: {name: 'steel'}}, {type: {name: 'psychic'}}],
        stats: [
            {base_stat: 80, stat: {name: 'hp'}},
            {base_stat: 135, stat: {name: 'attack'}},
            {base_stat: 130, stat: {name: 'defense'}},
            {base_stat: 95, stat: {name: 'special-attack'}},
            {base_stat: 90, stat: {name: 'special-defense'}},
            {base_stat: 70, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/376.png'
        },
        moves: [
            {move: {name: 'meteor-mash'}},
            {move: {name: 'earthquake'}},
            {move: {name: 'zen-headbutt'}},
            {move: {name: 'bullet-punch'}}
        ]
    },
    445: { // Garchomp
        name: 'garchomp',
        displayName: 'Garchomp',
        types: [{type: {name: 'dragon'}}, {type: {name: 'ground'}}],
        stats: [
            {base_stat: 108, stat: {name: 'hp'}},
            {base_stat: 130, stat: {name: 'attack'}},
            {base_stat: 95, stat: {name: 'defense'}},
            {base_stat: 80, stat: {name: 'special-attack'}},
            {base_stat: 85, stat: {name: 'special-defense'}},
            {base_stat: 102, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/445.png'
        },
        moves: [
            {move: {name: 'earthquake'}},
            {move: {name: 'outrage'}},
            {move: {name: 'stone-edge'}},
            {move: {name: 'fire-fang'}}
        ]
    },
    658: { // Greninja
        name: 'greninja',
        displayName: 'Greninja',
        types: [{type: {name: 'water'}}, {type: {name: 'dark'}}],
        stats: [
            {base_stat: 72, stat: {name: 'hp'}},
            {base_stat: 95, stat: {name: 'attack'}},
            {base_stat: 67, stat: {name: 'defense'}},
            {base_stat: 103, stat: {name: 'special-attack'}},
            {base_stat: 71, stat: {name: 'special-defense'}},
            {base_stat: 122, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/658.png'
        },
        moves: [
            {move: {name: 'hydro-pump'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'dark-pulse'}},
            {move: {name: 'water-shuriken'}}
        ]
    },
    6: { // Charizard
        name: 'charizard',
        displayName: 'Charizard',
        types: [{type: {name: 'fire'}}, {type: {name: 'flying'}}],
        stats: [
            {base_stat: 78, stat: {name: 'hp'}},
            {base_stat: 84, stat: {name: 'attack'}},
            {base_stat: 78, stat: {name: 'defense'}},
            {base_stat: 109, stat: {name: 'special-attack'}},
            {base_stat: 85, stat: {name: 'special-defense'}},
            {base_stat: 100, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png'
        },
        moves: [
            {move: {name: 'flamethrower'}},
            {move: {name: 'air-slash'}},
            {move: {name: 'dragon-claw'}},
            {move: {name: 'solar-beam'}}
        ]
    },
    143: { // Snorlax
        name: 'snorlax',
        displayName: 'Snorlax',
        types: [{type: {name: 'normal'}}],
        stats: [
            {base_stat: 160, stat: {name: 'hp'}},
            {base_stat: 110, stat: {name: 'attack'}},
            {base_stat: 65, stat: {name: 'defense'}},
            {base_stat: 65, stat: {name: 'special-attack'}},
            {base_stat: 110, stat: {name: 'special-defense'}},
            {base_stat: 30, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/143.png'
        },
        moves: [
            {move: {name: 'body-slam'}},
            {move: {name: 'earthquake'}},
            {move: {name: 'crunch'}},
            {move: {name: 'rest'}}
        ]
    },
    94: { // Gengar
        name: 'gengar',
        displayName: 'Gengar',
        types: [{type: {name: 'ghost'}}, {type: {name: 'poison'}}],
        stats: [
            {base_stat: 60, stat: {name: 'hp'}},
            {base_stat: 65, stat: {name: 'attack'}},
            {base_stat: 60, stat: {name: 'defense'}},
            {base_stat: 130, stat: {name: 'special-attack'}},
            {base_stat: 75, stat: {name: 'special-defense'}},
            {base_stat: 110, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/94.png'
        },
        moves: [
            {move: {name: 'shadow-ball'}},
            {move: {name: 'sludge-bomb'}},
            {move: {name: 'thunderbolt'}},
            {move: {name: 'focus-blast'}}
        ]
    },
    248: { // Tyranitar
        name: 'tyranitar',
        displayName: 'Tyranitar',
        types: [{type: {name: 'rock'}}, {type: {name: 'dark'}}],
        stats: [
            {base_stat: 100, stat: {name: 'hp'}},
            {base_stat: 134, stat: {name: 'attack'}},
            {base_stat: 110, stat: {name: 'defense'}},
            {base_stat: 95, stat: {name: 'special-attack'}},
            {base_stat: 100, stat: {name: 'special-defense'}},
            {base_stat: 61, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/248.png'
        },
        moves: [
            {move: {name: 'stone-edge'}},
            {move: {name: 'crunch'}},
            {move: {name: 'earthquake'}},
            {move: {name: 'fire-punch'}}
        ]
    },
    448: { // Lucario
        name: 'lucario',
        displayName: 'Lucario',
        types: [{type: {name: 'fighting'}}, {type: {name: 'steel'}}],
        stats: [
            {base_stat: 70, stat: {name: 'hp'}},
            {base_stat: 110, stat: {name: 'attack'}},
            {base_stat: 70, stat: {name: 'defense'}},
            {base_stat: 115, stat: {name: 'special-attack'}},
            {base_stat: 70, stat: {name: 'special-defense'}},
            {base_stat: 90, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/448.png'
        },
        moves: [
            {move: {name: 'close-combat'}},
            {move: {name: 'flash-cannon'}},
            {move: {name: 'bullet-punch'}},
            {move: {name: 'aura-sphere'}}
        ]
    }
};

const MOVE_DATA = {
    'vine-whip': {name: 'Vine Whip', power: 45, type: {name: 'grass'}, damage_class: {name: 'physical'}, pp: 25},
    'razor-leaf': {name: 'Razor Leaf', power: 55, type: {name: 'grass'}, damage_class: {name: 'physical'}, pp: 25},
    'sludge-bomb': {name: 'Sludge Bomb', power: 90, type: {name: 'poison'}, damage_class: {name: 'special'}, pp: 10},
    'solar-beam': {name: 'Solar Beam', power: 120, type: {name: 'grass'}, damage_class: {name: 'special'}, pp: 10},
    'flamethrower': {name: 'Flamethrower', power: 90, type: {name: 'fire'}, damage_class: {name: 'special'}, pp: 15},
    'fire-fang': {name: 'Fire Fang', power: 65, type: {name: 'fire'}, damage_class: {name: 'physical'}, pp: 15},
    'dragon-claw': {name: 'Dragon Claw', power: 80, type: {name: 'dragon'}, damage_class: {name: 'physical'}, pp: 15},
    'slash': {name: 'Slash', power: 70, type: {name: 'normal'}, damage_class: {name: 'physical'}, pp: 20},
    'water-gun': {name: 'Water Gun', power: 40, type: {name: 'water'}, damage_class: {name: 'special'}, pp: 25},
    'bite': {name: 'Bite', power: 60, type: {name: 'dark'}, damage_class: {name: 'physical'}, pp: 25},
    'aqua-tail': {name: 'Aqua Tail', power: 90, type: {name: 'water'}, damage_class: {name: 'physical'}, pp: 10},
    'ice-beam': {name: 'Ice Beam', power: 90, type: {name: 'ice'}, damage_class: {name: 'special'}, pp: 10},
    'thunderbolt': {name: 'Thunderbolt', power: 90, type: {name: 'electric'}, damage_class: {name: 'special'}, pp: 15},
    'quick-attack': {name: 'Quick Attack', power: 40, type: {name: 'normal'}, damage_class: {name: 'physical'}, pp: 30},
    'iron-tail': {name: 'Iron Tail', power: 100, type: {name: 'steel'}, damage_class: {name: 'physical'}, pp: 15},
    'electro-ball': {name: 'Electro Ball', power: 80, type: {name: 'electric'}, damage_class: {name: 'special'}, pp: 10},
    'waterfall': {name: 'Waterfall', power: 80, type: {name: 'water'}, damage_class: {name: 'physical'}, pp: 15},
    'ice-fang': {name: 'Ice Fang', power: 65, type: {name: 'ice'}, damage_class: {name: 'physical'}, pp: 15},
    'dragon-dance': {name: 'Dragon Dance', power: 0, type: {name: 'dragon'}, damage_class: {name: 'status'}, pp: 20},
    'substitute': {name: 'Substitute', power: 0, type: {name: 'normal'}, damage_class: {name: 'status'}, pp: 10},
    'flare-blitz': {name: 'Flare Blitz', power: 120, type: {name: 'fire'}, damage_class: {name: 'physical'}, pp: 15},
    'high-jump-kick': {name: 'High Jump Kick', power: 130, type: {name: 'fighting'}, damage_class: {name: 'physical'}, pp: 10},
    'protect': {name: 'Protect', power: 0, type: {name: 'normal'}, damage_class: {name: 'status'}, pp: 10},
    'swords-dance': {name: 'Swords Dance', power: 0, type: {name: 'fighting'}, damage_class: {name: 'status'}, pp: 20},
    'psychic': {name: 'Psychic', power: 90, type: {name: 'psychic'}, damage_class: {name: 'special'}, pp: 10},
    'moonblast': {name: 'Moonblast', power: 95, type: {name: 'fairy'}, damage_class: {name: 'special'}, pp: 15},
    'focus-blast': {name: 'Focus Blast', power: 120, type: {name: 'fighting'}, damage_class: {name: 'special'}, pp: 5},
    'meteor-mash': {name: 'Meteor Mash', power: 90, type: {name: 'steel'}, damage_class: {name: 'physical'}, pp: 10},
    'earthquake': {name: 'Earthquake', power: 100, type: {name: 'ground'}, damage_class: {name: 'physical'}, pp: 10},
    'zen-headbutt': {name: 'Zen Headbutt', power: 80, type: {name: 'psychic'}, damage_class: {name: 'physical'}, pp: 15},
    'bullet-punch': {name: 'Bullet Punch', power: 40, type: {name: 'steel'}, damage_class: {name: 'physical'}, pp: 30},
    'outrage': {name: 'Outrage', power: 120, type: {name: 'dragon'}, damage_class: {name: 'physical'}, pp: 10},
    'stone-edge': {name: 'Stone Edge', power: 100, type: {name: 'rock'}, damage_class: {name: 'physical'}, pp: 5},
    'hydro-pump': {name: 'Hydro Pump', power: 110, type: {name: 'water'}, damage_class: {name: 'special'}, pp: 5},
    'dark-pulse': {name: 'Dark Pulse', power: 80, type: {name: 'dark'}, damage_class: {name: 'special'}, pp: 15},
    'water-shuriken': {name: 'Water Shuriken', power: 15, type: {name: 'water'}, damage_class: {name: 'physical'}, pp: 20},
    'air-slash': {name: 'Air Slash', power: 75, type: {name: 'flying'}, damage_class: {name: 'special'}, pp: 15},
    'body-slam': {name: 'Body Slam', power: 85, type: {name: 'normal'}, damage_class: {name: 'physical'}, pp: 15},
    'crunch': {name: 'Crunch', power: 80, type: {name: 'dark'}, damage_class: {name: 'physical'}, pp: 15},
    'rest': {name: 'Rest', power: 0, type: {name: 'psychic'}, damage_class: {name: 'status'}, pp: 10},
    'shadow-ball': {name: 'Shadow Ball', power: 80, type: {name: 'ghost'}, damage_class: {name: 'special'}, pp: 15},
    'fire-punch': {name: 'Fire Punch', power: 75, type: {name: 'fire'}, damage_class: {name: 'physical'}, pp: 15},
    'close-combat': {name: 'Close Combat', power: 120, type: {name: 'fighting'}, damage_class: {name: 'physical'}, pp: 5},
    'flash-cannon': {name: 'Flash Cannon', power: 80, type: {name: 'steel'}, damage_class: {name: 'special'}, pp: 10},
    'aura-sphere': {name: 'Aura Sphere', power: 80, type: {name: 'fighting'}, damage_class: {name: 'special'}, pp: 20}
};

const POKEMON_LIST = [
    {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'},
    {name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/'},
    {name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/'},
    {name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/'},
    {name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/'},
    {name: 'gengar', url: 'https://pokeapi.co/api/v2/pokemon/94/'},
    {name: 'gyarados', url: 'https://pokeapi.co/api/v2/pokemon/130/'},
    {name: 'snorlax', url: 'https://pokeapi.co/api/v2/pokemon/143/'},
    {name: 'tyranitar', url: 'https://pokeapi.co/api/v2/pokemon/248/'},
    {name: 'blaziken', url: 'https://pokeapi.co/api/v2/pokemon/257/'},
    {name: 'gardevoir', url: 'https://pokeapi.co/api/v2/pokemon/282/'},
    {name: 'metagross', url: 'https://pokeapi.co/api/v2/pokemon/376/'},
    {name: 'garchomp', url: 'https://pokeapi.co/api/v2/pokemon/445/'},
    {name: 'lucario', url: 'https://pokeapi.co/api/v2/pokemon/448/'},
    {name: 'greninja', url: 'https://pokeapi.co/api/v2/pokemon/658/'}
];
