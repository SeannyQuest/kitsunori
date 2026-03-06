"use client";

import { ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

interface CartSidebarProps {
  onCheckout: () => void;
}

export default function CartSidebar({ onCheckout }: CartSidebarProps) {
  const { items, itemCount, subtotal, removeItem, updateQuantity } = useCart();

  if (itemCount === 0) {
    return (
      <div className="border border-gray-100 bg-white p-8 text-center">
        <ShoppingBag className="w-10 h-10 text-[rgb(156,148,138)] mx-auto mb-4" />
        <h3 className="font-serif text-xl text-[rgb(29,51,98)] mb-2">Your cart is empty</h3>
        <p className="text-sm text-[rgb(156,148,138)]">
          Add items from the menu to start your order.
        </p>
      </div>
    );
  }

  const tax = subtotal * 0.0825;
  const total = subtotal + tax;

  return (
    <div className="border border-gray-100 bg-white">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100">
        <h3 className="font-serif text-xl text-[rgb(29,51,98)] flex items-center gap-2">
          <ShoppingBag className="w-4 h-4" />
          Your Order
          <span className="ml-auto text-sm text-[rgb(156,148,138)] font-sans font-normal">
            {itemCount} item{itemCount !== 1 ? "s" : ""}
          </span>
        </h3>
      </div>

      {/* Items */}
      <ul className="divide-y divide-gray-50 max-h-80 overflow-y-auto">
        {items.map((cartItem) => (
          <li key={cartItem.menu_item.id} className="px-5 py-4">
            <div className="flex items-start gap-3">
              {/* Quantity controls */}
              <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                <button
                  onClick={() => updateQuantity(cartItem.menu_item.id, cartItem.quantity - 1)}
                  className="w-5 h-5 flex items-center justify-center border border-gray-200 hover:border-[rgb(29,51,98)] transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-2.5 h-2.5" />
                </button>
                <span className="text-xs font-semibold w-4 text-center">
                  {cartItem.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(cartItem.menu_item.id, cartItem.quantity + 1)}
                  className="w-5 h-5 flex items-center justify-center border border-gray-200 hover:border-[rgb(29,51,98)] transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-2.5 h-2.5" />
                </button>
              </div>

              {/* Name + instructions */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[rgb(42,40,38)] leading-tight">
                  {cartItem.menu_item.name}
                </p>
                {cartItem.special_instructions && (
                  <p className="text-xs text-[rgb(156,148,138)] mt-0.5 truncate">
                    {cartItem.special_instructions}
                  </p>
                )}
              </div>

              {/* Price + remove */}
              <div className="flex flex-col items-end gap-1 shrink-0">
                <span className="text-sm font-semibold text-[rgb(29,51,98)]">
                  {formatPrice(cartItem.menu_item.price * cartItem.quantity)}
                </span>
                <button
                  onClick={() => removeItem(cartItem.menu_item.id)}
                  className="text-[rgb(156,148,138)] hover:text-red-500 transition-colors"
                  aria-label={`Remove ${cartItem.menu_item.name}`}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Totals */}
      <div className="px-5 py-4 border-t border-gray-100 space-y-2">
        <div className="flex justify-between text-sm text-[rgb(156,148,138)]">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm text-[rgb(156,148,138)]">
          <span>Tax (8.25%)</span>
          <span>{formatPrice(tax)}</span>
        </div>
        <div className="flex justify-between font-semibold text-[rgb(29,51,98)] pt-2 border-t border-gray-100">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>

      {/* Checkout button */}
      <div className="px-5 pb-5">
        <button
          onClick={onCheckout}
          className="w-full py-3.5 bg-[rgb(29,51,98)] text-white text-sm tracking-widest uppercase font-medium hover:bg-[rgb(20,37,72)] transition-colors"
        >
          Proceed to Checkout
        </button>
        <p className="text-[10px] text-[rgb(156,148,138)] text-center mt-2">
          Pickup only · 20–30 min estimated
        </p>
      </div>
    </div>
  );
}
