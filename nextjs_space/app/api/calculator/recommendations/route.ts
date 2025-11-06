
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { calculateRecommendations, calculateROI, getServiceRecommendations } from '@/lib/calculator'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { answers, userContext } = body

    if (!answers) {
      return NextResponse.json(
        { error: 'Calculator answers are required' },
        { status: 400 }
      )
    }

    // Generate AI employee recommendations based on answers
    const recommendations = calculateRecommendations(answers)
    const roi = calculateROI(answers, recommendations)
    
    // Get service recommendations (for cross-selling when AI employees = 0)
    const serviceRecommendations = getServiceRecommendations(answers)
    
    // Determine priority based on answers
    let priority = 'medium'
    if (answers.repetitive_hours === 'More than 40 hours' || 
        answers.primary_goal === 'Increase revenue by 25%+') {
      priority = 'high'
    } else if (answers.repetitive_hours === 'Less than 10 hours') {
      priority = 'low'
    }

    // Store the calculator response
    const { data, error } = await supabase
      .from('calculator_responses')
      .insert([
        {
          calculator_type: 'ai-workforce',
          responses: answers,
          recommendations,
          projected_savings: roi,
        }
      ])
      .select()
      .single()

    if (error) {
      console.error('Error saving calculator response:', error)
    }

    return NextResponse.json({
      recommendations,
      serviceRecommendations,
      priority,
      estimatedROI: roi,
      deploymentTimeline: recommendations.length > 0 ? '1-5 business days' : 'N/A',
      calculatorResponseId: data?.id
    })

  } catch (error) {
    console.error('Calculator API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
