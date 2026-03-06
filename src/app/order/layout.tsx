import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Online",
  description:
    "Order Kitsu Nori for pickup online. Fresh handrolls, wagyu, uni, and cold tasting plates ready in 20–30 minutes at 2310 S Lamar Blvd, Suite 102, Austin TX.",
  keywords: [
    "Kitsu Nori order online",
    "sushi pickup Austin",
    "handroll takeout Austin",
    "Japanese food pickup Austin TX",
  ],
  alternates: { canonical: "https://kitsunori.com/order" },
  openGraph: {
    title: "Order Online | Kitsu Nori",
    description:
      "Order handrolls, wagyu, and cold tasting plates for pickup. Ready in 20–30 minutes.",
    url: "https://kitsunori.com/order",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Order Kitsu Nori Online" }],
  },
  robots: { index: false, follow: false }, // checkout flow shouldn't be indexed
};

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
