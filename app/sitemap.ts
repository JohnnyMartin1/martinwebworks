import type { MetadataRoute } from "next";
import { getPublishedIndustries } from "@/app/data/industries";
import { getPublishedResources } from "@/app/data/resources";
import { EXAMPLE_CONCEPTS } from "@/app/data/exampleConcepts";

const SITE_URL = "https://martinwebworks.com";

/**
 * Sitemap.
 *
 * Includes:
 *  - core marketing routes
 *  - the /industries index + every published industry slug
 *  - the /resources index + every published resource slug
 *
 * Excludes:
 *  - draft industries and resources (filtered by getPublished*)
 *  - the /api/* endpoints
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/packages", priority: 0.9, changeFrequency: "monthly" },
    { path: "/monthly-care", priority: 0.8, changeFrequency: "monthly" },
    { path: "/examples", priority: 0.8, changeFrequency: "monthly" },
    { path: "/features", priority: 0.85, changeFrequency: "monthly" },
    { path: "/process", priority: 0.7, changeFrequency: "yearly" },
    { path: "/ai-assistant", priority: 0.6, changeFrequency: "monthly" },
    { path: "/free-audit", priority: 0.95, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.85, changeFrequency: "monthly" },
    { path: "/resources", priority: 0.85, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const industryEntries: MetadataRoute.Sitemap = getPublishedIndustries().map(
    (i) => ({
      url: `${SITE_URL}/industries/${i.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    }),
  );

  const resourceEntries: MetadataRoute.Sitemap = getPublishedResources().map(
    (r) => ({
      url: `${SITE_URL}/resources/${r.slug}`,
      lastModified: new Date(r.updatedDate),
      changeFrequency: "monthly",
      priority: 0.75,
    }),
  );

  const conceptEntries: MetadataRoute.Sitemap = EXAMPLE_CONCEPTS.map((c) => ({
    url: `${SITE_URL}/examples/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    ...staticEntries,
    ...industryEntries,
    ...resourceEntries,
    ...conceptEntries,
  ];
}
