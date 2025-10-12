
// app/api/ai-workforce/calculate/route.ts
import { NextRequest, NextResponse } from "next/server";
import { calculateAIWorkforce, AIWorkforceInput } from "@/lib/ai-workforce-logic";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as AIWorkforceInput;

    // Basic validation
    if (!body || typeof body.newHires !== "number") {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const result = calculateAIWorkforce(body);
    return NextResponse.json(result);
  } catch (err) {
    console.error("AI Workforce calc error:", err);
    return NextResponse.json({ error: "Calculation failed" }, { status: 500 });
  }
}
