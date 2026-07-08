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
}

export const mapCodeList: MapCodeEntry[] = [
  { name: '17END (幻之沙灘)', code: '727 702 329*60', note: '伊良部島最北端景點' },
  { name: '渡口の浜 (細白沙灘)', code: '727 611 405*25', note: '伊良部島白沙灘' },
  { name: 'Sunset beach (久松夕陽)', code: '310 450 710*00', note: '西海岸落日點' },
  { name: '砂山海灘 (天然石洞)', code: '310 512 437*33', note: '北部著名沙灘夕陽' },
  { name: '宮古島海中公園', code: '310 723 821*28', note: '海底玻璃觀景窗' },
  { name: '雪鹽工廠', code: '310 724 167*00', note: '雪鹽霜淇淋與伴手禮' },
  { name: '池間大橋', code: '310 751 721*11', note: '連接宮古島與池間島' },
  { name: 'Gelato Cafe Ninufa (披薩冰淇淋)', code: '310 780 236*55', note: '池間島旁，週三休 (週二有開)' },
  { name: 'Nishigaki 超市 (西里店)', code: '310 453 381*22', note: '市區超市，買雪鹽/自炊備品' },
  { name: 'Minaaiya (豆腐飯糰)', code: '310 452 743*11', note: '市區往來間島路上，週六休 (週三有開)' },
  { name: '龍宮城展望台', code: '310 250 156*33', note: '來間島展望台，眺望前濱海灘' },
  { name: 'Nagamahama beach (來間島西側)', code: '310 250 120*11', note: '寧靜沙灘' },
  { name: 'PaniPani (來間島咖啡)', code: '310 250 156*33', note: '來間島熱門輕食咖啡' },
  { name: "DOUG'S BURGER", code: '310 452 465*00', note: '大香菇植物肉堡，去洋蔥' },
  { name: "Doug’s Coffee (淺焙咖啡)", code: '310 452 435*88', note: '市區淺焙手沖咖啡' },
  { name: 'coffee shop Majya (手沖咖啡)', code: '310 453 252*44', note: '浮潛完喝杯職人黑咖啡' },
  { name: 'Blue Seal 冰淇淋 (久貝店)', code: '310 452 355*00', note: '沖繩特色冰淇淋' },
  { name: '東平安名岬 (日出/銀河)', code: '310 215 529*66', note: '最東端日出與銀河觀星地' },
  { name: 'Aragusuku Beach 新城海岸 (看海龜)', code: '310 326 777*00', note: '珊瑚礁密布、適合岸潛看海龜' },
  { name: 'Shigira Beach (海龜浮潛集合點)', code: '310 160 300*11', note: 'Shigira 度假村浮潛點' },
  { name: 'Ingya Marine Garden (夜驚奇/潮間帶)', code: '310 318 644*00', note: '日間潮間帶 / 夜間叢林探索' },
  { name: 'シギラ (Shigira) 黃金溫泉', code: '310 160 523*00', note: '熱帶叢林溫泉與戲水池' },
  { name: 'Blue Turtle Farm Mango Cafe', code: '310 451 888*44', note: '回程順路芒果冰與生菜沙拉' },
  { name: 'Cafe 373 & Spices (咖哩)', code: '310 454 112*00', note: '斯里蘭卡風味素食咖哩，週三休' },
  { name: '宮古島公設市場', code: '310 453 194*44', note: '市區市場，採買黑糖伴手禮' }
];

export const itineraryData: DailyItinerary[] = [
  {
    day: 1,
    dayOfWeek: '週一',
    theme: '下地島 17END 搶時動線與西岸景點整合',
    flow: [
      {
        time: '14:00',
        title: '下地島機場取車',
        type: 'transport',
        notes: '自駕行程開始，注意日本右駕與導航操作'
      },
      {
        time: '14:20',
        title: '17END 幻之沙灘',
        type: 'attraction',
        mapCode: '727 702 329*60',
        notes: '捕捉「幻之沙灘」最美片刻',
        details: '位於下地島機場跑道盡頭，退潮時會露出絕美白色沙灘，Tiffany藍海水極度迷人。'
      },
      {
        time: '15:30',
        title: '渡口の浜 (順路加碼)',
        type: 'attraction',
        mapCode: '727 611 405*25',
        notes: '漫步全島最細白粉末沙灘',
        details: '沙質極細如粉末，踩起來非常舒服，可以近距離欣賞清澈明亮的 Tiffany 藍海景。'
      },
      {
        time: '16:30',
        title: '穿越伊良部大橋，前往 Sunset beach (久松)',
        type: 'attraction',
        mapCode: '310 450 710*00',
        notes: '落日點考察',
        details: '開車穿越壯觀的伊良部大橋（全長 3,540 公尺，免費通行），前往久松的 Sunset beach 勘查絕佳的夕陽觀賞點。'
      },
      {
        time: '17:30',
        title: 'Hotel California Miyakojima Resort 辦理入住登記',
        type: 'hotel',
        notes: '先前往登記入住處辦理手續'
      },
      {
        time: '18:00',
        title: '入住 ecot Sunayama Beach',
        type: 'hotel',
        notes: '今晚的住宿地點，靠近砂山海灘'
      },
      {
        time: '18:30',
        title: '砂山海灘日落',
        type: 'attraction',
        mapCode: '310 512 437*33',
        notes: '欣賞天然石洞夕陽',
        details: '穿過白色沙丘後映入眼簾的是天然海蝕石洞，配上落日餘暉，是宮古島最經典的明信片級畫面。'
      }
    ],
    vegTips: [
      {
        title: '重要採買：Nishigaki 超市 (西里店)',
        content: '前往飯店前，順路至 Nishigaki 超市買一小包宮古島雪鹽隨身攜帶。後續若有餐廳無法提供「無五辛」醬汁，可以點水煮蔬菜直接撒雪鹽調味，簡單又安全。',
        safetyRating: 5
      },
      {
        title: '今日晚餐推薦：Hi Sun CAFE',
        content: '有提供素食選項，環境溫馨，提供簡餐與美味咖啡，非常適合第一晚舒緩搭機與開車的疲勞。',
        safetyRating: 4
      }
    ]
  },
  {
    day: 2,
    dayOfWeek: '週二',
    theme: '北部精華巡禮、海中公園與希爾頓假期',
    flow: [
      {
        time: '09:00',
        title: '砂山海灘戲水',
        type: 'attraction',
        notes: '晨間遊玩，避開烈日與遊客朝',
        details: '早上的砂山海灘人煙稀少，陽光溫和，適合悠閒漫步與戲水拍照。'
      },
      {
        time: '10:30',
        title: '宮古島海中公園',
        type: 'attraction',
        mapCode: '310 723 821*28',
        notes: '不下水觀察海底熱帶魚與生態',
        details: '透過 24 片玻璃窗，可以直接觀賞海底 3-5 公尺深的野生熱帶魚、海生動物與珊瑚礁生態。',
        teachingLink: '宮古島海中公園提供真實的海洋生態切片，是國小自然科認識海洋食物鏈與珊瑚礁生態系的絕佳戶外教材。'
      },
      {
        time: '11:30',
        title: '雪鹽工廠',
        type: 'attraction',
        mapCode: '310 724 167*00',
        notes: '認識宮古島著名雪鹽的製作過程',
        details: '宮古島雪鹽以含有豐富礦物質著稱。工廠內提供雪鹽製作解說，並有各種雪鹽相關商品與伴手禮。'
      },
      {
        time: '12:30',
        title: '池間大橋',
        type: 'attraction',
        mapCode: '310 751 721*11',
        notes: '欣賞Tiffany「池間藍」與探索池間島',
        details: '橋下海水清澈度極高，呈現獨特的「池間藍」漸層色彩，開車過橋彷彿飛馳在海面上。'
      },
      {
        time: '13:00',
        title: '午餐：Gelato Cafe Ninufa',
        type: 'food',
        mapCode: '310 780 236*55',
        notes: '新加入素食點，週三休 (今日週二有營業！)',
        details: '提供美味的蛋奶素披薩與精緻義式冰淇淋，位置就在池間島旁，動線完美順路。'
      },
      {
        time: '15:00',
        title: '入住 Canopy by Hilton',
        type: 'hotel',
        notes: '登記入住，盡情享受頂級度假村設施與泳池'
      },
      {
        time: '18:30',
        title: '傍晚咖啡：Doug’s Coffee',
        type: 'food',
        mapCode: '310 452 435*88',
        notes: '新加入優質手沖咖啡點',
        details: '精緻的淺焙咖啡店，從度假村開車前往市區約 10 分鐘，可以品嚐果香濃郁、層次分明的職人手沖。'
      },
      {
        time: '20:00',
        title: '飯店露台或伊良部大橋旁觀星',
        type: 'attraction',
        notes: '宮古島光害極少，夜空繁星點點'
      }
    ],
    vegTips: [
      {
        title: '消暑甜點：雪鹽工廠霜淇淋',
        content: '著名的「雪鹽霜淇淋」成分為蛋奶素（含奶），並提供十多種調味鹽（如雪鹽、芥末鹽、可可鹽等）自行撒上調味。若有吃蛋奶，這是一道不可錯過的在地消暑甜點！',
        safetyRating: 4
      },
      {
        title: '午餐首選：Gelato Cafe Ninufa',
        content: '主打手工蛋奶素披薩與在地水果義式冰淇淋，店面位於池間島出口旁，環境明亮舒服，且今日週二有開（週三公休），時間動線完美卡位。',
        safetyRating: 5
      }
    ]
  },
  {
    day: 3,
    dayOfWeek: '週三',
    theme: '跨海大橋、來間島深度遊與星空叢林探險',
    flow: [
      {
        time: '11:30',
        title: '辦理退房，直接出發前往市區',
        type: 'transport',
        notes: '離開 Hilton，展開南下與來間島行程'
      },
      {
        time: '12:00',
        title: '午餐：Minaaiya (豆腐飯糰)',
        type: 'food',
        mapCode: '310 452 743*11',
        notes: '新加入素食點，週六休 (今日週三有營業！)',
        details: '提供極具特色的純素豆腐飯糰，精緻、乾淨且好吃。位置正好處於市區往來間島的順路動線上。'
      },
      {
        time: '13:30',
        title: '穿越來間大橋，登 龍宮城展望台',
        type: 'attraction',
        mapCode: '310 250 156*33',
        notes: '遠眺前濱海灘與兩座跨海大橋',
        details: '展望台外觀仿龍宮設計，位於來間島高處，可 360 度俯瞰前濱海灘的湛藍海景與對岸宮古島。'
      },
      {
        time: '14:30',
        title: 'Nagamahama beach (順路新景點)',
        type: 'attraction',
        mapCode: '310 250 120*11',
        notes: '漫步來間島西側寧靜沙灘',
        details: '隱密而寧靜的天然沙灘，遊客較少，適合聽海浪聲、撿貝殼與享受愜意午後。'
      },
      {
        time: '15:30',
        title: '下午茶：PaniPani',
        type: 'food',
        mapCode: '310 250 156*33',
        notes: '來間島超人氣網美露天咖啡店',
        details: '沙地地板與南國茅草屋風格，招牌為現打芒果汁、椰子奶冰沙。'
      },
      {
        time: '16:30',
        title: '大採買時間 (AEON MaxValu + Nishigaki 超市 + Atarasu 農協市場)',
        type: 'shopping',
        notes: '買新鮮宮古島芒果與自炊食材',
        details: 'Atarasu 農協市場是購買當地平價新鮮芒果的首選。同時在 AEON MaxValu 採購今晚自炊與明日出海的備糧。'
      },
      {
        time: '18:00',
        title: '入住 Hotel Miyakojima',
        type: 'hotel',
        notes: '辦理入住，今晚為公寓式客房（附廚房）'
      },
      {
        time: '18:30',
        title: '公寓自炊晚餐',
        type: 'food',
        notes: '悠閒享用新鮮芒果與純素料理',
        details: '利用超市採買的日本優質蔬菜、豆腐與咖哩塊，在公寓廚房烹飪一頓豐盛又 100% 安全的純素自炊晚餐。'
      },
      {
        time: '19:45',
        title: '全家至 Hotel Miyakojima 門口集合',
        type: 'other',
        notes: '準備迎接 Klook 夜間夜行探險專車'
      },
      {
        time: '20:00',
        title: 'Klook 星空&叢林夜間導覽 (至 21:30)',
        type: 'activity',
        notes: '專車至門口接送，尋找椰子蟹與觀星',
        details: '訂單編號: SXU577304。體驗地點位於伊姆哥亞海濱公園 (Ingya Marine Garden) 區域。手持探險電筒在無路燈的自然保護區內，由專業導遊帶隊尋找野生椰子蟹、巨大寄居蟹，並進行夏季銀河觀星講解。'
      }
    ],
    vegTips: [
      {
        title: '下午茶防踩雷 (PaniPani)',
        content: '店內的輕食（如熱壓吐司）可能抹有大蒜醬，或內含火腿、洋蔥。建議素食者主攻飲料與冰沙類（芒果汁、椰子奶），避免點鹹食。',
        safetyRating: 3
      },
      {
        title: '替代方案重大決策：改用 Minaaiya 飯糰',
        content: '原定計畫 Day 3 中午吃「島豆腐料理屋」，但評估該店日式鰹魚高湯 (Dashi) 出汁污染風險極高（安全指數僅 3 星），且週三公休。而 Minaaiya 豆腐飯糰提供 100% 安全純素選項，且週三正常營業，極為順路，故改為主要推薦！',
        safetyRating: 5
      },
      {
        title: '關鍵準備：明日 (Day 4) 出海午餐採買',
        content: '明日浮潛船家提供的便當 99% 含有鰹魚高湯或肉類，絕對無法提供合格素食。請務必在今晚 AEON 超市大採買時，買好純素海苔飯糰、香蕉、麵包，或在自炊時多做一份島豆腐三明治，明天帶上船享用。',
        safetyRating: 5
      }
    ],
    educationalNotes: [
      '夜遊行政提醒：夜間探索園區完全沒有路燈，且蚊蟲繁多，全家務必換穿長袖薄外衣、長褲、包鞋/運動鞋（嚴禁拖鞋與涼鞋），並在 19:45 出發前在房間內完成如廁。',
      '蔡老師教學連結：伊姆哥亞海濱公園 (Ingya Marine Garden) 是一個自然的封閉式海灣。今晚夜遊將帶領孩子在黑暗中用電筒觀察夜行性陸生動物（如椰子蟹、寄居蟹的潮間帶行為），並與 Day 5 中午的白天生態進行對照。'
    ]
  },
  {
    day: 4,
    dayOfWeek: '週四',
    theme: '極致藍之日(青之洞窟+八重干瀨雙合一浮潛)與美式素食夜',
    flow: [
      {
        time: '07:50',
        title: '從 Hotel Miyakojima 開車出發',
        type: 'transport',
        notes: '開車前往伊良部島浮潛集合點'
      },
      {
        time: '08:30',
        title: '抵達伊良部島觀光集合點 (準備出海)',
        type: 'activity',
        notes: '請提前 10-15 分鐘到以防迷路。現場需以現金支付尾款共 48,000 日圓',
        details: '集合地點：Ikemazoe-47番地 Irabu, Miyakojima。今日行程為青之洞窟（藍洞）探秘與八重干瀨（日本最大珊瑚礁群）雙合一浮潛。'
      },
      {
        time: '14:00',
        title: '浮潛行程結束，返回碼頭盥洗換裝',
        type: 'other',
        notes: '盥洗整理，稍作休息'
      },
      {
        time: '16:00',
        title: '咖啡時光：coffee shop Majya',
        type: 'food',
        mapCode: '310 453 252*44',
        notes: '新加入咖啡點。浮潛大消耗後喝杯手沖黑咖啡',
        details: '專業精緻的手沖咖啡店，在經過長達數小時的浮潛體力消耗後，享受職人現沖的高品質黑咖啡，是極致的享受。'
      },
      {
        time: '17:00',
        title: '返回 Hotel Miyakojima 休息',
        type: 'hotel',
        notes: '回公寓短暫休息、恢復體力'
      },
      {
        time: '18:30',
        title: '晚餐：DOUG\'S BURGER',
        type: 'food',
        mapCode: '310 452 465*00',
        notes: '品嚐知名大香菇植物肉堡',
        details: '宮古島超人氣美式漢堡店，創辦人為美籍華人律師，店內提供專為素食者設計的植物肉堡。'
      },
      {
        time: '19:30',
        title: 'Blue Seal 冰淇淋 (久貝店)',
        type: 'food',
        mapCode: '310 452 355*00',
        notes: '餐後甜點時間，經典沖繩風味',
        details: '享用沖繩最具代表性的 Blue Seal 冰淇淋，推薦紅芋、鹽金楚糕或芒果口味。'
      }
    ],
    vegTips: [
      {
        title: '出海午餐自備提醒',
        content: '出海浮潛的船家便當絕對無法客製化無魚介素食。請享用昨日在 AEON 超市準備好的自製三明治、純素飯糰與香蕉，在船上野餐。',
        safetyRating: 5
      },
      {
        title: '晚餐防踩雷：DOUG\'S BURGER',
        content: '點選招牌 "Doug\'s Veggie Burger"（由多汁大香菇與大豆植物肉製成）。點餐時請務必出示護身符嚴格要求：「去洋蔥 (タマネギ抜き)」，因為預設醬汁可能含有洋蔥。另外，其薯條與洋蔥圈是與炸魚共用油鍋，若介意交叉污染請避免點油炸副餐。',
        safetyRating: 5
      }
    ]
  },
  {
    day: 5,
    dayOfWeek: '週五',
    theme: '東南岸全覽(雙海龜浮潛、溫泉舒壓與精準自炊)',
    flow: [
      {
        time: '05:30',
        title: '東平安名岬日出',
        type: 'attraction',
        mapCode: '310 215 529*66',
        notes: '迎日出捕捉宮古島第一道晨光',
        details: '宮古島最東端突出的海岬，被選為「日本都市公園百選」之一。白色燈塔與巨石群在晨曦中極具張力。'
      },
      {
        time: '07:30',
        title: '返回 Hotel Miyakojima 享用早餐與補眠',
        type: 'hotel',
        notes: '並利用廚房快速準備「無五辛純素手作便當」'
      },
      {
        time: '09:15',
        title: '自駕出發，前往 Aragusuku Beach 新城海岸',
        type: 'attraction',
        mapCode: '310 326 777*00',
        notes: '水淺珊瑚多，海龜極常出沒的沙灘',
        details: '此海灘潮間帶水極淺，珊瑚礁與熱帶魚豐富，只要浮潛即有高機率遇到野生海龜在啃食海草。'
      },
      {
        time: '10:15',
        title: '抵達下一個集合地點：Shigira Beach 停車場',
        type: 'transport',
        mapCode: '310 160 300*11',
        notes: '請提早 15 分鐘前報到，準備第二次出海'
      },
      {
        time: '10:30',
        title: 'Klook 海龜和珊瑚礁浮潛體驗 (至 13:00)',
        type: 'activity',
        notes: '專業導遊帶領 10:30 準時下水',
        details: '此時正午陽光直射，海水通透度最高，呈現如果凍般的果凍海，與海龜合照效果最好。行程附帶免費水下照片影片拍攝。'
      },
      {
        time: '13:00',
        title: '享用手作純素便當與盥洗',
        type: 'food',
        notes: '在車上或海灘旁野餐，隨後前往 Ingya Marine Garden',
        details: '享用早上自製的島豆腐三明治或海苔飯糰，隨後前往隔壁的 Ingya Marine Garden。'
      },
      {
        time: '13:30',
        title: 'Ingya Marine Garden 白天生態散步',
        type: 'attraction',
        mapCode: '310 318 644*00',
        notes: '白天步道散步，觀察內灣與潮間帶地形',
        details: '這是一個被海岬環繞的天然內灣，水波不興，是天然的浮潛池與生態觀察場。',
        teachingLink: '「跨時空生態對照教材」：同一個 Ingya Marine Garden 區域，我們在 Day 3 晚上進行了夜間叢林探索，今天中午則在陽光下觀察。蔡老師可引導孩子對照晝行性與夜行性生物（如夜間的椰子蟹與白天的潮間帶魚類、寄居蟹活動）的行為特點，以及內灣地形的形成。'
      },
      {
        time: '14:30',
        title: 'シギラ (Shigira) 黃金溫泉',
        type: 'attraction',
        mapCode: '310 160 523*00',
        notes: '熱帶叢林風溫泉與家庭戲水池泡湯',
        details: '日本最南端、最西端的天然溫泉。金黃色的溫泉水配上熱帶植物景觀，設有男女露天溫泉與全家可同穿泳衣的超大溫泉游泳池，能徹底洗去連續兩天浮潛的疲勞。'
      },
      {
        time: '17:30',
        title: '傍晚輕食：Blue Turtle Farm Mango Cafe',
        type: 'food',
        mapCode: '310 451 888*44',
        notes: '新加入素食點。補充維生素',
        details: '營業時間 10-17時，回程順路。可在這間由芒果農場直營的網美咖啡廳點一份清爽的純素生菜沙拉與芒果甜點。'
      },
      {
        time: '18:30',
        title: '晚餐：公寓純素自炊 或 前往海鮮餐廳《海の幸》',
        type: 'food',
        notes: '海の幸有極高鰹魚出汁風險，強烈建議自炊',
        details: '海の幸是知名海鮮專賣店，炸油100%與魚蝦共用，天婦羅醬汁含大量鰹魚出汁。強烈建議直接回公寓自炊，烹煮在 AEON 買好的 S&B 純素咖哩與島豆腐蔬菜飯。'
      },
      {
        time: '21:00',
        title: '東平安名岬看銀河',
        type: 'attraction',
        mapCode: '310 215 529*66',
        notes: '前往全島最無光害的夏季銀河觀星地',
        details: '再次前往東平安名岬，夜晚此處幾乎零光害，可以肉眼清晰看見壯麗的夏季銀河橫跨夜空，是完美的收官夜。'
      }
    ],
    vegTips: [
      {
        title: '中午飲食防踩雷 (Shigira 周邊)',
        content: 'Shigira 度假村周邊皆為高檔海鮮與燒肉餐廳，完全沒有安全的純素選項。今日中午必須享用早上預先做好的自備餐點，在海邊野餐。',
        safetyRating: 5
      },
      {
        title: '晚餐防踩雷警報：《海の幸》極高風險',
        content: '海の幸是一家海鮮專賣店，炸油 100% 與魚蝦共用，天婦羅醬汁與各種醬汁均含有鰹魚出汁。若必須在此用餐，僅能單點「白飯(ごはん)」與「單點海葡萄」(並嚴格要求只要鹽水或昆布鹽，絕對不能有任何日式高湯醬汁)。今晚強烈建議回公寓自炊！',
        safetyRating: 1
      }
    ]
  },
  {
    day: 6,
    dayOfWeek: '週六',
    theme: '公設市場最後巡禮與南國素食咖哩(溫馨歸途)',
    flow: [
      {
        time: '09:00',
        title: '宮古島公設市場/商店街',
        type: 'shopping',
        mapCode: '310 453 194*44',
        notes: '採買手作伴手禮、宮古島黑糖',
        details: '公設市場是採購宮古島特產（如黑糖、芒果乾、雪鹽餅乾）與手工藝品的最佳去處，也可以順便逛逛周邊西里通商店街。'
      },
      {
        time: '11:00',
        title: '提早午餐：Cafe 373 & Spices',
        type: 'food',
        mapCode: '310 454 112*00',
        notes: '新加入素食點。品嚐南國風情斯里蘭卡素咖哩',
        details: '提供充滿南國香料風味的斯里蘭卡蔬食咖哩，溫和、香氣十足，為本次宮古島海陸蔬食之旅劃下完美句點。'
      },
      {
        time: '12:00',
        title: '駛向下地島機場，沿途欣賞最後的伊良部大橋',
        type: 'transport',
        notes: '把握最後的無敵海景路段'
      },
      {
        time: '12:30',
        title: '下地島機場原地還車',
        type: 'transport',
        notes: '檢查油量（加滿油還車）與外觀毀損狀態'
      },
      {
        time: '14:00',
        title: '搭機返台，帶著滿滿驚喜與回憶',
        type: 'other',
        notes: '起飛返台，行程圓滿結束'
      }
    ],
    vegTips: [
      {
        title: '伴手禮防踩雷採購指南',
        content: '宮古島純黑糖是 100% 純植物性且安全的伴手禮。但在購買雪鹽餅乾、紅芋塔等點心時，務必仔細檢查成分表，注意是否含有牛脂、豚脂、吉利丁(Lard/Gelatin) 或魚介成分。',
        safetyRating: 4
      }
    ]
  }
];
