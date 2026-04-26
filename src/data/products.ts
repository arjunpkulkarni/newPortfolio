import { StaticImageData } from "next/image";

// Import product images
import Congruence from "../app/projects/pictures/congruence/congruence-logo.png";
// --- Archived product images commented out ---
// import Culin from "../app/projects/pictures/culin.png";
// import Culin1 from "../app/projects/pictures/culin1.png";
// import Culin2 from "../app/projects/pictures/culin2.png";
// import FitCheck from "../app/projects/pictures/fitcheck.png";
// import Siramai from "../app/projects/pictures/siramai.png";
// import psych from "../app/projects/pictures/psych.png";
// import OpenField from "../app/projects/pictures/openfield.png";
// import Hanger from "../app/projects/pictures/hanger.png";
// import Hanger2 from "../app/projects/pictures/hanger2.png";
// import HangerPreview1 from "../app/projects/pictures/preview1.webp";
// import HangerPreview2 from "../app/projects/pictures/preview2.webp";
// import LumeLabs from "../app/projects/pictures/lumelabs.png";
// import AnvaraMarketplace from "../app/projects/pictures/anvara/marketplace.png";
// import AnvaraCampaigns from "../app/projects/pictures/anvara/campaigns.png";
// import AnvaraCreateCampaign from "../app/projects/pictures/anvara/create_campaign.png";
// import AnvaraListings from "../app/projects/pictures/anvara/listings.png";
// import AnvaraAdSlot from "../app/projects/pictures/anvara/ad_slot.png";
import FitFoLogo from "../app/projects/pictures/fitfo/fitfo-logo-dark.png";
import SettldLogo from "../app/projects/pictures/setld/logo.png";
import Settld1 from "../app/projects/pictures/setld/IMG_4972.PNG";
import Settld2 from "../app/projects/pictures/setld/IMG_4973.PNG";
import Settld3 from "../app/projects/pictures/setld/IMG_4974.PNG";
import Settld4 from "../app/projects/pictures/setld/IMG_4975.PNG";
import Settld5 from "../app/projects/pictures/setld/IMG_4976.PNG";
import FitFo1 from "../app/projects/pictures/fitfo/IMG_4966.PNG";
import FitFo2 from "../app/projects/pictures/fitfo/IMG_4967.PNG";
import FitFo3 from "../app/projects/pictures/fitfo/IMG_4968.PNG";
import FitFo4 from "../app/projects/pictures/fitfo/IMG_4969.PNG";
import FitFo5 from "../app/projects/pictures/fitfo/IMG_4970.PNG";
import FitFo6 from "../app/projects/pictures/fitfo/IMG_4971.PNG";
import CulinLogo from "../app/projects/pictures/culin/culinAI.png";
import Culin1 from "../app/projects/pictures/culin/image1.png";
import Culin2 from "../app/projects/pictures/culin/image2.png";
import Culin3 from "../app/projects/pictures/culin/image3.png";
import Culin4 from "../app/projects/pictures/culin/image4.png";
import Culin5 from "../app/projects/pictures/culin/image5.png";

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
export type ProductDomain = "Healthcare" | "E-comm" | "Fashion" | "Growth" | "Marketplace" | "Fitness" | "Fintech";

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
    id: "culin",
    slug: "culin",
    name: "Culin",
    oneLiner: "A food decision engine that combines macro tracking, nutrition intelligence, and next-meal generation so users stop scrolling and start eating.",
    problem: "People know their nutrition goals, but the hardest moment is deciding what to eat next. Macro trackers require logging after the fact, food delivery apps create endless choice, and meal planners do not react to schedule, budget, cravings, or what is nearby.",
    solution: "Built Culin v1 as MyFitnessPal plus ChatGPT with a real nutrition layer: users bring macro goals and preferences, then Culin generates one next meal across order or cook paths with macro estimates, grocery or restaurant context, and a clear action.",
    impact: "Active product build focused on busy students, gym and macro trackers, professionals, meal preppers, parents, and anyone who hates deciding what to eat.",
    whyBuilt: "I wanted a nutrition app that helps at the actual decision point. Instead of another tracker that asks you to log what already happened, Culin helps decide the next best meal in seconds.",
    proof: [
      { label: "Decision", value: "1" },
      { label: "Paths", value: "2" },
      { label: "Focus", value: "Macros" },
    ],
    system: ["React Native", "Expo Router", "TypeScript", "Next.js API Routes", "FastAPI", "PostgreSQL", "OpenAI", "USDA/FatSecret Data"],
    bullets: [
      "Built a mobile-first nutrition decision flow that turns macro targets, preferences, schedule, and food context into one recommended next meal",
      "Designed a nutrition layer around structured food data, fuzzy matching, macro estimation, and AI-generated meal reasoning instead of generic chatbot responses",
      "Integrated full-stack app patterns across React Native/Expo, Next.js APIs, FastAPI services, Cognito/OIDC auth, PostgreSQL data work, and Dockerized deployment",
    ],
    tags: ["Mobile", "ML/Agents", "Product"],
    type: "Full-stack",
    status: "Live",
    domain: "Fitness",
    links: {
      live: "https://culin.ai",
    },
    image: CulinLogo,
    screenshots: [Culin1, Culin2, Culin3, Culin4, Culin5],
    screenshotDescriptions: [
      "Mobile nutrition experience designed around fast meal decisions and macro clarity",
      "Next-meal generation flow that converts user context into one actionable recommendation",
      "Food and nutrition surfaces built with calm wellness visuals and high-contrast macro data",
      "Preference and goal inputs that help the engine understand taste, budget, and diet constraints",
      "Decision-oriented UI that moves users from uncertainty to eating without app hopping",
    ],
    featured: true,
    impactScore: 93,
    date: "2026-04-26",
    isCurrentlyLive: true,
  },
  {
    id: "fitfo",
    slug: "fitfo",
    name: "FitFo",
    oneLiner: "Turn fitness videos into workouts you actually do. Share a TikTok or Reel, get a structured workout you can follow, edit, and track.",
    problem: "People scroll past great workouts on TikTok and Instagram every day but never actually do them. There's no bridge between fitness content consumption and real training  -  bookmarking a video doesn't give you exercises, sets, or reps you can follow in the gym.",
    solution: "Built FitFo, an iOS app that lets users share any TikTok or Reel directly to the app via iOS Share Extension. AI parses the video  -  audio, on-screen text, and visual cues  -  and extracts a structured workout with exercises, sets, reps, and rest. Users can edit, save, schedule, and log sessions.",
    impact: "Live on the App Store. Workouts parsed in ~30 seconds. Zero ads, fully private. Built alongside nunoliftz, Jacob Oestreicher, and Nirv.",
    whyBuilt: "We all train and scroll fitness content. The gap between seeing a great workout and actually doing it was too wide. FitFo closes that gap  -  share a video, get a real plan, train off it.",
    proof: [
      { label: "Parse Time", value: "~30s" },
      { label: "Privacy", value: "100%" },
      { label: "Ads", value: "0" },
    ],
    system: ["Swift (iOS)", "Share Extension", "AI Video Parsing", "TikTok/IG Integration"],
    bullets: [
      "Built AI video parsing pipeline extracting exercises, sets, reps, and rest from TikTok and Instagram Reel content",
      "Designed native iOS app with workout library, calendar scheduling, session logging, and muscle group tagging",
      "Integrated iOS Share Extension for zero-friction import  -  share directly from TikTok or Instagram without leaving the app",
    ],
    tags: ["Mobile", "ML/Agents", "Product"],
    type: "AI/ML",
    status: "Live",
    domain: "Fitness",
    links: {
      live: "https://www.fitfo.app/",
      demo: "https://apps.apple.com/us/app/fitfo/id6762418380",
    },
    image: FitFoLogo,
    screenshots: [FitFo5, FitFo2, FitFo1, FitFo6, FitFo3, FitFo4],
    screenshotDescriptions: [
      "Import workout  -  paste a TikTok or Reel link and FitFo extracts the workout structure",
      "Workout detail  -  structured card with exercises, sets, muscle groups, and source video link",
      "Workouts hub  -  saved library filterable by muscle group with one-tap session start",
      "Scheduled workouts  -  calendar view with planned sessions and quick re-scheduling",
      "Training archive  -  completed sessions with set counts and monthly stats",
      "Schedule again  -  pick a day to repeat your best workouts",
    ],
    featured: true,
    impactScore: 92,
    date: "2026-04-01",
    isCurrentlyLive: true,
  },
  {
    id: "settld",
    slug: "settld",
    name: "Settld",
    oneLiner: "Split the bill, not your friendships. Scan a receipt, tap who had what, get paid instantly via Stripe  -  no app required for payers.",
    problem: "Splitting a bill after dinner is awkward. People use calculators, Venmo requests, group-chat math, and someone always gets shorted. Existing apps require everyone to sign up, and none handle proportional tax and tip splitting correctly.",
    solution: "Built Settld, a mobile app that uses OCR to scan any receipt, lets you assign items to friends, splits tax and tip proportionally, and generates a pay link anyone can open in a browser. Payers use Apple Pay, Google Pay, or card  -  no signup required. Powered by Stripe Connect for instant payouts.",
    impact: "Live on iOS and Android. Zero fees for payers. 60-second average setup time. Stripe-powered payments with PCI-DSS Level 1 security.",
    whyBuilt: "Got tired of the awkward calculator moment at every dinner. Built Settld so splitting a bill takes 10 seconds instead of 10 minutes of group-chat math.",
    proof: [
      { label: "Payer Fees", value: "$0" },
      { label: "Setup Time", value: "60s" },
      { label: "Taps to Settle", value: "3" },
    ],
    system: ["React Native", "OCR Pipeline", "Stripe Connect", "Node.js", "PostgreSQL"],
    bullets: [
      "Built OCR receipt scanning pipeline trained on real-world restaurant receipts  -  extracts items, tax, and tip in under 3 seconds",
      "Designed proportional tax and tip splitting algorithm that distributes costs down to the cent based on item assignment",
      "Integrated Stripe Connect for instant payouts with zero-friction pay links  -  payers use Apple Pay, Google Pay, or card without signup",
    ],
    tags: ["Mobile", "Product", "ML/Agents"],
    type: "Full-stack",
    status: "Live",
    domain: "Fintech",
    links: {
      live: "https://www.settld.live/",
    },
    image: SettldLogo,
    screenshots: [Settld1, Settld2, Settld4, Settld3, Settld5],
    screenshotDescriptions: [
      "Dashboard  -  current balance, active bills, and amount owed to you",
      "Bill splitting  -  assign items from a scanned receipt to group members",
      "Item assignment  -  split items between multiple people with live per-person totals",
      "Share sheet  -  send pay links via iMessage, AirDrop, or any messaging app",
      "Payment tracking  -  real-time collection progress with participant status",
    ],
    featured: true,
    impactScore: 91,
    date: "2026-04-01",
    isCurrentlyLive: true,
  },
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
  // --- Archived products commented out ---
  /*
  {
    id: "culinai",
    slug: "culinai",
    name: "CulinAI",
    oneLiner: "The Food Decision Engine  -  stops endless scrolling and decides your next meal in seconds. Order from restaurants or buy groceries to cook. One decision. Fastest path to food.",
    problem: "Decision fatigue is the silent killer of healthy eating:\n\n• People spend 15+ minutes scrolling through Uber Eats, DoorDash, comparing options\n• Meal planning apps give you a plan on Sunday, abandon you on Tuesday at 8pm when you're actually hungry\n• Nutrition data is scattered: recipes on Pinterest, macros in MyFitnessPal, menus on delivery apps\n• No system decides whether you should ORDER or COOK based on your real-time constraints\n\nThe moment of decision  -  when you're hungry, tired, and need to eat NOW  -  is when existing apps fail.",
    solution: "CulinAI is a real-time decision engine that makes one optimized choice instantly:\n\n• Learns your schedule, diet goals, taste preferences, and budget\n• Decides: Order from a specific restaurant OR cook a specific recipe\n• Order path → restaurant name, dish, macros, one-click delivery link\n• Cook path → recipe, auto-generated grocery cart, exact ingredients\n• Improves continuously from your real eating behavior\n\nStop scrolling. Stop planning. Start eating.\n\nBuilt on hierarchical RAG across USDA nutrition data, restaurant menus, recipe databases, personal eating history, and clinical research. Integrates with DoorDash, Uber Eats, Instacart, MyFitnessPal, and Apple Health.",
    impact: "UCSD Health pilot with 200+ patients:\n\n• +22% recommendation accuracy over GPT-4 baseline\n• <3s P95 latency  -  decision feels instant\n• 74% acceptance rate (up from 58% in month 1)\n• Zero PHI breaches over 6 months\n• Serves busy students, gym-goers, professionals, meal preppers, parents\n\nEliminated decision fatigue for the 68% of users who were stressed by meal choices. Integrated with major food platforms (DoorDash, Uber Eats, Instacart, MyFitnessPal, Apple Health) to create seamless handoff from decision → action.",
    whyBuilt: "I track macros daily (~1800 kcal / 150g protein) and realized every meal planning app makes the same mistake: they give you a plan and disappear when you actually need help. The hardest moment isn't Sunday meal prep  -  it's Tuesday at 8pm when you're exhausted, hungry, and staring at 47 open DoorDash tabs. That's decision fatigue. CulinAI solves the real problem: choosing your next meal when you're too tired to think. One decision. Fastest path to food. Built for busy students, gym-goers tracking macros, professionals on the go, people who hate deciding, meal preppers, and time-crunched parents.",
    proof: [
      { label: "Patients", value: "200+" },
      { label: "Accuracy Gain", value: "+22%" },
      { label: "P95 Latency", value: "<3s" },
      { label: "PHI Breaches", value: "0" },
    ],
    system: [
      "Python ETL Pipelines",
      "USDA FoodData API",
      "Spoonacular & Edamam APIs",
      "OpenMenu API",
      "DoorDash/Uber Eats/Grubhub Scrapers",
      "Google Places API",
      "Instacart API",
      "Postgres + Supabase RLS",
      "AWS S3",
      "QDrant Vector DB",
      "LangChain Agents",
      "OpenAI GPT-4",
      "FastAPI",
      "Next.js",
      "Redis Cache",
      "Celery Task Queue",
      "Docker",
      "AWS ECS + App Runner",
      "CloudWatch",
      "MyFitnessPal Import",
      "Apple Health & Google Fit",
    ],
    bullets: [
      "Built real-time decision engine choosing Order OR Cook in <3s P95  -  takes macro targets, time, budget, location, pantry, and taste → outputs one action: specific restaurant + dish OR recipe + grocery cart  -  eliminating decision fatigue for 200+ UCSD pilot patients",
      "Designed 3-layer hierarchical RAG: Nutrition DB (USDA + recipes + menus) → Patient History (eating patterns + preferences) → Research Evidence (clinical guidelines)  -  each query runs constraint filtering (allergies, macros, budget) across all layers before GPT-4 reasoning → +22% accuracy over baseline",
      "Integrated 5+ fragmented food data sources: USDA FoodData (400K+ foods), Spoonacular/Edamam (2M+ recipes), OpenMenu + scrapers (50K+ restaurant menus), patient logs, PubMed papers  -  Python ETL pipelines normalized schemas into Postgres + QDrant with daily refresh cron jobs",
      "Connected major food platforms via APIs: DoorDash/Uber Eats/Grubhub deep links for one-click ordering, Instacart auto-generated grocery carts, MyFitnessPal macro sync, Apple Health/Google Fit activity data  -  seamless handoff from CulinAI decision → real-world action",
      "Deployed HIPAA-compliant production system on AWS ECS + App Runner: Supabase Postgres with Row Level Security, encrypted PHI (AES-256 at rest, TLS 1.3 in transit), audit logging for clinical review  -  zero PHI breaches across 6 months, 99.2% uptime",
      "Implemented weekly feedback retraining loop collecting acceptance rates, macro deviations, ratings, time-to-eat signals  -  updated QDrant preference embeddings and ranking model → acceptance improved from 58% (month 1) to 74% (month 6)",
    ],
    resumeBullets: [
      "Architected real-time nutrition decision engine serving 200+ UCSD Health pilot patients, achieving +22% recommendation accuracy over GPT-4 baseline via 3-layer hierarchical RAG (Nutrition DB → Patient History → Research Evidence)",
      "Designed binary optimization decision model selecting Order vs Cook from macro targets, taste preferences, budget, time, pantry inventory, and nearby restaurants  -  returning full next action in <3s P95",
      "Ingested 5 structured + unstructured nutrition data sources (USDA, OpenMenu, patient logs, clinical papers) into Postgres + QDrant via Python pipelines; built custom retrieval DAG with constraint filtering across all layers",
      "Deployed HIPAA-compliant production infrastructure on AWS ECS + App Runner with Supabase Postgres (RLS), CloudWatch monitoring  -  zero PHI breaches over 6 months",
      "Built weekly feedback retraining loop from real eating signals (macro deviation, ratings, time-to-eat) continuously improving recommendation ranking",
    ],
    tags: ["RAG", "ML/Agents", "Real-time Inference"],
    type: "AI/ML",
    status: "Archived",
    domain: "Healthcare",
    links: {
      live: "https://www.culin.ai",
      demo: "https://www.culin.ai",
    },
    image: Culin,
    screenshots: [Culin1, Culin2],
    screenshotDescriptions: [
      "Real-time decision interface  -  CulinAI analyzes your constraints and instantly outputs Order or Cook with the exact next action: a recipe + grocery cart or a restaurant recommendation with macro estimate.",
      "Nutritional intelligence dashboard  -  tracks macro adherence, eating patterns, and recommendation history, with the RAG engine continuously refining suggestions from real behavior signals.",
    ],
    technicalDeepDive: [
      {
        sectionTitle: "The Vision: Zero Decision Fatigue",
        intro: "Most meal planning apps fail at the moment of decision. They give you a plan on Sunday and disappear when you're actually hungry on Tuesday at 8pm. CulinAI solves the hardest problem: choosing your next meal in real-time based on what's actually happening right now.",
        subsections: [
          {
            title: "The Problem with Traditional Meal Planning",
            bullets: [
              "Static plans ignore reality  -  schedule changes, cravings shift, pantry runs out",
              "Decision fatigue peaks when you're hungry and tired  -  exactly when apps abandon you",
              "Scrolling through DoorDash/Uber Eats wastes 15+ minutes comparing options",
              "Macro tracking requires mental math across scattered nutrition databases",
              "No unified system decides whether you should order OR cook based on your constraints",
            ],
          },
          {
            title: "CulinAI's Core Innovation",
            body: "A real-time decision engine that learns your preferences, understands your constraints, and makes one optimized choice instantly: Order from a specific restaurant OR cook a specific recipe. No scrolling. No planning. Just eating.",
          },
        ],
      },
      {
        sectionTitle: "Data Layer: Unified Nutrition Intelligence",
        intro: "We integrated 5+ fragmented nutrition data sources into a single queryable foundation  -  from USDA databases to restaurant menus to clinical research.",
        subsections: [
          {
            title: "Data Sources & Integration Strategy",
            bullets: [
              "USDA FoodData Central  -  400K+ foods with comprehensive macro/micronutrient profiles",
              "Recipe datasets (Spoonacular, Edamam APIs)  -  2M+ recipes with ingredient lists, prep times, cooking instructions",
              "Restaurant menu data (OpenMenu API + custom scrapers)  -  real-time menu items from DoorDash, Uber Eats, Grubhub with macro estimates",
              "Patient diet logs  -  personalized eating history: meals eaten, times, ratings, macro adherence",
              "Clinical nutrition papers (PubMed embeddings)  -  evidence-based dietary guidelines for chronic conditions",
            ],
          },
          {
            title: "Ingestion Pipeline Architecture",
            bullets: [
              "Python ETL pipelines with per-source adapters  -  normalized schema across all data formats",
              "Schema validation + data cleaning: deduplication, unit conversion (cups → grams), outlier removal",
              "Incremental updates via cron jobs  -  restaurant menus refresh daily, USDA quarterly, recipes weekly",
              "Change detection logic preserves historical data while surfacing new items",
            ],
          },
          {
            title: "Storage Stack",
            bullets: [
              "Postgres (Supabase)  -  structured data with Row Level Security for HIPAA compliance",
              "QDrant vector DB  -  semantic embeddings across all nutrition layers with namespace isolation",
              "AWS S3  -  raw data archives, recipe images, and document snapshots for debugging",
              "Redis  -  hot cache for frequently accessed nutrition profiles and menu items",
            ],
          },
        ],
      },
      {
        sectionTitle: "Multi-Layer RAG Engine: Hierarchical Nutrition Retrieval",
        intro: "Traditional RAG pulls similar documents. CulinAI's 3-layer DAG traverses nutrition knowledge → personal history → research evidence in sequence, with constraint filtering at each stage. This hierarchical approach achieved +22% accuracy over baseline GPT-4.",
        subsections: [
          {
            title: "Layer 1  -  Nutrition Database Search",
            bullets: [
              "Semantic query against USDA + recipe + restaurant menu embeddings in QDrant",
              "Hard constraints filter: allergies (e.g., exclude shellfish), macro limits (e.g., <30g carbs), budget ceiling",
              "Soft ranking: taste preference embeddings upweight preferred cuisines/ingredients",
              "Returns: 50 macro-matched candidates (recipes or restaurant dishes) sorted by semantic relevance",
            ],
          },
          {
            title: "Layer 2  -  Personal History Filter",
            bullets: [
              "Re-rank Layer 1 candidates using patient-specific signals: past meal ratings, recent eating patterns, macro adherence trends",
              "Variety enforcement: penalize foods eaten in last 3 days to prevent repetition fatigue",
              "Time-of-day alignment: breakfast foods prioritized in AM, heavier meals in PM",
              "Returns: Top 15 personalized candidates that fit both nutritional needs and behavioral patterns",
            ],
          },
          {
            title: "Layer 3  -  Research Evidence Augmentation",
            bullets: [
              "For patients with dietary goals (e.g., diabetes management, weight loss), retrieve relevant clinical guidelines from PubMed embeddings",
              "Evidence snippets injected into LLM context to justify recommendations (e.g., 'High-fiber legumes improve glycemic control per Smith et al. 2023')",
              "Used for patient education, not filtering  -  all Layer 2 candidates pass through",
            ],
          },
          {
            title: "LLM Synthesis & Final Ranking",
            bullets: [
              "GPT-4 receives: user query, top 15 candidates with full nutritional profiles, patient context, research evidence",
              "Task: rank candidates 1-5 with reasoning, select absolute best match",
              "Custom prompt engineering: emphasizes constraint satisfaction > novelty, clear rationale for top choice",
              "Output: Single recommended meal with macro breakdown and preparation/ordering instructions",
            ],
          },
          {
            title: "Why This Architecture Works",
            body: "Separating retrieval into layers prevents information overload in the LLM context window. Early filtering (Layer 1) handles hard constraints cheaply, Layer 2 applies personalization at scale, and only the top candidates reach expensive GPT-4 reasoning. This design achieves <3s P95 latency even with 2M+ recipe corpus.",
          },
        ],
      },
      {
        sectionTitle: "Decision Engine: Order vs Cook Binary Optimization",
        intro: "The core innovation that sets CulinAI apart. Instead of showing you options, we choose the single best action: Order from restaurant X OR cook recipe Y. The system optimizes across 6 real-time constraints to pick the fastest path to eating.",
        subsections: [
          {
            title: "Input Signals",
            bullets: [
              "Macro targets  -  remaining calories, protein, carbs, fat for the day",
              "Time constraint  -  'need food in 20 minutes' vs 'have an hour to cook'",
              "Budget  -  meal budget ceiling from weekly spending plan",
              "Location  -  nearby restaurants within delivery radius (Google Places API)",
              "Pantry inventory  -  what's available to cook with (user-maintained or smart-scanned via receipt OCR)",
              "Taste preferences  -  cuisine embeddings learned from meal rating history",
            ],
          },
          {
            title: "Decision Logic: Order OR Cook",
            bullets: [
              "Step 1: Retrieve top recipes and restaurant dishes from RAG engine (separate queries for each pathway)",
              "Step 2: Score each pathway on: time-to-eat (delivery ETA vs cook time), cost (restaurant price vs grocery cost), macro fit (exact target vs estimate), taste likelihood (preference score)",
              "Step 3: Binary decision via weighted optimization: if time is critical → bias toward fastest option, if budget tight → bias toward cooking, if pantry sparse → bias toward ordering",
              "Step 4: Surface winner with full action plan",
            ],
          },
          {
            title: "Output Formats",
            bullets: [
              "Order Pathway → specific restaurant name, dish recommendation, macro estimate, delivery ETA, total cost, one-click order link (DoorDash deep link)",
              "Cook Pathway → recipe with ingredients, auto-generated grocery cart (Instacart API integration), prep time, cooking instructions, exact macro calculation per serving",
              "Reasoning summary  -  'Recommended cooking because you have 45 minutes and [chicken, rice, broccoli] in pantry. Ordering would cost $18 vs $6 to cook.'",
            ],
          },
          {
            title: "Performance",
            bullets: [
              "<3s P95 latency end-to-end (includes dual RAG queries, restaurant search, decision scoring, response formatting)",
              "Auto-scaling FastAPI workers handle meal-time traffic spikes (12pm and 6pm peaks)",
              "Cache hit rate: 65% for restaurant menus (Redis TTL 24h), 42% for recipe recommendations (user-specific cache)",
            ],
          },
        ],
      },
      {
        sectionTitle: "Key Integrations: Connecting Food Ecosystems",
        intro: "CulinAI isn't a closed system  -  it integrates directly with the apps and services people already use to order food and track nutrition. Seamless handoffs from decision → action.",
        subsections: [
          {
            title: "Restaurant & Delivery Integrations",
            bullets: [
              "OpenMenu API  -  structured menu data for 50K+ US restaurants",
              "DoorDash, Uber Eats, Grubhub (custom scrapers + unofficial APIs)  -  real-time menu availability, pricing, delivery times",
              "Deep links  -  one-click handoff from CulinAI recommendation to pre-filled cart in delivery app",
              "Google Places API  -  location-based restaurant discovery within user's delivery radius",
            ],
          },
          {
            title: "Grocery & Recipe Integrations",
            bullets: [
              "Instacart API  -  auto-generated grocery cart with exact ingredients from recommended recipe",
              "Spoonacular & Edamam  -  recipe databases with normalized ingredient lists and instructions",
              "USDA FoodData Central  -  ground-truth macro calculations for every ingredient",
              "Receipt OCR (experimental)  -  scan grocery receipts to auto-update pantry inventory",
            ],
          },
          {
            title: "Nutrition Tracking Integrations",
            bullets: [
              "MyFitnessPal import  -  sync existing macro targets and meal history",
              "Apple Health & Google Fit  -  pull activity data to adjust calorie targets dynamically",
              "Two-way sync: CulinAI logs meals back to tracking apps automatically after confirmation",
            ],
          },
          {
            title: "Clinical Integrations (UCSD Pilot)",
            bullets: [
              "EHR API (Epic FHIR)  -  read patient dietary restrictions, allergies, chronic conditions",
              "Nutritionist dashboard  -  clinicians can review patient meal decisions and override recommendations",
              "HIPAA-compliant audit logs  -  every recommendation stored with reasoning for clinical review",
            ],
          },
        ],
      },
      {
        sectionTitle: "Feedback Learning Loop: Continuous Improvement",
        intro: "CulinAI gets smarter with every meal. Weekly retraining cycles use real eating behavior to refine recommendations, compounding accuracy gains over time.",
        subsections: [
          {
            title: "Signal Collection",
            bullets: [
              "Acceptance rate  -  did user follow the recommendation (binary yes/no)",
              "Macro deviation  -  actual macros logged vs recommended (from tracking app sync)",
              "Explicit feedback  -  1-5 star rating + optional text comment",
              "Time-to-eat  -  minutes from recommendation to meal log (proxy for decision confidence)",
              "Substitutions  -  if user modified recipe or ordered different dish, what changed",
            ],
          },
          {
            title: "Weekly Retraining Pipeline",
            bullets: [
              "Aggregate signals per user and across cohort (200+ patients)",
              "Accepted meals → increase embedding similarity weight for those ingredients/cuisines",
              "Rejected meals → decrease ranking score for similar patterns",
              "High macro deviation → flag data source inaccuracies (e.g., restaurant menu estimate was off)",
              "Update QDrant preference embeddings and retrain ranking layer (LightGBM model)",
            ],
          },
          {
            title: "Result",
            body: "Recommendation accuracy improved 22% vs baseline GPT-4 after 6 months of pilot operation. Acceptance rate increased from 58% in month 1 to 74% in month 6. System learns both individual preferences and cohort patterns (e.g., Tuesday night cravings, post-workout meal timing).",
          },
        ],
      },
      {
        sectionTitle: "Production Infrastructure: Healthcare-Grade Deployment",
        intro: "HIPAA-compliant backend built for clinical deployment  -  zero PHI breaches over 6 months, <3s latency, auto-scaling for meal-time traffic.",
        subsections: [
          {
            title: "Service Architecture",
            bullets: [
              "FastAPI backend  -  async request handling with Uvicorn workers, auto-scaling based on CPU/memory",
              "Next.js frontend  -  patient-facing decision interface with real-time updates (WebSocket for order status)",
              "Celery task queue  -  background jobs for data ingestion, embedding generation, weekly retraining",
              "Redis  -  session state, hot cache for menus/recipes, pub-sub for real-time notifications",
            ],
          },
          {
            title: "Data Security & Compliance",
            bullets: [
              "Supabase Postgres with Row Level Security (RLS)  -  patient data isolated at database level, queries auto-filtered by user context",
              "End-to-end encryption  -  PHI encrypted at rest (AES-256) and in transit (TLS 1.3)",
              "Audit logging  -  every recommendation, data access, and admin action logged for HIPAA compliance review",
              "BAA signed with all third-party services (Supabase, AWS, OpenAI under HIPAA-compliant tier)",
            ],
          },
          {
            title: "Deployment & Monitoring",
            bullets: [
              "Docker containers deployed on AWS ECS + App Runner  -  auto-scaling, zero-downtime deployments",
              "CloudWatch dashboards  -  latency (P50/P95/P99), error rates, inference throughput, cache hit rates",
              "Sentry error tracking  -  real-time alerting for API failures, model inference errors",
              "Weekly performance reviews  -  latency trends, accuracy metrics, user feedback analysis",
            ],
          },
          {
            title: "Performance Metrics",
            bullets: [
              "<3s P95 latency across all recommendation requests (target: sub-5s)",
              "99.2% uptime over 6 months (target: 99%+)",
              "Zero PHI breaches or security incidents",
              "Peak load: 120 concurrent users during lunch rush (12-1pm), handled without degradation",
            ],
          },
        ],
      },
      {
        sectionTitle: "What We Learned: Real-World Insights",
        intro: "Building CulinAI taught us that the best meal recommendation isn't always the healthiest or cheapest  -  it's the one people actually eat. Here's what worked and what didn't.",
        subsections: [
          {
            title: "Key Insights from the UCSD Pilot",
            bullets: [
              "Decision fatigue is real  -  users with 2+ meal options had 31% lower adherence than single-recommendation group",
              "Time constraints dominate  -  68% of decisions prioritized speed over cost or nutrition when time-stressed",
              "Pantry sync is critical  -  users who maintained pantry inventory had 40% higher cooking recommendation acceptance",
              "Context matters more than preferences  -  same user wants different things at 8am (fast breakfast) vs 7pm (relaxed dinner)",
              "Feedback loops require friction  -  5-star rating worked better than binary thumbs up/down (richer signal)",
            ],
          },
          {
            title: "Technical Challenges Solved",
            bullets: [
              "Cold start problem  -  new users have no history, solved with cohort-based collaborative filtering + onboarding survey",
              "Menu data staleness  -  restaurants change menus without notice, implemented daily refresh + crowdsourced corrections",
              "Macro estimate accuracy  -  restaurant estimates unreliable, built confidence scores and flagged low-confidence recs",
              "Latency vs accuracy tradeoff  -  3s felt instant to users, 5s felt slow; optimized to stay under 3s P95",
            ],
          },
          {
            title: "What's Next",
            bullets: [
              "Voice interface  -  'Hey Culin, what should I eat?' → instant audio response",
              "Social eating  -  group decision mode for families/roommates with divergent preferences",
              "Meal prep optimizer  -  weekly grocery shopping list optimized across 7 days of meal decisions",
              "Expanded integrations  -  Chipotle, Sweetgreen, meal kit services (HelloFresh, Blue Apron)",
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
    oneLiner: "Agentic e-commerce OS for 4+ enterprise brands - 2K+ daily queries, 30% latency drop, $1.0M raised.",
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
      "Deployed on AWS EKS with Redis caching + auto-scaling - 99.9% uptime across 4+ enterprise customers",
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
    oneLiner: "AI fashion discovery engine - 2K+ users, +40% CTR, 22% relevance gain vs $50M+ competitor via CLIP fine-tuning + hybrid retrieval.",
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
      "Deployed on Vercel Edge with Redis caching - handling 2K+ users with <100ms p50 latency across 1M+ product catalog",
    ],
    resumeBullets: [
      "Built semantic fashion discovery engine serving 2K+ users with 40% CTR improvement and 28% conversion increase, outcompeting $50M+ funded competitor (Daydream) with $500/month infrastructure",
      "Fine-tuned CLIP embeddings on fashion-specific data with attribute-aware layers (materials, seasonality, fit, occasion) achieving 22% relevance improvement over baseline collaborative filtering",
      "Architected hybrid retrieval pipeline combining PostgreSQL structured filters + Pinecone semantic search (HNSW) + LLM reranking, reducing latency 15% with sub-second real-time recommendations",
      "Designed context-aware reasoning layer using FastAPI agents to match semantic intent across dimensions (weather, occasion, budget, inventory), enabling queries like 'winter formal but casual streetwear vibe'",
      "Deployed production-grade system in 3 months with cached embeddings, query batching, and optimized vector dimensions - achieving comparable quality to heavily funded competitor at 1/100th the cost",
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
    status: "Archived",
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
              "Precomputing kept search fast and latency predictable  -  no embedding generation at query time",
            ],
          },
        ],
      },
      {
        sectionTitle: "Search Agent",
        intro: "Goal: 'show me items like this' and 'find me a [style] outfit'  -  fast, relevant, and filterable.",
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
              "Cursor-based pagination preferred over offset  -  prevents duplicates when inventory changes mid-scroll",
              "API returns items + nextCursor; frontend requests next page on scroll or 'Load more'",
              "Cached results per query so back/forward navigation is instant",
              "Debounced query input to avoid firing on every keystroke",
              "Optimistic UI for likes/saves with rollback on failure",
              "Search filters wired directly to backend metadata filters  -  no expensive client-side re-processing",
            ],
          },
          {
            title: "Why This Mattered",
            body: "The catalog is large and constantly changing  -  stock and pricing update daily. Stable pagination + caching + consistent ranking prevented duplicated items across pages, missing items when new inventory arrived mid-scroll, and jarring reshuffles when toggling filters.",
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
    oneLiner: "AI-powered lead gen agency - $2K MRR, 62K+ prospects processed, 8.2% response rate (4x industry avg).",
    proof: [
      { label: "MRR", value: "$2K" },
      { label: "Prospects", value: "62K+" },
      { label: "Response Rate", value: "8.2%" },
    ],
    system: ["React", "LangChain", "OpenAI", "MongoDB", "Docker", "AWS Lambda"],
    bullets: [
      "Designed LangChain agent pipeline: web scraping → GPT-4 lead scoring → personalized outreach - 8.2% response (4x industry avg)",
      "Deployed on AWS Lambda + MongoDB Atlas - processing 62K+ prospects, serverless scaling for variable workload",
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
    oneLiner: "Fashion social network - 300+ users, 40% DAU, 62% D7 retention, 10.4K+ posts.",
    proof: [
      { label: "Users", value: "300+" },
      { label: "DAU", value: "40%" },
      { label: "D7 Retention", value: "62%" },
    ],
    system: ["React Native", "Node.js", "MongoDB", "AWS S3", "Redis", "Kubernetes", "Digital Ocean"],
    bullets: [
      "Designed React Native social app with personalized feed algorithm + real-time WebSocket updates - 40% DAU, 62% D7 retention",
      "Deployed on DO Kubernetes with Redis caching (90% hit rate) - serving 10.4K+ posts with <200ms feed load time",
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
    oneLiner: "Live NIL marketplace connecting college athletes with brands  -  automated matching, contracts, and payments under NCAA + state NIL laws.",
    problem: "500K+ college athletes gained NIL rights but had no infrastructure to monetize them:\n\n• Deals happened through DMs over 2–4 weeks\n• Contracts required lawyers ($500–$2K each)\n• Agencies took 25–40% cuts\n• 95% of athletes were ignored\n\nThere was no scalable platform for small and mid-tier athletes.",
    solution: "Built OpenField, a live two-sided marketplace that:\n\n• Matches athletes to brands using collaborative filtering across sport, follower count, location, and brand category\n• Generates NCAA-compliant contracts automatically via DocuSign across 19 state NIL laws\n• Handles escrow payments with Stripe Connect (85/15 split) and milestone payouts\n• Tracks deals, deliverables, and compliance in one platform\n\nAthletes get offers in days instead of weeks.",
    impact: "30+ athletes across 5 universities\n12 brands onboarded\n$3.5K+ GMV processed\nDeal time reduced 2 weeks → 42 hours (93% reduction)\n78% of athletes receive offers in their first week",
    whyBuilt: "My D1 wrestler roommate couldn't afford textbooks despite training 40+ hours a week. I built OpenField so NIL isn't only for star athletes  -  any college athlete with an audience deserves a shot at monetization.",
    proof: [
      { label: "Athletes", value: "30+" },
      { label: "Brands", value: "12" },
      { label: "GMV", value: "$3.5K+" },
      { label: "Deal Time", value: "42h" },
      { label: "Offer Rate", value: "78%" },
    ],
    system: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe Connect", "DocuSign API", "Docker", "AWS ECS", "S3"],
    bullets: [
      "Designed normalized relational schema for a live marketplace  -  Athletes ↔ Deals ↔ Contracts ↔ Deliverables ↔ Payments with referential integrity  -  enabled automated contract generation, escrow payment states, and race-condition-free marketplace queries",
      "Built collaborative filtering matching engine across sport, follower count, location, brand category, and NIL state law compliance → 67% match-to-deal conversion rate",
      "Implemented NCAA + state NIL compliance engine across 19 state laws via DocuSign API  -  automatically selects correct contract template per athlete university and state",
      "Stripe Connect escrow pipeline with 85/15 split and milestone payouts  -  zero payment disputes across all processed deals",
      "Redis caching layer (88% hit rate) on marketplace search queries  -  fast athlete discovery across concurrent brand sessions",
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
    status: "Archived",
    domain: "Marketplace",
    links: {
      live: "https://www.openfield.live/",
      demo: "https://www.openfield.live/demo",
    },
    image: OpenField,
    technicalDeepDive: [
      {
        sectionTitle: "Marketplace Data Model",
        intro: "The hardest part of OpenField wasn't the UI  -  it was designing a relational schema that could support a live marketplace with compliance, escrow, and contract state all enforced at the data layer.",
        subsections: [
          {
            title: "The Problem with Marketplace Schemas",
            body: "Marketplace logic required handling many-to-many athlete ↔ brand relationships, multiple deals per athlete, deliverables per contract, state-specific NIL rules, escrow payment flows, and contract revisions + signatures. A bad schema would break compliance or payments.",
          },
          {
            title: "Core Tables",
            bullets: [
              "Athletes  -  profile, university, sport, follower counts, state",
              "Brands  -  category, campaign budget, targeting criteria",
              "Campaigns  -  brand-owned, with eligibility filters and deliverable specs",
              "Deals  -  join between Athlete ↔ Campaign, with status state machine",
              "Contracts  -  1-to-1 with Deal, stores DocuSign envelope ID and template used",
              "Deliverables  -  1-to-many with Deal, tracks submission + approval",
              "Payments  -  1-to-many with Deal, mirrors Stripe Connect payment intents",
              "ComplianceRules  -  1-to-many with University, enforces school-specific NIL policies",
              "StateLaws  -  1-to-many with ContractTemplates, maps state → correct DocuSign template",
            ],
          },
          {
            title: "Key Relationships",
            bullets: [
              "Athlete ↔ Deals (1-to-many)  -  one athlete can run multiple active deals",
              "Brand ↔ Campaigns (1-to-many)  -  one brand runs multiple campaigns simultaneously",
              "Campaign ↔ Deals (1-to-many)  -  one campaign can match many athletes",
              "Deal ↔ Contract (1-to-1)  -  every deal has exactly one binding contract",
              "Deal ↔ Deliverables (1-to-many)  -  contract can require multiple deliverables",
              "Deal ↔ Payments (1-to-many)  -  milestone-based escrow releases",
              "University ↔ ComplianceRules (1-to-many)  -  school-specific eligibility constraints",
              "StateLaw ↔ ContractTemplates (1-to-many)  -  19 state NIL laws mapped to DocuSign templates",
            ],
          },
          {
            title: "Why This Mattered",
            bullets: [
              "Enabled automated contract generation  -  state + university determines template, no manual selection",
              "Supported escrow payment states  -  payments locked to deal status transitions",
              "Prevented illegal NIL deals  -  compliance rules enforced as foreign key constraints, not app logic",
              "Allowed live marketplace queries without race conditions  -  deal state machine uses row-level locking",
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
              "Sport  -  brand category alignment (e.g. apparel brands prioritize team sport athletes)",
              "Follower count  -  brand campaign tier requirements (micro, mid, macro)",
              "Location  -  geo-targeted campaigns, state law compliance gate",
              "Brand category  -  athlete audience demographic fit",
              "NIL state law compliance  -  hard filter, ineligible athletes excluded before ranking",
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
        intro: "DocuSign API generates legally binding, state-specific NIL contracts automatically  -  no lawyer required.",
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
              "Checked at match time  -  non-compliant athletes never surface to brands",
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
              "Brand funds deal upfront  -  Stripe payment intent created, held in escrow",
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
              "Next.js frontend  -  athlete profiles, campaign browsing, contract status, payment tracking",
              "Node.js API  -  marketplace logic, deal state machine, DocuSign + Stripe integrations",
              "PostgreSQL  -  normalized relational schema with referential integrity",
              "Redis  -  marketplace search query caching (88% hit rate)",
              "Docker + AWS ECS  -  containerized services with auto-scaling",
              "S3  -  signed contract PDF storage and deliverable asset uploads",
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
  {
    id: "anvara",
    slug: "anvara-marketplace-platform",
    name: "Sponsorship Marketplace Platform",
    oneLiner: "Marketplace connecting brands with publishers for advertising placements - campaign management and secure booking flow.",
    problem: "Brands struggle to discover and book advertising placements from publishers efficiently. Manual processes lead to missed opportunities, complex negotiations, and poor campaign tracking.",
    solution: "Built a comprehensive marketplace platform with automated booking flow, campaign management dashboard, and real-time analytics. Streamlined sponsor-publisher relationships with secure API endpoints and TypeScript stability.",
    impact: "Delivered production-ready marketplace with end-to-end booking flow, campaign management, and analytics instrumentation. Solved TypeScript stability issues and implemented server-side data fetching for optimal performance.",
    whyBuilt: "Wanted to solve the inefficiencies in digital advertising marketplace by creating a seamless platform that connects sponsors with publishers while providing comprehensive campaign management tools.",
    proof: [
      { label: "Features", value: "9-Feature" },
      { label: "Features", value: "6-Core" },
      { label: "Architecture", value: "4-Layer" },
    ],
    system: ["Next.js", "React", "TailwindCSS", "Express.js", "Prisma", "PostgreSQL", "TypeScript", "Docker", "PNPM"],
    bullets: [
      "Designed full-stack marketplace with Next.js + React frontend and Express.js API backend - complete booking flow with campaign management",
      "Built secure API endpoints with Prisma ORM and PostgreSQL database - CRUD operations for campaigns and advertising placements",
      "Implemented TypeScript stability fixes and server-side data fetching - optimized performance with analytics instrumentation",
    ],
    resumeBullets: [
      "Built full-stack sponsorship marketplace connecting brands with publishers - Next.js frontend, Express.js API, PostgreSQL database with Prisma ORM",
      "Implemented end-to-end booking flow with campaign management dashboard - secure API endpoints, CRUD operations, and analytics instrumentation",
      "Fixed TypeScript stability issues across monorepo and optimized performance with server-side data fetching - deployed with Docker containerization",
    ],
    tags: ["Marketplace", "Product", "Infra"],
    type: "Full-stack",
    status: "Archived",
    domain: "Marketplace",
    links: {
      github: "https://github.com/arjunpkulkarni/anvaraTakeHome",
    },
    image: AnvaraMarketplace,
    images: [AnvaraMarketplace, AnvaraCampaigns, AnvaraCreateCampaign, AnvaraListings, AnvaraAdSlot],
    screenshots: [AnvaraListings, AnvaraCampaigns, AnvaraCreateCampaign, AnvaraAdSlot],
    screenshotDescriptions: [
      "Marketplace listings page with advertising placements and detailed metrics",
      "Campaign management dashboard with performance tracking and analytics",
      "Campaign creation flow with form validation and real-time feedback",
      "Ad slot details view with audience insights and booking options",
    ],
    featured: false,
    impactScore: 75,
    date: "2024-11-15",
    isCurrentlyLive: false,
  },
  */
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
export const PRODUCT_DOMAINS: ProductDomain[] = ["Healthcare", "E-comm", "Fashion", "Growth", "Marketplace", "Fitness", "Fintech"];
