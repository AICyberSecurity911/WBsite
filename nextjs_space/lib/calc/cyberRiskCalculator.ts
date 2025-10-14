
export interface CyberInput {
  employees: number;
  criticalSystems: number;
  thirdParties: number;
  incidentsLastYear: number;
  patchFrequency: "Monthly" | "Quarterly" | "Annually" | "Unknown";
  darkWebHits: "Yes" | "No";
  hasZeroTrust: "Yes" | "No";
}

export interface CyberResult {
  breachProbability: number;
  expectedLoss: number;
  riskTier: "Low" | "Moderate" | "High" | "Critical";
  recommendations: Array<{ service: string; reason: string }>;
}

export function calculateCyberRisk(input: CyberInput): CyberResult {
  let score = 0;
  score += Math.min(30, input.criticalSystems * 0.8);
  score += Math.min(20, input.thirdParties * 0.5);
  score += input.incidentsLastYear * 5;
  if (input.patchFrequency === "Annually") score += 20;
  else if (input.patchFrequency === "Quarterly") score += 10;
  if (input.darkWebHits === "Yes") score += 20;
  if (input.hasZeroTrust === "No") score += 15;

  const breachProbability = Math.min(100, score);
  const expectedLoss = Math.round((breachProbability / 100) * 4500000);
  let riskTier: CyberResult["riskTier"] = "Low";
  if (score >= 80) riskTier = "Critical";
  else if (score >= 60) riskTier = "High";
  else if (score >= 35) riskTier = "Moderate";

  const recs: CyberResult["recommendations"] = [];
  if (input.darkWebHits === "Yes")
    recs.push({
      service: "Beyond Background Checks™",
      reason: "Compromised credentials — cross-verify executive exposure.",
    });
  if (riskTier !== "Low")
    recs.push({
      service: "Process Intelligence & Automation",
      reason: "Automate patch and compliance cycles to close vulnerabilities faster.",
    });

  return { breachProbability, expectedLoss, riskTier, recommendations: recs.slice(0, 2) };
}
