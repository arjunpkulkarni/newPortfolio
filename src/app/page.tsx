import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { DATA } from "@/data/resume";
import { CASE_STUDIES } from "@/data/case-studies";
import { CopyEmail } from "@/components/home/copy-email";
import {
  ExperienceList,
  type ExperienceRoute,
} from "@/components/home/experience-list";
import {
  AbbvieDemo,
  BrekenDemo,
  CuratorDemo,
  HandshakeDemo,
  IbmDemo,
  RumorDemo,
  SideshiftDemo,
} from "@/components/home/demos";
import { GithubHeatmap } from "@/components/home/github-heatmap";
import { Section } from "@/components/home/section";
import { WorkCard } from "@/components/home/work-card";
import { HighlightSkills } from "@/lib/highlight-skills";
import fitfoLanding from "@/app/work/pictures/fitfo-landing.png";

// Real routes through the work — every role lands in at least one.
const COMPANY_ROUTES: Record<string, ExperienceRoute[]> = {
  Breken: ["agents", "systems", "product"],
  IBM: ["agents"],
  FitFo: ["product"],
  Handshake: ["agents", "data"],
  SideShift: ["systems"],
  "Curator.to": ["agents", "product"],
  AbbVie: ["healthcare", "data"],
  Rumor: ["product", "systems"],
};

const RESEARCH = [
  {
    title: "Undergraduate Teaching Assistant",
    org: "Siebel School of Computing and Data Science",
    partOf: "Siebel School of Computing and Data Science, University of Illinois",
    when: "Jan 2023 – Apr 2023",
    project:
      "TA for CS124 (Java Programming) and CS128 (Introduction to C++). Held office hours, gave one-on-one help, and graded assignments with detailed feedback.",
    skills: ["Java", "C++", "Data Structures", "Algorithms", "Code Review"],
    outcome: "Helped students through coursework and projects in two intro CS courses.",
  },
  {
    title: "Sustainable Concrete with ML",
    org: "Civil and Environmental Engineering at Illinois",
    partOf: "Civil and Environmental Engineering, University of Illinois",
    when: "Jan 2024 – May 2024",
    project:
      "Analyzed lab data and designed a new concrete mixture with less clinker in the cement, using Random Forest models to predict how composition affects durability.",
    skills: ["Python", "Random Forest", "Scikit-learn", "Pandas", "NumPy"],
    outcome: "10% lower carbon emissions.",
  },
  {
    title: "Autonomous EV Routing",
    org: "Illinois Artificial Intelligence Group (ECE Department)",
    partOf: "Illinois AI Group, Electrical & Computer Engineering, University of Illinois",
    when: "Jan 2024 – Jan 2025",
    project:
      "Put a reinforcement learning agent inside a model predictive control (MPC) system that routes electric vehicles, tested in SUMO traffic simulations.",
    skills: ["RL", "MPC", "SUMO", "ROS", "C++", "Python"],
    outcome: "18% less traffic delay and 25% better control accuracy.",
  },
  {
    title: "Human–AI Interaction Platform",
    org: "Beckman Institute for Advanced Science and Technology",
    partOf: "Beckman Institute for Advanced Science and Technology, University of Illinois",
    when: "Feb 2025 – Apr 2025",
    project:
      "Built a real-time React + Flask platform where multiple people talk to an LLM at once, with WebSockets and analytics logging for research experiments.",
    skills: ["React", "Flask", "WebSockets", "PostgreSQL", "LLM"],
    outcome: "Ran studies with 40+ subjects and zero lost messages.",
  },
  {
    title: "Nanofluidic Energy Harvesting",
    org: "Illinois Quantum Information Science and Technology Center",
    partOf: "Illinois Quantum Information Science and Technology Center (IQUIST), University of Illinois",
    when: "Sep 2025 – Dec 2025",
    project:
      "Modeled ion-electron Coulomb drag to predict voltage and current in silicon nanochannels, then designed carbon nanotube channels to harvest more energy.",
    skills: ["Python", "COMSOL", "MATLAB", "Nanofluidics", "Device Physics"],
    outcome: "Channel designs aimed at higher energy-harvesting efficiency, building on work published in Nano Energy (2023).",
  },
];

// One line each: the field, the outcome, what I did.
const EXPERIENCE: Record<string, { field: string; outcome?: string; did: string }> = {
  Breken: {
    field: "Production simulation",
    outcome: "Production simulation that finds failures before customers do",
    did: "Built the sandbox that rebuilds a customer's whole system in isolation, and the eval engine that finds the bugs customers would hit and drafts the fix.",
  },
  IBM: {
    field: "Agent reliability research",
    outcome: "Composable agent skills under IBM Fellow Dr. Kush R. Varshney",
    did: "Wrote reusable Python skills with the Mellea Skills Compiler, each validated and repaired against its own requirements, and composed them into agent workflows.",
  },
  FitFo: {
    field: "Mobile fitness app",
    outcome: "40K users · $350K GMV · $500K raised",
    did: "Led the mobile app and backend as CTO: share any workout video, get a structured plan, and train with an AI coach grounded in the creator's content.",
  },
  Handshake: {
    field: "Video model evals",
    outcome: "Training-data QA for state-of-the-art vision models",
    did: "Built Kubricks, an eval platform for video models: Celery ingestion and Whisper transcription, then scoring against gold annotations for hallucinations and temporal errors.",
  },
  SideShift: {
    field: "Caching",
    outcome: "~95% fewer database reads and writes on messaging",
    did: "Added Redis + TanStack Query caching and built in-app contract signing.",
  },
  "Curator.to": {
    field: "Agent infrastructure",
    outcome: "4+ enterprise brands · $2M+ GMV",
    did: "Built the early agent infrastructure (multi-tenant Bun + Hono backend, tool-calling agents streamed over WebSocket) and the web dashboard brands run it from.",
  },
  AbbVie: {
    field: "ETL",
    outcome: "ETL over 120K+ reports · batch runs 4h → 45m",
    did: "Built the ETL pipeline and dashboard that extracts, validates and embeds clinical trial reports, plus FastAPI + FAISS search that made R&D lookup ~3x faster.",
  },
  Rumor: {
    field: "Mobile full stack",
    outcome: "800ms → 120ms search for 50K+ users",
    did: "Shipped guest lists, RSVPs and discovery end to end in React Native and Node, and cut event-search latency ~85% with indexing and Redis caching.",
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
const EXPERIENCE_IMAGES: Record<string, StaticImageData> = {
  FitFo: fitfoLanding,
};

// Wordmark and accent color for each role's logo animation.
const BRANDS: Record<string, { name: string; accent: string }> = {
  IBM: { name: "IBM", accent: "#0f62fe" },
  Handshake: { name: "Handshake", accent: "#b4e33d" },
  SideShift: { name: "SideShift", accent: "#111111" },
  "Curator.to": { name: "Curator", accent: "#1e88e5" },
};

// Animated demo of what each product actually does.
const DEMOS: Record<string, React.ReactNode> = {
  Breken: <BrekenDemo />,
  IBM: <IbmDemo />,
  Handshake: <HandshakeDemo />,
  SideShift: <SideshiftDemo />,
  "Curator.to": <CuratorDemo />,
  AbbVie: <AbbvieDemo />,
  Rumor: <RumorDemo />,
};

const EXPERIENCE_VIDEOS: Record<string, { src: string; poster?: string }> = {
  Breken: { src: "/videos/breken.mp4", poster: "/videos/breken-poster.jpg" },
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
  const experience = DATA.work.map((work: any) => {
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
      demo: DEMOS[company],
      backedBy: work.backedBy,
      routes: COMPANY_ROUTES[company] ?? [],
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
          Agent engineer. AI you can trust in production.
        </p>
        <p className="mt-2 text-[14px] leading-snug text-muted-foreground sm:text-[15px]">
          Looking for Seed / Series A roles.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <CopyEmail email={DATA.contact.email} />
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
        <ExperienceList items={experience} />
      </Section>

      {/* Research */}
      <Section id="research" label="Research" className="border-t border-border/60">
        <ul className="flex flex-col gap-5">
          {RESEARCH.map((item, i) => {
            const logo = logoFor(item.org);
            return (
              <li
                key={item.title}
                className="stack-card rounded-2xl border border-border/70 bg-card p-4 sm:p-5"
                style={{ top: `calc(6.5rem + ${i * 10}px)` }}
              >
                <div className="flex items-center gap-3">
                  {logo && (
                    <Image
                      src={logo}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 shrink-0 rounded-xl border border-border/60 bg-white object-contain p-1"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-[15px] font-medium text-foreground">{item.title}</p>
                      <p className="shrink-0 text-[12px] tabular-nums text-muted-foreground">{item.when}</p>
                    </div>
                    <p className="text-[13px] text-muted-foreground">{item.partOf}</p>
                  </div>
                </div>
                <dl className="mt-3 space-y-2 text-[13px] leading-relaxed sm:text-sm">
                  <div>
                    <dt className="section-label inline">Project</dt>
                    <dd className="mt-0.5 text-foreground/80">
                      <HighlightSkills text={item.project} />
                    </dd>
                  </div>
                  <div>
                    <dt className="section-label inline">Outcome</dt>
                    <dd className="mt-0.5 font-medium text-foreground">{item.outcome}</dd>
                  </div>
                </dl>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Projects */}
      <Section id="work" label="Projects" className="border-t border-border/60">
        <div className="flex flex-col gap-5">
          {CASE_STUDIES.map((study, i) => (
            <div
              key={study.slug}
              className="stack-card rounded-2xl"
              style={{ top: `calc(6.5rem + ${i * 10}px)` }}
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
                <span className="text-muted-foreground"> · <HighlightSkills text={CLUB_STORY[club.company]} /></span>
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
