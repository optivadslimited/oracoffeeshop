// ORA Coffee — Casablanca. All prices in MAD.
// Source: ORA Coffee menu (MAD). Edit here to change the menu.
// temp: "hot" | "cold" | "food" — shown as a tag and used for the Hot/Cold filter.
// img: illustration spec (see js/art.js). Add photo: "img/name.jpg" to use a real photo.
// available: false greys the item out and marks it unavailable.
window.ORA_MENU = [
  {
    id: "purist",
    name: "Purist",
    tagline: "Classic coffee. Always a good idea.",
    items: [
      { id: "pure-black-single", name: "Pure Black — Single", desc: "Single espresso.", price: 18, temp: "hot", img: { type: "espresso", tint: "#4a2408", top: "#b8763a" } },
      { id: "pure-black-double", name: "Pure Black — Double", desc: "Double espresso.", price: 22, temp: "hot", img: { type: "espresso", tint: "#3d1d06", top: "#a8682e" } },
      { id: "americano", name: "Americano", desc: "Espresso + hot water.", price: 24, temp: "hot", img: { type: "hot", tint: "#3d1d06", art: false } },
      { id: "macchiato", name: "Macchiato", desc: "Espresso + a touch of milk.", price: 26, temp: "hot", img: { type: "espresso", tint: "#4a2408", top: "#b8763a", dot: true } },
      { id: "caffe-latte", name: "Caffè Latte", desc: "Espresso + steamed milk.", price: 30, temp: "hot", img: { type: "hot", tint: "#c98a4d" } },
      { id: "flat-white", name: "Flat White", desc: "Double ristretto + velvety milk.", price: 32, temp: "hot", img: { type: "hot", tint: "#b8763a" } },
      { id: "true-white", name: "True White", desc: "Double espresso + steamed milk.", price: 32, temp: "hot", img: { type: "hot", tint: "#d09a62" } },
      { id: "iced-black", name: "Iced Black", desc: "Coffee over ice.", price: 28, temp: "cold", img: { type: "iced", tint: "#3d1d06", top: "#5a3417", split: 40 } },
      { id: "iced-latte", name: "Iced Latte", desc: "Coffee, milk + ice.", price: 34, temp: "cold", img: { type: "iced", tint: "#7a4a22", top: "#efe6d6" } },
      { id: "espresso-tonic", name: "Espresso Tonic", desc: "Espresso, tonic + ice.", price: 32, temp: "cold", img: { type: "iced", tint: "#d9c9a0", top: "#4a2408", split: 60, bubbles: true } },
      { id: "spanish-latte", name: "Spanish Latte", desc: "Latte + condensed milk.", price: 36, temp: "hot", img: { type: "hot", tint: "#c4894e" } },
      { id: "chai-latte", name: "Chai Latte", desc: "Steamed milk + chai spices.", price: 36, temp: "hot", img: { type: "hot", tint: "#b6763c" } },
      { id: "matcha-latte", name: "Matcha Latte", desc: "Matcha + steamed milk.", price: 38, temp: "hot", img: { type: "hot", tint: "#7a9a3c" } },
      { id: "iced-spanish-latte", name: "Iced Spanish Latte", desc: "Iced latte + condensed milk.", price: 40, temp: "cold", img: { type: "iced", tint: "#9a5f2c", top: "#f0e0c4" } },
      { id: "chai-iced-latte", name: "Chai Iced Latte", desc: "Iced chai + spices.", price: 40, temp: "cold", img: { type: "iced", tint: "#a86a34", top: "#efe6d6" } }
    ]
  },
  {
    id: "signature-hot",
    name: "Signature hot",
    tagline: "Comfort in a cup.",
    items: [
      { id: "urban-chocolate", name: "Urban Chocolate", desc: "Hot chocolate + milk.", price: 34, temp: "hot", img: { type: "hot", tint: "#5a2e14" } },
      { id: "nutty-latte", name: "Nutty Latte", desc: "Coffee, chocolate, hazelnut + milk.", price: 36, temp: "hot", img: { type: "hot", tint: "#8a4f22" } },
      { id: "caramel-latte", name: "Caramel Latte", desc: "Coffee, steamed milk + caramel.", price: 36, temp: "hot", img: { type: "hot", tint: "#c07a2e" } },
      { id: "vanilla-latte", name: "Vanilla Latte", desc: "Latte + vanilla.", price: 36, temp: "hot", img: { type: "hot", tint: "#d6a26a" } },
      { id: "honey-latte", name: "Honey Latte", desc: "Chocolate base, spices + honey.", price: 38, temp: "hot", img: { type: "hot", tint: "#b4741e" } },
      { id: "tonka-latte", name: "Tonka Latte", desc: "Coffee, milk + tonka essence.", price: 38, temp: "hot", img: { type: "hot", tint: "#a8703c" } },
      { id: "mad-mocha", name: "Mad Mocha", desc: "Coffee, milk + chocolate.", price: 38, temp: "hot", img: { type: "hot", tint: "#6a3616" } },
      { id: "tiramisu-latte", name: "Tiramisu Latte", desc: "Coffee, chocolate + vanilla.", price: 38, temp: "hot", img: { type: "hot", tint: "#8c5a30" } },
      { id: "matcha-vanilla-latte", name: "Matcha Vanilla Latte", desc: "Matcha, milk + vanilla.", price: 42, temp: "hot", img: { type: "hot", tint: "#8faa50" } },
      { id: "matcha-tonka-latte", name: "Matcha Tonka Latte", desc: "Matcha, milk + tonka.", price: 42, temp: "hot", img: { type: "hot", tint: "#6f8f38" } }
    ]
  },
  {
    id: "signature-iced",
    name: "Signature iced",
    tagline: "Bold flavors. Refreshing moments.",
    items: [
      { id: "fresh-soda-strawberry", name: "Fresh Soda Strawberry", desc: "Sparkling, strawberry + cinnamon.", price: 34, temp: "cold", img: { type: "iced", tint: "#e0466a", top: "#f8d9de", split: 56, bubbles: true } },
      { id: "iced-vanilla", name: "Iced Vanilla", desc: "Coffee, milk, vanilla + ice.", price: 36, temp: "cold", img: { type: "iced", tint: "#8a5a2c", top: "#f4ecd8" } },
      { id: "iced-chocolate", name: "Iced Chocolate", desc: "Milk + chocolate over ice.", price: 38, temp: "cold", img: { type: "iced", tint: "#4a2610", top: "#c9a27a", split: 58 } },
      { id: "black-ginger", name: "Black Ginger", desc: "Espresso, tonic, ginger + ice.", price: 40, temp: "cold", img: { type: "iced", tint: "#e0c470", top: "#3d1d06", split: 60, bubbles: true } },
      { id: "salted-caramel", name: "Salted Caramel", desc: "Iced latte + salted caramel.", price: 40, temp: "cold", img: { type: "iced", tint: "#b4702a", top: "#efe2c8" } },
      { id: "tonka-iced-latte", name: "Tonka Iced Latte", desc: "Coffee, milk + tonka.", price: 40, temp: "cold", img: { type: "iced", tint: "#8a5a34", top: "#efe6d6" } },
      { id: "chocold-mint", name: "Chocold Mint", desc: "Iced chocolate + mint.", price: 40, temp: "cold", img: { type: "iced", tint: "#4a2610", top: "#bfe3c9", split: 58 } },
      { id: "tiramisu-iced-latte", name: "Tiramisu Iced Latte", desc: "Milk, espresso, chocolate + vanilla.", price: 42, temp: "cold", img: { type: "iced", tint: "#6a3a18", top: "#efe2c8", split: 56 } },
      { id: "matcha-iced-mint", name: "Matcha Iced Mint", desc: "Matcha, milk + mint.", price: 42, temp: "cold", img: { type: "iced", tint: "#6f9a3a", top: "#dff0d8", split: 60 } },
      { id: "ichigo-matcha", name: "Ichigo Matcha", desc: "Matcha, milk + strawberry.", price: 44, temp: "cold", img: { type: "iced", tint: "#e0466a", top: "#7fa843", split: 74 } },
      { id: "ichigo-chocolate", name: "Ichigo Chocolate", desc: "Chocolate, milk + strawberry.", price: 44, temp: "cold", img: { type: "iced", tint: "#e0466a", top: "#5a2e14", split: 74 } }
    ]
  },
  {
    id: "filter",
    name: "Filter",
    tagline: "Slow brew, single origin.",
    items: [
      { id: "hot-drip-v60", name: "Hot Drip V60", desc: "Hand-filtered single origin.", price: 34, temp: "hot", img: { type: "v60" } }
    ]
  },
  {
    id: "food",
    name: "Food & sweets",
    tagline: "Baked here, every morning.",
    items: [
      { id: "banana-bread", name: "Banana Bread", desc: "Brazil nuts + chocolate chips.", price: 28, temp: "food", img: { type: "bread" } },
      { id: "brownie", name: "Brownie", desc: "Rich chocolate brownie.", price: 26, temp: "food", img: { type: "brownie" } },
      { id: "lemon-cake", name: "Lemon Cake", desc: "Lemon cake with lemon glaze.", price: 28, temp: "food", img: { type: "cake" } }
    ]
  },
  {
    id: "cookies",
    name: "Cookies",
    tagline: "Soft centre, crisp edge.",
    items: [
      { id: "cookie-traditional", name: "Traditional", desc: "Vanilla + chocolate chips.", price: 22, temp: "food", img: { type: "cookie" } },
      { id: "cookie-salted-caramel", name: "Salted Caramel", desc: "Filled with salted caramel.", price: 24, temp: "food", img: { type: "cookie", tint: "#c9944e", inner: "#d9a866", filled: true } },
      { id: "cookie-triple-chocolate", name: "Triple Chocolate", desc: "White, milk + dark chocolate.", price: 24, temp: "food", img: { type: "cookie", tint: "#6a3a1c", inner: "#7a4a28", chips: "#f4ecdc" } },
      { id: "cookie-matcha-white-choc", name: "Matcha & White Choc", desc: "Matcha + white chocolate chips.", price: 24, temp: "food", img: { type: "cookie", tint: "#8faa50", inner: "#a3bd62", chips: "#f8f4ea" } }
    ]
  },
  {
    id: "water",
    name: "Water",
    tagline: "",
    items: [
      { id: "still-water", name: "Still Mineral Water", desc: "500 ml.", price: 15, temp: "cold", img: { type: "water" } },
      { id: "sparkling-water", name: "Sparkling Water", desc: "500 ml.", price: 18, temp: "cold", img: { type: "water", bubbles: true } }
    ]
  }
];
