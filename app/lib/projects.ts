export type ProjectVideo =
  | { type: "youtube"; id: string }
  | { type: "vimeo"; id: string }
  | { type: "file"; src: string };

export type ClientProject = {
  id: string;
  title: string;
  client: string;
  summary: string;
  details: string[];
  /** Live client / product URL */
  url: string;
  /** Optional industry or tech tags */
  tags: string[];
  /** YouTube/Vimeo id or local file under /public */
  video?: ProjectVideo;
  /** Cover image under /public (used when no video poster) */
  coverImage?: string;
};

/**
 * Add your real client work here.
 * Videos:
 * - YouTube: { type: "youtube", id: "dQw4w9WgXcQ" }
 * - Vimeo:   { type: "vimeo", id: "123456789" }
 * - Local:   put file in public/videos/ then { type: "file", src: "/videos/my-demo.mp4" }
 */
export const clientProjects: ClientProject[] = [
  {
    id: "fxdc-campus",
    title: "FXDC Campus — Forex & Crypto Learning Platform",
    client: "FXDC Labs",
    summary:
      "A full trading education platform with courses, live workshops, signals, and Web3 services for Forex and crypto learners.",
    details: [
      "Built a marketing + learning experience for Foundation, Masterclass, and Advanced trading programs",
      "Structured course paths, enrollment CTAs, and live workshop discovery",
      "Added trading tools messaging for automated bots, signals, and account management services",
    ],
    url: "https://fxdc-labs.vercel.app/",
    tags: ["EdTech", "FinTech", "Next.js", "Web Platform"],
    coverImage: "/images/finance.jpeg",
  },
  {
    id: "taskforce",
    title: "TaskForce — Task & Workforce Management",
    client: "TaskForce",
    summary:
      "A workforce task management product with secure authentication so teams can sign in and manage day-to-day work.",
    details: [
      "Delivered a login and account flow for workforce users",
      "Designed around task assignment, tracking, and operational coordination",
      "Shipped as a responsive web app ready for team onboarding",
    ],
    url: "https://task-management-brown-eta-26.vercel.app/login",
    tags: ["SaaS", "Auth", "Operations", "Web App"],
    coverImage: "/images/office1.png",
  },
  {
    id: "clubshop",
    title: "Clubshop — Gaming Club Website Platform",
    client: "Clubshop",
    summary:
      "A no-code style platform where gaming clubs create professional sites with isolated workspaces and their own subdomains.",
    details: [
      "Built a multi-tenant platform for club website creation and login",
      "Enabled isolated workspaces per club with subdomain hosting",
      "Focused on a clean onboarding path: create website or log in",
    ],
    url: "https://clubsite-tau.vercel.app/",
    tags: ["Multi-tenant", "SaaS", "Gaming", "Platform"],
    coverImage: "/images/ecommerce.jpeg",
  },
  {
    id: "cat-selling-india",
    title: "Cat Selling Platform — India",
    client: "Cat Shop India",
    summary:
      "An India-focused cat selling website for listing and selling cats — not a global marketplace.",
    details: [
      "Built for cat selling customers and sellers in India only",
      "Clear cat profiles with photos, age, and care details for local buyers",
      "Simple browse and enquiry/checkout flow tailored to the Indian market",
    ],
    url: "https://cat-shop-frontend-sand.vercel.app/",
    tags: ["Cat Selling", "India", "Web App", "Local Business"],
    coverImage: "/images/healthcare.jpeg",
  },
];

export function getFeaturedProjects(limit = 4) {
  return clientProjects.slice(0, limit);
}
