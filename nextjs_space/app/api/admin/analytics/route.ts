export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyAdminToken } from "@/lib/admin-auth";

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token || !(await verifyAdminToken(token))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const timeRange = searchParams.get("range") || "30";
    const daysAgo = parseInt(timeRange);
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - daysAgo);

    // Get leads stats
    const [
      totalLeads,
      confirmedLeads,
      recentLeads,
      totalCalculatorResponses,
      totalConsultations,
      pendingConsultations,
      totalContacts,
    ] = await Promise.all([
      prisma.lead.count(),
      prisma.lead.count({ where: { confirmed: true } }),
      prisma.lead.count({ where: { createdAt: { gte: startDate } } }),
      prisma.calculatorResponse.count(),
      prisma.consultationBooking.count(),
      prisma.consultationBooking.count({ where: { status: "pending" } }),
      prisma.contactSubmission.count(),
    ]);

    // Get daily trends
    const leadTrends = await prisma.$queryRaw`
      SELECT 
        DATE(created_at) as date,
        COUNT(*) as count
      FROM leads
      WHERE created_at >= ${startDate}
      GROUP BY DATE(created_at)
      ORDER BY date ASC
    `;

    const calculatorTrends = await prisma.$queryRaw`
      SELECT 
        DATE(timestamp) as date,
        COUNT(*) as count
      FROM calculator_responses
      WHERE timestamp >= ${startDate}
      GROUP BY DATE(timestamp)
      ORDER BY date ASC
    `;

    // Get calculator type breakdown
    const calculatorByType = await prisma.calculatorResponse.groupBy({
      by: ["calculatorType"],
      _count: true,
      where: {
        timestamp: { gte: startDate },
      },
    });

    return NextResponse.json({
      overview: {
        totalLeads,
        confirmedLeads,
        recentLeads,
        totalCalculatorResponses,
        totalConsultations,
        pendingConsultations,
        totalContacts,
      },
      trends: {
        leads: leadTrends,
        calculator: calculatorTrends,
      },
      calculatorBreakdown: calculatorByType,
    });
  } catch (error) {
    console.error("Analytics error:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics" },
      { status: 500 },
    );
  }
}
