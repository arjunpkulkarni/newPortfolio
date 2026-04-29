import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Share2,
  Zap,
  Library,
  Play,
  CalendarDays,
  BarChart3,
  Smartphone,
  Users,
  Bot,
  Database,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

import WorkoutsHub from "@/app/projects/pictures/fitfo/IMG_4966.PNG";
import WorkoutDetail from "@/app/projects/pictures/fitfo/IMG_4967.PNG";
import TrainingArchive from "@/app/projects/pictures/fitfo/IMG_4968.PNG";
import ScheduleAgain from "@/app/projects/pictures/fitfo/IMG_4969.PNG";
import ImportWorkout from "@/app/projects/pictures/fitfo/IMG_4970.PNG";
import ScheduledWorkouts from "@/app/projects/pictures/fitfo/IMG_4971.PNG";
import FitFoLogo from "@/app/projects/pictures/fitfo/fitfo-logo-dark.png";
import FitFoCoach from "@/app/projects/pictures/fitfo/fitfoCoach.png";

export const metadata: Metadata = {
  title: "FitFo  -  Turn Fitness Videos into Real Workouts",
  description:
    "Share a TikTok or Reel to FitFo and get a structured workout you can follow, edit, and track. Built for people who train.",
};

const howItWorks = [
  {
    step: "01",
    title: "Share a fitness video",
    desc: "Hit the share button on any public TikTok or Reel and pick FitFo. No copy-pasting, no leaving the app you were scrolling.",
    icon: Share2,
  },
  {
    step: "02",
    title: "AI does the work",
    desc: "Exercises, sets, reps, rest, notes  -  all extracted into a card you can edit, save, or start immediately.",
    icon: Zap,
  },
  {
    step: "03",
    title: "Train it, log it, repeat",
    desc: "Follow the workout in-app, log every set, and come back to the same plan any day of the week.",
    icon: Play,
  },
];

const features = [
  {
    icon: Share2,
    tag: "Import",
    title: "Share a video, get a workout",
    desc: "Hit share on any TikTok or Reel and send it straight to FitFo. Our AI pulls the audio, reads the on-screen text, and turns it into a clean, structured session.",
  },
  {
    icon: Library,
    tag: "Organize",
    title: "A library that knows what it is",
    desc: "Saved workouts, scheduled sessions, and logged history  -  each one tagged by muscle group and block so you can find them fast.",
  },
  {
    icon: Play,
    tag: "Train",
    title: "Edit, follow, log  -  no friction",
    desc: "Tap any field to change reps, weights, or notes. Start a session, log every set, and the next one opens automatically.",
  },
];

const coachPipeline = [
  {
    phase: "Discover",
    detail: "Apify crawls a creator's TikTok profile and upserts videos by platform ID for deduped ingestion.",
  },
  {
    phase: "Transcribe",
    detail: "TikWM, ffmpeg, and Whisper turn each source video into reusable transcript text with capped async concurrency.",
  },
  {
    phase: "Chunk",
    detail: "gpt-4.1-mini splits transcripts into self-contained training snippets and strips sponsor reads or pure CTAs.",
  },
  {
    phase: "Tag",
    detail: "A batched LLM pass assigns locked muscle, goal, exercise, and equipment tags that match SQL constraints.",
  },
  {
    phase: "Embed",
    detail: "text-embedding-3-small vectors land in pgvector with the model stored per row for future re-embedding.",
  },
];

const coachDecisions = [
  {
    icon: Database,
    title: "Postgres-native retrieval",
    desc: "Supabase Postgres + pgvector keeps storage, tag filters, approval status, HNSW cosine search, and citations in one source of truth.",
  },
  {
    icon: Search,
    title: "Filter before ranking",
    desc: "The match_content_chunks RPC narrows by creator, approval status, muscle groups, and goals before ranking top-K chunks by vector distance.",
  },
  {
    icon: ShieldCheck,
    title: "Grounded generation",
    desc: "Weak matches are dropped, empty retrieval skips the LLM, and every coaching claim must cite a retrieved chunk like [1].",
  },
];

const team = [
  { name: "nunoliftz", role: "Co-builder" },
  { name: "Jacob Oestreicher", role: "Co-builder" },
  { name: "Nirv", role: "Co-builder" },
];

export default function FitFoPage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-[500px] w-full overflow-hidden bg-gradient-to-b from-[#1a0a00] via-[#0d0604] to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(234,88,12,0.08)_0%,_transparent_60%)]" />

        <div className="container relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16 pt-32">
          <Link
            href="/products"
            className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="flex items-start gap-6 mb-6">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-white p-1.5">
              <Image src={FitFoLogo} alt="FitFo logo" fill className="object-contain p-1" />
            </div>
            <div className="space-y-2">
              <h1 className="text-5xl font-medium tracking-tight text-white md:text-6xl">
                FitFo
              </h1>
              <p className="text-lg text-gray-300 max-w-xl">
                Turn fitness videos into workouts you actually do.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-400 max-w-2xl mb-6 leading-relaxed">
            See a workout on TikTok or Reels? Share it straight to FitFo, the same way you&apos;d send it to a friend. Our AI parses the video, pulls the exercises, sets, and reps, and builds a clean workout you can follow, edit, and track.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="https://apps.apple.com/us/app/fitfo/id6762418380"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-[#ea580c] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#ea580c]/90"
            >
              <ExternalLink className="h-4 w-4" />
              Download on the App Store
            </Link>
            <Link
              href="https://www.fitfo.app/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Visit fitfo.app
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTENT ───────────────────────────────────────────────────── */}
      <div className="container mx-auto max-w-7xl px-4 py-16">

        {/* badges */}
        <div className="mb-12">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge variant="secondary">Live on iOS</Badge>
            <Badge variant="outline">Mobile App</Badge>
            <Badge variant="outline">AI/ML</Badge>
            <Badge variant="outline">Consumer Fitness</Badge>
          </div>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Built for people who scroll fitness content and want to actually train off it. Share a video, get a workout, track your progress  -  no ads, no social feed, just training.
          </p>
        </div>

        {/* proof metrics */}
        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-3">
          {[
            { value: "~30s", label: "To parse a video" },
            { value: "100%", label: "Private to you" },
            { value: "0", label: "Ads forever" },
          ].map((m) => (
            <div key={m.label} className="rounded-lg border bg-card p-5">
              <p className="text-2xl font-medium text-primary tabular-nums">{m.value}</p>
              <p className="text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>

        {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
        <div className="mb-20">
          <h2 className="mb-2 text-xl font-medium">How it works</h2>
          <p className="mb-10 text-sm text-muted-foreground">From inspiration to execution, in three steps.</p>

          <div className="grid gap-6 md:grid-cols-3">
            {howItWorks.map((step) => (
              <div key={step.step} className="rounded-xl border bg-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ea580c]/10 text-sm font-bold text-[#ea580c]">
                    {step.step}
                  </span>
                  <step.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="mb-2 text-sm font-medium">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* flow arrows */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {["Share Video", "AI Parsing", "Structured Workout", "Train & Log"].map((node, i, arr) => (
              <div key={node} className="flex items-center gap-2">
                <span className="rounded-lg border bg-card px-4 py-2 text-sm">{node}</span>
                {i < arr.length - 1 && <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />}
              </div>
            ))}
          </div>
        </div>

        {/* ── APP SCREENSHOTS ───────────────────────────────────────── */}
        <div className="mb-20">
          <h2 className="mb-2 text-xl font-medium">Inside the app</h2>
          <p className="mb-10 text-sm text-muted-foreground">Every screen is production. Here&apos;s what FitFo looks like in practice.</p>

          <div className="space-y-20">

            {/* 1. Import Workout */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-xs font-bold text-white">1</span>
                <h3 className="text-xl font-medium">Import Workout</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Paste a TikTok or Instagram Reel link and FitFo extracts the workout structure  -  exercises, sets, reps, and notes. You can also create a workout manually if you prefer.
              </p>
              <div className="ml-12 flex justify-center">
                <div className="overflow-hidden rounded-3xl border shadow-lg max-w-[300px]">
                  <Image src={ImportWorkout} alt="Import Workout screen" className="w-full h-auto" />
                </div>
              </div>
            </div>

            {/* 2. Workout Detail */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-xs font-bold text-white">2</span>
                <h3 className="text-xl font-medium">Workout Detail</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Every imported workout becomes a structured card  -  title, description, exercise count, muscle groups, and a direct link back to the source video. Start a session or save it for later.
              </p>
              <div className="ml-12 flex justify-center">
                <div className="overflow-hidden rounded-3xl border shadow-lg max-w-[300px]">
                  <Image src={WorkoutDetail} alt="Workout detail view" className="w-full h-auto" />
                </div>
              </div>
            </div>

            {/* 3. Workouts Library */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-xs font-bold text-white">3</span>
                <h3 className="text-xl font-medium">Your Workout Hub</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                All your saved workouts in one place, filterable by muscle group  -  Chest, Back, Shoulders, Arms. Each card shows the source, exercise count, and lets you start a session or unsave in one tap.
              </p>
              <div className="ml-12 flex justify-center">
                <div className="overflow-hidden rounded-3xl border shadow-lg max-w-[300px]">
                  <Image src={WorkoutsHub} alt="Workouts hub with saved library" className="w-full h-auto" />
                </div>
              </div>
            </div>

            {/* 4. Scheduled Workouts */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-xs font-bold text-white">4</span>
                <h3 className="text-xl font-medium">Schedule the Week</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Drop any saved workout onto a day. Get a clean calendar view of what&apos;s coming so you stop negotiating with yourself every morning. Tap a day to see what&apos;s planned.
              </p>
              <div className="ml-12 flex gap-4 justify-center flex-wrap">
                <div className="overflow-hidden rounded-3xl border shadow-lg max-w-[300px]">
                  <Image src={ScheduledWorkouts} alt="Scheduled workouts calendar" className="w-full h-auto" />
                </div>
                <div className="overflow-hidden rounded-3xl border shadow-lg max-w-[300px]">
                  <Image src={ScheduleAgain} alt="Schedule again modal" className="w-full h-auto" />
                </div>
              </div>
            </div>

            {/* 5. Training Archive */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-xs font-bold text-white">5</span>
                <h3 className="text-xl font-medium">Training Archive</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Every rep, on the record. Completed sessions turn into a clean archive  -  see how many workouts and sets you&apos;ve logged this month and schedule your best workouts again with a tap.
              </p>
              <div className="ml-12 flex justify-center">
                <div className="overflow-hidden rounded-3xl border shadow-lg max-w-[300px]">
                  <Image src={TrainingArchive} alt="Training archive and history" className="w-full h-auto" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── FITFO COACH ───────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="mb-8">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-[#ea580c]">
              <Bot className="h-3.5 w-3.5" />
              FitFo Coach
            </div>
            <h2 className="mb-3 text-2xl font-medium tracking-tight">
              A RAG-grounded, single-creator fitness coach chatbot.
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              FitFo Coach answers training questions in one coach&apos;s actual voice, grounded in their TikTok corpus instead of generic model memory. Inline citations let users verify any cue, claim, or programming recommendation against the original source video.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-3xl border bg-card p-4 shadow-lg">
              <div className="overflow-hidden rounded-2xl border bg-muted">
                <Image
                  src={FitFoCoach}
                  alt="FitFo Coach chatbot with cited training guidance"
                  className="h-auto w-full"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border bg-card p-6">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[#ea580c]">The problem</p>
                <h3 className="mb-3 text-lg font-medium">A coach bot that cannot hallucinate the coach.</h3>
                <div className="grid gap-3 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
                  {[
                    "Speaks like Jacob, not ChatGPT.",
                    "Answers from actual videos with link-backed citations.",
                    "Refuses anything outside training scope.",
                    "Uses the active workout to answer set-aware questions.",
                  ].map((item) => (
                    <div key={item} className="rounded-lg border bg-muted/30 px-3 py-2">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border bg-card p-6">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[#ea580c]">Architecture</p>
                <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                  TikTok profile -&gt; Apify crawl -&gt; Whisper transcript -&gt; LLM chunker -&gt; LLM tagger -&gt; OpenAI embeddings -&gt; pgvector HNSW search -&gt; grounded LLM synthesis -&gt; cited markdown answer
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-5">
            {coachPipeline.map((step, index) => (
              <div key={step.phase} className="rounded-xl border bg-card p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ea580c]/10 text-xs font-medium text-[#ea580c]">
                    {index + 1}
                  </span>
                  <h3 className="text-sm font-medium">{step.phase}</h3>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">{step.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {coachDecisions.map((decision) => (
              <div key={decision.title} className="rounded-xl border bg-card p-6">
                <div className="mb-3 inline-flex rounded-lg border bg-muted/50 p-2">
                  <decision.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="mb-2 text-sm font-medium">{decision.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{decision.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border bg-card p-6">
            <h3 className="mb-3 text-sm font-medium">What makes it production-ready</h3>
            <div className="grid gap-3 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
              {[
                "Five idempotent ingestion phases advance rows from pending to embedded, so crashes resume cleanly.",
                "Per-chunk approval status lets strong clips ship while bad snippets stay out of retrieval.",
                "SQL CHECK constraints enforce locked taxonomies for muscle groups and training goals.",
                "The mobile sheet sends active workout context with every message for set-aware coaching answers.",
              ].map((item) => (
                <div key={item} className="rounded-lg border bg-muted/30 p-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FEATURES GRID ─────────────────────────────────────────── */}
        <div className="mb-20">
          <h2 className="mb-2 text-xl font-medium">What you get</h2>
          <p className="mb-8 text-sm text-muted-foreground">A training app built for content scrollers.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border bg-card p-6">
                <div className="mb-3 inline-flex rounded-lg border bg-muted/50 p-2">
                  <f.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="mb-1 text-xs font-medium text-[#ea580c] uppercase tracking-wide">{f.tag}</p>
                <h3 className="mb-2 text-sm font-medium">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Calendar + Logs highlight */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border bg-card p-6">
              <div className="mb-3 inline-flex rounded-lg border bg-muted/50 p-2">
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="mb-1 text-xs font-medium text-[#ea580c] uppercase tracking-wide">Calendar</p>
              <h3 className="mb-2 text-sm font-medium">Schedule the week. Show up to it.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Drop any saved workout onto a day. Get a clean calendar view of what&apos;s coming so you stop negotiating with yourself every morning.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <div className="mb-3 inline-flex rounded-lg border bg-muted/50 p-2">
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="mb-1 text-xs font-medium text-[#ea580c] uppercase tracking-wide">Logs</p>
              <h3 className="mb-2 text-sm font-medium">Every rep, on the record.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Completed sessions turn into a clean archive. See how many sets you&apos;ve logged this month and schedule your best workouts again with a tap.
              </p>
            </div>
          </div>
        </div>

        {/* ── TEAM ──────────────────────────────────────────────────── */}
        <div className="mb-20">
          <h2 className="mb-2 text-xl font-medium">Built with</h2>
          <p className="mb-8 text-sm text-muted-foreground">Shipped alongside a crew that trains.</p>
          <div className="flex flex-wrap gap-3">
            {team.map((t) => (
              <div key={t.name} className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3">
                <Users className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── TECH STACK ────────────────────────────────────────────── */}
        <div className="mb-20">
          <h2 className="mb-2 text-xl font-medium">Technical Highlights</h2>
          <p className="mb-8 text-sm text-muted-foreground">What powers FitFo under the hood.</p>
          <div className="space-y-4">
            {[
              "Built AI video parsing pipeline that extracts exercises, sets, reps, and rest periods from TikTok and Instagram Reel content  -  handles spoken audio, on-screen text, and visual cues",
              "Designed native iOS app with Swift  -  workout library, calendar scheduling, session logging, and muscle group tagging with zero-friction UX",
              "Integrated iOS Share Extension so users can send videos directly from TikTok or Instagram to FitFo without leaving the app they were scrolling",
              "Built workout scheduling system with calendar view  -  drop any saved workout onto a day and see your training week at a glance",
              "Designed training archive with session history, set counting, and one-tap re-scheduling for completed workouts",
            ].map((b, i) => (
              <div key={i} className="flex gap-4 rounded-xl border bg-card p-6">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ea580c]/10 text-xs font-medium text-[#ea580c]">
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <div className="mb-16">
          <div className="rounded-xl border bg-card p-8 text-center">
            <div className="mb-4 inline-flex rounded-lg border bg-muted/50 p-3">
              <Smartphone className="h-6 w-6 text-muted-foreground" />
            </div>
            <h2 className="mb-2 text-xl font-medium">Live on iOS</h2>
            <p className="mb-6 mx-auto max-w-lg text-sm text-muted-foreground">
              Train with the content you already love. FitFo is available now on the App Store. Share your first TikTok or Reel and be lifting off a real plan in under a minute.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="https://apps.apple.com/us/app/fitfo/id6762418380"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg bg-[#ea580c] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#ea580c]/90"
              >
                <ExternalLink className="h-4 w-4" />
                Download on the App Store
              </Link>
              <Link
                href="https://www.fitfo.app/"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                Visit fitfo.app
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Questions? <a href="mailto:nirv@fitfo.app" className="underline hover:text-foreground">nirv@fitfo.app</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
