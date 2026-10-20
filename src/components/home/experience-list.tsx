"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ExperienceItem } from "@/components/home/experience-item";
import { cn } from "@/lib/utils";
import type { Investor } from "@/components/backed-by";
import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

export type ExperienceRoute =
  | "agents"
  | "healthcare"
  | "product"
  | "systems"
  | "data";

export const EXPERIENCE_ROUTES: { id: ExperienceRoute | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "agents", label: "Agents" },
  { id: "healthcare", label: "Healthcare" },
  { id: "product", label: "Product" },
  { id: "systems", label: "Systems" },
  { id: "data", label: "Data" },
];

export type ExperienceEntry = {
  company: string;
  href?: string;
  title: string;
  logo?: StaticImageData | string;
  start?: string;
  end?: string;
  field?: string;
  outcome?: string;
  did?: string;
  skills?: string[];
  image?: StaticImageData | string;
  video?: string;
  videoPoster?: string;
  brand?: { name: string; accent: string };
  demo?: ReactNode;
  backedBy?: readonly Investor[];
  routes: ExperienceRoute[];
};

export function ExperienceList({ items }: { items: ExperienceEntry[] }) {
  const [route, setRoute] = useState<ExperienceRoute | "all">("all");

  const filtered =
    route === "all" ? items : items.filter((item) => item.routes.includes(route));

  return (
    <div>
      <div
        className="mb-5 flex flex-wrap gap-1.5"
        role="tablist"
        aria-label="Filter experience by type of work"
      >
        {EXPERIENCE_ROUTES.map((r) => {
          const count =
            r.id === "all"
              ? items.length
              : items.filter((item) => item.routes.includes(r.id)).length;
          if (r.id !== "all" && count === 0) return null;
          const active = route === r.id;
          return (
            <button
              key={r.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setRoute(r.id)}
              className={cn(
                "rounded-full border px-3 py-1 text-[12px] transition-colors sm:text-[13px]",
                active
                  ? "border-foreground/20 bg-foreground text-background"
                  : "border-border/70 bg-card text-muted-foreground hover:border-border hover:text-foreground"
              )}
            >
              {r.label}
              <span className={cn("ml-1.5 tabular-nums", active ? "opacity-70" : "opacity-50")}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <ul className="flex flex-col gap-5">
        {filtered.map((item, i) => {
          const { routes: _routes, ...rest } = item;
          return <ExperienceItem key={item.company} {...rest} stackIndex={i} />;
        })}
      </ul>

      <a
        href="/work"
        className="mt-8 inline-flex items-center gap-1 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
      >
        Full experience and research
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
