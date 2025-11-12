const faqs = [
  {
    question:
      "How is this different from the background check my HR vendor runs?",
    answer:
      "Your HR vendor runs database lookups. We run intelligence operations. We correlate off-platform identities, mine dark web chatter, interrogate sealed and foreign records, and model behavior. The delta between those two approaches is the difference between safety and a live grenade in your org chart.",
  },
  {
    question: "Will this investigation create any legal exposure for us?",
    answer:
      "No. Every investigation is executed within legal and regulatory frameworks. We use lawfully obtained data, maintain defensible audit trails, and provide counsel-ready documentation so you can make clean employment decisions.",
  },
  {
    question: "How fast can you deliver findings?",
    answer:
      "Rapid Intel Scan lands in 48 hours. Full Spectrum ranges 5-7 business days. Continuous Surveillance pumps real-time signals to you the moment anything hazardous surfaces.",
  },
  {
    question: "Do you contact the subject or leave any footprint?",
    answer:
      "Never without your explicit approval. Our investigations are covert. We leave zero traces that alert the subject or leak your interest.",
  },
  {
    question: "What roles benefit most from intelligence investigations?",
    answer:
      "Executives, finance and treasury, privileged IT/DevOps, healthcare administrators, M&A advisors, anyone with customer trust, and any role where one wrong hire can trigger systemic damage.",
  },
  {
    question: "Can you integrate with our ATS or compliance workflows?",
    answer:
      "Yes. We provide secure API handoffs and can deliver structured findings directly into your ATS, GRC, or case management systems. Manual briefings are also available for high-stakes hires.",
  },
  {
    question: "What if the candidate refuses consent?",
    answer:
      "We operate under consent frameworks aligned with your jurisdiction. If a candidate declines, that alone is a risk indicator. We advise on compliant fallback options.",
  },
  {
    question: "Do you monitor for ongoing risk after the hire?",
    answer:
      "Our Continuous Surveillance tier keeps watch long after onboarding. We surface new legal actions, data breaches, or behavioral shifts before they explode inside your company.",
  },
  {
    question: "Is this service global?",
    answer:
      "Absolutely. We have data partnerships and investigative resources across North America, EMEA, LATAM, and APAC. Hidden histories do not respect borders; neither do we.",
  },
  {
    question:
      "Can you testify or support litigation if we act on your findings?",
    answer:
      "Yes. Our analysts can provide affidavits, expert testimony, and litigation support to ensure your decision withstands scrutiny.",
  },
  {
    question:
      "What industries rely on QuantumLeap intelligence investigations?",
    answer:
      "Financial services, healthcare, federal contractors, cybersecurity firms, logistics, and any organization where a compromised insider can detonate customer trust or national security.",
  },
];

const badHireCosts = [
  {
    label: "Leadership Distraction",
    detail: "Average of 60+ executive hours burned cleaning up fallout.",
    cost: "$18,500",
  },
  {
    label: "Lost Clients & Revenue",
    detail: "Reputation damage and churn spiral after breached trust.",
    cost: "$74,000",
  },
  {
    label: "Legal & Compliance",
    detail: "Outside counsel, sanctions, and mandatory reporting.",
    cost: "$42,000",
  },
  {
    label: "Operational Chaos",
    detail: "Productivity crater, team attrition, stalled initiatives.",
    cost: "$56,500",
  },
];

const standardBlindSpots = [
  "Alias identities and covert digital personas that never touch a courthouse.",
  "Dark web chatter, closed forums, and burner accounts tied to your candidate.",
  "Civil litigation that was sealed, settled quietly, or still in motion.",
  "High-risk financial behaviors, crypto tracing, and hidden businesses.",
  "Network associations with fraud rings, extremist groups, or competitors.",
  "Behavioral profiling that forecasts future sabotage or insider threats.",
];

const processPhases = [
  {
    title: "01. Identity Deconstruction",
    copy: "We rip apart every alias, username, handle, and burner the subject has ever used, then stitch them back together into a single, irrefutable identity map.",
  },
  {
    title: "02. Deep Signal Harvesting",
    copy: "Dark web crawlers, breached credential repositories, financial intelligence, and cross-border data sources surface what traditional checks never see.",
  },
  {
    title: "03. Behavioral Risk Modeling",
    copy: "We run machine-driven pattern analysis to predict fraud appetite, collusion probability, volatility, and insider-threat likelihood.",
  },
  {
    title: "04. Human Vetting & Synthesis",
    copy: "Former intelligence analysts interrogate every signal, verify credibility, and deliver decisive recommendations you can act on immediately.",
  },
];

const caseStudies = [
  {
    headline: "Fintech COO quietly orchestrating a second company scam",
    impact:
      "Uncovered undisclosed shell corporations laundering customer data to a foreign marketplace. Client avoided $12M in regulatory penalties and pulled the offer within 24 hours.",
  },
  {
    headline:
      "Enterprise sales hire with spotless resume, violent history offshore",
    impact:
      "Located sealed court records and survivor testimonies in another jurisdiction. Client prevented the hire, notified authorities, and avoided reputational catastrophe.",
  },
  {
    headline: "Healthcare administrator with access to patient data",
    impact:
      "Identified participation in ransomware forums supplying hospital access points. Client terminated employment immediately and hardened access controls the same day.",
  },
];

const pricingPackages = [
  {
    name: "Rapid Intel Scan",
    price: "$2,950",
    idealFor: "Startups & urgent hiring decisions",
    bullets: [
      "48-hour turnaround",
      "Global criminal, civil, and regulatory sweep",
      "Digital footprint & alias correlation",
      "Red flag briefing with executive summary",
    ],
  },
  {
    name: "Full Spectrum Investigation",
    price: "$6,400",
    idealFor: "Executive hires & critical operators",
    bullets: [
      "All Rapid Intel Scan coverage",
      "Dark web & closed forum intelligence",
      "Financial exposure & asset tracing",
      "Behavioral risk scoring with prediction model",
    ],
    featured: true,
  },
  {
    name: "Continuous Surveillance",
    price: "$1,250 /mo",
    idealFor: "Boards, regulated entities, & high-risk roles",
    bullets: [
      "Quarterly deep-dive refreshes",
      "Real-time breach credential monitoring",
      "Insider threat signals with escalation hotline",
      "Board-ready reporting and compliance support",
    ],
  },
];

const testimonials = [
  {
    quote:
      "We thought we were hiring a rainmaker. QuantumLeap exposed a hidden network of shell companies tied to embezzlement. Decision made in one afternoon.",
    name: "Erica Lopez",
    title: "Chief Legal Officer, Series D SaaS",
  },
  {
    quote:
      "Their report reads like a threat briefing. Specific, verifiable, and brutal in the best way. Saved us from inviting a saboteur into the boardroom.",
    name: "Marcus Hall",
    title: "Managing Partner, Private Equity",
  },
  {
    quote:
      'They don\'t just find the dirt; they connect the dots. Our hiring bar is permanently higher because QuantumLeap proved what "clean" really means.',
    name: "Priya Raman",
    title: "VP People, Healthcare Network",
  },
];

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
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://quantumleapai.abacusai.app/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://quantumleapai.abacusai.app/#services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Beyond Background Checks",
      item: "https://quantumleapai.abacusai.app/background-checks",
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "QuantumLeap AI",
  url: "https://quantumleapai.abacusai.app",
  logo: "https://quantumleapai.abacusai.app/og-image.png",
  sameAs: [
    "https://www.linkedin.com/company/quantumleapai",
    "https://twitter.com/quantumleapai",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "security@quantumleapai.com",
    },
  ],
};

const structuredData = [
  serviceSchema,
  reviewSchema,
  faqSchema,
  breadcrumbSchema,
  organizationSchema,
];

export default function BackgroundChecksPage() {
  return (
    <div className="min-h-screen bg-[#07070b] text-[#f6f7ff]">
      <main className="px-4 py-24 sm:px-8 lg:px-16">
        <article className="mx-auto flex max-w-6xl flex-col gap-24">
          <nav aria-label="Breadcrumb" className="text-sm text-[#d6d9ec]">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <a
                  className="text-red-300 underline-offset-2 hover:underline"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <a
                  className="text-red-300 underline-offset-2 hover:underline"
                  href="/intelligent-automation"
                >
                  Services
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-white">
                Beyond Background Checks
              </li>
            </ol>
          </nav>

          <header className="space-y-6 text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-wide text-red-400">
              BEYOND BACKGROUND CHECKS (TM)
            </span>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              That "Clean" Background Check You Just Got? It Missed Everything
              That Actually Matters.
            </h1>
            <p className="text-lg leading-relaxed text-[#d1d4e0] sm:text-xl">
              Standard background checks only search criminal databases and
              credit reports. They're looking for arrests that happened.
              Convictions that stuck. Public records that made it into the
              system.
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
              they're good at hiding problems or haven't been caught yet.
              <br />
              <br />
              One bad hire can drain $200K in legal fees, lost clients, and
              reputation damage. Most cost way more than that.
              <br />
              <br />
              What you don't know will absolutely hurt you. Pair this
              investigation with{" "}
              <a
                href="/intelligent-automation"
                className="text-red-300 underline underline-offset-2 hover:text-red-200"
              >
                Intelligent Automation
              </a>{" "}
              and{" "}
              <a
                href="/cyber-intelligence"
                className="text-red-300 underline underline-offset-2 hover:text-red-200"
              >
                Cyber Intelligence
              </a>{" "}
              to lock down every entry point.
            </p>
          </header>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_0_48px_rgba(255,0,64,0.12)] backdrop-blur">
            <h2 className="text-left text-3xl font-semibold text-red-300 sm:text-4xl">
              The Cost of a Bad Hire - Here&apos;s the Math
            </h2>
            <p className="mt-4 text-left text-lg text-[#d6d9ec] sm:text-xl">
              Run the numbers. One toxic insider shreds cash faster than any
              marketing experiment ever will.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {badHireCosts.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-black/30 p-6 transition hover:border-red-400/60 hover:bg-black/40"
                >
                  <div className="flex items-center justify-between text-sm uppercase tracking-wide text-red-300">
                    <span>{item.label}</span>
                    <span>{item.cost}</span>
                  </div>
                  <p className="mt-3 text-base text-[#d1d4e0]">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-red-400/40 bg-red-400/10 p-6 text-center text-lg font-semibold text-red-100">
              Average hit:{" "}
              <span className="text-3xl font-bold text-white">$191,000+</span>{" "}
              before reputational fallout compounds. Still think the $49
              background check is doing its job?
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              What Standard Background Checks Miss
            </h2>
            <p className="max-w-3xl text-lg text-[#d6d9ec]">
              Database lookups were built for yesterday&apos;s criminals.
              Today&apos;s saboteurs operate in shadows your vendor doesn&apos;t
              even know exist. Dive deeper with our{" "}
              <a
                href="/business-transformation"
                className="text-red-300 underline underline-offset-2 hover:text-red-200"
              >
                Business Transformation
              </a>{" "}
              advisors to harden downstream processes.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {standardBlindSpots.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-[#d1d4e0]"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/80 via-black/60 to-red-500/10 p-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Our Intelligence Investigation Process
              </h2>
              <p className="max-w-3xl text-lg text-[#d6d9ec]">
                We attack every angle. Machines surface the signals, human
                intelligence validates the threat. The result: indisputable
                truth before you sign.
              </p>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {processPhases.map((phase) => (
                <div
                  key={phase.title}
                  className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-red-300">
                    {phase.title}
                  </h3>
                  <p className="mt-4 text-base text-[#d1d4e0]">{phase.copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Case Files We Shut Down
            </h2>
            <p className="max-w-3xl text-lg text-[#d6d9ec]">
              These aren&apos;t hypotheticals. They&apos;re real investigations
              that kept clients out of headlines and depositions.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {caseStudies.map((study) => (
                <article
                  key={study.headline}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-semibold text-red-200">
                    {study.headline}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#d1d4e0]">
                    {study.impact}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">
              Pricing Packages
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-[#d6d9ec]">
              Choose the level of scrutiny that matches the blast radius of the
              role. Every package includes human analysis, actionable reporting,
              and executive briefings.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {pricingPackages.map((pkg) => (
                <article
                  key={pkg.name}
                  className={`rounded-3xl border p-8 ${
                    pkg.featured
                      ? "border-red-400/80 bg-gradient-to-br from-red-500/20 via-red-500/10 to-transparent shadow-[0_0_48px_rgba(255,64,64,0.18)]"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="text-sm uppercase tracking-wide text-red-300">
                    {pkg.name}
                  </div>
                  <div className="mt-4 text-3xl font-bold text-white">
                    {pkg.price}
                  </div>
                  <p className="mt-2 text-sm text-[#d1d4e0]">{pkg.idealFor}</p>
                  <ul className="mt-6 space-y-3 text-sm text-[#e0e3f5]">
                    {pkg.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-red-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <aside className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Our Guarantee
            </h2>
            <p className="mt-4 text-lg text-[#d6d9ec]">
              If we don&apos;t surface intelligence that changes your hiring
              decision or your confidence in it, we refund every dollar. No
              small print. No excuses. We either keep your company safe or you
              don&apos;t pay.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-red-400/60 bg-red-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-red-200">
              <span>Zero-Risk Engagement</span>
              <span className="text-red-300">|</span>
              <span>Signed NDA on day one</span>
            </div>
          </aside>

          <section>
            <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">
              Executives Talk Straight
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="rounded-3xl border border-white/10 bg-black/40 p-6"
                >
                  <p className="text-sm leading-relaxed text-[#d1d4e0]">
                    "{item.quote}"
                  </p>
                  <div className="mt-6 text-sm font-semibold text-white">
                    {item.name}
                  </div>
                  <div className="text-xs uppercase tracking-wide text-red-300">
                    {item.title}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">
              FAQ - Ask the Hard Questions
            </h2>
            <div className="mt-10 space-y-6">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-semibold text-red-200">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-base text-[#d1d4e0]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-red-400/50 bg-gradient-to-br from-red-500/20 via-red-500/10 to-transparent p-10 text-center shadow-[0_0_60px_rgba(255,0,80,0.18)]">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              If They Have Something to Hide, We&apos;ll Drag It Into the Light.
            </h2>
            <p className="mt-4 text-lg text-[#f0f2ff]">
              Book a confidential briefing. We&apos;ll walk you through our
              methodology, scope your roles, and deploy in under 24 hours.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={process.env.NEXT_PUBLIC_TIDYCAL_BOOK_URL || "#"}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-[#07070b] transition hover:bg-red-100"
              >
                Schedule a Briefing
              </a>
              <a
                href="mailto:security@quantumleapai.com"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
              >
                Email Our Analysts
              </a>
            </div>
            <p className="mt-6 text-xs uppercase tracking-wide text-red-200">
              100% confidential | NDA before we speak | You stay in control
            </p>
          </section>
        </article>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
