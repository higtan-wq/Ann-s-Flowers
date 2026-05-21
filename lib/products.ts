export type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
  squareLink: string;
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
      { name: "Sunset Meadow", description: "A warm, vibrant arrangement bursting with sunset tones.", price: "$65", image: "/bouquets.jpg", squareLink: "https://square.link/u/Xy0vU1h9" },
      { name: "Southern Sweetheart", description: "A charming Southern-inspired bouquet full of color and character.", price: "$60", image: "/bouquets.jpg", squareLink: "https://square.link/u/vBMKOrOX" },
      { name: "Daisy Dreams", description: "Cheerful daisies and fresh blooms — light, bright, and beautiful.", price: "$50", image: "/bouquets.jpg", squareLink: "https://square.link/u/UQwJt3gy" },
      { name: "Blooming Mason Jar", description: "Fresh flowers arranged in a charming mason jar — ready to display.", price: "$25", image: "/bouquets.jpg", squareLink: "https://square.link/u/eYTlVoiE" },
      { name: "Bloom Where You're Planted", description: "A lush, full arrangement celebrating life and growth.", price: "$75", image: "/bouquets.jpg", squareLink: "https://square.link/u/S5EFHmq5" },
      { name: "Pretty in Pink", description: "Soft pinks and delicate blooms — a classic feminine arrangement.", price: "$45", image: "/bouquets.jpg", squareLink: "https://square.link/u/HHKqN3F0" },
      { name: "Lily Lane", description: "Elegant lilies and complementary florals in a stunning arrangement.", price: "$100", image: "/bouquets.jpg", squareLink: "https://square.link/u/eUe9ezy0" },
      { name: "Mixed Rose Garden", description: "A gorgeous mix of roses in a range of colors — customizable to your preference.", price: "$50–$100", image: "/bouquets.jpg", squareLink: "https://square.link/u/zQ6vIGyF" },
    ],
  },
  {
    slug: "wedding",
    name: "Wedding Arrangements",
    description: "Bridal bouquets, centerpieces, and full wedding florals tailored to your vision.",
    image: "/wedding.jpg",
    color: "#3D2B7A",
    products: [],
  },
  {
    slug: "sympathy",
    name: "Sympathy Flowers",
    description: "Thoughtful arrangements to honor and comfort during life's most difficult moments.",
    image: "/sympathy.jpg",
    color: "#1A9B8E",
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
