
import React from "react";
import { HeroCTA } from "@/components/hero-cta";
import TrustBar from "@/components/trust-bar";
import TestimonialCarousel from "@/components/testimonial-carousel";
import ExecutiveRiskCalculator from "@/components/executive-risk-calculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beyond Background Checks™ — Executive Due Diligence | QuantumLeap AI",
  description: "Beyond Background Checks™ delivers intelligence-grade executive due diligence: uncover hidden risk before hires, deals or partnerships. Book a confidential briefing or run the Executive Risk Assessment.",
};

export default function BeyondBackgroundChecksPage() {
  return (
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
            Beyond Background Checks™: Intelligence-Grade Executive Due Diligence
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Hire, invest, and partner with confidence. We find the things
            standard checks miss—before they become boardroom disasters.
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

      {/* BOARDROOM RISK */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">Blind hires, blind deals — real boardroom risk</h2>
          <p className="text-gray-700 mb-6">
            Standard checks confirm records. Beyond Background Checks™ finds behavior,
            associations, and digital signals that matter when millions and reputations are at stake.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h3 className="font-semibold">Hidden history</h3>
              <p className="text-gray-600">Terminations, undisclosed litigation, pattern behaviors.</p>
            </div>
            <div>
              <h3 className="font-semibold">Digital risk</h3>
              <p className="text-gray-600">Dark-web exposure, account compromise, toxic networks.</p>
            </div>
            <div>
              <h3 className="font-semibold">Decision impact</h3>
              <p className="text-gray-600">Board trust, regulatory exposure, M&A fallout.</p>
            </div>
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
  );
}
