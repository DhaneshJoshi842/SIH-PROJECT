
const { v4: uuidv4 } = require('uuid');
const themes = [
  {

    theme_id: 'bfacf42e-534a-4a90-a77b-86a5df65cac4',
    title: 'Digestive Health',
    description: 'Plants that aid in digestion and soothe the stomach.',
    image: 'https://tse4.mm.bing.net/th?id=OIP.0qz1qyWqpMdeHCos12qXrAHaEY&pid=Api&P=0&h=180',
    herbs: [
      {
        herb_id: '149cc173-8823-4bc2-9282-ac55d90ebd7b',
        botanicalName: 'Zingiber officinale',
        commonNames: ['Ginger', 'Adrak'],
        habitat: 'Tropical regions, cultivated worldwide',
        medicinalUses: 'Relieves nausea, aids digestion, reduces inflammation.',
        cultivationMethods: 'Requires warm climate, well-drained soil, and partial shade.',
        PreparationMethods: 'Used fresh or dried. Commonly consumed as tea or added to food.',
        image: 'https://www.lovethegarden.com/sites/default/files/content/articles/UK_fresh-ginger-harvested.jpg',
        vidio: '/vidios/Ginger.mp4',
        fav: false
      },
      {
        herb_id: '8ed147bc-4bdd-4527-9c97-380548d8922c',
        botanicalName: 'Mentha piperita',
        commonNames: ['Peppermint'],
        habitat: 'Temperate regions, commonly cultivated in gardens',
        medicinalUses: 'Soothes stomach, relieves indigestion, reduces bloating.',
        cultivationMethods: 'Grows in moist, shaded areas with rich soil.',
        PreparationMethods: "Consumed as tea, oil, or used in steam inhalation",
        image: 'https://www.gardeningknowhow.com/wp-content/uploads/2012/04/peppermint-1.jpg',
        vidio: '/vidios/papermint.mp4',
        fav: false
      },
      {
        herb_id: 'a354965d-d0e5-4833-a43a-c936cdc7bce7',
        botanicalName: 'Foeniculum vulgare',
        commonNames: ['Fennel', 'Saunf'],
        habitat: 'Mediterranean, cultivated worldwide',
        medicinalUses: 'Aids digestion, reduces bloating, and helps with colic.',
        cultivationMethods: 'Thrives in well-drained soil, full sun.',
        PreparationMethods: "Consumed as tea, raw seeds, or used in spice blends",
        image: 'https://bulkpricedfoodshoppe.com/wp-content/uploads/2017/02/product_1_0_102440.jpg',
        vidio: '/vidios/Fennel.mp4',

        fav: false
      }
    ],
    __v: 0
  },
  {

    theme_id: 'af7a9a1a-ec68-4cb3-947a-fcbf2701898c',
    title: 'Immunity',
    description: 'Herbs that boost the immune system.',
    image: 'https://i.ytimg.com/vi/oqF-xYF6YWU/maxresdefault.jpg',
    herbs: [
      {
        herb_id: '807c23a3-1dad-4f5c-8005-7f39db402f20',
        botanicalName: 'Ocimum tenuiflorum',
        commonNames: ['Tulsi', 'Holy Basil'],
        habitat: 'Native to India, grows in tropical and subtropical regions',
        medicinalUses: 'Boosts immunity, relieves stress, and fights infections.',
        cultivationMethods: 'Grows well in warm climates with full sun and regular watering.',
        PreparationMethods: "Consumed as tea, juice, or used in oil form",
        image: 'http://ayurvedicmagazine.com/wp-content/uploads/2016/01/tulsi.jpg',
        vidio: '/vidios/Tulsi.mp4',

        fav: false
      },
      {
        herb_id: '0546cc48-7907-4dab-90d1-641420e6ca72',
        botanicalName: 'Withania somnifera',
        commonNames: ['Ashwagandha', 'Indian Ginseng'],
        habitat: 'Native to India and North Africa, cultivated worldwide',
        medicinalUses: 'Strengthens immune system, reduces stress, and improves vitality.',
        cultivationMethods: 'Grows in well-drained soil, full sun, and requires little water.',
        PreparationMethods: "Consumed as powder, capsules, or brewed as tea",
        image: 'https://healthjade.com/wp-content/uploads/2018/07/ashwagandha.jpg',
        vidio: '/vidios/Aswagandha.mp4',

        fav: false
      },
      {
        herb_id: '10b337a0-7d28-4231-b295-2cacdeef0cec',
        botanicalName: 'Echinacea purpurea',
        commonNames: ['Echinacea', 'Purple Coneflower'],
        habitat: 'Native to North America, cultivated in gardens worldwide',
        medicinalUses: 'Enhances immune response, reduces symptoms of cold and flu.',
        cultivationMethods: 'Prefers well-drained soil, full sun, and regular watering.',
        PreparationMethods: "Consumed as tea, tincture, or in capsule form",
        image: 'https://worldoffloweringplants.com/wp-content/uploads/2014/05/Echinacea-purpurea-Eastern-Purple-Coneflower3.jpg',
        vidio: '/vidios/Echinacea.mp4',

        fav: false
      }
    ],
    __v: 0
  },
  {

    theme_id: 'd6df1924-a7a2-442d-99ed-a1fbffc8d6ca',
    title: 'Skin Care',
    description: 'Plants beneficial for skin health.',
    image: 'https://images.indianexpress.com/2021/08/skincare-1200.jpg',
    herbs: [
      {
        herb_id: 'bf92d7f9-d63c-48ed-ad03-4e21431d6276',
        botanicalName: 'Aloe barbadensis miller',
        commonNames: ['Aloe Vera'],
        habitat: 'Arid regions, cultivated worldwide',
        medicinalUses: 'Soothes burns, hydrates skin, and promotes healing.',
        cultivationMethods: 'Grows well in dry, well-drained soil with full sun.',
        PreparationMethods: "Applied topically as gel, consumed as juice, or used in supplements",
        image: 'https://eattheplanet.org/wp-content/uploads/2019/11/pisauikan-N29JXkNO1xI-unsplash-1.jpg',
        vidio: '/vidios/Alovera.mp4',

        fav: false
      },
      {
        herb_id: '1b7b3ea2-d829-44fd-a2e8-1e23467a5d0d',
        botanicalName: 'Azadirachta indica',
        commonNames: ['Neem', 'Indian Lilac'],
        habitat: 'Native to India, grows in tropical and subtropical regions',
        medicinalUses: 'Treats acne, purifies blood, and promotes healthy skin.',
        cultivationMethods: 'Thrives in hot, dry conditions with well-drained soil.',
        PreparationMethods: "Consumed as tea, applied topically as oil or paste, or used in supplements",
        image: 'https://static.toiimg.com/photo/68670559.cms',
        vidio: '/vidios/Neem.mp4',

        fav: false
      },
      {
        herb_id: 'c55ef1a4-a6b7-4257-8e80-b9f401c14ba6',
        botanicalName: 'Curcuma longa',
        commonNames: ['Turmeric', 'Haldi'],
        habitat: 'Native to South Asia, cultivated in tropical regions',
        medicinalUses: 'Reduces inflammation, treats skin conditions, and brightens complexion.',
        cultivationMethods: 'Requires warm climate, rich soil, and partial shade.',
        PreparationMethods: "Consumed as a spice in cooking, taken as a supplement, or used in topical applications",
        image: 'https://img.emedihealth.com/wp-content/uploads/2020/10/turmeric-feat-1.jpg',
        vidio: '/vidios/Turmeric.mp4',

        fav: false
      }
    ],
    __v: 0
  },
  {

    theme_id: 'f22ee202-8e69-4b39-a1f0-72337647029f',
    title: 'Mental Well-being',
    description: 'Herbs that promote mental clarity and reduce stress.',
    image: 'https://images.squarespace-cdn.com/content/v1/5a2aa80890bade905ec03b63/1559858321120-VQBFVFQYLLIUSPJSAWJ8/ke17ZwdGBToddI8pDm48kHqvmewmCIG7QDdQpyVL-DAUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcEtYpk1egnUeo1sf825yzRxZ3Xqz444rt58EgBS42yZ-MaGXfHmrZbHMRbEnVRkVX/AyurvedaMind_Conf_Logo_RGB.png',
    herbs: [
      {
        herb_id: '6b14f2f4-2059-4904-8afc-480396ad25ee',
        botanicalName: 'Bacopa monnieri',
        commonNames: ['Brahmi'],
        habitat: 'Native to India, found in wetlands',
        medicinalUses: 'Enhances memory, reduces anxiety, and improves cognitive function.',
        cultivationMethods: 'Thrives in moist, boggy conditions with partial shade.',
        PreparationMethods: "Consumed as a powder, in teas, or as capsules; can also be used in tinctures",
        image: 'https://www.itoozhiayurveda.in/wp-content/uploads/2019/05/Brahmi.jpg',
        vidio: '/vidios/Brahmi.mp4',

        fav: false
      },
      {
        herb_id: '2707c788-3378-4676-aef0-6124e8367da1',
        botanicalName: 'Matricaria chamomilla',
        commonNames: ['Chamomile'],
        habitat: 'Native to Europe, cultivated worldwide',
        medicinalUses: 'Reduces anxiety, promotes relaxation, and aids sleep.',
        cultivationMethods: 'Grows well in well-drained soil, full sun, and regular watering.',
        PreparationMethods: "Consumed as a tea, used as an extract, or applied as a topical compress",
        image: 'https://fthmb.tqn.com/WKV53AQuXN8v6tuwBtkOIAGLUVQ=/2118x1418/filters:fill(auto,1)/172315301-56a34a505f9b58b7d0d14ead.jpg',
        vidio: '/vidios/Chamomile.mp4',

        fav: false
      },
      {
        herb_id: 'e4865e7d-435a-4e3b-a947-a9f2c658f75d',
        botanicalName: 'Nardostachys jatamansi',
        commonNames: ['Jatamansi', 'Spikenard'],
        habitat: 'Native to the Himalayas, grows in alpine regions',
        medicinalUses: 'Reduces stress, promotes mental calmness, and improves sleep.',
        cultivationMethods: 'Requires cool climate, well-drained soil, and partial shade.',
        PreparationMethods: "Consumed as a powder, used in tinctures, or applied as an essential oil",
        image: 'https://www.chandigarhayurvedcentre.com/wp-content/uploads/2020/10/JATAMANSI.jpg',
        vidio: '/vidios/Jasmanti.mp4',

        fav: false
      }
    ],
    __v: 0
  },
  {

    theme_id: '362a1f70-72bc-4997-90e3-58ab5c7fc3b7',
    title: 'Detoxification',
    description: 'Plants that support body detox and liver health.',
    image: 'https://images.healthshots.com/healthshots/en/uploads/2022/11/09145939/detox.jpg',
    herbs: [
      {
        herb_id: '06ad64fe-ca93-411b-8682-da5155a0d9d5',
        botanicalName: 'Taraxacum officinale',
        commonNames: ['Dandelion'],
        habitat: 'Native to Europe, Asia, and North America, found in meadows',
        medicinalUses: 'Supports liver detox, improves digestion, and acts as a diuretic.',
        cultivationMethods: 'Grows in well-drained soil, full sun, and regular watering.',
        PreparationMethods: "Consumed as tea, tincture, or used in salads; roots can be roasted and used as a coffee substitute",
        image: 'https://tse4.mm.bing.net/th?id=OIP.n-jKv5m2Pa79WxQQdWH6agHaE8&pid=Api&P=0&h=180',
        vidio: '/vidios/Dandelion.mp4',
        fav: false
      },
      {
        herb_id: '68773d5b-174c-4bfb-81af-9492d087b460',
        botanicalName: 'Silybum marianum',
        commonNames: ['Milk Thistle'],
        habitat: 'Native to the Mediterranean, found in dry areas',
        medicinalUses: 'Protects liver, supports detox, and improves skin health.',
        cultivationMethods: 'Thrives in dry, well-drained soil with full sun.',
        PreparationMethods: "Consumed as capsules, tinctures, or tea; seeds can be ground and added to foods",
        image: 'https://www.thespruce.com/thmb/r-pMr5W9hX-_j_KkjBKGAKRBSyA=/6000x0/filters:no_upscale():max_bytes(150000):strip_icc()/growing-milk-thistle-5090128-04-c4a517185fb04c39a20ad3f2ea1827b3.jpg',
        vidio: '/vidios/Milk_Thistle.mp4',

        fav: false
      },
      {
        herb_id: '291dc0d0-749c-426c-b8d8-562b095dcea7',
        botanicalName: 'Emblica officinalis',
        commonNames: ['Amla', 'Indian Gooseberry'],
        habitat: 'Native to India, found in subtropical regions',
        medicinalUses: 'Detoxifies body, boosts immunity, and improves digestion.',
        cultivationMethods: 'Grows well in well-drained soil, full sun, and regular watering.',
        PreparationMethods: 'Amla can be prepared as juice, powder, oil, or candy, depending on the intended use.',
        image: 'https://www.forestaorganics.com/wp-content/uploads/2020/10/amla-heading-image-1024x805.jpg',
        vidio: '/vidios/Amla.mp4',
        fav: false
      }
    ],
    __v: 0
  }
]

module.exports = themes;
