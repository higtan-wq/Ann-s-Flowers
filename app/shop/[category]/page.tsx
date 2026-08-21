import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/lib/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WeddingGallery from "@/components/WeddingGallery";
import ProductGrid from "@/components/ProductGrid";

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
          {category.portfolio ? (
            /* Portfolio gallery layout */
            <>
              <div className="text-center mb-10">
                <p className="text-gray-500 max-w-xl mx-auto mb-6">
                  {category.portfolioMessage}
                </p>
                <a
                  href="tel:+12563542613"
                  className="inline-block bg-[#E8472A] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#c73a20] transition-colors shadow"
                >
                  📞 Call to Order: (256) 354-2613
                </a>
              </div>
              <WeddingGallery photos={category.products} />
              <div className="text-center mt-12">
                <a
                  href="tel:+12563542613"
                  className="inline-block bg-[#E8472A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c73a20] transition-colors"
                >
                  📞 Call to Order: (256) 354-2613
                </a>
              </div>
            </>
          ) : category.products.length === 0 ? (
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
            <ProductGrid category={category} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
