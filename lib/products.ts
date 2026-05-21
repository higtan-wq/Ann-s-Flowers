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
    slug: "potted",
    name: "Potted Plants",
    description: "Long-lasting potted plants and seasonal blooms — a gift that keeps on growing.",
    image: "/potted.jpg",
    color: "#3A8A3A",
    products: [],
  },
  {
    slug: "gifts",
    name: "Gifts & Cards",
    description: "Curated gifts, greeting cards, and keepsakes for every occasion.",
    image: "/gifts.jpg",
    color: "#E8472A",
    products: [],
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
    products: [],
  },
  {
    slug: "jewelry",
    name: "Jewelry",
    description: "Beautiful jewelry pieces for every occasion. Come see our selection in store — you might be surprised!",
    image: "/jewelry.jpg",
    color: "#1A9B8E",
    products: [],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
