import Image from "next/image";

export default function Manifesto() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/IMG_7799.JPG"
          alt="Loyalty streetwear"
          fill
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold tracking-[4px] uppercase text-[#c9a86a]">
            Le Manifeste
          </span>
          <p className="mt-6 font-[family-name:var(--font-dm-serif)] text-[clamp(28px,5vw,52px)] leading-[1.15] text-white">
            La loyauté ne se crie pas.
            <br />
            <span className="text-[#e0c389] italic">Elle se porte.</span>
          </p>
          <p className="mt-7 text-white/55 text-[15px] md:text-base leading-relaxed max-w-lg">
            Chaque pièce Loyalty est un rappel : rester fidèle à soi, à ses
            valeurs, à sa ville. Pas de compromis sur la qualité, pas de
            compromis sur le style. Du tissu épais, des coupes pensées pour
            durer, des graphics qui ont du sens.
          </p>
          <div className="mt-9 flex flex-wrap gap-10">
            {[
              { n: "100%", l: "Pensé à Dakar" },
              { n: "6+", l: "Designs exclusifs" },
              { n: "∞", l: "Stay Loyal" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-[family-name:var(--font-bebas)] text-5xl text-[#e0c389] leading-none">
                  {s.n}
                </div>
                <div className="mt-1 text-[10px] tracking-[2px] uppercase text-white/40">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
