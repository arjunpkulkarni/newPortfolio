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
    "Software Developer & Materials Engineer",
  summary:
    "Software engineer with deep experience in AI infrastructure, semiconductor materials, and high-performance computing. Built production systems handling 2k+ daily queries with GPU-accelerated vector search, optimized distributed caching (Redis/Postgres) cutting p95 latency by 30%, and researched nanofluidic energy harvesting in CNT-enhanced semiconductor channels at UIUC's Micro/Nano Lab.",
  avatarUrl: "/pfp.jpeg",
  skills: {
    "Programming Languages": [
      "JavaScript",
      "TypeScript",
      "SQL",
      "Java",
      "C++",
      "Python",
    ],
    "AI/ML & Deep Learning": [
      "Foundation Models (GPT-4, LLaMA)",
      "Large Language Models",
      "Amazon Bedrock",
      "Model Context Protocol",
      "Transformer Architecture",
      "Prompt Engineering",
      "RAG Systems",
      "Fine-tuning (LoRA)",
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "LangChain",
      "Vector Databases",
      "Embedding Models",
      "Attention Mechanisms",
      "Neural Networks",
    ],
    "MLOps & Deployment": [
      "Docker",
      "Kubernetes",
      "AWS SageMaker",
      "Model Quantization",
      "Inference Optimization",
      "MLflow",
      "Weights & Biases",
      "Model Evaluation",
      "A/B Testing",
      "Monitoring & Logging",
    ],
    "Frameworks/Libraries": [
      "MongoDB",
      "React",
      "Vue.js",
      "React Native",
      "Bootstrap",
      "Tailwind CSS",
      "Node.js",
      "Flask",
      "Spring Boot",
      "Next.js",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "Numpy",
      "Matplotlib",
    ],
    "Tools/Platforms": [
      "Amazon Web Services",
      "Docker",
      "Kubernetes",
      "Git",
      "Linux",
      "Vercel",
      "Postman",
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/work", icon: BriefcaseIcon, label: "Work" },
    { href: "/education", icon: GraduationCapIcon, label: "Education" },
    { href: "/projects", icon: NotebookIcon, label: "Projects" },
    { href: "/blog", icon: BookOpenIcon, label: "Blog" },
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
        "Building core mobile features and scalable event systems for Rumor’s 50k+ user event‑hosting platform.",
      tasks: [
        {
          description: "Built core React Native features powering Rumor’s event‑hosting platform, improving mobile UX for 50k+ users.",
          skills: ["React Native", "Mobile"]
        },
        {
          description: "Developed scalable APIs and event workflows for RSVPs and guest lists supporting high‑volume events.",
          skills: ["APIs", "Workflows", "Scalability"]
        }
      ]
    },
    {
      company: "Siramai",
      href: "https://siramai.com/",
      badges: [],
      location: "New York, NY",
      title: "Founding Engineer",
      logoUrl: siramaiLogo,
      start: "Jan 2024",
      end: "Nov 2025",
      description:
        "Intel & UpHonest Capital–backed. Launched an agentic e‑commerce OS with vector search and adaptive ranking, optimized infra for low latency, and shipped Gemini multimodal search for conversational and visual discovery.",
      tasks: [
        {
          description: "Launched agentic e‑commerce OS handling 2k+ daily queries with vector search and adaptive ranking.",
          skills: ["Vector Search", "Retrieval", "Ranking", "Agents"]
        },
        {
          description: "Optimized Postgres+Redis pipelines and caching layers, cutting p95 latency by 30%.",
          skills: ["PostgreSQL", "Redis", "Caching", "Latency Optimization"]
        },
        {
          description: "Deployed Gemini multimodal search enabling conversational and visual product discovery.",
          skills: ["Gemini", "Multimodal", "Conversational Search", "Vision"]
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
        "Designed and deployed a clinical‑grade AI dietician platform integrating into the hospital system with personalized nutrition models and vector search.",
      tasks: [
        {
          description: "Designed and deployed a clinical‑grade AI dietician platform, integrating within the hospital system.",
          skills: ["Healthcare", "Compliance", "Deployment", "Next.js"]
        },
        {
          description: "Developed personalized nutrition models and vector search pipelines to deliver tailored diet plans at scale.",
          skills: ["Personalization", "Vector Search", "ML Models", "Pipelines"]
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
        "Automated ETL for 120k+ regulatory documents and delivered interactive Tableau dashboards for R&D; added Streamlit monitoring and scaled pipelines 4× while cutting wrangling time 80%.",
      tasks: [
        {
          description: "Automated ETL workflows embedding 120k+ regulatory documents; built interactive Tableau dashboards for R&D.",
          skills: ["ETL", "Tableau", "Python", "Embeddings"]
        },
        {
          description: "Reduced document wrangling time by 80%, added Streamlit monitoring tools, and increased pipeline throughput 4×.",
          skills: ["Streamlit", "Monitoring", "Performance", "Automation"]
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
        "Built end-to-end AI nutrition engine using Next.js, GPT-4o, QDrant vector database, and LangGraph to generate medicinal recipes. Working alongside Food Network Chef, James Briscione & White House Fellow, Lav Varshney, collaborating with UCSD Medicine.",
      tasks: [
        {
          description: "Built end-to-end AI nutrition engine using Next.js, GPT-4o, QDrant vector database, and LangGraph to generate medicinal recipes.",
          skills: ["Next.js", "GPT-4", "Vector Databases", "LangGraph"]
        },
        {
          description: "Collaborated with Food Network Chef, James Briscione & White House Fellow, Lav Varshney, and UCSD Medicine.",
          skills: ["Cross-functional Collaboration", "AI Development", "Healthcare Integration"]
        }
      ]
    },
    {
      company: "Beckman Institute for Advanced Science and Technology",
      href: "https://beckman.illinois.edu/",
      badges: [],
      location: "Urbana, IL",
      title: "Artificial Intelligence Research Assistant",
      logoUrl: uiuc,
      start: "Feb 2025",
      end: "Apr 2025",
      description:
        "Built a real‑time React+Flask experiment platform for 40‑subject human–AI interaction studies with resilient analytics and incident recovery.",
      tasks: [
        {
          description: "Built a real‑time React+Flask experiment platform for 40‑subject human–AI interaction studies.",
          skills: ["React", "Flask", "Realtime", "WebSockets"]
        },
        {
          description: "Instrumented analytics pipelines and handled incident recovery without session loss across multi‑user runs.",
          skills: ["Analytics", "Resilience", "Observability", "Data Pipelines"]
        }
      ]
    },
    {
      company: "ECE Department, UIUC",
      href: "https://ece.illinois.edu/",
      badges: [],
      location: "Urbana, IL",
      title: "Artificial Intelligence Research Assistant",
      logoUrl: uiuc,
      start: "Jan 2024",
      end: "Jan 2025",
      description:
        "Developed MPC+RL pipeline coordinating simulated autonomous vehicles in SUMO, achieving 18% lower traffic delay; refactored DDPG for 25% faster, more stable convergence.",
      tasks: [
        {
          description: "Developed MPC+RL pipeline coordinating AVs in SUMO, achieving 18% lower traffic delay.",
          skills: ["MPC", "Reinforcement Learning", "SUMO", "Python"]
        },
        {
          description: "Refactored DDPG algorithms, improving convergence speed by 25% and stability across experiments.",
          skills: ["DDPG", "TensorFlow/PyTorch", "Optimization", "Experimentation"]
        }
      ]
    },
    {
      company: "UofI Civil Department",
      href: "https://cee.illinois.edu/",
      badges: [],
      location: "In-Person",
      title: "Computational Materials Research Assistant",
      logoUrl: uiuc,
      start: "Sep 2022",
      end: "Dec 2022",
      description:
        "Analyzed experimental data, resulting in development of a new concrete mixture, by reducing clinker in cement. Utilized Python & Random Forest models to predict the impact of composition on durability, reducing carbon emissions by 10%.",
      tasks: [
        {
          description: "Analyzed experimental data, resulting in development of a new concrete mixture, by reducing clinker in cement.",
          skills: ["Materials Science", "Data Analysis", "Experimental Design"]
        },
        {
          description: "Utilized Python & Random Forest models to predict the impact of composition on durability, reducing carbon emissions by 10%.",
          skills: ["Python", "Random Forest", "Sustainability"]
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
        "Computer Science": [
          {
            code: "CS412",
            name: "Data Mining",
            description: "Advanced data mining techniques and applications"
          },
          {
            code: "CS225",
            name: "Data Structures",
            description: "Implementation and analysis of fundamental data structures"
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
            code: "CS173",
            name: "Discrete Structures",
            description: "Mathematical foundations of computer science"
          },
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
            code: "CS441",
            name: "Applied Machine Learning",
            description: "Application of machine learning techniques and algorithms"
          }
        ],
        "Mathematics": [
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
          },
          {
            code: "STAT400",
            name: "Statistics and Probability I",
            description: "Probability theory and statistical inference"
          }
        ],
        "Materials Science & Engineering": [
          {
            code: "MSE402",
            name: "Kinetic Processes in Materials",
            description: "Study of kinetic processes in materials systems"
          },
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
            code: "MSE206",
            name: "Mechanics of Materials",
            description: "Mechanical behavior of materials"
          },
          {
            code: "MSE405",
            name: "Microstructure Determination",
            description: "Analysis of material microstructures"
          },
          {
            code: "MSE201",
            name: "Phase and Phase Diagrams",
            description: "Phase equilibria and transformations in materials"
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
            code: "MSE404",
            name: "Thin Film Mechanical Properties",
            description: "Mechanical properties of thin film materials"
          } // hello
          ,
          {
            code: "MSE-304",
            name: "Electronic Properties of Materials",
            description: "Band structure, carriers, transport, and semiconductor device fundamentals"
          },
          {
            code: "MSE-441",
            name: "Metals Processing",
            description: "Solidification, forming, heat treatment, and microstructure control in metals"
          },
          {
            code: "MSE-495",
            name: "Materials Design",
            description: "Principles and practice of materials selection and performance-driven design"
          },
          {
            code: "MSE-481",
            name: "Electron Microscopy",
            description: "SEM/TEM operation, diffraction, imaging, and microstructure analysis"
          }
        ],
        "Electrical Engineering": [
          {
            code: "ECE205",
            name: "Electronic and Electrical Circuits",
            description: "Analysis and design of electronic circuits"
          },
          {
            code: "ECE340",
            name: "Semiconductor Electronics",
            description: "Physics and design of semiconductor electronic devices"
          },
          {
            code: "ECE405",
            name: "Quantum Systems II",
            description: "Advanced concepts in quantum systems for electrical engineering"
          },
          {
            code: "ECE404",
            name: "Quantum Materials",
            description: "Quantum phenomena in materials and implications for devices"
          },
          {
            code: "ECE404",
            name: "Quantum States",
            description: "Quantum state mechanics, measurement, and applications"
          }
        ]
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
      title: "Rydberg Atom Cat States",
      href: "/projects/pdfs/Rydberg%20Atom%20Cat%20States.pdf",
      dates: "",
      active: true,
      description:
        "Generated and analyzed Schrödinger (GHZ) cat states in Rydberg atom arrays using optimal‑control (RedCRAB) pulses; reported GHZ up to N=20 with ≥0.54 fidelity, phase characterization via parity oscillations, and coherence limits.",
      technologies: ["Quantum", "Rydberg Atoms", "GHZ", "Optimal Control", "RedCRAB"],
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
      image: rydberg,
      logo: "",
      video: "",
    },
    {
      title: "Purchase Order Processing App",
      href: "https://medium.com/@arjunpkulkarni/building-a-full-stack-purchase-order-processing-app-with-ocr-and-product-matching-e4ce9e6fbd9e",
      dates: "",
      active: true,
      description:
        "Purchase order processing app with OCR + product catalog matching for rapid PO verification.",
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Flask", "Python", "PostgreSQL"],
      links: [
        {
          type: "Article",
          href: "https://medium.com/@arjunpkulkarni/building-a-full-stack-purchase-order-processing-app-with-ocr-and-product-matching-e4ce9e6fbd9e",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: Purchasing,
      logo: "",
      video: "",
    },
    {
      title: "KitGen",
      href: "https://media-ai-two.vercel.app/",
      dates: "",
      active: true,
      description:
        "AI media pipeline built to streamline media kit development for creators. Features include real-time analytics, AI-crafted pitches, and customizable templates to land brand deals.",
      technologies: ["Apify", "OpenAI", "Vercel", "Next.js", "TikTok Graph API"],
      links: [
        {
          type: "Live Demo",
          href: "https://media-ai-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: KitGen,
      logo: "",
      video: "",
    },
    
    {
      title: "OpenField",
      href: "https://www.openfield.live/",
      dates: "",
      active: true,
      description:
        "Connecting under-exposed athletes with life-changing NIL opportunities, bridging the gap between local businesses, athletes, and collegiate programs for mutual growth and success.",
      technologies: ["React", "PostgreSQL", "Stripe", "Mercury"],
      links: [
        {
          type: "Live Demo",
          href: "https://www.openfield.live/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: OpenField,
      logo: "",
      video: "",
    },
    {
      title: "Hanger",
      href: "",
      dates: "",
      active: true,
      description:
        "Developed AI agent APIs with Pinecone, Next.js, and Python, enabling semantic search for eCommerce. Deployed a vertical AI stack for real-time personalization and data mining.",
      technologies: ["Pinecone", "Next.js", "Python", "AI"],
      links: [
        {
          type: "Live Demo",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: hanger,
      logo: "",
      video: "",
    },
    {
      title: "FitCheck",
      href: "https://www.fitcheck.live/",
      dates: "",
      active: true,
      description:
        "Developed a social fashion app with React, Node.js, and MongoDB. Implemented features for sharing and storing outfits, reaching over 300+ beta users on TestFlight.",
      technologies: ["React", "Node.js", "MongoDB", "TestFlight"],
      links: [
        {
          type: "Live Demo",
          href: "https://www.fitcheck.live/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: FitCheck,
      logo: fitcheckLogo,
      video: "",
    },
    {
      title: "District Four",
      href: "https://www.district-four.com/",
      dates: "",
      active: true,
      description:
        "A digital marketing agency that boosts local businesses online. We use AI agents to find leads, develop websites, and run targeted advertising campaigns for new customers.",
      technologies: ["React", "Python", "LangChain", "AI"],
      links: [
        {
          type: "Live Demo",
          href: "https://www.district-four.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: LumeLabs,
      logo: lumeLogo,
      video: "",
    },
    {
      title: "DJDoc",
      href: "https://medium.com/@arjunpkulkarni/story-of-djdoc-in-development-91e735e3d000",
      dates: "",
      active: true,
      description:
        "Developed a DJ platform with ReactJS, integrating music recommendations, cloud deployment, user auth, audio tools, and social features, helping DJs enhance their creative workflow.",
      technologies: ["ReactJS", "Cloud Deployment", "User Auth"],
      links: [
        {
          type: "Live Demo",
          href: "https://medium.com/@arjunpkulkarni/story-of-djdoc-in-development-91e735e3d000",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: DJDoc,
      logo: "",
      video: "",
    },
    {
      title: "QuantDesk",
      href: "https://medium.com/@arjunpkulkarni/building-quantdesk-a-unified-investment-dashboard-8642957f25e2",
      dates: "",
      active: true,
      description:
        "A unified platform for managing stock and cryptocurrency portfolios, offering real-time analytics, performance metrics to help investors make informed decisions.",
      technologies: ["MySQL", "Flask", "React", "Tailwind", "Pandas", "Plotly"],
      links: [
        {
          type: "Article",
          href: "https://medium.com/@arjunpkulkarni/building-quantdesk-a-unified-investment-dashboard-8642957f25e2",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: QuantDesk,
      logo: "",
      video: "",
    },
    {
      title: "StockLock",
      href: "https://medium.com/@arjunpkulkarni/stocklock-9ffa9d62aba9",
      dates: "",
      active: true,
      description:
        "Engineered a stock prediction system using NLP for sentiment analysis, regression modeling, and an AWS data pipeline to generate actionable trading insights from financial news.",
      technologies: ["NLP", "Sentiment Analysis", "Regression Modeling", "AWS"],
      links: [
        {
          type: "Live Demo",
          href: "https://medium.com/@arjunpkulkarni/stocklock-9ffa9d62aba9",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: StockLock,
      logo: "",
      video: "",
    },
    
    {
      title: "AMD Neural Layout",
      href: "https://drive.google.com/file/d/1cIw9EgpeKyzAbVeZG6P2DU4ySmb0g2T8/view",
      dates: "",
      active: true,
      description:
        "Competed in the KPMG Ideation Challenge, building an AI-aided chip design tool with the objective of refining transistor layouts for better performance and efficiency.",
      technologies: ["AI", "Chip Design"],
      links: [
        {
          type: "Live Demo",
          href: "https://drive.google.com/file/d/1cIw9EgpeKyzAbVeZG6P2DU4ySmb0g2T8/view",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: AMD,
      logo: "",
      video: "",
    },
    {
      title: "EV Insight",
      href: "https://public.tableau.com/app/profile/arjun.kulkarni/viz/EVDASHBOARD_17507097546940/Dashboard1#2",
      dates: "",
      active: true,
      description:
        "Created an interactive dashboard comparing EV brands and models based on key metrics like range, battery life, and charging time to help inform consumer decisions.",
      technologies: ["Tableau", "Data Analysis", "Data Visualization", "Data Cleaning", "Python"],
      links: [
        {
          type: "Live Demo",
          href: "https://public.tableau.com/app/profile/arjun.kulkarni/viz/EVDASHBOARD_17507097546940/Dashboard1#2",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: EVInsight,
      logo: "",
      video: "",
    },    
    
    {
      title: "Loophaus",
      href: "https://loophaus1.lovable.app/",
      dates: "",
      active: true,
      description:
        "Developed an AI music assistant using deep learning to analyze and augment MIDI files, generating novel and complex musical patterns for artists and music producers.",
      technologies: ["AI", "Deep Learning", "RNNs", "GANs", "TensorFlow", "Python"],
      links: [
        {
          type: "Live Demo",
          href: "https://loophaus.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: Loophaus,
      logo: "",
      video: "",
    },
    {
      title: "RealRoll",
      href: "https://realroll.com",
      dates: "",
      active: true,
      description:
        "Built a content-based image retrieval (CBIR) system using AI to find images based on semantic features, deployed on AWS for fast and efficient searches.",
      technologies: ["AI", "CLIP", "Image Embeddings", "Vector Search", "AWS", "FAISS"],
      links: [
        {
          type: "Live Demo",
          href: "https://realroll.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: RealRoll,
      logo: "",
      video: "",
    },
    {
      title: "PsychAItrist",
      href: "https://github.com/sumanthk123/NOBE-Tech-Project-Fall-2023",
      dates: "",
      active: true,
      description:
        "Developed an AI microexpression diagnosis app using TensorFlow for image classification, deployed in three psychiatric clinics to assist with patient assessment and improve care.",
      technologies: ["AI", "TensorFlow", "Image Classification"],
      links: [
        {
          type: "Source",
          href: "https://github.com/sumanthk123/NOBE-Tech-Project-Fall-2023",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: psych,
      logo: "/placeholder-logo.png",
      video: "",
    },
    {
      title: "MaterialsViz",
      href: "https://arjunpkulkarni.github.io/materialsMech/",
      dates: "",
      active: true,
      description:
        "Created an interactive narrative visualization exploring strength, stiffness, and density across material classes, making complex materials science data accessible and easily understandable for students.",
      technologies: ["D3.js v7", "d3-annotation"],
      links: [
        {
          type: "Live Demo",
          href: "https://arjunpkulkarni.github.io/materialsMech/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: Materials,
      logo: "",
      video: "",
    },
  ],
} as const;
