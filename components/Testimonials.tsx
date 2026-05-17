const reviews = [
  {
    name: "Blue And White",
    time: "2 months ago",
    text: "Wendy has the ability to make every arrangement personal. She has done beautiful work for us and we look forward to watching her grow and serve this community for years to come. Good job Wendy Rose!!",
  },
  {
    name: "Kathy Freeman",
    badge: "Local Guide",
    time: "7 years ago",
    text: "You absolutely cannot find better, when it comes to the fresh flower arrangements. Sadly, we use them the most for funerals, but that's because we have so much faith in their quality, and it eases the burden of what we're having to deal with.",
  },
  {
    name: "Etoia Toles-Wilson",
    badge: "Local Guide",
    time: "2 years ago",
    text: "I wish I could give them 10 stars ⭐️ — Customer service was great, communication was awesome, and the arrangement was stunning. Highly recommend!",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-[#FAF6EF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#E8472A] font-semibold uppercase tracking-widest text-sm mb-2">What People Are Saying</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D2B7A] mb-3">5.0 ★ on Google</h2>
          <p className="text-gray-500">Based on 42 reviews from our wonderful customers</p>

          {/* Highlight quotes */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-600 italic">
            <span className="bg-white rounded-full px-4 py-2 shadow-sm border border-[#f0e8dc]">&ldquo;Within a half hour the arrangement was in our aunt&apos;s room.&rdquo;</span>
            <span className="bg-white rounded-full px-4 py-2 shadow-sm border border-[#f0e8dc]">&ldquo;Super staff creating beautiful floral designs!&rdquo;</span>
            <span className="bg-white rounded-full px-4 py-2 shadow-sm border border-[#f0e8dc]">&ldquo;Excellent service and great staff!&rdquo;</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-6 shadow-sm border border-[#f0e8dc] flex flex-col gap-3">
              <Stars />
              <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
              <div className="pt-2 border-t border-[#f0e8dc]">
                <p className="font-semibold text-[#3D2B7A] text-sm">{r.name}</p>
                {r.badge && <p className="text-[#1A9B8E] text-xs">{r.badge}</p>}
                <p className="text-gray-400 text-xs">{r.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/search/Ann's+Flowers+Gifts+Ashland+AL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-[#3D2B7A] text-[#3D2B7A] px-6 py-3 rounded-full font-semibold hover:bg-[#3D2B7A] hover:text-white transition-colors"
          >
            Read All 42 Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
