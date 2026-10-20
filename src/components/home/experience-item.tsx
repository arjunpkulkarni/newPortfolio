import Image, { type StaticImageData } from "next/image";

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
}: ExperienceItemProps) {
  const dates =
    start || end
      ? `${start || ""}${start && end ? " – " : ""}${end || ""}`.trim()
      : "";

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
    <li className="py-7 first:pt-0 last:pb-0">
      {(video || image) && (
        <div className="mb-5 overflow-hidden rounded-2xl border border-border/70 bg-secondary/40">
          {video ? (
            <div className="relative aspect-[16/10] w-full">
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
            </div>
          ) : (
            // Still images keep their own aspect ratio so nothing gets cropped.
            <Image
              src={image!}
              alt={imageAlt || `${company} product`}
              sizes="(max-width: 760px) 100vw, 720px"
              className="h-auto w-full"
            />
          )}
        </div>
      )}

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
        <p className="mt-3 text-[14px] font-medium text-foreground sm:text-[15px]">{outcome}</p>
      )}
      {did && (
        <p className="mt-1 text-[13px] leading-relaxed text-foreground/75 sm:text-sm">{did}</p>
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
