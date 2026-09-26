import type { Metadata } from "next";
import { business } from "@/lib/business";

// Full per-page metadata. Next replaces a parent's openGraph/twitter
// objects rather than merging them, so a page that sets its own title must
// also carry the image, site name and locale - otherwise shared links lose
// their preview image and show the homepage's card.
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
}: {
  title: string | { absolute: string };
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const fullTitle = typeof title === "string" ? `${title} | ${business.name}` : title.absolute;
  const image = { url: business.logoPath, width: 1254, height: 1254, alt: `${business.name} logo` };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: business.name,
      locale: "en_GB",
      type,
      images: [image],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
      images: [business.logoPath],
    },
  };
}
