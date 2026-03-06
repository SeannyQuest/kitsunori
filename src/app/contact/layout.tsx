import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kitsu Nori at 2610 W Anderson Ln, Austin TX 78757. Call (512) 555-0198 or email hello@kitsunori.com. Open Mon–Thu 11am–10pm, Fri 11am–11pm, Sat–Sun 12pm.",
  keywords: [
    "Kitsu Nori contact",
    "Kitsu Nori hours",
    "Kitsu Nori address",
    "sushi restaurant W Anderson Austin",
  ],
  alternates: { canonical: "https://kitsunori.com/contact" },
  openGraph: {
    title: "Contact & Hours | Kitsu Nori",
    description:
      "2610 W Anderson Ln, Austin TX 78757 · (512) 555-0198 · Open daily",
    url: "https://kitsunori.com/contact",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Kitsu Nori Austin" }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
