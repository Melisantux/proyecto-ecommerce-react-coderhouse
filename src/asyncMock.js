const products = [
  {
    category: "games",
    description:
      "A set of TPU cover that protects the LCD screen and Joy-Con from scratches and dirt.",
    features: [
      "Protects LCD screen and Joy-Con from scratches and dirt",
      "You can use the Switch dock without removing the cover",
    ],
    id: 1,
    img: "https://res.cloudinary.com/rubyxloki/image/upload/v1686261411/Poke%20Collector%20Eccomerce/pokemon-tpu-protector-set-for-nintendo-switch.webp",
    isOnSale: false,
    manufacturer: "Keys Factory",
    name: "Pokemon TPU Protector Set for Nintendo Switch",
    price: 24.99,
    salePrice: null,
    slug: "pokemon-tpu-protector-set-for-nintendo-switch",
    stock: 3,
    subcategory: "accessories",
  },
  {
    category: "games",
    description:
      "Catch, battle, and train Pokémon in the Paldea Region, a vast land filled with lakes, towering peaks, wastelands, small towns, and sprawling cities. Explore a wide-open world at your own pace and traverse land, water, and air by riding on a form-shifting Legendary Pokémon—Koraidon in Pokémon Scarlet. Choose either Sprigatito, Fuecoco, or Quaxly, to be your first partner Pokémon before setting off on your journey through Paldea.",
    features: [
      "Victory Road - Along Victory Road, you will challenge Gyms in different locations and aim to achieve Champion Rank.",
      "Path of Legends - On the Path of Legends, take on gigantic Titan Pokémon that guard rare ingredients.",
      "Starfall Street - In Starfall Street you’ll use the new Auto Battle feature to take on Team Star grunts from your school in order to reach their boss",
    ],
    id: 2,
    img: "https://res.cloudinary.com/rubyxloki/image/upload/v1686261411/Poke%20Collector%20Eccomerce/pokemon-scarlet.webp",
    isOnSale: true,
    manufacturer: "Nintendo",
    name: "Pokemon Scarlet",
    price: 59.99,
    salePrice: 52.99,
    slug: "pokemon-scarlet",
    stock: 5,
    subcategory: "games",
  },
  {
    category: "games",
    description:
      "Play your favorite Nintendo Switch games* in style with this officially licensed PowerA wired controller. This controller features an ergonomic design and standard button layout. A detachable USB cable with a Velcro-strap is included for easy storage and reduced clutter when you are done playing.",
    features: [
      "Ergonomic controller shape with Nintendo Switch button layout.",
      "Detachable 10ft (3m) USB cable with Velcro-strap.",
      "Officially licensed for Nintendo Switch.",
    ],
    id: 3,
    img: "https://res.cloudinary.com/rubyxloki/image/upload/v1686261412/Poke%20Collector%20Eccomerce/powera-wired-controller-for-nintendo-switch-pokemon-charmander.webp",
    isOnSale: false,
    manufacturer: "PowerA",
    name: "PowerA Wired Controller for Nintendo Switch (Pokemon: Charmander Blaze)",
    price: 29.99,
    salePrice: 25.99,
    slug: "powera-wired-controller-for-nintendo-switch-pokemon-charmander-blaze",
    stock: 2,
    subcategory: "accessories",
  },
  {
    category: "games",
    description: "Store your Nintendo Switch with a design of Pokemon.",
    features: ["Gently protect the Nintendo Switch.", "High elastic material."],
    id: 4,
    img: "https://res.cloudinary.com/rubyxloki/image/upload/v1686261412/Poke%20Collector%20Eccomerce/pokemon-quick-pouch-for-nintendo-switch.webp",
    isOnSale: true,
    manufacturer: "Keys Factory",
    name: "Pokemon Quick Pouch for Nintendo Switch",
    price: 24.99,
    salePrice: 19.99,
    slug: "pokemon-quick-pouch-for-nintendo-switch",
    stock: 1,
    subcategory: "accessories",
  },
  {
    category: "games",
    description:
      "This brand-new game brings the gameplay of the 1999 Pokémon Snap game for the Nintendo 64™ system to life on the Nintendo Switch system with unknown islands to discover and different Pokémon to see! Photograph lively wild Pokémon in their natural habitats as you research and explore unknown islands. Journey through a variety of environments such as beaches and jungles to capture previously-unseen Pokémon behaviors. The photos you take can also be used to fill out your very own Pokémon Photodex!",
    features: [
      "See a different side of Pokémon in a new photo-snapping adventure, only on Nintendo Switch.",
      "Research various Pokémon in their natural habitats and capture Pokémon behaviors that you’ve never seen before.",
      "Explore unknown islands with scenery like lush jungles and tropical beaches throughout your journey.",
      "Take in-game photos to make your very own Pokémon Photodex.",
    ],
    id: 5,
    img: "https://res.cloudinary.com/rubyxloki/image/upload/v1686261411/Poke%20Collector%20Eccomerce/new-pokemon-snap.webp",
    isOnSale: false,
    manufacturer: "Nintendo",
    name: "New Pokemon Snap",
    price: 59.99,
    salePrice: 52.99,
    slug: "new-pokemon-snap",
    stock: 6,
    subcategory: "games",
  },
  {
    category: "games",
    description:
      "The Nintendo Switch OLED Model: Pokémon Scarlet & Violet Edition system features special illustrations of the Legendary Pokémon appearing in the Pokémon Scarlet and Pokémon Violet games, Koraidon, and Miraidon, as well as the partner Pokémon Sprigatito, Fuecoco, and Quaxly.",
    features: [
      "7-inch OLED Screen - Feast your eyes on vivid colors and crisp contrast when you play on-the-go. See the difference the vibrant screen makes, whether you're racing at top speed or squaring off against enemies.",
      "Wide, Adjustable Stand - Flip out the sturdy stand for easy viewing in Tabletop mode.",
      "Find Your Best Angle - Adjust the stand to find the optimal viewing angle—perfect for a quick multiplayer game with a buddy.",
      "Enhanced Audio - Enjoy enhanced audio from the system’s onboard speakers.",
      "Three Modes in One - Nintendo Switch and Nintendo Switch (OLED model) systems are designed to fit your life, transforming from home console to portable system in a snap!",
    ],
    price: 399.99,
    id: 6,
    img: "https://res.cloudinary.com/rubyxloki/image/upload/v1686261411/Poke%20Collector%20Eccomerce/nintendo-switch-oled-model-pokemon.webp",
    isOnSale: false,
    manufacturer: "Nintendo",
    name: "Nintendo Switch OLED Model [Pokemon Scarlet & Violet Limited Edition]",
    salePrice: null,
    slug: "nintendo-switch-oled-model-[pokemon-scarlet-&-violet-limited-edition]",
    stock: 2,
    subcategory: "consoles",
  },
  {
    category: "games",
    description:
      "Get ready for a new kind of grand, Pokémon adventure in Pokémon Legends: Arceus, a brand new game from Game Freak that blends action and exploration with the RPG roots of the Pokémon series. Explore natural expanses to catch Pokémon by learning their behavior, sneaking up, and throwing a well-aimed Poké Ball. You can also toss the Poké Ball containing your ally Pokémon near a wild Pokémon to seamlessly enter the battle. This new angle on Pokémon gameplay will deliver an immersive, personal experience brought to life by both Pokémon and humans.",
    features: [
      "Build the first Pokédex in the history of the Sinnoh region.",
      "Explore the Sinnoh region of the past.",
      "Action meets RPG in this new take on the Pokémon series.",
      "Learn about the Pokémon Arceus, the key to this mysterious tale.",
    ],
    id: 7,
    img: "https://res.cloudinary.com/rubyxloki/image/upload/v1686261411/Poke%20Collector%20Eccomerce/pokemon-legends-arceus.webp",
    isOnSale: false,
    manufacturer: "Nintendo",
    name: "Pokemon Legends: Arceus",
    price: 59.99,
    salePrice: null,
    slug: "pokemon-legends-arceus",
    stock: 5,
    subcategory: "games",
  },
  {
    category: "collectibles",
    description: null,
    features: ["Height: approx. 155mm", "Limited availability"],
    id: 8,
    img: "https://res.cloudinary.com/rubyxloki/image/upload/v1686261410/Poke%20Collector%20Eccomerce/pokemon-all-star-collection-plush-wooper.webp",
    isOnSale: true,
    manufacturer: "San-ei Boeki",
    name: "Pocket Monsters All Star Collection Plush: Wooper",
    price: 14.99,
    salePrice: 10.99,
    slug: "pocket-monsters-all-star-collection-plush-wooper",
    stock: 3,
    subcategory: "plush",
  },
  {
    category: "collectibles",
    description:
      "The pair are perhaps one of the most well known characters in gaming history, and it is easy to understand why so many toy manufacturers worldwide dedicate a big variety of merchandises surrounding Red & Pikachu as well as other characters/Pokemon too. And now even Kotobukiya's ARTFX J line, which dedicates their work to making statues of famous Japanese works for fans all over the world, decides to go back in time to make a 1/8th scale figure of the fan favorite inseperatable pair! Red stands at approximately 18.5cm and Pikachu at 7cm.",
    features: [
      "1/8 Scale Pre-Painted Figure.",
      "Material: PVC, ABS.",
      "Height: approx. 185mm (Red), approx. 70mm (Pikachu).",
      "Illustrator: Ariga Hitoshi",
      "Sculptor: Nishimaru Yoshihiro, Nishimura Naoki",
      "Limited availability",
    ],
    id: 9,
    img: "https://res.cloudinary.com/rubyxloki/image/upload/v1686261410/Poke%20Collector%20Eccomerce/artfx-pokemon-series-figure-red-with-pikachu.webp",
    isOnSale: false,
    manufacturer: "Kotobukiya",
    name: "ARTFX J Pokemon Series 1/8 Scale Pre-Painted Figure: Red with Pikachu",
    price: 64.99,
    salePrice: 57.99,
    slug: "artfx-j-pokemon-series-1-8-scale-pre-painted-figure-red-with-pikachu",
    stock: 3,
    subcategory: "figures",
  },
];

/** @typedef { 'collectibles' | 'games' | 'books' | 'homeware' | 'tcg' | 'clothing' } Category */

/** @typedef { 'figures' | 'plush' | 'games' | 'accessories' | 'consoles' } SubCategory */

/**
 * @typedef Product
 * @property {Category} category
 * @property {SubCategory} subcategory
 * @property {boolean} isOnSale
 * @property {number?} salePrice
 * @property {number} id
 * @property {number} price
 * @property {number} stock
 * @property {string?} description
 * @property {string[]} features
 * @property {string} img
 * @property {string} manufacturer
 * @property {string} name
 * @property {string} slug
 */

/** @returns {Promise<Product[]>} */
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products), 500;
    });
  });
};

/** @param {string} slug @returns {Promise<Product | undefined>} */
export const getProductBySlug = (slug) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.slug === slug)), 500;
    });
  });
};

/** @param {string} category @returns {Promise<Product[]>} */
export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category)), 500;
    });
  });
};
