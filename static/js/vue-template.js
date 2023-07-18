const {createApp} = Vue

createApp({
    data() {
        return{
            email: '',
            ifSubscription: '订阅',
            isDisabled: false
        }
    },
    methods: {
        subscription() {
            console.log(this.email);
            this.ifSubscription = "已订阅"
            this.isDisabled = true
        }
    }
}).mount('#home')
createApp({
    data() {
        return {
            categoryList: [
                {
                    title: '散文的口头叙事文学',
                    desc: '神话、传说和各种民间故事、笑话。',
                    imgSrc: 'static/picture/mythology.png',
                },
                {
                    title: '韵文的口头文学样式',
                    desc: '民间诗歌（史诗、民歌）、谚语、谜语',
                    imgSrc: 'static/picture/literature.png',
                },
                {
                    title: '综合叙事、抒情、歌舞',
                    desc: '具有较多表演成分的民间说唱、民间戏曲。',
                    imgSrc: 'static/picture/national_essence.png',
                },

            ],
            featuredList: [
                {
                    title: '木牛山传说',
                    desc: '木牛山位于卧龙镇境内的隆中山北麓，山势平缓，林木葱郁，是一座与三国传说故事有关联的文化之山。',
                    imgSrc: 'static/picture/muniushan.png',
                },
                {
                    title: '九天玄女洞传说故事',
                    desc: '九天玄女洞（又称九天娘娘洞），位于古隆中西13公里处的襄城区卧龙镇青山村境内，海拔约200米，为天然的喀斯特地貌形成的溶洞。据传说，远古时期的九天娘娘在此洞内修炼成仙，故而得名。',
                    imgSrc: 'static/picture/xuan_nv_cave.png',
                },
                {
                    title: '尖山和团山传说',
                    desc: '尖山和团山，位于襄城区卧龙镇回龙村境内，两山的形成，起源于真武年间，有一个神奇的传说故事。',
                    imgSrc: 'static/picture/jianshan.png',
                },
                {
                    title: '黄家湾传说',
                    desc: '黄家湾是一个悠长而又深远的山湾，此地有九冲十八洼，总面积约9.8平方公里。黄家湾是三国名相诸葛亮的岳父、沔南名士黄承彦的故里，诸葛亮夫人—华夏才女黄月英的出生地。故曰黄家湾。',
                    imgSrc: 'static/picture/huangjiawan.png',
                },
                {
                    title: '张仲景诊王仲宣的故事',
                    desc: '襄阳是楚文化的发源地，也是三国文化的源头。120回《三国演义》有32回与襄阳有关。至今在襄阳境内，仍然留存的三国遗址有近50多处，如荆州古治遗址、古隆中、王粲井、马跃檀溪、仲宣楼等。至于在襄阳民间的传说故事，像“三顾茅庐”“隆中对策”“水淹七军”“刮骨疗毒”“登楼赋”等更是不计其数。其中“张仲景诊王仲宣的故事”因为涉及两个特殊的人，不仅为襄阳人津津乐道，更是辐射周边，广为流传。',
                    imgSrc: 'static/picture/zhangzhong.png',
                }
            ]
        }
    }
}).mount('#folk-literature')
createApp({
    data() {
        return {
            directoryList: [
                {
                    counter: 1557,
                    suffix: '项',
                    title: '非遗代表性项目'
                },
                {
                    counter: 167,
                    suffix: '项',
                    title: '民间文学类'
                },
                {
                    counter: 189,
                    suffix: '项',
                    title: '传统音乐类'
                },
                {
                    counter: 144,
                    suffix: '项',
                    title: '传统舞蹈类'
                },
                {
                    counter: 171,
                    suffix: '项',
                    title: '传统戏剧类'
                },
                {
                    counter: 145,
                    suffix: '项',
                    title: '曲艺类'
                },
                {
                    counter: 109,
                    suffix: '项',
                    title: '传统体育、游艺与杂技类'
                },
                {
                    counter: 139,
                    suffix: '项',
                    title: '传统美术类'
                },
                {
                    counter: 287,
                    suffix: '项',
                    title: '传统技艺类'
                },
                {
                    counter: 23,
                    suffix: '项',
                    title: '传统医药类'
                },
                {
                    counter: 183,
                    suffix: '项',
                    title: '民俗类'
                },
            ]
        }
    }
}).mount('#directory')
createApp({
    data() {
        return {
            categoryList: [
                {
                    title: '宫廷音乐',
                    desc: '中国传统音乐可以分为四类：民间音乐、文人音乐、宗教音乐、宫廷音乐，其中地位最高的一类是宫廷音乐。下面趣历史小编给大家带来了相关内容，和大家一起分享。\n' +
                        '\n' +
                        '　　宫廷音乐不仅表现在它身居庙堂之高，只为统治者的宴会和朝廷仪式而演奏，还表现在它歌功颂德、祭祀祖先、娱乐君王及教化人民的作用上，这都是其他音乐无法望其项背的。此外宫廷音乐风格优美典雅，节奏缓慢，讲究和谐，富有中和之美。',
                },
                {
                    title: '宗教音乐',
                    desc: '宗教音乐，又称圣乐。它既传达上帝给人们的启示，又表现信徒对上帝的崇敬、赞美、信靠和祈求。宗教音乐是欧洲艺术音乐的源头。在18世纪以前，欧洲音乐主要以教会音乐为主，而教会音乐则以圣咏为主。\n' +
                        '圣咏是指单声调，没有固定节拍的基督教歌曲，分东方圣咏和西方圣咏，前者例如亚美尼亚圣咏，拜占庭圣咏等，后者例如安布罗西圣咏，格里高利圣咏等。18世纪启蒙时期以后，音乐开始向世俗化发展，进入蓬勃发展的时期。\n' +
                        '但教会音乐仍然占据着中心地位。从巴洛克时期、古典时期到浪漫时期，众多的音乐大师们给我们留下了极其丰富的宗教音乐遗产。'
                },
                {
                    title: '文人音乐',
                    desc: "文人音乐以文人为创作主体，以文弄乐。因此与传统的宫廷音乐等相比，其更具文学内涵。它以音乐的旋律将古代文人思想情感、个人修养以及对人生的理解扩纳其中。因此，不论历史如何演变文人音乐始终在我国音乐史上占有一席之地。\n" +
                        "\n" +
                        "在文人音乐的发展史上，唐代文人音乐因其富有的成长环境，其音乐发展，形成了独树一帜的自我风格。同时唐代音乐文化体系的精华非文人音乐莫属。",

                },
                {
                    title: '民间音乐',
                    desc: "民间音乐（Folk music），又称民俗音乐、民间短篇诗歌等，简称民谣、民歌、民乐，于国际民间音乐协会（IFMC）之解释定义为“经过口传过程发展起来的普罗大众音乐”，也就是该音乐散布过程，纯粹是由演奏者或音乐接收者记录教习，并亲自相传所得。\n" +
                        "民间音乐指由广大人民群众在漫长历史过程中，通过口口相传而流传下来的音乐形式和音乐作品。它无论从使用的乐器、演奏的乐谱还是演奏形式，都有着极强的民族性和地域性，与当地的民俗习惯相溶合，与当地的民俗活动相结合。"
                },
            ]
        }
    }
}).mount('#music')
createApp({
    data(){
        return{
            inclusionList: [
                {
                    title: '龙舞',
                    desc: '龙舞，也称“舞龙”，民间又叫“耍龙”、“耍龙灯”或“舞龙灯”，在全国各地和各民族间广泛分布，其形式品种的多样，是任何其他民间舞都无法比拟的。',
                    imgSrc: 'static/picture/dragon_dance.png'
                },
                {
                    title: "芦笙舞",
                    desc: "芦笙舞是苗族人民举行祭祖和节日、喜庆活动时所跳的传统民间舞蹈，源于古代播种前祈求丰收、收获后感谢神灵赐予和祭祀祖先的仪式性舞蹈，广泛流行于苗族地区。",
                    imgSrc: "static/picture/lushengwu.png",
                },
                {
                    title: "秧歌",
                    desc: "秧歌是中国（主要在北方地区）广泛流传的一种极具群众性和代表性的民间舞蹈的类称，不同地区有不同称谓和风格样式。在民间，对秧歌的称谓分为两种：踩跷表演的称为“高跷秧歌”，不踩跷表演的称为“地秧歌”。近代所称的“秧歌”大多指“地秧歌”。",
                    imgSrc: "static/picture/yangge.png",
                },
                {
                    title: "狮舞",
                    desc: "狮舞又称“狮子舞”、“狮灯”、“舞狮”、“舞狮子”，是中国传统百戏杂耍的重要组成部分。狮舞有着悠久的历史，它普遍流行于中国汉族地区，在春节等节日庆典活动中频繁出现，通过热闹欢快的表演寄托中国人祈求吉祥、消除灾害的美好愿望",
                    imgSrc: "static/picture/lion_dance.png",
                },

            ]
        }
    }
}).mount('#dance')
createApp({
    data() {
        return {
            categoryList: [
                {
                    title: '京剧',
                    date: '道光二十年（1840年）',
                    desc: '清代乾隆五十五年（1790年）起，原在南方演出的三庆、四喜、春台、和春 等多以安徽籍艺人为主的四大徽班陆续进入北京，与来自湖北的汉调艺人合作，同时接受了昆曲、秦腔的部分剧目、曲调和表演方法，又吸收了一些地方民间曲调，通过不断的交流、融合，最终形成京剧。 ',
                    url: 'https://baike.baidu.com/item/%E4%BA%AC%E5%89%A7/75719',
                    imgSrc: "static/picture/jingju.png"
                },
                {
                    title: '豫剧',
                    date: '明朝中后期',
                    desc: '豫剧，是中国五大戏曲剧种之一、中国第一大地方剧种，是主要流行于河南省、河北、山东，流传中国各地的传统戏剧，国家级非物质文化遗产之一。',
                    url: 'https://baike.baidu.com/item/%E8%B1%AB%E5%89%A7/112631',
                    imgSrc: "static/picture/yuju.png"
                },
                {
                    title: '越剧',
                    date: '1906年',
                    desc: '越剧（汉语拼音为yuèjù，英语为Yue Opera）——中国第二大剧种，有第二国剧之称，又被称为是“流传最广的地方剧种” ，有观点认为是“最大的地方戏曲剧种”，在国外被称为“中国歌剧”。 亦为中国五大戏曲剧种（依次为京剧、越剧、黄梅戏、评剧、豫剧）之一。发源于浙江嵊州，发祥于上海，繁荣于全国，流传于世界，在发展中汲取了昆曲、话剧、绍剧等特色剧种之大成，经历了由男子越剧到女子越剧为主的历史性演变。',
                    url: 'https://baike.baidu.com/item/%E8%B6%8A%E5%89%A7/331690',
                    imgSrc: "static/picture/yueju.png"
                },
                {
                    title: '黄梅戏',
                    date: '唐朝',
                    desc: '黄梅戏与京剧、越剧、评剧 、豫剧并称“中国五大戏曲剧种”，也是安徽省的主要地方戏曲剧种，湖北、江西、福建、浙江、江苏、香港、台湾等地亦有黄梅戏的专业或业余的演出团体，受到广泛的欢迎。',
                    url: 'https://baike.baidu.com/item/%E9%BB%84%E6%A2%85%E6%88%8F/2677',
                    imgSrc: "static/picture/huangmeixi.png"
                },
            ]
        }
    }
}).mount('#traditional-opera')
createApp({
    data() {
        return {
            categoryList: [
                {
                    title: '牌子曲类',
                    desc: '以曲牌为基本音乐材料，或单支曲牌反复演唱、或多个曲牌联缀而成，用以说唱故事的曲种。流传于全国各地，如北京单弦牌子曲、山东八角鼓、河南曲子、陕西曲子、兰州鼓子、青海平弦、扬州清曲、江西清音、福建南音、四川清音、湖北小曲、长阳南曲、湖南丝弦、广西文场、东北三省的二人转等。 ',
                    url: 'https://baike.baidu.com/item/%E4%BA%AC%E5%89%A7/75719',
                    imgSrc: "static/picture/jingju.png"
                },
                {
                    title: '弹词类',
                    desc: '主要流行于中国南方。演唱者兼奏小三弦或琵琶等乐器，自弹自唱。[4]是明清以来发展颇盛的曲种。如江苏、上海、浙江的苏州弹词，江苏的扬州弹词、启海弹词，浙江的四明南词、绍兴平湖调，福建南词，广东木鱼歌，长沙弹词等。',
                    url: 'https://baike.baidu.com/item/%E8%B1%AB%E5%89%A7/112631',
                    imgSrc: "static/picture/yuju.png"
                },
                {
                    title: '鼓曲类',
                    desc: '鼓曲类曲种的音乐为板腔体结构。唱腔以语言为基础，依情走腔，依字行腔，一曲多用，板式变化多样，刚柔并济、韵味浓郁，演员的表演写意传神，雅俗共赏，受到广大群众的喜爱。',
                    url: 'https://baike.baidu.com/item/%E8%B6%8A%E5%89%A7/331690',
                    imgSrc: "static/picture/yueju.png"
                },
                {
                    title: '琴书类',
                    desc: '琴书类曲种音乐的结构既有曲牌联缀，也有曲牌与板腔的混合体。演唱形式有的为一人站唱、有的为双人和多人坐唱，还有的为分角拆唱（清唱）。',
                    url: 'https://baike.baidu.com/item/%E9%BB%84%E6%A2%85%E6%88%8F/2677',
                    imgSrc: "static/picture/huangmeixi.png"
                },
                {
                    title: '道情类',
                    desc: '因源于道歌（即道士说唱道情故事）而得名。起源可追溯到唐代《九真》、《承天》等道曲；又因多采用渔鼓、简板为伴奏乐器，故亦叫渔鼓、竹琴或道情渔鼓。流传地域甚广，在中国南北各地流传的此类曲种达几十种。',
                    url: 'https://baike.baidu.com/item/%E9%BB%84%E6%A2%85%E6%88%8F/2677',
                    imgSrc: "static/picture/huangmeixi.png"
                },
                {
                    title: '时调小曲类',
                    desc: '天津时调、上海说唱、扬州清曲、江西清音、赣州南北词、湖北小曲、襄阳小曲、长阳小曲、湖南丝弦、祁阳小调、四川清音、盘子等。',
                    url: 'https://baike.baidu.com/item/%E9%BB%84%E6%A2%85%E6%88%8F/2677',
                    imgSrc: "static/picture/huangmeixi.png"
                },
                {
                    title: '走唱类',
                    desc: '十不闲莲花落、二人转、宁波走书、凤阳花鼓、车灯等。',
                    url: 'https://baike.baidu.com/item/%E9%BB%84%E6%A2%85%E6%88%8F/2677',
                    imgSrc: "static/picture/huangmeixi.png"
                },
                {
                    title: '杂曲类',
                    desc: '无锡评曲、昭兴莲花落、锦歌、褒歌、芗曲、江西莲花落、潮州歌、粤曲、龙船歌、零零落、台湾仔歌、粤东渔歌等。',
                    url: 'https://baike.baidu.com/item/%E9%BB%84%E6%A2%85%E6%88%8F/2677',
                    imgSrc: "static/picture/huangmeixi.png"
                },

            ]
        }
    }
}).mount('#quyi')
createApp({
    data() {
        return {
            categoryList: [
                {
                    title: '传统体育',
                    desc: '传统体育是由中华民族人民世代实践、产生、发展并流传至今的体育，它是一种复杂的社会文化现象，是一种有意识、有目的、有组织的社会活动，民族传统体育文化是民族传统文化的亚分支，已成为中华民族宝贵的文化遗产。在中国传统体育项目中，既有广为流传的体育项目，也有特色鲜明具有丰富民族风格和地方特色的项目。',
                },
                {
                    title: '传统游艺',
                    desc: '游艺，是指玩游戏或从事娱乐活动。在漫长的中国历史上形成了游艺民俗。游艺民俗是一种以消遣休闲、调剂身心为主要目的，而又有一定模式的民俗活动。它是人类在具备起码的物质生存条件基础上，为满足精神的需求而进行的文化创造。从简单易行、随意性较强的游戏，到竞技精巧、有严格规则的竞技；从因时因地、自由灵便的戏耍，到配合各种特殊需要的综合表演，都属于游艺民俗的范围。包含了游戏民俗、竞技民俗、综合表演民俗等。',

                },
                {
                    title: '传统杂技',
                    desc: '传统杂技是历史悠久的表演艺术之一，是指各种表演技艺的总称。包括口技、武术、马戏、魔术等及各种民间杂耍。'
                }
            ],
            inclusionList: [
                {
                    title: '吴桥杂技',
                    imgSrc: 'static/picture/wuqiao_acrobatics.png',
                },
                {
                    title: '少林功夫',
                    imgSrc: 'static/picture/shaolin.png',
                },
                {
                    title: '沧州武术',
                    imgSrc: 'static/picture/cangzhou_wushu.png',
                },
                {
                    title: '蹴鞠',
                    imgSrc: 'static/picture/cuju.png',
                },
            ],
            isActive: 0
        }
    },
    methods: {
        switchInclusion(i) {
            this.isActive = i
        }
    }
}).mount('#sports')
createApp({
    data() {
        return {
            categoryList: [
                {
                    title: '木版年画',
                    classification: '绘画',
                    desc: '木版年画是中国历史悠久的传统民间艺术形式，有着一千多年的历史。到了清代中晚期，民间年画达到了鼎盛阶段，发展到清代中晚期，出现了大大小小几十个产地。木版年画取材于世俗社会生活，题材无所不包，具有极高的文化价值。',
                    imgSrc: 'static/image/fine-arts/woodboard_new_year_pictures.png'
                },
                {
                    title: '内画',
                    classification: '绘画',
                    desc: '内画是我国特有的传统工艺，它的产生起源于画鼻烟壶。内画的画法是以特制的变形细笔，在玻璃/水晶、琥珀等材质的壶坯内，手绘出细致入微的画面，格调典雅、笔触精妙。',
                    imgSrc: 'static/image/fine-arts/pirture_painted_inside.png'
                },
                {
                    title: '寿山石雕',
                    classification: '雕塑',
                    desc: '寿山石雕是传统的民间雕刻艺术，以产于福州北部山区北峰的寿山石为材料，通过特殊技艺制作出供人玩赏的小型雕刻。寿山石雕技艺主要流传在福州市晋安区鼓山、岳峰镇、象园、王庄街道和寿山乡。',
                    imgSrc: 'static/image/fine-arts/shoushan_stone_carving.png',
                },
                {
                    title: '临夏砖雕',
                    classification: '雕塑',
                    desc: '临夏县境内出土的金代大定十五年进义校尉王吉砖室墓中的砖雕饰物，是以土窑青砖为材料，据此可以判断临夏砖雕实源于秦汉，是当时民间木雕技艺的延伸。明、清两代是临夏砖雕的兴盛时期，1949年后曾一度冷落，近二十年又得以复兴。',
                    imgSrc: 'static/image/fine-arts/linxia_brick_carving.png'
                },
                {
                    title: '象牙雕刻',
                    classification: '工艺美术',
                    desc: '象牙雕刻是指以象牙为材料的雕刻工艺及其成品，象牙雕刻因牙材自身的品质而具有高洁的美感，成为中国特种工艺美术的一部分。以北京和广州的象牙雕刻为代表。',
                    imgSrc: 'static/image/fine-arts/ivory_carving.png',
                },
                {
                    title: '岫岩玉雕',
                    classification: '工艺美术',
                    desc: '岫岩玉雕是以辽宁省岫岩地区为中心而发展起来的一项民间玉石雕刻工艺',
                    imgSrc: 'static/image/fine-arts/xiuyan_jade_carving.png'
                },
                {
                    title: '剪纸',
                    classification: '工艺美术',
                    desc: '剪纸艺术是最古老的中国民间艺术之一，作为一种镂空艺术，它能给人以视觉上以透空的感觉和艺术享受。剪纸用剪刀将纸剪成各种各样的图案，如窗花、门笺、墙花、顶棚花、灯花等，包含中阳剪纸、广东剪纸等。',
                    imgSrc: 'static/image/fine-arts/paper_cuttings.png'
                },
                {
                    title: '刺绣',
                    classification: '工艺美术',
                    desc: '刺绣是针线在织物上绣制的各种装饰图案的总称。刺绣分丝线刺绣和羽毛刺绣两种。就是用针将丝线或其他纤维、纱线以一定图案和色彩在绣料上穿刺，以绣迹构成花纹的装饰织物。它是用针和线把人的设计和制作添加在任何存在的织物上的一种艺术。刺绣是中国民间传统手工艺之一，在中国至少有二三千年历史。',
                    imgSrc: 'static/image/fine-arts/embroidery.png',
                },
            ],
            isActive: 0
        }
    },
    methods: {
        switchInclusion(i) {
            this.isActive = i
        }
    }
}).mount('#fine-arts')
createApp({
    data() {
        return {
            categoryList: [
                {
                    title: '首页',
                    src: '#home',
                },
                {
                    title: '民间文学',
                    src: '#folk-literature',
                },
                {
                    title: '传统音乐',
                    src: '#music',
                },
                {
                    title: '传统舞蹈',
                    src: '#dance',
                },
                {
                    title: '传统戏剧',
                    src: '#traditional-opera',
                },
                {
                    title: '曲艺',
                    src: '#quyi',
                },
                {
                    title: '传统体育',
                    src: '#sports',
                },
                {
                    title: '传统美术',
                    src: '#fine-arts',
                },
                {
                    title: '传统技艺',
                    src: '#skill',
                },
                {
                    title: '传统医药',
                    src: '#medicine',
                },
                {
                    title: '民俗',
                    src: '#folk-custom'
                }
            ]
        }
    }
}).mount('#header')
createApp({
    data() {
        return {
            categoryList: [
                {
                    title: '首页',
                    src: '#home',
                },
                {
                    title: '民间文学',
                    src: '#folk-literature',
                },
                {
                    title: '传统音乐',
                    src: '#music',
                },
                {
                    title: '传统舞蹈',
                    src: '#dance',
                },
                {
                    title: '传统戏剧',
                    src: '#traditionalOpera',
                },
                {
                    title: '曲艺',
                    src: '#quyi',
                },
                {
                    title: '传统体育',
                    src: '#sports',
                },
                {
                    title: '传统美术',
                    src: '#fine-arts',
                },
                {
                    title: '传统技艺',
                    src: '#skill',
                },
                {
                    title: '传统医药',
                    src: '#medicine',
                },
                {
                    title: '民俗',
                    src: '#folk-custom'
                }
            ]
        }
    }
}).mount('#footer')
createApp({
    data() {
        return {
            categoryList: [
                {
                    title: '陶瓷',
                    nickname: '与“中国”同名',
                    imgSrc: 'static/image/skill/ceramics.png',
                    src: '',
                    desc: '陶瓷，用陶土和瓷土为原料，经配料、成型等流程制成。中国是世界上最早应用陶器的国家之一，而中国瓷器因其极高的实用性和艺术性备受世人的推崇。如今，在陶瓷手艺人们的共同努力下，许多失传的技艺重新得到传承。',
                },
                {
                    title: '髹 [xiū] 漆',
                    nickname: '中国人的骄傲',
                    imgSrc: 'static/image/skill/lacquering.png',
                    src: '',
                    desc: '中国是世界上最早发现并使用天然漆的国家，最早的漆器是在七千年前河姆渡遗址中发现的木胎朱漆碗，髹漆工艺无疑是中华民族的骄傲和自豪。从古至今，中国漆器工艺形成了多个流派，其中福州脱胎漆器更是中国传统工艺的“三宝”之一，其技艺值得我们去传承。',
                },
                {
                    title: '木雕',
                    nickname: '最亲民的手工艺',
                    imgSrc: 'static/image/skill/woodcarving.png',
                    src: '',
                    desc: '木雕是雕塑的一种，早在七千多年前的河姆渡文化时期就出现木雕鱼，到了唐代，木雕工艺更是达到了发展的巅峰。历经数千年传承的木雕工艺依然需要年轻血液去传承和保护。',
                },
                {
                    title: '景泰蓝',
                    nickname: '国礼专业户',
                    imgSrc: 'static/image/skill/cloisonne.png',
                    src: '',
                    desc: '景泰蓝制作技艺是北京市的地方传统手工技艺。外传珐琅技艺和本土金属珐琅工艺相结合的产物。明清两代，御用监和造办处均在北京设有专为皇家服务的珐琅作坊，技艺从成熟走向辉煌。近代以来，社会动荡不安，北京景泰蓝技艺曾一度衰微。1949年后，因国家采取积极的保护、扶持政策，这一古老技艺得以迅速恢复和发展。',
                },
                {
                    title: '玉雕',
                    nickname: '中国人的精神图腾',
                    imgSrc: 'static/image/skill/jade_carving.png',
                    src: '',
                    desc: '玉雕是玉石经加工雕琢成的工艺品，是中国独有的技艺，具有悠久的发展历史和鲜明的时代特征，在不同的朝代中玉雕有着不同的造型与特色。玉作为中国人的精神图腾，玉雕工艺在民间的发展更为广泛，也更好传承。',
                },
                {
                    title: '刺绣',
                    nickname: '走出国门的手工艺',
                    imgSrc: 'static/image/skill/embroidery.png',
                    src: '',
                    desc: '刺绣是用绣针引彩线，将设计的花纹在纺织品上刺绣运针，以绣迹构成花纹图案的一种工艺，在中国已有两千多的历史。如今，用刺绣技艺制成的丝绸工艺品成为了中国传统手工艺的代表。',
                },
                {
                    title: '中国结',
                    nickname: '最中国的手工艺',
                    imgSrc: 'static/image/skill/chinese_knotting.png',
                    src: '',
                    desc: '中国结是中国特有的手工编织工艺品，最早来自旧石器时代的缝衣打结，后来发展至汉朝的仪礼记事，再演变至今的装饰手艺。一个小小的中国结，既体现了中国人的颜色偏好，又体现了民间艺人的创造力。',
                },
                {
                    title: '剪纸',
                    nickname: '记载历史的“活化石"',
                    imgSrc: 'static/image/skill/paper_cuttings.png',
                    src: '',
                    desc: '中国最早的剪纸作品是北朝时期的五幅团花剪纸，到了唐代剪纸处于大发展时期，南宋时期更是出现了以剪纸为职业的行业艺人。剪纸是中国最为流行的民间手工艺之一，凝聚着中华民族几千年来的历史和文化。',
                },
                {
                    title: '琉璃',
                    nickname: '最珍贵的手工艺',
                    imgSrc: 'static/image/skill/glazed_glaze.png',
                    src: '',
                    desc: '古时制作琉璃困难，使得当时人们把琉璃看得比玉器还要珍贵。由于其色彩流云漓彩，品质晶莹剔透，所以一直属于皇室专用，在民间流传的琉璃制造技法甚少。对于如此珍贵又濒临失传的技艺，更值得去保护和传承。',
                },
                {
                    title: '竹编',
                    nickname: '最古老的手工艺',
                    imgSrc: 'static/image/skill/bamboo_weaving.png',
                    src: '',
                    desc: '竹编最早在新石器时代出现，那时人们为了将剩余的食物存放起来，就将植物的枝条编成篮、筐等器皿，到了明清时期，竹编工艺得到了全面的发展。如今，竹编不仅具有实用价值，还富有艺术观赏性。',
                },
            ],
            problemList: [
                {
                    title: '与当代中国文化之间割裂现象比较严重',
                    desc: '全球化的深入发展和我国对外开放的深化客观上给中华传统文化带来相当严重的冲击。各种外来文化特别是西方文化的影响已经深入到社会经济和文化生活的方方面面，严重冲击了中华传统文化的价值观念、文化结构和文化模式。尤其在青少年人群中，存在片面追求西方文化、忽视本民族文化的现象。'
                },
                {
                    title: '需要的深入系统的挖掘研究',
                    desc: '缺乏结合当代文化需求对中华传统文化全面、科学、系统的挖掘。长期以来，我们在传统文化挖掘方面缺乏科学整体的规划，研究梳理工作各执一派，学贯中西、通古知今的新一代传统文化研究大家非常少。'
                },
                {
                    title: '活化利用水平有待提高',
                    desc: '对优秀传统文化的利用不足，部分地方政府对做好新形势下优秀传统文化传承保护的重要性认识不足，创新之举不多，将文化遗产保护与经济社会发展相结合的自觉性不够，存在“死保死守，保而不用”的现象：部分地区的珍贵文物没有得到有效展示，博物馆策展布展能力较弱；有的地方非物质文化遗产项目没有得到及时发掘整理和合理利用，有些项目展示也还局限于节庆、会展活动，深度开发利用不够。'
                },
                {
                    title: '传承与弘扬体制机制有待进一步完善',
                    desc: '文化遗产保护理念薄弱。各级政府和全社会对传统文化保护的重要性认识不足，为经济发展和城市建设规划牺牲文物文化的现象时有发生。'
                },

            ]

        }
    }
}).mount('#skill')
createApp({
    data() {
        return {
            isActive: 0,
            categoryList: [
                {
                    title: '中医药',
                    desc: '包括汉族和少数民族医药在内的我国各民族医药的统称，反映了中华民族对生命、健康和疾病的认识，具有悠久历史传统和独特理论及技术方法的医药学体系',
                    icon: 'fa fa-bolt',
                    imgSrc: 'static/image/medicine/traditional_chinese_medicine.png',
                },
                {
                    title: '民族医药',
                    desc: '中国少数民族的传统医药。经过30年的发掘整理，已有近40个少数民族发掘整理出版了本民族传统医药的代表性著作。',
                    icon: 'fa fa-bolt',
                    imgSrc: 'static/image/medicine/ethnomedicine.png',
                },
                {
                    title: '民间医药',
                    desc: '有两个概念，一是在体制上以公私来分，民间医药是指非公有制的民营医疗机构和民间医生；二是在学术上以朝野来分，民间医药是指当代中医教育体系之外不属于《黄帝内经》一脉的流散于民间的草医草药。',
                    icon: 'fa fa-bolt',
                    imgSrc: 'static/image/medicine/folk_medicine.png',
                }
            ]
        }
    },
    methods: {
        switchInclusion(i) {
            this.isActive = i
        }
    }
}).mount('#medicine')
createApp({
    data() {
        return {
            categoryList: [
                {
                    title: '释义',
                    desc: '⑴人民的风俗习惯。清朝薛福成《创开中国铁路议疏》：“民俗既变，然后招商承办……可以渐推渐广，渐续渐远。”\n' +
                        '⑵民众的生活、生产、风尚习俗等情况。《管子·正世》：“古之欲正世调天下者，必先观国政，料事务，察民俗，本治乱之所生，知得失之所在，然后从事。”\n' +
                        '民俗文化是流动的、发展的、它在社会的每个阶段都会产生变异，并在变异中求得生存和发展。当中国社会处于经济转型的关键时刻，民众思想观念和生活方式的转变必然表现为民俗文化的变化上，这是不以人的意志为转移的客观现实。寻找民俗文物，留下民众生活的历史，已成为一个严肃的课题。中国是一个历史悠久的民俗文化大国，民俗文化不仅是历史的延续，而且还将会继续延续下去。正是这种民俗文化，在它形成和发展过程中，造就了中华民俗的精神传统和人文性格，因此弘扬中国民俗文化传统，对增强中华民族的凝聚力，有着十分重要的意义。',
                },
                {
                    title: '由来',
                    desc: '民俗是人民传承文化中最贴切身心和生活的一种文化——劳动时有生产劳动的民俗，日常生活中有日常生活的民俗，传统节日中有传统节日的民俗，社会组织有社会组织民俗，人生成长的各个阶段也需要民俗进行规范——结婚人们需要有结婚典礼或仪式来求得社会认同，在人的精神意识领域也有民俗——许多生活中的禁忌就是如此：大年三十至初二，家中不许扫地，如果进行打扫就会破坏来年的财运。',
                },
                {
                    title: '属性',
                    desc: '模式化的必定不是随意的、临时的、即兴的，而通常是可以跨越时空的，这就是民俗具有传承性、广泛性、稳定性的前提：一次活动在此时此地发生，其活动方式如果不被另外的人再次付诸实施，它就不是民俗；只有活动方式超越了情境，成为多人多次同样实施的内容，它才可能是人人相传、代代相传的民俗。另一方面，民俗又具有变异性。民俗是生活文化，而不是典籍文化，它没有一个文本，主要靠耳濡目染、言传身教的途径在人际和代际之间传承，即使在基本相同的条件下，它也不可能毫发不爽地被重复，在千变万化的生活情境中，活动主体必定要进行适当的调适，民俗也就随即发生了变化。这种差异表现为个人的，也表现为群体的，包括职业群体的、地区群体的、阶级群体的，这就出现了民俗的行业性、地区性、阶级性。如果把时间因素突出一下，一代人或一个时代对以前的民俗都会有所继承，有所改变，有所创新。这种时段之间的变化就是民俗的时代性。'
                },
                {
                    title: '分类',
                    desc: "1.物质生活民俗\n" +
                        "（1）生产民俗（农业、渔业、采掘、捕猎、养殖等物质资料的初级生产方面）\n" +
                        "（2）工商业民俗（手工业、服务业和商贸诸业等物质资料的加工服务方面）\n" +
                        "（3）生活民俗（衣、食、住、行等物质消费方面）\n" +
                        "2.社会生活民俗\n" +
                        "（1）社会组织民俗（家族、村落、社区、社团等组织方面）\n" +
                        "（2）岁时节日民俗（节期与活动所代表的时间框架）\n" +
                        "（3）人生礼俗（诞生、生日、成年、婚姻、丧葬等人生历程方面）\n" +
                        "3.精神生活民俗\n" +
                        "（1）游艺民俗（游戏、竞技、社火等娱乐方面）\n" +
                        "（2）民俗观念（诸神崇拜、传说、故事、谚语等所代表的民间精神世界）\n"
                },
                {
                    title: "研究",
                    desc: "中国传统宗教文化逐步恢复是一个有目共睹的事实。特别是解放后，尤其是文化大革命期间，遭到贬损、批判和否定的传统宗教（包括道教、佛教、民间信仰）得到了部分恢复和发展，但传统宗教的教职人员和宗教场所的数量要达到1949年以前的水平是有很困难的，虽然基督教、天主教的信教人数、教职人员和宗教场所的数量早已超越了历史上的任何时期。当代学校教育发达，科学技术迅速发展，物质生活优裕，世俗欲望膨胀，信仰宗教的人群在缩小，这也是一个不争的事实。不过也有例外，譬如，对财神的崇拜，近些年随着经济社会的快速发展，财神信仰出现了前所未有的繁荣景象，道教宫观有财神殿，有些佛教寺庙内也增设了财神殿；各地也出现了不少独立的财神庙。"
                },
                {
                    title: "禁忌",
                    desc: "由于古代的人们对大自然的许多现象无法理解，同时在生活中又有许多偶然事件会对人们的命运产生重大影响，当时的人们无法解释这些现象 为了避免自己的行为带来不好的结果，人们在生活中形成了许多的禁忌 这些禁忌或许与当前的生活习俗已经不相适应．并且带有浓厚的封建迷信色彩，却体现出人们对健康和幸福生活的渴望。"
                },
                {
                    title: "涉及内容",
                    desc: "民俗涉及的内容很多，它所研究的领域仍在不断的拓展，就今日民俗学界公认的范畴而言，民俗包含以下几大部分：\n" +
                        "1 生产劳动民俗\n" +
                        "2 日常生活民俗\n" +
                        "3 社会组织民俗\n" +
                        "4 岁时节日民俗\n" +
                        "5 人生仪礼\n" +
                        "6 游艺民俗\n" +
                        "7 民间观念\n" +
                        "8 民间文学\n",
                },
                {
                    title: "著作",
                    desc: "随着社会的发展，民俗文化的保护和传承工作日益受到人们的重视，中国民俗学会自1983年5月成立以来，致力于调查、搜集、整理、研究我国各民族的民俗，为建立具有中国特色的民俗学，为移风易俗、促进社会主义物质文明和精神文明建设，丰富世界文化宝库做出了巨大贡献。"
                },
                {
                    title: "代表民俗",
                    desc: "烟标民俗\n" +
                        "中国各地的民俗差异很大，但在吉祥方面的追求却是相同的。因此，烟标体现最多的是吉祥、喜庆题材。利用文字、图案通过对某些自然物象的寓意或谐音，表达美好愿望。例如新郑卷烟厂的“喜梅”牌，利用民俗文化中喜鹊登梅枝来表达“喜上眉梢”之意。梅枝取其谐音，意为眉梢，喜鹊则扣出“喜”字。" +
                        "妈祖民俗\n" +
                        "妈祖民俗是源于人们对妈祖景仰而逐渐形成的一种常规化古老民间习俗。它有别于其他妈祖信俗集体性活动，主要指信众个体信仰活动，具有个人化鲜明特征，多样的民俗活动都助兴妈祖诞辰纪念，主要包含以下内容。妈祖是中国乃至世界华人聚居区的民间信仰神祗，她的传说涉及多方面的内容，有海上救难，也有战争中的助战；既有捍灾御患，又有主嗣孕育。这就决定了妈祖神格内容的多重性。"
                },
            ],
            inclusionList: [
                {
                    title: '除夕',
                    imgSrc: 'static/image/folk-custom/new_year_s_eve.png',
                },
                {
                    title: '春节',
                    imgSrc: 'static/image/folk-custom/spring_festival.png',
                },
                {
                    title: '元宵节',
                    imgSrc: 'static/image/folk-custom/lantern_festival.png',
                },
                {
                    title: '寒食节',
                    imgSrc: 'static/image/folk-custom/cold_food_festival.png',
                },
                {
                    title: "清明节",
                    imgSrc: 'static/image/folk-custom/the_pure_brightness_festival.png',
                }
            ],
            isActive: 0
        }
    },
    methods: {
        switchInclusion(i) {
            this.isActive = i
        }
    }
}).mount('#folk-custom')