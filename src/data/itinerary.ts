export interface Activity {
  time: string;
  title: string;
  type: 'attraction' | 'food' | 'hotel' | 'activity' | 'transport' | 'shopping' | 'other';
  mapCode?: string;
  notes?: string;
  details?: string;
  teachingLink?: string; // 蔡老師專屬教學連結
}

export interface VegetarianTip {
  title: string;
  content: string;
  safetyRating?: number; // 1-5 顆星
}

export interface DailyItinerary {
  day: number;
  dayOfWeek: string;
  theme: string;
  flow: Activity[];
  vegTips: VegetarianTip[];
  educationalNotes?: string[];
}

export interface MapCodeEntry {
  name: string;
  code: string;
  note?: string;
  category: '景點' | '餐飲/素食' | '體驗/溫泉' | '購物/超市' | '住宿' | '交通' | '觀星';
}

export const mapCodeList: MapCodeEntry[] = [
  { name: '17END (幻之沙灘)', code: '727 702 329*60', note: '下地島跑道盡頭絕景', category: '景點' },
  { name: '渡口の浜 (細白沙灘)', code: '727 611 405*25', note: '伊良部島極細沙灘，順路走走', category: '景點' },
  { name: 'Blue Turtle (渡口之濱旁)', code: '721 187 815*17', note: '海景下午茶，提供新鮮芒果飲品與沙拉', category: '餐飲/素食' },
  { name: "RESORT RESTAURANT SHISA'S CAFE & BBQ", code: '310 514 333*17', note: '砂山海灘附近，提供四種起司披薩、蔬菜沙拉', category: '餐飲/素食' },
  { name: '砂山海灘 (天然石洞)', code: '310 512 437*33', note: '北部著名天然拱門岩石', category: '景點' },
  { name: 'Fukugi Store (福木咖啡商店)', code: '310 455 056*30', note: '備用素食咖啡，有米粉麵包與椰子咖哩', category: '餐飲/素食' },
  { name: '大和食堂 (傳統家庭店)', code: '310 455 399*32', note: '備用素食餐廳，苦瓜炒豆腐、炒蔬菜等可客製', category: '餐飲/素食' },
  { name: '宮古島海中公園', code: '310 723 821*28', note: '玻璃窗觀察海底生態', category: '景點' },
  { name: '雪鹽工廠', code: '310 724 167*00', note: '參觀雪鹽製作與吃雪鹽霜淇淋', category: '景點' },
  { name: '池間大橋', code: '310 751 721*11', note: '眺望清澈的池間藍海面', category: '景點' },
  { name: 'Gelato Cafe Ninufa (披薩冰淇淋)', code: '310 780 236*55', note: '池間島旁，週三休，提供蛋奶素披薩', category: '餐飲/素食' },
  { name: 'Island Brewing Miyakojima', code: '310 453 381*22', note: '市區精釀啤酒與素食沙拉/墨西哥餅，週三休', category: '餐飲/素食' },
  { name: 'Nishigaki 超市 (西里店)', code: '310 453 381*22', note: '採買雪鹽及自炊備品', category: '購物/超市' },
  { name: 'Minaaiya (豆腐飯糰)', code: '310 452 743*11', note: '市區順路豆腐飯糰，週六休 (週三有開)', category: '餐飲/素食' },
  { name: '與那霸前濱沙灘 (與那覇前浜ビーチ)', code: '310 210 500*25', note: '東洋第一白沙灘，適合吃飯糰踏浪', category: '景點' },
  { name: 'くらしや (來間島蔬食)', code: 'klashi__ya', note: '來間島無麩質、維根手作甜點與簡餐，週二三營業', category: '餐飲/素食' },
  { name: '龍宮城展望台', code: '310 250 156*33', note: '來間島地標，眺望 Maehama 沙灘與來間大橋', category: '景點' },
  { name: 'Kiari kurimajima (刨冰)', code: 'kiari_ice', note: '來間島最好吃的刨冰甜點店', category: '餐飲/素食' },
  { name: 'Nagamahama beach (來間島西側)', code: '310 250 120*11', note: '適合散步與安靜欣賞海景', category: '景點' },
  { name: 'PaniPani (來間島咖啡)', code: '310 250 156*33', note: '人氣露天沙地咖啡店，主攻椰奶與果汁', category: '餐飲/素食' },
  { name: 'Hotel Miyakojima', code: '310 452 743*11', note: '公寓型住宿，附帶廚房可自炊', category: '住宿' },
  { name: "DOUG'S BURGER", code: '310 452 465*00', note: '提供大香菇植物肉堡，去洋蔥', category: '餐飲/素食' },
  { name: "Doug’s Coffee (淺焙咖啡)", code: '310 452 435*88', note: '市區極佳淺焙手沖咖啡', category: '餐飲/素食' },
  { name: 'coffee shop Majya (手沖咖啡)', code: '310 453 252*44', note: '職人現沖手沖黑咖啡', category: '餐飲/素食' },
  { name: 'Guest House & CAFE NaNa', code: '0980-78-5717', note: '伊良部島，提供維根及無麩質手作甜點', category: '餐飲/素食' },
  { name: 'Blue Seal 冰淇淋 (久貝店)', code: '310 452 355*00', note: '經典沖繩連鎖冰淇淋', category: '餐飲/素食' },
  { name: '東平安名岬 (觀星/日出)', code: '310 215 529*66', note: '最東端海岬，觀星與日出首選', category: '觀星' },
  { name: '比嘉道路公園 (觀星/海景)', code: '310 406 609*55', note: '東岸高地，設有停車場與洗手間的觀星點', category: '觀星' },
  { name: '白鳥岬西海岸公園 (觀星/海景)', code: '721 394 079*4', note: '北端觀星點，星空無限延展至海平面', category: '觀星' },
  { name: 'Aragusuku Beach 新城海岸 (看海龜)', code: '310 326 777*00', note: '熱門海龜浮潛海灘，水淺珊瑚多', category: '景點' },
  { name: 'Shigira Beach (海龜浮潛點)', code: '310 160 300*11', note: 'Shigira 度假村浮潛點', category: '景點' },
  { name: 'Yusarabi (午餐外帶)', code: '0980-79-7907', note: '近友利，外帶冷素番茄麵與沙拉', category: '餐飲/素食' },
  { name: 'Ingya Marine Garden (浮潛/夜驚奇)', code: '310 318 644*00', note: '天然內灣生態池，極佳浮潛點', category: '景點' },
  { name: 'シギラ (Shigira) 黃金溫泉', code: '310 160 523*00', note: '天然溫泉與全家戲水溫水池', category: '體驗/溫泉' },
  { name: 'natural protein (素食簡餐)', code: '310 453 194*44', note: '提供素食菜單、奶昔與餐點，週三休 (10-18時)', category: '餐飲/素食' },
  { name: 'Hi Sun CAFE (素食友善簡餐)', code: '310 453 381*22', note: '溫馨舒適的素食簡餐店', category: '餐飲/素食' },
  { name: 'Cafe 373 & Spices (咖哩)', code: '310 454 112*00', note: '美味斯里蘭卡風味素食咖哩，週三休', category: '餐飲/素食' },
  { name: 'MAXVALU Miyako Minami (超市)', code: '310 321 097*55', note: '可採買龜甲萬豆乳、島豆腐、ゆし豆腐', category: '購物/超市' },
  { name: '宮古島公設市場', code: '310 453 194*44', note: '採購伴手禮黑糖與農特產', category: '購物/超市' },
  { name: '唐吉訶德 宮古島店', code: '310 453 381*22', note: '綜合特賣商場', category: '購物/超市' }
];

export const itineraryData: DailyItinerary[] = [
  {
    day: 1,
    dayOfWeek: '週一',
    theme: '下地島 17END 搶時動線、細粉沙灘下午茶與海蝕洞日落',
    flow: [
      {
        time: '14:00',
        title: '下地島機場取車',
        type: 'transport',
        notes: '自駕行程開始，注意日本右駕操作'
      },
      {
        time: '14:20',
        title: '17END 幻之沙灘',
        type: 'attraction',
        mapCode: '727 702 329*60',
        notes: '捕捉「幻之沙灘」最美片刻',
        details: '跑道盡頭的碧海與白沙，退潮時極為震撼，是第一站最棒的視覺享受。'
      },
      {
        time: '15:15',
        title: '渡口の浜 (細白沙灘) & 下午茶：Blue Turtle',
        type: 'food',
        mapCode: '721 187 815*17',
        notes: '漫步極細如粉末的白沙灘，並在旁邊的 Blue Turtle 享用下午茶',
        details: '渡口の浜沙質極細，海水清澈見底。旁邊的 Blue Turtle 海景極美，可在此品嚐新鮮芒果飲品、新鮮沙拉與甜點，享受南國悠閒時光。'
      },
      {
        time: '17:00',
        title: 'Hotel California Miyakojima Resort 辦理登記並入住 ecot Sunayama Beach',
        type: 'hotel',
        notes: '入住 ecot 靠近砂山海灘的公寓型住宅'
      },
      {
        time: '18:30',
        title: '砂山海灘日落',
        type: 'attraction',
        mapCode: '310 512 437*33',
        notes: '欣賞天然石洞夕陽',
        details: '穿過白色沙丘後映入眼簾的是天然海蝕石洞，配上落日餘暉，是宮古島最經典的明信片級畫面。'
      },
      {
        time: '19:30',
        title: "晚餐：RESORT RESTAURANT SHISA'S CAFE & BBQ",
        type: 'food',
        mapCode: '310 514 333*17',
        notes: '享用四種起司披薩及純蔬菜沙拉，營業至深夜',
        details: '新加入晚餐！此餐廳距離 ecot 公寓極近，營業時間到很晚。提供精緻的四種起司披薩與純蔬菜沙拉（可客製去五辛），是自駕放鬆用餐的絕佳場所。電話：0980-79-9880。'
      }
    ],
    vegTips: [
      {
        title: '重要採買：Nishigaki 超市 (西里店)',
        content: '前往飯店前，順路至 Nishigaki 超市買一小包宮古島雪鹽隨身攜帶。後續若有餐廳無法提供「無五辛」醬汁，可以點水煮蔬菜直接撒雪鹽調味。',
        safetyRating: 5
      },
      {
        title: "晚餐首選：SHISA'S CAFE & BBQ",
        content: "第一天晚餐改吃離民宿極近且營業至深夜的 SHISA'S CAFE，可點起司披薩與沙拉。而原先的 Island Brewing 則安排到 Day 3，距離後續民宿也極近。",
        safetyRating: 4
      },
      {
        title: '第一天備用素食點：Fukugi Store (福木商店)',
        content: '福木商店 (MapCode: 310 455 056*30) 雖離第一天民宿 ecot 很近，但其營業時間限制較難直接排入正餐行程，在此列為備用素食咖啡廳（提供椰子咖哩、塔可飯與米粉麵包）。',
        safetyRating: 4
      }
    ]
  },
  {
    day: 2,
    dayOfWeek: '週二',
    theme: '北部精華與池間藍巡禮、希爾頓假期',
    flow: [
      {
        time: '09:00',
        title: '砂山海灘戲水',
        type: 'attraction',
        mapCode: '310 512 437*33',
        notes: '砂山海灘晨間玩水',
        details: '欣賞著名的拱門狀天然海蝕岩，踩踩清涼的海水。'
      },
      {
        time: '10:30',
        title: '宮古島海中公園',
        type: 'attraction',
        mapCode: '310 723 821*28',
        notes: '隔著玻璃觀察海底野生熱帶魚生態',
        details: '免下水即可直觀海底 3-5 米深的野生熱帶魚與海中生物，非常適合教學。',
        teachingLink: '提供真實海底生態切片，是孩子認識野生海洋生物與珊瑚礁底棲生態的絕佳自然教材。'
      },
      {
        time: '11:30',
        title: '雪鹽工廠',
        type: 'attraction',
        mapCode: '310 724 167*00',
        notes: '參觀製鹽過程，享用雪鹽霜淇淋',
        details: '可以採購在地名產雪鹽及相關產品。'
      },
      {
        time: '12:30',
        title: '池間大橋',
        type: 'attraction',
        mapCode: '310 751 721*11',
        notes: '欣賞Tiffany「池間藍」海面',
        details: '連接宮古島本島與池間島，橋下海水分層漸變，清澈美麗。'
      },
      {
        time: '13:00',
        title: '午餐：Gelato Cafe Ninufa',
        type: 'food',
        mapCode: '310 780 236*55',
        notes: '享用手工蛋奶素披薩與精緻義式冰淇淋',
        details: '週三公休（今日週二有開！）。就位於池間島旁，動線完美順路，提供適合素食者的美味披薩與冰淇淋。'
      },
      {
        time: '14:15',
        title: '下午茶咖啡：Doug’s Coffee',
        type: 'food',
        mapCode: '310 452 435*88',
        notes: '調整時間！品嚐果香濃郁的淺焙手沖咖啡，確保在下午三點前享用',
        details: '開車至市區約 10 分鐘，享受職人現沖的高品質咖啡。將咖啡時間提早至 15:00 前，避免晚喝咖啡影響睡眠。'
      },
      {
        time: '15:00',
        title: '入住 Canopy by Hilton',
        type: 'hotel',
        notes: '辦理登記入住，享受度假村設施與泳池'
      },
      {
        time: '17:30',
        title: '晚餐：natural protein',
        type: 'food',
        mapCode: '310 453 194*44',
        notes: '對調優化！提供健康蔬食與能量餐點，週三休 (今日有營業，注意 18:00 關門)',
        details: '將 natural protein 移至今日晚餐。由於今天 15:00 即入住 Hilton，時間極為充裕，可優雅地在 18:00 關門前前往市區享用健康蔬食與果昔，完美利用今天寬鬆的步調。'
      },
      {
        time: '20:30',
        title: '飯店視角或伊良部大橋旁觀星',
        type: 'attraction',
        notes: '宮古島夜空無光害，繁星璀璨'
      }
    ],
    vegTips: [
      {
        title: '雪鹽工廠消暑推薦',
        content: '著名的「雪鹽霜淇淋」為蛋奶素（含乳製品），可現場撒上各種調味鹽嘗試獨特風味。',
        safetyRating: 4
      },
      {
        title: '晚餐推薦：natural protein',
        content: '今日在 15:00 入住希爾頓後無其他行程，極為適合在 18:00 關門前前往 natural protein 享用精緻健康的能量碗與水果奶昔，對調後極度寬鬆。',
        safetyRating: 5
      },
      {
        title: '第二天備用素食點：大和食堂 (傳統家庭店)',
        content: '大和食堂 (MapCode: 310 455 399*32) 加入備用素食餐廳清單。此處苦瓜炒豆腐、日式炒麵、炒蔬菜、蛋包飯、炒飯等經典定食，經告知「魚、出汁とお肉を抜きで」(去魚、高湯和肉) 後皆可做素食客製，非常實用！電話：0980-72-0718。',
        safetyRating: 5
      }
    ]
  },
  {
    day: 3,
    dayOfWeek: '週三',
    theme: '前濱沙灘野餐、來間島無麩質午餐與刨冰、夜探野生椰子蟹',
    flow: [
      {
        time: '08:00',
        title: '專注享受 Hilton 飯店設施與美味早餐',
        type: 'hotel',
        notes: '今日上午不外排景點，在希爾頓度假村享受悠閒時光',
        details: '悠閒享用 Hilton 豐盛的自助早餐，隨後使用度假村的泳池設施、健身房或散步，完全放鬆身心，享受五星飯店價值。'
      },
      {
        time: '11:30',
        title: '辦理退房，出發前往市區',
        type: 'transport',
        notes: '離開 Hilton 往南部出發'
      },
      {
        time: '11:45',
        title: '外帶午餐：Minaaiya (皆愛屋豆腐飯糰)',
        type: 'food',
        mapCode: '310 452 743*11',
        notes: '外帶豆腐飯糰到沙灘野餐，週六公休 (今日週三有開)',
        details: '外帶 100% 純素、無五辛的安全豆腐飯糰。'
      },
      {
        time: '12:00',
        title: '與那霸前濱沙灘踏浪與海邊野餐',
        type: 'attraction',
        mapCode: '310 210 500*25',
        notes: '在「東洋第一美沙灘」散步踏浪，吃美味的豆腐飯糰',
        details: '擁有極寬廣的細白沙灘與漸層的宮古藍海景，在此吃著剛剛外帶的豆腐飯糰，極為放鬆舒服。'
      },
      {
        time: '13:00',
        title: '穿越來間大橋，前往來間島',
        type: 'transport',
        notes: '前往來間島探索'
      },
      {
        time: '13:15',
        title: '來間島正餐：くらしや (Klashiya)',
        type: 'food',
        mapCode: 'klashi__ya',
        notes: '享用無麩質、維根手作甜點與簡餐，週二、三營業 (今日週三有開！)',
        details: '新加入正餐點！位於來間島，以動物性食材和無小麥粉（Gluten-free）為原則，使用島上在地天然食材手工製作精緻的烤點心與午餐。'
      },
      {
        time: '14:15',
        title: '登 龍宮城展望台',
        type: 'attraction',
        mapCode: '310 250 156*33',
        notes: '360 度眺望前濱沙灘與來間大橋',
        details: '外觀仿龍宮設計，是來間島的至高點，景色極具張力。'
      },
      {
        time: '14:45',
        title: '甜點刨冰：Kiari kurimajima',
        type: 'food',
        mapCode: 'kiari_ice',
        notes: '享用當地評價最高、最好吃的刨冰，或至 PaniPani 喝椰奶冰沙',
        details: '新加入甜點！在炎炎夏日下享用最精緻消暑的刨冰。亦可選擇在附近的 PaniPani 享用芒果芒果汁與椰子奶冰沙。'
      },
      {
        time: '15:30',
        title: 'Nagamahama beach 散步',
        type: 'attraction',
        mapCode: '310 250 120*11',
        notes: '漫步來間島安靜的西海岸沙灘',
        details: '此沙灘隱密幽靜，沙子柔軟，非常適合吹海風與欣賞落日前奏的海景。'
      },
      {
        time: '16:30',
        title: '大採買時間 (AEON MaxValu + Nishigaki 超市 + Atarasu 農協市場)',
        type: 'shopping',
        notes: '採買新鮮宮古島芒果與自炊食材',
        details: '為今晚的公寓自炊與明天出海的午餐做好補給，採購芒果、吐司、島豆腐及純素咖哩。'
      },
      {
        time: '18:00',
        title: '入住 Hotel Miyakojima',
        type: 'hotel',
        notes: '入住公寓型酒店，房間配備廚房'
      },
      {
        time: '18:30',
        title: "晚餐：DOUG'S BURGER 或 公寓自炊",
        type: 'food',
        mapCode: '310 452 465*00',
        notes: '點選招牌大香菇植物肉堡，必須要求「去洋蔥」',
        details: "DOUG'S BURGER 移至今日晚餐。提供植物肉與厚實大香菇結合的素食漢堡，距離 Hotel Miyakojima 近，週三有營業。您也可以選擇在公寓溫馨自炊。"
      },
      {
        time: '19:45',
        title: '全家至 Hotel Miyakojima 門口集合',
        type: 'other',
        notes: '專車會至門口接送，準備出發夜遊'
      },
      {
        time: '20:00',
        title: 'Klook 星空&叢林夜間導覽 (至 21:30)',
        type: 'activity',
        notes: '在無路燈的 Ingya Marine Garden 尋找椰子蟹與夏季銀河',
        details: '手持電筒在專業導遊帶領下，進入自然保護區觀察野生椰子蟹、巨型寄居蟹，並進行夏季銀河解說。'
      }
    ],
    vegTips: [
      {
        title: '皆愛屋特別點餐提示',
        content: '皆愛屋除豆腐飯糰外，其「ゆし豆腐套餐」亦可客製化：出示日文小卡請店家將配菜肉類去除，改用熱水或昆布鹽水代替柴魚高湯加熱，美味又安心。',
        safetyRating: 5
      },
      {
        title: '超市採買推薦（MAXVALU Miyako Minami）',
        content: '採購時推薦購買龜甲萬豆乳 (キッコーマン 豆乳)、島豆腐（新鮮熱豆腐）、以及 Yushi 豆腐 (ゆし豆腐)，適合搭配雪鹽直接食用，是極好的素食宵夜或早餐。',
        safetyRating: 5
      },
      {
        title: '重要：自備明日 (Day 4) 出海午餐',
        content: '明日阻礙重重的出海行程，船家提供的便當無素食。請在今日 AEON 大採購時買好純素飯糰、香蕉、麵包，或在自炊時多做一份豆腐三明治帶上船。',
        safetyRating: 5
      },
      {
        title: "晚餐防踩雷：DOUG'S BURGER",
        content: '今日晚餐推薦去吃 DOUG\'S BURGER（週三有營業）。點餐時請務必出示日文小卡要求「去洋蔥(タマネギ抜き)」。薯條與洋蔥圈因與海鮮共用炸油，若嚴格介意者請避免。',
        safetyRating: 5
      }
    ],
    educationalNotes: [
      '夜遊行政提醒：夜間探索園區完全沒有路燈，且蚊蟲繁多，全家務必換穿長袖薄外衣、長褲、運動鞋（嚴禁拖鞋與涼鞋），並在 19:45 前在房間完成如廁。',
      '蔡老師教學連結：伊姆哥亞海濱公園 (Ingya Marine Garden) 是天然的封閉海灣。今晚夜遊帶領孩子在黑暗中觀察夜行性底棲與陸生生物，與 Day 5 下午的白天生態進行對照。'
    ]
  },
  {
    day: 4,
    dayOfWeek: '週四',
    theme: '極致藍之日 (青之洞窟+八重干瀨雙合一浮潛) 與美式素食夜',
    flow: [
      {
        time: '07:50',
        title: '從 Hotel Miyakojima 開車出發',
        type: 'transport',
        notes: '前往伊良部島浮潛集合碼頭'
      },
      {
        time: '08:30',
        title: '抵達伊良部島觀光集合點 (準備出海)',
        type: 'activity',
        notes: '請提早 10-15 分鐘到，現場需以現金支付尾款共 48,000 日圓',
        details: '集合地點：Ikemazoe-47番地。出海進行青之洞窟與日本最大珊瑚礁群八重干瀨的雙合一浮潛。'
      },
      {
        time: '14:00',
        title: '浮潛行程結束，返回碼頭盥洗換裝',
        type: 'other',
        notes: '盥洗並更衣休息'
      },
      {
        time: '15:00',
        title: '下午茶/甜點備選：Guest House & CAFE NaNa',
        type: 'food',
        notes: '新加入甜點！位於伊良部島，提供維根及無麩質手作甜點',
        details: '若浮潛完時間來得及（一般營業至 16-17:00），推薦前往前里添581的 NaNa CAFE，享用精緻的純素無麩質甜點；若時間太趕，則可直接前往市區的 Blue Seal 冰淇淋與手沖咖啡。電話：0980-78-5717。'
      },
      {
        time: '16:00',
        title: '下午茶點心：Blue Seal 冰淇淋 (久貝店)',
        type: 'food',
        mapCode: '310 452 355*00',
        notes: '享用消暑冰淇淋，避免晚餐後吃甜食',
        details: '位於久貝店，推薦紅芋、鹽金楚糕等在地限定口味。將此行程移至下午，能讓晚上的腸胃更無負擔。'
      },
      {
        time: '16:45',
        title: '咖啡時光：coffee shop Majya',
        type: 'food',
        mapCode: '310 453 252*44',
        notes: '享受職人現沖的高質感手沖黑咖啡',
        details: '這是一間非常精緻的手沖咖啡館，享受熱騰騰或冰涼的現沖黑咖啡，能迅速恢復浮潛大消耗體力後的精神。'
      },
      {
        time: '17:45',
        title: '返回 Hotel Miyakojima 休息',
        type: 'hotel',
        notes: '短暫睡覺或休息補眠'
      },
      {
        time: '18:30',
        title: '晚餐：Island Brewing Miyakojima',
        type: 'food',
        mapCode: '310 453 381*22',
        notes: '享用素食沙拉與墨西哥餅，週四正常營業',
        details: 'Island Brewing 移至今日晚餐。提供豐富的素食生菜沙拉、墨西哥素薄餅與精釀啤酒，營業時間為 15-23 時，週四正常營業，氣氛極佳。'
      }
    ],
    vegTips: [
      {
        title: '出海午餐提醒',
        content: '切勿寄望船家提供的便當。請在船上享用昨日在 AEON 準備的純素豆腐三明治、海苔飯糰與香蕉。',
        safetyRating: 5
      },
      {
        title: '晚餐推薦：Island Brewing Miyakojima',
        content: '今日晚餐推薦去吃 Island Brewing Miyakojima（週四有營業）。提供美味素食沙拉、墨西哥素薄餅與精釀啤酒，位置順路且氣氛非常放鬆。',
        safetyRating: 5
      }
    ]
  },
  {
    day: 5,
    dayOfWeek: '週五',
    theme: '海龜浮潛體驗、黃金溫泉舒壓、精緻外帶素食與自選觀星夜',
    flow: [
      {
        time: '05:30',
        title: '東平安名岬日出',
        type: 'attraction',
        mapCode: '310 215 529*66',
        notes: '捕捉海岬絕美的第一道晨光',
        details: '宮古島最東端突出海岬，日出景象氣勢磅礴。'
      },
      {
        time: '06:45',
        title: 'Aragusuku Beach 新城海岸 (陸上尋訪海龜)',
        type: 'attraction',
        mapCode: '310 326 777*00',
        notes: '日出後順路散步與岸上尋龜，不下水，避免折返拉車',
        details: '與東平安名岬距離僅 10 分鐘車程。早上水面平靜。此行程調整為不下水的陸上觀光，不需換裝與曬乾衣服，且地理位置順路，不必再特地繞回市區。'
      },
      {
        time: '08:30',
        title: '南部沿海悠閒早餐與短暫歇息',
        type: 'food',
        notes: '不拉車折返市區！在南部沿海找個優雅景點小憩，享受休閒清晨',
        details: '在車上小憩，或在南部沿海長椅享受清晨溫和陽光。避開了回市區再下來的 1 小時折返拉車時間。'
      },
      {
        time: '10:15',
        title: '抵達下一個集合地點：シギライフーチ (Shigira Beach) 停車場',
        type: 'transport',
        mapCode: '310 160 300*11',
        notes: '請提早 15 分鐘前報到，今日唯一一次下水浮潛行程'
      },
      {
        time: '10:30',
        title: 'Klook 海龜和珊瑚礁浮潛體驗 (至 13:00)',
        type: 'activity',
        notes: '今日唯一水下行程！由專業導遊帶領 10:30 準時下水',
        details: '正午陽光直射，海水通透度最高，呈現如果凍般的果凍海，與海龜合照效果最好。行程附帶免費水下照片影片拍攝。'
      },
      {
        time: '13:00',
        title: '午餐外帶：Yusarabi',
        type: 'food',
        mapCode: '0980-79-7907',
        notes: '外帶冷素食番茄蕎麥麵、雪鹽薯條與島嶼綠沙拉',
        details: '新加入行程！浮潛完開車前往近友利高台的 Yusarabi 外帶精緻蔬食（番茄蕎麥麵、沙拉與薯條），在海邊或車上野餐，非常適合當作浮潛後的能量補給，兼顧動線與美味。'
      },
      {
        time: '14:00',
        title: 'Ingya Marine Garden 步道散步與陸上觀察 (至 15:00)',
        type: 'attraction',
        mapCode: '310 318 644*00',
        notes: '不下水，沿海岬步道散步與靜態地貌觀察，5分鐘車程順路',
        details: '此處被岬角包圍，此行程為純步道散步與靜態地貌觀察（不下水），完全避免多次換裝與濕衣服問題。',
        teachingLink: '「跨時空生態對照教材」：下午在此進行步道探索，引導孩子親身體驗白天的地形特徵、清澈水質與海生動態，並與 Day 3 晚上的「夜間生態探索」做對照，體會晝夜自然之奇妙。'
      },
      {
        time: '15:15',
        title: 'シギラ (Shigira) 黃金溫泉',
        type: 'attraction',
        mapCode: '310 160 523*00',
        notes: '浸泡熱帶風露天溫泉與溫水池放鬆，隨後回市區',
        details: '就在 Shigira 海灘旁。在經過上午的浮潛體力消耗後，泡湯能徹底洗去疲勞並完成盥洗。泡完湯後直接開車返回市區。'
      },
      {
        time: '17:00',
        title: '返回 Hotel Miyakojima 公寓洗澡換裝與稍作休息',
        type: 'hotel',
        notes: '開車返回平良市區，公寓洗熱水澡與徹底放鬆，時間極為充裕'
      },
      {
        time: '18:30',
        title: '晚餐：Hi Sun CAFE',
        type: 'food',
        mapCode: '310 453 381*22',
        notes: '前往溫馨的素食簡餐店享用晚餐，時間極為充裕無壓力',
        details: 'Hi Sun CAFE 營業時間較晚且無 18:00 關門限制。全家可先回公寓舒舒服服洗澡更衣，再散步或開車前往市區享用溫馨又豐盛的素食簡餐。'
      },
      {
        time: '20:30',
        title: '自選地點夜間觀星',
        type: 'attraction',
        notes: '視天氣與精神情況，自選最適合的觀星地點',
        details: '取消長途拉車去最東端的折返跑，改由觀星景點清單自選地點。可前往離公寓近的伊良部大橋旁、比嘉道路公園、或白鳥岬西海岸公園觀星。'
      }
    ],
    vegTips: [
      {
        title: '中午飲食防踩雷 (Shigira 周邊)',
        content: 'Shigira 度假村周邊皆為高檔海鮮與燒肉餐廳，無安全純素選項。今日中午外帶 Yusarabi 的冷番茄蕎麥麵、島嶼綠沙拉與雪鹽薯條在海邊野餐，非常安全便利。',
        safetyRating: 5
      },
      {
        title: '晚餐首選：Hi Sun CAFE',
        content: 'Hi Sun CAFE 提供多樣安心的素食簡餐與主食。今晚沒有急促的關門時間限制，您可以極其悠閒地享受溫馨的晚餐。',
        safetyRating: 4
      }
    ]
  },
  {
    day: 6,
    dayOfWeek: '週六',
    theme: '公設市場最後巡禮與南國素咖哩 (溫馨歸途)',
    flow: [
      {
        time: '09:00',
        title: '宮古島公設市場/商店街',
        type: 'shopping',
        mapCode: '310 453 194*44',
        notes: '採買手作伴手禮、宮古島黑糖',
        details: '可以購買當地特產純黑糖、芒果乾等，順路逛逛西里商店街。'
      },
      {
        time: '11:15',
        title: '午餐：Cafe 373 & Spices',
        type: 'food',
        mapCode: '310 454 112*00',
        notes: '二選一優化！享用南國香料風斯里蘭卡素食咖哩，週六有營業',
        details: '與 Mango Cafe 進行二選一，保留正餐咖哩，避免重複進食甜點吃不下。提供充滿香氣、溫和美味的斯里蘭卡蔬食咖哩，為旅程畫下完美句點。'
      },
      {
        time: '12:30',
        title: '駛向下地島機場還車',
        type: 'transport',
        notes: '下地島機場原地還車，記得先加滿油'
      },
      {
        time: '14:00',
        title: '搭機返台，行程圓滿結束',
        type: 'other',
        notes: '搭乘班機回台，帶著滿滿驚喜與回憶'
      }
    ],
    vegTips: [
      {
        title: '伴手禮防踩雷',
        content: '宮古島黑糖是 100% 純素安全的伴手禮。採購其他餅乾點心時，請注意是否含有牛脂、豚脂或吉利丁(Lard/Gelatin) 或魚介成分。',
        safetyRating: 4
      }
    ]
  }
];
