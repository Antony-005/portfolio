import { SITE_URL } from "@/lib/site";
import { projects } from "@/lib/projects";
import { insights } from "@/lib/insights";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/work",
    "/services",
    "/about",
    "/process",
    "/insights",
    "/faq",
    "/contact",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${SITE_URL}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  const insightRoutes = insights.map((p) => ({
    url: `${SITE_URL}/insights/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes, ...insightRoutes];
}