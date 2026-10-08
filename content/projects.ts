export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  contribution: string;
  technologies: string[];
  category: "ai" | "saas" | "platform" | "marketplace" | "gtm" | "lms" | "web";
  featured: boolean;
  isPersonal?: boolean;
  builtAt?: string;
  liveUrl?: string;
  githubUrl?: string;
  status: "production" | "completed" | "in-progress";
}

export const projects: Project[] = [
  // ── Particle Execution ──────────────────────────────────────────────────────
  {
    id: "particle-signals",
    name: "Particle Signals",
    tagline: "AI Market Intelligence for Recruiters",
    description:
      "Recruitment intelligence platform that monitors the UK market for hiring signals - funding rounds, hiring spikes, leadership changes, and Companies House filings - and surfaces decision-maker contacts with personalized outreach suggestions before job ads go live. Integrates with Teams and Slack for consultant approval workflows.",
    contribution:
      "Currently contributing to the full platform at Particle Execution - signal ingestion pipeline, AI ranking and scoring, decision-maker enrichment, outreach copy generation, and Teams/Slack approval workflow integration.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "OpenAI API",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Slack API",
      "AI Agents",
      "n8n",
    ],
    category: "gtm",
    featured: true,
    builtAt: "Particle Execution",
    status: "in-progress",
    liveUrl: "https://www.particleex.com/signals",
  },
  {
    id: "mindprint",
    name: "Mindprint",
    tagline: "Enterprise AI Agent Platform",
    description:
      "Multi-channel AI agent platform that lets companies deploy custom support and ticket-selling agents on their website via an embeddable script, and across unified messaging channels - WhatsApp, Facebook, Telegram, Instagram, and Slack.",
    contribution:
      "Core contributor on the engineering team. Worked on the AI agent pipeline with OpenAI API, knowledge-base ingestion via web scraping and document uploads, multi-tenant organization system with MFA and RBAC, real-time agent testing sandboxes, and multi-channel messaging infrastructure.",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "OpenAI API",
      "PostgreSQL",
      "AWS ECS",
      "AWS S3",
      "AWS SES",
      "Docker",
      "Zustand",
      "ShadCN",
      "Framer Motion",
      "Meta Graph API",
      "Telegram API",
      "Slack API",
    ],
    category: "ai",
    featured: true,
    builtAt: "Particle Execution",
    status: "production",
    liveUrl: "https://mindprint.co",
  },
  {
    id: "startly",
    name: "Startly",
    tagline: "AI-Powered Hiring Platform",
    description:
      "AI hiring platform built as part of the Mindprint product suite. Features automated resume parsing that evaluates candidates against custom job requirements using weighted match scores, dynamic candidate tracking, and automated online test workflows.",
    contribution:
      "Built the full platform - AI resume parsing with OpenAI API, weighted candidate scoring logic, type-safe tRPC API layer, online test workflow engine, and AWS SES email automation.",
    technologies: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "OpenAI API",
      "Drizzle ORM",
      "PostgreSQL",
      "AWS SES",
      "DaisyUI",
    ],
    category: "ai",
    featured: true,
    builtAt: "Particle Execution",
    status: "production",
  },

  // ── Zikrabyte Solutions ─────────────────────────────────────────────────────
  {
    id: "secure-visa",
    name: "Secure Visa",
    tagline: "Online Visa Application Platform",
    description:
      "End-to-end visa application platform supporting applications to any country. Features dynamic country-specific forms, real-time application tracking, secure document management on AWS S3, and integrated NMI payment processing.",
    contribution:
      "Built the entire system - dynamic form engine with country-specific field logic, JWT authentication, AWS S3 document storage, NMI payment integration, repository pattern architecture, and VPS deployment.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "AWS S3",
      "NMI Payment",
      "Brevo Mail",
      "Zustand",
      "ShadCN",
      "Tailwind CSS",
      "JWT",
      "VPS",
    ],
    category: "platform",
    featured: true,
    builtAt: "Zikrabyte Solutions",
    status: "completed",
  },
  {
    id: "my-air-deal",
    name: "My Air Deal",
    tagline: "Flight Ticket Booking Application",
    description:
      "Full-featured flight booking platform with interactive seat maps, meal and baggage selection, Razorpay payment processing, automated email confirmations, and PDF invoice generation.",
    contribution:
      "Designed and built the complete booking flow - interactive seat map UI, multi-step selection, Razorpay payment integration, invoice generation with PDFKit, Cloudinary media management, and VPS hosting.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Razorpay",
      "Cloudinary",
      "Brevo Mail",
      "PDFKit",
      "Tailwind CSS",
      "JWT",
    ],
    category: "platform",
    featured: true,
    builtAt: "Zikrabyte Solutions",
    status: "completed",
  },
  {
    id: "mindsat",
    name: "MindSAT",
    tagline: "SAT Prep Learning Management System",
    description:
      "SAT preparation platform with course enrollment, structured diagnostic tests, dynamic adaptive quizzes, assignment submissions, and media content managed via AWS S3.",
    contribution:
      "Built end-to-end - course enrollment system, diagnostic test engine, dynamic quiz workflows, assignment management, AWS S3 media pipeline, and animated UI with Framer Motion.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS S3",
      "Framer Motion",
      "Tailwind CSS",
      "JWT",
    ],
    category: "lms",
    featured: true,
    builtAt: "Zikrabyte Solutions",
    status: "completed",
  },

  // ── Freelance - Client Work ─────────────────────────────────────────────────
  {
    id: "btm-school",
    name: "BTM",
    tagline: "School Website",
    description:
      "Responsive educational institution website for a client, with dynamic image sliders, responsive layout, and automated Vercel deployment.",
    contribution: "Designed and built the responsive site with React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "Slider.js", "Vercel"],
    category: "web",
    featured: true,
    builtAt: "Freelance",
    status: "completed",
  },

  // ── Personal Projects ───────────────────────────────────────────────────────
  {
    id: "doc2heal",
    name: "Doc2Heal",
    tagline: "Telemedicine Consultation Platform",
    description:
      "Healthcare platform with real-time WebRTC video consultations, Socket.IO live chat, JWT/OTP authentication, Stripe appointment bookings, and automated CI/CD on AWS ECS.",
    contribution:
      "Personal project - engineered full stack: WebRTC video, Socket.IO chat, authentication, Stripe, Docker, and GitHub Actions CI/CD on AWS ECS.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "WebRTC",
      "Socket.IO",
      "Stripe",
      "Docker",
      "AWS ECS",
      "GitHub Actions",
      "Redux Toolkit",
      "Clean Architecture",
    ],
    category: "platform",
    featured: false,
    isPersonal: true,
    status: "completed",
  },
  {
    id: "ours-ecommerce",
    name: "OURS",
    tagline: "Full-Stack E-Commerce Marketplace",
    description:
      "Clothing marketplace with coupon systems, email OTP security, Razorpay checkout, OAuth login, and production hosting on AWS EC2 with Nginx.",
    contribution:
      "Personal project - built full marketplace: product management, cart/checkout, coupon engine, OAuth/OTP auth, AWS EC2/Nginx deployment.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Bootstrap",
      "Razorpay",
      "AWS EC2",
      "Nginx",
      "OAuth",
    ],
    category: "marketplace",
    featured: false,
    isPersonal: true,
    status: "completed",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const personalProjects = projects.filter((p) => p.isPersonal);
