"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[99] bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-10">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-7 text-white text-3xl cursor-pointer bg-transparent border-none"
          >
            ✕
          </button>
          {["#products", "#lookbook", "#contact"].map((href, i) => (
            <a
              key={i}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-bebas)] text-5xl tracking-[6px] text-white hover:text-[#c9a86a] transition-colors"
            >
              {["Collection", "Lookbook", "Commander"][i]}
            </a>
          ))}
        </div>
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-400 ${
          scrolled
            ? "bg-[#0a0a0a]/97 backdrop-blur-xl border-b border-white/5 py-3 px-6 md:px-12"
            : "bg-gradient-to-b from-[#0a0a0a]/90 to-transparent py-5 px-6 md:px-12"
        }`}
      >
        <a
          href="#hero"
          className="font-[family-name:var(--font-bebas)] text-2xl tracking-[6px] text-white no-underline flex items-center gap-2"
        >
          LOY<span className="text-[#c9a86a]">A</span>LTY
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9 list-none">
          {[
            { href: "#products", label: "Collection" },
            { href: "#lookbook", label: "Lookbook" },
          ].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/60 hover:text-white text-[11px] font-medium tracking-[2px] uppercase transition-colors no-underline"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-white text-black text-[11px] font-bold tracking-[1.5px] uppercase py-2.5 px-5 hover:bg-[#c9a86a] transition-all hover:-translate-y-0.5 no-underline"
            >
              Commander
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
          aria-label="Menu"
        >
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </nav>
    </>
  );
}
