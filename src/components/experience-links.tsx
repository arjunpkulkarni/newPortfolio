import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ExperienceLink {
  name: string;
  href: string;
}

interface ExperienceLinksProps {
  links: readonly ExperienceLink[];
  className?: string;
}

export function ExperienceLinks({ links, className }: ExperienceLinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <div className={cn("mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1.5", className)}>
      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {links.length === 1 ? "Product" : "Products"}
      </span>
      <div className="flex flex-wrap items-center gap-1.5">
        {links.map((link, index) => (
          <Link
            key={`${link.name}-${index}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-border/50 bg-muted/20 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:border-border hover:bg-muted/40 hover:text-foreground"
          >
            {link.name}
            <ArrowUpRight className="size-3 opacity-60" />
          </Link>
        ))}
      </div>
    </div>
  );
}
