import Link from "next/link";

export default function HappyHourBanner() {
  return (
    <div className="bg-[rgb(184,152,90)] text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <span className="text-xs tracking-[0.3em] uppercase font-semibold">
          Now Open
        </span>
        <span className="text-white/60 hidden sm:inline">·</span>
        <span className="text-sm text-white/90">
          Dinner nightly Tue–Sun &nbsp;·&nbsp; 2310 S Lamar Blvd, Austin
        </span>
        <span className="text-white/60 hidden sm:inline">·</span>
        <Link
          href="/menu"
          className="text-xs underline underline-offset-2 hover:text-white/80 transition-colors shrink-0"
        >
          View the menu →
        </Link>
      </div>
    </div>
  );
}
