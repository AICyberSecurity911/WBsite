
"use client";

import React, { useState } from "react";
import { HeroCTA } from "@/components/hero-cta";

export default function DownloadDueDiligencePlaybookPage() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    if (!consent) {
      alert("Please consent to our privacy policy to continue.");
      return;
    }

    setLoading(true);

    try {
      // Capture lead
      const response = await fetch("/api/capture-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "Due Diligence Playbook Download",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to capture lead");
      }

      // Mark success
      setSuccess(true);

      // Simulate download (in production, this would trigger an actual PDF download)
      // For now, we'll just show a success message
      alert(
        "Thank you! The Due Diligence Playbook will be sent to your email shortly."
      );

    } catch (error) {
      console.error("Download error:", error);
      alert("Something went wrong. Please try again or contact support.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <div className="mb-6">
            <svg
              className="mx-auto h-16 w-16 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Check Your Inbox!</h1>
          <p className="text-lg text-gray-700 mb-6">
            We've sent the Due Diligence Playbook to <strong>{email}</strong>.
          </p>
          <p className="text-gray-600 mb-8">
            The playbook includes quick red flags, verification checklists, and vendor briefing questions
            to help you spot hiring and deal risks before they become boardroom disasters.
          </p>
          <HeroCTA
            primaryLabel="Book Executive Briefing"
            primaryHref="/schedule"
            secondaryLabel="Back to Home"
            secondaryHref="/"
          />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Download: Due Diligence Playbook
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          Get the one-page executive playbook used by boards to spot hiring and deal risk fast.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="font-semibold mb-3">What's Inside:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">✓</span>
              <span>Quick red flags every executive should know</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">✓</span>
              <span>Two-step verification checklist you can run before interviews</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">✓</span>
              <span>What to ask a vendor during a first briefing</span>
            </li>
          </ul>
        </div>

        <form onSubmit={handleDownload} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="flex items-start">
            <input
              id="consent"
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 mr-3"
              required
            />
            <label htmlFor="consent" className="text-sm text-gray-600">
              I consent to use of my contact data in accordance with QuantumLeap AI's Privacy Policy.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Processing..." : "Download Playbook"}
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          One free download per executive. No custom reports. Confidential.
        </p>
      </div>
    </main>
  );
}
