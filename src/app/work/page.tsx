import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function WorkPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] items-center space-y-10 p-4 md:p-8">
      <section id="work" className="w-full max-w-5xl mt-16">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="research" className="w-full max-w-5xl">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Research Experience</h2>
          </BlurFade>
          {DATA.research.map((researchItem, id) => (
            <BlurFade
              key={researchItem.company}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={researchItem.company}
                logoUrl={researchItem.logoUrl}
                altText={researchItem.company}
                title={researchItem.company}
                subtitle={researchItem.title}
                href={researchItem.href}
                badges={researchItem.badges}
                period={`${researchItem.start} - ${researchItem.end ?? "Present"}`}
                description={researchItem.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="clubs" className="w-full max-w-5xl">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Clubs & Organizations</h2>
          </BlurFade>
          {DATA.clubs.map((club, id) => (
            <BlurFade
              key={club.company}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
            >
              <ResumeCard
                key={club.company}
                logoUrl={club.logoUrl}
                altText={club.company}
                title={club.company}
                subtitle={club.title}
                href={club.href}
                badges={club.badges}
                period={`${club.start} - ${club.end ?? "Present"}`}
                description={club.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
} 