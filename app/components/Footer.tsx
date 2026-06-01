export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="font-[family-name:var(--font-bebas)] text-4xl tracking-[6px] text-white">
              LOY<span className="text-[#c9a86a]">A</span>LTY
            </div>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-xs">
              Streetwear né dans les rues de Dakar. Wear your values, represent
              your truth.
            </p>
          </div>

          {/* Nav */}
          <div className="md:justify-self-center">
            <div className="text-[10px] tracking-[3px] uppercase text-[#c9a86a] mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5">
              {[
                { href: "#products", label: "La Collection" },
                { href: "#lookbook", label: "Lookbook" },
                { href: "#contact", label: "Commander" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:justify-self-end">
            <div className="text-[10px] tracking-[3px] uppercase text-[#c9a86a] mb-4">
              Contact
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://wa.me/221787932731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 hover:text-white transition-colors"
                >
                  WhatsApp · +221 78 793 27 31
                </a>
              </li>
              <li className="text-white/55">Dakar, Sénégal</li>
              <li className="text-white/55">9h – 22h · 7j/7</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-white/25 tracking-[1px]">
            © 2024 Loyalty Streetwear · Tous droits réservés
          </div>
          <div className="text-[11px] text-white/25 tracking-[2px] uppercase">
            Made in Dakar 🇸🇳
          </div>
        </div>
      </div>
    </footer>
  );
}
