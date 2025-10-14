
import React from "react";
import { Metadata } from "next";
import { HeroCTA } from "@/components/hero-cta";
import TrustBar from "@/components/trust-bar";
import TestimonialCarousel from "@/components/testimonial-carousel";
import TransformationCalculator from "@/components/TransformationCalculator";

export const metadata: Metadata = {
  title: "Enterprise Transformation | QuantumLeap AI",
  description: "QuantumLeap AI helps enterprises achieve measurable transformation in 90 days. Align people, tech, and strategy into one engine of momentum.",
  openGraph: {
    title: "Enterprise Transformation | QuantumLeap AI",
    description: "QuantumLeap AI helps enterprises achieve measurable transformation in 90 days. Align people, tech, and strategy into one engine of momentum.",
  },
};

const EnterpriseTransformationPage: React.FC = () => {
  // JSON-LD Schema for SEO + AEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Enterprise Transformation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A measurable framework that unites AI, automation, and strategy to deliver sustainable business growth."
        }
      },
      {
        "@type": "Question",
        "name": "How fast are results visible?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients achieve measurable ROI within 90 days of engagement."
        }
      },
      {
        "@type": "Question",
        "name": "How is QuantumLeap's approach different from traditional consulting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deliver transformation through living systems — data-driven and measurable in real time, not slide decks or theory."
        }
      },
      {
        "@type": "Question",
        "name": "Is it disruptive to current operations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The framework integrates with existing tech and workflows — no downtime required."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="font-sans text-gray-900">
        {/* HERO */}
        <section className="relative bg-black text-white py-24 text-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/videos/transform-hero.mp4"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Enterprise Transformation — Strategy That Moves, Systems That Deliver
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10">
              Align technology, people, and capital into one momentum engine — and lead markets, not react to them.
            </p>
            <HeroCTA
              primaryLabel="Book Transformation Briefing"
              primaryHref="/schedule"
              secondaryLabel="Download Transformation Playbook"
              secondaryHref="/download-transformation-playbook"
            />
          </div>
        </section>

        {/* TRUST BAR */}
        <TrustBar />

        {/* PROBLEM */}
        <section className="py-20 bg-gray-50 text-center">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-6">
              70% of Transformations Fail. The 30% Don&apos;t Guess — They Measure.
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              QuantumLeap AI connects data from every department into a living blueprint — letting leaders steer with
              confidence, not consultants. From AI Workforce to Cyber Intelligence, every lever pulls toward measurable ROI.
            </p>
            <ul className="inline-block text-left text-gray-700 space-y-2">
              <li>• Average ROI uplift: +22% in 9 months</li>
              <li>• Employee engagement improves by 31%</li>
              <li>• Implementation cost reduced by 27%</li>
            </ul>
          </div>
        </section>

        {/* GATED OFFER */}
        <section id="gated-offer" className="bg-white py-20 text-center border-t">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-semibold mb-4">Download the Transformation Playbook</h2>
            <p className="text-lg text-gray-600 mb-6">
              A CEO-ready framework for accelerating enterprise change without chaos or burnout.
            </p>
            <ul className="text-left inline-block text-gray-700 mb-8 space-y-2">
              <li>• The 5 Levers of Enterprise Momentum™</li>
              <li>• 90-Day Transformation Sprint Template</li>
              <li>• KPI Alignment Framework for Boards</li>
            </ul>
            <HeroCTA
              primaryLabel="Download Free Playbook"
              primaryHref="/download-transformation-playbook"
            />
            <p className="text-xs text-gray-400 mt-3">
              🎯 Instant download — no custom report, no signup complexity.
            </p>
          </div>
        </section>

        {/* CALCULATOR */}
        <section id="transformation-calculator" className="py-20 bg-gray-50 text-center">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-semibold mb-4">
              Estimate Your Transformation ROI
            </h2>
            <p className="text-gray-600 mb-8">
              Answer a few quick questions to project impact across efficiency, savings, and market advantage.
            </p>
            <TransformationCalculator />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <TestimonialCarousel
          testimonials={[
            {
              quote:
                "QuantumLeap's framework brought alignment across 12 divisions in under 60 days. We finally had one source of truth.",
              before: "Fragmented systems, siloed data, misaligned teams.",
              after: "Unified dashboard, measurable KPIs, clear accountability.",
              author: "Tiffany Duncan",
              title: "Transformation Director",
              company: "FinTech Innovators Inc.",
              isAnonymized: false,
              rating: "★★★★★",
            },
            {
              quote:
                "We reached operational clarity faster than I thought possible — and the growth that followed was automatic.",
              before: "Overlapping initiatives and duplicated spend.",
              after: "Lean execution, AI-informed decisions, 18% faster turnaround.",
              author: "Peter Fernandes",
              title: "Chief Strategy Officer",
              company: "Global Industrial Group",
              isAnonymized: false,
              rating: "★★★★★",
            },
          ]}
        />

        {/* GUARANTEE */}
        <section className="bg-white py-20 text-center border-t">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-6">
              Transformation Guarantee
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              We guarantee measurable ROI within 90 days of implementation — or we refund your transformation fees.
            </p>
            <p className="text-sm text-gray-500">
              Backed by QuantumLeap&apos;s verified performance framework.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-4">
              Make Enterprise Momentum Your Default State
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Book a confidential strategy session or download the playbook to start your 90-day acceleration.
            </p>
            <HeroCTA
              primaryLabel="Book Transformation Briefing"
              primaryHref="/schedule"
              secondaryLabel="Download Playbook"
              secondaryHref="/download-transformation-playbook"
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-16 text-left">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">How is QuantumLeap&apos;s approach different from traditional consulting?</h3>
                <p>We deliver transformation through living systems — data-driven and measurable in real time, not slide decks or theory.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">When can we expect measurable results?</h3>
                <p>Most clients see cross-departmental clarity within 30 days and measurable ROI by Day 90.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is it disruptive to current operations?</h3>
                <p>No. The framework integrates with existing tech and workflows — no downtime required.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EnterpriseTransformationPage;
