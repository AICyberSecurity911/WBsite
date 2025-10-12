
// src/components/ProcessValueCalculator.tsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface Inputs {
  processes: number;
  avgEmployeesPerProcess: number;
  avgHoursPerWeek: number;
  automationPotential: number; // 0-100 %
  avgSalary: number; // annual USD
}

interface Output {
  annualCost: number;
  savingsPotential: number;
  roi: number;
}

export default function ProcessValueCalculator(): JSX.Element {
  const [inputs, setInputs] = useState<Inputs>({
    processes: 100,
    avgEmployeesPerProcess: 5,
    avgHoursPerWeek: 10,
    automationPotential: 40,
    avgSalary: 90000,
  });
  const [result, setResult] = useState<Output | null>(null);

  const calculate = () => {
    const annualCost =
      inputs.processes *
      inputs.avgEmployeesPerProcess *
      inputs.avgHoursPerWeek *
      52 *
      (inputs.avgSalary / 2000);
    const savingsPotential = annualCost * (inputs.automationPotential / 100);
    const automationCost = savingsPotential * 0.25; // cost of automation ≈25% of savings
    const roi = Math.round(((savingsPotential - automationCost) / automationCost) * 100);
    setResult({
      annualCost: Math.round(annualCost),
      savingsPotential: Math.round(savingsPotential),
      roi,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto border border-gray-200">
      <div className="grid sm:grid-cols-2 gap-6 text-left">
        <div>
          <Label htmlFor="processes" className="text-sm font-medium mb-2 block">
            # of processes analyzed
          </Label>
          <Input
            id="processes"
            type="number"
            className="border p-2 w-full rounded"
            value={inputs.processes}
            onChange={(e) => setInputs({ ...inputs, processes: Number(e.target.value) })}
          />
        </div>
        
        <div>
          <Label htmlFor="avgEmployees" className="text-sm font-medium mb-2 block">
            Avg employees per process
          </Label>
          <Input
            id="avgEmployees"
            type="number"
            className="border p-2 w-full rounded"
            value={inputs.avgEmployeesPerProcess}
            onChange={(e) => setInputs({ ...inputs, avgEmployeesPerProcess: Number(e.target.value) })}
          />
        </div>
        
        <div>
          <Label htmlFor="avgHours" className="text-sm font-medium mb-2 block">
            Avg hours/week on process
          </Label>
          <Input
            id="avgHours"
            type="number"
            className="border p-2 w-full rounded"
            value={inputs.avgHoursPerWeek}
            onChange={(e) => setInputs({ ...inputs, avgHoursPerWeek: Number(e.target.value) })}
          />
        </div>
        
        <div>
          <Label htmlFor="automationSlider" className="text-sm font-medium mb-2 block">
            Automation potential (%)
          </Label>
          <Slider
            id="automationSlider"
            min={0}
            max={100}
            step={1}
            value={[inputs.automationPotential]}
            onValueChange={(value) => setInputs({ ...inputs, automationPotential: value[0] })}
            className="w-full mt-2"
          />
          <div className="text-xs text-gray-500 mt-1">{inputs.automationPotential}%</div>
        </div>
        
        <div className="sm:col-span-2">
          <Label htmlFor="avgSalary" className="text-sm font-medium mb-2 block">
            Avg employee salary (USD / year)
          </Label>
          <Input
            id="avgSalary"
            type="number"
            className="border p-2 w-full rounded"
            value={inputs.avgSalary}
            onChange={(e) => setInputs({ ...inputs, avgSalary: Number(e.target.value) })}
          />
        </div>
      </div>

      <Button
        onClick={calculate}
        className="mt-6 w-full bg-blue-800 text-white py-3 rounded hover:bg-blue-900 transition-colors font-semibold"
      >
        Calculate Automation ROI
      </Button>

      {result && (
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-lg border border-blue-100">
          <h3 className="font-semibold text-xl mb-4 text-gray-900">Estimated Impact</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Annual process cost:</span>
              <span className="font-bold text-lg text-gray-900">${result.annualCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Potential savings:</span>
              <span className="font-bold text-lg text-green-600">${result.savingsPotential.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Projected ROI:</span>
              <span className="font-bold text-xl text-blue-800">{result.roi}%</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 italic border-t border-gray-200 pt-4">
            Typical clients reinvest savings into AI Workforce and Beyond Background Checks™ 
            for compounding enterprise advantage.
          </p>
        </div>
      )}
    </div>
  );
}
