
import React from "react";
import HeroSection from "@/components/hero-section";
import TrustBar from "@/components/trust-bar";
import ReadinessCalculator from "@/components/readiness-calculator";
import TestimonialCarousel from "@/components/testimonial-carousel";
import { HeroCTA } from "@/components/hero-cta";
import { Users, Network, Search, Shield, TrendingUp } from "lucide-react";

export default function EnterpriseLandingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is QuantumLeap AI Enterprise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "QuantumLeap AI helps large organizations move with startup velocity through AI Workforce, Process Intelligence, Enterprise Cyber Intelligence, and Beyond Background Checks™ — combining automation, intelligence-grade due diligence, and transformation expertise trusted by Fortune 500 leaders."
        }
      },
      {
        "@type": "Question",
        "name": "How does it help business leaders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We help eliminate hidden inefficiencies, accelerate digital transformation, multiply capacity without increasing headcount, and provide intelligence-grade executive vetting that protects boardroom decisions."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in Beyond Background Checks™?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Intelligence-grade analysis of digital footprints, dark-web exposure monitoring, litigation history verification, professional association mapping, and reputation intelligence that reveals the 96% of information standard checks miss."
        }
      },
      {
        "@type": "Question",
        "name": "Can I see ROI before I invest?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our Enterprise Readiness Assessment provides instant dollar value at risk, identifies top inefficiencies, and maps clear ROI within 90 seconds. The Executive Transformation Brief includes board-ready ROI models."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer live consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer complimentary 30-minute Executive Briefings with no sales pitch — just strategic insights and a 90-day action plan tailored to your organization."
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
      <HeroSection
        headline="Your complexity is costing you momentum."
        subheadline="QuantumLeap AI helps large organizations move with startup velocity—without losing enterprise discipline."
        primaryCta={{ label: "Book Executive Briefing", href: "/schedule" }}
        secondaryCta={{
          label: "Download Free: Executive Transformation Brief",
          href: "#gated-offer",
        }}
        stats={[
          { value: "$170M+", label: "Enterprise Value Delivered" },
          { value: "75+", label: "Products Orchestrated" },
          { value: "NASA-Recognized", label: "Cyber Intelligence" },
        ]}
        bgVideo="https://cdn.abacus.ai/videos/0c1058fb-08d8-41a3-8786-6afd8cffb386.mp4"
      />

      {/* TRUST BAR */}
      <TrustBar />

      {/* GATED OFFER */}
      <section
        id="gated-offer"
        className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 border-t border-orange-100 text-center"
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Get the Executive Transformation Brief
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            A concise, board-ready blueprint used by Fortune 500 executives to
            uncover hidden inefficiencies, accelerate transformation, and
            reclaim millions in lost productivity.
          </p>
          <ul className="text-left inline-block text-gray-700 mb-8 space-y-2">
            <li>• 90-day pilot roadmap for immediate wins</li>
            <li>• Top three hidden cost centers and how to eliminate them</li>
            <li>• ROI model trusted by CFOs and boards</li>
          </ul>
          <HeroCTA
            primaryLabel="Download Free Brief"
            primaryHref="/download-brief"
          />
          <p className="text-xs text-gray-500 mt-3">
            🔒 Your information is confidential. No spam. Ever.
          </p>
        </div>
      </section>

      {/* BOARDROOM MOMENT */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
            The Question Every Board Will Ask Next Quarter
          </h2>
          <p className="text-xl text-orange-600 mb-10 font-medium">
            "Why are smaller competitors moving faster than we are?"
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                Deployment Lag
              </h3>
              <p className="text-gray-700">
                Average enterprise launches new tech in 6–12 months.
                Competitors: 4–8 weeks.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                Hidden Vulnerabilities
              </h3>
              <p className="text-gray-700">
                73% of organizations have undetected breaches for months.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                Lost Profit Opportunity
              </h3>
              <p className="text-gray-700">
                AI-mature enterprises average 23% higher margins and 30% lower
                costs.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <HeroCTA
              primaryLabel="Assess Your Readiness (90 Seconds)"
              primaryHref="#readiness-assessment"
            />
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="readiness-assessment" className="bg-gray-900 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Enterprise Readiness Assessment
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            Eight quick questions. Instant insights into where your enterprise
            is bleeding time, talent, or trust.
          </p>
          <ReadinessCalculator />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialCarousel
        testimonials={[
          {
            quote:
              "QuantumLeap's AI automation caught a $2.5M procurement discrepancy our legacy systems overlooked—integrated across 5,000 endpoints within weeks.",
            before:
              "Manual audits across global operations, $10M annual leakage from errors.",
            after:
              "80% reduction in audit time, $8M recovered in Year 1.",
            author: "CISO",
            title: "",
            company: "Multinational Retailer",
            isAnonymized: true,
            rating: "★★★★★",
          },
          {
            quote:
              "From siloed factories to unified AI-driven lines, their automations slashed downtime 65%—increasing throughput without extra headcount.",
            before:
              "Reactive maintenance costing $15M/year in lost output.",
            after:
              "90% faster issue resolution, ROI in under 6 months.",
            author: "VP Operations",
            title: "",
            company: "Automotive Giant",
            isAnonymized: true,
            rating: "★★★★★",
          },
        ]}
      />

      {/* ENTERPRISE SOLUTIONS */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-gray-900 text-center">
            Enterprise Solutions That Turn Scale Into Advantage
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Workforce Card */}
            <div className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                Supercharge Your Teams Without Expanding Headcount
              </h3>
              <p className="text-gray-700 mb-6">
                Deploy custom-trained AI employees that work 24/7, scale instantly, and free your best people for strategic work.
              </p>
              <a
                href="/ai-workforce"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition"
              >
                Explore AI Workforce →
              </a>
            </div>

            {/* Process Intelligence Card */}
            <div className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-lg mb-4">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                Transform Operational Chaos Into Competitive Edge
              </h3>
              <p className="text-gray-700 mb-6">
                Move beyond basic automation. Deploy intelligent orchestration that adapts, learns, and optimizes across your enterprise.
              </p>
              <a
                href="/process-intelligence"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition"
              >
                Explore Process Intelligence →
              </a>
            </div>

            {/* Beyond Background Checks Card */}
            <div className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition bg-gradient-to-br from-amber-50 to-orange-50">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-600 text-white rounded-lg mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                Eliminate Blind Spots in High-Stakes Decisions
              </h3>
              <p className="text-gray-700 mb-6">
                Standard checks see 4%. We investigate the hidden 96%—protecting M&A, C-suite hires, and strategic partnerships.
              </p>
              <a
                href="/beyond-background-checks"
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition"
              >
                Explore Beyond Background Checks™ →
              </a>
            </div>

            {/* Cyber Intelligence Card */}
            <div className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-lg mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                NASA-Recognized Security for Mission-Critical Operations
              </h3>
              <p className="text-gray-700 mb-6">
                Stop threats before they launch. Our offensive security experts find and fix vulnerabilities attackers are looking for.
              </p>
              <a
                href="/cyber-intelligence"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition"
              >
                Explore Cyber Intelligence →
              </a>
            </div>

            {/* Enterprise Transformation Card */}
            <div className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition bg-gradient-to-br from-red-50 to-rose-50 md:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-lg mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                Rewire Your Organization for the AI Era
              </h3>
              <p className="text-gray-700 mb-6">
                Don&apos;t optimize outdated models. Fundamentally reconstruct your operating architecture for Fortune 500 power with startup speed.
              </p>
              <a
                href="/enterprise-transformation"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition"
              >
                Explore Enterprise Transformation →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20 border-t border-amber-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10 text-gray-900">Our Guarantees</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white rounded-xl shadow-md border border-amber-200">
              <h3 className="font-semibold mb-2 text-lg text-gray-900">AI Workforce Guarantee</h3>
              <p className="text-gray-700">
                A 20% productivity increase within 90 days or we refund your
                implementation cost.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-amber-200">
              <h3 className="font-semibold mb-2 text-lg text-gray-900">
                Beyond Background Checks™ Guarantee
              </h3>
              <p className="text-gray-700">
                If our investigation doesn&apos;t reveal material, verifiable
                intelligence that would have changed your decision, we refund
                your fee.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                *Material = undisclosed litigation, verified dark-web exposure,
                or evidence of professional misconduct.*
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-amber-200">
              <h3 className="font-semibold mb-2 text-lg text-gray-900">
                Cyber Intelligence Challenge
              </h3>
              <p className="text-gray-700">
                Our offensive assessment will find at least one
                high-severity vulnerability missed by previous tests—or your
                initial assessment is free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER PROFILE */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <img
            src="/images/founder-paras-khurana.jpg"
            alt="Paras Khurana Founder QuantumLeap AI"
            className="mx-auto rounded-full w-32 h-32 object-cover mb-6 shadow-xl border-4 border-yellow-500"
          />
          <h2 className="text-3xl font-semibold mb-4">
            Built by Someone Who&apos;s Been in Your Shoes—and in the Boardroom
          </h2>
          <blockquote className="italic text-gray-300 mb-4 text-lg">
            &quot;I&apos;ve spent 20 years building systems for Fortune 500s—and I&apos;ve also
            been the exhausted entrepreneur doing payroll at midnight.  
            I founded QuantumLeap AI to bridge that gap: bringing enterprise-grade
            intelligence to leaders who need freedom, clarity, and a team that
            never quits.&quot;
          </blockquote>
          <p className="font-semibold text-yellow-400 text-lg">— Paras Khurana, Founder & CEO</p>
          <p className="text-sm text-gray-400 mt-2">
            MIT & Caltech Alum  |  $170M Value Delivered  |  65+ Enterprise
            Transformations  |  75+ Products Ignited
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-4">
            Ready to Turn Your Scale Into Speed?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Book a 30-minute executive briefing. No sales pitch. Just a clear assessment of your transformation opportunities and a roadmap to capture them.
          </p>
          <HeroCTA
            primaryLabel="Schedule Executive Briefing"
            primaryHref="/schedule"
          />
          <p className="text-sm text-orange-100 mt-4">
            🔒 Confidential consultation
          </p>
        </div>
      </section>

      {/* FAQ (VOICE-SEARCH OPTIMIZED) */}
      <section className="bg-gradient-to-br from-gray-50 to-amber-50 py-16 text-left">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 text-gray-700">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                What is an Executive Briefing with QuantumLeap AI?
              </h3>
              <p>
                A 30-minute confidential session with our strategists to map
                high-impact opportunities and a 90-day action plan. No sales pitch.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                How long does the Enterprise Readiness Assessment take?
              </h3>
              <p>
                About 90 seconds. You get an instant score, dollar value at risk,
                and two clear next steps.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                What do I get in the Executive Transformation Brief?
              </h3>
              <p>
                A board-ready blueprint with quick wins, a 90-day pilot, and ROI map
                you can act on immediately.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Is the brief customized to my company?
              </h3>
              <p>
                The brief is a standardized, high-value framework. Custom strategies
                are developed during the Executive Briefing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                How is Beyond Background Checks™ different from standard checks?
              </h3>
              <p>
                Standard checks confirm records; Beyond Background Checks™ performs
                intelligence-grade analysis of digital footprints, dark-web exposure,
                and hidden associations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                What security guarantees do you offer?
              </h3>
              <p>
                Our NASA-recognized offensive assessment guarantees at least one
                high/critical finding—or the assessment is free.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
