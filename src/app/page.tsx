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
          {/* Info grid */}
          <div className="mt-10 space-y-4">
            {/* About - Full Width */}
            <BlurFade delay={BLUR_FADE_DELAY * 2.2} blur="12px">
              <div className="rounded-xl border bg-background/60 backdrop-blur p-4">
                <h3 className="text-sm font-medium mb-3">About</h3>
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Full-stack engineer with hands-on experience in <span className="text-foreground font-medium">AI infrastructure</span>, <span className="text-foreground font-medium">semiconductor materials</span>, and <span className="text-foreground font-medium">high-performance computing</span>.
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Built production systems handling 2k+ daily queries with GPU-accelerated vector search, optimized distributed caching layers (Redis/Postgres), and reduced p95 latency by 30% at scale.
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Researching nanofluidic energy harvesting and Coulomb drag in CNT-enhanced semiconductor channels at UIUC's Micro/Nano Lab — bridging materials physics with systems engineering.
                  </p>
                </div>
              </div>
            </BlurFade>

            {/* Latest Writing & Contact - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <BlurFade delay={BLUR_FADE_DELAY * 2.4} blur="12px">
                <Link href="/blog" className="block group h-full">
                  <div className="rounded-xl border bg-background/60 backdrop-blur p-4 hover:shadow-lg transition-all duration-200 h-full">
                    <h3 className="text-sm font-medium mb-3 group-hover:text-primary transition-colors">Latest Writing</h3>
                    <ul className="text-xs text-muted-foreground space-y-2">
                      <li className="group-hover:text-foreground transition-colors">
                        <span className="font-medium">Redis Latency Optimization</span>
                        <p className="text-[10px] mt-0.5">How I cut p95 latency by 30%</p>
                      </li>
                      <li className="group-hover:text-foreground transition-colors">
                        <span className="font-medium">GPU Vector Search</span>
                        <p className="text-[10px] mt-0.5">Building with FAISS + Triton</p>
                      </li>
                    </ul>
                    <p className="text-[10px] text-primary mt-3 font-medium">View all posts →</p>
                  </div>
                </Link>
              </BlurFade>
              
              <BlurFade delay={BLUR_FADE_DELAY * 2.6} blur="12px">
                <div className="rounded-xl border bg-background/60 backdrop-blur p-4 h-full">
                  <h3 className="text-sm font-medium mb-3">Contact</h3>
                  <div className="flex flex-col gap-1.5 text-xs text-muted-foreground">
                    <Link href={`mailto:${DATA.contact.email}`} className="hover:text-foreground transition-colors underline underline-offset-4">
                      {DATA.contact.email}
                    </Link>
                    <Link href={DATA.contact.social.GitHub.url} target="_blank" className="hover:text-foreground transition-colors underline underline-offset-4">
                      GitHub
                    </Link>
                    <Link href={DATA.contact.social.LinkedIn.url} target="_blank" className="hover:text-foreground transition-colors underline underline-offset-4">
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
