import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CheckCircle2,
  Database,
  Dumbbell,
  ExternalLink,
  MessageCircle,
  Server,
  Shield,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";

import CulinLogo from "@/app/projects/pictures/culin/culinAI.png";
import CulinDecisionImg from "@/app/projects/pictures/culin/image1.png";
import CulinMealImg from "@/app/projects/pictures/culin/image2.png";
import CulinNutritionImg from "@/app/projects/pictures/culin/image3.png";
import CulinGoalsImg from "@/app/projects/pictures/culin/image4.png";
import CulinPlanImg from "@/app/projects/pictures/culin/image5.png";

export const metadata: Metadata = {
  title: "Culin - The Food Decision Engine",
  description:
    "Culin is a food decision engine that combines macro tracking, nutrition intelligence, and next-meal generation.",
};

const architectureLanes = [
  {
    icon: Dumbbell,
    title: "Mobile App",
    items: ["React Native", "Expo Router", "TypeScript", "React Navigation", "AsyncStorage"],
  },
  {
    icon: Server,
    title: "API Layer",
    items: ["Next.js API routes", "FastAPI", "REST contracts", "Request validation", "Auth middleware"],
  },
  {
    icon: Database,
    title: "Nutrition Data",
    items: ["PostgreSQL", "USDA/FatSecret", "Pandas ETL", "RapidFuzz", "SQLAlchemy"],
  },
  {
    icon: Brain,
    title: "AI Engine",
    items: ["OpenAI", "Anthropic", "Gemini", "LangChain", "RAG/vector search"],
  },
  {
    icon: Shield,
    title: "Platform",
    items: ["AWS Cognito", "JWT/OIDC", "Docker", "DigitalOcean", "Env-based config"],
  },
];

const stack = [
  "React Native",
  "Expo Router",
  "TypeScript",
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "OpenAI",
  "Anthropic",
  "LangChain",
  "AWS Cognito",
  "USDA/FatSecret data",
  "Docker",
];

const engineeringSections = [
  {
    eyebrow: "Feature 01",
    image: CulinDecisionImg,
    icon: Sparkles,
    title: "Food Decision Engine",
    feature:
      "The core loop takes macro targets, time, taste, budget, location, and user intent, then returns one next meal instead of a ranked list of options.",
    built:
      "I modeled the product around a binary order-or-cook decision. The mobile client collects constraints with typed React Native flows, the API normalizes those inputs, and the scorer weighs macro fit, time-to-eat, cost, preference match, and confidence before the LLM writes the recommendation.",
    tools: ["React Native", "Expo Router", "TypeScript", "Next.js API routes", "FastAPI", "OpenAI"],
    infra: ["Typed request/response contracts", "Server-side scoring layer", "Environment-based model/provider config"],
    notes: ["Constraint collection lives in the mobile flow", "Decision scoring runs before generation", "LLM output is treated as presentation, not source of truth"],
  },
  {
    eyebrow: "Feature 02",
    image: CulinMealImg,
    icon: MessageCircle,
    title: "Next-Meal Generation Pipeline",
    feature:
      "Culin feels conversational, but the response is assembled from structured nutrition context, user memory, and validated output fields.",
    built:
      "The generation path builds a compact context packet with remaining macros, diet rules, recent meals, preferred cuisines, and candidate foods. The model returns a meal card with reasoning, substitutions, macro estimates, and a next action. Validation keeps the response usable by the mobile UI.",
    tools: ["OpenAI", "Anthropic", "LangChain", "LangGraph", "Google Gemini", "AWS Bedrock"],
    infra: ["Provider adapter layer", "Prompt/version configuration", "JSON response validation", "Fallback model routing"],
    notes: ["Structured context goes into the prompt", "Generated meals map directly to UI cards", "Provider swapping is isolated behind service adapters"],
  },
  {
    eyebrow: "Feature 03",
    image: CulinNutritionImg,
    icon: Database,
    title: "Nutrition Data Layer",
    feature:
      "The nutrition layer estimates calories, protein, carbs, and fats from real food data instead of relying on generic chatbot guesses.",
    built:
      "I designed ingestion and matching around USDA/FatSecret-style datasets, normalized food names, serving units, and macro fields, then used fuzzy matching to connect user-friendly food descriptions to structured records. This lets the app show macro confidence and explain where estimates came from.",
    tools: ["PostgreSQL", "Python", "Pandas", "NumPy", "scikit-learn", "RapidFuzz"],
    infra: ["ETL scripts", "CSV/TSV parsers", "Schema migrations", "Dockerized local services"],
    notes: ["Food records are normalized before retrieval", "Fuzzy matching handles messy user language", "Macro estimates are stored separately from generated prose"],
  },
  {
    eyebrow: "Feature 04",
    image: CulinGoalsImg,
    icon: Shield,
    title: "User Memory, Auth, and Protected State",
    feature:
      "Culin remembers goals, preferences, allergies, diet rules, and meal feedback so recommendations improve without making users re-enter context.",
    built:
      "The app separates local mobile state from account-backed state. Fast preferences can be cached on-device, while durable profile data and meal history live behind authenticated APIs. Cognito/OIDC and JWT verification protect user-specific endpoints.",
    tools: ["AWS Cognito", "JWT", "OIDC", "AsyncStorage", "PostgreSQL", "SQLAlchemy"],
    infra: ["Protected API routes", "Auth middleware", "Secure token handling", "Environment-scoped secrets"],
    notes: ["Onboarding answers become ranking signals", "Feedback updates preference weights", "Protected routes keep user nutrition history isolated"],
  },
  {
    eyebrow: "Feature 05",
    image: CulinPlanImg,
    icon: ShoppingCart,
    title: "Order-or-Cook Handoff",
    feature:
      "After the decision is made, the product turns it into an action: a restaurant-style order path or a grocery/cook path.",
    built:
      "The backend keeps the handoff modular. Restaurant/menu matching, grocery list generation, recipe ingredients, and external links can evolve independently while the mobile UI renders the same action card pattern. That keeps Culin from becoming tied to one vendor integration.",
    tools: ["FatSecret API", "Instacart concepts", "REST APIs", "Google Places", "Node pg", "FastAPI"],
    infra: ["Integration service modules", "External API configuration", "Retry/error boundaries", "Manual curl endpoint checks"],
    notes: ["Order and cook use the same decision contract", "Vendor integrations are adapter-based", "The UI only needs a normalized action payload"],
  },
];

const implementationHighlights = [
  "React Native/Expo mobile client with route-based screens, reusable nutrition cards, and local persistence for fast onboarding state.",
  "Next.js and FastAPI services split product-facing API work from heavier Python nutrition/data workflows.",
  "PostgreSQL-backed food, user, and recommendation records with migration-friendly schemas and explicit validation boundaries.",
  "LLM provider layer supports OpenAI, Anthropic, Gemini, and Bedrock-style integrations without coupling UI logic to a single model.",
  "Dockerized services and environment-based configuration make local testing, deployment, and API troubleshooting repeatable.",
];

export default function CulinPage() {
  return (
    <div className="min-h-screen bg-[#07120A] text-[#FBFCF8]">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#07120A] via-[#0D1F10] to-[#07120A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(61,187,47,0.18)_0%,_transparent_58%)]" />
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-[#3DBB2F]/15 blur-3xl" />
        <div className="absolute right-[-7rem] top-10 h-96 w-96 rounded-full bg-[#42C92F]/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#1F8F22]/15 blur-3xl" />

        <div className="container relative mx-auto max-w-7xl px-4 pb-20 pt-28">
          <Link
            href="/products"
            className="mb-10 inline-flex w-fit items-center gap-2 text-sm text-[#C9D2C5] transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-6 flex items-start gap-6">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-white p-1.5 shadow-[0_18px_50px_rgba(61,187,47,0.22)]">
                  <Image src={CulinLogo} alt="Culin logo" fill className="object-contain p-2" priority />
                </div>
                <div className="space-y-2">
                  <h1 className="text-4xl font-medium tracking-tight text-white md:text-5xl">
                    Culin
                  </h1>
                  <p className="text-base text-[#C9D2C5] md:text-lg">
                    The Food Decision Engine
                  </p>
                </div>
              </div>

              <p className="max-w-2xl text-lg font-medium leading-tight text-[#EAF6E3] md:text-xl">
                MyFitnessPal plus ChatGPT, backed by a real nutrition layer.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#C9D2C5] md:text-base">
                Culin v1 is a full-stack mobile AI product that turns macro goals, taste preferences, restaurant/grocery context, and user history into one next-meal decision. This page breaks down the features, data pipelines, tools, and infrastructure behind it.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="https://culin.ai"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-lg bg-[linear-gradient(135deg,#42C92F,#2FAE25)] px-6 py-3 text-sm font-medium text-white shadow-[0_18px_45px_rgba(61,187,47,0.28)] transition-transform hover:-translate-y-0.5"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Live
                </Link>
                <a
                  href="#engineering"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white shadow-[0_12px_35px_rgba(61,187,47,0.12)] backdrop-blur transition-colors hover:bg-white/15"
                >
                  Engineering Breakdown
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[640px]">
              <div className="absolute inset-8 rounded-[3rem] bg-[#3DBB2F]/15 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-[0_28px_90px_rgba(61,187,47,0.18)] backdrop-blur">
                <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white shadow-[0_18px_50px_rgba(61,187,47,0.18)]">
                  <Image src={CulinDecisionImg} alt="Culin decision screen" className="h-auto w-full" priority />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <main>
        <section className="container mx-auto max-w-7xl px-4 py-16">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#8EE47D]">
                System Overview
              </p>
              <h2 className="text-3xl font-medium tracking-tight text-[#FBFCF8] md:text-4xl">
                Product surface backed by a nutrition decision stack.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#C9D2C5]">
              The page is organized the same way the product is built: mobile client, API layer, nutrition data, AI reasoning, auth, and deployment.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-5">
            {architectureLanes.map((lane) => (
              <div
                key={lane.title}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_18px_55px_rgba(61,187,47,0.10)]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#3DBB2F]/15 text-[#8EE47D]">
                  <lane.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-4 text-sm font-semibold text-[#FBFCF8]">{lane.title}</h3>
                <div className="space-y-2">
                  {lane.items.map((item) => (
                    <div key={item} className="rounded-xl bg-white/[0.07] px-3 py-2 text-xs font-medium text-[#C9D2C5]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="engineering" className="relative overflow-hidden bg-gradient-to-b from-[#07120A] via-[#0B1A0E] to-[#07120A] py-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(61,187,47,0.10)_0%,_transparent_62%)]" />
          <div className="container mx-auto max-w-7xl px-4">
            <div className="relative mb-12">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#8EE47D]">
                Feature Breakdown
              </p>
              <h2 className="text-3xl font-medium tracking-tight text-[#FBFCF8] md:text-4xl">
                Each product screen maps to a concrete engineering subsystem.
              </h2>
            </div>

            <div className="relative space-y-10">
              {engineeringSections.map((section, index) => (
                <div
                  key={section.title}
                  className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_22px_70px_rgba(61,187,47,0.13)] backdrop-blur lg:grid-cols-[1.05fr_1fr] lg:items-center lg:p-8"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="mx-auto max-w-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-white p-3 shadow-[0_18px_55px_rgba(61,187,47,0.18)]">
                      <Image src={section.image} alt={`${section.title} screen`} className="h-auto w-full rounded-[1.5rem]" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#3DBB2F]/15 text-[#8EE47D]">
                        <section.icon className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8EE47D]">
                        {section.eyebrow}
                      </p>
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight text-[#FBFCF8] md:text-3xl">
                      {section.title}
                    </h3>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8EE47D]">
                          Feature
                        </p>
                        <p className="text-sm leading-relaxed text-[#C9D2C5]">{section.feature}</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8EE47D]">
                          How I Built It
                        </p>
                        <p className="text-sm leading-relaxed text-[#C9D2C5]">{section.built}</p>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#8EE47D]">
                          Tools
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {section.tools.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-xs font-medium text-[#C9D2C5]"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#8EE47D]">
                          Infra / Engineering
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {section.infra.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-[#3DBB2F]/20 bg-[#3DBB2F]/10 px-3 py-1.5 text-xs font-medium text-[#C9D2C5]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2">
                      {section.notes.map((note) => (
                        <div key={note} className="flex gap-3 text-sm text-[#C9D2C5]">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8EE47D]" />
                          <span>{note}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0B1A0E] py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#8EE47D]">
                  Implementation Map
                </p>
                <h2 className="text-3xl font-medium tracking-tight text-[#FBFCF8]">
                  The engineering surface area behind Culin v1.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#C9D2C5]">
                  The project combines mobile app development, API contracts, AI orchestration, auth, data ingestion, and deployment work into one cohesive product.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_18px_55px_rgba(61,187,47,0.12)] backdrop-blur">
                <div className="flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-xs font-medium text-[#C9D2C5]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {implementationHighlights.slice(0, 3).map((highlight) => (
                    <div key={highlight} className="rounded-2xl bg-white/[0.07] p-4">
                      <CheckCircle2 className="mb-3 h-4 w-4 text-[#8EE47D]" />
                      <p className="text-xs leading-relaxed text-[#C9D2C5]">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto max-w-5xl px-4 py-16">
          <div className="mb-8 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#8EE47D]">
              Engineering Notes
            </p>
            <h2 className="text-3xl font-medium tracking-tight text-[#FBFCF8]">What the project demonstrates</h2>
          </div>

          <div className="space-y-3">
            {implementationHighlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_10px_30px_rgba(61,187,47,0.08)]"
              >
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8EE47D]" />
                  <p className="text-sm leading-relaxed text-[#C9D2C5]">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto max-w-7xl px-4 pb-20">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(61,187,47,0.16))] p-8 text-center shadow-[0_24px_80px_rgba(61,187,47,0.18)] backdrop-blur md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8EE47D]">
              Active product
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#FBFCF8] md:text-5xl">
              Food decisions, built as infrastructure.
            </h2>
            <Link
              href="https://culin.ai"
              target="_blank"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#42C92F,#2FAE25)] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(61,187,47,0.28)] transition-transform hover:-translate-y-0.5"
            >
              View culin.ai
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
