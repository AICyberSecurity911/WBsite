
import React from "react";
import { HeroCTA } from "@/components/hero-cta";
import TrustBar from "@/components/trust-bar";
import TestimonialCarousel from "@/components/testimonial-carousel";
import CyberRiskCalculator from "@/components/CyberRiskCalculator";
import CyberIntelligenceHero from "@/components/CyberIntelligenceHero";
import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { createServiceSchema, createBreadcrumbSchema, createSoftwareSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Enterprise Cyber Intelligence Services",
  description: "QuantumLeap AI's Enterprise Cyber Intelligence identifies vulnerabilities before attackers do. NASA-recognized offensive-grade testing, dark-web monitoring, and guaranteed discovery. Trusted by Fortune 500.",
  keywords: [
    "cyber intelligence",
    "cybersecurity services",
    "offensive security",
    "penetration testing",
    "dark web monitoring",
    "zero trust security",
    "threat intelligence",
    "vulnerability assessment",
    "security consulting",
    "cyber threat detection",
    "enterprise security",
    "security operations"
  ],
  openGraph: {
    title: "Enterprise Cyber Intelligence Services | QuantumLeap AI",
    description: "Predict threats before they strike with NASA-recognized offensive-grade intelligence and zero-trust defense.",
    url: "https://quantumleap.ai/cyber-intelligence",
    type: "website",
    images: [
      {
        url: "https://quantumleap.ai/og-cyber.png",
        width: 1200,
        height: 630,
        alt: "Enterprise Cyber Intelligence by QuantumLeap AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Cyber Intelligence Services | QuantumLeap AI",
    description: "Predict threats before they strike with offensive-grade intelligence",
    images: ["https://quantumleap.ai/twitter-cyber.png"],
  },
  alternates: {
    canonical: "https://quantumleap.ai/cyber-intelligence",
  },
};

const EnterpriseCyberIntelligencePage: React.FC = () => {
  const breadcrumbItems = [
    { name: "Services", href: "/#services" },
    { name: "Enterprise Cyber Intelligence", href: "/cyber-intelligence" }
  ];

  const serviceSchema = createServiceSchema(
    "Enterprise Cyber Intelligence",
    "NASA-recognized offensive-grade security testing that identifies vulnerabilities before attackers do. Includes dark-web monitoring, penetration testing, and guaranteed discovery.",
    "https://quantumleap.ai/cyber-intelligence",
    "Cybersecurity Services"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://quantumleap.ai" },
    { name: "Services", url: "https://quantumleap.ai/#services" },
    { name: "Enterprise Cyber Intelligence", url: "https://quantumleap.ai/cyber-intelligence" }
  ]);

  const calculatorSchema = createSoftwareSchema(
    "Cyber Risk Assessment Calculator",
    "Free 3-minute cyber risk assessment to estimate potential loss exposure and receive actionable security recommendations instantly.",
    "BusinessApplication"
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Enterprise Cyber Intelligence?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enterprise Cyber Intelligence combines NASA-recognized offensive security testing, continuous dark-web monitoring, and threat intelligence to identify vulnerabilities before attackers do. Our approach includes penetration testing, security assessments, and proactive defense strategies."
        }
      },
      {
        "@type": "Question",
        "name": "How is it different from traditional cybersecurity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional cybersecurity is reactive. Our Enterprise Cyber Intelligence is proactive and offensive-grade—we think like attackers to find vulnerabilities before they're exploited. We combine penetration testing, dark-web monitoring, and real-time threat intelligence."
        }
      },
      {
        "@type": "Question",
        "name": "What does the 4-tier solution include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tier 1: Vulnerability Discovery (automated scanning and threat detection). Tier 2: Offensive Simulation (ethical hacking and penetration testing). Tier 3: Dark Web Intelligence (monitoring and breach detection). Tier 4: Zero-Trust Integration (implementing comprehensive security architecture)."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you identify vulnerabilities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Initial vulnerability discovery begins within 48 hours. Comprehensive assessment with actionable recommendations is typically delivered within 5-7 business days. Our clients cut their attack surface by 73% within 90 days."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Fortune 500 enterprises across finance, healthcare, manufacturing, technology, energy, and government sectors. Our NASA-recognized methodology is trusted by organizations with the highest security requirements."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumb items={breadcrumbItems} />
      <main className="font-sans text-gray-900">
        {/* HERO */}
        <CyberIntelligenceHero />

        {/* TRUST BAR */}
        <TrustBar />

      {/* PROBLEM STATEMENT */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">
            82 % of Enterprise Breaches Begin Inside Trusted Systems
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Firewalls alone can&apos;t see modern attacks. QuantumLeap&apos;s Enterprise Cyber Intelligence
            combines NASA-recognized offensive security with continuous dark-web monitoring to stay
            three moves ahead.
          </p>
          <ul className="inline-block text-left text-gray-700 space-y-2">
            <li>• Average breach cost: $4.45 M (Source: IBM 2025)</li>
            <li>• 47 % of breaches involve third-party exposure</li>
            <li>• Our clients cut attack surface by 73 % within 90 days</li>
          </ul>
        </div>
      </section>

      {/* GATED OFFER */}
      <section id="gated-offer" className="bg-white py-20 text-center border-t">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">
            Download the Cyber Intelligence Blueprint
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            A board-ready framework for executive visibility into cyber risk and resilience planning.
          </p>
          <ul className="text-left inline-block text-gray-700 mb-8 space-y-2">
            <li>• The 4 indicators that predict most breaches</li>
            <li>• Board-approved 90-Day Response Plan Template</li>
            <li>• Checklist: Executive Questions CISOs Wish You&apos;d Ask</li>
          </ul>
          <HeroCTA
            primaryLabel="Download Free Blueprint"
            primaryHref="/download-cyber-blueprint"
          />
          <p className="text-xs text-gray-400 mt-3">
            🔒 Confidential download for executives only — no custom reports required.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="cyber-risk-calculator" className="py-20 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">
            Run Your 3-Minute Cyber Risk Assessment
          </h2>
          <p className="text-gray-600 mb-8">
            Estimate potential loss exposure and receive actionable recommendations instantly.
          </p>
          <CyberRiskCalculator />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialCarousel
        testimonials={[
          {
            quote:
              "QuantumLeap's offensive security team found critical vulnerabilities our previous auditors missed entirely — within 48 hours.",
            before: "Standard penetration tests showed 'all clear'.",
            after: "Discovered 3 critical vulnerabilities and contained them before breach.",
            author: "Arjun Singh",
            title: "CISO",
            company: "Global Healthcare Corp",
            isAnonymized: false,
            rating: "★★★★★",
          },
          {
            quote:
              "Three months later their system blocked a catastrophic ransomware attack. We weren't just secure — we could finally sleep at night.",
            before: "Unpatched legacy systems and manual audits.",
            after: "Automated threat intelligence and 24/7 monitoring.",
            author: "Lydia Penrose",
            title: "VP Logistics Security",
            company: "Continental Logistics Inc.",
            isAnonymized: false,
            rating: "★★★★★",
          },
        ]}
      />

      {/* GUARANTEE */}
      <section className="bg-white py-20 text-center border-t">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">
            NASA-Recognized Assessment Guarantee
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We guarantee our initial Offensive Security Assessment will find at least one High or Critical vulnerability missed by your previous tests — or the assessment is free.
          </p>
          <p className="text-sm text-gray-500">
            Verified through NASA SCAP framework and QuantumLeap&apos;s audit protocol.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">
            Don&apos;t Wait for a Breach to Make You Proactive
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Book a confidential security briefing or download the Blueprint to see where you stand today.
          </p>
          <HeroCTA
            primaryLabel="Book Security Briefing"
            primaryHref="/schedule"
            secondaryLabel="Download Cyber Blueprint"
            secondaryHref="/download-cyber-blueprint"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 text-left">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold">What makes QuantumLeap different from a standard penetration test?</h3>
              <p>We combine offensive security and AI-driven pattern detection to simulate real attacks and predict likely vectors before they occur.</p>
            </div>
            <div>
              <h3 className="font-semibold">How fast are results available?</h3>
              <p>Preliminary findings are available within 72 hours of your assessment initiation; full reports within 7 business days.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you work with existing IT teams?</h3>
              <p>Yes. We integrate with your security operations center and provide actionable intel without disrupting current processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Enterprise Cyber Intelligence?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A predictive security approach that combines AI-driven threat detection, offensive simulation, and dark-web intelligence to find vulnerabilities before attackers do.",
                },
              },
              {
                "@type": "Question",
                name: "Do you integrate with our IT team?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We work alongside your existing security operations to deliver actionable intelligence without disruption.",
                },
              },
            ],
          }),
        }}
      />
      </main>
    </>
  );
};

export default EnterpriseCyberIntelligencePage;
