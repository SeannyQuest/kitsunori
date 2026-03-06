"use client";

import { useState, type FormEvent } from "react";
import { X, Clock, CheckCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import { toast } from "sonner";

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
}

function generatePickupTimes(): string[] {
  const times: string[] = ["ASAP (20–30 min)"];
  const now = new Date();
  now.setMinutes(Math.ceil(now.getMinutes() / 15) * 15 + 30, 0, 0);
  for (let i = 0; i < 8; i++) {
    const slot = new Date(now.getTime() + i * 15 * 60 * 1000);
    times.push(
      slot.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
    );
  }
  return times;
}

type Step = "info" | "confirm" | "success";

export default function CheckoutModal({ open, onClose }: CheckoutModalProps) {
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<Step>("info");
  const [loading, setLoading] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pickupTime: generatePickupTimes()[0],
  });
  const pickupTimes = generatePickupTimes();
  const tax = subtotal * 0.0825;
  const total = subtotal + tax;

  function updateForm(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: form.name,
          customer_phone: form.phone,
          customer_email: form.email,
          pickup_time: form.pickupTime,
          items: items.map((i) => ({
            menu_item_id: i.menu_item.id,
            quantity: i.quantity,
            special_instructions: i.special_instructions,
            item_price: i.menu_item.price,
          })),
          total_amount: total,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setOrderNumber(data.order_number || `KN-${Date.now().toString().slice(-6)}`);
        clearCart();
        setStep("success");
      } else {
        toast.error("Order failed. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    if (step === "success") {
      setStep("info");
      setForm({ name: "", phone: "", email: "", pickupTime: pickupTimes[0] });
    }
    onClose();
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={step !== "success" ? handleClose : undefined}
      />

      {/* Modal */}
      <div className="relative bg-white w-full sm:max-w-lg sm:rounded-sm overflow-hidden max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
          <h2 className="font-serif text-xl text-[rgb(29,51,98)]">
            {step === "success" ? "Order Confirmed!" : "Checkout"}
          </h2>
          <button
            onClick={handleClose}
            className="p-1 text-[rgb(156,148,138)] hover:text-[rgb(42,40,38)] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success state */}
        {step === "success" && (
          <div className="px-6 py-12 text-center">
            <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto mb-5" />
            <h3 className="font-serif text-2xl text-[rgb(29,51,98)] mb-3">
              Thank you, {form.name.split(" ")[0]}!
            </h3>
            <p className="text-[rgb(156,148,138)] text-sm mb-2">
              Your order has been received.
            </p>
            <div className="bg-[rgb(252,250,246)] border border-gray-100 p-5 my-6">
              <p className="text-xs text-[rgb(156,148,138)] uppercase tracking-widest mb-1">
                Order Number
              </p>
              <p className="font-mono font-bold text-2xl text-[rgb(29,51,98)]">
                {orderNumber}
              </p>
              <p className="text-sm text-[rgb(42,40,38)] mt-3">
                Pickup: <strong>{form.pickupTime}</strong>
              </p>
              <p className="text-xs text-[rgb(156,148,138)] mt-1">
                2610 W Anderson Ln, Austin TX 78757
              </p>
            </div>
            <p className="text-sm text-[rgb(156,148,138)]">
              A confirmation has been sent to <strong>{form.email}</strong>
            </p>
            <button
              onClick={handleClose}
              className="mt-8 px-8 py-3 bg-[rgb(29,51,98)] text-white text-sm tracking-widest uppercase font-medium hover:bg-[rgb(20,37,72)] transition-colors"
            >
              Done
            </button>
          </div>
        )}

        {/* Form */}
        {step !== "success" && (
          <form onSubmit={handleSubmit} className="px-6 py-5">
            {/* Order summary */}
            <div className="mb-6">
              <h3 className="text-xs tracking-widest uppercase text-[rgb(156,148,138)] font-medium mb-3">
                Order Summary
              </h3>
              <ul className="space-y-2 mb-4">
                {items.map((i) => (
                  <li key={i.menu_item.id} className="flex justify-between text-sm">
                    <span className="text-[rgb(42,40,38)]">
                      {i.quantity}× {i.menu_item.name}
                    </span>
                    <span className="text-[rgb(29,51,98)] font-medium">
                      {formatPrice(i.menu_item.price * i.quantity)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-3 space-y-1.5 text-sm">
                <div className="flex justify-between text-[rgb(156,148,138)]">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[rgb(156,148,138)]">
                  <span>Tax (8.25%)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between font-semibold text-[rgb(29,51,98)] pt-1 border-t border-gray-100">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>

            {/* Customer info */}
            <div className="space-y-4">
              <h3 className="text-xs tracking-widest uppercase text-[rgb(156,148,138)] font-medium">
                Your Info
              </h3>

              <div>
                <label className="text-xs font-medium text-[rgb(42,40,38)] block mb-1">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => updateForm("name", e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full px-3 py-2.5 border border-gray-200 text-sm text-[rgb(42,40,38)] placeholder-[rgb(156,148,138)] focus:outline-none focus:border-[rgb(29,51,98)] transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-[rgb(42,40,38)] block mb-1">
                  Phone <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => updateForm("phone", e.target.value)}
                  placeholder="(512) 000-0000"
                  className="w-full px-3 py-2.5 border border-gray-200 text-sm text-[rgb(42,40,38)] placeholder-[rgb(156,148,138)] focus:outline-none focus:border-[rgb(29,51,98)] transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-[rgb(42,40,38)] block mb-1">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => updateForm("email", e.target.value)}
                  placeholder="jane@email.com"
                  className="w-full px-3 py-2.5 border border-gray-200 text-sm text-[rgb(42,40,38)] placeholder-[rgb(156,148,138)] focus:outline-none focus:border-[rgb(29,51,98)] transition-colors"
                />
              </div>

              {/* Pickup time */}
              <div>
                <label className="text-xs font-medium text-[rgb(42,40,38)] block mb-1">
                  <Clock className="inline w-3 h-3 mr-1" />
                  Pickup Time <span className="text-red-400">*</span>
                </label>
                <select
                  value={form.pickupTime}
                  onChange={(e) => updateForm("pickupTime", e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-200 text-sm text-[rgb(42,40,38)] focus:outline-none focus:border-[rgb(29,51,98)] transition-colors bg-white appearance-none"
                >
                  {pickupTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Payment note */}
            <div className="mt-5 p-4 bg-[rgb(252,250,246)] border border-gray-100 text-xs text-[rgb(156,148,138)]">
              Payment is collected at pickup. We accept cash, card, and Apple/Google Pay.
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-5 w-full py-3.5 bg-[rgb(29,51,98)] text-white text-sm tracking-widest uppercase font-medium hover:bg-[rgb(20,37,72)] transition-colors disabled:opacity-60"
            >
              {loading ? "Placing Order…" : `Place Order · ${formatPrice(total)}`}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
