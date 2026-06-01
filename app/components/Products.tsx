"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const products = [
  {
    img: "/IMG_7791.JPG",
    name: "T-shirt Crown Logo",
    type: "Tee · Noir · Oversize",
    price: "8 000 FCFA",
    badge: "Bestseller",
    badgeColor: "#c8a96e",
    badgeText: "black",
    featured: true,
    waMsg: "Bonjour%2C%20je%20veux%20commander%20le%20T-shirt%20Crown%20Logo%20Noir%20(8000%20FCFA)",
  },
  {
    img: "/IMG_7792.JPG",
    name: "T-shirt Soldiers",
    type: "Tee · Blanc · Oversize",
    price: "8 000 FCFA",
    badge: null,
    featured: false,
    waMsg: "Bonjour%2C%20je%20veux%20commander%20le%20T-shirt%20Soldiers%20Blanc%20(8000%20FCFA)",
  },
  {
    img: "/IMG_7793.JPG",
    name: "T-shirt Stay Loyal",
    type: "Tee · Blanc · Oversize",
    price: "8 000 FCFA",
    badge: null,
    featured: false,
    waMsg: "Bonjour%2C%20je%20veux%20commander%20le%20T-shirt%20Stay%20Loyal%20(8000%20FCFA)",
  },
  {
    img: "/IMG_7794.JPG",
    name: "T-shirt Crown Logo",
    type: "Tee · Blanc · Oversize",
    price: "8 000 FCFA",
    badge: null,
    featured: false,
    waMsg: "Bonjour%2C%20je%20veux%20commander%20le%20T-shirt%20Crown%20Logo%20Blanc%20(8000%20FCFA)",
  },
  {
    img: "/IMG_7795.JPG",
    name: "Du-rags Collection",
    type: "Accessoire · Multi-couleurs",
    price: "8 000 FCFA",
    badge: "New",
    badgeColor: "#c8a96e",
    badgeText: "black",
    featured: false,
    waMsg: "Bonjour%2C%20je%20veux%20commander%20un%20Du-rag%20Loyalty%20(8000%20FCFA)",
  },
  {
    img: "/IMG_7798.JPG",
    name: "T-shirt Pink Script",
    type: "Tee · Noir · Édition Limitée",
    price: "10 000 FCFA",
    badge: "Limited",
    badgeColor: "#ff3d91",
    badgeText: "white",
    featured: false,
    waMsg: "Bonjour%2C%20je%20veux%20commander%20le%20T-shirt%20Pink%20Script%20Noir%20(10000%20FCFA)",
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 80);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current
      ?.querySelectorAll(".fade-up")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-[120px] px-6 md:px-12 max-w-[1400px] mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-16 fade-up">
        <span className="text-[10px] font-semibold tracking-[4px] uppercase text-[#c8a96e] mb-4 block">
          Notre Catalogue
        </span>
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(42px,7vw,72px)] tracking-[4px] leading-none">
          La{" "}
          <em className="font-[family-name:var(--font-dm-serif)] not-italic text-[#c8a96e]">
            Collection
          </em>
        </h2>
        <div className="w-10 h-0.5 bg-[#c8a96e] mx-auto mt-5 rounded" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
        {products.map((p, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden cursor-pointer bg-[#1a1a1a] fade-up ${
              p.featured ? "lg:col-span-2" : ""
            }`}
            style={{ aspectRatio: p.featured ? "16/10" : "3/4" }}
          >
            <Image
              src={p.img}
              alt={p.name}
              fill
              className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06] brightness-[0.92] group-hover:brightness-100"
            />

            {/* Badge */}
            {p.badge && (
              <div
                className="absolute top-4 left-4 text-[9px] font-extrabold tracking-[2px] py-1 px-2.5 uppercase rounded-sm z-10"
                style={{
                  background: p.badgeColor,
                  color: p.badgeText === "white" ? "#fff" : "#000",
                }}
              >
                {p.badge}
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
              <div className="text-[15px] font-semibold text-white mb-1 tracking-[0.5px]">
                {p.name}
              </div>
              <div className="text-[11px] text-white/50 tracking-[2px] uppercase mb-3">
                {p.type}
              </div>
              <div className="font-[family-name:var(--font-bebas)] text-2xl tracking-[2px] text-[#c8a96e]">
                {p.price}
              </div>
            </div>

            {/* CTA arrow */}
            <a
              href={`https://wa.me/221787932731?text=${p.waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-lg opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-350 hover:bg-[#c8a96e] hover:scale-110 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
