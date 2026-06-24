"use client";

import { useEffect, useState } from "react";
import { msUntilOpen } from "@/lib/hours";

function formatCountdown(ms: number): string {
  const s = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) return `${h}h ${m}m ${sec}s`;
  if (m > 0) return `${m}m ${sec}s`;
  return `${sec}s`;
}

export default function StoreClosedBanner() {
  const [ms, setMs] = useState(() => msUntilOpen());

  useEffect(() => {
    const id = setInterval(() => {
      const remaining = msUntilOpen();
      setMs(remaining);
      if (remaining <= 0) window.location.reload();
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-[#FFF8F0] border border-[#f0e8dc] rounded-2xl px-6 py-5 mb-8 text-center">
      <p className="text-[#3D2B7A] font-bold text-lg mb-1">We&apos;re currently closed</p>
      <p className="text-gray-400 text-sm mb-3">
        Mon–Fri 8:00 AM – 4:30 PM &nbsp;·&nbsp; Sat 8:00 AM – 12:00 PM &nbsp;·&nbsp; Sun Closed
      </p>
      <p className="text-[#1A9B8E] font-bold text-2xl">Opens in {formatCountdown(ms)}</p>
    </div>
  );
}
