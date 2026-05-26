"use client";

import { useState } from "react";
import Image from "next/image";
import { Category, Product } from "@/lib/products";

type ModalState = { product: Product; squareLink: string; type: "pickup" | "delivery" } | null;

export default function ProductGrid({ category }: { category: Category }) {
  const [modal, setModal] = useState<ModalState>(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  function openModal(product: Product, type: "pickup" | "delivery") {
    setName(""); setPhone(""); setAddress("");
    setModal({ product, squareLink: product.squareLink!, type });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const endpoint = modal!.type === "delivery" ? "/api/delivery-order" : "/api/pickup-order";
    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, address, productName: modal?.product.name }),
    });
    setLoading(false);
    window.location.href = modal!.squareLink;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.products.map((product) => (
          <div
            key={product.name}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#f0e8dc]"
          >
            <div className="relative w-full h-56">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-[#3D2B7A] mb-1">{product.name}</h3>
              {product.description && (
                <p className="text-gray-500 text-sm mb-3">{product.description}</p>
              )}
              <div className="flex items-center justify-between">
                {product.price && (
                  <span className="text-xl font-bold" style={{ color: category.color }}>
                    {product.price}
                  </span>
                )}
                {product.squareLink ? (
                  <div className="flex gap-2 ml-auto">
                    <button
                      onClick={() => openModal(product, "pickup")}
                      className="bg-[#E8472A] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#c73a20] transition-colors"
                    >
                      Pickup
                    </button>
                    <button
                      onClick={() => openModal(product, "delivery")}
                      className="bg-[#3D2B7A] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#2d1f5e] transition-colors"
                    >
                      Delivery
                    </button>
                  </div>
                ) : (
                  <a
                    href="/#contact"
                    className="bg-[#1A9B8E] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#157f74] transition-colors ml-auto"
                  >
                    Contact Us for a Quote
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl">
            <h2 className="text-xl font-bold text-[#3D2B7A] mb-1">
              {modal.type === "pickup" ? "Order Pickup" : "Order Delivery"}
            </h2>
            <p className="text-gray-500 text-sm mb-6">{modal.product.name}</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#3D2B7A] mb-1">Name *</label>
                <input
                  required type="text" value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full border border-[#f0e8dc] rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D2B7A]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#3D2B7A] mb-1">Phone Number *</label>
                <input
                  required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 555-5555"
                  className="w-full border border-[#f0e8dc] rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D2B7A]"
                />
              </div>
              {modal.type === "delivery" && (
                <div>
                  <label className="block text-sm font-semibold text-[#3D2B7A] mb-1">Delivery Address *</label>
                  <input
                    required type="text" value={address} onChange={(e) => setAddress(e.target.value)}
                    placeholder="Street address, city, state, zip"
                    className="w-full border border-[#f0e8dc] rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D2B7A]"
                  />
                </div>
              )}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="flex-1 border-2 border-[#3D2B7A] text-[#3D2B7A] py-3 rounded-full font-semibold hover:bg-[#3D2B7A] hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-[#3D2B7A] text-white py-3 rounded-full font-semibold hover:bg-[#2d1f5e] transition-colors disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Continue to Payment"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
