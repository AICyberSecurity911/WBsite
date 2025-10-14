
import React from "react";
import { HeroCTA } from "@/components/hero-cta";
import TrustBar from "@/components/trust-bar";
import TestimonialCarousel from "@/components/testimonial-carousel";
import ExecutiveRiskCalculator from "@/components/executive-risk-calculator";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import { createServiceSchema, createBreadcrumbSchema, createSoftwareSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Beyond Background Checks™ — Intelligence-Grade Executive Due Diligence",
  description: "Beyond Background Checks™ delivers intelligence-grade executive due diligence. Uncover the 96% of intelligence that standard background checks miss. Trusted for C-suite hires, board appointments, and M&A decisions.",
  keywords: [
    "executive due diligence",
    "background checks",
    "executive vetting",
    "C-suite hiring",
    "board appointments",
    "M&A due diligence",
    "executive screening",
    "reputation intelligence",
    "dark web monitoring",
    "executive background check",
    "pre-employment screening",
    "executive search"
  ],
  openGraph: {
    title: "Beyond Background Checks™ | Intelligence-Grade Executive Due Diligence",
    description: "Uncover the 96% of intelligence that standard checks miss. Protect high-stakes decisions with intelligence-grade vetting.",
    url: "https://quantumleap.ai/beyond-background-checks",
    type: "website",
    images: [
      {
        url: "https://quantumleap.ai/og-background-checks.png",
        width: 1200,
        height: 630,
        alt: "Beyond Background Checks by QuantumLeap AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Background Checks™ | QuantumLeap AI",
    description: "Intelligence-grade executive due diligence for high-stakes decisions",
    images: ["https://quantumleap.ai/twitter-background-checks.png"],
  },
  alternates: {
    canonical: "https://quantumleap.ai/beyond-background-checks",
  },
};

export default function BeyondBackgroundChecksPage() {
  const breadcrumbItems = [
    { name: "Services", href: "/#services" },
    { name: "Beyond Background Checks™", href: "/beyond-background-checks" }
  ];

  const serviceSchema = createServiceSchema(
    "Beyond Background Checks™ - Intelligence-Grade Executive Due Diligence",
    "Intelligence-grade executive due diligence that uncovers the 96% of information standard background checks miss. Includes digital footprint analysis, dark-web exposure monitoring, litigation history, and reputation intelligence.",
    "https://quantumleap.ai/beyond-background-checks",
    "Professional Services"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://quantumleap.ai" },
    { name: "Services", url: "https://quantumleap.ai/#services" },
    { name: "Beyond Background Checks™", url: "https://quantumleap.ai/beyond-background-checks" }
  ]);

  const calculatorSchema = createSoftwareSchema(
    "Executive Risk Assessment Calculator",
    "Free executive risk assessment tool to evaluate potential exposure and receive confidential recommendations for C-suite hires and board appointments.",
    "BusinessApplication"
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Beyond Background Checks™ different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Beyond Background Checks™ provides intelligence-grade executive due diligence that goes far beyond standard verification. We analyze digital footprints, dark web exposure, litigation history, professional associations, and reputation intelligence — uncovering the 96% of information that standard background checks miss. Our investigations are designed for high-stakes decisions: board appointments, C-suite hires, and strategic partnerships."
        }
      },
      {
        "@type": "Question",
        "name": "Is it for hiring or partnership vetting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both. Beyond Background Checks™ is ideal for executive hiring, board appointments, M&A due diligence, strategic partnerships, investor vetting, and any situation where a single bad decision could cost millions. Our clients include boards, investors, and executives making critical people and partnership decisions."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical investigation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard investigations are completed within 5-7 business days. Expedited assessments for time-sensitive decisions can be delivered in 48-72 hours. Complex investigations involving international entities or deep forensic analysis may require 10-14 days depending on scope and data availability."
        }
      },
      {
        "@type": "Question",
        "name": "Is it compliant with data privacy laws?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All investigations comply with FCRA, GDPR, and applicable data privacy regulations. We use only legally permissible sources and methods, obtaining proper consent where required. Our processes are designed to meet the highest standards for executive-level due diligence while respecting privacy rights and regulatory requirements."
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
      <section className="relative bg-black text-white py-24 text-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/videos/due-diligence-hero.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Beyond Background Checks™
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-4">
            Intelligence-Grade Executive Due Diligence
          </p>
          <p className="text-xl md:text-2xl text-amber-400 font-semibold mb-8">
            Uncover the 96% of intelligence that standard checks miss
          </p>

          <HeroCTA
            primaryLabel="Book Executive Briefing"
            primaryHref="/schedule"
            secondaryLabel="Download Due Diligence Playbook"
            secondaryHref="/download-due-diligence-playbook"
          />
          <p className="text-xs text-gray-400 mt-3">Confidential. No initial disclosure required.</p>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* THE INTELLIGENCE GAP */}
      <section className="py-20 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              The Intelligence Gap
            </h2>
            <p className="text-xl text-gray-700 mb-2">
              What Standard Background Checks Actually Check
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Most enterprises believe background checks provide comprehensive due diligence. They don't.
            </p>
          </div>

          {/* COMPARISON TABLE */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold">What They Check</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-red-300">What They Miss</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-900">Criminal Records</p>
                    </td>
                    <td className="px-6 py-4 text-red-700">
                      <p className="font-medium">Only prosecuted crimes.</p>
                      <p className="text-sm text-gray-600 mt-1">Settled civil cases, sealed records, international violations—invisible</p>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-900">Employment Verification</p>
                    </td>
                    <td className="px-6 py-4 text-red-700">
                      <p className="font-medium">Dates and titles only.</p>
                      <p className="text-sm text-gray-600 mt-1">Short tenures, "quiet departures," termination reasons—not investigated</p>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-900">Education Verification</p>
                    </td>
                    <td className="px-6 py-4 text-red-700">
                      <p className="font-medium">Degree exists.</p>
                      <p className="text-sm text-gray-600 mt-1">Whether institution is legitimate or a diploma mill—not verified</p>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-900">Credit Check</p>
                    </td>
                    <td className="px-6 py-4 text-red-700">
                      <p className="font-medium">Payment history.</p>
                      <p className="text-sm text-gray-600 mt-1">Hidden financial stress, undisclosed debts, offshore accounts—not discovered</p>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-900">Reference Check</p>
                    </td>
                    <td className="px-6 py-4 text-red-700">
                      <p className="font-medium">Curated contacts only.</p>
                      <p className="text-sm text-gray-600 mt-1">Real reputation, peer reviews, former colleagues' honest opinions—not captured</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* WHAT'S NEVER CHECKED */}
          <div className="bg-red-900 text-white rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">What's Never Checked:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-lg">
              <div className="flex items-start gap-3">
                <span className="text-red-300 font-bold text-xl">✗</span>
                <p>Digital footprint and online behavior (96% of their actual presence)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-300 font-bold text-xl">✗</span>
                <p>Dark web exposure (compromised credentials, illicit activity)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-300 font-bold text-xl">✗</span>
                <p>Behavioral patterns and communication style</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-300 font-bold text-xl">✗</span>
                <p>Hidden biases and discriminatory views</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-300 font-bold text-xl">✗</span>
                <p>Cultural fit and leadership style</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-300 font-bold text-xl">✗</span>
                <p>Risky associations and networks</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-300 font-bold text-xl">✗</span>
                <p>Undisclosed conflicts of interest</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-300 font-bold text-xl">✗</span>
                <p>International activities and relationships</p>
              </div>
            </div>
          </div>

          {/* IMPACT STATEMENT */}
          <div className="text-center">
            <div className="inline-block bg-amber-100 border-2 border-amber-500 rounded-xl px-8 py-6">
              <p className="text-2xl font-bold text-gray-900">
                The Result: You're making million-dollar decisions on <span className="text-red-600">4%</span> of available intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section id="gated-offer" className="bg-white py-16 border-t text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-3">Download: Due Diligence Playbook</h2>
          <p className="text-gray-700 mb-6">
            The one-page executive playbook used by boards to spot hiring and deal risk fast.
          </p>
          <ul className="inline-block text-left text-gray-700 mb-6 space-y-2">
            <li>• Quick red flags every executive should know</li>
            <li>• Two-step verification checklist you can run before interviews</li>
            <li>• What to ask a vendor during a first briefing</li>
          </ul>
          <HeroCTA
            primaryLabel="Download Free Playbook"
            primaryHref="/download-due-diligence-playbook"
          />
          <p className="text-xs text-gray-400 mt-3">One free download per executive. No custom reports.</p>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              The Solution: Intelligence-Grade Due Diligence
            </h2>
            <p className="text-xl text-gray-700 mb-2">
              From Data Entry to Intelligence Operations
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Standard background checks are conducted by data entry operators running database queries. 
              <span className="font-semibold text-gray-900"> Our investigations are conducted by cybersecurity & intelligence professionals who have worked with security agencies around the globe</span>, not by clerks.
            </p>
          </div>

          {/* TIER 1 */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-2xl px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">TIER 1: Enhanced Executive Vetting</h3>
                  <p className="text-blue-100">Perfect for C-suite, board members, key hires</p>
                </div>
                <div className="hidden md:block bg-blue-800 rounded-xl px-6 py-3">
                  <p className="text-sm font-semibold">MOST POPULAR</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-b-2xl shadow-lg p-8 border-2 border-blue-600">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Scope:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Everything standard checks cover, plus:</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Deep digital footprint analysis (10+ years of online presence)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Professional reputation intelligence (beyond curated references)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Communication style and behavioral assessment</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-gray-700 mt-9">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Leadership pattern analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Financial stress indicators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Geographic and industry network mapping</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm font-semibold text-gray-900">Use Case:</p>
                    <p className="text-sm text-gray-700">Senior executive hires, board appointments, advisory roles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TIER 2 */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-2xl px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">TIER 2: Comprehensive Intelligence Investigation</h3>
                  <p className="text-purple-100">For highest-stakes decisions requiring complete picture</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-b-2xl shadow-lg p-8 border-2 border-purple-600">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Scope:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Everything in Enhanced Vetting, plus:</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Dark web intelligence (credential exposure, illicit activity monitoring)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>International background verification (global records search)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Hidden identity and alias investigation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Risky association mapping (problematic networks and relationships)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Pattern analysis across multiple identities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Cultural fit and values alignment assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Bias and discrimination indicators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Undisclosed conflict identification</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm font-semibold text-gray-900">Use Case:</p>
                    <p className="text-sm text-gray-700">Acquisition targets, major investors, critical partnerships, high-risk positions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TIER 3 */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-t-2xl px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">TIER 3: Continuous Executive Intelligence</h3>
                  <p className="text-amber-100">Ongoing monitoring for portfolio companies and key stakeholders</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-b-2xl shadow-lg p-8 border-2 border-amber-600">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Scope:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">✓</span>
                      <span>Everything in Tier 2, plus:</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">✓</span>
                      <span>Quarterly update reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">✓</span>
                      <span>Real-time alert system for material changes</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">✓</span>
                      <span>Dark web credential monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">✓</span>
                      <span>Reputation tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">✓</span>
                      <span>Network change analysis</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                    <p className="text-sm font-semibold text-gray-900">Use Case:</p>
                    <p className="text-sm text-gray-700">Portfolio company executives, board members, strategic partners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TIER 4 */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-2xl px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">TIER 4: M&A Intelligence & Due Diligence</h3>
                  <p className="text-red-100">Complete intelligence for acquisition targets and major deals</p>
                </div>
                <div className="hidden md:block bg-red-800 rounded-xl px-6 py-3">
                  <p className="text-sm font-semibold">ENTERPRISE</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-b-2xl shadow-lg p-8 border-2 border-red-600">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Scope:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>Full leadership team investigation (Tier 3 level), plus:</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>Company reputation and culture analysis</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>Customer and vendor sentiment intelligence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>Competitive intelligence</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-red-50 rounded-lg">
                    <p className="text-sm font-semibold text-gray-900">Use Case:</p>
                    <p className="text-sm text-gray-700">Acquisitions, major investments, strategic partnerships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <HeroCTA
              primaryLabel="Book Executive Briefing"
              primaryHref="/schedule"
              secondaryLabel="Run Risk Assessment"
              secondaryHref="#executive-risk-assessment"
            />
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="executive-risk-assessment" className="py-20 bg-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Executive Risk Assessment — 3 minutes</h2>
          <p className="text-gray-600 mb-8">
            Answer a few straightforward questions to reveal the estimated risk level,
            a dollar-range exposure, and recommended actions.
          </p>

          <ExecutiveRiskCalculator />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialCarousel
        testimonials={[
          {
            quote:
              "Standard background check was clean. QuantumLeap's investigation revealed the candidate had been terminated from three previous companies for inflating sales numbers. We dodged a bullet that would have cost us major client relationships.",
            before:
              "Nearly hired someone with hidden fraud history standard checks missed.",
            after: "Flagged instantly—saved us from a $200K+ disaster.",
            author: "Tiffany Duncan",
            title: "Director",
            company: "Talent Leap AI",
            isAnonymized: false,
            rating: "★★★★★",
          },
          {
            quote:
              "We thought we were well-covered—until QuantumLeap found an undisclosed litigation matter. The board thanked us later.",
            before:
              "Relying on standard education and employment checks.",
            after: "Avoided a high-risk hire with regulatory exposure.",
            author: "Harper L. Kingsley",
            title: "VP",
            company: "Adroit",
            isAnonymized: false,
            rating: "★★★★★",
          },
          {
            quote:
              "The depth of their investigation is something else. We paused an acquisition the same week they surfaced critical associations.",
            before:
              "Proceeding with LOI without deep background intelligence.",
            after: "Deal renegotiated; exposure contained.",
            author: "CISO",
            title: "",
            company: "Global Fintech",
            isAnonymized: true,
            rating: "★★★★★",
          },
        ]}
      />

      {/* FRAMEWORK */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-6 text-left md:text-center">
          <h2 className="text-3xl font-semibold mb-8">How We Investigate</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">1 — Source & Verify</h3>
              <p className="text-gray-600">Public records, regulatory filings, corporate registries.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">2 — Digital Footprint</h3>
              <p className="text-gray-600">Social networks, code repos, dark-web traces, and credential exposure.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">3 — Contextual Analysis</h3>
              <p className="text-gray-600">Pattern detection, association mapping, and decision-relevance scoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Beyond Background Checks™ Guarantee</h2>
          <p className="text-gray-700 mb-4">
            If our investigation doesn't discover material, verifiable intelligence that would have changed your decision,
            we will refund your fee.
          </p>
          <p className="text-sm text-gray-500">
            *Material* is defined as undisclosed litigation, verified dark-web credential exposure, or verifiable professional misconduct.
          </p>
        </div>
      </section>

      {/* FOUNDER ADJACENT PROMPT (short) */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-xl font-semibold mb-3">Executive Intelligence, Built by a Founder Who's Sat in the Room</h3>
          <p className="text-gray-700">
            Paras Khurana built this service to stop board-level surprises. When you engage, you get a tight, evidence-first outcome.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-700 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">Stop Risk from Hitting Your Balance Sheet</h2>
          <p className="text-lg mb-6 text-indigo-100">Book a confidential executive briefing — or run the quick risk assessment now.</p>
          <HeroCTA
            primaryLabel="Book Executive Briefing"
            primaryHref="/schedule"
            secondaryLabel="Download Due Diligence Playbook"
            secondaryHref="/download-due-diligence-playbook"
          />
        </div>
      </section>

      {/* FAQ (voice-optimized) */}
      <section className="bg-gray-50 py-16 text-left">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold">How is Beyond Background Checks™ different from standard checks?</h3>
              <p>We go beyond records. We analyze behavior, networks, and digital exposure to give you decision-grade intelligence.</p>
            </div>
            <div>
              <h3 className="font-semibold">How long does an assessment take?</h3>
              <p>The interactive assessment is 3 minutes. Our deep investigations vary by scope; standard executive checks typically complete within 5–7 business days.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you share sources?</h3>
              <p>We provide verifiable findings and repeatable proof points. Sensitive sources are summarized to protect confidentiality where required.</p>
            </div>
            <div>
              <h3 className="font-semibold">Is this compliant with privacy laws?</h3>
              <p>Yes. We follow local standards, only surface lawful, verifiable information, and include a clear consent and data-use note in the engagement letter.</p>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
