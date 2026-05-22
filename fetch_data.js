// 从 PokéAPI 批量获取第一世代宝可梦数据
// 运行: node fetch_data.js

const https = require('https');
const fs = require('fs');

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'PokemonBattleGame/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch(e) { reject(new Error(`JSON parse error for ${url}: ${e.message}`)); }
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// 中文名映射 (Gen 1 全部151只)
const CN_NAMES = {
  1:'妙蛙种子',2:'妙蛙草',3:'妙蛙花',4:'小火龙',5:'火恐龙',6:'喷火龙',
  7:'杰尼龟',8:'卡咪龟',9:'水箭龟',10:'绿毛虫',11:'铁甲蛹',12:'巴大蝶',
  13:'独角虫',14:'铁壳蛹',15:'大针蜂',16:'波波',17:'比比鸟',18:'大比鸟',
  19:'小拉达',20:'拉达',21:'烈雀',22:'大嘴雀',23:'阿柏蛇',24:'阿柏怪',
  25:'皮卡丘',26:'雷丘',27:'穿山鼠',28:'穿山王',29:'尼多兰',30:'尼多娜',
  31:'尼多后',32:'尼多朗',33:'尼多力诺',34:'尼多王',35:'皮皮',36:'皮可西',
  37:'六尾',38:'九尾',39:'胖丁',40:'胖可丁',41:'超音蝠',42:'大嘴蝠',
  43:'走路草',44:'臭臭花',45:'霸王花',46:'派拉斯',47:'派拉斯特',48:'毛球',
  49:'摩鲁蛾',50:'地鼠',51:'三地鼠',52:'喵喵',53:'猫老大',54:'可达鸭',
  55:'哥达鸭',56:'猴怪',57:'火暴猴',58:'卡蒂狗',59:'风速狗',60:'蚊香蝌蚪',
  61:'蚊香君',62:'蚊香泳士',63:'凯西',64:'勇基拉',65:'胡地',66:'腕力',
  67:'豪力',68:'怪力',69:'喇叭芽',70:'口呆花',71:'大食花',72:'玛瑙水母',
  73:'毒刺水母',74:'小拳石',75:'隆隆石',76:'隆隆岩',77:'小火马',78:'烈焰马',
  79:'呆呆兽',80:'呆壳兽',81:'小磁怪',82:'三合一磁怪',83:'大葱鸭',84:'嘟嘟',
  85:'嘟嘟利',86:'小海狮',87:'白海狮',88:'臭泥',89:'臭臭泥',90:'大舌贝',
  91:'刺甲贝',92:'鬼斯',93:'鬼斯通',94:'耿鬼',95:'大岩蛇',96:'催眠貘',
  97:'引梦貘人',98:'大钳蟹',99:'巨钳蟹',100:'霹雳电球',101:'顽皮雷弹',
  102:'蛋蛋',103:'椰蛋树',104:'卡拉卡拉',105:'嘎啦嘎啦',105:'嘎啦嘎啦',
  106:'飞腿郎',107:'快拳郎',108:'大舌头',109:'瓦斯弹',110:'双弹瓦斯',
  111:'独角犀牛',112:'钻角犀兽',111:'独角犀牛',112:'钻角犀兽',
  113:'吉利蛋',114:'蔓藤怪',115:'袋兽',116:'墨海马',117:'海刺龙',
  118:'角金鱼',119:'金鱼王',120:'海星星',121:'宝石海星',122:'魔墙人偶',
  123:'飞天螳螂',124:'迷唇姐',125:'电击兽',126:'鸭嘴火兽',127:'凯罗斯',
  128:'肯泰罗',129:'鲤鱼王',130:'暴鲤龙',131:'拉普拉斯',132:'百变怪',
  133:'伊布',134:'水伊布',135:'雷伊布',136:'火伊布',137:'多边兽',
  138:'菊石兽',139:'多刺菊石兽',140:'化石盔',141:'镰刀盔',142:'化石翼龙',
  143:'卡比兽',144:'急冻鸟',145:'闪电鸟',146:'火焰鸟',147:'迷你龙',
  148:'哈克龙',149:'快龙',150:'超梦',151:'梦幻'
};

// 常用竞技技能池 (按属性分类)
const COMPETITIVE_MOVES = {
  Normal: ['body_slam','return_m','double_edge','extreme_speed','hyper_beam','quick_attack','tackle'],
  Fire: ['flamethrower','fire_blast','fire_punch','flare_blitz','overheat','heat_wave'],
  Water: ['surf','hydro_pump','waterfall','ice_beam','scald','blizzard'],
  Electric: ['thunderbolt','thunder','thunder_punch','volt_switch','thunder_wave'],
  Grass: ['energy_ball','solar_beam','leaf_blade','power_whip','leech_seed','sleep_powder'],
  Ice: ['ice_beam','blizzard','ice_punch','icicle_spear','ice_shard'],
  Fighting: ['close_combat','aura_sphere','focus_blast','superpower','brick_break','mach_punch','cross_chop'],
  Poison: ['sludge_bomb','poison_jab','gunk_shot','toxic'],
  Ground: ['earthquake','earth_power','stealth_rock'],
  Flying: ['brave_bird','hurricane','aerial_ace','air_slash'],
  Psychic: ['psychic_m','psyshock','zen_headbutt','shadow_ball','calm_mind','recover'],
  Bug: ['x_scissor','u_turn','megahorn','bug_buzz'],
  Rock: ['stone_edge','rock_slide','stealth_rock'],
  Ghost: ['shadow_ball','shadow_claw','shadow_sneak','destiny_bond'],
  Dragon: ['dragon_claw','dragon_pulse','outrage','draco_meteor','dragon_dance'],
  Dark: ['crunch','dark_pulse','knock_off','sucker_punch','pursuit'],
  Steel: ['iron_head','flash_cannon','meteor_mash','bullet_punch','iron_tail'],
  Fairy: ['moonblast','play_rough','dazzling_gleam']
};

// 为宝可梦选择最佳4个技能
function selectMoves(pokemonTypes, allMoveNames) {
  const selected = [];
  const usedTypes = new Set();

  // 优先选本系攻击技
  for (const type of pokemonTypes) {
    const moves = COMPETITIVE_MOVES[type] || [];
    for (const m of moves) {
      if (selected.length >= 4) break;
      if (!selected.includes(m) && allMoveNames.includes(m)) {
        selected.push(m);
        usedTypes.add(type);
        break;
      }
    }
  }

  // 补充其他属性的攻击技 (覆盖弱点)
  const coverageTypes = ['Ice','Ground','Rock','Electric','Fire','Fighting'];
  for (const type of coverageTypes) {
    if (selected.length >= 4) break;
    const moves = COMPETITIVE_MOVES[type] || [];
    for (const m of moves) {
      if (selected.length >= 4) break;
      if (!selected.includes(m) && allMoveNames.includes(m) && !usedTypes.has(type)) {
        selected.push(m);
        usedTypes.add(type);
      }
    }
  }

  // 还不够的话加变化技
  const statusMoves = ['swords_dance','nasty_plot','calm_mind','dragon_dance','thunder_wave','will_o_wisp','toxic','recover','roost','slack_off','stealth_rock','spikes','leech_seed','protect','substitute'];
  for (const m of statusMoves) {
    if (selected.length >= 4) break;
    if (!selected.includes(m) && allMoveNames.includes(m)) {
      selected.push(m);
    }
  }

  // 最后兜底
  const fallback = ['tackle','body_slam','quick_attack','double_edge'];
  for (const m of fallback) {
    if (selected.length >= 4) break;
    if (!selected.includes(m)) selected.push(m);
  }

  return selected.slice(0, 4);
}

// 生成技能数据
function generateMoveData(moveName) {
  // 如果已存在就返回
  const existing = {
    tackle:{name:'撞击',type:'Normal',category:'Physical',power:40,accuracy:100,pp:35},
    body_slam:{name:'泰山压顶',type:'Normal',category:'Physical',power:85,accuracy:100,pp:15,effect:'paralysis',effectChance:30},
    return_m:{name:'报恩',type:'Normal',category:'Physical',power:102,accuracy:100,pp:20},
    extreme_speed:{name:'神速',type:'Normal',category:'Physical',power:80,accuracy:100,pp:5,priority:2},
    hyper_beam:{name:'破坏光线',type:'Normal',category:'Special',power:150,accuracy:90,pp:5},
    double_edge:{name:'舍身冲撞',type:'Normal',category:'Physical',power:120,accuracy:100,pp:15,recoil:0.33},
    quick_attack:{name:'电光一闪',type:'Normal',category:'Physical',power:40,accuracy:100,pp:30,priority:1},
    flamethrower:{name:'喷射火焰',type:'Fire',category:'Special',power:90,accuracy:100,pp:15,effect:'burn',effectChance:10},
    fire_blast:{name:'大字爆炎',type:'Fire',category:'Special',power:110,accuracy:85,pp:5,effect:'burn',effectChance:10},
    fire_punch:{name:'火焰拳',type:'Fire',category:'Physical',power:75,accuracy:100,pp:15,effect:'burn',effectChance:10},
    flare_blitz:{name:'闪焰冲锋',type:'Fire',category:'Physical',power:120,accuracy:100,pp:15,recoil:0.33,effect:'burn',effectChance:10},
    overheat:{name:'过热',type:'Fire',category:'Special',power:130,accuracy:90,pp:5,selfDebuff:'spa',selfDebuffStages:2},
    heat_wave:{name:'热风',type:'Fire',category:'Special',power:95,accuracy:90,pp:10,effect:'burn',effectChance:10},
    surf:{name:'冲浪',type:'Water',category:'Special',power:90,accuracy:100,pp:15},
    hydro_pump:{name:'水炮',type:'Water',category:'Special',power:110,accuracy:80,pp:5},
    waterfall:{name:'攀瀑',type:'Water',category:'Physical',power:80,accuracy:100,pp:15},
    scald:{name:'热水',type:'Water',category:'Special',power:80,accuracy:100,pp:15,effect:'burn',effectChance:30},
    thunderbolt:{name:'十万伏特',type:'Electric',category:'Special',power:90,accuracy:100,pp:15,effect:'paralysis',effectChance:10},
    thunder:{name:'打雷',type:'Electric',category:'Special',power:110,accuracy:70,pp:10,effect:'paralysis',effectChance:30},
    thunder_punch:{name:'雷电拳',type:'Electric',category:'Physical',power:75,accuracy:100,pp:15,effect:'paralysis',effectChance:10},
    volt_switch:{name:'伏特替换',type:'Electric',category:'Special',power:70,accuracy:100,pp:20},
    thunder_wave:{name:'电磁波',type:'Electric',category:'Status',power:0,accuracy:90,pp:20,effect:'paralysis'},
    energy_ball:{name:'能量球',type:'Grass',category:'Special',power:90,accuracy:100,pp:10},
    solar_beam:{name:'日光束',type:'Grass',category:'Special',power:120,accuracy:100,pp:10},
    leaf_blade:{name:'叶刃',type:'Grass',category:'Physical',power:90,accuracy:100,pp:15,critRate:1},
    power_whip:{name:'强力鞭打',type:'Grass',category:'Physical',power:120,accuracy:85,pp:10},
    leech_seed:{name:'寄生种子',type:'Grass',category:'Status',power:0,accuracy:90,pp:10,effect:'leech_seed'},
    sleep_powder:{name:'催眠粉',type:'Grass',category:'Status',power:0,accuracy:75,pp:15,effect:'sleep'},
    ice_beam:{name:'冰冻光束',type:'Ice',category:'Special',power:90,accuracy:100,pp:10,effect:'freeze',effectChance:10},
    blizzard:{name:'暴风雪',type:'Ice',category:'Special',power:110,accuracy:70,pp:5,effect:'freeze',effectChance:10},
    ice_punch:{name:'冰冻拳',type:'Ice',category:'Physical',power:75,accuracy:100,pp:15,effect:'freeze',effectChance:10},
    icicle_spear:{name:'冰锥',type:'Ice',category:'Physical',power:25,accuracy:100,pp:30},
    ice_shard:{name:'冰砾',type:'Ice',category:'Physical',power:40,accuracy:100,pp:30,priority:1},
    close_combat:{name:'近身战',type:'Fighting',category:'Physical',power:120,accuracy:100,pp:5,selfDebuff:'def',selfDebuffStages:1},
    aura_sphere:{name:'波导弹',type:'Fighting',category:'Special',power:80,accuracy:null,pp:20},
    focus_blast:{name:'真气弹',type:'Fighting',category:'Special',power:120,accuracy:70,pp:5},
    superpower:{name:'蛮力',type:'Fighting',category:'Physical',power:120,accuracy:100,pp:5,selfDebuff:'atk',selfDebuffStages:1},
    brick_break:{name:'劈瓦',type:'Fighting',category:'Physical',power:75,accuracy:100,pp:15},
    mach_punch:{name:'音速拳',type:'Fighting',category:'Physical',power:40,accuracy:100,pp:30,priority:1},
    cross_chop:{name:'十字切',type:'Fighting',category:'Physical',power:100,accuracy:80,pp:5,critRate:1},
    sludge_bomb:{name:'污泥炸弹',type:'Poison',category:'Special',power:90,accuracy:100,pp:10,effect:'poison',effectChance:30},
    poison_jab:{name:'毒击',type:'Poison',category:'Physical',power:80,accuracy:100,pp:20,effect:'poison',effectChance:30},
    gunk_shot:{name:'垃圾射击',type:'Poison',category:'Physical',power:120,accuracy:80,pp:5,effect:'poison',effectChance:30},
    toxic:{name:'剧毒',type:'Poison',category:'Status',power:0,accuracy:90,pp:10,effect:'toxic'},
    earthquake:{name:'地震',type:'Ground',category:'Physical',power:100,accuracy:100,pp:10},
    earth_power:{name:'大地之力',type:'Ground',category:'Special',power:90,accuracy:100,pp:10},
    stealth_rock:{name:'隐形岩',type:'Rock',category:'Status',power:0,accuracy:null,pp:20,effect:'stealth_rock'},
    brave_bird:{name:'勇鸟猛攻',type:'Flying',category:'Physical',power:120,accuracy:100,pp:15,recoil:0.33},
    hurricane:{name:'暴风',type:'Flying',category:'Special',power:110,accuracy:70,pp:10},
    aerial_ace:{name:'燕返',type:'Flying',category:'Physical',power:60,accuracy:null,pp:20},
    air_slash:{name:'空气斩',type:'Flying',category:'Special',power:75,accuracy:95,pp:15},
    psychic_m:{name:'精神强念',type:'Psychic',category:'Special',power:90,accuracy:100,pp:10},
    psyshock:{name:'精神冲击',type:'Psychic',category:'Special',power:80,accuracy:100,pp:10,targetDef:true},
    zen_headbutt:{name:'意念头锤',type:'Psychic',category:'Physical',power:80,accuracy:90,pp:15},
    shadow_ball:{name:'暗影球',type:'Ghost',category:'Special',power:80,accuracy:100,pp:15},
    calm_mind:{name:'冥想',type:'Psychic',category:'Status',power:0,accuracy:null,pp:20,selfBuff:'spa',selfBuffStages:1,selfBuff2:'spd',selfBuffStages2:1},
    recover:{name:'自我再生',type:'Normal',category:'Status',power:0,accuracy:null,pp:10,effect:'heal',healPercent:0.5},
    roost:{name:'羽栖',type:'Flying',category:'Status',power:0,accuracy:null,pp:10,effect:'heal',healPercent:0.5},
    slack_off:{name:'偷懒',type:'Normal',category:'Status',power:0,accuracy:null,pp:10,effect:'heal',healPercent:0.5},
    x_scissor:{name:'十字剪',type:'Bug',category:'Physical',power:80,accuracy:100,pp:15},
    u_turn:{name:'急速折返',type:'Bug',category:'Physical',power:70,accuracy:100,pp:20},
    megahorn:{name:'超级角击',type:'Bug',category:'Physical',power:120,accuracy:85,pp:10},
    bug_buzz:{name:'虫鸣',type:'Bug',category:'Special',power:90,accuracy:100,pp:10},
    stone_edge:{name:'尖石攻击',type:'Rock',category:'Physical',power:100,accuracy:80,pp:5,critRate:1},
    rock_slide:{name:'岩崩',type:'Rock',category:'Physical',power:75,accuracy:90,pp:10},
    shadow_claw:{name:'暗影爪',type:'Ghost',category:'Physical',power:70,accuracy:100,pp:15,critRate:1},
    shadow_sneak:{name:'影子偷袭',type:'Ghost',category:'Physical',power:40,accuracy:100,pp:30,priority:1},
    destiny_bond:{name:'同命',type:'Ghost',category:'Status',power:0,accuracy:null,pp:5,effect:'destiny_bond'},
    dragon_claw:{name:'龙爪',type:'Dragon',category:'Physical',power:80,accuracy:100,pp:15},
    dragon_pulse:{name:'龙之波动',type:'Dragon',category:'Special',power:85,accuracy:100,pp:10},
    outrage:{name:'逆鳞',type:'Dragon',category:'Physical',power:120,accuracy:100,pp:10},
    draco_meteor:{name:'流星群',type:'Dragon',category:'Special',power:130,accuracy:90,pp:5,selfDebuff:'spa',selfDebuffStages:2},
    dragon_dance:{name:'龙之舞',type:'Dragon',category:'Status',power:0,accuracy:null,pp:20,selfBuff:'atk',selfBuffStages:1,selfBuff2:'spe',selfBuffStages2:1},
    crunch:{name:'咬碎',type:'Dark',category:'Physical',power:80,accuracy:100,pp:15},
    dark_pulse:{name:'恶之波动',type:'Dark',category:'Special',power:80,accuracy:100,pp:15},
    knock_off:{name:'拍落',type:'Dark',category:'Physical',power:65,accuracy:100,pp:20},
    sucker_punch:{name:'突袭',type:'Dark',category:'Physical',power:70,accuracy:100,pp:5,priority:1},
    pursuit:{name:'追击',type:'Dark',category:'Physical',power:40,accuracy:100,pp:20},
    iron_head:{name:'铁头',type:'Steel',category:'Physical',power:80,accuracy:100,pp:15},
    flash_cannon:{name:'加农光炮',type:'Steel',category:'Special',power:80,accuracy:100,pp:10},
    meteor_mash:{name:'彗星拳',type:'Steel',category:'Physical',power:90,accuracy:90,pp:10},
    bullet_punch:{name:'子弹拳',type:'Steel',category:'Physical',power:40,accuracy:100,pp:30,priority:1},
    iron_tail:{name:'铁尾',type:'Steel',category:'Physical',power:100,accuracy:75,pp:15},
    moonblast:{name:'月亮之力',type:'Fairy',category:'Special',power:95,accuracy:100,pp:15},
    play_rough:{name:'嬉闹',type:'Fairy',category:'Physical',power:90,accuracy:90,pp:10},
    dazzling_gleam:{name:'魔法闪耀',type:'Fairy',category:'Special',power:80,accuracy:100,pp:10},
    swords_dance:{name:'剑舞',type:'Normal',category:'Status',power:0,accuracy:null,pp:20,selfBuff:'atk',selfBuffStages:2},
    nasty_plot:{name:'诡计',type:'Dark',category:'Status',power:0,accuracy:null,pp:20,selfBuff:'spa',selfBuffStages:2},
    will_o_wisp:{name:'鬼火',type:'Fire',category:'Status',power:0,accuracy:85,pp:15,effect:'burn'},
    spikes:{name:'撒菱',type:'Ground',category:'Status',power:0,accuracy:null,pp:20,effect:'spikes'},
    protect:{name:'守住',type:'Normal',category:'Status',power:0,accuracy:null,pp:10,effect:'protect',priority:4},
    substitute:{name:'替身',type:'Normal',category:'Status',power:0,accuracy:null,pp:10,effect:'substitute'},
    rapid_spin:{name:'高速旋转',type:'Normal',category:'Physical',power:50,accuracy:100,pp:40},
    giga_drain:{name:'超级吸取',type:'Grass',category:'Special',power:75,accuracy:100,pp:10},
    wild_charge:{name:'疯狂伏特',type:'Electric',category:'Physical',power:90,accuracy:100,pp:15,recoil:0.25},
    bounce:{name:'弹跳',type:'Flying',category:'Physical',power:85,accuracy:85,pp:5},
    signal_beam:{name:'信号光束',type:'Bug',category:'Special',power:75,accuracy:100,pp:15},
    grass_knot:{name:'打草结',type:'Grass',category:'Special',power:80,accuracy:100,pp:20},
    volt_tackle:{name:'伏特攻击',type:'Electric',category:'Physical',power:120,accuracy:100,pp:15,recoil:0.33},
    aqua_jet:{name:'水流喷射',type:'Water',category:'Physical',power:40,accuracy:100,pp:20,priority:1},
    fake_out:{name:'击掌奇袭',type:'Normal',category:'Physical',power:40,accuracy:100,pp:10,priority:3},
    gyro_ball:{name:'陀螺球',type:'Steel',category:'Physical',power:80,accuracy:100,pp:5},
    rest:{name:'睡觉',type:'Psychic',category:'Status',power:0,accuracy:null,pp:5,effect:'rest'},
    sleep_talk:{name:'梦话',type:'Normal',category:'Status',power:0,accuracy:null,pp:10},
    curse:{name:'诅咒',type:'Ghost',category:'Status',power:0,accuracy:null,pp:10,selfBuff:'atk',selfBuffStages:1,selfBuff2:'def',selfBuffStages2:1},
    pain_split:{name:'分担痛楚',type:'Normal',category:'Status',power:0,accuracy:null,pp:20,effect:'pain_split'},
    defog:{name:'清除浓雾',type:'Flying',category:'Status',power:0,accuracy:null,pp:15},
    agility:{name:'高速移动',type:'Psychic',category:'Status',power:0,accuracy:null,pp:30,selfBuff:'spe',selfBuffStages:2},
    quiver_dance:{name:'蝶之舞',type:'Bug',category:'Status',power:0,accuracy:null,pp:20,selfBuff:'spa',selfBuffStages:1,selfBuff2:'spd',selfBuffStages2:1},
    morning_sun:{name:'晨光',type:'Normal',category:'Status',power:0,accuracy:null,pp:5,effect:'heal',healPercent:0.5},
    low_kick:{name:'踢倒',type:'Fighting',category:'Physical',power:80,accuracy:100,pp:20},
    extrasensory:{name:'神通力',type:'Psychic',category:'Special',power:80,accuracy:100,pp:20},
    hidden_power_ice:{name:'觉醒力量冰',type:'Ice',category:'Special',power:60,accuracy:100,pp:15},
    // 新增Gen1常用技能
    bite:{name:'咬咬',type:'Dark',category:'Physical',power:60,accuracy:100,pp:25},
    thunderbolt:{name:'十万伏特',type:'Electric',category:'Special',power:90,accuracy:100,pp:15,effect:'paralysis',effectChance:10},
    dig:{name:'挖洞',type:'Ground',category:'Physical',power:80,accuracy:100,pp:10},
    headbutt:{name:'头锤',type:'Normal',category:'Physical',power:70,accuracy:100,pp:15},
    psybeam:{name:'幻象光线',type:'Psychic',category:'Special',power:65,accuracy:100,pp:20},
    confusion:{name:'念力',type:'Psychic',category:'Special',power:50,accuracy:100,pp:25},
    ember:{name:'火花',type:'Fire',category:'Special',power:40,accuracy:100,pp:25,effect:'burn',effectChance:10},
    bubble_beam:{name:'泡沫光线',type:'Water',category:'Special',power:65,accuracy:100,pp:20},
    peck:{name:'啄',type:'Flying',category:'Physical',power:35,accuracy:100,pp:35},
    lick:{name:'舌舔',type:'Ghost',category:'Physical',power:30,accuracy:100,pp:30,effect:'paralysis',effectChance:30},
    night_shade:{name:'黑夜魔影',type:'Ghost',category:'Special',power:50,accuracy:100,pp:15},
    mud_slap:{name:'掷泥',type:'Ground',category:'Special',power:20,accuracy:100,pp:10},
    wing_attack:{name:'翅膀攻击',type:'Flying',category:'Physical',power:60,accuracy:100,pp:35},
    slash:{name:'劈开',type:'Normal',category:'Physical',power:70,accuracy:100,pp:20,critRate:1},
    strength:{name:'怪力',type:'Normal',category:'Physical',power:80,accuracy:100,pp:15},
    submission:{name:'地狱翻滚',type:'Fighting',category:'Physical',power:80,accuracy:80,pp:20,recoil:0.25},
    seismic_toss:{name:'地球上投',type:'Fighting',category:'Physical',power:50,accuracy:100,pp:20},
    psywave:{name:'精神波',type:'Psychic',category:'Special',power:50,accuracy:100,pp:15},
    take_down:{name:'猛撞',type:'Normal',category:'Physical',power:90,accuracy:85,pp:20,recoil:0.25},
    thunderbolt:{name:'十万伏特',type:'Electric',category:'Special',power:90,accuracy:100,pp:15,effect:'paralysis',effectChance:10},
    wrap:{name:'缠绕',type:'Normal',category:'Physical',power:15,accuracy:90,pp:20},
    acid_armor:{name:'溶化',type:'Poison',category:'Status',power:0,accuracy:null,pp:20,selfBuff:'def',selfBuffStages:2},
    amnesia:{name:'遗忘',type:'Psychic',category:'Status',power:0,accuracy:null,pp:20,selfBuff:'spd',selfBuffStages:2},
    barrier:{name:'屏障',type:'Psychic',category:'Status',power:0,accuracy:null,pp:20,selfBuff:'def',selfBuffStages:2},
    growth:{name:'生长',type:'Normal',category:'Status',power:0,accuracy:null,pp:20,selfBuff:'spa',selfBuffStages:1},
    meditate:{name:'瑜伽姿势',type:'Psychic',category:'Status',power:0,accuracy:null,pp:20,selfBuff:'atk',selfBuffStages:1},
    minimize:{name:'变小',type:'Normal',category:'Status',power:0,accuracy:null,pp:10,selfBuff:'eva',selfBuffStages:2},
    harden:{name:'变硬',type:'Normal',category:'Status',power:0,accuracy:null,pp:30,selfBuff:'def',selfBuffStages:1},
    string_shot:{name:'吐丝',type:'Bug',category:'Status',power:0,accuracy:95,pp:40},
    poison_sting:{name:'毒针',type:'Poison',category:'Physical',power:15,accuracy:100,pp:35,effect:'poison',effectChance:30},
    twineedle:{name:'双针',type:'Bug',category:'Physical',power:25,accuracy:100,pp:20},
    pin_missile:{name:'飞弹针',type:'Bug',category:'Physical',power:25,accuracy:95,pp:20},
    hyper_fang:{name:'大门牙',type:'Normal',category:'Physical',power:80,accuracy:90,pp:15},
    super_fang:{name:'愤怒门牙',type:'Normal',category:'Physical',power:80,accuracy:90,pp:10},
    tri_attack:{name:'三角攻击',type:'Normal',category:'Special',power:80,accuracy:100,pp:10},
    transform:{name:'变身',type:'Normal',category:'Status',power:0,accuracy:null,pp:10},
    soft_boiled:{name:'生蛋',type:'Normal',category:'Status',power:0,accuracy:null,pp:5,effect:'heal',healPercent:0.5},
    sing:{name:'唱歌',type:'Normal',category:'Status',power:0,accuracy:55,pp:15,effect:'sleep'},
    disable:{name:'封印',type:'Normal',category:'Status',power:0,accuracy:100,pp:20},
    supersonic:{name:'超音波',type:'Normal',category:'Status',power:0,accuracy:55,pp:20,effect:'confusion'},
    hypnosis:{name:'催眠术',type:'Psychic',category:'Status',power:0,accuracy:60,pp:20,effect:'sleep'},
    absorb:{name:'吸取',type:'Grass',category:'Special',power:20,accuracy:100,pp:25},
    mega_drain:{name:'超级吸收',type:'Grass',category:'Special',power:40,accuracy:100,pp:15},
    razor_leaf:{name:'飞叶快刀',type:'Grass',category:'Physical',power:55,accuracy:95,pp:25,critRate:1},
    vine_whip:{name:'藤鞭',type:'Grass',category:'Physical',power:45,accuracy:100,pp:25},
    petal_dance:{name:'花瓣舞',type:'Grass',category:'Special',power:120,accuracy:100,pp:10},
    skull_bash:{name:'火箭头锤',type:'Normal',category:'Physical',power:130,accuracy:100,pp:10},
    bubble:{name:'泡沫',type:'Water',category:'Special',power:40,accuracy:100,pp:30},
    water_gun:{name:'水枪',type:'Water',category:'Special',power:40,accuracy:100,pp:25},
    clamp:{name:'贝壳夹击',type:'Water',category:'Physical',power:35,accuracy:85,pp:15},
    crab_hammer:{name:'蟹钳锤',type:'Water',category:'Physical',power:100,accuracy:90,pp:10,critRate:1},
    spike_cannon:{name:'尖刺加农炮',type:'Normal',category:'Physical',power:20,accuracy:100,pp:15},
    swift:{name:'高速星星',type:'Normal',category:'Special',power:60,accuracy:null,pp:20},
    constrict:{name:'缠绕',type:'Normal',category:'Physical',power:10,accuracy:100,pp:35},
    psybeam:{name:'幻象光线',type:'Psychic',category:'Special',power:65,accuracy:100,pp:20},
    drill_peck:{name:'钻孔啄',type:'Flying',category:'Physical',power:80,accuracy:100,pp:20},
    sky_attack:{name:'神鸟猛击',type:'Flying',category:'Physical',power:140,accuracy:90,pp:5},
    fury_attack:{name:'连续攻击',type:'Normal',category:'Physical',power:15,accuracy:85,pp:20},
    tri_attack:{name:'三角攻击',type:'Normal',category:'Special',power:80,accuracy:100,pp:10},
    rage:{name:'愤怒',type:'Normal',category:'Physical',power:20,accuracy:100,pp:20},
    leer:{name:'瞪眼',type:'Normal',category:'Status',power:0,accuracy:100,pp:30},
    tail_whip:{name:'摇尾巴',type:'Normal',category:'Status',power:0,accuracy:100,pp:30},
    growl:{name:'叫声',type:'Normal',category:'Status',power:0,accuracy:100,pp:40},
    smog:{name:'浊雾',type:'Poison',category:'Special',power:30,accuracy:70,pp:20,effect:'poison',effectChance:40},
    sludge:{name:'污泥攻击',type:'Poison',category:'Special',power:65,accuracy:100,pp:20,effect:'poison',effectChance:30},
    rock_throw:{name:'落石',type:'Rock',category:'Physical',power:50,accuracy:90,pp:15},
    self_destruct:{name:'自爆',type:'Normal',category:'Physical',power:200,accuracy:100,pp:5},
    explosion:{name:'大爆炸',type:'Normal',category:'Physical',power:250,accuracy:100,pp:5},
    bonemerang:{name:'骨头回旋镖',type:'Ground',category:'Physical',power:50,accuracy:90,pp:10},
    bone_club:{name:'骨棒',type:'Ground',category:'Physical',power:65,accuracy:85,pp:20},
    thrash:{name:'大闹一番',type:'Normal',category:'Physical',power:120,accuracy:100,pp:10},
    stomp:{name:'踩踏',type:'Normal',category:'Physical',power:65,accuracy:100,pp:20},
    horn_attack:{name:'角撞',type:'Normal',category:'Physical',power:65,accuracy:100,pp:25},
    fury_swipes:{name:'乱抓',type:'Normal',category:'Physical',power:18,accuracy:80,pp:15},
    body_slam:{name:'泰山压顶',type:'Normal',category:'Physical',power:85,accuracy:100,pp:15,effect:'paralysis',effectChance:30},
    solar_beam:{name:'日光束',type:'Grass',category:'Special',power:120,accuracy:100,pp:10},
    dream_eater:{name:'食梦',type:'Psychic',category:'Special',power:100,accuracy:100,pp:15},
    lovely_kiss:{name:'恶魔之吻',type:'Normal',category:'Status',power:0,accuracy:75,pp:10,effect:'sleep'},
    egg_bomb:{name:'炸蛋',type:'Normal',category:'Physical',power:100,accuracy:75,pp:10},
    dizzypunch:{name:'迷昏拳',type:'Normal',category:'Physical',power:70,accuracy:100,pp:10},
    blizzard:{name:'暴风雪',type:'Ice',category:'Special',power:110,accuracy:70,pp:5,effect:'freeze',effectChance:10},
    razor_wind:{name:'旋风斩',type:'Normal',category:'Special',power:80,accuracy:75,pp:10},
    rock_slide:{name:'岩崩',type:'Rock',category:'Physical',power:75,accuracy:90,pp:10},
    slam:{name:'摔打',type:'Normal',category:'Physical',power:80,accuracy:75,pp:20},
    low_kick:{name:'踢倒',type:'Fighting',category:'Physical',power:80,accuracy:100,pp:20},
    karate_chop:{name:'空手劈',type:'Fighting',category:'Physical',power:50,accuracy:100,pp:25,critRate:1},
    rolling_kick:{name:'回旋踢',type:'Fighting',category:'Physical',power:60,accuracy:85,pp:15},
    jump_kick:{name:'飞踢',type:'Fighting',category:'Physical',power:100,accuracy:95,pp:10,recoil:0.5},
    high_jump_kick:{name:'飞膝踢',type:'Fighting',category:'Physical',power:130,accuracy:90,pp:10,recoil:0.5},
    counter:{name:'双倍奉还',type:'Fighting',category:'Physical',power:50,accuracy:100,pp:20},
    seismic_toss:{name:'地球上投',type:'Fighting',category:'Physical',power:50,accuracy:100,pp:20},
    thunderbolt:{name:'十万伏特',type:'Electric',category:'Special',power:90,accuracy:100,pp:15,effect:'paralysis',effectChance:10},
  };
  return existing[moveName] || {name:moveName,type:'Normal',category:'Physical',power:50,accuracy:100,pp:20};
}

async function main() {
  console.log('Fetching Gen 1 Pokémon data from PokéAPI...');

  const results = [];

  // 批量获取 1-151
  for (let id = 1; id <= 151; id++) {
    try {
      const data = await fetchJSON(`https://pokeapi.co/api/v2/pokemon/${id}`);

      // 提取种族值
      const stats = {};
      for (const s of data.stats) {
        const name = s.stat.name;
        if (name === 'hp') stats.hp = s.base_stat;
        else if (name === 'attack') stats.atk = s.base_stat;
        else if (name === 'defense') stats.def = s.base_stat;
        else if (name === 'special-attack') stats.spa = s.base_stat;
        else if (name === 'special-defense') stats.spd = s.base_stat;
        else if (name === 'speed') stats.spe = s.base_stat;
      }

      // 提取属性
      const types = data.types
        .sort((a, b) => a.slot - b.slot)
        .map(t => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1));

      // 提取技能名 (只保留可用的)
      const moveNames = data.moves
        .map(m => m.move.name.replace(/-/g, '_'))
        .filter(m => generateMoveData(m).power !== undefined);

      // 中文名
      const cnName = CN_NAMES[id] || data.name;

      results.push({
        id,
        key: data.name.replace(/-/g, '_'),
        name: cnName,
        types,
        baseStats: stats,
        moveNames,
        sprite: id
      });

      process.stdout.write(`\r  ${id}/151 - ${cnName}          `);
      if (id % 10 === 0) await delay(200); // 避免rate limit
    } catch (e) {
      console.error(`\nError fetching #${id}: ${e.message}`);
      await delay(1000);
      id--; // 重试
    }
  }

  console.log('\n\nGenerating data.js...');

  // 生成 JavaScript 代码
  let js = '// ============================================================\n';
  js += '// 宝可梦对战 — 数据层 (Gen 1 完整版)\n';
  js += '// ============================================================\n\n';

  // 属性列表
  js += "const TYPES = ['Normal','Fire','Water','Electric','Grass','Ice','Fighting','Poison','Ground','Flying','Psychic','Bug','Rock','Ghost','Dragon','Dark','Steel','Fairy'];\n\n";

  // 属性克制表 (直接复制现有)
  js += fs.readFileSync('js/data.js', 'utf8')
    .match(/const TYPE_CHART = \{[\s\S]*?\n\};/)[0] + '\n\n';

  js += 'function getTypeEffectiveness(moveType, defTypes) {\n';
  js += '  let mult = 1;\n';
  js += '  for (const dt of defTypes) {\n';
  js += '    const chart = TYPE_CHART[moveType];\n';
  js += '    if (chart && chart[dt] !== undefined) mult *= chart[dt];\n';
  js += '  }\n';
  js += '  return mult;\n';
  js += '}\n\n';

  // 收集所有需要的技能
  const allMoves = new Set();
  for (const p of results) {
    const selected = selectMoves(p.types, p.moveNames);
    selected.forEach(m => allMoves.add(m));
  }

  // 生成技能数据库
  js += 'const MOVES = {\n';
  for (const moveName of allMoves) {
    const m = generateMoveData(moveName);
    js += `  ${moveName}: {`;
    js += `name:'${m.name}',type:'${m.type}',category:'${m.category}',power:${m.power},accuracy:${m.accuracy},pp:${m.pp}`;
    if (m.effect) js += `,effect:'${m.effect}'`;
    if (m.effectChance) js += `,effectChance:${m.effectChance}`;
    if (m.priority) js += `,priority:${m.priority}`;
    if (m.recoil) js += `,recoil:${m.recoil}`;
    if (m.critRate) js += `,critRate:${m.critRate}`;
    if (m.selfBuff) js += `,selfBuff:'${m.selfBuff}',selfBuffStages:${m.selfBuffStages}`;
    if (m.selfBuff2) js += `,selfBuff2:'${m.selfBuff2}',selfBuffStages2:${m.selfBuffStages2}`;
    if (m.selfDebuff) js += `,selfDebuff:'${m.selfDebuff}',selfDebuffStages:${m.selfDebuffStages}`;
    if (m.targetDef) js += `,targetDef:true`;
    if (m.healPercent) js += `,healPercent:${m.healPercent}`;
    js += '},\n';
  }
  js += '};\n\n';

  // 生成宝可梦数据库
  js += 'const POKEMON_DATA = {\n';
  for (const p of results) {
    const selected = selectMoves(p.types, p.moveNames);
    js += `  ${p.key}: {\n`;
    js += `    id:${p.id}, name:'${p.name}', types:${JSON.stringify(p.types)},\n`;
    js += `    baseStats:{hp:${p.baseStats.hp},atk:${p.baseStats.atk},def:${p.baseStats.def},spa:${p.baseStats.spa},spd:${p.baseStats.spd},spe:${p.baseStats.spe}},\n`;
    js += `    ability:'-',\n`;
    js += `    moves:${JSON.stringify(selected)},\n`;
    js += `    sprite:${p.sprite}\n`;
    js += `  },\n`;
  }
  js += '};\n\n';

  // 队伍预设
  js += "const AI_TEAM_KEYS = ['garchomp','charizard','gyarados','metagross','zapdos','gengar'];\n\n";

  // 属性颜色
  js += "const TYPE_COLORS = {Normal:'#A8A878',Fire:'#F08030',Water:'#6890F0',Electric:'#F8D030',Grass:'#78C850',Ice:'#98D8D8',Fighting:'#C03028',Poison:'#A040A0',Ground:'#E0C068',Flying:'#A890F0',Psychic:'#F85888',Bug:'#A8B820',Rock:'#B8A038',Ghost:'#705898',Dragon:'#7038F8',Dark:'#705848',Steel:'#B8B8D0',Fairy:'#EE99AC'};\n\n";
  js += "const STATUS_COLOR = '#888';\n";

  fs.writeFileSync('js/data.js', js);
  console.log(`\nDone! Generated data.js with ${results.length} Pokémon and ${allMoves.size} moves.`);
}

main().catch(console.error);
