
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | QuantumLeap AI",
  description: "Read the terms and conditions for using QuantumLeap AI's services and website.",
};

export default function TermsPage() {
  return (
    <main className="font-sans text-gray-900">
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 text-center border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-700">
            Last Updated: October 14, 2025
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6 text-gray-700">
            By accessing or using the QuantumLeap AI website and services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our Services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
          <p className="mb-6 text-gray-700">
            QuantumLeap AI provides enterprise AI solutions, including AI Workforce deployment, Process Intelligence & Automation, Enterprise Cyber Intelligence, Beyond Background Checks™, and Enterprise Transformation services. The specific scope of services will be defined in individual service agreements.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          <p className="mb-4 text-gray-700">When using our Services, you agree to:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Provide accurate and complete information</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Use the Services in compliance with all applicable laws and regulations</li>
            <li>Not engage in any activity that could harm or disrupt our Services</li>
            <li>Not attempt to gain unauthorized access to our systems</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property Rights</h2>
          <p className="mb-6 text-gray-700">
            All content, materials, and intellectual property rights in our Services are owned by QuantumLeap AI or our licensors. You may not copy, modify, distribute, or create derivative works without our express written permission.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Service Guarantees</h2>
          <p className="mb-4 text-gray-700">We offer the following service guarantees:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>AI Workforce Guarantee:</strong> 20% productivity increase within 90 days or refund of implementation cost</li>
            <li><strong>Beyond Background Checks™ Guarantee:</strong> Material intelligence discovery or fee refund</li>
            <li><strong>Cyber Intelligence Challenge:</strong> High-severity vulnerability discovery or free initial assessment</li>
          </ul>
          <p className="mb-6 text-gray-700">
            Specific terms and conditions for each guarantee will be provided in individual service agreements.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Payment and Fees</h2>
          <p className="mb-6 text-gray-700">
            Fees for our Services will be specified in individual service agreements. Payment terms, billing cycles, and refund policies will be outlined in those agreements. All fees are non-refundable except as explicitly stated in service guarantees.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Confidentiality</h2>
          <p className="mb-6 text-gray-700">
            We treat all client information as confidential and will not disclose it to third parties except as required by law or with your explicit consent. Confidentiality terms will be further detailed in individual service agreements and Non-Disclosure Agreements (NDAs).
          </p>

          <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
          <p className="mb-6 text-gray-700">
            To the maximum extent permitted by law, QuantumLeap AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
          </p>

          <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
          <p className="mb-6 text-gray-700">
            You agree to indemnify and hold harmless QuantumLeap AI and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of our Services or violation of these Terms.
          </p>

          <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
          <p className="mb-6 text-gray-700">
            We reserve the right to suspend or terminate your access to our Services at any time for violation of these Terms or for any other reason at our discretion. Upon termination, you must cease all use of our Services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">11. Disclaimer of Warranties</h2>
          <p className="mb-6 text-gray-700">
            Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our Services will be uninterrupted, error-free, or completely secure.
          </p>

          <h2 className="text-2xl font-semibold mb-4">12. Governing Law and Jurisdiction</h2>
          <p className="mb-6 text-gray-700">
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which QuantumLeap AI operates, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of that jurisdiction.
          </p>

          <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
          <p className="mb-6 text-gray-700">
            We may modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of our Services after such changes constitutes acceptance of the new Terms.
          </p>

          <h2 className="text-2xl font-semibold mb-4">14. Severability</h2>
          <p className="mb-6 text-gray-700">
            If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
          </p>

          <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
          <p className="mb-6 text-gray-700">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mb-2 text-gray-700"><strong>QuantumLeap AI</strong></p>
          <p className="mb-2 text-gray-700">Email: legal@quantumleapai.com</p>
          <p className="mb-6 text-gray-700">Website: www.quantumleapai.com</p>
        </div>
      </section>
    </main>
  );
}
