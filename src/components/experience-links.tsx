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
    <div className={cn("flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs sm:text-sm", className)}>
      {links.map((link, index) => (
        <span key={`${link.name}-${index}`} className="inline-flex items-center gap-1.5">
          {index > 0 && (
            <span className="text-muted-foreground/40 select-none" aria-hidden>
              ·
            </span>
          )}
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 font-semibold hover:underline"
          >
            {link.name}
            <ArrowUpRight className="size-3.5" />
          </Link>
        </span>
      ))}
    </div>
  );
}
