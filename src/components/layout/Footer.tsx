import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[rgb(29,51,98)] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="font-serif text-2xl tracking-[0.15em] uppercase text-white mb-1">
                Kitsu Nori
              </h2>
              <p className="text-white/50 text-xs tracking-[0.3em] uppercase">
                Asian Fusion · Austin, TX
              </p>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Where Japanese precision meets Texas warmth. Handcrafted rolls, fresh
              sashimi, and elevated Asian fusion in the heart of Austin.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/kitsunori"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/20 text-white/70 hover:text-white hover:border-white/60 transition-colors rounded-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/kitsunori"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/20 text-white/70 hover:text-white hover:border-white/60 transition-colors rounded-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-white/50 mb-5 font-medium">
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/menu", label: "View Menu" },
                { href: "/order", label: "Order Online" },
                { href: "/about", label: "Our Story" },
                { href: "/events", label: "Private Events" },
                { href: "/gift-cards", label: "Gift Cards" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-white/50 mb-5 font-medium">
              Hours
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex justify-between gap-4">
                <span>Mon – Thu</span>
                <span>11am – 10pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Fri</span>
                <span>11am – 11pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sat</span>
                <span>12pm – 11pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sun</span>
                <span>12pm – 9pm</span>
              </li>
            </ul>
            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-xs text-[rgb(184,152,90)] font-medium tracking-wider uppercase">
                Happy Hour
              </p>
              <p className="text-sm text-white/70 mt-1">Mon–Fri · 3pm–6pm</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-white/50 mb-5 font-medium">
              Find Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[rgb(184,152,90)]" />
                <span>
                  2310 S Lamar Blvd, Suite 102<br />
                  Austin, TX 78704
                </span>
              </li>
              <li>
                <a
                  href="tel:+15125550198"
                  className="flex gap-3 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[rgb(184,152,90)]" />
                  (512) 555-0198
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@kitsunori.com"
                  className="flex gap-3 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[rgb(184,152,90)]" />
                  hello@kitsunori.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {currentYear} Kitsu Nori. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/admin" className="hover:text-white/70 transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
