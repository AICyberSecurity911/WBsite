export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { verifyAdminToken } from "@/lib/admin-auth";
import { listCalendarEvents, createCalendarEvent } from "@/lib/google-calendar";

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token || !(await verifyAdminToken(token))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const timeMin = searchParams.get("timeMin") || undefined;
    const timeMax = searchParams.get("timeMax") || undefined;

    const events = await listCalendarEvents(timeMin, timeMax);

    return NextResponse.json({ events });
  } catch (error) {
    console.error("Calendar fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch calendar events" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token || !(await verifyAdminToken(token))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const eventData = await request.json();
    const event = await createCalendarEvent(eventData);

    if (!event) {
      return NextResponse.json(
        { error: "Failed to create event" },
        { status: 500 },
      );
    }

    return NextResponse.json({ event });
  } catch (error) {
    console.error("Calendar create error:", error);
    return NextResponse.json(
      { error: "Failed to create calendar event" },
      { status: 500 },
    );
  }
}
