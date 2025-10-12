
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

interface QuestionConfig {
  id: string;
  weight: number;
  options: Record<string, number>;
}

const questionConfigs: QuestionConfig[] = [
  {
    id: 'deployment_speed',
    weight: 20,
    options: {
      'weeks': 100,
      'months_1_3': 75,
      'months_3_6': 50,
      'months_6_plus': 25
    }
  },
  {
    id: 'data_architecture',
    weight: 15,
    options: {
      'unified_modern': 100,
      'mostly_integrated': 70,
      'fragmented': 40,
      'legacy_silos': 10
    }
  },
  {
    id: 'security_posture',
    weight: 15,
    options: {
      'proactive_advanced': 100,
      'good_monitoring': 75,
      'basic_compliance': 50,
      'minimal_outdated': 20
    }
  },
  {
    id: 'change_management',
    weight: 10,
    options: {
      'agile_adaptive': 100,
      'structured_flexible': 75,
      'slow_methodical': 50,
      'resistant_difficult': 25
    }
  },
  {
    id: 'operational_waste',
    weight: 10,
    options: {
      'minimal_10': 100,
      'some_10_25': 70,
      'significant_25_50': 40,
      'majority_50_plus': 10
    }
  },
  {
    id: 'competitor_ai',
    weight: 10,
    options: {
      'ahead_of_competitors': 100,
      'similar_level': 70,
      'behind_some': 40,
      'significantly_behind': 15
    }
  },
  {
    id: 'process_documentation',
    weight: 10,
    options: {
      'comprehensive_updated': 100,
      'good_some_gaps': 75,
      'basic_outdated': 50,
      'minimal_tribal': 20
    }
  },
  {
    id: 'biggest_barrier',
    weight: 10,
    options: {
      'scaling_existing': 100,
      'budget_approval': 70,
      'technical_skills': 50,
      'regulatory_compliance': 60,
      'cultural_resistance': 30
    }
  }
];

function calculateScore(answers: Record<string, string>): number {
  let weightedSum = 0;
  let totalWeight = 0;

  for (const config of questionConfigs) {
    const answer = answers[config.id];
    if (answer && config.options[answer] !== undefined) {
      weightedSum += (config.options[answer] * config.weight) / 100;
      totalWeight += config.weight;
    }
  }

  return totalWeight > 0 ? Math.round((weightedSum / totalWeight) * 100) : 0;
}

function getRiskLevel(score: number): string {
  if (score >= 80) return 'Low Risk';
  if (score >= 60) return 'Moderate Risk';
  if (score >= 40) return 'High Risk';
  return 'Critical Risk';
}

function getDollarRisk(score: number): string {
  if (score >= 80) return '$0.4M - $1.2M annually';
  if (score >= 60) return '$1.2M - $3.5M annually';
  if (score >= 40) return '$3.5M - $8M annually';
  return '$8M - $12M+ annually';
}

function getRecommendations(answers: Record<string, string>, score: number): string[] {
  const recs: string[] = [];

  // Deployment speed
  if (answers.deployment_speed === 'months_6_plus' || answers.deployment_speed === 'months_3_6') {
    recs.push('AI Workforce - Accelerate deployment with automated processes');
  }

  // Data architecture
  if (answers.data_architecture === 'legacy_silos' || answers.data_architecture === 'fragmented') {
    recs.push('Process Intelligence & Automation - Unify and optimize data flows');
  }

  // Security posture
  if (answers.security_posture === 'minimal_outdated' || answers.security_posture === 'basic_compliance') {
    recs.push('Enterprise Cyber Intelligence - Strengthen security with NASA-recognized expertise');
  }

  // Overall transformation needed
  if (score < 60) {
    recs.push('Enterprise Transformation - Comprehensive organizational restructuring for competitive advantage');
  }

  // If no specific recommendations, add general ones
  if (recs.length === 0) {
    recs.push('Executive Briefing - Identify optimization opportunities for your high-performing organization');
  }

  return recs.slice(0, 3); // Max 3 recommendations
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { answers, email } = body;

    if (!answers || typeof answers !== 'object') {
      return NextResponse.json({ error: 'Invalid answers provided' }, { status: 400 });
    }

    const score = calculateScore(answers);
    const riskLevel = getRiskLevel(score);
    const dollarRisk = getDollarRisk(score);
    const recommendations = getRecommendations(answers, score);

    // Save results to database
    const result = await prisma.readinessResult.create({
      data: {
        email: email || null,
        answers,
        score,
        riskLevel,
        dollarRisk,
        recommendations
      }
    });

    // If email provided, save as lead
    if (email) {
      try {
        await prisma.lead.upsert({
          where: { email },
          update: { source: 'readiness_calculator' },
          create: {
            email,
            source: 'readiness_calculator'
          }
        });
      } catch (error) {
        // Lead creation failed but continue with response
        console.error('Failed to create lead:', error);
      }
    }

    return NextResponse.json({
      score,
      riskLevel,
      dollarRisk,
      recommendations,
      id: result.id
    });

  } catch (error) {
    console.error('Readiness calculation error:', error);
    return NextResponse.json(
      { error: 'Failed to calculate readiness score' },
      { status: 500 }
    );
  }
}
