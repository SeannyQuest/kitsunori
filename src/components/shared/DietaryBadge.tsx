import { cn } from "@/lib/utils";
import type { DietaryTag } from "@/types";

const tagConfig: Record<DietaryTag, { label: string; color: string; title: string }> = {
  GF: { label: "GF", color: "bg-emerald-50 text-emerald-700 border-emerald-200", title: "Gluten-Free" },
  V: { label: "V", color: "bg-green-50 text-green-700 border-green-200", title: "Vegetarian" },
  VG: { label: "VG", color: "bg-lime-50 text-lime-700 border-lime-200", title: "Vegan" },
  SPICY: { label: "🌶", color: "bg-red-50 text-red-600 border-red-200", title: "Spicy" },
  NUTS: { label: "⚠ Nuts", color: "bg-amber-50 text-amber-700 border-amber-200", title: "Contains Nuts" },
  DF: { label: "DF", color: "bg-sky-50 text-sky-700 border-sky-200", title: "Dairy-Free" },
};

export default function DietaryBadge({ tag }: { tag: DietaryTag }) {
  const config = tagConfig[tag];
  return (
    <span
      title={config.title}
      className={cn(
        "inline-flex items-center px-1.5 py-0.5 text-[10px] font-semibold border rounded-sm tracking-wide",
        config.color
      )}
    >
      {config.label}
    </span>
  );
}
