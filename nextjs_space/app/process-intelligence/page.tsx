
// app/process-intelligence/page.tsx
import React from "react";
import { HeroCTA } from "@/components/hero-cta";
import TrustBar from "@/components/trust-bar";
import TestimonialCarousel from "@/components/testimonial-carousel";
import { BlogCard } from "@/components/blog-card";
import ProcessValueCalculator from "@/components/process-value-calculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process Intelligence & Automation | QuantumLeap AI",
  description: "Turn operational friction into momentum. Map, measure, and automate the work that slows you down with QuantumLeap AI's enterprise process intelligence.",
  keywords: "process intelligence, automation, workflow optimization, process mining, enterprise automation",
};

export default function ProcessIntelligencePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Process Intelligence?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Process Intelligence combines process mining, data analytics, and AI to visualize how work actually flows through your organization. It reveals bottlenecks, inefficiencies, and automation opportunities that traditional business analysis misses — giving you a data-driven roadmap for operational transformation."
        }
      },
      {
        "@type": "Question",
        "name": "How does AI improve process efficiency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI analyzes millions of process events to identify patterns, predict bottlenecks, and recommend automation opportunities. It continuously learns from your operations to optimize workflows, reduce manual handoffs, and eliminate repetitive tasks — driving 30-50% efficiency gains in target processes."
        }
      },
      {
        "@type": "Question",
        "name": "Is it compatible with legacy systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Process Intelligence works with your existing systems by analyzing event logs, APIs, and data flows without requiring system replacement. Our solutions integrate with ERP, CRM, and legacy platforms through secure connectors and middleware — preserving your technology investments while adding intelligence."
        }
      },
      {
        "@type": "Question",
        "name": "What ROI should we expect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most enterprises see ROI within 6-9 months through reduced cycle times (30-40%), lower operational costs (20-30%), and improved compliance. Typical benefits include faster order-to-cash cycles, reduced manual errors, and freed capacity equivalent to 15-20% of process team time."
        }
      }
    ]
  };

  return (
    <main className="font-sans text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-slate-900 to-blue-800 text-white py-24 text-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/videos/process-hero.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Turn Operational Friction into Momentum
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Map, measure, and automate the work that slows you down. 
            QuantumLeap AI helps enterprises orchestrate processes with precision.
          </p>
          <HeroCTA
            primaryLabel="Book Executive Briefing"
            primaryHref="/schedule"
            secondaryLabel="Download Process Intelligence Playbook"
            secondaryHref="/download-playbook"
          />
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* PROBLEM STATEMENT */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">
            70% of Enterprise Workflows Still Run on Gut Feel
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Every missed hand-off, redundant step, or manual report costs real money. 
            Process Intelligence replaces guesswork with visibility — and automation handles the rest.
          </p>
          <ul className="text-left inline-block text-gray-700 space-y-2 text-lg">
            <li>• 35% of enterprise cost leakage stems from inefficient processes.</li>
            <li>• Automation delivers average ROI of 180% within 12 months.</li>
            <li>• Leaders using process mining cut decision latency by 50%.</li>
          </ul>
        </div>
      </section>

      {/* GATED OFFER */}
      <section id="gated-offer" className="bg-white py-20 text-center border-t">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">
            Get the Process Intelligence Playbook
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            A field-tested executive guide to uncovering invisible costs, streamlining 
            workflows, and achieving measurable ROI with automation.
          </p>
          <ul className="text-left inline-block text-gray-700 mb-8 space-y-2">
            <li>• Step-by-step process discovery checklist</li>
            <li>• ROI benchmarks from 40+ enterprise deployments</li>
            <li>• 90-Day Automation Pilot Plan</li>
          </ul>
          <HeroCTA
            primaryLabel="Download Free Playbook"
            primaryHref="/download-playbook"
          />
          <p className="text-xs text-gray-400 mt-3">
            🔒 Confidential — no spam, no cold calls.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="process-value-calculator" className="py-20 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">
            Estimate Your Automation Value in 90 Seconds
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Enter a few numbers to reveal hidden cost leakage and time savings across your workflows.
          </p>
          <ProcessValueCalculator />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialCarousel
        testimonials={[
          {
            quote:
              "QuantumLeap AI mapped 1,200 processes across 10 countries and pinpointed $4.7M in leakage — then automated half within 6 months.",
            before: "Manual reporting, no visibility into cross-functional delays.",
            after: "Data-driven workflows, decision time ↓ 55%.",
            author: "Lydia Penrose",
            title: "VP Operations",
            company: "Continental Logistics Inc.",
            isAnonymized: false,
            rating: "★★★★★",
          },
          {
            quote:
              "Three months later, their system blocked a ransomware attack. We weren't just secure — we could finally sleep at night.",
            before: "Disjointed processes and manual security audits.",
            after: "Unified automation reduced attack surface by 82%.",
            author: "Marcus Chen",
            title: "CISO",
            company: "Continental Logistics Inc.",
            isAnonymized: false,
            rating: "★★★★★",
          },
        ]}
      />

      {/* SERVICE FRAMEWORK */}
      <section className="py-20 bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 text-left md:text-center">
          <h2 className="text-3xl font-semibold mb-12">
            The QuantumLeap Process Intelligence Framework
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-xl mb-3 text-blue-800">1 — Discover</h3>
              <p className="text-gray-700">Use AI-driven process mining to map workflows from system logs and user actions — no surveys needed.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-xl mb-3 text-blue-800">2 — Diagnose</h3>
              <p className="text-gray-700">Quantify bottlenecks and hand-offs in minutes with root-cause analytics and heat maps.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-xl mb-3 text-blue-800">3 — Automate</h3>
              <p className="text-gray-700">Deploy secure automation bots to eliminate waste and free talent for strategic work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="bg-gray-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Our Process Intelligence Guarantee</h2>
          <p className="text-lg text-gray-700 mb-6">
            We guarantee a minimum 15% process-efficiency gain within 90 days of implementation — or your assessment fee is refunded.
          </p>
          <p className="text-sm text-gray-500">
            Verified through baseline and post-automation KPIs tracked in our platform.
          </p>
        </div>
      </section>

      {/* MINI BLOGS */}
      <section className="py-20 bg-white border-t">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Boardroom Briefs — Stories That Changed How Teams Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <BlogCard
              title="The 1,200-Process Map That Saved a Fortune"
              summary="A global manufacturer discovered $8M annual waste after QuantumLeap's AI mapped its entire supply chain — and automated procurement in 10 weeks."
              link="/blog/1200-process-map"
            />
            <BlogCard
              title="When Automation Made Compliance an Advantage"
              summary="A bank turned a regulatory nightmare into a competitive edge using QuantumLeap's auditable workflows."
              link="/blog/automation-compliance"
            />
            <BlogCard
              title="The Hidden Meetings That Cost $2 Million a Year"
              summary="Process mining revealed that status calls were consuming 22,000 hours annually — automation cut that by 90%."
              link="/blog/hidden-meetings"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-800 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">
            The Processes Running Your Enterprise Deserve a Smarter Brain
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            See what happens when your organization moves at the speed of insight.
          </p>
          <HeroCTA
            primaryLabel="Book Executive Briefing"
            primaryHref="/schedule"
            secondaryLabel="Download Process Intelligence Playbook"
            secondaryHref="/download-playbook"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 text-left">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 text-gray-700">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">What is Process Intelligence?</h3>
              <p>It's AI-driven analysis that maps and measures how work actually flows through your organization — revealing bottlenecks and automation opportunities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">How fast can we see results?</h3>
              <p>Most clients identify high-value automation targets within 14 days and achieve measurable gains in under 90 days.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Does it require IT integration?</h3>
              <p>No major integration needed — our platform connects via secure API and log connectors with zero downtime.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">What industries benefit most?</h3>
              <p>Manufacturing, financial services, logistics, healthcare, and public sector — any operation with complex workflows.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">What's in the Playbook?</h3>
              <p>Step-by-step framework, 90-day pilot plan, and benchmark data from real enterprise automation projects.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
