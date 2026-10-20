import Image, { type StaticImageData } from "next/image";

type ExperienceItemProps = {
  company: string;
  href?: string;
  title: string;
  meta?: string;
  metric?: string;
  start?: string;
  end?: string;
  bullets: string[];
  skills?: string[];
  image?: StaticImageData | string;
  imageAlt?: string;
  video?: string;
  videoPoster?: string;
};

export function ExperienceItem({
  company,
  href,
  title,
  meta,
  metric,
  start,
  end,
  bullets,
  skills,
  image,
  imageAlt,
  video,
  videoPoster,
}: ExperienceItemProps) {
  const dates =
    start || end
      ? `${start || ""}${start && end ? " – " : ""}${end || ""}`.trim()
      : "";

  return (
    <li className="py-6 first:pt-0 last:pb-0">
      {(video || image) && (
        <div className="mb-4 overflow-hidden rounded-2xl border border-border/70 bg-secondary/40">
          <div className="relative aspect-[16/10] w-full">
            {video ? (
              <video
                src={video}
                poster={videoPoster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={imageAlt || `${company} product`}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            ) : (
              <Image
                src={image!}
                alt={imageAlt || `${company} product`}
                fill
                sizes="(max-width: 760px) 100vw, 720px"
                className="object-cover object-top"
              />
            )}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <div>
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-foreground hover:underline underline-offset-2"
            >
              {company}
            </a>
          ) : (
            <p className="text-[15px] font-medium text-foreground">{company}</p>
          )}
          <p className="text-[13px] text-foreground/80 sm:text-sm">{title}</p>
          {metric && (
            <p className="mt-1 text-[13px] font-medium text-foreground">{metric}</p>
          )}
          {meta && (
            <p className="mt-0.5 text-[12px] text-muted-foreground">{meta}</p>
          )}
        </div>
        {dates && (
          <p className="shrink-0 text-[12px] tabular-nums text-muted-foreground sm:text-[13px]">
            {dates}
          </p>
        )}
      </div>

      {bullets.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-2 text-[13px] leading-relaxed text-foreground/85 sm:text-sm"
            >
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {skills && skills.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      )}
    </li>
  );
}
