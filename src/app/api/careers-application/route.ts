import { NextResponse } from "next/server";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwdQNNsQC6f9Q2s-kwG8c77lzpJ7T2mzVekh-a3shkbmVS90aYLUSaWRj1gppg-hxaFDQ/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const applyingFor = String(body.applyingFor || body.role || "").trim();

    const payload = {
      fullName: String(body.fullName || "").trim(),
      email: String(body.email || "").trim(),
      phone: String(body.phone || "").trim(),
      applyingFor,
      role: applyingFor,
      experience: String(body.experience || "").trim(),
      message: String(body.message || "").trim(),
      pageUrl: String(body.pageUrl || "").trim(),
      submittedAt: String(body.submittedAt || "").trim(),
    };

    const upstreamResponse = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!upstreamResponse.ok) {
      throw new Error(`Apps Script request failed (${upstreamResponse.status}).`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to submit application.";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
