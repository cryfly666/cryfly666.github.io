// Pokemon data fallback for offline/restricted environments
// This file contains pre-cached data from PokeAPI for Generation 1 Pokemon (IDs 1-151)

const POKEMON_DATA = {
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
    2: { // Ivysaur
        name: 'ivysaur',
        displayName: 'Ivysaur',
        types: [{type: {name: 'grass'}}, {type: {name: 'poison'}}],
        stats: [
            {base_stat: 60, stat: {name: 'hp'}},
            {base_stat: 62, stat: {name: 'attack'}},
            {base_stat: 63, stat: {name: 'defense'}},
            {base_stat: 80, stat: {name: 'special-attack'}},
            {base_stat: 80, stat: {name: 'special-defense'}},
            {base_stat: 60, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png'
        },
        moves: [
            {move: {name: 'vine-whip'}},
            {move: {name: 'razor-leaf'}},
            {move: {name: 'sludge-bomb'}},
            {move: {name: 'solar-beam'}}
        ]
    },
    3: { // Venusaur
        name: 'venusaur',
        displayName: 'Venusaur',
        types: [{type: {name: 'grass'}}, {type: {name: 'poison'}}],
        stats: [
            {base_stat: 80, stat: {name: 'hp'}},
            {base_stat: 82, stat: {name: 'attack'}},
            {base_stat: 83, stat: {name: 'defense'}},
            {base_stat: 100, stat: {name: 'special-attack'}},
            {base_stat: 100, stat: {name: 'special-defense'}},
            {base_stat: 80, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png'
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
    5: { // Charmeleon
        name: 'charmeleon',
        displayName: 'Charmeleon',
        types: [{type: {name: 'fire'}}],
        stats: [
            {base_stat: 58, stat: {name: 'hp'}},
            {base_stat: 64, stat: {name: 'attack'}},
            {base_stat: 58, stat: {name: 'defense'}},
            {base_stat: 80, stat: {name: 'special-attack'}},
            {base_stat: 65, stat: {name: 'special-defense'}},
            {base_stat: 80, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png'
        },
        moves: [
            {move: {name: 'flamethrower'}},
            {move: {name: 'fire-fang'}},
            {move: {name: 'dragon-claw'}},
            {move: {name: 'slash'}}
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
    8: { // Wartortle
        name: 'wartortle',
        displayName: 'Wartortle',
        types: [{type: {name: 'water'}}],
        stats: [
            {base_stat: 59, stat: {name: 'hp'}},
            {base_stat: 63, stat: {name: 'attack'}},
            {base_stat: 80, stat: {name: 'defense'}},
            {base_stat: 65, stat: {name: 'special-attack'}},
            {base_stat: 80, stat: {name: 'special-defense'}},
            {base_stat: 58, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png'
        },
        moves: [
            {move: {name: 'water-gun'}},
            {move: {name: 'bite'}},
            {move: {name: 'aqua-tail'}},
            {move: {name: 'ice-beam'}}
        ]
    },
    9: { // Blastoise
        name: 'blastoise',
        displayName: 'Blastoise',
        types: [{type: {name: 'water'}}],
        stats: [
            {base_stat: 79, stat: {name: 'hp'}},
            {base_stat: 83, stat: {name: 'attack'}},
            {base_stat: 100, stat: {name: 'defense'}},
            {base_stat: 85, stat: {name: 'special-attack'}},
            {base_stat: 105, stat: {name: 'special-defense'}},
            {base_stat: 78, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png'
        },
        moves: [
            {move: {name: 'hydro-pump'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'earthquake'}},
            {move: {name: 'aqua-tail'}}
        ]
    },
    10: { // Caterpie
        name: 'caterpie',
        displayName: 'Caterpie',
        types: [{type: {name: 'bug'}}],
        stats: [
            {base_stat: 45, stat: {name: 'hp'}},
            {base_stat: 30, stat: {name: 'attack'}},
            {base_stat: 35, stat: {name: 'defense'}},
            {base_stat: 20, stat: {name: 'special-attack'}},
            {base_stat: 20, stat: {name: 'special-defense'}},
            {base_stat: 45, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png'
        },
        moves: [
            {move: {name: 'tackle'}},
            {move: {name: 'string-shot'}},
            {move: {name: 'bug-bite'}},
            {move: {name: 'harden'}}
        ]
    },
    11: { // Metapod
        name: 'metapod',
        displayName: 'Metapod',
        types: [{type: {name: 'bug'}}],
        stats: [
            {base_stat: 50, stat: {name: 'hp'}},
            {base_stat: 20, stat: {name: 'attack'}},
            {base_stat: 55, stat: {name: 'defense'}},
            {base_stat: 25, stat: {name: 'special-attack'}},
            {base_stat: 25, stat: {name: 'special-defense'}},
            {base_stat: 30, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png'
        },
        moves: [
            {move: {name: 'harden'}},
            {move: {name: 'tackle'}},
            {move: {name: 'bug-bite'}},
            {move: {name: 'iron-defense'}}
        ]
    },
    12: { // Butterfree
        name: 'butterfree',
        displayName: 'Butterfree',
        types: [{type: {name: 'bug'}}, {type: {name: 'flying'}}],
        stats: [
            {base_stat: 60, stat: {name: 'hp'}},
            {base_stat: 45, stat: {name: 'attack'}},
            {base_stat: 50, stat: {name: 'defense'}},
            {base_stat: 90, stat: {name: 'special-attack'}},
            {base_stat: 80, stat: {name: 'special-defense'}},
            {base_stat: 70, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png'
        },
        moves: [
            {move: {name: 'bug-buzz'}},
            {move: {name: 'air-slash'}},
            {move: {name: 'psychic'}},
            {move: {name: 'sleep-powder'}}
        ]
    },
    13: { // Weedle
        name: 'weedle',
        displayName: 'Weedle',
        types: [{type: {name: 'bug'}}, {type: {name: 'poison'}}],
        stats: [
            {base_stat: 40, stat: {name: 'hp'}},
            {base_stat: 35, stat: {name: 'attack'}},
            {base_stat: 30, stat: {name: 'defense'}},
            {base_stat: 20, stat: {name: 'special-attack'}},
            {base_stat: 20, stat: {name: 'special-defense'}},
            {base_stat: 50, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png'
        },
        moves: [
            {move: {name: 'poison-sting'}},
            {move: {name: 'string-shot'}},
            {move: {name: 'bug-bite'}},
            {move: {name: 'tackle'}}
        ]
    },
    14: { // Kakuna
        name: 'kakuna',
        displayName: 'Kakuna',
        types: [{type: {name: 'bug'}}, {type: {name: 'poison'}}],
        stats: [
            {base_stat: 45, stat: {name: 'hp'}},
            {base_stat: 25, stat: {name: 'attack'}},
            {base_stat: 50, stat: {name: 'defense'}},
            {base_stat: 25, stat: {name: 'special-attack'}},
            {base_stat: 25, stat: {name: 'special-defense'}},
            {base_stat: 35, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png'
        },
        moves: [
            {move: {name: 'harden'}},
            {move: {name: 'poison-sting'}},
            {move: {name: 'bug-bite'}},
            {move: {name: 'iron-defense'}}
        ]
    },
    15: { // Beedrill
        name: 'beedrill',
        displayName: 'Beedrill',
        types: [{type: {name: 'bug'}}, {type: {name: 'poison'}}],
        stats: [
            {base_stat: 65, stat: {name: 'hp'}},
            {base_stat: 90, stat: {name: 'attack'}},
            {base_stat: 40, stat: {name: 'defense'}},
            {base_stat: 45, stat: {name: 'special-attack'}},
            {base_stat: 80, stat: {name: 'special-defense'}},
            {base_stat: 75, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png'
        },
        moves: [
            {move: {name: 'x-scissor'}},
            {move: {name: 'poison-jab'}},
            {move: {name: 'drill-run'}},
            {move: {name: 'sludge-bomb'}}
        ]
    },
    16: { // Pidgey
        name: 'pidgey',
        displayName: 'Pidgey',
        types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
        stats: [
            {base_stat: 40, stat: {name: 'hp'}},
            {base_stat: 45, stat: {name: 'attack'}},
            {base_stat: 40, stat: {name: 'defense'}},
            {base_stat: 35, stat: {name: 'special-attack'}},
            {base_stat: 35, stat: {name: 'special-defense'}},
            {base_stat: 56, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png'
        },
        moves: [
            {move: {name: 'quick-attack'}},
            {move: {name: 'air-slash'}},
            {move: {name: 'tackle'}},
            {move: {name: 'wing-attack'}}
        ]
    },
    17: { // Pidgeotto
        name: 'pidgeotto',
        displayName: 'Pidgeotto',
        types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
        stats: [
            {base_stat: 63, stat: {name: 'hp'}},
            {base_stat: 60, stat: {name: 'attack'}},
            {base_stat: 55, stat: {name: 'defense'}},
            {base_stat: 50, stat: {name: 'special-attack'}},
            {base_stat: 50, stat: {name: 'special-defense'}},
            {base_stat: 71, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png'
        },
        moves: [
            {move: {name: 'quick-attack'}},
            {move: {name: 'air-slash'}},
            {move: {name: 'wing-attack'}},
            {move: {name: 'tackle'}}
        ]
    },
    18: { // Pidgeot
        name: 'pidgeot',
        displayName: 'Pidgeot',
        types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
        stats: [
            {base_stat: 83, stat: {name: 'hp'}},
            {base_stat: 80, stat: {name: 'attack'}},
            {base_stat: 75, stat: {name: 'defense'}},
            {base_stat: 70, stat: {name: 'special-attack'}},
            {base_stat: 70, stat: {name: 'special-defense'}},
            {base_stat: 101, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png'
        },
        moves: [
            {move: {name: 'quick-attack'}},
            {move: {name: 'air-slash'}},
            {move: {name: 'hurricane'}},
            {move: {name: 'u-turn'}}
        ]
    },
    19: { // Rattata
        name: 'rattata',
        displayName: 'Rattata',
        types: [{type: {name: 'normal'}}],
        stats: [
            {base_stat: 30, stat: {name: 'hp'}},
            {base_stat: 56, stat: {name: 'attack'}},
            {base_stat: 35, stat: {name: 'defense'}},
            {base_stat: 25, stat: {name: 'special-attack'}},
            {base_stat: 35, stat: {name: 'special-defense'}},
            {base_stat: 72, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png'
        },
        moves: [
            {move: {name: 'quick-attack'}},
            {move: {name: 'hyper-fang'}},
            {move: {name: 'tackle'}},
            {move: {name: 'crunch'}}
        ]
    },
    20: { // Raticate
        name: 'raticate',
        displayName: 'Raticate',
        types: [{type: {name: 'normal'}}],
        stats: [
            {base_stat: 55, stat: {name: 'hp'}},
            {base_stat: 81, stat: {name: 'attack'}},
            {base_stat: 60, stat: {name: 'defense'}},
            {base_stat: 50, stat: {name: 'special-attack'}},
            {base_stat: 70, stat: {name: 'special-defense'}},
            {base_stat: 97, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png'
        },
        moves: [
            {move: {name: 'quick-attack'}},
            {move: {name: 'hyper-fang'}},
            {move: {name: 'crunch'}},
            {move: {name: 'super-fang'}}
        ]
    },
    21: { // Spearow
        name: 'spearow',
        displayName: 'Spearow',
        types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
        stats: [
            {base_stat: 40, stat: {name: 'hp'}},
            {base_stat: 60, stat: {name: 'attack'}},
            {base_stat: 30, stat: {name: 'defense'}},
            {base_stat: 31, stat: {name: 'special-attack'}},
            {base_stat: 31, stat: {name: 'special-defense'}},
            {base_stat: 70, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/21.png'
        },
        moves: [
            {move: {name: 'peck'}},
            {move: {name: 'drill-peck'}},
            {move: {name: 'quick-attack'}},
            {move: {name: 'aerial-ace'}}
        ]
    },
    22: { // Fearow
        name: 'fearow',
        displayName: 'Fearow',
        types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
        stats: [
            {base_stat: 65, stat: {name: 'hp'}},
            {base_stat: 90, stat: {name: 'attack'}},
            {base_stat: 65, stat: {name: 'defense'}},
            {base_stat: 61, stat: {name: 'special-attack'}},
            {base_stat: 61, stat: {name: 'special-defense'}},
            {base_stat: 100, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png'
        },
        moves: [
            {move: {name: 'drill-peck'}},
            {move: {name: 'aerial-ace'}},
            {move: {name: 'u-turn'}},
            {move: {name: 'quick-attack'}}
        ]
    },
    23: { // Ekans
        name: 'ekans',
        displayName: 'Ekans',
        types: [{type: {name: 'poison'}}],
        stats: [
            {base_stat: 35, stat: {name: 'hp'}},
            {base_stat: 60, stat: {name: 'attack'}},
            {base_stat: 44, stat: {name: 'defense'}},
            {base_stat: 40, stat: {name: 'special-attack'}},
            {base_stat: 54, stat: {name: 'special-defense'}},
            {base_stat: 55, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png'
        },
        moves: [
            {move: {name: 'poison-jab'}},
            {move: {name: 'bite'}},
            {move: {name: 'acid'}},
            {move: {name: 'wrap'}}
        ]
    },
    24: { // Arbok
        name: 'arbok',
        displayName: 'Arbok',
        types: [{type: {name: 'poison'}}],
        stats: [
            {base_stat: 60, stat: {name: 'hp'}},
            {base_stat: 95, stat: {name: 'attack'}},
            {base_stat: 69, stat: {name: 'defense'}},
            {base_stat: 65, stat: {name: 'special-attack'}},
            {base_stat: 79, stat: {name: 'special-defense'}},
            {base_stat: 80, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/24.png'
        },
        moves: [
            {move: {name: 'poison-jab'}},
            {move: {name: 'crunch'}},
            {move: {name: 'gunk-shot'}},
            {move: {name: 'earthquake'}}
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
    26: { // Raichu
        name: 'raichu',
        displayName: 'Raichu',
        types: [{type: {name: 'electric'}}],
        stats: [
            {base_stat: 60, stat: {name: 'hp'}},
            {base_stat: 90, stat: {name: 'attack'}},
            {base_stat: 55, stat: {name: 'defense'}},
            {base_stat: 90, stat: {name: 'special-attack'}},
            {base_stat: 80, stat: {name: 'special-defense'}},
            {base_stat: 110, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/26.png'
        },
        moves: [
            {move: {name: 'thunderbolt'}},
            {move: {name: 'thunder'}},
            {move: {name: 'iron-tail'}},
            {move: {name: 'focus-blast'}}
        ]
    },
    27: { // Sandshrew
        name: 'sandshrew',
        displayName: 'Sandshrew',
        types: [{type: {name: 'ground'}}],
        stats: [
            {base_stat: 50, stat: {name: 'hp'}},
            {base_stat: 75, stat: {name: 'attack'}},
            {base_stat: 85, stat: {name: 'defense'}},
            {base_stat: 20, stat: {name: 'special-attack'}},
            {base_stat: 30, stat: {name: 'special-defense'}},
            {base_stat: 40, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/27.png'
        },
        moves: [
            {move: {name: 'earthquake'}},
            {move: {name: 'rock-slide'}},
            {move: {name: 'dig'}},
            {move: {name: 'slash'}}
        ]
    },
    28: { // Sandslash
        name: 'sandslash',
        displayName: 'Sandslash',
        types: [{type: {name: 'ground'}}],
        stats: [
            {base_stat: 75, stat: {name: 'hp'}},
            {base_stat: 100, stat: {name: 'attack'}},
            {base_stat: 110, stat: {name: 'defense'}},
            {base_stat: 45, stat: {name: 'special-attack'}},
            {base_stat: 55, stat: {name: 'special-defense'}},
            {base_stat: 65, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/28.png'
        },
        moves: [
            {move: {name: 'earthquake'}},
            {move: {name: 'stone-edge'}},
            {move: {name: 'swords-dance'}},
            {move: {name: 'slash'}}
        ]
    },
    29: { // Nidoran♀
        name: 'nidoran-f',
        displayName: 'Nidoran♀',
        types: [{type: {name: 'poison'}}],
        stats: [
            {base_stat: 55, stat: {name: 'hp'}},
            {base_stat: 47, stat: {name: 'attack'}},
            {base_stat: 52, stat: {name: 'defense'}},
            {base_stat: 40, stat: {name: 'special-attack'}},
            {base_stat: 40, stat: {name: 'special-defense'}},
            {base_stat: 41, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/29.png'
        },
        moves: [
            {move: {name: 'poison-sting'}},
            {move: {name: 'bite'}},
            {move: {name: 'poison-jab'}},
            {move: {name: 'crunch'}}
        ]
    },
    30: { // Nidorina
        name: 'nidorina',
        displayName: 'Nidorina',
        types: [{type: {name: 'poison'}}],
        stats: [
            {base_stat: 70, stat: {name: 'hp'}},
            {base_stat: 62, stat: {name: 'attack'}},
            {base_stat: 67, stat: {name: 'defense'}},
            {base_stat: 55, stat: {name: 'special-attack'}},
            {base_stat: 55, stat: {name: 'special-defense'}},
            {base_stat: 56, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/30.png'
        },
        moves: [
            {move: {name: 'poison-jab'}},
            {move: {name: 'bite'}},
            {move: {name: 'crunch'}},
            {move: {name: 'earth-power'}}
        ]
    },
    31: { // Nidoqueen
        name: 'nidoqueen',
        displayName: 'Nidoqueen',
        types: [{type: {name: 'poison'}}, {type: {name: 'ground'}}],
        stats: [
            {base_stat: 90, stat: {name: 'hp'}},
            {base_stat: 92, stat: {name: 'attack'}},
            {base_stat: 87, stat: {name: 'defense'}},
            {base_stat: 75, stat: {name: 'special-attack'}},
            {base_stat: 85, stat: {name: 'special-defense'}},
            {base_stat: 76, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/31.png'
        },
        moves: [
            {move: {name: 'poison-jab'}},
            {move: {name: 'earthquake'}},
            {move: {name: 'earth-power'}},
            {move: {name: 'stone-edge'}}
        ]
    },
    32: { // Nidoran♂
        name: 'nidoran-m',
        displayName: 'Nidoran♂',
        types: [{type: {name: 'poison'}}],
        stats: [
            {base_stat: 46, stat: {name: 'hp'}},
            {base_stat: 57, stat: {name: 'attack'}},
            {base_stat: 40, stat: {name: 'defense'}},
            {base_stat: 40, stat: {name: 'special-attack'}},
            {base_stat: 40, stat: {name: 'special-defense'}},
            {base_stat: 50, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/32.png'
        },
        moves: [
            {move: {name: 'poison-sting'}},
            {move: {name: 'horn-attack'}},
            {move: {name: 'poison-jab'}},
            {move: {name: 'bite'}}
        ]
    },
    33: { // Nidorino
        name: 'nidorino',
        displayName: 'Nidorino',
        types: [{type: {name: 'poison'}}],
        stats: [
            {base_stat: 61, stat: {name: 'hp'}},
            {base_stat: 72, stat: {name: 'attack'}},
            {base_stat: 57, stat: {name: 'defense'}},
            {base_stat: 55, stat: {name: 'special-attack'}},
            {base_stat: 55, stat: {name: 'special-defense'}},
            {base_stat: 65, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/33.png'
        },
        moves: [
            {move: {name: 'poison-jab'}},
            {move: {name: 'horn-attack'}},
            {move: {name: 'crunch'}},
            {move: {name: 'earth-power'}}
        ]
    },
    34: { // Nidoking
        name: 'nidoking',
        displayName: 'Nidoking',
        types: [{type: {name: 'poison'}}, {type: {name: 'ground'}}],
        stats: [
            {base_stat: 81, stat: {name: 'hp'}},
            {base_stat: 102, stat: {name: 'attack'}},
            {base_stat: 77, stat: {name: 'defense'}},
            {base_stat: 85, stat: {name: 'special-attack'}},
            {base_stat: 75, stat: {name: 'special-defense'}},
            {base_stat: 85, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/34.png'
        },
        moves: [
            {move: {name: 'poison-jab'}},
            {move: {name: 'earthquake'}},
            {move: {name: 'earth-power'}},
            {move: {name: 'megahorn'}}
        ]
    },
    35: { // Clefairy
        name: 'clefairy',
        displayName: 'Clefairy',
        types: [{type: {name: 'fairy'}}],
        stats: [
            {base_stat: 70, stat: {name: 'hp'}},
            {base_stat: 45, stat: {name: 'attack'}},
            {base_stat: 48, stat: {name: 'defense'}},
            {base_stat: 60, stat: {name: 'special-attack'}},
            {base_stat: 65, stat: {name: 'special-defense'}},
            {base_stat: 35, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png'
        },
        moves: [
            {move: {name: 'moonblast'}},
            {move: {name: 'cosmic-power'}},
            {move: {name: 'thunderbolt'}},
            {move: {name: 'fire-blast'}}
        ]
    },
    36: { // Clefable
        name: 'clefable',
        displayName: 'Clefable',
        types: [{type: {name: 'fairy'}}],
        stats: [
            {base_stat: 95, stat: {name: 'hp'}},
            {base_stat: 70, stat: {name: 'attack'}},
            {base_stat: 73, stat: {name: 'defense'}},
            {base_stat: 95, stat: {name: 'special-attack'}},
            {base_stat: 90, stat: {name: 'special-defense'}},
            {base_stat: 60, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/36.png'
        },
        moves: [
            {move: {name: 'moonblast'}},
            {move: {name: 'thunderbolt'}},
            {move: {name: 'fire-blast'}},
            {move: {name: 'ice-beam'}}
        ]
    },
    37: { // Vulpix
        name: 'vulpix',
        displayName: 'Vulpix',
        types: [{type: {name: 'fire'}}],
        stats: [
            {base_stat: 38, stat: {name: 'hp'}},
            {base_stat: 41, stat: {name: 'attack'}},
            {base_stat: 40, stat: {name: 'defense'}},
            {base_stat: 50, stat: {name: 'special-attack'}},
            {base_stat: 65, stat: {name: 'special-defense'}},
            {base_stat: 65, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/37.png'
        },
        moves: [
            {move: {name: 'flamethrower'}},
            {move: {name: 'fire-blast'}},
            {move: {name: 'solar-beam'}},
            {move: {name: 'extrasensory'}}
        ]
    },
    38: { // Ninetales
        name: 'ninetales',
        displayName: 'Ninetales',
        types: [{type: {name: 'fire'}}],
        stats: [
            {base_stat: 73, stat: {name: 'hp'}},
            {base_stat: 76, stat: {name: 'attack'}},
            {base_stat: 75, stat: {name: 'defense'}},
            {base_stat: 81, stat: {name: 'special-attack'}},
            {base_stat: 100, stat: {name: 'special-defense'}},
            {base_stat: 100, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/38.png'
        },
        moves: [
            {move: {name: 'flamethrower'}},
            {move: {name: 'fire-blast'}},
            {move: {name: 'solar-beam'}},
            {move: {name: 'psychic'}}
        ]
    },
    39: { // Jigglypuff
        name: 'jigglypuff',
        displayName: 'Jigglypuff',
        types: [{type: {name: 'normal'}}, {type: {name: 'fairy'}}],
        stats: [
            {base_stat: 115, stat: {name: 'hp'}},
            {base_stat: 45, stat: {name: 'attack'}},
            {base_stat: 20, stat: {name: 'defense'}},
            {base_stat: 45, stat: {name: 'special-attack'}},
            {base_stat: 25, stat: {name: 'special-defense'}},
            {base_stat: 20, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/39.png'
        },
        moves: [
            {move: {name: 'body-slam'}},
            {move: {name: 'thunderbolt'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'dazzling-gleam'}}
        ]
    },
    40: { // Wigglytuff
        name: 'wigglytuff',
        displayName: 'Wigglytuff',
        types: [{type: {name: 'normal'}}, {type: {name: 'fairy'}}],
        stats: [
            {base_stat: 140, stat: {name: 'hp'}},
            {base_stat: 70, stat: {name: 'attack'}},
            {base_stat: 45, stat: {name: 'defense'}},
            {base_stat: 85, stat: {name: 'special-attack'}},
            {base_stat: 50, stat: {name: 'special-defense'}},
            {base_stat: 45, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/40.png'
        },
        moves: [
            {move: {name: 'body-slam'}},
            {move: {name: 'thunderbolt'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'dazzling-gleam'}}
        ]
    },
    41: { // Zubat
        name: 'zubat',
        displayName: 'Zubat',
        types: [{type: {name: 'poison'}}, {type: {name: 'flying'}}],
        stats: [
            {base_stat: 40, stat: {name: 'hp'}},
            {base_stat: 45, stat: {name: 'attack'}},
            {base_stat: 35, stat: {name: 'defense'}},
            {base_stat: 30, stat: {name: 'special-attack'}},
            {base_stat: 40, stat: {name: 'special-defense'}},
            {base_stat: 55, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/41.png'
        },
        moves: [
            {move: {name: 'air-slash'}},
            {move: {name: 'poison-jab'}},
            {move: {name: 'bite'}},
            {move: {name: 'wing-attack'}}
        ]
    },
    42: { // Golbat
        name: 'golbat',
        displayName: 'Golbat',
        types: [{type: {name: 'poison'}}, {type: {name: 'flying'}}],
        stats: [
            {base_stat: 75, stat: {name: 'hp'}},
            {base_stat: 80, stat: {name: 'attack'}},
            {base_stat: 70, stat: {name: 'defense'}},
            {base_stat: 65, stat: {name: 'special-attack'}},
            {base_stat: 75, stat: {name: 'special-defense'}},
            {base_stat: 90, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/42.png'
        },
        moves: [
            {move: {name: 'air-slash'}},
            {move: {name: 'poison-jab'}},
            {move: {name: 'bite'}},
            {move: {name: 'u-turn'}}
        ]
    },
    43: { // Oddish
        name: 'oddish',
        displayName: 'Oddish',
        types: [{type: {name: 'grass'}}, {type: {name: 'poison'}}],
        stats: [
            {base_stat: 45, stat: {name: 'hp'}},
            {base_stat: 50, stat: {name: 'attack'}},
            {base_stat: 55, stat: {name: 'defense'}},
            {base_stat: 75, stat: {name: 'special-attack'}},
            {base_stat: 65, stat: {name: 'special-defense'}},
            {base_stat: 30, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/43.png'
        },
        moves: [
            {move: {name: 'razor-leaf'}},
            {move: {name: 'sludge-bomb'}},
            {move: {name: 'giga-drain'}},
            {move: {name: 'solar-beam'}}
        ]
    },
    44: { // Gloom
        name: 'gloom',
        displayName: 'Gloom',
        types: [{type: {name: 'grass'}}, {type: {name: 'poison'}}],
        stats: [
            {base_stat: 60, stat: {name: 'hp'}},
            {base_stat: 65, stat: {name: 'attack'}},
            {base_stat: 70, stat: {name: 'defense'}},
            {base_stat: 85, stat: {name: 'special-attack'}},
            {base_stat: 75, stat: {name: 'special-defense'}},
            {base_stat: 40, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/44.png'
        },
        moves: [
            {move: {name: 'razor-leaf'}},
            {move: {name: 'sludge-bomb'}},
            {move: {name: 'giga-drain'}},
            {move: {name: 'solar-beam'}}
        ]
    },
    45: { // Vileplume
        name: 'vileplume',
        displayName: 'Vileplume',
        types: [{type: {name: 'grass'}}, {type: {name: 'poison'}}],
        stats: [
            {base_stat: 75, stat: {name: 'hp'}},
            {base_stat: 80, stat: {name: 'attack'}},
            {base_stat: 85, stat: {name: 'defense'}},
            {base_stat: 110, stat: {name: 'special-attack'}},
            {base_stat: 90, stat: {name: 'special-defense'}},
            {base_stat: 50, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/45.png'
        },
        moves: [
            {move: {name: 'sludge-bomb'}},
            {move: {name: 'solar-beam'}},
            {move: {name: 'giga-drain'}},
            {move: {name: 'moonblast'}}
        ]
    },
    46: { // Paras
        name: 'paras',
        displayName: 'Paras',
        types: [{type: {name: 'bug'}}, {type: {name: 'grass'}}],
        stats: [
            {base_stat: 35, stat: {name: 'hp'}},
            {base_stat: 70, stat: {name: 'attack'}},
            {base_stat: 55, stat: {name: 'defense'}},
            {base_stat: 45, stat: {name: 'special-attack'}},
            {base_stat: 55, stat: {name: 'special-defense'}},
            {base_stat: 25, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/46.png'
        },
        moves: [
            {move: {name: 'x-scissor'}},
            {move: {name: 'seed-bomb'}},
            {move: {name: 'slash'}},
            {move: {name: 'spore'}}
        ]
    },
    47: { // Parasect
        name: 'parasect',
        displayName: 'Parasect',
        types: [{type: {name: 'bug'}}, {type: {name: 'grass'}}],
        stats: [
            {base_stat: 60, stat: {name: 'hp'}},
            {base_stat: 95, stat: {name: 'attack'}},
            {base_stat: 80, stat: {name: 'defense'}},
            {base_stat: 60, stat: {name: 'special-attack'}},
            {base_stat: 80, stat: {name: 'special-defense'}},
            {base_stat: 30, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/47.png'
        },
        moves: [
            {move: {name: 'x-scissor'}},
            {move: {name: 'seed-bomb'}},
            {move: {name: 'slash'}},
            {move: {name: 'spore'}}
        ]
    },
    48: { // Venonat
        name: 'venonat',
        displayName: 'Venonat',
        types: [{type: {name: 'bug'}}, {type: {name: 'poison'}}],
        stats: [
            {base_stat: 60, stat: {name: 'hp'}},
            {base_stat: 55, stat: {name: 'attack'}},
            {base_stat: 50, stat: {name: 'defense'}},
            {base_stat: 40, stat: {name: 'special-attack'}},
            {base_stat: 55, stat: {name: 'special-defense'}},
            {base_stat: 45, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/48.png'
        },
        moves: [
            {move: {name: 'bug-buzz'}},
            {move: {name: 'poison-jab'}},
            {move: {name: 'psychic'}},
            {move: {name: 'sleep-powder'}}
        ]
    },
    49: { // Venomoth
        name: 'venomoth',
        displayName: 'Venomoth',
        types: [{type: {name: 'bug'}}, {type: {name: 'poison'}}],
        stats: [
            {base_stat: 70, stat: {name: 'hp'}},
            {base_stat: 65, stat: {name: 'attack'}},
            {base_stat: 60, stat: {name: 'defense'}},
            {base_stat: 90, stat: {name: 'special-attack'}},
            {base_stat: 75, stat: {name: 'special-defense'}},
            {base_stat: 90, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/49.png'
        },
        moves: [
            {move: {name: 'bug-buzz'}},
            {move: {name: 'sludge-bomb'}},
            {move: {name: 'psychic'}},
            {move: {name: 'sleep-powder'}}
        ]
    },
    50: { // Diglett
        name: 'diglett',
        displayName: 'Diglett',
        types: [{type: {name: 'ground'}}],
        stats: [
            {base_stat: 10, stat: {name: 'hp'}},
            {base_stat: 55, stat: {name: 'attack'}},
            {base_stat: 25, stat: {name: 'defense'}},
            {base_stat: 35, stat: {name: 'special-attack'}},
            {base_stat: 45, stat: {name: 'special-defense'}},
            {base_stat: 95, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/50.png'
        },
        moves: [
            {move: {name: 'earthquake'}},
            {move: {name: 'dig'}},
            {move: {name: 'rock-slide'}},
            {move: {name: 'slash'}}
        ]
    },
    51: { // Dugtrio
        name: 'dugtrio',
        displayName: 'Dugtrio',
        types: [{type: {name: 'ground'}}],
        stats: [
            {base_stat: 35, stat: {name: 'hp'}},
            {base_stat: 100, stat: {name: 'attack'}},
            {base_stat: 50, stat: {name: 'defense'}},
            {base_stat: 50, stat: {name: 'special-attack'}},
            {base_stat: 70, stat: {name: 'special-defense'}},
            {base_stat: 120, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/51.png'
        },
        moves: [
            {move: {name: 'earthquake'}},
            {move: {name: 'stone-edge'}},
            {move: {name: 'sucker-punch'}},
            {move: {name: 'slash'}}
        ]
    },
    52: { // Meowth
        name: 'meowth',
        displayName: 'Meowth',
        types: [{type: {name: 'normal'}}],
        stats: [
            {base_stat: 40, stat: {name: 'hp'}},
            {base_stat: 45, stat: {name: 'attack'}},
            {base_stat: 35, stat: {name: 'defense'}},
            {base_stat: 40, stat: {name: 'special-attack'}},
            {base_stat: 40, stat: {name: 'special-defense'}},
            {base_stat: 90, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/52.png'
        },
        moves: [
            {move: {name: 'slash'}},
            {move: {name: 'bite'}},
            {move: {name: 'quick-attack'}},
            {move: {name: 'play-rough'}}
        ]
    },
    53: { // Persian
        name: 'persian',
        displayName: 'Persian',
        types: [{type: {name: 'normal'}}],
        stats: [
            {base_stat: 65, stat: {name: 'hp'}},
            {base_stat: 70, stat: {name: 'attack'}},
            {base_stat: 60, stat: {name: 'defense'}},
            {base_stat: 65, stat: {name: 'special-attack'}},
            {base_stat: 65, stat: {name: 'special-defense'}},
            {base_stat: 115, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/53.png'
        },
        moves: [
            {move: {name: 'slash'}},
            {move: {name: 'crunch'}},
            {move: {name: 'play-rough'}},
            {move: {name: 'u-turn'}}
        ]
    },
    54: { // Psyduck
        name: 'psyduck',
        displayName: 'Psyduck',
        types: [{type: {name: 'water'}}],
        stats: [
            {base_stat: 50, stat: {name: 'hp'}},
            {base_stat: 52, stat: {name: 'attack'}},
            {base_stat: 48, stat: {name: 'defense'}},
            {base_stat: 65, stat: {name: 'special-attack'}},
            {base_stat: 50, stat: {name: 'special-defense'}},
            {base_stat: 55, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/54.png'
        },
        moves: [
            {move: {name: 'water-gun'}},
            {move: {name: 'confusion'}},
            {move: {name: 'aqua-tail'}},
            {move: {name: 'psychic'}}
        ]
    },
    55: { // Golduck
        name: 'golduck',
        displayName: 'Golduck',
        types: [{type: {name: 'water'}}],
        stats: [
            {base_stat: 80, stat: {name: 'hp'}},
            {base_stat: 82, stat: {name: 'attack'}},
            {base_stat: 78, stat: {name: 'defense'}},
            {base_stat: 95, stat: {name: 'special-attack'}},
            {base_stat: 80, stat: {name: 'special-defense'}},
            {base_stat: 85, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/55.png'
        },
        moves: [
            {move: {name: 'hydro-pump'}},
            {move: {name: 'psychic'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'aqua-tail'}}
        ]
    },
    56: { // Mankey
        name: 'mankey',
        displayName: 'Mankey',
        types: [{type: {name: 'fighting'}}],
        stats: [
            {base_stat: 40, stat: {name: 'hp'}},
            {base_stat: 80, stat: {name: 'attack'}},
            {base_stat: 35, stat: {name: 'defense'}},
            {base_stat: 35, stat: {name: 'special-attack'}},
            {base_stat: 45, stat: {name: 'special-defense'}},
            {base_stat: 70, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/56.png'
        },
        moves: [
            {move: {name: 'karate-chop'}},
            {move: {name: 'cross-chop'}},
            {move: {name: 'earthquake'}},
            {move: {name: 'u-turn'}}
        ]
    },
    57: { // Primeape
        name: 'primeape',
        displayName: 'Primeape',
        types: [{type: {name: 'fighting'}}],
        stats: [
            {base_stat: 65, stat: {name: 'hp'}},
            {base_stat: 105, stat: {name: 'attack'}},
            {base_stat: 60, stat: {name: 'defense'}},
            {base_stat: 60, stat: {name: 'special-attack'}},
            {base_stat: 70, stat: {name: 'special-defense'}},
            {base_stat: 95, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/57.png'
        },
        moves: [
            {move: {name: 'cross-chop'}},
            {move: {name: 'close-combat'}},
            {move: {name: 'earthquake'}},
            {move: {name: 'u-turn'}}
        ]
    },
    58: { // Growlithe
        name: 'growlithe',
        displayName: 'Growlithe',
        types: [{type: {name: 'fire'}}],
        stats: [
            {base_stat: 55, stat: {name: 'hp'}},
            {base_stat: 70, stat: {name: 'attack'}},
            {base_stat: 45, stat: {name: 'defense'}},
            {base_stat: 70, stat: {name: 'special-attack'}},
            {base_stat: 50, stat: {name: 'special-defense'}},
            {base_stat: 60, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/58.png'
        },
        moves: [
            {move: {name: 'flamethrower'}},
            {move: {name: 'flare-blitz'}},
            {move: {name: 'wild-charge'}},
            {move: {name: 'crunch'}}
        ]
    },
    59: { // Arcanine
        name: 'arcanine',
        displayName: 'Arcanine',
        types: [{type: {name: 'fire'}}],
        stats: [
            {base_stat: 90, stat: {name: 'hp'}},
            {base_stat: 110, stat: {name: 'attack'}},
            {base_stat: 80, stat: {name: 'defense'}},
            {base_stat: 100, stat: {name: 'special-attack'}},
            {base_stat: 80, stat: {name: 'special-defense'}},
            {base_stat: 95, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/59.png'
        },
        moves: [
            {move: {name: 'flare-blitz'}},
            {move: {name: 'wild-charge'}},
            {move: {name: 'crunch'}},
            {move: {name: 'extreme-speed'}}
        ]
    },
    60: { // Poliwag
        name: 'poliwag',
        displayName: 'Poliwag',
        types: [{type: {name: 'water'}}],
        stats: [
            {base_stat: 40, stat: {name: 'hp'}},
            {base_stat: 50, stat: {name: 'attack'}},
            {base_stat: 40, stat: {name: 'defense'}},
            {base_stat: 40, stat: {name: 'special-attack'}},
            {base_stat: 40, stat: {name: 'special-defense'}},
            {base_stat: 90, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/60.png'
        },
        moves: [
            {move: {name: 'water-gun'}},
            {move: {name: 'bubble-beam'}},
            {move: {name: 'body-slam'}},
            {move: {name: 'ice-beam'}}
        ]
    },
    61: { // Poliwhirl
        name: 'poliwhirl',
        displayName: 'Poliwhirl',
        types: [{type: {name: 'water'}}],
        stats: [
            {base_stat: 65, stat: {name: 'hp'}},
            {base_stat: 65, stat: {name: 'attack'}},
            {base_stat: 65, stat: {name: 'defense'}},
            {base_stat: 50, stat: {name: 'special-attack'}},
            {base_stat: 50, stat: {name: 'special-defense'}},
            {base_stat: 90, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/61.png'
        },
        moves: [
            {move: {name: 'water-gun'}},
            {move: {name: 'bubble-beam'}},
            {move: {name: 'body-slam'}},
            {move: {name: 'ice-beam'}}
        ]
    },
    62: { // Poliwrath
        name: 'poliwrath',
        displayName: 'Poliwrath',
        types: [{type: {name: 'water'}}, {type: {name: 'fighting'}}],
        stats: [
            {base_stat: 90, stat: {name: 'hp'}},
            {base_stat: 95, stat: {name: 'attack'}},
            {base_stat: 95, stat: {name: 'defense'}},
            {base_stat: 70, stat: {name: 'special-attack'}},
            {base_stat: 90, stat: {name: 'special-defense'}},
            {base_stat: 70, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/62.png'
        },
        moves: [
            {move: {name: 'waterfall'}},
            {move: {name: 'close-combat'}},
            {move: {name: 'ice-punch'}},
            {move: {name: 'earthquake'}}
        ]
    },
    63: { // Abra
        name: 'abra',
        displayName: 'Abra',
        types: [{type: {name: 'psychic'}}],
        stats: [
            {base_stat: 25, stat: {name: 'hp'}},
            {base_stat: 20, stat: {name: 'attack'}},
            {base_stat: 15, stat: {name: 'defense'}},
            {base_stat: 105, stat: {name: 'special-attack'}},
            {base_stat: 55, stat: {name: 'special-defense'}},
            {base_stat: 90, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/63.png'
        },
        moves: [
            {move: {name: 'psychic'}},
            {move: {name: 'psyshock'}},
            {move: {name: 'dazzling-gleam'}},
            {move: {name: 'shadow-ball'}}
        ]
    },
    64: { // Kadabra
        name: 'kadabra',
        displayName: 'Kadabra',
        types: [{type: {name: 'psychic'}}],
        stats: [
            {base_stat: 40, stat: {name: 'hp'}},
            {base_stat: 35, stat: {name: 'attack'}},
            {base_stat: 30, stat: {name: 'defense'}},
            {base_stat: 120, stat: {name: 'special-attack'}},
            {base_stat: 70, stat: {name: 'special-defense'}},
            {base_stat: 105, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/64.png'
        },
        moves: [
            {move: {name: 'psychic'}},
            {move: {name: 'psyshock'}},
            {move: {name: 'dazzling-gleam'}},
            {move: {name: 'shadow-ball'}}
        ]
    },
    65: { // Alakazam
        name: 'alakazam',
        displayName: 'Alakazam',
        types: [{type: {name: 'psychic'}}],
        stats: [
            {base_stat: 55, stat: {name: 'hp'}},
            {base_stat: 50, stat: {name: 'attack'}},
            {base_stat: 45, stat: {name: 'defense'}},
            {base_stat: 135, stat: {name: 'special-attack'}},
            {base_stat: 95, stat: {name: 'special-defense'}},
            {base_stat: 120, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/65.png'
        },
        moves: [
            {move: {name: 'psychic'}},
            {move: {name: 'psyshock'}},
            {move: {name: 'dazzling-gleam'}},
            {move: {name: 'shadow-ball'}}
        ]
    },
    66: { // Machop
        name: 'machop',
        displayName: 'Machop',
        types: [{type: {name: 'fighting'}}],
        stats: [
            {base_stat: 70, stat: {name: 'hp'}},
            {base_stat: 80, stat: {name: 'attack'}},
            {base_stat: 50, stat: {name: 'defense'}},
            {base_stat: 35, stat: {name: 'special-attack'}},
            {base_stat: 35, stat: {name: 'special-defense'}},
            {base_stat: 35, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/66.png'
        },
        moves: [
            {move: {name: 'karate-chop'}},
            {move: {name: 'cross-chop'}},
            {move: {name: 'rock-slide'}},
            {move: {name: 'earthquake'}}
        ]
    },
    67: { // Machoke
        name: 'machoke',
        displayName: 'Machoke',
        types: [{type: {name: 'fighting'}}],
        stats: [
            {base_stat: 80, stat: {name: 'hp'}},
            {base_stat: 100, stat: {name: 'attack'}},
            {base_stat: 70, stat: {name: 'defense'}},
            {base_stat: 50, stat: {name: 'special-attack'}},
            {base_stat: 60, stat: {name: 'special-defense'}},
            {base_stat: 45, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/67.png'
        },
        moves: [
            {move: {name: 'cross-chop'}},
            {move: {name: 'close-combat'}},
            {move: {name: 'rock-slide'}},
            {move: {name: 'earthquake'}}
        ]
    },
    68: { // Machamp
        name: 'machamp',
        displayName: 'Machamp',
        types: [{type: {name: 'fighting'}}],
        stats: [
            {base_stat: 90, stat: {name: 'hp'}},
            {base_stat: 130, stat: {name: 'attack'}},
            {base_stat: 80, stat: {name: 'defense'}},
            {base_stat: 65, stat: {name: 'special-attack'}},
            {base_stat: 85, stat: {name: 'special-defense'}},
            {base_stat: 55, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/68.png'
        },
        moves: [
            {move: {name: 'cross-chop'}},
            {move: {name: 'close-combat'}},
            {move: {name: 'stone-edge'}},
            {move: {name: 'earthquake'}}
        ]
    },
    69: { // Bellsprout
        name: 'bellsprout',
        displayName: 'Bellsprout',
        types: [{type: {name: 'grass'}}, {type: {name: 'poison'}}],
        stats: [
            {base_stat: 50, stat: {name: 'hp'}},
            {base_stat: 75, stat: {name: 'attack'}},
            {base_stat: 35, stat: {name: 'defense'}},
            {base_stat: 70, stat: {name: 'special-attack'}},
            {base_stat: 30, stat: {name: 'special-defense'}},
            {base_stat: 40, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/69.png'
        },
        moves: [
            {move: {name: 'vine-whip'}},
            {move: {name: 'razor-leaf'}},
            {move: {name: 'sludge-bomb'}},
            {move: {name: 'solar-beam'}}
        ]
    },
    70: { // Weepinbell
        name: 'weepinbell',
        displayName: 'Weepinbell',
        types: [{type: {name: 'grass'}}, {type: {name: 'poison'}}],
        stats: [
            {base_stat: 65, stat: {name: 'hp'}},
            {base_stat: 90, stat: {name: 'attack'}},
            {base_stat: 50, stat: {name: 'defense'}},
            {base_stat: 85, stat: {name: 'special-attack'}},
            {base_stat: 45, stat: {name: 'special-defense'}},
            {base_stat: 55, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/70.png'
        },
        moves: [
            {move: {name: 'vine-whip'}},
            {move: {name: 'razor-leaf'}},
            {move: {name: 'sludge-bomb'}},
            {move: {name: 'solar-beam'}}
        ]
    },
    71: { // Victreebel
        name: 'victreebel',
        displayName: 'Victreebel',
        types: [{type: {name: 'grass'}}, {type: {name: 'poison'}}],
        stats: [
            {base_stat: 80, stat: {name: 'hp'}},
            {base_stat: 105, stat: {name: 'attack'}},
            {base_stat: 65, stat: {name: 'defense'}},
            {base_stat: 100, stat: {name: 'special-attack'}},
            {base_stat: 70, stat: {name: 'special-defense'}},
            {base_stat: 70, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/71.png'
        },
        moves: [
            {move: {name: 'solar-beam'}},
            {move: {name: 'sludge-bomb'}},
            {move: {name: 'giga-drain'}},
            {move: {name: 'sucker-punch'}}
        ]
    },
    72: { // Tentacool
        name: 'tentacool',
        displayName: 'Tentacool',
        types: [{type: {name: 'water'}}, {type: {name: 'poison'}}],
        stats: [
            {base_stat: 40, stat: {name: 'hp'}},
            {base_stat: 40, stat: {name: 'attack'}},
            {base_stat: 35, stat: {name: 'defense'}},
            {base_stat: 50, stat: {name: 'special-attack'}},
            {base_stat: 100, stat: {name: 'special-defense'}},
            {base_stat: 70, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/72.png'
        },
        moves: [
            {move: {name: 'water-gun'}},
            {move: {name: 'poison-jab'}},
            {move: {name: 'sludge-bomb'}},
            {move: {name: 'ice-beam'}}
        ]
    },
    73: { // Tentacruel
        name: 'tentacruel',
        displayName: 'Tentacruel',
        types: [{type: {name: 'water'}}, {type: {name: 'poison'}}],
        stats: [
            {base_stat: 80, stat: {name: 'hp'}},
            {base_stat: 70, stat: {name: 'attack'}},
            {base_stat: 65, stat: {name: 'defense'}},
            {base_stat: 80, stat: {name: 'special-attack'}},
            {base_stat: 120, stat: {name: 'special-defense'}},
            {base_stat: 100, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/73.png'
        },
        moves: [
            {move: {name: 'hydro-pump'}},
            {move: {name: 'sludge-bomb'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'giga-drain'}}
        ]
    },
    74: { // Geodude
        name: 'geodude',
        displayName: 'Geodude',
        types: [{type: {name: 'rock'}}, {type: {name: 'ground'}}],
        stats: [
            {base_stat: 40, stat: {name: 'hp'}},
            {base_stat: 80, stat: {name: 'attack'}},
            {base_stat: 100, stat: {name: 'defense'}},
            {base_stat: 30, stat: {name: 'special-attack'}},
            {base_stat: 30, stat: {name: 'special-defense'}},
            {base_stat: 20, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/74.png'
        },
        moves: [
            {move: {name: 'rock-slide'}},
            {move: {name: 'earthquake'}},
            {move: {name: 'stone-edge'}},
            {move: {name: 'fire-punch'}}
        ]
    },
    75: { // Graveler
        name: 'graveler',
        displayName: 'Graveler',
        types: [{type: {name: 'rock'}}, {type: {name: 'ground'}}],
        stats: [
            {base_stat: 55, stat: {name: 'hp'}},
            {base_stat: 95, stat: {name: 'attack'}},
            {base_stat: 115, stat: {name: 'defense'}},
            {base_stat: 45, stat: {name: 'special-attack'}},
            {base_stat: 45, stat: {name: 'special-defense'}},
            {base_stat: 35, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/75.png'
        },
        moves: [
            {move: {name: 'rock-slide'}},
            {move: {name: 'earthquake'}},
            {move: {name: 'stone-edge'}},
            {move: {name: 'fire-punch'}}
        ]
    },
    76: { // Golem
        name: 'golem',
        displayName: 'Golem',
        types: [{type: {name: 'rock'}}, {type: {name: 'ground'}}],
        stats: [
            {base_stat: 80, stat: {name: 'hp'}},
            {base_stat: 120, stat: {name: 'attack'}},
            {base_stat: 130, stat: {name: 'defense'}},
            {base_stat: 55, stat: {name: 'special-attack'}},
            {base_stat: 65, stat: {name: 'special-defense'}},
            {base_stat: 45, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/76.png'
        },
        moves: [
            {move: {name: 'earthquake'}},
            {move: {name: 'stone-edge'}},
            {move: {name: 'fire-punch'}},
            {move: {name: 'explosion'}}
        ]
    },
    77: { // Ponyta
        name: 'ponyta',
        displayName: 'Ponyta',
        types: [{type: {name: 'fire'}}],
        stats: [
            {base_stat: 50, stat: {name: 'hp'}},
            {base_stat: 85, stat: {name: 'attack'}},
            {base_stat: 55, stat: {name: 'defense'}},
            {base_stat: 65, stat: {name: 'special-attack'}},
            {base_stat: 65, stat: {name: 'special-defense'}},
            {base_stat: 90, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/77.png'
        },
        moves: [
            {move: {name: 'flamethrower'}},
            {move: {name: 'flare-blitz'}},
            {move: {name: 'wild-charge'}},
            {move: {name: 'quick-attack'}}
        ]
    },
    78: { // Rapidash
        name: 'rapidash',
        displayName: 'Rapidash',
        types: [{type: {name: 'fire'}}],
        stats: [
            {base_stat: 65, stat: {name: 'hp'}},
            {base_stat: 100, stat: {name: 'attack'}},
            {base_stat: 70, stat: {name: 'defense'}},
            {base_stat: 80, stat: {name: 'special-attack'}},
            {base_stat: 80, stat: {name: 'special-defense'}},
            {base_stat: 105, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/78.png'
        },
        moves: [
            {move: {name: 'flare-blitz'}},
            {move: {name: 'wild-charge'}},
            {move: {name: 'megahorn'}},
            {move: {name: 'quick-attack'}}
        ]
    },
    79: { // Slowpoke
        name: 'slowpoke',
        displayName: 'Slowpoke',
        types: [{type: {name: 'water'}}, {type: {name: 'psychic'}}],
        stats: [
            {base_stat: 90, stat: {name: 'hp'}},
            {base_stat: 65, stat: {name: 'attack'}},
            {base_stat: 65, stat: {name: 'defense'}},
            {base_stat: 40, stat: {name: 'special-attack'}},
            {base_stat: 40, stat: {name: 'special-defense'}},
            {base_stat: 15, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/79.png'
        },
        moves: [
            {move: {name: 'water-gun'}},
            {move: {name: 'psychic'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'slack-off'}}
        ]
    },
    80: { // Slowbro
        name: 'slowbro',
        displayName: 'Slowbro',
        types: [{type: {name: 'water'}}, {type: {name: 'psychic'}}],
        stats: [
            {base_stat: 95, stat: {name: 'hp'}},
            {base_stat: 75, stat: {name: 'attack'}},
            {base_stat: 110, stat: {name: 'defense'}},
            {base_stat: 100, stat: {name: 'special-attack'}},
            {base_stat: 80, stat: {name: 'special-defense'}},
            {base_stat: 30, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/80.png'
        },
        moves: [
            {move: {name: 'psychic'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'scald'}},
            {move: {name: 'slack-off'}}
        ]
    },
    81: { // Magnemite
        name: 'magnemite',
        displayName: 'Magnemite',
        types: [{type: {name: 'electric'}}, {type: {name: 'steel'}}],
        stats: [
            {base_stat: 25, stat: {name: 'hp'}},
            {base_stat: 35, stat: {name: 'attack'}},
            {base_stat: 70, stat: {name: 'defense'}},
            {base_stat: 95, stat: {name: 'special-attack'}},
            {base_stat: 55, stat: {name: 'special-defense'}},
            {base_stat: 45, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/81.png'
        },
        moves: [
            {move: {name: 'thunderbolt'}},
            {move: {name: 'flash-cannon'}},
            {move: {name: 'thunder-wave'}},
            {move: {name: 'volt-switch'}}
        ]
    },
    82: { // Magneton
        name: 'magneton',
        displayName: 'Magneton',
        types: [{type: {name: 'electric'}}, {type: {name: 'steel'}}],
        stats: [
            {base_stat: 50, stat: {name: 'hp'}},
            {base_stat: 60, stat: {name: 'attack'}},
            {base_stat: 95, stat: {name: 'defense'}},
            {base_stat: 120, stat: {name: 'special-attack'}},
            {base_stat: 70, stat: {name: 'special-defense'}},
            {base_stat: 70, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/82.png'
        },
        moves: [
            {move: {name: 'thunderbolt'}},
            {move: {name: 'flash-cannon'}},
            {move: {name: 'volt-switch'}},
            {move: {name: 'thunder-wave'}}
        ]
    },
    83: { // Farfetch'd
        name: 'farfetchd',
        displayName: 'Farfetch\'d',
        types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
        stats: [
            {base_stat: 52, stat: {name: 'hp'}},
            {base_stat: 90, stat: {name: 'attack'}},
            {base_stat: 55, stat: {name: 'defense'}},
            {base_stat: 58, stat: {name: 'special-attack'}},
            {base_stat: 62, stat: {name: 'special-defense'}},
            {base_stat: 60, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/83.png'
        },
        moves: [
            {move: {name: 'slash'}},
            {move: {name: 'air-slash'}},
            {move: {name: 'leaf-blade'}},
            {move: {name: 'quick-attack'}}
        ]
    },
    84: { // Doduo
        name: 'doduo',
        displayName: 'Doduo',
        types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
        stats: [
            {base_stat: 35, stat: {name: 'hp'}},
            {base_stat: 85, stat: {name: 'attack'}},
            {base_stat: 45, stat: {name: 'defense'}},
            {base_stat: 35, stat: {name: 'special-attack'}},
            {base_stat: 35, stat: {name: 'special-defense'}},
            {base_stat: 75, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/84.png'
        },
        moves: [
            {move: {name: 'peck'}},
            {move: {name: 'drill-peck'}},
            {move: {name: 'quick-attack'}},
            {move: {name: 'brave-bird'}}
        ]
    },
    85: { // Dodrio
        name: 'dodrio',
        displayName: 'Dodrio',
        types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
        stats: [
            {base_stat: 60, stat: {name: 'hp'}},
            {base_stat: 110, stat: {name: 'attack'}},
            {base_stat: 70, stat: {name: 'defense'}},
            {base_stat: 60, stat: {name: 'special-attack'}},
            {base_stat: 60, stat: {name: 'special-defense'}},
            {base_stat: 110, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/85.png'
        },
        moves: [
            {move: {name: 'drill-peck'}},
            {move: {name: 'brave-bird'}},
            {move: {name: 'quick-attack'}},
            {move: {name: 'swords-dance'}}
        ]
    },
    86: { // Seel
        name: 'seel',
        displayName: 'Seel',
        types: [{type: {name: 'water'}}],
        stats: [
            {base_stat: 65, stat: {name: 'hp'}},
            {base_stat: 45, stat: {name: 'attack'}},
            {base_stat: 55, stat: {name: 'defense'}},
            {base_stat: 45, stat: {name: 'special-attack'}},
            {base_stat: 70, stat: {name: 'special-defense'}},
            {base_stat: 45, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/86.png'
        },
        moves: [
            {move: {name: 'water-gun'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'aqua-tail'}},
            {move: {name: 'aurora-beam'}}
        ]
    },
    87: { // Dewgong
        name: 'dewgong',
        displayName: 'Dewgong',
        types: [{type: {name: 'water'}}, {type: {name: 'ice'}}],
        stats: [
            {base_stat: 90, stat: {name: 'hp'}},
            {base_stat: 70, stat: {name: 'attack'}},
            {base_stat: 80, stat: {name: 'defense'}},
            {base_stat: 70, stat: {name: 'special-attack'}},
            {base_stat: 95, stat: {name: 'special-defense'}},
            {base_stat: 70, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/87.png'
        },
        moves: [
            {move: {name: 'ice-beam'}},
            {move: {name: 'hydro-pump'}},
            {move: {name: 'aqua-tail'}},
            {move: {name: 'ice-shard'}}
        ]
    },
    88: { // Grimer
        name: 'grimer',
        displayName: 'Grimer',
        types: [{type: {name: 'poison'}}],
        stats: [
            {base_stat: 80, stat: {name: 'hp'}},
            {base_stat: 80, stat: {name: 'attack'}},
            {base_stat: 50, stat: {name: 'defense'}},
            {base_stat: 40, stat: {name: 'special-attack'}},
            {base_stat: 50, stat: {name: 'special-defense'}},
            {base_stat: 25, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/88.png'
        },
        moves: [
            {move: {name: 'poison-jab'}},
            {move: {name: 'sludge-bomb'}},
            {move: {name: 'gunk-shot'}},
            {move: {name: 'shadow-sneak'}}
        ]
    },
    89: { // Muk
        name: 'muk',
        displayName: 'Muk',
        types: [{type: {name: 'poison'}}],
        stats: [
            {base_stat: 105, stat: {name: 'hp'}},
            {base_stat: 105, stat: {name: 'attack'}},
            {base_stat: 75, stat: {name: 'defense'}},
            {base_stat: 65, stat: {name: 'special-attack'}},
            {base_stat: 100, stat: {name: 'special-defense'}},
            {base_stat: 50, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/89.png'
        },
        moves: [
            {move: {name: 'gunk-shot'}},
            {move: {name: 'poison-jab'}},
            {move: {name: 'shadow-sneak'}},
            {move: {name: 'fire-punch'}}
        ]
    },
    90: { // Shellder
        name: 'shellder',
        displayName: 'Shellder',
        types: [{type: {name: 'water'}}],
        stats: [
            {base_stat: 30, stat: {name: 'hp'}},
            {base_stat: 65, stat: {name: 'attack'}},
            {base_stat: 100, stat: {name: 'defense'}},
            {base_stat: 45, stat: {name: 'special-attack'}},
            {base_stat: 25, stat: {name: 'special-defense'}},
            {base_stat: 40, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/90.png'
        },
        moves: [
            {move: {name: 'water-gun'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'icicle-spear'}},
            {move: {name: 'razor-shell'}}
        ]
    },
    91: { // Cloyster
        name: 'cloyster',
        displayName: 'Cloyster',
        types: [{type: {name: 'water'}}, {type: {name: 'ice'}}],
        stats: [
            {base_stat: 50, stat: {name: 'hp'}},
            {base_stat: 95, stat: {name: 'attack'}},
            {base_stat: 180, stat: {name: 'defense'}},
            {base_stat: 85, stat: {name: 'special-attack'}},
            {base_stat: 45, stat: {name: 'special-defense'}},
            {base_stat: 70, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/91.png'
        },
        moves: [
            {move: {name: 'icicle-spear'}},
            {move: {name: 'hydro-pump'}},
            {move: {name: 'ice-shard'}},
            {move: {name: 'rock-blast'}}
        ]
    },
    92: { // Gastly
        name: 'gastly',
        displayName: 'Gastly',
        types: [{type: {name: 'ghost'}}, {type: {name: 'poison'}}],
        stats: [
            {base_stat: 30, stat: {name: 'hp'}},
            {base_stat: 35, stat: {name: 'attack'}},
            {base_stat: 30, stat: {name: 'defense'}},
            {base_stat: 100, stat: {name: 'special-attack'}},
            {base_stat: 35, stat: {name: 'special-defense'}},
            {base_stat: 80, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/92.png'
        },
        moves: [
            {move: {name: 'shadow-ball'}},
            {move: {name: 'sludge-bomb'}},
            {move: {name: 'thunderbolt'}},
            {move: {name: 'dazzling-gleam'}}
        ]
    },
    93: { // Haunter
        name: 'haunter',
        displayName: 'Haunter',
        types: [{type: {name: 'ghost'}}, {type: {name: 'poison'}}],
        stats: [
            {base_stat: 45, stat: {name: 'hp'}},
            {base_stat: 50, stat: {name: 'attack'}},
            {base_stat: 45, stat: {name: 'defense'}},
            {base_stat: 115, stat: {name: 'special-attack'}},
            {base_stat: 55, stat: {name: 'special-defense'}},
            {base_stat: 95, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/93.png'
        },
        moves: [
            {move: {name: 'shadow-ball'}},
            {move: {name: 'sludge-bomb'}},
            {move: {name: 'thunderbolt'}},
            {move: {name: 'dazzling-gleam'}}
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
    95: { // Onix
        name: 'onix',
        displayName: 'Onix',
        types: [{type: {name: 'rock'}}, {type: {name: 'ground'}}],
        stats: [
            {base_stat: 35, stat: {name: 'hp'}},
            {base_stat: 45, stat: {name: 'attack'}},
            {base_stat: 160, stat: {name: 'defense'}},
            {base_stat: 30, stat: {name: 'special-attack'}},
            {base_stat: 45, stat: {name: 'special-defense'}},
            {base_stat: 70, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/95.png'
        },
        moves: [
            {move: {name: 'rock-slide'}},
            {move: {name: 'earthquake'}},
            {move: {name: 'stone-edge'}},
            {move: {name: 'dragon-breath'}}
        ]
    },
    96: { // Drowzee
        name: 'drowzee',
        displayName: 'Drowzee',
        types: [{type: {name: 'psychic'}}],
        stats: [
            {base_stat: 60, stat: {name: 'hp'}},
            {base_stat: 48, stat: {name: 'attack'}},
            {base_stat: 45, stat: {name: 'defense'}},
            {base_stat: 43, stat: {name: 'special-attack'}},
            {base_stat: 90, stat: {name: 'special-defense'}},
            {base_stat: 42, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/96.png'
        },
        moves: [
            {move: {name: 'psychic'}},
            {move: {name: 'psyshock'}},
            {move: {name: 'shadow-ball'}},
            {move: {name: 'thunderbolt'}}
        ]
    },
    97: { // Hypno
        name: 'hypno',
        displayName: 'Hypno',
        types: [{type: {name: 'psychic'}}],
        stats: [
            {base_stat: 85, stat: {name: 'hp'}},
            {base_stat: 73, stat: {name: 'attack'}},
            {base_stat: 70, stat: {name: 'defense'}},
            {base_stat: 73, stat: {name: 'special-attack'}},
            {base_stat: 115, stat: {name: 'special-defense'}},
            {base_stat: 67, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/97.png'
        },
        moves: [
            {move: {name: 'psychic'}},
            {move: {name: 'psyshock'}},
            {move: {name: 'shadow-ball'}},
            {move: {name: 'thunderbolt'}}
        ]
    },
    98: { // Krabby
        name: 'krabby',
        displayName: 'Krabby',
        types: [{type: {name: 'water'}}],
        stats: [
            {base_stat: 30, stat: {name: 'hp'}},
            {base_stat: 105, stat: {name: 'attack'}},
            {base_stat: 90, stat: {name: 'defense'}},
            {base_stat: 25, stat: {name: 'special-attack'}},
            {base_stat: 25, stat: {name: 'special-defense'}},
            {base_stat: 50, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/98.png'
        },
        moves: [
            {move: {name: 'crabhammer'}},
            {move: {name: 'x-scissor'}},
            {move: {name: 'rock-slide'}},
            {move: {name: 'body-slam'}}
        ]
    },
    99: { // Kingler
        name: 'kingler',
        displayName: 'Kingler',
        types: [{type: {name: 'water'}}],
        stats: [
            {base_stat: 55, stat: {name: 'hp'}},
            {base_stat: 130, stat: {name: 'attack'}},
            {base_stat: 115, stat: {name: 'defense'}},
            {base_stat: 50, stat: {name: 'special-attack'}},
            {base_stat: 50, stat: {name: 'special-defense'}},
            {base_stat: 75, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/99.png'
        },
        moves: [
            {move: {name: 'crabhammer'}},
            {move: {name: 'x-scissor'}},
            {move: {name: 'rock-slide'}},
            {move: {name: 'liquidation'}}
        ]
    },
    100: { // Voltorb
        name: 'voltorb',
        displayName: 'Voltorb',
        types: [{type: {name: 'electric'}}],
        stats: [
            {base_stat: 40, stat: {name: 'hp'}},
            {base_stat: 30, stat: {name: 'attack'}},
            {base_stat: 50, stat: {name: 'defense'}},
            {base_stat: 55, stat: {name: 'special-attack'}},
            {base_stat: 55, stat: {name: 'special-defense'}},
            {base_stat: 100, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/100.png'
        },
        moves: [
            {move: {name: 'thunderbolt'}},
            {move: {name: 'thunder-wave'}},
            {move: {name: 'volt-switch'}},
            {move: {name: 'explosion'}}
        ]
    },
    101: { // Electrode
        name: 'electrode',
        displayName: 'Electrode',
        types: [{type: {name: 'electric'}}],
        stats: [
            {base_stat: 60, stat: {name: 'hp'}},
            {base_stat: 50, stat: {name: 'attack'}},
            {base_stat: 70, stat: {name: 'defense'}},
            {base_stat: 80, stat: {name: 'special-attack'}},
            {base_stat: 80, stat: {name: 'special-defense'}},
            {base_stat: 150, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/101.png'
        },
        moves: [
            {move: {name: 'thunderbolt'}},
            {move: {name: 'volt-switch'}},
            {move: {name: 'thunder-wave'}},
            {move: {name: 'explosion'}}
        ]
    },
    102: { // Exeggcute
        name: 'exeggcute',
        displayName: 'Exeggcute',
        types: [{type: {name: 'grass'}}, {type: {name: 'psychic'}}],
        stats: [
            {base_stat: 60, stat: {name: 'hp'}},
            {base_stat: 40, stat: {name: 'attack'}},
            {base_stat: 80, stat: {name: 'defense'}},
            {base_stat: 60, stat: {name: 'special-attack'}},
            {base_stat: 45, stat: {name: 'special-defense'}},
            {base_stat: 40, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/102.png'
        },
        moves: [
            {move: {name: 'psychic'}},
            {move: {name: 'solar-beam'}},
            {move: {name: 'giga-drain'}},
            {move: {name: 'sleep-powder'}}
        ]
    },
    103: { // Exeggutor
        name: 'exeggutor',
        displayName: 'Exeggutor',
        types: [{type: {name: 'grass'}}, {type: {name: 'psychic'}}],
        stats: [
            {base_stat: 95, stat: {name: 'hp'}},
            {base_stat: 95, stat: {name: 'attack'}},
            {base_stat: 85, stat: {name: 'defense'}},
            {base_stat: 125, stat: {name: 'special-attack'}},
            {base_stat: 75, stat: {name: 'special-defense'}},
            {base_stat: 55, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/103.png'
        },
        moves: [
            {move: {name: 'psychic'}},
            {move: {name: 'solar-beam'}},
            {move: {name: 'giga-drain'}},
            {move: {name: 'wood-hammer'}}
        ]
    },
    104: { // Cubone
        name: 'cubone',
        displayName: 'Cubone',
        types: [{type: {name: 'ground'}}],
        stats: [
            {base_stat: 50, stat: {name: 'hp'}},
            {base_stat: 50, stat: {name: 'attack'}},
            {base_stat: 95, stat: {name: 'defense'}},
            {base_stat: 40, stat: {name: 'special-attack'}},
            {base_stat: 50, stat: {name: 'special-defense'}},
            {base_stat: 35, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/104.png'
        },
        moves: [
            {move: {name: 'bone-club'}},
            {move: {name: 'earthquake'}},
            {move: {name: 'stone-edge'}},
            {move: {name: 'fire-punch'}}
        ]
    },
    105: { // Marowak
        name: 'marowak',
        displayName: 'Marowak',
        types: [{type: {name: 'ground'}}],
        stats: [
            {base_stat: 60, stat: {name: 'hp'}},
            {base_stat: 80, stat: {name: 'attack'}},
            {base_stat: 110, stat: {name: 'defense'}},
            {base_stat: 50, stat: {name: 'special-attack'}},
            {base_stat: 80, stat: {name: 'special-defense'}},
            {base_stat: 45, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/105.png'
        },
        moves: [
            {move: {name: 'bonemerang'}},
            {move: {name: 'earthquake'}},
            {move: {name: 'stone-edge'}},
            {move: {name: 'fire-punch'}}
        ]
    },
    106: { // Hitmonlee
        name: 'hitmonlee',
        displayName: 'Hitmonlee',
        types: [{type: {name: 'fighting'}}],
        stats: [
            {base_stat: 50, stat: {name: 'hp'}},
            {base_stat: 120, stat: {name: 'attack'}},
            {base_stat: 53, stat: {name: 'defense'}},
            {base_stat: 35, stat: {name: 'special-attack'}},
            {base_stat: 110, stat: {name: 'special-defense'}},
            {base_stat: 87, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/106.png'
        },
        moves: [
            {move: {name: 'high-jump-kick'}},
            {move: {name: 'close-combat'}},
            {move: {name: 'stone-edge'}},
            {move: {name: 'earthquake'}}
        ]
    },
    107: { // Hitmonchan
        name: 'hitmonchan',
        displayName: 'Hitmonchan',
        types: [{type: {name: 'fighting'}}],
        stats: [
            {base_stat: 50, stat: {name: 'hp'}},
            {base_stat: 105, stat: {name: 'attack'}},
            {base_stat: 79, stat: {name: 'defense'}},
            {base_stat: 35, stat: {name: 'special-attack'}},
            {base_stat: 110, stat: {name: 'special-defense'}},
            {base_stat: 76, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/107.png'
        },
        moves: [
            {move: {name: 'close-combat'}},
            {move: {name: 'mach-punch'}},
            {move: {name: 'ice-punch'}},
            {move: {name: 'thunder-punch'}}
        ]
    },
    108: { // Lickitung
        name: 'lickitung',
        displayName: 'Lickitung',
        types: [{type: {name: 'normal'}}],
        stats: [
            {base_stat: 90, stat: {name: 'hp'}},
            {base_stat: 55, stat: {name: 'attack'}},
            {base_stat: 75, stat: {name: 'defense'}},
            {base_stat: 60, stat: {name: 'special-attack'}},
            {base_stat: 75, stat: {name: 'special-defense'}},
            {base_stat: 30, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/108.png'
        },
        moves: [
            {move: {name: 'body-slam'}},
            {move: {name: 'earthquake'}},
            {move: {name: 'power-whip'}},
            {move: {name: 'ice-beam'}}
        ]
    },
    109: { // Koffing
        name: 'koffing',
        displayName: 'Koffing',
        types: [{type: {name: 'poison'}}],
        stats: [
            {base_stat: 40, stat: {name: 'hp'}},
            {base_stat: 65, stat: {name: 'attack'}},
            {base_stat: 95, stat: {name: 'defense'}},
            {base_stat: 60, stat: {name: 'special-attack'}},
            {base_stat: 45, stat: {name: 'special-defense'}},
            {base_stat: 35, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/109.png'
        },
        moves: [
            {move: {name: 'sludge-bomb'}},
            {move: {name: 'fire-blast'}},
            {move: {name: 'thunderbolt'}},
            {move: {name: 'explosion'}}
        ]
    },
    110: { // Weezing
        name: 'weezing',
        displayName: 'Weezing',
        types: [{type: {name: 'poison'}}],
        stats: [
            {base_stat: 65, stat: {name: 'hp'}},
            {base_stat: 90, stat: {name: 'attack'}},
            {base_stat: 120, stat: {name: 'defense'}},
            {base_stat: 85, stat: {name: 'special-attack'}},
            {base_stat: 70, stat: {name: 'special-defense'}},
            {base_stat: 60, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/110.png'
        },
        moves: [
            {move: {name: 'sludge-bomb'}},
            {move: {name: 'fire-blast'}},
            {move: {name: 'thunderbolt'}},
            {move: {name: 'explosion'}}
        ]
    },
    111: { // Rhyhorn
        name: 'rhyhorn',
        displayName: 'Rhyhorn',
        types: [{type: {name: 'ground'}}, {type: {name: 'rock'}}],
        stats: [
            {base_stat: 80, stat: {name: 'hp'}},
            {base_stat: 85, stat: {name: 'attack'}},
            {base_stat: 95, stat: {name: 'defense'}},
            {base_stat: 30, stat: {name: 'special-attack'}},
            {base_stat: 30, stat: {name: 'special-defense'}},
            {base_stat: 25, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/111.png'
        },
        moves: [
            {move: {name: 'earthquake'}},
            {move: {name: 'rock-slide'}},
            {move: {name: 'stone-edge'}},
            {move: {name: 'megahorn'}}
        ]
    },
    112: { // Rhydon
        name: 'rhydon',
        displayName: 'Rhydon',
        types: [{type: {name: 'ground'}}, {type: {name: 'rock'}}],
        stats: [
            {base_stat: 105, stat: {name: 'hp'}},
            {base_stat: 130, stat: {name: 'attack'}},
            {base_stat: 120, stat: {name: 'defense'}},
            {base_stat: 45, stat: {name: 'special-attack'}},
            {base_stat: 45, stat: {name: 'special-defense'}},
            {base_stat: 40, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/112.png'
        },
        moves: [
            {move: {name: 'earthquake'}},
            {move: {name: 'stone-edge'}},
            {move: {name: 'megahorn'}},
            {move: {name: 'ice-punch'}}
        ]
    },
    113: { // Chansey
        name: 'chansey',
        displayName: 'Chansey',
        types: [{type: {name: 'normal'}}],
        stats: [
            {base_stat: 250, stat: {name: 'hp'}},
            {base_stat: 5, stat: {name: 'attack'}},
            {base_stat: 5, stat: {name: 'defense'}},
            {base_stat: 35, stat: {name: 'special-attack'}},
            {base_stat: 105, stat: {name: 'special-defense'}},
            {base_stat: 50, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/113.png'
        },
        moves: [
            {move: {name: 'soft-boiled'}},
            {move: {name: 'thunderbolt'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'seismic-toss'}}
        ]
    },
    114: { // Tangela
        name: 'tangela',
        displayName: 'Tangela',
        types: [{type: {name: 'grass'}}],
        stats: [
            {base_stat: 65, stat: {name: 'hp'}},
            {base_stat: 55, stat: {name: 'attack'}},
            {base_stat: 115, stat: {name: 'defense'}},
            {base_stat: 100, stat: {name: 'special-attack'}},
            {base_stat: 40, stat: {name: 'special-defense'}},
            {base_stat: 60, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/114.png'
        },
        moves: [
            {move: {name: 'solar-beam'}},
            {move: {name: 'giga-drain'}},
            {move: {name: 'sludge-bomb'}},
            {move: {name: 'earthquake'}}
        ]
    },
    115: { // Kangaskhan
        name: 'kangaskhan',
        displayName: 'Kangaskhan',
        types: [{type: {name: 'normal'}}],
        stats: [
            {base_stat: 105, stat: {name: 'hp'}},
            {base_stat: 95, stat: {name: 'attack'}},
            {base_stat: 80, stat: {name: 'defense'}},
            {base_stat: 40, stat: {name: 'special-attack'}},
            {base_stat: 80, stat: {name: 'special-defense'}},
            {base_stat: 90, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/115.png'
        },
        moves: [
            {move: {name: 'body-slam'}},
            {move: {name: 'earthquake'}},
            {move: {name: 'crunch'}},
            {move: {name: 'sucker-punch'}}
        ]
    },
    116: { // Horsea
        name: 'horsea',
        displayName: 'Horsea',
        types: [{type: {name: 'water'}}],
        stats: [
            {base_stat: 30, stat: {name: 'hp'}},
            {base_stat: 40, stat: {name: 'attack'}},
            {base_stat: 70, stat: {name: 'defense'}},
            {base_stat: 70, stat: {name: 'special-attack'}},
            {base_stat: 25, stat: {name: 'special-defense'}},
            {base_stat: 60, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/116.png'
        },
        moves: [
            {move: {name: 'water-gun'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'dragon-pulse'}},
            {move: {name: 'hydro-pump'}}
        ]
    },
    117: { // Seadra
        name: 'seadra',
        displayName: 'Seadra',
        types: [{type: {name: 'water'}}],
        stats: [
            {base_stat: 55, stat: {name: 'hp'}},
            {base_stat: 65, stat: {name: 'attack'}},
            {base_stat: 95, stat: {name: 'defense'}},
            {base_stat: 95, stat: {name: 'special-attack'}},
            {base_stat: 45, stat: {name: 'special-defense'}},
            {base_stat: 85, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/117.png'
        },
        moves: [
            {move: {name: 'hydro-pump'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'dragon-pulse'}},
            {move: {name: 'flash-cannon'}}
        ]
    },
    118: { // Goldeen
        name: 'goldeen',
        displayName: 'Goldeen',
        types: [{type: {name: 'water'}}],
        stats: [
            {base_stat: 45, stat: {name: 'hp'}},
            {base_stat: 67, stat: {name: 'attack'}},
            {base_stat: 60, stat: {name: 'defense'}},
            {base_stat: 35, stat: {name: 'special-attack'}},
            {base_stat: 50, stat: {name: 'special-defense'}},
            {base_stat: 63, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/118.png'
        },
        moves: [
            {move: {name: 'water-gun'}},
            {move: {name: 'aqua-tail'}},
            {move: {name: 'megahorn'}},
            {move: {name: 'ice-beam'}}
        ]
    },
    119: { // Seaking
        name: 'seaking',
        displayName: 'Seaking',
        types: [{type: {name: 'water'}}],
        stats: [
            {base_stat: 80, stat: {name: 'hp'}},
            {base_stat: 92, stat: {name: 'attack'}},
            {base_stat: 65, stat: {name: 'defense'}},
            {base_stat: 65, stat: {name: 'special-attack'}},
            {base_stat: 80, stat: {name: 'special-defense'}},
            {base_stat: 68, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/119.png'
        },
        moves: [
            {move: {name: 'waterfall'}},
            {move: {name: 'megahorn'}},
            {move: {name: 'drill-run'}},
            {move: {name: 'ice-beam'}}
        ]
    },
    120: { // Staryu
        name: 'staryu',
        displayName: 'Staryu',
        types: [{type: {name: 'water'}}],
        stats: [
            {base_stat: 30, stat: {name: 'hp'}},
            {base_stat: 45, stat: {name: 'attack'}},
            {base_stat: 55, stat: {name: 'defense'}},
            {base_stat: 70, stat: {name: 'special-attack'}},
            {base_stat: 55, stat: {name: 'special-defense'}},
            {base_stat: 85, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/120.png'
        },
        moves: [
            {move: {name: 'water-gun'}},
            {move: {name: 'psychic'}},
            {move: {name: 'thunderbolt'}},
            {move: {name: 'ice-beam'}}
        ]
    },
    121: { // Starmie
        name: 'starmie',
        displayName: 'Starmie',
        types: [{type: {name: 'water'}}, {type: {name: 'psychic'}}],
        stats: [
            {base_stat: 60, stat: {name: 'hp'}},
            {base_stat: 75, stat: {name: 'attack'}},
            {base_stat: 85, stat: {name: 'defense'}},
            {base_stat: 100, stat: {name: 'special-attack'}},
            {base_stat: 85, stat: {name: 'special-defense'}},
            {base_stat: 115, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/121.png'
        },
        moves: [
            {move: {name: 'hydro-pump'}},
            {move: {name: 'psychic'}},
            {move: {name: 'thunderbolt'}},
            {move: {name: 'ice-beam'}}
        ]
    },
    122: { // Mr. Mime
        name: 'mr-mime',
        displayName: 'Mr. Mime',
        types: [{type: {name: 'psychic'}}, {type: {name: 'fairy'}}],
        stats: [
            {base_stat: 40, stat: {name: 'hp'}},
            {base_stat: 45, stat: {name: 'attack'}},
            {base_stat: 65, stat: {name: 'defense'}},
            {base_stat: 100, stat: {name: 'special-attack'}},
            {base_stat: 120, stat: {name: 'special-defense'}},
            {base_stat: 90, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/122.png'
        },
        moves: [
            {move: {name: 'psychic'}},
            {move: {name: 'dazzling-gleam'}},
            {move: {name: 'thunderbolt'}},
            {move: {name: 'focus-blast'}}
        ]
    },
    123: { // Scyther
        name: 'scyther',
        displayName: 'Scyther',
        types: [{type: {name: 'bug'}}, {type: {name: 'flying'}}],
        stats: [
            {base_stat: 70, stat: {name: 'hp'}},
            {base_stat: 110, stat: {name: 'attack'}},
            {base_stat: 80, stat: {name: 'defense'}},
            {base_stat: 55, stat: {name: 'special-attack'}},
            {base_stat: 80, stat: {name: 'special-defense'}},
            {base_stat: 105, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/123.png'
        },
        moves: [
            {move: {name: 'x-scissor'}},
            {move: {name: 'aerial-ace'}},
            {move: {name: 'u-turn'}},
            {move: {name: 'swords-dance'}}
        ]
    },
    124: { // Jynx
        name: 'jynx',
        displayName: 'Jynx',
        types: [{type: {name: 'ice'}}, {type: {name: 'psychic'}}],
        stats: [
            {base_stat: 65, stat: {name: 'hp'}},
            {base_stat: 50, stat: {name: 'attack'}},
            {base_stat: 35, stat: {name: 'defense'}},
            {base_stat: 115, stat: {name: 'special-attack'}},
            {base_stat: 95, stat: {name: 'special-defense'}},
            {base_stat: 95, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/124.png'
        },
        moves: [
            {move: {name: 'ice-beam'}},
            {move: {name: 'psychic'}},
            {move: {name: 'focus-blast'}},
            {move: {name: 'lovely-kiss'}}
        ]
    },
    125: { // Electabuzz
        name: 'electabuzz',
        displayName: 'Electabuzz',
        types: [{type: {name: 'electric'}}],
        stats: [
            {base_stat: 65, stat: {name: 'hp'}},
            {base_stat: 83, stat: {name: 'attack'}},
            {base_stat: 57, stat: {name: 'defense'}},
            {base_stat: 95, stat: {name: 'special-attack'}},
            {base_stat: 85, stat: {name: 'special-defense'}},
            {base_stat: 105, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/125.png'
        },
        moves: [
            {move: {name: 'thunderbolt'}},
            {move: {name: 'thunder-punch'}},
            {move: {name: 'ice-punch'}},
            {move: {name: 'focus-blast'}}
        ]
    },
    126: { // Magmar
        name: 'magmar',
        displayName: 'Magmar',
        types: [{type: {name: 'fire'}}],
        stats: [
            {base_stat: 65, stat: {name: 'hp'}},
            {base_stat: 95, stat: {name: 'attack'}},
            {base_stat: 57, stat: {name: 'defense'}},
            {base_stat: 100, stat: {name: 'special-attack'}},
            {base_stat: 85, stat: {name: 'special-defense'}},
            {base_stat: 93, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/126.png'
        },
        moves: [
            {move: {name: 'flamethrower'}},
            {move: {name: 'fire-punch'}},
            {move: {name: 'thunderbolt'}},
            {move: {name: 'focus-blast'}}
        ]
    },
    127: { // Pinsir
        name: 'pinsir',
        displayName: 'Pinsir',
        types: [{type: {name: 'bug'}}],
        stats: [
            {base_stat: 65, stat: {name: 'hp'}},
            {base_stat: 125, stat: {name: 'attack'}},
            {base_stat: 100, stat: {name: 'defense'}},
            {base_stat: 55, stat: {name: 'special-attack'}},
            {base_stat: 70, stat: {name: 'special-defense'}},
            {base_stat: 85, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/127.png'
        },
        moves: [
            {move: {name: 'x-scissor'}},
            {move: {name: 'close-combat'}},
            {move: {name: 'stone-edge'}},
            {move: {name: 'earthquake'}}
        ]
    },
    128: { // Tauros
        name: 'tauros',
        displayName: 'Tauros',
        types: [{type: {name: 'normal'}}],
        stats: [
            {base_stat: 75, stat: {name: 'hp'}},
            {base_stat: 100, stat: {name: 'attack'}},
            {base_stat: 95, stat: {name: 'defense'}},
            {base_stat: 40, stat: {name: 'special-attack'}},
            {base_stat: 70, stat: {name: 'special-defense'}},
            {base_stat: 110, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/128.png'
        },
        moves: [
            {move: {name: 'body-slam'}},
            {move: {name: 'earthquake'}},
            {move: {name: 'zen-headbutt'}},
            {move: {name: 'iron-head'}}
        ]
    },
    129: { // Magikarp
        name: 'magikarp',
        displayName: 'Magikarp',
        types: [{type: {name: 'water'}}],
        stats: [
            {base_stat: 20, stat: {name: 'hp'}},
            {base_stat: 10, stat: {name: 'attack'}},
            {base_stat: 55, stat: {name: 'defense'}},
            {base_stat: 15, stat: {name: 'special-attack'}},
            {base_stat: 20, stat: {name: 'special-defense'}},
            {base_stat: 80, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/129.png'
        },
        moves: [
            {move: {name: 'splash'}},
            {move: {name: 'tackle'}},
            {move: {name: 'flail'}},
            {move: {name: 'bounce'}}
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
            {move: {name: 'earthquake'}}
        ]
    },
    131: { // Lapras
        name: 'lapras',
        displayName: 'Lapras',
        types: [{type: {name: 'water'}}, {type: {name: 'ice'}}],
        stats: [
            {base_stat: 130, stat: {name: 'hp'}},
            {base_stat: 85, stat: {name: 'attack'}},
            {base_stat: 80, stat: {name: 'defense'}},
            {base_stat: 85, stat: {name: 'special-attack'}},
            {base_stat: 95, stat: {name: 'special-defense'}},
            {base_stat: 60, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/131.png'
        },
        moves: [
            {move: {name: 'hydro-pump'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'thunderbolt'}},
            {move: {name: 'psychic'}}
        ]
    },
    132: { // Ditto
        name: 'ditto',
        displayName: 'Ditto',
        types: [{type: {name: 'normal'}}],
        stats: [
            {base_stat: 48, stat: {name: 'hp'}},
            {base_stat: 48, stat: {name: 'attack'}},
            {base_stat: 48, stat: {name: 'defense'}},
            {base_stat: 48, stat: {name: 'special-attack'}},
            {base_stat: 48, stat: {name: 'special-defense'}},
            {base_stat: 48, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png'
        },
        moves: [
            {move: {name: 'transform'}},
            {move: {name: 'body-slam'}},
            {move: {name: 'shadow-ball'}},
            {move: {name: 'psychic'}}
        ]
    },
    133: { // Eevee
        name: 'eevee',
        displayName: 'Eevee',
        types: [{type: {name: 'normal'}}],
        stats: [
            {base_stat: 55, stat: {name: 'hp'}},
            {base_stat: 55, stat: {name: 'attack'}},
            {base_stat: 50, stat: {name: 'defense'}},
            {base_stat: 45, stat: {name: 'special-attack'}},
            {base_stat: 65, stat: {name: 'special-defense'}},
            {base_stat: 55, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/133.png'
        },
        moves: [
            {move: {name: 'quick-attack'}},
            {move: {name: 'bite'}},
            {move: {name: 'iron-tail'}},
            {move: {name: 'shadow-ball'}}
        ]
    },
    134: { // Vaporeon
        name: 'vaporeon',
        displayName: 'Vaporeon',
        types: [{type: {name: 'water'}}],
        stats: [
            {base_stat: 130, stat: {name: 'hp'}},
            {base_stat: 65, stat: {name: 'attack'}},
            {base_stat: 60, stat: {name: 'defense'}},
            {base_stat: 110, stat: {name: 'special-attack'}},
            {base_stat: 95, stat: {name: 'special-defense'}},
            {base_stat: 65, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/134.png'
        },
        moves: [
            {move: {name: 'hydro-pump'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'shadow-ball'}},
            {move: {name: 'scald'}}
        ]
    },
    135: { // Jolteon
        name: 'jolteon',
        displayName: 'Jolteon',
        types: [{type: {name: 'electric'}}],
        stats: [
            {base_stat: 65, stat: {name: 'hp'}},
            {base_stat: 65, stat: {name: 'attack'}},
            {base_stat: 60, stat: {name: 'defense'}},
            {base_stat: 110, stat: {name: 'special-attack'}},
            {base_stat: 95, stat: {name: 'special-defense'}},
            {base_stat: 130, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/135.png'
        },
        moves: [
            {move: {name: 'thunderbolt'}},
            {move: {name: 'thunder'}},
            {move: {name: 'shadow-ball'}},
            {move: {name: 'volt-switch'}}
        ]
    },
    136: { // Flareon
        name: 'flareon',
        displayName: 'Flareon',
        types: [{type: {name: 'fire'}}],
        stats: [
            {base_stat: 65, stat: {name: 'hp'}},
            {base_stat: 130, stat: {name: 'attack'}},
            {base_stat: 60, stat: {name: 'defense'}},
            {base_stat: 95, stat: {name: 'special-attack'}},
            {base_stat: 110, stat: {name: 'special-defense'}},
            {base_stat: 65, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/136.png'
        },
        moves: [
            {move: {name: 'flare-blitz'}},
            {move: {name: 'fire-fang'}},
            {move: {name: 'superpower'}},
            {move: {name: 'iron-tail'}}
        ]
    },
    137: { // Porygon
        name: 'porygon',
        displayName: 'Porygon',
        types: [{type: {name: 'normal'}}],
        stats: [
            {base_stat: 65, stat: {name: 'hp'}},
            {base_stat: 60, stat: {name: 'attack'}},
            {base_stat: 70, stat: {name: 'defense'}},
            {base_stat: 85, stat: {name: 'special-attack'}},
            {base_stat: 75, stat: {name: 'special-defense'}},
            {base_stat: 40, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/137.png'
        },
        moves: [
            {move: {name: 'tri-attack'}},
            {move: {name: 'thunderbolt'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'psychic'}}
        ]
    },
    138: { // Omanyte
        name: 'omanyte',
        displayName: 'Omanyte',
        types: [{type: {name: 'rock'}}, {type: {name: 'water'}}],
        stats: [
            {base_stat: 35, stat: {name: 'hp'}},
            {base_stat: 40, stat: {name: 'attack'}},
            {base_stat: 100, stat: {name: 'defense'}},
            {base_stat: 90, stat: {name: 'special-attack'}},
            {base_stat: 55, stat: {name: 'special-defense'}},
            {base_stat: 35, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/138.png'
        },
        moves: [
            {move: {name: 'water-gun'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'rock-blast'}},
            {move: {name: 'earth-power'}}
        ]
    },
    139: { // Omastar
        name: 'omastar',
        displayName: 'Omastar',
        types: [{type: {name: 'rock'}}, {type: {name: 'water'}}],
        stats: [
            {base_stat: 70, stat: {name: 'hp'}},
            {base_stat: 60, stat: {name: 'attack'}},
            {base_stat: 125, stat: {name: 'defense'}},
            {base_stat: 115, stat: {name: 'special-attack'}},
            {base_stat: 70, stat: {name: 'special-defense'}},
            {base_stat: 55, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/139.png'
        },
        moves: [
            {move: {name: 'hydro-pump'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'rock-blast'}},
            {move: {name: 'earth-power'}}
        ]
    },
    140: { // Kabuto
        name: 'kabuto',
        displayName: 'Kabuto',
        types: [{type: {name: 'rock'}}, {type: {name: 'water'}}],
        stats: [
            {base_stat: 30, stat: {name: 'hp'}},
            {base_stat: 80, stat: {name: 'attack'}},
            {base_stat: 90, stat: {name: 'defense'}},
            {base_stat: 55, stat: {name: 'special-attack'}},
            {base_stat: 45, stat: {name: 'special-defense'}},
            {base_stat: 55, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/140.png'
        },
        moves: [
            {move: {name: 'aqua-jet'}},
            {move: {name: 'rock-slide'}},
            {move: {name: 'waterfall'}},
            {move: {name: 'x-scissor'}}
        ]
    },
    141: { // Kabutops
        name: 'kabutops',
        displayName: 'Kabutops',
        types: [{type: {name: 'rock'}}, {type: {name: 'water'}}],
        stats: [
            {base_stat: 60, stat: {name: 'hp'}},
            {base_stat: 115, stat: {name: 'attack'}},
            {base_stat: 105, stat: {name: 'defense'}},
            {base_stat: 65, stat: {name: 'special-attack'}},
            {base_stat: 70, stat: {name: 'special-defense'}},
            {base_stat: 80, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/141.png'
        },
        moves: [
            {move: {name: 'waterfall'}},
            {move: {name: 'stone-edge'}},
            {move: {name: 'aqua-jet'}},
            {move: {name: 'x-scissor'}}
        ]
    },
    142: { // Aerodactyl
        name: 'aerodactyl',
        displayName: 'Aerodactyl',
        types: [{type: {name: 'rock'}}, {type: {name: 'flying'}}],
        stats: [
            {base_stat: 80, stat: {name: 'hp'}},
            {base_stat: 105, stat: {name: 'attack'}},
            {base_stat: 65, stat: {name: 'defense'}},
            {base_stat: 60, stat: {name: 'special-attack'}},
            {base_stat: 75, stat: {name: 'special-defense'}},
            {base_stat: 130, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/142.png'
        },
        moves: [
            {move: {name: 'stone-edge'}},
            {move: {name: 'aerial-ace'}},
            {move: {name: 'earthquake'}},
            {move: {name: 'crunch'}}
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
    144: { // Articuno
        name: 'articuno',
        displayName: 'Articuno',
        types: [{type: {name: 'ice'}}, {type: {name: 'flying'}}],
        stats: [
            {base_stat: 90, stat: {name: 'hp'}},
            {base_stat: 85, stat: {name: 'attack'}},
            {base_stat: 100, stat: {name: 'defense'}},
            {base_stat: 95, stat: {name: 'special-attack'}},
            {base_stat: 125, stat: {name: 'special-defense'}},
            {base_stat: 85, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/144.png'
        },
        moves: [
            {move: {name: 'ice-beam'}},
            {move: {name: 'hurricane'}},
            {move: {name: 'freeze-dry'}},
            {move: {name: 'u-turn'}}
        ]
    },
    145: { // Zapdos
        name: 'zapdos',
        displayName: 'Zapdos',
        types: [{type: {name: 'electric'}}, {type: {name: 'flying'}}],
        stats: [
            {base_stat: 90, stat: {name: 'hp'}},
            {base_stat: 90, stat: {name: 'attack'}},
            {base_stat: 85, stat: {name: 'defense'}},
            {base_stat: 125, stat: {name: 'special-attack'}},
            {base_stat: 90, stat: {name: 'special-defense'}},
            {base_stat: 100, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/145.png'
        },
        moves: [
            {move: {name: 'thunderbolt'}},
            {move: {name: 'hurricane'}},
            {move: {name: 'heat-wave'}},
            {move: {name: 'volt-switch'}}
        ]
    },
    146: { // Moltres
        name: 'moltres',
        displayName: 'Moltres',
        types: [{type: {name: 'fire'}}, {type: {name: 'flying'}}],
        stats: [
            {base_stat: 90, stat: {name: 'hp'}},
            {base_stat: 100, stat: {name: 'attack'}},
            {base_stat: 90, stat: {name: 'defense'}},
            {base_stat: 125, stat: {name: 'special-attack'}},
            {base_stat: 85, stat: {name: 'special-defense'}},
            {base_stat: 90, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/146.png'
        },
        moves: [
            {move: {name: 'fire-blast'}},
            {move: {name: 'hurricane'}},
            {move: {name: 'solar-beam'}},
            {move: {name: 'u-turn'}}
        ]
    },
    147: { // Dratini
        name: 'dratini',
        displayName: 'Dratini',
        types: [{type: {name: 'dragon'}}],
        stats: [
            {base_stat: 41, stat: {name: 'hp'}},
            {base_stat: 64, stat: {name: 'attack'}},
            {base_stat: 45, stat: {name: 'defense'}},
            {base_stat: 50, stat: {name: 'special-attack'}},
            {base_stat: 50, stat: {name: 'special-defense'}},
            {base_stat: 50, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/147.png'
        },
        moves: [
            {move: {name: 'dragon-breath'}},
            {move: {name: 'aqua-tail'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'thunderbolt'}}
        ]
    },
    148: { // Dragonair
        name: 'dragonair',
        displayName: 'Dragonair',
        types: [{type: {name: 'dragon'}}],
        stats: [
            {base_stat: 61, stat: {name: 'hp'}},
            {base_stat: 84, stat: {name: 'attack'}},
            {base_stat: 65, stat: {name: 'defense'}},
            {base_stat: 70, stat: {name: 'special-attack'}},
            {base_stat: 70, stat: {name: 'special-defense'}},
            {base_stat: 70, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/148.png'
        },
        moves: [
            {move: {name: 'dragon-pulse'}},
            {move: {name: 'aqua-tail'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'thunderbolt'}}
        ]
    },
    149: { // Dragonite
        name: 'dragonite',
        displayName: 'Dragonite',
        types: [{type: {name: 'dragon'}}, {type: {name: 'flying'}}],
        stats: [
            {base_stat: 91, stat: {name: 'hp'}},
            {base_stat: 134, stat: {name: 'attack'}},
            {base_stat: 95, stat: {name: 'defense'}},
            {base_stat: 100, stat: {name: 'special-attack'}},
            {base_stat: 100, stat: {name: 'special-defense'}},
            {base_stat: 80, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/149.png'
        },
        moves: [
            {move: {name: 'outrage'}},
            {move: {name: 'earthquake'}},
            {move: {name: 'fire-punch'}},
            {move: {name: 'extreme-speed'}}
        ]
    },
    150: { // Mewtwo
        name: 'mewtwo',
        displayName: 'Mewtwo',
        types: [{type: {name: 'psychic'}}],
        stats: [
            {base_stat: 106, stat: {name: 'hp'}},
            {base_stat: 110, stat: {name: 'attack'}},
            {base_stat: 90, stat: {name: 'defense'}},
            {base_stat: 154, stat: {name: 'special-attack'}},
            {base_stat: 90, stat: {name: 'special-defense'}},
            {base_stat: 130, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/150.png'
        },
        moves: [
            {move: {name: 'psychic'}},
            {move: {name: 'psystrike'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'aura-sphere'}}
        ]
    },
    151: { // Mew
        name: 'mew',
        displayName: 'Mew',
        types: [{type: {name: 'psychic'}}],
        stats: [
            {base_stat: 100, stat: {name: 'hp'}},
            {base_stat: 100, stat: {name: 'attack'}},
            {base_stat: 100, stat: {name: 'defense'}},
            {base_stat: 100, stat: {name: 'special-attack'}},
            {base_stat: 100, stat: {name: 'special-defense'}},
            {base_stat: 100, stat: {name: 'speed'}}
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/151.png'
        },
        moves: [
            {move: {name: 'psychic'}},
            {move: {name: 'aura-sphere'}},
            {move: {name: 'ice-beam'}},
            {move: {name: 'thunderbolt'}}
        ]
    }
};

const MOVE_DATA = {
    'struggle': {name: 'Struggle', power: 50, type: {name: 'normal'}, damage_class: {name: 'physical'}, pp: 1},
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
    'aura-sphere': {name: 'Aura Sphere', power: 80, type: {name: 'fighting'}, damage_class: {name: 'special'}, pp: 20},
    'tackle': {name: 'Tackle', power: 40, type: {name: 'normal'}, damage_class: {name: 'physical'}, pp: 35},
    'string-shot': {name: 'String Shot', power: 0, type: {name: 'bug'}, damage_class: {name: 'status'}, pp: 40},
    'bug-bite': {name: 'Bug Bite', power: 60, type: {name: 'bug'}, damage_class: {name: 'physical'}, pp: 20},
    'harden': {name: 'Harden', power: 0, type: {name: 'normal'}, damage_class: {name: 'status'}, pp: 30},
    'iron-defense': {name: 'Iron Defense', power: 0, type: {name: 'steel'}, damage_class: {name: 'status'}, pp: 15},
    'bug-buzz': {name: 'Bug Buzz', power: 90, type: {name: 'bug'}, damage_class: {name: 'special'}, pp: 10},
    'sleep-powder': {name: 'Sleep Powder', power: 0, type: {name: 'grass'}, damage_class: {name: 'status'}, pp: 15},
    'x-scissor': {name: 'X-Scissor', power: 80, type: {name: 'bug'}, damage_class: {name: 'physical'}, pp: 15},
    'poison-jab': {name: 'Poison Jab', power: 80, type: {name: 'poison'}, damage_class: {name: 'physical'}, pp: 20},
    'drill-run': {name: 'Drill Run', power: 80, type: {name: 'ground'}, damage_class: {name: 'physical'}, pp: 10},
    'wing-attack': {name: 'Wing Attack', power: 60, type: {name: 'flying'}, damage_class: {name: 'physical'}, pp: 35},
    'hurricane': {name: 'Hurricane', power: 110, type: {name: 'flying'}, damage_class: {name: 'special'}, pp: 10},
    'u-turn': {name: 'U-turn', power: 70, type: {name: 'bug'}, damage_class: {name: 'physical'}, pp: 20},
    'hyper-fang': {name: 'Hyper Fang', power: 80, type: {name: 'normal'}, damage_class: {name: 'physical'}, pp: 15},
    'super-fang': {name: 'Super Fang', power: 1, type: {name: 'normal'}, damage_class: {name: 'physical'}, pp: 10},
    'peck': {name: 'Peck', power: 35, type: {name: 'flying'}, damage_class: {name: 'physical'}, pp: 35},
    'drill-peck': {name: 'Drill Peck', power: 80, type: {name: 'flying'}, damage_class: {name: 'physical'}, pp: 20},
    'aerial-ace': {name: 'Aerial Ace', power: 60, type: {name: 'flying'}, damage_class: {name: 'physical'}, pp: 20},
    'poison-sting': {name: 'Poison Sting', power: 15, type: {name: 'poison'}, damage_class: {name: 'physical'}, pp: 35},
    'acid': {name: 'Acid', power: 40, type: {name: 'poison'}, damage_class: {name: 'special'}, pp: 30},
    'wrap': {name: 'Wrap', power: 15, type: {name: 'normal'}, damage_class: {name: 'physical'}, pp: 20},
    'gunk-shot': {name: 'Gunk Shot', power: 120, type: {name: 'poison'}, damage_class: {name: 'physical'}, pp: 5},
    'thunder': {name: 'Thunder', power: 110, type: {name: 'electric'}, damage_class: {name: 'special'}, pp: 10},
    'rock-slide': {name: 'Rock Slide', power: 75, type: {name: 'rock'}, damage_class: {name: 'physical'}, pp: 10},
    'dig': {name: 'Dig', power: 80, type: {name: 'ground'}, damage_class: {name: 'physical'}, pp: 10},
    'horn-attack': {name: 'Horn Attack', power: 65, type: {name: 'normal'}, damage_class: {name: 'physical'}, pp: 25},
    'earth-power': {name: 'Earth Power', power: 90, type: {name: 'ground'}, damage_class: {name: 'special'}, pp: 10},
    'megahorn': {name: 'Megahorn', power: 120, type: {name: 'bug'}, damage_class: {name: 'physical'}, pp: 10},
    'cosmic-power': {name: 'Cosmic Power', power: 0, type: {name: 'psychic'}, damage_class: {name: 'status'}, pp: 20},
    'fire-blast': {name: 'Fire Blast', power: 110, type: {name: 'fire'}, damage_class: {name: 'special'}, pp: 5},
    'extrasensory': {name: 'Extrasensory', power: 80, type: {name: 'psychic'}, damage_class: {name: 'special'}, pp: 20},
    'dazzling-gleam': {name: 'Dazzling Gleam', power: 80, type: {name: 'fairy'}, damage_class: {name: 'special'}, pp: 10},
    'giga-drain': {name: 'Giga Drain', power: 75, type: {name: 'grass'}, damage_class: {name: 'special'}, pp: 10},
    'seed-bomb': {name: 'Seed Bomb', power: 80, type: {name: 'grass'}, damage_class: {name: 'physical'}, pp: 15},
    'spore': {name: 'Spore', power: 0, type: {name: 'grass'}, damage_class: {name: 'status'}, pp: 15},
    'sucker-punch': {name: 'Sucker Punch', power: 70, type: {name: 'dark'}, damage_class: {name: 'physical'}, pp: 5},
    'play-rough': {name: 'Play Rough', power: 90, type: {name: 'fairy'}, damage_class: {name: 'physical'}, pp: 10},
    'confusion': {name: 'Confusion', power: 50, type: {name: 'psychic'}, damage_class: {name: 'special'}, pp: 25},
    'karate-chop': {name: 'Karate Chop', power: 50, type: {name: 'fighting'}, damage_class: {name: 'physical'}, pp: 25},
    'cross-chop': {name: 'Cross Chop', power: 100, type: {name: 'fighting'}, damage_class: {name: 'physical'}, pp: 5},
    'wild-charge': {name: 'Wild Charge', power: 90, type: {name: 'electric'}, damage_class: {name: 'physical'}, pp: 15},
    'extreme-speed': {name: 'Extreme Speed', power: 80, type: {name: 'normal'}, damage_class: {name: 'physical'}, pp: 5},
    'bubble-beam': {name: 'Bubble Beam', power: 65, type: {name: 'water'}, damage_class: {name: 'special'}, pp: 20},
    'ice-punch': {name: 'Ice Punch', power: 75, type: {name: 'ice'}, damage_class: {name: 'physical'}, pp: 15},
    'psyshock': {name: 'Psyshock', power: 80, type: {name: 'psychic'}, damage_class: {name: 'special'}, pp: 10},
    'scald': {name: 'Scald', power: 80, type: {name: 'water'}, damage_class: {name: 'special'}, pp: 15},
    'slack-off': {name: 'Slack Off', power: 0, type: {name: 'normal'}, damage_class: {name: 'status'}, pp: 10},
    'thunder-wave': {name: 'Thunder Wave', power: 0, type: {name: 'electric'}, damage_class: {name: 'status'}, pp: 20},
    'volt-switch': {name: 'Volt Switch', power: 70, type: {name: 'electric'}, damage_class: {name: 'special'}, pp: 20},
    'leaf-blade': {name: 'Leaf Blade', power: 90, type: {name: 'grass'}, damage_class: {name: 'physical'}, pp: 15},
    'brave-bird': {name: 'Brave Bird', power: 120, type: {name: 'flying'}, damage_class: {name: 'physical'}, pp: 15},
    'aurora-beam': {name: 'Aurora Beam', power: 65, type: {name: 'ice'}, damage_class: {name: 'special'}, pp: 20},
    'ice-shard': {name: 'Ice Shard', power: 40, type: {name: 'ice'}, damage_class: {name: 'physical'}, pp: 30},
    'shadow-sneak': {name: 'Shadow Sneak', power: 40, type: {name: 'ghost'}, damage_class: {name: 'physical'}, pp: 30},
    'icicle-spear': {name: 'Icicle Spear', power: 25, type: {name: 'ice'}, damage_class: {name: 'physical'}, pp: 30},
    'razor-shell': {name: 'Razor Shell', power: 75, type: {name: 'water'}, damage_class: {name: 'physical'}, pp: 10},
    'rock-blast': {name: 'Rock Blast', power: 25, type: {name: 'rock'}, damage_class: {name: 'physical'}, pp: 10},
    'dragon-breath': {name: 'Dragon Breath', power: 60, type: {name: 'dragon'}, damage_class: {name: 'special'}, pp: 20},
    'crabhammer': {name: 'Crabhammer', power: 100, type: {name: 'water'}, damage_class: {name: 'physical'}, pp: 10},
    'liquidation': {name: 'Liquidation', power: 85, type: {name: 'water'}, damage_class: {name: 'physical'}, pp: 10},
    'explosion': {name: 'Explosion', power: 250, type: {name: 'normal'}, damage_class: {name: 'physical'}, pp: 5},
    'wood-hammer': {name: 'Wood Hammer', power: 120, type: {name: 'grass'}, damage_class: {name: 'physical'}, pp: 15},
    'bone-club': {name: 'Bone Club', power: 65, type: {name: 'ground'}, damage_class: {name: 'physical'}, pp: 20},
    'bonemerang': {name: 'Bonemerang', power: 50, type: {name: 'ground'}, damage_class: {name: 'physical'}, pp: 10},
    'mach-punch': {name: 'Mach Punch', power: 40, type: {name: 'fighting'}, damage_class: {name: 'physical'}, pp: 30},
    'thunder-punch': {name: 'Thunder Punch', power: 75, type: {name: 'electric'}, damage_class: {name: 'physical'}, pp: 15},
    'power-whip': {name: 'Power Whip', power: 120, type: {name: 'grass'}, damage_class: {name: 'physical'}, pp: 10},
    'soft-boiled': {name: 'Soft-Boiled', power: 0, type: {name: 'normal'}, damage_class: {name: 'status'}, pp: 10},
    'seismic-toss': {name: 'Seismic Toss', power: 1, type: {name: 'fighting'}, damage_class: {name: 'physical'}, pp: 20},
    'dragon-pulse': {name: 'Dragon Pulse', power: 85, type: {name: 'dragon'}, damage_class: {name: 'special'}, pp: 10},
    'iron-head': {name: 'Iron Head', power: 80, type: {name: 'steel'}, damage_class: {name: 'physical'}, pp: 15},
    'splash': {name: 'Splash', power: 0, type: {name: 'normal'}, damage_class: {name: 'status'}, pp: 40},
    'flail': {name: 'Flail', power: 1, type: {name: 'normal'}, damage_class: {name: 'physical'}, pp: 15},
    'bounce': {name: 'Bounce', power: 85, type: {name: 'flying'}, damage_class: {name: 'physical'}, pp: 5},
    'freeze-dry': {name: 'Freeze-Dry', power: 70, type: {name: 'ice'}, damage_class: {name: 'special'}, pp: 20},
    'heat-wave': {name: 'Heat Wave', power: 95, type: {name: 'fire'}, damage_class: {name: 'special'}, pp: 10},
    'psystrike': {name: 'Psystrike', power: 100, type: {name: 'psychic'}, damage_class: {name: 'special'}, pp: 10},
    'transform': {name: 'Transform', power: 0, type: {name: 'normal'}, damage_class: {name: 'status'}, pp: 10},
    'superpower': {name: 'Superpower', power: 120, type: {name: 'fighting'}, damage_class: {name: 'physical'}, pp: 5},
    'tri-attack': {name: 'Tri Attack', power: 80, type: {name: 'normal'}, damage_class: {name: 'special'}, pp: 10},
    'aqua-jet': {name: 'Aqua Jet', power: 40, type: {name: 'water'}, damage_class: {name: 'physical'}, pp: 20},
    'lovely-kiss': {name: 'Lovely Kiss', power: 0, type: {name: 'psychic'}, damage_class: {name: 'status'}, pp: 10}
};

const POKEMON_LIST = [
    {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'},
    {name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/'},
    {name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/'},
    {name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/'},
    {name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/'},
    {name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/'},
    {name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/'},
    {name: 'wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/'},
    {name: 'blastoise', url: 'https://pokeapi.co/api/v2/pokemon/9/'},
    {name: 'caterpie', url: 'https://pokeapi.co/api/v2/pokemon/10/'},
    {name: 'metapod', url: 'https://pokeapi.co/api/v2/pokemon/11/'},
    {name: 'butterfree', url: 'https://pokeapi.co/api/v2/pokemon/12/'},
    {name: 'weedle', url: 'https://pokeapi.co/api/v2/pokemon/13/'},
    {name: 'kakuna', url: 'https://pokeapi.co/api/v2/pokemon/14/'},
    {name: 'beedrill', url: 'https://pokeapi.co/api/v2/pokemon/15/'},
    {name: 'pidgey', url: 'https://pokeapi.co/api/v2/pokemon/16/'},
    {name: 'pidgeotto', url: 'https://pokeapi.co/api/v2/pokemon/17/'},
    {name: 'pidgeot', url: 'https://pokeapi.co/api/v2/pokemon/18/'},
    {name: 'rattata', url: 'https://pokeapi.co/api/v2/pokemon/19/'},
    {name: 'raticate', url: 'https://pokeapi.co/api/v2/pokemon/20/'},
    {name: 'spearow', url: 'https://pokeapi.co/api/v2/pokemon/21/'},
    {name: 'fearow', url: 'https://pokeapi.co/api/v2/pokemon/22/'},
    {name: 'ekans', url: 'https://pokeapi.co/api/v2/pokemon/23/'},
    {name: 'arbok', url: 'https://pokeapi.co/api/v2/pokemon/24/'},
    {name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/'},
    {name: 'raichu', url: 'https://pokeapi.co/api/v2/pokemon/26/'},
    {name: 'sandshrew', url: 'https://pokeapi.co/api/v2/pokemon/27/'},
    {name: 'sandslash', url: 'https://pokeapi.co/api/v2/pokemon/28/'},
    {name: 'nidoran-f', url: 'https://pokeapi.co/api/v2/pokemon/29/'},
    {name: 'nidorina', url: 'https://pokeapi.co/api/v2/pokemon/30/'},
    {name: 'nidoqueen', url: 'https://pokeapi.co/api/v2/pokemon/31/'},
    {name: 'nidoran-m', url: 'https://pokeapi.co/api/v2/pokemon/32/'},
    {name: 'nidorino', url: 'https://pokeapi.co/api/v2/pokemon/33/'},
    {name: 'nidoking', url: 'https://pokeapi.co/api/v2/pokemon/34/'},
    {name: 'clefairy', url: 'https://pokeapi.co/api/v2/pokemon/35/'},
    {name: 'clefable', url: 'https://pokeapi.co/api/v2/pokemon/36/'},
    {name: 'vulpix', url: 'https://pokeapi.co/api/v2/pokemon/37/'},
    {name: 'ninetales', url: 'https://pokeapi.co/api/v2/pokemon/38/'},
    {name: 'jigglypuff', url: 'https://pokeapi.co/api/v2/pokemon/39/'},
    {name: 'wigglytuff', url: 'https://pokeapi.co/api/v2/pokemon/40/'},
    {name: 'zubat', url: 'https://pokeapi.co/api/v2/pokemon/41/'},
    {name: 'golbat', url: 'https://pokeapi.co/api/v2/pokemon/42/'},
    {name: 'oddish', url: 'https://pokeapi.co/api/v2/pokemon/43/'},
    {name: 'gloom', url: 'https://pokeapi.co/api/v2/pokemon/44/'},
    {name: 'vileplume', url: 'https://pokeapi.co/api/v2/pokemon/45/'},
    {name: 'paras', url: 'https://pokeapi.co/api/v2/pokemon/46/'},
    {name: 'parasect', url: 'https://pokeapi.co/api/v2/pokemon/47/'},
    {name: 'venonat', url: 'https://pokeapi.co/api/v2/pokemon/48/'},
    {name: 'venomoth', url: 'https://pokeapi.co/api/v2/pokemon/49/'},
    {name: 'diglett', url: 'https://pokeapi.co/api/v2/pokemon/50/'},
    {name: 'dugtrio', url: 'https://pokeapi.co/api/v2/pokemon/51/'},
    {name: 'meowth', url: 'https://pokeapi.co/api/v2/pokemon/52/'},
    {name: 'persian', url: 'https://pokeapi.co/api/v2/pokemon/53/'},
    {name: 'psyduck', url: 'https://pokeapi.co/api/v2/pokemon/54/'},
    {name: 'golduck', url: 'https://pokeapi.co/api/v2/pokemon/55/'},
    {name: 'mankey', url: 'https://pokeapi.co/api/v2/pokemon/56/'},
    {name: 'primeape', url: 'https://pokeapi.co/api/v2/pokemon/57/'},
    {name: 'growlithe', url: 'https://pokeapi.co/api/v2/pokemon/58/'},
    {name: 'arcanine', url: 'https://pokeapi.co/api/v2/pokemon/59/'},
    {name: 'poliwag', url: 'https://pokeapi.co/api/v2/pokemon/60/'},
    {name: 'poliwhirl', url: 'https://pokeapi.co/api/v2/pokemon/61/'},
    {name: 'poliwrath', url: 'https://pokeapi.co/api/v2/pokemon/62/'},
    {name: 'abra', url: 'https://pokeapi.co/api/v2/pokemon/63/'},
    {name: 'kadabra', url: 'https://pokeapi.co/api/v2/pokemon/64/'},
    {name: 'alakazam', url: 'https://pokeapi.co/api/v2/pokemon/65/'},
    {name: 'machop', url: 'https://pokeapi.co/api/v2/pokemon/66/'},
    {name: 'machoke', url: 'https://pokeapi.co/api/v2/pokemon/67/'},
    {name: 'machamp', url: 'https://pokeapi.co/api/v2/pokemon/68/'},
    {name: 'bellsprout', url: 'https://pokeapi.co/api/v2/pokemon/69/'},
    {name: 'weepinbell', url: 'https://pokeapi.co/api/v2/pokemon/70/'},
    {name: 'victreebel', url: 'https://pokeapi.co/api/v2/pokemon/71/'},
    {name: 'tentacool', url: 'https://pokeapi.co/api/v2/pokemon/72/'},
    {name: 'tentacruel', url: 'https://pokeapi.co/api/v2/pokemon/73/'},
    {name: 'geodude', url: 'https://pokeapi.co/api/v2/pokemon/74/'},
    {name: 'graveler', url: 'https://pokeapi.co/api/v2/pokemon/75/'},
    {name: 'golem', url: 'https://pokeapi.co/api/v2/pokemon/76/'},
    {name: 'ponyta', url: 'https://pokeapi.co/api/v2/pokemon/77/'},
    {name: 'rapidash', url: 'https://pokeapi.co/api/v2/pokemon/78/'},
    {name: 'slowpoke', url: 'https://pokeapi.co/api/v2/pokemon/79/'},
    {name: 'slowbro', url: 'https://pokeapi.co/api/v2/pokemon/80/'},
    {name: 'magnemite', url: 'https://pokeapi.co/api/v2/pokemon/81/'},
    {name: 'magneton', url: 'https://pokeapi.co/api/v2/pokemon/82/'},
    {name: 'farfetchd', url: 'https://pokeapi.co/api/v2/pokemon/83/'},
    {name: 'doduo', url: 'https://pokeapi.co/api/v2/pokemon/84/'},
    {name: 'dodrio', url: 'https://pokeapi.co/api/v2/pokemon/85/'},
    {name: 'seel', url: 'https://pokeapi.co/api/v2/pokemon/86/'},
    {name: 'dewgong', url: 'https://pokeapi.co/api/v2/pokemon/87/'},
    {name: 'grimer', url: 'https://pokeapi.co/api/v2/pokemon/88/'},
    {name: 'muk', url: 'https://pokeapi.co/api/v2/pokemon/89/'},
    {name: 'shellder', url: 'https://pokeapi.co/api/v2/pokemon/90/'},
    {name: 'cloyster', url: 'https://pokeapi.co/api/v2/pokemon/91/'},
    {name: 'gastly', url: 'https://pokeapi.co/api/v2/pokemon/92/'},
    {name: 'haunter', url: 'https://pokeapi.co/api/v2/pokemon/93/'},
    {name: 'gengar', url: 'https://pokeapi.co/api/v2/pokemon/94/'},
    {name: 'onix', url: 'https://pokeapi.co/api/v2/pokemon/95/'},
    {name: 'drowzee', url: 'https://pokeapi.co/api/v2/pokemon/96/'},
    {name: 'hypno', url: 'https://pokeapi.co/api/v2/pokemon/97/'},
    {name: 'krabby', url: 'https://pokeapi.co/api/v2/pokemon/98/'},
    {name: 'kingler', url: 'https://pokeapi.co/api/v2/pokemon/99/'},
    {name: 'voltorb', url: 'https://pokeapi.co/api/v2/pokemon/100/'},
    {name: 'electrode', url: 'https://pokeapi.co/api/v2/pokemon/101/'},
    {name: 'exeggcute', url: 'https://pokeapi.co/api/v2/pokemon/102/'},
    {name: 'exeggutor', url: 'https://pokeapi.co/api/v2/pokemon/103/'},
    {name: 'cubone', url: 'https://pokeapi.co/api/v2/pokemon/104/'},
    {name: 'marowak', url: 'https://pokeapi.co/api/v2/pokemon/105/'},
    {name: 'hitmonlee', url: 'https://pokeapi.co/api/v2/pokemon/106/'},
    {name: 'hitmonchan', url: 'https://pokeapi.co/api/v2/pokemon/107/'},
    {name: 'lickitung', url: 'https://pokeapi.co/api/v2/pokemon/108/'},
    {name: 'koffing', url: 'https://pokeapi.co/api/v2/pokemon/109/'},
    {name: 'weezing', url: 'https://pokeapi.co/api/v2/pokemon/110/'},
    {name: 'rhyhorn', url: 'https://pokeapi.co/api/v2/pokemon/111/'},
    {name: 'rhydon', url: 'https://pokeapi.co/api/v2/pokemon/112/'},
    {name: 'chansey', url: 'https://pokeapi.co/api/v2/pokemon/113/'},
    {name: 'tangela', url: 'https://pokeapi.co/api/v2/pokemon/114/'},
    {name: 'kangaskhan', url: 'https://pokeapi.co/api/v2/pokemon/115/'},
    {name: 'horsea', url: 'https://pokeapi.co/api/v2/pokemon/116/'},
    {name: 'seadra', url: 'https://pokeapi.co/api/v2/pokemon/117/'},
    {name: 'goldeen', url: 'https://pokeapi.co/api/v2/pokemon/118/'},
    {name: 'seaking', url: 'https://pokeapi.co/api/v2/pokemon/119/'},
    {name: 'staryu', url: 'https://pokeapi.co/api/v2/pokemon/120/'},
    {name: 'starmie', url: 'https://pokeapi.co/api/v2/pokemon/121/'},
    {name: 'mr-mime', url: 'https://pokeapi.co/api/v2/pokemon/122/'},
    {name: 'scyther', url: 'https://pokeapi.co/api/v2/pokemon/123/'},
    {name: 'jynx', url: 'https://pokeapi.co/api/v2/pokemon/124/'},
    {name: 'electabuzz', url: 'https://pokeapi.co/api/v2/pokemon/125/'},
    {name: 'magmar', url: 'https://pokeapi.co/api/v2/pokemon/126/'},
    {name: 'pinsir', url: 'https://pokeapi.co/api/v2/pokemon/127/'},
    {name: 'tauros', url: 'https://pokeapi.co/api/v2/pokemon/128/'},
    {name: 'magikarp', url: 'https://pokeapi.co/api/v2/pokemon/129/'},
    {name: 'gyarados', url: 'https://pokeapi.co/api/v2/pokemon/130/'},
    {name: 'lapras', url: 'https://pokeapi.co/api/v2/pokemon/131/'},
    {name: 'ditto', url: 'https://pokeapi.co/api/v2/pokemon/132/'},
    {name: 'eevee', url: 'https://pokeapi.co/api/v2/pokemon/133/'},
    {name: 'vaporeon', url: 'https://pokeapi.co/api/v2/pokemon/134/'},
    {name: 'jolteon', url: 'https://pokeapi.co/api/v2/pokemon/135/'},
    {name: 'flareon', url: 'https://pokeapi.co/api/v2/pokemon/136/'},
    {name: 'porygon', url: 'https://pokeapi.co/api/v2/pokemon/137/'},
    {name: 'omanyte', url: 'https://pokeapi.co/api/v2/pokemon/138/'},
    {name: 'omastar', url: 'https://pokeapi.co/api/v2/pokemon/139/'},
    {name: 'kabuto', url: 'https://pokeapi.co/api/v2/pokemon/140/'},
    {name: 'kabutops', url: 'https://pokeapi.co/api/v2/pokemon/141/'},
    {name: 'aerodactyl', url: 'https://pokeapi.co/api/v2/pokemon/142/'},
    {name: 'snorlax', url: 'https://pokeapi.co/api/v2/pokemon/143/'},
    {name: 'articuno', url: 'https://pokeapi.co/api/v2/pokemon/144/'},
    {name: 'zapdos', url: 'https://pokeapi.co/api/v2/pokemon/145/'},
    {name: 'moltres', url: 'https://pokeapi.co/api/v2/pokemon/146/'},
    {name: 'dratini', url: 'https://pokeapi.co/api/v2/pokemon/147/'},
    {name: 'dragonair', url: 'https://pokeapi.co/api/v2/pokemon/148/'},
    {name: 'dragonite', url: 'https://pokeapi.co/api/v2/pokemon/149/'},
    {name: 'mewtwo', url: 'https://pokeapi.co/api/v2/pokemon/150/'},
    {name: 'mew', url: 'https://pokeapi.co/api/v2/pokemon/151/'}
];
