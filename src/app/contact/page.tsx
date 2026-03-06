"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, party_size: 0, phone: "", event_date: "" }),
      });
      if (res.ok) {
        setSent(true);
        toast.success("Message sent! We'll reply within 24 hours.");
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
      <div className="pt-28 pb-12 bg-[rgb(29,51,98)] text-white text-center px-4">
        <p className="text-xs tracking-[0.4em] uppercase text-[rgb(184,152,90)] font-medium mb-3">
          Say Hello
        </p>
        <h1 className="font-serif text-5xl lg:text-6xl font-light">Contact Us</h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <div>
            <h2 className="font-serif text-3xl text-[rgb(29,51,98)] mb-8">Find Us</h2>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-[rgb(29,51,98)] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[rgb(29,51,98)]" />
                </div>
                <div>
                  <p className="font-medium text-[rgb(42,40,38)] mb-0.5">Address</p>
                  <p className="text-[rgb(156,148,138)] text-sm">
                    2610 W Anderson Ln<br />Austin, TX 78757
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 border border-[rgb(29,51,98)] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[rgb(29,51,98)]" />
                </div>
                <div>
                  <p className="font-medium text-[rgb(42,40,38)] mb-0.5">Phone</p>
                  <a
                    href="tel:+15125550198"
                    className="text-[rgb(156,148,138)] text-sm hover:text-[rgb(29,51,98)] transition-colors"
                  >
                    (512) 555-0198
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 border border-[rgb(29,51,98)] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[rgb(29,51,98)]" />
                </div>
                <div>
                  <p className="font-medium text-[rgb(42,40,38)] mb-0.5">Email</p>
                  <a
                    href="mailto:hello@kitsunori.com"
                    className="text-[rgb(156,148,138)] text-sm hover:text-[rgb(29,51,98)] transition-colors"
                  >
                    hello@kitsunori.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 border border-[rgb(29,51,98)] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[rgb(29,51,98)]" />
                </div>
                <div>
                  <p className="font-medium text-[rgb(42,40,38)] mb-2">Hours</p>
                  <div className="space-y-1 text-sm text-[rgb(156,148,138)]">
                    <div className="flex justify-between gap-8">
                      <span>Mon – Thu</span><span>11am – 10pm</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Friday</span><span>11am – 11pm</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Saturday</span><span>12pm – 11pm</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sunday</span><span>12pm – 9pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-video bg-gray-100 overflow-hidden border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.7!2d-97.7376!3d30.3614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIxJzQxLjAiTiA5N8KwNDQnMTUuNCJX!5e0!3m2!1sen!2sus!4v1617123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kitsu Nori map"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-serif text-3xl text-[rgb(29,51,98)] mb-8">Send a Message</h2>

            {sent ? (
              <div className="py-12 text-center bg-[rgb(252,250,246)] border border-gray-100">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-serif text-2xl text-[rgb(29,51,98)] mb-3">Message Sent!</h3>
                <p className="text-[rgb(156,148,138)] text-sm">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-medium text-[rgb(42,40,38)] block mb-1.5">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Your name"
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
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 border border-gray-200 text-sm text-[rgb(42,40,38)] placeholder-[rgb(156,148,138)] focus:outline-none focus:border-[rgb(29,51,98)] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-[rgb(42,40,38)] block mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder="How can we help?"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 text-sm text-[rgb(42,40,38)] placeholder-[rgb(156,148,138)] focus:outline-none focus:border-[rgb(29,51,98)] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[rgb(29,51,98)] text-white text-sm tracking-widest uppercase font-medium hover:bg-[rgb(20,37,72)] transition-colors disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
