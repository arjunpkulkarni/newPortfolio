"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code2, Calculator, Microscope, Cpu } from "lucide-react";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

const subjectIcons: Record<string, any> = {
  "Computer Science": Code2,
  "Mathematics": Calculator,
  "Materials Science & Engineering": Microscope,
  "Electrical Engineering": Cpu,
};

const subjectShortNames: Record<string, string> = {
  "Computer Science": "CS",
  "Mathematics": "Math",
  "Materials Science & Engineering": "MSE",
  "Electrical Engineering": "ECE",
};

function CertificationsCarousel({ certifications }: { certifications: readonly any[] }) {
  // Duplicate certifications for seamless infinite loop
  const duplicatedCerts = [...certifications, ...certifications];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Infinite scrolling container */}
      <div className="flex gap-6 animate-scroll">
        {duplicatedCerts.map((cert, index) => (
          <div
            key={`${cert.name}-${index}`}
            className="flex-shrink-0 w-80"
          >
            <Card className="p-6 flex flex-col items-center text-center h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
                <Image
                  src={cert.logoUrl}
                  alt={cert.issuer}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-base mb-1">{cert.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground">{cert.date}</p>
            </Card>
          </div>
        ))}
      </div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default function EducationPage() {
  // Find the education entry that has classes (UIUC)
  const educationWithClasses = DATA.education.find(edu => 'classes' in edu);
  const classes = educationWithClasses?.classes || {};
  const subjects = Object.keys(classes);

  // Get all unique levels across all subjects
  const allLevels = Array.from(
    new Set(
      subjects.flatMap(subject => Object.keys(classes[subject as keyof typeof classes]))
    )
  ).sort();

  const [selectedSubject, setSelectedSubject] = useState<string>(subjects[0] || "");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");

  // Get courses based on selected filters
  const getFilteredCourses = () => {
    if (!selectedSubject) return [];

    const subjectData = classes[selectedSubject as keyof typeof classes];
    if (!subjectData) return [];

    if (selectedLevel === "all") {
      return Object.entries(subjectData).flatMap(([level, courses]) =>
        (courses as any[]).map((course: any) => ({ ...course, level }))
      );
    }

    const levelCourses = subjectData[selectedLevel as keyof typeof subjectData];
    return levelCourses ? (levelCourses as any[]).map((course: any) => ({ ...course, level: selectedLevel })) : [];
  };

  const filteredCourses = getFilteredCourses();

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
              delay={BLUR_FADE_DELAY * 8 + id * 0.2}
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

        {/* Filter Bars Container */}
        <BlurFade delay={BLUR_FADE_DELAY * 9.5}>
          <div className="w-full mb-5">
            <div className="flex flex-col gap-2 items-center">
              {/* Subject Filter Bar */}
              <div className="flex flex-wrap gap-2 justify-center">
                {subjects.map((subject) => {
                  const Icon = subjectIcons[subject];
                  const selected = selectedSubject === subject;

                  return (
                    <button
                      key={subject}
                      onClick={() => setSelectedSubject(subject)}
                      className={`
                        inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md
                        transition-all duration-200 border
                        ${selected
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:bg-accent"
                        }
                      `}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">{subject}</span>
                      <span className="sm:hidden">{subjectShortNames[subject]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Level Filter Bar */}
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => setSelectedLevel("all")}
                  className={`
                    px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 border
                    ${selectedLevel === "all"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:bg-accent"
                    }
                  `}
                >
                  All Levels
                </button>

                {allLevels.map((level) => {
                  const subjectData = classes[selectedSubject as keyof typeof classes];
                  if (!subjectData?.[level as keyof typeof subjectData]) return null;

                  return (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`
                        px-3 py-1 capitalize text-xs font-medium rounded-md
                        transition-all duration-200 border
                        ${selectedLevel === level
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:bg-accent"
                        }
                      `}
                    >
                      {level}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCourses.map((course: any, index: number) => (
            <BlurFade
              key={course.code}
              delay={BLUR_FADE_DELAY * 10 + index * 0.05}
            >
              <Card className="p-4 h-full hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-base">{course.name}</h3>
                    <p className="text-xs text-muted-foreground">{course.code}</p>
                  </div>
                  <Badge variant="secondary" className="ml-2 text-xs capitalize">
                    {course.level}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {course.description}
                </p>
              </Card>
            </BlurFade>
          ))}
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="w-full max-w-7xl mt-8">
        <div className="flex min-h-0 flex-col gap-y-3">

          {Object.entries(DATA.skills).map(([category, skills], categoryIndex) => (
            <div key={category} className="mb-4">
              <BlurFade delay={BLUR_FADE_DELAY * (15 + categoryIndex * 2)}>
                <h3 className="text-lg font-semibold mb-2">{category}</h3>
              </BlurFade>
              <div className="flex flex-wrap gap-1">
                {skills.map((skill, skillIndex) => (
                  <BlurFade
                    key={skill}
                    delay={
                      BLUR_FADE_DELAY * (15 + categoryIndex * 2 + 0.5) +
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
        <BlurFade delay={BLUR_FADE_DELAY * 20}>
          <div className="space-y-0.5 mb-6 mt-8">
            <h2 className="text-2xl font-medium tracking-tighter">Certifications</h2>
            <p className="text-sm text-muted-foreground">Professional certifications and achievements.</p>
          </div>
        </BlurFade>
        <CertificationsCarousel certifications={DATA.certifications} />
      </section>
    </main>
  );
} 