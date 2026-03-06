import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kitsu Nori at 2310 S Lamar Blvd, Suite 102, Austin TX 78704. Call (512) 555-0198 or email hello@kitsunori.com. Open Mon–Thu 11am–10pm, Fri 11am–11pm, Sat–Sun 12pm.",
  keywords: [
    "Kitsu Nori contact",
    "Kitsu Nori hours",
    "Kitsu Nori address",
    "sushi restaurant S Lamar Austin",
  ],
  alternates: { canonical: "https://kitsunori.com/contact" },
  openGraph: {
    title: "Contact & Hours | Kitsu Nori",
    description:
      "2310 S Lamar Blvd, Suite 102, Austin TX 78704 · (512) 555-0198 · Open daily",
    url: "https://kitsunori.com/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kitsu Nori Austin",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
