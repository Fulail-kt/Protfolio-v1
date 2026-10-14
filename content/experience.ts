export interface Experience {
  id: string;
  company: string;
  companyDescription?: string;
  role: string;
  location: string;
  period: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  highlights: string[];
  technologies?: string[];
}

export const experience: Experience[] = [
  {
    id: "particle-execution",
    company: "Particle Execution",
    companyDescription: "Dubai-based digital execution agency",
    role: "Lead Full Stack & Automation Developer",
    location: "Dubai, UAE · Remote",
    period: "Sept 2024 - Present",
    startDate: "2024-09",
    current: true,
    highlights: [
      "Core contributor on Mindprint - an enterprise AI agent platform enabling companies to deploy custom support and ticket-selling agents on their website via an embeddable script, and across messaging channels including WhatsApp, Facebook, Telegram, Instagram, and Slack.",
      "Built Startly as part of the Mindprint product suite - an AI-powered hiring platform with automated resume parsing that evaluates candidates against custom job requirements using weighted match scores, dynamic candidate tracking, and AWS SES email workflows.",
      "Currently contributing to Particle Signals - an AI layer for recruitment agencies that watches companies on each consultant's patch and, when something changes (new decision-maker, funding or growth, hiring spike, or a role left open), ranks the opportunity, drafts a three-email sequence in the consultant's voice, and surfaces decision-maker contacts on demand. Nothing goes out until the consultant approves via Teams, Slack, WhatsApp, or the web queue, and sends from their own mailbox.",
      "Contributed to multi-tenant organization management with MFA, role-based access control, team member controls, and isolated agent testing sandboxes.",
      "Worked on knowledge-base ingestion pipelines using web scraping and document uploads to train contextual AI agents via OpenAI API.",
      "Developed full-stack features using Next.js, TypeScript, FastAPI, PostgreSQL, and AWS (ECS, S3, SES), deployed with Docker and CI/CD pipelines.",
      "Built client-facing automation pipelines for sales outreach using Clay, Apollo, ColdIQ, and GetSales - automating lead enrichment, copy generation, and multi-step email sequences.",
      "Integrated and automated HubSpot CRM workflows via n8n and Zapier - syncing deal stages, routing leads by signal, and triggering communication sequences.",
      "Built RAG pipelines for client products, ingesting company documents and web content into vector stores to power contextual AI agents and knowledge tools.",
      "Implemented GTM signal monitoring using PredictLeads and Apollo to surface funding rounds, hiring spikes, and leadership changes into automated outreach workflows.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "OpenAI API",
      "PostgreSQL",
      "AWS ECS",
      "Docker",
      "n8n",
      "Clay",
      "Apollo",
      "HubSpot",
      "ColdIQ",
      "Meta Graph API",
      "Telegram API",
    ],
  },
  {
    id: "zikrabyte",
    company: "Zikrabyte Solutions",
    companyDescription: "Software development agency",
    role: "Full Stack Developer",
    location: "Bengaluru, Karnataka",
    period: "May 2024 - Sept 2024",
    startDate: "2024-05",
    endDate: "2024-09",
    current: false,
    highlights: [
      "Built Secure Visa - an online visa application platform with dynamic country-specific forms, real-time application tracking, JWT authentication, NMI payment integration, AWS S3 document storage, and repository pattern architecture.",
      "Developed MindSAT - an SAT prep learning management system with course enrollment, diagnostic tests, dynamic adaptive quizzes, assignment submissions, and AWS S3 media management.",
      "Built My Air Deal - a flight booking application with interactive seat maps, meal and baggage selection, Razorpay payment integration, and PDF invoice generation via PDFKit.",
      "Worked across a TypeScript-first full-stack using Next.js, Node.js, MongoDB, and AWS, deploying to VPS environments.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "AWS S3",
      "NMI Payment",
      "Razorpay",
      "Framer Motion",
      "Tailwind CSS",
      "JWT",
      "ShadCN",
      "Zustand",
    ],
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "MERN Stack Developer",
    location: "Calicut, Kerala",
    period: "Nov 2023 - May 2024",
    startDate: "2023-11",
    endDate: "2024-05",
    current: false,
    highlights: [
      "Built BTM - a responsive school website for a client with dynamic image sliders and Vercel deployment.",
      "Delivered full-stack web projects for multiple clients across education, business, and service verticals - including landing pages, admin dashboards, and custom CMS integrations.",
      "Engineered Doc2Heal - a telemedicine platform with real-time WebRTC video consultations, Socket.IO live chat, JWT/OTP authentication, Stripe payments, and GitHub Actions CI/CD on AWS ECS.",
      "Built OURS - a full-stack clothing e-commerce marketplace with coupon systems, email OTP, Razorpay checkout, OAuth login, and AWS EC2/Nginx hosting.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "WebRTC",
      "Socket.IO",
      "AWS",
      "Docker",
      "Stripe",
      "Razorpay",
    ],
  },
];
