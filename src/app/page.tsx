"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import BackgroundPaths from "@/components/background";
import { motion } from "framer-motion";

const BLUR_FADE_DELAY = 0.04;

export default function HomePage() {
  const words = ["Arjun", "Kulkarni"];
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <BackgroundPaths />
      
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-40 border-4 border-white/20 shadow-2xl">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            </Avatar>
          </BlurFade>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
            {words.map((word: string, wordIndex: number) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
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
                    className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                                        dark:from-white dark:to-white/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1> 
          
          <div className="text-center space-y-6 w-full">
            <BlurFadeText
              className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto text-muted-foreground leading-relaxed"
              delay={BLUR_FADE_DELAY * 2}
              text={DATA.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
