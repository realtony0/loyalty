"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const WA = "https://wa.me/221787932731?text=";

const products = [
  {
    img: "/IMG_7791.JPG",
    name: "Tee Crown Logo",
    type: "Noir · Recto / Verso",
    price: "8 000",
    badge: "Bestseller",
    badgeColor: "#c9a86a",
    badgeText: "#000",
    msg: "Bonjour%2C%20je%20veux%20commander%20le%20Tee%20Crown%20Logo%20Noir%20(8000%20FCFA)",
  },
  {
    img: "/IMG_7794.JPG",
    name: "Tee Crown Logo",
    type: "Blanc · Recto / Verso",
    price: "8 000",
    badge: null,
    msg: "Bonjour%2C%20je%20veux%20commander%20le%20Tee%20Crown%20Logo%20Blanc%20(8000%20FCFA)",
  },
  {
    img: "/IMG_7793.JPG",
    name: "Tee Stay Loyal",
    type: "Blanc · Recto / Verso",
    price: "8 000",
    badge: null,
    msg: "Bonjour%2C%20je%20veux%20commander%20le%20Tee%20Stay%20Loyal%20Blanc%20(8000%20FCFA)",
  },
  {
    img: "/IMG_7792.JPG",
    name: "Tee Soldiers",
    type: "Blanc · Recto",
    price: "8 000",
    badge: null,
    msg: "Bonjour%2C%20je%20veux%20commander%20le%20Tee%20Soldiers%20Blanc%20(8000%20FCFA)",
  },
  {
    img: "/IMG_7798.JPG",
    name: "Tee Pink Script",
    type: "Noir · Édition limitée",
    price: "10 000",
    badge: "Limited",
    badgeColor: "#ff3d91",
    badgeText: "#fff",
    msg: "Bonjour%2C%20je%20veux%20commander%20le%20Tee%20Pink%20Script%20Noir%20(10000%20FCFA)",
  },
  {
    img: "/IMG_7795.JPG",
    name: "Du-rags",
    type: "Multi-couleurs",
    price: "8 000",
    badge: "New",
    badgeColor: "#c9a86a",
    badgeText: "#000",
    fit: "cover" as const,
    msg: "Bonjour%2C%20je%20veux%20commander%20un%20Du-rag%20Loyalty%20(8000%20FCFA)",
  },
];

export default function Products() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 70);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="products" ref={ref} className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 fade-up">
          <div>
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-[#c9a86a]">
              La Collection
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-bebas)] text-[clamp(48px,8vw,90px)] tracking-[2px] leading-[0.9]">
              Le Drop
            </h2>
          </div>
          <p className="text-white/45 text-sm max-w-xs md:text-right leading-relaxed">
            6 pièces. Quantités limitées. Chaque commande passe directement par
            WhatsApp.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {products.map((p, i) => (
            <div
              key={i}
              className="group fade-up flex flex-col bg-gradient-to-b from-[#161616] to-[#0e0e0e] border border-white/[0.07] hover:border-[#c9a86a]/40 transition-colors duration-400 overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#0d0d0d]">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className={`${
                    p.fit === "cover"
                      ? "object-cover"
                      : "object-contain p-3"
                  } transition-transform duration-700 ease-out group-hover:scale-105`}
                />
                {p.badge && (
                  <span
                    className="absolute top-3 left-3 text-[9px] font-extrabold tracking-[2px] py-1 px-2.5 uppercase"
                    style={{ background: p.badgeColor, color: p.badgeText }}
                  >
                    {p.badge}
                  </span>
                )}
              </div>

              {/* Info — always visible */}
              <div className="flex items-center justify-between gap-3 px-4 py-4 border-t border-white/[0.07]">
                <div className="min-w-0">
                  <div className="text-[15px] font-semibold text-white truncate">
                    {p.name}
                  </div>
                  <div className="text-[11px] text-white/45 tracking-[1px] uppercase truncate">
                    {p.type}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-[family-name:var(--font-bebas)] text-2xl text-[#e0c389] leading-none">
                    {p.price}
                  </div>
                  <div className="text-[9px] text-white/40 tracking-[1px]">FCFA</div>
                </div>
              </div>

              {/* CTA */}
              <a
                href={`${WA}${p.msg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 bg-white/5 hover:bg-[#c9a86a] text-white hover:text-black text-[11px] font-bold tracking-[2px] uppercase transition-colors duration-300 border-t border-white/[0.07]"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                Commander
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
