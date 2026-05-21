"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const photos = [
  { src: "/shop1.jpg", alt: "Flower shop greenhouse with colorful arrangements" },
  { src: "/shop2.jpg", alt: "Handcrafted crochet flower arrangements" },
  { src: "/shop3.jpg", alt: "Wreaths and gifts displayed in the shop" },
];

export default function About() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Photo slideshow */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg">
            {photos.map((photo, i) => (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                fill
                className={`object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-[#E8472A]" : "bg-[#e8d5c0]"}`}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-[#E8472A] font-semibold uppercase tracking-widest text-sm mb-2">Our Story</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D2B7A] mb-5">
            Flowers with Heart, Rooted in Ashland
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ann&apos;s Flowers &amp; Gifts has been a beloved part of the Ashland community for years. We take pride in crafting fresh, beautiful arrangements for every occasion — weddings, funerals, birthdays, anniversaries, and everything in between.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Every bouquet is made with care, using the freshest flowers sourced to ensure quality and lasting beauty. Whether you know exactly what you want or need a little guidance, our team is here to help.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#3D2B7A] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2d1f5e] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
