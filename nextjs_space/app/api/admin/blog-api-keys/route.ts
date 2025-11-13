export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyAdminToken } from "@/lib/admin-auth";
import crypto from "crypto";

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token || !(await verifyAdminToken(token))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const apiKeys = await prisma.blogApiKey.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ apiKeys });
  } catch (error) {
    console.error("Blog API keys fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch API keys" },
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

    const { keyName } = await request.json();

    if (!keyName) {
      return NextResponse.json(
        { error: "Key name is required" },
        { status: 400 },
      );
    }

    // Generate a secure API key
    const apiKey = `ql_${crypto.randomBytes(32).toString("hex")}`;

    const newKey = await prisma.blogApiKey.create({
      data: {
        keyName,
        apiKey,
      },
    });

    return NextResponse.json({ apiKey: newKey });
  } catch (error) {
    console.error("Blog API key creation error:", error);
    return NextResponse.json(
      { error: "Failed to create API key" },
      { status: 500 },
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token || !(await verifyAdminToken(token))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id, isActive } = await request.json();

    const updatedKey = await prisma.blogApiKey.update({
      where: { id },
      data: { isActive },
    });

    return NextResponse.json({ apiKey: updatedKey });
  } catch (error) {
    console.error("Blog API key update error:", error);
    return NextResponse.json(
      { error: "Failed to update API key" },
      { status: 500 },
    );
  }
}
