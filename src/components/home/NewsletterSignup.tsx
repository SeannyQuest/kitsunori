"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        toast.success("You're on the list! We'll keep you posted.");
        setEmail("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-20 bg-[rgb(245,243,240)]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[rgb(184,152,90)] font-medium mb-4">
          Stay in the Loop
        </p>
        <h2 className="font-serif text-3xl lg:text-4xl font-light text-[rgb(29,51,98)] mb-4">
          Seasonal menus, events & more
        </h2>
        <p className="text-[rgb(156,148,138)] text-sm leading-relaxed mb-8">
          Be the first to know about new menu drops, private event openings,
          and happy hour specials. No spam — ever.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={loading}
            className="flex-1 px-4 py-3 bg-white border border-gray-200 text-sm text-[rgb(42,40,38)] placeholder-[rgb(156,148,138)] focus:outline-none focus:border-[rgb(29,51,98)] transition-colors disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-7 py-3 bg-[rgb(29,51,98)] text-white text-sm tracking-widest uppercase font-medium hover:bg-[rgb(20,37,72)] transition-colors disabled:opacity-60 shrink-0"
          >
            {loading ? "Joining…" : "Subscribe"}
          </button>
        </form>

        <p className="text-[10px] text-[rgb(156,148,138)] mt-4 tracking-wide">
          By subscribing you agree to our Privacy Policy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
