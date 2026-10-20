import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Showcase } from "@/components/home/showcase";
import { CASE_STUDIES, getCaseStudy } from "@/data/case-studies";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return {
    title: study.name,
    description: study.tagline,
    openGraph: { title: study.name, description: study.tagline, type: "article" },
  };
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="section-label">{children}</h2>
      <div className="section-rule !mb-5" />
    </>
  );
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const index = CASE_STUDIES.indexOf(study);
  const next = CASE_STUDIES[(index + 1) % CASE_STUDIES.length];

  const facts = [
    { label: "Role", value: study.role },
    { label: "Timeline", value: study.timeline },
    ...(study.team ? [{ label: "Team", value: study.team }] : []),
    { label: "Stack", value: study.stack.join(", ") },
  ];

  const phones = study.gallery.filter((g) => g.phone);
  const wide = study.gallery.filter((g) => !g.phone);

  return (
    <main>
      <div className="px-5 pt-6 sm:px-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to work
        </Link>
      </div>

      {/* Title */}
      <header className="px-5 pb-8 pt-6 sm:px-8">
        <h1 className="text-[32px] font-normal tracking-[-0.02em] text-foreground sm:text-[44px]">
          {study.name}
        </h1>
        <p className="mt-1 text-[14px] text-muted-foreground sm:text-[15px]">
          {study.role} · {study.category}
        </p>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-foreground/90 sm:text-base">
          {study.tagline}
        </p>

        <dl className="mt-6 divide-y divide-border/60 border-y border-border/60">
          {facts.map((f) => (
            <div key={f.label} className="grid grid-cols-[88px_1fr] gap-3 py-2.5 text-[13px] sm:text-sm">
              <dt className="text-muted-foreground">{f.label}</dt>
              <dd className="text-foreground/90">{f.value}</dd>
            </div>
          ))}
        </dl>

        {study.links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {study.links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={i === 0 ? "pill pill-primary gap-1" : "pill gap-1"}
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <div className="px-3 sm:px-5">
        <div className="overflow-hidden rounded-2xl border border-border/70">
          <Showcase spec={study.hero ?? study.showcase} alt={`${study.name} screenshots`} priority />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-px overflow-hidden border-y border-border/60 bg-border/60 sm:grid-cols-4 mt-8">
        {study.stats.map((s) => (
          <div key={s.label} className="bg-card px-5 py-5 sm:px-6">
            <p className="text-[24px] font-normal tracking-[-0.02em] text-foreground sm:text-[28px]">
              {s.value}
            </p>
            <p className="mt-0.5 text-[12px] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-12 px-5 py-10 sm:px-8 sm:py-12">
        <section>
          <Heading>Overview</Heading>
          <div className="space-y-4 text-[14px] leading-relaxed text-foreground/85 sm:text-[15px]">
            {study.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section>
          <Heading>What I built</Heading>
          <ul className="space-y-2.5">
            {study.built.map((b) => (
              <li key={b} className="flex gap-2.5 text-[14px] leading-relaxed text-foreground/85 sm:text-[15px]">
                <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <Heading>Architecture</Heading>
          <dl className="divide-y divide-border/60 rounded-2xl border border-border/70">
            {study.architecture.map((a) => (
              <div key={a.label} className="grid grid-cols-[96px_1fr] gap-3 px-4 py-3 text-[13px] sm:text-sm">
                <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-[hsl(var(--label))] sm:text-xs">
                  {a.label}
                </dt>
                <dd className="text-foreground/90">{a.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {study.steps && (
          <section>
            <Heading>How it works</Heading>
            <ol className="space-y-5">
              {study.steps.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[36px_1fr] gap-2">
                  <span className="font-mono text-[12px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-medium text-foreground">{s.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground sm:text-sm">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        <section>
          <Heading>Decisions</Heading>
          <div className="grid gap-3 sm:grid-cols-2">
            {study.decisions.map((d, i) => (
              <div key={d.title} className="rounded-2xl border border-border/70 p-4">
                <span className="font-mono text-[12px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1.5 text-[15px] font-medium text-foreground">{d.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        {study.gallery.length > 0 && (
          <section>
            <Heading>Screens</Heading>
            {phones.length > 0 && (
              <div className="-mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8">
                {phones.map((g) => (
                  <figure key={g.caption} className="w-[150px] shrink-0 snap-start sm:w-[170px]">
                    <div className="overflow-hidden rounded-[22px] border-[4px] border-[#111] bg-[#111]">
                      <Image
                        src={g.image}
                        alt={`${study.name}: ${g.caption}`}
                        sizes="170px"
                        className="h-auto w-full rounded-[18px]"
                      />
                    </div>
                    <figcaption className="mt-2 text-[12px] text-muted-foreground">{g.caption}</figcaption>
                  </figure>
                ))}
              </div>
            )}
            {wide.length > 0 && (
              <div className="space-y-6">
                {wide.map((g) => (
                  <figure key={g.caption}>
                    <div className="overflow-hidden rounded-xl border border-border/70">
                      <Image
                        src={g.image}
                        alt={`${study.name}: ${g.caption}`}
                        sizes="(max-width: 760px) 100vw, 680px"
                        className="h-auto w-full"
                      />
                    </div>
                    <figcaption className="mt-2 text-[12px] text-muted-foreground">{g.caption}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </section>
        )}
      </div>

      {/* Next project */}
      <Link
        href={`/work/${next.slug}`}
        className="group flex items-center justify-between border-t border-border/60 px-5 py-6 transition-colors hover:bg-secondary/40 sm:px-8"
      >
        <div>
          <p className="section-label">Next project</p>
          <p className="mt-1 text-[18px] text-foreground">
            {next.name}
            <span className="text-muted-foreground"> · {next.category}</span>
          </p>
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
      </Link>
    </main>
  );
}
