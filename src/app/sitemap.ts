import type { MetadataRoute } from "next";
import { areas, business, services } from "@/lib/business";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.siteUrl;
  // Date the site's pages last changed. Update when page content changes;
  // blog posts use their own updatedAt/publishedAt.
  const siteUpdated = new Date("2026-09-26");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/contact`, lastModified: siteUpdated, changeFrequency: "yearly", priority: 0.8 },
    {
      url: `${base}/services`,
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/areas-we-serve`,
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${base}/blog`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.6 },
    {
      url: `${base}/privacy-policy`,
      lastModified: new Date("2026-09-20"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${base}/terms-of-service`,
      lastModified: new Date("2026-09-20"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${base}/${service.slug}`,
    lastModified: siteUpdated,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const areaRoutes: MetadataRoute.Sitemap = areas.map((area) => ({
    url: `${base}/areas-we-serve/${area.slug}`,
    lastModified: siteUpdated,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...blogRoutes];
}
