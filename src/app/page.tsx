import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { DATA } from "@/data/resume";
import { CASE_STUDIES } from "@/data/case-studies";
import { CopyEmail } from "@/components/home/copy-email";
import { ExperienceItem } from "@/components/home/experience-item";
import { GithubHeatmap } from "@/components/home/github-heatmap";
import { Section } from "@/components/home/section";
import { WorkCard } from "@/components/home/work-card";

const RESEARCH = [
  {
    when: "2023",
    title: "Teaching Assistant",
    org: "Siebel School of Computing and Data Science",
    line: "CS systems · TA for CS124 (Java) and CS128 (C++) at Siebel.",
  },
  {
    when: "2024",
    title: "CEE Materials Lab",
    org: "Civil and Environmental Engineering at Illinois",
    line: "ML for materials · Random Forest mix design, 10% lower cement carbon.",
  },
  {
    when: "2024",
    title: "ECE AI Group",
    org: "Illinois Artificial Intelligence Group (ECE Department)",
    line: "RL + control · EV routing in SUMO, 18% less delay, 25% better control.",
  },
  {
    when: "2024",
    title: "CSL",
    org: "Coordinated Science Laboratory at University of Illinois",
    line: "Clinical AI · RAG + LangGraph dietitian with Chef Briscione & Lav Varshney, +22% accuracy.",
  },
  {
    when: "2025",
    title: "Beckman Institute",
    org: "Beckman Institute for Advanced Science and Technology",
    line: "Human–AI interaction · Real-time multi-user LLM platform for 40+ subjects.",
  },
  {
    when: "2025",
    title: "IQUIST",
    org: "Illinois Quantum Information Science and Technology Center",
    line: "Nanofluidics · CNT energy harvesting on ionic Coulomb drag (Nano Energy, 2023).",
  },
];

// One line each: the field, the outcome, what I did.
const EXPERIENCE: Record<string, { field: string; outcome?: string; did: string }> = {
  Breken: {
    field: "Production simulation",
    outcome: "Production simulation that finds failures before customers do",
    did: "Built a simulator that recreates a company's software, finds the bugs customers would hit, and drafts the fix.",
  },
  IBM: {
    field: "Agent reliability research",
    outcome: "Composable agent skills under IBM Fellow Dr. Kush R. Varshney",
    did: "Built reusable AI skills with the Mellea Skills Compiler and prototyped reliable agent workflows.",
  },
  "Nestlé": {
    field: "AI for food R&D",
    outcome: "LLM retrieval over a 2M+ recipe co-occurrence corpus",
    did: "Built retrieval and data pipelines pairing formulation signals with semantic search.",
  },
  FitFo: {
    field: "Creator fitness coaching",
    outcome: "40K users · $350K GMV · $500K raised",
    did: "Led the platform as CTO, from architecture to an AI coach grounded in creator content.",
  },
  Handshake: {
    field: "Multimodal AI evaluation",
    outcome: "Training-data QA for state-of-the-art vision models",
    did: "Built Kubricks for video ingestion and transcription, and evaluated models against gold annotations.",
  },
  SideShift: {
    field: "Messaging and contracts",
    outcome: "~95% fewer database reads and writes on messaging",
    did: "Added Redis + TanStack Query caching and built in-app contract signing.",
  },
  "UCSF Health": {
    field: "Clinical AI",
    outcome: "Agentic EHR supporting 20+ patients daily",
    did: "Built the Flask pipelines behind Congruence's SOAP notes and patient context.",
  },
  "Curator.to": {
    field: "Agentic e-commerce",
    did: "Architected the multi-tenant TypeScript backend and its tool-based agents.",
  },
};

// One line each.
const CLUB_STORY: Record<string, string> = {
  "NOBE Tech Lab": "Shipped sites and tools for 30+ clients.",
  "Illinois Business Consulting": "Go-to-market with CIOs and CTOs.",
  "sigPWNY Component Team": "Secure UART and Rust firmware for a medical device.",
  "Institute of Electrical and Electronics Engineers": "Talks on hardware, quantum, and ML.",
};

const CLUB_NAMES: Record<string, string> = {
  "sigPWNY Component Team": "SIGPwny",
  "Institute of Electrical and Electronics Engineers": "IEEE",
};

// Product previews for experience entries that ship a product.
const EXPERIENCE_IMAGES: Record<string, StaticImageData> = {};

// Wordmark and accent color for each role's logo animation.
const BRANDS: Record<string, { name: string; accent: string }> = {
  IBM: { name: "IBM", accent: "#0f62fe" },
  "Nestlé": { name: "Nestlé", accent: "#63513d" },
  Handshake: { name: "Handshake", accent: "#b4e33d" },
  SideShift: { name: "SideShift", accent: "#111111" },
  "UCSF Health": { name: "UCSF Health", accent: "#052049" },
  "Curator.to": { name: "Curator", accent: "#1e88e5" },
};

const EXPERIENCE_VIDEOS: Record<string, { src: string; poster?: string }> = {
  Breken: { src: "/videos/breken.mp4", poster: "/videos/breken-poster.jpg" },
  FitFo: { src: "/videos/fitfo.mp4", poster: "/videos/fitfo-poster.jpg" },
};

function uniqueSkills(skills: string[][], limit = 6) {
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

// Logo for any company, lab, club, or school in DATA.
function logoFor(org: string): StaticImageData | undefined {
  const all: any[] = [...DATA.work, ...DATA.research, ...DATA.clubs];
  const hit = all.find((x) => x.company === org) ?? DATA.education.find((e: any) => e.school === org);
  return hit?.logoUrl;
}

export default function HomePage() {
  const experience = DATA.work.slice(0, 8).map((work: any) => {
    const company = work.company as string;
    return {
      company,
      href: work.href as string | undefined,
      title: work.title as string,
      logo: work.logoUrl as StaticImageData | undefined,
      start: work.start as string | undefined,
      end: work.end as string | undefined,
      ...EXPERIENCE[company],
      skills: uniqueSkills((work.tasks ?? []).map((t: any) => t.skills as string[])),
      image: EXPERIENCE_IMAGES[company],
      video: EXPERIENCE_VIDEOS[company]?.src,
      videoPoster: EXPERIENCE_VIDEOS[company]?.poster,
      brand: BRANDS[company],
      backedBy: work.backedBy,
    };
  });

  const clubs = DATA.clubs.filter((club: any) => CLUB_STORY[club.company]);

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
        <p className="mt-3 text-[16px] leading-snug text-foreground/90 sm:text-[17px]">
          Product / agent engineer building AI systems you can trust in production.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <CopyEmail email={DATA.contact.email} />
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
          <a
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pill"
          >
            LinkedIn
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

      {/* Education */}
      <Section id="education" label="Education" className="border-t border-border/60">
        <ul className="space-y-5">
          {DATA.education.map((school: any) => (
            <li key={school.school} className="flex gap-3">
              <Image
                src={school.logoUrl}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-xl border border-border/70 bg-white object-contain p-1"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <a
                    href={school.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-medium text-foreground underline-offset-2 hover:underline"
                  >
                    {school.school}
                  </a>
                  <p className="shrink-0 text-[12px] tabular-nums text-muted-foreground">
                    {school.start} – {school.end}
                  </p>
                </div>
                <p className="text-[13px] text-muted-foreground">{school.degree}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Experience */}
      <Section id="experience" label="Experience" className="border-t border-border/60">
        <ul className="flex flex-col gap-5">
          {experience.map((item, i) => (
            <ExperienceItem key={item.company} {...item} stackIndex={i} />
          ))}
        </ul>
        <a
          href="/work"
          className="mt-8 inline-flex items-center gap-1 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
        >
          Full experience and research
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </Section>

      {/* Research */}
      <Section id="research" label="Research" className="border-t border-border/60">
        <ol className="grid grid-cols-1 gap-2.5">
          {RESEARCH.map((chapter, i) => {
            const logo = logoFor(chapter.org);
            return (
              <li
                key={`${chapter.title}-${i}`}
                className="flex items-start gap-3 rounded-2xl border border-border/70 p-3"
              >
                {logo && (
                  <Image
                    src={logo}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 shrink-0 rounded-xl border border-border/60 bg-white object-contain p-1"
                  />
                )}
                <div className="min-w-0">
                  <p className="flex items-baseline gap-2">
                    <span className="truncate text-[14px] font-medium text-foreground">{chapter.title}</span>
                    <span className="shrink-0 font-mono text-[11px] text-muted-foreground">{chapter.when}</span>
                  </p>
                  <p className="text-[12px] leading-snug text-muted-foreground sm:text-[13px]">{chapter.line}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* Selected work */}
      <Section id="work" label="Selected work" className="border-t border-border/60">
        <div className="flex flex-col gap-5">
          {CASE_STUDIES.map((study, i) => (
            <div
              key={study.slug}
              className="stack-card rounded-2xl"
              style={{ top: `calc(5rem + ${i * 10}px)` }}
            >
              <WorkCard study={study} priority={i === 0} />
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" label="Skills" className="border-t border-border/60">
        <dl className="space-y-4">
          {Object.entries(DATA.skills).map(([group, items]) => (
            <div key={group} className="grid gap-2 sm:grid-cols-[140px_1fr] sm:gap-4">
              <dt className="pt-0.5 text-[13px] font-medium text-foreground">{group}</dt>
              <dd className="flex flex-wrap gap-1.5">
                {Array.from(new Set(items as readonly string[])).map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
        <GithubHeatmap username="arjunpkulkarni" profileUrl={DATA.contact.social.GitHub.url} />
      </Section>

      {/* Clubs */}
      <Section id="clubs" label="Clubs & community" className="border-t border-border/60">
        <ul className="space-y-3">
          {clubs.map((club: any) => (
            <li key={club.company} className="flex items-center gap-3">
              <Image
                src={club.logoUrl}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-xl border border-border/70 bg-white object-contain p-1"
              />
              <p className="min-w-0 truncate text-[14px] text-foreground">
                <span className="font-medium">{CLUB_NAMES[club.company] ?? club.company}</span>
                <span className="text-muted-foreground"> · {CLUB_STORY[club.company]}</span>
              </p>
            </li>
          ))}
        </ul>
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
        <p className="mt-10 text-[12px] text-muted-foreground">
          © {new Date().getFullYear()}, {DATA.name}
        </p>
      </footer>
    </main>
  );
}
