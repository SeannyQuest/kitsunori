import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore Kitsu Nori's full menu — fresh handrolls, cold tasting plates, wagyu yakimono, and plant-based options. Snacks from $4, handrolls from $5, toro steak at $65.",
  keywords: [
    "Kitsu Nori menu",
    "handroll bar Austin menu",
    "sushi menu Austin TX",
    "uni handroll Austin",
    "wagyu A5 Austin",
    "toro steak Austin",
    "vegan sushi Austin",
    "gluten free sushi Austin",
  ],
  alternates: { canonical: "https://kitsunori.com/menu" },
  openGraph: {
    title: "Menu | Kitsu Nori",
    description:
      "Fresh handrolls, cold tasting plates, and wagyu yakimono. Snacks, sashimi, and plant-based options.",
    url: "https://kitsunori.com/menu",
    images: [{ url: "/og-menu.jpg", width: 1200, height: 630, alt: "Kitsu Nori Menu" }],
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
