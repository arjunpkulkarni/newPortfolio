import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, GraduationCapIcon, BriefcaseIcon } from "lucide-react";

import Culin from "../app/projects/pictures/culin.png";
import FitCheck from "../app/projects/pictures/fitcheck.png";
import LumeLabs from "../app/projects/pictures/lumelabs.png";
import Siramai from "../app/projects/pictures/siramai.png";
import DJDoc from "../app/projects/pictures/djdoc.png";
import StockLock from "../app/projects/pictures/stocklock.png";
import AMD from "../app/projects/pictures/neural.png";

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
      href: "#",
      badges: [],
      location: "Remote",
      title: "Founding Engineer",
      logoUrl: hanger,
      start: "Jan 2023",
      end: "Present",
      description:
        "Disrupting the $100B+ fashion industry by building a platform for centralized shopping. Currently working alongside Intel. Developed over 100k lines of code. Download now on the App Store.",
      tasks: [
        {
          description: "Built a mobile app for iOS and Android using React Native, creating a personalized centralized shopping experience.",
          skills: ["React Native", "TypeScript", "Redux", "Expo"]
        },
        {
          description: "Developed a web app for centralized shopping, providing a seamless user experience across devices.",
          skills: ["React", "Next.js", "Tailwind CSS", "Vercel"]
        },
        {
          description: "Created a Chrome extension to save products from any website, enhancing the platform's usability.",
          skills: ["JavaScript", "HTML", "CSS", "Webpack"]
        },
        {
          description: "Developed an Instagram DM bot using the Instagram Graph API to engage with users and drive traffic to the platform.",
          skills: ["Node.js", "Instagram Graph API", "Messenger Platform API", "OAuth"]
        }
      ]
    },
    {
      company: "AbbVie",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: abbvie,
      start: "Dec 2024",
      end: "Jun 2025",
      description:
        "Collaborating with pharmaceutical experts to develop machine learning models for analyzing drug efficacy and predicting patient responses. Leveraging tools like TensorFlow and Scikit-learn to build predictive systems, while utilizing real-world datasets to optimize clinical trial outcomes. Integrating Python-based solutions with cloud technologies for scalable and efficient analysis pipelines.",
      tasks: [
        {
          description: "Developed and trained machine learning models to predict drug efficacy, achieving a 15% improvement in prediction accuracy.",
          skills: ["Python", "TensorFlow", "Scikit-learn", "Pandas"]
        },
        {
          description: "Built and maintained a scalable data pipeline on AWS for processing and analyzing clinical trial data.",
          skills: ["AWS (S3, EC2, Lambda)", "Python", "Docker"]
        },
        {
          description: "Created interactive dashboards to visualize model predictions and clinical data for pharmaceutical experts.",
          skills: ["Tableau", "SQL", "Data Visualization"]
        }
      ]
    },
    
  ],
  research: [
    {
      company: "Beckman Institute for Advanced Science and Technology",
      href: "#",
      badges: [],
      location: "In-Person",
      title: "Artificial Intelligence Research Assistant",
      logoUrl: uiuc,
      start: "Jan 2025",
      end: "Mar 2025",
      description:
        "Engineered experimental platform enabling structured evaluation of human-AI co-creativity using GPT-4 and Alternate Uses Test framework.",
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
      href: "#",
      badges: [],
      location: "In-Person",
      title: "Artificial Intelligence Research Assistant",
      logoUrl: uiuc,
      start: "Jun 2023",
      end: "Aug 2023",
      description:
        "Optimized DDPG algorithms for traffic congestion reduction, developed a RAG system using LangChain and OpenAI, and utilized various tools like Python, SUMO, and ROS for simulation and development.",
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
      href: "#",
      badges: [],
      location: "In-Person",
      title: "Computational Materials Research Assistant",
      logoUrl: uiuc,
      start: "Sep 2022",
      end: "Dec 2022",
      description:
        "Conducted data-driven research in material science, developing a new concrete mixture and predicting material durability using Random Forest models.",
      tasks: [
        {
          description: "Developed a predictive model for material durability using Random Forest, achieving 95% accuracy.",
          skills: ["Python", "Scikit-learn", "Pandas", "XGBoost"]
        },
        {
          description: "Analyzed experimental data to formulate a new, more durable concrete mixture, resulting in a 10% increase in strength.",
          skills: ["Jupyter Notebooks", "Matplotlib", "Data Analysis", "Materials Science"]
        }
      ]
    },
  ],
  clubs: [
    {
      company: "Illinois Business Consulting",
      href: "#",
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
      href: "#",
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
      href: "#",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: nobe,
      start: "Jul 2023",
      end: "Dec 2023",
      description:
        "Implemented UI components for mobile applications using React Native and Bootstrap. Prototyped designs in Figma and integrated with Flask-based backend, ensuring smooth and responsive user interfaces.",
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
      degree: "Materials Engineering and Computer Science",
      logoUrl: uiuc,
      start: "Sep 2022",
      end: "May 2026",
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
        "Developed 3 AI APIs enabling semantic search and real-time personalization for eCommerce, driving retailer revenue, using Pinecone, Next.js, and Python, basically a vertical AI stack.",
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
      title: "LumeLabs",
      href: "https://www.lumelabs.org/",
      dates: "",
      active: true,
      description:
        "AI agents to find leads for B2B SaaS agency from local directories, then developing websites for them. Developed with React, Python, and LangChain.",
      technologies: ["React", "Python", "LangChain", "AI"],
      links: [
        {
          type: "Live Demo",
          href: "https://www.lumelabs.org/",
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
      image: "",
      logo: "",
      video: "",
    },
  ],
} as const;
