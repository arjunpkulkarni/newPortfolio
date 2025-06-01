import Link from "next/link";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility for classnames
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Added Tooltip imports

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between ">
        <div className="flex items-center space-x-2">
          {/* Optionally, add a brand/logo link here */}
          {/* <Link href="/" className="font-bold">
            {DATA.name.split(" ")[0]}
          </Link> */}
        </div>

        <nav className="flex items-center space-x-2 lg:space-x-4 mx-auto"> {/* Reduced space-x for icon-only nav */}
          {DATA.navbar.map((item) => {
            const IconComponent = item.icon as React.ElementType | null | undefined;
            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-center p-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary", // Added p-2 for better click area, justify-center
                      // Add active link styling here if needed
                    )}
                  >
                    {IconComponent && <IconComponent className="h-5 w-5" />} {/* Removed mr-2, adjusted size if needed */}
                    <span className="sr-only">{item.label}</span> {/* Label for screen readers */}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </nav>

        <div className="flex items-center space-x-3 ">
          {Object.values(DATA.contact.social).map((socialLink) => {
            if (socialLink.navbar) {
              const IconComponent = socialLink.icon as React.ElementType;
              return (
                <Tooltip key={socialLink.name}> {/* Added Tooltip for social icons too for consistency */}
                  <TooltipTrigger asChild>
                    <Link
                      href={socialLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center justify-center p-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary" // Added p-2, justify-center
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
            }
            return null;
          })}
        </div>
      </div>
    </header>
  );
} 