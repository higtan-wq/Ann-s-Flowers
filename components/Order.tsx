export default function Order() {
  return (
    <section id="order" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[#E8472A] font-semibold uppercase tracking-widest text-sm mb-2">Shop Online</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#3D2B7A] mb-4">Order for Delivery or Pickup</h2>
        <p className="text-gray-500 mb-12 max-w-xl mx-auto">
          Order fresh flowers online and choose delivery straight to your door or easy in-store pickup. Same-day options may be available — call us to confirm.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Shop Online */}
          <div className="rounded-2xl border-2 border-[#f0e8dc] bg-[#FAF6EF] p-8 flex flex-col items-center text-center gap-4">
            <div className="text-5xl">🌸</div>
            <h3 className="text-xl font-bold text-[#3D2B7A]">Shop Our Collections</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Browse our ready-made arrangements and order directly online. Fresh flowers available for delivery or pickup.
            </p>
            <a
              href="#shop"
              className="mt-auto bg-[#E8472A] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c73a20] transition-colors"
            >
              Browse Arrangements
            </a>
          </div>

          {/* Designer's Choice */}
          <div className="rounded-2xl border-2 border-[#3D2B7A] bg-[#3D2B7A] p-8 flex flex-col items-center text-center gap-4">
            <div className="text-5xl">✨</div>
            <h3 className="text-xl font-bold text-white">Designer&apos;s Choice</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Tell us your occasion, colors, and budget — and let our florist create something uniquely beautiful just for you. No two arrangements are the same.
            </p>
            <a
              href="/designers-choice"
              className="mt-auto bg-[#1A9B8E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#147d73] transition-colors"
            >
              Get Started
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
