import { StaticImageData } from "next/image";

// Import product images
import Culin from "../app/projects/pictures/culin.png";
import FitCheck from "../app/projects/pictures/fitcheck.png";
import Siramai from "../app/projects/pictures/siramai.png";
import psych from "../app/projects/pictures/psych.png";
import OpenField from "../app/projects/pictures/openfield.png";

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
    image: Siramai,
    ctas: {
      primary: { label: "Live Site", href: "https://www.siramai.com/" },
    },
    featured: true,
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
    ctas: {
      primary: { label: "Live Platform", href: "https://www.district-four.com/" },
    },
    featured: false,
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
  },
];

export const CATEGORIES: ProductCategory[] = [
  "AI/Health",
  "Consumer",
  "B2B/Agency",
  "Platform",
  "Mobile",
];
