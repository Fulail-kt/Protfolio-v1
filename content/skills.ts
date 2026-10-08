export interface SkillGroup {
  category: string;
  primary: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    primary: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Zustand",
      "Redux",
      "RTK Query",
      "Framer Motion",
      "ShadCN",
      "MUI",
      "DaisyUI",
      "Bootstrap",
      "WebRTC",
      "Tanstack Start",
      "Vue",
      "React Native",
    ],
  },
  {
    category: "Backend",
    primary: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "tRPC",
      "REST API",
      "Socket.IO",
      "RabbitMQ",
      "Drizzle ORM",
      "SQLAlchemy",
      "OOP",
      "MVC",
      "Clean Architecture",
      "Repository Pattern",
      "Nest.js",
      "GraphQL",
    ],
  },
  {
    category: "Database",
    primary: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis"],
  },
  {
    category: "Integrations & AI",
    primary: [
      "OpenAI API",
      "AI Agents",
      "RAG Systems",
      "Meta Graph API",
      "Telegram API",
      "Slack API",
      "AWS SES",
      "AWS S3",
      "Stripe",
      "Razorpay",
      "NMI",
      "Firebase",
      "Cloudinary",
      "JWT",
      "TMDB",
    ],
  },
  {
    category: "Automation & GTM",
    primary: [
      "n8n",
      "Zapier",
      "Make",
      "HubSpot",
      "Clay",
      "Apollo",
      "GetSales",
      "PredictLeads",
      "ColdIQ",
    ],
  },
  {
    category: "Deployment",
    primary: [
      "Docker",
      "Nginx",
      "AWS (EC2, ECS, IAM)",
      "GitHub Actions",
      "CI/CD",
      "AWS Amplify",
      "Railway",
      "Atlas",
      "Render",
      "Netlify",
      "Vercel",
    ],
  },
  {
    category: "Architecture & Process",
    primary: [
      "Clean Architecture",
      "Microservices",
      "Repository Pattern",
      "Agile / Scrum",
      "OOP",
      "MVC",
      "SDLC",
      "System Design",
    ],
  },
  {
    category: "Tools & Design",
    primary: [
      "Git",
      "GitHub",
      "Figma",
      "XD",
      "Jira",
      "Linear",
      "Notion",
      "Eraser.io",
      "Miro",
      "Cursor",
      "Claude Code",
      "Codex",
      "Copilot",
      "Antigravity",
    ],
  },
  {
    category: "Data Structures",
    primary: [
      "Linked List",
      "Stack",
      "Queue",
      "HashMap",
      "Tree",
      "Trie",
      "Graph",
      "Heap",
      "Searching",
      "Sorting",
    ],
  },
];

export const automationWork = [
  {
    title: "Sales Outreach Automation",
    description:
      "Built end-to-end outbound sales pipelines using Clay, Apollo, and ColdIQ - automating lead sourcing, enrichment, personalized copy generation, and multi-step email sequences for clients.",
  },
  {
    title: "CRM Workflow Automation",
    description:
      "Integrated and automated HubSpot CRM workflows using n8n and Zapier - syncing deal stages, triggering email sequences, and routing leads based on behavior signals.",
  },
  {
    title: "RAG Pipelines for Client Products",
    description:
      "Built retrieval-augmented generation pipelines that ingest company documents, websites, and structured data into vector stores to power contextual AI agents and internal knowledge tools.",
  },
  {
    title: "GTM Signal Monitoring",
    description:
      "Engineered automated signal-monitoring systems using PredictLeads and Apollo data to surface hiring spikes, funding events, and leadership changes - feeding them into outreach workflows.",
  },
  {
    title: "In-House Process Automation",
    description:
      "Automated internal operational workflows at Particle Execution - from client onboarding and reporting pipelines to cross-tool data sync between CRM, communication tools, and project management.",
  },
];

export const automationHasMore = true;

export const interests = [
  {
    title: "Agentic AI Systems",
    description:
      "Building multi-step AI agents that use tools, maintain context, and take autonomous action - moving beyond simple prompt-response patterns.",
  },
  {
    title: "RAG & Knowledge Systems",
    description:
      "Designing retrieval-augmented generation pipelines that ground LLM responses in company-specific knowledge bases built from structured and unstructured sources.",
  },
  {
    title: "GTM Engineering",
    description:
      "Building sales and GTM infrastructure - signal monitoring, lead enrichment, automated outreach, and CRM integrations that connect data to revenue workflows.",
  },
  {
    title: "Multi-Channel Messaging",
    description:
      "Engineering unified messaging layers across WhatsApp, Telegram, Instagram, Slack, and web - with consistent state, routing logic, and fallback handling.",
  },
  {
    title: "Full-Stack Architecture",
    description:
      "Designing scalable system architectures with clean separation between frontend, API, and data layers - TypeScript end-to-end where possible.",
  },
  {
    title: "Workflow Automation",
    description:
      "Using n8n, Zapier, and Make to build automation pipelines that connect products, reduce manual work, and surface data where teams need it.",
  },
];
