
// app/ai-workforce/page.tsx
import React from "react";
import { HeroCTA } from "@/components/hero-cta";
import TestimonialCarousel from "@/components/testimonial-carousel";
import AIWorkforceCalculator from "@/components/ai-workforce-calculator";
import { BlogCard } from "@/components/blog-card";

export default function AIWorkforceServicePage() {
  return (
    <main className="font-sans text-gray-800">
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-amber-900 to-orange-800 text-white py-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Build an AI Workforce That Works as Hard as You Do
          </h1>
          <p className="text-lg md:text-xl text-amber-100 mb-10">
            Automate intelligently. Deploy confidently. Free your best people
            to lead, not repeat.
          </p>
          <HeroCTA
            primaryLabel="Book Executive Briefing"
            primaryHref="/schedule"
            secondaryLabel="Download AI Workforce Blueprint"
            secondaryHref="#gated-offer"
          />
        </div>
      </section>

      {/* TRUST BAR */}
      <section
        aria-label="Trusted by industry leaders"
        className="w-full bg-white border-b border-gray-100 py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-6">
            The Intelligence Behind Industry Leaders
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {[
              "IBM",
              "BMO",
              "HSBC",
              "CIBC",
              "GE",
              "Deloitte",
              "NASA",
              "Allianz",
            ].map((logo) => (
              <span
                key={logo}
                className="text-gray-400 font-medium text-base md:text-lg grayscale hover:grayscale-0 transition duration-300 opacity-80 hover:opacity-100"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
            Your People Aren&apos;t the Problem. Your Processes Are.
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Most enterprises lose 20–35% of productive capacity to repetitive
            tasks. The real question isn&apos;t &quot;Can AI help?&quot;—it&apos;s &quot;How fast can we
            make it help responsibly?&quot;
          </p>
          <ul className="text-left md:text-center inline-block space-y-2 text-gray-700">
            <li>• 80% of enterprise tasks are automatable with today&apos;s AI.</li>
            <li>
              • 65% of executives say legacy workflows are blocking progress.
            </li>
            <li>
              • 90 days: average time to visible productivity increase with an
              AI Workforce.
            </li>
          </ul>
        </div>
      </section>

      {/* GATED OFFER */}
      <section id="gated-offer" className="bg-white py-20 text-center border-t border-amber-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Get the AI Workforce Blueprint
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            A concise, field-tested guide for business leaders to plan,
            prioritize, and implement enterprise-grade automation within 90 days.
          </p>
          <ul className="text-left inline-block text-gray-700 mb-8 space-y-2">
            <li>• Identify your top 5 automation opportunities.</li>
            <li>• Learn proven adoption frameworks used by Fortune 500 teams.</li>
            <li>• Includes 90-Day Implementation Map and ROI Calculator.</li>
          </ul>
          <HeroCTA
            primaryLabel="Download Free Blueprint"
            primaryHref="#ai-calculator"
          />
          <p className="text-xs text-gray-400 mt-3">
            🔒 No spam. Your information remains private.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="ai-calculator" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            How Ready Is Your Organization for an AI Workforce?
          </h2>
          <p className="text-gray-700 mb-10 text-lg">
            Take a 90-second assessment to reveal productivity potential,
            risk exposure, and tailored recommendations.
          </p>
          <AIWorkforceCalculator />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialCarousel
        testimonials={[
          {
            quote:
              "QuantumLeap's deployment saved us from a $200K+ loss. The relief in the boardroom was palpable—we finally filled the position with confidence.",
            before:
              "Delayed automation rollout causing errors and staff burnout.",
            after: "20% faster processing, reduced overtime costs by 40%.",
            author: "Tiffany Duncan",
            title: "Director, FinTech Division",
            company: "Global Finance Group",
            rating: "★★★★★",
            isAnonymized: false,
          },
          {
            quote:
              "Within 60 days, we doubled team output. I take weekends off now.",
            before:
              "Chronic backlog and dependence on manual data reconciliation.",
            after:
              "AI Workforce reduced workload 50%, accuracy ↑ 97%, morale ↑ dramatically.",
            author: "Peter Fernandes",
            title: "COO",
            company: "Retail Analytics Firm",
            rating: "★★★★★",
            isAnonymized: false,
          },
          {
            quote:
              "The automation found a $1.3M billing discrepancy no human audit had ever caught.",
            before:
              "Fragmented systems creating invisible revenue leaks.",
            after:
              "$1.3M recovered, audit cycle time cut by 80%.",
            author: "Masoud Nasserie",
            title: "CIO",
            company: "Energy Logistics Co.",
            rating: "★★★★★",
            isAnonymized: false,
          },
        ]}
      />

      {/* SERVICE FRAMEWORK */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-left md:text-center">
          <h2 className="text-3xl font-semibold mb-12 text-gray-900">
            What an AI Workforce Looks Like in Action
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 border border-amber-100 rounded-xl shadow-sm bg-gradient-to-br from-white to-amber-50">
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                1. Map & Measure
              </h3>
              <p className="text-gray-700">
                Identify high-frequency, low-judgment processes that consume
                valuable talent bandwidth. Quantify cost and time leakage.
              </p>
            </div>
            <div className="p-8 border border-amber-100 rounded-xl shadow-sm bg-gradient-to-br from-white to-amber-50">
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                2. Automate & Integrate
              </h3>
              <p className="text-gray-700">
                Deploy secure AI agents within existing systems—ERP, CRM, HRIS—
                without disrupting compliance or control.
              </p>
            </div>
            <div className="p-8 border border-amber-100 rounded-xl shadow-sm bg-gradient-to-br from-white to-amber-50">
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                3. Empower & Evolve
              </h3>
              <p className="text-gray-700">
                Free your workforce to focus on innovation, strategy, and client
                relationships while AI handles the repetitive grind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20 border-t border-amber-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">Our AI Workforce Guarantee</h2>
          <p className="text-lg text-gray-700 mb-6">
            We guarantee a 20% productivity increase within 90 days—  
            or we refund your implementation cost. Period.
          </p>
          <p className="text-sm text-gray-600">
            Confidence backed by $170M USD in enterprise value delivered.
          </p>
        </div>
      </section>

      {/* MINI BLOGS */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
            Boardroom Briefs — Stories from the Front Line
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <BlogCard
              title="The Day Our Bots Outpaced Our Team—and Everyone Cheered"
              summary="When a Fortune 100 operations leader replaced 2 weeks of manual reconciliations with 3 hours of AI work, skepticism turned into applause. Productivity up 180%, morale through the roof."
              link="/blog/ai-bots-outpaced-team"
            />
            <BlogCard
              title="What 45 Minutes of Automation Revealed About Our Company"
              summary="A simple pilot uncovered $600K in hidden costs — and a cultural shift that changed how the board saw innovation forever."
              link="/blog/automation-revealed"
            />
            <BlogCard
              title="When Due Diligence Saved a Boardroom"
              summary="A client almost hired a CTO with hidden conflicts. Beyond Background Checks™ surfaced critical data — and saved $5M in potential losses."
              link="/blog/due-diligence-saved-boardroom"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-amber-900 to-orange-800 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">
            Stop Losing Momentum to Repetition
          </h2>
          <p className="text-lg mb-8 text-amber-100">
            Let AI handle the repetitive work so your team can do the remarkable.
          </p>
          <HeroCTA
            primaryLabel="Book Executive Briefing"
            primaryHref="/schedule"
            secondaryLabel="Download AI Workforce Blueprint"
            secondaryHref="#ai-calculator"
          />
        </div>
      </section>

      {/* FAQ (VOICE SEARCH) */}
      <section className="bg-gradient-to-br from-gray-50 to-amber-50 py-16 text-left">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 text-gray-700">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                How fast can an AI Workforce deliver results?
              </h3>
              <p>
                Most clients see measurable productivity gains within 60–90 days.
                Our framework prioritizes quick wins before enterprise-wide rollout.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Does this replace employees?
              </h3>
              <p>
                No. It removes repetitive tasks so your people can focus on
                strategic work that drives growth and innovation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Is it secure?
              </h3>
              <p>
                Absolutely. Our deployments follow NASA-recognized security
                standards with full data-privacy compliance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                What industries benefit most?
              </h3>
              <p>
                Financial services, logistics, healthcare, retail, and energy —
                any sector with repetitive, data-driven workflows.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                What&apos;s included in the AI Workforce Blueprint?
              </h3>
              <p>
                A detailed roadmap, 90-day implementation plan, ROI model, and
                case studies from real enterprise deployments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
