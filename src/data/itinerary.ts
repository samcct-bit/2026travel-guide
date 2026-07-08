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
  { name: '17END (幻之沙灘)', code: '727 702 329*60', note: '下地島跑道盡頭絕景' },
  { name: '渡口の浜 (細白沙灘)', code: '727 611 405*25', note: '伊良部島極細沙灘，順路走走' },
  { name: 'Sunset beach (久松夕陽)', code: '310 450 710*00', note: '西海岸最佳落日觀賞點' },
  { name: '砂山海灘 (天然石洞)', code: '310 512 437*33', note: '北部著名天然拱門岩石' },
  { name: '宮古島海中公園', code: '310 723 821*28', note: '玻璃窗觀察海底生態' },
  { name: '雪鹽工廠', code: '310 724 167*00', note: '參觀雪鹽製作與吃雪鹽霜淇淋' },
  { name: '池間大橋', code: '310 751 721*11', note: '眺望清澈的池間藍海面' },
  { name: 'Gelato Cafe Ninufa (披薩冰淇淋)', code: '310 780 236*55', note: '池間島旁，週三休，提供蛋奶素披薩' },
  { name: 'Island Brewing Miyakojima', code: '310 453 381*22', note: '市區精釀啤酒與素食沙拉/墨西哥餅，週三休' },
  { name: 'Nishigaki 超市 (西里店)', code: '310 453 381*22', note: '採買雪鹽及自炊備品' },
  { name: 'Minaaiya (豆腐飯糰)', code: '310 452 743*11', note: '市區順路豆腐飯糰，週六休 (週三有開)' },
  { name: '龍宮城展望台', code: '310 250 156*33', note: '來間島地標，眺望 Maehama 沙灘與來間大橋' },
  { name: 'Nagamahama beach (來間島西側)', code: '310 250 120*11', note: '適合散步與安靜欣賞海景' },
  { name: 'PaniPani (來間島咖啡)', code: '310 250 156*33', note: '人氣露天沙地咖啡店，主攻椰奶與果汁' },
  { name: 'Hotel Miyakojima', code: '310 452 743*11', note: '公寓型住宿，附帶廚房可自炊' },
  { name: "DOUG'S BURGER", code: '310 452 465*00', note: '提供大香菇植物肉堡，去洋蔥' },
  { name: "Doug’s Coffee (淺焙咖啡)", code: '310 452 435*88', note: '市區極佳淺焙手沖咖啡' },
  { name: 'coffee shop Majya (手沖咖啡)', code: '310 453 252*44', note: '職人現沖手沖黑咖啡' },
  { name: 'Blue Seal 冰淇淋 (久貝店)', code: '310 452 355*00', note: '經典沖繩連鎖冰淇淋' },
  { name: '東平安名岬 (日出/銀河)', code: '310 215 529*66', note: '最東端海岬，觀星與日出首選' },
  { name: 'Aragusuku Beach 新城海岸 (看海龜)', code: '310 326 777*00', note: '熱門海龜浮潛海灘，水淺珊瑚多' },
  { name: 'Shigira Beach (海龜浮潛集合點)', code: '310 160 300*11', note: 'Shigira 度假村浮潛點' },
  { name: 'Ingya Marine Garden (浮潛/夜驚奇)', code: '310 318 644*00', note: '天然內灣生態池，極佳浮潛點' },
  { name: 'シギラ (Shigira) 黃金溫泉', code: '310 160 523*00', note: '天然溫泉與全家戲水溫水池' },
  { name: 'Blue Turtle Farm Mango Cafe', code: '310 451 888*44', note: '芒果農場直營甜點與素沙拉' },
  { name: 'natural protein (素食簡餐)', code: '310 453 194*44', note: '提供素食菜單、奶昔與餐點，週三休 (10-18時)' },
  { name: 'Cafe 373 & Spices (咖哩)', code: '310 454 112*00', note: '美味斯里蘭卡風味素食咖哩，週三休' },
  { name: '宮古島公設市場', code: '310 453 194*44', note: '採購伴手禮黑糖與農特產' }
];

export const itineraryData: DailyItinerary[] = [
  {
    day: 1,
    dayOfWeek: '週一',
    theme: '下地島 17END 搶時動線與西海岸美景探索',
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
        title: '渡口の浜 (細白沙灘)',
        type: 'attraction',
        mapCode: '727 611 405*25',
        notes: '漫步極細如粉末的白沙灘',
        details: '位於伊良部島南部，沙質極為細白，海水清澈見底。'
      },
      {
        time: '16:30',
        title: 'Sunset beach (久松) 看夕陽',
        type: 'attraction',
        mapCode: '310 450 710*00',
        notes: '考察西海岸落日景色',
        details: '開車穿越壯觀的伊良部大橋後，前往久松的 Sunset beach，這是西海岸觀賞落日的黃金位置。'
      },
      {
        time: '18:00',
        title: 'Hotel California Miyakojima Resort 辦理登記並入住 ecot Sunayama Beach',
        type: 'hotel',
        notes: '入住 ecot 靠近砂山海灘的公寓型住宅'
      },
      {
        time: '19:00',
        title: '晚餐：Island Brewing Miyakojima',
        type: 'food',
        mapCode: '310 453 381*22',
        notes: '享用素食沙拉與墨西哥餅，週一正常營業',
        details: '位於市區的特色餐廳，提供豐富的素食生菜沙拉、墨西哥素薄餅與精釀啤酒，營業時間為 15-23 時（週三公休）。'
      }
    ],
    vegTips: [
      {
        title: '重要採買：Nishigaki 超市 (西里店)',
        content: '前往飯店前，順路至 Nishigaki 超市買一小包宮古島雪鹽隨身攜帶。後續若有餐廳無法提供「無五辛」醬汁，可以點水煮蔬菜直接撒雪鹽調味，簡單又安全。',
        safetyRating: 5
      },
      {
        title: '晚餐首選：Island Brewing Miyakojima',
        content: 'V2 版本修改！此餐廳位於市區，且週一正常營業至深夜。提供素食沙拉、墨西哥餅（Tacos），位置順路且氛圍極佳。',
        safetyRating: 5
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
        time: '15:00',
        title: '入住 Canopy by Hilton',
        type: 'hotel',
        notes: '辦理登記入住，享受度假村設施與泳池'
      },
      {
        time: '17:30',
        title: '下午茶咖啡：Doug’s Coffee',
        type: 'food',
        mapCode: '310 452 435*88',
        notes: '品嚐果香濃郁的淺焙手沖咖啡',
        details: '開車至市區約 10 分鐘，享受職人現沖的高品質咖啡。'
      },
      {
        time: '18:30',
        title: '晚餐：Hi Sun CAFE',
        type: 'food',
        mapCode: '310 453 381*22',
        notes: '提供多樣的素食餐點，週二有營業',
        details: '環境溫馨，有豐富的素食簡餐，距離 Hilton 度假村僅 10 分鐘車程，動線合適。'
      },
      {
        time: '20:30',
        title: '飯店露台或伊良部大橋旁觀星',
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
        title: '晚餐首選：Hi Sun CAFE',
        content: 'V2 版本修改！第一天改吃 Island Brewing，第二天晚餐則在此享用，位置鄰近 Hilton，提供更舒適安全的素食簡餐。',
        safetyRating: 4
      }
    ]
  },
  {
    day: 3,
    dayOfWeek: '週三',
    theme: '希爾頓度假時光、來間島探索與夜探生態',
    flow: [
      {
        time: '08:00',
        title: '專注享受 Hilton 飯店設施與美味早餐',
        type: 'hotel',
        notes: '今日上午無外安排景點，在希爾頓度假村享受悠閒時光',
        details: '悠閒享用 Hilton 豐盛的自助早餐，隨後使用度假村的高空泳池、健身房或沙灘散步，完全放鬆身心。'
      },
      {
        time: '11:30',
        title: '辦理退房，出發前往市區',
        type: 'transport',
        notes: '離開 Hilton 往南部出發'
      },
      {
        time: '12:00',
        title: '午餐：Minaaiya (豆腐飯糰)',
        type: 'food',
        mapCode: '310 452 743*11',
        notes: '享用安全的純素豆腐飯糰，週六公休 (今日週三有開)',
        details: '豆腐飯糰極具沖繩在地特色，清淡健康且 100% 純素，位置位於往來間島的交通動線上。'
      },
      {
        time: '13:30',
        title: '穿越來間大橋，登 龍宮城展望台',
        type: 'attraction',
        mapCode: '310 250 156*33',
        notes: '360 度眺望前濱沙灘與來間大橋',
        details: '外觀仿龍宮設計，是來間島的至高點，景色極具張力。'
      },
      {
        time: '14:30',
        title: '下午茶：PaniPani',
        type: 'food',
        mapCode: '310 250 156*33',
        notes: '享受芒果果汁與椰子奶冰沙',
        details: '超人氣的沙地沙龍風格咖啡店，非常適合在此享受午後消暑飲品。'
      },
      {
        time: '15:30',
        title: 'Nagamahama beach 散步',
        type: 'attraction',
        mapCode: '310 250 120*11',
        notes: '漫步來間島安靜的西海岸沙灘',
        details: '此沙灘隱密幽靜，沙子柔軟，非常適合吹海風與欣賞海景。'
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
        title: '公寓自炊晚餐',
        type: 'food',
        notes: '烹煮純素料理，享用宮古島新鮮芒果',
        details: '利用買好的日本咖哩與豆腐蔬菜，做出 100% 安心且溫馨的自炊晚餐。'
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
        title: '下午茶防踩雷 (PaniPani)',
        content: '咖啡店的點心熱壓吐司等可能抹有大蒜醬或夾火腿、洋蔥。建議主攻椰奶與芒果汁等純素飲料，避免點鹹食。',
        safetyRating: 3
      },
      {
        title: '重要：自備明日 (Day 4) 出海午餐',
        content: '明日阻礙重重的出海行程，船家提供的便當無素食。請在今日 AEON 大採購時買好純素飯糰、香蕉、麵包，或在自炊時多做一份豆腐三明治帶上船。',
        safetyRating: 5
      }
    ],
    educationalNotes: [
      '夜遊行政提醒：夜間探索園區完全沒有路燈，且蚊蟲繁多，全家務必換穿長袖薄外衣、長褲、運動鞋（嚴禁拖鞋與涼鞋），並在 19:45 前在房間完成如廁。',
      '蔡老師教學連結：伊姆哥亞海濱公園 (Ingya Marine Garden) 是天然的封閉海灣。今晚夜遊帶領孩子在黑暗中觀察夜行性底棲與陸生生物，與 Day 5 中午的白天生態進行對照。'
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
        time: '15:30',
        title: '下午茶點心：Blue Seal 冰淇淋 (久貝店)',
        type: 'food',
        mapCode: '310 452 355*00',
        notes: '調整時間！在傍晚喝咖啡前，先享用消暑冰淇淋，避免晚餐後吃甜食',
        details: '位於久貝店，推薦紅芋、鹽金楚糕等在地限定口味。將此行程移至下午，能讓晚上的腸胃更無負擔。'
      },
      {
        time: '16:15',
        title: '咖啡時光：coffee shop Majya',
        type: 'food',
        mapCode: '310 453 252*44',
        notes: '享受職人現沖的高質感手沖黑咖啡',
        details: '這是一間非常精緻的手沖咖啡館，享受熱騰騰或冰涼的現沖黑咖啡，能迅速恢復浮潛大消耗體力後的精神。'
      },
      {
        time: '17:15',
        title: '返回 Hotel Miyakojima 休息',
        type: 'hotel',
        notes: '短暫睡覺或休息補眠'
      },
      {
        time: '18:30',
        title: '晚餐：DOUG\'S BURGER',
        type: 'food',
        mapCode: '310 452 465*00',
        notes: '點選招牌大香菇植物肉堡，必須要求「去洋蔥」',
        details: '宮古島著名的美式漢堡，提供植物肉與厚實大香菇結合的素食漢堡。'
      }
    ],
    vegTips: [
      {
        title: '出海午餐提醒',
        content: '切勿寄望船家提供的便當。請在船上享用昨日在 AEON 準備的純素豆腐三明治、海苔飯糰與香蕉。',
        safetyRating: 5
      },
      {
        title: '晚餐防踩雷：DOUG\'S BURGER',
        content: '請點選專屬的 "Doug\'s Veggie Burger"。點餐時務必嚴格要求「去洋蔥(タマネギ抜き)」。薯條與洋蔥圈因與海鮮共用炸油鍋，若嚴格介意者請避免點油炸副餐。',
        safetyRating: 5
      }
    ]
  },
  {
    day: 5,
    dayOfWeek: '週五',
    theme: '海陸多重浮潛挑戰、黃金溫泉舒壓與健康精緻素食夜',
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
        title: 'Aragusuku Beach 新城海岸浮潛',
        type: 'attraction',
        mapCode: '310 326 777*00',
        notes: '調整回歸！清晨極常有海龜出沒的珊瑚礁海灘，進行晨潛',
        details: '與東平安名岬距離僅 10 分鐘車程。早上水面平靜、遊客稀少，是極高機率與野生海龜近距離共游的浮潛天堂。'
      },
      {
        time: '08:15',
        title: '返回 Hotel Miyakojima 盥洗、享用早餐與補眠',
        type: 'hotel',
        notes: '盥洗更衣，補眠休息，並利用廚房快速準備「無五辛純素便當」'
      },
      {
        time: '10:15',
        title: '抵達下一個集合地點：シギライフーチ (Shigira Beach) 停車場',
        type: 'transport',
        mapCode: '310 160 300*11',
        notes: '請提早 15 分鐘前報到，準備 Klook 浮潛行程'
      },
      {
        time: '10:30',
        title: 'Klook 海龜和珊瑚礁浮潛體驗 (至 13:00)',
        type: 'activity',
        notes: '重要行程！由專業導遊帶領 10:30 準時下水',
        details: '正午陽光直射，海水通透度最高，呈現如果凍般的果凍海，與海龜合照效果最好。行程附帶免費水下照片影片拍攝。'
      },
      {
        time: '13:00',
        title: '享用手作純素便當與盥洗整理',
        type: 'food',
        notes: '在車上或海灘旁享用自備便當，隨後前往 Ingya Marine Garden'
      },
      {
        time: '14:00',
        title: 'Ingya Marine Garden 浮潛 (至 15:30)',
        type: 'activity',
        mapCode: '310 318 644*00',
        notes: '在平靜如泳池的天然內灣浮潛',
        details: '補足浮潛目的！此處被岬角包圍，水流平靜，有大量熱帶魚與珊瑚礁，是非常安全的天然生態池。',
        teachingLink: '「跨時空生態對照教材」：中午在此進行浮潛，引導孩子親身體驗白天的清澈海水、珊瑚礁形態與魚類活動，並與 Day 3 晚上的「夜間叢林探索」做生態對照，深刻體會生態在晝夜之間的奇妙轉變。'
      },
      {
        time: '15:30',
        title: 'シギラ (Shigira) 黃金溫泉',
        type: 'attraction',
        mapCode: '310 160 523*00',
        notes: '浸泡熱帶風露天溫泉與戲水池泡湯',
        details: '日本最南端天然溫泉。全家可同穿泳衣在超大溫泉游泳池戲水，徹底洗去浮潛疲勞。'
      },
      {
        time: '17:30',
        title: '晚餐：natural protein',
        type: 'food',
        mapCode: '310 453 194*44',
        notes: '提供健康蔬食餐點與奶昔，週三公休 (今日有營業，注意營業至 18:00)',
        details: '提供健康的素食菜單與美味奶昔，因營業至 18:00，在此享用早期晚餐或外帶回公寓。'
      },
      {
        time: '21:00',
        title: '東平安名岬看銀河',
        type: 'attraction',
        mapCode: '310 215 529*66',
        notes: '前往最東端，肉眼欣賞夏季銀河',
        details: '夜晚幾乎零光害，可以觀賞跨越星空的壯麗銀河，畫下完美收官夜。'
      }
    ],
    vegTips: [
      {
        title: '中午飲食防踩雷 (Shigira 周邊)',
        content: 'Shigira 度假村周邊皆為高檔海鮮與燒肉餐廳，完全沒有安全的純素選項。今日中午必須享用早上預先做好的自備餐點，在海邊野餐。',
        safetyRating: 5
      },
      {
        title: '晚餐推薦：natural protein',
        content: 'V2 版本修改！避開高風險海鮮餐廳，改吃健康的蔬食輕食店（週五有營業）。注意營業時間至 18:00，需在 17:30 左右抵達。',
        safetyRating: 5
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
        time: '10:30',
        title: 'Blue Turtle Farm Mango Cafe',
        type: 'food',
        mapCode: '310 451 888*44',
        notes: '品嚐芒果甜點與新鮮現打芒果汁',
        details: '芒果農場直營的網美甜點店，營業時間 10-17 時。在回台前享受純粹的宮古島芒果美味。'
      },
      {
        time: '11:15',
        title: '午餐：Cafe 373 & Spices',
        type: 'food',
        mapCode: '310 454 112*00',
        notes: '享用南國香料風斯里蘭卡素食咖哩，週六有營業',
        details: '提供充滿香氣、溫和美味的斯里蘭卡蔬食咖哩，為本次旅程畫下完美句點。'
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
        content: '宮古島黑糖是 100% 純素安全的伴手禮。採購其他餅乾點心時，請注意是否含有牛脂、豚脂或吉利丁(Gelatin)。',
        safetyRating: 4
      }
    ]
  }
];
