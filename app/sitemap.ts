import type { MetadataRoute } from "next";

import { blogArticles } from "@/data/blog";
import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date("2026-08-14")
    },
    {
      url: `${siteUrl}/subscription`,
      lastModified: new Date("2026-08-14")
    },
    {
      url: `${siteUrl}/reseller`,
      lastModified: new Date("2026-08-14")
    },
    {
      url: `${siteUrl}/tutorials`,
      lastModified: new Date("2026-08-14")
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date("2026-08-14")
    },
    {
      url: `${siteUrl}/support`,
      lastModified: new Date("2026-08-14")
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date("2026-08-14")
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date("2026-08-14")
    },
    ...blogArticles.map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: new Date(article.updatedAt ?? article.publishedAt)
    }))
  ];

  return [...staticRoutes, ...blogRoutes];
}
