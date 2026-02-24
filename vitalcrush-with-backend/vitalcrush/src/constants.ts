export interface Product {
  id: string;
  name: string;
  scientificName?: string;
  description: string;
  benefits: string[];
  usages: string[];
  image: string;
  category: 'Ayurvedic' | 'Fruit' | 'Vegetable' | 'Herb';
}

export const PRODUCTS: Product[] = [
  {
    id: 'moringa-powder',
    name: 'Moringa Powder',
    scientificName: 'Moringa oleifera',
    description: 'Known as the "Miracle Tree," our Moringa powder is a nutrient-dense superfood packed with vitamins, minerals, and all essential amino acids.',
    benefits: [
      'Extremely high in antioxidants',
      'Reduces inflammation',
      'Lowers blood sugar levels',
      'Protects and nourishes skin and hair'
    ],
    usages: [
      'Mix into smoothies or juices',
      'Sprinkle over salads or soups',
      'Add to bread or pasta dough',
      'Brew as a nutritional tea'
    ],
    image: 'https://picsum.photos/seed/moringa/800/600',
    category: 'Ayurvedic'
  },
  {
    id: 'amla-powder',
    name: 'Amla Powder',
    scientificName: 'Phyllanthus emblica',
    description: 'Indian Gooseberry (Amla) is one of the richest sources of Vitamin C. Our powder is processed to retain its potent antioxidant properties.',
    benefits: [
      'Boosts immunity significantly',
      'Improves digestion and metabolism',
      'Promotes healthy hair growth',
      'Excellent for skin rejuvenation'
    ],
    usages: [
      'Mix with honey for a health tonic',
      'Add to hair masks or face packs',
      'Include in morning health shots',
      'Use as a tangy seasoning in chutneys'
    ],
    image: 'https://picsum.photos/seed/amla/800/600',
    category: 'Ayurvedic'
  },
  {
    id: 'banana-powder',
    name: 'Banana Powder',
    scientificName: 'Musa acuminata',
    description: 'Made from ripe, high-quality bananas, our powder is a natural sweetener and a great source of potassium and energy.',
    benefits: [
      'High in potassium and dietary fiber',
      'Provides instant energy boost',
      'Supports heart health',
      'Aids in muscle recovery after exercise'
    ],
    usages: [
      'Natural sweetener for baby food',
      'Ingredient in pancakes and muffins',
      'Thickener for milkshakes and smoothies',
      'Added to porridge or cereal'
    ],
    image: 'https://picsum.photos/seed/banana-powder/800/600',
    category: 'Fruit'
  },
  {
    id: 'dragon-fruit-powder',
    name: 'Dragon Fruit Powder',
    scientificName: 'Selenicereus undatus',
    description: 'Vibrant pink and exotic, our Pitaya (Dragon Fruit) powder is perfect for adding a pop of color and a boost of nutrients to your recipes.',
    benefits: [
      'Rich in magnesium and iron',
      'High fiber content for gut health',
      'Contains healthy fatty acids',
      'Powerful antioxidant properties'
    ],
    usages: [
      'Create stunning pink smoothie bowls',
      'Natural food coloring for desserts',
      'Mix into cocktails or mocktails',
      'Add to yogurt or chia pudding'
    ],
    image: 'https://picsum.photos/seed/dragonfruit/800/600',
    category: 'Fruit'
  },
  {
    id: 'orange-powder',
    name: 'Orange Powder',
    scientificName: 'Citrus sinensis',
    description: 'Capturing the zesty essence of fresh oranges, this powder is rich in Vitamin C and adds a refreshing citrus burst to any dish.',
    benefits: [
      'High Vitamin C content',
      'Supports collagen production',
      'Boosts immune system',
      'Natural mood enhancer'
    ],
    usages: [
      'Flavoring for cakes and cookies',
      'Add to tea or lemonade',
      'Seasoning for fruit salads',
      'Ingredient in skincare formulations'
    ],
    image: 'https://picsum.photos/seed/orange/800/600',
    category: 'Fruit'
  },
  {
    id: 'tomato-powder',
    name: 'Tomato Powder',
    scientificName: 'Solanum lycopersicum',
    description: 'Our tomato powder is made from sun-ripened tomatoes, providing a concentrated burst of umami and lycopene.',
    benefits: [
      'Rich in Lycopene (heart health)',
      'Good source of Vitamin K and Potassium',
      'Supports skin health',
      'Natural anti-inflammatory'
    ],
    usages: [
      'Instant tomato soup or sauce base',
      'Seasoning for popcorn or chips',
      'Added to spice blends and rubs',
      'Flavoring for bread and pizza dough'
    ],
    image: 'https://picsum.photos/seed/tomato/800/600',
    category: 'Vegetable'
  },
  {
    id: 'lemon-powder',
    name: 'Lemon Powder',
    scientificName: 'Citrus limon',
    description: 'A convenient way to add the sharp, tangy flavor of lemons to your recipes without the mess of fresh fruit.',
    benefits: [
      'Aids in detoxification',
      'Promotes healthy digestion',
      'Rich in Vitamin C',
      'Alkalizing effect on the body'
    ],
    usages: [
      'Seasoning for fish and poultry',
      'Added to salad dressings',
      'Flavoring for baked goods',
      'Mixed into herbal teas'
    ],
    image: 'https://picsum.photos/seed/lemon/800/600',
    category: 'Fruit'
  },
  {
    id: 'tulsi-powder',
    name: 'Tulsi Powder',
    scientificName: 'Ocimum tenuiflorum',
    description: 'Holy Basil (Tulsi) is revered in Ayurveda for its stress-relieving and healing properties.',
    benefits: [
      'Natural stress reliever (adaptogen)',
      'Supports respiratory health',
      'Anti-bacterial and anti-viral',
      'Promotes mental clarity'
    ],
    usages: [
      'Brewed as Tulsi tea',
      'Added to health smoothies',
      'Mixed with honey for cough relief',
      'Used in Ayurvedic skincare'
    ],
    image: 'https://picsum.photos/seed/tulsi/800/600',
    category: 'Ayurvedic'
  },
  {
    id: 'neem-powder',
    name: 'Neem Powder',
    scientificName: 'Azadirachta indica',
    description: 'Neem is a powerful blood purifier and is widely used for its antimicrobial and skin-healing benefits.',
    benefits: [
      'Purifies blood and detoxifies',
      'Treats acne and skin infections',
      'Supports oral health',
      'Natural insect repellent'
    ],
    usages: [
      'Face masks for acne-prone skin',
      'Added to hair oils for scalp health',
      'Small amounts in health tonics',
      'Ingredient in natural soaps'
    ],
    image: 'https://picsum.photos/seed/neem/800/600',
    category: 'Ayurvedic'
  },
  {
    id: 'aloe-vera-powder',
    name: 'Aloe Vera Powder',
    scientificName: 'Aloe barbadensis miller',
    description: 'Concentrated Aloe Vera gel in powder form, retaining all the soothing and hydrating properties of the fresh plant.',
    benefits: [
      'Soothes and hydrates skin',
      'Supports digestive health',
      'Rich in vitamins and minerals',
      'Promotes wound healing'
    ],
    usages: [
      'Added to juices and smoothies',
      'Base for DIY skincare products',
      'Mixed into hair conditioners',
      'Used in health supplements'
    ],
    image: 'https://picsum.photos/seed/aloevera/800/600',
    category: 'Ayurvedic'
  },
  {
    id: 'mint-powder',
    name: 'Mint Powder',
    scientificName: 'Mentha spicata',
    description: 'Refreshing and cooling, our mint powder captures the essence of fresh garden mint, perfect for both culinary and wellness applications.',
    benefits: [
      'Aids in digestion',
      'Refreshes breath naturally',
      'Relieves headaches and nausea',
      'Rich in Vitamin A and antioxidants'
    ],
    usages: [
      'Flavoring for beverages and mocktails',
      'Added to chutneys and dips',
      'Ingredient in herbal teas',
      'Used in natural oral care products'
    ],
    image: 'https://picsum.photos/seed/mint/800/600',
    category: 'Herb'
  },
  {
    id: 'tamarind-powder',
    name: 'Tamarind Powder',
    scientificName: 'Tamarindus indica',
    description: 'Tangy and sour, our tamarind powder is a convenient way to add the signature "imli" flavor to your dishes without the hassle of pulp extraction.',
    benefits: [
      'Rich in magnesium and potassium',
      'Supports heart health',
      'Natural anti-inflammatory',
      'Aids in weight management'
    ],
    usages: [
      'Base for sambar and rasam',
      'Flavoring for street food snacks',
      'Added to marinades and glazes',
      'Ingredient in tangy candies'
    ],
    image: 'https://picsum.photos/seed/tamarind/800/600',
    category: 'Fruit'
  },
  {
    id: 'ginger-powder',
    name: 'Ginger Powder',
    scientificName: 'Zingiber officinale',
    description: 'Zesty and warming, our ginger powder is processed from the finest ginger roots to deliver a sharp, spicy kick to your dishes.',
    benefits: [
      'Relieves nausea and indigestion',
      'Reduces muscle pain and soreness',
      'Lowers blood sugar levels',
      'Aids in fighting common cold'
    ],
    usages: [
      'Baking (gingerbread, cookies)',
      'Tea and hot beverages',
      'Curries and Asian cuisine',
      'Smoothies and health shots'
    ],
    image: 'https://picsum.photos/seed/ginger/800/600',
    category: 'Ayurvedic'
  },
  {
    id: 'coriander-powder',
    name: 'Coriander Powder',
    scientificName: 'Coriandrum sativum',
    description: 'Earthy and aromatic, our coriander powder (Dhania) is a staple in Indian kitchens, made from high-quality dried coriander seeds.',
    benefits: [
      'Supports digestive health',
      'Rich in immune-boosting antioxidants',
      'May help lower blood sugar',
      'Promotes heart and brain health'
    ],
    usages: [
      'Essential ingredient in curry powders',
      'Seasoning for roasted vegetables',
      'Added to soups and stews',
      'Flavoring for savory snacks'
    ],
    image: 'https://picsum.photos/seed/coriander/800/600',
    category: 'Herb'
  },
  {
    id: 'pineapple-powder',
    name: 'Pineapple Powder',
    scientificName: 'Ananas comosus',
    description: 'Sweet and tropical, our pineapple powder is rich in bromelain and Vitamin C, bringing a burst of sunshine to your recipes.',
    benefits: [
      'Contains Bromelain (aids digestion)',
      'High in Vitamin C and Manganese',
      'Boosts immunity',
      'Reduces inflammation'
    ],
    usages: [
      'Flavoring for desserts and ice creams',
      'Added to tropical smoothies',
      'Ingredient in fruit-based marinades',
      'Natural sweetener for yogurt'
    ],
    image: 'https://picsum.photos/seed/pineapple/800/600',
    category: 'Fruit'
  },
  {
    id: 'strawberry-powder',
    name: 'Strawberry Powder',
    scientificName: 'Fragaria × ananassa',
    description: 'Made from sun-ripened strawberries, our powder is a concentrated source of antioxidants and that classic berry flavor.',
    benefits: [
      'High in Vitamin C and Folate',
      'Rich in polyphenols (heart health)',
      'Supports skin health',
      'Low glycemic index'
    ],
    usages: [
      'Natural pink coloring for frosting',
      'Added to milkshakes and smoothies',
      'Mixed into oatmeal or cereal',
      'Flavoring for protein powders'
    ],
    image: 'https://picsum.photos/seed/strawberry/800/600',
    category: 'Fruit'
  }
];

