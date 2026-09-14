import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/lib/blog";
import { business, getAreaBySlug, getServiceBySlug } from "@/lib/business";
import CTABanner from "@/components/CTABanner";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedServices = (post.relatedServices ?? [])
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
  const relatedAreas = (post.relatedAreas ?? [])
    .map((slug) => getAreaBySlug(slug))
    .filter((area): area is NonNullable<typeof area> => Boolean(area));

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: business.legalName },
    publisher: { "@type": "Organization", name: business.legalName },
  };

  return (
    <>
    <BreadcrumbSchema
      items={[
        { name: "Home", path: "/" },
        { name: "Tips & Advice", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ]}
    />
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
        {new Date(post.publishedAt).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <h1 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">{post.title}</h1>
      <div className="prose prose-navy mt-8 flex flex-col gap-6">
        {post.body.map((section, index) => (
          <div key={index}>
            {section.heading && (
              <h2 className="text-xl font-semibold text-navy-900">{section.heading}</h2>
            )}
            {section.paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex} className="mt-3 text-navy-800/90 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>

      {relatedServices.length > 0 && (
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          {relatedServices.map((service) => (
            <div
              key={service.slug}
              className="flex-1 rounded-2xl border border-navy-900/10 bg-sand-50 p-6"
            >
              <p className="font-semibold text-navy-900">Need {service.name.toLowerCase()}?</p>
              <p className="mt-1 text-sm text-navy-800/80">{service.description}</p>
              <Link
                href={`/${service.slug}`}
                className="mt-3 inline-block text-sm font-semibold text-teal-600 hover:underline"
              >
                View {service.name} →
              </Link>
            </div>
          ))}
        </div>
      )}

      {relatedAreas.length > 0 && (
        <p className="mt-6 text-sm text-navy-800/80">
          We also cover:{" "}
          {relatedAreas.map((area, index) => (
            <span key={area.slug}>
              <Link
                href={`/areas-we-serve/${area.slug}`}
                className="font-semibold text-teal-600 hover:underline"
              >
                {area.name}
              </Link>
              {index < relatedAreas.length - 1 ? " · " : ""}
            </span>
          ))}
        </p>
      )}

      <div className="mt-6">
        <Link href="/blog" className="text-sm font-semibold text-teal-600 hover:underline">
          ← Back to Tips &amp; Advice
        </Link>
      </div>
    </article>
    <CTABanner />
    </>
  );
}
