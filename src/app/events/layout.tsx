import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Events & Catering",
  description:
    "Host your next event at Kitsu Nori. Private dining for up to 80 guests, custom omakase menus, sake pairings, and full buy-outs available in Austin, TX.",
  keywords: [
    "private dining Austin TX",
    "private events Austin restaurant",
    "corporate dinner Austin",
    "omakase private event Austin",
    "sushi catering Austin",
    "wedding dinner Austin restaurant",
    "Kitsu Nori events",
  ],
  alternates: { canonical: "https://kitsunori.com/events" },
  openGraph: {
    title: "Private Events & Catering | Kitsu Nori",
    description:
      "Private dining for up to 80 guests. Custom omakase menus and full buy-outs available in Austin, TX.",
    url: "https://kitsunori.com/events",
    images: [{ url: "/og-events.jpg", width: 1200, height: 630, alt: "Private Dining at Kitsu Nori" }],
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
