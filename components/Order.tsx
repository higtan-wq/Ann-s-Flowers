export default function Order() {
  return (
    <section id="order" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#E8472A] font-semibold uppercase tracking-widest text-sm mb-2">Shop Online</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#3D2B7A] mb-4">Order for Delivery or Pickup</h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto">
          Order fresh flowers online and choose delivery straight to your door or easy in-store pickup. Same-day options may be available — call us to confirm.
        </p>

        {/* ── ORDERING EMBED GOES HERE ── */}
        {/* Replace this placeholder block with your Square, Shopify, or other embed code */}
        <div className="w-full min-h-[300px] rounded-2xl border-2 border-dashed border-[#e8d5c0] bg-[#FAF6EF] flex flex-col items-center justify-center gap-4 p-8">
          <span className="text-5xl">🛒</span>
          <p className="text-[#3D2B7A] font-semibold text-lg">Online Store Coming Soon</p>
          <p className="text-gray-400 text-sm max-w-sm">
            Our online ordering system will be set up here. In the meantime, give us a call or send a message to place your order.
          </p>
          <a
            href="#contact"
            className="mt-2 bg-[#E8472A] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c73a20] transition-colors"
          >
            Contact Us to Order
          </a>
        </div>
        {/* ── END ORDERING EMBED ── */}
      </div>
    </section>
  );
}
