import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/thank-you"],
    },
    sitemap: `${business.siteUrl}/sitemap.xml`,
  };
}
