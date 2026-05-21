import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/lib/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAF6EF]">
        {/* Header */}
        <div className="bg-white border-b border-[#f0e8dc] py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <Link href="/#shop" className="text-sm text-[#1A9B8E] hover:underline mb-4 inline-block">
              ← Back to All Categories
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: category.color }}>
              {category.name}
            </h1>
            <p className="text-gray-500 max-w-xl">{category.description}</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {category.products.length === 0 ? (
            /* Coming soon state */
            <div className="text-center py-24">
              <div className="text-6xl mb-4">🌸</div>
              <h2 className="text-2xl font-bold text-[#3D2B7A] mb-3">Products Coming Soon</h2>
              <p className="text-gray-500 max-w-md mx-auto mb-8">
                We&apos;re adding our {category.name.toLowerCase()} to the store. In the meantime, give us a call or stop by and we&apos;ll be happy to help!
              </p>
              <a
                href="tel:+12563542613"
                className="inline-block bg-[#E8472A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c73a20] transition-colors"
              >
                Call Us: (256) 354-2613
              </a>
            </div>
          ) : (
            /* Product grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((product) => (
                <div
                  key={product.name}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#f0e8dc]"
                >
                  <div className="relative w-full h-56">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#3D2B7A] mb-1">{product.name}</h3>
                    {product.description && (
                      <p className="text-gray-500 text-sm mb-3">{product.description}</p>
                    )}
                    <div className="flex items-center justify-between">
                      {product.price && (
                        <span className="text-xl font-bold" style={{ color: category.color }}>
                          {product.price}
                        </span>
                      )}
                      {product.squareLink ? (
                        <a
                          href={product.squareLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#E8472A] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#c73a20] transition-colors ml-auto"
                        >
                          Buy Now
                        </a>
                      ) : (
                        <a
                          href="/#contact"
                          className="bg-[#1A9B8E] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#157f74] transition-colors ml-auto"
                        >
                          Contact Us
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
