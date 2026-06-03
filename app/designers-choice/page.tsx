"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OCCASIONS = [
  "Birthday", "Anniversary", "Sympathy", "Wedding",
  "Just Because", "Mother's Day", "Graduation", "Other",
];

export default function DesignersChoicePage() {
  const [budget, setBudget] = useState(75);
  const [fulfillment, setFulfillment] = useState<"pickup" | "delivery">("pickup");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    await fetch("/api/designers-choice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#FAF6EF] flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-4">🌸</div>
            <h2 className="text-2xl font-bold text-[#3D2B7A] mb-3">We Got Your Order!</h2>
            <p className="text-gray-500 mb-4">
              We&apos;ll be in touch shortly to confirm your arrangement. Thank you for choosing Ann&apos;s Flowers!
            </p>
            {fulfillment === "delivery" && (
              <p className="text-sm text-[#1A9B8E] bg-[#f0faf9] border border-[#c5ede9] rounded-xl px-4 py-3 mb-8">
                For delivery orders, we&apos;ll send a payment link to your phone number once your arrangement is confirmed.
              </p>
            )}
            <Link
              href="/"
              className="inline-block bg-[#3D2B7A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2d1f5e] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAF6EF]">
        <div className="bg-white border-b border-[#f0e8dc] py-10 px-4">
          <div className="max-w-2xl mx-auto">
            <Link href="/#order" className="text-sm text-[#1A9B8E] hover:underline mb-4 inline-block">
              ← Back
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-[#3D2B7A] mb-2">Designer&apos;s Choice</h1>
            <p className="text-gray-500">
              Tell us about your occasion and let our florist create something uniquely beautiful just for you.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-12">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-[#3D2B7A] mb-1">Name *</label>
              <input
                name="name" required type="text"
                placeholder="Your name"
                className="w-full border border-[#f0e8dc] rounded-xl px-4 py-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#3D2B7A]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-[#3D2B7A] mb-1">Phone Number *</label>
              <input
                name="phone" required type="tel"
                placeholder="(555) 555-5555"
                className="w-full border border-[#f0e8dc] rounded-xl px-4 py-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#3D2B7A]"
              />
            </div>

            {/* Occasion */}
            <div>
              <label className="block text-sm font-semibold text-[#3D2B7A] mb-1">Occasion *</label>
              <select
                name="occasion" required
                defaultValue=""
                className="w-full border border-[#f0e8dc] rounded-xl px-4 py-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#3D2B7A]"
              >
                <option value="" disabled>Select an occasion</option>
                {OCCASIONS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            {/* Color Preference */}
            <div>
              <label className="block text-sm font-semibold text-[#3D2B7A] mb-1">
                Color Preference <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                name="colors" type="text"
                placeholder="e.g. pink and white, red, no yellow"
                className="w-full border border-[#f0e8dc] rounded-xl px-4 py-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#3D2B7A]"
              />
            </div>

            {/* Flower Type */}
            <div>
              <label className="block text-sm font-semibold text-[#3D2B7A] mb-1">
                Flower Type <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                name="flowerType" type="text"
                placeholder="e.g. roses, sunflowers, mixed"
                className="w-full border border-[#f0e8dc] rounded-xl px-4 py-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#3D2B7A]"
              />
            </div>

            {/* Budget Slider */}
            <div>
              <label className="block text-sm font-semibold text-[#3D2B7A] mb-2">Budget</label>
              <div className="text-4xl font-bold text-[#1A9B8E] mb-3">${budget}</div>
              <input
                name="budget"
                type="range"
                min={25} max={500} step={25}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full accent-[#3D2B7A]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>$25</span>
                <span>$500</span>
              </div>
            </div>

            {/* Delivery or Pickup */}
            <div>
              <label className="block text-sm font-semibold text-[#3D2B7A] mb-2">Delivery or Pickup? *</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio" name="fulfillment" value="pickup"
                    checked={fulfillment === "pickup"}
                    onChange={() => setFulfillment("pickup")}
                    className="accent-[#3D2B7A] w-4 h-4"
                  />
                  <span className="text-gray-700 font-medium">Pickup</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio" name="fulfillment" value="delivery"
                    checked={fulfillment === "delivery"}
                    onChange={() => setFulfillment("delivery")}
                    className="accent-[#3D2B7A] w-4 h-4"
                  />
                  <span className="text-gray-700 font-medium">Delivery</span>
                </label>
              </div>
            </div>

            {/* Delivery Address (conditional) */}
            {fulfillment === "delivery" && (
              <div>
                <label className="block text-sm font-semibold text-[#3D2B7A] mb-1">Delivery Address *</label>
                <input
                  name="address" required type="text"
                  placeholder="Street address, city, state, zip"
                  className="w-full border border-[#f0e8dc] rounded-xl px-4 py-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#3D2B7A]"
                />
              </div>
            )}

            {/* Card Message */}
            <div>
              <label className="block text-sm font-semibold text-[#3D2B7A] mb-1">
                Card Message <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                name="cardMessage" rows={3}
                placeholder="Write a message for the card..."
                className="w-full border border-[#f0e8dc] rounded-xl px-4 py-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#3D2B7A] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#3D2B7A] text-white py-4 rounded-full font-semibold text-lg hover:bg-[#2d1f5e] transition-colors disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit Order"}
            </button>

          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
