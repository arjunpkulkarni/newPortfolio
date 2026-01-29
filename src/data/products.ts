import { StaticImageData } from "next/image";

// Import product images
import Culin from "../app/projects/pictures/culin.png";
import FitCheck from "../app/projects/pictures/fitcheck.png";
import Siramai from "../app/projects/pictures/siramai.png";
import psych from "../app/projects/pictures/psych.png";
import OpenField from "../app/projects/pictures/openfield.png";
import Hanger from "../app/projects/pictures/hanger.png";
import LumeLabs from "../app/projects/pictures/lumelabs.png";

export type ProductCategory = "AI/Health" | "Consumer" | "B2B/Agency" | "Platform" | "Mobile";

export interface ProductMetric {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  status: "Production";
  primaryMetric: ProductMetric;
  secondaryMetrics?: ProductMetric[];
  categories: ProductCategory[];
  stack: string[];
  image?: StaticImageData | string;
  ctas: {
    primary?: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
  featured: boolean;
  highlights?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "congruence",
    name: "Congruence",
    tagline: "Clinical Emotional Intelligence for Mental Health",
    description: "Multimodal emotional analysis platform using CNNs to detect microexpressions and voice stress patterns for clinical psychiatric diagnosis.",
    role: "Founding Engineer",
    status: "Production",
    primaryMetric: {
      label: "Clinics Deployed",
      value: "4+",
    },
    secondaryMetrics: [
      { label: "Accuracy", value: "76%" },
      { label: "Documentation Reduction", value: "92%" },
    ],
    categories: ["AI/Health", "Platform"],
    stack: ["TensorFlow", "CNN", "React Native", "Python", "HIPAA"],
    image: psych,
    ctas: {
      primary: { label: "Live Site", href: "https://congruenceinsights.com" },
    },
    featured: true,
    highlights: [
      "Built CNN-based multimodal emotional AI detecting microexpressions and voice stress for clinical psychiatric diagnosis",
      "Achieved 76% accuracy on 7-emotion classification with real-time analysis deployed to 48+ psychiatric clinics",
      "Reduced clinical documentation time by 92% while improving diagnostic accuracy by 18% for mental health professionals",
      "Implemented HIPAA-compliant infrastructure with TensorFlow Lite for on-device processing ensuring patient data privacy",
      "Created React Native mobile app with real-time emotion tracking and integrated with electronic health record systems"
    ],
  },
  {
    id: "culinai",
    name: "CulinAI",
    tagline: "Precision Nutrition AI Turning Medical Guidance into Meal Plans",
    description: "Clinical-grade AI dietician platform with RAG pipeline and subgraph DAG, transforming medical recommendations into personalized nutrition plans.",
    role: "Software Lead",
    status: "Production",
    primaryMetric: {
      label: "Patients On-System",
      value: "200+",
    },
    secondaryMetrics: [
      { label: "Recommendation Accuracy", value: "+22%" },
      { label: "Partnership", value: "UCSD Health" },
    ],
    categories: ["AI/Health", "Platform"],
    stack: ["LangChain", "RAG", "QDrant", "Next.js", "GPT-4"],
    image: Culin,
    ctas: {
      primary: { label: "Request Access", href: "mailto:arjunpk2@illinois.edu?subject=CulinAI Access Request" },
    },
    featured: true,
    highlights: [
      "Built subgraph DAG + RAG pipeline using LangChain and QDrant vector database for dietary recommendations, improving accuracy by 22%",
      "Deployed production Next.js platform with GPT-4o integration serving 200+ patients, handling clinical compliance and HIPAA requirements",
      "Collaborated with Food Network Chef James Briscione and White House Fellow Lav Varshney on clinical AI nutrition engine",
      "Partnered with UCSD Health for clinical trials, integrating with existing electronic medical record systems",
      "Implemented real-time meal planning with nutritional analysis, allergen detection, and medical condition compatibility checks"
    ],
  },
  {
    id: "siramai",
    name: "Siramai",
    tagline: "ContextOS & Agentic Search Platform for E-Commerce",
    description: "No-code framework with vector search and adaptive ranking processing 2K+ daily queries. Built agent workflows and multimodal search.",
    role: "Founding Engineer",
    status: "Production",
    primaryMetric: {
      label: "Enterprise Customers",
      value: "4+",
    },
    secondaryMetrics: [
      { label: "Daily Queries", value: "2K+" },
      { label: "Latency Reduction", value: "30%" },
      { label: "Funding Raised", value: "$1.0M" },
    ],
    categories: ["B2B/Agency", "Platform", "AI/Health"],
    stack: ["Vector Search", "PostgreSQL", "Redis", "Gemini", "RAG"],
    image: Siramai,
    ctas: {
      primary: { label: "Live Platform", href: "https://www.siramai.com/" },
    },
    featured: true,
    highlights: [
      "As first founding engineer, built agentic e-commerce OS and no-code framework used by 4+ enterprise clients, helping raise $1.0M seed round",
      "Designed agent workflows atop ContextOS processing 2K+ daily queries with vector search and adaptive ranking algorithms",
      "Optimized Postgres + Redis ingestion + analytics stack, increasing throughput 4× and cutting p95 latency by 30%",
      "Shipped Gemini multimodal search enabling conversational and visual product discovery for enterprise clients",
      "Built semantic product search using Pinecone vector DB + OpenAI embeddings, improving product discovery CTR by 40%"
    ],
  },
  {
    id: "hanger",
    name: "Hanger",
    tagline: "AI Fashion Assistant & Agentic Shopping Layer",
    description: "Consumer-facing AI shopping platform with semantic product discovery and intelligent recommendations powered by multimodal search.",
    role: "Founding Engineer",
    status: "Production",
    primaryMetric: {
      label: "Beta Users",
      value: "2K+",
    },
    secondaryMetrics: [
      { label: "CTR Improvement", value: "+40%" },
    ],
    categories: ["Consumer", "Platform", "AI/Health"],
    stack: ["Pinecone", "OpenAI", "Next.js", "Redis", "Vector Search"],
    image: Hanger,
    ctas: {
      primary: { label: "Live Site", href: "https://www.siramai.com/" },
    },
    featured: true,
    highlights: [
      "Built consumer-facing AI shopping platform with semantic product discovery enabling natural language queries like 'sustainable winter jacket under $100'",
      "Implemented semantic product search using Pinecone vector DB + OpenAI embeddings to replace keyword-based search",
      "Improved product discovery CTR by 40% with intelligent recommendations powered by multimodal search algorithms",
      "Scaled to 2K+ beta users with Redis caching (90% hit rate) and personalized feed algorithm",
      "Integrated multiple e-commerce APIs and built unified product catalog with real-time inventory sync"
    ],
  },
  {
    id: "district-four",
    name: "District Four",
    tagline: "Digital Marketing + Web + Content Engine",
    description: "AI-powered lead generation and marketing agency using LangChain agents for automated prospecting, lead scoring, and personalized outreach at scale.",
    role: "Founder",
    status: "Production",
    primaryMetric: {
      label: "MRR",
      value: "$2K",
    },
    secondaryMetrics: [
      { label: "Prospects Processed", value: "62K+" },
      { label: "Response Rate", value: "8.2%" },
      { label: "Clients", value: "15+" },
    ],
    categories: ["B2B/Agency"],
    stack: ["LangChain", "OpenAI", "React", "MongoDB", "Python"],
    image: LumeLabs,
    ctas: {
      primary: { label: "Live Platform", href: "https://www.district-four.com/" },
    },
    featured: false,
    highlights: [
      "Built AI-powered lead generation system using LangChain agents that scrapes business directories and enriches data with ML lead scoring",
      "Processed 62,000+ prospects achieving 8.2% response rate (4x industry average) with GPT-4 personalized email generation",
      "Delivered 300% growth for FitCheck, $2k+ revenue for Workwear, and 2x ROI for Gloss Authority across 15+ clients",
      "Automated web scraping with BeautifulSoup and Selenium, building MongoDB pipeline for prospect data enrichment",
      "Scaled to $2K MRR with React dashboard for campaign analytics, A/B testing, and conversion tracking"
    ],
  },
  {
    id: "fitcheck",
    name: "FitCheck",
    tagline: "Centralized Fashion Social Platform",
    description: "React Native social network for outfit sharing with personalized feed algorithm, real-time updates, and optimized image compression.",
    role: "Founder",
    status: "Production",
    primaryMetric: {
      label: "Beta Users",
      value: "300+",
    },
    secondaryMetrics: [
      { label: "DAU", value: "40%" },
      { label: "Day-7 Retention", value: "62%" },
      { label: "Posts", value: "10.4K+" },
    ],
    categories: ["Consumer", "Mobile"],
    stack: ["React Native", "Node.js", "MongoDB", "AWS S3", "Redis"],
    image: FitCheck,
    ctas: {
      primary: { label: "Live Platform", href: "https://www.fitcheck.live/" },
      secondary: { label: "TestFlight", href: "https://www.fitcheck.live/" },
    },
    featured: false,
    highlights: [
      "Built FitCheck, a React Native social network for outfit sharing that scaled to 320+ beta users with 40% DAU",
      "Optimized image compression reducing upload time 67% (15s→5s) with AWS S3 integration and lazy loading",
      "Implemented personalized feed algorithm with Redis caching (90% hit rate) serving 10,400+ posts with infinite scroll",
      "Achieved 62% Day-7 retention with real-time updates using WebSockets and push notifications via Firebase",
      "Built Node.js + Express backend with MongoDB for user profiles, social graph, and engagement analytics"
    ],
  },
  {
    id: "openfield",
    name: "OpenField",
    tagline: "NIL Platform Connecting Athletes and Businesses",
    description: "Two-sided marketplace for college athlete NIL deals with Stripe Connect payment processing, DocuSign contracts, and NCAA compliance monitoring.",
    role: "Founding Engineer",
    status: "Production",
    primaryMetric: {
      label: "Athletes Earning",
      value: "15+",
    },
    secondaryMetrics: [
      { label: "Total Athletes", value: "520+" },
      { label: "Transactions", value: "$52K+" },
      { label: "Deal Time", value: "<48h" },
    ],
    categories: ["Platform", "B2B/Agency"],
    stack: ["React", "Node.js", "PostgreSQL", "Stripe", "DocuSign"],
    image: OpenField,
    ctas: {
      primary: { label: "Live Platform", href: "https://www.openfield.live/" },
    },
    featured: false,
    highlights: [
      "Built OpenField, a two-sided marketplace connecting 520+ college athletes with local businesses for NIL deals",
      "Integrated Stripe Connect for split payments with 15% platform fee, processing $52k+ in transactions",
      "Automated contract generation via DocuSign API with NCAA compliance monitoring and deal approval workflows",
      "Reduced deal completion time to <48 hours with React frontend and Node.js backend using PostgreSQL",
      "Implemented athlete profile system with social media integration, engagement metrics, and deal history tracking"
    ],
  },
];

export const CATEGORIES: ProductCategory[] = [
  "AI/Health",
  "Consumer",
  "B2B/Agency",
  "Platform",
  "Mobile",
];
