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
    <div className="relative h-screen w-full overflow-hidden">
      <BackgroundPaths />
      {/* Soft blur overlay above BG, keeps BG intact */}
      <div className="absolute inset-0 z-10 backdrop-blur-md bg-background/10"></div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr] gap-10 items-center">
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-4 tracking-tighter leading-[0.9] whitespace-nowrap">
                {words.map((word: string, wordIndex: number) => (
                  <span key={wordIndex} className="inline-block mr-2 md:mr-4 last:mr-0">
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
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h1>
              <div className="space-y-4">
                <BlurFadeText
                  className="text-xs md:text-sm max-w-3xl text-muted-foreground leading-relaxed"
                  delay={BLUR_FADE_DELAY * 2}
                  text={DATA.description}
                />
                <div className="flex flex-wrap items-center gap-1 text-[10px] -mt-1">
                  <span className="rounded-full border px-2 py-1 bg-foreground text-background hover:bg-background hover:text-foreground transition-colors duration-200">
                    {DATA.location}
                  </span>
                  <span className="rounded-full border px-2 py-1 bg-foreground text-background hover:bg-background hover:text-foreground transition-colors duration-200">
                    Software Engineer @ Rumor
                  </span>
                </div>
                <BlurFadeText
                  className="text-[10px] md:text-xs text-muted-foreground mt-2"
                  delay={BLUR_FADE_DELAY * 2.05}
                  text="Expertise in AI infrastructure, semiconductor materials, and high-performance computing — building systems at the intersection of software and hardware."
                />
                <div className="flex gap-2 pt-1">
                  <Link href={DATA.contact.social.LinkedIn.url} target="_blank">
                    <Button variant="outline" size="sm" className="h-8 px-3 font-normal">
                      LinkedIn
                    </Button>
                  </Link>
                  <Link href={`mailto:${DATA.contact.email}`} target="_blank">
                    <Button variant="secondary" size="sm" className="h-8 px-3 font-normal">
                      Email
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="justify-self-end">
              <BlurFade delay={BLUR_FADE_DELAY * 1.5} blur="12px" duration={0.6}>
                <Image
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                  width={320}
                  height={400}
                  className="h-40 w-40 md:h-48 md:w-48 object-cover rounded-xl shadow-2xl ring-1 ring-white/10"
                />
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
