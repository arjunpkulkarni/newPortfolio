import { cn } from "@/lib/utils";

export interface Partner {
  name: string;
  href?: string;
}

interface PartneredWithProps {
  partners: readonly Partner[];
  className?: string;
}

export function PartneredWith({ partners, className }: PartneredWithProps) {
  if (!partners || partners.length === 0) return null;

  return (
    <div className={cn("flex flex-wrap items-baseline gap-x-1.5 gap-y-1", className)}>
      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        Partnered with
      </span>
      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-foreground/90">
        {partners.map((partner, index) => (
          <span key={`${partner.name}-${index}`} className="inline-flex items-center gap-1.5">
            {index > 0 && (
              <span className="text-muted-foreground/40 select-none" aria-hidden>
                ·
              </span>
            )}
            {partner.href ? (
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-2"
              >
                {partner.name}
              </a>
            ) : (
              <span>{partner.name}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
