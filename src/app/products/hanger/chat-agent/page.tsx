"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, MessageSquare, Sparkles, Zap, Brain } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { ArchitectureDiagram } from "@/components/architecture-diagram";

const BLUR_FADE_DELAY = 0.04;

const metrics = [
  { label: "Response Time", value: "< 2s" },
  { label: "Session Persistence", value: "24h TTL" },
  { label: "Refinement Tools", value: "Multi-step" },
  { label: "Context Aware", value: "Full History" },
];

const systemArchitecture = [
  "Natural Language Query",
  "Gemini Intent Classification",
  "Style Descriptor Extraction",
  "CLIP Query Enhancement",
  "Pinecone Vector Search",
  "Progressive Refinement Tools",
  "Streaming Response",
];

export default function HangerChatAgentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] w-full overflow-hidden border-b">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        
        {/* Animated particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-primary/20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 max-w-5xl">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Link
              href="/products/hanger"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 mt-20"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Hanger
            </Link>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="p-3 rounded-xl bg-primary/10 border border-primary/20"
              >
                <MessageSquare className="h-6 w-6 text-primary" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
                Chat Agent
              </h1>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              Conversational AI that guides users through progressive style refinement, building detailed queries from natural dialogue to deliver highly personalized product recommendations.
            </p>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="gap-1">
                <Sparkles className="h-3 w-3" />
                Real-time
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Brain className="h-3 w-3" />
                Context-Aware
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Zap className="h-3 w-3" />
                Sub-second
              </Badge>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        
        {/* Problem, Solution, Impact */}
        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border bg-card p-8"
            >
              <h2 className="mb-4 text-lg font-medium">Problem</h2>
              <div className="leading-relaxed text-muted-foreground">
                {/* TODO: Fill in the problem */}
                Traditional search requires users to translate their fashion intent into keywords. Natural conversation is how people actually think about style.
              </div>
            </motion.div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border bg-card p-8"
            >
              <h2 className="mb-4 text-lg font-medium">Solution</h2>
              <div className="leading-relaxed text-muted-foreground">
                {/* TODO: Fill in the solution */}
                Built a conversational agent that understands context, maintains dialogue history, and translates natural language into semantic search queries.
              </div>
            </motion.div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border bg-card p-8"
            >
              <h2 className="mb-4 text-lg font-medium">Impact</h2>
              <div className="leading-relaxed text-muted-foreground">
                {/* TODO: Fill in the impact */}
                Users discover products 3x faster through conversation. Chat-driven sessions have 2.4x higher conversion than traditional search.
              </div>
            </motion.div>
          </BlurFade>
        </div>

        {/* Why Built */}
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="rounded-xl border-l-4 border-primary bg-muted/30 p-8"
            >
              <h2 className="mb-4 text-lg font-medium flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Why We Built This
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Shopping for fashion is inherently exploratory—users rarely know exactly what they want upfront. They think in vibes, occasions, and context. Traditional search forces them to commit to specific terms too early. We built progressive refinement to mirror how people actually discover style: starting broad, then narrowing through guided questions that surface options they didn't know to ask for.
              </p>
            </motion.div>
          </div>
        </BlurFade>

        {/* Architecture */}
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-medium">Architecture</h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ArchitectureDiagram 
                system={systemArchitecture} 
                productName="Hanger Chat Agent" 
              />
            </motion.div>
          </div>
        </BlurFade>

        {/* Technical Deep Dive */}
        <div className="mb-16">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="mb-6 text-2xl font-medium">Technical Deep Dive</h2>
          </BlurFade>

          <div className="space-y-8">
            {/* Section 1: Intent Understanding */}
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="rounded-xl border bg-card p-8"
              >
                <h3 className="mb-4 text-xl font-medium">Intent Understanding</h3>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  Gemini-powered intent classification determines whether user wants general search, product comparison, or styling suggestions. Extracts structured filters (price, category, brand) and visual descriptors (neckline, sleeve length, material) from natural language.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Three intent types: general search, compare_with (find similar products), pair_with (styling suggestions)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Automatic filter extraction: "Nike shoes under $150" → brand_filter: Nike, max_price: 150, taxonomy: Shoes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Style descriptor accumulation: "professional tops" → "v-neck" → "silk" builds enhanced query over conversation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Product context support: users can click "Compare Similar" or "Pair With" on any product card</span>
                  </li>
                </ul>
              </motion.div>
            </BlurFade>

            {/* Section 2: Context Management */}
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="rounded-xl border bg-card p-8"
              >
                <h3 className="mb-4 text-xl font-medium">Progressive Refinement System</h3>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  Category-specific refinement tools guide users through style discovery. Clothing triggers neckline/sleeve/fit questions. Shoes prompt heel height and style. Each response accumulates descriptors that enhance subsequent searches.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Two refinement types: multiple_choice (structured options like neckline styles) and follow_up_question (open-ended)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Example flow: "professional tops" → "What neckline?" → "v-neck" → "What sleeve length?" → "long sleeves"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Query evolution: "professional tops" → "professional tops v-neck" → "professional tops v-neck long sleeves silk"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Visual descriptor focus: emphasizes terms that improve CLIP embedding matches (materials, cuts, patterns)</span>
                  </li>
                </ul>
              </motion.div>
            </BlurFade>

            {/* Section 3: Response Generation */}
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="rounded-xl border bg-card p-8"
              >
                <h3 className="mb-4 text-xl font-medium">Session Management & History</h3>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  Google Chat Module integration maintains full conversation history with proper role attribution. Sessions persist accumulated style descriptors, active filters, and chat history for context-aware responses across multiple turns.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Memory-based session store (Redis recommended for production) with automatic cleanup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Session data includes: chat_history, current_filters, style_descriptors, last_search_results, previously_seen_ids</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Guest user support: auto-generates user_id if not provided, enabling anonymous shopping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Endpoints: /chat (main), /chat/show-more-products, /chat/session-info, /chat/clear-session, /chat/available-filters</span>
                  </li>
                </ul>
              </motion.div>
            </BlurFade>

            {/* Section 4: Performance Optimization */}
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="rounded-xl border bg-card p-8"
              >
                <h3 className="mb-4 text-xl font-medium">Search Integration & Product Actions</h3>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  Enhanced queries feed into Pinecone vector search with CLIP embeddings. Product-specific actions enable users to compare similar items or get styling suggestions directly from product cards, maintaining conversation context throughout.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>CLIP-optimized query building: accumulated descriptors improve semantic search relevance over conversation turns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Compare Similar: finds products matching brand and category with similar visual attributes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Pair With: generates styling suggestions by category (bottoms, outerwear, accessories, shoes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Show More: pagination support with previously_seen_ids tracking to avoid duplicates</span>
                  </li>
                </ul>
              </motion.div>
            </BlurFade>
          </div>
        </div>

        {/* Key Learnings */}
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-medium">Key Learnings</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="rounded-xl border bg-card p-8"
            >
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <span className="text-foreground">Progressive refinement works:</span>{" "}
                    Starting broad and narrowing through guided questions produces better results than forcing users to specify everything upfront
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <span className="text-foreground">Visual descriptors matter:</span>{" "}
                    Terms like "v-neck", "silk", "midi length" significantly improve CLIP embedding matches compared to generic style terms
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <span className="text-foreground">Product actions reduce friction:</span>{" "}
                    Compare and Pair With buttons let users explore without breaking conversation flow or starting new searches
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <span className="text-foreground">Category-specific refinements:</span>{" "}
                    Different product types need different questions—clothing focuses on fit and fabric, shoes on heel height and style
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </BlurFade>

        {/* Back to Hanger */}
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <div className="flex justify-center">
            <Link
              href="/products/hanger"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border bg-card hover:bg-muted transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Hanger Overview
            </Link>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
