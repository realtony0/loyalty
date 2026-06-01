"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const photos = [
  { src: "/IMG_7796.JPG", alt: "Duo Loyalty de nuit", cls: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
  { src: "/IMG_7800.JPG", alt: "Trio Loyalty", cls: "aspect-[3/4]" },
  { src: "/IMG_7797.JPG", alt: "Tee Stay Loyal porté", cls: "aspect-[3/4]" },
  { src: "/IMG_7798.JPG", alt: "Tee Pink Script porté", cls: "aspect-[3/4]" },
  { src: "/IMG_7799.JPG", alt: "Tee Soldiers porté", cls: "aspect-[3/4]" },
];

export default function Lookbook() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 90);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="lookbook" ref={ref} className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 fade-up">
          <div>
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-[#c9a86a]">
              La rue nous appartient
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-bebas)] text-[clamp(48px,8vw,90px)] tracking-[2px] leading-[0.9]">
              Lookbook
            </h2>
          </div>
          <p className="text-white/45 text-sm max-w-xs md:text-right leading-relaxed">
            La collection en conditions réelles, dans les rues de Dakar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:auto-rows-[1fr]">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden fade-up ${p.cls}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover object-center transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
