import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import { Badge } from "@/components/ui/badge";

const BLUR_FADE_DELAY = 0.04;

export default function EducationPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] items-center space-y-10 p-4 md:p-8">
      <section id="education" className="w-full max-w-5xl mt-16">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full max-w-5xl">
        <div className="flex min-h-0 flex-col gap-y-3">
          
          {Object.entries(DATA.skills).map(([category, skills], categoryIndex) => (
            <div key={category} className="mb-4">
              <BlurFade delay={BLUR_FADE_DELAY * (10 + categoryIndex * 0.5)}>
                <h3 className="text-lg font-semibold mb-2">{category}</h3>
              </BlurFade>
              <div className="flex flex-wrap gap-1">
                {skills.map((skill, skillIndex) => (
                  <BlurFade
                    key={skill}
                    delay={
                      BLUR_FADE_DELAY * (10 + categoryIndex * 0.5 + 0.1) +
                      skillIndex * 0.05
                    }
                  >
                    <Badge key={skill}>{skill}</Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="w-full max-w-5xl">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">Certifications</h2>
          </BlurFade>
          {DATA.certifications.map((certification, id) => (
            <BlurFade
              key={certification.name}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ResumeCard
                key={certification.name}
                altText={certification.name}
                title={certification.name}
                subtitle={certification.issuer}
                period={certification.date}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
} 