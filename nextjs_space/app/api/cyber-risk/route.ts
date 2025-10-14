
import { NextRequest, NextResponse } from "next/server";
import { calculateCyberRisk, CyberInput } from "@/lib/calc/cyberRiskCalculator";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, ...inputs } = body;

    // Validate inputs
    const cyberInput: CyberInput = {
      employees: Number(inputs.employees) || 0,
      criticalSystems: Number(inputs.criticalSystems) || 0,
      thirdParties: Number(inputs.thirdParties) || 0,
      incidentsLastYear: Number(inputs.incidentsLastYear) || 0,
      patchFrequency: inputs.patchFrequency || "Unknown",
      darkWebHits: inputs.darkWebHits || "No",
      hasZeroTrust: inputs.hasZeroTrust || "No",
    };

    const result = calculateCyberRisk(cyberInput);

    // Save to database
    await prisma.cyberRiskResult.create({
      data: {
        email: email || null,
        employees: cyberInput.employees,
        criticalSystems: cyberInput.criticalSystems,
        thirdParties: cyberInput.thirdParties,
        incidentsLastYear: cyberInput.incidentsLastYear,
        patchFrequency: cyberInput.patchFrequency,
        darkWebHits: cyberInput.darkWebHits,
        hasZeroTrust: cyberInput.hasZeroTrust,
        breachProbability: result.breachProbability,
        expectedLoss: result.expectedLoss,
        riskTier: result.riskTier,
        recommendations: result.recommendations.map((r) => `${r.service}: ${r.reason}`),
      },
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error calculating cyber risk:", error);
    return NextResponse.json(
      { error: "Failed to calculate cyber risk" },
      { status: 500 }
    );
  }
}
