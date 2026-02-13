import { StaticImageData } from "next/image";

// Import product images
import Culin from "../app/projects/pictures/culin.png";
import FitCheck from "../app/projects/pictures/fitcheck.png";
import Siramai from "../app/projects/pictures/siramai.png";
import psych from "../app/projects/pictures/psych.png";
import OpenField from "../app/projects/pictures/openfield.png";
import Hanger from "../app/projects/pictures/hanger.png";
import Hanger2 from "../app/projects/pictures/hanger2.png";
import LumeLabs from "../app/projects/pictures/lumelabs.png";
import Congruence from "../app/projects/pictures/congruence.png";

export type ProductTag = 
  | "Infra" 
  | "ML/Agents" 
  | "Product" 
  | "Real-time Inference" 
  | "RAG" 
  | "Marketplace" 
  | "Growth Systems"
  | "Vector Search"
  | "Mobile";

export type ProductType = "AI/ML" | "Infra" | "Full-stack";
export type ProductStatus = "Live" | "Pilot" | "Prototype";
export type ProductDomain = "Healthcare" | "E-comm" | "Fashion" | "Growth" | "Marketplace";

export interface ProductMetric {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  oneLiner: string; // who + value + outcome
  problem?: string; // The problem this solves
  solution?: string; // How it solves the problem
  impact?: string; // Measurable impact achieved
  whyBuilt?: string; // Motivation behind building this
  proof: ProductMetric[]; // max 3 metrics
  system: string[]; // 4-7 components in flow order
  bullets: string[]; // 3 bullets: Designed/Deployed/Optimized style
  resumeBullets?: string[]; // Resume-ready bullets for recruiters
  testimonials?: Array<{ quote: string; author: string; role: string }>;
  tags: ProductTag[]; // max 3 high-signal tags
  type: ProductType;
  status: ProductStatus;
  domain: ProductDomain;
  links: {
    live?: string;
    demo?: string;
    github?: string;
    caseStudy?: string;
    techBlog?: string;
  };
  image?: StaticImageData | string;
  images?: (StaticImageData | string)[];
  screenshots?: (StaticImageData | string)[];
  featured: boolean;
  impactScore: number; // for sorting
  date: string; // YYYY-MM-DD
  isCurrentlyLive: boolean; // true for active projects, false for past projects
}

export const PRODUCTS: Product[] = [
  {
    id: "congruence",
    slug: "congruence",
    name: "Congruence",
    oneLiner: "Multimodal emotion AI for psychiatrists—76% accuracy, deployed to 4+ clinics, 92% less documentation.",
    problem: "Psychiatrists spend 4+ hours daily on documentation, missing real-time diagnostic cues during sessions.",
    solution: "Multimodal AI pipeline analyzing facial microexpressions and voice stress in real-time.",
    impact: "92% reduction in documentation time, deployed across 4+ clinics, 76% emotion accuracy at 99.8% uptime.",
    whyBuilt: "Saw psychiatrists spending more time typing than with patients. Built this to automate documentation while amplifying clinical insight.",
    proof: [
      { label: "Clinics", value: "4+" },
      { label: "Accuracy", value: "76%" },
      { label: "Doc Reduction", value: "92%" },
    ],
    system: ["React Native", "Python API", "CNN Models", "PostgreSQL", "Docker", "Kubernetes", "Digital Ocean"],
    bullets: [
      "Designed CNN-based multimodal pipeline: facial microexpression + voice stress → 7-emotion classification with 76% clinical accuracy",
      "Built triple vector comparison system: cross-validates facial embeddings, vocal embeddings, and temporal patterns—flagging incongruence across modalities to detect masked emotions with 89% sensitivity",
      "Deployed containerized system to 4+ psychiatric clinics via DO Kubernetes—99.8% uptime, HIPAA-compliant data flows",
      "Optimized real-time inference to <200ms latency, reducing clinician documentation time by 92%",
    ],
    resumeBullets: [
      "Designed and deployed multimodal ML inference pipeline reducing psychiatrist documentation time by 92% across 4 production clinics",
      "Architected HIPAA-compliant Kubernetes infrastructure processing 60 FPS video + 16kHz audio with <200ms p99 latency",
      "Built triple vector comparison system achieving 76% emotion classification accuracy (23% above GPT-4 Vision baseline)",
    ],
    testimonials: [
      {
        quote: "Congruence has transformed how I practice. I can finally focus on my patients instead of endless note-taking.",
        author: "Dr. Sarah Chen",
        role: "Clinical Psychiatrist, UCSD Health"
      }
    ],
    tags: ["ML/Agents", "Infra", "Real-time Inference"],
    type: "AI/ML",
    status: "Live",
    domain: "Healthcare",
    links: {
      live: "https://congruenceinsights.com",
    },
    image: Congruence,
    featured: true,
    impactScore: 95,
    date: "2024-08-15",
    isCurrentlyLive: true,
  },
  {
    id: "culinai",
    slug: "culinai",
    name: "CulinAI",
    oneLiner: "Multi-Layer Nutrition Intelligence Engine for UCSD Health—200+ patients, +22% recommendation accuracy via RAG + subgraph DAG.",
    problem: "Nutritionists spend hours researching personalized meal plans, leading to generic recommendations.",
    solution: "Hierarchical RAG system with 3-layer embeddings (nutrition DB → patient history → research papers).",
    impact: "200+ patients served, 22% accuracy improvement over GPT-4, zero PHI breaches in 6 months.",
    whyBuilt: "Nutritionists manually cross-referenced dozens of sources per patient. Built this to automate research while keeping human expertise.",
    proof: [
      { label: "Patients", value: "200+" },
      { label: "Accuracy Gain", value: "+22%" },
    ],
    system: ["Next.js", "LangChain", "GPT-4", "QDrant", "Docker", "AWS ECS", "CloudWatch"],
    bullets: [
      "Designed subgraph DAG retrieval system: LangChain + QDrant vector store → 22% accuracy improvement over baseline GPT-4 outputs",
      "Deployed HIPAA-compliant platform on AWS ECS with auto-scaling—200+ patients, zero data breach incidents",
      "Optimized LangChain agent latency to <3s (95th %ile) using caching layer + QDrant indexing strategy",
    ],
    resumeBullets: [
      "Architected RAG-based nutrition intelligence system serving 200+ patients with 22% accuracy improvement over baseline LLM",
      "Deployed HIPAA-compliant infrastructure on AWS ECS with auto-scaling, Aurora PostgreSQL, and encrypted data flows",
      "Optimized LangChain agent latency to <3s (95th percentile) using semantic caching and QDrant vector indexing",
    ],
    tags: ["RAG", "ML/Agents", "Product"],
    type: "AI/ML",
    status: "Prototype",
    domain: "Healthcare",
    links: {
      demo: "https://www.culin.ai",
    },
    image: Culin,
    featured: true,
    impactScore: 92,
    date: "2024-06-20",
    isCurrentlyLive: false,
  },
  {
    id: "siramai",
    slug: "siramai",
    name: "Siramai",
    oneLiner: "Agentic e-commerce OS for 4+ enterprise brands—2K+ daily queries, 30% latency drop, $1.0M raised.",
    problem: "E-commerce brands lose conversions due to poor keyword-only search that can't personalize at scale.",
    solution: "No-code agentic framework with multimodal vector search and adaptive LLM reranking.",
    impact: "4+ enterprise customers, 2K+ daily queries, 30% latency reduction, 18% relevance improvement. $1.0M raised.",
    whyBuilt: "E-commerce brands were losing customers to poor search. Built this to make AI search accessible without ML expertise.",
    proof: [
      { label: "Customers", value: "4+" },
      { label: "Daily Queries", value: "2K+" },
      { label: "Latency ↓", value: "30%" },
    ],
    system: ["Next.js", "Vector Search", "Gemini", "PostgreSQL", "Redis", "Kubernetes", "AWS EKS"],
    bullets: [
      "Designed no-code agent framework + adaptive ranking: vector search + LLM reranking → 30% latency reduction at 2K+ QPS",
      "Deployed on AWS EKS with Redis caching + auto-scaling—99.9% uptime across 4+ enterprise customers",
      "Optimized multimodal search pipeline (text + image embeddings) for e-commerce catalog indexing, enabling real-time personalization",
    ],
    resumeBullets: [
      "Built agentic e-commerce search platform serving 2K+ daily queries across 4 enterprise customers at 99.9% uptime",
      "Architected multimodal vector search pipeline (CLIP embeddings + Gemini reranking) reducing latency 30% while improving relevance 18%",
      "Deployed production Kubernetes infrastructure on AWS EKS with Redis Cluster, Kafka event streaming, and auto-scaling",
    ],
    tags: ["ML/Agents", "Vector Search", "Infra"],
    type: "AI/ML",
    status: "Prototype",
    domain: "E-comm",
    links: {
      demo: "https://www.siramai.com/",
    },
    image: Siramai,
    featured: true,
    impactScore: 94,
    date: "2024-09-10",
    isCurrentlyLive: false,
  },
  {
    id: "hanger",
    slug: "hanger",
    name: "Hanger",
    oneLiner: "AI shopping layer for fashion—2K+ users, +40% CTR via semantic product discovery.",
    problem: "Fashion shoppers search by aesthetic vibes, but keyword search can't understand style intent.",
    solution: "Semantic discovery using OpenAI embeddings for natural language queries across 1M+ products.",
    impact: "2K+ users, 40% CTR improvement, 28% conversion increase. Outcompeted $35M+ funded competitor.",
    whyBuilt: "Frustrated by endless scrolling. Built search by vibe ('indie sleaze') instead of keywords—how people actually think about style.",
    proof: [
      { label: "Users", value: "2K+" },
      { label: "CTR Gain", value: "+40%" },
    ],
    system: ["Next.js", "OpenAI", "Pinecone", "Redis", "Docker", "AWS ECS + S3"],
    bullets: [
      "Designed semantic product discovery: OpenAI embeddings + Pinecone vector DB → 40% CTR improvement over keyword search",
      "Deployed on Vercel with edge caching + serverless functions—handling 2K+ users with <100ms p50 latency",
      "Optimized vector indexing strategy (HNSW) for 1M+ product catalog, reducing search latency by 35%",
      "Search product outcompeted $35M+ funded competitor (Daydream)",
    ],
    resumeBullets: [
      "Built semantic fashion search engine serving 2K+ users with 40% CTR improvement and 28% conversion increase",
      "Architected hybrid vector search system using OpenAI embeddings + Pinecone HNSW indices across 1M+ product catalog",
      "Deployed serverless infrastructure on Vercel Edge with <100ms p50 latency and zero cold starts",
    ],
    testimonials: [
      {
        quote: "Finally, a search that gets my style. I found pieces I'd never discover through normal browsing.",
        author: "Emma Rodriguez",
        role: "Early User, Fashion Designer"
      }
    ],
    tags: ["Vector Search", "Product", "Mobile"],
    type: "Full-stack",
    status: "Prototype",
    domain: "Fashion",
    links: {
      demo: "https://www.hanger.live/",
    },
    image: Hanger2,
    images: [Hanger2],
    featured: true,
    impactScore: 88,
    date: "2024-07-15",
    isCurrentlyLive: false,
  },
  {
    id: "district-four",
    slug: "district-four",
    name: "District Four",
    oneLiner: "AI-powered lead gen agency—$2K MRR, 62K+ prospects processed, 8.2% response rate (4x industry avg).",
    proof: [
      { label: "MRR", value: "$2K" },
      { label: "Prospects", value: "62K+" },
      { label: "Response Rate", value: "8.2%" },
    ],
    system: ["React", "LangChain", "OpenAI", "MongoDB", "Docker", "AWS Lambda"],
    bullets: [
      "Designed LangChain agent pipeline: web scraping → GPT-4 lead scoring → personalized outreach—8.2% response (4x industry avg)",
      "Deployed on AWS Lambda + MongoDB Atlas—processing 62K+ prospects, serverless scaling for variable workload",
      "Optimized agent workflows to process 10K prospects/day at <$50 API cost, enabling profitable $2K MRR agency model",
    ],
    tags: ["ML/Agents", "Growth Systems", "Product"],
    type: "AI/ML",
    status: "Prototype",
    domain: "Growth",
    links: {
      demo: "https://www.district-four.com/",
    },
    image: LumeLabs,
    featured: false,
    impactScore: 85,
    date: "2024-05-10",
    isCurrentlyLive: false,
  },
  {
    id: "fitcheck",
    slug: "fitcheck",
    name: "FitCheck",
    oneLiner: "Fashion social network—300+ users, 40% DAU, 62% D7 retention, 10.4K+ posts.",
    proof: [
      { label: "Users", value: "300+" },
      { label: "DAU", value: "40%" },
      { label: "D7 Retention", value: "62%" },
    ],
    system: ["React Native", "Node.js", "MongoDB", "AWS S3", "Redis", "Kubernetes", "Digital Ocean"],
    bullets: [
      "Designed React Native social app with personalized feed algorithm + real-time WebSocket updates—40% DAU, 62% D7 retention",
      "Deployed on DO Kubernetes with Redis caching (90% hit rate)—serving 10.4K+ posts with <200ms feed load time",
      "Optimized image pipeline: S3 + compression → 67% upload time reduction (15s→5s), improving post completion rate by 23%",
    ],
    tags: ["Mobile", "Product", "Infra"],
    type: "Full-stack",
    status: "Prototype",
    domain: "Fashion",
    links: {
      demo: "https://www.fitcheck.live/",
    },
    image: FitCheck,
    featured: false,
    impactScore: 83,
    date: "2024-04-05",
    isCurrentlyLive: false,
  },
  {
    id: "openfield",
    slug: "openfield",
    name: "OpenField",
    oneLiner: "NIL marketplace for college athletes—30+ athletes, $3.5K+ GMV, <48h deal completion.",
    problem: "Athletes struggle to monetize NIL rights. Traditional deals take 2+ weeks and require legal review.",
    solution: "Two-sided marketplace with automated matching, NCAA-compliant contracts, and Stripe escrow.",
    impact: "$3.5K+ facilitated across 30+ athletes, deal time reduced from 2 weeks to <48h.",
    whyBuilt: "Post-NCAA ruling, athletes had zero infrastructure to monetize their brand. Built this to democratize endorsement deals.",
    proof: [
      { label: "Athletes", value: "30+" },
      { label: "GMV", value: "$3.5K+" },
      { label: "Deal Time", value: "<48h" },
    ],
    system: ["React", "Node.js", "PostgreSQL", "Stripe Connect", "DocuSign", "AWS ECS", "RDS"],
    bullets: [
      "Designed two-sided marketplace: athlete profiles + business matching → $3.5K+ GMV across 520+ athletes",
      "Deployed Stripe Connect split payments (15% platform fee) + automated DocuSign contracts with NCAA compliance checks",
      "Optimized deal flow: automated matching + contract generation → <48h from inquiry to signed deal (vs 2-week industry avg)",
    ],
    resumeBullets: [
      "Built two-sided marketplace platform facilitating $3.5K+ GMV and reducing deal completion time by 93% (2 weeks → 48h)",
      "Architected automated contract generation system with NCAA compliance validation using DocuSign API integration",
      "Deployed Stripe Connect escrow payment infrastructure with 15% platform fee and automated 1099 tax generation",
    ],
    tags: ["Marketplace", "Product", "Infra"],
    type: "Full-stack",
    status: "Archived",
    domain: "Marketplace",
    links: {
      live: "https://www.openfield.live/",
    },
    image: OpenField,
    featured: false,
    impactScore: 80,
    date: "2024-03-12",
    isCurrentlyLive: false,
  },
];

export const PRODUCT_TAGS: ProductTag[] = [
  "Infra",
  "ML/Agents",
  "Product",
  "Real-time Inference",
  "RAG",
  "Marketplace",
  "Growth Systems",
  "Vector Search",
  "Mobile",
];

export const PRODUCT_TYPES: ProductType[] = ["AI/ML", "Infra", "Full-stack"];
export const PRODUCT_STATUSES: ProductStatus[] = ["Live", "Pilot", "Prototype"];
export const PRODUCT_DOMAINS: ProductDomain[] = ["Healthcare", "E-comm", "Fashion", "Growth", "Marketplace"];
