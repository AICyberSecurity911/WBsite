
// components/ai-workforce-calculator.tsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type AvgCostRange = "$80,000 - $150,000" | "$150,000 - $250,000" | "$250,000+";
type TimeToFill = "Under 90 days" | "90-120 days" | "120+ days";
type Urgency = "Immediate (0-3 months)" | "Short-term (3-6 months)" | "Long-term (6+ months)";

interface InputValues {
  newHires: number;
  avgCost: AvgCostRange;
  timeToFill: TimeToFill;
  routinePercent: number;
  employeesToLiberate: number;
  urgency: Urgency;
}

interface ResultValues {
  traditional3Year: number;
  ai3Year: number;
  directSavings: number;
  timeAdvantageValue: number;
  liberatedProductivity: number;
  totalValueCreated: number;
  roi: number;
  recommendation: {
    primaryTier: string;
    rationale: string;
  };
  secondaryServices: Array<{ service: string; reason: string }>;
}

const defaultInput: InputValues = {
  newHires: 20,
  avgCost: "$150,000 - $250,000",
  timeToFill: "90-120 days",
  routinePercent: 40,
  employeesToLiberate: 100,
  urgency: "Short-term (3-6 months)",
};

export default function AIWorkforceCalculator(): JSX.Element {
  const [input, setInput] = useState<InputValues>(defaultInput);
  const [result, setResult] = useState<ResultValues | null>(null);
  const [loading, setLoading] = useState(false);
  const [leadEmail, setLeadEmail] = useState("");

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/ai-workforce/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      if (!res.ok) throw new Error("Calculation failed");
      const data: ResultValues = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Calculation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const captureLead = async () => {
    if (!leadEmail || !leadEmail.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }
    try {
      await fetch("/api/capture-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: leadEmail,
          source: "AI Workforce Blueprint",
          snapshot: result,
        }),
      });
      alert("Thank you! The AI Workforce Blueprint will be sent to your inbox.");
      setLeadEmail("");
    } catch (err) {
      console.error(err);
      alert("Failed to capture lead. Please try again.");
    }
  };

  return (
    <section className="max-w-5xl mx-auto p-8 bg-white rounded-xl shadow-lg border border-amber-100">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="grid sm:grid-cols-2 gap-6">
          {/* New Hires */}
          <div className="space-y-2">
            <Label htmlFor="newHires" className="text-gray-700 font-medium">
              Specialized roles to fill (12 months)
            </Label>
            <Input
              id="newHires"
              type="number"
              min={0}
              value={input.newHires}
              onChange={(e) => setInput({ ...input, newHires: Number(e.target.value) })}
              className="border-gray-300"
            />
          </div>

          {/* Avg Cost */}
          <div className="space-y-2">
            <Label htmlFor="avgCost" className="text-gray-700 font-medium">
              Avg fully-loaded cost per hire (annual)
            </Label>
            <Select
              value={input.avgCost}
              onValueChange={(value) => setInput({ ...input, avgCost: value as AvgCostRange })}
            >
              <SelectTrigger id="avgCost" className="border-gray-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="$80,000 - $150,000">$80,000 - $150,000</SelectItem>
                <SelectItem value="$150,000 - $250,000">$150,000 - $250,000</SelectItem>
                <SelectItem value="$250,000+">$250,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Time to Fill */}
          <div className="space-y-2">
            <Label htmlFor="timeToFill" className="text-gray-700 font-medium">
              Average time-to-fill
            </Label>
            <Select
              value={input.timeToFill}
              onValueChange={(value) => setInput({ ...input, timeToFill: value as TimeToFill })}
            >
              <SelectTrigger id="timeToFill" className="border-gray-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Under 90 days">Under 90 days</SelectItem>
                <SelectItem value="90-120 days">90-120 days</SelectItem>
                <SelectItem value="120+ days">120+ days</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Routine Percent */}
          <div className="space-y-2">
            <Label htmlFor="routinePercent" className="text-gray-700 font-medium">
              % of skilled team&apos;s time on routine tasks
            </Label>
            <div className="space-y-2">
              <input
                id="routinePercent"
                type="range"
                min={0}
                max={60}
                value={input.routinePercent}
                onChange={(e) => setInput({ ...input, routinePercent: Number(e.target.value) })}
                className="w-full accent-amber-600"
              />
              <div className="text-sm text-gray-500 text-right font-medium">{input.routinePercent}%</div>
            </div>
          </div>

          {/* Employees to Liberate */}
          <div className="space-y-2">
            <Label htmlFor="employeesToLiberate" className="text-gray-700 font-medium">
              Employees you could free from routine work
            </Label>
            <Input
              id="employeesToLiberate"
              type="number"
              min={0}
              value={input.employeesToLiberate}
              onChange={(e) => setInput({ ...input, employeesToLiberate: Number(e.target.value) })}
              className="border-gray-300"
            />
          </div>

          {/* Urgency */}
          <div className="space-y-2">
            <Label htmlFor="urgency" className="text-gray-700 font-medium">
              How quickly do you need capacity?
            </Label>
            <Select
              value={input.urgency}
              onValueChange={(value) => setInput({ ...input, urgency: value as Urgency })}
            >
              <SelectTrigger id="urgency" className="border-gray-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Immediate (0-3 months)">Immediate (0-3 months)</SelectItem>
                <SelectItem value="Short-term (3-6 months)">Short-term (3-6 months)</SelectItem>
                <SelectItem value="Long-term (6+ months)">Long-term (6+ months)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-lg shadow-md transition-all"
          >
            {loading ? "Calculating..." : "Calculate 3-Year Value"}
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setInput(defaultInput);
              setResult(null);
            }}
            className="px-6 py-3 border-amber-600 text-amber-700 hover:bg-amber-50"
          >
            Reset
          </Button>
        </div>
      </form>

      {/* Results */}
      {result && (
        <div className="mt-10 bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border border-amber-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">3-Year Value Summary</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Traditional 3-year cost</div>
              <div className="text-2xl font-bold text-gray-900">${result.traditional3Year.toLocaleString()}</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-1">AI Workforce 3-year cost</div>
              <div className="text-2xl font-bold text-amber-700">${result.ai3Year.toLocaleString()}</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Direct savings</div>
              <div className="text-2xl font-bold text-green-700">${result.directSavings.toLocaleString()}</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Time advantage value</div>
              <div className="text-xl font-semibold text-gray-900">${result.timeAdvantageValue.toLocaleString()}</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Liberated productivity</div>
              <div className="text-xl font-semibold text-gray-900">${result.liberatedProductivity.toLocaleString()}</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Total value created</div>
              <div className="text-2xl font-bold text-amber-700">${result.totalValueCreated.toLocaleString()}</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-1">ROI (vs AI cost)</div>
              <div className="text-2xl font-bold text-green-700">{result.roi}%</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm col-span-2">
              <div className="text-sm text-gray-500 mb-2">Primary recommendation</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{result.recommendation.primaryTier}</div>
              <div className="text-sm text-gray-600">{result.recommendation.rationale}</div>
            </div>
          </div>

          <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold text-lg mb-3 text-gray-900">Immediate next steps</h4>
            <ul className="space-y-2">
              {result.secondaryServices.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <div>
                    <strong className="text-gray-900">{s.service}:</strong>{" "}
                    <span className="text-gray-700">{s.reason}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <Button
              onClick={() => (window.location.href = "/schedule")}
              className="w-full px-6 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-lg shadow-md text-lg"
            >
              Book Executive Briefing
            </Button>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
              <div className="text-sm text-gray-700 mb-3 font-medium">Get the AI Workforce Blueprint</div>
              <Input
                type="email"
                placeholder="you@company.com"
                value={leadEmail}
                onChange={(e) => setLeadEmail(e.target.value)}
                className="w-full mb-3 border-gray-300"
              />
              <Button
                onClick={captureLead}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold"
              >
                Send Blueprint
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
