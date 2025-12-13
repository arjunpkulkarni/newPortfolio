import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, GraduationCapIcon, BriefcaseIcon, BookOpenIcon } from "lucide-react";

import Culin from "../app/projects/pictures/culin.png";
import FitCheck from "../app/projects/pictures/fitcheck.png";
import LumeLabs from "../app/projects/pictures/lumelabs.png";
import Siramai from "../app/projects/pictures/siramai.png";
import DJDoc from "../app/projects/pictures/djdoc.png";
import StockLock from "../app/projects/pictures/stocklock.png";
import AMD from "../app/projects/pictures/neural.png";
import EVInsight from "../app/projects/pictures/evInsight.png";
import Loophaus from "../app/projects/pictures/loophaus.png";
import RealRoll from "../app/projects/pictures/realroll.png";
import Materials from "../app/projects/pictures/materials.png";
import psych from "../app/projects/pictures/psych.png";
import OpenField from "../app/projects/pictures/openfield.png";
import KitGen from "../app/projects/pictures/kitgen.png";
import rydberg from "../app/projects/pictures/rydberg.png";
import QuantDesk from "../app/projects/pictures/quantDesk.png";
import Purchasing from "../app/projects/pictures/purchasing.png";
import ucsd from "../app/projects/pictures/ucsd.png";
import uphonest from "../app/projects/pictures/uphonest.png";

import hanger from "../app/work/pictures/hanger.png";
import abbvie from "../app/work/pictures/abbvie.png";
import nobe from "../app/work/pictures/nobe.png";
import ibc from "../app/work/pictures/ibc.png";
import sigpwny from "../app/work/pictures/sigpwny.png";

import culinLogo from "../app/projects/pictures/logos/culinLogo.png";
import siramaiLogo from "../app/projects/pictures/logos/siramaiLogo.png";
import fitcheckLogo from "../app/projects/pictures/logos/fitcheckLogo.png";
import lumeLogo from "../app/projects/pictures/logos/lumeLogo.png";
import rumorLogo from "../app/projects/pictures/logos/rumorLogo.png";

import Stanford from "../app/education/pictures/stanford.png";
import cloud from "../app/education/pictures/cloud.png";
import java from "../app/education/pictures/java.png";
import HackerRank from "../app/education/pictures/hackerrank.png";
import AWS from "../app/education/pictures/aws.png";
import uiuc from "../app/education/pictures/uiuc.png";
import MITRE from "../app/education/pictures/mitre.png"; 
import Udemy from "../app/education/pictures/udemy.png";

export const DATA = {
  name: "Arjun Kulkarni",
  initials: "AK",
  url: "https://arjunpkulkarni.com",
  location: "New York City",
  locationLink: "https://www.google.com/maps/place/University+of+Illinois+Urbana-Champaign",
  description:
    "UIUC CS + Materials Engineering • Shipping AI agents, full-stack systems, and mobile experiences that solve real problems at scale",
  summary:
    "AI + full-stack engineer building real-time, user-facing intelligence systems. Currently at Rumor (50k+ users), previously founding engineer at Curator.to (Intel & UpHonest backed, $1M raised). Built agentic e-commerce handling 2k+ daily queries with 30% latency reduction, clinical-grade AI platforms (UCSD Health), and RL systems for autonomous routing. Dual degree in CS + Materials Engineering at UIUC — bridging software, AI infrastructure, and systems engineering.",
  avatarUrl: "/pfp.jpeg",
  skills: {
    "Languages (Core)": [
      "Python",
      "TypeScript",
      "JavaScript",
      "C++",
      "SQL",
    ],
    "Frameworks": [
      "React",
      "React Native",
      "Next.js",
      "Flask",
      "FastAPI",
      "Node.js",
      "Express",
    ],
    "AI/ML": [
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "RAG",
      "RL",
      "LLM Ops",
      "OpenAI Assistants",
      "Gemini",
      "Vector Search",
    ],
    "Cloud/DevOps": [
      "AWS",
      "Docker",
      "GitHub Actions",
      "Linux",
      "CI/CD",
    ],
    "Tools": [
      "Postgres",
      "MongoDB",
      "Redis",
      "ROS",
      "SUMO",
      "COMSOL",
      "Git",
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/work", icon: BriefcaseIcon, label: "Work" },
    { href: "/education", icon: GraduationCapIcon, label: "Education" },
    { href: "/projects", icon: NotebookIcon, label: "Notebook" },
  ],
  contact: {
    email: "arjunpk2@illinois.edu",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/arjunpkulkarni",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arjun-kulkarni-610922297",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:arjunpk2@illinois.edu",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Rumor",
      href: "https://www.therumor.com/",
      badges: [],
      location: "New York, NY",
      title: "Software Engineer",
      logoUrl: rumorLogo,
      start: "Nov 2025",
      end: "Present",
      description:
        "Building core mobile features for Rumor's 50k+ user event‑hosting platform.",
      tasks: [
        {
          description: "Built and shipped core React Native features (guest lists, RSVPs, creator discovery) used by 50k+ users, improving mobile performance and navigation speed by 30%.",
          skills: ["React Native", "Mobile", "Performance"]
        },
        {
          description: "Developed scalable backend APIs for high‑volume event workflows, reducing user drop‑off during event flow by 25%.",
          skills: ["Node.js", "APIs", "Scalability"]
        }
      ]
    },
    {
      company: "Curator.to (formerly Siramai)",
      href: "https://siramai.com/",
      badges: ["Intel-backed", "$1M raised"],
      location: "New York, NY",
      title: "Founding Engineer",
      logoUrl: siramaiLogo,
      start: "Jan 2024",
      end: "Nov 2025",
      description:
        "First founding engineer; built agentic e‑commerce OS and no‑code framework used by 4+ enterprise clients.",
      tasks: [
        {
          description: "Designed agent workflows atop ContextOS processing 2k+ daily queries with vector search and adaptive ranking; helped raise $1.0M.",
          skills: ["Vector Search", "Agents", "ContextOS", "Fundraising"]
        },
        {
          description: "Optimized Postgres + Redis ingestion + analytics stack, increasing throughput 4× and cutting p95 latency by 30%.",
          skills: ["PostgreSQL", "Redis", "Caching", "Performance"]
        },
        {
          description: "Shipped Gemini multimodal search enabling conversational and visual product discovery for enterprise clients.",
          skills: ["Gemini", "Multimodal", "RAG", "Production ML"]
        }
      ]
    },
    {
      company: "UCSD Health",
      href: "https://health.ucsd.edu/",
      badges: [],
      location: "San Diego, CA",
      title: "Founding Engineer",
      logoUrl: ucsd,
      start: "Jan 2025",
      end: "Aug 2025",
      description:
        "Led DevOps + ML workflows for clinical‑grade AI dietician platform serving 200+ patients.",
      tasks: [
        {
          description: "Built subgraph DAG + RAG pipeline (LangChain, QDrant vector DB) for dietary recommendations, improving accuracy by 22%.",
          skills: ["LangChain", "RAG", "Vector DB", "Healthcare AI"]
        },
        {
          description: "Deployed production Next.js platform with GPT‑4o integration, handling clinical compliance and HIPAA requirements.",
          skills: ["Next.js", "GPT-4", "DevOps", "Healthcare Compliance"]
        }
      ]
    },
    {
      company: "AbbVie",
      href: "https://www.abbvie.com/",
      badges: [],
      location: "Chicago, IL",
      title: "Software Developer",
      logoUrl: abbvie,
      start: "Dec 2024",
      end: "Jun 2025",
      description:
        "Built ETL insights dashboard for oncology research teams, reducing document processing time 80% across 120k+ reports.",
      tasks: [
        {
          description: "Built an ETL insights dashboard for oncology research teams, reducing document processing time 80% across 120k+ reports.",
          skills: ["ETL", "FastAPI", "Python", "Embeddings"]
        },
        {
          description: "Upgraded ingestion + analytics stack (FastAPI + Postgres + S3), increasing throughput 4× for R&D pipeline.",
          skills: ["FastAPI", "Postgres", "S3", "Performance"]
        }
      ]
    }
  ],
  research: [
    {
      company: "Nick Holonyak, Jr. Micro and Nanotechnology Laboratory",
      href: "https://mntl.illinois.edu/",
      badges: ["Apprenticeship"],
      location: "Champaign, IL (On-site)",
      title: "Nanotechnology Researcher",
      logoUrl: uiuc,
      start: "Sep 2025",
      end: "Present",
      description:
        "Optimizing quantum material energy with carbon nanotubes, building on ionic Coulomb drag principles for nanofluidic semiconductor channels (Nano Energy, 2023; doi:10.1016/j.nanoen.2023.108860).",
      tasks: [
        {
          description: "Modeled ion–electron Coulomb drag coupling to predict open‑circuit voltage and short‑circuit current in Si nanochannels.",
          skills: ["Nanofluidics", "Coulomb Drag", "Device Physics"]
        },
        {
          description: "Designed CNT‑integrated channel architectures targeting higher momentum transfer and energy harvesting efficiency.",
          skills: ["Carbon Nanotubes", "Energy Harvesting", "Simulation"]
        }
      ]
    },
    {
      company: "Coordinated Science Laboratory",
      href: "https://csl.illinois.edu/",
      badges: [],
      location: "In-Person",
      title: "Software Developer",
      logoUrl: uiuc,
      start: "Jan 2025",
      end: "Aug 2025",
      description:
        "Led DevOps + ML workflows for AI dietician platform (merged with UCSD Health project above).",
      tasks: [
        {
          description: "Built subgraph DAG + RAG pipeline (LangChain, QDrant vector DB), improving dietary recommendation accuracy by 22%.",
          skills: ["LangChain", "RAG", "Vector Databases", "LangGraph"]
        },
        {
          description: "Collaborated with Food Network Chef James Briscione & White House Fellow Lav Varshney on clinical AI nutrition engine.",
          skills: ["Cross-functional", "AI", "Healthcare"]
        }
      ]
    },
    {
      company: "Beckman Institute for Advanced Science and Technology",
      href: "https://beckman.illinois.edu/",
      badges: [],
      location: "Urbana, IL",
      title: "AI Research Assistant",
      logoUrl: uiuc,
      start: "Feb 2025",
      end: "Apr 2025",
      description:
        "Built real‑time React + Flask platform for multi‑user LLM interaction research (40+ study subjects).",
      tasks: [
        {
          description: "Built real‑time React + Flask platform for multi‑user LLM interaction research (40+ study subjects).",
          skills: ["React", "Flask", "WebSockets", "LLM"]
        },
        {
          description: "Ensured zero‑loss message reliability via WebSockets + analytics logging for human–AI interaction experiments.",
          skills: ["WebSockets", "Analytics", "Resilience", "Real-time Systems"]
        }
      ]
    },
    {
      company: "Illinois AI Group (ECE Department)",
      href: "https://ece.illinois.edu/",
      badges: [],
      location: "Urbana, IL",
      title: "AI Research Assistant",
      logoUrl: uiuc,
      start: "Jan 2024",
      end: "Jan 2025",
      description:
        "Integrated RL agent into MPC framework for autonomous EV routing — 18% lower traffic delay in open‑world simulations.",
      tasks: [
        {
          description: "Integrated RL agent into MPC framework for autonomous EV routing in SUMO → improved control accuracy 25%.",
          skills: ["MPC", "RL", "SUMO", "Python"]
        },
        {
          description: "Achieved 18% lower traffic delay in open‑world simulations using ROS, C++, Python.",
          skills: ["ROS", "C++", "Autonomous Systems", "Simulation"]
        }
      ]
    },
    {
      company: "Civil & Environmental Eng., UIUC",
      href: "https://cee.illinois.edu/",
      badges: [],
      location: "In-Person",
      title: "Materials Research Assistant",
      logoUrl: uiuc,
      start: "Sep 2022",
      end: "Dec 2022",
      description:
        "Developed sustainable concrete mixture using ML to predict durability — reduced carbon emissions by 10%.",
      tasks: [
        {
          description: "Analyzed experimental data and developed new concrete mixture by reducing clinker in cement.",
          skills: ["Materials Science", "Data Analysis"]
        },
        {
          description: "Built Python + Random Forest models to predict composition impact on durability, reducing carbon emissions by 10%.",
          skills: ["Python", "Random Forest", "ML", "Sustainability"]
        }
      ]
    },
  ],
  clubs: [
    {
      company: "Illinois Business Consulting",
      href: "https://giesbusiness.illinois.edu/experience/experiential-learning/illinois-business-consulting",
      badges: [],
      location: "Remote",
      title: "IT Consultant",
      logoUrl: ibc,
      start: "Oct 2023",
      end: "Jan 2024",
      description:
        "Led projects for Lubrizol's market entry into the pipefitting industry and simplified insurance language for Equitable. Collaborated closely with CIOs and CTOs to deliver actionable insights and strategic recommendations.",
      tasks: [
        {
          description: "Conducted market analysis and developed a go-to-market strategy for a new product line in the pipefitting industry.",
          skills: ["Market Research", "Strategic Planning", "PowerPoint", "Client Presentation"]
        },
        {
          description: "Used NLP techniques to simplify complex insurance documents, making them more understandable for customers.",
          skills: ["Python", "NLTK", "Text Summarization", "Data Analysis"]
        }
      ]
    },
    {
      company: "sigPWNY Component Team",
      href: "https://sigpwny.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: sigpwny,
      start: "Dec 2023",
      end: "Mar 2024",
      description:
        "Integrated UART functionality into medical devices for eCTF competitions. Enhanced security for x86 architectures using Rust and C, focusing on safe memory development and secure communication protocols.",
      tasks: [
        {
          description: "Developed and implemented a secure UART communication protocol for an embedded medical device.",
          skills: ["C", "Rust", "Embedded Systems", "Serial Communication"]
        },
        {
          description: "Contributed to securing x86 architecture firmware by implementing memory-safe coding practices in Rust.",
          skills: ["Rust", "x86 Assembly", "Cybersecurity", "Firmware"]
        }
      ]
    },
    {
      company: "NOBE Tech Lab",
      href: "https://www.nobenational.org/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: nobe,
      start: "Jul 2023",
      end: "Dec 2023",
      description:
        "Operate website for 30+ clients using React, Node.js, Vercel; built custom forms, pricing calculator, and artwork design tools.",
      tasks: [
        {
          description: "Built and styled responsive UI components for a cross-platform mobile app using React Native.",
          skills: ["React Native", "Bootstrap", "JavaScript", "UI/UX Design"]
        },
        {
          description: "Translated Figma mockups into functional application screens and integrated them with a Python Flask backend.",
          skills: ["Figma", "Flask", "REST APIs", "Frontend Development"]
        }
      ]
    },
  ],
  partners: [
    {
      company: "UCSD Medicine",
      href: "https://employment.ucsd.edu/",
      badges: ["Partner"],
      location: "",
      title: "Partner with CulinAI (CSL)",
      logoUrl: ucsd,
      start: "2025",
      end: "Present",
      description:
        "Partnered with CulinAI at UIUC CSL on the AI nutrition engine in collaboration with Chef James Briscione and Prof. Lav Varshney.",
    },
    {
      company: "UpHonest Capital",
      href: "https://www.uphonestcapital.com/",
      badges: ["Investor"],
      location: "",
      title: "Investor in Hanger",
      logoUrl: uphonest,
      start: "",
      end: "",
      description:
        "Investor supporting Hanger's AI-powered centralized shopping platform.",
    },
  ],
  education: [
    {
      school: "University of Illinois at Urbana-Champaign",
      href: "https://illinois.edu",
      degree: "Computer Science & Materials Engineering",
      logoUrl: uiuc,
      start: "Sep 2022",
      end: "May 2026",
      classes: {
        "Computer Science": {
          "100-level": [
            {
              code: "CS128",
              name: "Introduction to C++",
              description: "Object-oriented programming with C++"
            },
            {
              code: "CS124",
              name: "Java Programming",
              description: "Object-oriented programming with Java"
            },
            {
              code: "CS173",
              name: "Discrete Structures",
              description: "Mathematical foundations of computer science"
            }
          ],
          "200-level": [
            {
              code: "CS225",
              name: "Data Structures",
              description: "Implementation and analysis of fundamental data structures"
            }
          ],
          "400-level": [
            {
              code: "CS412",
              name: "Data Mining",
              description: "Advanced data mining techniques and applications"
            },
            {
              code: "CS416",
              name: "Data Visualization",
              description: "Principles and techniques of data visualization"
            },
            {
              code: "CS411",
              name: "Database Systems",
              description: "Design and implementation of database systems"
            },
            {
              code: "CS441",
              name: "Applied Machine Learning",
              description: "Application of machine learning techniques and algorithms"
            }
          ]
        },
        "Mathematics": {
          "200-level": [
            {
              code: "MATH221",
              name: "Differential Calculus",
              description: "Single-variable calculus and applications"
            },
            {
              code: "MATH285",
              name: "Differential Equations",
              description: "Ordinary differential equations and applications"
            },
            {
              code: "MATH231",
              name: "Integral Calculus",
              description: "Integration techniques and applications"
            },
            {
              code: "MATH257",
              name: "Linear Algebra w/ Python",
              description: "Linear algebra concepts with computational applications"
            },
            {
              code: "MATH241",
              name: "Multivariable Calculus",
              description: "Calculus of several variables"
            }
          ],
          "400-level": [
            {
              code: "STAT400",
              name: "Statistics and Probability I",
              description: "Probability theory and statistical inference"
            }
          ]
        },
        "Materials Science & Engineering": {
          "200-level": [
            {
              code: "MSE206",
              name: "Mechanics of Materials",
              description: "Mechanical behavior of materials"
            },
            {
              code: "MSE201",
              name: "Phase and Phase Diagrams",
              description: "Phase equilibria and transformations in materials"
            }
          ],
          "300-level": [
            {
              code: "MSE308",
              name: "Materials Lab II",
              description: "Advanced materials characterization and analysis"
            },
            {
              code: "MSE307",
              name: "Materials Laboratory I",
              description: "Introduction to materials characterization techniques"
            },
            {
              code: "MSE304",
              name: "Electronic Properties of Materials",
              description: "Band structure, carriers, transport, and semiconductor device fundamentals"
            }
          ],
          "400-level": [
            {
              code: "MSE402",
              name: "Kinetic Processes in Materials",
              description: "Study of kinetic processes in materials systems"
            },
            {
              code: "MSE405",
              name: "Microstructure Determination",
              description: "Analysis of material microstructures"
            },
            {
              code: "MSE406",
              name: "Thermal Mechanics of Materials",
              description: "Thermal properties and mechanical behavior"
            },
            {
              code: "MSE401",
              name: "Thermodynamics of Materials",
              description: "Thermodynamic principles in materials science"
            },
            {
              code: "MSE485",
              name: "Atomic Scale Simulations",
              description: "Simulation methods at the atomic scale in materials science"
            },
            {
              code: "MSE404",
              name: "Computational MSE - Macroscale",
              description: "Computational modeling techniques for macroscale materials"
            },
            {
              code: "MSE494",
              name: "Materials Design Thinking",
              description: "Design thinking approaches in materials engineering"
            },
            {
              code: "MSE441",
              name: "Metals Processing",
              description: "Solidification, forming, heat treatment, and microstructure control in metals"
            },
            {
              code: "MSE495",
              name: "Materials Design",
              description: "Principles and practice of materials selection and performance-driven design"
            },
            {
              code: "MSE481",
              name: "Electron Microscopy",
              description: "SEM/TEM operation, diffraction, imaging, and microstructure analysis"
            }
          ]
        },
        "Electrical Engineering": {
          "200-level": [
            {
              code: "ECE205",
              name: "Electronic and Electrical Circuits",
              description: "Analysis and design of electronic circuits"
            }
          ],
          "300-level": [
            {
              code: "ECE340",
              name: "Semiconductor Electronics",
              description: "Physics and design of semiconductor electronic devices"
            }
          ],
          "400-level": [
            {
              code: "ECE405",
              name: "Quantum Systems II",
              description: "Advanced concepts in quantum systems for electrical engineering"
            },
            {
              code: "ECE404",
              name: "Quantum Materials",
              description: "Quantum phenomena in materials and implications for devices"
            }
          ]
        }
      }
    },
  ],
  certifications: [
    {
      name: "Certified Cloud Practitioner",
      issuer: "AWS",
      date: "Jul 2024",
      logoUrl: AWS,
    },
    {
      name: "MERN Stack",
      issuer: "Udemy",
      logoUrl: Udemy,
      date: "May 2024",
    },
    {
      name: "Medical Embedded Systems",
      issuer: "MITRE Engenuity",
      logoUrl: MITRE,
      date: "May 2024",
    },
    {
      name: "Supervised Machine Learning",
      issuer: "Stanford",
      logoUrl: Stanford,
      date: "May 2024",
    },
    {
      name: "Java w/ Spring Boot",
      issuer: "LinkedIn",
      date: "Jan 2024",
      logoUrl: java,
    },
    {
      name: "Cloud Concepts",
      issuer: "LinkedIn",
      date: "Dec 2023",
      logoUrl: cloud,
    },
    {
      name: "Problem Solving (Basic)",
      issuer: "HackerRank",
      date: "Aug 2023",
      logoUrl: HackerRank,
    },
  ],
  projects: [
    {
      title: "Generating Quantum GHZ States in Rydberg Arrays with Optimal-Control Pulses",
      href: "/projects/pdfs/Rydberg%20Atom%20Cat%20States.pdf",
      dates: "2024",
      active: true,
      description:
        "Achieved N=20 Schrödinger cat states with ≥0.54 fidelity using RedCRAB optimal-control pulses in Rydberg atom arrays. Characterized phase coherence via parity oscillations to understand decoherence limits in multi-qubit quantum systems.",
      technologies: ["Quantum Computing", "Python", "Optimal Control", "RedCRAB", "Simulation"],
      links: [
        {
          type: "Slides",
          href: "/projects/pdfs/Rydberg%20Atom%20Cat%20States.pdf",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Paper Summary",
          href: "/projects/pdfs/Generation%20and%20Manipulation%20of%20Schr%C3%B6dinger%20Cat%20States%20in%20Rydberg%20Atom%20Arrays.pdf",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
    {
      title: "Automating Purchase Order Verification with OCR + Product Matching",
      href: "/blog/automating-purchase-order-verification-with-ocr--product-matching",
      dates: "Aug 2024",
      active: true,
      description:
        "Built full-stack PO processing system using Tesseract OCR + fuzzy matching to auto-verify line items against product catalogs. Reduced verification time from 15 min/order to <30 seconds (30x speedup). Achieved 93% automation with 99% accuracy using PostgreSQL full-text search and interactive verification UI.",
      technologies: ["React", "TypeScript", "Flask", "PostgreSQL", "OCR", "Tesseract", "Python", "Tailwind CSS"],
      links: [

        {
          type: "Demo",
          href: "https://www.loom.com/share/849fe122e6ea4a22aeb4793a1bfd1590",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
    {
      title: "Building AI-Powered Media Kits for Content Creators Using TikTok API",
      href: "/blog/building-ai-powered-media-kits-with-tiktok-api",
      dates: "2024",
      active: true,
      description:
        "Automated creator media kit generation by integrating TikTok API, Instagram Graph API, and GPT-4 to generate professional media kits in 30 seconds. Reduced kit creation time from 2-3 hours to 30 seconds with AI-powered bio generation and Puppeteer PDF rendering.",
      technologies: ["Next.js", "TikTok API", "Instagram API", "GPT-4", "Puppeteer", "PostgreSQL", "Redis", "Vercel"],
      links: [

        {
          type: "Live Demo",
          href: "https://media-ai-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
    {
      title: "Scaling NIL Marketplace for College Athletes with Payment Processing",
      href: "/blog/scaling-nil-marketplace-for-college-athletes-with-payment-processing",
      dates: "2024",
      active: true,
      description:
        "Built OpenField, a two-sided marketplace connecting 520+ college athletes with local businesses for NIL deals. Integrated Stripe Connect for split payments with 15% platform fee, automated contract generation via DocuSign, and NCAA compliance monitoring. Processed $52k+ in transactions with <48 hour deal completion time.",
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Stripe Connect", "DocuSign", "AWS"],
      links: [

        {
          type: "Live Platform",
          href: "https://www.openfield.live/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
    {
      title: "Building Semantic Search for E-Commerce with Vector Embeddings",
      href: "/projects/building-semantic-search-for-e-commerce-with-vector-embeddings",
      dates: "2024",
      active: true,
      description:
        "Implemented semantic product search using Pinecone vector DB + OpenAI embeddings to replace keyword-based search. Improved product discovery CTR by 40% by enabling natural language queries like 'sustainable winter jacket under $100'.",
      technologies: ["Pinecone", "OpenAI Embeddings", "Next.js", "Python", "Vector Search", "TypeScript", "Redis", "PostgreSQL"],
      links: [
        {
          type: "Live Platform",
          href: "https://www.siramai.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
    {
      title: "Scaling Social Fashion App to 300+ Beta Users on Mobile",
      href: "/blog/scaling-social-fashion-app-to-300-beta-users-on-mobile",
      dates: "2023-2024",
      active: true,
      description:
        "Built FitCheck, a React Native social network for outfit sharing that scaled to 320+ beta users with 40% DAU. Optimized image compression reducing upload time 67% (15s→5s), implemented personalized feed algorithm with Redis caching (90% hit rate), and processed 10,400+ posts. Achieved 62% Day-7 retention with infinite scroll and real-time updates.",
      technologies: ["React Native", "Node.js", "MongoDB", "AWS S3", "Redis", "Express", "TypeScript"],
      links: [

        {
          type: "Live Platform",
          href: "https://www.fitcheck.live/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
    {
      title: "Automating Lead Generation for Local Businesses with AI Agents",
      href: "/blog/automating-lead-generation-for-local-businesses-with-ai-agents",
      dates: "2024",
      active: true,
      description:
        "Built AI-powered lead generation system using LangChain agents that scrapes business directories, enriches data with ML lead scoring, and generates GPT-4 personalized emails. Processed 62,000+ prospects achieving 8.2% response rate (4x industry average). Delivered 300% growth for FitCheck, $2k+ revenue for Workwear, and 2x ROI for Gloss Authority across 15+ clients.",
      technologies: ["Python", "LangChain", "OpenAI", "React", "Web Scraping", "BeautifulSoup", "Selenium", "MongoDB"],
      links: [
       
        {
          type: "Live Platform",
          href: "https://www.district-four.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
    {
      title: "Training Regression Model on 170k Songs for Real-Time DJ Mix Recommendations",
      href: "https://medium.com/@arjunpkulkarni/story-of-djdoc-in-development-91e735e3d000",
      dates: "Dec 2023",
      active: true,
      description:
        "Built regression model on AWS Sagemaker analyzing BPM, energy, valence across 170k tracks to predict 'mixing scores' between songs. Deployed real-time inference via Lambda + API Gateway, enabling DJs to find compatible transitions in <500ms. Integrated Spotify API for genre classification.",
      technologies: ["AWS Sagemaker", "Python", "ML", "AWS Lambda", "Spotify API", "React", "MongoDB"],
      links: [
        {
          type: "Article",
          href: "https://medium.com/@arjunpkulkarni/story-of-djdoc-in-development-91e735e3d000",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
    {
      title: "Building Real-Time Investment Dashboard with Stock + Crypto Analytics",
      href: "/projects/building-real-time-investment-dashboard-with-stock--crypto-analytics",
      dates: "Aug 2024",
      active: true,
      description:
        "Unified portfolio tracker pulling live data from Yahoo Finance + CoinGecko APIs. Built Flask backend with Pandas for performance calculations (ROI, Sharpe ratio, volatility) and Plotly visualizations. Cached price data in MySQL reducing API calls 80%. Implemented MySQL stored procedures for VaR and max drawdown calculations.",
      technologies: ["Flask", "MySQL", "React", "TypeScript", "Pandas", "Plotly", "Yahoo Finance", "CoinGecko", "MUI DataGrid"],
      links: [
        {
          type: "Article",
          href: "https://medium.com/@arjunpkulkarni/building-quantdesk-a-unified-investment-dashboard-8642957f25e2",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
    {
      title: "Predicting Stock Movement with NLP Sentiment Analysis on News",
      href: "https://medium.com/@arjunpkulkarni/stocklock-9ffa9d62aba9",
      dates: "Jul 2024",
      active: true,
      description:
        "Built pipeline scraping 10k+ financial news articles daily, running VADER sentiment analysis, and training regression model to predict next-day stock movement. Deployed on AWS Lambda with S3 storage, achieving 62% directional accuracy on S&P 500 stocks.",
      technologies: ["Python", "NLP", "VADER", "Regression", "AWS Lambda", "S3"],
      links: [
        {
          type: "Live Demo",
          href: "https://medium.com/@arjunpkulkarni/stocklock-9ffa9d62aba9",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
    {
      title: "Building High-Performance Crypto Trading Engine in C++",
      href: "/projects/building-high-performance-crypto-trading-engine-in-cpp",
      dates: "Sep 2024",
      active: true,
      description:
        "Built high-frequency trading engine in C++ with sub-millisecond order execution (18.5μs latency), options strategies (covered calls, straddles), and backtesting. Achieved 54k orders/second throughput with StreamLit dashboard for real-time portfolio analytics and market data visualization.",
      technologies: ["C++17", "Multi-threading", "STL", "Python", "StreamLit", "Options Trading", "Docker"],
      links: [

        {
          type: "Article",
          href: "https://medium.com/@arjunpkulkarni/crypto-trading-platform-in-c-a5e2baf62aba",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/arjunpkulkarni/Crypto-Trading-Platform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
    {
      title: "Optimizing Chip Layout with Reinforcement Learning for AMD",
      href: "/blog/optimizing-chip-layout-with-reinforcement-learning-for-amd",
      dates: "2024",
      active: true,
      description:
        "Applied deep RL (PPO) to optimize transistor placement in chip layouts for KPMG Ideation Challenge. Trained agent with custom reward function balancing wire length, congestion, timing, and thermal constraints. Achieved 12% improvement over manual layouts and 48x speedup.",
      technologies: ["Python", "PyTorch", "Reinforcement Learning", "PPO", "Chip Design", "OpenAI Gym"],
      links: [

        {
          type: "Presentation",
          href: "https://drive.google.com/file/d/1cIw9EgpeKyzAbVeZG6P2DU4ySmb0g2T8/view",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
    {
      title: "Analyzing 500+ EV Models with Interactive Tableau Dashboard",
      href: "/projects/analyzing-500-ev-models-with-interactive-tableau-dashboard",
      dates: "2024",
      active: true,
      description:
        "Cleaned and normalized dataset of 500+ electric vehicles, standardizing range/battery metrics across EPA, WLTP, and NEDC standards. Built interactive Tableau dashboard with dynamic filters for price, range, brand comparisons. Implemented Python outlier detection identifying 12% data quality issues. Revealed key insights: $45k/300mi sweet spot, Korean manufacturers best value.",
      technologies: ["Tableau", "Python", "Pandas", "NumPy", "Data Cleaning", "Statistical Analysis", "Visualization", "sklearn"],
      links: [

        {
          type: "Live Dashboard",
          href: "https://public.tableau.com/app/profile/arjun.kulkarni/viz/EVDASHBOARD_17507097546940/Dashboard1#2",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },    
    {
      title: "Generating Music Patterns with RNNs Trained on MIDI Data",
      href: "/blog/generating-music-patterns-with-rnns-trained-on-midi-data",
      dates: "2024",
      active: true,
      description:
        "Trained LSTM network on 5,000+ MIDI files to generate novel musical sequences with attention mechanism and tempo/key conditioning. Built real-time web interface for producers to generate 8-bar variations from seed melodies. Achieved 4.1/5 rating from professional producers with <500ms latency.",
      technologies: ["TensorFlow", "Python", "LSTM", "RNN", "MIDI", "React", "Flask", "AWS"],
      links: [
        {
          type: "Live Demo",
          href: "https://loophaus1.lovable.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
    {
      title: "Building Image Search Engine with CLIP Embeddings + FAISS",
      href: "/projects/building-image-search-engine-with-clip-embeddings--faiss",
      dates: "2024",
      active: true,
      description:
        "Indexed 100k+ images using CLIP embeddings and FAISS vector search, enabling semantic queries like 'sunset over mountains'. Deployed on AWS with <200ms latency. Implemented approximate nearest neighbor search for sub-linear query time.",
      technologies: ["CLIP", "FAISS", "Python", "Vector Search", "AWS", "React", "PyTorch", "Lambda"],
      links: [

        {
          type: "Live Demo",
          href: "https://realroll.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
    {
      title: "Detecting Microexpressions with CNN for Clinical Diagnosis",
      href: "/blog/detecting-microexpressions-with-cnn-for-clinical-diagnosis",
      dates: "2023",
      active: true,
      description:
        "Built Congruence, a multimodal emotional AI platform using CNNs to detect microexpressions and voice stress for clinical diagnosis. Achieved 76% accuracy on 7-emotion classification, deployed to 48+ psychiatric clinics with real-time analysis. Reduced clinical documentation by 92% while improving diagnostic accuracy by 18%.",
      technologies: ["TensorFlow", "CNN", "Python", "Computer Vision", "TensorFlow Lite", "React Native", "HIPAA"],
      links: [
        {
          type: "Live Demo",
          href: "https://congruence-ai-therapy.lovable.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/sumanthk123/NOBE-Tech-Project-Fall-2023",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
    {
      title: "Visualizing Material Properties with Interactive D3.js Charts",
      href: "/projects/visualizing-material-properties-with-interactive-d3js-charts",
      dates: "2023",
      active: true,
      description:
        "Built interactive Ashby-style scatter plot with D3.js visualizing mechanical properties (strength, stiffness, density, cost) for 50+ materials across metals, ceramics, polymers, and composites. Implemented log-scale axes, zoom/pan, category filtering, and hover tooltips. Calculates performance indices (strength-to-weight, specific modulus) for material selection. 1,000+ student views.",
      technologies: ["D3.js", "JavaScript", "SVG", "Data Visualization", "GitHub Pages", "HTML5", "CSS3"],
      links: [
        {
          type: "Live Demo",
          href: "https://arjunpkulkarni.github.io/materialsMech/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
  ],
} as const;
