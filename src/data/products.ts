import { StaticImageData } from "next/image";

// Import product images
import Culin from "../app/projects/pictures/culin.png";
import Culin1 from "../app/projects/pictures/culin1.png";
import Culin2 from "../app/projects/pictures/culin2.png";
import FitCheck from "../app/projects/pictures/fitcheck.png";
import Siramai from "../app/projects/pictures/siramai.png";
import psych from "../app/projects/pictures/psych.png";
import OpenField from "../app/projects/pictures/openfield.png";
import Hanger from "../app/projects/pictures/hanger.png";
import Hanger2 from "../app/projects/pictures/hanger2.png";
import HangerPreview1 from "../app/projects/pictures/preview1.webp";
import HangerPreview2 from "../app/projects/pictures/preview2.webp";
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
export type ProductStatus = "Live" | "Pilot" | "Prototype" | "Archived";
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
  screenshotDescriptions?: string[];
  technicalDeepDive?: {
    sectionTitle: string;
    intro?: string;
    subsections: {
      title: string;
      body?: string;
      bullets?: string[];
    }[];
  }[];
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
    oneLiner: "Automatic Psychotherapy and Insurance Notes Generation using our Multi-Modal AI",
    problem: "Psychiatrists spend 4+ hours/day on notes, interrupting therapy and missing non-verbal emotional cues. Existing EHR tools add admin work without clinical insight. Burnout exceeds 50%.",
    solution: "Built a real-time multimodal AI pipeline combining facial microexpressions, voice stress, and transcripts to auto-generate SOAP notes. Runs during sessions with <200ms latency. HIPAA-compliant deployment across clinics.",
    impact: "Deployed to 4+ clinics / 200+ patients. Cut documentation from 45 min → 3.5 min (92% reduction). Improved diagnostic insight with multimodal emotion detection.",
    whyBuilt: "Shadowed a psychiatrist friend who spent more time typing than talking. Built Congruence to automate notes and surface emotional signals clinicians miss.",
    proof: [
      { label: "Clinics", value: "4+" },
      { label: "Patients", value: "200+" },
      { label: "Accuracy", value: "76%" },
      { label: "Doc Reduction", value: "92%" },
      { label: "Uptime", value: "99.8%" },
    ],
    system: ["React Native", "FastAPI", "OpenCV", "Wav2Vec2", "GPT-4", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    bullets: [
      "Built multimodal CNN + Wav2Vec2 + LLM pipeline → 76% clinical emotion accuracy",
      "Triple-embedding incongruence detection → 89% masked-emotion sensitivity",
      "Real-time inference <200ms using GPU video + CPU audio + Redis fusion",
      "Deployed on DO Kubernetes → 99.8% uptime, HIPAA-compliant",
    ],
    resumeBullets: [
      "Designed and deployed production multimodal ML pipeline reducing psychiatrist documentation time by 92% (45min → 3.5min) across 4 clinics serving 200+ patients",
      "Architected HIPAA-compliant Kubernetes infrastructure processing 60 FPS video + 16kHz audio with <200ms p99 latency at 99.8% uptime",
      "Built incongruence detection system achieving 76% emotion classification accuracy (23% above GPT-4 Vision baseline), catching masked depression with 89% sensitivity",
      "Led end-to-end product development: user research with 15+ psychiatrists, clinical validation study (IRB approved), SOC 2 Type II compliance, and white-glove onboarding",
    ],
    testimonials: [],
    tags: ["ML/Agents", "Infra", "Real-time Inference"],
    type: "AI/ML",
    status: "Live",
    domain: "Healthcare",
    links: {
      live: "https://congruenceinsights.com",
      demo: "https://congruenceinsights.com/demo",
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
    oneLiner: "Real-Time Nutrition Decision Engine — decides what you eat next (Order or Cook) in seconds using hierarchical RAG across nutrition data, patient history, and research evidence. Deployed in a UCSD Health pilot.",
    problem: "Nutrition planning fails at the moment of decision:\n\n• Nutrition data is fragmented across recipes, macros, menus, and medical guidelines\n• Meal planners are static and ignore real-time constraints (time, budget, pantry, location)\n• Patients don't follow plans due to decision fatigue\n\nNutritionists spend hours researching meals — and patients still don't eat what was planned.",
    solution: "Built the CulinAI Decision Engine — a real-time system that:\n\n• Learns taste, time, macro targets, allergies, and budget\n• Chooses Order vs Cook automatically using binary optimization\n• Generates a grocery cart or restaurant action instantly\n• Improves recommendations from real eating behavior via weekly retraining\n\nInstead of planning meals, CulinAI decides the next one.",
    impact: "200+ UCSD pilot patients served\n+22% recommendation accuracy over GPT-4 baseline\n<3s P95 latency on all queries\nZero PHI breaches over 6 months\nSignificant reduction in meal decision time vs traditional planning",
    whyBuilt: "I track macros daily (~1800 kcal / 150g protein) and realized meal apps fail because they don't decide in real life — they hand you a plan and walk away. CulinAI automates the hardest part: choosing. Built this to prove real-time decision intelligence beats static planning.",
    proof: [
      { label: "Patients", value: "200+" },
      { label: "Accuracy Gain", value: "+22%" },
      { label: "P95 Latency", value: "<3s" },
      { label: "PHI Breaches", value: "0" },
    ],
    system: [
      "Python Ingestion Pipelines",
      "Postgres + Supabase RLS",
      "AWS S3",
      "QDrant Vector DB",
      "LangChain Agents",
      "OpenAI GPT-4",
      "FastAPI",
      "Next.js",
      "Docker",
      "AWS ECS + App Runner",
      "CloudWatch",
    ],
    bullets: [
      "Designed 3-layer hierarchical RAG retrieval DAG: Nutrition DB → Patient History → Research Evidence — each query runs patient context embedding, constraint filtering (allergies, macros, budget), and subgraph retrieval across all layers before LLM reasoning → +22% accuracy over baseline GPT-4",
      "Built binary decision engine selecting Order OR Cook, taking macro targets, taste preferences, budget, time, nearby restaurants, and pantry inventory as inputs — outputs either a recipe + grocery cart or restaurant choice + macro estimate in <3s P95",
      "Integrated 5 structured + unstructured nutrition sources: USDA DB, recipe datasets, OpenMenu restaurant data + scraping pipelines, patient diet logs, and clinical research papers — ingested via Python pipelines into Postgres + QDrant",
      "Deployed HIPAA-ready infrastructure on AWS ECS + App Runner with Supabase Postgres (RLS-enforced), Dockerized services, and CloudWatch monitoring — zero PHI breaches across 6 months and 200+ patients",
      "Built feedback learning loop collecting post-meal signals (eaten, macro deviation, rating, time-to-eat) — used to retrain ranking model weekly, compounding accuracy gains over time",
    ],
    resumeBullets: [
      "Architected real-time nutrition decision engine serving 200+ UCSD Health pilot patients, achieving +22% recommendation accuracy over GPT-4 baseline via 3-layer hierarchical RAG (Nutrition DB → Patient History → Research Evidence)",
      "Designed binary optimization decision model selecting Order vs Cook from macro targets, taste preferences, budget, time, pantry inventory, and nearby restaurants — returning full next action in <3s P95",
      "Ingested 5 structured + unstructured nutrition data sources (USDA, OpenMenu, patient logs, clinical papers) into Postgres + QDrant via Python pipelines; built custom retrieval DAG with constraint filtering across all layers",
      "Deployed HIPAA-compliant production infrastructure on AWS ECS + App Runner with Supabase Postgres (RLS), CloudWatch monitoring — zero PHI breaches over 6 months",
      "Built weekly feedback retraining loop from real eating signals (macro deviation, ratings, time-to-eat) continuously improving recommendation ranking",
    ],
    tags: ["RAG", "ML/Agents", "Real-time Inference"],
    type: "AI/ML",
    status: "Live",
    domain: "Healthcare",
    links: {
      live: "https://www.culin.ai",
      demo: "https://www.culin.ai",
    },
    image: Culin,
    screenshots: [Culin1, Culin2],
    screenshotDescriptions: [
      "Real-time decision interface — CulinAI analyzes your constraints and instantly outputs Order or Cook with the exact next action: a recipe + grocery cart or a restaurant recommendation with macro estimate.",
      "Nutritional intelligence dashboard — tracks macro adherence, eating patterns, and recommendation history, with the RAG engine continuously refining suggestions from real behavior signals.",
    ],
    technicalDeepDive: [
      {
        sectionTitle: "Data Layer",
        intro: "Integrated structured + unstructured nutrition sources into a unified retrieval foundation.",
        subsections: [
          {
            title: "Nutrition Data Sources",
            bullets: [
              "USDA nutrition database — ground truth macro + micronutrient values",
              "Recipe datasets — ingredient lists, prep time, cooking instructions",
              "Restaurant menus via OpenMenu API + custom scraping pipelines — real menu items with macro estimates",
              "Patient diet logs and macro history — personalized eating behavior patterns",
              "Clinical nutrition research papers — evidence-based dietary guidelines",
            ],
          },
          {
            title: "Ingestion & Storage Stack",
            bullets: [
              "Python ingestion pipelines normalize and validate all incoming data across source formats",
              "Postgres + Supabase with Row Level Security (RLS) for patient data isolation and HIPAA compliance",
              "AWS S3 for raw data archiving and document storage",
              "QDrant vector DB for embedding-based retrieval across all data layers",
            ],
          },
        ],
      },
      {
        sectionTitle: "Multi-Layer RAG Engine",
        intro: "A 3-layer retrieval DAG that combines nutrition science, personal history, and research evidence — every query traverses all three layers before reaching the LLM.",
        subsections: [
          {
            title: "Retrieval DAG Architecture",
            bullets: [
              "Layer 1 — Nutrition DB: retrieves macro-matched food options from USDA + recipe + restaurant data",
              "Layer 2 — Patient History: filters by personal taste preferences, past meals, allergies, and macro adherence patterns",
              "Layer 3 — Research Evidence: surfaces clinical guidelines relevant to the patient's diet context",
            ],
          },
          {
            title: "Query Execution Flow",
            bullets: [
              "Patient context embedding: encodes current constraints (time, budget, location, macro targets)",
              "Constraint filtering: eliminates options violating allergies, budget, or macro hard limits",
              "Subgraph retrieval: pulls candidates from each layer in the DAG using QDrant semantic search",
              "Large-model reasoning: GPT-4 synthesizes cross-layer candidates into a final ranked recommendation",
            ],
          },
          {
            title: "Stack",
            bullets: [
              "LangChain agents orchestrate the multi-layer retrieval DAG",
              "QDrant vector indexing with namespace isolation per data layer",
              "OpenAI GPT-4 for final reasoning and recommendation generation",
              "Custom retrieval DAG logic for subgraph traversal and constraint propagation",
              "Result: +22% recommendation accuracy vs baseline GPT-4 meal generation",
            ],
          },
        ],
      },
      {
        sectionTitle: "Decision Engine",
        intro: "Binary optimization model that outputs a single, actionable next meal decision — not a plan.",
        subsections: [
          {
            title: "Inputs",
            bullets: [
              "Macro targets (calories, protein, carbs, fat remaining for the day)",
              "Taste preferences and cuisine history",
              "Budget available for this meal",
              "Time available (prep time vs ordering time)",
              "Nearby restaurants (location-aware with menu data pre-indexed)",
              "Pantry inventory (what's available to cook with)",
            ],
          },
          {
            title: "Outputs",
            bullets: [
              "Order → specific restaurant + dish recommendation with macro estimate",
              "Cook → specific recipe + generated grocery cart with exact items",
              "Decision rendered in <3s P95 latency end-to-end",
            ],
          },
        ],
      },
      {
        sectionTitle: "Feedback Learning Loop",
        intro: "The system retrains from real eating behavior weekly, compounding accuracy gains over time.",
        subsections: [
          {
            title: "Signals Collected",
            bullets: [
              "Did user eat the suggestion (acceptance signal)",
              "Macro deviation — actual macros vs recommended",
              "Explicit rating feedback (1–5 stars)",
              "Time-to-eat — how fast the user acted on the recommendation",
            ],
          },
          {
            title: "Retraining Pipeline",
            bullets: [
              "Signals aggregated weekly per patient and across cohort",
              "Used to retrain ranking model: upweight accepted recommendations, downweight rejected patterns",
              "Preference embeddings updated in QDrant for tighter personalization on next cycle",
              "Result: continuous accuracy improvement compounding over the 6-month pilot",
            ],
          },
        ],
      },
      {
        sectionTitle: "Production Infrastructure",
        intro: "HIPAA-ready backend built for healthcare deployment with auto-scaling and zero PHI exposure.",
        subsections: [
          {
            title: "Stack",
            bullets: [
              "FastAPI backend — async inference workers with auto-scaling",
              "Next.js frontend — patient-facing decision interface",
              "Dockerized services deployed on AWS ECS + App Runner",
              "Supabase Postgres with RLS — row-level security enforcing patient data isolation",
              "CloudWatch monitoring — latency, error rates, and inference throughput dashboards",
            ],
          },
          {
            title: "Performance",
            bullets: [
              "<3s P95 latency across all recommendation requests",
              "Auto-scaling inference workers handle peak meal-time traffic",
              "Zero PHI breaches over 6 months of production operation",
            ],
          },
        ],
      },
    ],
    featured: true,
    impactScore: 89,
    date: "2024-06-20",
    isCurrentlyLive: true,
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
    status: "Archived",
    domain: "E-comm",
    links: {
      demo: "https://www.siramai.com/",
    },
    image: Siramai,
    featured: true,
    impactScore: 90,
    date: "2024-09-10",
    isCurrentlyLive: false,
  },
  {
    id: "hanger",
    slug: "hanger",
    name: "Hanger",
    oneLiner: "AI fashion discovery engine—2K+ users, +40% CTR, 22% relevance gain vs $50M+ competitor via CLIP fine-tuning + hybrid retrieval.",
    problem: "Fashion shoppers search by vibe ('winter formal but casual streetwear'), not keywords.\n\nTraditional systems fail:\n• Keyword matching misses semantic intent\n• Collaborative filtering can't handle cold-start\n• Daydream spent $50M+ but still couldn't solve this",
    solution: "Three technical optimizations beat their infrastructure:\n\n1. Better Representation\n• Fine-tuned CLIP on fashion data\n• Multi-vector embeddings per product\n• Attribute-aware layers (materials, seasonality, fit, occasion)\n\n2. Hybrid Retrieval\n• PostgreSQL → structured filters (price, size, inventory)\n• Pinecone → semantic search (HNSW indexing)\n• Merge + rerank for best results\n\n3. Context-Aware Reasoning\n• FastAPI agents reason across dimensions\n• Weather vs materials, occasion vs dress code\n• Budget + inventory constraints\n• Handles queries like 'cold NYC rooftop party under $200'",
    impact: "Outcompeted $50M+ competitor with $500/month infrastructure:\n\n• 2K+ users\n• +40% CTR improvement\n• +28% conversion increase\n• +22% relevance vs baseline\n• 15% faster with sub-second latency\n• Production-ready in 3 months",
    whyBuilt: "Frustrated by endless scrolling through keyword search that didn't understand style intent. Built Hanger to match how people actually think about fashion, by vibe, context, and aesthetic, not just product attributes. Wanted to prove you could beat well-funded competitors through smarter technical choices, not just scale.",
    proof: [
      { label: "Users", value: "2K+" },
      { label: "CTR Gain", value: "+40%" },
      { label: "Relevance ↑", value: "+22%" },
      { label: "Latency ↓", value: "15%" },
      { label: "Infra Cost", value: "$500/mo" },
    ],
    system: ["CLIP (Fine-tuned)", "FastAPI", "PostgreSQL", "Pinecone", "Redis", "Docker", "Vercel Edge"],
    bullets: [
      "Fine-tuned CLIP embeddings on fashion-specific data with multi-vector representations per product (materials, seasonality, fit, occasion) → 22% relevance improvement over baseline",
      "Built hybrid retrieval pipeline: PostgreSQL structured filters (price, size, inventory) + Pinecone semantic search (HNSW indexing) + merge/rerank → 15% latency reduction, sub-second recommendations",
      "Designed context-aware reasoning layer with FastAPI agents: reasons across weather vs materials, color palettes vs seasonality, occasion vs dress code, budget constraints → handles queries like 'cold NYC rooftop party under $200'",
      "Optimized for lean production: cached embeddings, query batching, reduced vector dimensions with minimal accuracy loss → $500/month infrastructure vs Daydream's $50M+ spend",
      "Deployed on Vercel Edge with Redis caching—handling 2K+ users with <100ms p50 latency across 1M+ product catalog",
    ],
    resumeBullets: [
      "Built semantic fashion discovery engine serving 2K+ users with 40% CTR improvement and 28% conversion increase, outcompeting $50M+ funded competitor (Daydream) with $500/month infrastructure",
      "Fine-tuned CLIP embeddings on fashion-specific data with attribute-aware layers (materials, seasonality, fit, occasion) achieving 22% relevance improvement over baseline collaborative filtering",
      "Architected hybrid retrieval pipeline combining PostgreSQL structured filters + Pinecone semantic search (HNSW) + LLM reranking, reducing latency 15% with sub-second real-time recommendations",
      "Designed context-aware reasoning layer using FastAPI agents to match semantic intent across dimensions (weather, occasion, budget, inventory), enabling queries like 'winter formal but casual streetwear vibe'",
      "Deployed production-grade system in 3 months with cached embeddings, query batching, and optimized vector dimensions—achieving comparable quality to heavily funded competitor at 1/100th the cost",
    ],
    testimonials: [
      {
        quote: "Finally, a search that gets my style. I found pieces I'd never discover through normal browsing.",
        author: "Emma Rodriguez",
        role: "Early User, Fashion Designer"
      }
    ],
    tags: ["Vector Search", "ML/Agents", "Product"],
    type: "AI/ML",
    status: "Live",
    domain: "Fashion",
    links: {
      demo: "https://www.hanger.live/",
    },
    image: Hanger2,
    images: [Hanger2, HangerPreview1, HangerPreview2],
    screenshots: [HangerPreview1, HangerPreview2],
    technicalDeepDive: [
      {
        sectionTitle: "Ingestion + Catalog Pipeline",
        intro: "We built Hanger's product catalog as a daily-refresh system that could ingest thousands of SKUs across retailers and keep availability + pricing current.",
        subsections: [
          {
            title: "Retailer Scraping with Puppeteer",
            body: "Used Puppeteer to crawl retailer category pages and product pages with normalized field extraction and per-retailer parsing modules so one site change didn't break the entire pipeline.",
            bullets: [
              "Extracted normalized fields: title, brand, price, sale_price, currency, images, sizes, color, material, category, product_url, retailer, SKU/variant IDs",
              "Anti-breakage patterns: retry logic, exponential backoff, selector fallbacks",
              "Per-retailer parsing modules isolated failures to individual crawlers",
            ],
          },
          {
            title: "Scraping at Scale",
            bullets: [
              "Distributed scrape jobs batched by retailer/category with controlled concurrency to avoid rate limits",
              "Stored raw HTML snapshots + parsed payloads for debugging and diffing when retailers changed page structure",
              "Predictable run durations with worker pool limiting and per-domain throttles",
            ],
          },
          {
            title: "Admin Interface + Cron-Controlled Refresh",
            body: "Built an admin dashboard for full operational control over the ingestion pipeline.",
            bullets: [
              "Enable/disable retailers, categories, or individual crawlers on the fly",
              "Set scrape frequency per crawler (e.g., 1×/day or more for fast-moving inventory)",
              "Trigger manual re-runs and view job health: success %, failures, last run, duration",
              "Upserts on each run; missing items marked 'inactive' instead of hard-deleted for churn tracking + recovery",
            ],
          },
          {
            title: "Embeddings + Vector Indexing (CLIP + Pinecone)",
            body: "For every product we precomputed embeddings at ingestion time so nothing ran on the user query path.",
            bullets: [
              "Generated CLIP image embedding + text embedding per product at ingestion",
              "Stored in Pinecone: vector = CLIP embedding, metadata = retailer, price range, category, size availability, gender, color",
              "Precomputing kept search fast and latency predictable — no embedding generation at query time",
            ],
          },
        ],
      },
      {
        sectionTitle: "Search Agent",
        intro: "Goal: 'show me items like this' and 'find me a [style] outfit' — fast, relevant, and filterable.",
        subsections: [
          {
            title: "Query → Retrieval → Rerank",
            bullets: [
              "Parse intent + constraints from user query (e.g. 'black mini dress under $120' → color=black, category=dress, price<120)",
              "Retrieve candidates from Pinecone via semantic vector search (CLIP text embedding of query, or image embedding for inspo images) + hard metadata filters (price, retailer, category, in-stock sizes)",
              "Re-rank with blended score: vector similarity distance + inventory confidence (in-stock at last refresh) + preference boosts (brands saved, liked styles)",
              "Return paginated results with stable sorting so items don't shuffle between pages",
            ],
          },
        ],
      },
      {
        sectionTitle: "Recommendation Engine",
        intro: "A personalization loop built on implicit + explicit signals, continuously updating a per-user preference profile.",
        subsections: [
          {
            title: "Signals",
            bullets: [
              "Implicit: clicks, dwell time, add-to-collection, 'more like this'",
              "Explicit: likes/dislikes, brands to follow/avoid, price comfort range, preferred categories",
            ],
          },
          {
            title: "Recommendation Flow",
            bullets: [
              "Maintain a user preference profile: embedding centroid from liked items, negative centroid from disliked items, structured constraints (price, categories)",
              "Periodically query Pinecone with the user's preference embedding + apply metadata filters",
              "Diversify results using clustering + similarity thresholds to avoid 20 near-identical black tops",
              "Delivered as: 'For You' feed, 'Because you liked X', 'New in your style' (items scraped in last 24h prioritized)",
            ],
          },
        ],
      },
      {
        sectionTitle: "Frontend Architecture",
        intro: "A React search + feed UI built for stability on a large, constantly-changing catalog.",
        subsections: [
          {
            title: "React + Server-Driven Pagination",
            bullets: [
              "Consistent product card component + skeleton loaders across all views",
              "Cursor-based pagination preferred over offset — prevents duplicates when inventory changes mid-scroll",
              "API returns items + nextCursor; frontend requests next page on scroll or 'Load more'",
              "Cached results per query so back/forward navigation is instant",
              "Debounced query input to avoid firing on every keystroke",
              "Optimistic UI for likes/saves with rollback on failure",
              "Search filters wired directly to backend metadata filters — no expensive client-side re-processing",
            ],
          },
          {
            title: "Why This Mattered",
            body: "The catalog is large and constantly changing — stock and pricing update daily. Stable pagination + caching + consistent ranking prevented duplicated items across pages, missing items when new inventory arrived mid-scroll, and jarring reshuffles when toggling filters.",
          },
        ],
      },
    ],
    featured: true,
    impactScore: 94,
    date: "2024-07-15",
    isCurrentlyLive: true,
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
    status: "Archived",
    domain: "Growth",
    links: {
      demo: "https://www.district-four.com/",
    },
    image: LumeLabs,
    featured: false,
    impactScore: 86,
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
    status: "Archived",
    domain: "Fashion",
    links: {
      demo: "https://www.fitcheck.live/",
    },
    image: FitCheck,
    featured: false,
    impactScore: 87,
    date: "2024-04-05",
    isCurrentlyLive: false,
  },
  {
    id: "openfield",
    slug: "openfield",
    name: "OpenField",
    oneLiner: "Live NIL marketplace connecting college athletes with brands — automated matching, contracts, and payments under NCAA + state NIL laws.",
    problem: "500K+ college athletes gained NIL rights but had no infrastructure to monetize them:\n\n• Deals happened through DMs over 2–4 weeks\n• Contracts required lawyers ($500–$2K each)\n• Agencies took 25–40% cuts\n• 95% of athletes were ignored\n\nThere was no scalable platform for small and mid-tier athletes.",
    solution: "Built OpenField, a live two-sided marketplace that:\n\n• Matches athletes to brands using collaborative filtering across sport, follower count, location, and brand category\n• Generates NCAA-compliant contracts automatically via DocuSign across 19 state NIL laws\n• Handles escrow payments with Stripe Connect (85/15 split) and milestone payouts\n• Tracks deals, deliverables, and compliance in one platform\n\nAthletes get offers in days instead of weeks.",
    impact: "30+ athletes across 5 universities\n12 brands onboarded\n$3.5K+ GMV processed\nDeal time reduced 2 weeks → 42 hours (93% reduction)\n78% of athletes receive offers in their first week",
    whyBuilt: "My D1 wrestler roommate couldn't afford textbooks despite training 40+ hours a week. I built OpenField so NIL isn't only for star athletes — any college athlete with an audience deserves a shot at monetization.",
    proof: [
      { label: "Athletes", value: "30+" },
      { label: "Brands", value: "12" },
      { label: "GMV", value: "$3.5K+" },
      { label: "Deal Time", value: "42h" },
      { label: "Offer Rate", value: "78%" },
    ],
    system: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe Connect", "DocuSign API", "Docker", "AWS ECS", "S3"],
    bullets: [
      "Designed normalized relational schema for a live marketplace — Athletes ↔ Deals ↔ Contracts ↔ Deliverables ↔ Payments with referential integrity — enabled automated contract generation, escrow payment states, and race-condition-free marketplace queries",
      "Built collaborative filtering matching engine across sport, follower count, location, brand category, and NIL state law compliance → 67% match-to-deal conversion rate",
      "Implemented NCAA + state NIL compliance engine across 19 state laws via DocuSign API — automatically selects correct contract template per athlete university and state",
      "Stripe Connect escrow pipeline with 85/15 split and milestone payouts — zero payment disputes across all processed deals",
      "Redis caching layer (88% hit rate) on marketplace search queries — fast athlete discovery across concurrent brand sessions",
    ],
    resumeBullets: [
      "Built and launched live two-sided NIL marketplace serving 30+ college athletes and 12 brands, processing $3.5K+ GMV and reducing deal time 93% (2 weeks → 42 hours)",
      "Designed normalized relational schema (Athletes, Brands, Campaigns, Deals, Contracts, Deliverables, Payments, ComplianceRules, StateLaws) enabling automated contract generation and escrow payment state management",
      "Architected NCAA compliance engine with DocuSign API generating state-specific contracts across 19 NIL state laws, enforcing eligibility constraints at schema level to prevent illegal deals",
      "Implemented collaborative filtering matching engine → 67% match-to-deal conversion; Stripe Connect escrow (85/15 split) with milestone payouts → zero payment disputes",
      "Deployed Dockerized services on AWS ECS with PostgreSQL + Redis caching (88% hit rate) and S3 document storage",
    ],
    testimonials: [],
    tags: ["Marketplace", "Product", "Infra"],
    type: "Full-stack",
    status: "Live",
    domain: "Marketplace",
    links: {
      live: "https://www.openfield.live/",
      demo: "https://www.openfield.live/demo",
    },
    image: OpenField,
    technicalDeepDive: [
      {
        sectionTitle: "Marketplace Data Model",
        intro: "The hardest part of OpenField wasn't the UI — it was designing a relational schema that could support a live marketplace with compliance, escrow, and contract state all enforced at the data layer.",
        subsections: [
          {
            title: "The Problem with Marketplace Schemas",
            body: "Marketplace logic required handling many-to-many athlete ↔ brand relationships, multiple deals per athlete, deliverables per contract, state-specific NIL rules, escrow payment flows, and contract revisions + signatures. A bad schema would break compliance or payments.",
          },
          {
            title: "Core Tables",
            bullets: [
              "Athletes — profile, university, sport, follower counts, state",
              "Brands — category, campaign budget, targeting criteria",
              "Campaigns — brand-owned, with eligibility filters and deliverable specs",
              "Deals — join between Athlete ↔ Campaign, with status state machine",
              "Contracts — 1-to-1 with Deal, stores DocuSign envelope ID and template used",
              "Deliverables — 1-to-many with Deal, tracks submission + approval",
              "Payments — 1-to-many with Deal, mirrors Stripe Connect payment intents",
              "ComplianceRules — 1-to-many with University, enforces school-specific NIL policies",
              "StateLaws — 1-to-many with ContractTemplates, maps state → correct DocuSign template",
            ],
          },
          {
            title: "Key Relationships",
            bullets: [
              "Athlete ↔ Deals (1-to-many) — one athlete can run multiple active deals",
              "Brand ↔ Campaigns (1-to-many) — one brand runs multiple campaigns simultaneously",
              "Campaign ↔ Deals (1-to-many) — one campaign can match many athletes",
              "Deal ↔ Contract (1-to-1) — every deal has exactly one binding contract",
              "Deal ↔ Deliverables (1-to-many) — contract can require multiple deliverables",
              "Deal ↔ Payments (1-to-many) — milestone-based escrow releases",
              "University ↔ ComplianceRules (1-to-many) — school-specific eligibility constraints",
              "StateLaw ↔ ContractTemplates (1-to-many) — 19 state NIL laws mapped to DocuSign templates",
            ],
          },
          {
            title: "Why This Mattered",
            bullets: [
              "Enabled automated contract generation — state + university determines template, no manual selection",
              "Supported escrow payment states — payments locked to deal status transitions",
              "Prevented illegal NIL deals — compliance rules enforced as foreign key constraints, not app logic",
              "Allowed live marketplace queries without race conditions — deal state machine uses row-level locking",
            ],
          },
        ],
      },
      {
        sectionTitle: "Matching Engine",
        intro: "Collaborative filtering with hard eligibility filters to surface relevant athletes to brands and relevant campaigns to athletes.",
        subsections: [
          {
            title: "Matching Signals",
            bullets: [
              "Sport — brand category alignment (e.g. apparel brands prioritize team sport athletes)",
              "Follower count — brand campaign tier requirements (micro, mid, macro)",
              "Location — geo-targeted campaigns, state law compliance gate",
              "Brand category — athlete audience demographic fit",
              "NIL state law compliance — hard filter, ineligible athletes excluded before ranking",
            ],
          },
          {
            title: "Result",
            bullets: [
              "67% match-to-deal conversion rate across all brand campaigns",
              "78% of athletes receive at least one offer in their first week on the platform",
            ],
          },
        ],
      },
      {
        sectionTitle: "Contracts & Compliance",
        intro: "DocuSign API generates legally binding, state-specific NIL contracts automatically — no lawyer required.",
        subsections: [
          {
            title: "How It Works",
            bullets: [
              "19 state NIL law templates pre-authored and stored in DocuSign template library",
              "On deal acceptance, system looks up athlete's university → state → correct template",
              "Populates dynamic fields: athlete name, brand, deliverables, payment terms, exclusivity clauses",
              "Sends envelope via DocuSign API to both parties for e-signature",
              "Contract status synced back to Deal table via DocuSign webhook",
            ],
          },
          {
            title: "Compliance Enforcement",
            bullets: [
              "NCAA eligibility rules and university-specific policies stored in ComplianceRules table",
              "Checked at match time — non-compliant athletes never surface to brands",
              "Schema-level enforcement prevents deal creation for ineligible athletes regardless of app logic",
            ],
          },
        ],
      },
      {
        sectionTitle: "Payments",
        intro: "Stripe Connect escrow with milestone-based releases and automatic platform fee splits.",
        subsections: [
          {
            title: "Escrow Flow",
            bullets: [
              "Brand funds deal upfront — Stripe payment intent created, held in escrow",
              "Funds released to athlete Stripe Connect account on deliverable approval",
              "85/15 split: 85% to athlete, 15% platform fee retained automatically",
              "Milestone deals: multiple payment intents per deal, each tied to a Deliverable row",
              "Zero payment disputes across all processed deals",
            ],
          },
        ],
      },
      {
        sectionTitle: "Infrastructure",
        intro: "Dockerized services on AWS ECS with PostgreSQL, Redis caching, and S3 for contract document storage.",
        subsections: [
          {
            title: "Stack",
            bullets: [
              "Next.js frontend — athlete profiles, campaign browsing, contract status, payment tracking",
              "Node.js API — marketplace logic, deal state machine, DocuSign + Stripe integrations",
              "PostgreSQL — normalized relational schema with referential integrity",
              "Redis — marketplace search query caching (88% hit rate)",
              "Docker + AWS ECS — containerized services with auto-scaling",
              "S3 — signed contract PDF storage and deliverable asset uploads",
            ],
          },
        ],
      },
    ],
    featured: true,
    impactScore: 88,
    date: "2024-03-12",
    isCurrentlyLive: true,
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
export const PRODUCT_STATUSES: ProductStatus[] = ["Live", "Pilot", "Prototype", "Archived"];
export const PRODUCT_DOMAINS: ProductDomain[] = ["Healthcare", "E-comm", "Fashion", "Growth", "Marketplace"];
