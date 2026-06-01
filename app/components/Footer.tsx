export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 md:px-12 py-12 flex flex-wrap items-center justify-between gap-5">
      <div className="font-[family-name:var(--font-bebas)] text-2xl tracking-[6px] text-white">
        LOYALTY
      </div>
      <div className="flex gap-7">
        {[
          { href: "#products", label: "Collection" },
          { href: "#lookbook", label: "Lookbook" },
          { href: "#contact", label: "Contact" },
        ].map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-[11px] tracking-[2px] uppercase text-white/30 hover:text-[#c8a96e] transition-colors no-underline"
          >
            {l.label}
          </a>
        ))}
      </div>
      <div className="text-[11px] text-white/20 tracking-[1px]">
        © 2024 Loyalty Streetwear · Dakar, Sénégal
      </div>
    </footer>
  );
}
