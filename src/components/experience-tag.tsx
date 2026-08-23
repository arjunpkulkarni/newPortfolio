import { cn } from "@/lib/utils";

interface ExperienceTagProps {
  tag: string;
  className?: string;
}

export function ExperienceTag({ tag, className }: ExperienceTagProps) {
  if (!tag) return null;

  const parts = tag.split(" + ").map((part) => part.trim()).filter(Boolean);

  return (
    <div
      className={cn(
        "mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] leading-none text-muted-foreground",
        className
      )}
    >
      {parts.map((part, index) => (
        <span key={`${part}-${index}`} className="inline-flex items-center gap-1.5">
          {index > 0 && (
            <span className="text-muted-foreground/40 select-none" aria-hidden>
              ·
            </span>
          )}
          <span className="tracking-wide">{part}</span>
        </span>
      ))}
    </div>
  );
}
