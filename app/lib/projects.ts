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
    id: "nordic-portal",
    title: "Customer Portal Modernization",
    client: "Nordic Enterprise Client",
    summary:
      "Rebuilt a legacy customer portal into a secure, responsive web platform for Nordic users.",
    details: [
      "Migrated core workflows from a legacy stack to a modern Next.js frontend",
      "Improved login, dashboard, and support request flows",
      "Delivered with an India–Norway blended consulting model",
    ],
    url: "https://example.com",
    tags: ["Web Platform", "UX", "Cloud"],
    coverImage: "/images/ecommerce.jpeg",
    // video: { type: "youtube", id: "YOUR_YOUTUBE_ID" },
  },
  {
    id: "ops-automation",
    title: "Operations Workflow Automation",
    client: "Operations & Services Client",
    summary:
      "Automated internal reporting and approval workflows to reduce manual handoffs.",
    details: [
      "Mapped existing business processes with stakeholders in Norway",
      "Built automation for status updates and notifications",
      "Documented handover and training for the client team",
    ],
    url: "https://example.com",
    tags: ["Automation", "Integrations", "AI Assist"],
    coverImage: "/images/office1.png",
    // video: { type: "file", src: "/videos/ops-demo.mp4" },
  },
  {
    id: "industry-dashboard",
    title: "Industry Insights Dashboard",
    client: "Analytics Client",
    summary:
      "Designed and delivered a role-based dashboard for operational KPIs and reporting.",
    details: [
      "Defined KPI views for leadership and operations roles",
      "Connected data sources into a single reporting surface",
      "Shipped responsive UI for desktop and tablet review sessions",
    ],
    url: "https://example.com",
    tags: ["Dashboards", "Data", "Product"],
    coverImage: "/images/finance.jpeg",
  },
];

export function getFeaturedProjects(limit = 3) {
  return clientProjects.slice(0, limit);
}
