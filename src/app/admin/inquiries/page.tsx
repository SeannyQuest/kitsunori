"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Eye, CheckCircle } from "lucide-react";
import type { Inquiry } from "@/types";

const MOCK_INQUIRIES: Inquiry[] = [
  {
    id: "inq-001",
    name: "Sarah & Marcus Williams",
    email: "sarah.williams@email.com",
    phone: "(512) 555-9012",
    event_date: "2026-04-15",
    party_size: 40,
    message: "We are planning our wedding rehearsal dinner and would love to discuss a private buy-out for April 15th. Looking for a 5-course omakase with sake pairings.",
    created_at: new Date(Date.now() - 2 * 3600000).toISOString(),
    is_read: false,
  },
  {
    id: "inq-002",
    name: "TechCorp Austin",
    email: "events@techcorp.com",
    phone: "(512) 555-3456",
    event_date: "2026-03-28",
    party_size: 20,
    message: "Team dinner for 20 people. Would like a set menu and open bar. Can you accommodate dietary restrictions?",
    created_at: new Date(Date.now() - 24 * 3600000).toISOString(),
    is_read: true,
  },
];

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(MOCK_INQUIRIES);
  const [selected, setSelected] = useState<Inquiry | null>(null);

  function markRead(id: string) {
    setInquiries((prev) =>
      prev.map((i) => (i.id === id ? { ...i, is_read: true } : i))
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Inquiries</h1>
        <p className="text-gray-500 text-sm mt-1">
          {inquiries.filter((i) => !i.is_read).length} unread
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* List */}
        <div className="space-y-3">
          {inquiries.map((inq) => (
            <button
              key={inq.id}
              onClick={() => { setSelected(inq); markRead(inq.id); }}
              className={cn(
                "w-full text-left p-5 border bg-white hover:border-[rgb(29,51,98)]/30 transition-colors",
                selected?.id === inq.id ? "border-[rgb(29,51,98)]" : "border-gray-100",
                !inq.is_read && "border-l-4 border-l-[rgb(184,152,90)]"
              )}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <p className={cn("font-medium", !inq.is_read ? "text-gray-900" : "text-gray-600")}>
                    {inq.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{inq.email}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-gray-400">
                    {new Date(inq.created_at).toLocaleDateString()}
                  </p>
                  {!inq.is_read && (
                    <span className="inline-block mt-1 w-2 h-2 bg-[rgb(184,152,90)] rounded-full" />
                  )}
                </div>
              </div>
              <div className="flex gap-3 text-xs text-gray-400">
                <span>📅 {inq.event_date}</span>
                <span>👥 {inq.party_size} guests</span>
              </div>
              <p className="text-xs text-gray-400 mt-2 line-clamp-2">{inq.message}</p>
            </button>
          ))}
        </div>

        {/* Detail */}
        <div>
          {selected ? (
            <div className="bg-white border border-gray-100 p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{selected.name}</h2>
                  <a href={`mailto:${selected.email}`} className="text-sm text-[rgb(29,51,98)] hover:underline">
                    {selected.email}
                  </a>
                  {selected.phone && (
                    <p className="text-sm text-gray-400 mt-0.5">{selected.phone}</p>
                  )}
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Event Date</p>
                  <p className="font-semibold text-gray-900">{selected.event_date}</p>
                </div>
                <div className="bg-gray-50 p-4">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Party Size</p>
                  <p className="font-semibold text-gray-900">{selected.party_size} guests</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Message</p>
                <p className="text-sm text-gray-600 leading-relaxed">{selected.message}</p>
              </div>

              <div className="flex gap-3">
                <a
                  href={`mailto:${selected.email}?subject=Re: Private Event Inquiry`}
                  className="flex-1 py-3 bg-[rgb(29,51,98)] text-white text-sm text-center tracking-widest uppercase font-medium hover:bg-[rgb(20,37,72)] transition-colors"
                >
                  Reply via Email
                </a>
                {selected.phone && (
                  <a
                    href={`tel:${selected.phone}`}
                    className="px-5 py-3 border border-gray-200 text-sm text-gray-600 hover:border-[rgb(29,51,98)] transition-colors"
                  >
                    Call
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white border border-gray-100 p-12 text-center text-gray-400">
              <Eye className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="text-sm">Select an inquiry to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
