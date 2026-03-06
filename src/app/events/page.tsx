"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Users, Calendar, UtensilsCrossed, Wine } from "lucide-react";

const eventImages = [
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
];

export default function EventsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    event_date: "",
    party_size: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof typeof form, value: string) {
    setForm((p) => ({ ...p, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        toast.success("Inquiry received! We'll be in touch within 24 hours.");
      } else {
        toast.error("Something went wrong. Please email us directly.");
      }
    } catch {
      toast.error("Something went wrong. Please email us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-28 pb-20 text-white text-center px-4 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,51,98,0.85), rgba(29,51,98,0.9)), url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-xs tracking-[0.4em] uppercase text-[rgb(184,152,90)] font-medium mb-3">
          Private Events & Catering
        </p>
        <h1 className="font-serif text-5xl lg:text-6xl font-light mb-5">
          Make It Memorable
        </h1>
        <p className="text-white/70 max-w-lg mx-auto text-base leading-relaxed">
          From intimate dinners to full buy-outs — Kitsu Nori brings Japanese
          precision to your most important celebrations.
        </p>
      </div>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Capacity", detail: "Up to 80 guests for private dining; full buy-outs available." },
              { icon: Calendar, label: "Availability", detail: "Private events available Sunday–Thursday evenings and Saturday afternoons." },
              { icon: UtensilsCrossed, label: "Custom Menus", detail: "Chef Kenji will curate a bespoke multi-course experience for your group." },
              { icon: Wine, label: "Beverage Packages", detail: "Curated sake, wine, and cocktail pairings tailored to your event." },
            ].map(({ icon: Icon, label, detail }) => (
              <div key={label} className="text-center">
                <div className="w-12 h-12 border border-[rgb(29,51,98)] flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-5 h-5 text-[rgb(29,51,98)]" />
                </div>
                <h3 className="font-serif text-lg text-[rgb(29,51,98)] mb-2">{label}</h3>
                <p className="text-sm text-[rgb(156,148,138)] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-[rgb(252,250,246)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {eventImages.map((src, i) => (
              <div key={i} className={`overflow-hidden bg-gray-100 ${i === 0 ? "md:col-span-2 aspect-video" : "aspect-square"}`}>
                <img
                  src={src}
                  alt={`Event space ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section className="section-padding bg-white" id="inquire">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.4em] uppercase text-[rgb(184,152,90)] font-medium mb-3">
              Get In Touch
            </p>
            <h2 className="font-serif text-4xl font-light text-[rgb(29,51,98)] mb-4">
              Request More Info
            </h2>
            <p className="text-[rgb(156,148,138)] text-sm">
              Tell us about your event and we&apos;ll reach out within 24 hours to discuss
              details, availability, and pricing.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 bg-[rgb(252,250,246)] border border-gray-100">
              <div className="w-14 h-14 bg-emerald-50 flex items-center justify-center mx-auto mb-5 rounded-full">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-serif text-2xl text-[rgb(29,51,98)] mb-3">Inquiry Received!</h3>
              <p className="text-[rgb(156,148,138)] text-sm">
                Thank you! Our events team will contact you at{" "}
                <strong>{form.email}</strong> within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-medium text-[rgb(42,40,38)] block mb-1.5">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-200 text-sm text-[rgb(42,40,38)] placeholder-[rgb(156,148,138)] focus:outline-none focus:border-[rgb(29,51,98)] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-[rgb(42,40,38)] block mb-1.5">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 border border-gray-200 text-sm text-[rgb(42,40,38)] placeholder-[rgb(156,148,138)] focus:outline-none focus:border-[rgb(29,51,98)] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-[rgb(42,40,38)] block mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="(512) 000-0000"
                    className="w-full px-4 py-3 border border-gray-200 text-sm text-[rgb(42,40,38)] placeholder-[rgb(156,148,138)] focus:outline-none focus:border-[rgb(29,51,98)] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-[rgb(42,40,38)] block mb-1.5">
                    Event Date <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={form.event_date}
                    onChange={(e) => update("event_date", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border border-gray-200 text-sm text-[rgb(42,40,38)] focus:outline-none focus:border-[rgb(29,51,98)] transition-colors bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-[rgb(42,40,38)] block mb-1.5">
                  Party Size <span className="text-red-400">*</span>
                </label>
                <select
                  required
                  value={form.party_size}
                  onChange={(e) => update("party_size", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 text-sm text-[rgb(42,40,38)] focus:outline-none focus:border-[rgb(29,51,98)] transition-colors bg-white appearance-none"
                >
                  <option value="">Select party size</option>
                  <option value="1-10">1–10 guests</option>
                  <option value="11-25">11–25 guests</option>
                  <option value="26-50">26–50 guests</option>
                  <option value="51-80">51–80 guests</option>
                  <option value="80+">80+ guests (full buy-out)</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-[rgb(42,40,38)] block mb-1.5">
                  Tell Us About Your Event
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Type of event, special requests, dietary needs, budget range..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 text-sm text-[rgb(42,40,38)] placeholder-[rgb(156,148,138)] focus:outline-none focus:border-[rgb(29,51,98)] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[rgb(29,51,98)] text-white text-sm tracking-widest uppercase font-medium hover:bg-[rgb(20,37,72)] transition-colors disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send Inquiry"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
