let menu = [
  {
    name: "shahi paneer",
    id: "1",
    price: 220,
    img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Veg",
  },
  {
    name: "kadahi paneer",
    id: "2",
    price: 240,
    img: "https://images.unsplash.com/photo-1551881192-002e02ad3d87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Veg",
  },
  {
    name: "Dal makhni",
    id: "3",
    price: 150,
    img: "https://myfoodstory.com/wp-content/uploads/2018/08/Dal-Makhani-New-1.jpg",
    category: "Veg",
  },
  {
    name: "saag",
    id: "4",
    price: 150,
    img: "https://www.florenceindianrestaurant.it/wp-content/uploads/2022/08/kanwardeep-kaur-jTv_cWxEtFs-unsplash-1110x739.jpg",
    category: "Veg",
  },
  {
    name: "dal fry",
    id: "5",
    price: 120,
    img: "https://www.cookwithmanali.com/wp-content/uploads/2019/07/Dal-Fry-Recipe.jpg",
    category: "Veg",
  },
  {
    name: "yellow dal",
    id: "6",
    price: 150,
    img: "https://cdn.vegetariantimes.com/wp-content/uploads/2017/05/dal1_2000_1125.jpg?crop=535:301&width=1070&enable=upscale",
    category: "Veg",
  },
  {
    name: "channa masala",
    id: "7",
    price: 180,
    img: "https://minimalistbaker.com/wp-content/uploads/2016/02/AMAZING-Chana-Masala-made-in-1-Pot-So-healthy-flavorful-and-delicious-vegan-glutenfree-chanamasala-recipe-minimalistbaker.jpg",
    category: "Veg",
  },
  {
    name: "mutter paneer",
    id: "8",
    price: 190,
    img: "https://pipingpotcurry.com/wp-content/uploads/2022/04/Matar-Paneer-Best-Indian-Paneer-Recipe-Piping-Pot-Curry.webp",
    category: "Veg",
  },
  {
    name: "paneer butter masala",
    id: "9",
    price: 220,
    img: "https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3.jpg",
    category: "Veg",
  },
  {
    name: "paneer bhurji",
    id: "10",
    price: 250,
    img: "https://www.whiskaffair.com/wp-content/uploads/2021/04/Paneer-Bhurji-2-1-1.jpg",
    category: "Veg",
  },
  {
    name: "palak paneer",
    id: "11",
    price: 200,
    img: "https://healthynibblesandbits.com/wp-content/uploads/2020/01/Saag-Paneer-1.jpg",
    category: "Veg",
  },
  {
    name: "malai kofta",
    id: "12",
    price: 200,
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/malai-kofta-1-1024x1536.jpg",
    category: "Veg",
  },
  {
    name: "mutter mushroom",
    id: "13",
    price: 200,
    img: "https://shwetainthekitchen.com/wp-content/uploads/2023/03/mutter-mushroom.jpg",
    category: "Veg",
  },
  {
    name: "sev bhaji",
    id: "14",
    price: 150,
    img: "",
    category: "Veg",
  },
  {
    name: "alloo mutter",
    id: "15",
    price: 130,
    img: "https://masalachilli.com/wp-content/uploads/2022/07/Aloo-matar-recipe-7.jpg",
    category: "Veg",
  },
  {
    name: "allo zeera",
    id: "16",
    price: 130,
    img: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/02/Jeera-Aloo-1.jpg",
    category: "Veg",
  },
  {
    name: "mutter malai methi",
    id: "17",
    price: 180,
    img: "",
    category: "Veg",
  },
  {
    name: "mix veg",
    id: "18",
    price: 180,
    img: "https://shwetainthekitchen.com/wp-content/uploads/2023/03/mixed-vegetable-curry.jpg",
    category: "Veg",
  },
  {
    name: "allo gobi",
    id: "19",
    price: 150,
    img: "https://www.spiceupthecurry.com/wp-content/uploads/2021/06/aloo-gobi-3.jpg",
    category: "Veg",
  },
  {
    name: "cheese tomato",
    id: "20",
    price: 200,
    img: "https://www.thecookierookie.com/wp-content/uploads/2023/08/baked-tomatoes-mozzarella-parmesan-5-of-6-edited.jpg",
    category: "Veg",
  },

  ///////////////////////////////////////////////////////////////////////
  {
    name: "spl. milk tea",
    id: "21",
    price: 20,
    img: "https://www.justonecookbook.com/wp-content/uploads/2020/04/Royal-Milk-Tea-4740-IV.jpg",
    category: "beverages",
  },
  {
    name: "hot coffee",
    id: "22",
    price: 50,
    img: "https://www.acouplecooks.com/wp-content/uploads/2021/05/Latte-Art-066.jpg",
    category: "beverages",
  },
  {
    name: "hot milk",
    id: "23",
    price: 30,
    img: "https://www.thespruceeats.com/thmb/GyKAhZtvjyfOtjm3sVlPtpKVbcQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/milk-kefir-recipe-5218990-c-graham-2022-003-b3e9b05efc19436a8fde302f9f70efb5.jpg",
    category: "beverages",
  },
  {
    name: "sweet lassi",
    id: "24",
    price: 50,
    img: "https://www.indianveggiedelight.com/wp-content/uploads/2023/01/sweet-lassi-recipe.jpg",
    category: "beverages",
  },

  ///////////////////////////////////////////////////////////////////////
  {
    name: "plain parantha",
    id: "25",
    price: 40,
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2010/06/plain-paratha-recipe.jpg",
    category: "breakfast",
  },
  {
    name: "allo parantha",
    id: "26",
    price: 50,
    img: "https://www.veganricha.com/wp-content/uploads/2023/03/Aloo-Paratha-7109.jpg",
    category: "breakfast",
  },
  {
    name: "gobi parantha",
    id: "27",
    price: 50,
    img: "https://www.jainrasoi.com/mg/wp-content/uploads/2012/10/gobi-paratha-600x381.jpg",
    category: "breakfast",
  },
  {
    name: "mix parantha",
    id: "28",
    price: 60,
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/12/vegetable-paratha-recipe.jpg",
    category: "breakfast",
  },
  {
    name: "paneer parantha",
    id: "29",
    price: 70,
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/paneer-paratha-1-1024x1536.jpg",
    category: "breakfast",
  },
  {
    name: "onion parantha",
    id: "30",
    price: 50,
    img: "",
    category: "breakfast",
  },

  ///////////////////////////////////////////////////////////////////////
  {
    name: "plain salad",
    id: "31",
    price: 30,
    img: "https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-001_1.jpg",
    category: "salad",
  },
  {
    name: "green salad",
    id: "32",
    price: 50,
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chopped-green-salad-with-herby-chilli-dressing-429ab82.jpg?quality=90&webp=true&resize=300,272",
    category: "salad",
  },
  {
    name: "full dahi",
    id: "33",
    price: 80,
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2012/05/curd-recipe.jpg",
    category: "breakfast",
  },
  {
    name: "mix raita",
    id: "34",
    price: 120,
    img: "https://www.merirasoi.co.uk/wp-content/uploads/2018/07/mixed-vegetable-raita-Hero-Shot-1.jpg",
    category: "breakfast",
  },
  {
    name: "bundi raita",
    id: "35",
    price: 100,
    img: "https://www.indianveggiedelight.com/wp-content/uploads/2020/11/boondi-raita.jpg",
    category: "breakfast",
  },
  {
    name: "full cream salad",
    id: "36",
    price: 100,
    img: "http://www.pakistanichefrecipes.com/wp-content/uploads/2018/07/Vegetable-Cream-Salad.jpg",
    category: "salad",
  },

  ///////////////////////////////////////////////////////////////////////
  {
    name: "cheese chilly",
    id: "37",
    price: 250,
    img: "https://hebbarskitchen.com/wp-content/uploads/2020/01/chilli-paneer-recipe-paneer-chilli-dry-how-to-make-cheese-chilli-2-682x1024.jpeg",
    category: "snacks",
  },
  {
    name: "paneer tikka",
    id: "38",
    price: 250,
    img: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG",
    category: "snacks",
  },
  {
    name: "finger chips",
    id: "39",
    price: 120,
    img: "https://masalachilli.com/wp-content/uploads/2021/04/Air-Fryer-French-Fries-2.jpg",
    category: "snacks",
  },
  {
    name: "penunt masala",
    id: "40",
    price: 80,
    img: "https://rakskitchen.net/wp-content/uploads/2021/07/crispy-masala-peanut-snack.jpg",
    category: "snacks",
  },
  {
    name: "mix pakoda",
    id: "41",
    price: 150,
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2016/09/mix-veg-pakora-recipe.jpg",
    category: "snacks",
  },
  {
    name: "gobi pakoda",
    id: "42",
    price: 150,
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2013/07/gobi-pakora-recipe.jpg",
    category: "snacks",
  },
  {
    name: "paneer pakoda",
    id: "43",
    price: 170,
    img: "https://pipingpotcurry.com/wp-content/uploads/2022/10/Stuffed-Paneer-Pakora-Recipe-Piping-Pot-Curry.webp",
    category: "snacks",
  },
  {
    name: "mushroom chilly",
    id: "44",
    price: 250,
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/10/chilli-mushroom-1-1024x1536.jpg",
    category: "snacks",
  },
  {
    name: "manchurian",
    id: "45",
    price: 170,
    img: "https://www.indianveggiedelight.com/wp-content/uploads/2021/07/gobi-manchurian-1.jpg",
    category: "snacks",
  },
  {
    name: "egg omelette (2 egg)",
    id: "46",
    price: 40,
    img: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FSeries%2F2022-07-How-To-Make-an-Omelet-Step-by-Step%2F2022_July_K_EDR_OMELET_31904",
    category: "snacks",
  },
  {
    name: "egg bhurji (2 egg)",
    id: "47",
    price: 40,
    img: "https://www.theloveofspice.com/wp-content/uploads/2022/03/egg-bhurji.jpg",
    category: "snacks",
  },
  {
    name: "chicken tikka",
    id: "48",
    price: 450,
    img: "https://glebekitchen.com/wp-content/uploads/2016/12/chickentikkakebab.jpg",
    category: "snacks",
  },
  {
    name: "fish tikka",
    id: "49",
    price: 350,
    img: "https://spicecravings.com/wp-content/uploads/2019/08/Fish-Tikka-3.jpg",
    category: "snacks",
  },

  ///////////////////////////////////////////////////////////////////////
  {
    name: "plain thali (dal + 5 roti)",
    id: "50",
    price: 120,
    img: "https://www.mapsofindia.com/ci-moi-images/my-india/Daal-Roti.jpg",
    category: "combo meal",
  },
  {
    name: "special thali (dal + sabzi+ dahi + 4 roti)",
    id: "51",
    price: 200,
    img: "https://scontent.fvbs2-2.fna.fbcdn.net/v/t39.30808-6/291218833_5692542034112735_2617211113675891136_n.jpg?stp=cp0_dst-jpg_e15_p240x240_q65&_nc_cat=104&ccb=1-7&_nc_sid=3fb9c2&_nc_ohc=lbyVLirWEOEAX_Ub6zV&_nc_ht=scontent.fvbs2-2.fna&oh=00_AfAPwuk1zUkK1zXGqnkgDAtkTdIinAEpEX4XJ0i2xK-Ctg&oe=65077010",
    category: "combo meal",
  },

  ///////////////////////////////////////////////////////////////////////
  {
    name: "butter chicken",
    id: "52",
    price: 500,
    img: "https://as1.ftcdn.net/v2/jpg/01/42/27/16/1000_F_142271660_UxH5v5ibDYrqI5Hj7F6UdOD0MnMHuDjF.jpg",
    category: "Non Veg",
  },
  {
    name: "kadhai chicken",
    id: "53",
    price: 500,
    img: "https://as2.ftcdn.net/v2/jpg/00/36/35/19/1000_F_36351924_Gxxt8uJgc5COMoG0aSCkzotTH775KweR.jpg",
    category: "Non Veg",
  },
  {
    name: "afghani chicken",
    id: "54",
    price: 500,
    img: "https://as1.ftcdn.net/v2/jpg/06/26/94/64/1000_F_626946495_NzraG61EtU16DJvOKpIz6lWoIDOz1Y7p.jpg",
    category: "Non Veg",
  },
  {
    name: "chicken fry",
    id: "55",
    price: 500,
    img: "https://as1.ftcdn.net/v2/jpg/06/11/49/94/1000_F_611499456_9LHFNzaiGOPU0cMTAiRsmBmtgNsNb0bY.jpg",
    category: "Non Veg",
  },
  {
    name: "half butter chicken",
    id: "56",
    price: 280,
    img: "https://as1.ftcdn.net/v2/jpg/01/42/27/16/1000_F_142271660_UxH5v5ibDYrqI5Hj7F6UdOD0MnMHuDjF.jpg",
    category: "Non Veg (half plate)",
  },
  {
    name: "half kadhai chicken",
    id: "57",
    price: 280,
    img: "https://as2.ftcdn.net/v2/jpg/00/36/35/19/1000_F_36351924_Gxxt8uJgc5COMoG0aSCkzotTH775KweR.jpg",
    category: "Non Veg (half plate)",
  },
  {
    name: "half afghani chicken",
    id: "58",
    price: 280,
    img: "https://as1.ftcdn.net/v2/jpg/06/26/94/64/1000_F_626946495_NzraG61EtU16DJvOKpIz6lWoIDOz1Y7p.jpg",
    category: "Non Veg (half plate)",
  },
  {
    name: "half chicken fry",
    id: "59",
    price: 280,
    img: "https://as1.ftcdn.net/v2/jpg/06/11/49/94/1000_F_611499456_9LHFNzaiGOPU0cMTAiRsmBmtgNsNb0bY.jpg",
    category: "Non Veg (half plate)",
  },
  {
    name: "mutton",
    id: "60",
    price: 550,
    img: "https://as2.ftcdn.net/v2/jpg/02/77/64/23/1000_F_277642354_iC1BD0n5e6E7RWXh3aSLDgg0LbidJSQs.jpg",
    category: "Non Veg",
  },
  {
    name: "half mutton",
    id: "61",
    price: 300,
    img: "https://as2.ftcdn.net/v2/jpg/02/77/64/23/1000_F_277642354_iC1BD0n5e6E7RWXh3aSLDgg0LbidJSQs.jpg",
    category: "Non Veg (half plate)",
  },
  {
    name: "chicken pakoda",
    id: "62",
    price: 500,
    img: "https://as1.ftcdn.net/v2/jpg/02/38/91/18/1000_F_238911802_gdcVYA3NIkQPYBXGPVYt5fkOOrXFqF6N.jpg",
    category: "Non Veg",
  },
  {
    name: "half chicken pakoda",
    id: "63",
    price: 280,
    img: "https://as1.ftcdn.net/v2/jpg/02/38/91/18/1000_F_238911802_gdcVYA3NIkQPYBXGPVYt5fkOOrXFqF6N.jpg",
    category: "Non Veg (half plate)",
  },
  {
    name: "boneless chicken",
    id: "64",
    price: 550,
    img: "https://as1.ftcdn.net/v2/jpg/00/81/20/42/1000_F_81204229_RwuwL0GDMhknV184jMljRZ65V0z4Lzzd.jpg",
    category: "Non Veg",
  },
  {
    name: "half boneless chicken",
    id: "65",
    price: 300,
    img: "https://as1.ftcdn.net/v2/jpg/00/81/20/42/1000_F_81204229_RwuwL0GDMhknV184jMljRZ65V0z4Lzzd.jpg",
    category: "Non Veg (half plate)",
  },
  {
    name: "fish plate (8 pc)",
    id: "66",
    price: 350,
    img: "https://as2.ftcdn.net/v2/jpg/01/02/12/37/1000_F_102123736_3UnlYznkHU28jjQiEQU9iaERIPvNNyNG.jpg",
    category: "Non Veg",
  },
  {
    name: "chilly chicken",
    id: "67",
    price: 500,
    img: "https://as1.ftcdn.net/v2/jpg/02/65/27/24/1000_F_265272460_90zgCzgJioY0FgL97KAOjinGhCP3Aw09.jpg",
    category: "Non Veg",
  },
  {
    name: "half chilly chicken",
    id: "68",
    price: 280,
    img: "https://as1.ftcdn.net/v2/jpg/02/65/27/24/1000_F_265272460_90zgCzgJioY0FgL97KAOjinGhCP3Aw09.jpg",
    category: "Non Veg (half plate)",
  },
  {
    name: "masala chicken",
    id: "69",
    price: 500,
    img: "https://bellyfull.net/wp-content/uploads/2021/05/Chicken-Tikka-Masala-blog-768x1024.jpg",
    category: "Non Veg",
  },
  {
    name: "half masala chicken",
    id: "70",
    price: 280,
    img: "https://bellyfull.net/wp-content/uploads/2021/05/Chicken-Tikka-Masala-blog-768x1024.jpg",
    category: "Non Veg (half plate)",
  },
  {
    name: "chicken biryani",
    id: "71",
    price: 280,
    img: "https://pipingpotcurry.com/wp-content/uploads/2017/05/Instant-Pot-Chicken-Biryani-Piping-Pot-Curry-1-2.webp",
    category: "Non Veg",
  },
  {
    name: "tandoori chicken",
    id: "72",
    price: 500,
    img: "https://thebigmansworld.com/wp-content/uploads/2022/11/tandoori-chicken-800x1200.jpg",
    category: "Non Veg",
  },
  {
    name: "half tandoori chicken",
    id: "73",
    price: 280,
    img: "https://thebigmansworld.com/wp-content/uploads/2022/11/tandoori-chicken-800x1200.jpg",
    category: "Non Veg (half plate)",
  },
  {
    name: "garlic chicken",
    id: "74",
    price: 520,
    img: "https://www.lordbyronskitchen.com/wp-content/uploads/2022/02/Fried-Garlic-Chicken-b-532x800.jpg",
    category: "Non Veg",
  },
  {
    name: "half garlic chicken",
    id: "75",
    price: 300,
    img: "https://www.lordbyronskitchen.com/wp-content/uploads/2022/02/Fried-Garlic-Chicken-b-532x800.jpg",
    category: "Non Veg (half plate)",
  },
  {
    name: "lemon chicken",
    id: "76",
    price: 550,
    img: "https://therecipecritic.com/wp-content/uploads/2023/07/chinese_lemon_chicken-1-640x853.jpg",
    category: "Non Veg",
  },
  {
    name: "half lemon chicken",
    id: "77",
    price: 300,
    img: "https://therecipecritic.com/wp-content/uploads/2023/07/chinese_lemon_chicken-1-640x853.jpg",
    category: "Non Veg (half plate)",
  },
  ///////////////////////////////////////////////////////////////////////
  {
    name: "plain roti",
    id: "90",
    price: 12,
    img: "https://cdn.mos.cms.futurecdn.net/z9yrzoMFd7hcFnvjzNjv5P-1024-80.jpg.webp",
    category: "roti & naan",
  },
  {
    name: "butter roti",
    id: "78",
    price: 15,
    img: "https://www.cookwithmanali.com/wp-content/uploads/2021/07/Tandoori-Roti-676x1024.jpg",
    category: "roti & naan",
  },
  {
    name: "laccha paratha",
    id: "79",
    price: 40,
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2010/06/lachha-paratha-recipe.jpg",
    category: "breakfast",
  },
  {
    name: "plain naan",
    id: "80",
    price: 40,
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2013/07/naan-1.jpg",
    category: "roti & naan",
  },
  {
    name: "butter naan",
    id: "81",
    price: 50,
    img: "https://foodess.com/wp-content/uploads/2023/02/Butter-Naan-2-819x1024.jpg.webp",
    category: "roti & naan",
  },
  {
    name: "makki di roti",
    id: "82",
    price: 25,
    img: "https://i0.wp.com/www.simpleglutenfreekitchen.com/wp-content/uploads/2020/01/makki-ki-roti-1.jpg?resize=606%2C800&ssl=1",
    category: "roti & naan",
  },
  {
    name: "missi roti",
    id: "83",
    price: 30,
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2016/01/missi-roti-recipe.jpg",
    category: "roti & naan",
  },
  {
    name: "garlic naan",
    id: "84",
    price: 60,
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2022/12/garlic-naan-1-1024x1536.jpg",
    category: "roti & naan",
  },
  ///////////////////////////////////////////////////////////////////////
  {
    name: "plain rice",
    id: "85",
    price: 80,
    img: "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/plain-white-rice-f7391e.jpg",
    category: "Other",
  },
  {
    name: "zeera rice",
    id: "86",
    price: 120,
    img: "https://www.whiskaffair.com/wp-content/uploads/2021/06/Jeera-Rice-2-1-1.jpg",
    category: "Other",
  },
  {
    name: "veg fried rice",
    id: "87",
    price: 150,
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/fried-rice-recipe-1152x1536.jpg",
    category: "Other",
  },
  {
    name: "paneer fried rice",
    id: "88",
    price: 170,
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/09/paneer-fried-rice-recipe.jpg",
    category: "Other",
  },
  {
    name: "veg biryani",
    id: "89",
    price: 170,
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/biryani-recipe-1-1024x1536.jpg",
    category: "Other",
  },
  {
    name: "Mutter Pulao",
    id: "91",
    price: 150,
    img: "",
    category: "Other",
  },
  {
    name: "half dahi",
    id: "92",
    price: 40,
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2012/05/curd-recipe.jpg",
    category: "Other",
  },
  {
    name: "half cream salad",
    id: "93",
    price: 50,
    img: "http://www.pakistanichefrecipes.com/wp-content/uploads/2018/07/Vegetable-Cream-Salad.jpg",
    category: "Other",
  },
  {
    name: "extra butter",
    id: "94",
    price: 10,
    img: "",
    category: "Other",
  },
  {
    name: "Water",
    id: "95",
    price: 20,
    img: "",
    category: "Other",
  },

  //////////////////////////////  new items ////////////////////////
  {
    name: "Soda",
    id: "96",
    price: 20,
    img: "",
    category: "Other",
  },
  {
    name: "chicken gravy",
    id: "97",
    price: 150,
    img: "",
    category: "Other",
  },
  {
    name: "veg gravy",
    id: "98",
    price: 120,
    img: "",
    category: "Other",
  },

  {
    name: "punjabi chicken",
    id: "99",
    price: 500,
    img: "",
    category: "Other",
  },
  {
    name: "half punjabi chicken",
    id: "100",
    price: 280,
    img: "",
    category: "Other",
  },
  {
    name: "steam chicken",
    id: "101",
    price: 500,
    img: "",
    category: "Other",
  },
  {
    name: "half steam chicken",
    id: "102",
    price: 280,
    img: "",
    category: "Other",
  },

  {
    name: "ITEM 10",
    id: "103",
    price: 10,
    img: "",
    category: "Other",
  },
  {
    name: "ITEM 20",
    id: "104",
    price: 20,
    img: "",
    category: "Other",
  },
  {
    name: "ITEM 40",
    id: "105",
    price: 40,
    img: "",
    category: "Other",
  },
  {
    name: "ITEM 95",
    id: "106",
    price: 95,
    img: "",
    category: "Other",
  },
  {
    name: "Gudd vali chaah",
    id: "107",
    price: 25,
    img: "",
    category: "Other",
  },

  {
    name: "Rajma",
    id: "108",
    price: 150,
    img: "",
    category: "Other",
  },
  {
    name: "Masala papd",
    id: "109",
    price: 50,
    img: "",
    category: "Other",
  },
  {
    name: "plane papad",
    id: "110",
    price: 20,
    img: "",
    category: "Other",
  },
  {
    name: "Mutter methi",
    id: "111",
    price: 180,
    img: "",
    category: "Other",
  },
  {
    name: "Mushroom masala",
    id: "112",
    price: 220,
    img: "",
    category: "Other",
  },
  {
    name: "Rara chicken",
    id: "113",
    price: 500,
    img: "",
    category: "Other",
  },
  {
    name: "half Rara chicken",
    id: "114",
    price: 280,
    img: "",
    category: "Other",
  },
];

let waiters = [
  {
    name: "PACKING",
    id: "1",
  },
  {
    name: "Sobin",
    id: "2",
  },
  {
    name: "Shaam",
    id: "3",
  },
  {
    name: "Jassi",
    id: "4",
  },
  {
    name: "VK",
    id: "5",
  },
  {
    name: "Kishan",
    id: "6",
  },
  {
    name: "Dheeraj",
    id: "7",
  },
  {
    name: "Ram avtar",
    id: "8",
  },
  {
    name: "Pandari",
    id: "9",
  },
  {
    name: "Surjit",
    id: "10",
  },
];

let categories = [
  "veggies",
  "beverages",
  "parantha",
  "sides",
  "chicken",
  "Roti",
  "Other",
];

let tables = {};

let paidBills = [];

let KOT = [];

let allTotals = [];

let numberoftables = 0;

let addTableBtn = document.getElementById("addtable");

let total = 0;

let selectedTable = null; // Variable to store the selected table

// Select the right-container div
const rightContainer = document.querySelector(".right-container");
const payContainer = document.querySelector(".pay-container");
const billContainer = document.querySelector(".bill-container");
const billContainer2 = document.querySelector(".bill-container2");
const modal = document.getElementById("largeModal");
const closeButton = document.querySelector(".modal-header .close");
const Modal2Content = document.getElementById("editOrder");

closeButton.addEventListener("click", closeModal);

function showModal() {
  const modal = document.getElementById("largeModal");
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
}

function closeModal() {
  const modal = document.getElementById("largeModal");
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}

function showModal2() {
  const modal = document.getElementById("Modal2");
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
}

function closeModal2() {
  const modal = document.getElementById("Modal2");
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}

function showModal3() {
  const modal = document.getElementById("Modal3");
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
}

function closeModal3() {
  const modal = document.getElementById("Modal3");
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}

function showModal4() {
  const modal = document.getElementById("Modal4");
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
}

function closeModal4() {
  const modal = document.getElementById("Modal4");
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}

function retrieveTablesFromLocalStorage() {
  let storedTables = JSON.parse(localStorage.getItem("tables"));

  if (storedTables) {
    for (let key in storedTables) {
      if (storedTables.hasOwnProperty(key)) {
        let table = storedTables[key];

        let inputValue = table.tableId;

        let div = document.createElement("div");
        let div2 = document.createElement("div");

        numberoftables++;

        div.classList.add("btn", "btn-outline-secondary", "tablebtn");
        div.setAttribute("id", `table${inputValue}`);
        div.setAttribute("onClick", `generateBill('table${inputValue}')`);
        div2.classList.add("menu");

        div.innerText = "Table " + inputValue + "\n" + table.waiter;

        div2.appendChild(div);
        document.querySelector(".row").appendChild(div2);

        // Add a new key-value pair to the tables object
        tables[`table${inputValue}`] = {
          tableId: inputValue,
          order: table.order,
          finalorder: table.finalorder,
          total: table.total,
          waiter: table.waiter,
        };
      }
    }

    // Update paidBills and allTotals arrays from local storage
    let storedPaidBills = JSON.parse(localStorage.getItem("paidBills"));
    let storedAllTotals = JSON.parse(localStorage.getItem("allTotals"));

    if (storedPaidBills) {
      paidBills = storedPaidBills;
    }

    if (storedAllTotals) {
      allTotals = storedAllTotals;
    }

    // console.log("All tables below");
    // console.log(tables);

    // console.log("All paid bills below");
    // console.log(paidBills);

    return tables;
  } else {
    return {};
  }
}

retrieveTablesFromLocalStorage();

function deleteAllData() {
  let askUser = prompt("type DELETE for deleting all data");

  if (askUser == "delete") {
    // Clear the variables
    tables = {};
    paidBills = [];
    allTotals = [];
    numberoftables = 0;

    // Clear the local storage
    localStorage.removeItem("tables");
    localStorage.removeItem("paidBills");
    localStorage.removeItem("allTotals");

    // Remove all table elements from the DOM
    const tableElements = document.querySelectorAll(".tablebtn");
    tableElements.forEach((element) => {
      element.parentNode.remove();
    });

    // Reset the selectedTable variable
    selectedTable = null;

    alert("Data deleted successfully !!");
  } else {
  }
}

addTableBtn.addEventListener("click", function () {
  const inputElement = document.getElementById("inputTable");
  const inputValue = inputElement.value;

  // Check if the table already exists
  if (tables[`table${inputValue}`] || inputValue <= 0) {
    alert(`Table ${inputValue} cannot be added`);
    return;
  }

  ///////////////////  waiter selection ////////////////////////

  let waiter = "#";

  /////////////////////////////////////////////////////////////////

  let div = document.createElement("div");
  let div2 = document.createElement("div");

  numberoftables++;

  div.classList.add("btn", "btn-outline-secondary");
  div.setAttribute("id", `table${inputValue}`);
  div.setAttribute("onClick", `generateBill('table${inputValue}')`);
  div2.classList.add("menu");

  div.innerText = "Table " + inputValue + "\n" + waiter;

  div2.appendChild(div);
  document.querySelector(".row").appendChild(div2);

  // Add a new key-value pair to the tables object
  tables[`table${inputValue}`] = {
    tableId: inputValue,
    order: [],
    finalorder: [],
    total: 0,
    waiter: waiter,
  };
  localStorage.setItem("tables", JSON.stringify(tables));
  showModal3();
  selectedTable = `table${inputValue}`;
});

function createWaiters() {
  // Get the element where waiters will be appended
  const waiterContainer = document.getElementById("Modal3Content");

  // Clear any existing content in the container
  waiterContainer.innerHTML = "";

  // Loop through the waiters array
  for (let waiter of waiters) {
    // Create a new div element for each waiter
    const div = document.createElement("div");
    div.classList.add("btn", "btn-danger", "waiters");

    div.setAttribute("id", waiter.id);

    div.addEventListener("click", function () {
      selectWaiter(waiter);
    });

    // Set the content or styling for the waiter div
    div.textContent = waiter.name; // Replace with the appropriate waiter property

    // Append the waiter div to the waiter container
    waiterContainer.appendChild(div);
  }
}
createWaiters();

function selectWaiter(waiter) {
  tables[selectedTable].waiter = waiter.name;
  document.getElementById(selectedTable).innerText =
    "Table " + tables[selectedTable].tableId + "\n" + waiter.name;
  closeModal3();
  generateBill(selectedTable);
}

function createMenu() {
  ////////////// categories
  for (let i = 0; i < categories.length; i++) {
    const item = categories[i];

    let div = document.createElement("div");
    div.classList.add("btn", "btn-primary", "categories");

    div.setAttribute("id", categories[i]);

    div.innerText = categories[i];

    div.addEventListener("click", function () {
      showMenu(item);
    });

    document.querySelector(".mid-container").appendChild(div);
  }
}
createMenu();

function showMenu(category) {
  const smallMidContainer = document.querySelector(".small-mid-container");
  smallMidContainer.innerHTML = "";
  if (category == "veggies") {
    smallMidContainer.innerHTML = `<div>${category}: </div>`;
    veggies();
  }

  if (category == "beverages") {
    smallMidContainer.innerHTML = `<div>${category}: </div>`;
    beverages();
  }

  if (category == "parantha") {
    smallMidContainer.innerHTML = `<div>${category}: </div>`;
    parantha();
  }

  if (category == "sides") {
    smallMidContainer.innerHTML = `<div>${category}: </div>`;
    sides();
  }

  if (category == "chicken") {
    smallMidContainer.innerHTML = `<div>${category}: </div>`;
    chicken();
  }

  if (category == "Roti") {
    smallMidContainer.innerHTML = `<div>${category}: </div>`;
    Roti();
  }

  if (category == "Other") {
    smallMidContainer.innerHTML = `<div>${category}: </div>`;
    Other();
  }
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
function veggies() {
  ///////////////////////////////////// loop 1

  for (let i = 0; i < 20; i++) {
    const item = menu[i];

    let div = document.createElement("div");
    div.classList.add("btn", "btn-danger", "menuitems");

    div.setAttribute("id", item.id);

    div.innerText = item.name;

    div.addEventListener("click", function () {
      addToBill(item);
    });

    document.querySelector(".small-mid-container").appendChild(div);
  }
}

function beverages() {
  /////////////////// loop 2

  for (let i = 20; i < 25; i++) {
    const item = menu[i];

    let div = document.createElement("div");
    div.classList.add("btn", "btn-danger", "menuitems");

    div.setAttribute("id", item.id);

    div.innerText = item.name;

    div.addEventListener("click", function () {
      addToBill(item);
    });

    document.querySelector(".small-mid-container").appendChild(div);
  }
}

function parantha() {
  ////////////// loop 3
  for (let i = 25; i < 30; i++) {
    const item = menu[i];

    let div = document.createElement("div");
    div.classList.add("btn", "btn-danger", "menuitems");

    div.setAttribute("id", item.id);

    div.innerText = item.name;

    div.addEventListener("click", function () {
      addToBill(item);
    });

    document.querySelector(".small-mid-container").appendChild(div);
  }
}

function sides() {
  /////////// loop 4
  for (let i = 30; i < 51; i++) {
    const item = menu[i];

    let div = document.createElement("div");
    div.classList.add("btn", "btn-danger", "menuitems");

    div.setAttribute("id", item.id);

    div.innerText = item.name;

    div.addEventListener("click", function () {
      addToBill(item);
    });

    document.querySelector(".small-mid-container").appendChild(div);
  }
}

function chicken() {
  /////////// loop 5
  for (let i = 51; i < 77; i++) {
    const item = menu[i];

    let div = document.createElement("div");
    div.classList.add("btn", "btn-danger", "menuitems");

    div.setAttribute("id", item.id);

    div.innerText = item.name;

    div.addEventListener("click", function () {
      addToBill(item);
    });

    document.querySelector(".small-mid-container").appendChild(div);
  }
}

function Roti() {
  /////////// loop 6
  for (let i = 77; i < 85; i++) {
    const item = menu[i];

    let div = document.createElement("div");
    div.classList.add("btn", "btn-warning", "menuitems");

    div.setAttribute("id", item.id);

    div.innerText = item.name;

    div.addEventListener("click", function () {
      addRoti(item);
    });

    document.querySelector(".small-mid-container").appendChild(div);
  }
}

function Other() {
  /////////// loop 7
  for (let i = 85; i < menu.length; i++) {
    const item = menu[i];

    let div = document.createElement("div");
    div.classList.add("btn", "btn-danger", "menuitems");

    div.setAttribute("id", item.id);

    div.innerText = item.name;

    div.addEventListener("click", function () {
      addToBill(item);
    });

    document.querySelector(".small-mid-container").appendChild(div);
  }

  let div = document.createElement("div");
  div.classList.add("btn", "btn-success", "menuitems");

  div.setAttribute("id", "item.id");

  div.innerText = "+";

  div.addEventListener("click", function () {
    let newitem = {
      name: prompt("NAME"),
      id: "116",
      price: Number(prompt("PRICE")),
      img: "",
      category: "Other",
    };

    addToBill(newitem);
  });

  document.querySelector(".small-mid-container").appendChild(div);
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
function addRoti(item) {
  let count = Number(prompt("Please enter quantity: "));

  // Create a copy of the item
  const itemCopy = { ...item };
  itemCopy.count = count; // Add the count property
  itemCopy.price = count * itemCopy.price;

  const itemInfoDiv = document.createElement("div");
  itemInfoDiv.setAttribute("id", `bill${itemCopy.id}`);
  itemInfoDiv.setAttribute("class", "billing");
  itemInfoDiv.innerText = count + " " + itemCopy.name + " - " + itemCopy.price;
  billContainer.appendChild(itemInfoDiv);

  // Add the item copy to the order for the selected table
  if (selectedTable) {
    tables[selectedTable].order.push(itemCopy);
    tables[selectedTable].total += itemCopy.price;
  }

  total += itemCopy.price;

  // Add a click event listener to the item in the bill container
  itemInfoDiv.addEventListener("click", function () {
    deleteItem(itemInfoDiv.id);
  });

  console.log(itemCopy);
}

function addToBill(item) {
  const itemInfoDiv = document.createElement("div");
  itemInfoDiv.setAttribute("id", `bill${item.id}`);
  itemInfoDiv.setAttribute("class", "billing");
  itemInfoDiv.innerText = item.name + " - " + item.price;
  billContainer.appendChild(itemInfoDiv);

  // Add the item to the order for the selected table
  if (selectedTable) {
    tables[selectedTable].order.push(item);
    tables[selectedTable].total += item.price;
  }

  total += item.price;

  // Add a click event listener to the item in the bill container
  itemInfoDiv.addEventListener("click", function () {
    deleteItem(itemInfoDiv.id);
  });
}

function deleteItem(itemId) {
  // Remove the item from the bill container
  const itemElement = document.getElementById(itemId);
  itemElement.remove();
  let newitemelementID = itemId.replace("bill", "");

  for (let i = 0; i < tables[selectedTable].order.length; i++) {
    let item = tables[selectedTable].order[i].id;
    if (item == newitemelementID) {
      // Subtract the price of the deleted item from the total
      tables[selectedTable].total -= tables[selectedTable].order[i].price;

      // Remove the item from the order array
      tables[selectedTable].order.splice(i, 1);
      break;
    }
  }
}

function deleteItem2(itemId) {
  // Remove the item from the bill container
  const itemElement = document.getElementById(itemId);
  itemElement.remove();
  let newitemelementID = itemId.replace("bill", "");

  for (let i = 0; i < tables[selectedTable].finalorder.length; i++) {
    let item = tables[selectedTable].finalorder[i].id;
    if (item == newitemelementID) {
      // Subtract the price of the deleted item from the total
      tables[selectedTable].total -= tables[selectedTable].finalorder[i].price;

      // Remove the item from the order array
      tables[selectedTable].finalorder.splice(i, 1);

      break;
    }
  }
}

function clearbill() {
  // Remove all child elements from the bill container
  while (billContainer.firstChild) {
    billContainer.removeChild(billContainer.firstChild);
  }
  // Save the data to local storage
  localStorage.setItem("tables", JSON.stringify(tables));

  // Save the total amount of the bill and the items to an array/object
  const activeTable = selectedTable;

  closeModal();
  // Reset the total to 0
}

function deleteTable() {
  const activeTable = selectedTable;

  let ask = prompt("type DELETE for deleting the table");

  if (ask == "delete") {
    // Remove the table from the tables object
    delete tables[activeTable];

    selectedTable = null; // Reset the selectedTable variable

    // Remove the table from the DOM
    const tableElement = document.getElementById(activeTable);
    if (tableElement) {
      tableElement.parentNode.remove();
    }

    localStorage.setItem("tables", JSON.stringify(tables));
    closeModal();
  } else {
    alert("Table cannot be deleted !");
  }
}

function paidButton() {
  closeModal();
  showModal4();
  createCashInput();
}

function createCashInput() {
  // Get the modal content element
  const modalContent = document.getElementById("Modal4Content");

  // Clear the existing content
  modalContent.innerHTML = "";

  // Create the cash input section
  const cashInputSection = document.createElement("div");
  cashInputSection.classList.add("cash2");
  cashInputSection.setAttribute("id", "cash2");

  // Create the input group
  const inputGroup = document.createElement("div");
  inputGroup.classList.add("input-group", "input-group-lg");

  // Create the input group prepend element
  const inputGroupPrepend = document.createElement("div");
  inputGroupPrepend.classList.add("input-group-prepend");

  // Create the cash input element
  const cashInput = document.createElement("input");
  cashInput.id = "cashinput";
  cashInput.type = "number";
  cashInput.classList.add("form-control");
  cashInput.setAttribute("aria-label", "Large");
  cashInput.setAttribute("aria-describedby", "inputGroup-sizing-sm");

  // Create the cash input button
  const cashInputBtn = document.createElement("button");
  cashInputBtn.classList.add("btn", "btn-success");
  cashInputBtn.id = "cashinputbtn";
  cashInputBtn.style.width = "200px";
  cashInputBtn.textContent = "DONE";
  cashInputBtn.addEventListener("click", cashdone);

  // Append the input and button to the input group
  inputGroup.appendChild(inputGroupPrepend);
  inputGroup.appendChild(cashInput);
  inputGroup.appendChild(cashInputBtn);

  // Append the input group to the cash input section
  cashInputSection.appendChild(inputGroup);

  // Create the cash buttons
  const cashValues = [100, 200, 300, 400, 500, 1000, 1500, 2000];
  for (let value of cashValues) {
    const cashButton = document.createElement("div");
    cashButton.classList.add("btn", "btn-primary", "cash");
    cashButton.textContent = value;
    cashButton.addEventListener("click", function () {
      cashInput.value = value;
    });
    cashInputSection.appendChild(cashButton);
  }

  // Create the skip button element
  const skipButton = document.createElement("div");
  skipButton.classList.add("btn", "btn-warning", "cash");
  skipButton.textContent = "Skip";
  skipButton.addEventListener("click", skipcash);
  cashInputSection.appendChild(skipButton);
  // Append the cash input section to the modal content
  modalContent.appendChild(cashInputSection);
}

function skipcash() {
  clearbill2();
  closeModal4();
}

function cashdone() {
  let cash = Number(document.getElementById("cashinput").value);

  if (cash >= tables[selectedTable].total) {
    const modalContent = document.getElementById("Modal4Content");
    modalContent.innerHTML = "";

    // Create the "Cash accepted" div
    const cashAcceptedDiv = document.createElement("div");
    cashAcceptedDiv.classList.add("btn", "btn-warning", "sukh");
    cashAcceptedDiv.textContent = "Cash accepted: " + cash;

    // Create the "Bill" div
    const billDiv = document.createElement("div");
    billDiv.classList.add("btn", "btn-danger", "sukh");
    billDiv.textContent = "Bill: " + tables[selectedTable].total;

    // Create the "Change due" div
    const changeDueDiv = document.createElement("div");
    changeDueDiv.classList.add("btn", "btn-success", "sukh");
    const change = cash - tables[selectedTable].total;
    changeDueDiv.textContent = "Change due: " + change;

    // Append the divs to the modal content
    modalContent.appendChild(cashAcceptedDiv);
    modalContent.appendChild(billDiv);
    modalContent.appendChild(changeDueDiv);

    clearbill2();
  } else {
    const div = document.createElement("div");
    div.classList.add("btn", "btn-warning");
    div.textContent = "insufficient cash !";

    document.getElementById("Modal4Content").prepend(div);
  }

  closeModal4AfterDelay();
}

function closeModal4AfterDelay() {
  setTimeout(closeModal4, 5000); // Close modal after 5 seconds (5000 milliseconds)
}

function clearbill2() {
  const activeTable = selectedTable;
  const tableNumber = activeTable.replace("table", "");
  const itemsToMove = tables[activeTable].order.splice(0);
  tables[activeTable].finalorder.push(...itemsToMove);

  const paidBill = {
    tableId: tableNumber,
    totalAmount: tables[activeTable].total,
    items: [...tables[activeTable].finalorder],
  };
  paidBills.push(paidBill);
  allTotals.push(tables[activeTable].total);
  total = 0;

  // Remove the table from the tables object
  delete tables[activeTable];

  selectedTable = null; // Reset the selectedTable variable

  // Remove the table from the DOM
  const tableElement = document.getElementById(activeTable);
  if (tableElement) {
    tableElement.parentNode.remove();
  }

  // Save the data to local storage
  localStorage.setItem("tables", JSON.stringify(tables));
  localStorage.setItem("paidBills", JSON.stringify(paidBills));
  localStorage.setItem("allTotals", JSON.stringify(allTotals));

  closeModal();
}

function printAllBills() {
  let receiptContent;
  for (let i = 0; i < paidBills.length; i++) {
    const paidBill = paidBills[i];
    receiptContent += generateReceiptContent(paidBill);
  }
  // Open a new window and write the receipt content to it
  let printWindow = window.open("", "Print", "height=600,width=800");
  printWindow.document.write(receiptContent);
  // Print the receipt
  printWindow.print();
  printWindow.close();
}

function Printpaidbill() {
  let tableId = Number(prompt("Enter table ID: "));

  for (let i = 0; i < paidBills.length; i++) {
    let sukh = paidBills[i].tableId;
    if (sukh == tableId) {
      paidBill = paidBills[i];
    }
  }

  if (paidBill) {
    const receiptContent = generateReceiptContent(paidBill);

    // Open a new window and write the receipt content to it
    let printWindow = window.open("", "Print", "height=600,width=800");
    printWindow.document.write(receiptContent);

    // Print the receipt
    printWindow.print();
    printWindow.close();
  } else {
    alert(`Table ${tableId} does not have a paid bill.`);
  }
}

function generateReceiptContent(paidBill) {
  const tableNumber = paidBill.tableId;
  let receiptContent = "<h1>Babe da dhaba - Table " + tableNumber + "</h1>";
  receiptContent += "<ul>";

  // Loop through the items in the paidBill and add them to the receipt content
  for (let i = 0; i < paidBill.items.length; i++) {
    const item = paidBill.items[i];
    receiptContent += "<li>" + item.name + " - $" + item.price + "</li>";
  }

  receiptContent += "</ul>";

  // Add the total amount to the receipt content
  receiptContent += "<h2>Total: " + paidBill.totalAmount + "</h2>";

  return receiptContent;
}

function showOrder() {
  while (Modal2Content.firstElementChild) {
    Modal2Content.firstElementChild.remove();
  }
  Modal2Content.innerText =
    "Table " +
    tables[selectedTable].tableId +
    " " +
    tables[selectedTable].waiter;

  /////////////////////////// /////////////////////
  order = tables[selectedTable].finalorder;

  for (let i = 0; i < order.length; i++) {
    const itemInfoDiv = document.createElement("div");
    itemInfoDiv.setAttribute("id", `bill${order[i].id}`);
    itemInfoDiv.setAttribute("class", "billing");
    // Add a click event listener to the item in the bill container
    itemInfoDiv.addEventListener("click", function () {
      deleteItem2(itemInfoDiv.id);
    });

    if (order[i].count) {
      itemInfoDiv.innerText +=
        order[i].count + " " + order[i].name + " - " + order[i].price;
    } else {
      itemInfoDiv.innerText += order[i].name + " - " + order[i].price;
    }
    Modal2Content.appendChild(itemInfoDiv);
  }
  closeModal();
  showModal2();
}

function generateBill(tableId) {
  selectedTable = tableId;

  showModal();

  if (tables[selectedTable].waiter == "#") {
    showModal3();
  }

  document.querySelector(".modal-title").innerHTML =
    "Table " +
    tables[selectedTable].tableId +
    " " +
    tables[selectedTable].waiter;

  ////////////////////////////////     BILL CONTAINER -  1

  let order = tables[tableId].order;
  billContainer.innerHTML = "KOT: ";

  for (let i = 0; i < order.length; i++) {
    const itemInfoDiv = document.createElement("div");
    itemInfoDiv.setAttribute("id", `bill${order[i].id}`);
    itemInfoDiv.setAttribute("class", "billing");
    // Add a click event listener to the item in the bill container
    itemInfoDiv.addEventListener("click", function () {
      deleteItem(itemInfoDiv.id);
    });

    if (order[i].count) {
      itemInfoDiv.innerText +=
        order[i].count + " " + order[i].name + " - " + order[i].price;
    } else {
      itemInfoDiv.innerText += order[i].name + " - " + order[i].price;
    }

    billContainer.appendChild(itemInfoDiv);
  }

  ////////////////////////////////     BILL CONTAINER -  2
  order = tables[tableId].finalorder;
  total = 0;
  billContainer2.innerHTML = "BILL: ";

  for (let i = 0; i < order.length; i++) {
    const itemInfoDiv = document.createElement("div");
    // itemInfoDiv.setAttribute("id", `bill${order[i].id}`);
    itemInfoDiv.setAttribute("class", "billing2");

    if (order[i].count) {
      itemInfoDiv.innerText +=
        order[i].count + " " + order[i].name + " - " + order[i].price;
    } else {
      itemInfoDiv.innerText += order[i].name + " - " + order[i].price;
    }
    billContainer2.appendChild(itemInfoDiv);
    total += order[i].price;
  }

  document.getElementById(
    "total"
  ).innerText = `total = ${tables[tableId].total}`;
}

function printKOT() {
  const activeTable = selectedTable;
  const tableNumber = activeTable.replace("table", "");
  let receiptContent = `
  <h1 style="text-align: center; ">Babe da dhaba</h1>
  <h2 style="text-align: center; ">Table ${tableNumber}- ${tables[selectedTable].waiter}</h2>
  <hr style="border: none; border-bottom: 1px solid #eee; margin: 10px 0;">
  <ul style="list-style: none; padding: 0; margin: 0; text-align: center; font-size:30px;">
`;

  // Loop through the items in the bill container and add them to the receipt content

  for (let i = 0; i < tables[selectedTable].order.length; i++) {
    if (tables[selectedTable].order[i].count) {
      receiptContent +=
        "<li><span class='h3'>" +
        tables[selectedTable].order[i].count +
        " " +
        tables[selectedTable].order[i].name +
        "</span><li>";
    } else {
      receiptContent += "<li>" + tables[selectedTable].order[i].name;
    }
  }

  receiptContent += `</ul><hr style="border: none; border-bottom: 1px solid #eee; margin: 10px 0;">`;

  // receiptContent += "<h2>KOT AMOUNT: $" + tables[selectedTable].total + "</h2>";

  // Open a new window and write the receipt content to it
  let printWindow = window.open("", "Print", "height=600,width=800");
  printWindow.document.write(receiptContent);

  // Print the receipt
  printWindow.print();
  printWindow.close();
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  // Generate a random 4-digit order ID
  const randomOrderID = Math.floor(1000 + Math.random() * 9000).toString();

  // Prepare payload for server with the generated order ID
  const payload = {
    tableNumber: tableNumber,
    finalOrder: tables[activeTable].order,
    waiter: tables[activeTable].waiter,
    orderID: randomOrderID, // Add the generated order ID to the payload
  };

  // Send payload to server
  fetch("/submit-final-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Final order sent successfully");
        // Additional success handling code here
      } else {
        console.error("Error sending final order");
        // Additional error handling code here
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      // Additional exception handling code here
    });
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////

  // Move the items from the order array to the finalorder array of the selected table
  const itemsToMove = tables[activeTable].order.splice(0);
  tables[activeTable].finalorder.push(...itemsToMove);

  // Remove all child elements from the bill container
  while (billContainer.firstChild) {
    billContainer.removeChild(billContainer.firstChild);
  }
  // Save the data to local storage
  localStorage.setItem("tables", JSON.stringify(tables));

  console.log(tables[selectedTable]);

  closeModal();
}

// function printReceipt() {
//   const activeTable = selectedTable;
//   const itemsToMove = tables[activeTable].order.splice(0);
//   tables[activeTable].finalorder.push(...itemsToMove);
//   const tableNumber = activeTable.replace("table", "");
//   let receiptContent = "<h1>Babe da dhaba - Table " + tableNumber + "</h1>";

//   receiptContent += "<ul>";

//   // Loop through the items in the bill container and add them to the receipt content

//   for (let i = 0; i < tables[selectedTable].finalorder.length; i++) {
//     if (tables[selectedTable].finalorder[i].count) {
//       receiptContent +=
//         "<li>" +
//         tables[selectedTable].finalorder[i].count +
//         " " +
//         tables[selectedTable].finalorder[i].name +
//         " - " +
//         tables[selectedTable].finalorder[i].price +
//         "</li>";
//     } else {
//       receiptContent +=
//         "<li>" +
//         tables[selectedTable].finalorder[i].name +
//         " - " +
//         tables[selectedTable].finalorder[i].price +
//         "</li>";
//     }
//   }

//   receiptContent += "</ul>";

//   // tax system///////////////////////////

//   let tax = document.getElementById("tax").value;
//   let discount = document.getElementById("discount").value;
//   if (tax > 0) {
//     tables[selectedTable].total += (tables[selectedTable].total * tax) / 100;
//     receiptContent +=
//       `<p>Tax (${tax}) :` + (tables[selectedTable].total * tax) / 100 + "<p>";
//   }

//   if (discount > 0) {
//     tables[selectedTable].total -= discount;
//     receiptContent += "<p>discount: " + discount + "<p>";
//   }

//   // round off
//   tables[selectedTable].total -= tables[selectedTable].total % 5;

//   // Add the total amount to the receipt content

//   receiptContent += "<h2>Total: " + tables[selectedTable].total + "</h2>";

//   // Open a new window and write the receipt content to it
//   let printWindow = window.open("", "Print", "height=auto,width=800");
//   printWindow.document.write(receiptContent);

//   // Print the receipt

//   printWindow.print();

//   printWindow.resizeTo(500, 500);
//   console.log("window height");
//   console.log(printWindow.innerHeight);
//   printWindow.close();

//   // reset tax and discount
//   document.getElementById("tax").value = null;
//   document.getElementById("discount").value = null;
// }

function printReceipt() {
  const activeTable = selectedTable;
  const itemsToMove = tables[activeTable].order.splice(0);
  tables[activeTable].finalorder.push(...itemsToMove);
  const tableNumber = activeTable.replace("table", "");
  let receiptContent = `
    <h1 style="text-align: center; ">Babe da dhaba</h1>
    <h2 style="text-align: center; ">Table ${tableNumber}</h2>
    <hr style="border: none; border-bottom: 1px solid #eee; margin: 10px 0;">
    <ul style="list-style: none; padding: 0; margin: 0;">
`;

  // Loop through the items in the bill container and add them to the receipt content

  for (let i = 0; i < tables[selectedTable].finalorder.length; i++) {
    if (tables[selectedTable].finalorder[i].count) {
      receiptContent +=
        "<li>" +
        tables[selectedTable].finalorder[i].count +
        " " +
        tables[selectedTable].finalorder[i].name +
        " - " +
        tables[selectedTable].finalorder[i].price +
        "</li>";
    } else {
      receiptContent +=
        "<li>" +
        tables[selectedTable].finalorder[i].name +
        " - " +
        tables[selectedTable].finalorder[i].price +
        "</li>";
    }
  }

  receiptContent += `<hr style="border: none; border-bottom: 1px solid #eee; margin: 10px 0;">`;

  // tax system///////////////////////////

  let tax = document.getElementById("tax").value;
  let discount = document.getElementById("discount").value;
  if (tax > 0) {
    tables[selectedTable].total += (tables[selectedTable].total * tax) / 100;
    receiptContent +=
      `<p>Tax (${tax}%) :` + (tables[selectedTable].total * tax) / 100 + "<p>";
  }

  if (discount > 0) {
    tables[selectedTable].total -= discount;
    receiptContent += "<p>discount: " + discount + "<p>";
  }

  // round off
  tables[selectedTable].total =
    Math.round(tables[selectedTable].total / 10) * 10;

  // Add the total amount to the receipt content

  receiptContent += `
  <div style="text-align: center; margin-top: 20px;">
    <h2>Total:${tables[selectedTable].total}</h2>
  </div>
`;
  // Open a new window and write the receipt content to it
  let printWindow = window.open("", "Print", "height=auto,width=800");
  printWindow.document.write(receiptContent);

  // Print the receipt

  printWindow.print();

  printWindow.resizeTo(500, 500);
  console.log("window height");
  console.log(printWindow.innerHeight);
  printWindow.close();

  // reset tax and discount
  document.getElementById("tax").value = null;
  document.getElementById("discount").value = null;
}

document.getElementById("pay").addEventListener("click", function () {
  if (selectedTable) {
    printReceipt();
    clearbill();
  } else {
    alert("Please select a table to generate the bill.");
  }
});

// var myModal = new bootstrap.Modal(
//   document.getElementById("exampleModalCenter")
// );
// document.getElementById("openModal").addEventListener("click", function () {
//   myModal.show();
// });

function printTotalSale() {
  let sum = 0;
  let count = 1;
  let output = "<h1> BABE DA DHABA SALE </h1>";
  for (const total of allTotals) {
    output += `bill  ${count}:  ` + total + "<br>";
    sum += total;
    count++;
  }
  output += "Total sale for the day: " + sum;
  let printWindow = window.open("", "", "height=500,width=500");
  printWindow.document.write("<html><head><title>Total Sale</title>");
  printWindow.document.write("</head><body >");
  printWindow.document.write(output);
  printWindow.document.write("</body></html>");
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

const MenuItems = {};

function countItemsWithZero(menu) {
  for (const item of menu) {
    MenuItems[item.name] = { count: 0 };
  }
  return MenuItems;
}

countItemsWithZero(menu);

// function updateItemCount() {
//   // console.log(paidBills[1].items[0].name);
//   for (const x of paidBills) {
//     for (const y of x.items) {
//       // console.log(y.name); // chicken fry
//       MenuItems[y.name].count++;
//     }
//   }
//   console.log(MenuItems);
// }

function updateItemCount(paidBills) {
  paidBills.forEach((bill) => {
    bill.items.forEach((item) => {
      MenuItems[item.name] = MenuItems[item.name] || { count: 0 };
      MenuItems[item.name].count++;
    });
  });

  const receiptContent =
    `Item Receipt\n\nItem Name\tCount\n-------------------------\n` +
    Object.entries(MenuItems)
      .map(([name, { count }]) => `${name}\t${count}`)
      .join("\n");

  console.log(receiptContent);

  if (typeof window !== "undefined") {
    const printWindow = window.open("", "PRINT", "height=600,width=800");
    printWindow.document.write(
      `
      <html>
      <head>
        <title>Item Receipt</title>
      </head>
      <body>
        <h2>Item Receipt</h2>
        <table>
          <tr><th>Item Name</th><th>Count</th></tr>` +
        Object.entries(MenuItems)
          .map(
            ([name, { count }]) => `<tr><td>${name}</td><td>${count}</td></tr>`
          )
          .join("") +
        `</table>
      </body>
      </html>`
    );
    countItemsWithZero(menu);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  }
}
