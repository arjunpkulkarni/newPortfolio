import Image, { type StaticImageData } from "next/image";

// Looping logo animation in the style of the FitFo intro: the mark wipes in,
// the wordmark rises letter by letter, an accent line draws under it, then it resets.
export function LogoReveal({
  logo,
  name,
  accent = "#111111",
}: {
  logo?: StaticImageData | string;
  name: string;
  accent?: string;
}) {
  return (
    <div
      className="logo-reveal relative flex aspect-[2/1] w-full items-center justify-center bg-white"
      aria-label={`${name} logo`}
      role="img"
    >
      <div className="flex items-center gap-3 sm:gap-4">
        {logo && (
          <div className="logo-reveal-mark relative h-12 w-12 shrink-0 sm:h-16 sm:w-16">
            <Image src={logo} alt="" fill sizes="64px" className="rounded-xl object-contain" />
          </div>
        )}
        <div className="relative">
          <p className="flex text-[30px] font-medium tracking-[-0.03em] text-[#111] sm:text-[44px]">
            {Array.from(name).map((ch, i) => (
              <span
                key={i}
                className="logo-reveal-letter inline-block whitespace-pre"
                style={{ animationDelay: `${1.1 + i * 0.06}s` }}
              >
                {ch}
              </span>
            ))}
          </p>
          <span
            className="logo-reveal-line absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full"
            style={{ background: accent }}
          />
        </div>
      </div>
    </div>
  );
}
