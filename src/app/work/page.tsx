"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import { useEffect, useRef, useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function WorkPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const mainRef = useRef<HTMLElement>(null);

  // Calculate total items for timeline
  const allItems = [
    ...DATA.work,
    ...(Array.isArray(DATA.partners) ? DATA.partners : []),
    ...DATA.research,
    ...DATA.clubs,
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return;
      
      const main = mainRef.current;
      const rect = main.getBoundingClientRect();
      const mainHeight = main.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate how much of the page has been scrolled through
      const scrolled = Math.max(0, -rect.top);
      const maxScroll = mainHeight - viewportHeight;
      const progress = Math.min(100, Math.max(0, (scrolled / maxScroll) * 100));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl relative" ref={mainRef}>
      {/* Continuous Timeline - Right Side */}
      <div className="absolute right-4 top-32 bottom-8 w-px hidden md:block">
        {/* Background line */}
        <div className="absolute inset-0 bg-border/40" />
        {/* Animated progress line */}
        <div 
          className="absolute top-0 left-0 w-full bg-primary transition-all duration-700 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />
        
        {/* Timeline dots for all items */}
        {allItems.map((_, index) => {
          const dotProgress = (index / (allItems.length - 1)) * 100;
          const isActive = scrollProgress >= dotProgress;
          
          return (
            <div
              key={index}
              className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-700"
              style={{ top: `${(index / (allItems.length - 1)) * 100}%` }}
            >
              <div 
                className={`w-3 h-3 rounded-full border-2 transition-all duration-700 ${
                  isActive 
                    ? 'bg-primary border-primary scale-125' 
                    : 'bg-background border-border/40'
                }`}
              />
            </div>
          );
        })}
      </div>

      <section id="work" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="space-y-0.5 mb-8 mt-20">
            <h2 className="text-2xl font-medium tracking-tighter">Work Experience</h2>
            <p className="text-sm text-muted-foreground">Professional experience and contributions.</p>
          </div>
        </BlurFade>
        
        <div className="flex min-h-0 flex-col gap-y-6 md:pr-16">
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
                tasks={work.tasks}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      {Array.isArray(DATA.partners) && DATA.partners.length > 0 && (
        <section id="partners" className="w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 7.5}>
            <div className="space-y-0.5 mb-8 mt-16">
              <h2 className="text-2xl font-medium tracking-tighter">Partners & Investors</h2>
              <p className="text-sm text-muted-foreground">Collaborations and backing.</p>
            </div>
          </BlurFade>
          <div className="flex min-h-0 flex-col gap-y-6 md:pr-16">
            {DATA.partners.map((partner, id) => (
              <BlurFade
                key={partner.company}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={partner.company}
                  logoUrl={partner.logoUrl}
                  altText={partner.company}
                  title={partner.company}
                  subtitle={partner.title}
                  href={partner.href}
                  badges={partner.badges}
                  period={`${partner.start || ""}${partner.end ? ` - ${partner.end}` : partner.start ? " - Present" : ""}`}
                  description={partner.description}
                  titleClassName="text-base sm:text-lg"
                  cardClassName="py-4"
                />
              </BlurFade>
            ))}
          </div>
        </section>
      )}
      <section id="research" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="space-y-0.5 mb-8 mt-16">
            <h2 className="text-2xl font-medium tracking-tighter">Research Experience</h2>
            <p className="text-sm text-muted-foreground">Academic and laboratory research work.</p>
          </div>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-6 md:pr-16">
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
                tasks={researchItem.tasks}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="clubs" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="space-y-0.5 mb-8 mt-16">
            <h2 className="text-2xl font-medium tracking-tighter">Clubs & Organizations</h2>
            <p className="text-sm text-muted-foreground">Student organizations and teams.</p>
          </div>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-6 md:pr-16">
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
                tasks={club.tasks}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
} 