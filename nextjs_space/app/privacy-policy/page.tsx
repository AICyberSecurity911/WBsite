
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | QuantumLeap AI",
  description: "Learn how QuantumLeap AI collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="font-sans text-gray-900">
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 text-center border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-700">
            Last Updated: October 14, 2025
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-6 text-gray-700">
            QuantumLeap AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="mb-4 text-gray-700">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Personal Information:</strong> Name, email address, phone number, company name, job title, and other information you provide when contacting us or using our services.</li>
            <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on our site.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience and analyze website traffic.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4 text-gray-700">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Analyze usage patterns and optimize our website</li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
          <p className="mb-6 text-gray-700">
            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and delivering our services</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p className="mb-6 text-gray-700">
            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p className="mb-4 text-gray-700">Depending on your jurisdiction, you may have the following rights:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Access, correct, or delete your personal information</li>
            <li>Object to or restrict processing of your data</li>
            <li>Withdraw consent for marketing communications</li>
            <li>Request data portability</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">7. Cookies Policy</h2>
          <p className="mb-6 text-gray-700">
            We use cookies to improve your browsing experience and analyze website traffic. You can control cookies through your browser settings, but disabling cookies may affect website functionality.
          </p>

          <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
          <p className="mb-6 text-gray-700">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
          </p>

          <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
          <p className="mb-6 text-gray-700">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
          </p>

          <h2 className="text-2xl font-semibold mb-4">10. International Data Transfers</h2>
          <p className="mb-6 text-gray-700">
            Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data.
          </p>

          <h2 className="text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
          <p className="mb-6 text-gray-700">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>

          <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
          <p className="mb-6 text-gray-700">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="mb-2 text-gray-700"><strong>QuantumLeap AI</strong></p>
          <p className="mb-2 text-gray-700">Email: privacy@quantumleapai.com</p>
          <p className="mb-6 text-gray-700">Website: www.quantumleapai.com</p>
        </div>
      </section>
    </main>
  );
}
