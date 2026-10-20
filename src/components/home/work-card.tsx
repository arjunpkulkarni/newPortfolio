import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Showcase } from "@/components/home/showcase";
import type { CaseStudy } from "@/data/case-studies";

export function WorkCard({ study, priority }: { study: CaseStudy; priority?: boolean }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      aria-label={`${study.name} case study`}
      className="group block overflow-hidden rounded-2xl border border-border/70 bg-card transition-[border-color,box-shadow] duration-300 hover:border-border hover:shadow-[0_12px_40px_-18px_rgba(27,26,23,0.25)]"
    >
      <Showcase spec={study.showcase} alt={`${study.name} product screenshots`} priority={priority} />
      <div className="flex items-start justify-between gap-4 border-t border-border/60 px-4 py-4 sm:px-5">
        <div className="min-w-0 space-y-1">
          <p className="text-[15px] leading-snug text-foreground">
            <span className="font-medium">{study.name}</span>
            <span className="text-muted-foreground">
              {" "}
              · {study.role} · {study.category}
            </span>
          </p>
          <p className="text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
            {study.blurb}
          </p>
        </div>
        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>
    </Link>
  );
}
