import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative bg-[#FAF6EF] overflow-hidden">
      {/* Hero image — replace src with a real photo from the shop */}
      <div className="relative w-full h-[520px] md:h-[640px]">
        <Image
          src="/storefront2.jpg"
          alt="Ann's Flowers & Gifts of Ashland storefront"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <Image
            src="/logo.jpg"
            alt="Ann's Flowers & Gifts of Ashland logo"
            width={180}
            height={180}
            className="rounded-full shadow-xl mb-6 border-4 border-white"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-[#3D2B7A] mb-3">
            Ann&apos;s Flowers &amp; Gifts
          </h1>
          <p className="text-xl md:text-2xl text-[#1A9B8E] font-semibold mb-2">of Ashland</p>
          <p className="text-[#3D2B7A] text-lg mb-8 max-w-md">
            Beautiful blooms for every moment — from everyday surprises to once-in-a-lifetime occasions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#shop"
              className="bg-[#E8472A] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#c73a20] transition-colors shadow"
            >
              Browse Arrangements
            </a>
            <a
              href="#order"
              className="bg-[#1A9B8E] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#147d73] transition-colors shadow"
            >
              Order Online
            </a>
          </div>
        </div>
      </div>

      {/* Decorative band */}
      <div className="bg-[#3D2B7A] text-white text-center py-3 text-sm font-medium tracking-wide">
        Delivery &amp; In-Store Pickup Available &nbsp;·&nbsp; Call us to place your order today
      </div>
    </section>
  );
}
