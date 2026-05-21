export type Product = {
  name: string;
  description?: string;
  price?: string;
  image: string;
  squareLink?: string;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
  color: string;
  portfolio?: boolean;
  portfolioMessage?: string;
  portfolioCta?: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    slug: "bouquets",
    name: "Fresh Flowers",
    description: "Hand-crafted fresh arrangements perfect for any occasion. Ask about our seasonal selections.",
    image: "/bouquets.jpg",
    color: "#E8472A",
    products: [
      { name: "Sunset Meadow", price: "$65", image: "/sunset-meadow.jpg", squareLink: "https://square.link/u/Xy0vU1h9" },
      { name: "Southern Sweetheart", price: "$60", image: "/southern-sweetheart.png", squareLink: "https://square.link/u/vBMKOrOX" },
      { name: "Daisy Dreams", price: "$50", image: "/daisy-dreams.png", squareLink: "https://square.link/u/UQwJt3gy" },
      { name: "Blooming Mason Jar", price: "$25", image: "/blooming-mason-jar.png", squareLink: "https://square.link/u/eYTlVoiE" },
      { name: "Bloom Where You're Planted", price: "$75", image: "/bloom-where-youre-planted.jpg", squareLink: "https://square.link/u/S5EFHmq5" },
      { name: "Pretty in Pink", price: "$45", image: "/pretty-in-pink.png", squareLink: "https://square.link/u/HHKqN3F0" },
      { name: "Lily Lane", price: "$100", image: "/lily-lane.png", squareLink: "https://square.link/u/eUe9ezy0" },
      { name: "Mixed Rose Garden", description: "One dozen roses $100 · Half dozen $50", price: "$50–$100", image: "/mixed-rose-garden.png", squareLink: "https://square.link/u/zQ6vIGyF" },
    ],
  },
  {
    slug: "wedding",
    name: "Wedding Arrangements",
    description: "Bridal bouquets, centerpieces, and full wedding florals tailored to your vision.",
    image: "/wedding.jpg",
    color: "#3D2B7A",
    portfolio: true,
    portfolioMessage: "Every wedding is one of a kind. Browse our work below for inspiration, then reach out and we'll design something beautiful just for you.",
    products: [
      { name: "Barn Arch with Floral Pedestals", image: "/wedding-arch-door.jpg" },
      { name: "Garden Candle Centerpiece", image: "/wedding-centerpiece.jpg" },
      { name: "Grand Tall Arrangement", image: "/wedding-tall-arrangement.jpg" },
      { name: "Fireplace Mantel Display", image: "/wedding-fireplace.jpg" },
      { name: "Altar Arrangement", image: "/wedding-altar-arrangement.jpg" },
      { name: "Outdoor Pedestal Arrangement", image: "/wedding-pedestal.jpg" },
      { name: "Cross Arrangement", image: "/wedding-cross.jpg" },
      { name: "Bridal Bouquet", image: "/wedding-bridal-bouquet.jpg" },
      { name: "Staircase Florals", image: "/wedding-staircase.jpg" },
      { name: "Bridesmaids' Bouquets", image: "/wedding-bridesmaids.jpg" },
      { name: "Full Ceremony Florals", image: "/wedding-ceremony.jpg" },
    ],
  },
  {
    slug: "sympathy",
    name: "Sympathy Flowers",
    description: "Thoughtful arrangements to honor and comfort during life's most difficult moments.",
    image: "/sympathy.jpg",
    color: "#1A9B8E",
    products: [
      { name: "Heaven's Garden", price: "$100", image: "/heavens-garden.png", squareLink: "https://square.link/u/kXDq6DSI" },
      { name: "Crimson Tide Tribute", price: "$200", image: "/crimson-tide-tribute.png", squareLink: "https://square.link/u/XOICvZJA" },
      { name: "Blooming Memories", price: "$200", image: "/blooming-memories.png", squareLink: "https://square.link/u/hRgYdFv1" },
      { name: "Tiger Pride Tribute", price: "$200", image: "/tiger-pride-tribute.png", squareLink: "https://square.link/u/ZUNTQvFy" },
      { name: "Forever Sunny", price: "$125", image: "/forever-sunny.png", squareLink: "https://square.link/u/W344qRaR" },
      { name: "Rustic Remembrance", price: "$150", image: "/rustic-remembrance.png", squareLink: "https://square.link/u/l5p1AuSr" },
      { name: "Blue Skies Remembrance", price: "$175", image: "/blue-skies-remembrance.png", squareLink: "https://square.link/u/a0fthfuS" },
      { name: "Country Garden", price: "$175", image: "/country-garden.png", squareLink: "https://square.link/u/jj4JtmEi" },
      { name: "Casket Blankets", description: "Contact us for more Info!", image: "/casket-blanket-1.jpg" },
      { name: "Casket Blankets", description: "Contact us for more Info!", image: "/casket-blanket-2.jpg" },
      { name: "Casket Blankets", description: "Contact us for more Info!", image: "/casket-blanket-3.jpg" },
    ],
  },
  {
    slug: "silk-flowers",
    name: "Silk Flowers & Arrangements",
    description: "Beautiful silk arrangements perfect for gravesites — lasting tributes that hold up in any weather.",
    image: "/silk-flowers-cover.jpg",
    color: "#3D2B7A",
    products: [],
  },
  {
    slug: "potted",
    name: "Potted Plants",
    description: "Long-lasting potted plants and seasonal blooms — a gift that keeps on growing.",
    image: "/potted.jpg",
    color: "#3A8A3A",
    products: [],
  },
  {
    slug: "gifts",
    name: "Gifts",
    description: "Curated gifts and keepsakes for every occasion.",
    image: "/gifts-soaps-candles.jpg",
    color: "#E8472A",
    portfolio: true,
    portfolioMessage: "We carry trucker hats, mugs, soaps & candles, cutting boards, signs, stuffed animals, and so much more — come in and find the perfect gift!",
    portfolioCta: "Visit Us In Store",
    products: [
      { name: "Trucker Hats", image: "/gifts-trucker-hats.jpg" },
      { name: "Nurse Mug", image: "/gifts-nurse-mug.jpg" },
      { name: "Metal Sign", image: "/gifts-metal-sign.jpg" },
      { name: "Hydrangea Cutting Board", image: "/gifts-cutting-board-hydrangea.jpg" },
      { name: "Bow Cutting Board & Towel Set", image: "/gifts-cutting-board-bow.jpg" },
      { name: "Soap Dispensers", image: "/gifts-soap-dispensers.jpg" },
      { name: "Teddy Bear", image: "/gifts-teddy-bear.jpg" },
      { name: "Golf Mug", image: "/gifts-golf-mug.jpg" },
      { name: "YA Trucker Hat", image: "/gifts-ya-hat.jpg" },
      { name: "Angel Figurines", image: "/gifts-angel-figurines.jpg" },
      { name: "Mama Hat", image: "/gifts-mama-hat.jpg" },
      { name: "Fresh Bread & Mixes", image: "/gifts-fresh-bread.jpg" },
      { name: "Hats Display", image: "/gifts-hats-display.jpg" },
      { name: "Rachel's Ranch Dressing", image: "/gifts-rachels-ranch.jpg" },
      { name: "Soaps & Candles", image: "/gifts-soaps-candles.jpg" },
      { name: "Cardinal Sign & Crosses", image: "/gifts-cardinal-sign.jpg" },
      { name: "Handbag", image: "/gifts-handbag.jpg" },
    ],
  },
  {
    slug: "events",
    name: "Event Florals",
    description: "Corporate events, parties, and special occasions — we handle the flowers.",
    image: "/events.jpg",
    color: "#3D2B7A",
    products: [],
  },
  {
    slug: "clothing",
    name: "Clothing",
    description: "Unique graphic tees and apparel — fun, casual styles you won't find just anywhere.",
    image: "/clothing.jpg",
    color: "#E8472A",
    portfolio: true,
    portfolioMessage: "This is just a sneak peek of what we have to offer. New clothes come in and sell out of our store every day — come see us!",
    portfolioCta: "Visit Us In Store",
    products: [
      { name: "Mama Tee – Yellow", image: "/clothing-mama-yellow.jpg" },
      { name: "I'd Rather Be Thrifting Tee", image: "/clothing-thrifting.jpg" },
      { name: "Jesus Saves, I Spend Tee", image: "/clothing-jesus-saves.jpg" },
      { name: "Teacher Tee", image: "/clothing-teacher.jpg" },
      { name: "Watercolor Cross Tee", image: "/clothing-cross.jpg" },
      { name: "Cow Print Tee", image: "/clothing-cows.jpg" },
      { name: "Crabby Beach Tee", image: "/clothing-crabby.jpg" },
      { name: "AL Leopard Tee", image: "/clothing-al-leopard.jpg" },
      { name: "Shop Display", image: "/clothing-display.jpg" },
      { name: "Game Day Tee", image: "/clothing-game-day.jpg" },
      { name: "Mama Tee – Purple", image: "/clothing-mama-purple.jpg" },
    ],
  },
  {
    slug: "jewelry",
    name: "Jewelry",
    description: "Beautiful jewelry pieces for every occasion. Come see our selection in store — you might be surprised!",
    image: "/jewelry-pink-stud-earrings.jpg",
    color: "#1A9B8E",
    portfolio: true,
    portfolioMessage: "We carry rings, earrings, necklaces, and so much more — come in and see our full selection for yourself!",
    portfolioCta: "Visit Us In Store",
    products: [
      { name: "White Opal Teardrop Ring", image: "/jewelry-opal-teardrop-ring.jpg" },
      { name: "Mother in Law Necklace", image: "/jewelry-mother-in-law-necklace.jpg" },
      { name: "Beaded Statement Earrings", image: "/jewelry-beaded-earrings.jpg" },
      { name: "Pink Cushion Stud Earrings", image: "/jewelry-pink-stud-earrings.jpg" },
      { name: "Pink Opal Stud Earrings", image: "/jewelry-pink-opal-earrings.jpg" },
      { name: "Golf Earring Set", image: "/jewelry-golf-earrings.jpg" },
      { name: "Diamond Cluster Ring", image: "/jewelry-diamond-cluster-ring.jpg" },
      { name: "Emerald Stud Earrings", image: "/jewelry-emerald-earrings.jpg" },
      { name: "Blue Opal Ring", image: "/jewelry-blue-opal-ring.jpg" },
      { name: "Diamond Heart Ring", image: "/jewelry-diamond-heart-ring.jpg" },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
