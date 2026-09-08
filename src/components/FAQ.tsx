export interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items, heading = "Frequently Asked Questions" }: { items: FAQItem[]; heading?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">{heading}</h2>
      <dl className="mt-6 flex flex-col gap-6">
        {items.map((item) => (
          <div key={item.question} className="border-b border-navy-900/10 pb-6">
            <dt className="font-semibold text-navy-900">{item.question}</dt>
            <dd className="mt-2 text-navy-800/80">{item.answer}</dd>
          </div>
        ))}
      </dl>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
