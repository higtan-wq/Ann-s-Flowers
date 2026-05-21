"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { Product } from "@/lib/products";

export default function WeddingGallery({ photos }: { photos: Product[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null)), [photos.length]);
  const next = useCallback(() => setActive((i) => (i !== null ? (i + 1) % photos.length : null)), [photos.length]);

  useEffect(() => {
    if (active === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="relative aspect-square overflow-hidden rounded-2xl group focus:outline-none focus:ring-2 focus:ring-[#3D2B7A]"
          >
            <Image
              src={photo.image}
              alt={photo.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-5 text-white text-3xl font-light hover:text-gray-300 transition-colors z-10"
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white text-4xl font-light hover:text-gray-300 transition-colors z-10 px-2"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-3xl max-h-[85vh] aspect-square"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[active].image}
              alt={photos[active].name}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white text-4xl font-light hover:text-gray-300 transition-colors z-10 px-2"
            aria-label="Next"
          >
            ›
          </button>

          {/* Counter */}
          <p className="absolute bottom-4 text-white/60 text-sm">
            {active + 1} / {photos.length}
          </p>
        </div>
      )}
    </>
  );
}
