export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-[#3D2B7A] text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <p className="text-[#1A9B8E] font-semibold uppercase tracking-widest text-sm mb-2">Find Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit or Call Us</h2>

          <div className="flex flex-col gap-5 text-white/80">
            <div>
              <p className="font-semibold text-white mb-1">📍 Address</p>
              <p>83670 AL-9<br />Ashland, AL 36251</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">📞 Phone</p>
              <a href="tel:+12563542613" className="hover:text-[#1A9B8E] transition-colors">(256) 354-2613</a>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">🕐 Hours</p>
              <p>
                Monday – Friday: 8am – 4:30pm<br />
                Saturday: 8am – 12pm<br />
                Sunday: Closed
              </p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Follow Us</p>
              <div className="flex gap-5 mt-1">
                <a
                  href="https://www.facebook.com/p/Anns-Flowers-Gifts-100057233328125/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#1A9B8E] transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/_annsflowers_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#1A9B8E] transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.646038845753!2d-85.82604789999999!3d33.2757578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888b914a76aa20dd%3A0x4da11402e7ac3ab4!2sAnn&#39;s%20Flowers%20Gifts%20Jewelry!5e0!3m2!1sen!2sus!4v1778976587403!5m2!1sen!2sus"
            width="100%"
            height="288"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
