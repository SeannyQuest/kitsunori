"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Download, ChevronDown, ChevronUp } from "lucide-react";
import { menuCategories, menuItems, getItemsByCategory } from "@/lib/menu-data";
import DietaryBadge from "@/components/shared/DietaryBadge";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { DietaryTag } from "@/types";

const dietaryFilters: { tag: DietaryTag; label: string }[] = [
  { tag: "GF", label: "Gluten-Free" },
  { tag: "V", label: "Vegetarian" },
  { tag: "VG", label: "Vegan" },
  { tag: "SPICY", label: "Spicy" },
];

export default function MenuPage() {
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set(menuCategories.map((c) => c.id))
  );
  const [activeFilter, setActiveFilter] = useState<DietaryTag | null>(null);
  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});

  function toggleCategory(id: string) {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function scrollToCategory(id: string) {
    categoryRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const filteredItems = activeFilter
    ? menuItems.filter((item) => item.dietary_tags.includes(activeFilter))
    : null;

  return (
    <>
      {/* Page hero */}
      <div className="pt-24 pb-12 bg-[rgb(29,51,98)] text-white text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[rgb(184,152,90)] font-medium mb-3">
          Kitsu Nori
        </p>
        <h1 className="font-serif text-5xl lg:text-6xl font-light mb-4">Our Menu</h1>
        <p className="text-white/60 max-w-md mx-auto text-sm leading-relaxed">
          Seasonal, sustainable, and crafted with care. Dietary needs? Just ask.
        </p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Link
            href="/order"
            className="px-7 py-3 bg-[rgb(184,152,90)] text-white text-sm tracking-widest uppercase font-medium hover:bg-[rgb(160,130,75)] transition-colors"
          >
            Order Online
          </Link>
          <a
            href="/menu.pdf"
            className="flex items-center gap-2 px-7 py-3 border border-white/40 text-white text-sm tracking-widest uppercase font-medium hover:border-white transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category nav */}
        <nav className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-gray-100" aria-label="Menu categories">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className="px-4 py-2 text-xs tracking-widest uppercase font-medium border border-gray-200 text-[rgb(42,40,38)] hover:border-[rgb(29,51,98)] hover:text-[rgb(29,51,98)] transition-colors"
            >
              {cat.name}
            </button>
          ))}
        </nav>

        {/* Dietary filters */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="text-xs text-[rgb(156,148,138)] uppercase tracking-widest font-medium">
            Filter:
          </span>
          {dietaryFilters.map(({ tag, label }) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(activeFilter === tag ? null : tag)}
              className={cn(
                "px-3 py-1.5 text-xs font-medium border rounded-sm transition-all",
                activeFilter === tag
                  ? "bg-[rgb(29,51,98)] text-white border-[rgb(29,51,98)]"
                  : "border-gray-200 text-[rgb(42,40,38)] hover:border-[rgb(29,51,98)]"
              )}
            >
              {label}
            </button>
          ))}
          {activeFilter && (
            <button
              onClick={() => setActiveFilter(null)}
              className="text-xs text-[rgb(156,148,138)] hover:text-[rgb(29,51,98)] underline"
            >
              Clear
            </button>
          )}
        </div>

        {/* Happy Hour callout */}
        <div
          id="happy-hour"
          className="mb-10 p-6 bg-[rgb(29,51,98)]/5 border border-[rgb(29,51,98)]/20"
        >
          <div className="flex items-start gap-4">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[rgb(184,152,90)] font-semibold mb-1">
                Happy Hour · Mon–Fri 3–6 PM
              </p>
              <p className="text-sm text-[rgb(42,40,38)]">
                Half-price starters, $5 sake, and 20% off specialty rolls. Dine-in only.
              </p>
            </div>
          </div>
        </div>

        {/* Active filter view */}
        {filteredItems && (
          <div className="mb-12">
            <h2 className="font-serif text-2xl text-[rgb(29,51,98)] mb-6">
              {dietaryFilters.find((f) => f.tag === activeFilter)?.label} Items
            </h2>
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <MenuItemRow key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* All categories */}
        {!filteredItems &&
          menuCategories.map((cat) => {
            const items = getItemsByCategory(cat.id);
            const isOpen = openCategories.has(cat.id);
            return (
              <section
                key={cat.id}
                ref={(el) => { categoryRefs.current[cat.id] = el; }}
                className="mb-2 border-b border-gray-100 last:border-0"
              >
                {/* Category header */}
                <button
                  onClick={() => toggleCategory(cat.id)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <h2 className="font-serif text-2xl lg:text-3xl text-[rgb(29,51,98)] group-hover:text-[rgb(45,72,130)] transition-colors">
                    {cat.name}
                  </h2>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[rgb(156,148,138)]">
                      {items.length} items
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[rgb(156,148,138)]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[rgb(156,148,138)]" />
                    )}
                  </div>
                </button>

                {/* Items */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-[5000px] pb-6" : "max-h-0"
                  )}
                >
                  <div className="space-y-0">
                    {items.map((item) => (
                      <MenuItemRow key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </section>
            );
          })}

        {/* Allergen note */}
        <div className="mt-12 p-5 bg-gray-50 border border-gray-100">
          <p className="text-xs text-[rgb(156,148,138)] leading-relaxed">
            <strong className="text-[rgb(42,40,38)]">Allergen Notice:</strong> Our kitchen handles
            nuts, shellfish, soy, wheat, eggs, and dairy. Please inform your server of any allergies.
            GF = Gluten-Free, V = Vegetarian, VG = Vegan, DF = Dairy-Free. Menu items and prices
            are subject to change.
          </p>
        </div>
      </div>
    </>
  );
}

function MenuItemRow({ item }: { item: ReturnType<typeof getItemsByCategory>[number] }) {
  return (
    <div className="flex gap-4 py-5 border-b border-gray-50 last:border-0 group">
      {/* Optional image */}
      {item.image_url && (
        <div className="w-20 h-20 shrink-0 overflow-hidden bg-gray-100 hidden sm:block">
          <img
            src={item.image_url}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}
      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3 mb-1">
          <div className="flex items-center flex-wrap gap-2">
            <h3 className="font-medium text-[rgb(42,40,38)] text-base">{item.name}</h3>
            {item.dietary_tags.map((tag) => (
              <DietaryBadge key={tag} tag={tag} />
            ))}
          </div>
          <span className="text-[rgb(29,51,98)] font-semibold text-sm shrink-0">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="text-sm text-[rgb(156,148,138)] leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}
