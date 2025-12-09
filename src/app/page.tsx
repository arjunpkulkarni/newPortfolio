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
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 z-5 bg-gradient-to-b from-background/5 via-transparent to-background/80"></div>
        {/* Soft blur overlay above BG, keeps BG intact */}
        <div className="absolute inset-0 z-10 backdrop-blur-sm"></div>

        <div className="relative z-20 w-full max-w-3xl mx-auto px-6 md:px-8 py-20">
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
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

              {/* Tagline */}
              <BlurFadeText
                className="text-lg md:text-xl font-medium mb-6 leading-relaxed text-muted-foreground"
                delay={BLUR_FADE_DELAY * 2}
                text="AI + full-stack engineer building real-time, user-facing intelligence systems."
              />

              {/* Subtitle - Article style */}
              <BlurFade delay={BLUR_FADE_DELAY * 2.5} blur="12px">
                <div className="mb-6 space-y-2">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Currently at <span className="text-foreground font-medium">Rumor</span> shipping mobile features for 50k+ users. Previously founding engineer at <span className="text-foreground font-medium">Curator.to</span> (Intel-backed, $1M raised).
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Interested in AI agents, real-time systems, and building things that actually matter.
                  </p>
                </div>
              </BlurFade>

              {/* Badges */}
              <BlurFade delay={BLUR_FADE_DELAY * 3} blur="12px">
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="text-xs px-2.5 py-1 rounded-md border bg-muted/30">
                    {DATA.location}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md border bg-muted/30">
                    Software Engineer @ Rumor
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md border bg-muted/30">
                    Open to remote + NYC + SF
                  </span>
                </div>
              </BlurFade>

              {/* CTA Buttons */}
              <BlurFade delay={BLUR_FADE_DELAY * 3.5} blur="12px">
                <div className="flex gap-3 mb-16">
                  <Link href={DATA.contact.social.LinkedIn.url} target="_blank">
                    <Button variant="outline" size="sm">
                      LinkedIn
                    </Button>
                  </Link>
                  <Link href={`mailto:${DATA.contact.email}`} target="_blank">
                    <Button size="sm">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </BlurFade>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              >
                <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                  <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
              </motion.div>
            </div>
          </header>
        </div>
      </div>

      {/* Content Section - Clean Background */}
      <div className="w-full bg-background">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
          {/* Article Content */}
          <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
            {/* About Section */}
            <BlurFade delay={BLUR_FADE_DELAY * 2.2} blur="12px">
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 pb-3 border-b-2">About</h2>
                <div className="space-y-4 text-base leading-relaxed">
                  <p>
                    I build real-time intelligent systems — AI agents, full-stack apps, and high-velocity mobile experiences. Currently shipping features at <strong>Rumor</strong> (50k+ users), previously founding engineer at <strong>Curator.to</strong> (Intel & UpHonest backed, $1M raised).
                  </p>
                  <p>
                    My work spans <strong>agentic e-commerce</strong> (2k+ daily queries, 30% latency reduction), <strong>clinical AI</strong> (UCSD Health dietician platform), and <strong>autonomous systems</strong> (RL + MPC for traffic optimization). I thrive at the intersection of AI infrastructure, systems engineering, and product.
                  </p>
                  <p>
                    Also researching nanofluidic energy harvesting at UIUC's Micro/Nano Lab — because the best software engineers understand hardware.
                  </p>
                </div>
              </section>
            </BlurFade>

            {/* What I'm Building Now Section */}
            <BlurFade delay={BLUR_FADE_DELAY * 2.3} blur="12px">
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 pb-3 border-b-2">What I'm Building Now</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">→ Rumor mobile features</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      React Native guest lists, RSVPs, and creator discovery for 50k+ event platform
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">→ Real-time LLM interaction platform</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      WebSockets + Flask for multi-user AI research at Beckman Institute
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">→ Nanofluidic energy systems</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      CNT-enhanced semiconductors for next-gen energy harvesting
                    </p>
                  </div>
                </div>
              </section>
            </BlurFade>

            {/* Why I Build Section */}
            <BlurFade delay={BLUR_FADE_DELAY * 2.35} blur="12px">
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 pb-3 border-b-2">Why I Build</h2>
                <div className="space-y-4 text-base leading-relaxed">
                  <p>
                    I believe the future belongs to engineers who can move between AI, systems, and real user problems without friction.
                  </p>
                  <p>
                    Whether it's cutting latency by 30% for e-commerce search, building clinical-grade AI for hospitals, or optimizing autonomous vehicle routing — I build systems that solve real problems at scale.
                  </p>
                  <p className="font-semibold text-lg">
                    Let's build something meaningful together.
                  </p>
                </div>
              </section>
            </BlurFade>

            {/* Latest Writing & Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 not-prose">
              <BlurFade delay={BLUR_FADE_DELAY * 2.4} blur="12px">
                <section>
                  <h2 className="text-3xl font-bold mb-6 pb-3 border-b-2">Latest Work</h2>
                  <Link href="/projects" className="block group">
                    <ul className="space-y-4">
                      <li className="group-hover:translate-x-1 transition-transform">
                        <span className="font-semibold text-base block mb-1 group-hover:text-primary">Training ML on 170k Songs</span>
                        <p className="text-sm text-muted-foreground">Real-time DJ recommendations with AWS Sagemaker</p>
                      </li>
                      <li className="group-hover:translate-x-1 transition-transform">
                        <span className="font-semibold text-base block mb-1 group-hover:text-primary">Redis Latency Optimization</span>
                        <p className="text-sm text-muted-foreground">How I cut p95 latency by 30%</p>
                      </li>
                    </ul>
                    <p className="text-sm text-primary mt-4 font-medium group-hover:underline">View all work →</p>
                  </Link>
                </section>
              </BlurFade>
              
              <BlurFade delay={BLUR_FADE_DELAY * 2.6} blur="12px">
                <section>
                  <h2 className="text-3xl font-bold mb-6 pb-3 border-b-2">Contact</h2>
                  <div className="flex flex-col gap-3 text-base">
                    <Link href={`mailto:${DATA.contact.email}`} className="hover:text-primary transition-colors underline underline-offset-4">
                      {DATA.contact.email}
                    </Link>
                    <Link href={DATA.contact.social.GitHub.url} target="_blank" className="hover:text-primary transition-colors underline underline-offset-4">
                      GitHub
                    </Link>
                    <Link href={DATA.contact.social.LinkedIn.url} target="_blank" className="hover:text-primary transition-colors underline underline-offset-4">
                      LinkedIn
                    </Link>
                  </div>
                </section>
              </BlurFade>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
