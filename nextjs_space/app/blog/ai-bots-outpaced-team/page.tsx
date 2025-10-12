
// app/blog/ai-bots-outpaced-team/page.tsx
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/ai-workforce"
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to AI Workforce
        </Link>

        <article className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-amber-100">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            The Day Our Bots Outpaced Our Team—and Everyone Cheered
          </h1>
          <p className="text-gray-500 mb-8">Published October 2025</p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              When a Fortune 100 operations leader replaced 2 weeks of manual reconciliations 
              with 3 hours of AI work, skepticism turned into applause. Productivity up 180%, 
              morale through the roof.
            </p>

            <p className="mt-6">
              This case study demonstrates how intelligent automation can transform enterprise 
              operations without displacing your workforce. Instead, it empowers them to focus 
              on strategic initiatives while AI handles the repetitive, time-consuming tasks.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Coming Soon</h2>
            <p>
              Full case study with detailed metrics, implementation timeline, and ROI analysis 
              will be available here shortly.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-amber-100">
            <Link
              href="/schedule"
              className="inline-block px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-lg shadow-md transition-all"
            >
              Discuss Your AI Workforce Strategy
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
