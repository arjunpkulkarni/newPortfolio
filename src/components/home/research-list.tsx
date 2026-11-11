"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ResearchArea = "ml" | "systems" | "science" | "teaching";

export const RESEARCH_AREAS: { id: ResearchArea | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ml", label: "AI / ML" },
  { id: "systems", label: "Systems" },
  { id: "science", label: "Physical sciences" },
  { id: "teaching", label: "Teaching" },
];

export type ResearchEntry = {
  key: string;
  areas: ResearchArea[];
  card: ReactNode;
};

export function ResearchList({ items }: { items: ResearchEntry[] }) {
  const [area, setArea] = useState<ResearchArea | "all">("all");

  const filtered =
    area === "all" ? items : items.filter((item) => item.areas.includes(area));

  return (
    <div>
      <div
        className="mb-5 flex flex-wrap gap-1.5"
        role="tablist"
        aria-label="Filter research by area"
      >
        {RESEARCH_AREAS.map((a) => {
          const count =
            a.id === "all"
              ? items.length
              : items.filter((item) => item.areas.includes(a.id as ResearchArea)).length;
          if (a.id !== "all" && count === 0) return null;
          const active = area === a.id;
          return (
            <button
              key={a.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setArea(a.id)}
              className={cn(
                "rounded-full border px-3 py-1 text-[12px] transition-colors sm:text-[13px]",
                active
                  ? "border-foreground/20 bg-foreground text-background"
                  : "border-border/70 bg-card text-muted-foreground hover:border-border hover:text-foreground"
              )}
            >
              {a.label}
              <span className={cn("ml-1.5 tabular-nums", active ? "opacity-70" : "opacity-50")}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <ul className="flex flex-col gap-5">
        {filtered.map((item, i) => (
          <li
            key={item.key}
            className="stack-card rounded-2xl border border-border/70 bg-card p-4 sm:p-5"
            style={{ top: `calc(6.5rem + ${i * 10}px)` }}
          >
            {item.card}
          </li>
        ))}
      </ul>
    </div>
  );
}
