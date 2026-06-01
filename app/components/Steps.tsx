"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    n: "01",
    t: "Choisis ta pièce",
    d: "Parcours le drop et repère le modèle et la couleur que tu veux.",
  },
  {
    n: "02",
    t: "Écris sur WhatsApp",
    d: "Clique sur « Commander ». Le message est pré-rempli, indique juste ta taille.",
  },
  {
    n: "03",
    t: "Reçois & paie",
    d: "Livraison partout à Dakar. Tu payes à la réception, simple et sûr.",
  },
];

export default function Steps() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 100);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-12 bg-[#080808]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 fade-up">
          <span className="text-[10px] font-semibold tracking-[4px] uppercase text-[#c9a86a]">
            Simple & Rapide
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-bebas)] text-[clamp(40px,7vw,72px)] tracking-[2px] leading-none">
            Comment Commander
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {steps.map((s) => (
            <div
              key={s.n}
              className="fade-up relative p-8 border border-white/[0.08] hover:border-[#c9a86a]/40 transition-colors duration-400 bg-gradient-to-b from-white/[0.02] to-transparent"
            >
              <div className="font-[family-name:var(--font-bebas)] text-7xl text-white/[0.08] leading-none">
                {s.n}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{s.t}</h3>
              <p className="mt-3 text-white/50 text-[14px] leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
