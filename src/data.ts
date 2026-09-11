export const profile = {
  name: "Pushpraj Dwivedi",
  role: "Backend & DevOps Engineer",
  lead: "I build scalable, reliable systems — messaging infrastructure, multi-tenant platforms, and the pipelines that ship them.",
  email: "pushprajdwivedi001@gmail.com",
  github: "https://github.com/pushpraj-rmx",
  linkedin: "https://linkedin.com/in/pushpraj-rmx",
}

export type Project = {
  name: string
  tagline: string
  blurb: string
  tech: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: "MsgBuddy",
    tagline: "Multi-channel messaging platform",
    blurb:
      "A multi-tenant messaging API covering workspaces, contacts, conversations, campaigns and templates, with WhatsApp Cloud API delivery running through a Redis-backed job queue.",
    tech: ["NestJS 11", "PostgreSQL", "Prisma", "BullMQ", "Redis", "JWT", "OpenAPI"],
    featured: true,
  },
  {
    name: "Bhartiya Aviation Services",
    tagline: "Recruitment & examination platform",
    blurb:
      "Marketing site, candidate portal and admin panel over a single backend, with a dedicated worker tier handling email, PDF, CSV and calendar jobs.",
    tech: ["NestJS", "Prisma", "Next.js", "BullMQ", "Zod", "Docker"],
  },
  {
    name: "Vision360",
    tagline: "Optical commerce & franchise management",
    blurb:
      "A Turborepo monorepo for multi-store retail, sharing typed contracts between the API and web app so a React Native client can reuse them later.",
    tech: ["Turborepo", "NestJS", "Next.js 15", "Prisma", "TypeScript"],
  },
  {
    name: "Plan & Book Trip",
    tagline: "Travel booking & package management",
    blurb:
      "Public booking site, admin console and payment checkout, split into two independently deployed applications over a modular monolith API.",
    tech: ["NestJS", "Prisma", "Redis", "BullMQ", "Razorpay", "Next.js 16"],
  },
  {
    name: "SearchArchitect",
    tagline: "Architect listing & hiring marketplace",
    blurb:
      "Architects publish and manage portfolios; clients search and hire them through structured project requests carrying budget and timeline.",
    tech: ["TypeScript", "NestJS", "PostgreSQL", "React"],
  },
]

export const stack = [
  { group: "Frontend", items: ["React", "Next.js", "Vite", "TypeScript", "Tailwind CSS", "shadcn/ui"] },
  { group: "Backend", items: ["Node.js", "NestJS", "Express", "Prisma", "BullMQ"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "Redis", "SQLite"] },
  { group: "DevOps", items: ["Linux", "Docker", "GitHub Actions", "CI/CD", "VPS"] },
]
