import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { DATA } from "@/data/resume";
import { CASE_STUDIES } from "@/data/case-studies";
import { CopyEmail } from "@/components/home/copy-email";
import { ExperienceItem } from "@/components/home/experience-item";
import { GithubHeatmap } from "@/components/home/github-heatmap";
import { Section } from "@/components/home/section";
import { WorkCard } from "@/components/home/work-card";
import BrekenHero from "@/app/work/pictures/breken-hero.png";
import CuratorHero from "@/app/work/pictures/curator-hero.png";

const HERO_BULLETS = [
  "Breken: simulating production to catch failures before customers do",
  "IBM: reliable agent workflows under Fellow Dr. Kush R. Varshney",
  "FitFo: CTO; agentic coaching now at $350K GMV",
];

const TECH_STACK = [
  "Python",
  "TypeScript",
  "FastAPI",
  "Temporal",
  "Kafka",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Kubernetes",
];

// Bold one-liners shown under each role in Experience.
const METRICS: Record<string, string> = {
  Breken: "Backed by Pear VC, Z Fellows, Pareto Holdings, and Collective Global",
  IBM: "Under IBM Fellow Dr. Kush R. Varshney",
  "Nestlé": "2M+ recipe co-occurrence corpus",
  FitFo: "40K users · $350K GMV · $500K raised",
};

// Product previews for experience entries that ship a product.
const EXPERIENCE_IMAGES: Record<string, StaticImageData> = {
  Breken: BrekenHero,
  "Curator.to": CuratorHero,
};

const EXPERIENCE_VIDEOS: Record<string, { src: string; poster?: string }> = {
  FitFo: { src: "/videos/fitfo.mp4", poster: "/videos/fitfo-poster.jpg" },
};

function uniqueSkills(skills: string[][], limit = 5) {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const group of skills) {
    for (const skill of group) {
      if (!seen.has(skill)) {
        seen.add(skill);
        out.push(skill);
      }
      if (out.length >= limit) return out;
    }
  }
  return out;
}

// Upper-level course names from the nested { dept: { level: course[] } } shape.
function coursework(classes: any, limit = 10): string[] {
  if (!classes) return [];
  const courses: { code: string; name: string }[] = Object.values(classes).flatMap(
    (levels: any) => Object.values(levels).flat() as any[]
  );
  return courses
    .filter((c) => /[34]\d\d/.test(c.code))
    .map((c) => c.name)
    .slice(0, limit);
}

export default function HomePage() {
  const experience = DATA.work.slice(0, 8).map((work: any) => {
    const bullets = (work.tasks ?? [])
      .slice(0, 3)
      .map((t: any) => t.description as string);
    const skills = uniqueSkills(
      (work.tasks ?? []).map((t: any) => t.skills as string[])
    );
    const description = work.description as string | undefined;
    const company = work.company as string;
    return {
      company,
      href: work.href as string | undefined,
      title: work.title as string,
      metric: METRICS[company],
      meta: description && description.length <= 90 ? description : undefined,
      start: work.start as string | undefined,
      end: work.end as string | undefined,
      bullets,
      skills,
      image: EXPERIENCE_IMAGES[company],
      video: EXPERIENCE_VIDEOS[company]?.src,
      videoPoster: EXPERIENCE_VIDEOS[company]?.poster,
    };
  });

  const uiuc: any = DATA.education.find((e) =>
    e.school.toLowerCase().includes("illinois")
  );
  const gatech = DATA.education.find((e) =>
    e.school.toLowerCase().includes("georgia")
  );
  const courses = coursework(uiuc?.classes);

  return (
    <main id="main">
      {/* Intro */}
      <section
        id="intro"
        aria-label="Introduction"
        className="scroll-mt-24 px-5 pb-10 pt-8 sm:px-8 sm:pb-12 sm:pt-10"
      >
        <Image
          src={DATA.avatarUrl}
          alt={DATA.name}
          width={176}
          height={176}
          className="h-24 w-24 rounded-[22px] object-cover shadow-[0_8px_24px_-12px_rgba(27,26,23,0.35)] sm:h-28 sm:w-28 sm:rounded-[26px]"
          priority
        />
        <h1 className="mt-6 text-[32px] font-normal leading-[1.1] tracking-[-0.025em] text-foreground sm:text-[44px]">
          {DATA.name}
        </h1>
        <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-foreground/90 sm:text-[17px]">
          I build applied AI systems, focused on making agents reliable in production.
        </p>
        <ul className="mt-5 space-y-2">
          {HERO_BULLETS.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-2.5 text-[13px] leading-relaxed text-foreground/80 sm:text-sm"
            >
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <p className="section-label mb-2.5">Tech stack</p>
          <div className="flex flex-wrap gap-1.5">
            {TECH_STACK.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <CopyEmail email={DATA.contact.email} />
          <a href="#experience" className="pill">
            Experience
          </a>
          <a
            href="/RESUME_ARJUNK_SEPT25.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pill"
          >
            Resume
          </a>
          <a
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pill"
          >
            GitHub
          </a>
        </div>

        <p className="mt-6 flex items-center gap-2 text-[12px] text-muted-foreground sm:text-[13px]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <MapPin className="h-3.5 w-3.5" />
          {DATA.location} · Open to NYC / SF / Remote
        </p>
      </section>

      {/* Experience */}
      <Section id="experience" label="Experience" className="border-t border-border/60">
        <ul className="divide-y divide-border/60">
          {experience.map((item) => (
            <ExperienceItem key={item.company} {...item} />
          ))}
        </ul>
        <Link
          href="/work"
          className="mt-8 inline-flex items-center gap-1 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
        >
          Full experience, research, and clubs
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </Section>

      {/* Selected work */}
      <Section id="work" label="Selected work" className="border-t border-border/60">
        <div className="space-y-5">
          {CASE_STUDIES.map((study, i) => (
            <WorkCard key={study.slug} study={study} priority={i === 0} />
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" label="Education" className="border-t border-border/60">
        <div className="space-y-6">
          {[gatech, uiuc].filter(Boolean).map((school) => (
            <div key={school!.school} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <div>
                <a
                  href={school!.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-medium text-foreground hover:underline underline-offset-2"
                >
                  {school!.school}
                </a>
                <p className="text-[13px] text-foreground/80 sm:text-sm">
                  {school!.degree}
                </p>
              </div>
              <p className="shrink-0 text-[12px] tabular-nums text-muted-foreground sm:text-[13px]">
                {school!.start} – {school!.end}
              </p>
            </div>
          ))}
        </div>

        {courses.length > 0 && (
          <>
            <h3 className="mb-2 mt-8 text-[13px] font-medium text-foreground">
              Coursework
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {courses.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </>
        )}

        <h3 className="mb-2 mt-8 text-[13px] font-medium text-foreground">
          Activities
        </h3>
        <ul className="space-y-1.5">
          {DATA.clubs.slice(0, 3).map((club: any) => (
            <li key={club.company} className="flex gap-2.5 text-[13px] text-muted-foreground sm:text-sm">
              <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
              <span>
                {club.company} · {club.title}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Skills */}
      <Section id="skills" label="Skills" className="border-t border-border/60">
        <div className="space-y-5">
          {Object.entries(DATA.skills).map(([group, items]) => (
            <div key={group}>
              <p className="mb-2 text-[13px] font-medium text-foreground">{group}</p>
              <div className="flex flex-wrap gap-1.5">
                {Array.from(new Set(items as readonly string[])).map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about" label="About" className="border-t border-border/60">
        <div className="space-y-4 text-[14px] leading-relaxed text-foreground/85 sm:text-[15px]">
          <p>
            Hi, I&apos;m {DATA.name}. I build applied AI systems, with a focus on
            making agents reliable in production.
          </p>
          <p>{DATA.summary}</p>
        </div>
        <GithubHeatmap username="arjunpkulkarni" profileUrl={DATA.contact.social.GitHub.url} />
      </Section>

      {/* Contact */}
      <footer
        id="contact"
        aria-label="Contact and social links"
        className="scroll-mt-24 border-t border-border/60 px-5 py-10 sm:px-8 sm:py-12"
      >
        <a
          href={`mailto:${DATA.contact.email}`}
          className="group inline-flex items-center gap-1.5 text-[26px] font-normal tracking-[-0.02em] text-foreground sm:text-[32px]"
        >
          Let&apos;s talk
          <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </a>
        <p className="mt-4 text-[13px] text-muted-foreground sm:text-sm">
          You can also find me on{" "}
          <a
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline-offset-2 hover:underline"
          >
            GitHub
          </a>
          ,{" "}
          <a
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline-offset-2 hover:underline"
          >
            LinkedIn
          </a>
          , or{" "}
          <a
            href={`mailto:${DATA.contact.email}`}
            className="text-foreground underline-offset-2 hover:underline"
          >
            Email
          </a>{" "}
          me directly.
        </p>
        <p className="mt-10 text-[12px] text-muted-foreground">
          © {new Date().getFullYear()}, {DATA.name}
        </p>
      </footer>
    </main>
  );
}
