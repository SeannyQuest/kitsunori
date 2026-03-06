import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "James Beard Award-winning Chef Paul Qui brings his vision of edible ikebana to South Lamar. The story behind Kitsu Nori — a handroll bar rooted in balance, restraint, and intention.",
  keywords: [
    "Kitsu Nori story",
    "Chef Paul Qui Austin",
    "James Beard Award Austin chef",
    "Paul Qui handroll bar",
    "about Kitsu Nori Austin",
    "ikebana sushi Austin",
  ],
  alternates: { canonical: "https://kitsunori.com/about" },
  openGraph: {
    title: "Our Story | Kitsu Nori",
    description:
      "Chef Paul Qui's vision since his Uchi days in 2003 — now alive on South Lamar. Balance, restraint, and intention in every bite.",
    url: "https://kitsunori.com/about",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Chef Paul Qui at Kitsu Nori",
      },
    ],
  },
};

const galleryImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
  "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80",
  "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-28 pb-16 bg-[rgb(29,51,98)] text-white text-center px-4">
        <p className="text-xs tracking-[0.4em] uppercase text-[rgb(184,152,90)] font-medium mb-3">
          Our Story
        </p>
        <h1 className="font-serif text-5xl lg:text-6xl font-light mb-5">
          Beautiful and Intentional
        </h1>
        <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed">
          A vision twenty years in the making — finally alive on South Lamar.
        </p>
      </div>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-lg text-[rgb(42,40,38)] leading-relaxed mb-6 font-light">
            This idea has lived in Chef Paul Qui&apos;s head since his early
            days at Uchi in 2003, when he first began exploring sushi as both
            craft and visual experience — something closer to art than food.
          </p>
          <p className="text-[rgb(156,148,138)] leading-relaxed mb-6">
            Kitsu Nori is inspired by <em>ikebana</em>, the Japanese art of
            floral arrangement. Like ikebana, each dish is built around balance,
            restraint, and intention. Nothing is accidental. Every element on
            the plate has a reason to be there.
          </p>
          <p className="text-[rgb(156,148,138)] leading-relaxed mb-6">
            The space itself draws from <em>kintsugi</em> — the Japanese
            philosophy of repairing broken things with gold, finding beauty in
            imperfection. The natural-edged wood tables are sealed with gold
            epoxy. Broken plates from other restaurants are repurposed the same
            way. Nothing is wasted. Everything is transformed.
          </p>
          <blockquote className="border-l-2 border-[rgb(184,152,90)] pl-6 my-10">
            <p className="font-serif text-xl text-[rgb(29,51,98)] font-light leading-relaxed italic">
              &ldquo;Our goal with Kitsu Nori is to serve something beautiful
              and intentional. Sushi could be more than just food — it could be
              an experience of balance, care and craft.&rdquo;
            </p>
            <cite className="block mt-4 text-xs tracking-widest uppercase text-[rgb(156,148,138)] not-italic font-medium">
              — Chef Paul Qui
            </cite>
          </blockquote>
          <p className="text-[rgb(156,148,138)] leading-relaxed">
            Kitsu Nori opened December 13, 2025. The kitchen blends classical
            French technique with Japanese precision — think sake au poivre,
            brown butter meunière, naturally pink rice tinted with beet juice.
            Sauces arrive tableside to preserve the crispness of the nori. There
            are 30 seats inside. Around 145 outside. Reservations recommended.
          </p>
        </div>
      </section>

      {/* Chef spotlight */}
      <section className="section-padding bg-[rgb(252,250,246)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src="/paul-qui.webp"
                  alt="Chef Paul Qui"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[rgb(184,152,90)] hidden lg:block opacity-60" />
            </div>
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-[rgb(184,152,90)] font-medium mb-4">
                Chef & Founder
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-[rgb(29,51,98)] mb-2">
                Paul Qui
              </h2>
              <p className="text-[rgb(156,148,138)] text-sm mb-6 tracking-wide">
                James Beard Award-Winning Chef · Austin, TX
              </p>
              <div className="w-12 h-px bg-[rgb(184,152,90)] mb-8" />
              <p className="text-[rgb(156,148,138)] leading-relaxed mb-5">
                Paul Qui is one of Austin&apos;s most celebrated chefs — a James
                Beard Award winner known for East Side King and Thai Kun. His
                culinary voice is defined by a rare fluency across Japanese,
                French, and Filipino traditions.
              </p>
              <p className="text-[rgb(156,148,138)] leading-relaxed mb-8">
                The beverage program is led by Bill Norris, Austin cocktail
                legend, with sake, Japanese whisky highballs on draft, and
                precision craft cocktails designed to complement the food.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-[rgb(156,148,138)] uppercase tracking-widest">
                <span>James Beard Award</span>
                <span>·</span>
                <span>Uchi Alumni</span>
                <span>·</span>
                <span>East Side King</span>
                <span>·</span>
                <span>Thai Kun</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase text-[rgb(184,152,90)] font-medium mb-3">
              The Space
            </p>
            <h2 className="font-serif text-4xl font-light text-[rgb(29,51,98)]">
              Repaired with Gold
            </h2>
            <p className="text-[rgb(156,148,138)] max-w-md mx-auto mt-4 text-sm leading-relaxed">
              30 intimate seats inside. Natural wood tables sealed with gold
              epoxy. A 145-seat patio shared with sister restaurant Roselle next
              door.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden bg-gray-100"
              >
                <img
                  src={src}
                  alt={`Kitsu Nori interior ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[rgb(29,51,98)] text-white text-center px-4">
        <h2 className="font-serif text-3xl lg:text-4xl font-light mb-5">
          Ready to Experience Kitsu Nori?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/order"
            className="px-8 py-3.5 bg-[rgb(184,152,90)] text-white text-sm tracking-widest uppercase font-medium hover:bg-[rgb(160,130,75)] transition-colors"
          >
            Order Online
          </Link>
          <Link
            href="/events"
            className="px-8 py-3.5 border border-white text-white text-sm tracking-widest uppercase font-medium hover:bg-white hover:text-[rgb(29,51,98)] transition-all"
          >
            Private Events
          </Link>
        </div>
      </section>
    </>
  );
}
