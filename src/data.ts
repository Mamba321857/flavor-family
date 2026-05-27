/* ═══════════════════════════════════════════
   全国34省风味数据 - 每省3个等级口味
   ═══════════════════════════════════════════ */

export interface ProvinceFlavor {
  id: string;
  name: string;
  color: string;
  normal: { name: string; emoji: string };
  rare: { name: string; emoji: string };
  legendary: { name: string; emoji: string };
  fragments: { normal: boolean; rare: boolean; legendary: boolean };
}

export const PROVINCES: ProvinceFlavor[] = [
  { id: 'bj', name: '北京', color: '#C62828', normal: { name: '北京烤鸭', emoji: '🦆' }, rare: { name: '炸酱面', emoji: '🍜' }, legendary: { name: '京味驴打滚', emoji: '🍡' }, fragments: { normal: true, rare: false, legendary: false } },
  { id: 'tj', name: '天津', color: '#AD1457', normal: { name: '狗不理包子', emoji: '🥟' }, rare: { name: '十八街麻花', emoji: '🥨' }, legendary: { name: '耳朵眼炸糕', emoji: '🍘' }, fragments: { normal: false, rare: false, legendary: false } },
  { id: 'he', name: '河北', color: '#6A1B9A', normal: { name: '驴肉火烧', emoji: '🌮' }, rare: { name: '缸炉烧饼', emoji: '🥯' }, legendary: { name: '香河肉饼', emoji: '🥙' }, fragments: { normal: false, rare: false, legendary: false } },
  { id: 'sx', name: '山西', color: '#4527A0', normal: { name: '刀削面', emoji: '🍜' }, rare: { name: '老陈醋香', emoji: '🫗' }, legendary: { name: '平遥牛肉', emoji: '🥩' }, fragments: { normal: true, rare: false, legendary: false } },
  { id: 'nm', name: '内蒙古', color: '#283593', normal: { name: '烤全羊', emoji: '🍖' }, rare: { name: '手抓肉', emoji: '🍗' }, legendary: { name: '奶皮子', emoji: '🧈' }, fragments: { normal: false, rare: false, legendary: false } },
  { id: 'ln', name: '辽宁', color: '#1565C0', normal: { name: '锅包肉', emoji: '🥓' }, rare: { name: '老边饺子', emoji: '🥟' }, legendary: { name: '沟帮子熏鸡', emoji: '🍗' }, fragments: { normal: false, rare: false, legendary: false } },
  { id: 'jl', name: '吉林', color: '#0277BD', normal: { name: '延边冷面', emoji: '🍜' }, rare: { name: '白肉血肠', emoji: '🌭' }, legendary: { name: '朝鲜打糕', emoji: '🍡' }, fragments: { normal: false, rare: false, legendary: false } },
  { id: 'hlj', name: '黑龙江', color: '#00838F', normal: { name: '东北酸菜', emoji: '🥬' }, rare: { name: '得莫利炖鱼', emoji: '🐟' }, legendary: { name: '哈尔滨红肠', emoji: '🌭' }, fragments: { normal: true, rare: false, legendary: false } },
  { id: 'sh', name: '上海', color: '#E53935', normal: { name: '生煎包', emoji: '🥟' }, rare: { name: '蟹黄面', emoji: '🦀' }, legendary: { name: '本帮红烧肉', emoji: '🥓' }, fragments: { normal: true, rare: true, legendary: true } },
  { id: 'js', name: '江苏', color: '#D81B60', normal: { name: '盐水鸭', emoji: '🦆' }, rare: { name: '蟹黄汤包', emoji: '🦀' }, legendary: { name: '松鼠鳜鱼', emoji: '🐟' }, fragments: { normal: false, rare: false, legendary: false } },
  { id: 'zj', name: '浙江', color: '#8E24AA', normal: { name: '西湖醋鱼', emoji: '🐟' }, rare: { name: '东坡肉', emoji: '🥓' }, legendary: { name: '龙井虾仁', emoji: '🍤' }, fragments: { normal: false, rare: false, legendary: false } },
  { id: 'ah', name: '安徽', color: '#5E35B1', normal: { name: '臭鳜鱼', emoji: '🐟' }, rare: { name: '毛豆腐', emoji: '🧈' }, legendary: { name: '一品锅', emoji: '🍲' }, fragments: { normal: false, rare: false, legendary: false } },
  { id: 'fj', name: '福建', color: '#3949AB', normal: { name: '沙县拌面', emoji: '🍜' }, rare: { name: '佛跳墙', emoji: '🍲' }, legendary: { name: '土笋冻', emoji: '🍮' }, fragments: { normal: true, rare: false, legendary: false } },
  { id: 'jx', name: '江西', color: '#1E88E5', normal: { name: '瓦罐汤', emoji: '🍲' }, rare: { name: '三杯鸡', emoji: '🍗' }, legendary: { name: '南昌拌粉', emoji: '🍜' }, fragments: { normal: false, rare: false, legendary: false } },
  { id: 'sd', name: '山东', color: '#039BE5', normal: { name: '德州扒鸡', emoji: '🍗' }, rare: { name: '九转大肠', emoji: '🥓' }, legendary: { name: '煎饼卷大葱', emoji: '🌯' }, fragments: { normal: true, rare: false, legendary: false } },
  { id: 'ha', name: '河南', color: '#00ACC1', normal: { name: '胡辣汤', emoji: '🍲' }, rare: { name: '河南烩面', emoji: '🍜' }, legendary: { name: '道口烧鸡', emoji: '🍗' }, fragments: { normal: false, rare: false, legendary: false } },
  { id: 'hb', name: '湖北', color: '#00897B', normal: { name: '热干面', emoji: '🍜' }, rare: { name: '鸭脖卤香', emoji: '🍗' }, legendary: { name: '武昌鱼', emoji: '🐟' }, fragments: { normal: true, rare: false, legendary: false } },
  { id: 'hn', name: '湖南', color: '#43A047', normal: { name: '臭豆腐', emoji: '🧈' }, rare: { name: '口味小龙虾', emoji: '🦞' }, legendary: { name: '剁椒鱼头', emoji: '🐟' }, fragments: { normal: true, rare: true, legendary: false } },
  { id: 'gd', name: '广东', color: '#7CB342', normal: { name: '广式烧腊', emoji: '🍖' }, rare: { name: '潮汕牛肉丸', emoji: '🧆' }, legendary: { name: '白切鸡', emoji: '🍗' }, fragments: { normal: true, rare: true, legendary: true } },
  { id: 'gx', name: '广西', color: '#C0CA33', normal: { name: '螺蛳粉', emoji: '🍜' }, rare: { name: '桂林米粉', emoji: '🍜' }, legendary: { name: '柠檬鸭', emoji: '🦆' }, fragments: { normal: false, rare: false, legendary: false } },
  { id: 'hi', name: '海南', color: '#FDD835', normal: { name: '文昌鸡', emoji: '🍗' }, rare: { name: '椰子饭', emoji: '🥥' }, legendary: { name: '和乐蟹', emoji: '🦀' }, fragments: { normal: false, rare: false, legendary: false } },
  { id: 'cq', name: '重庆', color: '#FFB300', normal: { name: '重庆火锅', emoji: '🍲' }, rare: { name: '重庆小面', emoji: '🍜' }, legendary: { name: '毛血旺', emoji: '🥘' }, fragments: { normal: true, rare: true, legendary: false } },
  { id: 'sc', name: '四川', color: '#FB8C00', normal: { name: '麻辣火锅', emoji: '🌶️' }, rare: { name: '回锅肉', emoji: '🥓' }, legendary: { name: '开水白菜', emoji: '🥬' }, fragments: { normal: true, rare: true, legendary: true } },
  { id: 'gz', name: '贵州', color: '#F4511E', normal: { name: '酸汤鱼', emoji: '🐟' }, rare: { name: '肠旺面', emoji: '🍜' }, legendary: { name: '丝娃娃', emoji: '🌯' }, fragments: { normal: true, rare: false, legendary: false } },
  { id: 'yn', name: '云南', color: '#6D4C41', normal: { name: '过桥米线', emoji: '🍜' }, rare: { name: '汽锅鸡', emoji: '🍗' }, legendary: { name: '鲜花饼', emoji: '🌸' }, fragments: { normal: true, rare: true, legendary: false } },
  { id: 'xz', name: '西藏', color: '#546E7A', normal: { name: '酥油茶', emoji: '🫖' }, rare: { name: '糌粑', emoji: '🥮' }, legendary: { name: '藏香猪', emoji: '🐖' }, fragments: { normal: false, rare: false, legendary: false } },
  { id: 'sn', name: '陕西', color: '#78909C', normal: { name: '肉夹馍', emoji: '🥙' }, rare: { name: '羊肉泡馍', emoji: '🍲' }, legendary: { name: '葫芦鸡', emoji: '🍗' }, fragments: { normal: true, rare: false, legendary: false } },
  { id: 'gs', name: '甘肃', color: '#8D6E63', normal: { name: '兰州拉面', emoji: '🍜' }, rare: { name: '手抓羊肉', emoji: '🍖' }, legendary: { name: '酿皮子', emoji: '🍜' }, fragments: { normal: false, rare: false, legendary: false } },
  { id: 'qh', name: '青海', color: '#EC407A', normal: { name: '青海酸奶', emoji: '🥛' }, rare: { name: '手抓牦牛肉', emoji: '🥩' }, legendary: { name: '甜醅', emoji: '🍯' }, fragments: { normal: false, rare: false, legendary: false } },
  { id: 'nx', name: '宁夏', color: '#AB47BC', normal: { name: '羊杂碎', emoji: '🍲' }, rare: { name: '手抓羊肉', emoji: '🍖' }, legendary: { name: '黄河鲤鱼', emoji: '🐟' }, fragments: { normal: false, rare: false, legendary: false } },
  { id: 'xj', name: '新疆', color: '#26A69A', normal: { name: '大盘鸡', emoji: '🍗' }, rare: { name: '烤羊肉串', emoji: '🍢' }, legendary: { name: '馕包肉', emoji: '🥘' }, fragments: { normal: true, rare: true, legendary: true } },
  { id: 'hk', name: '香港', color: '#EF5350', normal: { name: '港式奶茶', emoji: '🧋' }, rare: { name: '鸡蛋仔', emoji: '🧇' }, legendary: { name: '避风塘炒蟹', emoji: '🦀' }, fragments: { normal: true, rare: false, legendary: false } },
  { id: 'mo', name: '澳门', color: '#EC407A', normal: { name: '葡式蛋挞', emoji: '🥧' }, rare: { name: '猪扒包', emoji: '🥪' }, legendary: { name: '水蟹粥', emoji: '🦀' }, fragments: { normal: false, rare: false, legendary: false } },
  { id: 'tw', name: '台湾', color: '#AB47BC', normal: { name: '盐酥鸡', emoji: '🍗' }, rare: { name: '蚵仔煎', emoji: '🍳' }, legendary: { name: '三杯鸡', emoji: '🍗' }, fragments: { normal: true, rare: true, legendary: false } },
];

/* ═══════════════════════════════════════════
   口味原料库 - 大幅扩充
   ═══════════════════════════════════════════ */

export interface Ingredient {
  id: string;
  name: string;
  emoji: string;
  color: string;
  category: string;
}

export const INGREDIENTS: Ingredient[] = [
  // 蔬果类
  { id: 'tomato', name: '番茄', emoji: '🍅', color: '#E53935', category: '蔬果' },
  { id: 'cucumber', name: '黄瓜', emoji: '🥒', color: '#4CAF50', category: '蔬果' },
  { id: 'lemon', name: '柠檬', emoji: '🍋', color: '#FDD835', category: '蔬果' },
  { id: 'onion', name: '洋葱', emoji: '🧅', color: '#FF8A65', category: '蔬果' },
  { id: 'mushroom', name: '香菇', emoji: '🍄', color: '#8D6E63', category: '蔬果' },
  { id: 'corn', name: '玉米', emoji: '🌽', color: '#FFB300', category: '蔬果' },
  { id: 'seaweed', name: '海苔', emoji: '🌿', color: '#2E7D32', category: '蔬果' },
  { id: 'pickle', name: '泡菜', emoji: '🥬', color: '#7CB342', category: '蔬果' },
  { id: 'pineapple', name: '菠萝', emoji: '🍍', color: '#F9A825', category: '蔬果' },
  { id: 'peach', name: '水蜜桃', emoji: '🍑', color: '#F48FB1', category: '蔬果' },
  { id: 'osmanthus', name: '桂花', emoji: '🌼', color: '#F9A825', category: '蔬果' },
  { id: 'mint', name: '薄荷', emoji: '🍃', color: '#66BB6A', category: '蔬果' },
  { id: 'tangerine', name: '陈皮', emoji: '🍊', color: '#FF9800', category: '蔬果' },
  { id: 'coconut', name: '椰子', emoji: '🥥', color: '#795548', category: '蔬果' },
  { id: 'sichuan_pepper', name: '花椒', emoji: '🔴', color: '#C62828', category: '蔬果' },
  // 海鲜类
  { id: 'shrimp', name: '鲜虾', emoji: '🦐', color: '#FF5722', category: '海鲜' },
  { id: 'crab', name: '蟹黄', emoji: '🦀', color: '#FF6F00', category: '海鲜' },
  { id: 'squid', name: '鱿鱼', emoji: '🦑', color: '#E91E63', category: '海鲜' },
  { id: 'fish', name: '鱼肉', emoji: '🐟', color: '#0277BD', category: '海鲜' },
  { id: 'oyster', name: '生蚝', emoji: '🦪', color: '#78909C', category: '海鲜' },
  // 蛋奶类
  { id: 'salted_egg', name: '咸蛋黄', emoji: '🥚', color: '#FF9800', category: '蛋奶' },
  { id: 'cheese', name: '芝士', emoji: '🧀', color: '#F9A825', category: '蛋奶' },
  { id: 'milk', name: '炼乳', emoji: '🥛', color: '#FFF9C4', category: '蛋奶' },
  { id: 'butter', name: '黄油', emoji: '🧈', color: '#FFE082', category: '蛋奶' },
  // 香料类
  { id: 'black_pepper', name: '黑椒', emoji: '⚫', color: '#3E2723', category: '香料' },
  { id: 'garlic', name: '蒜蓉', emoji: '🧄', color: '#FFFDE7', category: '香料' },
  { id: 'wasabi', name: '芥末', emoji: '🟢', color: '#66BB6A', category: '香料' },
  { id: 'chili', name: '朝天椒', emoji: '🌶️', color: '#D32F2F', category: '香料' },
  { id: 'truffle', name: '黑松露', emoji: '◆', color: '#212121', category: '香料' },
  { id: 'cumin', name: '孜然', emoji: '⭐', color: '#FF8F00', category: '香料' },
  { id: 'star_anise', name: '八角', emoji: '✴️', color: '#BF360C', category: '香料' },
  { id: 'coriander', name: '香菜', emoji: '🌿', color: '#43A047', category: '香料' },
  { id: 'ginger', name: '生姜', emoji: '🫚', color: '#F9A825', category: '香料' },
  { id: 'perilla', name: '紫苏', emoji: '🟣', color: '#7B1FA2', category: '香料' },
  { id: 'chili_oil', name: '辣椒油', emoji: '🌶️', color: '#B71C1C', category: '香料' },
  { id: 'five_spice', name: '十三香', emoji: '🎆', color: '#E65100', category: '香料' },
  // 调味类
  { id: 'honey', name: '蜂蜜', emoji: '🍯', color: '#FF8F00', category: '调味' },
  { id: 'plum', name: '话梅', emoji: '🫐', color: '#7B1FA2', category: '调味' },
  { id: 'soy_sauce', name: '酱油', emoji: '🟤', color: '#5D4037', category: '调味' },
  { id: 'vinegar', name: '香醋', emoji: '🍶', color: '#795548', category: '调味' },
  { id: 'miso', name: '味噌', emoji: '🍲', color: '#D7CCC8', category: '调味' },
  { id: 'caramel', name: '焦糖', emoji: '🟫', color: '#8D6E63', category: '调味' },
  { id: 'bbq', name: '烧烤酱', emoji: '🔥', color: '#BF360C', category: '调味' },
  { id: 'curry', name: '咖喱', emoji: '🍛', color: '#FF8F00', category: '调味' },
  { id: 'chocolate', name: '巧克力', emoji: '🍫', color: '#4E342E', category: '调味' },
  { id: 'matcha', name: '抹茶', emoji: '🍵', color: '#388E3C', category: '调味' },
  // 中式特色
  { id: 'rice_wine', name: '酒酿', emoji: '🍶', color: '#FFECB3', category: '特色' },
  { id: 'sesame_paste', name: '芝麻酱', emoji: '🥜', color: '#8D6E63', category: '特色' },
  { id: 'fermented_tofu', name: '腐乳', emoji: '🟥', color: '#C62828', category: '特色' },
  { id: 'sesame', name: '芝麻', emoji: '⚪', color: '#BCAAA4', category: '特色' },
  { id: 'peanut', name: '花生', emoji: '🥜', color: '#8D6E63', category: '特色' },
  { id: 'bamboo_salt', name: '竹盐', emoji: '🎋', color: '#A5D6A7', category: '特色' },
  { id: 'sweet_bean', name: '豆瓣酱', emoji: '🟤', color: '#5D4037', category: '特色' },
  { id: 'satay', name: '沙茶酱', emoji: '🥘', color: '#D84315', category: '特色' },
  { id: 'braise', name: '卤汁', emoji: '🍖', color: '#4E342E', category: '特色' },
  { id: 'brown_sugar', name: '红糖', emoji: '🟫', color: '#6D4C41', category: '特色' },
  { id: 'pickled_chili', name: '糟辣椒', emoji: '🌶️', color: '#E53935', category: '特色' },
  { id: 'sour_beans', name: '酸豆角', emoji: '🫘', color: '#7CB342', category: '特色' },
  { id: 'oil_chili', name: '油泼辣子', emoji: '🟥', color: '#B71C1C', category: '特色' },
  { id: 'coconut_milk', name: '椰奶', emoji: '🥥', color: '#FFF8E1', category: '特色' },
  { id: 'jasmine', name: '茉莉花', emoji: '🌸', color: '#F8BBD0', category: '特色' },
  { id: 'passion', name: '百香果', emoji: '🟡', color: '#FFB300', category: '特色' },
  { id: 'glutinous', name: '糯米', emoji: '🍚', color: '#EEEEEE', category: '特色' },
  { id: 'rose', name: '玫瑰', emoji: '🌹', color: '#E91E63', category: '特色' },
  { id: 'mala', name: '麻辣', emoji: '🔥', color: '#D32F2F', category: '特色' },
  { id: 'yuzu', name: '柚子', emoji: '🟡', color: '#FFEB3B', category: '特色' },
];

export const INGREDIENT_CATEGORIES = ['蔬果', '海鲜', '蛋奶', '香料', '调味', '特色'];

/* ═══════════════════════════════════════════
   口味生成名称映射
   ═══════════════════════════════════════════ */

export const FLAVOR_NAMES: Record<string, string[]> = {
  tomato: ['番茄罗勒', '酸甜番茄', '意式番茄'], cucumber: ['清爽黄瓜', '青瓜薄荷'], lemon: ['青柠海盐', '柠檬蜂蜜'],
  onion: ['葱香四溢', '烤洋葱甜'], mushroom: ['野菌鲜香', '松茸风味'], corn: ['奶油玉米', '香甜玉米'],
  seaweed: ['海苔脆香', '紫菜海味'], pickle: ['酸辣泡菜', '韩式泡菜'], pineapple: ['菠萝酸甜', '热带风情'],
  peach: ['蜜桃清甜', '白桃乌龙'], osmanthus: ['桂花酒酿', '金秋桂花', '桂花乌龙'],
  mint: ['薄荷清凉', '冰爽薄荷', '绿箭薄荷'], tangerine: ['陈皮普洱', '老陈皮香', '陈皮回甘'],
  coconut: ['椰香飘飘', '椰子脆脆', '椰奶香浓'], sichuan_pepper: ['花椒麻香', '川味花椒', '麻椒风暴'],
  shrimp: ['鲜虾龙虾', '海味鲜虾'], crab: ['蟹黄咸鲜', '蟹味浓郁'],
  squid: ['鱿鱼烤香', '炭烧鱿鱼'], fish: ['鱼香滋味', '烤鱼风味'], oyster: ['生蚝蒜蓉', '蚝味鲜甜'],
  salted_egg: ['咸蛋黄流沙', '金沙咸蛋'], cheese: ['芝士焗烤', '浓郁奶酪'], milk: ['炼乳香甜', '奶香浓郁'],
  butter: ['黄油蒜香', '奶油烟熏'], black_pepper: ['黑椒牛排', '胡椒风暴'], garlic: ['蒜香黄油', '蒜蓉烤香'],
  wasabi: ['芥末呛口', '山葵冲击'], chili: ['朝天椒爆', '魔鬼辣椒'], truffle: ['黑松露奢华', '松露野菌'],
  cumin: ['孜然烧烤', '西域孜然'], star_anise: ['八角卤香', '五香风味'], coriander: ['香菜清爽', '芫荽鲜香'],
  ginger: ['姜汁辛辣', '姜糖风味'], perilla: ['紫苏清香', '紫苏紫苏', '苏子叶香'],
  chili_oil: ['油泼辣子', '红油香辣', '辣油飘香'], five_spice: ['十三香卤', '五香风味', '复合香辛'],
  honey: ['蜂蜜黄油', '蜜糖焦糖'], plum: ['话梅酸甜', '梅子清口'],
  soy_sauce: ['酱油咸鲜', '酱烧风味'], vinegar: ['醋酸开胃', '老醋醇香'], miso: ['味噌豆香', '日式味噌'],
  caramel: ['焦糖玛奇朵', '太妃焦糖'], bbq: ['美式烧烤', '烟熏烧烤'], curry: ['日式咖喱', '泰式咖喱'],
  chocolate: ['巧克力熔岩', '可可浓郁'], matcha: ['宇治抹茶', '抹茶拿铁'],
  rice_wine: ['桂花酒酿', '甜酒酿香', '米酒清甜'], sesame_paste: ['芝麻酱香', '麻酱浓郁', '热干面香'],
  fermented_tofu: ['腐乳咸鲜', '南乳风味', '豆腐乳香'], sesame: ['芝麻香浓', '白芝麻脆', '芝麻酥香'],
  peanut: ['花生酥脆', '花生酱香', '五香花生'], bamboo_salt: ['竹盐清新', '盐焗竹香', '竹叶盐味'],
  sweet_bean: ['豆瓣酱香', '川味豆瓣', '红油豆瓣'], satay: ['沙茶酱香', '闽南沙茶', '沙茶风味'],
  braise: ['卤水醇香', '卤味浓郁', '卤汁回甘'], brown_sugar: ['黑糖珍珠', '红糖糍粑', '焦糖红糖'],
  pickled_chili: ['糟辣椒酸', '酸辣开胃', '泡椒风味'], sour_beans: ['酸豆角脆', '酸豇豆香', '老坛酸菜'],
  oil_chili: ['油泼辣子', '关中辣油', '秦椒香辣'], coconut_milk: ['椰奶清甜', '椰浆浓郁', '椰香满满'],
  jasmine: ['茉莉清香', '茉莉花韵', '龙团茉莉'], passion: ['百香果酸', '热带百香', '西番莲香'],
  glutinous: ['糯米软糯', '糍粑香甜', '年糕软糯'], rose: ['玫瑰花香', '重瓣玫瑰', '滇红玫瑰'],
  mala: ['麻辣过瘾', '川式麻辣', '重庆麻辣'], yuzu: ['柚子清香', '蜜柚清甜', '文旦柚香'],
};

export const DEFAULT_FLAVORS = ['原味经典', '海盐薄脆', '自然醇香', '麦香原切', '酥脆原味'];

/* ═══════════════════════════════════════════
   投票数据
   ═══════════════════════════════════════════ */

export const FLAVOR_VOTES = [
  { name: '桂花酒酿脆', votes: 2847, creator: '江南小甜心', emoji: '🌸', ingredients: ['桂花', '酒酿', '糯米'], color: '#F9A825' },
  { name: '麻辣火锅风暴', votes: 2156, creator: '辣妹子在成都', emoji: '🌶️', ingredients: ['朝天椒', '花椒', '辣椒油'], color: '#E53935' },
  { name: '芝麻酱浓香', votes: 1983, creator: '过早达人', emoji: '🥜', ingredients: ['芝麻酱', '芝麻', '花生'], color: '#8D6E63' },
  { name: '茉莉清茶', votes: 1754, creator: '饮咗茶未', emoji: '🍵', ingredients: ['茉莉花', '抹茶', '薄荷'], color: '#66BB6A' },
  { name: '折耳根清爽', votes: 1432, creator: '云贵高原人', emoji: '🌿', ingredients: ['折耳根', '青柠', '薄荷'], color: '#43A047' },
  { name: '榴莲忘返', votes: 1201, creator: '榴莲控本控', emoji: '👃', ingredients: ['榴莲', '芝士', '焦糖'], color: '#E91E63' },
];

/* ═══════════════════════════════════════════
   会员等级
   ═══════════════════════════════════════════ */

export interface MemberLevel {
  name: string;
  emoji: string;
  minPoints: number;
  discount: string;
  color: string;
}

export const MEMBER_LEVELS: MemberLevel[] = [
  { name: '薯苗', emoji: '🌱', minPoints: 0, discount: '9.5折', color: '#8BC34A' },
  { name: '薯藤', emoji: '🌿', minPoints: 500, discount: '9折', color: '#4CAF50' },
  { name: '薯花', emoji: '🌸', minPoints: 1500, discount: '8.5折', color: '#E53935' },
  { name: '薯王', emoji: '👑', minPoints: 3000, discount: '8折', color: '#FF9800' },
];

/* ═══════════════════════════════════════════
   勋章数据
   ═══════════════════════════════════════════ */

export const BADGES = [
  { name: '风味预言家', desc: '弹幕词汇上榜', emoji: '🔮', color: '#0055FF', earned: true },
  { name: '荣誉制薯师', desc: '参观工厂获得', emoji: '🏭', color: '#E53935', earned: true },
  { name: '薯田守望者', desc: '产地溯源游', emoji: '👨‍🌾', color: '#FF9800', earned: false },
  { name: '集卡达人', desc: '点亮5个省份', emoji: '🗺️', color: '#4CAF50', earned: true },
  { name: '投票先锋', desc: '参与10次投票', emoji: '🗳️', color: '#9C27B0', earned: true },
  { name: '创意大师', desc: '口味被采纳', emoji: '🎨', color: '#E91E63', earned: false },
];
