import type { StaticImageData } from "next/image";

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
  | { kind: "image"; image: Img; background?: string; fit?: "cover" | "contain" }
  | { kind: "video"; src: string; poster?: string; background?: string };

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
      kind: "phones",
      screens: [HangerChat, HangerDiscovery, HangerVisual],
      background: "#ffffff",
    },
    hero: {
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
