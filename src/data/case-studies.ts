import type { StaticImageData } from "next/image";

import FitFo1 from "../app/projects/pictures/fitfo/IMG_4966.PNG";
import FitFo2 from "../app/projects/pictures/fitfo/IMG_4967.PNG";
import FitFo3 from "../app/projects/pictures/fitfo/IMG_4968.PNG";
import FitFo4 from "../app/projects/pictures/fitfo/IMG_4969.PNG";
import FitFo5 from "../app/projects/pictures/fitfo/IMG_4970.PNG";
import FitFo6 from "../app/projects/pictures/fitfo/IMG_4971.PNG";
import FitFoCoach from "../app/projects/pictures/fitfo/fitfoCoach.png";
import FitFoHero from "../app/projects/pictures/fitfo/hero.png";

import CongruenceDashboard from "../app/projects/pictures/congruence/Dashboard.png";
import CongruenceRecordings from "../app/projects/pictures/congruence/PatientPageRecordings.png";
import CongruenceReport from "../app/projects/pictures/congruence/ClinicalDocumentationReport.png";
import CongruenceInsurance from "../app/projects/pictures/congruence/GenerateInsurancePacket.png";
import CongruenceAgent from "../app/projects/pictures/congruence/Agent.png";

import HangerDiscovery from "../app/projects/pictures/hanger/discovery.jpg";
import HangerChat from "../app/projects/pictures/hanger/chat.jpg";
import HangerVisual from "../app/projects/pictures/hanger/visual.jpg";
import HangerHero from "../app/projects/pictures/hanger/hero.png";

type Img = StaticImageData;

// How a project's image is presented on cards and case-study heroes.
export type ShowcaseSpec =
  | { kind: "phones"; screens: [Img, Img, Img]; background: string }
  | { kind: "browser"; screen: Img; background: string }
  | { kind: "panels"; panels: [Img, Img, Img]; background: string }
  | { kind: "image"; image: Img; background?: string; fit?: "cover" | "contain" };

export type CaseStudy = {
  slug: string;
  name: string;
  role: string; // short role for cards, e.g. "Full-stack"
  category: string;
  blurb: string; // one line for cards
  tagline: string;
  timeline: string;
  team?: string;
  stack: string[];
  links: { label: string; href: string }[];
  showcase: ShowcaseSpec;
  hero?: ShowcaseSpec; // defaults to showcase
  stats: { value: string; label: string }[];
  overview: string[];
  built: string[];
  architecture: { label: string; value: string }[];
  steps?: { title: string; body: string }[];
  decisions: { title: string; body: string }[];
  gallery: { image: Img; caption: string; phone?: boolean }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "fitfo",
    name: "FitFo",
    role: "CTO",
    category: "creator fitness coaching",
    blurb: "Share a TikTok or Reel, get a structured workout. Agentic coaching at 40K users.",
    tagline:
      "Turns fitness videos into workouts you can follow, edit, and log, plus an AI coach grounded in creators' own content.",
    timeline: "Feb 2026 – Jun 2026",
    team: "4 builders",
    stack: ["Flask", "TypeScript", "Swift", "Supabase", "pgvector", "Whisper", "RevenueCat", "DigitalOcean"],
    links: [{ label: "Live site", href: "https://www.fitfo.app/" }],
    showcase: {
      kind: "phones",
      screens: [FitFo1, FitFoCoach, FitFo2],
      background: "linear-gradient(160deg, #f3b896 0%, #eda27c 45%, #e8926a 100%)",
    },
    hero: { kind: "image", image: FitFoHero, background: "#eda27c", fit: "cover" },
    stats: [
      { value: "40K", label: "users" },
      { value: "$350K", label: "GMV" },
      { value: "$500K", label: "raised" },
    ],
    overview: [
      "People save hundreds of workout videos and never train them. FitFo closes that gap: hit share on any public TikTok or Reel, and FitFo pulls the audio and on-screen text into a clean session with exercises, sets, reps, and rest.",
      "As CTO I owned the system from architecture through production scale, then built the creator coaching layer on top. FitFo was built in the Sisu incubator.",
    ],
    built: [
      "Shipped an agentic coaching platform to 40K users and $350K GMV on Flask + TypeScript.",
      "Built a creator-content RAG pipeline that grounds every coaching answer in a cited chunk of the creator's own videos.",
      "Raised $500K from Airbnb's CMO, Credit Acceptance's CEO, and an a16z angel investor.",
    ],
    architecture: [
      { label: "Mobile", value: "Swift (iOS)" },
      { label: "API", value: "Flask + TypeScript" },
      { label: "Data", value: "Supabase Postgres + pgvector (HNSW)" },
      { label: "Ingest", value: "Apify, TikWM, ffmpeg, Whisper" },
      { label: "LLM", value: "gpt-4.1-mini, text-embedding-3-small" },
      { label: "Billing", value: "RevenueCat" },
      { label: "Infra", value: "DigitalOcean" },
    ],
    steps: [
      { title: "Discover", body: "Apify crawls a creator's TikTok profile and upserts videos by platform ID for deduped ingestion." },
      { title: "Transcribe", body: "TikWM, ffmpeg, and Whisper turn each video into reusable transcript text with capped async concurrency." },
      { title: "Chunk", body: "gpt-4.1-mini splits transcripts into self-contained training snippets and strips sponsor reads and pure CTAs." },
      { title: "Tag", body: "A batched LLM pass assigns locked muscle, goal, exercise, and equipment tags that match SQL constraints." },
      { title: "Embed", body: "text-embedding-3-small vectors land in pgvector, with the model stored per row for future re-embedding." },
    ],
    decisions: [
      { title: "Postgres-native retrieval", body: "Supabase Postgres + pgvector keeps storage, tag filters, approval status, HNSW cosine search, and citations in one source of truth." },
      { title: "Filter before ranking", body: "The match_content_chunks RPC narrows by creator, approval status, muscle groups, and goals before ranking top-K chunks by vector distance." },
      { title: "Grounded generation", body: "Weak matches are dropped, empty retrieval skips the LLM, and every coaching claim must cite a retrieved chunk." },
    ],
    gallery: [
      { image: FitFo1, caption: "Home", phone: true },
      { image: FitFo2, caption: "Imported workout", phone: true },
      { image: FitFo3, caption: "Workout library", phone: true },
      { image: FitFo4, caption: "Session", phone: true },
      { image: FitFo5, caption: "Logging", phone: true },
      { image: FitFoCoach, caption: "Creator coach", phone: true },
      { image: FitFo6, caption: "Progress", phone: true },
    ],
  },
  {
    slug: "congruence",
    name: "Congruence",
    role: "AI pipeline & backend",
    category: "clinical documentation",
    blurb: "Session recordings to insurance-ready progress notes in under a minute.",
    tagline:
      "Multimodal AI that writes psychotherapy and insurance notes, and catches the emotional cues clinicians miss.",
    timeline: "2024 – Present",
    stack: ["FastAPI", "React Native", "OpenCV", "Wav2Vec2", "GPT-4", "PostgreSQL", "Redis", "Kubernetes"],
    links: [
      { label: "Live site", href: "https://congruenceinsights.com" },
      { label: "Demo", href: "https://congruenceinsights.com/demo" },
    ],
    showcase: {
      kind: "browser",
      screen: CongruenceDashboard,
      background: "linear-gradient(135deg, #dbe4ff 0%, #e9e3ff 50%, #f6f1ea 100%)",
    },
    stats: [
      { value: "92%", label: "less documentation time" },
      { value: "4+", label: "clinics" },
      { value: "200+", label: "patients" },
      { value: "<200ms", label: "inference latency" },
    ],
    overview: [
      "Psychiatrists spend 4+ hours a day on notes, which interrupts therapy and misses non-verbal cues. Existing EHR tools add admin work without clinical insight.",
      "Congruence runs during the session, fusing facial microexpressions, voice stress, and the transcript to draft SOAP notes and insurance packets. Documentation went from 45 minutes to 3.5.",
    ],
    built: [
      "Built a multimodal CNN + Wav2Vec2 + LLM pipeline reaching 76% clinical emotion accuracy.",
      "Designed triple-embedding incongruence detection with 89% sensitivity on masked emotion.",
      "Got real-time inference under 200ms with GPU video, CPU audio, and Redis fusion.",
      "Deployed HIPAA-compliant on Kubernetes at 99.8% uptime.",
    ],
    architecture: [
      { label: "Client", value: "React Native" },
      { label: "API", value: "FastAPI" },
      { label: "Vision", value: "OpenCV + CNN (60 FPS)" },
      { label: "Audio", value: "Wav2Vec2 (16kHz)" },
      { label: "LLM", value: "GPT-4 note generation" },
      { label: "Data", value: "PostgreSQL + Redis" },
      { label: "Infra", value: "Docker + Kubernetes" },
    ],
    decisions: [
      { title: "Fuse modalities in real time", body: "Video runs on GPU, audio on CPU, and Redis fuses the streams so notes are ready when the session ends, with p99 under 200ms." },
      { title: "Detect incongruence, not just emotion", body: "Comparing face, voice, and words separately surfaces masked affect that a single-modality model misses." },
      { title: "Compliance from day one", body: "HIPAA-compliant infrastructure, an IRB-approved validation study, and SOC 2 Type II so clinics could adopt without a security review stall." },
    ],
    gallery: [
      { image: CongruenceDashboard, caption: "Clinician dashboard" },
      { image: CongruenceRecordings, caption: "Session recordings" },
      { image: CongruenceReport, caption: "Clinical documentation report" },
      { image: CongruenceInsurance, caption: "Insurance packet generation" },
      { image: CongruenceAgent, caption: "Clinical agent" },
    ],
  },
  {
    slug: "hanger",
    name: "Hanger",
    role: "ML & backend",
    category: "fashion discovery",
    blurb: "Vibe-based fashion search with fine-tuned CLIP. 2K+ users, +40% CTR.",
    tagline: "Fashion search that understands vibe, occasion, and budget, not just keywords.",
    timeline: "2024",
    stack: ["CLIP", "FastAPI", "PostgreSQL", "Pinecone", "Redis", "Docker", "Vercel Edge"],
    links: [{ label: "Live demo", href: "https://www.hanger.live/" }],
    showcase: {
      kind: "image",
      image: HangerHero,
      background: "#ffffff",
      fit: "cover",
    },
    stats: [
      { value: "2K+", label: "users" },
      { value: "+40%", label: "CTR" },
      { value: "+22%", label: "relevance" },
      { value: "$500/mo", label: "infra cost" },
    ],
    overview: [
      "Shoppers search by vibe, like 'winter formal but casual streetwear', not by keyword. Keyword matching misses intent, and collaborative filtering can't handle cold start.",
      "Hanger pairs fashion-tuned embeddings with hybrid retrieval and a reasoning layer, so a query like 'cold NYC rooftop party under $200' returns things you'd actually wear.",
    ],
    built: [
      "Fine-tuned CLIP on fashion data with attribute-aware, multi-vector embeddings per product, for +22% relevance.",
      "Built hybrid retrieval: Postgres filters + Pinecone HNSW + merge/rerank, for sub-second results.",
      "Designed FastAPI agents that reason over weather, occasion, and budget constraints.",
      "Ran it on $500/month of infrastructure with cached embeddings and query batching.",
    ],
    architecture: [
      { label: "Embeddings", value: "Fine-tuned CLIP" },
      { label: "API", value: "FastAPI" },
      { label: "Filters", value: "PostgreSQL" },
      { label: "Vectors", value: "Pinecone (HNSW)" },
      { label: "Cache", value: "Redis" },
      { label: "Edge", value: "Vercel Edge" },
    ],
    decisions: [
      { title: "Better representation", body: "Multi-vector embeddings per product capture materials, seasonality, fit, and occasion separately." },
      { title: "Hybrid retrieval", body: "Structured filters for price, size, and inventory run in Postgres; semantic search runs in Pinecone; results are merged and reranked." },
      { title: "Lean by design", body: "Cached embeddings, batching, and reduced vector dimensions kept quality high at a fraction of typical cost." },
    ],
    gallery: [
      { image: HangerDiscovery, caption: "Discovery feed", phone: true },
      { image: HangerChat, caption: "Styling chat", phone: true },
      { image: HangerVisual, caption: "Visual search", phone: true },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
