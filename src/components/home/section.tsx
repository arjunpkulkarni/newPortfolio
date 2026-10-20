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
      {/* Sticks under the floating nav until this section scrolls away. */}
      <div className="sticky top-16 z-20 -mx-5 bg-card/95 px-5 pb-6 pt-1 backdrop-blur-md sm:top-[4.5rem] sm:-mx-8 sm:px-8">
        <h2 className="section-label">{label}</h2>
        <div className="mt-2 h-px w-full bg-border" />
      </div>
      {children}
    </section>
  );
}
