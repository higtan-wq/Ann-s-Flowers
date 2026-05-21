import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/products";

export default function Shop() {
  return (
    <section id="shop" className="py-20 px-4 bg-[#FAF6EF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#E8472A] font-semibold uppercase tracking-widest text-sm mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D2B7A]">Our Collections</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Click any category to browse products and shop online.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/shop/${c.slug}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-[#f0e8dc] group"
            >
              <div className="relative w-full h-52">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: c.color }}>
                    {c.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{c.description}</p>
                  {c.onlineOrdering && (
                    <span className="inline-block mt-2 text-xs font-semibold text-[#1A9B8E] border border-[#1A9B8E] rounded-full px-3 py-0.5">
                      Online Ordering Available
                    </span>
                  )}
                </div>
                <span className="text-2xl ml-3 text-gray-300 group-hover:text-[#E8472A] transition-colors">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
