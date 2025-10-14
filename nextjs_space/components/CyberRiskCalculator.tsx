
"use client";

import React, { useState } from "react";

interface Inputs {
  employees: number;
  criticalSystems: number;
  thirdParties: number;
  incidentsLastYear: number;
  patchFrequency: "Monthly" | "Quarterly" | "Annually" | "Unknown";
  darkWebHits: "Yes" | "No";
  hasZeroTrust: "Yes" | "No";
}

interface Output {
  breachProbability: number;
  expectedLoss: number;
  riskTier: "Low" | "Moderate" | "High" | "Critical";
  recommendations: Array<{ service: string; reason: string }>;
}

export default function CyberRiskCalculator(): JSX.Element {
  const [input, setInput] = useState<Inputs>({
    employees: 500,
    criticalSystems: 25,
    thirdParties: 40,
    incidentsLastYear: 2,
    patchFrequency: "Quarterly",
    darkWebHits: "No",
    hasZeroTrust: "No",
  });
  const [result, setResult] = useState<Output | null>(null);

  const calc = () => {
    let score = 0;
    score += Math.min(30, input.criticalSystems * 0.8);
    score += Math.min(20, input.thirdParties * 0.5);
    score += input.incidentsLastYear * 5;
    if (input.patchFrequency === "Annually") score += 20;
    else if (input.patchFrequency === "Quarterly") score += 10;
    if (input.darkWebHits === "Yes") score += 20;
    if (input.hasZeroTrust === "No") score += 15;

    const breachProbability = Math.min(100, score);
    const expectedLoss = Math.round((breachProbability / 100) * 4500000); // $4.5 M base
    let riskTier: Output["riskTier"] = "Low";
    if (score >= 80) riskTier = "Critical";
    else if (score >= 60) riskTier = "High";
    else if (score >= 35) riskTier = "Moderate";

    const recommendations: Output["recommendations"] = [];
    if (input.darkWebHits === "Yes")
      recommendations.push({
        service: "Beyond Background Checks™",
        reason: "Compromised credentials found on dark web — verify executive exposure immediately.",
      });
    if (riskTier !== "Low")
      recommendations.push({
        service: "Process Intelligence & Automation",
        reason: "Automate patch and compliance workflows to close gaps faster.",
      });

    setResult({ breachProbability, expectedLoss, riskTier, recommendations });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-2xl mx-auto text-left">
      <div className="grid sm:grid-cols-2 gap-4">
        <label>
          <div className="text-sm font-medium"># of employees</div>
          <input
            type="number"
            value={input.employees}
            onChange={(e) => setInput({ ...input, employees: Number(e.target.value) })}
            className="border p-2 w-full rounded"
          />
        </label>
        <label>
          <div className="text-sm font-medium">Critical systems</div>
          <input
            type="number"
            value={input.criticalSystems}
            onChange={(e) => setInput({ ...input, criticalSystems: Number(e.target.value) })}
            className="border p-2 w-full rounded"
          />
        </label>
        <label>
          <div className="text-sm font-medium">Third-party vendors</div>
          <input
            type="number"
            value={input.thirdParties}
            onChange={(e) => setInput({ ...input, thirdParties: Number(e.target.value) })}
            className="border p-2 w-full rounded"
          />
        </label>
        <label>
          <div className="text-sm font-medium">Incidents last 12 months</div>
          <input
            type="number"
            value={input.incidentsLastYear}
            onChange={(e) => setInput({ ...input, incidentsLastYear: Number(e.target.value) })}
            className="border p-2 w-full rounded"
          />
        </label>
        <label>
          <div className="text-sm font-medium">Patch frequency</div>
          <select
            value={input.patchFrequency}
            onChange={(e) => setInput({ ...input, patchFrequency: e.target.value as Inputs["patchFrequency"] })}
            className="border p-2 w-full rounded"
          >
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Annually</option>
            <option>Unknown</option>
          </select>
        </label>
        <label>
          <div className="text-sm font-medium">Dark web credentials found?</div>
          <select
            value={input.darkWebHits}
            onChange={(e) => setInput({ ...input, darkWebHits: e.target.value as Inputs["darkWebHits"] })}
            className="border p-2 w-full rounded"
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </label>
        <label>
          <div className="text-sm font-medium">Zero-Trust framework implemented?</div>
          <select
            value={input.hasZeroTrust}
            onChange={(e) => setInput({ ...input, hasZeroTrust: e.target.value as Inputs["hasZeroTrust"] })}
            className="border p-2 w-full rounded"
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </label>
      </div>

      <button
        onClick={calc}
        className="mt-6 w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900"
      >
        Calculate Risk
      </button>

      {result && (
        <div className="mt-6 bg-gray-50 p-4 rounded">
          <h3 className="font-semibold text-lg">Risk Tier: {result.riskTier}</h3>
          <p>Estimated breach probability: {result.breachProbability}%</p>
          <p>Expected loss exposure: ${result.expectedLoss.toLocaleString()}</p>
          <ul className="list-disc ml-6 mt-2">
            {result.recommendations.map((r, i) => (
              <li key={i}>
                <strong>{r.service}</strong>: {r.reason}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
