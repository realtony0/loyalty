"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const photos = [
  { src: "/IMG_7801.JPG", alt: "Loyalty Lookbook — groupe", span: "row-span-2" },
  { src: "/IMG_7796.JPG", alt: "Loyalty Lookbook — duo", span: "" },
  { src: "/IMG_7799.JPG", alt: "Loyalty Lookbook — assis", span: "" },
  { src: "/IMG_7797.JPG", alt: "Loyalty Lookbook — walk", span: "" },
  { src: "/IMG_7800.JPG", alt: "Loyalty Lookbook — trio", span: "" },
];

export default function Lookbook() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 100);
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
    <section id="lookbook" ref={sectionRef} className="py-[120px] bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <span className="text-[10px] font-semibold tracking-[4px] uppercase text-[#c8a96e] mb-4 block">
            La Rue Nous Appartient
          </span>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(42px,7vw,72px)] tracking-[4px] leading-none">
            Look
            <em className="font-[family-name:var(--font-dm-serif)] not-italic text-[#c8a96e]">
              book
            </em>
          </h2>
          <div className="w-10 h-0.5 bg-[#c8a96e] mx-auto mt-5 rounded" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-[3px]">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden fade-up ${
                i === 0 ? "row-span-2 min-h-[600px] sm:min-h-0" : "min-h-[260px] sm:min-h-[295px]"
              }`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover object-center transition-transform duration-600 ease-out group-hover:scale-[1.04] brightness-[0.88] saturate-[0.9] group-hover:brightness-100 group-hover:saturate-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
