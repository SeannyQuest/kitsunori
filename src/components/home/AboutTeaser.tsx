import Link from "next/link";
import Image from "next/image";

export default function AboutTeaser() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=900&q=80"
                alt="Chef preparing sushi at Kitsu Nori"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[rgb(29,51,98)] hidden lg:block" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.4em] uppercase text-[rgb(184,152,90)] font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-[rgb(29,51,98)] leading-tight mb-6">
              Beautiful
              <br />
              <em className="font-normal italic">and Intentional</em>
            </h2>
            <div className="w-12 h-px bg-[rgb(184,152,90)] mb-8" />
            <p className="text-[rgb(156,148,138)] leading-relaxed mb-6 text-base">
              Chef Paul Qui has carried this idea since his early days at Uchi
              in 2003 — sushi as both craft and visual experience, closer to art
              than food. Kitsu Nori is that vision, finally alive on South
              Lamar.
            </p>
            <p className="text-[rgb(156,148,138)] leading-relaxed mb-10 text-base">
              Inspired by <em>ikebana</em> and <em>kintsugi</em> — balance,
              restraint, and intention in every bite. Nothing accidental.
              Everything transformed.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-[rgb(29,51,98)] font-medium group"
            >
              Read Our Story
              <span className="w-8 h-px bg-[rgb(29,51,98)] group-hover:w-14 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
