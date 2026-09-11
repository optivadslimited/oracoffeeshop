// ORA Coffee — Casablanca. All prices in MAD.
// Source: ORA Coffee menu (MAD). Edit here to change the menu.
window.ORA_MENU = [
  {
    id: "purist",
    name: "Purist",
    tagline: "Classic coffee. Always a good idea.",
    items: [
      { id: "pure-black-single", name: "Pure Black — Single", desc: "Single espresso.", price: 18 },
      { id: "pure-black-double", name: "Pure Black — Double", desc: "Double espresso.", price: 22 },
      { id: "americano", name: "Americano", desc: "Espresso + hot water.", price: 24 },
      { id: "macchiato", name: "Macchiato", desc: "Espresso + a touch of milk.", price: 26 },
      { id: "caffe-latte", name: "Caffè Latte", desc: "Espresso + steamed milk.", price: 30 },
      { id: "flat-white", name: "Flat White", desc: "Double ristretto + velvety milk.", price: 32 },
      { id: "true-white", name: "True White", desc: "Double espresso + steamed milk.", price: 32 },
      { id: "iced-black", name: "Iced Black", desc: "Coffee over ice.", price: 28 },
      { id: "iced-latte", name: "Iced Latte", desc: "Coffee, milk + ice.", price: 34 },
      { id: "espresso-tonic", name: "Espresso Tonic", desc: "Espresso, tonic + ice.", price: 32 },
      { id: "spanish-latte", name: "Spanish Latte", desc: "Latte + condensed milk.", price: 36 },
      { id: "chai-latte", name: "Chai Latte", desc: "Steamed milk + chai spices.", price: 36 },
      { id: "matcha-latte", name: "Matcha Latte", desc: "Matcha + steamed milk.", price: 38 },
      { id: "iced-spanish-latte", name: "Iced Spanish Latte", desc: "Iced latte + condensed milk.", price: 40 },
      { id: "chai-iced-latte", name: "Chai Iced Latte", desc: "Iced chai + spices.", price: 40 }
    ]
  },
  {
    id: "signature-hot",
    name: "Signature hot",
    tagline: "Comfort in a cup.",
    items: [
      { id: "urban-chocolate", name: "Urban Chocolate", desc: "Hot chocolate + milk.", price: 34 },
      { id: "nutty-latte", name: "Nutty Latte", desc: "Coffee, chocolate, hazelnut + milk.", price: 36 },
      { id: "caramel-latte", name: "Caramel Latte", desc: "Coffee, steamed milk + caramel.", price: 36 },
      { id: "vanilla-latte", name: "Vanilla Latte", desc: "Latte + vanilla.", price: 36 },
      { id: "honey-latte", name: "Honey Latte", desc: "Chocolate base, spices + honey.", price: 38 },
      { id: "tonka-latte", name: "Tonka Latte", desc: "Coffee, milk + tonka essence.", price: 38 },
      { id: "mad-mocha", name: "Mad Mocha", desc: "Coffee, milk + chocolate.", price: 38 },
      { id: "tiramisu-latte", name: "Tiramisu Latte", desc: "Coffee, chocolate + vanilla.", price: 38 },
      { id: "matcha-vanilla-latte", name: "Matcha Vanilla Latte", desc: "Matcha, milk + vanilla.", price: 42 },
      { id: "matcha-tonka-latte", name: "Matcha Tonka Latte", desc: "Matcha, milk + tonka.", price: 42 }
    ]
  },
  {
    id: "signature-iced",
    name: "Signature iced",
    tagline: "Bold flavors. Refreshing moments.",
    items: [
      { id: "fresh-soda-strawberry", name: "Fresh Soda Strawberry", desc: "Sparkling, strawberry + cinnamon.", price: 34 },
      { id: "iced-vanilla", name: "Iced Vanilla", desc: "Coffee, milk, vanilla + ice.", price: 36 },
      { id: "iced-chocolate", name: "Iced Chocolate", desc: "Milk + chocolate over ice.", price: 38 },
      { id: "black-ginger", name: "Black Ginger", desc: "Espresso, tonic, ginger + ice.", price: 40 },
      { id: "salted-caramel", name: "Salted Caramel", desc: "Iced latte + salted caramel.", price: 40 },
      { id: "tonka-iced-latte", name: "Tonka Iced Latte", desc: "Coffee, milk + tonka.", price: 40 },
      { id: "chocold-mint", name: "Chocold Mint", desc: "Iced chocolate + mint.", price: 40 },
      { id: "tiramisu-iced-latte", name: "Tiramisu Iced Latte", desc: "Milk, espresso, chocolate + vanilla.", price: 42 },
      { id: "matcha-iced-mint", name: "Matcha Iced Mint", desc: "Matcha, milk + mint.", price: 42 },
      { id: "ichigo-matcha", name: "Ichigo Matcha", desc: "Matcha, milk + strawberry.", price: 44 },
      { id: "ichigo-chocolate", name: "Ichigo Chocolate", desc: "Chocolate, milk + strawberry.", price: 44 }
    ]
  },
  {
    id: "filter",
    name: "Filter",
    tagline: "Slow brew, single origin.",
    items: [
      { id: "hot-drip-v60", name: "Hot Drip V60", desc: "Hand-filtered single origin.", price: 34 }
    ]
  },
  {
    id: "food",
    name: "Food & sweets",
    tagline: "Baked here, every morning.",
    items: [
      { id: "banana-bread", name: "Banana Bread", desc: "Brazil nuts + chocolate chips.", price: 28 },
      { id: "brownie", name: "Brownie", desc: "Rich chocolate brownie.", price: 26 },
      { id: "lemon-cake", name: "Lemon Cake", desc: "Lemon cake with lemon glaze.", price: 28 }
    ]
  },
  {
    id: "cookies",
    name: "Cookies",
    tagline: "Soft centre, crisp edge.",
    items: [
      { id: "cookie-traditional", name: "Traditional", desc: "Vanilla + chocolate chips.", price: 22 },
      { id: "cookie-salted-caramel", name: "Salted Caramel", desc: "Filled with salted caramel.", price: 24 },
      { id: "cookie-triple-chocolate", name: "Triple Chocolate", desc: "White, milk + dark chocolate.", price: 24 },
      { id: "cookie-matcha-white-choc", name: "Matcha & White Choc", desc: "Matcha + white chocolate chips.", price: 24 }
    ]
  },
  {
    id: "water",
    name: "Water",
    tagline: "",
    items: [
      { id: "still-water", name: "Still Mineral Water", desc: "500 ml.", price: 15 },
      { id: "sparkling-water", name: "Sparkling Water", desc: "500 ml.", price: 18 }
    ]
  }
];
