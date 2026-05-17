"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Shop", href: "#shop" },
    { label: "Order Online", href: "#order" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF6EF] shadow-sm border-b border-[#e8d5c0]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="Ann's Flowers & Gifts of Ashland" width={60} height={60} className="rounded-full object-cover" />
          <span className="hidden sm:block text-[#3D2B7A] font-bold text-lg leading-tight">
            Ann&apos;s Flowers<br />
            <span className="text-[#1A9B8E] text-sm font-normal">&amp; Gifts of Ashland</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[#3D2B7A] hover:text-[#E8472A] font-medium transition-colors text-sm">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#3D2B7A] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <ul className="md:hidden bg-[#FAF6EF] border-t border-[#e8d5c0] px-4 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block text-[#3D2B7A] hover:text-[#E8472A] font-medium py-1">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
