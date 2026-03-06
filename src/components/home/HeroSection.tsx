import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.55) 100%), url('/hero-bg.avif')",
        }}
        role="img"
        aria-label="Beautifully plated sushi rolls at Kitsu Nori"
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="text-xs tracking-[0.5em] uppercase text-white/70 mb-6 font-medium">
          Chef Paul Qui · South Lamar · Austin
        </p>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight mb-6 text-white">
          Beautiful and
          <br />
          <em className="font-normal italic">Intentional</em>
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed font-light">
          A handroll bar rooted in balance, restraint, and craft. James Beard
          Award–winning Chef Paul Qui&apos;s vision — alive on South Lamar.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/order"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[rgb(29,51,98)] text-white text-sm tracking-widest uppercase font-medium hover:bg-[rgb(20,37,72)] transition-colors duration-300 min-w-[180px]"
          >
            Order Online
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-white text-white text-sm tracking-widest uppercase font-medium hover:bg-white hover:text-[rgb(29,51,98)] transition-all duration-300 min-w-[180px]"
          >
            View Menu
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
