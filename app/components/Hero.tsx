import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Background image — cinematic, clearly visible */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/IMG_7801.JPG"
          alt="Collectif Loyalty dans la rue à Dakar"
          fill
          priority
          className="object-cover object-[center_25%] animate-slow-zoom"
        />
        {/* legibility gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/40" />
      </div>

      {/* Top tag */}
      <div className="absolute top-28 left-0 right-0 z-10 flex justify-center px-6">
        <div className="inline-flex items-center gap-3 border border-[#c9a86a]/40 bg-black/30 backdrop-blur-sm py-2 px-5 rounded-full text-[11px] font-semibold tracking-[3px] uppercase text-[#e0c389]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a] animate-pulse" />
          Nouvelle Collection · Dakar 2024
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <h1 className="font-[family-name:var(--font-bebas)] leading-[0.82] tracking-[2px] text-[clamp(96px,20vw,260px)] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            LOYALTY
          </h1>
          <p className="mt-2 text-[clamp(15px,2vw,20px)] tracking-[3px] uppercase text-white/70 font-light max-w-xl">
            Wear your values.{" "}
            <span className="text-[#e0c389]">Represent your truth.</span>
          </p>
          <p className="mt-5 text-[15px] leading-relaxed text-white/55 max-w-md font-light">
            Marque streetwear née dans les rues de Dakar. Des pièces oversize,
            du tissu premium, des graphics qui parlent pour toi.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#products"
              className="group bg-white text-black py-4 px-9 text-[12px] font-bold tracking-[2.5px] uppercase hover:bg-[#c9a86a] transition-colors duration-300 inline-flex items-center gap-2"
            >
              Voir la Collection
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="bg-transparent text-white py-4 px-9 border border-white/30 text-[12px] font-semibold tracking-[2.5px] uppercase hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Commander
            </a>
          </div>
        </div>
      </div>

      {/* Bottom info bar — fills space, adds trust */}
      <div className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { k: "Livraison", v: "Partout à Dakar" },
            { k: "Paiement", v: "À la livraison" },
            { k: "Coupe", v: "Oversize Premium" },
            { k: "Prix", v: "8 000 – 10 000 F" },
          ].map((it) => (
            <div key={it.k} className="px-5 md:px-8 py-5">
              <div className="text-[9px] tracking-[2px] uppercase text-[#c9a86a] mb-1">
                {it.k}
              </div>
              <div className="text-[13px] md:text-[14px] text-white/90 font-medium">
                {it.v}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-32 right-8 z-10 hidden md:flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-[3px] uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div className="animate-bounce-scroll w-px h-10 bg-gradient-to-b from-[#c9a86a] to-transparent" />
      </div>
    </section>
  );
}
