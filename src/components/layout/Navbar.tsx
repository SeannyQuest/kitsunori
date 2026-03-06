"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order Online" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { itemCount } = useCart();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [pathname]);

  const isTransparent = isHome && !scrolled && !isOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="flex flex-col">
              <span
                className={cn(
                  "text-xl lg:text-2xl tracking-[0.15em] uppercase transition-colors duration-300",
                  "font-serif font-semibold",
                  isTransparent ? "text-white" : "text-[rgb(29,51,98)]"
                )}
              >
                Kitsu Nori
              </span>
              <span
                className={cn(
                  "text-[10px] tracking-[0.3em] uppercase transition-colors duration-300",
                  isTransparent ? "text-white/70" : "text-[rgb(156,148,138)]"
                )}
              >
                Austin, TX
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm tracking-widest uppercase font-medium transition-colors duration-200",
                  href === "/order"
                    ? cn(
                        "px-5 py-2 border transition-all duration-300",
                        isTransparent
                          ? "border-white text-white hover:bg-white hover:text-[rgb(29,51,98)]"
                          : "border-[rgb(29,51,98)] text-[rgb(29,51,98)] hover:bg-[rgb(29,51,98)] hover:text-white"
                      )
                    : cn(
                        isTransparent
                          ? "text-white/90 hover:text-white"
                          : "text-[rgb(42,40,38)] hover:text-[rgb(29,51,98)]",
                        pathname === href &&
                          !isTransparent &&
                          "text-[rgb(29,51,98)]"
                      )
                )}
              >
                {label}
              </Link>
            ))}

            {/* Cart */}
            <Link
              href="/order"
              className={cn(
                "relative p-2 transition-colors",
                isTransparent
                  ? "text-white/90 hover:text-white"
                  : "text-[rgb(42,40,38)] hover:text-[rgb(29,51,98)]"
              )}
              aria-label={`Cart with ${itemCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[rgb(184,152,90)] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/order"
              className={cn(
                "relative p-2 transition-colors",
                isTransparent ? "text-white" : "text-[rgb(42,40,38)]"
              )}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[rgb(184,152,90)] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 transition-colors",
                isTransparent ? "text-white" : "text-[rgb(42,40,38)]"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen bg-white border-t border-gray-100" : "max-h-0"
        )}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "py-3 text-sm tracking-widest uppercase font-medium border-b border-gray-50 last:border-0 transition-colors",
                href === "/order"
                  ? "text-[rgb(29,51,98)] font-semibold"
                  : "text-[rgb(42,40,38)] hover:text-[rgb(29,51,98)]"
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
