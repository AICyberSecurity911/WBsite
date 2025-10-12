
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 1,200-Process Map That Saved a Fortune | QuantumLeap AI",
  description: "A global manufacturer discovered $8M annual waste after QuantumLeap's AI mapped its entire supply chain — and automated procurement in 10 weeks.",
};

export default function ProcessMapBlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/process-intelligence" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Process Intelligence
      </Link>
      
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        The 1,200-Process Map That Saved a Fortune
      </h1>
      
      <div className="text-gray-600 mb-8">
        <time>October 2025</time> • 8 min read
      </div>

      <div className="relative w-full aspect-video mb-8 bg-gray-200 rounded-lg overflow-hidden">
        <Image
          src="https://cdn.abacus.ai/images/26e5ad0d-5d3e-477d-bd39-2c60a1125857.png"
          alt="Process Intelligence Dashboard"
          fill
          className="object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-6 font-medium">
          When a global manufacturing leader engaged QuantumLeap AI to analyze their operations, 
          they expected insights. What they got was a complete transformation of how they understood their business.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Challenge: Invisible Inefficiency</h2>
        
        <p>
          With operations spanning 10 countries and thousands of employees, the manufacturer knew they had 
          inefficiencies. What they didn't know was the scale. Manual processes, disparate systems, and 
          tribal knowledge had created a web of workflows that nobody fully understood.
        </p>

        <p>
          Traditional consulting approaches would have taken months of interviews and workshops. 
          QuantumLeap AI took a different route: let the data tell the story.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Discovery: 1,200 Processes Mapped in 3 Weeks</h2>
        
        <p>
          Using AI-driven process mining, QuantumLeap's platform analyzed system logs, transaction data, 
          and user interactions across the entire organization. The result? A comprehensive map of 1,200 
          distinct business processes, visualized in unprecedented detail.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
          <h3 className="font-semibold text-lg mb-2">Key Findings:</h3>
          <ul className="space-y-2">
            <li>• 47% of procurement steps were redundant</li>
            <li>• Average approval time: 11.3 days (industry standard: 2.1 days)</li>
            <li>• 23 different systems required for a single purchase order</li>
            <li>• $8.2M in annual cost leakage from process inefficiency</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Transformation: Automation at Scale</h2>
        
        <p>
          With the process map in hand, QuantumLeap identified the highest-value automation opportunities. 
          Within 10 weeks, they had:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Automated 600+ manual handoffs in procurement workflows</li>
          <li>Reduced approval times from 11.3 days to 1.8 days</li>
          <li>Eliminated 18 redundant system touchpoints</li>
          <li>Created real-time dashboards for process monitoring</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Results: Measurable Impact</h2>
        
        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-blue-800 mb-2">$4.7M</div>
            <div className="text-sm text-gray-600">Annual savings (first year)</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-blue-800 mb-2">84%</div>
            <div className="text-sm text-gray-600">Reduction in processing time</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-blue-800 mb-2">10 weeks</div>
            <div className="text-sm text-gray-600">Time to full deployment</div>
          </div>
        </div>

        <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700 my-8">
          "We thought we knew our processes. The reality was humbling — and transformative. 
          QuantumLeap didn't just find inefficiency; they gave us a roadmap to eliminate it."
          <br />
          <span className="text-sm font-semibold not-italic">— VP of Operations, Global Manufacturing Leader</span>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Lesson: Process Intelligence is a Strategic Advantage</h2>
        
        <p>
          This wasn't just a cost-cutting exercise. By understanding their processes at a granular level, 
          the manufacturer gained strategic advantages:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Faster decision-making:</strong> Real-time process visibility enabled data-driven decisions</li>
          <li><strong>Competitive agility:</strong> Reduced cycle times allowed faster response to market changes</li>
          <li><strong>Scalable foundation:</strong> Automated processes could scale without adding headcount</li>
          <li><strong>Risk reduction:</strong> Standardized workflows reduced compliance and operational risk</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Turn</h2>
        
        <p>
          Every enterprise has hidden inefficiencies. The question isn't whether they exist — it's whether 
          you can see them. Process Intelligence makes the invisible visible, turning operational friction 
          into competitive advantage.
        </p>

        <div className="bg-gradient-to-r from-blue-800 to-slate-900 text-white p-8 rounded-lg my-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to map your processes?</h3>
          <p className="mb-6">Download our free Process Intelligence Playbook to get started.</p>
          <Link 
            href="/download-playbook"
            className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Download Free Playbook
          </Link>
        </div>
      </div>
    </article>
  );
}
