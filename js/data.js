// ============================================================
// 宝可梦对战 — 数据层 (Gen 1 完整版)
// ============================================================

const TYPES = ['Normal','Fire','Water','Electric','Grass','Ice','Fighting','Poison','Ground','Flying','Psychic','Bug','Rock','Ghost','Dragon','Dark','Steel','Fairy'];

const TYPE_CHART = {
  Normal:   { Rock:0.5, Ghost:0, Steel:0.5 },
  Fire:     { Fire:0.5, Water:0.5, Grass:2, Ice:2, Bug:2, Rock:0.5, Dragon:0.5, Steel:2 },
  Water:    { Fire:2, Water:0.5, Grass:0.5, Ground:2, Rock:2, Dragon:0.5 },
  Electric: { Water:2, Electric:0.5, Grass:0.5, Ground:0, Flying:2, Dragon:0.5 },
  Grass:    { Fire:0.5, Water:2, Grass:0.5, Poison:0.5, Ground:2, Flying:0.5, Bug:0.5, Rock:2, Dragon:0.5, Steel:0.5 },
  Ice:      { Fire:0.5, Water:0.5, Grass:2, Ice:0.5, Ground:2, Flying:2, Dragon:2, Steel:0.5 },
  Fighting: { Normal:2, Ice:2, Poison:0.5, Flying:0.5, Psychic:0.5, Bug:0.5, Rock:2, Ghost:0, Dark:2, Steel:2, Fairy:0.5 },
  Poison:   { Grass:2, Poison:0.5, Ground:0.5, Rock:0.5, Ghost:0.5, Steel:0, Fairy:2 },
  Ground:   { Fire:2, Electric:2, Grass:0.5, Poison:2, Flying:0, Bug:0.5, Rock:2, Steel:2 },
  Flying:   { Electric:0.5, Grass:2, Fighting:2, Bug:2, Rock:0.5, Steel:0.5 },
  Psychic:  { Fighting:2, Poison:2, Psychic:0.5, Dark:0, Steel:0.5 },
  Bug:      { Fire:0.5, Grass:2, Fighting:0.5, Poison:0.5, Flying:0.5, Psychic:2, Ghost:0.5, Dark:2, Steel:0.5, Fairy:0.5 },
  Rock:     { Fire:2, Ice:2, Fighting:0.5, Ground:0.5, Flying:2, Bug:2, Steel:0.5 },
  Ghost:    { Normal:0, Psychic:2, Ghost:2, Dark:0.5 },
  Dragon:   { Dragon:2, Steel:0.5, Fairy:0 },
  Dark:     { Fighting:0.5, Psychic:2, Ghost:2, Dark:0.5, Fairy:0.5 },
  Steel:    { Fire:0.5, Water:0.5, Electric:0.5, Ice:2, Rock:2, Steel:0.5, Fairy:2 },
  Fairy:    { Fire:0.5, Fighting:2, Poison:0.5, Dragon:2, Dark:2, Steel:0.5 }
};

function getTypeEffectiveness(moveType, defTypes) {
  let mult = 1;
  for (const dt of defTypes) {
    const chart = TYPE_CHART[moveType];
    if (chart && chart[dt] !== undefined) mult *= chart[dt];
  }
  return mult;
}

const MOVES = {
  energy_ball: {name:'能量球',type:'Grass',category:'Special',power:90,accuracy:100,pp:10},
  sludge_bomb: {name:'污泥炸弹',type:'Poison',category:'Special',power:90,accuracy:100,pp:10,effect:'poison',effectChance:30},
  swords_dance: {name:'剑舞',type:'Normal',category:'Status',power:0,accuracy:null,pp:20,selfBuff:'atk',selfBuffStages:2},
  toxic: {name:'剧毒',type:'Poison',category:'Status',power:0,accuracy:90,pp:10,effect:'toxic'},
  earthquake: {name:'地震',type:'Ground',category:'Physical',power:100,accuracy:100,pp:10},
  flamethrower: {name:'喷射火焰',type:'Fire',category:'Special',power:90,accuracy:100,pp:15,effect:'burn',effectChance:10},
  rock_slide: {name:'岩崩',type:'Rock',category:'Physical',power:75,accuracy:90,pp:10},
  thunder_punch: {name:'雷电拳',type:'Electric',category:'Physical',power:75,accuracy:100,pp:15,effect:'paralysis',effectChance:10},
  focus_blast: {name:'真气弹',type:'Fighting',category:'Special',power:120,accuracy:70,pp:5},
  hurricane: {name:'暴风',type:'Flying',category:'Special',power:110,accuracy:70,pp:10},
  surf: {name:'冲浪',type:'Water',category:'Special',power:90,accuracy:100,pp:15},
  ice_beam: {name:'冰冻光束',type:'Ice',category:'Special',power:90,accuracy:100,pp:10,effect:'freeze',effectChance:10},
  aura_sphere: {name:'波导弹',type:'Fighting',category:'Special',power:80,accuracy:null,pp:20},
  tackle: {name:'撞击',type:'Normal',category:'Physical',power:40,accuracy:100,pp:35},
  body_slam: {name:'泰山压顶',type:'Normal',category:'Physical',power:85,accuracy:100,pp:15,effect:'paralysis',effectChance:30},
  quick_attack: {name:'电光一闪',type:'Normal',category:'Physical',power:40,accuracy:100,pp:30,priority:1},
  double_edge: {name:'舍身冲撞',type:'Normal',category:'Physical',power:120,accuracy:100,pp:15,recoil:0.33},
  u_turn: {name:'急速折返',type:'Bug',category:'Physical',power:70,accuracy:100,pp:20},
  roost: {name:'羽栖',type:'Flying',category:'Status',power:0,accuracy:null,pp:10,effect:'heal',healPercent:0.5},
  x_scissor: {name:'十字剪',type:'Bug',category:'Physical',power:80,accuracy:100,pp:15},
  brick_break: {name:'劈瓦',type:'Fighting',category:'Physical',power:75,accuracy:100,pp:15},
  brave_bird: {name:'勇鸟猛攻',type:'Flying',category:'Physical',power:120,accuracy:100,pp:15,recoil:0.33},
  heat_wave: {name:'热风',type:'Fire',category:'Special',power:95,accuracy:90,pp:10,effect:'burn',effectChance:10},
  thunderbolt: {name:'十万伏特',type:'Electric',category:'Special',power:90,accuracy:100,pp:15,effect:'paralysis',effectChance:10},
  thunder_wave: {name:'电磁波',type:'Electric',category:'Status',power:0,accuracy:90,pp:20,effect:'paralysis'},
  aerial_ace: {name:'燕返',type:'Flying',category:'Physical',power:60,accuracy:null,pp:20},
  nasty_plot: {name:'诡计',type:'Dark',category:'Status',power:0,accuracy:null,pp:20,selfBuff:'spa',selfBuffStages:2},
  calm_mind: {name:'冥想',type:'Psychic',category:'Status',power:0,accuracy:null,pp:20,selfBuff:'spa',selfBuffStages:1,selfBuff2:'spd',selfBuffStages2:1},
  stone_edge: {name:'尖石攻击',type:'Rock',category:'Physical',power:100,accuracy:80,pp:5,critRate:1},
  earth_power: {name:'大地之力',type:'Ground',category:'Special',power:90,accuracy:100,pp:10},
  moonblast: {name:'月亮之力',type:'Fairy',category:'Special',power:95,accuracy:100,pp:15},
  stealth_rock: {name:'隐形岩',type:'Rock',category:'Status',power:0,accuracy:null,pp:20,effect:'stealth_rock'},
  will_o_wisp: {name:'鬼火',type:'Fire',category:'Status',power:0,accuracy:85,pp:15,effect:'burn'},
  play_rough: {name:'嬉闹',type:'Fairy',category:'Physical',power:90,accuracy:90,pp:10},
  bug_buzz: {name:'虫鸣',type:'Bug',category:'Special',power:90,accuracy:100,pp:10},
  protect: {name:'守住',type:'Normal',category:'Status',power:0,accuracy:null,pp:10,effect:'protect',priority:4},
  close_combat: {name:'近身战',type:'Fighting',category:'Physical',power:120,accuracy:100,pp:5,selfDebuff:'def',selfDebuffStages:1},
  ice_punch: {name:'冰冻拳',type:'Ice',category:'Physical',power:75,accuracy:100,pp:15,effect:'freeze',effectChance:10},
  psyshock: {name:'精神冲击',type:'Psychic',category:'Special',power:80,accuracy:100,pp:10,targetDef:true},
  fire_punch: {name:'火焰拳',type:'Fire',category:'Physical',power:75,accuracy:100,pp:15,effect:'burn',effectChance:10},
  iron_head: {name:'铁头',type:'Steel',category:'Physical',power:80,accuracy:100,pp:15},
  spikes: {name:'撒菱',type:'Ground',category:'Status',power:0,accuracy:null,pp:20,effect:'spikes'},
  shadow_ball: {name:'暗影球',type:'Ghost',category:'Special',power:80,accuracy:100,pp:15},
  dragon_dance: {name:'龙之舞',type:'Dragon',category:'Status',power:0,accuracy:null,pp:20,selfBuff:'atk',selfBuffStages:1,selfBuff2:'spe',selfBuffStages2:1},
  superpower: {name:'蛮力',type:'Fighting',category:'Physical',power:120,accuracy:100,pp:5,selfDebuff:'atk',selfDebuffStages:1},
  leech_seed: {name:'寄生种子',type:'Grass',category:'Status',power:0,accuracy:90,pp:10,effect:'leech_seed'},
  dazzling_gleam: {name:'魔法闪耀',type:'Fairy',category:'Special',power:80,accuracy:100,pp:10},
  hydro_pump: {name:'水炮',type:'Water',category:'Special',power:110,accuracy:80,pp:5},
  dragon_pulse: {name:'龙之波动',type:'Dragon',category:'Special',power:85,accuracy:100,pp:10},
  dragon_claw: {name:'龙爪',type:'Dragon',category:'Physical',power:80,accuracy:100,pp:15},
};

const POKEMON_DATA = {
  bulbasaur: {
    id:1, name:'妙蛙种子', types:["Grass","Poison"],
    baseStats:{hp:45,atk:49,def:49,spa:65,spd:65,spe:45},
    ability:'-',
    moves:["energy_ball","sludge_bomb","swords_dance","toxic"],
    sprite:1
  },
  ivysaur: {
    id:2, name:'妙蛙草', types:["Grass","Poison"],
    baseStats:{hp:60,atk:62,def:63,spa:80,spd:80,spe:60},
    ability:'-',
    moves:["energy_ball","sludge_bomb","swords_dance","toxic"],
    sprite:2
  },
  venusaur: {
    id:3, name:'妙蛙花', types:["Grass","Poison"],
    baseStats:{hp:80,atk:82,def:83,spa:100,spd:100,spe:80},
    ability:'-',
    moves:["energy_ball","sludge_bomb","earthquake","swords_dance"],
    sprite:3
  },
  charmander: {
    id:4, name:'小火龙', types:["Fire"],
    baseStats:{hp:39,atk:52,def:43,spa:60,spd:50,spe:65},
    ability:'-',
    moves:["flamethrower","rock_slide","thunder_punch","focus_blast"],
    sprite:4
  },
  charmeleon: {
    id:5, name:'火恐龙', types:["Fire"],
    baseStats:{hp:58,atk:64,def:58,spa:80,spd:65,spe:80},
    ability:'-',
    moves:["flamethrower","rock_slide","thunder_punch","focus_blast"],
    sprite:5
  },
  charizard: {
    id:6, name:'喷火龙', types:["Fire","Flying"],
    baseStats:{hp:78,atk:84,def:78,spa:109,spd:85,spe:100},
    ability:'-',
    moves:["flamethrower","hurricane","earthquake","rock_slide"],
    sprite:6
  },
  squirtle: {
    id:7, name:'杰尼龟', types:["Water"],
    baseStats:{hp:44,atk:48,def:65,spa:50,spd:64,spe:43},
    ability:'-',
    moves:["surf","ice_beam","rock_slide","aura_sphere"],
    sprite:7
  },
  wartortle: {
    id:8, name:'卡咪龟', types:["Water"],
    baseStats:{hp:59,atk:63,def:80,spa:65,spd:80,spe:58},
    ability:'-',
    moves:["surf","ice_beam","rock_slide","aura_sphere"],
    sprite:8
  },
  blastoise: {
    id:9, name:'水箭龟', types:["Water"],
    baseStats:{hp:79,atk:83,def:100,spa:85,spd:105,spe:78},
    ability:'-',
    moves:["surf","ice_beam","earthquake","rock_slide"],
    sprite:9
  },
  caterpie: {
    id:10, name:'绿毛虫', types:["Bug"],
    baseStats:{hp:45,atk:30,def:35,spa:20,spd:20,spe:45},
    ability:'-',
    moves:["tackle","body_slam","quick_attack","double_edge"],
    sprite:10
  },
  metapod: {
    id:11, name:'铁甲蛹', types:["Bug"],
    baseStats:{hp:50,atk:20,def:55,spa:25,spd:25,spe:30},
    ability:'-',
    moves:["tackle","body_slam","quick_attack","double_edge"],
    sprite:11
  },
  butterfree: {
    id:12, name:'巴大蝶', types:["Bug","Flying"],
    baseStats:{hp:60,atk:45,def:50,spa:90,spd:80,spe:70},
    ability:'-',
    moves:["u_turn","hurricane","toxic","roost"],
    sprite:12
  },
  weedle: {
    id:13, name:'独角虫', types:["Bug","Poison"],
    baseStats:{hp:40,atk:35,def:30,spa:20,spd:20,spe:50},
    ability:'-',
    moves:["tackle","body_slam","quick_attack","double_edge"],
    sprite:13
  },
  kakuna: {
    id:14, name:'铁壳蛹', types:["Bug","Poison"],
    baseStats:{hp:45,atk:25,def:50,spa:25,spd:25,spe:35},
    ability:'-',
    moves:["tackle","body_slam","quick_attack","double_edge"],
    sprite:14
  },
  beedrill: {
    id:15, name:'大针蜂', types:["Bug","Poison"],
    baseStats:{hp:65,atk:90,def:40,spa:45,spd:80,spe:75},
    ability:'-',
    moves:["x_scissor","sludge_bomb","brick_break","swords_dance"],
    sprite:15
  },
  pidgey: {
    id:16, name:'波波', types:["Normal","Flying"],
    baseStats:{hp:40,atk:45,def:40,spa:35,spd:35,spe:56},
    ability:'-',
    moves:["double_edge","brave_bird","heat_wave","toxic"],
    sprite:16
  },
  pidgeotto: {
    id:17, name:'比比鸟', types:["Normal","Flying"],
    baseStats:{hp:63,atk:60,def:55,spa:50,spd:50,spe:71},
    ability:'-',
    moves:["double_edge","hurricane","heat_wave","toxic"],
    sprite:17
  },
  pidgeot: {
    id:18, name:'大比鸟', types:["Normal","Flying"],
    baseStats:{hp:83,atk:80,def:75,spa:70,spd:70,spe:101},
    ability:'-',
    moves:["double_edge","hurricane","heat_wave","toxic"],
    sprite:18
  },
  rattata: {
    id:19, name:'小拉达', types:["Normal"],
    baseStats:{hp:30,atk:56,def:35,spa:25,spd:35,spe:72},
    ability:'-',
    moves:["body_slam","ice_beam","thunderbolt","thunder_wave"],
    sprite:19
  },
  raticate: {
    id:20, name:'拉达', types:["Normal"],
    baseStats:{hp:55,atk:81,def:60,spa:50,spd:70,spe:97},
    ability:'-',
    moves:["body_slam","ice_beam","thunderbolt","swords_dance"],
    sprite:20
  },
  spearow: {
    id:21, name:'烈雀', types:["Normal","Flying"],
    baseStats:{hp:40,atk:60,def:30,spa:31,spd:31,spe:70},
    ability:'-',
    moves:["double_edge","aerial_ace","heat_wave","toxic"],
    sprite:21
  },
  fearow: {
    id:22, name:'大嘴雀', types:["Normal","Flying"],
    baseStats:{hp:65,atk:90,def:65,spa:61,spd:61,spe:100},
    ability:'-',
    moves:["double_edge","aerial_ace","heat_wave","toxic"],
    sprite:22
  },
  ekans: {
    id:23, name:'阿柏蛇', types:["Poison"],
    baseStats:{hp:35,atk:60,def:44,spa:40,spd:54,spe:55},
    ability:'-',
    moves:["sludge_bomb","earthquake","rock_slide","toxic"],
    sprite:23
  },
  arbok: {
    id:24, name:'阿柏怪', types:["Poison"],
    baseStats:{hp:60,atk:95,def:69,spa:65,spd:79,spe:80},
    ability:'-',
    moves:["sludge_bomb","earthquake","rock_slide","toxic"],
    sprite:24
  },
  pikachu: {
    id:25, name:'皮卡丘', types:["Electric"],
    baseStats:{hp:35,atk:55,def:40,spa:50,spd:50,spe:90},
    ability:'-',
    moves:["thunderbolt","brick_break","nasty_plot","calm_mind"],
    sprite:25
  },
  raichu: {
    id:26, name:'雷丘', types:["Electric"],
    baseStats:{hp:60,atk:90,def:55,spa:90,spd:80,spe:110},
    ability:'-',
    moves:["thunderbolt","focus_blast","nasty_plot","calm_mind"],
    sprite:26
  },
  sandshrew: {
    id:27, name:'穿山鼠', types:["Ground"],
    baseStats:{hp:50,atk:75,def:85,spa:20,spd:30,spe:40},
    ability:'-',
    moves:["earthquake","stone_edge","brick_break","swords_dance"],
    sprite:27
  },
  sandslash: {
    id:28, name:'穿山王', types:["Ground"],
    baseStats:{hp:75,atk:100,def:110,spa:45,spd:55,spe:65},
    ability:'-',
    moves:["earthquake","stone_edge","focus_blast","swords_dance"],
    sprite:28
  },
  nidoran_f: {
    id:29, name:'尼多兰', types:["Poison"],
    baseStats:{hp:55,atk:47,def:52,spa:40,spd:40,spe:41},
    ability:'-',
    moves:["sludge_bomb","ice_beam","earth_power","thunderbolt"],
    sprite:29
  },
  nidorina: {
    id:30, name:'尼多娜', types:["Poison"],
    baseStats:{hp:70,atk:62,def:67,spa:55,spd:55,spe:56},
    ability:'-',
    moves:["sludge_bomb","ice_beam","earth_power","thunderbolt"],
    sprite:30
  },
  nidoqueen: {
    id:31, name:'尼多后', types:["Poison","Ground"],
    baseStats:{hp:90,atk:92,def:87,spa:75,spd:85,spe:76},
    ability:'-',
    moves:["sludge_bomb","earthquake","ice_beam","stone_edge"],
    sprite:31
  },
  nidoran_m: {
    id:32, name:'尼多朗', types:["Poison"],
    baseStats:{hp:46,atk:57,def:40,spa:40,spd:40,spe:50},
    ability:'-',
    moves:["sludge_bomb","ice_beam","earth_power","thunderbolt"],
    sprite:32
  },
  nidorino: {
    id:33, name:'尼多力诺', types:["Poison"],
    baseStats:{hp:61,atk:72,def:57,spa:55,spd:55,spe:65},
    ability:'-',
    moves:["sludge_bomb","ice_beam","earth_power","thunderbolt"],
    sprite:33
  },
  nidoking: {
    id:34, name:'尼多王', types:["Poison","Ground"],
    baseStats:{hp:81,atk:102,def:77,spa:85,spd:75,spe:85},
    ability:'-',
    moves:["sludge_bomb","earthquake","ice_beam","stone_edge"],
    sprite:34
  },
  clefairy: {
    id:35, name:'皮皮', types:["Fairy"],
    baseStats:{hp:70,atk:45,def:48,spa:60,spd:65,spe:35},
    ability:'-',
    moves:["moonblast","ice_beam","stealth_rock","thunderbolt"],
    sprite:35
  },
  clefable: {
    id:36, name:'皮可西', types:["Fairy"],
    baseStats:{hp:95,atk:70,def:73,spa:95,spd:90,spe:60},
    ability:'-',
    moves:["moonblast","ice_beam","stealth_rock","thunderbolt"],
    sprite:36
  },
  vulpix: {
    id:37, name:'六尾', types:["Fire"],
    baseStats:{hp:38,atk:41,def:40,spa:50,spd:65,spe:65},
    ability:'-',
    moves:["flamethrower","nasty_plot","will_o_wisp","toxic"],
    sprite:37
  },
  ninetales: {
    id:38, name:'九尾', types:["Fire"],
    baseStats:{hp:73,atk:76,def:75,spa:81,spd:100,spe:100},
    ability:'-',
    moves:["flamethrower","nasty_plot","calm_mind","will_o_wisp"],
    sprite:38
  },
  jigglypuff: {
    id:39, name:'胖丁', types:["Normal","Fairy"],
    baseStats:{hp:115,atk:45,def:20,spa:45,spd:25,spe:20},
    ability:'-',
    moves:["body_slam","play_rough","ice_beam","stealth_rock"],
    sprite:39
  },
  wigglytuff: {
    id:40, name:'胖可丁', types:["Normal","Fairy"],
    baseStats:{hp:140,atk:70,def:45,spa:85,spd:50,spe:45},
    ability:'-',
    moves:["body_slam","play_rough","ice_beam","stealth_rock"],
    sprite:40
  },
  zubat: {
    id:41, name:'超音蝠', types:["Poison","Flying"],
    baseStats:{hp:40,atk:45,def:35,spa:30,spd:40,spe:55},
    ability:'-',
    moves:["sludge_bomb","brave_bird","heat_wave","nasty_plot"],
    sprite:41
  },
  golbat: {
    id:42, name:'大嘴蝠', types:["Poison","Flying"],
    baseStats:{hp:75,atk:80,def:70,spa:65,spd:75,spe:90},
    ability:'-',
    moves:["sludge_bomb","brave_bird","heat_wave","nasty_plot"],
    sprite:42
  },
  oddish: {
    id:43, name:'走路草', types:["Grass","Poison"],
    baseStats:{hp:45,atk:50,def:55,spa:75,spd:65,spe:30},
    ability:'-',
    moves:["energy_ball","sludge_bomb","swords_dance","toxic"],
    sprite:43
  },
  gloom: {
    id:44, name:'臭臭花', types:["Grass","Poison"],
    baseStats:{hp:60,atk:65,def:70,spa:85,spd:75,spe:40},
    ability:'-',
    moves:["energy_ball","sludge_bomb","swords_dance","toxic"],
    sprite:44
  },
  vileplume: {
    id:45, name:'霸王花', types:["Grass","Poison"],
    baseStats:{hp:75,atk:80,def:85,spa:110,spd:90,spe:50},
    ability:'-',
    moves:["energy_ball","sludge_bomb","swords_dance","toxic"],
    sprite:45
  },
  paras: {
    id:46, name:'派拉斯', types:["Bug","Grass"],
    baseStats:{hp:35,atk:70,def:55,spa:45,spd:55,spe:25},
    ability:'-',
    moves:["x_scissor","energy_ball","brick_break","swords_dance"],
    sprite:46
  },
  parasect: {
    id:47, name:'派拉斯特', types:["Bug","Grass"],
    baseStats:{hp:60,atk:95,def:80,spa:60,spd:80,spe:30},
    ability:'-',
    moves:["x_scissor","energy_ball","brick_break","swords_dance"],
    sprite:47
  },
  venonat: {
    id:48, name:'毛球', types:["Bug","Poison"],
    baseStats:{hp:60,atk:55,def:50,spa:40,spd:55,spe:45},
    ability:'-',
    moves:["bug_buzz","sludge_bomb","toxic","protect"],
    sprite:48
  },
  venomoth: {
    id:49, name:'摩鲁蛾', types:["Bug","Poison"],
    baseStats:{hp:70,atk:65,def:60,spa:90,spd:75,spe:90},
    ability:'-',
    moves:["u_turn","sludge_bomb","toxic","roost"],
    sprite:49
  },
  diglett: {
    id:50, name:'地鼠', types:["Ground"],
    baseStats:{hp:10,atk:55,def:25,spa:35,spd:45,spe:95},
    ability:'-',
    moves:["earthquake","stone_edge","swords_dance","toxic"],
    sprite:50
  },
  dugtrio: {
    id:51, name:'三地鼠', types:["Ground"],
    baseStats:{hp:35,atk:100,def:50,spa:50,spd:70,spe:120},
    ability:'-',
    moves:["earthquake","stone_edge","swords_dance","toxic"],
    sprite:51
  },
  meowth: {
    id:52, name:'喵喵', types:["Normal"],
    baseStats:{hp:40,atk:45,def:35,spa:40,spd:40,spe:90},
    ability:'-',
    moves:["body_slam","thunderbolt","nasty_plot","thunder_wave"],
    sprite:52
  },
  persian: {
    id:53, name:'猫老大', types:["Normal"],
    baseStats:{hp:65,atk:70,def:60,spa:65,spd:65,spe:115},
    ability:'-',
    moves:["body_slam","thunderbolt","nasty_plot","thunder_wave"],
    sprite:53
  },
  psyduck: {
    id:54, name:'可达鸭', types:["Water"],
    baseStats:{hp:50,atk:52,def:48,spa:65,spd:50,spe:55},
    ability:'-',
    moves:["surf","ice_beam","brick_break","nasty_plot"],
    sprite:54
  },
  golduck: {
    id:55, name:'哥达鸭', types:["Water"],
    baseStats:{hp:80,atk:82,def:78,spa:95,spd:80,spe:85},
    ability:'-',
    moves:["surf","ice_beam","focus_blast","nasty_plot"],
    sprite:55
  },
  mankey: {
    id:56, name:'猴怪', types:["Fighting"],
    baseStats:{hp:40,atk:80,def:35,spa:35,spd:45,spe:70},
    ability:'-',
    moves:["close_combat","ice_punch","earthquake","stone_edge"],
    sprite:56
  },
  primeape: {
    id:57, name:'火暴猴', types:["Fighting"],
    baseStats:{hp:65,atk:105,def:60,spa:60,spd:70,spe:95},
    ability:'-',
    moves:["close_combat","ice_punch","earthquake","stone_edge"],
    sprite:57
  },
  growlithe: {
    id:58, name:'卡蒂狗', types:["Fire"],
    baseStats:{hp:55,atk:70,def:45,spa:70,spd:50,spe:60},
    ability:'-',
    moves:["flamethrower","close_combat","will_o_wisp","toxic"],
    sprite:58
  },
  arcanine: {
    id:59, name:'风速狗', types:["Fire"],
    baseStats:{hp:90,atk:110,def:80,spa:100,spd:80,spe:95},
    ability:'-',
    moves:["flamethrower","close_combat","will_o_wisp","toxic"],
    sprite:59
  },
  poliwag: {
    id:60, name:'蚊香蝌蚪', types:["Water"],
    baseStats:{hp:40,atk:50,def:40,spa:40,spd:40,spe:90},
    ability:'-',
    moves:["surf","ice_beam","earth_power","toxic"],
    sprite:60
  },
  poliwhirl: {
    id:61, name:'蚊香君', types:["Water"],
    baseStats:{hp:65,atk:65,def:65,spa:50,spd:50,spe:90},
    ability:'-',
    moves:["surf","ice_beam","earthquake","brick_break"],
    sprite:61
  },
  poliwrath: {
    id:62, name:'蚊香泳士', types:["Water","Fighting"],
    baseStats:{hp:90,atk:95,def:95,spa:70,spd:90,spe:70},
    ability:'-',
    moves:["surf","close_combat","ice_beam","earthquake"],
    sprite:62
  },
  abra: {
    id:63, name:'凯西', types:["Psychic"],
    baseStats:{hp:25,atk:20,def:15,spa:105,spd:55,spe:90},
    ability:'-',
    moves:["psyshock","ice_punch","thunder_punch","fire_punch"],
    sprite:63
  },
  kadabra: {
    id:64, name:'勇基拉', types:["Psychic"],
    baseStats:{hp:40,atk:35,def:30,spa:120,spd:70,spe:105},
    ability:'-',
    moves:["psyshock","ice_punch","thunder_punch","fire_punch"],
    sprite:64
  },
  alakazam: {
    id:65, name:'胡地', types:["Psychic"],
    baseStats:{hp:55,atk:50,def:45,spa:135,spd:95,spe:120},
    ability:'-',
    moves:["psyshock","ice_punch","thunder_punch","fire_punch"],
    sprite:65
  },
  machop: {
    id:66, name:'腕力', types:["Fighting"],
    baseStats:{hp:70,atk:80,def:50,spa:35,spd:35,spe:35},
    ability:'-',
    moves:["close_combat","ice_punch","earthquake","rock_slide"],
    sprite:66
  },
  machoke: {
    id:67, name:'豪力', types:["Fighting"],
    baseStats:{hp:80,atk:100,def:70,spa:50,spd:60,spe:45},
    ability:'-',
    moves:["close_combat","ice_punch","earthquake","rock_slide"],
    sprite:67
  },
  machamp: {
    id:68, name:'怪力', types:["Fighting"],
    baseStats:{hp:90,atk:130,def:80,spa:65,spd:85,spe:55},
    ability:'-',
    moves:["close_combat","ice_punch","earthquake","stone_edge"],
    sprite:68
  },
  bellsprout: {
    id:69, name:'喇叭芽', types:["Grass","Poison"],
    baseStats:{hp:50,atk:75,def:35,spa:70,spd:30,spe:40},
    ability:'-',
    moves:["energy_ball","sludge_bomb","swords_dance","toxic"],
    sprite:69
  },
  weepinbell: {
    id:70, name:'口呆花', types:["Grass","Poison"],
    baseStats:{hp:65,atk:90,def:50,spa:85,spd:45,spe:55},
    ability:'-',
    moves:["energy_ball","sludge_bomb","swords_dance","toxic"],
    sprite:70
  },
  victreebel: {
    id:71, name:'大食花', types:["Grass","Poison"],
    baseStats:{hp:80,atk:105,def:65,spa:100,spd:70,spe:70},
    ability:'-',
    moves:["energy_ball","sludge_bomb","swords_dance","toxic"],
    sprite:71
  },
  tentacool: {
    id:72, name:'玛瑙水母', types:["Water","Poison"],
    baseStats:{hp:40,atk:40,def:35,spa:50,spd:100,spe:70},
    ability:'-',
    moves:["surf","sludge_bomb","ice_beam","swords_dance"],
    sprite:72
  },
  tentacruel: {
    id:73, name:'毒刺水母', types:["Water","Poison"],
    baseStats:{hp:80,atk:70,def:65,spa:80,spd:120,spe:100},
    ability:'-',
    moves:["surf","sludge_bomb","ice_beam","swords_dance"],
    sprite:73
  },
  geodude: {
    id:74, name:'小拳石', types:["Rock","Ground"],
    baseStats:{hp:40,atk:80,def:100,spa:30,spd:30,spe:20},
    ability:'-',
    moves:["stone_edge","earthquake","thunder_punch","flamethrower"],
    sprite:74
  },
  graveler: {
    id:75, name:'隆隆石', types:["Rock","Ground"],
    baseStats:{hp:55,atk:95,def:115,spa:45,spd:45,spe:35},
    ability:'-',
    moves:["stone_edge","earthquake","thunder_punch","flamethrower"],
    sprite:75
  },
  golem: {
    id:76, name:'隆隆岩', types:["Rock","Ground"],
    baseStats:{hp:80,atk:120,def:130,spa:55,spd:65,spe:45},
    ability:'-',
    moves:["stone_edge","earthquake","thunder_punch","flamethrower"],
    sprite:76
  },
  ponyta: {
    id:77, name:'小火马', types:["Fire"],
    baseStats:{hp:50,atk:85,def:55,spa:65,spd:65,spe:90},
    ability:'-',
    moves:["flamethrower","will_o_wisp","toxic","protect"],
    sprite:77
  },
  rapidash: {
    id:78, name:'烈焰马', types:["Fire"],
    baseStats:{hp:65,atk:100,def:70,spa:80,spd:80,spe:105},
    ability:'-',
    moves:["flamethrower","swords_dance","will_o_wisp","toxic"],
    sprite:78
  },
  slowpoke: {
    id:79, name:'呆呆兽', types:["Water","Psychic"],
    baseStats:{hp:90,atk:65,def:65,spa:40,spd:40,spe:15},
    ability:'-',
    moves:["surf","psyshock","ice_beam","earthquake"],
    sprite:79
  },
  slowbro: {
    id:80, name:'呆壳兽', types:["Water","Psychic"],
    baseStats:{hp:95,atk:75,def:110,spa:100,spd:80,spe:30},
    ability:'-',
    moves:["surf","psyshock","ice_beam","earthquake"],
    sprite:80
  },
  magnemite: {
    id:81, name:'小磁怪', types:["Electric","Steel"],
    baseStats:{hp:25,atk:35,def:70,spa:95,spd:55,spe:45},
    ability:'-',
    moves:["thunderbolt","iron_head","thunder_wave","toxic"],
    sprite:81
  },
  magneton: {
    id:82, name:'三合一磁怪', types:["Electric","Steel"],
    baseStats:{hp:50,atk:60,def:95,spa:120,spd:70,spe:70},
    ability:'-',
    moves:["thunderbolt","iron_head","thunder_wave","toxic"],
    sprite:82
  },
  farfetchd: {
    id:83, name:'大葱鸭', types:["Normal","Flying"],
    baseStats:{hp:52,atk:90,def:55,spa:58,spd:62,spe:60},
    ability:'-',
    moves:["body_slam","brave_bird","heat_wave","close_combat"],
    sprite:83
  },
  doduo: {
    id:84, name:'嘟嘟', types:["Normal","Flying"],
    baseStats:{hp:35,atk:85,def:45,spa:35,spd:35,spe:75},
    ability:'-',
    moves:["body_slam","brave_bird","swords_dance","toxic"],
    sprite:84
  },
  dodrio: {
    id:85, name:'嘟嘟利', types:["Normal","Flying"],
    baseStats:{hp:60,atk:110,def:70,spa:60,spd:60,spe:110},
    ability:'-',
    moves:["body_slam","brave_bird","swords_dance","toxic"],
    sprite:85
  },
  seel: {
    id:86, name:'小海狮', types:["Water"],
    baseStats:{hp:65,atk:45,def:55,spa:45,spd:70,spe:45},
    ability:'-',
    moves:["surf","ice_beam","toxic","protect"],
    sprite:86
  },
  dewgong: {
    id:87, name:'白海狮', types:["Water","Ice"],
    baseStats:{hp:90,atk:70,def:80,spa:70,spd:95,spe:70},
    ability:'-',
    moves:["surf","ice_beam","toxic","protect"],
    sprite:87
  },
  grimer: {
    id:88, name:'臭泥', types:["Poison"],
    baseStats:{hp:80,atk:80,def:50,spa:40,spd:50,spe:25},
    ability:'-',
    moves:["sludge_bomb","ice_punch","rock_slide","thunderbolt"],
    sprite:88
  },
  muk: {
    id:89, name:'臭臭泥', types:["Poison"],
    baseStats:{hp:105,atk:105,def:75,spa:65,spd:100,spe:50},
    ability:'-',
    moves:["sludge_bomb","ice_punch","rock_slide","thunderbolt"],
    sprite:89
  },
  shellder: {
    id:90, name:'大舌贝', types:["Water"],
    baseStats:{hp:30,atk:65,def:100,spa:45,spd:25,spe:40},
    ability:'-',
    moves:["surf","ice_beam","toxic","spikes"],
    sprite:90
  },
  cloyster: {
    id:91, name:'刺甲贝', types:["Water","Ice"],
    baseStats:{hp:50,atk:95,def:180,spa:85,spd:45,spe:70},
    ability:'-',
    moves:["surf","ice_beam","toxic","spikes"],
    sprite:91
  },
  gastly: {
    id:92, name:'鬼斯', types:["Ghost","Poison"],
    baseStats:{hp:30,atk:35,def:30,spa:100,spd:35,spe:80},
    ability:'-',
    moves:["shadow_ball","sludge_bomb","ice_punch","thunderbolt"],
    sprite:92
  },
  haunter: {
    id:93, name:'鬼斯通', types:["Ghost","Poison"],
    baseStats:{hp:45,atk:50,def:45,spa:115,spd:55,spe:95},
    ability:'-',
    moves:["shadow_ball","sludge_bomb","ice_punch","thunderbolt"],
    sprite:93
  },
  gengar: {
    id:94, name:'耿鬼', types:["Ghost","Poison"],
    baseStats:{hp:60,atk:65,def:60,spa:130,spd:75,spe:110},
    ability:'-',
    moves:["shadow_ball","sludge_bomb","ice_punch","thunderbolt"],
    sprite:94
  },
  onix: {
    id:95, name:'大岩蛇', types:["Rock","Ground"],
    baseStats:{hp:35,atk:45,def:160,spa:30,spd:45,spe:70},
    ability:'-',
    moves:["stone_edge","earthquake","dragon_dance","toxic"],
    sprite:95
  },
  drowzee: {
    id:96, name:'催眠貘', types:["Psychic"],
    baseStats:{hp:60,atk:48,def:45,spa:43,spd:90,spe:42},
    ability:'-',
    moves:["psyshock","ice_punch","thunder_punch","fire_punch"],
    sprite:96
  },
  hypno: {
    id:97, name:'引梦貘人', types:["Psychic"],
    baseStats:{hp:85,atk:73,def:70,spa:73,spd:115,spe:67},
    ability:'-',
    moves:["psyshock","ice_punch","thunder_punch","fire_punch"],
    sprite:97
  },
  krabby: {
    id:98, name:'大钳蟹', types:["Water"],
    baseStats:{hp:30,atk:105,def:90,spa:25,spd:25,spe:50},
    ability:'-',
    moves:["surf","ice_beam","rock_slide","superpower"],
    sprite:98
  },
  kingler: {
    id:99, name:'巨钳蟹', types:["Water"],
    baseStats:{hp:55,atk:130,def:115,spa:50,spd:50,spe:75},
    ability:'-',
    moves:["surf","ice_beam","rock_slide","superpower"],
    sprite:99
  },
  voltorb: {
    id:100, name:'霹雳电球', types:["Electric"],
    baseStats:{hp:40,atk:30,def:50,spa:55,spd:55,spe:100},
    ability:'-',
    moves:["thunderbolt","thunder_wave","toxic","protect"],
    sprite:100
  },
  electrode: {
    id:101, name:'顽皮雷弹', types:["Electric"],
    baseStats:{hp:60,atk:50,def:70,spa:80,spd:80,spe:150},
    ability:'-',
    moves:["thunderbolt","thunder_wave","toxic","protect"],
    sprite:101
  },
  exeggcute: {
    id:102, name:'蛋蛋', types:["Grass","Psychic"],
    baseStats:{hp:60,atk:40,def:80,spa:60,spd:45,spe:40},
    ability:'-',
    moves:["energy_ball","psyshock","swords_dance","toxic"],
    sprite:102
  },
  exeggutor: {
    id:103, name:'椰蛋树', types:["Grass","Psychic"],
    baseStats:{hp:95,atk:95,def:85,spa:125,spd:75,spe:55},
    ability:'-',
    moves:["energy_ball","psyshock","earthquake","swords_dance"],
    sprite:103
  },
  cubone: {
    id:104, name:'卡拉卡拉', types:["Ground"],
    baseStats:{hp:50,atk:50,def:95,spa:40,spd:50,spe:35},
    ability:'-',
    moves:["earthquake","ice_beam","rock_slide","thunder_punch"],
    sprite:104
  },
  marowak: {
    id:105, name:'嘎啦嘎啦', types:["Ground"],
    baseStats:{hp:60,atk:80,def:110,spa:50,spd:80,spe:45},
    ability:'-',
    moves:["earthquake","ice_beam","stone_edge","thunder_punch"],
    sprite:105
  },
  hitmonlee: {
    id:106, name:'飞腿郎', types:["Fighting"],
    baseStats:{hp:50,atk:120,def:53,spa:35,spd:110,spe:87},
    ability:'-',
    moves:["close_combat","earthquake","stone_edge","swords_dance"],
    sprite:106
  },
  hitmonchan: {
    id:107, name:'快拳郎', types:["Fighting"],
    baseStats:{hp:50,atk:105,def:79,spa:35,spd:110,spe:76},
    ability:'-',
    moves:["close_combat","ice_punch","earthquake","stone_edge"],
    sprite:107
  },
  lickitung: {
    id:108, name:'大舌头', types:["Normal"],
    baseStats:{hp:90,atk:55,def:75,spa:60,spd:75,spe:30},
    ability:'-',
    moves:["body_slam","ice_beam","earthquake","rock_slide"],
    sprite:108
  },
  koffing: {
    id:109, name:'瓦斯弹', types:["Poison"],
    baseStats:{hp:40,atk:65,def:95,spa:60,spd:45,spe:35},
    ability:'-',
    moves:["sludge_bomb","thunderbolt","flamethrower","will_o_wisp"],
    sprite:109
  },
  weezing: {
    id:110, name:'双弹瓦斯', types:["Poison"],
    baseStats:{hp:65,atk:90,def:120,spa:85,spd:70,spe:60},
    ability:'-',
    moves:["sludge_bomb","thunderbolt","flamethrower","will_o_wisp"],
    sprite:110
  },
  rhyhorn: {
    id:111, name:'独角犀牛', types:["Ground","Rock"],
    baseStats:{hp:80,atk:85,def:95,spa:30,spd:30,spe:25},
    ability:'-',
    moves:["earthquake","stone_edge","ice_beam","thunderbolt"],
    sprite:111
  },
  rhydon: {
    id:112, name:'钻角犀兽', types:["Ground","Rock"],
    baseStats:{hp:105,atk:130,def:120,spa:45,spd:45,spe:40},
    ability:'-',
    moves:["earthquake","stone_edge","ice_beam","thunderbolt"],
    sprite:112
  },
  chansey: {
    id:113, name:'吉利蛋', types:["Normal"],
    baseStats:{hp:250,atk:5,def:5,spa:35,spd:105,spe:50},
    ability:'-',
    moves:["body_slam","ice_beam","earthquake","rock_slide"],
    sprite:113
  },
  tangela: {
    id:114, name:'蔓藤怪', types:["Grass"],
    baseStats:{hp:65,atk:55,def:115,spa:100,spd:40,spe:60},
    ability:'-',
    moves:["energy_ball","swords_dance","toxic","leech_seed"],
    sprite:114
  },
  kangaskhan: {
    id:115, name:'袋兽', types:["Normal"],
    baseStats:{hp:105,atk:95,def:80,spa:40,spd:80,spe:90},
    ability:'-',
    moves:["body_slam","ice_beam","earthquake","rock_slide"],
    sprite:115
  },
  horsea: {
    id:116, name:'墨海马', types:["Water"],
    baseStats:{hp:30,atk:40,def:70,spa:70,spd:25,spe:60},
    ability:'-',
    moves:["surf","ice_beam","dragon_dance","toxic"],
    sprite:116
  },
  seadra: {
    id:117, name:'海刺龙', types:["Water"],
    baseStats:{hp:55,atk:65,def:95,spa:95,spd:45,spe:85},
    ability:'-',
    moves:["surf","ice_beam","dragon_dance","toxic"],
    sprite:117
  },
  goldeen: {
    id:118, name:'角金鱼', types:["Water"],
    baseStats:{hp:45,atk:67,def:60,spa:35,spd:50,spe:63},
    ability:'-',
    moves:["surf","ice_beam","swords_dance","toxic"],
    sprite:118
  },
  seaking: {
    id:119, name:'金鱼王', types:["Water"],
    baseStats:{hp:80,atk:92,def:65,spa:65,spd:80,spe:68},
    ability:'-',
    moves:["surf","ice_beam","swords_dance","toxic"],
    sprite:119
  },
  staryu: {
    id:120, name:'海星星', types:["Water"],
    baseStats:{hp:30,atk:45,def:55,spa:70,spd:55,spe:85},
    ability:'-',
    moves:["surf","ice_beam","thunderbolt","thunder_wave"],
    sprite:120
  },
  starmie: {
    id:121, name:'宝石海星', types:["Water","Psychic"],
    baseStats:{hp:60,atk:75,def:85,spa:100,spd:85,spe:115},
    ability:'-',
    moves:["surf","psyshock","ice_beam","thunderbolt"],
    sprite:121
  },
  mr_mime: {
    id:122, name:'魔墙人偶', types:["Psychic","Fairy"],
    baseStats:{hp:40,atk:45,def:65,spa:100,spd:120,spe:90},
    ability:'-',
    moves:["psyshock","dazzling_gleam","ice_punch","thunderbolt"],
    sprite:122
  },
  scyther: {
    id:123, name:'飞天螳螂', types:["Bug","Flying"],
    baseStats:{hp:70,atk:110,def:80,spa:55,spd:80,spe:105},
    ability:'-',
    moves:["x_scissor","aerial_ace","close_combat","swords_dance"],
    sprite:123
  },
  jynx: {
    id:124, name:'迷唇姐', types:["Ice","Psychic"],
    baseStats:{hp:65,atk:50,def:35,spa:115,spd:95,spe:95},
    ability:'-',
    moves:["ice_beam","psyshock","focus_blast","nasty_plot"],
    sprite:124
  },
  electabuzz: {
    id:125, name:'电击兽', types:["Electric"],
    baseStats:{hp:65,atk:83,def:57,spa:95,spd:85,spe:105},
    ability:'-',
    moves:["thunderbolt","ice_punch","fire_punch","focus_blast"],
    sprite:125
  },
  magmar: {
    id:126, name:'鸭嘴火兽', types:["Fire"],
    baseStats:{hp:65,atk:95,def:57,spa:100,spd:85,spe:93},
    ability:'-',
    moves:["flamethrower","thunder_punch","focus_blast","will_o_wisp"],
    sprite:126
  },
  pinsir: {
    id:127, name:'凯罗斯', types:["Bug"],
    baseStats:{hp:65,atk:125,def:100,spa:55,spd:70,spe:85},
    ability:'-',
    moves:["x_scissor","earthquake","stone_edge","close_combat"],
    sprite:127
  },
  tauros: {
    id:128, name:'肯泰罗', types:["Normal"],
    baseStats:{hp:75,atk:100,def:95,spa:40,spd:70,spe:110},
    ability:'-',
    moves:["body_slam","ice_beam","earthquake","stone_edge"],
    sprite:128
  },
  magikarp: {
    id:129, name:'鲤鱼王', types:["Water"],
    baseStats:{hp:20,atk:10,def:55,spa:15,spd:20,spe:80},
    ability:'-',
    moves:["hydro_pump","tackle","body_slam","quick_attack"],
    sprite:129
  },
  gyarados: {
    id:130, name:'暴鲤龙', types:["Water","Flying"],
    baseStats:{hp:95,atk:125,def:79,spa:60,spd:100,spe:81},
    ability:'-',
    moves:["surf","hurricane","ice_beam","earthquake"],
    sprite:130
  },
  lapras: {
    id:131, name:'拉普拉斯', types:["Water","Ice"],
    baseStats:{hp:130,atk:85,def:80,spa:85,spd:95,spe:60},
    ability:'-',
    moves:["surf","ice_beam","earthquake","thunderbolt"],
    sprite:131
  },
  ditto: {
    id:132, name:'百变怪', types:["Normal"],
    baseStats:{hp:48,atk:48,def:48,spa:48,spd:48,spe:48},
    ability:'-',
    moves:["tackle","body_slam","quick_attack","double_edge"],
    sprite:132
  },
  eevee: {
    id:133, name:'伊布', types:["Normal"],
    baseStats:{hp:55,atk:55,def:50,spa:45,spd:65,spe:55},
    ability:'-',
    moves:["body_slam","calm_mind","toxic","protect"],
    sprite:133
  },
  vaporeon: {
    id:134, name:'水伊布', types:["Water"],
    baseStats:{hp:130,atk:65,def:60,spa:110,spd:95,spe:65},
    ability:'-',
    moves:["surf","ice_beam","calm_mind","toxic"],
    sprite:134
  },
  jolteon: {
    id:135, name:'雷伊布', types:["Electric"],
    baseStats:{hp:65,atk:65,def:60,spa:110,spd:95,spe:130},
    ability:'-',
    moves:["thunderbolt","calm_mind","thunder_wave","toxic"],
    sprite:135
  },
  flareon: {
    id:136, name:'火伊布', types:["Fire"],
    baseStats:{hp:65,atk:130,def:60,spa:95,spd:110,spe:65},
    ability:'-',
    moves:["flamethrower","superpower","calm_mind","will_o_wisp"],
    sprite:136
  },
  porygon: {
    id:137, name:'多边兽', types:["Normal"],
    baseStats:{hp:65,atk:60,def:70,spa:85,spd:75,spe:40},
    ability:'-',
    moves:["double_edge","ice_beam","thunderbolt","thunder_wave"],
    sprite:137
  },
  omanyte: {
    id:138, name:'菊石兽', types:["Rock","Water"],
    baseStats:{hp:35,atk:40,def:100,spa:90,spd:55,spe:35},
    ability:'-',
    moves:["rock_slide","surf","ice_beam","earth_power"],
    sprite:138
  },
  omastar: {
    id:139, name:'多刺菊石兽', types:["Rock","Water"],
    baseStats:{hp:70,atk:60,def:125,spa:115,spd:70,spe:55},
    ability:'-',
    moves:["stone_edge","surf","ice_beam","earth_power"],
    sprite:139
  },
  kabuto: {
    id:140, name:'化石盔', types:["Rock","Water"],
    baseStats:{hp:30,atk:80,def:90,spa:55,spd:45,spe:55},
    ability:'-',
    moves:["stone_edge","surf","ice_beam","earth_power"],
    sprite:140
  },
  kabutops: {
    id:141, name:'镰刀盔', types:["Rock","Water"],
    baseStats:{hp:60,atk:115,def:105,spa:65,spd:70,spe:80},
    ability:'-',
    moves:["stone_edge","surf","ice_beam","earth_power"],
    sprite:141
  },
  aerodactyl: {
    id:142, name:'化石翼龙', types:["Rock","Flying"],
    baseStats:{hp:80,atk:105,def:65,spa:60,spd:75,spe:130},
    ability:'-',
    moves:["stone_edge","hurricane","earthquake","flamethrower"],
    sprite:142
  },
  snorlax: {
    id:143, name:'卡比兽', types:["Normal"],
    baseStats:{hp:160,atk:110,def:65,spa:65,spd:110,spe:30},
    ability:'-',
    moves:["body_slam","ice_beam","earthquake","rock_slide"],
    sprite:143
  },
  articuno: {
    id:144, name:'急冻鸟', types:["Ice","Flying"],
    baseStats:{hp:90,atk:85,def:100,spa:95,spd:125,spe:85},
    ability:'-',
    moves:["ice_beam","brave_bird","toxic","roost"],
    sprite:144
  },
  zapdos: {
    id:145, name:'闪电鸟', types:["Electric","Flying"],
    baseStats:{hp:90,atk:90,def:85,spa:125,spd:90,spe:100},
    ability:'-',
    moves:["thunderbolt","brave_bird","heat_wave","thunder_wave"],
    sprite:145
  },
  moltres: {
    id:146, name:'火焰鸟', types:["Fire","Flying"],
    baseStats:{hp:90,atk:100,def:90,spa:125,spd:85,spe:90},
    ability:'-',
    moves:["flamethrower","brave_bird","will_o_wisp","toxic"],
    sprite:146
  },
  dratini: {
    id:147, name:'迷你龙', types:["Dragon"],
    baseStats:{hp:41,atk:64,def:45,spa:50,spd:50,spe:50},
    ability:'-',
    moves:["dragon_pulse","ice_beam","thunderbolt","flamethrower"],
    sprite:147
  },
  dragonair: {
    id:148, name:'哈克龙', types:["Dragon"],
    baseStats:{hp:61,atk:84,def:65,spa:70,spd:70,spe:70},
    ability:'-',
    moves:["dragon_pulse","ice_beam","thunderbolt","flamethrower"],
    sprite:148
  },
  dragonite: {
    id:149, name:'快龙', types:["Dragon","Flying"],
    baseStats:{hp:91,atk:134,def:95,spa:100,spd:100,spe:80},
    ability:'-',
    moves:["dragon_claw","hurricane","ice_beam","earthquake"],
    sprite:149
  },
  mewtwo: {
    id:150, name:'超梦', types:["Psychic"],
    baseStats:{hp:106,atk:110,def:90,spa:154,spd:90,spe:130},
    ability:'-',
    moves:["psyshock","ice_beam","earthquake","stone_edge"],
    sprite:150
  },
  mew: {
    id:151, name:'梦幻', types:["Psychic"],
    baseStats:{hp:100,atk:100,def:100,spa:100,spd:100,spe:100},
    ability:'-',
    moves:["psyshock","ice_beam","earthquake","stone_edge"],
    sprite:151
  },
};

const AI_TEAM_KEYS = ['dragonite','charizard','gyarados','alakazam','snorlax','gengar'];

const TYPE_COLORS = {Normal:'#A8A878',Fire:'#F08030',Water:'#6890F0',Electric:'#F8D030',Grass:'#78C850',Ice:'#98D8D8',Fighting:'#C03028',Poison:'#A040A0',Ground:'#E0C068',Flying:'#A890F0',Psychic:'#F85888',Bug:'#A8B820',Rock:'#B8A038',Ghost:'#705898',Dragon:'#7038F8',Dark:'#705848',Steel:'#B8B8D0',Fairy:'#EE99AC'};

const STATUS_COLOR = '#888';
