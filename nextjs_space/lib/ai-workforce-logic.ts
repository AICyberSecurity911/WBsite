
// lib/ai-workforce-logic.ts

export type AvgCostRange = "$80,000 - $150,000" | "$150,000 - $250,000" | "$250,000+";
export type TimeToFill = "Under 90 days" | "90-120 days" | "120+ days";
export type Urgency = "Immediate (0-3 months)" | "Short-term (3-6 months)" | "Long-term (6+ months)";

export interface AIWorkforceInput {
  newHires: number;
  avgCost: AvgCostRange;
  timeToFill: TimeToFill;
  routinePercent: number;
  employeesToLiberate: number;
  urgency: Urgency;
}

export interface AIWorkforceResult {
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

/**
 * Deterministic calculation for AI Workforce ROI and recommendations.
 * Numbers are conservative and designed to be executive-friendly.
 */
export function calculateAIWorkforce(input: AIWorkforceInput): AIWorkforceResult {
  // 1) Map average cost to a numeric value (annual salary proxy)
  const costMap: Record<AvgCostRange, number> = {
    "$80,000 - $150,000": 115000,
    "$150,000 - $250,000": 200000,
    "$250,000+": 300000,
  };
  const avgAnnualCost = costMap[input.avgCost] || 115000;

  // 2) Convert time-to-fill to months (approx)
  const timeMap: Record<TimeToFill, number> = {
    "Under 90 days": 2.5,
    "90-120 days": 3.5,
    "120+ days": 5,
  };
  const avgMonthsToFill = timeMap[input.timeToFill] || 3.5;

  // --- Traditional hiring 3-year cost calculation ---
  // Year 1: salary + benefits (35%) + recruitment fees (40% of salary) + training + lost productivity (25% of salary)
  const year1PerHire =
    avgAnnualCost +
    avgAnnualCost * 0.35 + // benefits
    avgAnnualCost * 0.40 + // recruitment
    12000 + // training & onboarding (fixed estimate)
    avgAnnualCost * 0.25; // lost productivity during ramp

  const year1HiringCosts = input.newHires * year1PerHire;

  // Year 2 and 3: salary + benefits
  const year2Costs = input.newHires * (avgAnnualCost * 1.35);
  const year3Costs = input.newHires * (avgAnnualCost * 1.35);

  // Turnover cost: 18% annual turnover, replacement cost assumed as 50% of salary
  const turnoverCost = input.newHires * 0.18 * (avgAnnualCost * 0.50) * 3; // over 3 years

  const total3YearTraditional = Math.round(year1HiringCosts + year2Costs + year3Costs + turnoverCost);

  // --- AI workforce 3-year cost calculation ---
  const aiEmployeeCostMonthly = 597; // base monthly cost per AI employee (conservative estimate)
  const implementationCostPerAI = 2500; // one-time setup per AI "employee"
  const year1AI = (input.newHires * aiEmployeeCostMonthly * 12) + (input.newHires * implementationCostPerAI);
  const year2AI = input.newHires * aiEmployeeCostMonthly * 12 * 1.05; // 5% price increase year-over-year
  const year3AI = input.newHires * aiEmployeeCostMonthly * 12 * 1.10;

  const total3YearAI = Math.round(year1AI + year2AI + year3AI);

  // --- Direct savings ---
  const directSavings = Math.round(total3YearTraditional - total3YearAI);

  // --- Time-to-productivity advantage ---
  // Traditional months to full capacity = time to fill + 6 months ramp
  const traditionalMonthsToFullCapacity = avgMonthsToFill + 6;
  const aiMonthsToFullCapacity = 2; // typical AI implementation time to useful output (conservative)
  const monthsAdvantage = Math.max(0, traditionalMonthsToFullCapacity - aiMonthsToFullCapacity);

  // Revenue opportunity per employee: conservative 3x multiplier of salary (business metric)
  const avgRevenuePerEmployee = avgAnnualCost * 3;
  const monthlyRevenuePerEmployee = avgRevenuePerEmployee / 12;

  const timeAdvantageValue = Math.round(input.newHires * monthlyRevenuePerEmployee * monthsAdvantage);

  // --- Liberated productivity value ---
  // Hours liberated per freed employee annually:
  // weekly_hours = 40; routine% is portion of that; annual = 40 * (routinePercent/100) * 52
  const hoursLiberatedPerEmployee = 40 * (input.routinePercent / 100) * 52;
  const hourlyValue = avgAnnualCost / 2000; // 2000 work hours/year assumption
  const annualLiberatedValue = input.employeesToLiberate * hoursLiberatedPerEmployee * hourlyValue;
  const totalLiberatedValue = Math.round(annualLiberatedValue * 3); // 3-year value

  // --- Total value created ---
  const totalValueCreated = Math.round(directSavings + timeAdvantageValue + totalLiberatedValue);

  // --- ROI ---
  // ROI measured as (TotalValueCreated - CostOfAI) / CostOfAI * 100
  const roi = total3YearAI > 0 ? Math.round(((totalValueCreated - total3YearAI) / total3YearAI) * 100) : 0;

  // --- Recommendation logic ---
  let primaryTier = "Targeted AI Employee Pilot";
  let rationale = "Start with a focused pilot proving ROI in high-impact roles.";

  if (input.newHires >= 50) {
    primaryTier = "Enterprise AI Workforce Platform";
    rationale =
      "Your scale requires a platform approach: organization-wide AI employees with centralized governance.";
  } else if (input.newHires >= 20) {
    primaryTier = "Divisional AI Augmentation Program";
    rationale =
      "Deploy AI employees strategically across a division to unlock measurable ROI before expanding.";
  }

  const secondaryRecommendations: Array<{ service: string; reason: string }> = [];

  if (input.routinePercent > 40 && input.employeesToLiberate > 200) {
    secondaryRecommendations.push({
      service: "Process Intelligence & Automation",
      reason:
        "High percentage of routine work across many employees indicates processes are brittle. Orchestration and process mining will multiply AI impact.",
    });
  }

  if (input.urgency === "Immediate (0-3 months)") {
    secondaryRecommendations.push({
      service: "Enterprise Transformation",
      reason:
        "Urgent capacity needs suggest organizational bottlenecks. Transformation aligns people, process, and AI for sustainable speed.",
    });
  }

  if (input.employeesToLiberate > 500) {
    secondaryRecommendations.push({
      service: "Beyond Background Checks™",
      reason:
        "Large-scale workforce changes require continuous vetting for risk — our executive intelligence ensures trust and compliance.",
    });
  }

  return {
    traditional3Year: total3YearTraditional,
    ai3Year: total3YearAI,
    directSavings,
    timeAdvantageValue,
    liberatedProductivity: totalLiberatedValue,
    totalValueCreated,
    roi,
    recommendation: {
      primaryTier,
      rationale,
    },
    secondaryServices: secondaryRecommendations.slice(0, 2),
  };
}
