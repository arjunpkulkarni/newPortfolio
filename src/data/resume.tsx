import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, GraduationCapIcon, BriefcaseIcon } from "lucide-react";

import Culin from "../app/projects/pictures/culin.png";
import FitCheck from "../app/projects/pictures/fitcheck.png";
import LumeLabs from "../app/projects/pictures/lumelabs.png";
import Siramai from "../app/projects/pictures/siramai.png";
import DJDoc from "../app/projects/pictures/djdoc.png";
import StockLock from "../app/projects/pictures/stocklock.png";
import AMD from "../app/projects/pictures/neural.png";
import EVInsight from "../app/projects/pictures/evInsight.png";

import hanger from "../app/work/pictures/hanger.png";
import abbvie from "../app/work/pictures/abbvie.png";
import nobe from "../app/work/pictures/nobe.png";
import ibc from "../app/work/pictures/ibc.png";
import sigpwny from "../app/work/pictures/sigpwny.png";

import culinLogo from "../app/projects/pictures/logos/culinLogo.png";
import siramaiLogo from "../app/projects/pictures/logos/siramaiLogo.png";
import fitcheckLogo from "../app/projects/pictures/logos/fitcheckLogo.png";
import lumeLogo from "../app/projects/pictures/logos/lumeLogo.png";

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
    "Full Stack Developer and Materials Engineer",
  summary:
    "Collaborated with multiple research labs, startups, and companies to build AI-powered solutions end-to-end, merging full-stack engineering with machine-learning insight.",
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
      company: "Hanger",
      href: "https://www.hanger.live/",
      badges: [],
      location: "Remote",
      title: "Founding Engineer",
      logoUrl: hanger,
      start: "Jan 2023",
      end: "Present",
      description:
        "Disrupting the $100B+ fashion industry by building an AI-powered platform for centralized shopping. Developed recommendation systems and personalization models to enhance user experience. Currently working alongside Intel. Developed over 100k lines of code. Download now on the App Store.",
      tasks: [
        {
          description: "Built a mobile app for iOS and Android using React Native, implementing real-time personalization through collaborative filtering and content-based recommendation models.",
          skills: ["React Native", "TypeScript", "TensorFlow", "Recommendation Systems"]
        },
        {
          description: "Developed a web app with Next.js, integrating a hybrid recommendation system combining user behavior analysis, product embeddings, and contextual features.",
          skills: ["React", "Next.js", "PyTorch", "Vector Embeddings"]
        },
        {
          description: "Created a Chrome extension with ML-powered product classification and similarity matching, enabling intelligent product saving and categorization.",
          skills: ["JavaScript", "TensorFlow.js", "Computer Vision", "Webpack"]
        },
        {
          description: "Implemented a backend system using Node.js and GPT-4 for natural language processing and personalization.",
          skills: ["Node.js", "GPT-4", "NLP", "Personalization Models"]
        }
      ]
    },
    {
      company: "AbbVie",
      href: "https://www.abbvie.com/",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: abbvie,
      start: "Dec 2024",
      end: "Jun 2025",
      description:
        "Developed interactive dashboard with Streamlit, pandas and matplotlib to visualize document reuse across disease states. Improved transparency with overlap analysis for 30+ clients; automated data ingestion cut manual reporting by 50%.",
      tasks: [
        {
          description: "Developed interactive dashboard with Streamlit, pandas and matplotlib to visualize document reuse across disease states.",
          skills: ["Python", "Streamlit", "Pandas", "Matplotlib"]
        },
        {
          description: "Improved transparency with overlap analysis for 30+ clients; automated data ingestion cut manual reporting by 50%.",
          skills: ["Data Analysis", "Automation", "Client Management"]
        }
      ]
    }
  ],
  research: [
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
      location: "In-Person",
      title: "Artificial Intelligence Research Assistant",
      logoUrl: uiuc,
      start: "Jan 忡25",
      end: "Mar 2025",
      description:
        "Developed an experimental platform using React, Firebase, MongoDB, and OpenAI API to study human-AI creativity. Engineered a cooperative version of the Alternate Uses Test, enabling controlled testing of collective intelligence.",
      tasks: [
        {
          description: "Designed and implemented a web-based platform for conducting psychology experiments on human-AI collaboration.",
          skills: ["React", "Node.js", "MongoDB", "GPT-4 API"]
        },
        {
          description: "Developed a data collection and analysis pipeline to evaluate the creative output from the experiments.",
          skills: ["Python", "Pandas", "Jupyter Notebooks", "Matplotlib"]
        }
      ]
    },
    {
      company: "UofI Information Department",
      href: "https://ischool.illinois.edu/",
      badges: [],
      location: "In-Person",
      title: "Artificial Intelligence Research Assistant",
      logoUrl: uiuc,
      start: "Jun 2023",
      end: "Aug 2023",
      description:
        "Optimized DDPG algorithm to reduce traffic congestion for AVs by 25% via hyperparameter optimization and codebase refactoring. Developed a RAG system using LangChain to tackle traffic optimization, achieving 30% faster results than previous methods.",
      tasks: [
        {
          description: "Fine-tuned Deep Deterministic Policy Gradient (DDPG) algorithms to reduce traffic congestion in a simulated environment by 20%.",
          skills: ["Python", "TensorFlow", "SUMO", "Reinforcement Learning"]
        },
        {
          description: "Built a Retrieval-Augmented Generation (RAG) system with LangChain and OpenAI to answer traffic-related queries.",
          skills: ["LangChain", "OpenAI API", "Vector Databases", "Python"]
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
          } // hello
        ],
        "Electrical Engineering": [
          {
            code: "ECE205",
            name: "Electronic and Electrical Circuits",
            description: "Analysis and design of electronic circuits"
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
      title: "Culin",
      href: "https://www.culin.net/",
      dates: "",
      active: true,
      description:
        "Working alongside Lav R. Varshney, White House Fellow, James Briscione, author of The Flavor Matrix, and UCSD Medicine & Keisuke Nakagawa, M.D. to build a medicinal culinary application.",
      technologies: ["Next.js", "LangChain", "Scrapy", "Direct Acyclic Graphs"],
      links: [
        {
          type: "Live Demo",
          href: "https://www.culin.net/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: Culin,
      logo: culinLogo,
      video: "",
    },
    {
      title: "Siramai",
      href: "https://siramai.com/",
      dates: "",
      active: true,
      description:
        "Built 3 AI agent APIs using Pinecone, Next.js, and Python; enabled semantic text + image search for eCommerce platforms. Deployed vertical AI stack with real-time personalization and data mining, enabling retailers to drive revenue growth easily.",
      technologies: ["Pinecone", "Next.js", "Python", "AI"],
      links: [
        {
          type: "Live Demo",
          href: "https://siramai.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: Siramai,
      logo: siramaiLogo,
      video: "",
    },
    {
      title: "FitCheck",
      href: "https://www.fitcheck.live/",
      dates: "",
      active: true,
      description:
        "Developed using React + NodeJS & MongoDB. Implemented FitCheck sharing & storing among 300+ beta users on TestFlight.",
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
        "Digital Marketing Agency that helps local businesses grow their online presence. Using AI agents to find leads for local businesses from local directories, then developing websites for them, and running ads to get more customers.",
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
        "Used ReactJS to develop DJ platform integrating recommendations, cloud deployment, user auth, audio tools, and social features.",
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
      title: "StockLock",
      href: "https://medium.com/@arjunpkulkarni/stocklock-9ffa9d62aba9",
      dates: "",
      active: true,
      description:
        "Built a stock prediction system using NLP-based sentiment analysis, regression modeling, and AWS data pipeline for insights.",
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
        "Competed in KPMG Ideation Challenge, where we built a AI aided chip design tool with the objective of Transistor Layout Refinement.",
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
        "Compared different EV brands and models based on their range, battery life, and charging time.",
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
      title: "QuantSuite",
      href: "https://github.com/arjunpkulkarni/crypto",
      dates: "",
      active: true,
      description:
        "Built a multithreaded, parallelized C++ quant engine for 10+ cryptocurrencies, slashing latency 25% and boosting fill rates.",
      technologies: ["C++", "Multithreading", "Parallelization"],
      links: [
        {
          type: "Live Demo",
          href: "https://github.com/arjunpkulkarni/crypto",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      logo: "/placeholder-logo.png",
      video: "",
    },
    {
      title: "InvestIQ",
      href: "https://github.com/arjunpkulkarni/InvestmentManagement",
      dates: "",
      active: true,
      description:
        "Investment Portfolio Management System developed with Python, connected to Excel files & Robinhood API, used by me to manage my own portfolio.",
      technologies: ["Python", "Excel", "Robinhood API"],
      links: [
        {
          type: "Live Demo",
          href: "https://github.com/arjunpkulkarni/InvestmentManagement",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      logo: "/placeholder-logo.png",
      video: "",
    },
    {
      title: "PsychAItrist",
      href: "https://github.com/sumanthk123/NOBE-Tech-Project-Fall-2023",
      dates: "",
      active: true,
      description:
        "Developed an AI-based microexpression diagnosis app with TensorFlow for image classification, deployed to 3 psychiatric clinics.",
      technologies: ["AI", "TensorFlow", "Image Classification"],
      links: [
        {
          type: "Source",
          href: "https://github.com/sumanthk123/NOBE-Tech-Project-Fall-2023",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      logo: "/placeholder-logo.png",
      video: "",
    },
    
  ],
} as const;
