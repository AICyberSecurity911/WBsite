const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Beyond Background Checks Intelligence Investigation",
  description:
    "Deep intelligence investigations that uncover hidden identities, behavioral patterns, and risks standard background checks miss",
  provider: {
    "@type": "Organization",
    name: "QuantumLeap AI",
  },
  areaServed: ["US", "CA", "International"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Background Investigation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Basic Verification",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Standard Investigation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Intelligence Investigation",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
  },
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "Service",
    name: "Beyond Background Checks",
  },
  author: {
    "@type": "Person",
    name: "Tiffany Duncan",
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
  },
  reviewBody:
    "Standard background check was clean. QuantumLeap's investigation revealed the candidate was tied to criminal groups and was active on the Dark Web.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the difference between a background check and an intelligence investigation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Background checks search criminal databases for arrests and convictions. Intelligence investigations analyze behavior patterns, hidden identities, and conduct deep web searches to find risks that never resulted in arrests.",
      },
    },
  ],
};

export default function BackgroundChecksPage() {
  return (
    <div className="min-h-screen bg-[#07070b] text-[#f6f7ff]">
      <main className="px-4 py-24 sm:px-8 lg:px-16">
        <section className="mx-auto max-w-5xl space-y-6 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-wide text-red-400">
            BEYOND BACKGROUND CHECKS™
          </span>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            That "Clean" Background Check You Just Got? It Missed Everything
            That Actually Matters.
          </h1>
          <p className="text-lg leading-relaxed text-[#d1d4e0] sm:text-xl">
            Standard background checks only search criminal databases and credit
            reports. They're looking for arrests that happened. Convictions that
            stuck. Public records that made it into the system.
            <br />
            <br />
            Here's what they DON'T see:
            <br />
            The fraud that never got reported. The lawsuit that settled
            privately. The fake identity hiding a criminal past. The dark web
            activity planning the next scam. The behavior patterns screaming
            "this person will destroy your company."
            <br />
            <br />
            A "clean" background check doesn't mean someone is safe. It means
            they're good at hiding problems---or haven't been caught yet.
            <br />
            <br />
            One bad hire can drain $200K in legal fees, lost clients, and
            reputation damage. Most cost way more than that.
            <br />
            <br />
            What you don't know will absolutely hurt you.
          </p>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
