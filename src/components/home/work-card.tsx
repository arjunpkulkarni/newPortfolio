import Image from "next/image";
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
        <div className="min-w-0 flex-1 space-y-1">
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
          {study.orgs && study.orgs.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              {study.orgs.map((org) => (
                <span
                  key={org.name}
                  className="flex items-center gap-1.5 rounded-full border border-border/70 bg-background/60 py-0.5 pl-0.5 pr-2.5"
                >
                  {org.logo ? (
                    <Image
                      src={org.logo}
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5 rounded-full border border-border/70 bg-white object-contain"
                    />
                  ) : (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-border/70 bg-white text-[9px] font-semibold text-muted-foreground">
                      {org.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  )}
                  <span className="whitespace-nowrap text-[11px] font-medium text-foreground">{org.name}</span>
                </span>
              ))}
            </div>
          )}
        </div>
        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>
    </Link>
  );
}
