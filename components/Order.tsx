export default function Order() {
  return (
    <section id="order" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#E8472A] font-semibold uppercase tracking-widest text-sm mb-2">Ready to Order?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#3D2B7A] mb-4">Give Us a Call</h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto">
          Browse our photos to find what you love, then call us to place your order. We&apos;ll handle delivery, pickup, and all the details to make sure everything is perfect.
        </p>
        <a
          href="tel:+12563542613"
          className="inline-block bg-[#E8472A] text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-[#c73a20] transition-colors shadow-lg"
        >
          📞 (256) 354-2613
        </a>
        <p className="text-gray-400 text-sm mt-4">Mon–Fri 8am–4:30pm · Sat 8am–12pm</p>
      </div>
    </section>
  );
}
