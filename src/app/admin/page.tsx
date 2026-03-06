import Link from "next/link";
import { ShoppingBag, UtensilsCrossed, MessageSquare, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back. Here&apos;s what&apos;s happening today.</p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        {[
          { label: "Pending Orders", value: "—", icon: ShoppingBag, href: "/admin/orders" },
          { label: "Menu Items", value: "26", icon: UtensilsCrossed, href: "/admin/menu" },
          { label: "New Inquiries", value: "—", icon: MessageSquare, href: "/admin/inquiries" },
        ].map(({ label, value, icon: Icon, href }) => (
          <Link
            key={label}
            href={href}
            className="bg-white border border-gray-100 p-6 hover:border-[rgb(29,51,98)]/30 transition-colors group"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">{label}</p>
                <p className="text-3xl font-semibold text-gray-900">{value}</p>
              </div>
              <Icon className="w-5 h-5 text-[rgb(29,51,98)]/30 group-hover:text-[rgb(29,51,98)] transition-colors" />
            </div>
          </Link>
        ))}
      </div>

      {/* Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {[
          { href: "/admin/orders", label: "Manage Orders", desc: "View and update order statuses" },
          { href: "/admin/menu", label: "Edit Menu", desc: "Add, edit, or disable menu items" },
          { href: "/admin/inquiries", label: "View Inquiries", desc: "Read and respond to event requests" },
        ].map(({ href, label, desc }) => (
          <Link
            key={href}
            href={href}
            className="bg-white border border-gray-100 p-5 hover:border-[rgb(29,51,98)]/30 transition-colors"
          >
            <h3 className="font-medium text-gray-900 mb-1">{label}</h3>
            <p className="text-sm text-gray-400">{desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
