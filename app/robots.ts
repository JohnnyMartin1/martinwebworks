import type { MetadataRoute } from "next";

const SITE_URL = "https://martinwebworks.com";

/**
 * Robots policy.
 *
 * - Public marketing surface is fully indexable.
 * - /api/* is excluded from crawling (not user content).
 * - Draft industry / resource pages are not linked anywhere and return 404,
 *   so no explicit disallow is required for them.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
