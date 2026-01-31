"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import BackgroundPaths from "@/components/background";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const BLUR_FADE_DELAY = 0.04;

export default function HomePage() {
  const words = ["Arjun", "Kulkarni"];
  return (
    <div className="relative w-full">
      {/* Hero Section with Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <BackgroundPaths />
        </div>
        {/* Gradient overlays for depth and readability */}
        <div className="absolute inset-0 z-5 bg-gradient-to-b from-background/5 via-transparent to-background/80"></div>
        {/* Improved contrast overlay for text readability */}
        <div className="absolute inset-0 z-8 bg-gradient-to-r from-background/85 via-background/40 to-transparent"></div>
        {/* Soft blur overlay above BG, keeps BG intact */}
        <div className="absolute inset-0 z-10 backdrop-blur-sm"></div>

        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-8 py-20">
          <header>
            <div className="flex flex-col">
              {/* Profile Image */}
              <BlurFade delay={BLUR_FADE_DELAY * 1} blur="12px" duration={0.6}>
                <div className="relative mb-6">
                  <Image
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    width={80}
                    height={80}
                    className="h-16 w-16 md:h-20 md:w-20 object-cover rounded-full shadow-lg ring-2 ring-border"
                  />
                </div>
              </BlurFade>
              
              {/* Name */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal mb-8 tracking-tight">
                {words.map((word: string, wordIndex: number) => (
                  <span key={wordIndex} className="inline-block mr-3 last:mr-0">
                    {word.split("").map((letter: string, letterIndex: number) => (
                      <motion.span
                        key={`${wordIndex}-${letterIndex}`}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: wordIndex * 0.1 + letterIndex * 0.03,
                          type: "spring",
                          stiffness: 150,
                          damping: 25,
                        }}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h1>

              {/* Headline - Specific & Outcome-Driven */}
              <BlurFadeText
                className="text-lg md:text-xl font-normal mb-3 leading-relaxed text-foreground"
                delay={BLUR_FADE_DELAY * 2}
                text={DATA.description}
              />              

              {/* Subline - Value Proposition */}
              <BlurFadeText
                className="text-md md:text-lg font-normal mb-6 leading-relaxed text-muted-foreground"
                delay={BLUR_FADE_DELAY * 2.2}
                text={DATA.summary}
              />     
              
              {/* Capabilities - Bullet Points */}
              <BlurFade delay={BLUR_FADE_DELAY * 2.4} blur="12px">
                <div className="mb-6 space-y-2 text-sm md:text-base text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>RAG pipelines + vector search (Pinecone, FAISS, QDrant) + intelligent caching</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Distributed services: APIs, message queues, real-time systems + observability</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Performance + cost optimization at scale (Redis, Postgres, cloud infra)</span>
                  </div>
                </div>
              </BlurFade>
              
              {/* Availability & Education */}
              <BlurFade delay={BLUR_FADE_DELAY * 2.6} blur="12px">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-md border bg-muted/30">
                    CS & MSE @ UIUC
                  </span>
                                 
                  <span className="text-xs px-2.5 py-1 rounded-md border bg-muted/30">
                    Open to Remote / SF / NYC
                  </span>
                  
                </div>
              </BlurFade>

              {/* Research Background */}
              <BlurFade delay={BLUR_FADE_DELAY * 2.8} blur="12px">
                <p className="text-xs text-muted-foreground/70 mb-6">
                  Research Experience: Electronic materials + hardware optimization + quantum computing research—strong systems intuition from physics background.
                </p>
              </BlurFade>

              {/* CTA Buttons */}
              <BlurFade delay={BLUR_FADE_DELAY * 3} blur="12px">
                <div className="flex gap-3 mb-4">
                  <Link href="/RESUME_ARJUNK_SEPT25.pdf" target="_blank">
                    <Button size="sm">
                      View Resume
                    </Button>
                  </Link>
                  <Link href={DATA.contact.social.LinkedIn.url} target="_blank">
                    <Button variant="outline" size="sm">
                      LinkedIn
                    </Button>
                  </Link>
                  <Link href={`mailto:${DATA.contact.email}`}>
                    <Button variant="outline" size="sm">
                      Email
                    </Button>
                  </Link>
                </div>
              </BlurFade>

              {/* Tech Stack Strip */}
              <BlurFade delay={BLUR_FADE_DELAY * 3.2} blur="12px">
                <div className="text-xs text-muted-foreground/60 font-mono">
                  Python • TypeScript • C++ • Postgres • Redis • Pinecone • Docker • AWS • LangChain • FastAPI • React
                </div>
              </BlurFade>

              
            </div>
          </header>
        </div>
      </div>
      
    </div>
  );
}
