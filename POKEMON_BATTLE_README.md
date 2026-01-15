# Pokemon Battle Challenge - Documentation

## Overview
A high-difficulty single-player Pokemon battle challenge website where players choose one Pokemon to battle against a team of 6 strategically configured opponents.

## Features

### Battle System
- **Turn-based Combat**: Speed-based turn order system
- **Damage Calculation**: Accurate Gen VI-style damage formula including:
  - Base power and stat calculations
  - Type effectiveness (18 types supported)
  - STAB (Same Type Attack Bonus)
  - Critical hits (6.25% chance)
  - Random damage variance (85-100%)

### Opponent Team
The opponent team consists of 6 competitively built Pokemon:
1. **Garchomp** (Dragon/Ground) - Physical sweeper with Choice Scarf
2. **Greninja** (Water/Dark) - Fast special attacker with Protean ability
3. **Blaziken** (Fire/Fighting) - Speed Boost sweeper
4. **Metagross** (Steel/Psychic) - Bulky attacker with Assault Vest
5. **Gyarados** (Water/Flying) - Physical setup sweeper with Intimidate
6. **Gardevoir** (Psychic/Fairy) - Special attacker with Choice Specs

### Player Pokemon Selection
Choose from 15 popular Pokemon:
- Bulbasaur, Charmander, Squirtle, Pikachu
- Charizard, Gengar, Gyarados, Snorlax
- Tyranitar, Blaziken, Gardevoir, Metagross
- Garchomp, Lucario, Greninja

### UI Features
- Search and filter Pokemon by type
- View opponent team stats and movesets
- Battle animations (attack, damage, fainting)
- Real-time HP bars with color indicators
- Battle log showing all actions and effectiveness
- Mobile-responsive design

## Technical Details

### Architecture
- **Pure Vanilla JavaScript**: No framework dependencies
- **PokeAPI Integration**: Fetches Pokemon data with offline fallback
- **Modular Design**: Separated data, logic, and presentation

### Files
- `pokemon-battle.html` - Main battle interface
- `pokemon-battle.css` - Styling and animations
- `pokemon-battle.js` - Battle logic and game state
- `pokemon-data.js` - Offline fallback data

### Data Sources
- Primary: [PokeAPI](https://pokeapi.co) - Live Pokemon data
- Fallback: Local cached data for offline/restricted environments

## Usage

### Starting a Battle
1. Navigate to the Pokemon Battle page from the main menu
2. Click "开始挑战" (Start Challenge)
3. Select your Pokemon from the grid
4. Confirm your selection
5. Battle begins automatically

### During Battle
- Select a move from the 4 available moves
- Each move shows its type and power
- Battle log displays all actions and results
- HP bars update in real-time
- Battle continues until one side is defeated

### Battle End
- Victory: Defeat all 6 opponent Pokemon
- Defeat: Your Pokemon faints
- Options to retry or return to menu

## Battle Mechanics

### Type Effectiveness
Full type chart implemented with 18 types:
- Super effective: 2x damage
- Not very effective: 0.5x damage
- No effect: 0x damage

### Speed System
- Faster Pokemon attacks first
- Equal speed: random determination
- Speed ties resolved randomly

### AI Strategy
The AI opponent:
- Selects moves based on effectiveness
- Considers type matchups
- Switches Pokemon strategically
- Uses setup moves when advantageous

## Customization

### Adding New Pokemon
Edit `pokemon-data.js` to add new entries:
```javascript
{
    id: [dex_number],
    name: 'pokemon-name',
    types: [{type: {name: 'type1'}}, ...],
    stats: [...],
    sprites: {...},
    moves: [...]
}
```

### Modifying Opponent Team
Edit `OPPONENT_TEAM` array in `pokemon-battle.js`:
```javascript
{
    id: [pokemon_id],
    name: 'Name',
    level: 50,
    nature: 'Nature',
    ability: 'Ability',
    item: 'Item',
    moves: ['move1', 'move2', 'move3', 'move4'],
    evs: {...}
}
```

### Adding New Moves
Edit `MOVE_DATA` in `pokemon-data.js`:
```javascript
'move-name': {
    name: 'Display Name',
    power: [number],
    type: {name: 'type'},
    damage_class: {name: 'physical|special|status'},
    pp: [number]
}
```

## Browser Compatibility
- Modern browsers with ES6+ support
- Mobile browsers (iOS Safari, Chrome Mobile)
- Tested on Chrome, Firefox, Safari, Edge

## Performance
- Lazy loading of Pokemon data
- Efficient DOM updates
- Optimized animations
- Minimal memory footprint

## Future Enhancements
- Sound effects and music
- More opponent teams
- Difficulty levels
- Move animations
- Status conditions (paralysis, poison, etc.)
- Weather effects
- Held items effects
- More comprehensive ability system
- Save/load battle state
- Battle replay system
- Leaderboard/statistics

## Credits
- Pokemon data from [PokeAPI](https://pokeapi.co)
- Pokemon sprites from [PokeAPI Sprites](https://github.com/PokeAPI/sprites)
- Battle mechanics based on Pokemon Gen VI+
- Type effectiveness chart from official Pokemon games

## License
This is a fan-made project for educational purposes. Pokemon and all related properties are © Nintendo, Game Freak, and The Pokemon Company.
