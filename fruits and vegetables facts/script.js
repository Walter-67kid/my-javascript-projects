// ============================================
// ULTIMATE FRUITS & VEGETABLES ENCYCLOPEDIA
// Best Quality Data - Comprehensive Facts
// ============================================

// Comprehensive Fruits Database
const fruitsData = [
    {
        id: 1,
        name: "Apple",
        emoji: "🍎",
        category: "fruit",
        overview: "Apples are one of the most cultivated and consumed fruits in the world. They belong to the Rosaceae family and are grown on deciduous trees. There are over 7,500 varieties of apples grown around the world, ranging in color from green to yellow to red.",
        calories: 52,
        nutrition: { "Calories": "52 kcal", "Carbohydrates": "14g", "Fiber": "2.4g", "Vitamin C": "4.6mg", "Potassium": "107mg" },
        benefits: ["Rich in fiber promoting digestive health", "Contains antioxidants fighting free radicals", "May help reduce risk of heart disease", "Supports immune system with Vitamin C", "Low glycemic index - good for diabetes"],
        seasons: "September - November (Fall)",
        origin: "Central Asia, specifically Kazakhstan",
        funFacts: ["Apples are 25% air, which is why they float in water", "The science of apple growing is called pomology", "It takes about 36 apples to make one gallon of apple juice", "Apple trees can live for over 100 years", "The world's heaviest apple weighed 4.8 pounds"],
        culinary: "Eaten fresh, used in pies, crisps, salads, sauces, juices, and ciders. Can be baked, roasted, or caramelized."
    },
    {
        id: 2,
        name: "Banana",
        emoji: "🍌",
        category: "fruit",
        subcategory: "tropical",
        overview: "Bananas are elongated, edible fruits produced by several kinds of large herbaceous flowering plants. They are one of the most popular and widely consumed fruits globally, known for their distinctive curved shape and creamy texture.",
        calories: 89,
        nutrition: { "Calories": "89 kcal", "Carbohydrates": "23g", "Fiber": "2.6g", "Vitamin B6": "0.43mg", "Potassium": "358mg" },
        benefits: ["Excellent source of potassium for heart health", "Provides quick energy boost", "Contains Vitamin B6 for brain function", "Supports digestive health", "May help regulate blood pressure"],
        seasons: "Year-round",
        origin: "Southeast Asia, specifically Malaysia",
        funFacts: ["Bananas are berries, but strawberries aren't", "A cluster of bananas is called a 'hand', each banana is a 'finger'", "Humans share about 60% of their DNA with bananas", "Bananas are the fourth most valuable agricultural product", "The Cavendish banana is the most popular variety"],
        culinary: "Eaten raw, used in smoothies, desserts, breads, pancakes, and savory dishes. Can be grilled, fried, or used in curries."
    },
    {
        id: 3,
        name: "Orange",
        emoji: "🍊",
        category: "fruit",
        subcategory: "citrus",
        overview: "Oranges are citrus fruits known for their bright orange color and tangy-sweet taste. They are a major source of Vitamin C and are grown in tropical and subtropical climates around the world.",
        calories: 47,
        nutrition: { "Calories": "47 kcal", "Carbohydrates": "12g", "Fiber": "2.4g", "Vitamin C": "53.2mg", "Folate": "30mcg" },
        benefits: ["Boosts immune system with high Vitamin C", "Promotes skin health and collagen production", "Supports heart health", "Aids digestion with fiber content", "Contains antioxidants reducing inflammation"],
        seasons: "December - April",
        origin: "Southeast Asia, specifically China",
        funFacts: ["Oranges are the most commonly grown fruit in the world", "Brazil produces more oranges than any other country", "Orange juice is the most popular juice in the world", "There are over 400 varieties of oranges", "Oranges can float in water due to air pockets"],
        culinary: "Juiced, eaten fresh, used in salads, desserts, marmalades, and savory dishes. Zest adds flavor to baked goods."
    },
    {
        id: 4,
        name: "Strawberry",
        emoji: "🍓",
        category: "fruit",
        overview: "Strawberries are sweet, red berries with a distinctive heart shape and tiny seeds on their surface. They are the only fruit with seeds on the outside - about 200 seeds per berry.",
        calories: 32,
        nutrition: { "Calories": "32 kcal", "Carbohydrates": "7.7g", "Fiber": "2g", "Vitamin C": "58.8mg", "Manganese": "0.39mg" },
        benefits: ["Very high in Vitamin C - more than oranges", "Rich in antioxidants combating aging", "Supports heart health", "Helps regulate blood sugar", "Anti-inflammatory properties"],
        seasons: "April - June (Peak)",
        origin: "France, developed from wild strawberries",
        funFacts: ["Strawberries are the only fruit with seeds on the outside", "Each strawberry has about 200 seeds", "Strawberries are part of the rose family", "California produces 80% of US strawberries", "Strawberries can be white or even pineberry (pink)"],
        culinary: "Eaten fresh, used in desserts, jams, smoothies, salads, and sauces. Can be grilled, dipped in chocolate, or used in savory dishes."
    },
    {
        id: 5,
        name: "Grape",
        emoji: "🍇",
        category: "fruit",
        overview: "Grapes are small, round fruits that grow in clusters on woody vines. They have been cultivated for over 8,000 years and are used for wine, fresh consumption, and dried as raisins.",
        calories: 69,
        nutrition: { "Calories": "69 kcal", "Carbohydrates": "18g", "Fiber": "0.9g", "Vitamin K": "15mcg", "Potassium": "191mg" },
        benefits: ["Contains resveratrol - powerful antioxidant", "Supports heart health", "May improve brain function", "Anti-inflammatory properties", "Natural source of energy"],
        seasons: "August - October",
        origin: "Mediterranean region and Middle East",
        funFacts: ["It takes about 2.5 pounds of grapes to make one bottle of wine", "There are over 8,000 grape varieties", "Grapes explode when you put them in the microwave", "Ancient Greeks worshipped grapes as the fruit of the gods", "A grapevine can produce 100 pounds of grapes annually"],
        culinary: "Eaten fresh, dried as raisins, juiced, used in wines, jellies, salads, and as garnishes. Pairs with cheese and meats."
    },
    {
        id: 6,
        name: "Watermelon",
        emoji: "🍉",
        category: "fruit",
        overview: "Watermelon is a large, refreshing fruit with a green rind and juicy red, pink, or yellow flesh. It consists of about 92% water, making it one of the most hydrating foods available.",
        calories: 30,
        nutrition: { "Calories": "30 kcal", "Carbohydrates": "7.6g", "Fiber": "0.4g", "Vitamin C": "8.1mg", "Lycopene": "4.5mg" },
        benefits: ["Excellent hydration - 92% water", "Rich in lycopene - powerful antioxidant", "Supports muscle recovery", "Anti-inflammatory properties", "May help reduce muscle soreness"],
        seasons: "June - August",
        origin: "Africa, specifically Southern Africa",
        funFacts: ["Watermelon is 92% water", "Every part of watermelon is edible, including rind and seeds", "Watermelon is both a fruit and a vegetable", "China produces more watermelon than any other country", "Watermelons can float due to their high water content"],
        culinary: "Eaten fresh, in fruit salads, smoothies, juices, grilled, or pickled. Rind can be pickled or used in stir-fries."
    },
    {
        id: 7,
        name: "Mango",
        emoji: "🥭",
        category: "fruit",
        subcategory: "tropical",
        overview: "Mango is known as the 'King of Fruits' and is one of the most popular tropical fruits worldwide. It has a sweet, creamy flesh and distinctive aroma that makes it beloved across cultures.",
        calories: 60,
        nutrition: { "Calories": "60 kcal", "Carbohydrates": "15g", "Fiber": "1.6g", "Vitamin C": "36.4mg", "Vitamin A": "54mcg" },
        benefits: ["Boosts immune system with Vitamin C", "Supports eye health with Vitamin A", "Aids digestion with enzymes", "Promotes skin health", "May reduce cancer risk"],
        seasons: "May - September",
        origin: "South Asia, specifically India",
        funFacts: ["Mango is the national fruit of India, Philippines, and Pakistan", "There are over 1,000 varieties of mangoes", "Mangoes belong to the same family as cashews and pistachios", "A mango tree can produce 200-300 fruits per year", "Mangoes continue to ripen after being picked"],
        culinary: "Eaten fresh, in smoothies, chutneys, salads, desserts, and curries. Can be grilled, pickled, or used in salsas."
    },
    {
        id: 8,
        name: "Pineapple",
        emoji: "🍍",
        category: "fruit",
        subcategory: "tropical",
        overview: "Pineapple is a tropical fruit with a distinctive spiky exterior and sweet-tart yellow flesh. It's the only edible member of the Bromeliaceae family and grows from the ground in a spiral pattern.",
        calories: 50,
        nutrition: { "Calories": "50 kcal", "Carbohydrates": "13g", "Fiber": "1.4g", "Vitamin C": "47.8mg", "Manganese": "0.93mg" },
        benefits: ["Contains bromelain - aids digestion", "Reduces inflammation", "Boosts immune system", "Supports bone health", "May aid weight loss"],
        seasons: "March - July",
        origin: "South America, specifically Paraguay",
        funFacts: ["Pineapple grows from the ground, not on trees", "One pineapple plant produces only one pineapple per year", "Pineapple was once a symbol of wealth and hospitality", "It takes almost 3 years for a pineapple to mature", "Pineapple can tenderize meat due to bromelain"],
        culinary: "Eaten fresh, grilled, used in pizzas, tarts, smoothies, sauces, and savory dishes. Pairs well with ham and seafood."
    },
    {
        id: 9,
        name: "Avocado",
        emoji: "🥑",
        category: "fruit",
        subcategory: "tropical",
        overview: "Avocado is a creamy, nutrient-dense fruit native to Mexico and Central America. Despite being technically a fruit, it's often used as a vegetable in cooking and is prized for its healthy fats.",
        calories: 160,
        nutrition: { "Calories": "160 kcal", "Carbohydrates": "8.5g", "Fiber": "6.7g", "Vitamin K": "21mcg", "Potassium": "485mg" },
        benefits: ["High in heart-healthy monounsaturated fats", "Supports brain health", "Excellent source of potassium", "Promotes eye health", "May lower cholesterol levels"],
        seasons: "Year-round (Peak: February - September)",
        origin: "Mexico and Central America",
        funFacts: ["Avocados are berries", "An avocado tree can produce 500 avocados per year", "Avocados ripen faster when placed next to bananas", "The word 'avocado' comes from the Aztec word 'ahuacatl'", "Avocado trees can live for over 100 years"],
        culinary: "Mashed for guacamole, in salads, toast, smoothies, desserts, and as a butter substitute. Can be used in sushi and as a healthy fat source."
    },
    {
        id: 10,
        name: "Blueberry",
        emoji: "🫐",
        category: "fruit",
        overview: "Blueberries are small, sweet berries with a distinctive deep blue color and a slightly tart flavor. They are one of the most antioxidant-rich foods and are often called a 'superfood'.",
        calories: 57,
        nutrition: { "Calories": "57 kcal", "Carbohydrates": "14g", "Fiber": "2.4g", "Vitamin C": "9.7mg", "Vitamin K": "19mcg" },
        benefits: ["Highest antioxidant content of common fruits", "Improves memory and brain function", "Supports heart health", "Reduces DNA damage", "May help manage blood sugar"],
        seasons: "June - August",
        origin: "North America",
        funFacts: ["Blueberries are one of the only foods that are truly blue", "The US produces more blueberries than any other country", "Blueberries are related to azaleas and rhododendrons", "It takes about 50 blueberries to make one cup", "Wild blueberries have more antioxidants than cultivated ones"],
        culinary: "Eaten fresh, in smoothies, muffins, pancakes, jams, pies, and salads. Can be used in savory sauces and as a topping."
    },
    {
        id: 11,
        name: "Cherry",
        emoji: "🍒",
        category: "fruit",
        overview: "Cherries are small, stone fruits that come in sweet and tart varieties. They are known for their vibrant red color, sweet taste, and impressive health benefits.",
        calories: 63,
        nutrition: { "Calories": "63 kcal", "Carbohydrates": "16g", "Fiber": "2.1g", "Vitamin C": "7mg", "Potassium": "222mg" },
        benefits: ["Rich in antioxidants", "Reduces inflammation", "May improve sleep quality", "Supports heart health", "Reduces muscle soreness after exercise"],
        seasons: "May - July",
        origin: "Europe and Asia Minor",
        funFacts: ["Cherries are a member of the rose family", "There are over 1,000 varieties of cherries", "Washington state produces more cherries than any other US state", "Cherry pits contain cyanide - but you'd need to eat many to be harmed", "Sweet cherries and tart cherries are different species"],
        culinary: "Eaten fresh, in pies, jams, sauces, cocktails, and desserts. Can be pitted and used in savory dishes or dried."
    },
    {
        id: 12,
        name: "Lemon",
        emoji: "🍋",
        category: "fruit",
        subcategory: "citrus",
        overview: "Lemons are bright yellow citrus fruits with a tangy, sour taste. They are incredibly versatile and used worldwide for their juice, zest, and refreshing flavor.",
        calories: 29,
        nutrition: { "Calories": "29 kcal", "Carbohydrates": "9g", "Fiber": "2.8g", "Vitamin C": "53mg", "Citric Acid": "5-6%" },
        benefits: ["Very high in Vitamin C", "Supports immune function", "Aids digestion", "Promotes hydration", "Alkalizing effect on the body"],
        seasons: "Year-round (Peak: Winter)",
        origin: "Southeast Asia, specifically Assam region of India",
        funFacts: ["Lemons are actually a hybrid between bitter orange and citron", "It takes about 30 lemons to make one liter of lemon juice", "Lemons can float in water due to their density", "The lemon emoji is actually a yellow lemon", "Meyer lemons are a cross between lemons and mandarin oranges"],
        culinary: "Juice used in beverages, dressings, marinades, desserts, and preserved. Zest adds citrus flavor to dishes. Pairs with seafood and chicken."
    },
    {
        id: 13,
        name: "Papaya",
        emoji: "🍈",
        category: "fruit",
        subcategory: "tropical",
        overview: "Papaya is a tropical fruit with orange-yellow flesh and black seeds in its center. It's known for its digestive enzyme papain and sweet, melon-like flavor.",
        calories: 43,
        nutrition: { "Calories": "43 kcal", "Carbohydrates": "11g", "Fiber": "1.7g", "Vitamin C": "61mg", "Vitamin A": "47mcg" },
        benefits: ["Contains papain - aids protein digestion", "Supports skin health", "Reduces inflammation", "Promotes heart health", "May have anti-cancer properties"],
        seasons: "Year-round in tropics",
        origin: "Central America and southern Mexico",
        funFacts: ["Papaya seeds are edible and have a peppery flavor", "Papaya plants can fruit within 6-9 months", "Unripe papaya contains latex that can cause contractions", "Papaya is 88% water", "The enzyme papain is used to tenderize meat"],
        culinary: "Eaten fresh, in smoothies, salads, salsas, and desserts. Seeds can be used as a seasoning. Unripe papaya is cooked as a vegetable."
    },
    {
        id: 14,
        name: "Peach",
        emoji: "🍑",
        category: "fruit",
        overview: "Peaches are fuzzy stone fruits with sweet, fragrant flesh and a characteristic crease. They are closely related to nectarines and are a symbol of longevity in some cultures.",
        calories: 39,
        nutrition: { "Calories": "39 kcal", "Carbohydrates": "10g", "Fiber": "1.5g", "Vitamin C": "6.6mg", "Potassium": "190mg" },
        benefits: ["Good source of Vitamins A and C", "Promotes digestive health", "Supports skin health", "Anti-inflammatory properties", "Low in calories"],
        seasons: "May - September",
        origin: "China, specifically Zhejiang province",
        funFacts: ["Peaches are members of the rose family", "Georgia is known as the 'Peach State'", "Peaches have been cultivated for over 4,000 years", "Nectarines are simply peaches without fuzz", "Peach blossoms are the state flower of Delaware"],
        culinary: "Eaten fresh, in pies, cobblers, jams, and desserts. Can be grilled, baked, or used in savory dishes with pork or chicken."
    },
    {
        id: 15,
        name: "Pomegranate",
        emoji: "🍎",
        category: "fruit",
        overview: "Pomegranate is an ancient fruit with ruby-red seeds (arils) inside a tough rind. It's been symbolizing prosperity and fertility for thousands of years.",
        calories: 83,
        nutrition: { "Calories": "83 kcal", "Carbohydrates": "19g", "Fiber": "4g", "Vitamin C": "10.2mg", "Folate": "38mcg" },
        benefits: ["Extremely high in antioxidants", "May reduce heart disease risk", "Supports memory and brain function", "Anti-inflammatory properties", "May aid in exercise recovery"],
        seasons: "September - December",
        origin: "Persia (modern-day Iran)",
        funFacts: ["Pomegranate seeds are called arils", "A pomegranate can contain 200-1,400 seeds", "Pomegranates are mentioned in the Quran, Bible, and Torah", "The name means 'seeded apple' in French", "Pomegranate juice was used to treat infections in ancient times"],
        culinary: "Seeds eaten fresh, in salads, smoothies, desserts, and as garnishes. Juice used in marinades, cocktails, and sauces."
    },
    {
        id: 16,
        name: "Kiwi",
        emoji: "🥝",
        category: "fruit",
        overview: "Kiwi is a fuzzy brown fruit with bright green flesh and tiny black seeds. It's one of the most nutrient-dense fruits and has a unique sweet-tart flavor.",
        calories: 61,
        nutrition: { "Calories": "61 kcal", "Carbohydrates": "15g", "Fiber": "3g", "Vitamin C": "92.7mg", "Vitamin K": "40mcg" },
        benefits: ["Extremely high in Vitamin C - more than oranges", "Supports digestive health", "Boosts immune system", "May improve sleep quality", "Promotes heart health"],
        seasons: "October - May",
        origin: "China, specifically Shaanxi province",
        funFacts: ["Kiwi was originally called Chinese gooseberry", "New Zealand is the largest commercial producer", "One kiwi provides 273% of daily Vitamin C needs", "Kiwi can be eaten with the skin", "Ripe kiwis give slightly when pressed"],
        culinary: "Eaten fresh, in fruit salads, smoothies, desserts, and as garnishes. Pairs well with strawberries, bananas, and citrus. Used in savory dishes with fish."
    },
    {
        id: 17,
        name: "Grapefruit",
        emoji: "🍊",
        category: "fruit",
        subcategory: "citrus",
        overview: "Grapefruit is a large citrus fruit with a tangy-bitter taste. It comes in several varieties with different colored flesh and is popular for breakfast and detox diets.",
        calories: 42,
        nutrition: { "Calories": "42 kcal", "Carbohydrates": "11g", "Fiber": "1.6g", "Vitamin C": "31.2mg", "Vitamin A": "58mcg" },
        benefits: ["Supports weight loss efforts", "Boosts immune system", "Promotes heart health", "May lower cholesterol", "Hydrating and refreshing"],
        seasons: "October - June",
        origin: "Caribbean, specifically Barbados",
        funFacts: ["Grapefruit is a hybrid of pomelo and orange", "Ruby Red grapefruit was discovered in Texas in 1929", "Grapefruit can affect certain medications", "Pink grapefruit has more Vitamin A than white", "Grapefruit essential oil is used in aromatherapy"],
        culinary: "Eaten fresh, in juices, salads, and breakfast dishes. Pairs with avocado, shrimp, and fish. Can be grilled or used in marmalades."
    },
    {
        id: 18,
        name: "Coconut",
        emoji: "🥥",
        category: "fruit",
        subcategory: "tropical",
        overview: "Coconut is a versatile tropical fruit with hard shell, white flesh, and clear water inside. It's used worldwide for its flesh, milk, oil, and water.",
        calories: 354,
        nutrition: { "Calories": "354 kcal", "Carbohydrates": "15g", "Fiber": "9g", "Manganese": "1.5mg", "Copper": "0.44mg" },
        benefits: ["High in healthy MCT fats", "Supports brain health", "Provides sustained energy", "Contains immune-boosting compounds", "Good source of fiber"],
        seasons: "Year-round",
        origin: "Indo-Pacific region",
        funFacts: ["Coconuts are not nuts - they're drupes", "A coconut can weigh up to 4 pounds", "Coconuts can float and travel across oceans", "Coconut water is sterile and can be used as IV fluid", "Coconut trees can grow up to 100 feet tall"],
        culinary: "Flesh eaten fresh or dried, milk and cream used in curries and desserts, water as a beverage. Oil used in cooking and baking."
    },
    {
        id: 19,
        name: "Dragon Fruit",
        emoji: "🐉",
        category: "fruit",
        subcategory: "tropical",
        overview: "Dragon fruit, also known as pitaya, has distinctive pink or yellow skin with speckled scales and white or red flesh with tiny black seeds.",
        calories: 50,
        nutrition: { "Calories": "50 kcal", "Carbohydrates": "11g", "Fiber": "3g", "Vitamin C": "21mg", "Iron": "0.4mg" },
        benefits: ["Rich in antioxidants", "Boosts immune system", "Supports digestive health", "Promotes heart health", "May have anti-aging effects"],
        seasons: "Year-round (Peak: Summer)",
        origin: "Central America, later spread to Asia",
        funFacts: ["Dragon fruit is a cactus fruit", "It blooms only for one night", "The flesh can be white, red, or yellow", "Dragon fruit is related to the cactus", "It's also called pitaya or strawberry pear"],
        culinary: "Eaten fresh, in fruit salads, smoothies, and desserts. Flowers can be used as tea. Pairs well with other tropical fruits."
    },
    {
        id: 20,
        name: "Raspberry",
        emoji: "🍇",
        category: "fruit",
        overview: "Raspberries are small, delicate berries with a sweet-tart flavor and seedy texture. They come in red, black, purple, and gold varieties.",
        calories: 52,
        nutrition: { "Calories": "52 kcal", "Carbohydrates": "12g", "Fiber": "6.5g", "Vitamin C": "26.2mg", "Manganese": "0.67mg" },
        benefits: ["Very high in fiber", "Rich in antioxidants", "Supports heart health", "Anti-inflammatory properties", "Low in sugar despite sweet taste"],
        seasons: "June - October",
        origin: "Europe and North America",
        funFacts: ["Raspberries are related to roses", "Raspberries are aggregate fruits", "A raspberry has about 100-120 drupelets", "Black raspberries have more antioxidants than others", "Raspberry leaves are used in herbal teas"],
        culinary: "Eaten fresh, in jams, jellies, desserts, smoothies, and sauces. Pairs with chocolate, lemon, and vanilla. Can be frozen for later use."
    },
    {
        id: 21,
        name: "Pear",
        emoji: "🍐",
        category: "fruit",
        overview: "Pears are sweet, buttery-textured fruits with distinctive bulbous shapes. They have been cultivated for over 4,000 years and come in thousands of varieties.",
        calories: 57,
        nutrition: { "Calories": "57 kcal", "Carbohydrates": "15g", "Fiber": "3.1g", "Vitamin C": "4.3mg", "Potassium": "116mg" },
        benefits: ["High in fiber promoting digestive health", "Contains Vitamin C and K", "Supports heart health", "Anti-inflammatory properties", "Easy to digest - good for babies"],
        seasons: "August - February",
        origin: "Southeastern Europe and Western Asia",
        funFacts: ["Pears are members of the rose family", "There are over 3,000 pear varieties", "The pear emoji is actually an Asian pear", "Pears ripen best off the tree", "Perry (pear cider) has been made for centuries"],
        culinary: "Eaten fresh, in salads, desserts, cheeses, and paired with pork. Can be baked, poached, or used in jams and preserves."
    },
    {
        id: 22,
        name: "Plum",
        emoji: "🫐",
        category: "fruit",
        overview: "Plums are small stone fruits with smooth skin and sweet or tart flesh. They come in many colors and are often dried to make prunes.",
        calories: 46,
        nutrition: { "Calories": "46 kcal", "Carbohydrates": "11g", "Fiber": "1.4g", "Vitamin C": "9.5mg", "Vitamin K": "6.4mcg" },
        benefits: ["Rich in antioxidants", "Supports digestive health", "Promotes bone health", "May improve blood sugar control", "Anti-inflammatory properties"],
        seasons: "May - September",
        origin: "China, one of the first fruits domesticated",
        funFacts: ["Prunes are dried plums", "There are over 2,000 plum varieties", "Plums are related to peaches and cherries", "The plum emoji is a purple plum", "Plums contain cyanide in their seeds"],
        culinary: "Eaten fresh, dried as prunes, in jams, pies, desserts, and savory dishes. Pairs with duck, pork, and game meats."
    },
    {
        id: 23,
        name: "Passion Fruit",
        emoji: "🍈",
        category: "fruit",
        subcategory: "tropical",
        overview: "Passion fruit is a tropical vine fruit with wrinkled purple or yellow skin and aromatic, seedy pulp. It's known for its intense floral aroma.",
        calories: 17,
        nutrition: { "Calories": "17 kcal", "Carbohydrates": "4g", "Fiber": "1.9g", "Vitamin C": "5mg", "Vitamin A": "12mcg" },
        benefits: ["High in fiber supporting digestion", "Rich in antioxidants", "May reduce anxiety", "Supports heart health", "Contains plant compounds with various benefits"],
        seasons: "Year-round in tropics",
        origin: "South America, specifically Brazil and Paraguay",
        funFacts: ["Passion fruit got its name from early missionaries", "The flower was seen as representing Jesus's passion", "Purple passion fruit is more aromatic than yellow", "Seeds are edible and crunchy", "Passion fruit is related to the passion flower"],
        culinary: "Eaten fresh, in juices, smoothies, desserts, and cocktails. Used in marinades and sauces. Pairs well with tropical fruits."
    },
    {
        id: 24,
        name: "Guava",
        emoji: "🍐",
        category: "fruit",
        subcategory: "tropical",
        overview: "Guava is a tropical fruit with pink or white flesh and a distinctive musky aroma. It's one of the most Vitamin C-rich foods in the world.",
        calories: 68,
        nutrition: { "Calories": "68 kcal", "Carbohydrates": "14g", "Fiber": "5.4g", "Vitamin C": "228mg", "Vitamin A": "31mcg" },
        benefits: ["Extremely high in Vitamin C", "Supports digestive health", "May help lower blood sugar", "Promotes heart health", "Antibacterial properties"],
        seasons: "Year-round in tropics",
        origin: "Central America and Mexico",
        funFacts: ["Guava has 5 times more Vitamin C than oranges", "Guava leaves are used in traditional medicine", "Guava is the national fruit of Pakistan", "The entire fruit is edible including skin", "Guava paste is used in Latin American cuisine"],
        culinary: "Eaten fresh, in juices, jams, jellies, desserts, and fruit salads. Used in chutneys and savory dishes. Can be made into tea."
    },
    {
        id: 25,
        name: "Lychee",
        emoji: "🥭",
        category: "fruit",
        subcategory: "tropical",
        overview: "Lychee is a small tropical fruit with rough red skin and sweet, fragrant white flesh. It's often called 'the queen of Chinese fruits'.",
        calories: 66,
        nutrition: { "Calories": "66 kcal", "Carbohydrates": "17g", "Fiber": "1.3g", "Vitamin C": "71.5mg", "Copper": "0.15mg" },
        benefits: ["High in Vitamin C", "Rich in antioxidants", "Supports immune function", "Good source of copper", "May help with digestion"],
        seasons: "May - August",
        origin: "China, specifically Guangdong province",
        funFacts: ["Lychee has been cultivated in China for 2,000+ years", "The seed is poisonous if eaten raw", "Lychee is related to the rambutan", "Fresh lychee has a shorter shelf life than dried", "Lychee is celebrated in Chinese festivals"],
        culinary: "Eaten fresh, in fruit salads, smoothies, desserts, and cocktails. Used in Asian cuisines. Can be canned or dried."
    },
    {
        id: 26,
        name: "Cantaloupe",
        emoji: "🍈",
        category: "fruit",
        overview: "Cantaloupe is a type of melon with netted skin and sweet orange flesh. It's a popular summer fruit and an excellent source of Vitamins A and C.",
        calories: 34,
        nutrition: { "Calories": "34 kcal", "Carbohydrates": "8g", "Fiber": "0.9g", "Vitamin A": "169mcg", "Vitamin C": "36.7mg" },
        benefits: ["Very high in Vitamin A for eye health", "Boosts immune system", "Supports heart health", "Hydrating - 90% water", "Contains antioxidants"],
        seasons: "June - August",
        origin: "Africa, specifically Egypt",
        funFacts: ["Cantaloupe is technically a berry", "It was named after Cantalupo, Italy", "A ripe cantaloupe should feel heavy and smell sweet", "Cantaloupe and muskmelon are different", "Seeds can be roasted and eaten"],
        culinary: "Eaten fresh, in fruit salads, smoothies, and desserts. Pairs with prosciutto, mint, and lime. Can be used in soups."
    },
    {
        id: 27,
        name: "Honeydew",
        emoji: "🍈",
        category: "fruit",
        overview: "Honeydew is a smooth, pale melon with sweet green flesh. It's one of the sweetest fruits and is rich in potassium and Vitamin C.",
        calories: 36,
        nutrition: { "Calories": "36 kcal", "Carbohydrates": "9g", "Fiber": "0.8g", "Vitamin C": "18mg", "Potassium": "212mg" },
        benefits: ["Good source of potassium", "Hydrating and refreshing", "Supports blood pressure", "Contains Vitamin C", "Easy to digest"],
        seasons: "June - October",
        origin: "Africa, specifically the Sudan region",
        funFacts: ["Honeydew is a type of winter melon", "It takes 90 days from planting to harvest", "Honeydew flesh can be green or orange", "The name refers to honey-like sweetness", "Seeds are edible when roasted"],
        culinary: "Eaten fresh, in fruit salads, desserts, and smoothies. Pairs with ham, mint, and lime. Used in chilled soups."
    },
    {
        id: 28,
        name: "Persimmon",
        emoji: "🟠",
        category: "fruit",
        overview: "Persimmon is an orange fruit with a honey-like sweetness when fully ripe. There are two main types: astringent and non-astringent.",
        calories: 70,
        nutrition: { "Calories": "70 kcal", "Carbohydrates": "19g", "Fiber": "3.6g", "Vitamin A": "81mcg", "Vitamin C": "7.5mg" },
        benefits: ["Rich in Vitamin A", "High in fiber", "Contains powerful antioxidants", "Supports eye health", "Promotes digestive health"],
        seasons: "September - December",
        origin: "China, cultivated for over 2,000 years",
        funFacts: ["There are over 400 persimmon varieties", "Persimmons are related to ebony trees", "The American persimmon is native to US", "Unripe persimmons are very astringent", "Persimmons can be eaten like apples when ripe"],
        culinary: "Eaten fresh, dried, or used in puddings, pies, breads, and cookies. Pairs with citrus, ginger, and cinnamon."
    },
    {
        id: 29,
        name: "Fig",
        emoji: "🍇",
        category: "fruit",
        overview: "Figs are soft, sweet fruits with tiny seeds inside. They're one of the oldest cultivated fruits and come in fresh and dried varieties.",
        calories: 74,
        nutrition: { "Calories": "74 kcal", "Carbohydrates": "19g", "Fiber": "2.9g", "Vitamin K": "4.7mcg", "Potassium": "232mg" },
        benefits: ["High in dietary fiber", "Supports bone health", "Promotes digestive health", "Contains prebiotics", "Rich in antioxidants"],
        seasons: "June - September (Fresh)",
        origin: "Middle East and Western Asia",
        funFacts: ["Figs are actually inverted flowers", "Fresh figs are very perishable", "California produces 100% of US fig crop", "Fig leaves appear in biblical stories", "There are over 700 fig varieties"],
        culinary: "Eaten fresh or dried, in salads, desserts, and baked goods. Pairs with cheese, prosciutto, and nuts. Used in Mediterranean cuisine."
    },
    {
        id: 30,
        name: "Jackfruit",
        emoji: "🥭",
        category: "fruit",
        subcategory: "tropical",
        overview: "Jackfruit is the largest tree-borne fruit in the world, weighing up to 80 pounds. Its flesh has a texture similar to meat when cooked.",
        calories: 95,
        nutrition: { "Calories": "95 kcal", "Carbohydrates": "23g", "Fiber": "1.5g", "Vitamin C": "13.8mg", "Potassium": "448mg" },
        benefits: ["High in potassium", "Good source of Vitamin C", "Contains B vitamins", "May help manage blood sugar", "Provides plant-based protein when young"],
        seasons: "Year-round in tropics",
        origin: "South and Southeast Asia",
        funFacts: ["Jackfruit is the largest tree-borne fruit", "Young jackfruit seeds taste like potatoes", "Ripe jackfruit tastes like pineapple and banana", "One fruit can feed a family of four", "Jackfruit is used as a meat substitute"],
        culinary: "Young fruit used as meat substitute in curries and BBQ. Ripe fruit eaten fresh or in desserts. Seeds can be boiled or roasted."
    }
];

// Comprehensive Vegetables Database
const vegetablesData = [
    {
        id: 101,
        name: "Carrot",
        emoji: "🥕",
        category: "vegetable",
        overview: "Carrots are root vegetables known for their bright orange color and sweet, crunchy taste. They are rich in beta-carotene and have been cultivated for thousands of years.",
        calories: 41,
        nutrition: { "Calories": "41 kcal", "Carbohydrates": "10g", "Fiber": "2.8g", "Vitamin A": "835mcg", "Vitamin K": "13mcg" },
        benefits: ["Excellent source of beta-carotene for eye health", "Supports immune system", "Promotes skin health", "May lower cholesterol", "Contains antioxidants"],
        seasons: "Year-round (Peak: Fall)",
        origin: "Afghanistan and surrounding regions",
        funFacts: ["Carrots were originally purple, not orange", "Baby carrots are actually just cut regular carrots", "Carrots are 88% water", "The longest carrot ever was over 19 feet", "Carrots are related to parsley and celery"],
        culinary: "Eaten raw in salads, juiced, roasted, steamed, or used in soups, stews, and cakes. Can be made into carrot halwa."
    },
    {
        id: 102,
        name: "Broccoli",
        emoji: "🥦",
        category: "vegetable",
        overview: "Broccoli is a green cruciferous vegetable with a tree-like appearance. It's considered one of the most nutritious vegetables and is related to cabbage and cauliflower.",
        calories: 34,
        nutrition: { "Calories": "34 kcal", "Carbohydrates": "7g", "Fiber": "2.6g", "Vitamin C": "89mg", "Vitamin K": "102mcg" },
        benefits: ["Very high in Vitamin C and K", "Contains cancer-fighting compounds", "Supports heart health", "Aids digestion", "Anti-inflammatory properties"],
        seasons: "October - April",
        origin: "Italy, developed from wild cabbage",
        funFacts: ["Broccoli is actually a flower that hasn't bloomed", "California produces 90% of US broccoli", "Broccoli is related to cauliflower and cabbage", "The word means 'branch' in Italian", "Broccoli has more protein than corn or rice"],
        culinary: "Steamed, roasted, stir-fried, or eaten raw. Used in salads, soups, casseroles, and as pizza topping. Stems are edible too."
    },
    {
        id: 103,
        name: "Spinach",
        emoji: "🥬",
        category: "vegetable",
        overview: "Spinach is a dark leafy green vegetable packed with nutrients. It can be eaten raw or cooked and is one of the most nutrient-dense foods on Earth.",
        calories: 23,
        nutrition: { "Calories": "23 kcal", "Carbohydrates": "3.6g", "Fiber": "2.2g", "Vitamin K": "483mcg", "Vitamin A": "469mcg" },
        benefits: ["Extremely high in Vitamins K and A", "Rich in iron and folate", "Supports eye health", "Promotes bone health", "May improve blood pressure"],
        seasons: "March - May and September - November",
        origin: "Persia (modern-day Iran)",
        funFacts: ["Spinach originated in ancient Persia", "It took 30 years to bring spinach to America", "China is the world's largest spinach producer", "Spinach is related to beets and quinoa", "There are over a dozen spinach varieties"],
        culinary: "Eaten raw in salads, sautéed, used in pasta, smoothies, soups, and as pizza topping. Pairs with eggs, cheese, and garlic."
    },
    {
        id: 104,
        name: "Tomato",
        emoji: "🍅",
        category: "vegetable",
        overview: "Tomatoes are technically fruits but commonly used as vegetables. They come in many varieties and are a staple in cuisines worldwide.",
        calories: 18,
        nutrition: { "Calories": "18 kcal", "Carbohydrates": "3.9g", "Fiber": "1.2g", "Vitamin C": "14mg", "Lycopene": "2.6mg" },
        benefits: ["High in lycopene antioxidant", "Supports heart health", "May reduce cancer risk", "Good for skin health", "Contains potassium"],
        seasons: "June - September (Peak)",
        origin: "South America, specifically Peru",
        funFacts: ["Tomatoes were once thought to be poisonous in Europe", "There are over 10,000 tomato varieties", "The tomato was brought to Europe in the 1500s", "Tomatoes are technically fruits, not vegetables", "The world produces over 170 million tomatoes annually"],
        culinary: "Used fresh in salads, sauces, soups, juices, and stews. Can be roasted, grilled, sun-dried, or used in curries."
    },
    {
        id: 105,
        name: "Cucumber",
        emoji: "🥒",
        category: "vegetable",
        overview: "Cucumbers are refreshing, water-rich vegetables with a cool, crisp taste. They are technically fruits and belong to the gourd family.",
        calories: 16,
        nutrition: { "Calories": "16 kcal", "Carbohydrates": "3.6g", "Fiber": "0.5g", "Vitamin K": "16mcg", "Potassium": "147mg" },
        benefits: ["Very hydrating - 96% water", "Supports skin health", "May reduce inflammation", "Aids weight loss", "Contains vitamins and minerals"],
        seasons: "May - August",
        origin: "South Asia, specifically India",
        funFacts: ["Cucumbers are 96% water", "Cucumbers are technically fruits", "There are over 100 cucumber varieties", "Cucumber rind contains most nutrients", "The compound that makes cucumbers bitter is called cucurbitacin"],
        culinary: "Eaten fresh in salads, pickled, used in sandwiches, soups, and tzatziki. Can be grilled, roasted, or used in beverages."
    },
    {
        id: 106,
        name: "Potato",
        emoji: "🥔",
        category: "vegetable",
        overview: "Potatoes are one of the world's most important staple foods. They're versatile, nutritious, and can be prepared in countless ways.",
        calories: 77,
        nutrition: { "Calories": "77 kcal", "Carbohydrates": "17g", "Fiber": "2.2g", "Vitamin C": "6mg", "Potassium": "421mg" },
        benefits: ["Good source of potassium", "Contains Vitamin C", "Provides energy from carbohydrates", "Rich in B vitamins", "Contains resistant starch"],
        seasons: "Year-round",
        origin: "Andes Mountains, South America",
        funFacts: ["Potatoes were the first vegetable grown in space", "There are over 4,000 potato varieties", "Potatoes are 80% water", "The world's heaviest potato weighed over 10 pounds", "Potatoes are related to tomatoes and eggplant"],
        culinary: "Baked, mashed, fried, roasted, or boiled. Used in countless dishes from fries to stews. Can be made into chips, starch, or vodka."
    },
    {
        id: 107,
        name: "Onion",
        emoji: "🧅",
        category: "vegetable",
        overview: "Onions are fundamental to cooking worldwide, providing flavor base for countless dishes. They come in many varieties with different colors and strengths.",
        calories: 40,
        nutrition: { "Calories": "40 kcal", "Carbohydrates": "9g", "Fiber": "1.7g", "Vitamin C": "7.4mg", "Quercetin": "19mg" },
        benefits: ["Contains antioxidants", "Supports immune function", "May reduce blood sugar", "Anti-inflammatory properties", "Promotes heart health"],
        seasons: "Year-round",
        origin: "Central Asia",
        funFacts: ["Onions have been cultivated for 5,000+ years", "There are over 800 onion varieties", "Onions make you cry due to sulfur compounds", "The onion emoji is actually a yellow onion", "Ancient Egyptians worshipped onions"],
        culinary: "Used as flavor base for almost every cuisine. Eaten raw, caramelized, fried, pickled, or used in soups, stews, and sauces."
    },
    {
        id: 108,
        name: "Garlic",
        emoji: "🧄",
        category: "vegetable",
        overview: "Garlic is a pungent allium bulb known for its strong flavor and numerous health benefits. It's been used medicinally for thousands of years.",
        calories: 149,
        nutrition: { "Calories": "149 kcal", "Carbohydrates": "33g", "Fiber": "2.1g", "Vitamin B6": "1.2mg", "Manganese": "1.7mg" },
        benefits: ["Boosts immune system", "May lower blood pressure", "Has antibacterial properties", "Supports heart health", "Contains antioxidants"],
        seasons: "Year-round (Peak: Summer)",
        origin: "Central Asia",
        funFacts: ["Garlic has been used for 7,000+ years", "China produces 80% of the world's garlic", "Garlic was used in ancient Egypt as currency", "Roasted garlic is sweet and mild", "Garlic is related to onions and leeks"],
        culinary: "Used raw, roasted, or cooked. Essential in Mediterranean, Asian, and Latin cuisines. Pairs with almost any savory dish."
    },
    {
        id: 109,
        name: "Bell Pepper",
        emoji: "🫑",
        category: "vegetable",
        overview: "Bell peppers are sweet, crunchy vegetables that come in various colors. They're excellent sources of Vitamins A and C.",
        calories: 31,
        nutrition: { "Calories": "31 kcal", "Carbohydrates": "6g", "Fiber": "2.1g", "Vitamin C": "128mg", "Vitamin A": "157mcg" },
        benefits: ["Very high in Vitamin C", "Rich in antioxidants", "Supports eye health", "May reduce inflammation", "Low in calories"],
        seasons: "July - October",
        origin: "Central and South America",
        funFacts: ["Green peppers are unripe red peppers", "Bell peppers are fruits, not vegetables", "All colors have different flavors", "They are related to chili peppers", "Hungary is famous for paprika made from peppers"],
        culinary: "Eaten raw in salads, stuffed, roasted, grilled, or stir-fried. Used in fajitas, soups, and as pizza topping. Can be pickled."
    },
    {
        id: 110,
        name: "Cauliflower",
        emoji: "🥬",
        category: "vegetable",
        overview: "Cauliflower is a white cruciferous vegetable with a mild, slightly sweet taste. It's incredibly versatile and can be used as a low-carb alternative to many foods.",
        calories: 25,
        nutrition: { "Calories": "25 kcal", "Carbohydrates": "5g", "Fiber": "2g", "Vitamin C": "48mg", "Vitamin K": "16mcg" },
        benefits: ["High in Vitamin C and K", "Contains cancer-fighting compounds", "Supports digestive health", "Low in carbohydrates", "Anti-inflammatory properties"],
        seasons: "September - December",
        origin: "Northeast Mediterranean region",
        funFacts: ["Cauliflower is related to broccoli and cabbage", "Orange and purple cauliflower varieties exist", "One head can weigh up to 3 pounds", "Cauliflower can be made into rice or pizza crust", "It takes about 80 days to grow cauliflower"],
        culinary: "Roasted, steamed, mashed, or eaten raw. Made into cauliflower rice, pizza crust, or buffalo bites. Used in soups and as a low-carb substitute."
    },
    {
        id: 111,
        name: "Cabbage",
        emoji: "🥬",
        category: "vegetable",
        overview: "Cabbage is a leafy green, red, or white vegetable with tightly packed leaves. It's been cultivated for thousands of years and is a staple in many cuisines.",
        calories: 25,
        nutrition: { "Calories": "25 kcal", "Carbohydrates": "6g", "Fiber": "2.5g", "Vitamin C": "37mg", "Vitamin K": "76mcg" },
        benefits: ["High in Vitamin C and K", "Supports digestive health", "May reduce inflammation", "Promotes heart health", "Contains antioxidants"],
        seasons: "Year-round (Peak: Winter)",
        origin: "Mediterranean region",
        funFacts: ["Cabbage can be green, red, or savoy (wrinkled)", "Cabbage is 92% water", "Sauerkraut is fermented cabbage", "Cabbage can be used to make bubble wrap", "It takes about 70 days to grow cabbage"],
        culinary: "Eaten raw in coleslaw, fermented as sauerkraut, or cooked in soups, stews, and stir-fries. Stuffed cabbage is a traditional dish."
    },
    {
        id: 112,
        name: "Lettuce",
        emoji: "🥬",
        category: "vegetable",
        overview: "Lettuce is a leafy vegetable most commonly used as the base for salads. There are many varieties with different textures and flavors.",
        calories: 15,
        nutrition: { "Calories": "15 kcal", "Carbohydrates": "2.9g", "Fiber": "1.3g", "Vitamin K": "103mcg", "Vitamin A": "370mcg" },
        benefits: ["Very low in calories", "High in Vitamin K", "Contains folate and iron", "Hydrating", "Provides dietary fiber"],
        seasons: "Year-round",
        origin: "Mediterranean region",
        funFacts: ["There are several lettuce varieties", "Romaine lettuce has more nutrients than iceberg", "Lettuce was considered a medicinal herb initially", "China produces the most lettuce worldwide", "Lettuce is related to sunflowers"],
        culinary: "Used as salad base, in sandwiches, wraps, and burgers. Can be grilled or used in soups. Pairs with most dressings and proteins."
    },
    {
        id: 113,
        name: "Celery",
        emoji: "🥬",
        category: "vegetable",
        overview: "Celery is a crunchy vegetable with a high water content and mild, earthy taste. It's often eaten raw or used to add flavor to dishes.",
        calories: 16,
        nutrition: { "Calories": "16 kcal", "Carbohydrates": "3g", "Fiber": "1.6g", "Vitamin K": "29mcg", "Potassium": "260mg" },
        benefits: ["Very hydrating", "Supports digestion", "May lower blood pressure", "Low in calories", "Contains electrolytes"],
        seasons: "Year-round (Peak: Fall)",
        origin: "Mediterranean region",
        funFacts: ["Celery is 95% water", "Celery was used as medicine in ancient times", "The strings in celery are vascular bundles", "Celery salt is made from celery seeds", "One stalk contains only 6 calories"],
        culinary: "Eaten raw with dips, in salads, or used to add flavor to soups, stocks, and stews. Juice is popular in detox diets. Leaves can be used as garnish."
    },
    {
        id: 114,
        name: "Asparagus",
        emoji: "🥬",
        category: "vegetable",
        overview: "Asparagus is a spring vegetable with tender spears and a delicate, slightly earthy flavor. It's one of the most prized vegetables in the world.",
        calories: 20,
        nutrition: { "Calories": "20 kcal", "Carbohydrates": "3.9g", "Fiber": "2.1g", "Vitamin K": "42mcg", "Folate": "52mcg" },
        benefits: ["High in folate for cell growth", "Rich in antioxidants", "Supports digestive health", "Contains Vitamin K for bones", "Diuretic properties"],
        seasons: "March - June",
        origin: "Mediterranean region",
        funFacts: ["Asparagus can grow 10 inches in one day", "White asparagus is grown without light", "It takes 3 years to establish an asparagus bed", "Asparagus pee is a real phenomenon", "Asparagus is related to onions and garlic"],
        culinary: "Roasted, grilled, steamed, or sautéed. Pairs with eggs, hollandaise, parmesan, and lemon. Can be used in soups or as a pizza topping."
    },
    {
        id: 115,
        name: "Zucchini",
        emoji: "🥒",
        category: "vegetable",
        overview: "Zucchini is a summer squash with a mild, slightly sweet flavor. It's incredibly versatile and can be used in both savory and sweet dishes.",
        calories: 17,
        nutrition: { "Calories": "17 kcal", "Carbohydrates": "3.1g", "Fiber": "1g", "Vitamin C": "18mg", "Manganese": "0.18mg" },
        benefits: ["Low in calories", "Good source of Vitamin C", "Contains potassium", "Supports heart health", "Provides dietary fiber"],
        seasons: "June - August",
        origin: "Central America and Mexico",
        funFacts: ["Zucchini is technically a fruit", "Zucchini flowers are edible", "The world record zucchini was over 7 feet long", "Zucchini is related to cucumbers and melons", "It can be used as a low-carb pasta substitute"],
        culinary: "Grilled, roasted, sautéed, or spiralized as pasta. Used in zucchini bread, lasagna, soups, and stir-fries. Flowers can be stuffed and fried."
    },
    {
        id: 116,
        name: "Eggplant",
        emoji: "🍆",
        category: "vegetable",
        overview: "Eggplant is a purple vegetable with a meaty texture and slightly bitter taste. It's popular in Mediterranean and Asian cuisines.",
        calories: 25,
        nutrition: { "Calories": "25 kcal", "Carbohydrates": "6g", "Fiber": "3g", "Vitamin B1": "0.08mg", "Copper": "0.07mg" },
        benefits: ["Contains fiber for digestion", "Rich in antioxidants", "Supports heart health", "Low in calories", "Contains manganese"],
        seasons: "July - October",
        origin: "India and Southeast Asia",
        funFacts: ["Eggplant is technically a berry", "It belongs to the nightshade family", "The word eggplant is used in US and Australia", "Aubergine is the British term", "Eggplant can be bitter if not properly prepared"],
        culinary: "Grilled, roasted, baked, or fried. Used in baba ganoush, eggplant parmesan, curry, and ratatouille. Absorbs flavors well."
    },
    {
        id: 117,
        name: "Green Beans",
        emoji: "🥬",
        category: "vegetable",
        overview: "Green beans are long, slender vegetables with a crisp texture and fresh, slightly sweet flavor. They're also called string beans or snap beans.",
        calories: 31,
        nutrition: { "Calories": "31 kcal", "Carbohydrates": "7g", "Fiber": "3.4g", "Vitamin C": "12.2mg", "Vitamin K": "43mcg" },
        benefits: ["High in fiber", "Good source of Vitamins C and K", "Supports bone health", "Contains folate", "Low in calories"],
        seasons: "May - October",
        origin: "Central and South America",
        funFacts: ["Green beans are immature bean pods", "There are over 130 varieties", "They were called 'string beans' originally", "Green beans are related to peas", "They can be eaten raw or cooked"],
        culinary: "Steamed, sautéed, roasted, or used in casseroles. Pairs well with almonds, lemon, garlic, and parmesan. Can be pickled."
    },
    {
        id: 118,
        name: "Peas",
        emoji: "🟢",
        category: "vegetable",
        overview: "Peas are small, round, green vegetables with a sweet, slightly earthy flavor. They're packed with protein and fiber.",
        calories: 81,
        nutrition: { "Calories": "81 kcal", "Carbohydrates": "14g", "Fiber": "5.1g", "Vitamin C": "40mg", "Vitamin K": "24mcg" },
        benefits: ["High in plant protein", "Rich in fiber", "Good source of iron", "Supports blood sugar control", "Contains antioxidants"],
        seasons: "March - June",
        origin: "Mediterranean region and Middle East",
        funFacts: ["Peas were used by Gregor Mendel for genetics studies", "It takes about 60 days to grow peas", "Sugar snap peas are a cross between peas and snow peas", "Peas can be eaten fresh or dried", "The pea emoji is actually green peas"],
        culinary: "Eaten fresh, in soups, salads, risottos, and pasta dishes. Can be mashed, pureed, or used in dumplings. Pairs well with mint."
    },
    {
        id: 119,
        name: "Corn",
        emoji: "🌽",
        category: "vegetable",
        overview: "Corn is a versatile grain vegetable eaten worldwide. It can be eaten fresh, dried, or processed into various products.",
        calories: 86,
        nutrition: { "Calories": "86 kcal", "Carbohydrates": "19g", "Fiber": "2.7g", "Vitamin B": "0.1mg", "Potassium": "270mg" },
        benefits: ["Provides complex carbohydrates", "Contains B vitamins", "Good source of fiber", "Contains antioxidants", "Supports eye health"],
        seasons: "June - September",
        origin: "Mesoamerica (Mexico)",
        funFacts: ["Corn was first domesticated 10,000 years ago", "Each ear has about 800 kernels in 16 rows", "Corn is used in many non-food products", "Sweet corn is different from field corn", "Corn can be made into popcorn"],
        culinary: "Eaten on the cob, in salads, soups, casseroles, and breads. Used in Mexican cuisine extensively. Can be grilled, boiled, or roasted."
    },
    {
        id: 120,
        name: "Sweet Potato",
        emoji: "🍠",
        category: "vegetable",
        overview: "Sweet potatoes are root vegetables with naturally sweet flesh. They come in various colors and are highly nutritious.",
        calories: 86,
        nutrition: { "Calories": "86 kcal", "Carbohydrates": "20g", "Fiber": "3g", "Vitamin A": "961mcg", "Vitamin C": "2.4mg" },
        benefits: ["Very high in Vitamin A", "Good source of fiber", "Supports immune function", "Anti-inflammatory properties", "Helps stabilize blood sugar"],
        seasons: "Year-round (Peak: Fall and Winter)",
        origin: "Central and South America",
        funFacts: ["Sweet potatoes are related to morning glories", "North Carolina produces the most sweet potatoes", "Orange sweet potatoes are most common", "Purple sweet potatoes exist in Japan", "They can be used to make alcoholic beverages"],
        culinary: "Baked, mashed, roasted, or fried. Used in pies, casseroles, and curries. Can be made into fries or used in desserts."
    },
    {
        id: 121,
        name: "Mushroom",
        emoji: "🍄",
        category: "vegetable",
        overview: "Mushrooms are fungi that are valued for their earthy flavor and meaty texture. They come in many varieties with different flavors.",
        calories: 22,
        nutrition: { "Calories": "22 kcal", "Carbohydrates": "3.3g", "Fiber": "1g", "Vitamin D": "7mcg", "B vitamins": "Various" },
        benefits: ["One of few plant sources of Vitamin D", "Supports immune system", "Contains B vitamins", "Low in calories", "May have anti-cancer properties"],
        seasons: "Year-round (Peak: Fall)",
        origin: "Various - grows worldwide",
        funFacts: ["Mushrooms are fungi, not vegetables", "Some mushrooms glow in the dark", "There are over 10,000 known mushroom species", "Truffles are the most expensive mushrooms", "Mushrooms can be grown in the dark"],
        culinary: "Sautéed, grilled, roasted, or used raw. Pairs with garlic, butter, and herbs. Used in soups, stews, pasta, and as pizza toppings."
    },
    {
        id: 122,
        name: "Kale",
        emoji: "🥬",
        category: "vegetable",
        overview: "Kale is a hardy leafy green that's become a superfood staple. It's related to cabbage and broccoli but has a more robust, peppery flavor.",
        calories: 49,
        nutrition: { "Calories": "49 kcal", "Carbohydrates": "9g", "Fiber": "3.6g", "Vitamin K": "817mcg", "Vitamin A": "500mcg" },
        benefits: ["Extremely high in Vitamins K and A", "Rich in antioxidants", "Supports bone health", "May lower cholesterol", "Anti-inflammatory properties"],
        seasons: "October - February",
        origin: "Mediterranean region",
        funFacts: ["Kale is the most nutrient-dense food", "There are over 50 kale varieties", "Kale chips can be made like potato chips", "Ornamental kale is edible too", "Lacinato kale is used in Italian cuisine"],
        culinary: "Eaten raw in salads, sautéed, baked into chips, or used in smoothies. Pairs with lemon, garlic, parmesan, and bacon."
    },
    {
        id: 123,
        name: "Brussels Sprouts",
        emoji: "🥬",
        category: "vegetable",
        overview: "Brussels sprouts are small, cabbage-like vegetables with a nutty, slightly bitter taste when cooked properly. They're related to cabbage.",
        calories: 43,
        nutrition: { "Calories": "43 kcal", "Carbohydrates": "9g", "Fiber": "3.8g", "Vitamin C": "85mg", "Vitamin K": "177mcg" },
        benefits: ["Very high in Vitamin C and K", "Contains cancer-fighting compounds", "Supports digestive health", "High in protein for a vegetable", "Anti-inflammatory properties"],
        seasons: "October - March",
        origin: "Belgium (Brussels)",
        funFacts: ["Brussels sprouts were named after Brussels", "Each sprout grows on a stalk", "They taste sweeter after frost", "Over 100 Brussels sprout varieties exist", "They are related to cabbage and broccoli"],
        culinary: "Roasted, sautéed, steamed, or shaved raw in salads. Pairs with bacon, balsamic, parmesan, and lemon. Can be made into chips."
    },
    {
        id: 124,
        name: "Beet",
        emoji: "🥗",
        category: "vegetable",
        overview: "Beets are root vegetables with a sweet, earthy flavor and vibrant red-purple color. They're highly nutritious and can be eaten raw or cooked.",
        calories: 43,
        nutrition: { "Calories": "43 kcal", "Carbohydrates": "10g", "Fiber": "2.8g", "Folate": "80mcg", "Manganese": "0.33mg" },
        benefits: ["High in nitrates for blood flow", "Contains powerful antioxidants", "Supports exercise performance", "May lower blood pressure", "Good for digestive health"],
        seasons: "June - October",
        origin: "Mediterranean region",
        funFacts: ["Beets were used as medicine in ancient times", "Golden beets exist and are less messy", "Beet leaves are edible too", "Beets can be used to make natural dye", "The color beeturia affects some people"],
        culinary: "Roasted, boiled, pickled, or eaten raw. Used in salads, soups, juices, and desserts. Pairs with goat cheese and walnuts."
    },
    {
        id: 125,
        name: "Radish",
        emoji: "🥗",
        category: "vegetable",
        overview: "Radishes are small, crisp root vegetables with a peppery bite. They come in various colors and are quick to grow.",
        calories: 16,
        nutrition: { "Calories": "16 kcal", "Carbohydrates": "3.4g", "Fiber": "1.6g", "Vitamin C": "14.8mg", "Potassium": "233mg" },
        benefits: ["Low in calories", "High in Vitamin C", "Aids digestion", "Contains potassium", "May have anti-fungal properties"],
        seasons: "March - June and September - November",
        origin: "Southeast Asia",
        funFacts: ["There are over 200 radish varieties", "Daikon is a large Asian radish", "Watermelon radishes are green outside, pink inside", "Radish leaves are edible too", "They can mature in as little as 25 days"],
        culinary: "Eaten raw in salads, pickled, or roasted. Pairs with butter, salt, and cream cheese. Used in Asian cuisines for pickling."
    },
    {
        id: 126,
        name: "Turnip",
        emoji: "🥔",
        category: "vegetable",
        overview: "Turnips are root vegetables with a mild, slightly peppery flavor. Both the root and greens are edible.",
        calories: 28,
        nutrition: { "Calories": "28 kcal", "Carbohydrates": "6g", "Fiber": "1.8g", "Vitamin C": "21mg", "Calcium": "30mg" },
        benefits: ["High in Vitamin C", "Contains fiber", "Supports bone health", "Low in calories", "Greens are highly nutritious"],
        seasons: "October - March",
        origin: "Europe and Central Asia",
        funFacts: ["Turnip is a biennial plant", "Turnip greens are more nutritious than root", "Rutabaga is a cross between turnip and cabbage", "Turnips were used as light sources", "The turnip emoji is actually a turnip"],
        culinary: "Roasted, mashed, or used in soups and stews. Greens can be sautéed or used in salads. Pairs with butter, bacon, and thyme."
    },
    {
        id: 127,
        name: "Leek",
        emoji: "🥬",
        category: "vegetable",
        overview: "Leeks are mild, sweet relatives of onions with a complex flavor. They're prized in French and European cuisines.",
        calories: 61,
        nutrition: { "Calories": "61 kcal", "Carbohydrates": "14g", "Fiber": "1.8g", "Vitamin K": "47mcg", "Folate": "64mcg" },
        benefits: ["High in Vitamin K", "Contains folate", "Rich in antioxidants", "Supports heart health", "Contains prebiotics"],
        seasons: "March - May",
        origin: "Mediterranean region",
        funFacts: ["Leeks are Wales' national emblem", "Roman emperor Nero ate leeks for his voice", "Leeks are milder than onions", "Only the white and light green parts are usually eaten", "They are related to garlic and chives"],
        culinary: "Used in soups, gratins, and quiches. Sautéed, roasted, or grilled. Pairs with potatoes, cheese, and cream."
    },
    {
        id: 128,
        name: "Artichoke",
        emoji: "🥬",
        category: "vegetable",
        overview: "Artichokes are thistle-like vegetables with tender hearts and meaty leaves. They're considered a delicacy and have a unique, nutty flavor.",
        calories: 47,
        nutrition: { "Calories": "47 kcal", "Carbohydrates": "11g", "Fiber": "5.4g", "Vitamin C": "12mg", "Folate": "68mcg" },
        benefits: ["Very high in fiber", "Contains antioxidants", "Supports liver health", "May help lower cholesterol", "Contains prebiotics"],
        seasons: "March - May",
        origin: "Mediterranean region",
        funFacts: ["Artichoke is actually a flower bud", "The heart is the most prized part", "California produces 100% of US artichokes", "Artichokes have been cultivated for 3,000 years", "Jerusalem artichoke is actually a sunflower"],
        culinary: "Steamed, grilled, or roasted. Served with dips like aioli. Used in salads, pasta, and as pizza topping. Hearts are used in dips."
    },
    {
        id: 129,
        name: "Okra",
        emoji: "🥬",
        category: "vegetable",
        overview: "Okra is a pod vegetable with a unique, slightly slimy texture when cooked. It's popular in Southern US, Middle Eastern, and Indian cuisines.",
        calories: 33,
        nutrition: { "Calories": "33 kcal", "Carbohydrates": "7g", "Fiber": "3.2g", "Vitamin C": "23mg", "Vitamin K": "31mcg" },
        benefits: ["High in fiber", "Contains Vitamin C and K", "Supports blood sugar control", "Good for heart health", "Contains antioxidants"],
        seasons: "June - September",
        origin: "Africa, specifically Ethiopia",
        funFacts: ["Okra is also called 'ladies' fingers'", "The slime can be reduced by cooking with acid", "It's used to thicken gumbo", "Okra pods can be pickled", "The plant produces beautiful flowers"],
        culinary: "Fried, stewed, roasted, or used in soups and curries. Pairs well with tomatoes, garlic, and spices. Can be pickled."
    },
    {
        id: 130,
        name: "Bok Choy",
        emoji: "🥬",
        category: "vegetable",
        overview: "Bok choy is a Chinese cabbage with tender leaves and crisp white stems. It's popular in Asian cuisine and is highly nutritious.",
        calories: 13,
        nutrition: { "Calories": "13 kcal", "Carbohydrates": "2.2g", "Fiber": "1g", "Vitamin A": "223mcg", "Vitamin C": "45mg" },
        benefits: ["High in Vitamins A and C", "Low in calories", "Contains calcium for bones", "Supports eye health", "Anti-inflammatory properties"],
        seasons: "Year-round (Peak: Winter)",
        origin: "China",
        funFacts: ["Bok choy is a type of Chinese cabbage", "There are two main types: baby and standard", "The white stems are crunchy like celery", "It's related to broccoli and cauliflower", "Bok choy means 'white vegetable' in Chinese"],
        culinary: "Stir-fried, steamed, or used in soups. Pairs with ginger, garlic, and sesame. Can be eaten raw in salads. Used in Kimchi."
    },
    {
        id: 131,
        name: "Butternut Squash",
        emoji: "🎃",
        category: "vegetable",
        overview: "Butternut squash is a sweet, nutty winter squash with orange flesh. It's versatile and can be used in both savory and sweet dishes.",
        calories: 45,
        nutrition: { "Calories": "45 kcal", "Carbohydrates": "12g", "Fiber": "2g", "Vitamin A": "532mcg", "Vitamin C": "21mg" },
        benefits: ["Very high in Vitamin A", "Rich in fiber", "Contains potassium", "Supports immune function", "Anti-inflammatory properties"],
        seasons: "September - March",
        origin: "North America",
        funFacts: ["Butternut squash is a hybrid squash", "One squash can make about 4 cups of puree", "It can be stored for months", "Butternut squash soup is very popular", "The seeds are edible when roasted"],
        culinary: "Roasted, mashed, or pureed for soups. Used in pies, casseroles, and pasta. Can be made into ravioli filling or used in bread."
    },
    {
        id: 132,
        name: "Pumpkin",
        emoji: "🎃",
        category: "vegetable",
        overview: "Pumpkin is a large orange squash synonymous with fall and Halloween. Its flesh is versatile and can be used in both savory and sweet dishes.",
        calories: 26,
        nutrition: { "Calories": "26 kcal", "Carbohydrates": "6.5g", "Fiber": "0.5g", "Vitamin A": "426mcg", "Vitamin C": "9mg" },
        benefits: ["Very high in Vitamin A", "Rich in antioxidants", "Supports immune function", "Good for heart health", "Contains fiber"],
        seasons: "September - November",
        origin: "North America",
        funFacts: ["Pumpkins are technically berries", "There are over 45 pumpkin varieties", "Pumpkin pie was first served at Thanksgiving", "The world's largest pumpkin weighed over 2,700 pounds", "Pumpkin seeds are called pepitas"],
        culinary: "Used in soups, pies, breads, and desserts. Roasted, mashed, or pureed. Seeds can be roasted. Used in curries and stews."
    },
    {
        id: 133,
        name: "Arugula",
        emoji: "🥬",
        category: "vegetable",
        overview: "Arugula is a peppery, leafy green that's popular in salads. It's also called rocket or roquette.",
        calories: 25,
        nutrition: { "Calories": "25 kcal", "Carbohydrates": "3.7g", "Fiber": "1.6g", "Vitamin K": "109mcg", "Folate": "97mcg" },
        benefits: ["High in Vitamins K and folate", "Contains antioxidants", "Supports bone health", "Low in calories", "Contains nitrates for blood flow"],
        seasons: "March - May and September - November",
        origin: "Mediterranean region",
        funFacts: ["Arugula is also called rocket", "It's related to broccoli and cabbage", "The flavor gets stronger with heat", "It was used as an aphrodisiac in ancient Rome", "Baby arugula is less peppery"],
        culinary: "Eaten raw in salads, on pizza, and in pasta. Sautéed and used in pesto. Pairs with lemon, parmesan, and garlic."
    },
    {
        id: 134,
        name: "Swiss Chard",
        emoji: "🥬",
        category: "vegetable",
        overview: "Swiss chard has large, colorful leaves with thick, crunchy stems. It's related to beets and is highly nutritious.",
        calories: 19,
        nutrition: { "Calories": "19 kcal", "Carbohydrates": "3.7g", "Fiber": "1.6g", "Vitamin K": "830mcg", "Vitamin A": "306mcg" },
        benefits: ["Extremely high in Vitamins K and A", "Contains antioxidants", "Supports blood health", "Promotes bone health", "Anti-inflammatory properties"],
        seasons: "June - September",
        origin: "Mediterranean region",
        funFacts: ["Swiss chard is related to beets", "The stems can be white, red, or yellow", "Rainbow chard is a mix of colors", "It can be eaten raw or cooked", "The name 'Swiss' was added by Americans"],
        culinary: "Sautéed, in soups, stews, or salads. Stems can be pickled. Pairs with garlic, lemon, and parmesan. Used in Mediterranean dishes."
    },
    {
        id: 135,
        name: "Eggplant",
        emoji: "🍆",
        category: "vegetable",
        overview: "Eggplant is a purple vegetable with a meaty texture and slightly bitter taste. Popular in Mediterranean and Asian cuisines.",
        calories: 25,
        nutrition: { "Calories": "25 kcal", "Carbohydrates": "6g", "Fiber": "3g", "Vitamin B1": "0.08mg", "Copper": "0.07mg" },
        benefits: ["Contains fiber for digestion", "Rich in antioxidants", "Supports heart health", "Low in calories", "Contains manganese"],
        seasons: "July - October",
        origin: "India and Southeast Asia",
        funFacts: ["Eggplant is technically a berry", "It belongs to the nightshade family", "The word eggplant is used in US and Australia", "Aubergine is the British term", "Eggplant can be bitter if not properly prepared"],
        culinary: "Grilled, roasted, baked, or fried. Used in baba ganoush, eggplant parmesan, curry, and ratatouille. Absorbs flavors well."
    }
];

// Combine all data
let allItems = [...fruitsData, ...vegetablesData];

// State
let currentFilter = 'all';
let currentSearch = '';
let currentSort = 'name';
let currentView = 'grid';

// DOM Elements
const itemsGrid = document.getElementById('itemsGrid');
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const filterButtons = document.querySelectorAll('.filter-btn');
const viewButtons = document.querySelectorAll('.view-btn');
const sortSelect = document.getElementById('sortSelect');
const showingCount = document.getElementById('showingCount');
const totalItems = document.getElementById('totalItems');
const totalCount = document.getElementById('totalCount');
const footerFruits = document.getElementById('footerFruits');
const footerVeggies = document.getElementById('footerVeggies');
const modal = document.getElementById('detailModal');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateStats();
    renderItems();
    setupEventListeners();
});

// Update Statistics
function updateStats() {
    const fruitsCount = fruitsData.length;
    const veggiesCount = vegetablesData.length;
    const total = fruitsCount + veggiesCount;
    
    totalCount.textContent = total;
    totalItems.textContent = total;
    footerFruits.textContent = fruitsCount;
    footerVeggies.textContent = veggiesCount;
}

// Setup Event Listeners
function setupEventListeners() {
    // Search
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        clearSearch.classList.toggle('visible', currentSearch.length > 0);
        renderItems();
    });

    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        currentSearch = '';
        clearSearch.classList.remove('visible');
        renderItems();
    });

    // Filters
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderItems();
        });
    });

    // View Toggle
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            itemsGrid.classList.toggle('list-view', currentView === 'list');
        });
    });

    // Sort
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderItems();
    });

    // Modal
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

// Render Items
function renderItems() {
    let filtered = [...allItems];

    // Apply Filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(item => {
            if (currentFilter === 'tropical') {
                return item.subcategory === 'tropical' || (item.category === 'fruit' && ['tropical', 'melon'].includes(item.subcategory));
            }
            return item.category === currentFilter;
        });
    }

    // Apply Search
    if (currentSearch) {
        filtered = filtered.filter(item => 
            item.name.toLowerCase().includes(currentSearch) ||
            item.overview.toLowerCase().includes(currentSearch) ||
            item.nutrition && Object.keys(item.nutrition).some(key => 
                item.nutrition[key].toLowerCase().includes(currentSearch)
            )
        );
    }

    // Apply Sort
    filtered.sort((a, b) => {
        switch(currentSort) {
            case 'calories-low':
                return a.calories - b.calories;
            case 'calories-high':
                return b.calories - a.calories;
            case 'vitamin-c':
                const aVitC = a.nutrition['Vitamin C'] ? parseFloat(a.nutrition['Vitamin C']) : 0;
                const bVitC = b.nutrition['Vitamin C'] ? parseFloat(b.nutrition['Vitamin C']) : 0;
                return bVitC - aVitC;
            default:
                return a.name.localeCompare(b.name);
        }
    });

    // Update count
    showingCount.textContent = filtered.length;

    // Render
    itemsGrid.innerHTML = filtered.map((item, index) => `
        <div class="item-card ${item.category} ${item.subcategory || ''}" 
             style="animation-delay: ${index * 0.05}s"
             onclick="openModal(${item.id})">
            <div class="item-image">
                <span class="emoji">${item.emoji}</span>
            </div>
            <div class="item-content">
                <div class="item-header">
                    <h3 class="item-name">${item.name}</h3>
                    <span class="item-category ${item.category}">${item.category}</span>
                </div>
                <p class="item-preview">${item.overview.substring(0, 100)}...</p>
                <div class="item-meta">
                    <span class="meta-item calories">
                        <i class="fas fa-fire"></i> ${item.calories} kcal
                    </span>
                    <span class="view-btn-card">
                        <i class="fas fa-arrow-right"></i> View Details
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

// Open Modal
function openModal(id) {
    const item = allItems.find(i => i.id === id);
    if (!item) return;

    document.getElementById('modalIcon').textContent = item.emoji;
    document.getElementById('modalTitle').textContent = item.name;
    
    const categoryEl = document.getElementById('modalCategory');
    categoryEl.textContent = item.category;
    categoryEl.className = 'modal-category ' + item.category;
    
    document.getElementById('modalOverview').textContent = item.overview;
    
    // Nutrition
    const nutritionList = document.getElementById('modalNutrition');
    nutritionList.innerHTML = Object.entries(item.nutrition).map(([key, value]) => 
        `<li><strong>${key}:</strong> ${value}</li>`
    ).join('');
    
    // Benefits
    const benefitsList = document.getElementById('modalBenefits');
    benefitsList.innerHTML = item.benefits.map(benefit => 
        `<li>${benefit}</li>`
    ).join('');
    
    // Season & Origin
    document.getElementById('modalSeason').innerHTML = `
        <strong>Season:</strong> ${item.seasons}<br>
        <strong>Origin:</strong> ${item.origin}
    `;
    
    // Fun Facts
    const funFactsList = document.getElementById('modalFunFacts');
    funFactsList.innerHTML = item.funFacts.map(fact => 
        `<li>${fact}</li>`
    ).join('');
    
    // Culinary
    document.getElementById('modalCulinary').textContent = item.culinary;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}
