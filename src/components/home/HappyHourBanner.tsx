import Link from "next/link";
import { Clock } from "lucide-react";

export default function HappyHourBanner() {
  return (
    <div className="bg-[rgb(29,51,98)] text-white py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2.5">
          <Clock className="w-4 h-4 text-[rgb(184,152,90)] shrink-0" />
          <span className="text-xs tracking-[0.25em] uppercase text-[rgb(184,152,90)] font-semibold">
            Happy Hour
          </span>
          <span className="text-white/30 hidden sm:inline">·</span>
          <span className="text-sm text-white/90">
            Monday – Friday &nbsp;·&nbsp; 3:00 PM – 6:00 PM
          </span>
        </div>
        <span className="hidden sm:inline text-white/30">|</span>
        <span className="text-sm text-white/70">
          Half-price appetizers, $5 sake, and discounted specialty rolls
        </span>
        <Link
          href="/menu#happy-hour"
          className="text-xs text-[rgb(184,152,90)] hover:text-[rgb(212,185,130)] underline underline-offset-2 transition-colors shrink-0"
        >
          See details →
        </Link>
      </div>
    </div>
  );
}
