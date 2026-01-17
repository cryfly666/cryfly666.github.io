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
    },
        152: { // Chikorita
       name: 'chikorita',
       displayName: 'Chikorita',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 49, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 49, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/152.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    153: { // Bayleef
       name: 'bayleef',
       displayName: 'Bayleef',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 62, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 63, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/153.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    154: { // Meganium
       name: 'meganium',
       displayName: 'Meganium',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 82, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 83, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/154.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    155: { // Cyndaquil
       name: 'cyndaquil',
       displayName: 'Cyndaquil',
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
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/155.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    156: { // Quilava
       name: 'quilava',
       displayName: 'Quilava',
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
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/156.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    157: { // Typhlosion
       name: 'typhlosion',
       displayName: 'Typhlosion',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 78, stat: {name: 'hp'}},
        {base_stat: 84, stat: {name: 'attack'}},
        {base_stat: 78, stat: {name: 'defense'}},
        {base_stat: 109, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/157.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    158: { // Totodile
       name: 'totodile',
       displayName: 'Totodile',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 64, stat: {name: 'defense'}},
        {base_stat: 44, stat: {name: 'special-attack'}},
        {base_stat: 48, stat: {name: 'special-defense'}},
        {base_stat: 43, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/158.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    159: { // Croconaw
       name: 'croconaw',
       displayName: 'Croconaw',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 59, stat: {name: 'special-attack'}},
        {base_stat: 63, stat: {name: 'special-defense'}},
        {base_stat: 58, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/159.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    160: { // Feraligatr
       name: 'feraligatr',
       displayName: 'Feraligatr',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 105, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 79, stat: {name: 'special-attack'}},
        {base_stat: 83, stat: {name: 'special-defense'}},
        {base_stat: 78, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/160.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    161: { // Sentret
       name: 'sentret',
       displayName: 'Sentret',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 35, stat: {name: 'hp'}},
        {base_stat: 46, stat: {name: 'attack'}},
        {base_stat: 34, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 20, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/161.png'
       },
       moves: [
       {move: {name: 'body-slam'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}},
        {move: {name: 'scratch'}}
       ]
   },
    162: { // Furret
       name: 'furret',
       displayName: 'Furret',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 76, stat: {name: 'attack'}},
        {base_stat: 64, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/162.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'swift'}}
       ]
   },
    163: { // Hoothoot
       name: 'hoothoot',
       displayName: 'Hoothoot',
       types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 30, stat: {name: 'defense'}},
        {base_stat: 36, stat: {name: 'special-attack'}},
        {base_stat: 56, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/163.png'
       },
       moves: [
       {move: {name: 'swift'}},
        {move: {name: 'take-down'}},
        {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}}
       ]
   },
    164: { // Noctowl
       name: 'noctowl',
       displayName: 'Noctowl',
       types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 86, stat: {name: 'special-attack'}},
        {base_stat: 96, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/164.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'swift'}}
       ]
   },
    165: { // Ledyba
       name: 'ledyba',
       displayName: 'Ledyba',
       types: [{type: {name: 'bug'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 20, stat: {name: 'attack'}},
        {base_stat: 30, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/165.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}}
       ]
   },
    166: { // Ledian
       name: 'ledian',
       displayName: 'Ledian',
       types: [{type: {name: 'bug'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 35, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 110, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/166.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}}
       ]
   },
    167: { // Spinarak
       name: 'spinarak',
       displayName: 'Spinarak',
       types: [{type: {name: 'bug'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/167.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'leech-life'}}
       ]
   },
    168: { // Ariados
       name: 'ariados',
       displayName: 'Ariados',
       types: [{type: {name: 'bug'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/168.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'leech-life'}}
       ]
   },
    169: { // Crobat
       name: 'crobat',
       displayName: 'Crobat',
       types: [{type: {name: 'poison'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 130, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/169.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'toxic'}},
        {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}}
       ]
   },
    170: { // Chinchou
       name: 'chinchou',
       displayName: 'Chinchou',
       types: [{type: {name: 'water'}}, {type: {name: 'electric'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 38, stat: {name: 'attack'}},
        {base_stat: 38, stat: {name: 'defense'}},
        {base_stat: 56, stat: {name: 'special-attack'}},
        {base_stat: 56, stat: {name: 'special-defense'}},
        {base_stat: 67, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/170.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    171: { // Lanturn
       name: 'lanturn',
       displayName: 'Lanturn',
       types: [{type: {name: 'water'}}, {type: {name: 'electric'}}],
       stats: [
       {base_stat: 125, stat: {name: 'hp'}},
        {base_stat: 58, stat: {name: 'attack'}},
        {base_stat: 58, stat: {name: 'defense'}},
        {base_stat: 76, stat: {name: 'special-attack'}},
        {base_stat: 76, stat: {name: 'special-defense'}},
        {base_stat: 67, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/171.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    172: { // Pichu
       name: 'pichu',
       displayName: 'Pichu',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 20, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 15, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/172.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'thunder-punch'}},
        {move: {name: 'spark'}}
       ]
   },
    173: { // Cleffa
       name: 'cleffa',
       displayName: 'Cleffa',
       types: [{type: {name: 'fairy'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 25, stat: {name: 'attack'}},
        {base_stat: 28, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 15, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/173.png'
       },
       moves: [
       {move: {name: 'moonblast'}},
        {move: {name: 'dazzling-gleam'}},
        {move: {name: 'play-rough'}},
        {move: {name: 'draining-kiss'}}
       ]
   },
    174: { // Igglybuff
       name: 'igglybuff',
       displayName: 'Igglybuff',
       types: [{type: {name: 'normal'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 15, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 20, stat: {name: 'special-defense'}},
        {base_stat: 15, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/174.png'
       },
       moves: [
       {move: {name: 'body-slam'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}},
        {move: {name: 'dazzling-gleam'}}
       ]
   },
    175: { // Togepi
       name: 'togepi',
       displayName: 'Togepi',
       types: [{type: {name: 'fairy'}}],
       stats: [
       {base_stat: 35, stat: {name: 'hp'}},
        {base_stat: 20, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 20, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/175.png'
       },
       moves: [
       {move: {name: 'moonblast'}},
        {move: {name: 'dazzling-gleam'}},
        {move: {name: 'play-rough'}},
        {move: {name: 'draining-kiss'}}
       ]
   },
    176: { // Togetic
       name: 'togetic',
       displayName: 'Togetic',
       types: [{type: {name: 'fairy'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 105, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/176.png'
       },
       moves: [
       {move: {name: 'moonblast'}},
        {move: {name: 'dazzling-gleam'}},
        {move: {name: 'play-rough'}},
        {move: {name: 'draining-kiss'}}
       ]
   },
    177: { // Natu
       name: 'natu',
       displayName: 'Natu',
       types: [{type: {name: 'psychic'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/177.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}},
        {move: {name: 'aerial-ace'}}
       ]
   },
    178: { // Xatu
       name: 'xatu',
       displayName: 'Xatu',
       types: [{type: {name: 'psychic'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/178.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}},
        {move: {name: 'aerial-ace'}}
       ]
   },
    179: { // Mareep
       name: 'mareep',
       displayName: 'Mareep',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/179.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'tackle'}}
       ]
   },
    180: { // Flaaffy
       name: 'flaaffy',
       displayName: 'Flaaffy',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/180.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'thunder-punch'}}
       ]
   },
    181: { // Ampharos
       name: 'ampharos',
       displayName: 'Ampharos',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 115, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/181.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'thunder-punch'}}
       ]
   },
    182: { // Bellossom
       name: 'bellossom',
       displayName: 'Bellossom',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/182.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    183: { // Marill
       name: 'marill',
       displayName: 'Marill',
       types: [{type: {name: 'water'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 20, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 20, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/183.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    184: { // Azumarill
       name: 'azumarill',
       displayName: 'Azumarill',
       types: [{type: {name: 'water'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/184.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    185: { // Sudowoodo
       name: 'sudowoodo',
       displayName: 'Sudowoodo',
       types: [{type: {name: 'rock'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 115, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/185.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'rock-throw'}}
       ]
   },
    186: { // Politoed
       name: 'politoed',
       displayName: 'Politoed',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/186.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    187: { // Hoppip
       name: 'hoppip',
       displayName: 'Hoppip',
       types: [{type: {name: 'grass'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 35, stat: {name: 'hp'}},
        {base_stat: 35, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/187.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    188: { // Skiploom
       name: 'skiploom',
       displayName: 'Skiploom',
       types: [{type: {name: 'grass'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/188.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    189: { // Jumpluff
       name: 'jumpluff',
       displayName: 'Jumpluff',
       types: [{type: {name: 'grass'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 110, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/189.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    190: { // Aipom
       name: 'aipom',
       displayName: 'Aipom',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/190.png'
       },
       moves: [
       {move: {name: 'body-slam'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}},
        {move: {name: 'scratch'}}
       ]
   },
    191: { // Sunkern
       name: 'sunkern',
       displayName: 'Sunkern',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 30, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 30, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/191.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    192: { // Sunflora
       name: 'sunflora',
       displayName: 'Sunflora',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 105, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/192.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    193: { // Yanma
       name: 'yanma',
       displayName: 'Yanma',
       types: [{type: {name: 'bug'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/193.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    194: { // Wooper
       name: 'wooper',
       displayName: 'Wooper',
       types: [{type: {name: 'water'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 25, stat: {name: 'special-attack'}},
        {base_stat: 25, stat: {name: 'special-defense'}},
        {base_stat: 15, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/194.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    195: { // Quagsire
       name: 'quagsire',
       displayName: 'Quagsire',
       types: [{type: {name: 'water'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/195.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    196: { // Espeon
       name: 'espeon',
       displayName: 'Espeon',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 130, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 110, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/196.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    197: { // Umbreon
       name: 'umbreon',
       displayName: 'Umbreon',
       types: [{type: {name: 'dark'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 110, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 130, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/197.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'bite'}}
       ]
   },
    198: { // Murkrow
       name: 'murkrow',
       displayName: 'Murkrow',
       types: [{type: {name: 'dark'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 42, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 42, stat: {name: 'special-defense'}},
        {base_stat: 91, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/198.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'night-slash'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'aerial-ace'}}
       ]
   },
    199: { // Slowking
       name: 'slowking',
       displayName: 'Slowking',
       types: [{type: {name: 'water'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 110, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/199.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    200: { // Misdreavus
       name: 'misdreavus',
       displayName: 'Misdreavus',
       types: [{type: {name: 'ghost'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/200.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    201: { // Unown
       name: 'unown',
       displayName: 'Unown',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 48, stat: {name: 'hp'}},
        {base_stat: 72, stat: {name: 'attack'}},
        {base_stat: 48, stat: {name: 'defense'}},
        {base_stat: 72, stat: {name: 'special-attack'}},
        {base_stat: 48, stat: {name: 'special-defense'}},
        {base_stat: 48, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/201.png'
       },
       moves: [
       {move: {name: 'hidden-power'}}
       ]
   },
    202: { // Wobbuffet
       name: 'wobbuffet',
       displayName: 'Wobbuffet',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 190, stat: {name: 'hp'}},
        {base_stat: 33, stat: {name: 'attack'}},
        {base_stat: 58, stat: {name: 'defense'}},
        {base_stat: 33, stat: {name: 'special-attack'}},
        {base_stat: 58, stat: {name: 'special-defense'}},
        {base_stat: 33, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/202.png'
       },
       moves: [
       {move: {name: 'counter'}},
        {move: {name: 'amnesia'}},
        {move: {name: 'splash'}},
        {move: {name: 'destiny-bond'}}
       ]
   },
    203: { // Girafarig
       name: 'girafarig',
       displayName: 'Girafarig',
       types: [{type: {name: 'normal'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/203.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'swift'}}
       ]
   },
    204: { // Pineco
       name: 'pineco',
       displayName: 'Pineco',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 15, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/204.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'tackle'}},
        {move: {name: 'take-down'}}
       ]
   },
    205: { // Forretress
       name: 'forretress',
       displayName: 'Forretress',
       types: [{type: {name: 'bug'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 140, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/205.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'flash-cannon'}}
       ]
   },
    206: { // Dunsparce
       name: 'dunsparce',
       displayName: 'Dunsparce',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/206.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}}
       ]
   },
    207: { // Gligar
       name: 'gligar',
       displayName: 'Gligar',
       types: [{type: {name: 'ground'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 105, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/207.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    208: { // Steelix
       name: 'steelix',
       displayName: 'Steelix',
       types: [{type: {name: 'steel'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 200, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/208.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'iron-tail'}}
       ]
   },
    209: { // Snubbull
       name: 'snubbull',
       displayName: 'Snubbull',
       types: [{type: {name: 'fairy'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/209.png'
       },
       moves: [
       {move: {name: 'dazzling-gleam'}},
        {move: {name: 'play-rough'}},
        {move: {name: 'tackle'}},
        {move: {name: 'take-down'}}
       ]
   },
    210: { // Granbull
       name: 'granbull',
       displayName: 'Granbull',
       types: [{type: {name: 'fairy'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/210.png'
       },
       moves: [
       {move: {name: 'dazzling-gleam'}},
        {move: {name: 'play-rough'}},
        {move: {name: 'tackle'}},
        {move: {name: 'take-down'}}
       ]
   },
    211: { // Qwilfish
       name: 'qwilfish',
       displayName: 'Qwilfish',
       types: [{type: {name: 'water'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/211.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    212: { // Scizor
       name: 'scizor',
       displayName: 'Scizor',
       types: [{type: {name: 'bug'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 130, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/212.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'flash-cannon'}}
       ]
   },
    213: { // Shuckle
       name: 'shuckle',
       displayName: 'Shuckle',
       types: [{type: {name: 'bug'}}, {type: {name: 'rock'}}],
       stats: [
       {base_stat: 20, stat: {name: 'hp'}},
        {base_stat: 10, stat: {name: 'attack'}},
        {base_stat: 230, stat: {name: 'defense'}},
        {base_stat: 10, stat: {name: 'special-attack'}},
        {base_stat: 230, stat: {name: 'special-defense'}},
        {base_stat: 5, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/213.png'
       },
       moves: [
       {move: {name: 'bug-bite'}},
        {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'rock-throw'}}
       ]
   },
    214: { // Heracross
       name: 'heracross',
       displayName: 'Heracross',
       types: [{type: {name: 'bug'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 125, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/214.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}}
       ]
   },
    215: { // Sneasel
       name: 'sneasel',
       displayName: 'Sneasel',
       types: [{type: {name: 'dark'}}, {type: {name: 'ice'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 115, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/215.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'bite'}},
        {move: {name: 'ice-beam'}}
       ]
   },
    216: { // Teddiursa
       name: 'teddiursa',
       displayName: 'Teddiursa',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/216.png'
       },
       moves: [
       {move: {name: 'body-slam'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}},
        {move: {name: 'scratch'}}
       ]
   },
    217: { // Ursaring
       name: 'ursaring',
       displayName: 'Ursaring',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 130, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/217.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'swift'}}
       ]
   },
    218: { // Slugma
       name: 'slugma',
       displayName: 'Slugma',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 20, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/218.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    219: { // Magcargo
       name: 'magcargo',
       displayName: 'Magcargo',
       types: [{type: {name: 'fire'}}, {type: {name: 'rock'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 120, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/219.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    220: { // Swinub
       name: 'swinub',
       displayName: 'Swinub',
       types: [{type: {name: 'ice'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/220.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-shard'}},
        {move: {name: 'icy-wind'}}
       ]
   },
    221: { // Piloswine
       name: 'piloswine',
       displayName: 'Piloswine',
       types: [{type: {name: 'ice'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/221.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-shard'}},
        {move: {name: 'icy-wind'}}
       ]
   },
    222: { // Corsola
       name: 'corsola',
       displayName: 'Corsola',
       types: [{type: {name: 'water'}}, {type: {name: 'rock'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/222.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    223: { // Remoraid
       name: 'remoraid',
       displayName: 'Remoraid',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 35, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/223.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    224: { // Octillery
       name: 'octillery',
       displayName: 'Octillery',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 105, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 105, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/224.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    225: { // Delibird
       name: 'delibird',
       displayName: 'Delibird',
       types: [{type: {name: 'ice'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/225.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-punch'}},
        {move: {name: 'ice-shard'}}
       ]
   },
    226: { // Mantine
       name: 'mantine',
       displayName: 'Mantine',
       types: [{type: {name: 'water'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 140, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/226.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    227: { // Skarmory
       name: 'skarmory',
       displayName: 'Skarmory',
       types: [{type: {name: 'steel'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 140, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/227.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'metal-claw'}}
       ]
   },
    228: { // Houndour
       name: 'houndour',
       displayName: 'Houndour',
       types: [{type: {name: 'dark'}}, {type: {name: 'fire'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 30, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/228.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'bite'}}
       ]
   },
    229: { // Houndoom
       name: 'houndoom',
       displayName: 'Houndoom',
       types: [{type: {name: 'dark'}}, {type: {name: 'fire'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 110, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/229.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'bite'}}
       ]
   },
    230: { // Kingdra
       name: 'kingdra',
       displayName: 'Kingdra',
       types: [{type: {name: 'water'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/230.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    231: { // Phanpy
       name: 'phanpy',
       displayName: 'Phanpy',
       types: [{type: {name: 'ground'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/231.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    232: { // Donphan
       name: 'donphan',
       displayName: 'Donphan',
       types: [{type: {name: 'ground'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 120, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/232.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    233: { // Porygon2
       name: 'porygon2',
       displayName: 'Porygon2',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 105, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/233.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}}
       ]
   },
    234: { // Stantler
       name: 'stantler',
       displayName: 'Stantler',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 73, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 62, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/234.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'swift'}}
       ]
   },
    235: { // Smeargle
       name: 'smeargle',
       displayName: 'Smeargle',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 20, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 20, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/235.png'
       },
       moves: [
       {move: {name: 'sketch'}}
       ]
   },
    236: { // Tyrogue
       name: 'tyrogue',
       displayName: 'Tyrogue',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 35, stat: {name: 'hp'}},
        {base_stat: 35, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/236.png'
       },
       moves: [
       {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}},
        {move: {name: 'tackle'}},
        {move: {name: 'focus-energy'}}
       ]
   },
    237: { // Hitmontop
       name: 'hitmontop',
       displayName: 'Hitmontop',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 110, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/237.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}},
        {move: {name: 'focus-blast'}}
       ]
   },
    238: { // Smoochum
       name: 'smoochum',
       displayName: 'Smoochum',
       types: [{type: {name: 'ice'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 15, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/238.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-punch'}},
        {move: {name: 'icy-wind'}}
       ]
   },
    239: { // Elekid
       name: 'elekid',
       displayName: 'Elekid',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 63, stat: {name: 'attack'}},
        {base_stat: 37, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/239.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'thunder-punch'}}
       ]
   },
    240: { // Magby
       name: 'magby',
       displayName: 'Magby',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 37, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 83, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/240.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    241: { // Miltank
       name: 'miltank',
       displayName: 'Miltank',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 105, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/241.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'stomp'}}
       ]
   },
    242: { // Blissey
       name: 'blissey',
       displayName: 'Blissey',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 255, stat: {name: 'hp'}},
        {base_stat: 10, stat: {name: 'attack'}},
        {base_stat: 10, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 135, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/242.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'swift'}}
       ]
   },
    243: { // Raikou
       name: 'raikou',
       displayName: 'Raikou',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 115, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 115, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/243.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    244: { // Entei
       name: 'entei',
       displayName: 'Entei',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 115, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/244.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    245: { // Suicune
       name: 'suicune',
       displayName: 'Suicune',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 115, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 115, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/245.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    246: { // Larvitar
       name: 'larvitar',
       displayName: 'Larvitar',
       types: [{type: {name: 'rock'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 64, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 41, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/246.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'rock-throw'}},
        {move: {name: 'ancient-power'}}
       ]
   },
    247: { // Pupitar
       name: 'pupitar',
       displayName: 'Pupitar',
       types: [{type: {name: 'rock'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 84, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 51, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/247.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'rock-throw'}},
        {move: {name: 'ancient-power'}}
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
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'rock-throw'}}
       ]
   },
    249: { // Lugia
       name: 'lugia',
       displayName: 'Lugia',
       types: [{type: {name: 'psychic'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 106, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 130, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 154, stat: {name: 'special-defense'}},
        {base_stat: 110, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/249.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}},
        {move: {name: 'aerial-ace'}}
       ]
   },
    250: { // Ho Oh
       name: 'ho-oh',
       displayName: 'Ho Oh',
       types: [{type: {name: 'fire'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 106, stat: {name: 'hp'}},
        {base_stat: 130, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 110, stat: {name: 'special-attack'}},
        {base_stat: 154, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/250.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'aerial-ace'}}
       ]
   },
    251: { // Celebi
       name: 'celebi',
       displayName: 'Celebi',
       types: [{type: {name: 'psychic'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/251.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}},
        {move: {name: 'confusion'}}
       ]
   },
    252: { // Treecko
       name: 'treecko',
       displayName: 'Treecko',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/252.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    253: { // Grovyle
       name: 'grovyle',
       displayName: 'Grovyle',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/253.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    254: { // Sceptile
       name: 'sceptile',
       displayName: 'Sceptile',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 105, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 120, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/254.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    255: { // Torchic
       name: 'torchic',
       displayName: 'Torchic',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/255.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    256: { // Combusken
       name: 'combusken',
       displayName: 'Combusken',
       types: [{type: {name: 'fire'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/256.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
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
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    258: { // Mudkip
       name: 'mudkip',
       displayName: 'Mudkip',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/258.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    259: { // Marshtomp
       name: 'marshtomp',
       displayName: 'Marshtomp',
       types: [{type: {name: 'water'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/259.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    260: { // Swampert
       name: 'swampert',
       displayName: 'Swampert',
       types: [{type: {name: 'water'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 110, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/260.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    261: { // Poochyena
       name: 'poochyena',
       displayName: 'Poochyena',
       types: [{type: {name: 'dark'}}],
       stats: [
       {base_stat: 35, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/261.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'bite'}}
       ]
   },
    262: { // Mightyena
       name: 'mightyena',
       displayName: 'Mightyena',
       types: [{type: {name: 'dark'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/262.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'bite'}}
       ]
   },
    263: { // Zigzagoon
       name: 'zigzagoon',
       displayName: 'Zigzagoon',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 38, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 41, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 41, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/263.png'
       },
       moves: [
       {move: {name: 'body-slam'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}},
        {move: {name: 'sand-attack'}}
       ]
   },
    264: { // Linoone
       name: 'linoone',
       displayName: 'Linoone',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 78, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 61, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 61, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/264.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'swift'}}
       ]
   },
    265: { // Wurmple
       name: 'wurmple',
       displayName: 'Wurmple',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 20, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 20, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/265.png'
       },
       moves: [
       {move: {name: 'bug-bite'}},
        {move: {name: 'tackle'}},
        {move: {name: 'poison-sting'}},
        {move: {name: 'string-shot'}}
       ]
   },
    266: { // Silcoon
       name: 'silcoon',
       displayName: 'Silcoon',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 35, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 25, stat: {name: 'special-attack'}},
        {base_stat: 25, stat: {name: 'special-defense'}},
        {base_stat: 15, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/266.png'
       },
       moves: [
       {move: {name: 'bug-bite'}},
        {move: {name: 'tackle'}},
        {move: {name: 'poison-sting'}},
        {move: {name: 'harden'}}
       ]
   },
    267: { // Beautifly
       name: 'beautifly',
       displayName: 'Beautifly',
       types: [{type: {name: 'bug'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/267.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    268: { // Cascoon
       name: 'cascoon',
       displayName: 'Cascoon',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 35, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 25, stat: {name: 'special-attack'}},
        {base_stat: 25, stat: {name: 'special-defense'}},
        {base_stat: 15, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/268.png'
       },
       moves: [
       {move: {name: 'bug-bite'}},
        {move: {name: 'tackle'}},
        {move: {name: 'poison-sting'}},
        {move: {name: 'harden'}}
       ]
   },
    269: { // Dustox
       name: 'dustox',
       displayName: 'Dustox',
       types: [{type: {name: 'bug'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/269.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    270: { // Lotad
       name: 'lotad',
       displayName: 'Lotad',
       types: [{type: {name: 'water'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 30, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/270.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}},
        {move: {name: 'solar-beam'}}
       ]
   },
    271: { // Lombre
       name: 'lombre',
       displayName: 'Lombre',
       types: [{type: {name: 'water'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/271.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    272: { // Ludicolo
       name: 'ludicolo',
       displayName: 'Ludicolo',
       types: [{type: {name: 'water'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/272.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    273: { // Seedot
       name: 'seedot',
       displayName: 'Seedot',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/273.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    274: { // Nuzleaf
       name: 'nuzleaf',
       displayName: 'Nuzleaf',
       types: [{type: {name: 'grass'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/274.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    275: { // Shiftry
       name: 'shiftry',
       displayName: 'Shiftry',
       types: [{type: {name: 'grass'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/275.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    276: { // Taillow
       name: 'taillow',
       displayName: 'Taillow',
       types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 30, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/276.png'
       },
       moves: [
       {move: {name: 'swift'}},
        {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}},
        {move: {name: 'fly'}}
       ]
   },
    277: { // Swellow
       name: 'swellow',
       displayName: 'Swellow',
       types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 125, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/277.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'swift'}},
        {move: {name: 'aerial-ace'}}
       ]
   },
    278: { // Wingull
       name: 'wingull',
       displayName: 'Wingull',
       types: [{type: {name: 'water'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 30, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/278.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    279: { // Pelipper
       name: 'pelipper',
       displayName: 'Pelipper',
       types: [{type: {name: 'water'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/279.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    280: { // Ralts
       name: 'ralts',
       displayName: 'Ralts',
       types: [{type: {name: 'psychic'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 28, stat: {name: 'hp'}},
        {base_stat: 25, stat: {name: 'attack'}},
        {base_stat: 25, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/280.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    281: { // Kirlia
       name: 'kirlia',
       displayName: 'Kirlia',
       types: [{type: {name: 'psychic'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 38, stat: {name: 'hp'}},
        {base_stat: 35, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/281.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
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
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    283: { // Surskit
       name: 'surskit',
       displayName: 'Surskit',
       types: [{type: {name: 'bug'}}, {type: {name: 'water'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 32, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 52, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/283.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    284: { // Masquerain
       name: 'masquerain',
       displayName: 'Masquerain',
       types: [{type: {name: 'bug'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 62, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 82, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/284.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    285: { // Shroomish
       name: 'shroomish',
       displayName: 'Shroomish',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/285.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'magical-leaf'}},
        {move: {name: 'headbutt'}}
       ]
   },
    286: { // Breloom
       name: 'breloom',
       displayName: 'Breloom',
       types: [{type: {name: 'grass'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 130, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/286.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    287: { // Slakoth
       name: 'slakoth',
       displayName: 'Slakoth',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/287.png'
       },
       moves: [
       {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}},
        {move: {name: 'scratch'}},
        {move: {name: 'counter'}}
       ]
   },
    288: { // Vigoroth
       name: 'vigoroth',
       displayName: 'Vigoroth',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/288.png'
       },
       moves: [
       {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}},
        {move: {name: 'scratch'}},
        {move: {name: 'counter'}}
       ]
   },
    289: { // Slaking
       name: 'slaking',
       displayName: 'Slaking',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 150, stat: {name: 'hp'}},
        {base_stat: 160, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/289.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}}
       ]
   },
    290: { // Nincada
       name: 'nincada',
       displayName: 'Nincada',
       types: [{type: {name: 'bug'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 31, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/290.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    291: { // Ninjask
       name: 'ninjask',
       displayName: 'Ninjask',
       types: [{type: {name: 'bug'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 61, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 160, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/291.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    292: { // Shedinja
       name: 'shedinja',
       displayName: 'Shedinja',
       types: [{type: {name: 'bug'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 1, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/292.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    293: { // Whismur
       name: 'whismur',
       displayName: 'Whismur',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 64, stat: {name: 'hp'}},
        {base_stat: 51, stat: {name: 'attack'}},
        {base_stat: 23, stat: {name: 'defense'}},
        {base_stat: 51, stat: {name: 'special-attack'}},
        {base_stat: 23, stat: {name: 'special-defense'}},
        {base_stat: 28, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/293.png'
       },
       moves: [
       {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}},
        {move: {name: 'pound'}},
        {move: {name: 'stomp'}}
       ]
   },
    294: { // Loudred
       name: 'loudred',
       displayName: 'Loudred',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 84, stat: {name: 'hp'}},
        {base_stat: 71, stat: {name: 'attack'}},
        {base_stat: 43, stat: {name: 'defense'}},
        {base_stat: 71, stat: {name: 'special-attack'}},
        {base_stat: 43, stat: {name: 'special-defense'}},
        {base_stat: 48, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/294.png'
       },
       moves: [
       {move: {name: 'body-slam'}},
        {move: {name: 'pound'}},
        {move: {name: 'stomp'}},
        {move: {name: 'bite'}}
       ]
   },
    295: { // Exploud
       name: 'exploud',
       displayName: 'Exploud',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 104, stat: {name: 'hp'}},
        {base_stat: 91, stat: {name: 'attack'}},
        {base_stat: 63, stat: {name: 'defense'}},
        {base_stat: 91, stat: {name: 'special-attack'}},
        {base_stat: 73, stat: {name: 'special-defense'}},
        {base_stat: 68, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/295.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'pound'}}
       ]
   },
    296: { // Makuhita
       name: 'makuhita',
       displayName: 'Makuhita',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 72, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 30, stat: {name: 'defense'}},
        {base_stat: 20, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 25, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/296.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}},
        {move: {name: 'focus-blast'}}
       ]
   },
    297: { // Hariyama
       name: 'hariyama',
       displayName: 'Hariyama',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 144, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/297.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}},
        {move: {name: 'focus-blast'}}
       ]
   },
    298: { // Azurill
       name: 'azurill',
       displayName: 'Azurill',
       types: [{type: {name: 'normal'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 20, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 20, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 20, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/298.png'
       },
       moves: [
       {move: {name: 'body-slam'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}},
        {move: {name: 'draining-kiss'}}
       ]
   },
    299: { // Nosepass
       name: 'nosepass',
       displayName: 'Nosepass',
       types: [{type: {name: 'rock'}}],
       stats: [
       {base_stat: 30, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 135, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/299.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'rock-throw'}}
       ]
   },
    300: { // Skitty
       name: 'skitty',
       displayName: 'Skitty',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/300.png'
       },
       moves: [
       {move: {name: 'body-slam'}},
        {move: {name: 'swift'}},
        {move: {name: 'double-slap'}},
        {move: {name: 'tackle'}}
       ]
   },
    301: { // Delcatty
       name: 'delcatty',
       displayName: 'Delcatty',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/301.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'swift'}}
       ]
   },
    302: { // Sableye
       name: 'sableye',
       displayName: 'Sableye',
       types: [{type: {name: 'dark'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/302.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'shadow-ball'}},
        {move: {name: 'shadow-claw'}}
       ]
   },
    303: { // Mawile
       name: 'mawile',
       displayName: 'Mawile',
       types: [{type: {name: 'steel'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/303.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'play-rough'}}
       ]
   },
    304: { // Aron
       name: 'aron',
       displayName: 'Aron',
       types: [{type: {name: 'steel'}}, {type: {name: 'rock'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/304.png'
       },
       moves: [
       {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'metal-claw'}},
        {move: {name: 'iron-tail'}}
       ]
   },
    305: { // Lairon
       name: 'lairon',
       displayName: 'Lairon',
       types: [{type: {name: 'steel'}}, {type: {name: 'rock'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 140, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/305.png'
       },
       moves: [
       {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'metal-claw'}},
        {move: {name: 'iron-tail'}}
       ]
   },
    306: { // Aggron
       name: 'aggron',
       displayName: 'Aggron',
       types: [{type: {name: 'steel'}}, {type: {name: 'rock'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 110, stat: {name: 'attack'}},
        {base_stat: 180, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/306.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'metal-claw'}}
       ]
   },
    307: { // Meditite
       name: 'meditite',
       displayName: 'Meditite',
       types: [{type: {name: 'fighting'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 30, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/307.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}},
        {move: {name: 'focus-blast'}}
       ]
   },
    308: { // Medicham
       name: 'medicham',
       displayName: 'Medicham',
       types: [{type: {name: 'fighting'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/308.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'aura-sphere'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}}
       ]
   },
    309: { // Electrike
       name: 'electrike',
       displayName: 'Electrike',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/309.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    310: { // Manectric
       name: 'manectric',
       displayName: 'Manectric',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 105, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 105, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/310.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    311: { // Plusle
       name: 'plusle',
       displayName: 'Plusle',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/311.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'thunder-punch'}}
       ]
   },
    312: { // Minun
       name: 'minun',
       displayName: 'Minun',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/312.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'thunder-punch'}}
       ]
   },
    313: { // Volbeat
       name: 'volbeat',
       displayName: 'Volbeat',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 73, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 47, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/313.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'tackle'}}
       ]
   },
    314: { // Illumise
       name: 'illumise',
       displayName: 'Illumise',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 47, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 73, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/314.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'tackle'}},
        {move: {name: 'quick-attack'}}
       ]
   },
    315: { // Roselia
       name: 'roselia',
       displayName: 'Roselia',
       types: [{type: {name: 'grass'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/315.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    316: { // Gulpin
       name: 'gulpin',
       displayName: 'Gulpin',
       types: [{type: {name: 'poison'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 43, stat: {name: 'attack'}},
        {base_stat: 53, stat: {name: 'defense'}},
        {base_stat: 43, stat: {name: 'special-attack'}},
        {base_stat: 53, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/316.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}}
       ]
   },
    317: { // Swalot
       name: 'swalot',
       displayName: 'Swalot',
       types: [{type: {name: 'poison'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 73, stat: {name: 'attack'}},
        {base_stat: 83, stat: {name: 'defense'}},
        {base_stat: 73, stat: {name: 'special-attack'}},
        {base_stat: 83, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/317.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}}
       ]
   },
    318: { // Carvanha
       name: 'carvanha',
       displayName: 'Carvanha',
       types: [{type: {name: 'water'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 20, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 20, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/318.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'scald'}},
        {move: {name: 'dark-pulse'}}
       ]
   },
    319: { // Sharpedo
       name: 'sharpedo',
       displayName: 'Sharpedo',
       types: [{type: {name: 'water'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/319.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'scald'}},
        {move: {name: 'dark-pulse'}}
       ]
   },
    320: { // Wailmer
       name: 'wailmer',
       displayName: 'Wailmer',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 130, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/320.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    321: { // Wailord
       name: 'wailord',
       displayName: 'Wailord',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 170, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/321.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    322: { // Numel
       name: 'numel',
       displayName: 'Numel',
       types: [{type: {name: 'fire'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/322.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    323: { // Camerupt
       name: 'camerupt',
       displayName: 'Camerupt',
       types: [{type: {name: 'fire'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 105, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/323.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    324: { // Torkoal
       name: 'torkoal',
       displayName: 'Torkoal',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 140, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 20, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/324.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    325: { // Spoink
       name: 'spoink',
       displayName: 'Spoink',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 25, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/325.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    326: { // Grumpig
       name: 'grumpig',
       displayName: 'Grumpig',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 110, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/326.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    327: { // Spinda
       name: 'spinda',
       displayName: 'Spinda',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/327.png'
       },
       moves: [
       {move: {name: 'body-slam'}},
        {move: {name: 'swift'}},
        {move: {name: 'tackle'}},
        {move: {name: 'thrash'}}
       ]
   },
    328: { // Trapinch
       name: 'trapinch',
       displayName: 'Trapinch',
       types: [{type: {name: 'ground'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 10, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/328.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    329: { // Vibrava
       name: 'vibrava',
       displayName: 'Vibrava',
       types: [{type: {name: 'ground'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/329.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    330: { // Flygon
       name: 'flygon',
       displayName: 'Flygon',
       types: [{type: {name: 'ground'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/330.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    331: { // Cacnea
       name: 'cacnea',
       displayName: 'Cacnea',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/331.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    332: { // Cacturne
       name: 'cacturne',
       displayName: 'Cacturne',
       types: [{type: {name: 'grass'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 115, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/332.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    333: { // Swablu
       name: 'swablu',
       displayName: 'Swablu',
       types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/333.png'
       },
       moves: [
       {move: {name: 'body-slam'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}},
        {move: {name: 'aerial-ace'}}
       ]
   },
    334: { // Altaria
       name: 'altaria',
       displayName: 'Altaria',
       types: [{type: {name: 'dragon'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 105, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/334.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    335: { // Zangoose
       name: 'zangoose',
       displayName: 'Zangoose',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 73, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/335.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'swift'}}
       ]
   },
    336: { // Seviper
       name: 'seviper',
       displayName: 'Seviper',
       types: [{type: {name: 'poison'}}],
       stats: [
       {base_stat: 73, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/336.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}}
       ]
   },
    337: { // Lunatone
       name: 'lunatone',
       displayName: 'Lunatone',
       types: [{type: {name: 'rock'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/337.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'rock-throw'}}
       ]
   },
    338: { // Solrock
       name: 'solrock',
       displayName: 'Solrock',
       types: [{type: {name: 'rock'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/338.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'rock-throw'}},
        {move: {name: 'ancient-power'}}
       ]
   },
    339: { // Barboach
       name: 'barboach',
       displayName: 'Barboach',
       types: [{type: {name: 'water'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 48, stat: {name: 'attack'}},
        {base_stat: 43, stat: {name: 'defense'}},
        {base_stat: 46, stat: {name: 'special-attack'}},
        {base_stat: 41, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/339.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    340: { // Whiscash
       name: 'whiscash',
       displayName: 'Whiscash',
       types: [{type: {name: 'water'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 110, stat: {name: 'hp'}},
        {base_stat: 78, stat: {name: 'attack'}},
        {base_stat: 73, stat: {name: 'defense'}},
        {base_stat: 76, stat: {name: 'special-attack'}},
        {base_stat: 71, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/340.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    341: { // Corphish
       name: 'corphish',
       displayName: 'Corphish',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 43, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/341.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    342: { // Crawdaunt
       name: 'crawdaunt',
       displayName: 'Crawdaunt',
       types: [{type: {name: 'water'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 63, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/342.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    343: { // Baltoy
       name: 'baltoy',
       displayName: 'Baltoy',
       types: [{type: {name: 'ground'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/343.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    344: { // Claydol
       name: 'claydol',
       displayName: 'Claydol',
       types: [{type: {name: 'ground'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 105, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 120, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/344.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    345: { // Lileep
       name: 'lileep',
       displayName: 'Lileep',
       types: [{type: {name: 'rock'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 66, stat: {name: 'hp'}},
        {base_stat: 41, stat: {name: 'attack'}},
        {base_stat: 77, stat: {name: 'defense'}},
        {base_stat: 61, stat: {name: 'special-attack'}},
        {base_stat: 87, stat: {name: 'special-defense'}},
        {base_stat: 23, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/345.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'ancient-power'}},
        {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}}
       ]
   },
    346: { // Cradily
       name: 'cradily',
       displayName: 'Cradily',
       types: [{type: {name: 'rock'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 86, stat: {name: 'hp'}},
        {base_stat: 81, stat: {name: 'attack'}},
        {base_stat: 97, stat: {name: 'defense'}},
        {base_stat: 81, stat: {name: 'special-attack'}},
        {base_stat: 107, stat: {name: 'special-defense'}},
        {base_stat: 43, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/346.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'ancient-power'}},
        {move: {name: 'solar-beam'}}
       ]
   },
    347: { // Anorith
       name: 'anorith',
       displayName: 'Anorith',
       types: [{type: {name: 'rock'}}, {type: {name: 'bug'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/347.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'ancient-power'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    348: { // Armaldo
       name: 'armaldo',
       displayName: 'Armaldo',
       types: [{type: {name: 'rock'}}, {type: {name: 'bug'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 125, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/348.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'ancient-power'}},
        {move: {name: 'x-scissor'}}
       ]
   },
    349: { // Feebas
       name: 'feebas',
       displayName: 'Feebas',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 20, stat: {name: 'hp'}},
        {base_stat: 15, stat: {name: 'attack'}},
        {base_stat: 20, stat: {name: 'defense'}},
        {base_stat: 10, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/349.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'scald'}},
        {move: {name: 'tackle'}},
        {move: {name: 'splash'}}
       ]
   },
    350: { // Milotic
       name: 'milotic',
       displayName: 'Milotic',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 79, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 125, stat: {name: 'special-defense'}},
        {base_stat: 81, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/350.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    351: { // Castform
       name: 'castform',
       displayName: 'Castform',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/351.png'
       },
       moves: [
       {move: {name: 'body-slam'}},
        {move: {name: 'swift'}},
        {move: {name: 'headbutt'}},
        {move: {name: 'tackle'}}
       ]
   },
    352: { // Kecleon
       name: 'kecleon',
       displayName: 'Kecleon',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 120, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/352.png'
       },
       moves: [
       {move: {name: 'body-slam'}},
        {move: {name: 'swift'}},
        {move: {name: 'scratch'}},
        {move: {name: 'bind'}}
       ]
   },
    353: { // Shuppet
       name: 'shuppet',
       displayName: 'Shuppet',
       types: [{type: {name: 'ghost'}}],
       stats: [
       {base_stat: 44, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 63, stat: {name: 'special-attack'}},
        {base_stat: 33, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/353.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    354: { // Banette
       name: 'banette',
       displayName: 'Banette',
       types: [{type: {name: 'ghost'}}],
       stats: [
       {base_stat: 64, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 83, stat: {name: 'special-attack'}},
        {base_stat: 63, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/354.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'shadow-claw'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}}
       ]
   },
    355: { // Duskull
       name: 'duskull',
       displayName: 'Duskull',
       types: [{type: {name: 'ghost'}}],
       stats: [
       {base_stat: 20, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 25, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/355.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    356: { // Dusclops
       name: 'dusclops',
       displayName: 'Dusclops',
       types: [{type: {name: 'ghost'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 130, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 130, stat: {name: 'special-defense'}},
        {base_stat: 25, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/356.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    357: { // Tropius
       name: 'tropius',
       displayName: 'Tropius',
       types: [{type: {name: 'grass'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 99, stat: {name: 'hp'}},
        {base_stat: 68, stat: {name: 'attack'}},
        {base_stat: 83, stat: {name: 'defense'}},
        {base_stat: 72, stat: {name: 'special-attack'}},
        {base_stat: 87, stat: {name: 'special-defense'}},
        {base_stat: 51, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/357.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    358: { // Chimecho
       name: 'chimecho',
       displayName: 'Chimecho',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/358.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    359: { // Absol
       name: 'absol',
       displayName: 'Absol',
       types: [{type: {name: 'dark'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 130, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/359.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'night-slash'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'bite'}}
       ]
   },
    360: { // Wynaut
       name: 'wynaut',
       displayName: 'Wynaut',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 23, stat: {name: 'attack'}},
        {base_stat: 48, stat: {name: 'defense'}},
        {base_stat: 23, stat: {name: 'special-attack'}},
        {base_stat: 48, stat: {name: 'special-defense'}},
        {base_stat: 23, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/360.png'
       },
       moves: [
       {move: {name: 'counter'}},
        {move: {name: 'amnesia'}},
        {move: {name: 'splash'}},
        {move: {name: 'destiny-bond'}}
       ]
   },
    361: { // Snorunt
       name: 'snorunt',
       displayName: 'Snorunt',
       types: [{type: {name: 'ice'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/361.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-shard'}},
        {move: {name: 'icy-wind'}}
       ]
   },
    362: { // Glalie
       name: 'glalie',
       displayName: 'Glalie',
       types: [{type: {name: 'ice'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/362.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-shard'}},
        {move: {name: 'icy-wind'}}
       ]
   },
    363: { // Spheal
       name: 'spheal',
       displayName: 'Spheal',
       types: [{type: {name: 'ice'}}, {type: {name: 'water'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 25, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/363.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'icy-wind'}},
        {move: {name: 'surf'}}
       ]
   },
    364: { // Sealeo
       name: 'sealeo',
       displayName: 'Sealeo',
       types: [{type: {name: 'ice'}}, {type: {name: 'water'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/364.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'icy-wind'}},
        {move: {name: 'surf'}}
       ]
   },
    365: { // Walrein
       name: 'walrein',
       displayName: 'Walrein',
       types: [{type: {name: 'ice'}}, {type: {name: 'water'}}],
       stats: [
       {base_stat: 110, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/365.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'icy-wind'}},
        {move: {name: 'surf'}}
       ]
   },
    366: { // Clamperl
       name: 'clamperl',
       displayName: 'Clamperl',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 35, stat: {name: 'hp'}},
        {base_stat: 64, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 74, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 32, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/366.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}},
        {move: {name: 'clamp'}}
       ]
   },
    367: { // Huntail
       name: 'huntail',
       displayName: 'Huntail',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 104, stat: {name: 'attack'}},
        {base_stat: 105, stat: {name: 'defense'}},
        {base_stat: 94, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 52, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/367.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    368: { // Gorebyss
       name: 'gorebyss',
       displayName: 'Gorebyss',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 84, stat: {name: 'attack'}},
        {base_stat: 105, stat: {name: 'defense'}},
        {base_stat: 114, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 52, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/368.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    369: { // Relicanth
       name: 'relicanth',
       displayName: 'Relicanth',
       types: [{type: {name: 'water'}}, {type: {name: 'rock'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 130, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/369.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    370: { // Luvdisc
       name: 'luvdisc',
       displayName: 'Luvdisc',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 43, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 97, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/370.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    371: { // Bagon
       name: 'bagon',
       displayName: 'Bagon',
       types: [{type: {name: 'dragon'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/371.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    372: { // Shelgon
       name: 'shelgon',
       displayName: 'Shelgon',
       types: [{type: {name: 'dragon'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/372.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    373: { // Salamence
       name: 'salamence',
       displayName: 'Salamence',
       types: [{type: {name: 'dragon'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 135, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 110, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/373.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    374: { // Beldum
       name: 'beldum',
       displayName: 'Beldum',
       types: [{type: {name: 'steel'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/374.png'
       },
       moves: [
       {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'zen-headbutt'}},
        {move: {name: 'tackle'}}
       ]
   },
    375: { // Metang
       name: 'metang',
       displayName: 'Metang',
       types: [{type: {name: 'steel'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/375.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'metal-claw'}}
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
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'metal-claw'}}
       ]
   },
    377: { // Regirock
       name: 'regirock',
       displayName: 'Regirock',
       types: [{type: {name: 'rock'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 200, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/377.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'rock-throw'}}
       ]
   },
    378: { // Regice
       name: 'regice',
       displayName: 'Regice',
       types: [{type: {name: 'ice'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 200, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/378.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-punch'}},
        {move: {name: 'icy-wind'}}
       ]
   },
    379: { // Registeel
       name: 'registeel',
       displayName: 'Registeel',
       types: [{type: {name: 'steel'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 150, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 150, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/379.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'metal-claw'}}
       ]
   },
    380: { // Latias
       name: 'latias',
       displayName: 'Latias',
       types: [{type: {name: 'dragon'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 110, stat: {name: 'special-attack'}},
        {base_stat: 130, stat: {name: 'special-defense'}},
        {base_stat: 110, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/380.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    381: { // Latios
       name: 'latios',
       displayName: 'Latios',
       types: [{type: {name: 'dragon'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 130, stat: {name: 'special-attack'}},
        {base_stat: 110, stat: {name: 'special-defense'}},
        {base_stat: 110, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/381.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    382: { // Kyogre
       name: 'kyogre',
       displayName: 'Kyogre',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 150, stat: {name: 'special-attack'}},
        {base_stat: 140, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/382.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'aqua-tail'}},
        {move: {name: 'scald'}}
       ]
   },
    383: { // Groudon
       name: 'groudon',
       displayName: 'Groudon',
       types: [{type: {name: 'ground'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 150, stat: {name: 'attack'}},
        {base_stat: 140, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/383.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    384: { // Rayquaza
       name: 'rayquaza',
       displayName: 'Rayquaza',
       types: [{type: {name: 'dragon'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 105, stat: {name: 'hp'}},
        {base_stat: 150, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 150, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/384.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    385: { // Jirachi
       name: 'jirachi',
       displayName: 'Jirachi',
       types: [{type: {name: 'steel'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/385.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'psychic'}}
       ]
   },
    386: { // Deoxys Normal
       name: 'deoxys-normal',
       displayName: 'Deoxys Normal',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 150, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 150, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 150, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/386.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    387: { // Turtwig
       name: 'turtwig',
       displayName: 'Turtwig',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 68, stat: {name: 'attack'}},
        {base_stat: 64, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 31, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/387.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    388: { // Grotle
       name: 'grotle',
       displayName: 'Grotle',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 89, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 36, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/388.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    389: { // Torterra
       name: 'torterra',
       displayName: 'Torterra',
       types: [{type: {name: 'grass'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 109, stat: {name: 'attack'}},
        {base_stat: 105, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 56, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/389.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    390: { // Chimchar
       name: 'chimchar',
       displayName: 'Chimchar',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 44, stat: {name: 'hp'}},
        {base_stat: 58, stat: {name: 'attack'}},
        {base_stat: 44, stat: {name: 'defense'}},
        {base_stat: 58, stat: {name: 'special-attack'}},
        {base_stat: 44, stat: {name: 'special-defense'}},
        {base_stat: 61, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/390.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    391: { // Monferno
       name: 'monferno',
       displayName: 'Monferno',
       types: [{type: {name: 'fire'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 64, stat: {name: 'hp'}},
        {base_stat: 78, stat: {name: 'attack'}},
        {base_stat: 52, stat: {name: 'defense'}},
        {base_stat: 78, stat: {name: 'special-attack'}},
        {base_stat: 52, stat: {name: 'special-defense'}},
        {base_stat: 81, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/391.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    392: { // Infernape
       name: 'infernape',
       displayName: 'Infernape',
       types: [{type: {name: 'fire'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 76, stat: {name: 'hp'}},
        {base_stat: 104, stat: {name: 'attack'}},
        {base_stat: 71, stat: {name: 'defense'}},
        {base_stat: 104, stat: {name: 'special-attack'}},
        {base_stat: 71, stat: {name: 'special-defense'}},
        {base_stat: 108, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/392.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    393: { // Piplup
       name: 'piplup',
       displayName: 'Piplup',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 53, stat: {name: 'hp'}},
        {base_stat: 51, stat: {name: 'attack'}},
        {base_stat: 53, stat: {name: 'defense'}},
        {base_stat: 61, stat: {name: 'special-attack'}},
        {base_stat: 56, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/393.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    394: { // Prinplup
       name: 'prinplup',
       displayName: 'Prinplup',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 64, stat: {name: 'hp'}},
        {base_stat: 66, stat: {name: 'attack'}},
        {base_stat: 68, stat: {name: 'defense'}},
        {base_stat: 81, stat: {name: 'special-attack'}},
        {base_stat: 76, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/394.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    395: { // Empoleon
       name: 'empoleon',
       displayName: 'Empoleon',
       types: [{type: {name: 'water'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 84, stat: {name: 'hp'}},
        {base_stat: 86, stat: {name: 'attack'}},
        {base_stat: 88, stat: {name: 'defense'}},
        {base_stat: 111, stat: {name: 'special-attack'}},
        {base_stat: 101, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/395.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    396: { // Starly
       name: 'starly',
       displayName: 'Starly',
       types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 30, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/396.png'
       },
       moves: [
       {move: {name: 'giga-impact'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}},
        {move: {name: 'aerial-ace'}}
       ]
   },
    397: { // Staravia
       name: 'staravia',
       displayName: 'Staravia',
       types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/397.png'
       },
       moves: [
       {move: {name: 'giga-impact'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}},
        {move: {name: 'aerial-ace'}}
       ]
   },
    398: { // Staraptor
       name: 'staraptor',
       displayName: 'Staraptor',
       types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/398.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}}
       ]
   },
    399: { // Bidoof
       name: 'bidoof',
       displayName: 'Bidoof',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 59, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 31, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/399.png'
       },
       moves: [
       {move: {name: 'swift'}},
        {move: {name: 'take-down'}},
        {move: {name: 'swords-dance'}},
        {move: {name: 'headbutt'}}
       ]
   },
    400: { // Bibarel
       name: 'bibarel',
       displayName: 'Bibarel',
       types: [{type: {name: 'normal'}}, {type: {name: 'water'}}],
       stats: [
       {base_stat: 79, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 71, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/400.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}}
       ]
   },
    401: { // Kricketot
       name: 'kricketot',
       displayName: 'Kricketot',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 37, stat: {name: 'hp'}},
        {base_stat: 25, stat: {name: 'attack'}},
        {base_stat: 41, stat: {name: 'defense'}},
        {base_stat: 25, stat: {name: 'special-attack'}},
        {base_stat: 41, stat: {name: 'special-defense'}},
        {base_stat: 25, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/401.png'
       },
       moves: [
       {move: {name: 'bug-bite'}},
        {move: {name: 'pound'}},
        {move: {name: 'tackle'}},
        {move: {name: 'growl'}}
       ]
   },
    402: { // Kricketune
       name: 'kricketune',
       displayName: 'Kricketune',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 77, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 51, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 51, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/402.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    403: { // Shinx
       name: 'shinx',
       displayName: 'Shinx',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 34, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 34, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/403.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    404: { // Luxio
       name: 'luxio',
       displayName: 'Luxio',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 49, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 49, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/404.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    405: { // Luxray
       name: 'luxray',
       displayName: 'Luxray',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 79, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 79, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/405.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    406: { // Budew
       name: 'budew',
       displayName: 'Budew',
       types: [{type: {name: 'grass'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/406.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    407: { // Roserade
       name: 'roserade',
       displayName: 'Roserade',
       types: [{type: {name: 'grass'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 125, stat: {name: 'special-attack'}},
        {base_stat: 105, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/407.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    408: { // Cranidos
       name: 'cranidos',
       displayName: 'Cranidos',
       types: [{type: {name: 'rock'}}],
       stats: [
       {base_stat: 67, stat: {name: 'hp'}},
        {base_stat: 125, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 58, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/408.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'ancient-power'}},
        {move: {name: 'headbutt'}}
       ]
   },
    409: { // Rampardos
       name: 'rampardos',
       displayName: 'Rampardos',
       types: [{type: {name: 'rock'}}],
       stats: [
       {base_stat: 97, stat: {name: 'hp'}},
        {base_stat: 165, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 58, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/409.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'ancient-power'}},
        {move: {name: 'slam'}}
       ]
   },
    410: { // Shieldon
       name: 'shieldon',
       displayName: 'Shieldon',
       types: [{type: {name: 'rock'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 30, stat: {name: 'hp'}},
        {base_stat: 42, stat: {name: 'attack'}},
        {base_stat: 118, stat: {name: 'defense'}},
        {base_stat: 42, stat: {name: 'special-attack'}},
        {base_stat: 88, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/410.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'ancient-power'}}
       ]
   },
    411: { // Bastiodon
       name: 'bastiodon',
       displayName: 'Bastiodon',
       types: [{type: {name: 'rock'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 52, stat: {name: 'attack'}},
        {base_stat: 168, stat: {name: 'defense'}},
        {base_stat: 47, stat: {name: 'special-attack'}},
        {base_stat: 138, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/411.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'ancient-power'}}
       ]
   },
    412: { // Burmy
       name: 'burmy',
       displayName: 'Burmy',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 29, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 29, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 36, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/412.png'
       },
       moves: [
       {move: {name: 'bug-bite'}},
        {move: {name: 'tackle'}},
        {move: {name: 'protect'}},
        {move: {name: 'hidden-power'}}
       ]
   },
    413: { // Wormadam Plant
       name: 'wormadam-plant',
       displayName: 'Wormadam Plant',
       types: [{type: {name: 'bug'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 59, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 79, stat: {name: 'special-attack'}},
        {base_stat: 105, stat: {name: 'special-defense'}},
        {base_stat: 36, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/413.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'solar-beam'}}
       ]
   },
    414: { // Mothim
       name: 'mothim',
       displayName: 'Mothim',
       types: [{type: {name: 'bug'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 94, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 94, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 66, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/414.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'aerial-ace'}}
       ]
   },
    415: { // Combee
       name: 'combee',
       displayName: 'Combee',
       types: [{type: {name: 'bug'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 30, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 42, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 42, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/415.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'gust'}},
        {move: {name: 'sweet-scent'}}
       ]
   },
    416: { // Vespiquen
       name: 'vespiquen',
       displayName: 'Vespiquen',
       types: [{type: {name: 'bug'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 102, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 102, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/416.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    417: { // Pachirisu
       name: 'pachirisu',
       displayName: 'Pachirisu',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/417.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'thunder-punch'}}
       ]
   },
    418: { // Buizel
       name: 'buizel',
       displayName: 'Buizel',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/418.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    419: { // Floatzel
       name: 'floatzel',
       displayName: 'Floatzel',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 105, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 115, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/419.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    420: { // Cherubi
       name: 'cherubi',
       displayName: 'Cherubi',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 35, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 62, stat: {name: 'special-attack'}},
        {base_stat: 53, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/420.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'razor-leaf'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    421: { // Cherrim
       name: 'cherrim',
       displayName: 'Cherrim',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 87, stat: {name: 'special-attack'}},
        {base_stat: 78, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/421.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'magical-leaf'}},
        {move: {name: 'tackle'}}
       ]
   },
    422: { // Shellos
       name: 'shellos',
       displayName: 'Shellos',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 76, stat: {name: 'hp'}},
        {base_stat: 48, stat: {name: 'attack'}},
        {base_stat: 48, stat: {name: 'defense'}},
        {base_stat: 57, stat: {name: 'special-attack'}},
        {base_stat: 62, stat: {name: 'special-defense'}},
        {base_stat: 34, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/422.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    423: { // Gastrodon
       name: 'gastrodon',
       displayName: 'Gastrodon',
       types: [{type: {name: 'water'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 111, stat: {name: 'hp'}},
        {base_stat: 83, stat: {name: 'attack'}},
        {base_stat: 68, stat: {name: 'defense'}},
        {base_stat: 92, stat: {name: 'special-attack'}},
        {base_stat: 82, stat: {name: 'special-defense'}},
        {base_stat: 39, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/423.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    424: { // Ambipom
       name: 'ambipom',
       displayName: 'Ambipom',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 66, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 66, stat: {name: 'special-defense'}},
        {base_stat: 115, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/424.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}}
       ]
   },
    425: { // Drifloon
       name: 'drifloon',
       displayName: 'Drifloon',
       types: [{type: {name: 'ghost'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 34, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 44, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/425.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'aerial-ace'}}
       ]
   },
    426: { // Drifblim
       name: 'drifblim',
       displayName: 'Drifblim',
       types: [{type: {name: 'ghost'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 150, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 44, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 54, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/426.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'aerial-ace'}}
       ]
   },
    427: { // Buneary
       name: 'buneary',
       displayName: 'Buneary',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 66, stat: {name: 'attack'}},
        {base_stat: 44, stat: {name: 'defense'}},
        {base_stat: 44, stat: {name: 'special-attack'}},
        {base_stat: 56, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/427.png'
       },
       moves: [
       {move: {name: 'swift'}},
        {move: {name: 'pound'}},
        {move: {name: 'double-kick'}},
        {move: {name: 'jump-kick'}}
       ]
   },
    428: { // Lopunny
       name: 'lopunny',
       displayName: 'Lopunny',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 76, stat: {name: 'attack'}},
        {base_stat: 84, stat: {name: 'defense'}},
        {base_stat: 54, stat: {name: 'special-attack'}},
        {base_stat: 96, stat: {name: 'special-defense'}},
        {base_stat: 105, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/428.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'swift'}},
        {move: {name: 'pound'}}
       ]
   },
    429: { // Mismagius
       name: 'mismagius',
       displayName: 'Mismagius',
       types: [{type: {name: 'ghost'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 105, stat: {name: 'special-attack'}},
        {base_stat: 105, stat: {name: 'special-defense'}},
        {base_stat: 105, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/429.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    430: { // Honchkrow
       name: 'honchkrow',
       displayName: 'Honchkrow',
       types: [{type: {name: 'dark'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 125, stat: {name: 'attack'}},
        {base_stat: 52, stat: {name: 'defense'}},
        {base_stat: 105, stat: {name: 'special-attack'}},
        {base_stat: 52, stat: {name: 'special-defense'}},
        {base_stat: 71, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/430.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'night-slash'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'aerial-ace'}}
       ]
   },
    431: { // Glameow
       name: 'glameow',
       displayName: 'Glameow',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 49, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 42, stat: {name: 'defense'}},
        {base_stat: 42, stat: {name: 'special-attack'}},
        {base_stat: 37, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/431.png'
       },
       moves: [
       {move: {name: 'swift'}},
        {move: {name: 'scratch'}},
        {move: {name: 'tackle'}},
        {move: {name: 'double-edge'}}
       ]
   },
    432: { // Purugly
       name: 'purugly',
       displayName: 'Purugly',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 71, stat: {name: 'hp'}},
        {base_stat: 82, stat: {name: 'attack'}},
        {base_stat: 64, stat: {name: 'defense'}},
        {base_stat: 64, stat: {name: 'special-attack'}},
        {base_stat: 59, stat: {name: 'special-defense'}},
        {base_stat: 112, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/432.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'swift'}}
       ]
   },
    433: { // Chingling
       name: 'chingling',
       displayName: 'Chingling',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/433.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}},
        {move: {name: 'confusion'}}
       ]
   },
    434: { // Stunky
       name: 'stunky',
       displayName: 'Stunky',
       types: [{type: {name: 'poison'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 63, stat: {name: 'hp'}},
        {base_stat: 63, stat: {name: 'attack'}},
        {base_stat: 47, stat: {name: 'defense'}},
        {base_stat: 41, stat: {name: 'special-attack'}},
        {base_stat: 41, stat: {name: 'special-defense'}},
        {base_stat: 74, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/434.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}}
       ]
   },
    435: { // Skuntank
       name: 'skuntank',
       displayName: 'Skuntank',
       types: [{type: {name: 'poison'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 103, stat: {name: 'hp'}},
        {base_stat: 93, stat: {name: 'attack'}},
        {base_stat: 67, stat: {name: 'defense'}},
        {base_stat: 71, stat: {name: 'special-attack'}},
        {base_stat: 61, stat: {name: 'special-defense'}},
        {base_stat: 84, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/435.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}}
       ]
   },
    436: { // Bronzor
       name: 'bronzor',
       displayName: 'Bronzor',
       types: [{type: {name: 'steel'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 57, stat: {name: 'hp'}},
        {base_stat: 24, stat: {name: 'attack'}},
        {base_stat: 86, stat: {name: 'defense'}},
        {base_stat: 24, stat: {name: 'special-attack'}},
        {base_stat: 86, stat: {name: 'special-defense'}},
        {base_stat: 23, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/436.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'psychic'}}
       ]
   },
    437: { // Bronzong
       name: 'bronzong',
       displayName: 'Bronzong',
       types: [{type: {name: 'steel'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 67, stat: {name: 'hp'}},
        {base_stat: 89, stat: {name: 'attack'}},
        {base_stat: 116, stat: {name: 'defense'}},
        {base_stat: 79, stat: {name: 'special-attack'}},
        {base_stat: 116, stat: {name: 'special-defense'}},
        {base_stat: 33, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/437.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'psychic'}}
       ]
   },
    438: { // Bonsly
       name: 'bonsly',
       displayName: 'Bonsly',
       types: [{type: {name: 'rock'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 10, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 10, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/438.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'rock-throw'}}
       ]
   },
    439: { // Mime Jr.
       name: 'mime-jr',
       displayName: 'Mime Jr.',
       types: [{type: {name: 'psychic'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 20, stat: {name: 'hp'}},
        {base_stat: 25, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/439.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    440: { // Happiny
       name: 'happiny',
       displayName: 'Happiny',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 5, stat: {name: 'attack'}},
        {base_stat: 5, stat: {name: 'defense'}},
        {base_stat: 15, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/440.png'
       },
       moves: [
       {move: {name: 'take-down'}},
        {move: {name: 'pound'}},
        {move: {name: 'tackle'}},
        {move: {name: 'double-edge'}}
       ]
   },
    441: { // Chatot
       name: 'chatot',
       displayName: 'Chatot',
       types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 76, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 92, stat: {name: 'special-attack'}},
        {base_stat: 42, stat: {name: 'special-defense'}},
        {base_stat: 91, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/441.png'
       },
       moves: [
       {move: {name: 'swift'}},
        {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}},
        {move: {name: 'fly'}}
       ]
   },
    442: { // Spiritomb
       name: 'spiritomb',
       displayName: 'Spiritomb',
       types: [{type: {name: 'ghost'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 92, stat: {name: 'attack'}},
        {base_stat: 108, stat: {name: 'defense'}},
        {base_stat: 92, stat: {name: 'special-attack'}},
        {base_stat: 108, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/442.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    443: { // Gible
       name: 'gible',
       displayName: 'Gible',
       types: [{type: {name: 'dragon'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 58, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 42, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/443.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    444: { // Gabite
       name: 'gabite',
       displayName: 'Gabite',
       types: [{type: {name: 'dragon'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 68, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 82, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/444.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
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
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    446: { // Munchlax
       name: 'munchlax',
       displayName: 'Munchlax',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 135, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 5, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/446.png'
       },
       moves: [
       {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}},
        {move: {name: 'tackle'}}
       ]
   },
    447: { // Riolu
       name: 'riolu',
       displayName: 'Riolu',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/447.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'aura-sphere'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}}
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
        {move: {name: 'aura-sphere'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}}
       ]
   },
    449: { // Hippopotas
       name: 'hippopotas',
       displayName: 'Hippopotas',
       types: [{type: {name: 'ground'}}],
       stats: [
       {base_stat: 68, stat: {name: 'hp'}},
        {base_stat: 72, stat: {name: 'attack'}},
        {base_stat: 78, stat: {name: 'defense'}},
        {base_stat: 38, stat: {name: 'special-attack'}},
        {base_stat: 42, stat: {name: 'special-defense'}},
        {base_stat: 32, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/449.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    450: { // Hippowdon
       name: 'hippowdon',
       displayName: 'Hippowdon',
       types: [{type: {name: 'ground'}}],
       stats: [
       {base_stat: 108, stat: {name: 'hp'}},
        {base_stat: 112, stat: {name: 'attack'}},
        {base_stat: 118, stat: {name: 'defense'}},
        {base_stat: 68, stat: {name: 'special-attack'}},
        {base_stat: 72, stat: {name: 'special-defense'}},
        {base_stat: 47, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/450.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    451: { // Skorupi
       name: 'skorupi',
       displayName: 'Skorupi',
       types: [{type: {name: 'poison'}}, {type: {name: 'bug'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/451.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'bug-buzz'}}
       ]
   },
    452: { // Drapion
       name: 'drapion',
       displayName: 'Drapion',
       types: [{type: {name: 'poison'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 110, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/452.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'dark-pulse'}}
       ]
   },
    453: { // Croagunk
       name: 'croagunk',
       displayName: 'Croagunk',
       types: [{type: {name: 'poison'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 48, stat: {name: 'hp'}},
        {base_stat: 61, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 61, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/453.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}}
       ]
   },
    454: { // Toxicroak
       name: 'toxicroak',
       displayName: 'Toxicroak',
       types: [{type: {name: 'poison'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 83, stat: {name: 'hp'}},
        {base_stat: 106, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 86, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/454.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}}
       ]
   },
    455: { // Carnivine
       name: 'carnivine',
       displayName: 'Carnivine',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 74, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 72, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 72, stat: {name: 'special-defense'}},
        {base_stat: 46, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/455.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'razor-leaf'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    456: { // Finneon
       name: 'finneon',
       displayName: 'Finneon',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 49, stat: {name: 'hp'}},
        {base_stat: 49, stat: {name: 'attack'}},
        {base_stat: 56, stat: {name: 'defense'}},
        {base_stat: 49, stat: {name: 'special-attack'}},
        {base_stat: 61, stat: {name: 'special-defense'}},
        {base_stat: 66, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/456.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    457: { // Lumineon
       name: 'lumineon',
       displayName: 'Lumineon',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 69, stat: {name: 'hp'}},
        {base_stat: 69, stat: {name: 'attack'}},
        {base_stat: 76, stat: {name: 'defense'}},
        {base_stat: 69, stat: {name: 'special-attack'}},
        {base_stat: 86, stat: {name: 'special-defense'}},
        {base_stat: 91, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/457.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    458: { // Mantyke
       name: 'mantyke',
       displayName: 'Mantyke',
       types: [{type: {name: 'water'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 20, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 120, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/458.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    459: { // Snover
       name: 'snover',
       displayName: 'Snover',
       types: [{type: {name: 'grass'}}, {type: {name: 'ice'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 62, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 62, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/459.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    460: { // Abomasnow
       name: 'abomasnow',
       displayName: 'Abomasnow',
       types: [{type: {name: 'grass'}}, {type: {name: 'ice'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 92, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 92, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/460.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    461: { // Weavile
       name: 'weavile',
       displayName: 'Weavile',
       types: [{type: {name: 'dark'}}, {type: {name: 'ice'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 125, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/461.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'night-slash'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'ice-beam'}}
       ]
   },
    462: { // Magnezone
       name: 'magnezone',
       displayName: 'Magnezone',
       types: [{type: {name: 'electric'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 115, stat: {name: 'defense'}},
        {base_stat: 130, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/462.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    463: { // Lickilicky
       name: 'lickilicky',
       displayName: 'Lickilicky',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 110, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/463.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'slam'}}
       ]
   },
    464: { // Rhyperior
       name: 'rhyperior',
       displayName: 'Rhyperior',
       types: [{type: {name: 'ground'}}, {type: {name: 'rock'}}],
       stats: [
       {base_stat: 115, stat: {name: 'hp'}},
        {base_stat: 140, stat: {name: 'attack'}},
        {base_stat: 130, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/464.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    465: { // Tangrowth
       name: 'tangrowth',
       displayName: 'Tangrowth',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 125, stat: {name: 'defense'}},
        {base_stat: 110, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/465.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'bind'}}
       ]
   },
    466: { // Electivire
       name: 'electivire',
       displayName: 'Electivire',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 123, stat: {name: 'attack'}},
        {base_stat: 67, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/466.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'thunder-punch'}}
       ]
   },
    467: { // Magmortar
       name: 'magmortar',
       displayName: 'Magmortar',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 67, stat: {name: 'defense'}},
        {base_stat: 125, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 83, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/467.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    468: { // Togekiss
       name: 'togekiss',
       displayName: 'Togekiss',
       types: [{type: {name: 'fairy'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 120, stat: {name: 'special-attack'}},
        {base_stat: 115, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/468.png'
       },
       moves: [
       {move: {name: 'moonblast'}},
        {move: {name: 'dazzling-gleam'}},
        {move: {name: 'play-rough'}},
        {move: {name: 'draining-kiss'}}
       ]
   },
    469: { // Yanmega
       name: 'yanmega',
       displayName: 'Yanmega',
       types: [{type: {name: 'bug'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 86, stat: {name: 'hp'}},
        {base_stat: 76, stat: {name: 'attack'}},
        {base_stat: 86, stat: {name: 'defense'}},
        {base_stat: 116, stat: {name: 'special-attack'}},
        {base_stat: 56, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/469.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    470: { // Leafeon
       name: 'leafeon',
       displayName: 'Leafeon',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 110, stat: {name: 'attack'}},
        {base_stat: 130, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/470.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    471: { // Glaceon
       name: 'glaceon',
       displayName: 'Glaceon',
       types: [{type: {name: 'ice'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 110, stat: {name: 'defense'}},
        {base_stat: 130, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/471.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-shard'}},
        {move: {name: 'icy-wind'}}
       ]
   },
    472: { // Gliscor
       name: 'gliscor',
       displayName: 'Gliscor',
       types: [{type: {name: 'ground'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 125, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/472.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    473: { // Mamoswine
       name: 'mamoswine',
       displayName: 'Mamoswine',
       types: [{type: {name: 'ice'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 110, stat: {name: 'hp'}},
        {base_stat: 130, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/473.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-shard'}},
        {move: {name: 'icy-wind'}}
       ]
   },
    474: { // Porygon Z
       name: 'porygon-z',
       displayName: 'Porygon Z',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 135, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/474.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}}
       ]
   },
    475: { // Gallade
       name: 'gallade',
       displayName: 'Gallade',
       types: [{type: {name: 'psychic'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 68, stat: {name: 'hp'}},
        {base_stat: 125, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 115, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/475.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    476: { // Probopass
       name: 'probopass',
       displayName: 'Probopass',
       types: [{type: {name: 'rock'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 145, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 150, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/476.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'rock-throw'}}
       ]
   },
    477: { // Dusknoir
       name: 'dusknoir',
       displayName: 'Dusknoir',
       types: [{type: {name: 'ghost'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 135, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 135, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/477.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    478: { // Froslass
       name: 'froslass',
       displayName: 'Froslass',
       types: [{type: {name: 'ice'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 110, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/478.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-punch'}},
        {move: {name: 'ice-shard'}}
       ]
   },
    479: { // Rotom
       name: 'rotom',
       displayName: 'Rotom',
       types: [{type: {name: 'electric'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 77, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 77, stat: {name: 'special-defense'}},
        {base_stat: 91, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/479.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'shadow-ball'}}
       ]
   },
    480: { // Uxie
       name: 'uxie',
       displayName: 'Uxie',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 130, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 130, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/480.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    481: { // Mesprit
       name: 'mesprit',
       displayName: 'Mesprit',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 105, stat: {name: 'attack'}},
        {base_stat: 105, stat: {name: 'defense'}},
        {base_stat: 105, stat: {name: 'special-attack'}},
        {base_stat: 105, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/481.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    482: { // Azelf
       name: 'azelf',
       displayName: 'Azelf',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 125, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 125, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 115, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/482.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    483: { // Dialga
       name: 'dialga',
       displayName: 'Dialga',
       types: [{type: {name: 'steel'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 120, stat: {name: 'defense'}},
        {base_stat: 150, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/483.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'metal-claw'}}
       ]
   },
    484: { // Palkia
       name: 'palkia',
       displayName: 'Palkia',
       types: [{type: {name: 'water'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 150, stat: {name: 'special-attack'}},
        {base_stat: 120, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/484.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'aqua-tail'}},
        {move: {name: 'dragon-claw'}}
       ]
   },
    485: { // Heatran
       name: 'heatran',
       displayName: 'Heatran',
       types: [{type: {name: 'fire'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 91, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 106, stat: {name: 'defense'}},
        {base_stat: 130, stat: {name: 'special-attack'}},
        {base_stat: 106, stat: {name: 'special-defense'}},
        {base_stat: 77, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/485.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    486: { // Regigigas
       name: 'regigigas',
       displayName: 'Regigigas',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 110, stat: {name: 'hp'}},
        {base_stat: 160, stat: {name: 'attack'}},
        {base_stat: 110, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 110, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/486.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'pound'}}
       ]
   },
    487: { // Giratina Altered
       name: 'giratina-altered',
       displayName: 'Giratina Altered',
       types: [{type: {name: 'ghost'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 150, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 120, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 120, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/487.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'shadow-claw'}},
        {move: {name: 'hex'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    488: { // Cresselia
       name: 'cresselia',
       displayName: 'Cresselia',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 120, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 110, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 120, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/488.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    489: { // Phione
       name: 'phione',
       displayName: 'Phione',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/489.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    490: { // Manaphy
       name: 'manaphy',
       displayName: 'Manaphy',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/490.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    491: { // Darkrai
       name: 'darkrai',
       displayName: 'Darkrai',
       types: [{type: {name: 'dark'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 135, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 125, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/491.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'disable'}},
        {move: {name: 'hypnosis'}}
       ]
   },
    492: { // Shaymin Land
       name: 'shaymin-land',
       displayName: 'Shaymin Land',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/492.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    493: { // Arceus
       name: 'arceus',
       displayName: 'Arceus',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 120, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 120, stat: {name: 'defense'}},
        {base_stat: 120, stat: {name: 'special-attack'}},
        {base_stat: 120, stat: {name: 'special-defense'}},
        {base_stat: 120, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/493.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'swift'}}
       ]
   },
    494: { // Victini
       name: 'victini',
       displayName: 'Victini',
       types: [{type: {name: 'psychic'}}, {type: {name: 'fire'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/494.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}},
        {move: {name: 'confusion'}}
       ]
   },
    495: { // Snivy
       name: 'snivy',
       displayName: 'Snivy',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 63, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/495.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    496: { // Servine
       name: 'servine',
       displayName: 'Servine',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 83, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/496.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    497: { // Serperior
       name: 'serperior',
       displayName: 'Serperior',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 113, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/497.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    498: { // Tepig
       name: 'tepig',
       displayName: 'Tepig',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 63, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/498.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    499: { // Pignite
       name: 'pignite',
       displayName: 'Pignite',
       types: [{type: {name: 'fire'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 93, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/499.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    500: { // Emboar
       name: 'emboar',
       displayName: 'Emboar',
       types: [{type: {name: 'fire'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 110, stat: {name: 'hp'}},
        {base_stat: 123, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/500.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    501: { // Oshawott
       name: 'oshawott',
       displayName: 'Oshawott',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 63, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/501.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    502: { // Dewott
       name: 'dewott',
       displayName: 'Dewott',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 83, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/502.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    503: { // Samurott
       name: 'samurott',
       displayName: 'Samurott',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 108, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/503.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    504: { // Patrat
       name: 'patrat',
       displayName: 'Patrat',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 39, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 39, stat: {name: 'special-defense'}},
        {base_stat: 42, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/504.png'
       },
       moves: [
       {move: {name: 'slam'}},
        {move: {name: 'sand-attack'}},
        {move: {name: 'tackle'}},
        {move: {name: 'leer'}}
       ]
   },
    505: { // Watchog
       name: 'watchog',
       displayName: 'Watchog',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 69, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 69, stat: {name: 'special-defense'}},
        {base_stat: 77, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/505.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'slam'}},
        {move: {name: 'sand-attack'}}
       ]
   },
    506: { // Lillipup
       name: 'lillipup',
       displayName: 'Lillipup',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 25, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/506.png'
       },
       moves: [
       {move: {name: 'giga-impact'}},
        {move: {name: 'take-down'}},
        {move: {name: 'tackle'}},
        {move: {name: 'leer'}}
       ]
   },
    507: { // Herdier
       name: 'herdier',
       displayName: 'Herdier',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/507.png'
       },
       moves: [
       {move: {name: 'giga-impact'}},
        {move: {name: 'take-down'}},
        {move: {name: 'tackle'}},
        {move: {name: 'leer'}}
       ]
   },
    508: { // Stoutland
       name: 'stoutland',
       displayName: 'Stoutland',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 110, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/508.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'take-down'}},
        {move: {name: 'tackle'}}
       ]
   },
    509: { // Purrloin
       name: 'purrloin',
       displayName: 'Purrloin',
       types: [{type: {name: 'dark'}}],
       stats: [
       {base_stat: 41, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 37, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 37, stat: {name: 'special-defense'}},
        {base_stat: 66, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/509.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'night-slash'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'scratch'}}
       ]
   },
    510: { // Liepard
       name: 'liepard',
       displayName: 'Liepard',
       types: [{type: {name: 'dark'}}],
       stats: [
       {base_stat: 64, stat: {name: 'hp'}},
        {base_stat: 88, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 88, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 106, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/510.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'night-slash'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'scratch'}}
       ]
   },
    511: { // Pansage
       name: 'pansage',
       displayName: 'Pansage',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 53, stat: {name: 'attack'}},
        {base_stat: 48, stat: {name: 'defense'}},
        {base_stat: 53, stat: {name: 'special-attack'}},
        {base_stat: 48, stat: {name: 'special-defense'}},
        {base_stat: 64, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/511.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    512: { // Simisage
       name: 'simisage',
       displayName: 'Simisage',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 98, stat: {name: 'attack'}},
        {base_stat: 63, stat: {name: 'defense'}},
        {base_stat: 98, stat: {name: 'special-attack'}},
        {base_stat: 63, stat: {name: 'special-defense'}},
        {base_stat: 101, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/512.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leer'}},
        {move: {name: 'lick'}}
       ]
   },
    513: { // Pansear
       name: 'pansear',
       displayName: 'Pansear',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 53, stat: {name: 'attack'}},
        {base_stat: 48, stat: {name: 'defense'}},
        {base_stat: 53, stat: {name: 'special-attack'}},
        {base_stat: 48, stat: {name: 'special-defense'}},
        {base_stat: 64, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/513.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    514: { // Simisear
       name: 'simisear',
       displayName: 'Simisear',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 98, stat: {name: 'attack'}},
        {base_stat: 63, stat: {name: 'defense'}},
        {base_stat: 98, stat: {name: 'special-attack'}},
        {base_stat: 63, stat: {name: 'special-defense'}},
        {base_stat: 101, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/514.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    515: { // Panpour
       name: 'panpour',
       displayName: 'Panpour',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 53, stat: {name: 'attack'}},
        {base_stat: 48, stat: {name: 'defense'}},
        {base_stat: 53, stat: {name: 'special-attack'}},
        {base_stat: 48, stat: {name: 'special-defense'}},
        {base_stat: 64, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/515.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    516: { // Simipour
       name: 'simipour',
       displayName: 'Simipour',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 98, stat: {name: 'attack'}},
        {base_stat: 63, stat: {name: 'defense'}},
        {base_stat: 98, stat: {name: 'special-attack'}},
        {base_stat: 63, stat: {name: 'special-defense'}},
        {base_stat: 101, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/516.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'aqua-tail'}},
        {move: {name: 'scald'}},
        {move: {name: 'leer'}}
       ]
   },
    517: { // Munna
       name: 'munna',
       displayName: 'Munna',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 76, stat: {name: 'hp'}},
        {base_stat: 25, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 67, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 24, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/517.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    518: { // Musharna
       name: 'musharna',
       displayName: 'Musharna',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 116, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 107, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 29, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/518.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    519: { // Pidove
       name: 'pidove',
       displayName: 'Pidove',
       types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 36, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 43, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/519.png'
       },
       moves: [
       {move: {name: 'swift'}},
        {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}},
        {move: {name: 'fly'}}
       ]
   },
    520: { // Tranquill
       name: 'tranquill',
       displayName: 'Tranquill',
       types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 62, stat: {name: 'hp'}},
        {base_stat: 77, stat: {name: 'attack'}},
        {base_stat: 62, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 42, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/520.png'
       },
       moves: [
       {move: {name: 'swift'}},
        {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}},
        {move: {name: 'fly'}}
       ]
   },
    521: { // Unfezant
       name: 'unfezant',
       displayName: 'Unfezant',
       types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 93, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/521.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'swift'}},
        {move: {name: 'aerial-ace'}}
       ]
   },
    522: { // Blitzle
       name: 'blitzle',
       displayName: 'Blitzle',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 32, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 32, stat: {name: 'special-defense'}},
        {base_stat: 76, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/522.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    523: { // Zebstrika
       name: 'zebstrika',
       displayName: 'Zebstrika',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 63, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 63, stat: {name: 'special-defense'}},
        {base_stat: 116, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/523.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    524: { // Roggenrola
       name: 'roggenrola',
       displayName: 'Roggenrola',
       types: [{type: {name: 'rock'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 25, stat: {name: 'special-attack'}},
        {base_stat: 25, stat: {name: 'special-defense'}},
        {base_stat: 15, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/524.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'sand-attack'}},
        {move: {name: 'headbutt'}}
       ]
   },
    525: { // Boldore
       name: 'boldore',
       displayName: 'Boldore',
       types: [{type: {name: 'rock'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 105, stat: {name: 'attack'}},
        {base_stat: 105, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 20, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/525.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'sand-attack'}}
       ]
   },
    526: { // Gigalith
       name: 'gigalith',
       displayName: 'Gigalith',
       types: [{type: {name: 'rock'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 135, stat: {name: 'attack'}},
        {base_stat: 130, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 25, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/526.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'sand-attack'}}
       ]
   },
    527: { // Woobat
       name: 'woobat',
       displayName: 'Woobat',
       types: [{type: {name: 'psychic'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 43, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 43, stat: {name: 'special-defense'}},
        {base_stat: 72, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/527.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}},
        {move: {name: 'confusion'}}
       ]
   },
    528: { // Swoobat
       name: 'swoobat',
       displayName: 'Swoobat',
       types: [{type: {name: 'psychic'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 67, stat: {name: 'hp'}},
        {base_stat: 57, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 77, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 114, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/528.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}},
        {move: {name: 'confusion'}}
       ]
   },
    529: { // Drilbur
       name: 'drilbur',
       displayName: 'Drilbur',
       types: [{type: {name: 'ground'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 68, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/529.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    530: { // Excadrill
       name: 'excadrill',
       displayName: 'Excadrill',
       types: [{type: {name: 'ground'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 110, stat: {name: 'hp'}},
        {base_stat: 135, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 88, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/530.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    531: { // Audino
       name: 'audino',
       displayName: 'Audino',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 103, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 86, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 86, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/531.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}}
       ]
   },
    532: { // Timburr
       name: 'timburr',
       displayName: 'Timburr',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 25, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/532.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}},
        {move: {name: 'focus-blast'}}
       ]
   },
    533: { // Gurdurr
       name: 'gurdurr',
       displayName: 'Gurdurr',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 105, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/533.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}},
        {move: {name: 'focus-blast'}}
       ]
   },
    534: { // Conkeldurr
       name: 'conkeldurr',
       displayName: 'Conkeldurr',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 105, stat: {name: 'hp'}},
        {base_stat: 140, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/534.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}},
        {move: {name: 'focus-blast'}}
       ]
   },
    535: { // Tympole
       name: 'tympole',
       displayName: 'Tympole',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 64, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/535.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'scald'}},
        {move: {name: 'growl'}}
       ]
   },
    536: { // Palpitoad
       name: 'palpitoad',
       displayName: 'Palpitoad',
       types: [{type: {name: 'water'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 69, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/536.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'scald'}},
        {move: {name: 'earth-power'}}
       ]
   },
    537: { // Seismitoad
       name: 'seismitoad',
       displayName: 'Seismitoad',
       types: [{type: {name: 'water'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 105, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 74, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/537.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'scald'}},
        {move: {name: 'earthquake'}}
       ]
   },
    538: { // Throh
       name: 'throh',
       displayName: 'Throh',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 120, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/538.png'
       },
       moves: [
       {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}},
        {move: {name: 'focus-blast'}},
        {move: {name: 'bind'}}
       ]
   },
    539: { // Sawk
       name: 'sawk',
       displayName: 'Sawk',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 125, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/539.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}},
        {move: {name: 'focus-blast'}}
       ]
   },
    540: { // Sewaddle
       name: 'sewaddle',
       displayName: 'Sewaddle',
       types: [{type: {name: 'bug'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 53, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 42, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/540.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'solar-beam'}}
       ]
   },
    541: { // Swadloon
       name: 'swadloon',
       displayName: 'Swadloon',
       types: [{type: {name: 'bug'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 63, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 42, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/541.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'solar-beam'}}
       ]
   },
    542: { // Leavanny
       name: 'leavanny',
       displayName: 'Leavanny',
       types: [{type: {name: 'bug'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 103, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 92, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/542.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    543: { // Venipede
       name: 'venipede',
       displayName: 'Venipede',
       types: [{type: {name: 'bug'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 30, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 59, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 39, stat: {name: 'special-defense'}},
        {base_stat: 57, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/543.png'
       },
       moves: [
       {move: {name: 'signal-beam'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}}
       ]
   },
    544: { // Whirlipede
       name: 'whirlipede',
       displayName: 'Whirlipede',
       types: [{type: {name: 'bug'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 99, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 79, stat: {name: 'special-defense'}},
        {base_stat: 47, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/544.png'
       },
       moves: [
       {move: {name: 'signal-beam'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}}
       ]
   },
    545: { // Scolipede
       name: 'scolipede',
       displayName: 'Scolipede',
       types: [{type: {name: 'bug'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 89, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 69, stat: {name: 'special-defense'}},
        {base_stat: 112, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/545.png'
       },
       moves: [
       {move: {name: 'x-scissor'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'sludge-bomb'}}
       ]
   },
    546: { // Cottonee
       name: 'cottonee',
       displayName: 'Cottonee',
       types: [{type: {name: 'grass'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 27, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 37, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 66, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/546.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'razor-leaf'}},
        {move: {name: 'dazzling-gleam'}}
       ]
   },
    547: { // Whimsicott
       name: 'whimsicott',
       displayName: 'Whimsicott',
       types: [{type: {name: 'grass'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 67, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 77, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 116, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/547.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'razor-leaf'}},
        {move: {name: 'moonblast'}}
       ]
   },
    548: { // Petilil
       name: 'petilil',
       displayName: 'Petilil',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 35, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/548.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    549: { // Lilligant
       name: 'lilligant',
       displayName: 'Lilligant',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 110, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/549.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    550: { // Basculin Red Striped
       name: 'basculin-red-striped',
       displayName: 'Basculin Red Striped',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 92, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 98, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/550.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    551: { // Sandile
       name: 'sandile',
       displayName: 'Sandile',
       types: [{type: {name: 'ground'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 72, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/551.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    552: { // Krokorok
       name: 'krokorok',
       displayName: 'Krokorok',
       types: [{type: {name: 'ground'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 82, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 74, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/552.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    553: { // Krookodile
       name: 'krookodile',
       displayName: 'Krookodile',
       types: [{type: {name: 'ground'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 117, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 92, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/553.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    554: { // Darumaka
       name: 'darumaka',
       displayName: 'Darumaka',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 15, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/554.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    555: { // Darmanitan Standard
       name: 'darmanitan-standard',
       displayName: 'Darmanitan Standard',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 105, stat: {name: 'hp'}},
        {base_stat: 140, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/555.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    556: { // Maractus
       name: 'maractus',
       displayName: 'Maractus',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 86, stat: {name: 'attack'}},
        {base_stat: 67, stat: {name: 'defense'}},
        {base_stat: 106, stat: {name: 'special-attack'}},
        {base_stat: 67, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/556.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'pin-missile'}}
       ]
   },
    557: { // Dwebble
       name: 'dwebble',
       displayName: 'Dwebble',
       types: [{type: {name: 'bug'}}, {type: {name: 'rock'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/557.png'
       },
       moves: [
       {move: {name: 'x-scissor'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}}
       ]
   },
    558: { // Crustle
       name: 'crustle',
       displayName: 'Crustle',
       types: [{type: {name: 'bug'}}, {type: {name: 'rock'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 105, stat: {name: 'attack'}},
        {base_stat: 125, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/558.png'
       },
       moves: [
       {move: {name: 'x-scissor'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}}
       ]
   },
    559: { // Scraggy
       name: 'scraggy',
       displayName: 'Scraggy',
       types: [{type: {name: 'dark'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 48, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/559.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'close-combat'}}
       ]
   },
    560: { // Scrafty
       name: 'scrafty',
       displayName: 'Scrafty',
       types: [{type: {name: 'dark'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 115, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 115, stat: {name: 'special-defense'}},
        {base_stat: 58, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/560.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'close-combat'}}
       ]
   },
    561: { // Sigilyph
       name: 'sigilyph',
       displayName: 'Sigilyph',
       types: [{type: {name: 'psychic'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 72, stat: {name: 'hp'}},
        {base_stat: 58, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 103, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 97, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/561.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    562: { // Yamask
       name: 'yamask',
       displayName: 'Yamask',
       types: [{type: {name: 'ghost'}}],
       stats: [
       {base_stat: 38, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/562.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'disable'}}
       ]
   },
    563: { // Cofagrigus
       name: 'cofagrigus',
       displayName: 'Cofagrigus',
       types: [{type: {name: 'ghost'}}],
       stats: [
       {base_stat: 58, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 145, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 105, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/563.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'shadow-claw'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}}
       ]
   },
    564: { // Tirtouga
       name: 'tirtouga',
       displayName: 'Tirtouga',
       types: [{type: {name: 'water'}}, {type: {name: 'rock'}}],
       stats: [
       {base_stat: 54, stat: {name: 'hp'}},
        {base_stat: 78, stat: {name: 'attack'}},
        {base_stat: 103, stat: {name: 'defense'}},
        {base_stat: 53, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 22, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/564.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    565: { // Carracosta
       name: 'carracosta',
       displayName: 'Carracosta',
       types: [{type: {name: 'water'}}, {type: {name: 'rock'}}],
       stats: [
       {base_stat: 74, stat: {name: 'hp'}},
        {base_stat: 108, stat: {name: 'attack'}},
        {base_stat: 133, stat: {name: 'defense'}},
        {base_stat: 83, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 32, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/565.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    566: { // Archen
       name: 'archen',
       displayName: 'Archen',
       types: [{type: {name: 'rock'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 112, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 74, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/566.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'rock-throw'}},
        {move: {name: 'ancient-power'}}
       ]
   },
    567: { // Archeops
       name: 'archeops',
       displayName: 'Archeops',
       types: [{type: {name: 'rock'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 140, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 112, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 110, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/567.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'rock-throw'}},
        {move: {name: 'ancient-power'}}
       ]
   },
    568: { // Trubbish
       name: 'trubbish',
       displayName: 'Trubbish',
       types: [{type: {name: 'poison'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 62, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 62, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/568.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}},
        {move: {name: 'pound'}}
       ]
   },
    569: { // Garbodor
       name: 'garbodor',
       displayName: 'Garbodor',
       types: [{type: {name: 'poison'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 82, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 82, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/569.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}},
        {move: {name: 'pound'}}
       ]
   },
    570: { // Zorua
       name: 'zorua',
       displayName: 'Zorua',
       types: [{type: {name: 'dark'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/570.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'scratch'}},
        {move: {name: 'leer'}}
       ]
   },
    571: { // Zoroark
       name: 'zoroark',
       displayName: 'Zoroark',
       types: [{type: {name: 'dark'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 105, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 120, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 105, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/571.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'night-slash'}},
        {move: {name: 'foul-play'}}
       ]
   },
    572: { // Minccino
       name: 'minccino',
       displayName: 'Minccino',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/572.png'
       },
       moves: [
       {move: {name: 'swift'}},
        {move: {name: 'take-down'}},
        {move: {name: 'pound'}},
        {move: {name: 'double-slap'}}
       ]
   },
    573: { // Cinccino
       name: 'cinccino',
       displayName: 'Cinccino',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 115, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/573.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}}
       ]
   },
    574: { // Gothita
       name: 'gothita',
       displayName: 'Gothita',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/574.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    575: { // Gothorita
       name: 'gothorita',
       displayName: 'Gothorita',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/575.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    576: { // Gothitelle
       name: 'gothitelle',
       displayName: 'Gothitelle',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 110, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/576.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    577: { // Solosis
       name: 'solosis',
       displayName: 'Solosis',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 105, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 20, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/577.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    578: { // Duosion
       name: 'duosion',
       displayName: 'Duosion',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 125, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/578.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    579: { // Reuniclus
       name: 'reuniclus',
       displayName: 'Reuniclus',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 110, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 125, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/579.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    580: { // Ducklett
       name: 'ducklett',
       displayName: 'Ducklett',
       types: [{type: {name: 'water'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 62, stat: {name: 'hp'}},
        {base_stat: 44, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 44, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/580.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}},
        {move: {name: 'aerial-ace'}}
       ]
   },
    581: { // Swanna
       name: 'swanna',
       displayName: 'Swanna',
       types: [{type: {name: 'water'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 87, stat: {name: 'attack'}},
        {base_stat: 63, stat: {name: 'defense'}},
        {base_stat: 87, stat: {name: 'special-attack'}},
        {base_stat: 63, stat: {name: 'special-defense'}},
        {base_stat: 98, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/581.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    582: { // Vanillite
       name: 'vanillite',
       displayName: 'Vanillite',
       types: [{type: {name: 'ice'}}],
       stats: [
       {base_stat: 36, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 44, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/582.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-shard'}},
        {move: {name: 'icy-wind'}}
       ]
   },
    583: { // Vanillish
       name: 'vanillish',
       displayName: 'Vanillish',
       types: [{type: {name: 'ice'}}],
       stats: [
       {base_stat: 51, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 59, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/583.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'icy-wind'}},
        {move: {name: 'mist'}}
       ]
   },
    584: { // Vanilluxe
       name: 'vanilluxe',
       displayName: 'Vanilluxe',
       types: [{type: {name: 'ice'}}],
       stats: [
       {base_stat: 71, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 110, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 79, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/584.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'icy-wind'}},
        {move: {name: 'mist'}}
       ]
   },
    585: { // Deerling
       name: 'deerling',
       displayName: 'Deerling',
       types: [{type: {name: 'normal'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/585.png'
       },
       moves: [
       {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}},
        {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}}
       ]
   },
    586: { // Sawsbuck
       name: 'sawsbuck',
       displayName: 'Sawsbuck',
       types: [{type: {name: 'normal'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/586.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}}
       ]
   },
    587: { // Emolga
       name: 'emolga',
       displayName: 'Emolga',
       types: [{type: {name: 'electric'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 103, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/587.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    588: { // Karrablast
       name: 'karrablast',
       displayName: 'Karrablast',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/588.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    589: { // Escavalier
       name: 'escavalier',
       displayName: 'Escavalier',
       types: [{type: {name: 'bug'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 135, stat: {name: 'attack'}},
        {base_stat: 105, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 105, stat: {name: 'special-defense'}},
        {base_stat: 20, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/589.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    590: { // Foongus
       name: 'foongus',
       displayName: 'Foongus',
       types: [{type: {name: 'grass'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 69, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 15, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/590.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    591: { // Amoonguss
       name: 'amoonguss',
       displayName: 'Amoonguss',
       types: [{type: {name: 'grass'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 114, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/591.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    592: { // Frillish
       name: 'frillish',
       displayName: 'Frillish',
       types: [{type: {name: 'water'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/592.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    593: { // Jellicent
       name: 'jellicent',
       displayName: 'Jellicent',
       types: [{type: {name: 'water'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 105, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/593.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    594: { // Alomomola
       name: 'alomomola',
       displayName: 'Alomomola',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 165, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/594.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'scald'}},
        {move: {name: 'pound'}}
       ]
   },
    595: { // Joltik
       name: 'joltik',
       displayName: 'Joltik',
       types: [{type: {name: 'bug'}}, {type: {name: 'electric'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 47, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 57, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/595.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'leech-life'}}
       ]
   },
    596: { // Galvantula
       name: 'galvantula',
       displayName: 'Galvantula',
       types: [{type: {name: 'bug'}}, {type: {name: 'electric'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 77, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 97, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 108, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/596.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'leech-life'}}
       ]
   },
    597: { // Ferroseed
       name: 'ferroseed',
       displayName: 'Ferroseed',
       types: [{type: {name: 'grass'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 44, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 91, stat: {name: 'defense'}},
        {base_stat: 24, stat: {name: 'special-attack'}},
        {base_stat: 86, stat: {name: 'special-defense'}},
        {base_stat: 10, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/597.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}}
       ]
   },
    598: { // Ferrothorn
       name: 'ferrothorn',
       displayName: 'Ferrothorn',
       types: [{type: {name: 'grass'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 74, stat: {name: 'hp'}},
        {base_stat: 94, stat: {name: 'attack'}},
        {base_stat: 131, stat: {name: 'defense'}},
        {base_stat: 54, stat: {name: 'special-attack'}},
        {base_stat: 116, stat: {name: 'special-defense'}},
        {base_stat: 20, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/598.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}}
       ]
   },
    599: { // Klink
       name: 'klink',
       displayName: 'Klink',
       types: [{type: {name: 'steel'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/599.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'vice-grip'}},
        {move: {name: 'bind'}}
       ]
   },
    600: { // Klang
       name: 'klang',
       displayName: 'Klang',
       types: [{type: {name: 'steel'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/600.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'vice-grip'}},
        {move: {name: 'bind'}}
       ]
   },
    601: { // Klinklang
       name: 'klinklang',
       displayName: 'Klinklang',
       types: [{type: {name: 'steel'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 115, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/601.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'vice-grip'}},
        {move: {name: 'bind'}}
       ]
   },
    602: { // Tynamo
       name: 'tynamo',
       displayName: 'Tynamo',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 35, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/602.png'
       },
       moves: [
       {move: {name: 'spark'}},
        {move: {name: 'tackle'}},
        {move: {name: 'thunder-wave'}},
        {move: {name: 'charge-beam'}}
       ]
   },
    603: { // Eelektrik
       name: 'eelektrik',
       displayName: 'Eelektrik',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/603.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    604: { // Eelektross
       name: 'eelektross',
       displayName: 'Eelektross',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 105, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/604.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'thunder-punch'}}
       ]
   },
    605: { // Elgyem
       name: 'elgyem',
       displayName: 'Elgyem',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/605.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'zen-headbutt'}},
        {move: {name: 'confusion'}}
       ]
   },
    606: { // Beheeyem
       name: 'beheeyem',
       displayName: 'Beheeyem',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 125, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/606.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    607: { // Litwick
       name: 'litwick',
       displayName: 'Litwick',
       types: [{type: {name: 'ghost'}}, {type: {name: 'fire'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 20, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/607.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    608: { // Lampent
       name: 'lampent',
       displayName: 'Lampent',
       types: [{type: {name: 'ghost'}}, {type: {name: 'fire'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/608.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    609: { // Chandelure
       name: 'chandelure',
       displayName: 'Chandelure',
       types: [{type: {name: 'ghost'}}, {type: {name: 'fire'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 145, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/609.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    610: { // Axew
       name: 'axew',
       displayName: 'Axew',
       types: [{type: {name: 'dragon'}}],
       stats: [
       {base_stat: 46, stat: {name: 'hp'}},
        {base_stat: 87, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 57, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/610.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    611: { // Fraxure
       name: 'fraxure',
       displayName: 'Fraxure',
       types: [{type: {name: 'dragon'}}],
       stats: [
       {base_stat: 66, stat: {name: 'hp'}},
        {base_stat: 117, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 67, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/611.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    612: { // Haxorus
       name: 'haxorus',
       displayName: 'Haxorus',
       types: [{type: {name: 'dragon'}}],
       stats: [
       {base_stat: 76, stat: {name: 'hp'}},
        {base_stat: 147, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 97, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/612.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    613: { // Cubchoo
       name: 'cubchoo',
       displayName: 'Cubchoo',
       types: [{type: {name: 'ice'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/613.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-punch'}},
        {move: {name: 'icy-wind'}}
       ]
   },
    614: { // Beartic
       name: 'beartic',
       displayName: 'Beartic',
       types: [{type: {name: 'ice'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 130, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/614.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-punch'}},
        {move: {name: 'icy-wind'}}
       ]
   },
    615: { // Cryogonal
       name: 'cryogonal',
       displayName: 'Cryogonal',
       types: [{type: {name: 'ice'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 135, stat: {name: 'special-defense'}},
        {base_stat: 105, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/615.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-shard'}},
        {move: {name: 'icy-wind'}}
       ]
   },
    616: { // Shelmet
       name: 'shelmet',
       displayName: 'Shelmet',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 25, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/616.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    617: { // Accelgor
       name: 'accelgor',
       displayName: 'Accelgor',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 145, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/617.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    618: { // Stunfisk
       name: 'stunfisk',
       displayName: 'Stunfisk',
       types: [{type: {name: 'ground'}}, {type: {name: 'electric'}}],
       stats: [
       {base_stat: 109, stat: {name: 'hp'}},
        {base_stat: 66, stat: {name: 'attack'}},
        {base_stat: 84, stat: {name: 'defense'}},
        {base_stat: 81, stat: {name: 'special-attack'}},
        {base_stat: 99, stat: {name: 'special-defense'}},
        {base_stat: 32, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/618.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    619: { // Mienfoo
       name: 'mienfoo',
       displayName: 'Mienfoo',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/619.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'aura-sphere'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}}
       ]
   },
    620: { // Mienshao
       name: 'mienshao',
       displayName: 'Mienshao',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 125, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 105, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/620.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'aura-sphere'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}}
       ]
   },
    621: { // Druddigon
       name: 'druddigon',
       displayName: 'Druddigon',
       types: [{type: {name: 'dragon'}}],
       stats: [
       {base_stat: 77, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 48, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/621.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    622: { // Golett
       name: 'golett',
       displayName: 'Golett',
       types: [{type: {name: 'ground'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 59, stat: {name: 'hp'}},
        {base_stat: 74, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/622.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    623: { // Golurk
       name: 'golurk',
       displayName: 'Golurk',
       types: [{type: {name: 'ground'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 89, stat: {name: 'hp'}},
        {base_stat: 124, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/623.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    624: { // Pawniard
       name: 'pawniard',
       displayName: 'Pawniard',
       types: [{type: {name: 'dark'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/624.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'night-slash'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'flash-cannon'}}
       ]
   },
    625: { // Bisharp
       name: 'bisharp',
       displayName: 'Bisharp',
       types: [{type: {name: 'dark'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 125, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/625.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'night-slash'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'flash-cannon'}}
       ]
   },
    626: { // Bouffalant
       name: 'bouffalant',
       displayName: 'Bouffalant',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 110, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/626.png'
       },
       moves: [
       {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'swords-dance'}},
        {move: {name: 'horn-attack'}}
       ]
   },
    627: { // Rufflet
       name: 'rufflet',
       displayName: 'Rufflet',
       types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 83, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 37, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/627.png'
       },
       moves: [
       {move: {name: 'body-slam'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}},
        {move: {name: 'aerial-ace'}}
       ]
   },
    628: { // Braviary
       name: 'braviary',
       displayName: 'Braviary',
       types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 123, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 57, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/628.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'swift'}}
       ]
   },
    629: { // Vullaby
       name: 'vullaby',
       displayName: 'Vullaby',
       types: [{type: {name: 'dark'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/629.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}}
       ]
   },
    630: { // Mandibuzz
       name: 'mandibuzz',
       displayName: 'Mandibuzz',
       types: [{type: {name: 'dark'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 110, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 105, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/630.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}}
       ]
   },
    631: { // Heatmor
       name: 'heatmor',
       displayName: 'Heatmor',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 97, stat: {name: 'attack'}},
        {base_stat: 66, stat: {name: 'defense'}},
        {base_stat: 105, stat: {name: 'special-attack'}},
        {base_stat: 66, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/631.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    632: { // Durant
       name: 'durant',
       displayName: 'Durant',
       types: [{type: {name: 'bug'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 58, stat: {name: 'hp'}},
        {base_stat: 109, stat: {name: 'attack'}},
        {base_stat: 112, stat: {name: 'defense'}},
        {base_stat: 48, stat: {name: 'special-attack'}},
        {base_stat: 48, stat: {name: 'special-defense'}},
        {base_stat: 109, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/632.png'
       },
       moves: [
       {move: {name: 'x-scissor'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}}
       ]
   },
    633: { // Deino
       name: 'deino',
       displayName: 'Deino',
       types: [{type: {name: 'dark'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 52, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 38, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/633.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'bite'}},
        {move: {name: 'dragon-pulse'}}
       ]
   },
    634: { // Zweilous
       name: 'zweilous',
       displayName: 'Zweilous',
       types: [{type: {name: 'dark'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 72, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 58, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/634.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'bite'}},
        {move: {name: 'dragon-pulse'}}
       ]
   },
    635: { // Hydreigon
       name: 'hydreigon',
       displayName: 'Hydreigon',
       types: [{type: {name: 'dark'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 92, stat: {name: 'hp'}},
        {base_stat: 105, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 125, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 98, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/635.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'bite'}},
        {move: {name: 'dragon-pulse'}}
       ]
   },
    636: { // Larvesta
       name: 'larvesta',
       displayName: 'Larvesta',
       types: [{type: {name: 'bug'}}, {type: {name: 'fire'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/636.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    637: { // Volcarona
       name: 'volcarona',
       displayName: 'Volcarona',
       types: [{type: {name: 'bug'}}, {type: {name: 'fire'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 135, stat: {name: 'special-attack'}},
        {base_stat: 105, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/637.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    638: { // Cobalion
       name: 'cobalion',
       displayName: 'Cobalion',
       types: [{type: {name: 'steel'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 91, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 129, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 72, stat: {name: 'special-defense'}},
        {base_stat: 108, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/638.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'metal-claw'}}
       ]
   },
    639: { // Terrakion
       name: 'terrakion',
       displayName: 'Terrakion',
       types: [{type: {name: 'rock'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 91, stat: {name: 'hp'}},
        {base_stat: 129, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 72, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 108, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/639.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'close-combat'}},
        {move: {name: 'aura-sphere'}}
       ]
   },
    640: { // Virizion
       name: 'virizion',
       displayName: 'Virizion',
       types: [{type: {name: 'grass'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 91, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 72, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 129, stat: {name: 'special-defense'}},
        {base_stat: 108, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/640.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    641: { // Tornadus Incarnate
       name: 'tornadus-incarnate',
       displayName: 'Tornadus Incarnate',
       types: [{type: {name: 'flying'}}],
       stats: [
       {base_stat: 79, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 125, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 111, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/641.png'
       },
       moves: [
       {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}},
        {move: {name: 'fly'}},
        {move: {name: 'hurricane'}}
       ]
   },
    642: { // Thundurus Incarnate
       name: 'thundurus-incarnate',
       displayName: 'Thundurus Incarnate',
       types: [{type: {name: 'electric'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 79, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 125, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 111, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/642.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'thunder-punch'}}
       ]
   },
    643: { // Reshiram
       name: 'reshiram',
       displayName: 'Reshiram',
       types: [{type: {name: 'dragon'}}, {type: {name: 'fire'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 150, stat: {name: 'special-attack'}},
        {base_stat: 120, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/643.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    644: { // Zekrom
       name: 'zekrom',
       displayName: 'Zekrom',
       types: [{type: {name: 'dragon'}}, {type: {name: 'electric'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 150, stat: {name: 'attack'}},
        {base_stat: 120, stat: {name: 'defense'}},
        {base_stat: 120, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/644.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    645: { // Landorus Incarnate
       name: 'landorus-incarnate',
       displayName: 'Landorus Incarnate',
       types: [{type: {name: 'ground'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 89, stat: {name: 'hp'}},
        {base_stat: 125, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 115, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 101, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/645.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    646: { // Kyurem
       name: 'kyurem',
       displayName: 'Kyurem',
       types: [{type: {name: 'dragon'}}, {type: {name: 'ice'}}],
       stats: [
       {base_stat: 125, stat: {name: 'hp'}},
        {base_stat: 130, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 130, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/646.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    647: { // Keldeo Ordinary
       name: 'keldeo-ordinary',
       displayName: 'Keldeo Ordinary',
       types: [{type: {name: 'water'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 91, stat: {name: 'hp'}},
        {base_stat: 72, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 129, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 108, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/647.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'aqua-tail'}},
        {move: {name: 'scald'}}
       ]
   },
    648: { // Meloetta Aria
       name: 'meloetta-aria',
       displayName: 'Meloetta Aria',
       types: [{type: {name: 'normal'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 77, stat: {name: 'attack'}},
        {base_stat: 77, stat: {name: 'defense'}},
        {base_stat: 128, stat: {name: 'special-attack'}},
        {base_stat: 128, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/648.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'swift'}},
        {move: {name: 'psychic'}}
       ]
   },
    649: { // Genesect
       name: 'genesect',
       displayName: 'Genesect',
       types: [{type: {name: 'bug'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 71, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 120, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 99, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/649.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'leech-life'}}
       ]
   },
    650: { // Chespin
       name: 'chespin',
       displayName: 'Chespin',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 56, stat: {name: 'hp'}},
        {base_stat: 61, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 48, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 38, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/650.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    651: { // Quilladin
       name: 'quilladin',
       displayName: 'Quilladin',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 61, stat: {name: 'hp'}},
        {base_stat: 78, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 56, stat: {name: 'special-attack'}},
        {base_stat: 58, stat: {name: 'special-defense'}},
        {base_stat: 57, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/651.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    652: { // Chesnaught
       name: 'chesnaught',
       displayName: 'Chesnaught',
       types: [{type: {name: 'grass'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 88, stat: {name: 'hp'}},
        {base_stat: 107, stat: {name: 'attack'}},
        {base_stat: 122, stat: {name: 'defense'}},
        {base_stat: 74, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 64, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/652.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    653: { // Fennekin
       name: 'fennekin',
       displayName: 'Fennekin',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 62, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/653.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    654: { // Braixen
       name: 'braixen',
       displayName: 'Braixen',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 59, stat: {name: 'hp'}},
        {base_stat: 59, stat: {name: 'attack'}},
        {base_stat: 58, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 73, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/654.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    655: { // Delphox
       name: 'delphox',
       displayName: 'Delphox',
       types: [{type: {name: 'fire'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 69, stat: {name: 'attack'}},
        {base_stat: 72, stat: {name: 'defense'}},
        {base_stat: 114, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 104, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/655.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    656: { // Froakie
       name: 'froakie',
       displayName: 'Froakie',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 41, stat: {name: 'hp'}},
        {base_stat: 56, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 62, stat: {name: 'special-attack'}},
        {base_stat: 44, stat: {name: 'special-defense'}},
        {base_stat: 71, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/656.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    657: { // Frogadier
       name: 'frogadier',
       displayName: 'Frogadier',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 54, stat: {name: 'hp'}},
        {base_stat: 63, stat: {name: 'attack'}},
        {base_stat: 52, stat: {name: 'defense'}},
        {base_stat: 83, stat: {name: 'special-attack'}},
        {base_stat: 56, stat: {name: 'special-defense'}},
        {base_stat: 97, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
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
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    659: { // Bunnelby
       name: 'bunnelby',
       displayName: 'Bunnelby',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 38, stat: {name: 'hp'}},
        {base_stat: 36, stat: {name: 'attack'}},
        {base_stat: 38, stat: {name: 'defense'}},
        {base_stat: 32, stat: {name: 'special-attack'}},
        {base_stat: 36, stat: {name: 'special-defense'}},
        {base_stat: 57, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/659.png'
       },
       moves: [
       {move: {name: 'take-down'}},
        {move: {name: 'double-slap'}},
        {move: {name: 'swords-dance'}},
        {move: {name: 'double-kick'}}
       ]
   },
    660: { // Diggersby
       name: 'diggersby',
       displayName: 'Diggersby',
       types: [{type: {name: 'normal'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 56, stat: {name: 'attack'}},
        {base_stat: 77, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 77, stat: {name: 'special-defense'}},
        {base_stat: 78, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}}
       ]
   },
    661: { // Fletchling
       name: 'fletchling',
       displayName: 'Fletchling',
       types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 43, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 38, stat: {name: 'special-defense'}},
        {base_stat: 62, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'swift'}},
        {move: {name: 'take-down'}},
        {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}}
       ]
   },
    662: { // Fletchinder
       name: 'fletchinder',
       displayName: 'Fletchinder',
       types: [{type: {name: 'fire'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 62, stat: {name: 'hp'}},
        {base_stat: 73, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 56, stat: {name: 'special-attack'}},
        {base_stat: 52, stat: {name: 'special-defense'}},
        {base_stat: 84, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    663: { // Talonflame
       name: 'talonflame',
       displayName: 'Talonflame',
       types: [{type: {name: 'fire'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 78, stat: {name: 'hp'}},
        {base_stat: 81, stat: {name: 'attack'}},
        {base_stat: 71, stat: {name: 'defense'}},
        {base_stat: 74, stat: {name: 'special-attack'}},
        {base_stat: 69, stat: {name: 'special-defense'}},
        {base_stat: 126, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/663.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    664: { // Scatterbug
       name: 'scatterbug',
       displayName: 'Scatterbug',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 38, stat: {name: 'hp'}},
        {base_stat: 35, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 27, stat: {name: 'special-attack'}},
        {base_stat: 25, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'bug-bite'}},
        {move: {name: 'tackle'}},
        {move: {name: 'stun-spore'}},
        {move: {name: 'string-shot'}}
       ]
   },
    665: { // Spewpa
       name: 'spewpa',
       displayName: 'Spewpa',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 22, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 27, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 29, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/665.png'
       },
       moves: [
       {move: {name: 'bug-bite'}},
        {move: {name: 'harden'}},
        {move: {name: 'protect'}},
        {move: {name: 'struggle-bug'}}
       ]
   },
    666: { // Vivillon
       name: 'vivillon',
       displayName: 'Vivillon',
       types: [{type: {name: 'bug'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 52, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 89, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'aerial-ace'}}
       ]
   },
    667: { // Litleo
       name: 'litleo',
       displayName: 'Litleo',
       types: [{type: {name: 'fire'}}, {type: {name: 'normal'}}],
       stats: [
       {base_stat: 62, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 58, stat: {name: 'defense'}},
        {base_stat: 73, stat: {name: 'special-attack'}},
        {base_stat: 54, stat: {name: 'special-defense'}},
        {base_stat: 72, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/667.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    668: { // Pyroar
       name: 'pyroar',
       displayName: 'Pyroar',
       types: [{type: {name: 'fire'}}, {type: {name: 'normal'}}],
       stats: [
       {base_stat: 86, stat: {name: 'hp'}},
        {base_stat: 68, stat: {name: 'attack'}},
        {base_stat: 72, stat: {name: 'defense'}},
        {base_stat: 109, stat: {name: 'special-attack'}},
        {base_stat: 66, stat: {name: 'special-defense'}},
        {base_stat: 106, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    669: { // Flabebe
       name: 'flabebe',
       displayName: 'Flabebe',
       types: [{type: {name: 'fairy'}}],
       stats: [
       {base_stat: 44, stat: {name: 'hp'}},
        {base_stat: 38, stat: {name: 'attack'}},
        {base_stat: 39, stat: {name: 'defense'}},
        {base_stat: 61, stat: {name: 'special-attack'}},
        {base_stat: 79, stat: {name: 'special-defense'}},
        {base_stat: 42, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'moonblast'}},
        {move: {name: 'dazzling-gleam'}},
        {move: {name: 'draining-kiss'}},
        {move: {name: 'fairy-wind'}}
       ]
   },
    670: { // Floette
       name: 'floette',
       displayName: 'Floette',
       types: [{type: {name: 'fairy'}}],
       stats: [
       {base_stat: 54, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 47, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 98, stat: {name: 'special-defense'}},
        {base_stat: 52, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'moonblast'}},
        {move: {name: 'dazzling-gleam'}},
        {move: {name: 'draining-kiss'}},
        {move: {name: 'fairy-wind'}}
       ]
   },
    671: { // Florges
       name: 'florges',
       displayName: 'Florges',
       types: [{type: {name: 'fairy'}}],
       stats: [
       {base_stat: 78, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 68, stat: {name: 'defense'}},
        {base_stat: 112, stat: {name: 'special-attack'}},
        {base_stat: 154, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'moonblast'}},
        {move: {name: 'dazzling-gleam'}},
        {move: {name: 'draining-kiss'}},
        {move: {name: 'petal-dance'}}
       ]
   },
    672: { // Skiddo
       name: 'skiddo',
       displayName: 'Skiddo',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 66, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 48, stat: {name: 'defense'}},
        {base_stat: 62, stat: {name: 'special-attack'}},
        {base_stat: 57, stat: {name: 'special-defense'}},
        {base_stat: 52, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/672.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    673: { // Gogoat
       name: 'gogoat',
       displayName: 'Gogoat',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 123, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 62, stat: {name: 'defense'}},
        {base_stat: 97, stat: {name: 'special-attack'}},
        {base_stat: 81, stat: {name: 'special-defense'}},
        {base_stat: 68, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    674: { // Pancham
       name: 'pancham',
       displayName: 'Pancham',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 67, stat: {name: 'hp'}},
        {base_stat: 82, stat: {name: 'attack'}},
        {base_stat: 62, stat: {name: 'defense'}},
        {base_stat: 46, stat: {name: 'special-attack'}},
        {base_stat: 48, stat: {name: 'special-defense'}},
        {base_stat: 43, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/674.png'
       },
       moves: [
       {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}},
        {move: {name: 'karate-chop'}},
        {move: {name: 'comet-punch'}}
       ]
   },
    675: { // Pangoro
       name: 'pangoro',
       displayName: 'Pangoro',
       types: [{type: {name: 'fighting'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 124, stat: {name: 'attack'}},
        {base_stat: 78, stat: {name: 'defense'}},
        {base_stat: 69, stat: {name: 'special-attack'}},
        {base_stat: 71, stat: {name: 'special-defense'}},
        {base_stat: 58, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/675.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}},
        {move: {name: 'focus-blast'}}
       ]
   },
    676: { // Furfrou
       name: 'furfrou',
       displayName: 'Furfrou',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 102, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'giga-impact'}},
        {move: {name: 'take-down'}},
        {move: {name: 'sand-attack'}},
        {move: {name: 'headbutt'}}
       ]
   },
    677: { // Espurr
       name: 'espurr',
       displayName: 'Espurr',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 62, stat: {name: 'hp'}},
        {base_stat: 48, stat: {name: 'attack'}},
        {base_stat: 54, stat: {name: 'defense'}},
        {base_stat: 63, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 68, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/677.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'zen-headbutt'}},
        {move: {name: 'confusion'}}
       ]
   },
    678: { // Meowstic Male
       name: 'meowstic-male',
       displayName: 'Meowstic Male',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 74, stat: {name: 'hp'}},
        {base_stat: 48, stat: {name: 'attack'}},
        {base_stat: 76, stat: {name: 'defense'}},
        {base_stat: 83, stat: {name: 'special-attack'}},
        {base_stat: 81, stat: {name: 'special-defense'}},
        {base_stat: 104, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/678.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'zen-headbutt'}},
        {move: {name: 'confusion'}}
       ]
   },
    679: { // Honedge
       name: 'honedge',
       displayName: 'Honedge',
       types: [{type: {name: 'steel'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 37, stat: {name: 'special-defense'}},
        {base_stat: 28, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'shadow-claw'}}
       ]
   },
    680: { // Doublade
       name: 'doublade',
       displayName: 'Doublade',
       types: [{type: {name: 'steel'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 59, stat: {name: 'hp'}},
        {base_stat: 110, stat: {name: 'attack'}},
        {base_stat: 150, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 49, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'shadow-claw'}}
       ]
   },
    681: { // Aegislash Shield
       name: 'aegislash-shield',
       displayName: 'Aegislash Shield',
       types: [{type: {name: 'steel'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 140, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 140, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'shadow-ball'}}
       ]
   },
    682: { // Spritzee
       name: 'spritzee',
       displayName: 'Spritzee',
       types: [{type: {name: 'fairy'}}],
       stats: [
       {base_stat: 78, stat: {name: 'hp'}},
        {base_stat: 52, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 63, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 23, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/682.png'
       },
       moves: [
       {move: {name: 'moonblast'}},
        {move: {name: 'dazzling-gleam'}},
        {move: {name: 'draining-kiss'}},
        {move: {name: 'fairy-wind'}}
       ]
   },
    683: { // Aromatisse
       name: 'aromatisse',
       displayName: 'Aromatisse',
       types: [{type: {name: 'fairy'}}],
       stats: [
       {base_stat: 101, stat: {name: 'hp'}},
        {base_stat: 72, stat: {name: 'attack'}},
        {base_stat: 72, stat: {name: 'defense'}},
        {base_stat: 99, stat: {name: 'special-attack'}},
        {base_stat: 89, stat: {name: 'special-defense'}},
        {base_stat: 29, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/683.png'
       },
       moves: [
       {move: {name: 'moonblast'}},
        {move: {name: 'dazzling-gleam'}},
        {move: {name: 'draining-kiss'}},
        {move: {name: 'fairy-wind'}}
       ]
   },
    684: { // Swirlix
       name: 'swirlix',
       displayName: 'Swirlix',
       types: [{type: {name: 'fairy'}}],
       stats: [
       {base_stat: 62, stat: {name: 'hp'}},
        {base_stat: 48, stat: {name: 'attack'}},
        {base_stat: 66, stat: {name: 'defense'}},
        {base_stat: 59, stat: {name: 'special-attack'}},
        {base_stat: 57, stat: {name: 'special-defense'}},
        {base_stat: 49, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/684.png'
       },
       moves: [
       {move: {name: 'dazzling-gleam'}},
        {move: {name: 'play-rough'}},
        {move: {name: 'draining-kiss'}},
        {move: {name: 'fairy-wind'}}
       ]
   },
    685: { // Slurpuff
       name: 'slurpuff',
       displayName: 'Slurpuff',
       types: [{type: {name: 'fairy'}}],
       stats: [
       {base_stat: 82, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 86, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 72, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/685.png'
       },
       moves: [
       {move: {name: 'dazzling-gleam'}},
        {move: {name: 'play-rough'}},
        {move: {name: 'draining-kiss'}},
        {move: {name: 'fairy-wind'}}
       ]
   },
    686: { // Inkay
       name: 'inkay',
       displayName: 'Inkay',
       types: [{type: {name: 'dark'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 53, stat: {name: 'hp'}},
        {base_stat: 54, stat: {name: 'attack'}},
        {base_stat: 53, stat: {name: 'defense'}},
        {base_stat: 37, stat: {name: 'special-attack'}},
        {base_stat: 46, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/686.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'night-slash'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'psychic'}}
       ]
   },
    687: { // Malamar
       name: 'malamar',
       displayName: 'Malamar',
       types: [{type: {name: 'dark'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 86, stat: {name: 'hp'}},
        {base_stat: 92, stat: {name: 'attack'}},
        {base_stat: 88, stat: {name: 'defense'}},
        {base_stat: 68, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 73, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'night-slash'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'psychic'}}
       ]
   },
    688: { // Binacle
       name: 'binacle',
       displayName: 'Binacle',
       types: [{type: {name: 'rock'}}, {type: {name: 'water'}}],
       stats: [
       {base_stat: 42, stat: {name: 'hp'}},
        {base_stat: 52, stat: {name: 'attack'}},
        {base_stat: 67, stat: {name: 'defense'}},
        {base_stat: 39, stat: {name: 'special-attack'}},
        {base_stat: 56, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/688.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'ancient-power'}},
        {move: {name: 'surf'}}
       ]
   },
    689: { // Barbaracle
       name: 'barbaracle',
       displayName: 'Barbaracle',
       types: [{type: {name: 'rock'}}, {type: {name: 'water'}}],
       stats: [
       {base_stat: 72, stat: {name: 'hp'}},
        {base_stat: 105, stat: {name: 'attack'}},
        {base_stat: 115, stat: {name: 'defense'}},
        {base_stat: 54, stat: {name: 'special-attack'}},
        {base_stat: 86, stat: {name: 'special-defense'}},
        {base_stat: 68, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'ancient-power'}},
        {move: {name: 'surf'}}
       ]
   },
    690: { // Skrelp
       name: 'skrelp',
       displayName: 'Skrelp',
       types: [{type: {name: 'poison'}}, {type: {name: 'water'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/690.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}},
        {move: {name: 'acid'}}
       ]
   },
    691: { // Dragalge
       name: 'dragalge',
       displayName: 'Dragalge',
       types: [{type: {name: 'poison'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 97, stat: {name: 'special-attack'}},
        {base_stat: 123, stat: {name: 'special-defense'}},
        {base_stat: 44, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}},
        {move: {name: 'acid'}}
       ]
   },
    692: { // Clauncher
       name: 'clauncher',
       displayName: 'Clauncher',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 53, stat: {name: 'attack'}},
        {base_stat: 62, stat: {name: 'defense'}},
        {base_stat: 58, stat: {name: 'special-attack'}},
        {base_stat: 63, stat: {name: 'special-defense'}},
        {base_stat: 44, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/692.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    693: { // Clawitzer
       name: 'clawitzer',
       displayName: 'Clawitzer',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 71, stat: {name: 'hp'}},
        {base_stat: 73, stat: {name: 'attack'}},
        {base_stat: 88, stat: {name: 'defense'}},
        {base_stat: 120, stat: {name: 'special-attack'}},
        {base_stat: 89, stat: {name: 'special-defense'}},
        {base_stat: 59, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    694: { // Helioptile
       name: 'helioptile',
       displayName: 'Helioptile',
       types: [{type: {name: 'electric'}}, {type: {name: 'normal'}}],
       stats: [
       {base_stat: 44, stat: {name: 'hp'}},
        {base_stat: 38, stat: {name: 'attack'}},
        {base_stat: 33, stat: {name: 'defense'}},
        {base_stat: 61, stat: {name: 'special-attack'}},
        {base_stat: 43, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/694.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'swift'}},
        {move: {name: 'pound'}}
       ]
   },
    695: { // Heliolisk
       name: 'heliolisk',
       displayName: 'Heliolisk',
       types: [{type: {name: 'electric'}}, {type: {name: 'normal'}}],
       stats: [
       {base_stat: 62, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 52, stat: {name: 'defense'}},
        {base_stat: 109, stat: {name: 'special-attack'}},
        {base_stat: 94, stat: {name: 'special-defense'}},
        {base_stat: 109, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'thunder-punch'}}
       ]
   },
    696: { // Tyrunt
       name: 'tyrunt',
       displayName: 'Tyrunt',
       types: [{type: {name: 'rock'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 58, stat: {name: 'hp'}},
        {base_stat: 89, stat: {name: 'attack'}},
        {base_stat: 77, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 48, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'rock-throw'}},
        {move: {name: 'ancient-power'}}
       ]
   },
    697: { // Tyrantrum
       name: 'tyrantrum',
       displayName: 'Tyrantrum',
       types: [{type: {name: 'rock'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 82, stat: {name: 'hp'}},
        {base_stat: 121, stat: {name: 'attack'}},
        {base_stat: 119, stat: {name: 'defense'}},
        {base_stat: 69, stat: {name: 'special-attack'}},
        {base_stat: 59, stat: {name: 'special-defense'}},
        {base_stat: 71, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/697.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'ancient-power'}},
        {move: {name: 'dragon-claw'}}
       ]
   },
    698: { // Amaura
       name: 'amaura',
       displayName: 'Amaura',
       types: [{type: {name: 'rock'}}, {type: {name: 'ice'}}],
       stats: [
       {base_stat: 77, stat: {name: 'hp'}},
        {base_stat: 59, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 67, stat: {name: 'special-attack'}},
        {base_stat: 63, stat: {name: 'special-defense'}},
        {base_stat: 46, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'rock-throw'}},
        {move: {name: 'ancient-power'}}
       ]
   },
    699: { // Aurorus
       name: 'aurorus',
       displayName: 'Aurorus',
       types: [{type: {name: 'rock'}}, {type: {name: 'ice'}}],
       stats: [
       {base_stat: 123, stat: {name: 'hp'}},
        {base_stat: 77, stat: {name: 'attack'}},
        {base_stat: 72, stat: {name: 'defense'}},
        {base_stat: 99, stat: {name: 'special-attack'}},
        {base_stat: 92, stat: {name: 'special-defense'}},
        {base_stat: 58, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'rock-throw'}},
        {move: {name: 'ancient-power'}}
       ]
   },
    700: { // Sylveon
       name: 'sylveon',
       displayName: 'Sylveon',
       types: [{type: {name: 'fairy'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 110, stat: {name: 'special-attack'}},
        {base_stat: 130, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'moonblast'}},
        {move: {name: 'dazzling-gleam'}},
        {move: {name: 'play-rough'}},
        {move: {name: 'draining-kiss'}}
       ]
   },
    701: { // Hawlucha
       name: 'hawlucha',
       displayName: 'Hawlucha',
       types: [{type: {name: 'fighting'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 78, stat: {name: 'hp'}},
        {base_stat: 92, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 74, stat: {name: 'special-attack'}},
        {base_stat: 63, stat: {name: 'special-defense'}},
        {base_stat: 118, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/701.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}},
        {move: {name: 'focus-blast'}}
       ]
   },
    702: { // Dedenne
       name: 'dedenne',
       displayName: 'Dedenne',
       types: [{type: {name: 'electric'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 67, stat: {name: 'hp'}},
        {base_stat: 58, stat: {name: 'attack'}},
        {base_stat: 57, stat: {name: 'defense'}},
        {base_stat: 81, stat: {name: 'special-attack'}},
        {base_stat: 67, stat: {name: 'special-defense'}},
        {base_stat: 101, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/702.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'thunder-punch'}}
       ]
   },
    703: { // Carbink
       name: 'carbink',
       displayName: 'Carbink',
       types: [{type: {name: 'rock'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 150, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 150, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/703.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'rock-throw'}}
       ]
   },
    704: { // Goomy
       name: 'goomy',
       displayName: 'Goomy',
       types: [{type: {name: 'dragon'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/704.png'
       },
       moves: [
       {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}},
        {move: {name: 'dragon-breath'}}
       ]
   },
    705: { // Sliggoo
       name: 'sliggoo',
       displayName: 'Sliggoo',
       types: [{type: {name: 'dragon'}}],
       stats: [
       {base_stat: 68, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 53, stat: {name: 'defense'}},
        {base_stat: 83, stat: {name: 'special-attack'}},
        {base_stat: 113, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}},
        {move: {name: 'dragon-breath'}}
       ]
   },
    706: { // Goodra
       name: 'goodra',
       displayName: 'Goodra',
       types: [{type: {name: 'dragon'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 110, stat: {name: 'special-attack'}},
        {base_stat: 150, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    707: { // Klefki
       name: 'klefki',
       displayName: 'Klefki',
       types: [{type: {name: 'steel'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 57, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 91, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 87, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/707.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'dazzling-gleam'}},
        {move: {name: 'play-rough'}}
       ]
   },
    708: { // Phantump
       name: 'phantump',
       displayName: 'Phantump',
       types: [{type: {name: 'ghost'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 43, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 48, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 38, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/708.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'shadow-claw'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}}
       ]
   },
    709: { // Trevenant
       name: 'trevenant',
       displayName: 'Trevenant',
       types: [{type: {name: 'ghost'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 110, stat: {name: 'attack'}},
        {base_stat: 76, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 82, stat: {name: 'special-defense'}},
        {base_stat: 56, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'shadow-claw'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}}
       ]
   },
    710: { // Pumpkaboo Average
       name: 'pumpkaboo-average',
       displayName: 'Pumpkaboo Average',
       types: [{type: {name: 'ghost'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 49, stat: {name: 'hp'}},
        {base_stat: 66, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 44, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 51, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/710.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'confuse-ray'}},
        {move: {name: 'solar-beam'}}
       ]
   },
    711: { // Gourgeist Average
       name: 'gourgeist-average',
       displayName: 'Gourgeist Average',
       types: [{type: {name: 'ghost'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 122, stat: {name: 'defense'}},
        {base_stat: 58, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 84, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'confuse-ray'}},
        {move: {name: 'solar-beam'}}
       ]
   },
    712: { // Bergmite
       name: 'bergmite',
       displayName: 'Bergmite',
       types: [{type: {name: 'ice'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 69, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 32, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 28, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/712.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-shard'}},
        {move: {name: 'icy-wind'}}
       ]
   },
    713: { // Avalugg
       name: 'avalugg',
       displayName: 'Avalugg',
       types: [{type: {name: 'ice'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 117, stat: {name: 'attack'}},
        {base_stat: 184, stat: {name: 'defense'}},
        {base_stat: 44, stat: {name: 'special-attack'}},
        {base_stat: 46, stat: {name: 'special-defense'}},
        {base_stat: 28, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'icy-wind'}},
        {move: {name: 'tackle'}}
       ]
   },
    714: { // Noibat
       name: 'noibat',
       displayName: 'Noibat',
       types: [{type: {name: 'flying'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}},
        {move: {name: 'fly'}},
        {move: {name: 'hurricane'}}
       ]
   },
    715: { // Noivern
       name: 'noivern',
       displayName: 'Noivern',
       types: [{type: {name: 'flying'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 97, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 123, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}},
        {move: {name: 'fly'}},
        {move: {name: 'hurricane'}}
       ]
   },
    716: { // Xerneas
       name: 'xerneas',
       displayName: 'Xerneas',
       types: [{type: {name: 'fairy'}}],
       stats: [
       {base_stat: 126, stat: {name: 'hp'}},
        {base_stat: 131, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 131, stat: {name: 'special-attack'}},
        {base_stat: 98, stat: {name: 'special-defense'}},
        {base_stat: 99, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'moonblast'}},
        {move: {name: 'dazzling-gleam'}},
        {move: {name: 'play-rough'}},
        {move: {name: 'draining-kiss'}}
       ]
   },
    717: { // Yveltal
       name: 'yveltal',
       displayName: 'Yveltal',
       types: [{type: {name: 'dark'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 126, stat: {name: 'hp'}},
        {base_stat: 131, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 131, stat: {name: 'special-attack'}},
        {base_stat: 98, stat: {name: 'special-defense'}},
        {base_stat: 99, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}}
       ]
   },
    718: { // Zygarde 50
       name: 'zygarde-50',
       displayName: 'Zygarde 50',
       types: [{type: {name: 'dragon'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 108, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 121, stat: {name: 'defense'}},
        {base_stat: 81, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}},
        {move: {name: 'dragon-breath'}}
       ]
   },
    719: { // Diancie
       name: 'diancie',
       displayName: 'Diancie',
       types: [{type: {name: 'rock'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 150, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 150, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'rock-throw'}}
       ]
   },
    720: { // Hoopa
       name: 'hoopa',
       displayName: 'Hoopa',
       types: [{type: {name: 'psychic'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 110, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 150, stat: {name: 'special-attack'}},
        {base_stat: 130, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/720.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    721: { // Volcanion
       name: 'volcanion',
       displayName: 'Volcanion',
       types: [{type: {name: 'fire'}}, {type: {name: 'water'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 110, stat: {name: 'attack'}},
        {base_stat: 120, stat: {name: 'defense'}},
        {base_stat: 130, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'hydro-pump'}}
       ]
   },
    722: { // Rowlet
       name: 'rowlet',
       displayName: 'Rowlet',
       types: [{type: {name: 'grass'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 68, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 42, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/722.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    723: { // Dartrix
       name: 'dartrix',
       displayName: 'Dartrix',
       types: [{type: {name: 'grass'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 78, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 52, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/723.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    724: { // Decidueye
       name: 'decidueye',
       displayName: 'Decidueye',
       types: [{type: {name: 'grass'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 78, stat: {name: 'hp'}},
        {base_stat: 107, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/724.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    725: { // Litten
       name: 'litten',
       displayName: 'Litten',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/725.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    726: { // Torracat
       name: 'torracat',
       displayName: 'Torracat',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/726.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    727: { // Incineroar
       name: 'incineroar',
       displayName: 'Incineroar',
       types: [{type: {name: 'fire'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/727.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    728: { // Popplio
       name: 'popplio',
       displayName: 'Popplio',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 54, stat: {name: 'attack'}},
        {base_stat: 54, stat: {name: 'defense'}},
        {base_stat: 66, stat: {name: 'special-attack'}},
        {base_stat: 56, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/728.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    729: { // Brionne
       name: 'brionne',
       displayName: 'Brionne',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 69, stat: {name: 'attack'}},
        {base_stat: 69, stat: {name: 'defense'}},
        {base_stat: 91, stat: {name: 'special-attack'}},
        {base_stat: 81, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/729.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    730: { // Primarina
       name: 'primarina',
       displayName: 'Primarina',
       types: [{type: {name: 'water'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 74, stat: {name: 'attack'}},
        {base_stat: 74, stat: {name: 'defense'}},
        {base_stat: 126, stat: {name: 'special-attack'}},
        {base_stat: 116, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/730.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    731: { // Pikipek
       name: 'pikipek',
       displayName: 'Pikipek',
       types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 35, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 30, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/731.png'
       },
       moves: [
       {move: {name: 'take-down'}},
        {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}},
        {move: {name: 'fly'}}
       ]
   },
    732: { // Trumbeak
       name: 'trumbeak',
       displayName: 'Trumbeak',
       types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/732.png'
       },
       moves: [
       {move: {name: 'swift'}},
        {move: {name: 'take-down'}},
        {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}}
       ]
   },
    733: { // Toucannon
       name: 'toucannon',
       displayName: 'Toucannon',
       types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/733.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}}
       ]
   },
    734: { // Yungoos
       name: 'yungoos',
       displayName: 'Yungoos',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 48, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 30, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/734.png'
       },
       moves: [
       {move: {name: 'take-down'}},
        {move: {name: 'sand-attack'}},
        {move: {name: 'tackle'}},
        {move: {name: 'thrash'}}
       ]
   },
    735: { // Gumshoos
       name: 'gumshoos',
       displayName: 'Gumshoos',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 88, stat: {name: 'hp'}},
        {base_stat: 110, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/735.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}}
       ]
   },
    736: { // Grubbin
       name: 'grubbin',
       displayName: 'Grubbin',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 47, stat: {name: 'hp'}},
        {base_stat: 62, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 46, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/736.png'
       },
       moves: [
       {move: {name: 'x-scissor'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'vice-grip'}},
        {move: {name: 'bite'}}
       ]
   },
    737: { // Charjabug
       name: 'charjabug',
       displayName: 'Charjabug',
       types: [{type: {name: 'bug'}}, {type: {name: 'electric'}}],
       stats: [
       {base_stat: 57, stat: {name: 'hp'}},
        {base_stat: 82, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 36, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/737.png'
       },
       moves: [
       {move: {name: 'x-scissor'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}}
       ]
   },
    738: { // Vikavolt
       name: 'vikavolt',
       displayName: 'Vikavolt',
       types: [{type: {name: 'bug'}}, {type: {name: 'electric'}}],
       stats: [
       {base_stat: 77, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 145, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 43, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/738.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    739: { // Crabrawler
       name: 'crabrawler',
       displayName: 'Crabrawler',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 47, stat: {name: 'hp'}},
        {base_stat: 82, stat: {name: 'attack'}},
        {base_stat: 57, stat: {name: 'defense'}},
        {base_stat: 42, stat: {name: 'special-attack'}},
        {base_stat: 47, stat: {name: 'special-defense'}},
        {base_stat: 63, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/739.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'focus-blast'}},
        {move: {name: 'slam'}}
       ]
   },
    740: { // Crabominable
       name: 'crabominable',
       displayName: 'Crabominable',
       types: [{type: {name: 'fighting'}}, {type: {name: 'ice'}}],
       stats: [
       {base_stat: 97, stat: {name: 'hp'}},
        {base_stat: 132, stat: {name: 'attack'}},
        {base_stat: 77, stat: {name: 'defense'}},
        {base_stat: 62, stat: {name: 'special-attack'}},
        {base_stat: 67, stat: {name: 'special-defense'}},
        {base_stat: 43, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/740.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'focus-blast'}},
        {move: {name: 'ice-beam'}}
       ]
   },
    741: { // Oricorio Baile
       name: 'oricorio-baile',
       displayName: 'Oricorio Baile',
       types: [{type: {name: 'fire'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 98, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 93, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/741.png'
       },
       moves: [
       {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}},
        {move: {name: 'fly'}},
        {move: {name: 'hurricane'}}
       ]
   },
    742: { // Cutiefly
       name: 'cutiefly',
       displayName: 'Cutiefly',
       types: [{type: {name: 'bug'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 84, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/742.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    743: { // Ribombee
       name: 'ribombee',
       displayName: 'Ribombee',
       types: [{type: {name: 'bug'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 124, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/743.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    744: { // Rockruff
       name: 'rockruff',
       displayName: 'Rockruff',
       types: [{type: {name: 'rock'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/744.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'rock-throw'}},
        {move: {name: 'sand-attack'}}
       ]
   },
    745: { // Lycanroc Midday
       name: 'lycanroc-midday',
       displayName: 'Lycanroc Midday',
       types: [{type: {name: 'rock'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 112, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/745.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'rock-throw'}},
        {move: {name: 'sand-attack'}}
       ]
   },
    746: { // Wishiwashi Solo
       name: 'wishiwashi-solo',
       displayName: 'Wishiwashi Solo',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 20, stat: {name: 'attack'}},
        {base_stat: 20, stat: {name: 'defense'}},
        {base_stat: 25, stat: {name: 'special-attack'}},
        {base_stat: 25, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/746.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    747: { // Mareanie
       name: 'mareanie',
       displayName: 'Mareanie',
       types: [{type: {name: 'poison'}}, {type: {name: 'water'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 53, stat: {name: 'attack'}},
        {base_stat: 62, stat: {name: 'defense'}},
        {base_stat: 43, stat: {name: 'special-attack'}},
        {base_stat: 52, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/747.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}}
       ]
   },
    748: { // Toxapex
       name: 'toxapex',
       displayName: 'Toxapex',
       types: [{type: {name: 'poison'}}, {type: {name: 'water'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 63, stat: {name: 'attack'}},
        {base_stat: 152, stat: {name: 'defense'}},
        {base_stat: 53, stat: {name: 'special-attack'}},
        {base_stat: 142, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/748.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}}
       ]
   },
    749: { // Mudbray
       name: 'mudbray',
       displayName: 'Mudbray',
       types: [{type: {name: 'ground'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/749.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'bulldoze'}},
        {move: {name: 'stomp'}}
       ]
   },
    750: { // Mudsdale
       name: 'mudsdale',
       displayName: 'Mudsdale',
       types: [{type: {name: 'ground'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 125, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/750.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'bulldoze'}},
        {move: {name: 'mud-shot'}}
       ]
   },
    751: { // Dewpider
       name: 'dewpider',
       displayName: 'Dewpider',
       types: [{type: {name: 'water'}}, {type: {name: 'bug'}}],
       stats: [
       {base_stat: 38, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 52, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 72, stat: {name: 'special-defense'}},
        {base_stat: 27, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/751.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    752: { // Araquanid
       name: 'araquanid',
       displayName: 'Araquanid',
       types: [{type: {name: 'water'}}, {type: {name: 'bug'}}],
       stats: [
       {base_stat: 68, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 92, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 132, stat: {name: 'special-defense'}},
        {base_stat: 42, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/752.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    753: { // Fomantis
       name: 'fomantis',
       displayName: 'Fomantis',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/753.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    754: { // Lurantis
       name: 'lurantis',
       displayName: 'Lurantis',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 105, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/754.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    755: { // Morelull
       name: 'morelull',
       displayName: 'Morelull',
       types: [{type: {name: 'grass'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 35, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 15, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/755.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'moonblast'}},
        {move: {name: 'dazzling-gleam'}}
       ]
   },
    756: { // Shiinotic
       name: 'shiinotic',
       displayName: 'Shiinotic',
       types: [{type: {name: 'grass'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/756.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'moonblast'}},
        {move: {name: 'dazzling-gleam'}}
       ]
   },
    757: { // Salandit
       name: 'salandit',
       displayName: 'Salandit',
       types: [{type: {name: 'poison'}}, {type: {name: 'fire'}}],
       stats: [
       {base_stat: 48, stat: {name: 'hp'}},
        {base_stat: 44, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 71, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 77, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/757.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}}
       ]
   },
    758: { // Salazzle
       name: 'salazzle',
       displayName: 'Salazzle',
       types: [{type: {name: 'poison'}}, {type: {name: 'fire'}}],
       stats: [
       {base_stat: 68, stat: {name: 'hp'}},
        {base_stat: 64, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 111, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 117, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/758.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}}
       ]
   },
    759: { // Stufful
       name: 'stufful',
       displayName: 'Stufful',
       types: [{type: {name: 'normal'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/759.png'
       },
       moves: [
       {move: {name: 'take-down'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'focus-blast'}},
        {move: {name: 'tackle'}}
       ]
   },
    760: { // Bewear
       name: 'bewear',
       displayName: 'Bewear',
       types: [{type: {name: 'normal'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 120, stat: {name: 'hp'}},
        {base_stat: 125, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/760.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}}
       ]
   },
    761: { // Bounsweet
       name: 'bounsweet',
       displayName: 'Bounsweet',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 42, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 38, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 38, stat: {name: 'special-defense'}},
        {base_stat: 32, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/761.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    762: { // Steenee
       name: 'steenee',
       displayName: 'Steenee',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 52, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 48, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 48, stat: {name: 'special-defense'}},
        {base_stat: 62, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/762.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    763: { // Tsareena
       name: 'tsareena',
       displayName: 'Tsareena',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 72, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 98, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 98, stat: {name: 'special-defense'}},
        {base_stat: 72, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/763.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    764: { // Comfey
       name: 'comfey',
       displayName: 'Comfey',
       types: [{type: {name: 'fairy'}}],
       stats: [
       {base_stat: 51, stat: {name: 'hp'}},
        {base_stat: 52, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 82, stat: {name: 'special-attack'}},
        {base_stat: 110, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/764.png'
       },
       moves: [
       {move: {name: 'dazzling-gleam'}},
        {move: {name: 'play-rough'}},
        {move: {name: 'draining-kiss'}},
        {move: {name: 'vine-whip'}}
       ]
   },
    765: { // Oranguru
       name: 'oranguru',
       displayName: 'Oranguru',
       types: [{type: {name: 'normal'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 110, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/765.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'swift'}}
       ]
   },
    766: { // Passimian
       name: 'passimian',
       displayName: 'Passimian',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/766.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}},
        {move: {name: 'focus-blast'}}
       ]
   },
    767: { // Wimpod
       name: 'wimpod',
       displayName: 'Wimpod',
       types: [{type: {name: 'bug'}}, {type: {name: 'water'}}],
       stats: [
       {base_stat: 25, stat: {name: 'hp'}},
        {base_stat: 35, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 20, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/767.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'surf'}},
        {move: {name: 'scald'}}
       ]
   },
    768: { // Golisopod
       name: 'golisopod',
       displayName: 'Golisopod',
       types: [{type: {name: 'bug'}}, {type: {name: 'water'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 125, stat: {name: 'attack'}},
        {base_stat: 140, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/768.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    769: { // Sandygast
       name: 'sandygast',
       displayName: 'Sandygast',
       types: [{type: {name: 'ghost'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 15, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/769.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    770: { // Palossand
       name: 'palossand',
       displayName: 'Palossand',
       types: [{type: {name: 'ghost'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 110, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/770.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    771: { // Pyukumuku
       name: 'pyukumuku',
       displayName: 'Pyukumuku',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 130, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 130, stat: {name: 'special-defense'}},
        {base_stat: 5, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/771.png'
       },
       moves: [
       {move: {name: 'counter'}},
        {move: {name: 'toxic'}},
        {move: {name: 'recover'}},
        {move: {name: 'harden'}}
       ]
   },
    772: { // Type: Null
       name: 'type-null',
       displayName: 'Type: Null',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 59, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/772.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}}
       ]
   },
    773: { // Silvally
       name: 'silvally',
       displayName: 'Silvally',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/773.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}}
       ]
   },
    774: { // Minior Red Meteor
       name: 'minior-red-meteor',
       displayName: 'Minior Red Meteor',
       types: [{type: {name: 'rock'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/774.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'ancient-power'}}
       ]
   },
    775: { // Komala
       name: 'komala',
       displayName: 'Komala',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/775.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}}
       ]
   },
    776: { // Turtonator
       name: 'turtonator',
       displayName: 'Turtonator',
       types: [{type: {name: 'fire'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 78, stat: {name: 'attack'}},
        {base_stat: 135, stat: {name: 'defense'}},
        {base_stat: 91, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 36, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/776.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    777: { // Togedemaru
       name: 'togedemaru',
       displayName: 'Togedemaru',
       types: [{type: {name: 'electric'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 98, stat: {name: 'attack'}},
        {base_stat: 63, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 73, stat: {name: 'special-defense'}},
        {base_stat: 96, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/777.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    778: { // Mimikyu Disguised
       name: 'mimikyu-disguised',
       displayName: 'Mimikyu Disguised',
       types: [{type: {name: 'ghost'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 105, stat: {name: 'special-defense'}},
        {base_stat: 96, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/778.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'shadow-claw'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}}
       ]
   },
    779: { // Bruxish
       name: 'bruxish',
       displayName: 'Bruxish',
       types: [{type: {name: 'water'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 68, stat: {name: 'hp'}},
        {base_stat: 105, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 92, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/779.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    780: { // Drampa
       name: 'drampa',
       displayName: 'Drampa',
       types: [{type: {name: 'normal'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 78, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 135, stat: {name: 'special-attack'}},
        {base_stat: 91, stat: {name: 'special-defense'}},
        {base_stat: 36, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/780.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'swift'}},
        {move: {name: 'dragon-claw'}}
       ]
   },
    781: { // Dhelmise
       name: 'dhelmise',
       displayName: 'Dhelmise',
       types: [{type: {name: 'ghost'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 131, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 86, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/781.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'shadow-claw'}},
        {move: {name: 'hex'}},
        {move: {name: 'solar-beam'}}
       ]
   },
    782: { // Jangmo O
       name: 'jangmo-o',
       displayName: 'Jangmo O',
       types: [{type: {name: 'dragon'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/782.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    783: { // Hakamo O
       name: 'hakamo-o',
       displayName: 'Hakamo O',
       types: [{type: {name: 'dragon'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/783.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    784: { // Kommo O
       name: 'kommo-o',
       displayName: 'Kommo O',
       types: [{type: {name: 'dragon'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 110, stat: {name: 'attack'}},
        {base_stat: 125, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 105, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/784.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    785: { // Tapu Koko
       name: 'tapu-koko',
       displayName: 'Tapu Koko',
       types: [{type: {name: 'electric'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 130, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/785.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'thunder-punch'}}
       ]
   },
    786: { // Tapu Lele
       name: 'tapu-lele',
       displayName: 'Tapu Lele',
       types: [{type: {name: 'psychic'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 130, stat: {name: 'special-attack'}},
        {base_stat: 115, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/786.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'confusion'}}
       ]
   },
    787: { // Tapu Bulu
       name: 'tapu-bulu',
       displayName: 'Tapu Bulu',
       types: [{type: {name: 'grass'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 130, stat: {name: 'attack'}},
        {base_stat: 115, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/787.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'dazzling-gleam'}},
        {move: {name: 'whirlwind'}}
       ]
   },
    788: { // Tapu Fini
       name: 'tapu-fini',
       displayName: 'Tapu Fini',
       types: [{type: {name: 'water'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 115, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 130, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/788.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    789: { // Cosmog
       name: 'cosmog',
       displayName: 'Cosmog',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 43, stat: {name: 'hp'}},
        {base_stat: 29, stat: {name: 'attack'}},
        {base_stat: 31, stat: {name: 'defense'}},
        {base_stat: 29, stat: {name: 'special-attack'}},
        {base_stat: 31, stat: {name: 'special-defense'}},
        {base_stat: 37, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/789.png'
       },
       moves: [
       {move: {name: 'teleport'}},
        {move: {name: 'splash'}}
       ]
   },
    790: { // Cosmoem
       name: 'cosmoem',
       displayName: 'Cosmoem',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 43, stat: {name: 'hp'}},
        {base_stat: 29, stat: {name: 'attack'}},
        {base_stat: 131, stat: {name: 'defense'}},
        {base_stat: 29, stat: {name: 'special-attack'}},
        {base_stat: 131, stat: {name: 'special-defense'}},
        {base_stat: 37, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/790.png'
       },
       moves: [
       {move: {name: 'teleport'}},
        {move: {name: 'cosmic-power'}}
       ]
   },
    791: { // Solgaleo
       name: 'solgaleo',
       displayName: 'Solgaleo',
       types: [{type: {name: 'psychic'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 137, stat: {name: 'hp'}},
        {base_stat: 137, stat: {name: 'attack'}},
        {base_stat: 107, stat: {name: 'defense'}},
        {base_stat: 113, stat: {name: 'special-attack'}},
        {base_stat: 89, stat: {name: 'special-defense'}},
        {base_stat: 97, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/791.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}},
        {move: {name: 'flash-cannon'}}
       ]
   },
    792: { // Lunala
       name: 'lunala',
       displayName: 'Lunala',
       types: [{type: {name: 'psychic'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 137, stat: {name: 'hp'}},
        {base_stat: 113, stat: {name: 'attack'}},
        {base_stat: 89, stat: {name: 'defense'}},
        {base_stat: 137, stat: {name: 'special-attack'}},
        {base_stat: 107, stat: {name: 'special-defense'}},
        {base_stat: 97, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/792.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'confusion'}},
        {move: {name: 'shadow-ball'}}
       ]
   },
    793: { // Nihilego
       name: 'nihilego',
       displayName: 'Nihilego',
       types: [{type: {name: 'rock'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 109, stat: {name: 'hp'}},
        {base_stat: 53, stat: {name: 'attack'}},
        {base_stat: 47, stat: {name: 'defense'}},
        {base_stat: 127, stat: {name: 'special-attack'}},
        {base_stat: 131, stat: {name: 'special-defense'}},
        {base_stat: 103, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/793.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}}
       ]
   },
    794: { // Buzzwole
       name: 'buzzwole',
       displayName: 'Buzzwole',
       types: [{type: {name: 'bug'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 107, stat: {name: 'hp'}},
        {base_stat: 139, stat: {name: 'attack'}},
        {base_stat: 139, stat: {name: 'defense'}},
        {base_stat: 53, stat: {name: 'special-attack'}},
        {base_stat: 53, stat: {name: 'special-defense'}},
        {base_stat: 79, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/794.png'
       },
       moves: [
       {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}}
       ]
   },
    795: { // Pheromosa
       name: 'pheromosa',
       displayName: 'Pheromosa',
       types: [{type: {name: 'bug'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 71, stat: {name: 'hp'}},
        {base_stat: 137, stat: {name: 'attack'}},
        {base_stat: 37, stat: {name: 'defense'}},
        {base_stat: 137, stat: {name: 'special-attack'}},
        {base_stat: 37, stat: {name: 'special-defense'}},
        {base_stat: 151, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/795.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'signal-beam'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'close-combat'}}
       ]
   },
    796: { // Xurkitree
       name: 'xurkitree',
       displayName: 'Xurkitree',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 83, stat: {name: 'hp'}},
        {base_stat: 89, stat: {name: 'attack'}},
        {base_stat: 71, stat: {name: 'defense'}},
        {base_stat: 173, stat: {name: 'special-attack'}},
        {base_stat: 71, stat: {name: 'special-defense'}},
        {base_stat: 83, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/796.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'thunder-punch'}}
       ]
   },
    797: { // Celesteela
       name: 'celesteela',
       displayName: 'Celesteela',
       types: [{type: {name: 'steel'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 97, stat: {name: 'hp'}},
        {base_stat: 101, stat: {name: 'attack'}},
        {base_stat: 103, stat: {name: 'defense'}},
        {base_stat: 107, stat: {name: 'special-attack'}},
        {base_stat: 101, stat: {name: 'special-defense'}},
        {base_stat: 61, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/797.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'air-slash'}}
       ]
   },
    798: { // Kartana
       name: 'kartana',
       displayName: 'Kartana',
       types: [{type: {name: 'grass'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 59, stat: {name: 'hp'}},
        {base_stat: 181, stat: {name: 'attack'}},
        {base_stat: 131, stat: {name: 'defense'}},
        {base_stat: 59, stat: {name: 'special-attack'}},
        {base_stat: 31, stat: {name: 'special-defense'}},
        {base_stat: 109, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/798.png'
       },
       moves: [
       {move: {name: 'razor-leaf'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'guillotine'}},
        {move: {name: 'swords-dance'}}
       ]
   },
    799: { // Guzzlord
       name: 'guzzlord',
       displayName: 'Guzzlord',
       types: [{type: {name: 'dark'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 223, stat: {name: 'hp'}},
        {base_stat: 101, stat: {name: 'attack'}},
        {base_stat: 53, stat: {name: 'defense'}},
        {base_stat: 97, stat: {name: 'special-attack'}},
        {base_stat: 53, stat: {name: 'special-defense'}},
        {base_stat: 43, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/799.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'bite'}},
        {move: {name: 'dragon-claw'}}
       ]
   },
    800: { // Necrozma
       name: 'necrozma',
       displayName: 'Necrozma',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 97, stat: {name: 'hp'}},
        {base_stat: 107, stat: {name: 'attack'}},
        {base_stat: 101, stat: {name: 'defense'}},
        {base_stat: 127, stat: {name: 'special-attack'}},
        {base_stat: 89, stat: {name: 'special-defense'}},
        {base_stat: 79, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/800.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'confusion'}},
        {move: {name: 'slash'}}
       ]
   },
    801: { // Magearna
       name: 'magearna',
       displayName: 'Magearna',
       types: [{type: {name: 'steel'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 115, stat: {name: 'defense'}},
        {base_stat: 130, stat: {name: 'special-attack'}},
        {base_stat: 115, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/801.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'dazzling-gleam'}}
       ]
   },
    802: { // Marshadow
       name: 'marshadow',
       displayName: 'Marshadow',
       types: [{type: {name: 'fighting'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 125, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 125, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/802.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'aura-sphere'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}}
       ]
   },
    803: { // Poipole
       name: 'poipole',
       displayName: 'Poipole',
       types: [{type: {name: 'poison'}}],
       stats: [
       {base_stat: 67, stat: {name: 'hp'}},
        {base_stat: 73, stat: {name: 'attack'}},
        {base_stat: 67, stat: {name: 'defense'}},
        {base_stat: 73, stat: {name: 'special-attack'}},
        {base_stat: 67, stat: {name: 'special-defense'}},
        {base_stat: 73, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/803.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}}
       ]
   },
    804: { // Naganadel
       name: 'naganadel',
       displayName: 'Naganadel',
       types: [{type: {name: 'poison'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 73, stat: {name: 'hp'}},
        {base_stat: 73, stat: {name: 'attack'}},
        {base_stat: 73, stat: {name: 'defense'}},
        {base_stat: 127, stat: {name: 'special-attack'}},
        {base_stat: 73, stat: {name: 'special-defense'}},
        {base_stat: 121, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/804.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}}
       ]
   },
    805: { // Stakataka
       name: 'stakataka',
       displayName: 'Stakataka',
       types: [{type: {name: 'rock'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 61, stat: {name: 'hp'}},
        {base_stat: 131, stat: {name: 'attack'}},
        {base_stat: 211, stat: {name: 'defense'}},
        {base_stat: 53, stat: {name: 'special-attack'}},
        {base_stat: 101, stat: {name: 'special-defense'}},
        {base_stat: 13, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/805.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'rock-throw'}},
        {move: {name: 'flash-cannon'}}
       ]
   },
    806: { // Blacephalon
       name: 'blacephalon',
       displayName: 'Blacephalon',
       types: [{type: {name: 'fire'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 53, stat: {name: 'hp'}},
        {base_stat: 127, stat: {name: 'attack'}},
        {base_stat: 53, stat: {name: 'defense'}},
        {base_stat: 151, stat: {name: 'special-attack'}},
        {base_stat: 79, stat: {name: 'special-defense'}},
        {base_stat: 107, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/806.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    807: { // Zeraora
       name: 'zeraora',
       displayName: 'Zeraora',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 88, stat: {name: 'hp'}},
        {base_stat: 112, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 102, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 143, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/807.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'thunder-punch'}}
       ]
   },
    808: { // Meltan
       name: 'meltan',
       displayName: 'Meltan',
       types: [{type: {name: 'steel'}}],
       stats: [
       {base_stat: 46, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 34, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/808.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/808.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'headbutt'}},
        {move: {name: 'tail-whip'}}
       ]
   },
    809: { // Melmetal
       name: 'melmetal',
       displayName: 'Melmetal',
       types: [{type: {name: 'steel'}}],
       stats: [
       {base_stat: 135, stat: {name: 'hp'}},
        {base_stat: 143, stat: {name: 'attack'}},
        {base_stat: 143, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 34, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/809.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'mega-punch'}}
       ]
   },
    810: { // Grookey
       name: 'grookey',
       displayName: 'Grookey',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/810.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    811: { // Thwackey
       name: 'thwackey',
       displayName: 'Thwackey',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/811.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    812: { // Rillaboom
       name: 'rillaboom',
       displayName: 'Rillaboom',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 125, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/812.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    813: { // Scorbunny
       name: 'scorbunny',
       displayName: 'Scorbunny',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 71, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 69, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/813.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    814: { // Raboot
       name: 'raboot',
       displayName: 'Raboot',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 86, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 94, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/814.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    815: { // Cinderace
       name: 'cinderace',
       displayName: 'Cinderace',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 116, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 119, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/815.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'fire-punch'}}
       ]
   },
    816: { // Sobble
       name: 'sobble',
       displayName: 'Sobble',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/816.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'pound'}}
       ]
   },
    817: { // Drizzile
       name: 'drizzile',
       displayName: 'Drizzile',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/817.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'pound'}}
       ]
   },
    818: { // Inteleon
       name: 'inteleon',
       displayName: 'Inteleon',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 125, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 120, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/818.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    819: { // Skwovet
       name: 'skwovet',
       displayName: 'Skwovet',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 25, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/819.png'
       },
       moves: [
       {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}},
        {move: {name: 'tackle'}},
        {move: {name: 'tail-whip'}}
       ]
   },
    820: { // Greedent
       name: 'greedent',
       displayName: 'Greedent',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 120, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 20, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/820.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}}
       ]
   },
    821: { // Rookidee
       name: 'rookidee',
       displayName: 'Rookidee',
       types: [{type: {name: 'flying'}}],
       stats: [
       {base_stat: 38, stat: {name: 'hp'}},
        {base_stat: 47, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 33, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 57, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/821.png'
       },
       moves: [
       {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}},
        {move: {name: 'fly'}},
        {move: {name: 'fury-attack'}}
       ]
   },
    822: { // Corvisquire
       name: 'corvisquire',
       displayName: 'Corvisquire',
       types: [{type: {name: 'flying'}}],
       stats: [
       {base_stat: 68, stat: {name: 'hp'}},
        {base_stat: 67, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 43, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 77, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/822.png'
       },
       moves: [
       {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}},
        {move: {name: 'fly'}},
        {move: {name: 'hurricane'}}
       ]
   },
    823: { // Corviknight
       name: 'corviknight',
       displayName: 'Corviknight',
       types: [{type: {name: 'flying'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 98, stat: {name: 'hp'}},
        {base_stat: 87, stat: {name: 'attack'}},
        {base_stat: 105, stat: {name: 'defense'}},
        {base_stat: 53, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 67, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/823.png'
       },
       moves: [
       {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}},
        {move: {name: 'fly'}},
        {move: {name: 'hurricane'}}
       ]
   },
    824: { // Blipbug
       name: 'blipbug',
       displayName: 'Blipbug',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 25, stat: {name: 'hp'}},
        {base_stat: 20, stat: {name: 'attack'}},
        {base_stat: 20, stat: {name: 'defense'}},
        {base_stat: 25, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/824.png'
       },
       moves: [
       {move: {name: 'struggle-bug'}},
        {move: {name: 'supersonic'}},
        {move: {name: 'recover'}},
        {move: {name: 'sticky-web'}}
       ]
   },
    825: { // Dottler
       name: 'dottler',
       displayName: 'Dottler',
       types: [{type: {name: 'bug'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 35, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/825.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'psychic'}},
        {move: {name: 'future-sight'}}
       ]
   },
    826: { // Orbeetle
       name: 'orbeetle',
       displayName: 'Orbeetle',
       types: [{type: {name: 'bug'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 110, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 120, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/826.png'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}}
       ]
   },
    827: { // Nickit
       name: 'nickit',
       displayName: 'Nickit',
       types: [{type: {name: 'dark'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 28, stat: {name: 'attack'}},
        {base_stat: 28, stat: {name: 'defense'}},
        {base_stat: 47, stat: {name: 'special-attack'}},
        {base_stat: 52, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/827.png'
       },
       moves: [
       {move: {name: 'night-slash'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'tail-whip'}},
        {move: {name: 'quick-attack'}}
       ]
   },
    828: { // Thievul
       name: 'thievul',
       displayName: 'Thievul',
       types: [{type: {name: 'dark'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 58, stat: {name: 'attack'}},
        {base_stat: 58, stat: {name: 'defense'}},
        {base_stat: 87, stat: {name: 'special-attack'}},
        {base_stat: 92, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/828.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'night-slash'}},
        {move: {name: 'foul-play'}}
       ]
   },
    829: { // Gossifleur
       name: 'gossifleur',
       displayName: 'Gossifleur',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 10, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/829.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    830: { // Eldegoss
       name: 'eldegoss',
       displayName: 'Eldegoss',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 120, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/830.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    831: { // Wooloo
       name: 'wooloo',
       displayName: 'Wooloo',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 42, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 48, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/831.png'
       },
       moves: [
       {move: {name: 'take-down'}},
        {move: {name: 'double-kick'}},
        {move: {name: 'headbutt'}},
        {move: {name: 'tackle'}}
       ]
   },
    832: { // Dubwool
       name: 'dubwool',
       displayName: 'Dubwool',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 72, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 88, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/832.png'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}}
       ]
   },
    833: { // Chewtle
       name: 'chewtle',
       displayName: 'Chewtle',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 64, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 38, stat: {name: 'special-attack'}},
        {base_stat: 38, stat: {name: 'special-defense'}},
        {base_stat: 44, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/833.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'headbutt'}}
       ]
   },
    834: { // Drednaw
       name: 'drednaw',
       displayName: 'Drednaw',
       types: [{type: {name: 'water'}}, {type: {name: 'rock'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 48, stat: {name: 'special-attack'}},
        {base_stat: 68, stat: {name: 'special-defense'}},
        {base_stat: 74, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/834.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    835: { // Yamper
       name: 'yamper',
       displayName: 'Yamper',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 59, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 26, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/835.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    836: { // Boltund
       name: 'boltund',
       displayName: 'Boltund',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 69, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 121, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/836.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'spark'}},
        {move: {name: 'tackle'}}
       ]
   },
    837: { // Rolycoly
       name: 'rolycoly',
       displayName: 'Rolycoly',
       types: [{type: {name: 'rock'}}],
       stats: [
       {base_stat: 30, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/837.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'ancient-power'}}
       ]
   },
    838: { // Carkol
       name: 'carkol',
       displayName: 'Carkol',
       types: [{type: {name: 'rock'}}, {type: {name: 'fire'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/838.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'ancient-power'}}
       ]
   },
    839: { // Coalossal
       name: 'coalossal',
       displayName: 'Coalossal',
       types: [{type: {name: 'rock'}}, {type: {name: 'fire'}}],
       stats: [
       {base_stat: 110, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 120, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/839.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'ancient-power'}}
       ]
   },
    840: { // Applin
       name: 'applin',
       displayName: 'Applin',
       types: [{type: {name: 'grass'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 20, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/840.png'
       },
       moves: [
       {move: {name: 'draco-meteor'}},
        {move: {name: 'withdraw'}},
        {move: {name: 'astonish'}},
        {move: {name: 'attract'}}
       ]
   },
    841: { // Flapple
       name: 'flapple',
       displayName: 'Flapple',
       types: [{type: {name: 'grass'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 110, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/841.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    842: { // Appletun
       name: 'appletun',
       displayName: 'Appletun',
       types: [{type: {name: 'grass'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 110, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/842.png'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    843: { // Silicobra
       name: 'silicobra',
       displayName: 'Silicobra',
       types: [{type: {name: 'ground'}}],
       stats: [
       {base_stat: 52, stat: {name: 'hp'}},
        {base_stat: 57, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 46, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/843.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    844: { // Sandaconda
       name: 'sandaconda',
       displayName: 'Sandaconda',
       types: [{type: {name: 'ground'}}],
       stats: [
       {base_stat: 72, stat: {name: 'hp'}},
        {base_stat: 107, stat: {name: 'attack'}},
        {base_stat: 125, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 71, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/844.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    845: { // Cramorant
       name: 'cramorant',
       displayName: 'Cramorant',
       types: [{type: {name: 'flying'}}, {type: {name: 'water'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/845.png'
       },
       moves: [
       {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}},
        {move: {name: 'fly'}},
        {move: {name: 'hurricane'}}
       ]
   },
    846: { // Arrokuda
       name: 'arrokuda',
       displayName: 'Arrokuda',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 41, stat: {name: 'hp'}},
        {base_stat: 63, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 66, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/846.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'scald'}},
        {move: {name: 'fury-attack'}}
       ]
   },
    847: { // Barraskewda
       name: 'barraskewda',
       displayName: 'Barraskewda',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 61, stat: {name: 'hp'}},
        {base_stat: 123, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 136, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/847.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'scald'}},
        {move: {name: 'fury-attack'}}
       ]
   },
    848: { // Toxel
       name: 'toxel',
       displayName: 'Toxel',
       types: [{type: {name: 'electric'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 38, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 54, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/848.png'
       },
       moves: [
       {move: {name: 'acid'}},
        {move: {name: 'growl'}},
        {move: {name: 'flail'}},
        {move: {name: 'belch'}}
       ]
   },
    849: { // Toxtricity Amped
       name: 'toxtricity-amped',
       displayName: 'Toxtricity Amped',
       types: [{type: {name: 'electric'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 98, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 114, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/849.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'thunder-punch'}}
       ]
   },
    850: { // Sizzlipede
       name: 'sizzlipede',
       displayName: 'Sizzlipede',
       types: [{type: {name: 'fire'}}, {type: {name: 'bug'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/850.png'
       },
       moves: [
       {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}},
        {move: {name: 'bug-buzz'}},
        {move: {name: 'leech-life'}}
       ]
   },
    851: { // Centiskorch
       name: 'centiskorch',
       displayName: 'Centiskorch',
       types: [{type: {name: 'fire'}}, {type: {name: 'bug'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/851.png'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    852: { // Clobbopus
       name: 'clobbopus',
       displayName: 'Clobbopus',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 68, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 32, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/852.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'focus-blast'}},
        {move: {name: 'bind'}}
       ]
   },
    853: { // Grapploct
       name: 'grapploct',
       displayName: 'Grapploct',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 118, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 42, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/853.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'focus-blast'}},
        {move: {name: 'bind'}}
       ]
   },
    854: { // Sinistea
       name: 'sinistea',
       displayName: 'Sinistea',
       types: [{type: {name: 'ghost'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 74, stat: {name: 'special-attack'}},
        {base_stat: 54, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/854.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    855: { // Polteageist
       name: 'polteageist',
       displayName: 'Polteageist',
       types: [{type: {name: 'ghost'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 134, stat: {name: 'special-attack'}},
        {base_stat: 114, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/855.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    856: { // Hatenna
       name: 'hatenna',
       displayName: 'Hatenna',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 42, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 56, stat: {name: 'special-attack'}},
        {base_stat: 53, stat: {name: 'special-defense'}},
        {base_stat: 39, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/856.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'confusion'}}
       ]
   },
    857: { // Hattrem
       name: 'hattrem',
       displayName: 'Hattrem',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 57, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 86, stat: {name: 'special-attack'}},
        {base_stat: 73, stat: {name: 'special-defense'}},
        {base_stat: 49, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/857.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'confusion'}}
       ]
   },
    858: { // Hatterene
       name: 'hatterene',
       displayName: 'Hatterene',
       types: [{type: {name: 'psychic'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 57, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 136, stat: {name: 'special-attack'}},
        {base_stat: 103, stat: {name: 'special-defense'}},
        {base_stat: 29, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/858.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'confusion'}}
       ]
   },
    859: { // Impidimp
       name: 'impidimp',
       displayName: 'Impidimp',
       types: [{type: {name: 'dark'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 30, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/859.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'bite'}},
        {move: {name: 'dazzling-gleam'}}
       ]
   },
    860: { // Morgrem
       name: 'morgrem',
       displayName: 'Morgrem',
       types: [{type: {name: 'dark'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/860.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'bite'}},
        {move: {name: 'dazzling-gleam'}}
       ]
   },
    861: { // Grimmsnarl
       name: 'grimmsnarl',
       displayName: 'Grimmsnarl',
       types: [{type: {name: 'dark'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/861.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'bite'}}
       ]
   },
    862: { // Obstagoon
       name: 'obstagoon',
       displayName: 'Obstagoon',
       types: [{type: {name: 'dark'}}, {type: {name: 'normal'}}],
       stats: [
       {base_stat: 93, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 101, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 81, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/862.png'
       },
       moves: [
       {move: {name: 'night-slash'}},
        {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}}
       ]
   },
    863: { // Perrserker
       name: 'perrserker',
       displayName: 'Perrserker',
       types: [{type: {name: 'steel'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 110, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/863.png'
       },
       moves: [
       {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'metal-claw'}},
        {move: {name: 'iron-tail'}}
       ]
   },
    864: { // Cursola
       name: 'cursola',
       displayName: 'Cursola',
       types: [{type: {name: 'ghost'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 145, stat: {name: 'special-attack'}},
        {base_stat: 130, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/864.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'tackle'}}
       ]
   },
    865: { // Sirfetchd
       name: 'sirfetchd',
       displayName: 'Sirfetchd',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 62, stat: {name: 'hp'}},
        {base_stat: 135, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 68, stat: {name: 'special-attack'}},
        {base_stat: 82, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/865.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'swords-dance'}},
        {move: {name: 'slam'}}
       ]
   },
    866: { // Mr Rime
       name: 'mr-rime',
       displayName: 'Mr Rime',
       types: [{type: {name: 'ice'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 110, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/866.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-punch'}},
        {move: {name: 'ice-shard'}}
       ]
   },
    867: { // Runerigus
       name: 'runerigus',
       displayName: 'Runerigus',
       types: [{type: {name: 'ground'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 58, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 145, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 105, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/867.png'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'bulldoze'}},
        {move: {name: 'shadow-ball'}}
       ]
   },
    868: { // Milcery
       name: 'milcery',
       displayName: 'Milcery',
       types: [{type: {name: 'fairy'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 61, stat: {name: 'special-defense'}},
        {base_stat: 34, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/868.png'
       },
       moves: [
       {move: {name: 'dazzling-gleam'}},
        {move: {name: 'draining-kiss'}},
        {move: {name: 'tackle'}},
        {move: {name: 'recover'}}
       ]
   },
    869: { // Alcremie
       name: 'alcremie',
       displayName: 'Alcremie',
       types: [{type: {name: 'fairy'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 110, stat: {name: 'special-attack'}},
        {base_stat: 121, stat: {name: 'special-defense'}},
        {base_stat: 64, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/869.png'
       },
       moves: [
       {move: {name: 'dazzling-gleam'}},
        {move: {name: 'play-rough'}},
        {move: {name: 'draining-kiss'}},
        {move: {name: 'tackle'}}
       ]
   },
    870: { // Falinks
       name: 'falinks',
       displayName: 'Falinks',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/870.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'focus-blast'}},
        {move: {name: 'headbutt'}}
       ]
   },
    871: { // Pincurchin
       name: 'pincurchin',
       displayName: 'Pincurchin',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 48, stat: {name: 'hp'}},
        {base_stat: 101, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 91, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 15, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/871.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    872: { // Snom
       name: 'snom',
       displayName: 'Snom',
       types: [{type: {name: 'ice'}}, {type: {name: 'bug'}}],
       stats: [
       {base_stat: 30, stat: {name: 'hp'}},
        {base_stat: 25, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 20, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/872.png'
       },
       moves: [
       {move: {name: 'icy-wind'}},
        {move: {name: 'bug-buzz'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'powder-snow'}}
       ]
   },
    873: { // Frosmoth
       name: 'frosmoth',
       displayName: 'Frosmoth',
       types: [{type: {name: 'ice'}}, {type: {name: 'bug'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 125, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/873.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'icy-wind'}},
        {move: {name: 'bug-buzz'}}
       ]
   },
    874: { // Stonjourner
       name: 'stonjourner',
       displayName: 'Stonjourner',
       types: [{type: {name: 'rock'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 125, stat: {name: 'attack'}},
        {base_stat: 135, stat: {name: 'defense'}},
        {base_stat: 20, stat: {name: 'special-attack'}},
        {base_stat: 20, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/874.png'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'rock-throw'}}
       ]
   },
    875: { // Eiscue Ice
       name: 'eiscue-ice',
       displayName: 'Eiscue Ice',
       types: [{type: {name: 'ice'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 110, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/875.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-punch'}},
        {move: {name: 'icy-wind'}}
       ]
   },
    876: { // Indeedee Male
       name: 'indeedee-male',
       displayName: 'Indeedee Male',
       types: [{type: {name: 'psychic'}}, {type: {name: 'normal'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 105, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/876.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    877: { // Morpeko Full Belly
       name: 'morpeko-full-belly',
       displayName: 'Morpeko Full Belly',
       types: [{type: {name: 'electric'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 58, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 58, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 58, stat: {name: 'special-defense'}},
        {base_stat: 97, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/877.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'thunder-punch'}},
        {move: {name: 'spark'}}
       ]
   },
    878: { // Cufant
       name: 'cufant',
       displayName: 'Cufant',
       types: [{type: {name: 'steel'}}],
       stats: [
       {base_stat: 72, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 49, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 49, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/878.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'stomp'}}
       ]
   },
    879: { // Copperajah
       name: 'copperajah',
       displayName: 'Copperajah',
       types: [{type: {name: 'steel'}}],
       stats: [
       {base_stat: 122, stat: {name: 'hp'}},
        {base_stat: 130, stat: {name: 'attack'}},
        {base_stat: 69, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 69, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/879.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'stomp'}}
       ]
   },
    880: { // Dracozolt
       name: 'dracozolt',
       displayName: 'Dracozolt',
       types: [{type: {name: 'electric'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/880.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'thunder-punch'}}
       ]
   },
    881: { // Arctozolt
       name: 'arctozolt',
       displayName: 'Arctozolt',
       types: [{type: {name: 'electric'}}, {type: {name: 'ice'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/881.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'thunder-punch'}}
       ]
   },
    882: { // Dracovish
       name: 'dracovish',
       displayName: 'Dracovish',
       types: [{type: {name: 'water'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/882.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'scald'}}
       ]
   },
    883: { // Arctovish
       name: 'arctovish',
       displayName: 'Arctovish',
       types: [{type: {name: 'water'}}, {type: {name: 'ice'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/883.png'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'ice-beam'}}
       ]
   },
    884: { // Duraludon
       name: 'duraludon',
       displayName: 'Duraludon',
       types: [{type: {name: 'steel'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 115, stat: {name: 'defense'}},
        {base_stat: 120, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/884.png'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'metal-claw'}}
       ]
   },
    885: { // Dreepy
       name: 'dreepy',
       displayName: 'Dreepy',
       types: [{type: {name: 'dragon'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 28, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 30, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 82, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/885.png'
       },
       moves: [
       {move: {name: 'draco-meteor'}},
        {move: {name: 'confuse-ray'}},
        {move: {name: 'bite'}},
        {move: {name: 'quick-attack'}}
       ]
   },
    886: { // Drakloak
       name: 'drakloak',
       displayName: 'Drakloak',
       types: [{type: {name: 'dragon'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 68, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 102, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/886.png'
       },
       moves: [
       {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}},
        {move: {name: 'shadow-ball'}}
       ]
   },
    887: { // Dragapult
       name: 'dragapult',
       displayName: 'Dragapult',
       types: [{type: {name: 'dragon'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 88, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 142, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/887.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    888: { // Zacian
       name: 'zacian',
       displayName: 'Zacian',
       types: [{type: {name: 'fairy'}}],
       stats: [
       {base_stat: 92, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 115, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 115, stat: {name: 'special-defense'}},
        {base_stat: 138, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/888.png'
       },
       moves: [
       {move: {name: 'moonblast'}},
        {move: {name: 'dazzling-gleam'}},
        {move: {name: 'play-rough'}},
        {move: {name: 'swords-dance'}}
       ]
   },
    889: { // Zamazenta
       name: 'zamazenta',
       displayName: 'Zamazenta',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 92, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 115, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 115, stat: {name: 'special-defense'}},
        {base_stat: 138, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/889.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'focus-blast'}},
        {move: {name: 'bite'}}
       ]
   },
    890: { // Eternatus
       name: 'eternatus',
       displayName: 'Eternatus',
       types: [{type: {name: 'poison'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 140, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 145, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 130, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/890.png'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}}
       ]
   },
    891: { // Kubfu
       name: 'kubfu',
       displayName: 'Kubfu',
       types: [{type: {name: 'fighting'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 53, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 72, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/891.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}},
        {move: {name: 'headbutt'}}
       ]
   },
    892: { // Urshifu Single Strike
       name: 'urshifu-single-strike',
       displayName: 'Urshifu Single Strike',
       types: [{type: {name: 'fighting'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 130, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 63, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 97, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/892.png'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'aura-sphere'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}}
       ]
   },
    893: { // Zarude
       name: 'zarude',
       displayName: 'Zarude',
       types: [{type: {name: 'dark'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 105, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 105, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 105, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/893.png'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'bite'}},
        {move: {name: 'solar-beam'}}
       ]
   },
    894: { // Regieleki
       name: 'regieleki',
       displayName: 'Regieleki',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 200, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/894.png'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'thrash'}},
        {move: {name: 'hyper-beam'}}
       ]
   },
    895: { // Regidrago
       name: 'regidrago',
       displayName: 'Regidrago',
       types: [{type: {name: 'dragon'}}],
       stats: [
       {base_stat: 200, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 100, stat: {name: 'special-attack'}},
        {base_stat: 50, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/895.png'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    896: { // Glastrier
       name: 'glastrier',
       displayName: 'Glastrier',
       types: [{type: {name: 'ice'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 145, stat: {name: 'attack'}},
        {base_stat: 130, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 110, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/896.png'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'icy-wind'}},
        {move: {name: 'swords-dance'}}
       ]
   },
    897: { // Spectrier
       name: 'spectrier',
       displayName: 'Spectrier',
       types: [{type: {name: 'ghost'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 145, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 130, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/897.png'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    898: { // Calyrex
       name: 'calyrex',
       displayName: 'Calyrex',
       types: [{type: {name: 'psychic'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png',
           back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/898.png'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'future-sight'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    899: { // Wyrdeer
       name: 'wyrdeer',
       displayName: 'Wyrdeer',
       types: [{type: {name: 'normal'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 103, stat: {name: 'hp'}},
        {base_stat: 105, stat: {name: 'attack'}},
        {base_stat: 72, stat: {name: 'defense'}},
        {base_stat: 105, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/899.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'swift'}}
       ]
   },
    900: { // Kleavor
       name: 'kleavor',
       displayName: 'Kleavor',
       types: [{type: {name: 'bug'}}, {type: {name: 'rock'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 135, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/900.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'rock-slide'}}
       ]
   },
    901: { // Ursaluna
       name: 'ursaluna',
       displayName: 'Ursaluna',
       types: [{type: {name: 'ground'}}, {type: {name: 'normal'}}],
       stats: [
       {base_stat: 130, stat: {name: 'hp'}},
        {base_stat: 140, stat: {name: 'attack'}},
        {base_stat: 105, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/901.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    902: { // Basculegion Male
       name: 'basculegion-male',
       displayName: 'Basculegion Male',
       types: [{type: {name: 'water'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 120, stat: {name: 'hp'}},
        {base_stat: 112, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 78, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/902.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'shadow-ball'}}
       ]
   },
    903: { // Sneasler
       name: 'sneasler',
       displayName: 'Sneasler',
       types: [{type: {name: 'fighting'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 130, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 120, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/903.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}},
        {move: {name: 'focus-blast'}}
       ]
   },
    904: { // Overqwil
       name: 'overqwil',
       displayName: 'Overqwil',
       types: [{type: {name: 'dark'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/904.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'bite'}},
        {move: {name: 'sludge-bomb'}}
       ]
   },
    905: { // Enamorus Incarnate
       name: 'enamorus-incarnate',
       displayName: 'Enamorus Incarnate',
       types: [{type: {name: 'fairy'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 74, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 135, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 106, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/905.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'moonblast'}},
        {move: {name: 'dazzling-gleam'}},
        {move: {name: 'play-rough'}},
        {move: {name: 'draining-kiss'}}
       ]
   },
    906: { // Sprigatito
       name: 'sprigatito',
       displayName: 'Sprigatito',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 61, stat: {name: 'attack'}},
        {base_stat: 54, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    907: { // Floragato
       name: 'floragato',
       displayName: 'Floragato',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 61, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 63, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 63, stat: {name: 'special-defense'}},
        {base_stat: 83, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/907.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    908: { // Meowscarada
       name: 'meowscarada',
       displayName: 'Meowscarada',
       types: [{type: {name: 'grass'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 76, stat: {name: 'hp'}},
        {base_stat: 110, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 81, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 123, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    909: { // Fuecoco
       name: 'fuecoco',
       displayName: 'Fuecoco',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 67, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 59, stat: {name: 'defense'}},
        {base_stat: 63, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 36, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    910: { // Crocalor
       name: 'crocalor',
       displayName: 'Crocalor',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 81, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 78, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 58, stat: {name: 'special-defense'}},
        {base_stat: 49, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/910.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    911: { // Skeledirge
       name: 'skeledirge',
       displayName: 'Skeledirge',
       types: [{type: {name: 'fire'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 104, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 110, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 66, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/911.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    912: { // Quaxly
       name: 'quaxly',
       displayName: 'Quaxly',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'pound'}}
       ]
   },
    913: { // Quaxwell
       name: 'quaxwell',
       displayName: 'Quaxwell',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/913.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'pound'}}
       ]
   },
    914: { // Quaquaval
       name: 'quaquaval',
       displayName: 'Quaquaval',
       types: [{type: {name: 'water'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/914.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'close-combat'}}
       ]
   },
    915: { // Lechonk
       name: 'lechonk',
       displayName: 'Lechonk',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 54, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/915.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}},
        {move: {name: 'headbutt'}},
        {move: {name: 'tackle'}}
       ]
   },
    916: { // Oinkologne Male
       name: 'oinkologne-male',
       displayName: 'Oinkologne Male',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 110, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 59, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/916.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}}
       ]
   },
    917: { // Tarountula
       name: 'tarountula',
       displayName: 'Tarountula',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 35, stat: {name: 'hp'}},
        {base_stat: 41, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 29, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 20, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/917.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    918: { // Spidops
       name: 'spidops',
       displayName: 'Spidops',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 79, stat: {name: 'attack'}},
        {base_stat: 92, stat: {name: 'defense'}},
        {base_stat: 52, stat: {name: 'special-attack'}},
        {base_stat: 86, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/918.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    919: { // Nymble
       name: 'nymble',
       displayName: 'Nymble',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 33, stat: {name: 'hp'}},
        {base_stat: 46, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 21, stat: {name: 'special-attack'}},
        {base_stat: 25, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/919.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    920: { // Lokix
       name: 'lokix',
       displayName: 'Lokix',
       types: [{type: {name: 'bug'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 71, stat: {name: 'hp'}},
        {base_stat: 102, stat: {name: 'attack'}},
        {base_stat: 78, stat: {name: 'defense'}},
        {base_stat: 52, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 92, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/920.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    921: { // Pawmi
       name: 'pawmi',
       displayName: 'Pawmi',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 20, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 25, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/921.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    922: { // Pawmo
       name: 'pawmo',
       displayName: 'Pawmo',
       types: [{type: {name: 'electric'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/922.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'thunder-punch'}}
       ]
   },
    923: { // Pawmot
       name: 'pawmot',
       displayName: 'Pawmot',
       types: [{type: {name: 'electric'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 105, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/923.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'thunder-punch'}}
       ]
   },
    924: { // Tandemaus
       name: 'tandemaus',
       displayName: 'Tandemaus',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/924.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'swift'}},
        {move: {name: 'take-down'}},
        {move: {name: 'pound'}},
        {move: {name: 'super-fang'}}
       ]
   },
    925: { // Maushold Family Of Four
       name: 'maushold-family-of-four',
       displayName: 'Maushold Family Of Four',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 74, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 111, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/925.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'swift'}},
        {move: {name: 'take-down'}}
       ]
   },
    926: { // Fidough
       name: 'fidough',
       displayName: 'Fidough',
       types: [{type: {name: 'fairy'}}],
       stats: [
       {base_stat: 37, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/926.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dazzling-gleam'}},
        {move: {name: 'play-rough'}},
        {move: {name: 'tackle'}},
        {move: {name: 'double-edge'}}
       ]
   },
    927: { // Dachsbun
       name: 'dachsbun',
       displayName: 'Dachsbun',
       types: [{type: {name: 'fairy'}}],
       stats: [
       {base_stat: 57, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 115, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/927.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dazzling-gleam'}},
        {move: {name: 'play-rough'}},
        {move: {name: 'draining-kiss'}},
        {move: {name: 'tackle'}}
       ]
   },
    928: { // Smoliv
       name: 'smoliv',
       displayName: 'Smoliv',
       types: [{type: {name: 'grass'}}, {type: {name: 'normal'}}],
       stats: [
       {base_stat: 41, stat: {name: 'hp'}},
        {base_stat: 35, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 58, stat: {name: 'special-attack'}},
        {base_stat: 51, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/928.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    929: { // Dolliv
       name: 'dolliv',
       displayName: 'Dolliv',
       types: [{type: {name: 'grass'}}, {type: {name: 'normal'}}],
       stats: [
       {base_stat: 52, stat: {name: 'hp'}},
        {base_stat: 53, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 78, stat: {name: 'special-attack'}},
        {base_stat: 78, stat: {name: 'special-defense'}},
        {base_stat: 33, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/929.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    930: { // Arboliva
       name: 'arboliva',
       displayName: 'Arboliva',
       types: [{type: {name: 'grass'}}, {type: {name: 'normal'}}],
       stats: [
       {base_stat: 78, stat: {name: 'hp'}},
        {base_stat: 69, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 125, stat: {name: 'special-attack'}},
        {base_stat: 109, stat: {name: 'special-defense'}},
        {base_stat: 39, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/930.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    931: { // Squawkabilly Green Plumage
       name: 'squawkabilly-green-plumage',
       displayName: 'Squawkabilly Green Plumage',
       types: [{type: {name: 'normal'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 82, stat: {name: 'hp'}},
        {base_stat: 96, stat: {name: 'attack'}},
        {base_stat: 51, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 51, stat: {name: 'special-defense'}},
        {base_stat: 92, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/931.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'take-down'}},
        {move: {name: 'aerial-ace'}}
       ]
   },
    932: { // Nacli
       name: 'nacli',
       displayName: 'Nacli',
       types: [{type: {name: 'rock'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 75, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 25, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/932.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'rock-throw'}}
       ]
   },
    933: { // Naclstack
       name: 'naclstack',
       displayName: 'Naclstack',
       types: [{type: {name: 'rock'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/933.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'rock-throw'}}
       ]
   },
    934: { // Garganacl
       name: 'garganacl',
       displayName: 'Garganacl',
       types: [{type: {name: 'rock'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 130, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/934.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'rock-throw'}}
       ]
   },
    935: { // Charcadet
       name: 'charcadet',
       displayName: 'Charcadet',
       types: [{type: {name: 'fire'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/935.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    936: { // Armarouge
       name: 'armarouge',
       displayName: 'Armarouge',
       types: [{type: {name: 'fire'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 125, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/936.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    937: { // Ceruledge
       name: 'ceruledge',
       displayName: 'Ceruledge',
       types: [{type: {name: 'fire'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 125, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/937.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    938: { // Tadbulb
       name: 'tadbulb',
       displayName: 'Tadbulb',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 61, stat: {name: 'hp'}},
        {base_stat: 31, stat: {name: 'attack'}},
        {base_stat: 41, stat: {name: 'defense'}},
        {base_stat: 59, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/938.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    939: { // Bellibolt
       name: 'bellibolt',
       displayName: 'Bellibolt',
       types: [{type: {name: 'electric'}}],
       stats: [
       {base_stat: 109, stat: {name: 'hp'}},
        {base_stat: 64, stat: {name: 'attack'}},
        {base_stat: 91, stat: {name: 'defense'}},
        {base_stat: 103, stat: {name: 'special-attack'}},
        {base_stat: 83, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/939.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    940: { // Wattrel
       name: 'wattrel',
       displayName: 'Wattrel',
       types: [{type: {name: 'electric'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/940.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    941: { // Kilowattrel
       name: 'kilowattrel',
       displayName: 'Kilowattrel',
       types: [{type: {name: 'electric'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 105, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 125, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/941.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    942: { // Maschiff
       name: 'maschiff',
       displayName: 'Maschiff',
       types: [{type: {name: 'dark'}}],
       stats: [
       {base_stat: 60, stat: {name: 'hp'}},
        {base_stat: 78, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 51, stat: {name: 'special-defense'}},
        {base_stat: 51, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/942.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'bite'}},
        {move: {name: 'headbutt'}}
       ]
   },
    943: { // Mabosstiff
       name: 'mabosstiff',
       displayName: 'Mabosstiff',
       types: [{type: {name: 'dark'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/943.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'bite'}},
        {move: {name: 'headbutt'}}
       ]
   },
    944: { // Shroodle
       name: 'shroodle',
       displayName: 'Shroodle',
       types: [{type: {name: 'poison'}}, {type: {name: 'normal'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 40, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/944.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}}
       ]
   },
    945: { // Grafaiai
       name: 'grafaiai',
       displayName: 'Grafaiai',
       types: [{type: {name: 'poison'}}, {type: {name: 'normal'}}],
       stats: [
       {base_stat: 63, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 72, stat: {name: 'special-defense'}},
        {base_stat: 110, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/945.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}}
       ]
   },
    946: { // Bramblin
       name: 'bramblin',
       displayName: 'Bramblin',
       types: [{type: {name: 'grass'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 30, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 35, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/946.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'shadow-ball'}}
       ]
   },
    947: { // Brambleghast
       name: 'brambleghast',
       displayName: 'Brambleghast',
       types: [{type: {name: 'grass'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/947.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'shadow-ball'}}
       ]
   },
    948: { // Toedscool
       name: 'toedscool',
       displayName: 'Toedscool',
       types: [{type: {name: 'ground'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 40, stat: {name: 'attack'}},
        {base_stat: 35, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/948.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'earth-power'}},
        {move: {name: 'mud-shot'}},
        {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}}
       ]
   },
    949: { // Toedscruel
       name: 'toedscruel',
       displayName: 'Toedscruel',
       types: [{type: {name: 'ground'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 80, stat: {name: 'special-attack'}},
        {base_stat: 120, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/949.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'earth-power'}},
        {move: {name: 'mud-shot'}},
        {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}}
       ]
   },
    950: { // Klawf
       name: 'klawf',
       displayName: 'Klawf',
       types: [{type: {name: 'rock'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 115, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/950.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'rock-throw'}}
       ]
   },
    951: { // Capsakid
       name: 'capsakid',
       displayName: 'Capsakid',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 62, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 62, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/951.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    952: { // Scovillain
       name: 'scovillain',
       displayName: 'Scovillain',
       types: [{type: {name: 'grass'}}, {type: {name: 'fire'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 108, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 108, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/952.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'razor-leaf'}}
       ]
   },
    953: { // Rellor
       name: 'rellor',
       displayName: 'Rellor',
       types: [{type: {name: 'bug'}}],
       stats: [
       {base_stat: 41, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 31, stat: {name: 'special-attack'}},
        {base_stat: 58, stat: {name: 'special-defense'}},
        {base_stat: 30, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/953.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    954: { // Rabsca
       name: 'rabsca',
       displayName: 'Rabsca',
       types: [{type: {name: 'bug'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 75, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 115, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/954.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'x-scissor'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}}
       ]
   },
    955: { // Flittle
       name: 'flittle',
       displayName: 'Flittle',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 30, stat: {name: 'hp'}},
        {base_stat: 35, stat: {name: 'attack'}},
        {base_stat: 30, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 30, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/955.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'zen-headbutt'}},
        {move: {name: 'confusion'}}
       ]
   },
    956: { // Espathra
       name: 'espathra',
       displayName: 'Espathra',
       types: [{type: {name: 'psychic'}}],
       stats: [
       {base_stat: 95, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 101, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 105, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/956.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}},
        {move: {name: 'zen-headbutt'}},
        {move: {name: 'confusion'}}
       ]
   },
    957: { // Tinkatink
       name: 'tinkatink',
       displayName: 'Tinkatink',
       types: [{type: {name: 'fairy'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 64, stat: {name: 'special-defense'}},
        {base_stat: 58, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/957.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'play-rough'}},
        {move: {name: 'draining-kiss'}},
        {move: {name: 'fairy-wind'}},
        {move: {name: 'flash-cannon'}}
       ]
   },
    958: { // Tinkatuff
       name: 'tinkatuff',
       displayName: 'Tinkatuff',
       types: [{type: {name: 'fairy'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 82, stat: {name: 'special-defense'}},
        {base_stat: 78, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/958.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'play-rough'}},
        {move: {name: 'draining-kiss'}},
        {move: {name: 'fairy-wind'}},
        {move: {name: 'flash-cannon'}}
       ]
   },
    959: { // Tinkaton
       name: 'tinkaton',
       displayName: 'Tinkaton',
       types: [{type: {name: 'fairy'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 77, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 105, stat: {name: 'special-defense'}},
        {base_stat: 94, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/959.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'play-rough'}},
        {move: {name: 'draining-kiss'}},
        {move: {name: 'fairy-wind'}},
        {move: {name: 'flash-cannon'}}
       ]
   },
    960: { // Wiglett
       name: 'wiglett',
       displayName: 'Wiglett',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 10, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 25, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 25, stat: {name: 'special-defense'}},
        {base_stat: 95, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/960.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'slam'}}
       ]
   },
    961: { // Wugtrio
       name: 'wugtrio',
       displayName: 'Wugtrio',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 35, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 50, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 120, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/961.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'slam'}}
       ]
   },
    962: { // Bombirdier
       name: 'bombirdier',
       displayName: 'Bombirdier',
       types: [{type: {name: 'flying'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 103, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 82, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/962.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}},
        {move: {name: 'fly'}},
        {move: {name: 'hurricane'}}
       ]
   },
    963: { // Finizen
       name: 'finizen',
       displayName: 'Finizen',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 40, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/963.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    964: { // Palafin Zero
       name: 'palafin-zero',
       displayName: 'Palafin Zero',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 72, stat: {name: 'defense'}},
        {base_stat: 53, stat: {name: 'special-attack'}},
        {base_stat: 62, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/964.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    965: { // Varoom
       name: 'varoom',
       displayName: 'Varoom',
       types: [{type: {name: 'steel'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 63, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 47, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/965.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'sludge-bomb'}}
       ]
   },
    966: { // Revavroom
       name: 'revavroom',
       displayName: 'Revavroom',
       types: [{type: {name: 'steel'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 119, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 54, stat: {name: 'special-attack'}},
        {base_stat: 67, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/966.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'sludge-bomb'}}
       ]
   },
    967: { // Cyclizar
       name: 'cyclizar',
       displayName: 'Cyclizar',
       types: [{type: {name: 'dragon'}}, {type: {name: 'normal'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 121, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/967.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    968: { // Orthworm
       name: 'orthworm',
       displayName: 'Orthworm',
       types: [{type: {name: 'steel'}}],
       stats: [
       {base_stat: 70, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 145, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 65, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/968.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'iron-tail'}}
       ]
   },
    969: { // Glimmet
       name: 'glimmet',
       displayName: 'Glimmet',
       types: [{type: {name: 'rock'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 48, stat: {name: 'hp'}},
        {base_stat: 35, stat: {name: 'attack'}},
        {base_stat: 42, stat: {name: 'defense'}},
        {base_stat: 105, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/969.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'rock-throw'}}
       ]
   },
    970: { // Glimmora
       name: 'glimmora',
       displayName: 'Glimmora',
       types: [{type: {name: 'rock'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 83, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 130, stat: {name: 'special-attack'}},
        {base_stat: 81, stat: {name: 'special-defense'}},
        {base_stat: 86, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/970.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'rock-throw'}}
       ]
   },
    971: { // Greavard
       name: 'greavard',
       displayName: 'Greavard',
       types: [{type: {name: 'ghost'}}],
       stats: [
       {base_stat: 50, stat: {name: 'hp'}},
        {base_stat: 61, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 34, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/971.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    972: { // Houndstone
       name: 'houndstone',
       displayName: 'Houndstone',
       types: [{type: {name: 'ghost'}}],
       stats: [
       {base_stat: 72, stat: {name: 'hp'}},
        {base_stat: 101, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 97, stat: {name: 'special-defense'}},
        {base_stat: 68, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/972.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    973: { // Flamigo
       name: 'flamigo',
       displayName: 'Flamigo',
       types: [{type: {name: 'flying'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 82, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 74, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 64, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/973.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'aerial-ace'}},
        {move: {name: 'air-slash'}},
        {move: {name: 'fly'}},
        {move: {name: 'hurricane'}}
       ]
   },
    974: { // Cetoddle
       name: 'cetoddle',
       displayName: 'Cetoddle',
       types: [{type: {name: 'ice'}}],
       stats: [
       {base_stat: 108, stat: {name: 'hp'}},
        {base_stat: 68, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 30, stat: {name: 'special-attack'}},
        {base_stat: 40, stat: {name: 'special-defense'}},
        {base_stat: 43, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/974.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-shard'}},
        {move: {name: 'icy-wind'}}
       ]
   },
    975: { // Cetitan
       name: 'cetitan',
       displayName: 'Cetitan',
       types: [{type: {name: 'ice'}}],
       stats: [
       {base_stat: 170, stat: {name: 'hp'}},
        {base_stat: 113, stat: {name: 'attack'}},
        {base_stat: 65, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 55, stat: {name: 'special-defense'}},
        {base_stat: 73, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/975.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-punch'}},
        {move: {name: 'ice-shard'}}
       ]
   },
    976: { // Veluza
       name: 'veluza',
       displayName: 'Veluza',
       types: [{type: {name: 'water'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 102, stat: {name: 'attack'}},
        {base_stat: 73, stat: {name: 'defense'}},
        {base_stat: 78, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/976.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'psychic'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    977: { // Dondozo
       name: 'dondozo',
       displayName: 'Dondozo',
       types: [{type: {name: 'water'}}],
       stats: [
       {base_stat: 150, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 115, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 35, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/977.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'water-gun'}},
        {move: {name: 'aqua-tail'}}
       ]
   },
    978: { // Tatsugiri Curly
       name: 'tatsugiri-curly',
       displayName: 'Tatsugiri Curly',
       types: [{type: {name: 'dragon'}}, {type: {name: 'water'}}],
       stats: [
       {base_stat: 68, stat: {name: 'hp'}},
        {base_stat: 50, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 120, stat: {name: 'special-attack'}},
        {base_stat: 95, stat: {name: 'special-defense'}},
        {base_stat: 82, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}},
        {move: {name: 'surf'}}
       ]
   },
    979: { // Annihilape
       name: 'annihilape',
       displayName: 'Annihilape',
       types: [{type: {name: 'fighting'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 110, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 90, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}},
        {move: {name: 'focus-blast'}}
       ]
   },
    980: { // Clodsire
       name: 'clodsire',
       displayName: 'Clodsire',
       types: [{type: {name: 'poison'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 130, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 20, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/980.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}}
       ]
   },
    981: { // Farigiraf
       name: 'farigiraf',
       displayName: 'Farigiraf',
       types: [{type: {name: 'normal'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 120, stat: {name: 'hp'}},
        {base_stat: 90, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 110, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/981.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'swift'}}
       ]
   },
    982: { // Dudunsparce Two Segment
       name: 'dudunsparce-two-segment',
       displayName: 'Dudunsparce Two Segment',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 125, stat: {name: 'hp'}},
        {base_stat: 100, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 75, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/982.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}}
       ]
   },
    983: { // Kingambit
       name: 'kingambit',
       displayName: 'Kingambit',
       types: [{type: {name: 'dark'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 135, stat: {name: 'attack'}},
        {base_stat: 120, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'night-slash'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'flash-cannon'}}
       ]
   },
    984: { // Great Tusk
       name: 'great-tusk',
       displayName: 'Great Tusk',
       types: [{type: {name: 'ground'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 115, stat: {name: 'hp'}},
        {base_stat: 131, stat: {name: 'attack'}},
        {base_stat: 131, stat: {name: 'defense'}},
        {base_stat: 53, stat: {name: 'special-attack'}},
        {base_stat: 53, stat: {name: 'special-defense'}},
        {base_stat: 87, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/984.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}},
        {move: {name: 'bulldoze'}}
       ]
   },
    985: { // Scream Tail
       name: 'scream-tail',
       displayName: 'Scream Tail',
       types: [{type: {name: 'fairy'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 115, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 99, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 115, stat: {name: 'special-defense'}},
        {base_stat: 111, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/985.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dazzling-gleam'}},
        {move: {name: 'play-rough'}},
        {move: {name: 'psychic'}},
        {move: {name: 'psybeam'}}
       ]
   },
    986: { // Brute Bonnet
       name: 'brute-bonnet',
       displayName: 'Brute Bonnet',
       types: [{type: {name: 'grass'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 111, stat: {name: 'hp'}},
        {base_stat: 127, stat: {name: 'attack'}},
        {base_stat: 99, stat: {name: 'defense'}},
        {base_stat: 79, stat: {name: 'special-attack'}},
        {base_stat: 99, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/986.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    987: { // Flutter Mane
       name: 'flutter-mane',
       displayName: 'Flutter Mane',
       types: [{type: {name: 'ghost'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 55, stat: {name: 'attack'}},
        {base_stat: 55, stat: {name: 'defense'}},
        {base_stat: 135, stat: {name: 'special-attack'}},
        {base_stat: 135, stat: {name: 'special-defense'}},
        {base_stat: 135, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    988: { // Slither Wing
       name: 'slither-wing',
       displayName: 'Slither Wing',
       types: [{type: {name: 'bug'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 135, stat: {name: 'attack'}},
        {base_stat: 79, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 105, stat: {name: 'special-defense'}},
        {base_stat: 81, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/988.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'bug-buzz'}},
        {move: {name: 'leech-life'}},
        {move: {name: 'bug-bite'}},
        {move: {name: 'close-combat'}}
       ]
   },
    989: { // Sandy Shocks
       name: 'sandy-shocks',
       displayName: 'Sandy Shocks',
       types: [{type: {name: 'electric'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 81, stat: {name: 'attack'}},
        {base_stat: 97, stat: {name: 'defense'}},
        {base_stat: 121, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 101, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/989.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'spark'}}
       ]
   },
    990: { // Iron Treads
       name: 'iron-treads',
       displayName: 'Iron Treads',
       types: [{type: {name: 'ground'}}, {type: {name: 'steel'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 112, stat: {name: 'attack'}},
        {base_stat: 120, stat: {name: 'defense'}},
        {base_stat: 72, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 106, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/990.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'bulldoze'}},
        {move: {name: 'mud-shot'}}
       ]
   },
    991: { // Iron Bundle
       name: 'iron-bundle',
       displayName: 'Iron Bundle',
       types: [{type: {name: 'ice'}}, {type: {name: 'water'}}],
       stats: [
       {base_stat: 56, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 114, stat: {name: 'defense'}},
        {base_stat: 124, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 136, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/991.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'ice-beam'}},
        {move: {name: 'blizzard'}},
        {move: {name: 'ice-punch'}},
        {move: {name: 'icy-wind'}}
       ]
   },
    992: { // Iron Hands
       name: 'iron-hands',
       displayName: 'Iron Hands',
       types: [{type: {name: 'fighting'}}, {type: {name: 'electric'}}],
       stats: [
       {base_stat: 154, stat: {name: 'hp'}},
        {base_stat: 140, stat: {name: 'attack'}},
        {base_stat: 108, stat: {name: 'defense'}},
        {base_stat: 50, stat: {name: 'special-attack'}},
        {base_stat: 68, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}},
        {move: {name: 'focus-blast'}}
       ]
   },
    993: { // Iron Jugulis
       name: 'iron-jugulis',
       displayName: 'Iron Jugulis',
       types: [{type: {name: 'dark'}}, {type: {name: 'flying'}}],
       stats: [
       {base_stat: 94, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 86, stat: {name: 'defense'}},
        {base_stat: 122, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 108, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/993.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'air-slash'}},
        {move: {name: 'fly'}}
       ]
   },
    994: { // Iron Moth
       name: 'iron-moth',
       displayName: 'Iron Moth',
       types: [{type: {name: 'fire'}}, {type: {name: 'poison'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 70, stat: {name: 'attack'}},
        {base_stat: 60, stat: {name: 'defense'}},
        {base_stat: 140, stat: {name: 'special-attack'}},
        {base_stat: 110, stat: {name: 'special-defense'}},
        {base_stat: 110, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/994.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'ember'}}
       ]
   },
    995: { // Iron Thorns
       name: 'iron-thorns',
       displayName: 'Iron Thorns',
       types: [{type: {name: 'rock'}}, {type: {name: 'electric'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 134, stat: {name: 'attack'}},
        {base_stat: 110, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 84, stat: {name: 'special-defense'}},
        {base_stat: 72, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/995.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'rock-slide'}},
        {move: {name: 'stone-edge'}},
        {move: {name: 'power-gem'}},
        {move: {name: 'rock-throw'}}
       ]
   },
    996: { // Frigibax
       name: 'frigibax',
       displayName: 'Frigibax',
       types: [{type: {name: 'dragon'}}, {type: {name: 'ice'}}],
       stats: [
       {base_stat: 65, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 35, stat: {name: 'special-attack'}},
        {base_stat: 45, stat: {name: 'special-defense'}},
        {base_stat: 55, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/996.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    997: { // Arctibax
       name: 'arctibax',
       displayName: 'Arctibax',
       types: [{type: {name: 'dragon'}}, {type: {name: 'ice'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 95, stat: {name: 'attack'}},
        {base_stat: 66, stat: {name: 'defense'}},
        {base_stat: 45, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 62, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/997.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    998: { // Baxcalibur
       name: 'baxcalibur',
       displayName: 'Baxcalibur',
       types: [{type: {name: 'dragon'}}, {type: {name: 'ice'}}],
       stats: [
       {base_stat: 115, stat: {name: 'hp'}},
        {base_stat: 145, stat: {name: 'attack'}},
        {base_stat: 92, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 86, stat: {name: 'special-defense'}},
        {base_stat: 87, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/998.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    999: { // Gimmighoul
       name: 'gimmighoul',
       displayName: 'Gimmighoul',
       types: [{type: {name: 'ghost'}}],
       stats: [
       {base_stat: 45, stat: {name: 'hp'}},
        {base_stat: 30, stat: {name: 'attack'}},
        {base_stat: 70, stat: {name: 'defense'}},
        {base_stat: 75, stat: {name: 'special-attack'}},
        {base_stat: 70, stat: {name: 'special-defense'}},
        {base_stat: 10, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/999.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'shadow-ball'}},
        {move: {name: 'hex'}},
        {move: {name: 'night-shade'}},
        {move: {name: 'confuse-ray'}}
       ]
   },
    1000: { // Gholdengo
       name: 'gholdengo',
       displayName: 'Gholdengo',
       types: [{type: {name: 'steel'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 87, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 95, stat: {name: 'defense'}},
        {base_stat: 133, stat: {name: 'special-attack'}},
        {base_stat: 91, stat: {name: 'special-defense'}},
        {base_stat: 84, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'shadow-ball'}}
       ]
   },
    1001: { // Wo Chien
       name: 'wo-chien',
       displayName: 'Wo Chien',
       types: [{type: {name: 'dark'}}, {type: {name: 'grass'}}],
       stats: [
       {base_stat: 85, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 135, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1001.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'foul-play'}},
        {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}}
       ]
   },
    1002: { // Chien Pao
       name: 'chien-pao',
       displayName: 'Chien Pao',
       types: [{type: {name: 'dark'}}, {type: {name: 'ice'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 90, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 135, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1002.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'night-slash'}},
        {move: {name: 'blizzard'}}
       ]
   },
    1003: { // Ting Lu
       name: 'ting-lu',
       displayName: 'Ting Lu',
       types: [{type: {name: 'dark'}}, {type: {name: 'ground'}}],
       stats: [
       {base_stat: 155, stat: {name: 'hp'}},
        {base_stat: 110, stat: {name: 'attack'}},
        {base_stat: 125, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 45, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1003.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'earthquake'}},
        {move: {name: 'earth-power'}},
        {move: {name: 'dig'}}
       ]
   },
    1004: { // Chi Yu
       name: 'chi-yu',
       displayName: 'Chi Yu',
       types: [{type: {name: 'dark'}}, {type: {name: 'fire'}}],
       stats: [
       {base_stat: 55, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 135, stat: {name: 'special-attack'}},
        {base_stat: 120, stat: {name: 'special-defense'}},
        {base_stat: 100, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1004.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dark-pulse'}},
        {move: {name: 'crunch'}},
        {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}}
       ]
   },
    1005: { // Roaring Moon
       name: 'roaring-moon',
       displayName: 'Roaring Moon',
       types: [{type: {name: 'dragon'}}, {type: {name: 'dark'}}],
       stats: [
       {base_stat: 105, stat: {name: 'hp'}},
        {base_stat: 139, stat: {name: 'attack'}},
        {base_stat: 71, stat: {name: 'defense'}},
        {base_stat: 55, stat: {name: 'special-attack'}},
        {base_stat: 101, stat: {name: 'special-defense'}},
        {base_stat: 119, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1005.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'dragon-claw'}},
        {move: {name: 'dragon-pulse'}},
        {move: {name: 'draco-meteor'}},
        {move: {name: 'outrage'}}
       ]
   },
    1006: { // Iron Valiant
       name: 'iron-valiant',
       displayName: 'Iron Valiant',
       types: [{type: {name: 'fairy'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 74, stat: {name: 'hp'}},
        {base_stat: 130, stat: {name: 'attack'}},
        {base_stat: 90, stat: {name: 'defense'}},
        {base_stat: 120, stat: {name: 'special-attack'}},
        {base_stat: 60, stat: {name: 'special-defense'}},
        {base_stat: 116, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1006.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'moonblast'}},
        {move: {name: 'dazzling-gleam'}},
        {move: {name: 'close-combat'}},
        {move: {name: 'aura-sphere'}}
       ]
   },
    1007: { // Koraidon
       name: 'koraidon',
       displayName: 'Koraidon',
       types: [{type: {name: 'fighting'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 135, stat: {name: 'attack'}},
        {base_stat: 115, stat: {name: 'defense'}},
        {base_stat: 85, stat: {name: 'special-attack'}},
        {base_stat: 100, stat: {name: 'special-defense'}},
        {base_stat: 135, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'close-combat'}},
        {move: {name: 'brick-break'}},
        {move: {name: 'low-kick'}},
        {move: {name: 'focus-blast'}}
       ]
   },
    1008: { // Miraidon
       name: 'miraidon',
       displayName: 'Miraidon',
       types: [{type: {name: 'electric'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 100, stat: {name: 'hp'}},
        {base_stat: 85, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 135, stat: {name: 'special-attack'}},
        {base_stat: 115, stat: {name: 'special-defense'}},
        {base_stat: 135, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1008.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'dragon-claw'}}
       ]
   },
    1009: { // Walking Wake
       name: 'walking-wake',
       displayName: 'Walking Wake',
       types: [{type: {name: 'water'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 99, stat: {name: 'hp'}},
        {base_stat: 83, stat: {name: 'attack'}},
        {base_stat: 91, stat: {name: 'defense'}},
        {base_stat: 125, stat: {name: 'special-attack'}},
        {base_stat: 83, stat: {name: 'special-defense'}},
        {base_stat: 109, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1009.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'surf'}},
        {move: {name: 'hydro-pump'}},
        {move: {name: 'scald'}},
        {move: {name: 'dragon-claw'}}
       ]
   },
    1010: { // Iron Leaves
       name: 'iron-leaves',
       displayName: 'Iron Leaves',
       types: [{type: {name: 'grass'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 130, stat: {name: 'attack'}},
        {base_stat: 88, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 108, stat: {name: 'special-defense'}},
        {base_stat: 104, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1010.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    1011: { // Dipplin
       name: 'dipplin',
       displayName: 'Dipplin',
       types: [{type: {name: 'grass'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 110, stat: {name: 'defense'}},
        {base_stat: 95, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 40, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1011.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'dragon-pulse'}}
       ]
   },
    1012: { // Poltchageist
       name: 'poltchageist',
       displayName: 'Poltchageist',
       types: [{type: {name: 'grass'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 40, stat: {name: 'hp'}},
        {base_stat: 45, stat: {name: 'attack'}},
        {base_stat: 45, stat: {name: 'defense'}},
        {base_stat: 74, stat: {name: 'special-attack'}},
        {base_stat: 54, stat: {name: 'special-defense'}},
        {base_stat: 50, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1012.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    1013: { // Sinistcha
       name: 'sinistcha',
       displayName: 'Sinistcha',
       types: [{type: {name: 'grass'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 71, stat: {name: 'hp'}},
        {base_stat: 60, stat: {name: 'attack'}},
        {base_stat: 106, stat: {name: 'defense'}},
        {base_stat: 121, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 70, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1013.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    1014: { // Okidogi
       name: 'okidogi',
       displayName: 'Okidogi',
       types: [{type: {name: 'poison'}}, {type: {name: 'fighting'}}],
       stats: [
       {base_stat: 88, stat: {name: 'hp'}},
        {base_stat: 128, stat: {name: 'attack'}},
        {base_stat: 115, stat: {name: 'defense'}},
        {base_stat: 58, stat: {name: 'special-attack'}},
        {base_stat: 86, stat: {name: 'special-defense'}},
        {base_stat: 80, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1014.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}}
       ]
   },
    1015: { // Munkidori
       name: 'munkidori',
       displayName: 'Munkidori',
       types: [{type: {name: 'poison'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 88, stat: {name: 'hp'}},
        {base_stat: 75, stat: {name: 'attack'}},
        {base_stat: 66, stat: {name: 'defense'}},
        {base_stat: 130, stat: {name: 'special-attack'}},
        {base_stat: 90, stat: {name: 'special-defense'}},
        {base_stat: 106, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1015.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}}
       ]
   },
    1016: { // Fezandipiti
       name: 'fezandipiti',
       displayName: 'Fezandipiti',
       types: [{type: {name: 'poison'}}, {type: {name: 'fairy'}}],
       stats: [
       {base_stat: 88, stat: {name: 'hp'}},
        {base_stat: 91, stat: {name: 'attack'}},
        {base_stat: 82, stat: {name: 'defense'}},
        {base_stat: 70, stat: {name: 'special-attack'}},
        {base_stat: 125, stat: {name: 'special-defense'}},
        {base_stat: 99, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1016.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'poison-jab'}},
        {move: {name: 'toxic'}},
        {move: {name: 'moonblast'}}
       ]
   },
    1017: { // Ogerpon
       name: 'ogerpon',
       displayName: 'Ogerpon',
       types: [{type: {name: 'grass'}}],
       stats: [
       {base_stat: 80, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 84, stat: {name: 'defense'}},
        {base_stat: 60, stat: {name: 'special-attack'}},
        {base_stat: 96, stat: {name: 'special-defense'}},
        {base_stat: 110, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1017.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    1018: { // Archaludon
       name: 'archaludon',
       displayName: 'Archaludon',
       types: [{type: {name: 'steel'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 105, stat: {name: 'attack'}},
        {base_stat: 130, stat: {name: 'defense'}},
        {base_stat: 125, stat: {name: 'special-attack'}},
        {base_stat: 65, stat: {name: 'special-defense'}},
        {base_stat: 85, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1018.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'metal-claw'}}
       ]
   },
    1019: { // Hydrapple
       name: 'hydrapple',
       displayName: 'Hydrapple',
       types: [{type: {name: 'grass'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 106, stat: {name: 'hp'}},
        {base_stat: 80, stat: {name: 'attack'}},
        {base_stat: 110, stat: {name: 'defense'}},
        {base_stat: 120, stat: {name: 'special-attack'}},
        {base_stat: 80, stat: {name: 'special-defense'}},
        {base_stat: 44, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1019.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'solar-beam'}},
        {move: {name: 'energy-ball'}},
        {move: {name: 'leaf-storm'}},
        {move: {name: 'magical-leaf'}}
       ]
   },
    1020: { // Gouging Fire
       name: 'gouging-fire',
       displayName: 'Gouging Fire',
       types: [{type: {name: 'fire'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 105, stat: {name: 'hp'}},
        {base_stat: 115, stat: {name: 'attack'}},
        {base_stat: 121, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 93, stat: {name: 'special-defense'}},
        {base_stat: 91, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1020.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flamethrower'}},
        {move: {name: 'fire-blast'}},
        {move: {name: 'heat-wave'}},
        {move: {name: 'dragon-claw'}}
       ]
   },
    1021: { // Raging Bolt
       name: 'raging-bolt',
       displayName: 'Raging Bolt',
       types: [{type: {name: 'electric'}}, {type: {name: 'dragon'}}],
       stats: [
       {base_stat: 125, stat: {name: 'hp'}},
        {base_stat: 73, stat: {name: 'attack'}},
        {base_stat: 91, stat: {name: 'defense'}},
        {base_stat: 137, stat: {name: 'special-attack'}},
        {base_stat: 89, stat: {name: 'special-defense'}},
        {base_stat: 75, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1021.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'thunderbolt'}},
        {move: {name: 'thunder'}},
        {move: {name: 'discharge'}},
        {move: {name: 'dragon-pulse'}}
       ]
   },
    1022: { // Iron Boulder
       name: 'iron-boulder',
       displayName: 'Iron Boulder',
       types: [{type: {name: 'rock'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 120, stat: {name: 'attack'}},
        {base_stat: 80, stat: {name: 'defense'}},
        {base_stat: 68, stat: {name: 'special-attack'}},
        {base_stat: 108, stat: {name: 'special-defense'}},
        {base_stat: 124, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1022.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'stone-edge'}},
        {move: {name: 'rock-throw'}},
        {move: {name: 'psychic'}},
        {move: {name: 'zen-headbutt'}}
       ]
   },
    1023: { // Iron Crown
       name: 'iron-crown',
       displayName: 'Iron Crown',
       types: [{type: {name: 'steel'}}, {type: {name: 'psychic'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 72, stat: {name: 'attack'}},
        {base_stat: 100, stat: {name: 'defense'}},
        {base_stat: 122, stat: {name: 'special-attack'}},
        {base_stat: 108, stat: {name: 'special-defense'}},
        {base_stat: 98, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1023.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'flash-cannon'}},
        {move: {name: 'iron-head'}},
        {move: {name: 'steel-beam'}},
        {move: {name: 'metal-claw'}}
       ]
   },
    1024: { // Terapagos
       name: 'terapagos',
       displayName: 'Terapagos',
       types: [{type: {name: 'normal'}}],
       stats: [
       {base_stat: 90, stat: {name: 'hp'}},
        {base_stat: 65, stat: {name: 'attack'}},
        {base_stat: 85, stat: {name: 'defense'}},
        {base_stat: 65, stat: {name: 'special-attack'}},
        {base_stat: 85, stat: {name: 'special-defense'}},
        {base_stat: 60, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1024.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'hyper-beam'}},
        {move: {name: 'giga-impact'}},
        {move: {name: 'body-slam'}},
        {move: {name: 'take-down'}}
       ]
   },
    1025: { // Pecharunt
       name: 'pecharunt',
       displayName: 'Pecharunt',
       types: [{type: {name: 'poison'}}, {type: {name: 'ghost'}}],
       stats: [
       {base_stat: 88, stat: {name: 'hp'}},
        {base_stat: 88, stat: {name: 'attack'}},
        {base_stat: 160, stat: {name: 'defense'}},
        {base_stat: 88, stat: {name: 'special-attack'}},
        {base_stat: 88, stat: {name: 'special-defense'}},
        {base_stat: 88, stat: {name: 'speed'}}
       ],
       sprites: {
           front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1025.png',
           back_default: 'None'
       },
       moves: [
       {move: {name: 'sludge-bomb'}},
        {move: {name: 'toxic'}},
        {move: {name: 'sludge-wave'}},
        {move: {name: 'shadow-ball'}}
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
    {name: 'mew', url: 'https://pokeapi.co/api/v2/pokemon/151/'},
        {name: 'chikorita', url: 'https://pokeapi.co/api/v2/pokemon/152/'},
    {name: 'bayleef', url: 'https://pokeapi.co/api/v2/pokemon/153/'},
    {name: 'meganium', url: 'https://pokeapi.co/api/v2/pokemon/154/'},
    {name: 'cyndaquil', url: 'https://pokeapi.co/api/v2/pokemon/155/'},
    {name: 'quilava', url: 'https://pokeapi.co/api/v2/pokemon/156/'},
    {name: 'typhlosion', url: 'https://pokeapi.co/api/v2/pokemon/157/'},
    {name: 'totodile', url: 'https://pokeapi.co/api/v2/pokemon/158/'},
    {name: 'croconaw', url: 'https://pokeapi.co/api/v2/pokemon/159/'},
    {name: 'feraligatr', url: 'https://pokeapi.co/api/v2/pokemon/160/'},
    {name: 'sentret', url: 'https://pokeapi.co/api/v2/pokemon/161/'},
    {name: 'furret', url: 'https://pokeapi.co/api/v2/pokemon/162/'},
    {name: 'hoothoot', url: 'https://pokeapi.co/api/v2/pokemon/163/'},
    {name: 'noctowl', url: 'https://pokeapi.co/api/v2/pokemon/164/'},
    {name: 'ledyba', url: 'https://pokeapi.co/api/v2/pokemon/165/'},
    {name: 'ledian', url: 'https://pokeapi.co/api/v2/pokemon/166/'},
    {name: 'spinarak', url: 'https://pokeapi.co/api/v2/pokemon/167/'},
    {name: 'ariados', url: 'https://pokeapi.co/api/v2/pokemon/168/'},
    {name: 'crobat', url: 'https://pokeapi.co/api/v2/pokemon/169/'},
    {name: 'chinchou', url: 'https://pokeapi.co/api/v2/pokemon/170/'},
    {name: 'lanturn', url: 'https://pokeapi.co/api/v2/pokemon/171/'},
    {name: 'pichu', url: 'https://pokeapi.co/api/v2/pokemon/172/'},
    {name: 'cleffa', url: 'https://pokeapi.co/api/v2/pokemon/173/'},
    {name: 'igglybuff', url: 'https://pokeapi.co/api/v2/pokemon/174/'},
    {name: 'togepi', url: 'https://pokeapi.co/api/v2/pokemon/175/'},
    {name: 'togetic', url: 'https://pokeapi.co/api/v2/pokemon/176/'},
    {name: 'natu', url: 'https://pokeapi.co/api/v2/pokemon/177/'},
    {name: 'xatu', url: 'https://pokeapi.co/api/v2/pokemon/178/'},
    {name: 'mareep', url: 'https://pokeapi.co/api/v2/pokemon/179/'},
    {name: 'flaaffy', url: 'https://pokeapi.co/api/v2/pokemon/180/'},
    {name: 'ampharos', url: 'https://pokeapi.co/api/v2/pokemon/181/'},
    {name: 'bellossom', url: 'https://pokeapi.co/api/v2/pokemon/182/'},
    {name: 'marill', url: 'https://pokeapi.co/api/v2/pokemon/183/'},
    {name: 'azumarill', url: 'https://pokeapi.co/api/v2/pokemon/184/'},
    {name: 'sudowoodo', url: 'https://pokeapi.co/api/v2/pokemon/185/'},
    {name: 'politoed', url: 'https://pokeapi.co/api/v2/pokemon/186/'},
    {name: 'hoppip', url: 'https://pokeapi.co/api/v2/pokemon/187/'},
    {name: 'skiploom', url: 'https://pokeapi.co/api/v2/pokemon/188/'},
    {name: 'jumpluff', url: 'https://pokeapi.co/api/v2/pokemon/189/'},
    {name: 'aipom', url: 'https://pokeapi.co/api/v2/pokemon/190/'},
    {name: 'sunkern', url: 'https://pokeapi.co/api/v2/pokemon/191/'},
    {name: 'sunflora', url: 'https://pokeapi.co/api/v2/pokemon/192/'},
    {name: 'yanma', url: 'https://pokeapi.co/api/v2/pokemon/193/'},
    {name: 'wooper', url: 'https://pokeapi.co/api/v2/pokemon/194/'},
    {name: 'quagsire', url: 'https://pokeapi.co/api/v2/pokemon/195/'},
    {name: 'espeon', url: 'https://pokeapi.co/api/v2/pokemon/196/'},
    {name: 'umbreon', url: 'https://pokeapi.co/api/v2/pokemon/197/'},
    {name: 'murkrow', url: 'https://pokeapi.co/api/v2/pokemon/198/'},
    {name: 'slowking', url: 'https://pokeapi.co/api/v2/pokemon/199/'},
    {name: 'misdreavus', url: 'https://pokeapi.co/api/v2/pokemon/200/'},
    {name: 'unown', url: 'https://pokeapi.co/api/v2/pokemon/201/'},
    {name: 'wobbuffet', url: 'https://pokeapi.co/api/v2/pokemon/202/'},
    {name: 'girafarig', url: 'https://pokeapi.co/api/v2/pokemon/203/'},
    {name: 'pineco', url: 'https://pokeapi.co/api/v2/pokemon/204/'},
    {name: 'forretress', url: 'https://pokeapi.co/api/v2/pokemon/205/'},
    {name: 'dunsparce', url: 'https://pokeapi.co/api/v2/pokemon/206/'},
    {name: 'gligar', url: 'https://pokeapi.co/api/v2/pokemon/207/'},
    {name: 'steelix', url: 'https://pokeapi.co/api/v2/pokemon/208/'},
    {name: 'snubbull', url: 'https://pokeapi.co/api/v2/pokemon/209/'},
    {name: 'granbull', url: 'https://pokeapi.co/api/v2/pokemon/210/'},
    {name: 'qwilfish', url: 'https://pokeapi.co/api/v2/pokemon/211/'},
    {name: 'scizor', url: 'https://pokeapi.co/api/v2/pokemon/212/'},
    {name: 'shuckle', url: 'https://pokeapi.co/api/v2/pokemon/213/'},
    {name: 'heracross', url: 'https://pokeapi.co/api/v2/pokemon/214/'},
    {name: 'sneasel', url: 'https://pokeapi.co/api/v2/pokemon/215/'},
    {name: 'teddiursa', url: 'https://pokeapi.co/api/v2/pokemon/216/'},
    {name: 'ursaring', url: 'https://pokeapi.co/api/v2/pokemon/217/'},
    {name: 'slugma', url: 'https://pokeapi.co/api/v2/pokemon/218/'},
    {name: 'magcargo', url: 'https://pokeapi.co/api/v2/pokemon/219/'},
    {name: 'swinub', url: 'https://pokeapi.co/api/v2/pokemon/220/'},
    {name: 'piloswine', url: 'https://pokeapi.co/api/v2/pokemon/221/'},
    {name: 'corsola', url: 'https://pokeapi.co/api/v2/pokemon/222/'},
    {name: 'remoraid', url: 'https://pokeapi.co/api/v2/pokemon/223/'},
    {name: 'octillery', url: 'https://pokeapi.co/api/v2/pokemon/224/'},
    {name: 'delibird', url: 'https://pokeapi.co/api/v2/pokemon/225/'},
    {name: 'mantine', url: 'https://pokeapi.co/api/v2/pokemon/226/'},
    {name: 'skarmory', url: 'https://pokeapi.co/api/v2/pokemon/227/'},
    {name: 'houndour', url: 'https://pokeapi.co/api/v2/pokemon/228/'},
    {name: 'houndoom', url: 'https://pokeapi.co/api/v2/pokemon/229/'},
    {name: 'kingdra', url: 'https://pokeapi.co/api/v2/pokemon/230/'},
    {name: 'phanpy', url: 'https://pokeapi.co/api/v2/pokemon/231/'},
    {name: 'donphan', url: 'https://pokeapi.co/api/v2/pokemon/232/'},
    {name: 'porygon2', url: 'https://pokeapi.co/api/v2/pokemon/233/'},
    {name: 'stantler', url: 'https://pokeapi.co/api/v2/pokemon/234/'},
    {name: 'smeargle', url: 'https://pokeapi.co/api/v2/pokemon/235/'},
    {name: 'tyrogue', url: 'https://pokeapi.co/api/v2/pokemon/236/'},
    {name: 'hitmontop', url: 'https://pokeapi.co/api/v2/pokemon/237/'},
    {name: 'smoochum', url: 'https://pokeapi.co/api/v2/pokemon/238/'},
    {name: 'elekid', url: 'https://pokeapi.co/api/v2/pokemon/239/'},
    {name: 'magby', url: 'https://pokeapi.co/api/v2/pokemon/240/'},
    {name: 'miltank', url: 'https://pokeapi.co/api/v2/pokemon/241/'},
    {name: 'blissey', url: 'https://pokeapi.co/api/v2/pokemon/242/'},
    {name: 'raikou', url: 'https://pokeapi.co/api/v2/pokemon/243/'},
    {name: 'entei', url: 'https://pokeapi.co/api/v2/pokemon/244/'},
    {name: 'suicune', url: 'https://pokeapi.co/api/v2/pokemon/245/'},
    {name: 'larvitar', url: 'https://pokeapi.co/api/v2/pokemon/246/'},
    {name: 'pupitar', url: 'https://pokeapi.co/api/v2/pokemon/247/'},
    {name: 'tyranitar', url: 'https://pokeapi.co/api/v2/pokemon/248/'},
    {name: 'lugia', url: 'https://pokeapi.co/api/v2/pokemon/249/'},
    {name: 'ho-oh', url: 'https://pokeapi.co/api/v2/pokemon/250/'},
    {name: 'celebi', url: 'https://pokeapi.co/api/v2/pokemon/251/'},
    {name: 'treecko', url: 'https://pokeapi.co/api/v2/pokemon/252/'},
    {name: 'grovyle', url: 'https://pokeapi.co/api/v2/pokemon/253/'},
    {name: 'sceptile', url: 'https://pokeapi.co/api/v2/pokemon/254/'},
    {name: 'torchic', url: 'https://pokeapi.co/api/v2/pokemon/255/'},
    {name: 'combusken', url: 'https://pokeapi.co/api/v2/pokemon/256/'},
    {name: 'blaziken', url: 'https://pokeapi.co/api/v2/pokemon/257/'},
    {name: 'mudkip', url: 'https://pokeapi.co/api/v2/pokemon/258/'},
    {name: 'marshtomp', url: 'https://pokeapi.co/api/v2/pokemon/259/'},
    {name: 'swampert', url: 'https://pokeapi.co/api/v2/pokemon/260/'},
    {name: 'poochyena', url: 'https://pokeapi.co/api/v2/pokemon/261/'},
    {name: 'mightyena', url: 'https://pokeapi.co/api/v2/pokemon/262/'},
    {name: 'zigzagoon', url: 'https://pokeapi.co/api/v2/pokemon/263/'},
    {name: 'linoone', url: 'https://pokeapi.co/api/v2/pokemon/264/'},
    {name: 'wurmple', url: 'https://pokeapi.co/api/v2/pokemon/265/'},
    {name: 'silcoon', url: 'https://pokeapi.co/api/v2/pokemon/266/'},
    {name: 'beautifly', url: 'https://pokeapi.co/api/v2/pokemon/267/'},
    {name: 'cascoon', url: 'https://pokeapi.co/api/v2/pokemon/268/'},
    {name: 'dustox', url: 'https://pokeapi.co/api/v2/pokemon/269/'},
    {name: 'lotad', url: 'https://pokeapi.co/api/v2/pokemon/270/'},
    {name: 'lombre', url: 'https://pokeapi.co/api/v2/pokemon/271/'},
    {name: 'ludicolo', url: 'https://pokeapi.co/api/v2/pokemon/272/'},
    {name: 'seedot', url: 'https://pokeapi.co/api/v2/pokemon/273/'},
    {name: 'nuzleaf', url: 'https://pokeapi.co/api/v2/pokemon/274/'},
    {name: 'shiftry', url: 'https://pokeapi.co/api/v2/pokemon/275/'},
    {name: 'taillow', url: 'https://pokeapi.co/api/v2/pokemon/276/'},
    {name: 'swellow', url: 'https://pokeapi.co/api/v2/pokemon/277/'},
    {name: 'wingull', url: 'https://pokeapi.co/api/v2/pokemon/278/'},
    {name: 'pelipper', url: 'https://pokeapi.co/api/v2/pokemon/279/'},
    {name: 'ralts', url: 'https://pokeapi.co/api/v2/pokemon/280/'},
    {name: 'kirlia', url: 'https://pokeapi.co/api/v2/pokemon/281/'},
    {name: 'gardevoir', url: 'https://pokeapi.co/api/v2/pokemon/282/'},
    {name: 'surskit', url: 'https://pokeapi.co/api/v2/pokemon/283/'},
    {name: 'masquerain', url: 'https://pokeapi.co/api/v2/pokemon/284/'},
    {name: 'shroomish', url: 'https://pokeapi.co/api/v2/pokemon/285/'},
    {name: 'breloom', url: 'https://pokeapi.co/api/v2/pokemon/286/'},
    {name: 'slakoth', url: 'https://pokeapi.co/api/v2/pokemon/287/'},
    {name: 'vigoroth', url: 'https://pokeapi.co/api/v2/pokemon/288/'},
    {name: 'slaking', url: 'https://pokeapi.co/api/v2/pokemon/289/'},
    {name: 'nincada', url: 'https://pokeapi.co/api/v2/pokemon/290/'},
    {name: 'ninjask', url: 'https://pokeapi.co/api/v2/pokemon/291/'},
    {name: 'shedinja', url: 'https://pokeapi.co/api/v2/pokemon/292/'},
    {name: 'whismur', url: 'https://pokeapi.co/api/v2/pokemon/293/'},
    {name: 'loudred', url: 'https://pokeapi.co/api/v2/pokemon/294/'},
    {name: 'exploud', url: 'https://pokeapi.co/api/v2/pokemon/295/'},
    {name: 'makuhita', url: 'https://pokeapi.co/api/v2/pokemon/296/'},
    {name: 'hariyama', url: 'https://pokeapi.co/api/v2/pokemon/297/'},
    {name: 'azurill', url: 'https://pokeapi.co/api/v2/pokemon/298/'},
    {name: 'nosepass', url: 'https://pokeapi.co/api/v2/pokemon/299/'},
    {name: 'skitty', url: 'https://pokeapi.co/api/v2/pokemon/300/'},
    {name: 'delcatty', url: 'https://pokeapi.co/api/v2/pokemon/301/'},
    {name: 'sableye', url: 'https://pokeapi.co/api/v2/pokemon/302/'},
    {name: 'mawile', url: 'https://pokeapi.co/api/v2/pokemon/303/'},
    {name: 'aron', url: 'https://pokeapi.co/api/v2/pokemon/304/'},
    {name: 'lairon', url: 'https://pokeapi.co/api/v2/pokemon/305/'},
    {name: 'aggron', url: 'https://pokeapi.co/api/v2/pokemon/306/'},
    {name: 'meditite', url: 'https://pokeapi.co/api/v2/pokemon/307/'},
    {name: 'medicham', url: 'https://pokeapi.co/api/v2/pokemon/308/'},
    {name: 'electrike', url: 'https://pokeapi.co/api/v2/pokemon/309/'},
    {name: 'manectric', url: 'https://pokeapi.co/api/v2/pokemon/310/'},
    {name: 'plusle', url: 'https://pokeapi.co/api/v2/pokemon/311/'},
    {name: 'minun', url: 'https://pokeapi.co/api/v2/pokemon/312/'},
    {name: 'volbeat', url: 'https://pokeapi.co/api/v2/pokemon/313/'},
    {name: 'illumise', url: 'https://pokeapi.co/api/v2/pokemon/314/'},
    {name: 'roselia', url: 'https://pokeapi.co/api/v2/pokemon/315/'},
    {name: 'gulpin', url: 'https://pokeapi.co/api/v2/pokemon/316/'},
    {name: 'swalot', url: 'https://pokeapi.co/api/v2/pokemon/317/'},
    {name: 'carvanha', url: 'https://pokeapi.co/api/v2/pokemon/318/'},
    {name: 'sharpedo', url: 'https://pokeapi.co/api/v2/pokemon/319/'},
    {name: 'wailmer', url: 'https://pokeapi.co/api/v2/pokemon/320/'},
    {name: 'wailord', url: 'https://pokeapi.co/api/v2/pokemon/321/'},
    {name: 'numel', url: 'https://pokeapi.co/api/v2/pokemon/322/'},
    {name: 'camerupt', url: 'https://pokeapi.co/api/v2/pokemon/323/'},
    {name: 'torkoal', url: 'https://pokeapi.co/api/v2/pokemon/324/'},
    {name: 'spoink', url: 'https://pokeapi.co/api/v2/pokemon/325/'},
    {name: 'grumpig', url: 'https://pokeapi.co/api/v2/pokemon/326/'},
    {name: 'spinda', url: 'https://pokeapi.co/api/v2/pokemon/327/'},
    {name: 'trapinch', url: 'https://pokeapi.co/api/v2/pokemon/328/'},
    {name: 'vibrava', url: 'https://pokeapi.co/api/v2/pokemon/329/'},
    {name: 'flygon', url: 'https://pokeapi.co/api/v2/pokemon/330/'},
    {name: 'cacnea', url: 'https://pokeapi.co/api/v2/pokemon/331/'},
    {name: 'cacturne', url: 'https://pokeapi.co/api/v2/pokemon/332/'},
    {name: 'swablu', url: 'https://pokeapi.co/api/v2/pokemon/333/'},
    {name: 'altaria', url: 'https://pokeapi.co/api/v2/pokemon/334/'},
    {name: 'zangoose', url: 'https://pokeapi.co/api/v2/pokemon/335/'},
    {name: 'seviper', url: 'https://pokeapi.co/api/v2/pokemon/336/'},
    {name: 'lunatone', url: 'https://pokeapi.co/api/v2/pokemon/337/'},
    {name: 'solrock', url: 'https://pokeapi.co/api/v2/pokemon/338/'},
    {name: 'barboach', url: 'https://pokeapi.co/api/v2/pokemon/339/'},
    {name: 'whiscash', url: 'https://pokeapi.co/api/v2/pokemon/340/'},
    {name: 'corphish', url: 'https://pokeapi.co/api/v2/pokemon/341/'},
    {name: 'crawdaunt', url: 'https://pokeapi.co/api/v2/pokemon/342/'},
    {name: 'baltoy', url: 'https://pokeapi.co/api/v2/pokemon/343/'},
    {name: 'claydol', url: 'https://pokeapi.co/api/v2/pokemon/344/'},
    {name: 'lileep', url: 'https://pokeapi.co/api/v2/pokemon/345/'},
    {name: 'cradily', url: 'https://pokeapi.co/api/v2/pokemon/346/'},
    {name: 'anorith', url: 'https://pokeapi.co/api/v2/pokemon/347/'},
    {name: 'armaldo', url: 'https://pokeapi.co/api/v2/pokemon/348/'},
    {name: 'feebas', url: 'https://pokeapi.co/api/v2/pokemon/349/'},
    {name: 'milotic', url: 'https://pokeapi.co/api/v2/pokemon/350/'},
    {name: 'castform', url: 'https://pokeapi.co/api/v2/pokemon/351/'},
    {name: 'kecleon', url: 'https://pokeapi.co/api/v2/pokemon/352/'},
    {name: 'shuppet', url: 'https://pokeapi.co/api/v2/pokemon/353/'},
    {name: 'banette', url: 'https://pokeapi.co/api/v2/pokemon/354/'},
    {name: 'duskull', url: 'https://pokeapi.co/api/v2/pokemon/355/'},
    {name: 'dusclops', url: 'https://pokeapi.co/api/v2/pokemon/356/'},
    {name: 'tropius', url: 'https://pokeapi.co/api/v2/pokemon/357/'},
    {name: 'chimecho', url: 'https://pokeapi.co/api/v2/pokemon/358/'},
    {name: 'absol', url: 'https://pokeapi.co/api/v2/pokemon/359/'},
    {name: 'wynaut', url: 'https://pokeapi.co/api/v2/pokemon/360/'},
    {name: 'snorunt', url: 'https://pokeapi.co/api/v2/pokemon/361/'},
    {name: 'glalie', url: 'https://pokeapi.co/api/v2/pokemon/362/'},
    {name: 'spheal', url: 'https://pokeapi.co/api/v2/pokemon/363/'},
    {name: 'sealeo', url: 'https://pokeapi.co/api/v2/pokemon/364/'},
    {name: 'walrein', url: 'https://pokeapi.co/api/v2/pokemon/365/'},
    {name: 'clamperl', url: 'https://pokeapi.co/api/v2/pokemon/366/'},
    {name: 'huntail', url: 'https://pokeapi.co/api/v2/pokemon/367/'},
    {name: 'gorebyss', url: 'https://pokeapi.co/api/v2/pokemon/368/'},
    {name: 'relicanth', url: 'https://pokeapi.co/api/v2/pokemon/369/'},
    {name: 'luvdisc', url: 'https://pokeapi.co/api/v2/pokemon/370/'},
    {name: 'bagon', url: 'https://pokeapi.co/api/v2/pokemon/371/'},
    {name: 'shelgon', url: 'https://pokeapi.co/api/v2/pokemon/372/'},
    {name: 'salamence', url: 'https://pokeapi.co/api/v2/pokemon/373/'},
    {name: 'beldum', url: 'https://pokeapi.co/api/v2/pokemon/374/'},
    {name: 'metang', url: 'https://pokeapi.co/api/v2/pokemon/375/'},
    {name: 'metagross', url: 'https://pokeapi.co/api/v2/pokemon/376/'},
    {name: 'regirock', url: 'https://pokeapi.co/api/v2/pokemon/377/'},
    {name: 'regice', url: 'https://pokeapi.co/api/v2/pokemon/378/'},
    {name: 'registeel', url: 'https://pokeapi.co/api/v2/pokemon/379/'},
    {name: 'latias', url: 'https://pokeapi.co/api/v2/pokemon/380/'},
    {name: 'latios', url: 'https://pokeapi.co/api/v2/pokemon/381/'},
    {name: 'kyogre', url: 'https://pokeapi.co/api/v2/pokemon/382/'},
    {name: 'groudon', url: 'https://pokeapi.co/api/v2/pokemon/383/'},
    {name: 'rayquaza', url: 'https://pokeapi.co/api/v2/pokemon/384/'},
    {name: 'jirachi', url: 'https://pokeapi.co/api/v2/pokemon/385/'},
    {name: 'deoxys-normal', url: 'https://pokeapi.co/api/v2/pokemon/386/'},
    {name: 'turtwig', url: 'https://pokeapi.co/api/v2/pokemon/387/'},
    {name: 'grotle', url: 'https://pokeapi.co/api/v2/pokemon/388/'},
    {name: 'torterra', url: 'https://pokeapi.co/api/v2/pokemon/389/'},
    {name: 'chimchar', url: 'https://pokeapi.co/api/v2/pokemon/390/'},
    {name: 'monferno', url: 'https://pokeapi.co/api/v2/pokemon/391/'},
    {name: 'infernape', url: 'https://pokeapi.co/api/v2/pokemon/392/'},
    {name: 'piplup', url: 'https://pokeapi.co/api/v2/pokemon/393/'},
    {name: 'prinplup', url: 'https://pokeapi.co/api/v2/pokemon/394/'},
    {name: 'empoleon', url: 'https://pokeapi.co/api/v2/pokemon/395/'},
    {name: 'starly', url: 'https://pokeapi.co/api/v2/pokemon/396/'},
    {name: 'staravia', url: 'https://pokeapi.co/api/v2/pokemon/397/'},
    {name: 'staraptor', url: 'https://pokeapi.co/api/v2/pokemon/398/'},
    {name: 'bidoof', url: 'https://pokeapi.co/api/v2/pokemon/399/'},
    {name: 'bibarel', url: 'https://pokeapi.co/api/v2/pokemon/400/'},
    {name: 'kricketot', url: 'https://pokeapi.co/api/v2/pokemon/401/'},
    {name: 'kricketune', url: 'https://pokeapi.co/api/v2/pokemon/402/'},
    {name: 'shinx', url: 'https://pokeapi.co/api/v2/pokemon/403/'},
    {name: 'luxio', url: 'https://pokeapi.co/api/v2/pokemon/404/'},
    {name: 'luxray', url: 'https://pokeapi.co/api/v2/pokemon/405/'},
    {name: 'budew', url: 'https://pokeapi.co/api/v2/pokemon/406/'},
    {name: 'roserade', url: 'https://pokeapi.co/api/v2/pokemon/407/'},
    {name: 'cranidos', url: 'https://pokeapi.co/api/v2/pokemon/408/'},
    {name: 'rampardos', url: 'https://pokeapi.co/api/v2/pokemon/409/'},
    {name: 'shieldon', url: 'https://pokeapi.co/api/v2/pokemon/410/'},
    {name: 'bastiodon', url: 'https://pokeapi.co/api/v2/pokemon/411/'},
    {name: 'burmy', url: 'https://pokeapi.co/api/v2/pokemon/412/'},
    {name: 'wormadam-plant', url: 'https://pokeapi.co/api/v2/pokemon/413/'},
    {name: 'mothim', url: 'https://pokeapi.co/api/v2/pokemon/414/'},
    {name: 'combee', url: 'https://pokeapi.co/api/v2/pokemon/415/'},
    {name: 'vespiquen', url: 'https://pokeapi.co/api/v2/pokemon/416/'},
    {name: 'pachirisu', url: 'https://pokeapi.co/api/v2/pokemon/417/'},
    {name: 'buizel', url: 'https://pokeapi.co/api/v2/pokemon/418/'},
    {name: 'floatzel', url: 'https://pokeapi.co/api/v2/pokemon/419/'},
    {name: 'cherubi', url: 'https://pokeapi.co/api/v2/pokemon/420/'},
    {name: 'cherrim', url: 'https://pokeapi.co/api/v2/pokemon/421/'},
    {name: 'shellos', url: 'https://pokeapi.co/api/v2/pokemon/422/'},
    {name: 'gastrodon', url: 'https://pokeapi.co/api/v2/pokemon/423/'},
    {name: 'ambipom', url: 'https://pokeapi.co/api/v2/pokemon/424/'},
    {name: 'drifloon', url: 'https://pokeapi.co/api/v2/pokemon/425/'},
    {name: 'drifblim', url: 'https://pokeapi.co/api/v2/pokemon/426/'},
    {name: 'buneary', url: 'https://pokeapi.co/api/v2/pokemon/427/'},
    {name: 'lopunny', url: 'https://pokeapi.co/api/v2/pokemon/428/'},
    {name: 'mismagius', url: 'https://pokeapi.co/api/v2/pokemon/429/'},
    {name: 'honchkrow', url: 'https://pokeapi.co/api/v2/pokemon/430/'},
    {name: 'glameow', url: 'https://pokeapi.co/api/v2/pokemon/431/'},
    {name: 'purugly', url: 'https://pokeapi.co/api/v2/pokemon/432/'},
    {name: 'chingling', url: 'https://pokeapi.co/api/v2/pokemon/433/'},
    {name: 'stunky', url: 'https://pokeapi.co/api/v2/pokemon/434/'},
    {name: 'skuntank', url: 'https://pokeapi.co/api/v2/pokemon/435/'},
    {name: 'bronzor', url: 'https://pokeapi.co/api/v2/pokemon/436/'},
    {name: 'bronzong', url: 'https://pokeapi.co/api/v2/pokemon/437/'},
    {name: 'bonsly', url: 'https://pokeapi.co/api/v2/pokemon/438/'},
    {name: 'mime-jr', url: 'https://pokeapi.co/api/v2/pokemon/439/'},
    {name: 'happiny', url: 'https://pokeapi.co/api/v2/pokemon/440/'},
    {name: 'chatot', url: 'https://pokeapi.co/api/v2/pokemon/441/'},
    {name: 'spiritomb', url: 'https://pokeapi.co/api/v2/pokemon/442/'},
    {name: 'gible', url: 'https://pokeapi.co/api/v2/pokemon/443/'},
    {name: 'gabite', url: 'https://pokeapi.co/api/v2/pokemon/444/'},
    {name: 'garchomp', url: 'https://pokeapi.co/api/v2/pokemon/445/'},
    {name: 'munchlax', url: 'https://pokeapi.co/api/v2/pokemon/446/'},
    {name: 'riolu', url: 'https://pokeapi.co/api/v2/pokemon/447/'},
    {name: 'lucario', url: 'https://pokeapi.co/api/v2/pokemon/448/'},
    {name: 'hippopotas', url: 'https://pokeapi.co/api/v2/pokemon/449/'},
    {name: 'hippowdon', url: 'https://pokeapi.co/api/v2/pokemon/450/'},
    {name: 'skorupi', url: 'https://pokeapi.co/api/v2/pokemon/451/'},
    {name: 'drapion', url: 'https://pokeapi.co/api/v2/pokemon/452/'},
    {name: 'croagunk', url: 'https://pokeapi.co/api/v2/pokemon/453/'},
    {name: 'toxicroak', url: 'https://pokeapi.co/api/v2/pokemon/454/'},
    {name: 'carnivine', url: 'https://pokeapi.co/api/v2/pokemon/455/'},
    {name: 'finneon', url: 'https://pokeapi.co/api/v2/pokemon/456/'},
    {name: 'lumineon', url: 'https://pokeapi.co/api/v2/pokemon/457/'},
    {name: 'mantyke', url: 'https://pokeapi.co/api/v2/pokemon/458/'},
    {name: 'snover', url: 'https://pokeapi.co/api/v2/pokemon/459/'},
    {name: 'abomasnow', url: 'https://pokeapi.co/api/v2/pokemon/460/'},
    {name: 'weavile', url: 'https://pokeapi.co/api/v2/pokemon/461/'},
    {name: 'magnezone', url: 'https://pokeapi.co/api/v2/pokemon/462/'},
    {name: 'lickilicky', url: 'https://pokeapi.co/api/v2/pokemon/463/'},
    {name: 'rhyperior', url: 'https://pokeapi.co/api/v2/pokemon/464/'},
    {name: 'tangrowth', url: 'https://pokeapi.co/api/v2/pokemon/465/'},
    {name: 'electivire', url: 'https://pokeapi.co/api/v2/pokemon/466/'},
    {name: 'magmortar', url: 'https://pokeapi.co/api/v2/pokemon/467/'},
    {name: 'togekiss', url: 'https://pokeapi.co/api/v2/pokemon/468/'},
    {name: 'yanmega', url: 'https://pokeapi.co/api/v2/pokemon/469/'},
    {name: 'leafeon', url: 'https://pokeapi.co/api/v2/pokemon/470/'},
    {name: 'glaceon', url: 'https://pokeapi.co/api/v2/pokemon/471/'},
    {name: 'gliscor', url: 'https://pokeapi.co/api/v2/pokemon/472/'},
    {name: 'mamoswine', url: 'https://pokeapi.co/api/v2/pokemon/473/'},
    {name: 'porygon-z', url: 'https://pokeapi.co/api/v2/pokemon/474/'},
    {name: 'gallade', url: 'https://pokeapi.co/api/v2/pokemon/475/'},
    {name: 'probopass', url: 'https://pokeapi.co/api/v2/pokemon/476/'},
    {name: 'dusknoir', url: 'https://pokeapi.co/api/v2/pokemon/477/'},
    {name: 'froslass', url: 'https://pokeapi.co/api/v2/pokemon/478/'},
    {name: 'rotom', url: 'https://pokeapi.co/api/v2/pokemon/479/'},
    {name: 'uxie', url: 'https://pokeapi.co/api/v2/pokemon/480/'},
    {name: 'mesprit', url: 'https://pokeapi.co/api/v2/pokemon/481/'},
    {name: 'azelf', url: 'https://pokeapi.co/api/v2/pokemon/482/'},
    {name: 'dialga', url: 'https://pokeapi.co/api/v2/pokemon/483/'},
    {name: 'palkia', url: 'https://pokeapi.co/api/v2/pokemon/484/'},
    {name: 'heatran', url: 'https://pokeapi.co/api/v2/pokemon/485/'},
    {name: 'regigigas', url: 'https://pokeapi.co/api/v2/pokemon/486/'},
    {name: 'giratina-altered', url: 'https://pokeapi.co/api/v2/pokemon/487/'},
    {name: 'cresselia', url: 'https://pokeapi.co/api/v2/pokemon/488/'},
    {name: 'phione', url: 'https://pokeapi.co/api/v2/pokemon/489/'},
    {name: 'manaphy', url: 'https://pokeapi.co/api/v2/pokemon/490/'},
    {name: 'darkrai', url: 'https://pokeapi.co/api/v2/pokemon/491/'},
    {name: 'shaymin-land', url: 'https://pokeapi.co/api/v2/pokemon/492/'},
    {name: 'arceus', url: 'https://pokeapi.co/api/v2/pokemon/493/'},
    {name: 'victini', url: 'https://pokeapi.co/api/v2/pokemon/494/'},
    {name: 'snivy', url: 'https://pokeapi.co/api/v2/pokemon/495/'},
    {name: 'servine', url: 'https://pokeapi.co/api/v2/pokemon/496/'},
    {name: 'serperior', url: 'https://pokeapi.co/api/v2/pokemon/497/'},
    {name: 'tepig', url: 'https://pokeapi.co/api/v2/pokemon/498/'},
    {name: 'pignite', url: 'https://pokeapi.co/api/v2/pokemon/499/'},
    {name: 'emboar', url: 'https://pokeapi.co/api/v2/pokemon/500/'},
    {name: 'oshawott', url: 'https://pokeapi.co/api/v2/pokemon/501/'},
    {name: 'dewott', url: 'https://pokeapi.co/api/v2/pokemon/502/'},
    {name: 'samurott', url: 'https://pokeapi.co/api/v2/pokemon/503/'},
    {name: 'patrat', url: 'https://pokeapi.co/api/v2/pokemon/504/'},
    {name: 'watchog', url: 'https://pokeapi.co/api/v2/pokemon/505/'},
    {name: 'lillipup', url: 'https://pokeapi.co/api/v2/pokemon/506/'},
    {name: 'herdier', url: 'https://pokeapi.co/api/v2/pokemon/507/'},
    {name: 'stoutland', url: 'https://pokeapi.co/api/v2/pokemon/508/'},
    {name: 'purrloin', url: 'https://pokeapi.co/api/v2/pokemon/509/'},
    {name: 'liepard', url: 'https://pokeapi.co/api/v2/pokemon/510/'},
    {name: 'pansage', url: 'https://pokeapi.co/api/v2/pokemon/511/'},
    {name: 'simisage', url: 'https://pokeapi.co/api/v2/pokemon/512/'},
    {name: 'pansear', url: 'https://pokeapi.co/api/v2/pokemon/513/'},
    {name: 'simisear', url: 'https://pokeapi.co/api/v2/pokemon/514/'},
    {name: 'panpour', url: 'https://pokeapi.co/api/v2/pokemon/515/'},
    {name: 'simipour', url: 'https://pokeapi.co/api/v2/pokemon/516/'},
    {name: 'munna', url: 'https://pokeapi.co/api/v2/pokemon/517/'},
    {name: 'musharna', url: 'https://pokeapi.co/api/v2/pokemon/518/'},
    {name: 'pidove', url: 'https://pokeapi.co/api/v2/pokemon/519/'},
    {name: 'tranquill', url: 'https://pokeapi.co/api/v2/pokemon/520/'},
    {name: 'unfezant', url: 'https://pokeapi.co/api/v2/pokemon/521/'},
    {name: 'blitzle', url: 'https://pokeapi.co/api/v2/pokemon/522/'},
    {name: 'zebstrika', url: 'https://pokeapi.co/api/v2/pokemon/523/'},
    {name: 'roggenrola', url: 'https://pokeapi.co/api/v2/pokemon/524/'},
    {name: 'boldore', url: 'https://pokeapi.co/api/v2/pokemon/525/'},
    {name: 'gigalith', url: 'https://pokeapi.co/api/v2/pokemon/526/'},
    {name: 'woobat', url: 'https://pokeapi.co/api/v2/pokemon/527/'},
    {name: 'swoobat', url: 'https://pokeapi.co/api/v2/pokemon/528/'},
    {name: 'drilbur', url: 'https://pokeapi.co/api/v2/pokemon/529/'},
    {name: 'excadrill', url: 'https://pokeapi.co/api/v2/pokemon/530/'},
    {name: 'audino', url: 'https://pokeapi.co/api/v2/pokemon/531/'},
    {name: 'timburr', url: 'https://pokeapi.co/api/v2/pokemon/532/'},
    {name: 'gurdurr', url: 'https://pokeapi.co/api/v2/pokemon/533/'},
    {name: 'conkeldurr', url: 'https://pokeapi.co/api/v2/pokemon/534/'},
    {name: 'tympole', url: 'https://pokeapi.co/api/v2/pokemon/535/'},
    {name: 'palpitoad', url: 'https://pokeapi.co/api/v2/pokemon/536/'},
    {name: 'seismitoad', url: 'https://pokeapi.co/api/v2/pokemon/537/'},
    {name: 'throh', url: 'https://pokeapi.co/api/v2/pokemon/538/'},
    {name: 'sawk', url: 'https://pokeapi.co/api/v2/pokemon/539/'},
    {name: 'sewaddle', url: 'https://pokeapi.co/api/v2/pokemon/540/'},
    {name: 'swadloon', url: 'https://pokeapi.co/api/v2/pokemon/541/'},
    {name: 'leavanny', url: 'https://pokeapi.co/api/v2/pokemon/542/'},
    {name: 'venipede', url: 'https://pokeapi.co/api/v2/pokemon/543/'},
    {name: 'whirlipede', url: 'https://pokeapi.co/api/v2/pokemon/544/'},
    {name: 'scolipede', url: 'https://pokeapi.co/api/v2/pokemon/545/'},
    {name: 'cottonee', url: 'https://pokeapi.co/api/v2/pokemon/546/'},
    {name: 'whimsicott', url: 'https://pokeapi.co/api/v2/pokemon/547/'},
    {name: 'petilil', url: 'https://pokeapi.co/api/v2/pokemon/548/'},
    {name: 'lilligant', url: 'https://pokeapi.co/api/v2/pokemon/549/'},
    {name: 'basculin-red-striped', url: 'https://pokeapi.co/api/v2/pokemon/550/'},
    {name: 'sandile', url: 'https://pokeapi.co/api/v2/pokemon/551/'},
    {name: 'krokorok', url: 'https://pokeapi.co/api/v2/pokemon/552/'},
    {name: 'krookodile', url: 'https://pokeapi.co/api/v2/pokemon/553/'},
    {name: 'darumaka', url: 'https://pokeapi.co/api/v2/pokemon/554/'},
    {name: 'darmanitan-standard', url: 'https://pokeapi.co/api/v2/pokemon/555/'},
    {name: 'maractus', url: 'https://pokeapi.co/api/v2/pokemon/556/'},
    {name: 'dwebble', url: 'https://pokeapi.co/api/v2/pokemon/557/'},
    {name: 'crustle', url: 'https://pokeapi.co/api/v2/pokemon/558/'},
    {name: 'scraggy', url: 'https://pokeapi.co/api/v2/pokemon/559/'},
    {name: 'scrafty', url: 'https://pokeapi.co/api/v2/pokemon/560/'},
    {name: 'sigilyph', url: 'https://pokeapi.co/api/v2/pokemon/561/'},
    {name: 'yamask', url: 'https://pokeapi.co/api/v2/pokemon/562/'},
    {name: 'cofagrigus', url: 'https://pokeapi.co/api/v2/pokemon/563/'},
    {name: 'tirtouga', url: 'https://pokeapi.co/api/v2/pokemon/564/'},
    {name: 'carracosta', url: 'https://pokeapi.co/api/v2/pokemon/565/'},
    {name: 'archen', url: 'https://pokeapi.co/api/v2/pokemon/566/'},
    {name: 'archeops', url: 'https://pokeapi.co/api/v2/pokemon/567/'},
    {name: 'trubbish', url: 'https://pokeapi.co/api/v2/pokemon/568/'},
    {name: 'garbodor', url: 'https://pokeapi.co/api/v2/pokemon/569/'},
    {name: 'zorua', url: 'https://pokeapi.co/api/v2/pokemon/570/'},
    {name: 'zoroark', url: 'https://pokeapi.co/api/v2/pokemon/571/'},
    {name: 'minccino', url: 'https://pokeapi.co/api/v2/pokemon/572/'},
    {name: 'cinccino', url: 'https://pokeapi.co/api/v2/pokemon/573/'},
    {name: 'gothita', url: 'https://pokeapi.co/api/v2/pokemon/574/'},
    {name: 'gothorita', url: 'https://pokeapi.co/api/v2/pokemon/575/'},
    {name: 'gothitelle', url: 'https://pokeapi.co/api/v2/pokemon/576/'},
    {name: 'solosis', url: 'https://pokeapi.co/api/v2/pokemon/577/'},
    {name: 'duosion', url: 'https://pokeapi.co/api/v2/pokemon/578/'},
    {name: 'reuniclus', url: 'https://pokeapi.co/api/v2/pokemon/579/'},
    {name: 'ducklett', url: 'https://pokeapi.co/api/v2/pokemon/580/'},
    {name: 'swanna', url: 'https://pokeapi.co/api/v2/pokemon/581/'},
    {name: 'vanillite', url: 'https://pokeapi.co/api/v2/pokemon/582/'},
    {name: 'vanillish', url: 'https://pokeapi.co/api/v2/pokemon/583/'},
    {name: 'vanilluxe', url: 'https://pokeapi.co/api/v2/pokemon/584/'},
    {name: 'deerling', url: 'https://pokeapi.co/api/v2/pokemon/585/'},
    {name: 'sawsbuck', url: 'https://pokeapi.co/api/v2/pokemon/586/'},
    {name: 'emolga', url: 'https://pokeapi.co/api/v2/pokemon/587/'},
    {name: 'karrablast', url: 'https://pokeapi.co/api/v2/pokemon/588/'},
    {name: 'escavalier', url: 'https://pokeapi.co/api/v2/pokemon/589/'},
    {name: 'foongus', url: 'https://pokeapi.co/api/v2/pokemon/590/'},
    {name: 'amoonguss', url: 'https://pokeapi.co/api/v2/pokemon/591/'},
    {name: 'frillish', url: 'https://pokeapi.co/api/v2/pokemon/592/'},
    {name: 'jellicent', url: 'https://pokeapi.co/api/v2/pokemon/593/'},
    {name: 'alomomola', url: 'https://pokeapi.co/api/v2/pokemon/594/'},
    {name: 'joltik', url: 'https://pokeapi.co/api/v2/pokemon/595/'},
    {name: 'galvantula', url: 'https://pokeapi.co/api/v2/pokemon/596/'},
    {name: 'ferroseed', url: 'https://pokeapi.co/api/v2/pokemon/597/'},
    {name: 'ferrothorn', url: 'https://pokeapi.co/api/v2/pokemon/598/'},
    {name: 'klink', url: 'https://pokeapi.co/api/v2/pokemon/599/'},
    {name: 'klang', url: 'https://pokeapi.co/api/v2/pokemon/600/'},
    {name: 'klinklang', url: 'https://pokeapi.co/api/v2/pokemon/601/'},
    {name: 'tynamo', url: 'https://pokeapi.co/api/v2/pokemon/602/'},
    {name: 'eelektrik', url: 'https://pokeapi.co/api/v2/pokemon/603/'},
    {name: 'eelektross', url: 'https://pokeapi.co/api/v2/pokemon/604/'},
    {name: 'elgyem', url: 'https://pokeapi.co/api/v2/pokemon/605/'},
    {name: 'beheeyem', url: 'https://pokeapi.co/api/v2/pokemon/606/'},
    {name: 'litwick', url: 'https://pokeapi.co/api/v2/pokemon/607/'},
    {name: 'lampent', url: 'https://pokeapi.co/api/v2/pokemon/608/'},
    {name: 'chandelure', url: 'https://pokeapi.co/api/v2/pokemon/609/'},
    {name: 'axew', url: 'https://pokeapi.co/api/v2/pokemon/610/'},
    {name: 'fraxure', url: 'https://pokeapi.co/api/v2/pokemon/611/'},
    {name: 'haxorus', url: 'https://pokeapi.co/api/v2/pokemon/612/'},
    {name: 'cubchoo', url: 'https://pokeapi.co/api/v2/pokemon/613/'},
    {name: 'beartic', url: 'https://pokeapi.co/api/v2/pokemon/614/'},
    {name: 'cryogonal', url: 'https://pokeapi.co/api/v2/pokemon/615/'},
    {name: 'shelmet', url: 'https://pokeapi.co/api/v2/pokemon/616/'},
    {name: 'accelgor', url: 'https://pokeapi.co/api/v2/pokemon/617/'},
    {name: 'stunfisk', url: 'https://pokeapi.co/api/v2/pokemon/618/'},
    {name: 'mienfoo', url: 'https://pokeapi.co/api/v2/pokemon/619/'},
    {name: 'mienshao', url: 'https://pokeapi.co/api/v2/pokemon/620/'},
    {name: 'druddigon', url: 'https://pokeapi.co/api/v2/pokemon/621/'},
    {name: 'golett', url: 'https://pokeapi.co/api/v2/pokemon/622/'},
    {name: 'golurk', url: 'https://pokeapi.co/api/v2/pokemon/623/'},
    {name: 'pawniard', url: 'https://pokeapi.co/api/v2/pokemon/624/'},
    {name: 'bisharp', url: 'https://pokeapi.co/api/v2/pokemon/625/'},
    {name: 'bouffalant', url: 'https://pokeapi.co/api/v2/pokemon/626/'},
    {name: 'rufflet', url: 'https://pokeapi.co/api/v2/pokemon/627/'},
    {name: 'braviary', url: 'https://pokeapi.co/api/v2/pokemon/628/'},
    {name: 'vullaby', url: 'https://pokeapi.co/api/v2/pokemon/629/'},
    {name: 'mandibuzz', url: 'https://pokeapi.co/api/v2/pokemon/630/'},
    {name: 'heatmor', url: 'https://pokeapi.co/api/v2/pokemon/631/'},
    {name: 'durant', url: 'https://pokeapi.co/api/v2/pokemon/632/'},
    {name: 'deino', url: 'https://pokeapi.co/api/v2/pokemon/633/'},
    {name: 'zweilous', url: 'https://pokeapi.co/api/v2/pokemon/634/'},
    {name: 'hydreigon', url: 'https://pokeapi.co/api/v2/pokemon/635/'},
    {name: 'larvesta', url: 'https://pokeapi.co/api/v2/pokemon/636/'},
    {name: 'volcarona', url: 'https://pokeapi.co/api/v2/pokemon/637/'},
    {name: 'cobalion', url: 'https://pokeapi.co/api/v2/pokemon/638/'},
    {name: 'terrakion', url: 'https://pokeapi.co/api/v2/pokemon/639/'},
    {name: 'virizion', url: 'https://pokeapi.co/api/v2/pokemon/640/'},
    {name: 'tornadus-incarnate', url: 'https://pokeapi.co/api/v2/pokemon/641/'},
    {name: 'thundurus-incarnate', url: 'https://pokeapi.co/api/v2/pokemon/642/'},
    {name: 'reshiram', url: 'https://pokeapi.co/api/v2/pokemon/643/'},
    {name: 'zekrom', url: 'https://pokeapi.co/api/v2/pokemon/644/'},
    {name: 'landorus-incarnate', url: 'https://pokeapi.co/api/v2/pokemon/645/'},
    {name: 'kyurem', url: 'https://pokeapi.co/api/v2/pokemon/646/'},
    {name: 'keldeo-ordinary', url: 'https://pokeapi.co/api/v2/pokemon/647/'},
    {name: 'meloetta-aria', url: 'https://pokeapi.co/api/v2/pokemon/648/'},
    {name: 'genesect', url: 'https://pokeapi.co/api/v2/pokemon/649/'},
    {name: 'chespin', url: 'https://pokeapi.co/api/v2/pokemon/650/'},
    {name: 'quilladin', url: 'https://pokeapi.co/api/v2/pokemon/651/'},
    {name: 'chesnaught', url: 'https://pokeapi.co/api/v2/pokemon/652/'},
    {name: 'fennekin', url: 'https://pokeapi.co/api/v2/pokemon/653/'},
    {name: 'braixen', url: 'https://pokeapi.co/api/v2/pokemon/654/'},
    {name: 'delphox', url: 'https://pokeapi.co/api/v2/pokemon/655/'},
    {name: 'froakie', url: 'https://pokeapi.co/api/v2/pokemon/656/'},
    {name: 'frogadier', url: 'https://pokeapi.co/api/v2/pokemon/657/'},
    {name: 'greninja', url: 'https://pokeapi.co/api/v2/pokemon/658/'},
    {name: 'bunnelby', url: 'https://pokeapi.co/api/v2/pokemon/659/'},
    {name: 'diggersby', url: 'https://pokeapi.co/api/v2/pokemon/660/'},
    {name: 'fletchling', url: 'https://pokeapi.co/api/v2/pokemon/661/'},
    {name: 'fletchinder', url: 'https://pokeapi.co/api/v2/pokemon/662/'},
    {name: 'talonflame', url: 'https://pokeapi.co/api/v2/pokemon/663/'},
    {name: 'scatterbug', url: 'https://pokeapi.co/api/v2/pokemon/664/'},
    {name: 'spewpa', url: 'https://pokeapi.co/api/v2/pokemon/665/'},
    {name: 'vivillon', url: 'https://pokeapi.co/api/v2/pokemon/666/'},
    {name: 'litleo', url: 'https://pokeapi.co/api/v2/pokemon/667/'},
    {name: 'pyroar', url: 'https://pokeapi.co/api/v2/pokemon/668/'},
    {name: 'flabebe', url: 'https://pokeapi.co/api/v2/pokemon/669/'},
    {name: 'floette', url: 'https://pokeapi.co/api/v2/pokemon/670/'},
    {name: 'florges', url: 'https://pokeapi.co/api/v2/pokemon/671/'},
    {name: 'skiddo', url: 'https://pokeapi.co/api/v2/pokemon/672/'},
    {name: 'gogoat', url: 'https://pokeapi.co/api/v2/pokemon/673/'},
    {name: 'pancham', url: 'https://pokeapi.co/api/v2/pokemon/674/'},
    {name: 'pangoro', url: 'https://pokeapi.co/api/v2/pokemon/675/'},
    {name: 'furfrou', url: 'https://pokeapi.co/api/v2/pokemon/676/'},
    {name: 'espurr', url: 'https://pokeapi.co/api/v2/pokemon/677/'},
    {name: 'meowstic-male', url: 'https://pokeapi.co/api/v2/pokemon/678/'},
    {name: 'honedge', url: 'https://pokeapi.co/api/v2/pokemon/679/'},
    {name: 'doublade', url: 'https://pokeapi.co/api/v2/pokemon/680/'},
    {name: 'aegislash-shield', url: 'https://pokeapi.co/api/v2/pokemon/681/'},
    {name: 'spritzee', url: 'https://pokeapi.co/api/v2/pokemon/682/'},
    {name: 'aromatisse', url: 'https://pokeapi.co/api/v2/pokemon/683/'},
    {name: 'swirlix', url: 'https://pokeapi.co/api/v2/pokemon/684/'},
    {name: 'slurpuff', url: 'https://pokeapi.co/api/v2/pokemon/685/'},
    {name: 'inkay', url: 'https://pokeapi.co/api/v2/pokemon/686/'},
    {name: 'malamar', url: 'https://pokeapi.co/api/v2/pokemon/687/'},
    {name: 'binacle', url: 'https://pokeapi.co/api/v2/pokemon/688/'},
    {name: 'barbaracle', url: 'https://pokeapi.co/api/v2/pokemon/689/'},
    {name: 'skrelp', url: 'https://pokeapi.co/api/v2/pokemon/690/'},
    {name: 'dragalge', url: 'https://pokeapi.co/api/v2/pokemon/691/'},
    {name: 'clauncher', url: 'https://pokeapi.co/api/v2/pokemon/692/'},
    {name: 'clawitzer', url: 'https://pokeapi.co/api/v2/pokemon/693/'},
    {name: 'helioptile', url: 'https://pokeapi.co/api/v2/pokemon/694/'},
    {name: 'heliolisk', url: 'https://pokeapi.co/api/v2/pokemon/695/'},
    {name: 'tyrunt', url: 'https://pokeapi.co/api/v2/pokemon/696/'},
    {name: 'tyrantrum', url: 'https://pokeapi.co/api/v2/pokemon/697/'},
    {name: 'amaura', url: 'https://pokeapi.co/api/v2/pokemon/698/'},
    {name: 'aurorus', url: 'https://pokeapi.co/api/v2/pokemon/699/'},
    {name: 'sylveon', url: 'https://pokeapi.co/api/v2/pokemon/700/'},
    {name: 'hawlucha', url: 'https://pokeapi.co/api/v2/pokemon/701/'},
    {name: 'dedenne', url: 'https://pokeapi.co/api/v2/pokemon/702/'},
    {name: 'carbink', url: 'https://pokeapi.co/api/v2/pokemon/703/'},
    {name: 'goomy', url: 'https://pokeapi.co/api/v2/pokemon/704/'},
    {name: 'sliggoo', url: 'https://pokeapi.co/api/v2/pokemon/705/'},
    {name: 'goodra', url: 'https://pokeapi.co/api/v2/pokemon/706/'},
    {name: 'klefki', url: 'https://pokeapi.co/api/v2/pokemon/707/'},
    {name: 'phantump', url: 'https://pokeapi.co/api/v2/pokemon/708/'},
    {name: 'trevenant', url: 'https://pokeapi.co/api/v2/pokemon/709/'},
    {name: 'pumpkaboo-average', url: 'https://pokeapi.co/api/v2/pokemon/710/'},
    {name: 'gourgeist-average', url: 'https://pokeapi.co/api/v2/pokemon/711/'},
    {name: 'bergmite', url: 'https://pokeapi.co/api/v2/pokemon/712/'},
    {name: 'avalugg', url: 'https://pokeapi.co/api/v2/pokemon/713/'},
    {name: 'noibat', url: 'https://pokeapi.co/api/v2/pokemon/714/'},
    {name: 'noivern', url: 'https://pokeapi.co/api/v2/pokemon/715/'},
    {name: 'xerneas', url: 'https://pokeapi.co/api/v2/pokemon/716/'},
    {name: 'yveltal', url: 'https://pokeapi.co/api/v2/pokemon/717/'},
    {name: 'zygarde-50', url: 'https://pokeapi.co/api/v2/pokemon/718/'},
    {name: 'diancie', url: 'https://pokeapi.co/api/v2/pokemon/719/'},
    {name: 'hoopa', url: 'https://pokeapi.co/api/v2/pokemon/720/'},
    {name: 'volcanion', url: 'https://pokeapi.co/api/v2/pokemon/721/'},
    {name: 'rowlet', url: 'https://pokeapi.co/api/v2/pokemon/722/'},
    {name: 'dartrix', url: 'https://pokeapi.co/api/v2/pokemon/723/'},
    {name: 'decidueye', url: 'https://pokeapi.co/api/v2/pokemon/724/'},
    {name: 'litten', url: 'https://pokeapi.co/api/v2/pokemon/725/'},
    {name: 'torracat', url: 'https://pokeapi.co/api/v2/pokemon/726/'},
    {name: 'incineroar', url: 'https://pokeapi.co/api/v2/pokemon/727/'},
    {name: 'popplio', url: 'https://pokeapi.co/api/v2/pokemon/728/'},
    {name: 'brionne', url: 'https://pokeapi.co/api/v2/pokemon/729/'},
    {name: 'primarina', url: 'https://pokeapi.co/api/v2/pokemon/730/'},
    {name: 'pikipek', url: 'https://pokeapi.co/api/v2/pokemon/731/'},
    {name: 'trumbeak', url: 'https://pokeapi.co/api/v2/pokemon/732/'},
    {name: 'toucannon', url: 'https://pokeapi.co/api/v2/pokemon/733/'},
    {name: 'yungoos', url: 'https://pokeapi.co/api/v2/pokemon/734/'},
    {name: 'gumshoos', url: 'https://pokeapi.co/api/v2/pokemon/735/'},
    {name: 'grubbin', url: 'https://pokeapi.co/api/v2/pokemon/736/'},
    {name: 'charjabug', url: 'https://pokeapi.co/api/v2/pokemon/737/'},
    {name: 'vikavolt', url: 'https://pokeapi.co/api/v2/pokemon/738/'},
    {name: 'crabrawler', url: 'https://pokeapi.co/api/v2/pokemon/739/'},
    {name: 'crabominable', url: 'https://pokeapi.co/api/v2/pokemon/740/'},
    {name: 'oricorio-baile', url: 'https://pokeapi.co/api/v2/pokemon/741/'},
    {name: 'cutiefly', url: 'https://pokeapi.co/api/v2/pokemon/742/'},
    {name: 'ribombee', url: 'https://pokeapi.co/api/v2/pokemon/743/'},
    {name: 'rockruff', url: 'https://pokeapi.co/api/v2/pokemon/744/'},
    {name: 'lycanroc-midday', url: 'https://pokeapi.co/api/v2/pokemon/745/'},
    {name: 'wishiwashi-solo', url: 'https://pokeapi.co/api/v2/pokemon/746/'},
    {name: 'mareanie', url: 'https://pokeapi.co/api/v2/pokemon/747/'},
    {name: 'toxapex', url: 'https://pokeapi.co/api/v2/pokemon/748/'},
    {name: 'mudbray', url: 'https://pokeapi.co/api/v2/pokemon/749/'},
    {name: 'mudsdale', url: 'https://pokeapi.co/api/v2/pokemon/750/'},
    {name: 'dewpider', url: 'https://pokeapi.co/api/v2/pokemon/751/'},
    {name: 'araquanid', url: 'https://pokeapi.co/api/v2/pokemon/752/'},
    {name: 'fomantis', url: 'https://pokeapi.co/api/v2/pokemon/753/'},
    {name: 'lurantis', url: 'https://pokeapi.co/api/v2/pokemon/754/'},
    {name: 'morelull', url: 'https://pokeapi.co/api/v2/pokemon/755/'},
    {name: 'shiinotic', url: 'https://pokeapi.co/api/v2/pokemon/756/'},
    {name: 'salandit', url: 'https://pokeapi.co/api/v2/pokemon/757/'},
    {name: 'salazzle', url: 'https://pokeapi.co/api/v2/pokemon/758/'},
    {name: 'stufful', url: 'https://pokeapi.co/api/v2/pokemon/759/'},
    {name: 'bewear', url: 'https://pokeapi.co/api/v2/pokemon/760/'},
    {name: 'bounsweet', url: 'https://pokeapi.co/api/v2/pokemon/761/'},
    {name: 'steenee', url: 'https://pokeapi.co/api/v2/pokemon/762/'},
    {name: 'tsareena', url: 'https://pokeapi.co/api/v2/pokemon/763/'},
    {name: 'comfey', url: 'https://pokeapi.co/api/v2/pokemon/764/'},
    {name: 'oranguru', url: 'https://pokeapi.co/api/v2/pokemon/765/'},
    {name: 'passimian', url: 'https://pokeapi.co/api/v2/pokemon/766/'},
    {name: 'wimpod', url: 'https://pokeapi.co/api/v2/pokemon/767/'},
    {name: 'golisopod', url: 'https://pokeapi.co/api/v2/pokemon/768/'},
    {name: 'sandygast', url: 'https://pokeapi.co/api/v2/pokemon/769/'},
    {name: 'palossand', url: 'https://pokeapi.co/api/v2/pokemon/770/'},
    {name: 'pyukumuku', url: 'https://pokeapi.co/api/v2/pokemon/771/'},
    {name: 'type-null', url: 'https://pokeapi.co/api/v2/pokemon/772/'},
    {name: 'silvally', url: 'https://pokeapi.co/api/v2/pokemon/773/'},
    {name: 'minior-red-meteor', url: 'https://pokeapi.co/api/v2/pokemon/774/'},
    {name: 'komala', url: 'https://pokeapi.co/api/v2/pokemon/775/'},
    {name: 'turtonator', url: 'https://pokeapi.co/api/v2/pokemon/776/'},
    {name: 'togedemaru', url: 'https://pokeapi.co/api/v2/pokemon/777/'},
    {name: 'mimikyu-disguised', url: 'https://pokeapi.co/api/v2/pokemon/778/'},
    {name: 'bruxish', url: 'https://pokeapi.co/api/v2/pokemon/779/'},
    {name: 'drampa', url: 'https://pokeapi.co/api/v2/pokemon/780/'},
    {name: 'dhelmise', url: 'https://pokeapi.co/api/v2/pokemon/781/'},
    {name: 'jangmo-o', url: 'https://pokeapi.co/api/v2/pokemon/782/'},
    {name: 'hakamo-o', url: 'https://pokeapi.co/api/v2/pokemon/783/'},
    {name: 'kommo-o', url: 'https://pokeapi.co/api/v2/pokemon/784/'},
    {name: 'tapu-koko', url: 'https://pokeapi.co/api/v2/pokemon/785/'},
    {name: 'tapu-lele', url: 'https://pokeapi.co/api/v2/pokemon/786/'},
    {name: 'tapu-bulu', url: 'https://pokeapi.co/api/v2/pokemon/787/'},
    {name: 'tapu-fini', url: 'https://pokeapi.co/api/v2/pokemon/788/'},
    {name: 'cosmog', url: 'https://pokeapi.co/api/v2/pokemon/789/'},
    {name: 'cosmoem', url: 'https://pokeapi.co/api/v2/pokemon/790/'},
    {name: 'solgaleo', url: 'https://pokeapi.co/api/v2/pokemon/791/'},
    {name: 'lunala', url: 'https://pokeapi.co/api/v2/pokemon/792/'},
    {name: 'nihilego', url: 'https://pokeapi.co/api/v2/pokemon/793/'},
    {name: 'buzzwole', url: 'https://pokeapi.co/api/v2/pokemon/794/'},
    {name: 'pheromosa', url: 'https://pokeapi.co/api/v2/pokemon/795/'},
    {name: 'xurkitree', url: 'https://pokeapi.co/api/v2/pokemon/796/'},
    {name: 'celesteela', url: 'https://pokeapi.co/api/v2/pokemon/797/'},
    {name: 'kartana', url: 'https://pokeapi.co/api/v2/pokemon/798/'},
    {name: 'guzzlord', url: 'https://pokeapi.co/api/v2/pokemon/799/'},
    {name: 'necrozma', url: 'https://pokeapi.co/api/v2/pokemon/800/'},
    {name: 'magearna', url: 'https://pokeapi.co/api/v2/pokemon/801/'},
    {name: 'marshadow', url: 'https://pokeapi.co/api/v2/pokemon/802/'},
    {name: 'poipole', url: 'https://pokeapi.co/api/v2/pokemon/803/'},
    {name: 'naganadel', url: 'https://pokeapi.co/api/v2/pokemon/804/'},
    {name: 'stakataka', url: 'https://pokeapi.co/api/v2/pokemon/805/'},
    {name: 'blacephalon', url: 'https://pokeapi.co/api/v2/pokemon/806/'},
    {name: 'zeraora', url: 'https://pokeapi.co/api/v2/pokemon/807/'},
    {name: 'meltan', url: 'https://pokeapi.co/api/v2/pokemon/808/'},
    {name: 'melmetal', url: 'https://pokeapi.co/api/v2/pokemon/809/'},
    {name: 'grookey', url: 'https://pokeapi.co/api/v2/pokemon/810/'},
    {name: 'thwackey', url: 'https://pokeapi.co/api/v2/pokemon/811/'},
    {name: 'rillaboom', url: 'https://pokeapi.co/api/v2/pokemon/812/'},
    {name: 'scorbunny', url: 'https://pokeapi.co/api/v2/pokemon/813/'},
    {name: 'raboot', url: 'https://pokeapi.co/api/v2/pokemon/814/'},
    {name: 'cinderace', url: 'https://pokeapi.co/api/v2/pokemon/815/'},
    {name: 'sobble', url: 'https://pokeapi.co/api/v2/pokemon/816/'},
    {name: 'drizzile', url: 'https://pokeapi.co/api/v2/pokemon/817/'},
    {name: 'inteleon', url: 'https://pokeapi.co/api/v2/pokemon/818/'},
    {name: 'skwovet', url: 'https://pokeapi.co/api/v2/pokemon/819/'},
    {name: 'greedent', url: 'https://pokeapi.co/api/v2/pokemon/820/'},
    {name: 'rookidee', url: 'https://pokeapi.co/api/v2/pokemon/821/'},
    {name: 'corvisquire', url: 'https://pokeapi.co/api/v2/pokemon/822/'},
    {name: 'corviknight', url: 'https://pokeapi.co/api/v2/pokemon/823/'},
    {name: 'blipbug', url: 'https://pokeapi.co/api/v2/pokemon/824/'},
    {name: 'dottler', url: 'https://pokeapi.co/api/v2/pokemon/825/'},
    {name: 'orbeetle', url: 'https://pokeapi.co/api/v2/pokemon/826/'},
    {name: 'nickit', url: 'https://pokeapi.co/api/v2/pokemon/827/'},
    {name: 'thievul', url: 'https://pokeapi.co/api/v2/pokemon/828/'},
    {name: 'gossifleur', url: 'https://pokeapi.co/api/v2/pokemon/829/'},
    {name: 'eldegoss', url: 'https://pokeapi.co/api/v2/pokemon/830/'},
    {name: 'wooloo', url: 'https://pokeapi.co/api/v2/pokemon/831/'},
    {name: 'dubwool', url: 'https://pokeapi.co/api/v2/pokemon/832/'},
    {name: 'chewtle', url: 'https://pokeapi.co/api/v2/pokemon/833/'},
    {name: 'drednaw', url: 'https://pokeapi.co/api/v2/pokemon/834/'},
    {name: 'yamper', url: 'https://pokeapi.co/api/v2/pokemon/835/'},
    {name: 'boltund', url: 'https://pokeapi.co/api/v2/pokemon/836/'},
    {name: 'rolycoly', url: 'https://pokeapi.co/api/v2/pokemon/837/'},
    {name: 'carkol', url: 'https://pokeapi.co/api/v2/pokemon/838/'},
    {name: 'coalossal', url: 'https://pokeapi.co/api/v2/pokemon/839/'},
    {name: 'applin', url: 'https://pokeapi.co/api/v2/pokemon/840/'},
    {name: 'flapple', url: 'https://pokeapi.co/api/v2/pokemon/841/'},
    {name: 'appletun', url: 'https://pokeapi.co/api/v2/pokemon/842/'},
    {name: 'silicobra', url: 'https://pokeapi.co/api/v2/pokemon/843/'},
    {name: 'sandaconda', url: 'https://pokeapi.co/api/v2/pokemon/844/'},
    {name: 'cramorant', url: 'https://pokeapi.co/api/v2/pokemon/845/'},
    {name: 'arrokuda', url: 'https://pokeapi.co/api/v2/pokemon/846/'},
    {name: 'barraskewda', url: 'https://pokeapi.co/api/v2/pokemon/847/'},
    {name: 'toxel', url: 'https://pokeapi.co/api/v2/pokemon/848/'},
    {name: 'toxtricity-amped', url: 'https://pokeapi.co/api/v2/pokemon/849/'},
    {name: 'sizzlipede', url: 'https://pokeapi.co/api/v2/pokemon/850/'},
    {name: 'centiskorch', url: 'https://pokeapi.co/api/v2/pokemon/851/'},
    {name: 'clobbopus', url: 'https://pokeapi.co/api/v2/pokemon/852/'},
    {name: 'grapploct', url: 'https://pokeapi.co/api/v2/pokemon/853/'},
    {name: 'sinistea', url: 'https://pokeapi.co/api/v2/pokemon/854/'},
    {name: 'polteageist', url: 'https://pokeapi.co/api/v2/pokemon/855/'},
    {name: 'hatenna', url: 'https://pokeapi.co/api/v2/pokemon/856/'},
    {name: 'hattrem', url: 'https://pokeapi.co/api/v2/pokemon/857/'},
    {name: 'hatterene', url: 'https://pokeapi.co/api/v2/pokemon/858/'},
    {name: 'impidimp', url: 'https://pokeapi.co/api/v2/pokemon/859/'},
    {name: 'morgrem', url: 'https://pokeapi.co/api/v2/pokemon/860/'},
    {name: 'grimmsnarl', url: 'https://pokeapi.co/api/v2/pokemon/861/'},
    {name: 'obstagoon', url: 'https://pokeapi.co/api/v2/pokemon/862/'},
    {name: 'perrserker', url: 'https://pokeapi.co/api/v2/pokemon/863/'},
    {name: 'cursola', url: 'https://pokeapi.co/api/v2/pokemon/864/'},
    {name: 'sirfetchd', url: 'https://pokeapi.co/api/v2/pokemon/865/'},
    {name: 'mr-rime', url: 'https://pokeapi.co/api/v2/pokemon/866/'},
    {name: 'runerigus', url: 'https://pokeapi.co/api/v2/pokemon/867/'},
    {name: 'milcery', url: 'https://pokeapi.co/api/v2/pokemon/868/'},
    {name: 'alcremie', url: 'https://pokeapi.co/api/v2/pokemon/869/'},
    {name: 'falinks', url: 'https://pokeapi.co/api/v2/pokemon/870/'},
    {name: 'pincurchin', url: 'https://pokeapi.co/api/v2/pokemon/871/'},
    {name: 'snom', url: 'https://pokeapi.co/api/v2/pokemon/872/'},
    {name: 'frosmoth', url: 'https://pokeapi.co/api/v2/pokemon/873/'},
    {name: 'stonjourner', url: 'https://pokeapi.co/api/v2/pokemon/874/'},
    {name: 'eiscue-ice', url: 'https://pokeapi.co/api/v2/pokemon/875/'},
    {name: 'indeedee-male', url: 'https://pokeapi.co/api/v2/pokemon/876/'},
    {name: 'morpeko-full-belly', url: 'https://pokeapi.co/api/v2/pokemon/877/'},
    {name: 'cufant', url: 'https://pokeapi.co/api/v2/pokemon/878/'},
    {name: 'copperajah', url: 'https://pokeapi.co/api/v2/pokemon/879/'},
    {name: 'dracozolt', url: 'https://pokeapi.co/api/v2/pokemon/880/'},
    {name: 'arctozolt', url: 'https://pokeapi.co/api/v2/pokemon/881/'},
    {name: 'dracovish', url: 'https://pokeapi.co/api/v2/pokemon/882/'},
    {name: 'arctovish', url: 'https://pokeapi.co/api/v2/pokemon/883/'},
    {name: 'duraludon', url: 'https://pokeapi.co/api/v2/pokemon/884/'},
    {name: 'dreepy', url: 'https://pokeapi.co/api/v2/pokemon/885/'},
    {name: 'drakloak', url: 'https://pokeapi.co/api/v2/pokemon/886/'},
    {name: 'dragapult', url: 'https://pokeapi.co/api/v2/pokemon/887/'},
    {name: 'zacian', url: 'https://pokeapi.co/api/v2/pokemon/888/'},
    {name: 'zamazenta', url: 'https://pokeapi.co/api/v2/pokemon/889/'},
    {name: 'eternatus', url: 'https://pokeapi.co/api/v2/pokemon/890/'},
    {name: 'kubfu', url: 'https://pokeapi.co/api/v2/pokemon/891/'},
    {name: 'urshifu-single-strike', url: 'https://pokeapi.co/api/v2/pokemon/892/'},
    {name: 'zarude', url: 'https://pokeapi.co/api/v2/pokemon/893/'},
    {name: 'regieleki', url: 'https://pokeapi.co/api/v2/pokemon/894/'},
    {name: 'regidrago', url: 'https://pokeapi.co/api/v2/pokemon/895/'},
    {name: 'glastrier', url: 'https://pokeapi.co/api/v2/pokemon/896/'},
    {name: 'spectrier', url: 'https://pokeapi.co/api/v2/pokemon/897/'},
    {name: 'calyrex', url: 'https://pokeapi.co/api/v2/pokemon/898/'},
    {name: 'wyrdeer', url: 'https://pokeapi.co/api/v2/pokemon/899/'},
    {name: 'kleavor', url: 'https://pokeapi.co/api/v2/pokemon/900/'},
    {name: 'ursaluna', url: 'https://pokeapi.co/api/v2/pokemon/901/'},
    {name: 'basculegion-male', url: 'https://pokeapi.co/api/v2/pokemon/902/'},
    {name: 'sneasler', url: 'https://pokeapi.co/api/v2/pokemon/903/'},
    {name: 'overqwil', url: 'https://pokeapi.co/api/v2/pokemon/904/'},
    {name: 'enamorus-incarnate', url: 'https://pokeapi.co/api/v2/pokemon/905/'},
    {name: 'sprigatito', url: 'https://pokeapi.co/api/v2/pokemon/906/'},
    {name: 'floragato', url: 'https://pokeapi.co/api/v2/pokemon/907/'},
    {name: 'meowscarada', url: 'https://pokeapi.co/api/v2/pokemon/908/'},
    {name: 'fuecoco', url: 'https://pokeapi.co/api/v2/pokemon/909/'},
    {name: 'crocalor', url: 'https://pokeapi.co/api/v2/pokemon/910/'},
    {name: 'skeledirge', url: 'https://pokeapi.co/api/v2/pokemon/911/'},
    {name: 'quaxly', url: 'https://pokeapi.co/api/v2/pokemon/912/'},
    {name: 'quaxwell', url: 'https://pokeapi.co/api/v2/pokemon/913/'},
    {name: 'quaquaval', url: 'https://pokeapi.co/api/v2/pokemon/914/'},
    {name: 'lechonk', url: 'https://pokeapi.co/api/v2/pokemon/915/'},
    {name: 'oinkologne-male', url: 'https://pokeapi.co/api/v2/pokemon/916/'},
    {name: 'tarountula', url: 'https://pokeapi.co/api/v2/pokemon/917/'},
    {name: 'spidops', url: 'https://pokeapi.co/api/v2/pokemon/918/'},
    {name: 'nymble', url: 'https://pokeapi.co/api/v2/pokemon/919/'},
    {name: 'lokix', url: 'https://pokeapi.co/api/v2/pokemon/920/'},
    {name: 'pawmi', url: 'https://pokeapi.co/api/v2/pokemon/921/'},
    {name: 'pawmo', url: 'https://pokeapi.co/api/v2/pokemon/922/'},
    {name: 'pawmot', url: 'https://pokeapi.co/api/v2/pokemon/923/'},
    {name: 'tandemaus', url: 'https://pokeapi.co/api/v2/pokemon/924/'},
    {name: 'maushold-family-of-four', url: 'https://pokeapi.co/api/v2/pokemon/925/'},
    {name: 'fidough', url: 'https://pokeapi.co/api/v2/pokemon/926/'},
    {name: 'dachsbun', url: 'https://pokeapi.co/api/v2/pokemon/927/'},
    {name: 'smoliv', url: 'https://pokeapi.co/api/v2/pokemon/928/'},
    {name: 'dolliv', url: 'https://pokeapi.co/api/v2/pokemon/929/'},
    {name: 'arboliva', url: 'https://pokeapi.co/api/v2/pokemon/930/'},
    {name: 'squawkabilly-green-plumage', url: 'https://pokeapi.co/api/v2/pokemon/931/'},
    {name: 'nacli', url: 'https://pokeapi.co/api/v2/pokemon/932/'},
    {name: 'naclstack', url: 'https://pokeapi.co/api/v2/pokemon/933/'},
    {name: 'garganacl', url: 'https://pokeapi.co/api/v2/pokemon/934/'},
    {name: 'charcadet', url: 'https://pokeapi.co/api/v2/pokemon/935/'},
    {name: 'armarouge', url: 'https://pokeapi.co/api/v2/pokemon/936/'},
    {name: 'ceruledge', url: 'https://pokeapi.co/api/v2/pokemon/937/'},
    {name: 'tadbulb', url: 'https://pokeapi.co/api/v2/pokemon/938/'},
    {name: 'bellibolt', url: 'https://pokeapi.co/api/v2/pokemon/939/'},
    {name: 'wattrel', url: 'https://pokeapi.co/api/v2/pokemon/940/'},
    {name: 'kilowattrel', url: 'https://pokeapi.co/api/v2/pokemon/941/'},
    {name: 'maschiff', url: 'https://pokeapi.co/api/v2/pokemon/942/'},
    {name: 'mabosstiff', url: 'https://pokeapi.co/api/v2/pokemon/943/'},
    {name: 'shroodle', url: 'https://pokeapi.co/api/v2/pokemon/944/'},
    {name: 'grafaiai', url: 'https://pokeapi.co/api/v2/pokemon/945/'},
    {name: 'bramblin', url: 'https://pokeapi.co/api/v2/pokemon/946/'},
    {name: 'brambleghast', url: 'https://pokeapi.co/api/v2/pokemon/947/'},
    {name: 'toedscool', url: 'https://pokeapi.co/api/v2/pokemon/948/'},
    {name: 'toedscruel', url: 'https://pokeapi.co/api/v2/pokemon/949/'},
    {name: 'klawf', url: 'https://pokeapi.co/api/v2/pokemon/950/'},
    {name: 'capsakid', url: 'https://pokeapi.co/api/v2/pokemon/951/'},
    {name: 'scovillain', url: 'https://pokeapi.co/api/v2/pokemon/952/'},
    {name: 'rellor', url: 'https://pokeapi.co/api/v2/pokemon/953/'},
    {name: 'rabsca', url: 'https://pokeapi.co/api/v2/pokemon/954/'},
    {name: 'flittle', url: 'https://pokeapi.co/api/v2/pokemon/955/'},
    {name: 'espathra', url: 'https://pokeapi.co/api/v2/pokemon/956/'},
    {name: 'tinkatink', url: 'https://pokeapi.co/api/v2/pokemon/957/'},
    {name: 'tinkatuff', url: 'https://pokeapi.co/api/v2/pokemon/958/'},
    {name: 'tinkaton', url: 'https://pokeapi.co/api/v2/pokemon/959/'},
    {name: 'wiglett', url: 'https://pokeapi.co/api/v2/pokemon/960/'},
    {name: 'wugtrio', url: 'https://pokeapi.co/api/v2/pokemon/961/'},
    {name: 'bombirdier', url: 'https://pokeapi.co/api/v2/pokemon/962/'},
    {name: 'finizen', url: 'https://pokeapi.co/api/v2/pokemon/963/'},
    {name: 'palafin-zero', url: 'https://pokeapi.co/api/v2/pokemon/964/'},
    {name: 'varoom', url: 'https://pokeapi.co/api/v2/pokemon/965/'},
    {name: 'revavroom', url: 'https://pokeapi.co/api/v2/pokemon/966/'},
    {name: 'cyclizar', url: 'https://pokeapi.co/api/v2/pokemon/967/'},
    {name: 'orthworm', url: 'https://pokeapi.co/api/v2/pokemon/968/'},
    {name: 'glimmet', url: 'https://pokeapi.co/api/v2/pokemon/969/'},
    {name: 'glimmora', url: 'https://pokeapi.co/api/v2/pokemon/970/'},
    {name: 'greavard', url: 'https://pokeapi.co/api/v2/pokemon/971/'},
    {name: 'houndstone', url: 'https://pokeapi.co/api/v2/pokemon/972/'},
    {name: 'flamigo', url: 'https://pokeapi.co/api/v2/pokemon/973/'},
    {name: 'cetoddle', url: 'https://pokeapi.co/api/v2/pokemon/974/'},
    {name: 'cetitan', url: 'https://pokeapi.co/api/v2/pokemon/975/'},
    {name: 'veluza', url: 'https://pokeapi.co/api/v2/pokemon/976/'},
    {name: 'dondozo', url: 'https://pokeapi.co/api/v2/pokemon/977/'},
    {name: 'tatsugiri-curly', url: 'https://pokeapi.co/api/v2/pokemon/978/'},
    {name: 'annihilape', url: 'https://pokeapi.co/api/v2/pokemon/979/'},
    {name: 'clodsire', url: 'https://pokeapi.co/api/v2/pokemon/980/'},
    {name: 'farigiraf', url: 'https://pokeapi.co/api/v2/pokemon/981/'},
    {name: 'dudunsparce-two-segment', url: 'https://pokeapi.co/api/v2/pokemon/982/'},
    {name: 'kingambit', url: 'https://pokeapi.co/api/v2/pokemon/983/'},
    {name: 'great-tusk', url: 'https://pokeapi.co/api/v2/pokemon/984/'},
    {name: 'scream-tail', url: 'https://pokeapi.co/api/v2/pokemon/985/'},
    {name: 'brute-bonnet', url: 'https://pokeapi.co/api/v2/pokemon/986/'},
    {name: 'flutter-mane', url: 'https://pokeapi.co/api/v2/pokemon/987/'},
    {name: 'slither-wing', url: 'https://pokeapi.co/api/v2/pokemon/988/'},
    {name: 'sandy-shocks', url: 'https://pokeapi.co/api/v2/pokemon/989/'},
    {name: 'iron-treads', url: 'https://pokeapi.co/api/v2/pokemon/990/'},
    {name: 'iron-bundle', url: 'https://pokeapi.co/api/v2/pokemon/991/'},
    {name: 'iron-hands', url: 'https://pokeapi.co/api/v2/pokemon/992/'},
    {name: 'iron-jugulis', url: 'https://pokeapi.co/api/v2/pokemon/993/'},
    {name: 'iron-moth', url: 'https://pokeapi.co/api/v2/pokemon/994/'},
    {name: 'iron-thorns', url: 'https://pokeapi.co/api/v2/pokemon/995/'},
    {name: 'frigibax', url: 'https://pokeapi.co/api/v2/pokemon/996/'},
    {name: 'arctibax', url: 'https://pokeapi.co/api/v2/pokemon/997/'},
    {name: 'baxcalibur', url: 'https://pokeapi.co/api/v2/pokemon/998/'},
    {name: 'gimmighoul', url: 'https://pokeapi.co/api/v2/pokemon/999/'},
    {name: 'gholdengo', url: 'https://pokeapi.co/api/v2/pokemon/1000/'},
    {name: 'wo-chien', url: 'https://pokeapi.co/api/v2/pokemon/1001/'},
    {name: 'chien-pao', url: 'https://pokeapi.co/api/v2/pokemon/1002/'},
    {name: 'ting-lu', url: 'https://pokeapi.co/api/v2/pokemon/1003/'},
    {name: 'chi-yu', url: 'https://pokeapi.co/api/v2/pokemon/1004/'},
    {name: 'roaring-moon', url: 'https://pokeapi.co/api/v2/pokemon/1005/'},
    {name: 'iron-valiant', url: 'https://pokeapi.co/api/v2/pokemon/1006/'},
    {name: 'koraidon', url: 'https://pokeapi.co/api/v2/pokemon/1007/'},
    {name: 'miraidon', url: 'https://pokeapi.co/api/v2/pokemon/1008/'},
    {name: 'walking-wake', url: 'https://pokeapi.co/api/v2/pokemon/1009/'},
    {name: 'iron-leaves', url: 'https://pokeapi.co/api/v2/pokemon/1010/'},
    {name: 'dipplin', url: 'https://pokeapi.co/api/v2/pokemon/1011/'},
    {name: 'poltchageist', url: 'https://pokeapi.co/api/v2/pokemon/1012/'},
    {name: 'sinistcha', url: 'https://pokeapi.co/api/v2/pokemon/1013/'},
    {name: 'okidogi', url: 'https://pokeapi.co/api/v2/pokemon/1014/'},
    {name: 'munkidori', url: 'https://pokeapi.co/api/v2/pokemon/1015/'},
    {name: 'fezandipiti', url: 'https://pokeapi.co/api/v2/pokemon/1016/'},
    {name: 'ogerpon', url: 'https://pokeapi.co/api/v2/pokemon/1017/'},
    {name: 'archaludon', url: 'https://pokeapi.co/api/v2/pokemon/1018/'},
    {name: 'hydrapple', url: 'https://pokeapi.co/api/v2/pokemon/1019/'},
    {name: 'gouging-fire', url: 'https://pokeapi.co/api/v2/pokemon/1020/'},
    {name: 'raging-bolt', url: 'https://pokeapi.co/api/v2/pokemon/1021/'},
    {name: 'iron-boulder', url: 'https://pokeapi.co/api/v2/pokemon/1022/'},
    {name: 'iron-crown', url: 'https://pokeapi.co/api/v2/pokemon/1023/'},
    {name: 'terapagos', url: 'https://pokeapi.co/api/v2/pokemon/1024/'},
    {name: 'pecharunt', url: 'https://pokeapi.co/api/v2/pokemon/1025/'}
];
