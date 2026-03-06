"use client";

import { useState } from "react";
import { Plus, Minus, ShoppingBag } from "lucide-react";
import { formatPrice, cn } from "@/lib/utils";
import type { MenuItem } from "@/types";
import DietaryBadge from "@/components/shared/DietaryBadge";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const { addItem } = useCart();

  function handleAdd() {
    addItem(item, quantity, instructions);
    toast.success(`${item.name} added to cart`);
    setQuantity(1);
    setInstructions("");
    setShowDetails(false);
  }

  if (!item.is_available) {
    return (
      <div className="p-4 border border-gray-100 bg-gray-50 opacity-60">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-[rgb(42,40,38)]">{item.name}</h3>
            <p className="text-xs text-[rgb(156,148,138)] mt-1">Currently unavailable</p>
          </div>
          <span className="text-sm text-[rgb(156,148,138)]">{formatPrice(item.price)}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-gray-100 bg-white hover:border-[rgb(29,51,98)]/30 transition-colors group">
      {/* Image */}
      {item.image_url && (
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={item.image_url}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-medium text-[rgb(42,40,38)] text-base leading-tight">
              {item.name}
            </h3>
            {item.dietary_tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-1.5">
                {item.dietary_tags.map((tag) => (
                  <DietaryBadge key={tag} tag={tag} />
                ))}
              </div>
            )}
          </div>
          <span className="text-[rgb(29,51,98)] font-semibold text-sm shrink-0">
            {formatPrice(item.price)}
          </span>
        </div>

        <p className="text-xs text-[rgb(156,148,138)] leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Add button */}
        {!showDetails ? (
          <button
            onClick={() => setShowDetails(true)}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-[rgb(29,51,98)] text-white text-xs tracking-widest uppercase font-medium hover:bg-[rgb(20,37,72)] transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            Add to Order
          </button>
        ) : (
          <div className="space-y-3">
            {/* Quantity */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-[rgb(156,148,138)] font-medium">Quantity</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 flex items-center justify-center border border-gray-200 text-[rgb(42,40,38)] hover:border-[rgb(29,51,98)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-sm font-semibold w-5 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 flex items-center justify-center border border-gray-200 text-[rgb(42,40,38)] hover:border-[rgb(29,51,98)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Special instructions */}
            <div>
              <label className="text-xs text-[rgb(156,148,138)] font-medium block mb-1">
                Special Instructions (optional)
              </label>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="e.g. no wasabi, extra ginger..."
                rows={2}
                maxLength={200}
                className="w-full text-xs border border-gray-200 p-2 text-[rgb(42,40,38)] placeholder-[rgb(156,148,138)] focus:outline-none focus:border-[rgb(29,51,98)] resize-none"
              />
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => { setShowDetails(false); setQuantity(1); setInstructions(""); }}
                className="flex-1 py-2.5 border border-gray-200 text-xs tracking-widest uppercase font-medium text-[rgb(42,40,38)] hover:border-[rgb(29,51,98)] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="flex-1 py-2.5 bg-[rgb(29,51,98)] text-white text-xs tracking-widest uppercase font-medium hover:bg-[rgb(20,37,72)] transition-colors"
              >
                Add {quantity > 1 ? `(${quantity})` : ""} — {formatPrice(item.price * quantity)}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
