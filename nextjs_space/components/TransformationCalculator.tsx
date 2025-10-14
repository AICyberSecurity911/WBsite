
"use client";

import React, { useState } from "react";

interface Inputs {
  employees: number;
  annualRevenue: number;
  efficiencyGain: number;
  decisionSpeed: number;
  techAdoption: "Low" | "Medium" | "High";
}

interface Output {
  projectedROI: number;
  annualSavings: number;
  maturityStage: "Emerging" | "Scaling" | "Advanced";
  recommendations: string[];
}

export default function TransformationCalculator(): JSX.Element {
  const [input, setInput] = useState<Inputs>({
    employees: 500,
    annualRevenue: 100000000,
    efficiencyGain: 10,
    decisionSpeed: 15,
    techAdoption: "Medium",
  });
  const [result, setResult] = useState<Output | null>(null);

  const calc = () => {
    const baseImpact = input.efficiencyGain * 0.6 + input.decisionSpeed * 0.4;
    let projectedROI = baseImpact;
    if (input.techAdoption === "High") projectedROI += 15;
    if (input.techAdoption === "Low") projectedROI -= 10;
    const annualSavings = (input.annualRevenue * projectedROI) / 1000;
    let maturityStage: Output["maturityStage"] = "Emerging";
    if (projectedROI > 35) maturityStage = "Advanced";
    else if (projectedROI > 20) maturityStage = "Scaling";
    const recommendations: string[] = [];
    if (input.techAdoption === "Low") recommendations.push("Start with AI Workforce for measurable quick wins.");
    if (input.efficiencyGain < 15) recommendations.push("Leverage Process Intelligence to uncover hidden process drag.");
    recommendations.push("Integrate Cyber Intelligence for risk-adjusted scaling.");

    setResult({ projectedROI, annualSavings, maturityStage, recommendations });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-2xl mx-auto text-left">
      <div className="grid sm:grid-cols-2 gap-4">
        <label>
          <div className="text-sm font-medium mb-1">Number of employees</div>
          <input 
            type="number" 
            value={input.employees}
            onChange={(e) => setInput({ ...input, employees: Number(e.target.value) })}
            className="border border-gray-300 p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
          />
        </label>
        <label>
          <div className="text-sm font-medium mb-1">Annual revenue ($)</div>
          <input 
            type="number" 
            value={input.annualRevenue}
            onChange={(e) => setInput({ ...input, annualRevenue: Number(e.target.value) })}
            className="border border-gray-300 p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
          />
        </label>
        <label>
          <div className="text-sm font-medium mb-1">Expected efficiency gain (%)</div>
          <input 
            type="number" 
            value={input.efficiencyGain}
            onChange={(e) => setInput({ ...input, efficiencyGain: Number(e.target.value) })}
            className="border border-gray-300 p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
          />
        </label>
        <label>
          <div className="text-sm font-medium mb-1">Decision speed improvement (%)</div>
          <input 
            type="number" 
            value={input.decisionSpeed}
            onChange={(e) => setInput({ ...input, decisionSpeed: Number(e.target.value) })}
            className="border border-gray-300 p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
          />
        </label>
        <label className="sm:col-span-2">
          <div className="text-sm font-medium mb-1">Tech adoption level</div>
          <select 
            value={input.techAdoption}
            onChange={(e) => setInput({ ...input, techAdoption: e.target.value as Inputs["techAdoption"] })}
            className="border border-gray-300 p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>
      </div>

      <button 
        onClick={calc} 
        className="mt-6 w-full bg-blue-800 text-white py-3 rounded hover:bg-blue-900 transition-colors font-medium">
        Calculate ROI
      </button>

      {result && (
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-lg border border-blue-100">
          <h3 className="font-bold text-2xl mb-4 text-blue-900">Projected ROI: {result.projectedROI.toFixed(1)}%</h3>
          <div className="space-y-2 mb-4">
            <p className="text-gray-700"><strong>Annual savings:</strong> ${result.annualSavings.toLocaleString()}</p>
            <p className="text-gray-700"><strong>Transformation stage:</strong> {result.maturityStage}</p>
          </div>
          <div className="mt-4 pt-4 border-t border-blue-200">
            <p className="font-semibold text-gray-800 mb-2">Recommended Actions:</p>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              {result.recommendations.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
