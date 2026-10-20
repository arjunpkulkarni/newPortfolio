"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";

const LINKS = [
  { id: "story", label: "Story" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState<string | null>(null);

  // Highlight the section currently in view on the homepage.
  useEffect(() => {
    if (!isHome) {
      setActive(pathname.startsWith("/work") ? "work" : null);
      return;
    }
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome, pathname]);

  return (
    <nav
      aria-label="Main"
      className="sticky top-3 z-50 mx-auto mb-8 flex h-11 w-full max-w-[720px] items-center justify-between rounded-full border border-border/80 bg-[hsl(var(--background)/0.78)] pl-4 pr-1.5 backdrop-blur-md sm:top-4 sm:mb-10 sm:pl-5"
    >
      <Link
        href="/#intro"
        className="min-w-0 truncate pr-2 text-[13px] font-medium tracking-tight text-foreground sm:text-sm"
      >
        {DATA.name}
      </Link>
      <div className="flex items-center">
        {LINKS.map((link) => (
          <Link
            key={link.id}
            href={`/#${link.id}`}
            className={cn(
              "rounded-full px-1.5 py-1.5 text-[12px] transition-colors min-[400px]:px-2 sm:px-3 sm:text-[13px]",
              active === link.id
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
