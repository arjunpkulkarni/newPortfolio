import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  Users,
  FileText,
  Calendar,
  CreditCard,
  BarChart3,
  Brain,
  Lock,
  Database,
  Zap,
  CheckCircle,
  AlertTriangle,
  Activity,
  Mic,
  Eye,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

import DashboardImg from "@/app/projects/pictures/congruence/Dashboard.png";
import AppointmentsImg from "@/app/projects/pictures/congruence/Appointments.png";
import BillingImg from "@/app/projects/pictures/congruence/Billing.png";
import ClinicalDocReport1Img from "@/app/projects/pictures/congruence/ClinicalDocumentationReport.png";
import ClinicalDocReport2Img from "@/app/projects/pictures/congruence/ClinicalDocumentationReport2.png";
import GenerateInsuranceImg from "@/app/projects/pictures/congruence/GenerateInsurancePacket.png";
import ICDCodesImg from "@/app/projects/pictures/congruence/ICDCodesInsurance.png";
import PatientIntakeImg from "@/app/projects/pictures/congruence/PatientPageIntake.png";
import PatientRecordingsImg from "@/app/projects/pictures/congruence/PatientPageRecordings.png";
import PatientReviewImg from "@/app/projects/pictures/congruence/PatientPageReview.png";
import ReviewInsuranceImg from "@/app/projects/pictures/congruence/ReviewInsurancePacket.png";
import TeamManagementImg from "@/app/projects/pictures/congruence/TeamManagement.png";
import AgentImg from "@/app/projects/pictures/congruence/Agent.png";

export const metadata: Metadata = {
  title: "Congruence — Documentation OS for Therapy Practices",
  description:
    "AI-powered clinical documentation platform that standardizes psychotherapy notes, supervision workflows, booking, billing, and insurance claims.",
};

const workflowSteps = [
  { label: "Session Capture",    icon: Mic },
  { label: "Note Structuring",   icon: FileText },
  { label: "Risk Detection",     icon: AlertTriangle },
  { label: "Compliance",         icon: CheckCircle },
  { label: "Admin Dashboard",    icon: BarChart3 },
  { label: "Supervision",        icon: Eye },
];

const features = [
  {
    icon: Shield,
    title: "Invite-only RBAC",
    desc: "3-tier role system (super_admin → admin → clinician) with single-use invite tokens. Every route and table enforced via Supabase RLS with active-status checks.",
    tags: ["Supabase RLS", "JWT", "Deno Edge"],
  },
  {
    icon: Users,
    title: "Patient Dashboard",
    desc: "Searchable patient table with triage strip, clinical tags, risk-level indicators, and a detail panel with session metrics and trend arrows.",
    tags: ["React 18", "Pagination", "Triage"],
  },
  {
    icon: FileText,
    title: "Client Forms System",
    desc: "SHA-256 token-hashed secure links, multi-step wizard with 10 field types, dynamic SchemaFormRenderer, server-side validation via public edge endpoints.",
    tags: ["SHA-256", "Deno Edge", "Schema-driven"],
  },
  {
    icon: Calendar,
    title: "Scheduling",
    desc: "Per-clinician availability rules, blocked-day exceptions, approval-gated booking links, and a has_time_conflict() DB function preventing double-booking.",
    tags: ["PostgreSQL", "Edge Functions", "Conflict Detection"],
  },
  {
    icon: CreditCard,
    title: "Billing + Insurance",
    desc: "Stripe Connect multi-tenant billing with commission splits, QuickBooks-inspired invoicing, CSV exports, and AI-assisted CMS-1500 insurance packet generation.",
    tags: ["Stripe Connect", "Gemini AI", "CMS-1500"],
  },
  {
    icon: BarChart3,
    title: "Admin Portal",
    desc: "Super-admin launchpad with clinic management, global user controls, bulk onboarding (50 users), assignment maps, audit logs, and usage analytics.",
    tags: ["Audit Logs", "Analytics", "Multi-tenant"],
  },
];

const aiInputs = [
  { icon: Mic,        label: "Voice tone shifts" },
  { icon: Eye,        label: "Facial affect patterns" },
  { icon: FileText,   label: "Language incongruence" },
  { icon: TrendingUp, label: "Cross-session escalation" },
];

const aiOutputs = [
  "Timestamped markers",
  "Pattern mapping",
  "Escalation flags",
  "Insurance-ready documentation",
];

const archLanes = [
  {
    label: "Frontend",
    items: ["React 18", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    label: "Platform",
    items: ["Supabase Postgres", "Row-Level Security", "Supabase Storage", "Auth + RLS"],
  },
  {
    label: "Edge — 11 Functions",
    items: ["Deno Runtime", "Invites + Booking", "Client Forms", "Billing + Webhooks", "AI Proxy"],
  },
  {
    label: "AI Layer",
    items: ["FastAPI (Python)", "DeepFace Emotion", "Gemini 2.5 Flash", "CMS-1500 Generation"],
  },
];

const securityPoints = [
  { icon: Lock,        label: "HIPAA-aligned RLS on every table" },
  { icon: Database,    label: "Clinic-scoped data isolation" },
  { icon: Shield,      label: "SHA-256 token hashing for client links" },
  { icon: FileText,    label: "Audit logs + admin oversight portal" },
  { icon: CheckCircle, label: "Active-status enforcement across all operations" },
  { icon: Zap,         label: "Service-role-only unauthenticated access patterns" },
];

const resumeBullets = [
  "Architected full-stack clinical SaaS with 3-tier RBAC, invite-only onboarding, and HIPAA-aligned RLS across 40+ Supabase tables with clinic-scoped data isolation",
  "Engineered 5-step gated patient workspace and AI session analysis pipeline (DeepFace emotion timelines + Gemini 2.5 Flash) producing clinical summaries, risk flags, and therapeutic recommendations",
  "Shipped 11 Deno Edge Functions covering AI insurance packet generation (CMS-1500), Stripe Connect multi-tenant billing with commission splits, calendar booking with double-booking prevention, and multi-step client forms with SHA-256 token security",
  "Built super-admin portal with audit logs, bulk onboarding (50 users), role/status management, and usage analytics across all clinics",
];

export default function CongruencePage() {
  return (
    <div className="min-h-screen">

      {/* ── VIDEO HERO ────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/demos/congruence.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />

        <div className="container relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16">
          <Link
            href="/products"
            className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="space-y-4">
            <h1 className="text-5xl font-medium tracking-tight text-white md:text-6xl">
              Congruence
            </h1>
            <p className="text-lg text-gray-300">Documentation OS for Therapy Practices</p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="https://congruenceinsights.com"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <ExternalLink className="h-4 w-4" />
                View Live
              </Link>
              <a
                href="#architecture"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Architecture
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ───────────────────────────────────────────────────── */}
      <div className="container mx-auto max-w-7xl px-4 py-16">

        {/* badges + tagline */}
        <div className="mb-12">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge variant="secondary">Live</Badge>
            <Badge variant="outline">Healthcare SaaS</Badge>
            <Badge variant="outline">Full-Stack</Badge>
          </div>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Standardized psychotherapy notes. Insurance-ready progress notes. Real-time supervision
            visibility — for 5–25 clinician practices that need audit-ready ops, not another EHR.
          </p>
        </div>

        {/* proof metrics */}
        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-6">
          {[
            { value: "11",      label: "Edge Functions" },
            { value: "40+",     label: "DB Tables (RLS)" },
            { value: "5",       label: "Workflow Stages" },
            { value: "3-tier",  label: "RBAC" },
            { value: "10",      label: "Form Field Types" },
            { value: "SHA-256", label: "Token Security" },
          ].map((m) => (
            <div key={m.label} className="rounded-lg border bg-card p-4">
              <p className="text-xl font-medium text-primary tabular-nums">{m.value}</p>
              <p className="text-xs text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>

        {/* problem / solution / impact */}
        <div className="mb-16 grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border bg-card p-6">
            <h2 className="mb-3 text-sm font-medium text-muted-foreground uppercase tracking-wide">Problem</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Multi-clinician therapy practices run on fragmented workflows. Each clinician documents
              differently. Admins have no structured visibility into notes, risk signals, or billing
              status. Insurance audits are increasing. Revenue leaks.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h2 className="mb-3 text-sm font-medium text-muted-foreground uppercase tracking-wide">Solution</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A Documentation OS — not a note-taking app. Every session is structured into a compliant,
              reviewable workflow with AI-generated notes, supervision dashboards, and an integrated
              billing + insurance pipeline.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h2 className="mb-3 text-sm font-medium text-muted-foreground uppercase tracking-wide">Why I Built It</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Therapy practices are running on spreadsheets and PDFs. Built Congruence to give
              clinicians an operations layer that handles the admin so they can focus on the patient.
            </p>
          </div>
        </div>

        {/* ── WORKFLOW PIPELINE ───────────────────────────────────────── */}
        <div className="mb-16">
          <h2 className="mb-2 text-xl font-medium">Core Workflow</h2>
          <p className="mb-8 text-sm text-muted-foreground">Every session becomes structured data.</p>

          <div className="flex flex-wrap items-center justify-start gap-2">
            {workflowSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <div className="flex items-center gap-2 rounded-lg border bg-card px-4 py-3">
                  <step.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{step.label}</span>
                </div>
                {i < workflowSteps.length - 1 && (
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>

          {/* 5-stage detail */}
          <div className="mt-6 grid gap-3 md:grid-cols-5">
            {[
              { stage: "Intake",    detail: "Template-driven form packets, document uploads, consent checklist gates" },
              { stage: "Recording", detail: "In-browser MediaRecorder video/audio → Supabase Storage" },
              { stage: "Analysis",  detail: "DeepFace emotion timeline + Gemini 2.5 Flash clinical summary + risk flags" },
              { stage: "Progress",  detail: "Patient progress timeline visualization across sessions" },
              { stage: "Insurance", detail: "Payer profile + AI-generated CMS-1500 reauthorization packet" },
            ].map((s) => (
              <div key={s.stage} className="rounded-lg border bg-card p-4">
                <p className="mb-1 text-xs font-medium text-primary">{s.stage}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── FEATURE GRID ────────────────────────────────────────────── */}
        <div className="mb-16">
          <h2 className="mb-2 text-xl font-medium">Key Features I Built</h2>
          <p className="mb-8 text-sm text-muted-foreground">Full clinical operations — one platform.</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border bg-card p-5">
                <div className="mb-3 inline-flex rounded-lg border bg-muted/50 p-2">
                  <f.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="mb-2 text-sm font-medium">{f.title}</h3>
                <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {f.tags.map((t) => (
                    <span key={t} className="rounded border bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── AI PIPELINE ─────────────────────────────────────────────── */}
        <div className="mb-16">
          <h2 className="mb-2 text-xl font-medium">AI Pipeline</h2>
          <p className="mb-8 text-sm text-muted-foreground">Signals clinicians might miss.</p>

          <div className="grid gap-4 lg:grid-cols-3">
            {/* Inputs */}
            <div className="rounded-xl border bg-card p-5">
              <p className="mb-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Input Signals</p>
              <div className="space-y-2">
                {aiInputs.map((inp) => (
                  <div key={inp.label} className="flex items-center gap-3 rounded-lg border bg-muted/30 p-3">
                    <inp.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{inp.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engine */}
            <div className="flex flex-col items-center justify-center rounded-xl border bg-card p-5 text-center">
              <div className="mb-3 inline-flex rounded-full border bg-muted/50 p-3">
                <Brain className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="mb-1 text-sm font-medium">AI Engine</p>
              <p className="mb-4 text-xs text-muted-foreground">DeepFace + Gemini 2.5 Flash</p>
              <div className="w-full space-y-1.5 text-left">
                {[
                  "Multimodal emotion detection",
                  "Affect-language incongruence scoring",
                  "Cross-session escalation patterns",
                  "Clinical summary generation",
                  "Risk flag classification",
                ].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <Activity className="h-3 w-3 shrink-0 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{s}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                <span className="rounded border bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground">FastAPI</span>
                <span className="rounded border bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground">Deno Edge proxy</span>
              </div>
            </div>

            {/* Outputs */}
            <div className="rounded-xl border bg-card p-5">
              <p className="mb-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Output</p>
              <div className="space-y-2">
                {aiOutputs.map((out) => (
                  <div key={out} className="rounded-lg border bg-muted/30 p-3">
                    <p className="text-sm text-muted-foreground">{out}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-lg border bg-muted/20 p-3">
                <p className="text-xs font-medium">No-Hallucination Policy</p>
                <p className="text-xs text-muted-foreground">
                  [BRACKETED PLACEHOLDERS] for missing data. AI never invents clinical information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── AI AGENT ARCHITECTURE ───────────────────────────────────── */}
        <div className="mb-16">
          <h2 className="mb-2 text-2xl font-medium">The AI Agent: How We Built It</h2>
          <p className="mb-8 text-sm text-muted-foreground max-w-3xl">
            Our multimodal AI agent is the core intelligence layer that transforms raw therapy sessions into structured clinical insights. Here&apos;s the complete architecture from data ingestion to clinical output.
          </p>

          {/* Agent Architecture Diagram */}
          <div className="mb-10 overflow-hidden rounded-xl border shadow-lg">
            <Image src={AgentImg} alt="AI Agent Architecture" className="w-full h-auto" />
          </div>

          {/* Why We Built It This Way */}
          <div className="mb-8 rounded-xl border bg-card p-6">
            <h3 className="mb-4 text-lg font-medium">Why We Built It This Way</h3>
            <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
              Traditional therapy documentation is reactive — clinicians write notes after the session ends, relying on memory and missing critical non-verbal cues. We needed an AI system that could process multimodal signals in real-time, detect emotional incongruence that humans miss, and generate clinically grounded documentation without hallucinating.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The agent architecture solves three core challenges: <strong>(1) Multimodal fusion</strong> — combining video, audio, and text into a unified emotional timeline; <strong>(2) Clinical grounding</strong> — ensuring every insight is traceable to actual session data with timestamps; <strong>(3) Real-time performance</strong> — processing 60 FPS video + 16kHz audio with &lt;200ms latency for live session support.
            </p>
          </div>

          {/* Technical Deep Dive */}
          <div className="space-y-6">
            
            {/* Data Layer */}
            <div className="rounded-xl border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <Database className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Data Layer: Multimodal Session Processing</h3>
              </div>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                The agent ingests three parallel data streams from each therapy session and synchronizes them into a unified timeline. This data layer is the foundation for all downstream analysis.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border bg-muted/30 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Eye className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-medium">Video Stream</h4>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex gap-2"><span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/60" /><span><strong>Input:</strong> 60 FPS video from session recording</span></li>
                    <li className="flex gap-2"><span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/60" /><span><strong>Processing:</strong> DeepFace CNN extracts 7 emotion classes per frame (happy, sad, angry, fear, surprise, disgust, neutral)</span></li>
                    <li className="flex gap-2"><span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/60" /><span><strong>Output:</strong> Emotion timeline with confidence scores, aggregated into 10-second windows</span></li>
                    <li className="flex gap-2"><span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/60" /><span><strong>Storage:</strong> JSON array stored in <code className="bg-muted px-1 py-0.5 rounded">video_analysis</code> table with session_id FK</span></li>
                  </ul>
                </div>
                <div className="rounded-lg border bg-muted/30 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Mic className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-medium">Audio Stream</h4>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex gap-2"><span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/60" /><span><strong>Input:</strong> 16kHz audio from session recording</span></li>
                    <li className="flex gap-2"><span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/60" /><span><strong>Processing:</strong> Whisper transcribes speech-to-text with word-level timestamps; Wav2Vec2 extracts voice stress patterns</span></li>
                    <li className="flex gap-2"><span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/60" /><span><strong>Output:</strong> Timestamped transcript + voice stress markers (pitch shifts, pauses, vocal tremor)</span></li>
                    <li className="flex gap-2"><span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/60" /><span><strong>Storage:</strong> Transcript text in <code className="bg-muted px-1 py-0.5 rounded">transcripts</code> table; stress markers in <code className="bg-muted px-1 py-0.5 rounded">audio_analysis</code></span></li>
                  </ul>
                </div>
                <div className="rounded-lg border bg-muted/30 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-medium">Language Stream</h4>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex gap-2"><span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/60" /><span><strong>Input:</strong> Whisper transcript from audio stream</span></li>
                    <li className="flex gap-2"><span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/60" /><span><strong>Processing:</strong> Sentiment analysis per utterance using RoBERTa fine-tuned on clinical psychology text</span></li>
                    <li className="flex gap-2"><span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/60" /><span><strong>Output:</strong> Sentiment scores (positive/negative/neutral) aligned to transcript timestamps</span></li>
                    <li className="flex gap-2"><span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/60" /><span><strong>Storage:</strong> Sentiment array stored alongside transcript in <code className="bg-muted px-1 py-0.5 rounded">transcripts</code> table</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Multimodal Fusion Engine */}
            <div className="rounded-xl border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <Brain className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Multimodal Fusion Engine</h3>
              </div>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                The fusion engine synchronizes all three data streams into a unified emotional state representation. This is where we detect incongruence — when facial expressions, voice stress, and language sentiment don&apos;t align.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Temporal Alignment</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>All streams aligned to 10-second windows — video emotions averaged per window, audio stress aggregated, transcript sentiment mapped to overlapping utterances</span></li>
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Redis stores synchronized timeline during processing — enables real-time progress updates to frontend</span></li>
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Final timeline stored as JSON: <code className="text-xs bg-muted px-1 py-0.5 rounded">[&#123;window_start, video_emotion, audio_stress, text_sentiment, congruence_score&#125;]</code></span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Incongruence Detection</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Congruence score (0–100) computed per window: measures alignment between facial affect, voice stress, and language sentiment</span></li>
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Low scores (&lt;60) flag &quot;masked emotion&quot; — e.g., patient says &quot;I&apos;m fine&quot; (positive sentiment) while showing sad facial affect + high voice stress</span></li>
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Flagged windows stored as <code className="text-xs bg-muted px-1 py-0.5 rounded">incongruence_flags</code> with severity level — surfaced to clinicians in Analysis Review tab</span></li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">LLM Synthesis Layer</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Gemini 2.5 Flash receives: full transcript, emotion timeline, voice stress markers, incongruence flags</span></li>
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Generates structured clinical report: session themes, behavioral observations, risk indicators, recommendations</span></li>
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Every claim in the report must cite a timestamp range — forces grounding in actual session data</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Performance Optimization</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Parallel processing: video, audio, and text streams processed concurrently on separate workers</span></li>
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>GPU acceleration for DeepFace CNN inference — batch processing 60 frames at once reduces latency from 800ms to &lt;200ms per window</span></li>
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Redis fusion cache stores intermediate results — if processing fails mid-session, we resume from last checkpoint instead of restarting</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Layer Details */}
            <div className="rounded-xl border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <Database className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Data Layer: Storage & Retrieval Strategy</h3>
              </div>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                Every piece of session data flows through a carefully designed storage layer that balances query performance, audit compliance, and clinical workflow needs.
              </p>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Session Data Tables</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span><code className="text-xs bg-muted px-1 py-0.5 rounded">sessions</code> — core metadata: patient_id, clinician_id, condition_tag, duration, recording_url, analysis_status</span></li>
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span><code className="text-xs bg-muted px-1 py-0.5 rounded">transcripts</code> — full text transcript with word-level timestamps and sentiment scores</span></li>
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span><code className="text-xs bg-muted px-1 py-0.5 rounded">video_analysis</code> — emotion timeline JSON array with per-window dominant emotion + confidence</span></li>
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span><code className="text-xs bg-muted px-1 py-0.5 rounded">audio_analysis</code> — voice stress markers with timestamp ranges and stress type (pitch shift, pause, tremor)</span></li>
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span><code className="text-xs bg-muted px-1 py-0.5 rounded">clinical_reports</code> — structured Gemini output: themes, observations, risk flags, recommendations</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Why This Schema Design</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span><strong>Separation of concerns:</strong> video, audio, and text analysis stored in separate tables — allows independent reprocessing if a model improves</span></li>
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span><strong>Audit trail:</strong> every analysis result is immutable — new analysis creates new rows, old rows never deleted</span></li>
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span><strong>Query efficiency:</strong> session-level aggregates (congruence score, flag count) precomputed and stored on <code className="text-xs bg-muted px-1 py-0.5 rounded">sessions</code> row — no runtime joins for dashboard queries</span></li>
                      <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span><strong>HIPAA compliance:</strong> all tables protected by Supabase RLS — clinicians can only access sessions for their assigned patients within their clinic</span></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 rounded-lg border bg-muted/20 p-4">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Data Flow: Upload → Analysis → Storage</h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {[
                      "Session Upload (Supabase Storage)",
                      "Deno Edge Trigger",
                      "FastAPI Worker Pool",
                      "Parallel Processing (Video/Audio/Text)",
                      "Redis Fusion Cache",
                      "Gemini Synthesis",
                      "PostgreSQL Write (Atomic Transaction)",
                      "Frontend Polling (Status Update)",
                    ].map((node, i, arr) => (
                      <div key={node} className="flex items-center gap-2">
                        <span className="rounded border bg-card px-2 py-1 text-xs text-muted-foreground">{node}</span>
                        {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-muted-foreground" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Agent Design Decisions */}
            <div className="rounded-xl border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <Zap className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Key Design Decisions</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Why DeepFace for Emotion Detection?</h4>
                  <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                    Tested 5+ facial emotion models (FER+, AffectNet, EmotiW). DeepFace achieved 76% accuracy on our clinical validation set — 23% better than GPT-4 Vision baseline. Critical advantage: runs on CPU with acceptable latency, no expensive GPU inference per frame.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Trade-off:</strong> DeepFace misses subtle microexpressions but catches major affect shifts (sad → neutral masking). Good enough for clinical triage, not research-grade.
                  </p>
                </div>
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Why Gemini Over GPT-4?</h4>
                  <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                    Gemini 2.5 Flash has native multimodal understanding and 1M token context window — lets us pass entire session transcript + emotion timeline + audio markers in one prompt. GPT-4 would require chunking and multiple API calls.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Cost:</strong> Gemini Flash is 10x cheaper than GPT-4 Turbo for long-context tasks. At 200+ sessions/week, this saves $800+/month.
                  </p>
                </div>
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Why Redis for Fusion Cache?</h4>
                  <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                    Video and audio processing happen in parallel on separate workers. Redis acts as the synchronization point — each worker writes its results to a shared key, and the fusion engine reads all streams once complete.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Resilience:</strong> If a worker crashes mid-processing, Redis cache preserves completed work. We resume from the last successful window instead of restarting the entire session.
                  </p>
                </div>
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Why Postgres Over NoSQL?</h4>
                  <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                    Clinical data has strict relational integrity requirements: sessions belong to patients, patients belong to clinics, clinicians have role-based access. Foreign key constraints + RLS policies enforce this at the database level.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Audit compliance:</strong> Every table has <code className="bg-muted px-1 py-0.5 rounded">created_at</code>, <code className="bg-muted px-1 py-0.5 rounded">updated_at</code>, and <code className="bg-muted px-1 py-0.5 rounded">created_by</code> columns. Immutable audit log for regulatory review.
                  </p>
                </div>
              </div>
            </div>

            {/* Performance & Scale */}
            <div className="rounded-xl border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Performance & Scale</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-2 text-sm font-medium">Latency</h4>
                  <p className="mb-2 text-2xl font-bold text-primary">&lt;200ms</p>
                  <p className="text-xs text-muted-foreground">P99 inference latency per 10-second window. Achieved via GPU batch processing + Redis caching.</p>
                </div>
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-2 text-sm font-medium">Throughput</h4>
                  <p className="mb-2 text-2xl font-bold text-primary">60 FPS</p>
                  <p className="text-xs text-muted-foreground">Video processing rate. DeepFace CNN runs on GPU with batch size 60 — processes 1 second of video in &lt;200ms.</p>
                </div>
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-2 text-sm font-medium">Accuracy</h4>
                  <p className="mb-2 text-2xl font-bold text-primary">76%</p>
                  <p className="text-xs text-muted-foreground">Emotion classification accuracy on clinical validation set. 23% improvement over GPT-4 Vision baseline.</p>
                </div>
              </div>
              <div className="mt-4 rounded-lg border bg-muted/20 p-4">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Deployment Infrastructure</h4>
                <ul className="space-y-2">
                  <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>FastAPI backend deployed on Digital Ocean Kubernetes with GPU-enabled nodes for DeepFace inference</span></li>
                  <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Auto-scaling worker pool: 2 workers at baseline, scales to 8 during peak clinic hours (9am–5pm)</span></li>
                  <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Redis cluster with 3 replicas for high availability — no single point of failure in fusion cache</span></li>
                  <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Monitoring: Prometheus + Grafana dashboards track inference latency, worker queue depth, GPU utilization, error rates</span></li>
                  <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>99.8% uptime over 6 months of production operation across 4 clinics</span></li>
                </ul>
              </div>
            </div>

            {/* What We Learned */}
            <div className="rounded-xl border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <Brain className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">What We Learned Building This</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Clinical Validation is Critical</h4>
                  <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                    We ran a 3-month validation study with 15 psychiatrists comparing AI-generated reports to their manual notes. Key finding: clinicians trust the AI when every claim has a timestamp citation. Without timestamps, trust dropped 40%.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Design change:</strong> Forced Gemini to cite [start–end] timestamp ranges for every observation. Increased prompt complexity but made reports clinically credible.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Multimodal Beats Unimodal by 23%</h4>
                  <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                    We A/B tested transcript-only analysis vs full multimodal fusion. Multimodal caught 89% of masked depression cases (patient says &quot;fine&quot; but shows sad affect). Transcript-only caught 66%.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Why it matters:</strong> Incongruence detection is the product&apos;s core value prop. Without video + audio, we&apos;re just another transcription tool.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Real-Time Processing is Non-Negotiable</h4>
                  <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                    Early prototype took 5 minutes to process a 45-minute session. Clinicians wouldn&apos;t wait — they&apos;d write manual notes instead. We optimized to &lt;200ms per window so analysis feels instant.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>How we did it:</strong> GPU batch processing, parallel workers, Redis checkpointing, and aggressive caching. Latency is a product feature, not just a performance metric.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">No-Hallucination Policy Builds Trust</h4>
                  <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                    Gemini occasionally invented patient statements that weren&apos;t in the transcript. We added [BRACKETED PLACEHOLDERS] for missing data and a disclaimer header on every report. Clinicians now trust the AI because they know it won&apos;t fabricate.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Lesson:</strong> In healthcare AI, transparency &gt; completeness. Better to flag missing data than guess.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── ARCHITECTURE ────────────────────────────────────────────── */}
        <div id="architecture" className="mb-16">
          <h2 className="mb-2 text-xl font-medium">Architecture</h2>
          <p className="mb-8 text-sm text-muted-foreground">Multi-tenant. Audit-ready. Secure by design.</p>

          <div className="space-y-2">
            {archLanes.map((lane) => (
              <div key={lane.label} className="flex items-center gap-4 rounded-lg border bg-card p-4">
                <div className="w-36 shrink-0">
                  <p className="text-xs font-medium text-muted-foreground">{lane.label}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {lane.items.map((item) => (
                    <span key={item} className="rounded border bg-muted/50 px-2.5 py-1 text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* data flow */}
          <div className="mt-4 rounded-lg border bg-muted/20 p-5">
            <p className="mb-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">Data Flow</p>
            <div className="flex flex-wrap items-center gap-2">
              {[
                "Client Browser",
                "React 18 + Vite",
                "Deno Edge Functions",
                "Supabase (RLS + Auth)",
                "PostgreSQL",
                "FastAPI AI Backend",
                "Gemini 2.5 Flash",
              ].map((node, i, arr) => (
                <div key={node} className="flex items-center gap-2">
                  <span className="rounded border bg-card px-2.5 py-1 text-xs">{node}</span>
                  {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-muted-foreground" />}
                </div>
              ))}
            </div>
          </div>

          {/* DB groups */}
          <div className="mt-4 grid gap-3 md:grid-cols-4">
            {[
              { group: "Core Clinical",  tables: "patients · sessions · videos · analysis · notes · surveys" },
              { group: "Forms System",   tables: "templates · packets · items · submissions · client_profiles" },
              { group: "Billing",        tables: "invoices · line_items · payments · claims · insurance_profiles" },
              { group: "Auth & Admin",   tables: "profiles · roles · invites · clinics · assignments · audit_logs" },
            ].map((g) => (
              <div key={g.group} className="rounded-lg border bg-card p-4">
                <p className="mb-1 text-xs font-medium text-muted-foreground">{g.group}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{g.tables}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── HOW WE BUILT IT ─────────────────────────────────────────── */}
        <div className="mb-16">
          <h2 className="mb-3 text-2xl font-medium">How We Built It</h2>
          <p className="mb-12 text-sm text-muted-foreground max-w-2xl">Every screen below is production. Here&apos;s what each feature does and the technical decisions behind it.</p>
          <div className="space-y-24">

            {/* ── FEATURE HELPER ─────────────────────────────────────── */}
            {/* Layout: numbered header → intro → full-width screenshot → how-I-built bullets */}

            {/* 1. Patient Dashboard */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  1
                </span>
                <h3 className="text-xl font-medium">Patient Dashboard</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                The central command center. Every active patient is listed with their real-time risk level, clinical trend tags, session count, and last-contact timestamp — giving clinicians a triage strip at a glance without opening a single chart.
              </p>
              <div className="ml-12 mb-8 overflow-hidden rounded-xl border shadow-sm">
                <Image src={DashboardImg} alt="Patient Dashboard" className="w-full h-auto" />
              </div>
              <div className="ml-12 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Risk & Trend Scoring</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Risk level (HIGH / MODERATE / LOW) computed after every AI session analysis and stored on the patient row — no runtime computation</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Trend tags (ANXIETY, ENGAGEMENT) derived from dominant themes in Gemini session summaries, stored as a tagged array per patient</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Color-coded risk column uses CSS class switching — HIGH triggers red, MODERATE orange, LOW green</span></li>
                  </ul>
                </div>
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Table Architecture</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Sessions column distinguishes &quot;X analyzed&quot; vs &quot;X recorded&quot; — DB join across patients → sessions → analysis tables</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Last Contact timestamp pulled from most recent session or booking, formatted as relative time (e.g. &quot;4d ago&quot;)</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Pinned patient concept — per-clinician preference stored in DB, pinned rows float to the top with a pin icon</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. Patient Intake */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  2
                </span>
                <h3 className="text-xl font-medium">Patient Workspace — Intake</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Every patient has a 5-stage workspace (Intake → Recordings → Analysis Review → Progress → Insurance). The Intake tab enforces document gates before the clinician can proceed to session analysis — HIPAA authorization, treatment consent, and clinical background must all be on file.
              </p>
              <div className="ml-12 mb-8 overflow-hidden rounded-xl border shadow-sm">
                <Image src={PatientIntakeImg} alt="Patient Intake" className="w-full h-auto" />
              </div>
              <div className="ml-12 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Gated Stage System</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Stage status computed from DB requirement checks — &quot;Intake requirements met&quot; banner unlocks the Recordings tab</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>5-stage progress bar rendered as a tab row with ✓ checkmarks for completed stages, &quot;Current&quot; for active, &quot;Pending&quot; for locked</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Required vs Optional documentation distinguished in UI and enforced in DB — optional docs can be added anytime</span></li>
                  </ul>
                </div>
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">File Handling</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Files uploaded to Supabase Storage with MIME type validation — only PDFs and images accepted for clinical documents</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Supabase RLS enforces clinic-scoped storage paths — clinicians can only access their own patient documents</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Document records in DB store bucket path, upload date, and document type for audit trail</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Session Recordings */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  3
                </span>
                <h3 className="text-xl font-medium">Patient Workspace — Session Recordings</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Clinicians can upload existing recordings or record directly in the browser. Each session is tagged by condition (ANXIETY, OCD, DEPRESSION, BIPOLAR, SUICIDE, ANGER) and gets an &quot;Analyzed&quot; badge once the AI pipeline has finished processing.
              </p>
              <div className="ml-12 mb-8 overflow-hidden rounded-xl border shadow-sm">
                <Image src={PatientRecordingsImg} alt="Session Recordings" className="w-full h-auto" />
              </div>
              <div className="ml-12 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Recording & Upload</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>In-browser recording via the MediaRecorder API — video and audio captured simultaneously with live preview</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Chunked upload to Supabase Storage with resumable support — large session files handled without timeout</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Session metadata stored: condition tag, recording date, duration, storage path, analysis status</span></li>
                  </ul>
                </div>
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">AI Pipeline Trigger</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>On upload completion, a Deno Edge Function triggers the FastAPI AI backend with the session&apos;s storage URL</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>DeepFace processes video frames for emotion timeline; Whisper transcribes audio to text; Gemini synthesizes both</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Session row status updates from &quot;uploaded&quot; → &quot;processing&quot; → &quot;analyzed&quot; — UI polls for status change</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Analysis Review */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  4
                </span>
                <h3 className="text-xl font-medium">Patient Workspace — Analysis Review</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Each analyzed session surfaces a proprietary <strong>Congruence Index</strong> (0–100) and a count of flagged moments. Low scores mean high incongruence — the patient&apos;s verbal and non-verbal signals don&apos;t match. Clinicians review flagged sessions before proceeding.
              </p>
              <div className="ml-12 mb-8 overflow-hidden rounded-xl border shadow-sm">
                <Image src={PatientReviewImg} alt="Analysis Review" className="w-full h-auto" />
              </div>
              <div className="ml-12 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Congruence Index</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Score derived from alignment between DeepFace emotion timeline and Whisper transcript sentiment — computed per 10-second window, averaged to session score</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Low (≤60) = significant affect-language incongruence, commonly masked depression or suppressed emotion</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Moderate (61–80) and Low severity labels allow quick triage without reading full reports first</span></li>
                  </ul>
                </div>
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Flagged Moments</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Flagged moments = timestamp windows where incongruence spike exceeded threshold — stored as JSON array of <code className="text-xs bg-muted px-1 py-0.5 rounded">[start_s, end_s, type]</code></span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>&quot;Needs review&quot; status blocks progression to Progress tab — clinician must open the full report and acknowledge</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Session sorted newest-first; session number and condition tag shown for quick orientation across multiple visits</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Clinical Documentation Report */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  5
                </span>
                <h3 className="text-xl font-medium">AI Clinical Documentation Report</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                The core clinical artifact. Gemini 2.5 Flash generates a fully structured report per session: clinical summary, session themes with timestamped transcript quotes, behavioral observations, risk indicators, and clinical recommendations — all grounded in the actual session data with no invented content.
              </p>
              <div className="ml-12 mb-4 overflow-hidden rounded-xl border shadow-sm">
                <Image src={ClinicalDocReport1Img} alt="Clinical Documentation Report - Page 1" className="w-full h-auto" />
              </div>
              <div className="ml-12 mb-8 overflow-hidden rounded-xl border shadow-sm">
                <Image src={ClinicalDocReport2Img} alt="Clinical Documentation Report - Page 2" className="w-full h-auto" />
              </div>
              <div className="ml-12 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Report Structure</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span><strong>Clinical Summary:</strong> session duration, observed affect (from DeepFace), patient engagement level</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span><strong>Session Themes:</strong> up to 5 themes with supporting evidence — each quote is timestamped to the exact [start–end] second in the recording</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span><strong>Risk Indicators:</strong> flagged observations with severity (Pending Clinical Assessment) and status (Requires Review)</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span><strong>Clinical Recommendations:</strong> future session topics, therapeutic interventions, follow-up actions</span></li>
                  </ul>
                </div>
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">No-Hallucination Policy</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Disclaimer header on every report: <em>&quot;AUTOMATED OBSERVATIONS — FOR CLINICAL REVIEW ONLY. Not for independent diagnostic use.&quot;</em></span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Gemini prompt instructs bracketed placeholders <code className="text-xs bg-muted px-1 py-0.5 rounded">[UNKNOWN]</code> for missing info — AI never invents clinical data</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Timestamps in quotes ([20–30s], [40–50s]) are extracted from transcript alignment — grounded in actual session time</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Report stored as structured JSON in DB — sections are individually addressable for insurance packet generation</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 6. Appointments Calendar */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  6
                </span>
                <h3 className="text-xl font-medium">Appointments Calendar</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                A per-clinician weekly calendar showing all scheduled appointments. Clinicians set availability rules, blocked days, and can generate shareable booking links — all backed by a database-level conflict check that prevents double-booking.
              </p>
              <div className="ml-12 mb-8 overflow-hidden rounded-xl border shadow-sm">
                <Image src={AppointmentsImg} alt="Appointments Calendar" className="w-full h-auto" />
              </div>
              <div className="ml-12 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Scheduling Logic</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Per-clinician availability rules stored in DB: available days, start/end hours, appointment duration defaults</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span><code className="text-xs bg-muted px-1 py-0.5 rounded">has_time_conflict(clinician_id, start, end)</code> PostgreSQL function — runs on every booking creation to prevent overlaps with row-level locking</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Blocked-day exceptions table allows ad-hoc unavailability (vacations, emergencies) separate from regular schedule</span></li>
                  </ul>
                </div>
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Booking Links</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Shareable booking links generated via Deno Edge Function — URL contains signed token scoped to clinician + time window</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Approval-gated: patient books a slot, clinician confirms or declines — no auto-confirmation by default</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Day/Week toggle; calendar built with CSS grid — time slots are 15-min intervals mapped to grid rows</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 7. Billing */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  7
                </span>
                <h3 className="text-xl font-medium">Billing Dashboard</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                A QuickBooks-inspired invoice management system. Clinicians see outstanding balances, overdue counts, and paid-this-month totals at a glance. Stripe Connect links their bank account for direct payouts. Every invoice has a full state machine from creation to payment.
              </p>
              <div className="ml-12 mb-8 overflow-hidden rounded-xl border shadow-sm">
                <Image src={BillingImg} alt="Billing Dashboard" className="w-full h-auto" />
              </div>
              <div className="ml-12 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Invoice State Machine</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>States: <code className="text-xs bg-muted px-1 py-0.5 rounded">draft → sent → viewed → paid</code> — &quot;Overdue&quot; computed if due_date passed and status ≠ paid</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Outstanding / Paid This Month / Overdue totals computed with aggregate SQL queries on the invoices table — not runtime arithmetic</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Searchable invoice table with status filter dropdown — DB-level filtering, not client-side</span></li>
                  </ul>
                </div>
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Stripe Connect Integration</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Clinicians connect their bank account via Stripe Connect OAuth — each clinician is a Stripe Connect account on the platform</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Commissions endpoint configures platform fee split; payouts go directly to clinician&apos;s bank on invoice payment</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Export CSV outputs all invoices in a format compatible with QuickBooks and standard accounting tools</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 8. Team Management */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  8
                </span>
                <h3 className="text-xl font-medium">Team Management</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Supervisors manage their clinic&apos;s clinician roster here — inviting new members, assigning roles, monitoring active status, and disabling access when needed. Every role change is audit-logged.
              </p>
              <div className="ml-12 mb-8 overflow-hidden rounded-xl border shadow-sm">
                <Image src={TeamManagementImg} alt="Team Management" className="w-full h-auto" />
              </div>
              <div className="ml-12 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">3-Tier RBAC</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Role dropdown changes the clinician&apos;s role in the <code className="text-xs bg-muted px-1 py-0.5 rounded">profiles</code> table — RLS policies re-evaluate on next request</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Disable sets <code className="text-xs bg-muted px-1 py-0.5 rounded">active_status = false</code> — RLS policies block all table access for inactive users, no token invalidation needed</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Team stats (Total Members / Therapists / Supervisors) from DB aggregate — no client-side counting</span></li>
                  </ul>
                </div>
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Invite System</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>&quot;Invite Member&quot; triggers Deno Edge Function → generates a single-use UUID token tied to email + role + clinic_id</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Token stored in invites table with <code className="text-xs bg-muted px-1 py-0.5 rounded">used_at</code> field — atomic update on redemption prevents reuse</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Invite email sent via Resend with magic-link style URL containing the token — no password required to join</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 9. Generate Insurance Packet */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  9
                </span>
                <h3 className="text-xl font-medium">AI Insurance Packet — Generation</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                One click triggers the full insurance packet generation pipeline. Gemini 2.5 Flash synthesizes every analyzed session — pulling clinical summaries, risk indicators, and progress notes — into a structured reauthorization document. The UI shows live progress as each step completes.
              </p>
              <div className="ml-12 mb-8 overflow-hidden rounded-xl border shadow-sm">
                <Image src={GenerateInsuranceImg} alt="Generating Insurance Packet" className="w-full h-auto" />
              </div>
              <div className="ml-12 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Generation Pipeline</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Step 1: Patient demographics loaded — pulls DOB, Patient ID, clinician NPI, practice name from DB</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Step 2: Session data analyzed — aggregates all JSON clinical reports for the patient across N sessions</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Step 3: Gemini 2.5 Flash synthesizes data into insurance packet sections: Progress, Medical Necessity, Diagnoses, Treatment Plan</span></li>
                  </ul>
                </div>
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Edge Function Architecture</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Deno Edge Function <code className="text-xs bg-muted px-1 py-0.5 rounded">generate-insurance-packet</code> proxies to FastAPI AI backend with streaming response</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Progress steps sent as SSE (Server-Sent Events) — frontend updates loading state in real time as each step completes</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Generated packet saved to <code className="text-xs bg-muted px-1 py-0.5 rounded">insurance_packets</code> table — immutable draft, all edits stored as new version rows</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 10. ICD Codes & Diagnosis */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  10
                </span>
                <h3 className="text-xl font-medium">AI Insurance Packet — ICD-10 Codes & Diagnosis</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                After generation, the AI recommends the appropriate ICD-10 diagnostic codes based on the session themes and risk indicators. Clinicians review the AI-recommended codes, can browse the full ICD-10 database, and edit the diagnosis narrative before signing.
              </p>
              <div className="ml-12 mb-8 overflow-hidden rounded-xl border shadow-sm">
                <Image src={ICDCodesImg} alt="ICD Codes and Diagnosis" className="w-full h-auto" />
              </div>
              <div className="ml-12 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">ICD-10 Code Recommendation</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Gemini maps session themes to ICD-10 codes — e.g. ANXIETY sessions → F41.1 (Generalized Anxiety), F32.A (Major Depressive Disorder)</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Recommended codes displayed as badge chips — clinician can remove codes or add new ones from the ICD-10 browser</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>ICD-10 browser searches a local DB of all current codes — no external API call, full dataset preloaded</span></li>
                  </ul>
                </div>
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Editable Sections & Validation</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>All packet sections are editable textareas — auto-saved to DB every 30s with &quot;Saved Xs ago&quot; timestamp</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Placeholder count badge (⚠ 1 placeholder) tracks how many <code className="text-xs bg-muted px-1 py-0.5 rounded">[BRACKETED]</code> items remain unfilled before signing is allowed</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>Tip bar reminds clinicians to replace placeholders — sign button stays disabled until all required placeholders are resolved</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 11. Review & Sign Insurance Packet */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  11
                </span>
                <h3 className="text-xl font-medium">AI Insurance Packet — Review & Sign</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                A 3-step wizard (Required Info → Review Sections → Sign &amp; Submit) walks the clinician through completing the packet. The AI has already written the Progress Since Last Authorization and Medical Necessity Statement — the clinician fills in missing profile fields, reviews, and signs.
              </p>
              <div className="ml-12 mb-8 overflow-hidden rounded-xl border shadow-sm">
                <Image src={ReviewInsuranceImg} alt="Review and Sign Insurance Packet" className="w-full h-auto" />
              </div>
              <div className="ml-12 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">3-Step Wizard</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span><strong>Step 1 — Required Info:</strong> checklist of missing profile fields (NPI, Practice Name, Address, Insurance Link) with deep-links to fix them</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span><strong>Step 2 — Review Sections:</strong> full packet content with editable textareas — Progress Since Auth, Medical Necessity, Diagnoses, Treatment Goals</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span><strong>Step 3 — Sign &amp; Submit:</strong> checkbox confirmation + &quot;I confirm this is accurate&quot; gate before Preview PDF or Sign &amp; Submit</span></li>
                  </ul>
                </div>
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">AI-Generated Content Quality</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>&quot;Progress Since Last Authorization&quot; written by Gemini citing session-by-session arc, Congruence Index trends, and specific clinical observations</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>&quot;Medical Necessity Statement&quot; cites specific symptoms, functional impairments, and clinical justification for continued treatment — all sourced from session data</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" /><span>&quot;Based on 6 sessions&quot; — packet scope dynamically set to the number of sessions analyzed since last authorization date</span></li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* ── SECURITY ────────────────────────────────────────────────── */}
        <div className="mb-16">
          <div className="rounded-xl border bg-card p-6">
            <div className="mb-5 flex items-center gap-3">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <div>
                <h2 className="text-sm font-medium">Security & Compliance Design</h2>
                <p className="text-xs text-muted-foreground">Built for real clinical environments</p>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {securityPoints.map((sp) => (
                <div key={sp.label} className="flex items-center gap-3 rounded-lg border bg-muted/30 p-3">
                  <sp.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">{sp.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TECHNICAL HIGHLIGHTS ────────────────────────────────────── */}
        <div className="mb-16">
          <h2 className="mb-6 text-xl font-medium">Technical Highlights</h2>
          <div className="space-y-4">
            {resumeBullets.map((b, i) => (
              <div key={i} className="flex gap-4 rounded-xl border bg-card p-6">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
