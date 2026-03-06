"use client";

import { useState } from "react";
import { menuCategories, getItemsByCategory } from "@/lib/menu-data";
import MenuItemCard from "@/components/ordering/MenuItemCard";
import CartSidebar from "@/components/ordering/CartSidebar";
import CheckoutModal from "@/components/ordering/CheckoutModal";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function OrderPage() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { itemCount, subtotal } = useCart();

  return (
    <>
      {/* Page header */}
      <div className="pt-24 pb-8 bg-[rgb(29,51,98)] text-white text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[rgb(184,152,90)] font-medium mb-2">
          Pickup Order
        </p>
        <h1 className="font-serif text-4xl lg:text-5xl font-light">Order Online</h1>
        <p className="text-white/60 text-sm mt-3">
          Ready in 20–30 minutes · Pickup at 2310 S Lamar Blvd, Suite 102
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8 lg:gap-12">
          {/* Left: Menu browser */}
          <div className="flex-1 min-w-0">
            {/* Category tabs */}
            <div className="flex gap-2 flex-wrap mb-8 sticky top-16 bg-[rgb(252,250,246)] py-3 z-20 -mx-4 px-4 border-b border-gray-100">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-4 py-2 text-xs tracking-widest uppercase font-medium transition-all duration-200",
                    activeCategory === cat.id
                      ? "bg-[rgb(29,51,98)] text-white"
                      : "bg-white border border-gray-200 text-[rgb(42,40,38)] hover:border-[rgb(29,51,98)]"
                  )}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Category title */}
            <h2 className="font-serif text-3xl text-[rgb(29,51,98)] mb-6">
              {menuCategories.find((c) => c.id === activeCategory)?.name}
            </h2>

            {/* Items grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {getItemsByCategory(activeCategory).map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Right: Cart sidebar (desktop) */}
          <div className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-24">
              <CartSidebar onCheckout={() => setCheckoutOpen(true)} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile cart bar */}
      {itemCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white border-t border-gray-100 lg:hidden">
          <button
            onClick={() => setCartOpen(true)}
            className="w-full flex items-center justify-between bg-[rgb(29,51,98)] text-white px-5 py-3.5 font-medium"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-sm">{itemCount} item{itemCount !== 1 ? "s" : ""}</span>
            </div>
            <span className="text-sm">View Cart →</span>
          </button>
        </div>
      )}

      {/* Mobile cart sheet */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setCartOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-5 max-h-[80vh] overflow-y-auto">
            <CartSidebar
              onCheckout={() => {
                setCartOpen(false);
                setCheckoutOpen(true);
              }}
            />
          </div>
        </div>
      )}

      {/* Checkout modal */}
      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
    </>
  );
}
