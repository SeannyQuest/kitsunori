import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Kitsu Nori's story, our chef, and our commitment to Japanese culinary tradition in Austin, TX.",
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
          Crafted from the Heart
        </h1>
        <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed">
          How a young chef from Osaka brought his passion to Austin — and built something
          that feels like home.
        </p>
      </div>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[rgb(42,40,38)] leading-relaxed mb-6 font-light">
              Kitsu Nori was born from a simple belief: that great sushi shouldn&apos;t require
              a passport or a trust fund. Chef Kenji Mori grew up watching his grandmother
              prepare traditional washoku in their small Osaka kitchen — each gesture precise,
              each ingredient chosen with reverence.
            </p>
            <p className="text-[rgb(156,148,138)] leading-relaxed mb-6">
              After training under master sushi chef Hiroshi Tanaka in Tokyo for six years
              and working at acclaimed restaurants in San Francisco and New York, Kenji
              arrived in Austin in 2019. He fell in love with the city&apos;s energy, its
              creativity, and its deep pride in local culture.
            </p>
            <p className="text-[rgb(156,148,138)] leading-relaxed mb-6">
              Kitsu Nori opened in 2021 with a single mission: to serve food that honors
              Japanese tradition while celebrating the warmth and spirit of Austin. Every
              roll, every plate of sashimi, every bowl of miso soup is made with intention
              — sourced from sustainable fisheries, supported by local farms, and prepared
              by a team that genuinely cares.
            </p>
            <p className="text-[rgb(156,148,138)] leading-relaxed">
              We believe that dining is a form of connection — between chef and guest,
              between cultures, between past and present. Come hungry. Leave inspired.
            </p>
          </div>
        </div>
      </section>

      {/* Chef spotlight */}
      <section className="section-padding bg-[rgb(252,250,246)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                  alt="Chef Kenji Mori"
                  className="w-full h-full object-cover"
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
                Kenji Mori
              </h2>
              <p className="text-[rgb(156,148,138)] text-sm mb-6 tracking-wide">
                Executive Chef · Born in Osaka, Japan
              </p>
              <div className="w-12 h-px bg-[rgb(184,152,90)] mb-8" />
              <p className="text-[rgb(156,148,138)] leading-relaxed mb-5">
                With over 20 years of culinary experience spanning Tokyo, New York, and
                San Francisco, Chef Kenji brings a reverent approach to traditional Japanese
                technique — filtered through his love for bold, honest flavors.
              </p>
              <p className="text-[rgb(156,148,138)] leading-relaxed mb-8">
                "I want every guest to feel the care that went into their meal. Not through
                showiness — through honesty. The best ingredient, prepared the right way."
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-[rgb(156,148,138)] uppercase tracking-widest">
                <span>Uchi Alumni</span>
                <span>·</span>
                <span>Nobu NY</span>
                <span>·</span>
                <span>Sukiyabashi Jiro (Stage)</span>
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
              Come As You Are
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden bg-gray-100">
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
