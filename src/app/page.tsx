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

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-20">
          <header>
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 lg:gap-16 items-start md:items-center">
              {/* Profile Image - Left */}
              <BlurFade delay={BLUR_FADE_DELAY * 1} blur="12px" duration={0.6}>
                <div className="relative md:ml-12 lg:ml-16">
                  <Image
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    width={200}
                    height={200}
                    className="h-36 w-36 md:h-48 md:w-48 lg:h-56 lg:w-56 object-cover rounded-2xl shadow-lg ring-2 ring-border"
                  />
                </div>
              </BlurFade>
              
              {/* Content - Right */}
              <div className="flex flex-col">
                {/* Name */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal mb-6 tracking-tight">
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

                {/* Headline - Sharp & Authoritative */}
                <BlurFadeText
                  className="text-xl md:text-2xl font-medium mb-3 leading-relaxed text-foreground tracking-tight"
                  delay={BLUR_FADE_DELAY * 2}
                  text="I architect and deploy production AI systems."
                />              

                {/* System Capabilities - 3 High-Level Bullets */}
                <BlurFade delay={BLUR_FADE_DELAY * 2.2} blur="12px">
                  <div className="mb-6 space-y-2 text-sm md:text-base text-foreground/80">
                    <div className="flex items-start gap-2.5">
                      <span className="text-primary mt-1 text-base">•</span>
                      <span>Retrieval and inference systems</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-primary mt-1 text-base">•</span>
                      <span>Distributed APIs with real observability</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-primary mt-1 text-base">•</span>
                      <span>Performance and cost discipline in production</span>
                    </div>
                  </div>
                </BlurFade>

                {/* Research Background - Inline */}
                <BlurFade delay={BLUR_FADE_DELAY * 2.6} blur="12px">
                  <p className="text-xs leading-relaxed text-muted-foreground/85 mb-6 max-w-2xl">
                    Background in electronic materials, hardware optimization, and quantum systems research—building intuition for physical constraints and system reliability that I now apply to production AI infrastructure.
                  </p>
                </BlurFade>

                {/* CTA Buttons - Products First */}
                <BlurFade delay={BLUR_FADE_DELAY * 3} blur="12px">
                  <div className="flex flex-wrap gap-3 mb-5">
                    <Link href="/products">
                      <Button size="default" className="font-medium">
                        View Products
                      </Button>
                    </Link>
                    <Link href="/RESUME_ARJUNK_SEPT25.pdf" target="_blank">
                      <Button variant="outline" size="default">
                        Resume
                      </Button>
                    </Link>
                    <Link href={DATA.contact.social.GitHub.url} target="_blank">
                      <Button variant="outline" size="default">
                        GitHub
                      </Button>
                    </Link>
                  </div>
                </BlurFade>

                {/* Availability & Education - Minimal */}
                <BlurFade delay={BLUR_FADE_DELAY * 3.4} blur="12px">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground/75">
                    <span>CS & MSE @ UIUC</span>
                    <span className="text-muted-foreground/40">•</span>
                    <span>Open to Remote / SF / NYC</span>
                  </div>
                </BlurFade>
              </div>
            </div>
          </header>
        </div>
      </div>

    </div>
  );
}
