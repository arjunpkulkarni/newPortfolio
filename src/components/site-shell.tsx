import { SiteNav } from "@/components/site-nav";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background px-3 pb-20 pt-3 sm:px-6 sm:pt-5 md:px-8">
      <div className="mx-auto w-full max-w-[740px]">
        <SiteNav />
        {/* overflow visible so section labels / stack-cards can stick while scrolling */}
        <div className="rounded-[24px] border border-border/70 bg-card shadow-[0_1px_2px_rgba(27,26,23,0.04)]">
          {children}
        </div>
      </div>
    </div>
  );
}
