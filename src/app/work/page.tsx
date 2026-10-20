"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { PromotionCard } from "@/components/promotion-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function WorkPage() {
  return (
    <main className="relative px-5 py-8 sm:px-8">
      <section id="work" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="mb-8 space-y-0.5">
            <h2 className="section-label">Experience</h2>
            <div className="section-rule !mb-0" />
            <p className="pt-4 text-sm text-muted-foreground">Professional experience and contributions.</p>
          </div>
        </BlurFade>
        <div className="flex min-h-0 flex-col divide-y divide-border/60">
          {DATA.work.map((work: any, id) => {
            // Handle both single role and multiple roles format
            const roles = work.roles ? work.roles.map((role: any) => {
              // Parse period string if it exists (format: "Month Year - Month Year")
              let start = "";
              let end = "";
              if (role.period && role.period.includes(" - ")) {
                [start, end] = role.period.split(" - ").map((s: string) => s.trim());
              }
              return {
                ...role,
                start: start || role.start,
                end: end || role.end
              };
            }) : [{
              title: work.title || "",
              period: work.start && work.end ? `${work.start} - ${work.end}` : "",
              description: work.description,
              tasks: work.tasks,
              start: work.start,
              end: work.end
            }];
            
            return (
              <BlurFade
                key={`${work.company}-${id}`}
                delay={BLUR_FADE_DELAY * 8 + id * 0.2}
                className="py-6 first:pt-0 last:pb-0"
              >
                <PromotionCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  company={work.company}
                  href={work.href}
                  productLinks={work.productLinks}
                  badges={work.badges}
                  roles={roles}
                  tag={work.tag}
                  partneredWith={work.partneredWith}
                  backedBy={work.backedBy}
                />
              </BlurFade>
            );
          })}
        </div>
      </section>

      {/* Research */}
      <section id="research" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="mb-8 space-y-0.5">
            <h2 className="section-label">Research</h2>
            <div className="section-rule !mb-0" />
            <p className="pt-4 text-sm text-muted-foreground">Academic and laboratory research work.</p>
          </div>
        </BlurFade>
        <div className="flex min-h-0 flex-col divide-y divide-border/60">
          {DATA.research.map((research: any, id) => (
            <BlurFade
              key={research.company}
              delay={BLUR_FADE_DELAY * 12 + id * 0.2}
              className="py-6 first:pt-0 last:pb-0"
            >
              <PromotionCard
                key={research.company}
                logoUrl={research.logoUrl}
                altText={research.company}
                company={research.company}
                href={research.href}
                badges={research.badges}
                tag={research.tag}
                roles={[{
                  title: research.title,
                  period: `${research.start} - ${research.end}`,
                  description: research.description,
                  tasks: research.tasks
                }]}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Clubs */}
      <section id="clubs" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="mb-8 space-y-0.5">
            <h2 className="section-label">Clubs & Organizations</h2>
            <div className="section-rule !mb-0" />
            <p className="pt-4 text-sm text-muted-foreground">Student organizations and teams.</p>
          </div>
        </BlurFade>
        <div className="flex min-h-0 flex-col divide-y divide-border/60">
          {DATA.clubs.map((club: any, id) => (
            <BlurFade
              key={club.company}
              delay={BLUR_FADE_DELAY * 14 + id * 0.2}
              className="py-6 first:pt-0 last:pb-0"
            >
              <PromotionCard
                key={club.company}
                logoUrl={club.logoUrl}
                altText={club.company}
                company={club.company}
                href={club.href}
                badges={club.badges}
                tag={club.tag}
                roles={[{
                  title: club.title,
                  period: `${club.start} - ${club.end}`,
                  description: club.description,
                  tasks: club.tasks
                }]}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}
