"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface Investor {
  name: string;
  logoUrl?: string | import("next/image").StaticImageData;
  href?: string;
}

interface BackedByProps {
  investors: readonly Investor[];
  className?: string;
}

export const BackedBy = ({ investors, className }: BackedByProps) => {
  if (!investors || investors.length === 0) return null;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        Backed by
      </span>
      <div className="flex flex-wrap items-center gap-2">
        {investors.map((investor, index) => {
          const chip = (
            <div className="flex items-center gap-1.5 rounded-full border bg-background/60 py-1 pl-1 pr-2.5 transition-colors hover:bg-muted">
              <Avatar className="size-5 border">
                {investor.logoUrl && (
                  <AvatarImage
                    src={
                      typeof investor.logoUrl === "string"
                        ? investor.logoUrl
                        : investor.logoUrl.src
                    }
                    alt={investor.name}
                    className="object-cover"
                  />
                )}
                <AvatarFallback className="text-[9px]">
                  {investor.name[0]}
                </AvatarFallback>
              </Avatar>
              <span className="text-[11px] font-medium text-foreground whitespace-nowrap">
                {investor.name}
              </span>
            </div>
          );

          return investor.href ? (
            <a
              key={index}
              href={investor.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {chip}
            </a>
          ) : (
            <div key={index}>{chip}</div>
          );
        })}
      </div>
    </div>
  );
};
