import { cn } from "@/lib/utils";

export function Section({
  id,
  label,
  children,
  className,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn("scroll-mt-24 px-5 py-10 sm:px-8 sm:py-12", className)}
    >
      {/* Flush under the floating nav (top-3 + h-11 ≈ 3.5rem; sm: top-4 + h-11 ≈ 3.75rem). */}
      <div className="sticky top-14 z-20 -mx-5 bg-card px-5 pb-2.5 pt-2 sm:top-[3.75rem] sm:-mx-8 sm:px-8">
        <h2 className="section-label">{label}</h2>
        <div className="mt-1.5 h-px w-full bg-border" />
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
