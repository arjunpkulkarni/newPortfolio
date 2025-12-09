import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Code2, Calculator, Microscope, Cpu } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function EducationPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <section id="education" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="space-y-0.5 mb-6 mt-20">
            <h2 className="text-2xl font-medium tracking-tighter">Education</h2>
            <p className="text-sm text-muted-foreground">Academic background and coursework.</p>
          </div>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-3">
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

      {/* Classes Section */}
      <section id="classes" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="space-y-0.5 mb-6 mt-8">
            <h2 className="text-2xl font-medium tracking-tighter">Coursework</h2>
            <p className="text-sm text-muted-foreground">Relevant academic courses across disciplines.</p>
          </div>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-3">
          
          <Tabs defaultValue="Computer Science" className="w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 9.5}>
              <TabsList className="grid w-full grid-cols-4 mb-4">
                <TabsTrigger value="Computer Science" className="flex items-center gap-2">
                  <Code2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Computer Science</span>
                </TabsTrigger>
                <TabsTrigger value="Mathematics" className="flex items-center gap-2">
                  <Calculator className="h-4 w-4" />
                  <span className="hidden sm:inline">Mathematics</span>
                </TabsTrigger>
                <TabsTrigger value="Materials Science & Engineering" className="flex items-center gap-2">
                  <Microscope className="h-4 w-4" />
                  <span className="hidden sm:inline">Materials Science</span>
                </TabsTrigger>
                <TabsTrigger value="Electrical Engineering" className="flex items-center gap-2">
                  <Cpu className="h-4 w-4" />
                  <span className="hidden sm:inline">Electrical</span>
                </TabsTrigger>
              </TabsList>
            </BlurFade>

            {DATA.education[0].classes && Object.entries(DATA.education[0].classes).map(([category, courses]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courses.map((course, courseIndex) => (
                    <BlurFade
                      key={course.code}
                      delay={BLUR_FADE_DELAY * (10 + courseIndex * 0.05)}
                    >
                      <Card className="p-4 hover:shadow-lg transition-shadow duration-200">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">{course.name}</h3>
                            <p className="text-sm text-muted-foreground">{course.code}</p>
                          </div>
                          <Badge variant="secondary" className="ml-2">
                            {category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {course.description}
                        </p>
                      </Card>
                    </BlurFade>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full max-w-7xl mt-8">
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
      <section id="certifications" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="space-y-0.5 mb-6 mt-8">
            <h2 className="text-2xl font-medium tracking-tighter">Certifications</h2>
            <p className="text-sm text-muted-foreground">Professional certifications and achievements.</p>
          </div>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-3">
          {DATA.certifications.map((certification, id) => (
            <BlurFade
              key={certification.name}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ResumeCard
                key={certification.name}
                altText={certification.name}
                logoUrl={certification.logoUrl}
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