export const profile = {
  name: "Pushpraj Dwivedi",
  role: "Backend & DevOps Engineer",
  lead: "I build scalable, reliable systems — messaging infrastructure, multi-tenant platforms, and the pipelines that ship them.",
  email: "pushprajdwivedi001@gmail.com",
  github: "https://github.com/pushpraj-rmx",
  linkedin: "https://linkedin.com/in/pushpraj-rmx",
}

export type Link = { label: string; href: string }

export const stats = [
  { value: "6", label: "surfaces, one platform", note: "API, web, desktop, mobile, storefront, docs" },
  { value: "7", label: "platforms shipped", note: "end to end, API through UI" },
  { value: "4", label: "live production services", note: "msgbuddy.com, app, api, docs" },
]

export const flagship = {
  name: "MsgBuddy",
  tagline: "Customer messaging platform for teams",
  plain:
    "Lets support and sales teams handle every customer conversation and marketing campaign from one shared inbox — across WhatsApp, Telegram, email and SMS, on the web, desktop or phone.",
  blurb:
    "A production multi-channel messaging platform — WhatsApp, Telegram, email and SMS — built and shipped end to end. Workspaces, contacts, a shared inbox, templates, campaigns, automation, a voice agent and subscription commerce sit on one multi-tenant API, delivered through five clients and documented in a full product handbook. It also ships as a single-tenant build for enterprise customers.",
  tech: [
    "NestJS 11",
    "PostgreSQL",
    "Prisma 7",
    "BullMQ",
    "Redis",
    "Next.js",
    "Electron",
    "Expo",
    "WhatsApp Cloud API",
  ],
  links: [
    { label: "msgbuddy.com", href: "https://msgbuddy.com" },
    { label: "Web app", href: "https://app.msgbuddy.com" },
    { label: "Handbook", href: "https://docs.msgbuddy.com" },
    { label: "API docs", href: "https://api.msgbuddy.com/v2/docs" },
  ] as Link[],
  shots: [
    { src: "/shots/msgbuddy-site.jpg", alt: "The MsgBuddy marketing site", caption: "msgbuddy.com" },
    { src: "/shots/msgbuddy-handbook.jpg", alt: "The MsgBuddy Handbook documentation site", caption: "docs.msgbuddy.com — 17 chapters" },
  ],
  surfaces: [
    {
      name: "API",
      blurb:
        "Multi-tenant NestJS core — JWT access tokens with rotating refresh, encrypted fields, queue-backed delivery and a published OpenAPI spec.",
      tech: ["NestJS 11", "Prisma 7", "BullMQ", "Swagger"],
    },
    {
      name: "Web app",
      blurb:
        "The primary client. Short-lived access tokens refresh silently on 401 against HttpOnly rotating refresh cookies.",
      tech: ["Next.js", "TypeScript", "Axios"],
    },
    {
      name: "Desktop",
      blurb:
        "macOS and Windows shell with a persistent session, in-window OAuth, deep links, tray-resident realtime and auto-update.",
      tech: ["Electron", "electron-updater"],
    },
    {
      name: "Mobile",
      blurb: "React Native client sharing the same API surface as web and desktop.",
      tech: ["React Native", "Expo"],
    },
    {
      name: "Storefront",
      blurb:
        "White-label per-merchant subscription storefront. Tenant branding is resolved server-side and injected as CSS variables, so there is no flash and pages stay indexable.",
      tech: ["Next.js", "Server Components", "WhatsApp OTP"],
    },
    {
      name: "Handbook",
      blurb:
        "Customer-facing product manual — seventeen chapters of plain-language guides with worked examples and 60+ diagrams.",
      tech: ["Nextra", "MDX", "Mermaid"],
    },
  ],
}

export type Project = {
  name: string
  plain: string
  tagline: string
  blurb: string
  tech: string[]
}

export const projects: Project[] = [
  {
    name: "Synapse",
    plain: "Connects a company's existing systems to WhatsApp so it can send and receive business messages reliably, at volume.",
    tagline: "WhatsApp Business messaging microservice",
    blurb:
      "A standalone service wrapping the Meta Graph API — template-based outbound messaging, inbound webhook verification, structured logging, rate limiting and request validation behind a typed interface.",
    tech: ["TypeScript", "Express", "Meta Graph API", "Winston"],
  },
  {
    name: "The Panipat Handloom",
    plain: "Moved a handloom retailer's ageing online store onto a modern stack — without losing a product, an order or its search ranking.",
    tagline: "Django → TypeScript platform migration",
    blurb:
      "Rebuilt a legacy Django storefront as a pnpm monorepo: a NestJS API with OpenAPI, a Next.js 15 storefront and a React-Admin console, plus ETL scripts that carried the original data across intact.",
    tech: ["NestJS", "Next.js 15", "React-Admin", "Prisma", "Neon Postgres"],
  },
  {
    name: "Bhartiya Aviation Services",
    plain: "Runs aviation recruitment end to end — applications, online exams, scheduling and paperwork — for candidates and staff alike.",
    tagline: "Recruitment & examination platform",
    blurb:
      "Marketing site, candidate portal and admin panel over a single backend, with a dedicated worker tier handling email, PDF, CSV and calendar jobs.",
    tech: ["NestJS", "Prisma", "Next.js", "BullMQ", "Zod", "Docker"],
  },
  {
    name: "Vision360",
    plain: "Lets an optical chain run stock, sales and franchise stores across many locations from a single system.",
    tagline: "Optical commerce & franchise management",
    blurb:
      "A Turborepo monorepo for multi-store retail, sharing typed contracts between the API and web app so a React Native client can reuse them later.",
    tech: ["Turborepo", "NestJS", "Next.js 15", "Prisma"],
  },
  {
    name: "Plan & Book Trip",
    plain: "Sells and manages travel packages online, payments included, with an admin console for the operator.",
    tagline: "Travel booking & package management",
    blurb:
      "Public booking site, admin console and payment checkout, split into two independently deployed applications over a modular monolith API.",
    tech: ["NestJS", "Prisma", "Redis", "BullMQ", "Razorpay", "Next.js 16"],
  },
  {
    name: "SearchArchitect",
    plain: "Helps clients find and hire architects, with structured briefs that carry budget and timeline from the first message.",
    tagline: "Architect listing & hiring marketplace",
    blurb:
      "Architects publish and manage portfolios; clients search and hire them through structured project requests carrying budget and timeline.",
    tech: ["TypeScript", "NestJS", "PostgreSQL", "React"],
  },
]

export const tooling = {
  name: "NestJS Production Template",
  blurb:
    "A batteries-included NestJS starter for real SaaS workloads — ESM, strict TypeScript, Zod-validated environment config, Prisma, Redis, queues and auth wired up from the start.",
  tech: ["NestJS", "ESM", "Zod", "Prisma", "Redis"],
}

export const services = [
  {
    title: "Platform build-out",
    body: "Design and ship a multi-tenant product end to end — API, web, mobile and desktop clients, auth, background jobs, payments and documentation.",
  },
  {
    title: "Legacy migration",
    body: "Move an ageing PHP, Django or Laravel system onto a modern TypeScript stack, carrying the existing data across intact.",
  },
  {
    title: "Messaging & WhatsApp integration",
    body: "WhatsApp Business and Cloud API work: template messaging, inbound webhooks, bulk delivery, rate limiting and retry handling.",
  },
  {
    title: "DevOps & delivery",
    body: "Dockerised environments, CI/CD pipelines, VPS deployment and process management, so shipping stops being an event.",
  },
]

export const stack = [
  { group: "Frontend", items: ["React", "Next.js", "Vite", "TypeScript", "Tailwind CSS", "shadcn/ui"] },
  { group: "Backend", items: ["Node.js", "NestJS", "Express", "Prisma", "BullMQ"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "Redis", "SQLite"] },
  { group: "DevOps", items: ["Linux", "Docker", "GitHub Actions", "CI/CD", "VPS", "pm2"] },
]
