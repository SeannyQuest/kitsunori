import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

const hours = [
  { day: "Monday – Thursday", time: "11:00 AM – 10:00 PM" },
  { day: "Friday", time: "11:00 AM – 11:00 PM" },
  { day: "Saturday", time: "12:00 PM – 11:00 PM" },
  { day: "Sunday", time: "12:00 PM – 9:00 PM" },
];

export default function HoursLocation() {
  return (
    <section className="section-padding bg-[rgb(29,51,98)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Hours */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[rgb(184,152,90)] font-medium mb-4">
              Hours of Operation
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-white mb-8 leading-tight">
              Come Visit Us
            </h2>

            <div className="space-y-4 mb-8">
              {hours.map(({ day, time }) => (
                <div
                  key={day}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 pb-4 border-b border-white/10 last:border-0 last:pb-0"
                >
                  <span className="text-white/80 text-sm">{day}</span>
                  <span className="text-white font-medium text-sm">{time}</span>
                </div>
              ))}
            </div>

            {/* Happy hour callout */}
            <div className="bg-white/10 border border-white/20 p-5 rounded-sm">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-[rgb(184,152,90)]" />
                <span className="text-[rgb(184,152,90)] text-xs tracking-[0.3em] uppercase font-semibold">
                  Happy Hour
                </span>
              </div>
              <p className="text-white/90 text-sm">
                Monday – Friday &nbsp;·&nbsp; 3:00 PM – 6:00 PM
              </p>
              <p className="text-white/60 text-xs mt-1">
                Half-price appetizers, $5 sake, and specialty roll discounts
              </p>
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[rgb(184,152,90)] font-medium mb-4">
              Location
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-white mb-8 leading-tight">
              Find Us in Austin
            </h2>

            {/* Map embed placeholder */}
            <div className="aspect-video bg-white/10 border border-white/20 overflow-hidden mb-6 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.7!2d-97.7376!3d30.3614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIxJzQxLjAiTiA5N8KwNDQnMTUuNCJX!5e0!3m2!1sen!2sus!4v1617123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kitsu Nori location map"
                className="absolute inset-0"
              />
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[rgb(184,152,90)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm">2310 S Lamar Blvd, Suite 102</p>
                  <p className="text-white/60 text-sm">Austin, TX 78704</p>
                </div>
              </div>
              <a
                href="tel:+15125550198"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 text-[rgb(184,152,90)] shrink-0" />
                (512) 555-0198
              </a>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 border border-white text-white text-sm tracking-widest uppercase font-medium hover:bg-white hover:text-[rgb(29,51,98)] transition-all duration-300"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
