
import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | QuantumLeap AI",
  description: "Executive insights from Paras Khurana on AI, automation, cybersecurity, and enterprise resilience. Real-world stories from the boardroom and the battlefield of digital transformation.",
};

const blogPosts = [
  {
    slug: "due-diligence-saved-boardroom",
    title: "How Due Diligence Saved a Boardroom (And Why Background Checks Aren't Enough)",
    excerpt: "A Fortune 500 company narrowly avoided a $50M crisis by going beyond standard background checks. Here's what they found—and why it matters for your next executive hire.",
    date: "October 12, 2025",
    readTime: "6 min read",
  },
  {
    slug: "ai-bots-outpaced-team",
    title: "The Day Our AI Bots Outpaced a 12-Person Team",
    excerpt: "What happens when automation meets enterprise reality? A case study in AI workforce deployment that changed everything.",
    date: "October 8, 2025",
    readTime: "5 min read",
  },
  {
    slug: "automation-revealed",
    title: "How Automation Revealed What Executives Didn't Want to See",
    excerpt: "Sometimes the biggest barrier to transformation isn't technology—it's comfort. Here's what happened when we mapped a Fortune 500's real workflows.",
    date: "September 28, 2025",
    readTime: "7 min read",
  },
  {
    slug: "hidden-meetings",
    title: "The Hidden Meetings That Cost You $2.4M Last Quarter",
    excerpt: "Most enterprises lose 20-35% of productive capacity to unnecessary meetings. Here's how to measure it—and fix it.",
    date: "September 15, 2025",
    readTime: "4 min read",
  },
  {
    slug: "automation-compliance",
    title: "When Automation and Compliance Collide (And How to Win)",
    excerpt: "Regulatory compliance doesn't have to slow you down. Here's how smart enterprises automate without compromise.",
    date: "August 30, 2025",
    readTime: "6 min read",
  },
  {
    slug: "1200-process-map",
    title: "The 1,200-Step Process Map That Changed Everything",
    excerpt: "What we discovered when we mapped a 'simple' procurement workflow—and why your processes are probably just as complex.",
    date: "August 18, 2025",
    readTime: "5 min read",
  },
];

export default function BlogIndexPage() {
  const authorBio = {
    name: "Paras Khurana",
    title: "Founder & CEO, QuantumLeap AI",
    credentials: "MIT & Caltech Alum | $170M Value Delivered | 65+ Enterprise Transformations",
    image: "/images/founder-paras-khurana.jpg",
  };

  return (
    <main className="font-sans text-gray-900">
      {/* HEADER */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20 text-center border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Insights from the Enterprise Frontlines
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Real stories, hard lessons, and strategic insights from two decades of enterprise transformation.
          </p>
          
          {/* Author Bio */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <img
              src={authorBio.image}
              alt={authorBio.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-yellow-500 shadow-lg"
            />
            <div className="text-left">
              <h2 className="font-bold text-xl text-gray-900">{authorBio.name}</h2>
              <p className="text-gray-600">{authorBio.title}</p>
              <p className="text-sm text-gray-500">{authorBio.credentials}</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG POSTS GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition border border-orange-100"
              >
                <div className="mb-4">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <span className="text-xs text-gray-400 mx-2">•</span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-orange-700 transition">
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <span className="text-orange-600 font-medium group-hover:underline">
                  Read Article →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">
            Want insights tailored to your organization?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a 30-minute Executive Briefing and get a custom roadmap for your transformation.
          </p>
          <Link
            href="/schedule"
            className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-600 hover:to-orange-600 transition shadow-lg"
          >
            Book Executive Briefing
          </Link>
        </div>
      </section>
    </main>
  );
}
