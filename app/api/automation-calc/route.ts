
import { NextRequest, NextResponse } from 'next/server';
import type { IAutomationForm, IAutomationResult } from '@/types/automation';

const PRICES = {
  LeadFlow: 299,
  InvoiceIQ: 399,
  MailPilot: 299,
  OpsSync: 499,
  SmartDocs: 299,
  DataBridge: 299,
  FormFlow: 199,
  ClientPulse: 399
};

export async function POST(request: NextRequest) {
  try {
    const data: IAutomationForm = await request.json();

    const hourlyRate = Math.max(1, data.hourlyRate || 75);
    const weeksToMonthly = (hours: number) => hours * hourlyRate * 4; // weekly hours to monthly cost

    const monthlyHumanCost = weeksToMonthly(
      data.dataEntryHours +
      data.emailHours +
      data.invoicingHours +
      data.reportingHours +
      data.projectCoordHours
    );
    
    const annualHumanCost = monthlyHumanCost * 12;

    // Generate recommendations based on input
    const recommendations: IAutomationResult['recommendations'] = [];

    const addRecommendation = (
      automation: string,
      hours: number,
      reason: string,
      priceKey: keyof typeof PRICES
    ) => {
      const estHoursSaved = Math.round(Math.max(0, hours));
      const estAnnualValue = Math.round(estHoursSaved * hourlyRate * 52);
      recommendations.push({
        automation,
        reason,
        estHoursSaved,
        estAnnualValue,
        startingAt: PRICES[priceKey]
      });
    };

    // Intelligent recommendations based on hours spent
    if (data.dataEntryHours > 4) {
      addRecommendation(
        'DataBridge — Auto Data Sync',
        data.dataEntryHours * 0.80,
        'Manual data entry is stealing your focus. Automate syncing across all your tools.',
        'DataBridge'
      );
    }

    if (data.emailHours > 6) {
      addRecommendation(
        'MailPilot — Smart Email Automation',
        data.emailHours * 0.70,
        'Emails consume your prime hours. Let AI triage, respond, and route automatically.',
        'MailPilot'
      );
    }

    if (data.invoicingHours > 3) {
      addRecommendation(
        'InvoiceIQ — Automated Billing',
        data.invoicingHours * 0.90,
        'Billing errors and follow-ups waste time. Automate invoice creation and collections.',
        'InvoiceIQ'
      );
    }

    if (data.reportingHours > 3) {
      addRecommendation(
        'SmartDocs — Automated Reporting',
        data.reportingHours * 0.80,
        'Manual reports delay decisions. Generate insights automatically overnight.',
        'SmartDocs'
      );
    }

    if (data.projectCoordHours > 3) {
      addRecommendation(
        'OpsSync — Workflow Automation',
        data.projectCoordHours * 0.75,
        'Project coordination kills flow. Link all your tools into one automated system.',
        'OpsSync'
      );
    }

    // If low hours in specific categories, suggest general solutions
    if (recommendations.length < 2) {
      const totalHours = data.dataEntryHours + data.emailHours + data.invoicingHours + 
                        data.reportingHours + data.projectCoordHours;
      
      if (totalHours > 10) {
        addRecommendation(
          'OpsSync — Complete Workflow Automation',
          totalHours * 0.65,
          'Centralize and automate your entire operation with one intelligent system.',
          'OpsSync'
        );
      }
    }

    // Conservative 75% savings estimate
    const potentialSavingsMonthly = Math.round(monthlyHumanCost * 0.75);
    const potentialSavingsAnnual = potentialSavingsMonthly * 12;

    const result: IAutomationResult = {
      monthlyHumanCost: Math.round(monthlyHumanCost),
      annualHumanCost: Math.round(annualHumanCost),
      potentialSavingsMonthly,
      potentialSavingsAnnual,
      recommendations: recommendations
        .sort((a, b) => b.estAnnualValue - a.estAnnualValue)
        .slice(0, 4)
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Automation calc error:', error);
    return NextResponse.json(
      { error: 'Failed to calculate automation savings' },
      { status: 500 }
    );
  }
}
