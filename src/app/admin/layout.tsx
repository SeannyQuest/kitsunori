import Link from "next/link";
import { LayoutDashboard, ShoppingBag, UtensilsCrossed, MessageSquare } from "lucide-react";

const adminLinks = [
  { href: "/admin/orders", label: "Orders", icon: ShoppingBag },
  { href: "/admin/menu", label: "Menu", icon: UtensilsCrossed },
  { href: "/admin/inquiries", label: "Inquiries", icon: MessageSquare },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-[rgb(29,51,98)] text-white flex flex-col shrink-0">
        <div className="px-5 py-6 border-b border-white/10">
          <Link href="/" className="block">
            <p className="font-serif text-lg tracking-wider text-white">Kitsu Nori</p>
            <p className="text-white/40 text-[10px] tracking-widest uppercase mt-0.5">
              Admin Portal
            </p>
          </Link>
        </div>
        <nav className="flex-1 py-4">
          {adminLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="px-5 py-4 border-t border-white/10">
          <Link
            href="/"
            className="text-xs text-white/40 hover:text-white/70 transition-colors"
          >
            ← Back to website
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}
