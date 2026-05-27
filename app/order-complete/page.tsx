"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function OrderCompleteContent() {
  const searchParams = useSearchParams();
  const sent = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;

    fetch("/api/notify-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: searchParams.get("name"),
        phone: searchParams.get("phone"),
        product: searchParams.get("product"),
        type: searchParams.get("type"),
        address: searchParams.get("address"),
        card: searchParams.get("card"),
      }),
    }).finally(() => setReady(true));
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-[#FAF6EF] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">🌸</div>
        <h2 className="text-2xl font-bold text-[#3D2B7A] mb-3">Order Placed!</h2>
        <p className="text-gray-500 mb-8">
          Thank you for your order! We&apos;ll be in touch shortly to confirm your arrangement.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#3D2B7A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2d1f5e] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default function OrderCompletePage() {
  return (
    <>
      <Navbar />
      <Suspense>
        <OrderCompleteContent />
      </Suspense>
      <Footer />
    </>
  );
}
