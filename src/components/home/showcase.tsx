import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import type { ShowcaseSpec } from "@/data/case-studies";

// Product imagery on a backdrop: three phones, a browser window, or a full-bleed shot.
export function Showcase({
  spec,
  alt,
  priority,
  className,
}: {
  spec: ShowcaseSpec;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  if (spec.kind === "video") {
    return (
      <div
        className={cn("relative aspect-[16/10] w-full overflow-hidden", className)}
        style={{ background: spec.background }}
      >
        <video
          src={spec.src}
          poster={spec.poster}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
          aria-label={alt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
      </div>
    );
  }

  if (spec.kind === "image") {
    return (
      <div
        className={cn("relative aspect-[16/10] w-full overflow-hidden", className)}
        style={{ background: spec.background }}
      >
        <Image
          src={spec.image}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 760px) 100vw, 720px"
          className={cn(
            "transition-transform duration-700 ease-out group-hover:scale-[1.025]",
            spec.fit === "contain" ? "object-contain" : "object-cover"
          )}
        />
      </div>
    );
  }

  if (spec.kind === "browser") {
    return (
      <div
        className={cn("relative aspect-[16/10] w-full overflow-hidden", className)}
        style={{ background: spec.background }}
      >
        <div className="absolute left-[7%] right-[7%] top-[11%] overflow-hidden rounded-t-xl border border-black/10 bg-white shadow-[0_24px_60px_-20px_rgba(30,30,60,0.35)] transition-transform duration-700 ease-out group-hover:-translate-y-1.5">
          <div className="flex h-6 items-center gap-1.5 border-b border-black/5 bg-[#f6f6f7] px-3 sm:h-7">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          </div>
          <Image
            src={spec.screen}
            alt={alt}
            priority={priority}
            sizes="(max-width: 760px) 90vw, 640px"
            className="h-auto w-full"
          />
        </div>
      </div>
    );
  }

  if (spec.kind === "panels") {
    return (
      <div
        className={cn("relative flex aspect-[16/10] w-full items-center justify-center gap-[3%] overflow-hidden", className)}
        style={{ background: spec.background }}
      >
        {spec.panels.map((panel, i) => (
          <div
            key={i}
            className="relative aspect-[9/19.5] h-[86%] overflow-hidden rounded-[6%/2.8%] bg-white shadow-[0_18px_40px_-18px_rgba(60,45,25,0.35)] ring-1 ring-black/5 transition-transform duration-700 ease-out group-hover:-translate-y-1.5"
          >
            <Image
              src={panel}
              alt={i === 1 ? alt : ""}
              fill
              priority={priority}
              sizes="(max-width: 760px) 30vw, 220px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center gap-3 overflow-hidden px-8 py-6 sm:aspect-[16/10] sm:flex-row sm:justify-center sm:gap-[3%] sm:px-[6%] sm:py-0",
        className
      )}
      style={{ background: spec.background }}
    >
      {spec.screens.map((screen, i) => (
        <Phone
          key={i}
          image={screen}
          alt={i === 1 ? alt : ""}
          priority={priority && i === 1}
          className="w-[48%] max-w-[220px] sm:h-[86%] sm:w-auto"
        />
      ))}
    </div>
  );
}

function Phone({
  image,
  alt,
  className,
  priority,
}: {
  image: StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] overflow-hidden rounded-[11%/5%] border-[3px] border-[#111] bg-[#111] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)] transition-transform duration-700 ease-out group-hover:-translate-y-1 sm:border-[5px]",
        className
      )}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 760px) 48vw, 220px"
        className="rounded-[9%/4%] object-cover object-top"
      />
    </div>
  );
}
