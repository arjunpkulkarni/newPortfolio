import Link from "next/link";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils"; // utility for merging class names
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center pointer-events-none">
      <div
        className="
          relative // For tooltips to be positioned correctly relative to this block
          flex
          h-12 md:h-14
          items-center // Vertically center icons within the header
          rounded-2xl // Make the header fully rounded
          border
          border-border/40 ring-1 ring-border/30
          bg-background/60
          w-[40vw] sm:w-[36vw] md:w-[30vw] max-w-xl
          px-4 md:px-6 // Horizontal padding inside the rounded header
          shadow-2xl // Add a stronger shadow for depth
          backdrop-blur-2xl backdrop-saturate-150
          supports-[backdrop-filter]:bg-background/40
          transition-all duration-500 ease-out will-change-transform
          hover:scale-[1.01]
          pointer-events-auto // Allow clicks on this header element and its children
        "
      >
        {/* Container for all icons, arranged in a row */}
        <nav className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 mx-auto">
          {/* Navigation icons from DATA.navbar */}
          {DATA.navbar.map((item) => {
            const IconComponent = item.icon as React.ElementType;
            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-center rounded-full p-2.5 md:p-3 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110 active:scale-95"
                    )}
                  >
                    <IconComponent className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300" />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}

          {/* Separator */}
          <div className="h-6 w-px bg-muted-foreground/50 mx-2"></div>

          {/* Social icons (only the ones with navbar: true) */}
          {Object.values(DATA.contact.social).map((socialLink) => {
            if (!socialLink.navbar) return null;
            const IconComponent = socialLink.icon as React.ElementType;
            return (
              <Tooltip key={socialLink.name}>
                <TooltipTrigger asChild>
                  <Link
                    href={socialLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center justify-center rounded-full p-2.5 md:p-3 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110 active:scale-95"
                    )}
                  >
                    <IconComponent className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300" />
                    <span className="sr-only">{socialLink.name}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{socialLink.name}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
