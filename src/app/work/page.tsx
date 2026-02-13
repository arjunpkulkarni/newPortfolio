"use client";

import { useEffect, useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { PromotionCard } from "@/components/promotion-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function WorkPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate total items for timeline
  const allItems = [
    ...DATA.work,
    ...DATA.partners,
    ...DATA.research,
    ...DATA.clubs,
  ];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl relative">
      {/* Single Timeline for entire page */}
      <div className="absolute right-4 top-32 bottom-8 w-px hidden md:block">
        {/* Background line */}
        <div className="absolute inset-0 bg-border/40"></div>
        
        {/* Animated line that grows with scroll */}
        <div 
          className="absolute top-0 left-0 w-full bg-primary transition-all duration-700 ease-out"
          style={{ height: `${scrollProgress}%` }}
        ></div>
        
        {/* Dots for all items */}
        {allItems.map((_, index) => {
          const isFirst = index === 0;
          const dotPosition = (index / (allItems.length - 1)) * 100;
          const isPassed = scrollProgress >= dotPosition;
          
          return (
            <div
              key={index}
              className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-700"
              style={{ top: `${dotPosition}%` }}
            >
              <div 
                className={`w-3 h-3 rounded-full border-2 transition-all duration-700 ${
                  isPassed
                    ? 'bg-primary border-primary'
                    : 'bg-background border-border/40'
                } ${isFirst ? 'scale-125' : ''}`}
              />
            </div>
          );
        })}
      </div>

      <section id="work" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="space-y-0.5 mb-8 mt-20">
            <h2 className="text-2xl font-medium tracking-tighter">Work Experience</h2>
            <p className="text-sm text-muted-foreground">Professional experience and contributions.</p>
          </div>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-6 md:pr-16">
          {DATA.work.map((work: any, id) => {
            const roles = work.roles || [{
              title: work.title || "",
              period: work.start && work.end ? `${work.start} - ${work.end}` : "",
              description: work.description,
              tasks: work.tasks
            }];
            
            return (
              <BlurFade
                key={`${work.company}-${id}`}
                delay={BLUR_FADE_DELAY * 8 + id * 0.2}
              >
                <PromotionCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  company={work.company}
                  href={work.href}
                  badges={work.badges}
                  roles={roles}
                />
              </BlurFade>
            );
          })}
        </div>
      </section>

      {/* Partners & Investors */}
      <section id="partners" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="space-y-0.5 mb-8 mt-16">
            <h2 className="text-2xl font-medium tracking-tighter">Partners & Investors</h2>
            <p className="text-sm text-muted-foreground">Collaborations and backing.</p>
          </div>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-6 md:pr-16">
          {DATA.partners.map((partner: any, id) => (
            <BlurFade
              key={partner.company}
              delay={BLUR_FADE_DELAY * 10 + id * 0.2}
            >
              <PromotionCard
                key={partner.company}
                logoUrl={partner.logoUrl}
                altText={partner.company}
                company={partner.company}
                href={partner.href}
                badges={partner.badges}
                roles={[{
                  title: partner.title,
                  period: partner.period || (partner.start && partner.end ? `${partner.start} - ${partner.end}` : ""),
                  description: partner.description
                }]}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Research */}
      <section id="research" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="space-y-0.5 mb-8 mt-16">
            <h2 className="text-2xl font-medium tracking-tighter">Research Experience</h2>
            <p className="text-sm text-muted-foreground">Academic and laboratory research work.</p>
          </div>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-6 md:pr-16">
          {DATA.research.map((research: any, id) => (
            <BlurFade
              key={research.company}
              delay={BLUR_FADE_DELAY * 12 + id * 0.2}
            >
              <PromotionCard
                key={research.company}
                logoUrl={research.logoUrl}
                altText={research.company}
                company={research.company}
                href={research.href}
                badges={research.badges}
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
          <div className="space-y-0.5 mb-8 mt-16">
            <h2 className="text-2xl font-medium tracking-tighter">Clubs & Organizations</h2>
            <p className="text-sm text-muted-foreground">Student organizations and teams.</p>
          </div>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-6 md:pr-16">
          {DATA.clubs.map((club: any, id) => (
            <BlurFade
              key={club.company}
              delay={BLUR_FADE_DELAY * 14 + id * 0.2}
            >
              <PromotionCard
                key={club.company}
                logoUrl={club.logoUrl}
                altText={club.company}
                company={club.company}
                href={club.href}
                badges={club.badges}
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
