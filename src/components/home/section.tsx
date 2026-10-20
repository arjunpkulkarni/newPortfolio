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
    <section id={id} aria-label={label} className={cn("scroll-mt-24 px-5 py-10 sm:px-8 sm:py-12", className)}>
      <h2 className="section-label">{label}</h2>
      <div className="section-rule" />
      {children}
    </section>
  );
}
