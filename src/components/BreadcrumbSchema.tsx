import { headers } from "next/headers";
import { business } from "@/lib/business";

export interface Crumb {
  name: string;
  path: string;
}

export default async function BreadcrumbSchema({ items }: { items: Crumb[] }) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${business.siteUrl}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
