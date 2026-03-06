import Link from "next/link";
import { formatPrice } from "@/lib/utils";

const featuredDishes = [
  {
    id: "ct1",
    name: "Hamachi Crudo",
    description: "Orange, ponzu, orange oil, serrano pepper.",
    price: 24,
    tag: "Cold Tasting",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80",
  },
  {
    id: "ct7",
    name: "Wagyu A5 Carpaccio",
    description: "Farm egg, crispy mushrooms, wasabi, pickles, meyer lemon.",
    price: 29,
    tag: "Chef's Pick",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
  },
  {
    id: "yk4",
    name: "Dry Aged Toro Steak",
    description: "Flat iron, asian pear, leeks, tare.",
    price: 65,
    tag: "Yakimono",
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80",
  },
  {
    id: "hp5",
    name: "Uni Handroll",
    description: "Hand harvested in Maine.",
    price: 24,
    tag: "Premium",
    image:
      "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",
  },
];

export default function FeaturedDishes() {
  return (
    <section className="section-padding bg-[rgb(252,250,246)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-[rgb(184,152,90)] font-medium mb-3">
            Signature Dishes
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-[rgb(29,51,98)] mb-4">
            A Taste of Kitsu Nori
          </h2>
          <p className="text-[rgb(156,148,138)] max-w-lg mx-auto leading-relaxed">
            A few of our most beloved creations — each one a balance of
            tradition, technique, and Texas-sized flavor.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredDishes.map((dish) => (
            <article key={dish.id} className="group cursor-pointer">
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-gray-100 mb-4 relative">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Tag */}
                <span className="absolute top-3 left-3 bg-[rgb(29,51,98)] text-white text-[10px] tracking-widest uppercase px-2.5 py-1 font-medium">
                  {dish.tag}
                </span>
              </div>

              {/* Info */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg text-[rgb(42,40,38)] group-hover:text-[rgb(29,51,98)] transition-colors">
                    {dish.name}
                  </h3>
                  <span className="text-[rgb(29,51,98)] font-medium text-sm shrink-0 mt-0.5">
                    {formatPrice(dish.price)}
                  </span>
                </div>
                <p className="text-sm text-[rgb(156,148,138)] leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-[rgb(29,51,98)] text-[rgb(29,51,98)] text-sm tracking-widest uppercase font-medium hover:bg-[rgb(29,51,98)] hover:text-white transition-all duration-300"
          >
            Explore Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
