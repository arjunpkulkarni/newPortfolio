import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import { LogoReveal } from "@/components/home/logo-reveal";
import { HighlightSkills } from "@/lib/highlight-skills";
import { BackedBy, type Investor } from "@/components/backed-by";
import { cn } from "@/lib/utils";

type ExperienceItemProps = {
  company: string;
  href?: string;
  title: string;
  logo?: StaticImageData | string;
  start?: string;
  end?: string;
  field?: string; // what space the company is in
  outcome?: string; // the result, in one line
  did?: string; // what I did, in one line
  skills?: string[];
  image?: StaticImageData | string;
  imageAlt?: string;
  video?: string;
  videoPoster?: string;
  stackIndex?: number; // position in a sticky stack of cards
  brand?: { name: string; accent: string }; // drives the logo animation when there's no video or image
  demo?: ReactNode; // animated product demo; shown instead of any other media
  backedBy?: readonly Investor[];
};

export function ExperienceItem({
  company,
  href,
  title,
  logo,
  start,
  end,
  field,
  outcome,
  did,
  skills,
  image,
  imageAlt,
  video,
  videoPoster,
  stackIndex,
  brand,
  demo,
  backedBy,
}: ExperienceItemProps) {
  const dates =
    start || end
      ? `${start || ""}${start && end ? " – " : ""}${end || ""}`.trim()
      : "";

  const hasMedia = Boolean(demo || video || image || brand);

  const name = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[15px] font-medium text-foreground underline-offset-2 hover:underline"
    >
      {company}
    </a>
  ) : (
    <p className="text-[15px] font-medium text-foreground">{company}</p>
  );

  return (
    <li
      className={cn(
        "overflow-hidden rounded-2xl border border-border/70 bg-card",
        stackIndex !== undefined && "stack-card",
        !hasMedia && "px-4 py-4 sm:px-5 sm:py-5"
      )}
      style={
        stackIndex !== undefined
          ? { top: `calc(6.5rem + ${stackIndex * 10}px)` }
          : undefined
      }
    >
      {hasMedia && (
        <div className="overflow-hidden bg-secondary/40">
          {demo ? (
            demo
          ) : video ? (
            <div className="relative aspect-[2/1] w-full bg-white">
              <video
                src={video}
                poster={videoPoster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={imageAlt || `${company} product`}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          ) : brand ? (
            <LogoReveal logo={logo} name={brand.name} accent={brand.accent} />
          ) : (
            <Image
              src={image!}
              alt={imageAlt || `${company} product`}
              sizes="(max-width: 760px) 100vw, 720px"
              className="h-auto w-full"
            />
          )}
        </div>
      )}

      <div className={cn(hasMedia && "border-t border-border/60 px-4 py-4 sm:px-5 sm:py-5")}>
        <div className="flex items-center gap-3">
          {logo && (
            <Image
              src={logo}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 rounded-xl border border-border/70 bg-white object-contain p-1"
            />
          )}
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between gap-3">
              {name}
              {dates && (
                <p className="shrink-0 text-[12px] tabular-nums text-muted-foreground">
                  {dates}
                </p>
              )}
            </div>
            <p className="text-[13px] text-muted-foreground">
              {title}
              {field && <> · {field}</>}
            </p>
          </div>
        </div>

        {outcome && (
          <p className="mt-3 text-[14px] font-medium text-foreground sm:text-[15px]">
            <HighlightSkills text={outcome} />
          </p>
        )}
        {did && (
          <p className="mt-1 text-[13px] leading-relaxed text-foreground/75 sm:text-sm">
            <HighlightSkills text={did} />
          </p>
        )}

        {skills && skills.length > 0 && (
          <div className="mt-3 flex flex-nowrap gap-1.5 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {skills.map((skill) => (
              <span key={skill} className="chip shrink-0">
                {skill}
              </span>
            ))}
          </div>
        )}

        {backedBy && backedBy.length > 0 && (
          <BackedBy investors={backedBy} className="mt-4" />
        )}
      </div>
    </li>
  );
}
