import type { Metadata } from "next";
import { Bebas_Neue, Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LOYALTY — Streetwear Dakar",
  description:
    "Loyalty Streetwear — Wear your values. Represent your truth. Marque de vêtements urban basée à Dakar, Sénégal.",
  keywords: ["loyalty", "streetwear", "dakar", "sénégal", "vêtements", "urban"],
  openGraph: {
    title: "LOYALTY — Streetwear Dakar",
    description: "Wear your values. Represent your truth.",
    images: ["/IMG_7801.JPG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${bebasNeue.variable} ${inter.variable} ${dmSerif.variable}`}
    >
      <body className="grain bg-[#0a0a0a] text-[#f5f5f0] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
