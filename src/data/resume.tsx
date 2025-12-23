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
  name: "Your Name",
  initials: "YN",
  url: "https://yourwebsite.com",
  location: "Your City",
  locationLink: "https://www.google.com/maps",
  description:
    "Software Engineer • Building innovative solutions that make a difference",
  summary:
    "Full-stack engineer passionate about creating impactful technology. Experienced in building scalable web applications, AI-powered systems, and user-centric products. Currently exploring new opportunities in software engineering and product development.",
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
    email: "your.email@example.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yourusername",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:your.email@example.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Company Name",
      href: "https://company.com/",
      badges: [],
      location: "City, State",
      title: "Software Engineer",
      logoUrl: rumorLogo,
      start: "Jan 2024",
      end: "Present",
      description:
        "Building innovative solutions and shipping features that impact thousands of users.",
      tasks: [
        {
          description: "Developed and shipped core product features using modern web technologies, improving user experience and engagement.",
          skills: ["React", "TypeScript", "Node.js"]
        },
        {
          description: "Collaborated with cross-functional teams to deliver high-quality software on schedule.",
          skills: ["Agile", "Team Collaboration", "Product Development"]
        }
      ]
    },
    {
      company: "Previous Company",
      href: "https://example.com/",
      badges: ["Startup", "Growth"],
      location: "City, State",
      title: "Senior Software Engineer",
      logoUrl: siramaiLogo,
      start: "Jan 2022",
      end: "Dec 2023",
      description:
        "Led development of core platform features and contributed to architectural decisions.",
      tasks: [
        {
          description: "Architected and implemented scalable backend systems handling high-volume traffic.",
          skills: ["System Design", "Backend", "APIs", "Scalability"]
        },
        {
          description: "Optimized database performance and caching strategies, significantly improving response times.",
          skills: ["PostgreSQL", "Redis", "Performance", "Optimization"]
        },
        {
          description: "Mentored junior engineers and contributed to engineering best practices.",
          skills: ["Mentorship", "Code Review", "Team Leadership"]
        }
      ]
    },
    {
      company: "Tech Company",
      href: "https://techcompany.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: ucsd,
      start: "Jan 2020",
      end: "Dec 2021",
      description:
        "Developed and maintained full-stack applications serving thousands of users.",
      tasks: [
        {
          description: "Built responsive web applications using modern JavaScript frameworks and best practices.",
          skills: ["React", "Node.js", "TypeScript", "Web Development"]
        },
        {
          description: "Collaborated with product and design teams to deliver user-centric features.",
          skills: ["Cross-functional", "Agile", "Product Development"]
        }
      ]
    },
    {
      company: "Startup Name",
      href: "https://startup.com/",
      badges: [],
      location: "City, State",
      title: "Junior Developer",
      logoUrl: abbvie,
      start: "Jun 2019",
      end: "Dec 2019",
      description:
        "Contributed to early-stage product development and rapid prototyping.",
      tasks: [
        {
          description: "Implemented new features and fixed bugs across the full stack.",
          skills: ["Full Stack", "JavaScript", "Python", "Git"]
        },
        {
          description: "Participated in code reviews and learned industry best practices from senior team members.",
          skills: ["Code Review", "Learning", "Growth"]
        }
      ]
    }
  ],
  research: [
    {
      company: "Research Institution",
      href: "https://university.edu/",
      badges: ["Research"],
      location: "City, State",
      title: "Research Assistant",
      logoUrl: uiuc,
      start: "Jan 2023",
      end: "Present",
      description:
        "Contributing to cutting-edge research in your field of interest.",
      tasks: [
        {
          description: "Conducted experiments and analyzed data using statistical methods.",
          skills: ["Research", "Data Analysis", "Statistics"]
        },
        {
          description: "Collaborated with research team to publish findings and present at conferences.",
          skills: ["Academic Writing", "Presentations", "Collaboration"]
        }
      ]
    },
    {
      company: "University Lab",
      href: "https://university.edu/",
      badges: [],
      location: "City, State",
      title: "Research Intern",
      logoUrl: uiuc,
      start: "Jun 2022",
      end: "Dec 2022",
      description:
        "Supported research projects and contributed to academic publications.",
      tasks: [
        {
          description: "Assisted with experimental setup and data collection for ongoing research projects.",
          skills: ["Lab Work", "Data Collection", "Research Methods"]
        },
        {
          description: "Analyzed results and contributed to research papers and presentations.",
          skills: ["Data Analysis", "Technical Writing", "Research"]
        }
      ]
    },
  ],
  clubs: [
    {
      company: "Student Organization",
      href: "https://studentorg.edu/",
      badges: [],
      location: "Campus",
      title: "Technical Lead",
      logoUrl: ibc,
      start: "Sep 2022",
      end: "May 2023",
      description:
        "Led technical projects and mentored team members in software development.",
      tasks: [
        {
          description: "Organized workshops and coding sessions for members to learn new technologies.",
          skills: ["Teaching", "Leadership", "Technical Skills"]
        },
        {
          description: "Developed club website and managed technical infrastructure.",
          skills: ["Web Development", "DevOps", "Project Management"]
        }
      ]
    },
    {
      company: "Coding Club",
      href: "https://codingclub.edu/",
      badges: [],
      location: "Campus",
      title: "Member",
      logoUrl: sigpwny,
      start: "Jan 2022",
      end: "Dec 2022",
      description:
        "Participated in hackathons and collaborative coding projects.",
      tasks: [
        {
          description: "Built projects during hackathons and competed in coding competitions.",
          skills: ["Problem Solving", "Teamwork", "Quick Prototyping"]
        },
        {
          description: "Collaborated with peers on open-source contributions and personal projects.",
          skills: ["Git", "Collaboration", "Open Source"]
        }
      ]
    },
    {
      company: "Tech Community",
      href: "https://techcommunity.org/",
      badges: [],
      location: "Remote",
      title: "Contributor",
      logoUrl: nobe,
      start: "Jan 2021",
      end: "Dec 2021",
      description:
        "Active member of online tech community, helping others learn to code.",
      tasks: [
        {
          description: "Answered questions and provided mentorship to beginners learning to code.",
          skills: ["Mentorship", "Communication", "Teaching"]
        },
        {
          description: "Created tutorials and shared knowledge about software development best practices.",
          skills: ["Technical Writing", "Content Creation", "Community Building"]
        }
      ]
    },
  ],
  partners: [
    {
      company: "Partner Organization",
      href: "https://partner.org/",
      badges: ["Partner"],
      location: "",
      title: "Collaboration",
      logoUrl: ucsd,
      start: "2024",
      end: "Present",
      description:
        "Collaborative partnership on innovative projects and initiatives.",
    },
    {
      company: "Industry Partner",
      href: "https://industrypartner.com/",
      badges: ["Collaboration"],
      location: "",
      title: "Technical Advisor",
      logoUrl: uphonest,
      start: "",
      end: "",
      description:
        "Providing technical expertise and guidance for emerging technology projects.",
    },
  ],
  education: [
    {
      school: "Your University",
      href: "https://university.edu",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: uiuc,
      start: "Sep 2020",
      end: "May 2024",
      classes: {
        "Computer Science": {
          "100-level": [
            {
              code: "CS101",
              name: "Introduction to Programming",
              description: "Fundamentals of programming and problem solving"
            },
            {
              code: "CS102",
              name: "Data Structures",
              description: "Introduction to data structures and algorithms"
            }
          ],
          "200-level": [
            {
              code: "CS201",
              name: "Algorithms",
              description: "Algorithm design and analysis"
            },
            {
              code: "CS210",
              name: "Computer Architecture",
              description: "Computer organization and architecture fundamentals"
            }
          ],
          "300-level": [
            {
              code: "CS301",
              name: "Operating Systems",
              description: "Operating system principles and design"
            },
            {
              code: "CS310",
              name: "Database Systems",
              description: "Database design and implementation"
            },
            {
              code: "CS320",
              name: "Software Engineering",
              description: "Software development lifecycle and best practices"
            },
            {
              code: "CS330",
              name: "Web Development",
              description: "Full-stack web application development"
            }
          ]
        },
        "Mathematics": {
          "100-level": [
            {
              code: "MATH101",
              name: "Calculus I",
              description: "Differential calculus"
            },
            {
              code: "MATH102",
              name: "Calculus II",
              description: "Integral calculus"
            }
          ],
          "200-level": [
            {
              code: "MATH201",
              name: "Linear Algebra",
              description: "Vector spaces and linear transformations"
            },
            {
              code: "MATH210",
              name: "Discrete Mathematics",
              description: "Mathematical structures for computer science"
            },
            {
              code: "MATH220",
              name: "Probability and Statistics",
              description: "Probability theory and statistical analysis"
            }
          ]
        }
      }
    },
  ],
  certifications: [
    {
      name: "Cloud Practitioner",
      issuer: "AWS",
      date: "2024",
      logoUrl: AWS,
    },
    {
      name: "Full Stack Development",
      issuer: "Online Learning Platform",
      logoUrl: Udemy,
      date: "2024",
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Coursera",
      logoUrl: Stanford,
      date: "2023",
    },
    {
      name: "Data Structures and Algorithms",
      issuer: "Professional Platform",
      date: "2023",
      logoUrl: java,
    },
  ],
  projects: [
    {
      title: "Full-Stack E-Commerce Platform",
      href: "https://github.com/yourusername/ecommerce-platform",
      dates: "2024",
      active: true,
      description:
        "Built a full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment processing. Implemented admin dashboard for inventory management and order tracking.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "AWS"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/yourusername/ecommerce-platform",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live Demo",
          href: "https://your-demo.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
    {
      title: "Real-Time Chat Application",
      href: "https://github.com/yourusername/chat-app",
      dates: "2024",
      active: true,
      description:
        "Developed a real-time chat application with WebSocket support, user authentication, and group messaging features. Implemented message encryption and file sharing capabilities.",
      technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB", "JWT"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/yourusername/chat-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
    {
      title: "Machine Learning Image Classifier",
      href: "https://github.com/yourusername/ml-classifier",
      dates: "2023",
      active: true,
      description:
        "Built a convolutional neural network to classify images with 95% accuracy. Implemented data augmentation techniques and transfer learning using pre-trained models.",
      technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib", "Jupyter"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/yourusername/ml-classifier",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
    {
      title: "Task Management API",
      href: "https://github.com/yourusername/task-api",
      dates: "2023",
      active: true,
      description:
        "RESTful API for task management with user authentication, CRUD operations, and filtering. Implemented with Node.js, Express, and MongoDB with comprehensive API documentation.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "REST API"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/yourusername/task-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
    {
      title: "Portfolio Website",
      href: "https://yourwebsite.com",
      dates: "2023",
      active: true,
      description:
        "Personal portfolio website showcasing projects and experience. Built with modern web technologies and optimized for performance and SEO.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      links: [
        {
          type: "Live Demo",
          href: "https://yourwebsite.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/yourusername/portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      logo: "",
      video: "",
    },
  ],
} as const;
