"use client";

import { useState, useEffect } from "react";
import { formatPrice } from "@/lib/utils";
import type { Order, OrderStatus } from "@/types";
import { cn } from "@/lib/utils";

const STATUS_LABELS: Record<OrderStatus, string> = {
  pending: "Pending",
  preparing: "Preparing",
  ready: "Ready",
  picked_up: "Picked Up",
};

const STATUS_COLORS: Record<OrderStatus, string> = {
  pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
  preparing: "bg-blue-50 text-blue-700 border-blue-200",
  ready: "bg-green-50 text-green-700 border-green-200",
  picked_up: "bg-gray-50 text-gray-500 border-gray-200",
};

const NEXT_STATUS: Record<OrderStatus, OrderStatus | null> = {
  pending: "preparing",
  preparing: "ready",
  ready: "picked_up",
  picked_up: null,
};

// Mock data for UI demonstration
const MOCK_ORDERS: Order[] = [
  {
    id: "ord-001",
    customer_name: "Alex Johnson",
    customer_email: "alex@email.com",
    customer_phone: "(512) 555-1234",
    pickup_time: "ASAP (20–30 min)",
    status: "pending",
    total_amount: 54.75,
    stripe_payment_id: null,
    created_at: new Date(Date.now() - 5 * 60000).toISOString(),
  },
  {
    id: "ord-002",
    customer_name: "Maya Patel",
    customer_email: "maya@email.com",
    customer_phone: "(512) 555-5678",
    pickup_time: "12:30 PM",
    status: "preparing",
    total_amount: 88.20,
    stripe_payment_id: null,
    created_at: new Date(Date.now() - 18 * 60000).toISOString(),
  },
];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);
  const [filter, setFilter] = useState<OrderStatus | "all">("all");

  function advanceStatus(orderId: string) {
    setOrders((prev) =>
      prev.map((o) => {
        if (o.id !== orderId) return o;
        const next = NEXT_STATUS[o.status];
        return next ? { ...o, status: next } : o;
      })
    );
  }

  const filtered = filter === "all" ? orders : orders.filter((o) => o.status === filter);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Orders</h1>
          <p className="text-gray-500 text-sm mt-1">{orders.length} orders today</p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="text-sm text-[rgb(29,51,98)] border border-[rgb(29,51,98)] px-4 py-2 hover:bg-[rgb(29,51,98)] hover:text-white transition-colors"
        >
          Refresh
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {(["all", "pending", "preparing", "ready", "picked_up"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={cn(
              "px-3 py-1.5 text-xs uppercase tracking-widest font-medium border transition-all",
              filter === s
                ? "bg-[rgb(29,51,98)] text-white border-[rgb(29,51,98)]"
                : "border-gray-200 text-gray-600 hover:border-[rgb(29,51,98)]"
            )}
          >
            {s === "all" ? "All" : STATUS_LABELS[s]}
          </button>
        ))}
      </div>

      {/* Orders table */}
      <div className="bg-white border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-gray-100 bg-gray-50">
              <tr>
                {["Order", "Customer", "Pickup", "Total", "Status", "Actions"].map((h) => (
                  <th key={h} className="text-left px-5 py-3 text-xs uppercase tracking-widest text-gray-400 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-10 text-center text-gray-400 text-sm">
                    No orders found.
                  </td>
                </tr>
              )}
              {filtered.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50/50">
                  <td className="px-5 py-4">
                    <p className="font-mono text-xs text-gray-500">{order.id}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {new Date(order.created_at).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <p className="font-medium text-gray-900">{order.customer_name}</p>
                    <p className="text-xs text-gray-400">{order.customer_phone}</p>
                  </td>
                  <td className="px-5 py-4 text-gray-600">{order.pickup_time}</td>
                  <td className="px-5 py-4 font-semibold text-gray-900">
                    {formatPrice(order.total_amount)}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={cn(
                        "inline-flex px-2.5 py-1 text-[10px] uppercase tracking-widest font-semibold border rounded-sm",
                        STATUS_COLORS[order.status]
                      )}
                    >
                      {STATUS_LABELS[order.status]}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    {NEXT_STATUS[order.status] && (
                      <button
                        onClick={() => advanceStatus(order.id)}
                        className="text-xs text-[rgb(29,51,98)] border border-[rgb(29,51,98)]/30 px-3 py-1.5 hover:bg-[rgb(29,51,98)] hover:text-white transition-colors"
                      >
                        Mark {STATUS_LABELS[NEXT_STATUS[order.status]!]}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
