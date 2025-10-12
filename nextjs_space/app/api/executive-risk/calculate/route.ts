
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

type RoleSensitivity = "Board" | "C-suite" | "Director" | "Manager";
type TransactionSize = "> $10M" | "$1M - $10M" | "< $1M";
type GeoRisk = "High-risk" | "Mixed" | "Low-risk";
type PublicProfile = "High" | "Medium" | "Low";
type RegulatorySensitivity = "High" | "Medium" | "Low";
type DigitalExposure = "Known breach" | "Credential leak" | "None";
type EmploymentAnomalies = "Multiple terminations" | "Single issue" | "None";
type Hunch = "Yes" | "No";

interface ExecInput {
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

interface ExecResult {
  riskScore: number;
  riskTier: "Low" | "Moderate" | "High" | "Critical";
  dollarExposureRange: string;
  primaryAction: string;
  secondaryRecommendations: Array<{ service: string; reason: string }>;
}

/**
 * Deterministic scoring with conservative numbers for exposure mapping.
 */
function calculateExecutiveRisk(input: ExecInput): ExecResult {
  let score = 0;
  const recs: Array<{ service: string; reason: string }> = [];

  // Role weight
  const roleWeight: Record<RoleSensitivity, number> = {
    Board: 30,
    "C-suite": 25,
    Director: 15,
    Manager: 5,
  };
  score += roleWeight[input.role];

  // Transaction weight
  const txWeight: Record<TransactionSize, number> = {
    "> $10M": 25,
    "$1M - $10M": 15,
    "< $1M": 5,
  };
  score += txWeight[input.txSize];

  // Geo risk
  const geoWeight: Record<GeoRisk, number> = {
    "High-risk": 20,
    Mixed: 10,
    "Low-risk": 0,
  };
  score += geoWeight[input.geo];

  // Public profile
  const profileWeight: Record<PublicProfile, number> = {
    High: 15,
    Medium: 8,
    Low: 0,
  };
  score += profileWeight[input.profile];

  // Regulatory sensitivity
  const regWeight: Record<RegulatorySensitivity, number> = {
    High: 15,
    Medium: 8,
    Low: 0,
  };
  score += regWeight[input.reg];

  // Digital exposure
  if (input.digital === "Known breach") {
    score += 20;
    recs.push({
      service: "Enterprise Cyber Intelligence",
      reason: "Known breach increases immediate threat. Run offensive testing and credential containment.",
    });
  } else if (input.digital === "Credential leak") {
    score += 12;
    recs.push({
      service: "Enterprise Cyber Intelligence",
      reason: "Credential leaks need urgent verification and containment.",
    });
  }

  // Employment anomalies
  if (input.anomalies === "Multiple terminations") {
    score += 18;
    recs.push({
      service: "Beyond Background Checks™",
      reason: "Multiple terminations indicate pattern risk; recommend deep-dive vetting.",
    });
  } else if (input.anomalies === "Single issue") {
    score += 8;
  }

  // Intuition / hunch
  if (input.hunch === "Yes") {
    score += 10;
    recs.push({
      service: "Executive Intelligence Review",
      reason: "Internal red-flag observed — validate via targeted investigation.",
    });
  }

  // Normalize score to 0-100
  const riskScore = Math.min(100, Math.round(score));

  // Map to tier
  let riskTier: ExecResult["riskTier"] = "Low";
  if (riskScore >= 80) riskTier = "Critical";
  else if (riskScore >= 60) riskTier = "High";
  else if (riskScore >= 35) riskTier = "Moderate";

  // Map to dollar exposure (conservative)
  let dollarExposureRange = "< $100K";
  if (riskTier === "Moderate") dollarExposureRange = "$100K - $500K";
  else if (riskTier === "High") dollarExposureRange = "$500K - $5M";
  else if (riskTier === "Critical") dollarExposureRange = "$5M+";

  // Primary action
  let primaryAction = "Monitor";
  if (riskTier === "Low") primaryAction = "Accept";
  else if (riskTier === "Moderate") primaryAction = "Investigate Deeper";
  else if (riskTier === "High") primaryAction = "Investigate — Pause Decision";
  else if (riskTier === "Critical") primaryAction = "Hold Decision & Immediate Deep Investigation";

  // Ensure at least one recommendation
  if (recs.length === 0) {
    recs.push({
      service: "Beyond Background Checks™",
      reason: "Standard risk indicators present — recommend targeted intelligence review.",
    });
  }

  // Limit to top 2
  const secondaryRecommendations = recs.slice(0, 2);

  return {
    riskScore,
    riskTier,
    dollarExposureRange,
    primaryAction,
    secondaryRecommendations,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic shape validation
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const result = calculateExecutiveRisk(body);

    // Save result to database
    try {
      await prisma.executiveRiskResult.create({
        data: {
          email: body.email || null,
          role: body.role,
          txSize: body.txSize,
          geo: body.geo,
          profile: body.profile,
          reg: body.reg,
          digital: body.digital,
          anomalies: body.anomalies,
          hunch: body.hunch,
          riskScore: result.riskScore,
          riskTier: result.riskTier,
          dollarExposureRange: result.dollarExposureRange,
          primaryAction: result.primaryAction,
          recommendations: result.secondaryRecommendations.map(r => r.service)
        }
      });
    } catch (dbError) {
      console.error('Failed to save result to database:', dbError);
      // Continue with response even if DB save fails
    }

    return NextResponse.json(result);

  } catch (err) {
    console.error('Executive risk calculation error:', err);
    return NextResponse.json(
      { error: 'Calculation failed' },
      { status: 500 }
    );
  }
}
