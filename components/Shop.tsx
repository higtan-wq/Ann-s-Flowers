import Image from "next/image";

const products = [
  {
    name: "Fresh Bouquets",
    description: "Hand-crafted bouquets perfect for any occasion. Ask about our seasonal selections.",
    image: "/bouquets.jpg",
    color: "#E8472A",
  },
  {
    name: "Wedding Arrangements",
    description: "Bridal bouquets, centerpieces, and full wedding florals tailored to your vision.",
    image: "/wedding.jpg",
    color: "#3D2B7A",
  },
  {
    name: "Sympathy Flowers",
    description: "Thoughtful arrangements to honor and comfort during life's most difficult moments.",
    image: "/sympathy.jpg",
    color: "#1A9B8E",
  },
  {
    name: "Potted Plants",
    description: "Long-lasting potted plants and seasonal blooms — a gift that keeps on growing.",
    image: "/potted.jpg",
    color: "#3A8A3A",
  },
  {
    name: "Gifts & Cards",
    description: "Curated gifts, greeting cards, and keepsakes for every occasion.",
    image: "/gifts.jpg",
    color: "#E8472A",
  },
  {
    name: "Event Florals",
    description: "Corporate events, parties, and special occasions — we handle the flowers.",
    image: "/events.jpg",
    color: "#3D2B7A",
  },
];

export default function Shop() {
  return (
    <section id="shop" className="py-20 px-4 bg-[#FAF6EF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#E8472A] font-semibold uppercase tracking-widest text-sm mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D2B7A]">Our Collections</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            From everyday bouquets to full event florals, we have something for every moment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#f0e8dc]"
            >
              <div className="relative w-full h-52">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1" style={{ color: p.color }}>
                  {p.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
