export function crmApiUrl() {
  const isDevelopment = process.env.NODE_ENV === "development";
  const raw = isDevelopment
    ? process.env.NEXT_PUBLIC_LOCAL_CRM_API_URL || process.env.CRM_LOCAL_API_URL || "http://127.0.0.1:5000/api/v1"
    : process.env.NEXT_PUBLIC_SERVER_CRM_API_URL || process.env.CRM_SERVER_API_URL || "";
  return raw.replace(/\/$/, "").replace("://localhost", "://127.0.0.1").replace("://[::1]", "://127.0.0.1");
}

export function crmApiCandidates() {
  const primary = crmApiUrl();
  const fallback = "http://127.0.0.1:5000/api/v1";
  return [...new Set([primary, fallback].filter(Boolean))];
}

const crmMediaPath = /^\/api\/v1\/(website-team\/photos|website-projects\/media)\/([^/?#]+)$/;

export function toSiteAssetUrl(url?: string | null) {
  const trimmed = String(url || "").trim();
  if (!trimmed) return "";
  try {
    const parsed = new URL(trimmed, "http://local.invalid");
    const match = parsed.pathname.match(crmMediaPath);
    if (match) return `/api/media/${match[1]}/${match[2]}`;
  } catch {
    return trimmed;
  }
  const relative = trimmed.match(crmMediaPath);
  return relative ? `/api/media/${relative[1]}/${relative[2]}` : trimmed;
}
