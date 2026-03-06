"use client";

import { useState } from "react";
import { menuCategories, menuItems } from "@/lib/menu-data";
import { formatPrice, cn } from "@/lib/utils";
import { Plus, Edit2, Eye, EyeOff } from "lucide-react";
import type { MenuItem } from "@/types";

export default function AdminMenuPage() {
  const [items, setItems] = useState<MenuItem[]>(menuItems);
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  function toggleAvailability(id: string) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, is_available: !item.is_available } : item
      )
    );
  }

  const filtered = items.filter((i) => i.category_id === activeCategory);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Menu Management</h1>
          <p className="text-gray-500 text-sm mt-1">{items.length} total items</p>
        </div>
        <button className="flex items-center gap-2 text-sm bg-[rgb(29,51,98)] text-white px-4 py-2 hover:bg-[rgb(20,37,72)] transition-colors">
          <Plus className="w-4 h-4" />
          Add Item
        </button>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 flex-wrap mb-6">
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "px-4 py-2 text-xs uppercase tracking-widest font-medium border transition-all",
              activeCategory === cat.id
                ? "bg-[rgb(29,51,98)] text-white border-[rgb(29,51,98)]"
                : "border-gray-200 text-gray-600 hover:border-[rgb(29,51,98)]"
            )}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Items table */}
      <div className="bg-white border border-gray-100">
        <table className="w-full text-sm">
          <thead className="border-b border-gray-100 bg-gray-50">
            <tr>
              {["Name", "Description", "Price", "Tags", "Available", ""].map((h) => (
                <th key={h} className="text-left px-5 py-3 text-xs uppercase tracking-widest text-gray-400 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((item) => (
              <tr key={item.id} className={cn("hover:bg-gray-50/50", !item.is_available && "opacity-50")}>
                <td className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.name}
                </td>
                <td className="px-5 py-4 text-gray-500 max-w-xs">
                  <p className="truncate text-xs">{item.description}</p>
                </td>
                <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">
                  {formatPrice(item.price)}
                </td>
                <td className="px-5 py-4">
                  <div className="flex flex-wrap gap-1">
                    {item.dietary_tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-5 py-4">
                  <button
                    onClick={() => toggleAvailability(item.id)}
                    className={cn(
                      "flex items-center gap-1.5 text-xs font-medium transition-colors",
                      item.is_available ? "text-green-600" : "text-gray-400"
                    )}
                    title={item.is_available ? "Mark unavailable" : "Mark available"}
                  >
                    {item.is_available ? (
                      <><Eye className="w-3.5 h-3.5" /> Available</>
                    ) : (
                      <><EyeOff className="w-3.5 h-3.5" /> Hidden</>
                    )}
                  </button>
                </td>
                <td className="px-5 py-4">
                  <button className="text-[rgb(29,51,98)] hover:text-[rgb(20,37,72)] transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
