import Image from "next/image";
import { Category } from "@/lib/products";

export default function ProductGrid({ category }: { category: Category }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {category.products.map((product) => (
        <div
          key={product.name}
          className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#f0e8dc]"
        >
          <div className="relative w-full h-56">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>
          <div className="p-5">
            <h3 className="text-lg font-bold text-[#3D2B7A] mb-1">{product.name}</h3>
            {product.description && (
              <p className="text-gray-500 text-sm mb-3">{product.description}</p>
            )}
            <div className="flex items-center justify-between mt-3">
              {product.price && (
                <span className="text-xl font-bold" style={{ color: category.color }}>
                  {product.price}
                </span>
              )}
              <a
                href="tel:+12563542613"
                className="ml-auto bg-[#E8472A] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#c73a20] transition-colors"
              >
                Call to Order
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
