import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { GlowCard } from "@/components/ui/glow-card";
import { FlameBorder } from "@/components/ui/flame-border";
import { BackgroundChecksLeadForm } from "@/components/background-checks-lead-form";

export const metadata: Metadata = {
  title: "Beyond Background Checks: Find What Standard Checks Miss",
  description:
    "Standard background checks only catch criminals who got caught. We reveal hidden identities, dark web activity, and red flags lurking beneath the surface.",
  keywords:
    "background check intelligence, deep background investigation, hidden identity detection, dark web screening, beyond criminal records, executive vetting, pre-employment screening, hiring risk assessment",
  alternates: {
    canonical: "https://quantumleapai.abacusai.app/background-checks",
  },
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    title: "Beyond Background Checks: Find What Standard Checks Miss",
    description:
      "Standard background checks only catch criminals who got caught. We reveal hidden identities, dark web activity, and red flags lurking beneath the surface.",
    url: "https://quantumleapai.abacusai.app/background-checks",
    type: "website",
    images: [
      {
        url: "/og-background-checks.jpg",
        width: 1200,
        height: 630,
        alt: "Beyond Background Checks Intelligence Investigation",
      },
    ],
  },
};

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
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--fg)]">
      <main className="px-4 py-24 sm:px-8 lg:px-16">
        <article className="mx-auto flex max-w-6xl flex-col gap-24">
          <nav aria-label="Breadcrumb" className="text-sm text-[color:var(--muted)]">
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

          <section className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-8 text-center shadow-lg">
            <h1 className="mb-6 text-5xl font-bold text-[color:var(--fg)]">
              Beyond Background Checks: Find What Standard Checks Miss
            </h1>
            <p className="mb-8 text-xl text-[color:var(--muted)]">
              Standard background checks only catch criminals who got caught. We
              reveal hidden identities, dark web activity, and red flags lurking
              beneath the surface.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="rounded-full bg-red-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-red-400"
              >
                Start Intelligence Investigation
              </Link>
              <Link
                href="#methodology"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                See How It Works
              </Link>
            </div>
          </section>

          <GlowCard
            aria-labelledby="dangerous-lie-heading"
            showFlame={true}
          >
            <h2
              id="dangerous-lie-heading"
              className="text-3xl font-semibold text-[color:var(--fg)] sm:text-4xl"
            >
              The Dangerous Lie You&apos;ve Been Sold
            </h2>
            <div className="space-y-4 text-lg text-[color:var(--muted)]">
              <p>A background check only tells you if someone was convicted.</p>
              <div>
                <p className="font-semibold text-[color:var(--fg)]">
                  It doesn&apos;t tell you:
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-6 text-base text-[color:var(--muted)]">
                  <li>If they&apos;re using a different name</li>
                  <li>
                    If they&apos;re hiding criminal activity in another state or
                    country
                  </li>
                  <li>
                    If they have{" "}
                    <Link
                      href="/cyber-intelligence"
                      className="text-red-300 underline underline-offset-2 hover:text-red-200"
                    >
                      dark web accounts
                    </Link>{" "}
                    tied to illegal marketplaces
                  </li>
                  <li>
                    If they&apos;ve been flagged in private databases for fraud,
                    harassment, or worse
                  </li>
                </ul>
              </div>
              <p>
                Most hiring mistakes aren&apos;t from criminals with
                records—they&apos;re from people who haven&apos;t been caught
                yet.
              </p>
              <div className="mt-6 rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-6 text-base text-yellow-100">
                <strong className="flex items-center gap-2 text-yellow-200">
                  <span aria-hidden="true">⚠️</span> Warning
                </strong>
                <p className="mt-2">
                  78% of identity fraud involves synthetic or stolen
                  credentials. A standard background check won&apos;t find them.
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-6">
              <h3 className="text-lg font-semibold text-white">
                Q: What don&apos;t background checks reveal?
              </h3>
              <p className="mt-2 text-base text-[#d1d4e0]">
                A: They miss alias identities, cross-border criminal activity,
                covert{" "}
                <Link
                  href="/cyber-intelligence"
                  className="text-red-300 underline underline-offset-2 hover:text-red-200"
                >
                  dark web presence
                </Link>
                , and private data sources that expose fraud, harassment, or
                insider threat behavior.
              </p>
            </div>
          </GlowCard>

          <GlowCard
            id="methodology"
            showFlame={true}
          >
            <h2 className="text-3xl font-semibold text-[color:var(--fg)] sm:text-4xl">
              Our Five-Layer Intelligence Investigation
            </h2>
            <p className="text-lg text-[color:var(--muted)]">
              Standard background checks scratch the surface. We go five layers
              deeper to uncover what others miss—before it becomes your problem.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="glow-card rounded-[24px] border border-[color:var(--border)] bg-[color:var(--card)] p-6 relative">
                <FlameBorder />
                <div className="relative z-20">
                <h3 className="text-xl font-semibold text-red-300">
                  Layer 1: Identity Verification &amp; Alias Detection
                </h3>
                <p className="mt-3 text-base text-[#d1d4e0]">
                  We don&apos;t just verify a name—we map every identity
                  variation.
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#d6d9ec]">
                  <li>
                    Cross-reference 47 national &amp; international databases
                  </li>
                  <li>
                    Detect name variations, maiden names, and deliberate aliases
                  </li>
                  <li>
                    Identify synthetic identities created from stolen
                    credentials
                  </li>
                  <li>
                    Uncover undisclosed previous addresses and employment gaps
                  </li>
                </ul>
                <p className="mt-3 text-sm text-[#d1d4e0]">
                  Real-world example: A CFO candidate passed 3 background checks
                  using a slight name variation. We found 2 bankruptcies and an
                  SEC investigation under his legal name.
                </p>
                </div>
              </article>
              <article className="glow-card rounded-[24px] border border-[color:var(--border)] bg-[color:var(--card)] p-6 relative">
                <FlameBorder />
                <div className="relative z-20">
                <h3 className="text-xl font-semibold text-red-300">
                  Layer 2: Deep Criminal &amp; Legal History
                </h3>
                <p className="mt-3 text-base text-[#d1d4e0]">
                  Standard checks only search one jurisdiction. We search
                  everywhere.
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#d6d9ec]">
                  <li>Multi-state and international criminal record search</li>
                  <li>
                    Civil litigation history (lawsuits, restraining orders,
                    judgments)
                  </li>
                  <li>
                    Regulatory actions and professional license suspensions
                  </li>
                  <li>Sealed or expunged records that still show patterns</li>
                </ul>
                <p className="mt-3 text-sm text-[#d1d4e0]">
                  Why it matters: 34% of criminal records are filed in a
                  different county than where the person currently lives.
                </p>
                </div>
              </article>
              <article className="glow-card rounded-[24px] border border-[color:var(--border)] bg-[color:var(--card)] p-6 relative">
                <FlameBorder />
                <div className="relative z-20">
                <h3 className="text-xl font-semibold text-red-300">
                  Layer 3: Digital Footprint &amp; Dark Web Monitoring
                </h3>
                <p className="mt-3 text-base text-[#d1d4e0]">
                  Your background check doesn&apos;t look online. We do.
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#d6d9ec]">
                  <li>
                    <Link
                      href="/cyber-intelligence"
                      className="text-red-300 underline underline-offset-2 hover:text-red-200"
                    >
                      Dark web monitoring
                    </Link>{" "}
                    (illegal marketplaces, hacker forums, data breaches)
                  </li>
                  <li>
                    Social media behavior analysis (deleted posts, hidden
                    profiles)
                  </li>
                  <li>Online reputation &amp; review patterns</li>
                  <li>Data breach exposure and compromised credentials</li>
                </ul>
                <p className="mt-3 text-sm text-[#d1d4e0]">
                  Red flag example: An IT director candidate had active accounts
                  on 3 dark web forums selling stolen data. His background check
                  was clean.
                </p>
                </div>
              </article>
              <article className="glow-card rounded-[24px] border border-[color:var(--border)] bg-[color:var(--card)] p-6 relative">
                <FlameBorder />
                <div className="relative z-20">
                <h3 className="text-xl font-semibold text-red-300">
                  Layer 4: Financial Behavior &amp; Risk Indicators
                </h3>
                <p className="mt-3 text-base text-[#d1d4e0]">
                  Financial desperation is the #1 predictor of theft and fraud.
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#d6d9ec]">
                  <li>Bankruptcies, foreclosures, tax liens, and judgments</li>
                  <li>
                    Unusual spending patterns and lifestyle inconsistencies
                  </li>
                  <li>
                    Hidden business ownership and shell company connections
                  </li>
                  <li>Offshore accounts and suspicious transactions</li>
                </ul>
                <p className="mt-3 text-sm text-[#d1d4e0]">
                  Case study: A controller embezzled $2.1M over 4 years. We
                  would have flagged his 3 bankruptcies, 2 foreclosures, and
                  luxury car purchases on a $60K salary.
                </p>
                </div>
              </article>
              <article className="glow-card rounded-[24px] border border-[color:var(--border)] bg-[color:var(--card)] p-6 md:col-span-2 relative">
                <FlameBorder />
                <div className="relative z-20">
                <h3 className="text-xl font-semibold text-red-300">
                  Layer 5: Behavioral Threat Assessment
                </h3>
                <p className="mt-3 text-base text-[#d1d4e0]">
                  Past behavior predicts future risk. We analyze patterns others
                  ignore.
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#d6d9ec]">
                  <li>History of workplace disputes and terminations</li>
                  <li>
                    Restraining orders, harassment complaints, and threats
                  </li>
                  <li>
                    Online extremism, hate group affiliation, and violent
                    rhetoric
                  </li>
                  <li>Substance abuse indicators and rehabilitation history</li>
                </ul>
                <p className="mt-3 text-sm text-[#d1d4e0]">
                  Why this matters: 67% of workplace violence incidents had
                  warning signs that were dismissed or missed. Tap our{" "}
                  <Link
                    href="/ai-workforce"
                    className="text-red-300 underline underline-offset-2 hover:text-red-200"
                  >
                    AI Workforce
                  </Link>{" "}
                  insights to train managers on spotting them early.
                </p>
                </div>
              </article>
            </div>
            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-6 text-center">
              <Image
                src="/images/five-layer-methodology.png"
                alt="Five-layer background check methodology infographic"
                loading="lazy"
                width={1280}
                height={720}
                className="mx-auto w-full max-w-4xl"
              />
              <p className="mt-4 text-sm text-[#d6d9ec]">
                Standard checks skim the surface. Our intelligence investigation
                delivers five layers of assurance.
              </p>
            </div>
          </GlowCard>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-lg">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Real Results: What Our Clients Discovered
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  name: "Tiffany Duncan",
                  title: "HR Director",
                  quote:
                    "We almost hired someone with a spotless background check. QuantumLeap's investigation revealed he was using a stolen identity—his real name had 3 felonies and 2 restraining orders. This would have been catastrophic.",
                },
                {
                  name: "Immigration Case",
                  title: "Cross-Border Investigation",
                  quote:
                    "A routine immigration background check revealed nothing. We found 7 aliases, offshore bank accounts, and ties to organized crime in 3 countries. Standard checks would never catch this.",
                },
                {
                  name: "Fortune 500 CHRO",
                  title: "Chief Human Resources Officer",
                  quote:
                    "Our internal screening missed a CFO candidate's hidden bankruptcy and SEC investigation. QuantumLeap found it in 48 hours. Worth every penny.",
                },
                {
                  name: "Personal Matter",
                  title: "Private Client",
                  quote:
                    "I needed to know who I was dating. His background was clean. QuantumLeap found 2 restraining orders from ex-partners, hidden debt, and active profiles on affair sites. Dodged a bullet.",
                },
              ].map((testimonial) => (
                <GlowCard
                  key={testimonial.name}
                  showFlame={true}
                  className="flex h-full flex-col gap-4 p-6 text-left text-[color:var(--muted)]"
                >
                  <article
                    itemScope
                    itemType="https://schema.org/Review"
                    className="relative z-20 flex h-full flex-col gap-4"
                  >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg font-semibold text-white">
                      {testimonial.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p
                        className="font-semibold text-white"
                        itemProp="author"
                        itemScope
                        itemType="https://schema.org/Person"
                      >
                        <span itemProp="name">{testimonial.name}</span>
                      </p>
                      <p className="text-sm text-red-300" itemProp="name">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" itemProp="reviewBody">
                    "{testimonial.quote}"
                  </p>
                  <div
                    className="mt-auto flex items-center gap-1 text-yellow-300"
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                  >
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span key={idx} aria-hidden="true">
                        ★
                      </span>
                    ))}
                    <meta itemProp="ratingValue" content="5" />
                    <span className="sr-only">5 star rating</span>
                  </div>
                  </article>
                </GlowCard>
              ))}
            </div>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-lg">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Standard Background Checks vs. Intelligence Investigation
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/30">
              <table className="min-w-full divide-y divide-white/10 text-left text-sm text-[#d6d9ec]">
                <thead className="bg-white/5 text-xs uppercase tracking-wide text-red-200">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Feature
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Standard Background Check
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Intelligence Investigation
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    [
                      "Criminal Records",
                      "Single jurisdiction only",
                      "Multi-state & international",
                    ],
                    [
                      "Identity Verification",
                      "Name & SSN match",
                      "47-database cross-reference, alias detection",
                    ],
                    [
                      "Digital Footprint",
                      "Not included",
                      "Dark web, social media, data breaches",
                    ],
                    [
                      "Financial History",
                      "Basic credit check",
                      "Bankruptcies, liens, hidden assets, offshore accounts",
                    ],
                    [
                      "Civil Records",
                      "Often missed",
                      "Lawsuits, restraining orders, judgments",
                    ],
                    [
                      "Behavioral Analysis",
                      "Not included",
                      "Threat assessment, workplace history",
                    ],
                    ["Turnaround Time", "3-5 days", "24-72 hours"],
                    ["Miss Rate", "67% incomplete data", "<3% (comprehensive)"],
                    ["Cost", "$29-99", "Starting at $499"],
                  ].map((row, index) => (
                    <tr
                      key={row[0]}
                      className={index % 2 === 0 ? "bg-white/5" : "bg-black/20"}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-semibold text-white"
                      >
                        {row[0]}
                      </th>
                      <td className="px-6 py-4">{row[1]}</td>
                      <td className="px-6 py-4 text-white">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#d1d4e0]">
              Intelligence investigations answer the question “What&apos;s the
              difference between a standard background check and an intelligence
              investigation?”—multi-layer verification, deep digital
              intelligence, and behavioral risk modeling in under 72 hours.
            </p>
          </section>

          <section className="space-y-8 py-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-[color:var(--fg)] sm:text-5xl">
                Intelligence Investigation Pricing
              </h2>
              <p className="text-lg text-[color:var(--muted)] max-w-2xl mx-auto">
                Transparent pricing. No hidden fees. Results guaranteed.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Basic Intelligence",
                  price: "$499",
                  bestFor:
                    "Individual screening, dating background checks, personal matters",
                  features: [
                    "Identity verification across 47 databases",
                    "Multi-state criminal & civil records",
                    "Digital footprint analysis",
                    "Social media investigation",
                    "Basic financial history",
                  ],
                  delivery: "48-72 hours",
                  cta: "Start Basic Investigation",
                  popular: false,
                },
                {
                  name: "Standard Intelligence",
                  price: "$999",
                  bestFor:
                    "Pre-employment screening, tenant verification, business partnerships",
                  features: [
                    "Everything in Basic, PLUS:",
                    "Dark web monitoring & breach detection",
                    "International records search",
                    "Comprehensive financial analysis",
                    "Behavioral threat assessment",
                    "Priority 24-hour delivery",
                  ],
                  delivery: "24-48 hours",
                  cta: "Start Standard Investigation",
                  popular: true,
                },
                {
                  name: "Executive Intelligence",
                  price: "$2,499+",
                  bestFor:
                    "C-suite hiring, high-stakes investments, due diligence",
                  features: [
                    "Everything in Standard, PLUS:",
                    "Offshore account investigation",
                    "Corporate intelligence & shell company detection",
                    "Regulatory & SEC investigation history",
                    "International organized crime databases",
                    "Dedicated investigator assigned",
                    "Rush 12-hour delivery available",
                  ],
                  delivery: "12-24 hours",
                  cta: "Request Executive Investigation",
                  popular: false,
                },
              ].map((tier) => (
                <GlowCard
                  key={tier.name}
                  variant={tier.popular ? "lavender" : "default"}
                  className={`h-full ${tier.popular ? "border-[color:var(--accent)]/80" : ""}`}
                >
                  <article
                    itemScope
                    itemType="https://schema.org/Offer"
                    className="flex h-full flex-col gap-6"
                  >
                    {tier.popular && (
                      <span className="absolute right-6 top-6 rounded-full bg-[color:var(--accent)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white z-20">
                        Most Popular
                      </span>
                    )}
                    <meta
                      itemProp="price"
                      content={tier.price.replace(/[^0-9.]/g, "") || "0"}
                    />
                    <meta itemProp="priceCurrency" content="USD" />
                    <div>
                      <h3
                        className="text-2xl font-bold text-[color:var(--fg)] mb-2"
                        itemProp="name"
                      >
                        {tier.name}
                      </h3>
                      <p className="text-3xl font-bold text-[color:var(--accent)] mb-2">
                        {tier.price}
                      </p>
                      <p className="text-sm text-[color:var(--muted)] leading-relaxed">
                        {tier.bestFor}
                      </p>
                    </div>
                    <ul
                      className="flex-1 space-y-3 text-sm text-[color:var(--muted)]"
                      itemProp="description"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-3 pt-4 border-t border-[color:var(--border)]">
                      <p className="text-sm font-medium text-[color:var(--fg)]">
                        Delivery: <span className="text-[color:var(--accent)]">{tier.delivery}</span>
                      </p>
                      <Link
                        href="#contact"
                        className={`btn-primary block w-full text-center ${
                          tier.popular ? "btn-secondary" : ""
                        }`}
                      >
                        {tier.cta}
                      </Link>
                    </div>
                  </article>
                </GlowCard>
              ))}
            </div>
          </section>

          <GlowCard className="space-y-6 p-10 text-left" showFlame={true}>
            <h2 className="text-3xl font-semibold text-[color:var(--fg)] sm:text-4xl">
              The &apos;Find 3 or Free&apos; Guarantee
            </h2>
            <p className="text-lg text-[color:var(--fg)]">
              We&apos;re so confident in our intelligence investigation that we
              offer this guarantee:
            </p>
            <p className="text-base text-[color:var(--muted)]">
              If we don&apos;t find at least 3 significant red flags,
              discrepancies, or pieces of critical information that a standard
              background check would miss, your investigation is 100% FREE. No
              questions asked. No fine print.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-[color:var(--fg)]">
                What counts as a &apos;significant finding&apos;:
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[color:var(--muted)]">
                <li>Hidden aliases or identity variations</li>
                <li>Criminal or civil records in other jurisdictions</li>
                <li>Dark web presence or data breach exposure</li>
                <li>
                  Undisclosed financial issues (bankruptcies, liens, judgments)
                </li>
                <li>Social media red flags or deleted content</li>
                <li>Discrepancies in employment or education history</li>
                <li>Behavioral warning signs or threat indicators</li>
              </ul>
            </div>
            <p className="text-base text-[color:var(--muted)]">
              <strong className="text-[color:var(--accent)]">The reality:</strong> In 94% of
              cases, we find 7+ items a standard check missed.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-red-400/60 bg-red-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-red-200">
              <span aria-hidden="true">✔</span> 94% Success Rate
            </div>
          </GlowCard>


          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950 p-12 text-center shadow-[0_0_60px_rgba(64,128,255,0.25)]">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Don't Hire a Mistake. Don't Date a Danger. Don't Partner with a
              Fraud.
            </h2>
            <p className="text-lg text-[#d6d9ec]">
              Get the truth in 24-72 hours. Guaranteed.
            </p>
            <div className="mx-auto grid max-w-4xl gap-8 text-left text-sm text-[#d1d4e0] sm:grid-cols-3">
              <div>
                <h3 className="text-base font-semibold text-white">
                  Step 1: Choose Your Investigation Tier
                </h3>
                <p className="mt-2">
                  Basic ($499) | Standard ($999) | Executive ($2,499+) — select
                  based on your needs and urgency.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">
                  Step 2: Submit Subject Information
                </h3>
                <p className="mt-2">
                  Provide: Full name, DOB, last known address, SSN (optional but
                  recommended). Upload any additional context or concerns.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">
                  Step 3: Receive Your Confidential Report
                </h3>
                <p className="mt-2">
                  Delivery: 12-72 hours depending on tier. Format: Encrypted PDF
                  via secure portal. Analyst support included.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-red-500 px-8 py-4 text-base font-semibold uppercase tracking-wide text-white transition hover:bg-red-400"
              >
                Start Your Investigation Now
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                Schedule a Consultation
              </Link>
            </div>
            <p className="text-sm text-red-200">
              Limited investigation slots available this week. Secure your spot
              now.
            </p>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-6 py-3 text-sm text-[#d1d4e0]">
              <span
                className="inline-flex h-3 w-3 animate-pulse rounded-full bg-green-400"
                aria-hidden="true"
              />
              7 investigations in progress
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-wide text-[#c3c7e6]">
              <span>256-bit encryption</span>
              <span>•</span>
              <span>FCRA compliant</span>
              <span>•</span>
              <span>BBB A+ rating</span>
              <span>•</span>
              <span>10,000+ investigations completed</span>
              <span>•</span>
              <span>94% success rate</span>
            </div>
          </section>
          <GlowCard className="space-y-4 p-10" showFlame={true}>
            <h2 className="text-3xl font-semibold text-[color:var(--fg)] sm:text-4xl">
              Case Studies: What We&apos;ve Uncovered
            </h2>
            <p className="text-lg text-[color:var(--muted)]">
              Real investigations, real results. See how intelligence
              investigation prevents disaster.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title:
                    "The CFO Who Wasn't: How We Stopped a $4.2M Fraud Before It Started",
                  excerpt:
                    "A Fortune 500 company almost hired a CFO with impeccable credentials. We found the real story...",
                  href: "/blog/cfo-fraud-prevention",
                  alt: "Fraud detection case study illustration",
                },
                {
                  title:
                    "7 Aliases, 3 Countries, 1 Investigation: International Background Intelligence",
                  excerpt:
                    "When standard checks revealed nothing, we uncovered a network of hidden identities spanning continents...",
                  href: "/blog/international-alias-detection",
                  alt: "International investigation case study illustration",
                },
                {
                  title:
                    "The Dark Web Connection: IT Director with Active Hacker Forum Accounts",
                  excerpt:
                    "His technical background check passed. Our dark web monitoring revealed he was selling stolen data...",
                  href: "/blog/dark-web-employee-screening",
                  alt: "Cyber security case study illustration",
                },
              ].map((post) => (
                <GlowCard
                  key={post.href}
                  showFlame={true}
                  className="group flex h-full flex-col overflow-hidden"
                >
                  <article className="relative z-20 flex h-full flex-col">
                  <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-red-500/40 via-red-500/10 to-transparent">
                    <Image
                      src="/images/case-study-placeholder.jpg"
                      alt={post.alt}
                      loading="lazy"
                      width={640}
                      height={320}
                      className="h-full w-full object-cover opacity-60 transition duration-300 group-hover:scale-105 group-hover:opacity-80"
                    />
                  </div>
                    <div className="flex flex-1 flex-col gap-4 p-6 text-left">
                      <h3 className="text-lg font-semibold text-[color:var(--fg)]">
                        {post.title}
                      </h3>
                      <p className="text-sm text-[color:var(--muted)]">{post.excerpt}</p>
                      <Link
                        href={post.href}
                        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[color:var(--accent)] underline-offset-4 transition hover:text-[color:var(--accent)]/80 hover:underline"
                      >
                        Read Full Case Study <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                </GlowCard>
              ))}
            </div>
          </GlowCard>

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
            <h2 className="text-3xl font-semibold text-[color:var(--fg)] sm:text-4xl">
              Case Files We Shut Down
            </h2>
            <p className="max-w-3xl text-lg text-[color:var(--muted)]">
              These aren&apos;t hypotheticals. They&apos;re real investigations
              that kept clients out of headlines and depositions.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {caseStudies.map((study) => (
                <GlowCard
                  key={study.headline}
                  showFlame={true}
                  className="p-6"
                >
                  <article className="relative z-20">
                    <h3 className="text-lg font-semibold text-[color:var(--accent)]">
                      {study.headline}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
                      {study.impact}
                    </p>
                  </article>
                </GlowCard>
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
                <GlowCard
                  key={pkg.name}
                  showFlame={true}
                  variant={pkg.featured ? "lavender" : "default"}
                  className={`p-8 ${
                    pkg.featured
                      ? "border-[color:var(--accent)]/80"
                      : ""
                  }`}
                >
                  <article className="relative z-20">
                    <div className="text-sm uppercase tracking-wide text-[color:var(--accent)]">
                      {pkg.name}
                    </div>
                    <div className="mt-4 text-3xl font-bold text-[color:var(--fg)]">
                      {pkg.price}
                    </div>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">{pkg.idealFor}</p>
                    <ul className="mt-6 space-y-3 text-sm text-[color:var(--muted)]">
                      {pkg.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </GlowCard>
              ))}
            </div>
          </section>

          <GlowCard className="p-10 text-center" showFlame={true}>
            <h2 className="text-3xl font-semibold text-[color:var(--fg)] sm:text-4xl">
              Our Guarantee
            </h2>
            <p className="mt-4 text-lg text-[color:var(--muted)]">
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
          </GlowCard>

          <section>
            <h2 className="text-center text-3xl font-semibold text-[color:var(--fg)] sm:text-4xl">
              Executives Talk Straight
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {testimonials.map((item) => (
                <GlowCard
                  key={item.name}
                  showFlame={true}
                  className="p-6"
                >
                  <article className="relative z-20">
                    <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                      "{item.quote}"
                    </p>
                    <div className="mt-6 text-sm font-semibold text-[color:var(--fg)]">
                      {item.name}
                    </div>
                    <div className="text-xs uppercase tracking-wide text-[color:var(--accent)]">
                      {item.title}
                    </div>
                  </article>
                </GlowCard>
              ))}
            </div>
          </section>

          <GlowCard className="space-y-6 p-10" showFlame={true}>
            <h2 className="text-3xl font-semibold text-[color:var(--fg)] sm:text-4xl text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {/* First set of FAQs (from inline array) */}
              {[
                {
                  question:
                    "What's the difference between a background check and an intelligence investigation?",
                  answer:
                    "A standard background check only searches one jurisdiction for criminal convictions. An intelligence investigation cross-references 47+ databases, searches multiple jurisdictions internationally, monitors the dark web, analyzes financial behavior, and identifies hidden aliases and synthetic identities. We find what background checks miss—67% of the time, critical information exists outside the standard search parameters.",
                },
                {
                  question: "How long does an intelligence investigation take?",
                  answer:
                    "Basic: 48-72 hours. Standard: 24-48 hours. Executive: 12-24 hours. Rush delivery available for Executive tier.",
                },
                {
                  question: "Is this legal?",
                  answer:
                    "Yes. All our investigations use 100% legal, publicly available data sources and comply with FCRA, GDPR, and all applicable privacy laws. We don't hack, break into accounts, or use illegal methods.",
                },
                {
                  question: "What if the person has a common name?",
                  answer:
                    "We use advanced identity resolution across 47 databases to ensure we're investigating the correct individual. We verify using multiple data points: SSN, DOB, addresses, known aliases, and biometric matching where available.",
                },
                {
                  question: "Can I use this for pre-employment screening?",
                  answer:
                    "Yes. Our investigations are FCRA-compliant and can be used for employment decisions. We provide a compliant disclosure and consent process.",
                },
                {
                  question: "Do you investigate internationally?",
                  answer:
                    "Yes. Our Executive Intelligence tier includes international records searches, offshore account detection, and access to INTERPOL and international criminal databases.",
                },
                {
                  question: "Do you notify the person being investigated?",
                  answer:
                    "No. This is a passive investigation using publicly available records. The subject will never know they were investigated.",
                },
                {
                  question: "What's included in the final report?",
                  answer:
                    "A comprehensive PDF report with executive summary, detailed findings organized by category, source documentation, risk assessment, and actionable recommendations.",
                },
                {
                  question: "What if you don't find anything?",
                  answer:
                    "If we find fewer than 3 significant items that a standard background check would miss, your investigation is 100% free under our 'Find 3 or Free' guarantee.",
                },
              ].map((faq) => (
                <GlowCard
                  key={faq.question}
                  showFlame={true}
                  className="p-6"
                >
                  <div className="relative z-20">
                    <h3 className="text-lg font-semibold text-[color:var(--fg)]">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">{faq.answer}</p>
                  </div>
                </GlowCard>
              ))}
              
              {/* Second set of FAQs from faqs array */}
              {faqs.map((faq) => (
                <GlowCard
                  key={faq.question}
                  showFlame={true}
                  className="p-6"
                >
                  <div className="relative z-20">
                    <h3 className="text-lg font-semibold text-[color:var(--fg)]">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-base text-[color:var(--muted)]">{faq.answer}</p>
                  </div>
                </GlowCard>
              ))}
            </div>
            
            {/* CTA Section after FAQ */}
            <div className="mt-12 pt-8 border-t border-[color:var(--border)]">
              <GlowCard className="p-8 text-center" showFlame={true}>
                <h3 className="text-2xl font-semibold text-[color:var(--fg)] mb-4">
                  Ready to Uncover What Standard Checks Miss?
                </h3>
                <p className="text-lg text-[color:var(--muted)] mb-6 max-w-2xl mx-auto">
                  Get a free consultation with our intelligence analysts. We'll review your current screening process and show you exactly what you're missing—no obligation.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href={process.env.NEXT_PUBLIC_TIDYCAL_BOOK_URL || "#"}
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    Schedule Free Consultation
                  </Link>
                  <Link
                    href="#gated-offer"
                    className="btn-secondary inline-flex items-center justify-center"
                  >
                    Get Free Risk Assessment Guide
                  </Link>
                </div>
              </GlowCard>
            </div>
          </GlowCard>

          {/* Gated Offer Section - Lead Capture */}
          <GlowCard id="gated-offer" className="p-12 text-center" showFlame={true}>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold text-[color:var(--fg)] sm:text-4xl mb-4">
                Free: 5 Red Flags Standard Background Checks Always Miss
              </h2>
              <p className="text-lg text-[color:var(--muted)] mb-8">
                Download our exclusive guide revealing the hidden risks that cost companies millions. Learn what to look for before your next hire.
              </p>
              <div className="bg-[color:var(--card)] border border-[color:var(--border)] rounded-[24px] p-8">
                <BackgroundChecksLeadForm />
              </div>
              <p className="mt-6 text-sm text-[color:var(--muted)]">
                <span className="inline-block mr-1">🔒</span>
                100% confidential. No spam. Unsubscribe anytime.
              </p>
            </div>
          </GlowCard>

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
