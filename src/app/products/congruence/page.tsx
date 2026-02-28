import Link from "next/link";
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
          <h2 className="mb-10 text-2xl font-medium">How We Built It</h2>
          <div className="space-y-16">
            
            {/* 1. Multi-Tenant Architecture */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  1
                </span>
                <h3 className="text-xl font-medium">Multi-Tenant Architecture with RLS</h3>
              </div>
              <p className="mb-8 ml-12 text-muted-foreground leading-relaxed max-w-3xl">
                Designed a clinic-scoped multi-tenant architecture where every database table enforces Row Level Security (RLS) to isolate clinic data and prevent cross-tenant leakage.
              </p>
              <div className="ml-12 space-y-6">
                <div className="rounded-xl border bg-card p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    3-Tier RBAC System
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed"><strong>Super Admin:</strong> Manages all clinics, bulk onboarding (50+ users), audit logs, global settings</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed"><strong>Admin:</strong> Clinic management, clinician oversight, supervision dashboards, billing controls</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed"><strong>Clinician:</strong> Patient management, session documentation, AI analysis access, client forms</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border bg-card p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    RLS Enforcement Across 40+ Tables
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Every table has a <code className="text-xs bg-muted px-1.5 py-0.5 rounded">clinic_id</code> column enforcing data isolation at the database level</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Policies check both <code className="text-xs bg-muted px-1.5 py-0.5 rounded">auth.uid()</code> and <code className="text-xs bg-muted px-1.5 py-0.5 rounded">active_status</code> to prevent access from deactivated users</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Service role access only for unauthenticated endpoints (client forms, booking links) with SHA-256 token validation</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border bg-card p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    Invite-Only Onboarding
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Single-use invite tokens with email, role, and clinic pre-assigned</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Invite redemption handled via Deno Edge Function with atomic status update</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Supports bulk invite generation for large clinic onboarding (tested with 50 users)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. 5-Stage Patient Workflow */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  2
                </span>
                <h3 className="text-xl font-medium">5-Stage Clinical Workflow Engine</h3>
              </div>
              <p className="mb-8 ml-12 text-muted-foreground leading-relaxed max-w-3xl">
                Built a structured patient workspace that transforms unstructured therapy into audit-ready clinical documentation through five gated stages.
              </p>
              <div className="ml-12 space-y-6">
                <div className="rounded-xl border bg-card p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    Stage 1: Intake Forms
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Schema-driven form system with 10 field types (text, textarea, select, radio, checkbox, date, file, signature, consent, multi-step wizard)</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">SHA-256 token-hashed secure links for client form submissions (no login required)</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Document upload to Supabase Storage with virus scanning and MIME type validation</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Consent checklist gate — patients cannot proceed until all required consents are signed</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border bg-card p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    Stage 2: Session Recording
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">In-browser MediaRecorder API capturing video/audio streams with real-time preview</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Chunked upload to Supabase Storage with resumable upload support</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Session metadata tracked: duration, recording quality, storage path, clinician notes</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border bg-card p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    Stage 3: AI Analysis
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">DeepFace emotion detection generating timestamped affect patterns across the session</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Gemini 2.5 Flash processes transcript + emotion timeline to generate clinical summary, risk flags, and therapeutic recommendations</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">No-hallucination policy: AI uses <code className="text-xs bg-muted px-1.5 py-0.5 rounded">[BRACKETED PLACEHOLDERS]</code> for missing data instead of inventing clinical information</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Affect-language incongruence scoring flags masked emotions and potential misalignment between verbal and non-verbal signals</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border bg-card p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    Stage 4: Progress Tracking
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Patient progress timeline visualizing clinical metrics, risk levels, and therapeutic goals across sessions</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Trend arrows showing improvement/decline in key indicators</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Triage strip with risk-level color coding for quick supervision visibility</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border bg-card p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    Stage 5: Insurance Documentation
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Payer profile management with insurance details, authorization periods, and claim tracking</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">AI-generated CMS-1500 reauthorization packets pulling session summaries, progress notes, and clinical justification</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Automated insurance claim generation reducing manual packet assembly from hours to minutes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Deno Edge Functions (11 Functions) */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  3
                </span>
                <h3 className="text-xl font-medium">11 Deno Edge Functions</h3>
              </div>
              <p className="mb-8 ml-12 text-muted-foreground leading-relaxed max-w-3xl">
                Built a serverless backend layer handling authentication, AI proxying, external integrations, and compliance workflows using Supabase Edge Functions on Deno runtime.
              </p>
              <div className="ml-12 space-y-6">
                <div className="rounded-xl border bg-card p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    Invite System
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">create-invite</code> — generates single-use tokens with pre-assigned role and clinic</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">redeem-invite</code> — atomic status update preventing duplicate redemptions</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">bulk-invite</code> — batch generation for large clinic onboarding</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border bg-card p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    Client Forms
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">generate-form-link</code> — creates SHA-256 token-hashed secure links for client form packets</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">submit-form</code> — server-side validation and submission handler using service role for unauthenticated clients</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border bg-card p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    Booking & Scheduling
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">check-availability</code> — queries clinician calendar and runs <code className="text-xs bg-muted px-1.5 py-0.5 rounded">has_time_conflict()</code> DB function</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">create-booking</code> — approval-gated booking creation with double-booking prevention</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border bg-card p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    Billing & Payments
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">stripe-webhook</code> — handles Stripe Connect payment events with signature verification</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">create-invoice</code> — generates invoices with line items, commission splits, and CSV export</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border bg-card p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    AI Proxy & Analysis
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">ai-analysis</code> — proxies video/audio to FastAPI backend for emotion detection + clinical summary generation</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">generate-cms1500</code> — AI-assisted CMS-1500 insurance packet generation using Gemini</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Super Admin Portal */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  4
                </span>
                <h3 className="text-xl font-medium">Super Admin Operations Portal</h3>
              </div>
              <p className="mb-8 ml-12 text-muted-foreground leading-relaxed max-w-3xl">
                Built a platform management layer for multi-clinic oversight, user management, and operational analytics.
              </p>
              <div className="ml-12 space-y-6">
                <div className="rounded-xl border bg-card p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    Clinic Management
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Create/edit/deactivate clinics with separate data isolation</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Assign clinicians and admins to specific clinics</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Visual assignment map showing user-to-clinic relationships</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border bg-card p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    Bulk Onboarding
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">CSV upload for bulk user creation (tested with 50 users)</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Automatic invite generation with email notifications</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Role/clinic assignment validation before batch processing</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border bg-card p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    Audit Logs & Analytics
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">All critical operations logged: user actions, role changes, data access, status updates</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Usage analytics dashboard showing sessions per clinic, AI analysis volume, form completion rates</span>
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">Filterable audit log UI with search, date range, user/clinic filters</span>
                    </li>
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
