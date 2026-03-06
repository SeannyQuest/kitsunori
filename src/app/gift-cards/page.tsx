import type { Metadata } from "next";
import Link from "next/link";
import { Gift, Mail, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Gift Cards",
  description:
    "Give the gift of Kitsu Nori. Digital and physical gift cards coming soon.",
};

export default function GiftCardsPage() {
  return (
    <>
      <div className="pt-28 pb-12 bg-[rgb(29,51,98)] text-white text-center px-4">
        <p className="text-xs tracking-[0.4em] uppercase text-[rgb(184,152,90)] font-medium mb-3">
          The Gift of Good Taste
        </p>
        <h1 className="font-serif text-5xl lg:text-6xl font-light">Gift Cards</h1>
        <p className="text-white/60 text-sm mt-4 max-w-md mx-auto">
          Give someone you love the experience of Kitsu Nori.
        </p>
      </div>

      <div className="section-padding">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          {/* Coming soon badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(184,152,90)]/10 border border-[rgb(184,152,90)]/30 text-[rgb(184,152,90)] text-xs tracking-widest uppercase font-medium mb-10">
            <span>Coming Soon</span>
          </div>

          <div className="w-32 h-32 bg-[rgb(29,51,98)]/10 flex items-center justify-center mx-auto mb-8 rounded-full">
            <Gift className="w-14 h-14 text-[rgb(29,51,98)]" />
          </div>

          <h2 className="font-serif text-3xl lg:text-4xl font-light text-[rgb(29,51,98)] mb-5">
            Digital & Physical Gift Cards
          </h2>
          <p className="text-[rgb(156,148,138)] leading-relaxed mb-10 max-w-lg mx-auto">
            We&apos;re working on a seamless digital gift card experience. In the meantime,
            you can purchase a physical gift card in-restaurant or by calling us directly.
          </p>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 text-left">
            {[
              {
                icon: CreditCard,
                title: "In-Restaurant",
                detail: "Stop by and we'll set you up with a physical gift card in any denomination.",
              },
              {
                icon: Mail,
                title: "By Phone or Email",
                detail: "Call (512) 555-0198 or email hello@kitsunori.com to arrange a gift card.",
              },
            ].map(({ icon: Icon, title, detail }) => (
              <div key={title} className="p-6 border border-gray-100 bg-white">
                <Icon className="w-6 h-6 text-[rgb(184,152,90)] mb-4" />
                <h3 className="font-serif text-lg text-[rgb(29,51,98)] mb-2">{title}</h3>
                <p className="text-sm text-[rgb(156,148,138)] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[rgb(29,51,98)] text-white text-sm tracking-widest uppercase font-medium hover:bg-[rgb(20,37,72)] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/menu"
              className="px-8 py-3.5 border border-[rgb(29,51,98)] text-[rgb(29,51,98)] text-sm tracking-widest uppercase font-medium hover:bg-[rgb(29,51,98)] hover:text-white transition-all"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
