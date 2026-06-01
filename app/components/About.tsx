"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 120);
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
      id="about"
      ref={sectionRef}
      className="py-[140px] px-6 md:px-12 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center"
    >
      {/* Visual */}
      <div className="relative fade-up">
        <div className="relative w-full aspect-[3/4]">
          <Image
            src="/IMG_7799.JPG"
            alt="Loyalty Streetwear"
            fill
            className="object-cover object-top rounded-sm grayscale-[15%]"
          />
        </div>
        {/* accent photo */}
        <div className="absolute bottom-[-30px] right-[-10px] md:right-[-30px] w-[55%] aspect-square border-4 border-[#0a0a0a] rounded-sm overflow-hidden">
          <Image
            src="/IMG_7796.JPG"
            alt="Loyalty style"
            fill
            className="object-cover grayscale-[20%]"
          />
        </div>
        {/* LT badge */}
        <div className="absolute top-7 left-[-20px] w-20 h-20 rounded-full bg-[#c8a96e] flex flex-col items-center justify-center shadow-[0_8px_32px_rgba(200,169,110,0.4)]">
          <span className="font-[family-name:var(--font-bebas)] text-2xl leading-none text-black">
            LT
          </span>
          <span className="font-[family-name:var(--font-inter)] text-[8px] tracking-[2px] font-bold text-black">
            Brand
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-7 fade-up">
        <div>
          <span className="text-[10px] font-semibold tracking-[4px] uppercase text-[#c8a96e] mb-3 block">
            Notre Identité
          </span>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(42px,6vw,64px)] tracking-[4px] leading-none text-left">
            À{" "}
            <em className="font-[family-name:var(--font-dm-serif)] not-italic text-[#c8a96e]">
              Propos
            </em>
          </h2>
          <div className="w-10 h-0.5 bg-[#c8a96e] mt-4 rounded" />
        </div>

        <p className="text-base leading-[1.85] text-white/65 font-light">
          Loyalty n&apos;est pas juste une marque. C&apos;est un état d&apos;esprit né dans les
          rues de Dakar. Chaque pièce incarne des valeurs : fidélité, respect,
          et l&apos;authenticité de ceux qui restent vrais envers eux-mêmes.
        </p>
        <p className="text-base leading-[1.85] text-white/65 font-light">
          Nos designs mêlent l&apos;esthétique streetwear internationale avec une âme
          100% sénégalaise. Du tissu premium, des coupes oversized soignées, des
          graphics qui parlent pour toi.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-5 pt-3">
          {[
            { num: "100%", label: "Dakar Made" },
            { num: "6+", label: "Designs Uniques" },
            { num: "∞", label: "Stay Loyal" },
          ].map((s) => (
            <div key={s.label} className="border-t border-white/8 pt-[18px]">
              <div className="font-[family-name:var(--font-bebas)] text-[36px] tracking-[2px] text-[#c8a96e] leading-none">
                {s.num}
              </div>
              <div className="text-[10px] tracking-[2px] uppercase text-white/35 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="self-start mt-2 bg-white text-black py-4 px-9 text-[12px] font-bold tracking-[2.5px] uppercase rounded-sm hover:bg-[#c8a96e] hover:-translate-y-0.5 transition-all no-underline"
        >
          Commander Maintenant
        </a>
      </div>
    </section>
  );
}
