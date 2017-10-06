// 自定义数据

var data = {
	//logo图标
	logo_img: 'http://pic.c-ctrip.com/common/c_logo2013.png',
	//部分icon的图
	icon_img: 'http://pic.c-ctrip.com/platform/online/home/un_header_footer20160610.png',
	//手机二维码
	phone_qrcode: 'http://pic.c-ctrip.com/platform/online/home/er_ctrip_app.jpg',
	//微信二维码
	wx_qrcode: 'http://pic.c-ctrip.com/platform/online/home/er_ctrip_wechat.jpg',
	//广告图集合
	adImg: [
		'https://dimg04.c-ctrip.com/images/700n09000000487ha7C73_1920_340_17.jpg',
		'https://dimg04.c-ctrip.com/images/70030i0000009gd7n1BE9_1920_340_17.jpg',
		'https://dimg04.c-ctrip.com/images/70090i0000009dh879406_1920_340_17.jpg',
		'https://dimg04.c-ctrip.com/images/700a0i0000009ghlbC72E_1920_340_17.jpg',
		'https://dimg04.c-ctrip.com/images/700t0h0000008w2fx6738_1920_340_17.jpg',
		'https://dimg04.c-ctrip.com/images/700w0i0000009c4v2FBDB_1920_340_17.jpg',
		'https://dimg04.c-ctrip.com/images/700f0i0000009hnx405E1_1920_340_17.jpg',
		'https://dimg04.c-ctrip.com/images/700g0g0000007zkijEDB5_1920_340_17.jpg',
		'https://dimg04.c-ctrip.com/images/700s0g00000087rz7036F_1920_340_17.jpg'
	],
	//部分icon的图标2 (主要是飞机图标.房子图标...)
	small_img: 'http://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png',

	//特卖汇(下方的内容集合)
	selling_data: {
		top_nav: ['特卖汇','出境游','国内游','周边游','邮轮','门票','主题游','高端游'],
		inner_nav: ['精选','跟团游','自由行','当地游','邮轮游'],
		inner_nav_more: '特卖汇',
        store_list: [
            {
                img_url: 'https://dimg04.c-ctrip.com/images/300p0d0000006twvv7A89_C_500_280.jpg',
                title: '年度热卖产品，日料&1晚温泉！',
                name: '日本大阪+京都+箱根+东京6日5晚跟团游·A迪士尼+茶道B环球影城Ckitty乐园+果子DIY',
                price: '3999',
                seat: '席位充足',
                hot_tag: true
            },
            {
                img_url: 'https://dimg04.c-ctrip.com/images/30010h00000096jgd6D5E_C_500_280.jpg',
                title: '初游品质之选',
                name: '泰国曼谷+芭提雅6日5晚跟团游·【无自费】月光岛+巧克力庄园+摩天轮夜市',
                price: '2880',
                seat: '席位充足',
                hot_tag: true
            },
            {
                img_url: 'https://dimg04.c-ctrip.com/images/300g0e00000076gg7E69D_C_500_280.jpg',
                title: '特价',
                name: '新加坡+马来西亚6日跟团游·深圳往返A线波德申 B线马六甲 C线超级经典',
                price: '1499',
                seat: '席位充足',
                hot_tag: true
            },
            {
                img_url: 'https://dimg04.c-ctrip.com/images/300b0e000000717wf1198_C_500_280.jpg',
                title: '国庆深圳直飞，早定减500/人',
                name: '沙巴5日4晚自由行·【国庆·早定减500/人】直飞·2+2双酒·赠接机',
                price: '1604',
                seat: '席位充足',
                hot_tag: true
            },
            {
                img_url: 'https://dimg04.c-ctrip.com/images/300b0c00000060z2hB37E_C_500_280.jpg',
                title: '最强预售！暑假正班1699起！国庆正班2299起！',
                name: '柬埔寨暹粒+吴哥窟5日4晚跟团游·★地表最强★暑期国庆+含签证小费+可升5星',
                price: '1749',
                seat: '席位充足',
                hot_tag: true
            },
            {
                img_url: 'https://dimg04.c-ctrip.com/images/300m0d0000006tuahBDC1_C_500_280.jpg',
                title: '亏本大促！！！',
                name: '印度尼西亚巴厘岛5日4晚半自助·至高性价+1天自由+金巴兰日落BBQ+情人崖',
                price: '3980',
                seat: '席位充足',
                hot_tag: true
            },
            {
                img_url: 'https://dimg04.c-ctrip.com/images/30010i0000009i405E829_C_500_280.jpg',
                title: '广州直飞  升级3晚国五酒店',
                name: '泰国曼谷+芭提雅6日4晚跟团游·沙美岛出海+泰迪熊博物馆+ 升级3晚国五酒店',
                price: '2099',
                seat: '席位充足',
                hot_tag: true
            },
            {
                img_url: 'https://dimg04.c-ctrip.com/images/30040b0000005lh3bD460_C_500_280.png',
                title: '美加连线特卖',
                name: '美国东西海岸+加拿大东海岸+尼亚加拉瀑布+墨西哥17日跟团游·旧金山+圣地亚哥+蒂华纳+直飞+含小费',
                price: '15700',
                seat: '仅剩8席',
                hot_tag: true
            },
        ],
		store_ad: {
			img_url: 'http://images3.c-ctrip.com/dj/201706/tmh/sm2tmh_220x330.jpg',
            img_title: '你不可不看的特价旅游频道'
		}
	},
	//酒店类(下方的内容集合)
	hotel_data: {
		top_nav: ['海外酒店','海外民宿+短租','国内酒店','酒店+景点','客栈民宿','团购'],
		inner_sidebar: [
            {
                title: '促销',
                list: [
                    '暑你有腔调 海外暑期特惠酒店99元起',
                    '海外酒店低价抢购',
                    '海外新入驻酒店抢鲜体验',
                    '华人礼遇尊享特惠',
                    '澳大利亚大洋路私人海景别墅推荐'
                ]
            },
            {
                title: '发现酒店',
                list: [
                    '走在时尚潮流最前沿的你怎么能不住艺术酒店呢',
                    '跟着小编去新加坡吃起来了呀',
                    '与星月同尘，随光影而行，跨欧亚大陆，享疯狂青春',
                    '这是一个没有一丝雾霾，幸福感爆棚的地方' 
                ]
            }
        ],
        inner_nav: ['热门城市','都市购物','海岛休闲','旅游胜地'],
        inner_nav_more: '海外酒店',
        store_list: [
        	{
                url: 'http://images3.c-ctrip.com/overseas/city/singapore256-256.jpg',
                name: '新加坡',
                num: '522',
                price: '70'
            },
            {
                url: 'http://images3.c-ctrip.com/overseas/city/bangkok256-256.jpg',
                name: '曼谷',
                num: '2931',
                price: '18'
            },
            {
                url: 'http://images3.c-ctrip.com/overseas/city/tokyo256-256.jpg',
                name: '东京',
                num: '2497',
                price: '121'
            },
            {
                url: 'http://images3.c-ctrip.com/overseas/city/kualalumpur256-256.jpg',
                name: '吉隆坡',
                num: '2300',
                price: '27'
            },
            {
                url: 'http://images3.c-ctrip.com/overseas/city/osaka256-256.jpg',
                name: '大阪',
                num: '2803',
                price: '44'
            },
            {
                url: 'http://images3.c-ctrip.com/ad/apph5/2017/phuket_256_256_01.jpg',
                name: '普吉岛',
                num: '3879',
                price: '41'
            }
        ],
        store_ad: {
        	img_url: 'http://images3.c-ctrip.com/rk/201511/jb220x330.jpg',
            img_title: '海外热门酒店推荐'
        }

	},
	//机票模块(下方)
	ticket_data: {
		top_nav: ['国际特价机票','国内特价机票'],
		inner_nav: ['热门往返','亚洲','欧洲','美洲','非洲'],
		inner_nav_more: '国际特价机票',
        store_list: [
            {
                from: '深圳',
                to: '新加坡',
                date: '8月29日 - 9月05日',
                price: '200'
            },
            {
                from: '深圳',
                to: '新加坡',
                date: '9月01日 - 9月05日',
                price: '237'
            },
            {
                from: '深圳',
                to: '吉隆坡',
                date: '8月27日 - 9月01日',
                price: '250'
            },
            {
                from: '深圳',
                to: '吉隆坡',
                date: '8月27日 - 9月02日',
                price: '250'
            },
            {
                from: '深圳',
                to: '曼谷',
                date: '9月03日 - 9月06日',
                price: '591'
            },
            {
                from: '深圳',
                to: '大阪',
                date: '9月10日 - 9月17日',
                price: '668'
            },
            {
                from: '深圳',
                to: '悉尼',
                date: '8月26日 - 8月31日',
                price: '680'
            },
            {
                from: '深圳',
                to: '首尔',
                date: '9月02日 - 9月06日',
                price: '700'
            },
            {
                from: '深圳',
                to: '台北',
                date: '9月04日 - 9月07日',
                price: '777'
            },
            {
                from: '深圳',
                to: '胡志明市',
                date: '8月21日 - 8月23日',
                price: '810'
            },
            {
                from: '深圳',
                to: '洛杉矶',
                date: '8月24日 - 8月29日',
                price: '980'
            },
            {
                from: '深圳',
                to: '东京',
                date: '9月12日 - 9月18日',
                price: '1108'
            },

        ],
		store_ad: {
        	img_url: 'http://images4.c-ctrip.com/target/600o0a0000004myhpA98E.jpg',
        }

	},

    //租车模块(下方)
    hireCar_data: {
        top_nav: ['国际租车','国际接送车','国内租车','国内接送车','日租包车'],
        inner_sidebar: [
            {
                title: '国际租车活动',
                list: [
                    '海外租车岁末狂返3000万',
                    '国际驾照认证件0元办',
                    '魅力自驾 海外租车最高减20%'
                ]
            }
        ],
        inner_nav: ['小型轿车','中型轿车','大型轿车','高档轿车','中型SUV','标准SUV','全尺寸SUV'],
        inner_nav_more: '国际租车',
        store_list: [
            {
                name: '美国 洛杉矶',
                substr: '自驾梦幻1号公路',
                img_url: 'http://pic.c-ctrip.com/car/ctrip/osd/Versa.jpg',
                price: '142'
            },
            {
                name: '加拿大 温哥华',
                substr: '环游如画温哥华岛',
                img_url: 'http://pic.c-ctrip.com/car/ctrip/osd/Chevrolet_Aveo.jpg',
                price: '163'
            },
            {
                name: '澳大利亚 墨尔本',
                substr: '大洋路绝美海岸线',
                img_url: 'http://pic.c-ctrip.com/car/ctrip/osd/Toyota_Yaris.jpg',
                price: '189'
            },
            {
                name: '德国 慕尼黑',
                substr: '啤酒之城驾车狂欢',
                img_url: 'http://pic.c-ctrip.com/car/ctrip/osd/VW_Polo.jpg',
                price: '189'
            },

        ]

    },
    // 当地玩乐模块
    play_data: {
        top_nav: ['当地玩乐·海外','当地玩乐·国内'],
        inner_sidebar: {
            title: '热门目的地',
            list: ['普吉岛','东京','香港','毛里求斯','台北','清迈','巴黎','迪拜','悉尼','夏威夷','新加坡','巴厘岛','沙巴']
        },
        inner_nav: ['特惠推荐','一日游','交通接驳','当地美食','新奇探险','港澳过关','演出'],
        inner_nav_more: '当地玩乐',
        store_list: [
            {
                img_url: 'https://dimg04.c-ctrip.com/images/350l0a0000004s59vABE5_C_280_158.jpg',
                name: '【9元换购萤火虫夜游/主题公园门票】黄金海岸日出热气球之旅（酒庄香槟早餐可选）',
                price: '1339',
                seat: '澳大利亚·黄金海岸'
            },
            {
                img_url: 'https://dimg05.c-ctrip.com/images/100n050000000snx80EF0_C_280_158.jpg',
                name: '【扫码入园/立即确认】悉尼多景点任选联票【悉尼塔、水族馆、动物园、蜡像馆、曼丽海洋生物保护区】',
                price: '199',
                seat: '澳大利亚·悉尼'
            },
            {
                img_url: 'https://dimg06.c-ctrip.com/images/35010f0000007kkssC4AC_C_280_158.jpg',
                name: '【新品限量八折】【夜游曼谷】四面佛＋暹罗广场＋King power免税店＋考山路/亚洲夜市克里普索人妖秀/夜游湄南河白玉兰豪华游轮一日游（三选一）',
                price: '75',
                seat: '泰国·曼谷'
            },
            {
                img_url: 'https://dimg04.c-ctrip.com/images/t1/activity/381/810/163/56b524b910654aafb69a8bf3c6ccccd1_C_280_158.jpg',
                name: '巴厘岛阿勇河漂流+乌布皇宫+乌布艺术市场一日游【暑期多人特惠·私家游】',
                price: '397',
                seat: '印度尼西亚·巴厘岛'
            },

        ]
        
    },
    // 全球购模块
    global_data: {
        top_nav: ['全球购'],
        inner_sidebar: {
            title: '热门目的地',
            list: ['香港','日本','法国','澳门','英国','泰国','新加坡','美国','西班牙','台北','澳大利亚','意大利','阿联酋']
        },
        inner_nav: ['热门商户','精品百货','奢品大牌','口碑推荐','新店首选'],
        inner_nav_more: '全球名店',
        store_list: [
            {
                img_url: 'https://images4.c-ctrip.com/target/zd090i00000098v3j1D2B_C_570_285.jpg',
                name: 'DFS旗下T广场（香港广东道店） DFS T Galleria（Hong Kong Canton Road）',
                seat: '中国·香港',
                tag_name: '返现'
            },
            {
                img_url: 'https://images4.c-ctrip.com/target/zd0g0c000000650nk8A26_C_570_285.jpg',
                name: '迪拜国际机场T3航站楼A出发区（综合购物区店） Concourse A（Dubai Duty Free Shopping Complex Panshot）',
                seat: '阿联酋·迪拜',
                tag_name: '促销'
            },
            {
                img_url: 'https://images4.c-ctrip.com/target/fd/finvendor/g5/M00/E3/D6/CggYsVcUPqyAetjkAAH7z1YbtQ4810_C_570_285.jpg',
                name: '高岛屋（大阪店） Takashimaya Osaka Store',
                seat: '日本·大阪',
                tag_name: '返现'
            },
            {
                img_url: 'https://images4.c-ctrip.com/target/zd0c0800000039r9xB9C1_C_570_285.jpg',
                name: '松屋（银座本店） MATSUYA（GINZA）',
                seat: '日本·东京',
                tag_name: '促销'
            },

        ]


    },
    //攻略模块(下方)
    guide_data: {
        top_nav: ['目的地攻略','旅游旗舰店'],
        inner_sidebar: [
            {
                title: '当季推荐',
                list: [
                    '圣托里尼：永恒的蓝白世界',
                    '哥本哈根：走进安徒生的童话世界',
                    '圣彼得堡：风光迤逦的北方威尼斯',
                    '清迈：文艺清新的泰北明珠',
                    '柏林：啤酒相约猪肘'
                ]
            }
        ],
        inner_nav: ['攻略精选活动','旅行正当时','看海悠悠乐','教你买买买'],
        inner_nav_more: '旅行攻略',
        store_list: [
            {
                title: '2017旅行家',
                substr: '2017旅行家',
                img_url: 'https://dimg09.c-ctrip.com/images/10080h00000095zqm7E65_R_220_160.jpg'
            },
            {
                title: '听听上线',
                img_url: 'https://dimg06.c-ctrip.com/images/100n0c00000061s07C497_R_220_160.jpg'
            },
            {
                title: '美食林周年庆',
                img_url: 'https://dimg05.c-ctrip.com/images/10030h00000092s7m5BDE_R_220_160.jpg'
            },
            {
                title: '招募携程旅行家',
                img_url: 'https://dimg09.c-ctrip.com/images/fd/tg/g2/M00/57/BC/CghzgVWBJu2AbEUsAAAu6xrG2jc496_R_220_160.jpg'
            },

        ]

    },
    //底部快捷入口部分
    skip_data: [
        {
            title: '携程导航',
            list: ['酒店预订','海外酒店','特价机票','国际机票','旅游线路','景点门票','旅游攻略','火车票','酒店团购','邮轮','周末游','签证','租车','目的地榜单','欧铁通票','自由行','会议旅游','客栈民宿','礼品卡','团队游','企业商旅','查看全部']
        },
        {
            title: '酒店预订',
            list: ['城市酒店','国家酒店','北京酒店','上海酒店','广州酒店','成都酒店','杭州酒店','西安酒店','新加坡酒店','迪拜酒店','泰国酒店','韩国酒店']
        },
        {
            title: '特价机票',
            list: ['上海机票','北京机票','广州机票','深圳机票','重庆机票','成都机票','昆明机票','厦门机票','三亚机票','杭州机票','春秋航空','东方航空']
        },
        {
            title: '旅游度假',
            list: ['国内旅游攻略','出境旅游攻略','马尔代夫旅游','普吉岛旅游','巴厘岛旅游','济州岛旅游','日本旅游','新加坡旅游','澳大利亚旅游','迪拜旅游','柬埔寨旅游','英国旅游']
        },
        {
            title: '攻略指南',
            list: ['攻略社区','旅游攻略','旅行游记','旅游问答','结伴旅游','周末旅游','攻略下载','天气预报','旅游资讯','旅游榜单','旅游专题','地图大全']
        },
        {
            title: '快速入口',
            list: ['团购导航','门票导航','客栈管理系统','天海邮轮','中小企业差旅','存款证明','携程主题曲','航班时刻表','火车时刻表','汽车时刻表']
        }
    ]
};

export default data;