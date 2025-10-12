
"use client";

import React, { useState } from "react";

type RoleSensitivity = "Board" | "C-suite" | "Director" | "Manager";
type TransactionSize = "> $10M" | "$1M - $10M" | "< $1M";
type GeoRisk = "High-risk" | "Mixed" | "Low-risk";
type PublicProfile = "High" | "Medium" | "Low";
type RegulatorySensitivity = "High" | "Medium" | "Low";
type DigitalExposure = "Known breach" | "Credential leak" | "None";
type EmploymentAnomalies = "Multiple terminations" | "Single issue" | "None";
type Hunch = "Yes" | "No";

interface Input {
  role: RoleSensitivity;
  txSize: TransactionSize;
  geo: GeoRisk;
  profile: PublicProfile;
  reg: RegulatorySensitivity;
  digital: DigitalExposure;
  anomalies: EmploymentAnomalies;
  hunch: Hunch;
  email?: string;
}

interface Result {
  riskScore: number;
  riskTier: "Low" | "Moderate" | "High" | "Critical";
  dollarExposureRange: string;
  primaryAction: string;
  secondaryRecommendations: Array<{ service: string; reason: string }>;
}

const defaultInput: Input = {
  role: "Director",
  txSize: "< $1M",
  geo: "Low-risk",
  profile: "Low",
  reg: "Low",
  digital: "None",
  anomalies: "None",
  hunch: "No",
};

export default function ExecutiveRiskCalculator(): JSX.Element {
  const [input, setInput] = useState<Input>(defaultInput);
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/executive-risk/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      if (!res.ok) throw new Error("calc failed");
      const data: Result = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Assessment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const captureLead = async () => {
    if (!result || !input.email) {
      alert("Please enter your email address.");
      return;
    }
    
    try {
      await fetch("/api/capture-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: input.email, 
          source: "Executive Risk Assessment"
        }),
      });
      
      // Trigger playbook download
      window.location.href = "/download-due-diligence-playbook";
      
    } catch (error) {
      console.error("Lead capture error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg p-6 shadow">
      <form onSubmit={submit} className="space-y-4 text-left">
        <label>
          <div className="text-sm font-medium">Role sensitivity</div>
          <select 
            value={input.role} 
            onChange={(e) => setInput({ ...input, role: e.target.value as RoleSensitivity })} 
            className="mt-1 w-full border p-2 rounded"
          >
            <option value="Board">Board</option>
            <option value="C-suite">C-suite</option>
            <option value="Director">Director</option>
            <option value="Manager">Manager</option>
          </select>
        </label>

        <label>
          <div className="text-sm font-medium">Transaction size / exposure</div>
          <select 
            value={input.txSize} 
            onChange={(e) => setInput({ ...input, txSize: e.target.value as TransactionSize })} 
            className="mt-1 w-full border p-2 rounded"
          >
            <option value="> $10M">&gt; $10M</option>
            <option value="$1M - $10M">$1M - $10M</option>
            <option value="< $1M">&lt; $1M</option>
          </select>
        </label>

        <label>
          <div className="text-sm font-medium">Geographic risk</div>
          <select 
            value={input.geo} 
            onChange={(e) => setInput({ ...input, geo: e.target.value as GeoRisk })} 
            className="mt-1 w-full border p-2 rounded"
          >
            <option value="High-risk">High-risk</option>
            <option value="Mixed">Mixed</option>
            <option value="Low-risk">Low-risk</option>
          </select>
        </label>

        <label>
          <div className="text-sm font-medium">Public profile & influence</div>
          <select 
            value={input.profile} 
            onChange={(e) => setInput({ ...input, profile: e.target.value as PublicProfile })} 
            className="mt-1 w-full border p-2 rounded"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>

        <label>
          <div className="text-sm font-medium">Industry regulatory sensitivity</div>
          <select 
            value={input.reg} 
            onChange={(e) => setInput({ ...input, reg: e.target.value as RegulatorySensitivity })} 
            className="mt-1 w-full border p-2 rounded"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>

        <label>
          <div className="text-sm font-medium">Digital exposure</div>
          <select 
            value={input.digital} 
            onChange={(e) => setInput({ ...input, digital: e.target.value as DigitalExposure })} 
            className="mt-1 w-full border p-2 rounded"
          >
            <option value="Known breach">Known breach</option>
            <option value="Credential leak">Credential leak</option>
            <option value="None">None</option>
          </select>
        </label>

        <label>
          <div className="text-sm font-medium">Employment anomalies</div>
          <select 
            value={input.anomalies} 
            onChange={(e) => setInput({ ...input, anomalies: e.target.value as EmploymentAnomalies })} 
            className="mt-1 w-full border p-2 rounded"
          >
            <option value="Multiple terminations">Multiple terminations</option>
            <option value="Single issue">Single issue</option>
            <option value="None">None</option>
          </select>
        </label>

        <label className="flex items-center space-x-3">
          <input 
            type="checkbox" 
            checked={input.hunch === "Yes"} 
            onChange={(e) => setInput({ ...input, hunch: e.target.checked ? "Yes" : "No" })} 
          />
          <div className="text-sm">Internal team flag / gut hunch</div>
        </label>

        <div className="flex gap-3">
          <button 
            type="submit" 
            disabled={loading} 
            className="px-4 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-800 disabled:bg-gray-400"
          >
            {loading ? "Assessing…" : "Run Assessment"}
          </button>
          <button 
            type="button" 
            onClick={() => {
              setInput(defaultInput);
              setResult(null);
            }} 
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Reset
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-6 bg-white p-4 rounded shadow text-left">
          <h4 className="font-semibold mb-2 text-lg">
            Risk: {result.riskTier} ({result.riskScore}/100)
          </h4>
          <p className="text-sm text-gray-600 mb-2">
            Estimated exposure: <strong>{result.dollarExposureRange}</strong>
          </p>
          <p className="mb-3">
            <strong>Primary Action:</strong> {result.primaryAction}
          </p>
          <div className="mb-4">
            <h5 className="font-semibold mb-2">Recommended next steps</h5>
            <ul className="list-disc ml-5 space-y-1">
              {result.secondaryRecommendations?.map((r, i) => (
                <li key={i}>
                  <strong>{r.service}:</strong> {r.reason}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            <button 
              onClick={() => (window.location.href = "/schedule")} 
              className="px-3 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-800"
            >
              Book Executive Briefing
            </button>

            <div>
              <label className="text-sm font-medium">Get the Due Diligence Playbook</label>
              <input 
                className="w-full border p-2 rounded mt-1" 
                type="email" 
                placeholder="you@company.com" 
                value={input.email || ""} 
                onChange={(e) => setInput({ ...input, email: e.target.value })} 
              />
              <button 
                onClick={captureLead} 
                className="mt-2 w-full px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
              >
                Send Playbook
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
