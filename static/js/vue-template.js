const {createApp} = Vue

createApp({
    data() {
        return {
            featuredList: [
                {
                    title: '木牛山传说',
                    desc: 'Curabitur nec quam molestie, ornare dui a, maximus erat. Aliquam tristique ante\n' +
                        'vitae eros volutpat, ut euismod libero tempor.'
                },
                {
                    title: '九天玄女洞传说故事',
                    desc: 'Curabitur nec quam molestie, ornare dui a, maximus erat. Aliquam tristique ante\n' +
                        'vitae eros volutpat, ut euismod libero tempor.'
                },
                {
                    title: '尖山和团山传说',
                    desc: 'Curabitur nec quam molestie, ornare dui a, maximus erat. Aliquam tristique ante\n' +
                        'vitae eros volutpat, ut euismod libero tempor.'
                },
                {
                    title: '黄家湾传说',
                    desc: 'Curabitur nec quam molestie, ornare dui a, maximus erat. Aliquam tristique ante\n' +
                        'vitae eros volutpat, ut euismod libero tempor.'
                },
                {
                    title: '张仲景诊王仲宣的故事',
                    desc: 'Curabitur nec quam molestie, ornare dui a, maximus erat. Aliquam tristique ante\n' +
                        'vitae eros volutpat, ut euismod libero tempor.'
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

                },
                {
                    title: '宗教音乐',

                },
                {
                    title: '文人音乐',

                },
                {
                    title: '民间音乐',

                },
            ]
        }
    }
}).mount('#music')
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
                    imgSrc: '',
                },
                {
                    title: '少林功夫',
                    imgSrc: '',
                },
                {
                    title: '沧州武术',
                    imgSrc: '',
                },
                {
                    title: '蹴鞠',
                    imgSrc: '',
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
                },
                {
                    title: '内画',
                    classification: '绘画',
                    desc: '内画是我国特有的传统工艺，它的产生起源于画鼻烟壶。内画的画法是以特制的变形细笔，在玻璃/水晶、琥珀等材质的壶坯内，手绘出细致入微的画面，格调典雅、笔触精妙。',
                },
                {
                    title: '寿山石雕',
                    classification: '雕塑',
                    desc: '寿山石雕是传统的民间雕刻艺术，以产于福州北部山区北峰的寿山石为材料，通过特殊技艺制作出供人玩赏的小型雕刻。寿山石雕技艺主要流传在福州市晋安区鼓山、岳峰镇、象园、王庄街道和寿山乡。'
                },
                {
                    title: '临夏砖雕',
                    classification: '雕塑',
                    desc: '临夏县境内出土的金代大定十五年进义校尉王吉砖室墓中的砖雕饰物，是以土窑青砖为材料，据此可以判断临夏砖雕实源于秦汉，是当时民间木雕技艺的延伸。明、清两代是临夏砖雕的兴盛时期，1949年后曾一度冷落，近二十年又得以复兴。'
                },
                {
                    title: '象牙雕刻',
                    classification: '工艺美术',
                    desc: '象牙雕刻是指以象牙为材料的雕刻工艺及其成品，象牙雕刻因牙材自身的品质而具有高洁的美感，成为中国特种工艺美术的一部分。以北京和广州的象牙雕刻为代表。'
                },
                {
                    title: '岫岩玉雕',
                    classification: '工艺美术',
                    desc: '岫岩玉雕是以辽宁省岫岩地区为中心而发展起来的一项民间玉石雕刻工艺',
                },
                {
                    title: '剪纸',
                    classification: '工艺美术',
                    desc: '剪纸艺术是最古老的中国民间艺术之一，作为一种镂空艺术，它能给人以视觉上以透空的感觉和艺术享受。剪纸用剪刀将纸剪成各种各样的图案，如窗花、门笺、墙花、顶棚花、灯花等，包含中阳剪纸、广东剪纸等。'
                },
                {
                    title: '刺绣',
                    classification: '工艺美术',
                    desc: '刺绣是针线在织物上绣制的各种装饰图案的总称。刺绣分丝线刺绣和羽毛刺绣两种。就是用针将丝线或其他纤维、纱线以一定图案和色彩在绣料上穿刺，以绣迹构成花纹的装饰织物。它是用针和线把人的设计和制作添加在任何存在的织物上的一种艺术。刺绣是中国民间传统手工艺之一，在中国至少有二三千年历史。'
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
                    imgSrc: '',
                    src: '',
                    desc: '陶瓷，用陶土和瓷土为原料，经配料、成型等流程制成。中国是世界上最早应用陶器的国家之一，而中国瓷器因其极高的实用性和艺术性备受世人的推崇。如今，在陶瓷手艺人们的共同努力下，许多失传的技艺重新得到传承。',
                },
                {
                    title: '髹 [xiū] 漆',
                    nickname: '中国人的骄傲',
                    imgSrc: '',
                    src: '',
                    desc: '中国是世界上最早发现并使用天然漆的国家，最早的漆器是在七千年前河姆渡遗址中发现的木胎朱漆碗，髹漆工艺无疑是中华民族的骄傲和自豪。从古至今，中国漆器工艺形成了多个流派，其中福州脱胎漆器更是中国传统工艺的“三宝”之一，其技艺值得我们去传承。',
                },
                {
                    title: '木雕',
                    nickname: '最亲民的手工艺',
                    imgSrc: '',
                    src: '',
                    desc: '木雕是雕塑的一种，早在七千多年前的河姆渡文化时期就出现木雕鱼，到了唐代，木雕工艺更是达到了发展的巅峰。历经数千年传承的木雕工艺依然需要年轻血液去传承和保护。',
                },
                {
                    title: '景泰蓝',
                    nickname: '国礼专业户',
                    imgSrc: '',
                    src: '',
                    desc: '景泰蓝制作技艺是北京市的地方传统手工技艺。外传珐琅技艺和本土金属珐琅工艺相结合的产物。明清两代，御用监和造办处均在北京设有专为皇家服务的珐琅作坊，技艺从成熟走向辉煌。近代以来，社会动荡不安，北京景泰蓝技艺曾一度衰微。1949年后，因国家采取积极的保护、扶持政策，这一古老技艺得以迅速恢复和发展。',
                },
                {
                    title: '玉雕',
                    nickname: '中国人的精神图腾',
                    imgSrc: '',
                    src: '',
                    desc: '玉雕是玉石经加工雕琢成的工艺品，是中国独有的技艺，具有悠久的发展历史和鲜明的时代特征，在不同的朝代中玉雕有着不同的造型与特色。玉作为中国人的精神图腾，玉雕工艺在民间的发展更为广泛，也更好传承。',
                },
                {
                    title: '刺绣',
                    nickname: '走出国门的手工艺',
                    imgSrc: '',
                    src: '',
                    desc: '刺绣是用绣针引彩线，将设计的花纹在纺织品上刺绣运针，以绣迹构成花纹图案的一种工艺，在中国已有两千多的历史。如今，用刺绣技艺制成的丝绸工艺品成为了中国传统手工艺的代表。',
                },
                {
                    title: '中国结',
                    nickname: '最中国的手工艺',
                    imgSrc: '',
                    src: '',
                    desc: '中国结是中国特有的手工编织工艺品，最早来自旧石器时代的缝衣打结，后来发展至汉朝的仪礼记事，再演变至今的装饰手艺。一个小小的中国结，既体现了中国人的颜色偏好，又体现了民间艺人的创造力。',
                },
                {
                    title: '剪纸',
                    nickname: '记载历史的“活化石"',
                    imgSrc: '',
                    src: '',
                    desc: '中国最早的剪纸作品是北朝时期的五幅团花剪纸，到了唐代剪纸处于大发展时期，南宋时期更是出现了以剪纸为职业的行业艺人。剪纸是中国最为流行的民间手工艺之一，凝聚着中华民族几千年来的历史和文化。',
                },
                {
                    title: '琉璃',
                    nickname: '最珍贵的手工艺',
                    imgSrc: '',
                    src: '',
                    desc: '古时制作琉璃困难，使得当时人们把琉璃看得比玉器还要珍贵。由于其色彩流云漓彩，品质晶莹剔透，所以一直属于皇室专用，在民间流传的琉璃制造技法甚少。对于如此珍贵又濒临失传的技艺，更值得去保护和传承。',
                },
                {
                    title: '竹编',
                    nickname: '最古老的手工艺',
                    imgSrc: '',
                    src: '',
                    desc: '竹编最早在新石器时代出现，那时人们为了将剩余的食物存放起来，就将植物的枝条编成篮、筐等器皿，到了明清时期，竹编工艺得到了全面的发展。如今，竹编不仅具有实用价值，还富有艺术观赏性。',
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
                    imgSrc: '/static/picture/rural.png',
                },
                {
                    title: '民族医药',
                    desc: '中国少数民族的传统医药。经过30年的发掘整理，已有近40个少数民族发掘整理出版了本民族传统医药的代表性著作。',
                    icon: 'fa fa-bolt',
                    imgSrc: '/static/picture/rural.png',
                },
                {
                    title: '民间医药',
                    desc: '有两个概念，一是在体制上以公私来分，民间医药是指非公有制的民营医疗机构和民间医生；二是在学术上以朝野来分，民间医药是指当代中医教育体系之外不属于《黄帝内经》一脉的流散于民间的草医草药。',
                    icon: 'fa fa-bolt',
                    imgSrc: '/static/picture/rural.png',
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
                    imgSrc: '',
                },
                {
                    title: '少林功夫',
                    imgSrc: '',
                },
                {
                    title: '沧州武术',
                    imgSrc: '',
                },
                {
                    title: '蹴鞠',
                    imgSrc: '',
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
}).mount('#folk-custom')