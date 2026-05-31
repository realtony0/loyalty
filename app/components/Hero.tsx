import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* BG image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/IMG_7801.JPG"
          alt="Loyalty background"
          fill
          className="object-cover object-[center_30%] opacity-[0.14] grayscale-[40%]"
          priority
        />
      </div>
      {/* gradient overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(200,169,110,0.07)_0%,transparent_65%)] bg-gradient-to-br from-[#0a0a0a] to-[#111]" />

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-7 px-6">
        <div className="inline-flex items-center gap-3 border border-[#c8a96e]/35 py-[7px] px-5 rounded-full text-[11px] font-semibold tracking-[3px] uppercase text-[#c8a96e]">
          <span className="w-5 h-px bg-[#c8a96e]/50" />
          Dakar · Streetwear · 2024
          <span className="w-5 h-px bg-[#c8a96e]/50" />
        </div>

        <h1
          className="font-[family-name:var(--font-bebas)] leading-[0.88] tracking-[10px] text-[clamp(80px,16vw,180px)]"
          style={{
            background: "linear-gradient(180deg,#fff 0%,rgba(255,255,255,0.65) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          LOYALTY
        </h1>

        <p className="text-[13px] tracking-[4px] uppercase text-white/50 font-light">
          Wear your values. Represent your truth.
        </p>

        <div className="flex gap-4 flex-wrap justify-center mt-2">
          <a
            href="#products"
            className="bg-white text-black py-4 px-9 text-[12px] font-bold tracking-[2.5px] uppercase rounded-sm hover:bg-[#c8a96e] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(200,169,110,0.25)] transition-all no-underline"
          >
            Voir la Collection
          </a>
          <a
            href="#about"
            className="bg-transparent text-white py-4 px-9 border border-white/25 text-[12px] font-semibold tracking-[2.5px] uppercase rounded-sm hover:border-white hover:bg-white/5 hover:-translate-y-0.5 transition-all no-underline"
          >
            Notre Histoire
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-bounce-scroll absolute bottom-9 left-1/2 flex flex-col items-center gap-2 text-white/30 text-[10px] tracking-[3px] uppercase">
        <div className="w-px h-10 bg-gradient-to-b from-[#c8a96e]/60 to-transparent" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
