export default function Marquee() {
  const items = [
    { text: "LOYALTY", accent: false },
    { text: "★", accent: true },
    { text: "STAY LOYAL", accent: false },
    { text: "★", accent: true },
    { text: "DAKAR", accent: false },
    { text: "★", accent: true },
    { text: "STREETWEAR", accent: false },
    { text: "★", accent: true },
  ];
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden border-t border-b border-white/[0.06] py-4 bg-[#c8a96e]/[0.04]">
      <div className="flex whitespace-nowrap animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`font-[family-name:var(--font-bebas)] text-sm tracking-[6px] px-8 ${
              item.accent ? "text-[#c9a86a]/60" : "text-white/15"
            }`}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
