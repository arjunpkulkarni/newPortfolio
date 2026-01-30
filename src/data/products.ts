import { StaticImageData } from "next/image";

// Import product images
import Culin from "../app/projects/pictures/culin.png";
import FitCheck from "../app/projects/pictures/fitcheck.png";
import Siramai from "../app/projects/pictures/siramai.png";
import psych from "../app/projects/pictures/psych.png";
import OpenField from "../app/projects/pictures/openfield.png";
import Hanger from "../app/projects/pictures/hanger.png";
import LumeLabs from "../app/projects/pictures/lumelabs.png";
import Congruence from "../app/projects/pictures/congruence.png";

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
  date?: string;
  client?: string;
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
    stack: ["TensorFlow", "CNN", "React Native", "Python", "HIPAA", "Docker", "Kubernetes", "Digital Ocean"],
    image: Congruence,
    ctas: {
      primary: { label: "Live Platform", href: "https://congruenceinsights.com" },
    },
    featured: true,
    highlights: [
      "Built CNN-based multimodal emotional AI detecting microexpressions and voice stress for clinical psychiatric diagnosis",
      "Achieved 76% accuracy on 7-emotion classification with real-time analysis deployed to 48+ psychiatric clinics",
      "Deployed on Digital Ocean with Docker containerization and Kubernetes orchestration, achieving 99.8% uptime for clinical reliability"
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
    stack: ["LangChain", "RAG", "QDrant", "Next.js", "GPT-4", "Docker", "AWS ECS", "CloudWatch"],
    image: Culin,
    ctas: {
      primary: { label: "Live Platform", href: "https://www.culin.ai" },
    },
    featured: true,
    highlights: [
      "Built subgraph DAG + RAG pipeline using LangChain and QDrant vector database for dietary recommendations, improving accuracy by 22%",
      "Deployed production Next.js platform with GPT-4o integration serving 200+ patients, handling HIPAA compliance requirements",
      "Hosted on AWS with Docker containers, leveraging ECS for auto-scaling and CloudWatch for monitoring 200+ patient interactions daily"
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
    stack: ["Vector Search", "PostgreSQL", "Redis", "Gemini", "RAG", "Kubernetes", "AWS EKS"],
    image: Siramai,
    ctas: {
      primary: { label: "Live Platform", href: "https://www.siramai.com/" },
    },
    featured: true,
    highlights: [
      "As first founding engineer, built agentic e-commerce OS and no-code framework used by 4+ enterprise clients, helping raise $1.0M seed round",
      "Designed agent workflows processing 2K+ daily queries with vector search and adaptive ranking algorithms",
      "Deployed on AWS with Kubernetes (EKS) for container orchestration, auto-scaling to handle 2K+ daily queries with 99.9% uptime"
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
    stack: ["Pinecone", "OpenAI", "Next.js", "Redis", "Vector Search", "Docker", "Vercel"],
    image: Hanger,
    ctas: {
      primary: { label: "Live Site", href: "https://www.siramai.com/" },
    },
    featured: true,
    highlights: [
      "Built consumer-facing AI shopping platform with semantic product discovery enabling natural language queries",
      "Implemented Pinecone vector DB + OpenAI embeddings, improving product discovery CTR by 40%",
      "Hosted on Vercel with serverless functions and Docker containers for backend services, handling 2K+ users with edge caching"
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
    stack: ["LangChain", "OpenAI", "React", "MongoDB", "Python", "Docker", "AWS Lambda"],
    image: LumeLabs,
    ctas: {
      primary: { label: "Live Platform", href: "https://www.district-four.com/" },
    },
    featured: false,
    highlights: [
      "Built AI-powered lead generation system using LangChain agents, processing 62K+ prospects with 8.2% response rate (4x industry average)",
      "Delivered 300% growth for FitCheck, $2K+ revenue for Workwear, and 2x ROI across 15+ clients, scaling to $2K MRR",
      "Deployed on AWS with Docker containers and Lambda functions for web scraping, using MongoDB Atlas for prospect data pipeline"
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
    stack: ["React Native", "Node.js", "MongoDB", "AWS S3", "Redis", "Docker", "Kubernetes", "Digital Ocean"],
    image: FitCheck,
    ctas: {
      primary: { label: "Live Platform", href: "https://www.fitcheck.live/" },
    },
    featured: false,
    highlights: [
      "Built React Native social network scaling to 320+ users with 40% DAU and 62% Day-7 retention",
      "Optimized image compression reducing upload time 67% (15s→5s) with AWS S3 and Redis caching (90% hit rate)",
      "Hosted on Digital Ocean with Docker containers and Kubernetes, serving 10,400+ posts with real-time WebSocket updates"
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
    stack: ["React", "Node.js", "PostgreSQL", "Stripe", "DocuSign", "Docker", "AWS ECS", "RDS"],
    image: OpenField,
    ctas: {
      primary: { label: "Live Platform", href: "https://www.openfield.live/" },
    },
    featured: false,
    highlights: [
      "Built two-sided marketplace connecting 520+ college athletes with businesses, processing $52K+ in transactions",
      "Integrated Stripe Connect for split payments (15% platform fee) and automated DocuSign contract generation with NCAA compliance",
      "Deployed on AWS with Docker and ECS, using PostgreSQL RDS for athlete profiles and deal management with <48h completion time"
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
