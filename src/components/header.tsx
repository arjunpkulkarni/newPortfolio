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
          h-14
          items-center // Vertically center icons within the header
          rounded-full // Make the header fully rounded
          border
          border-border/40
          bg-background/95
          px-4 // Horizontal padding inside the rounded header
          shadow-lg // Add a subtle shadow for depth
          backdrop-blur
          supports-[backdrop-filter]:bg-background/60
          pointer-events-auto // Allow clicks on this header element and its children
        "
      >
        {/* Container for all icons, arranged in a row */}
        <nav className="flex items-center space-x-1 sm:space-x-2">
          {/* Navigation icons from DATA.navbar */}
          {DATA.navbar.map((item) => {
            const IconComponent = item.icon as React.ElementType;
            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-center p-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    )}
                  >
                    <IconComponent className="h-5 w-5" />
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
                      "flex items-center justify-center p-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    )}
                  >
                    <IconComponent className="h-5 w-5" />
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
