import { NextResponse } from "next/server";

// TODO: wire this up to a real email/lead pipeline before going live —
// e.g. Resend (resend.com), Formspree, or forwarding into a CRM/inbox.
// Right now this just validates and logs the submission server-side.
export async function POST(request) {
  const data = await request.json();

  const { name, email, projectType, budget, timeline, message } = data || {};

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  console.log("New contact form submission:", {
    name,
    email,
    projectType,
    budget,
    timeline,
    message,
  });

  return NextResponse.json({ ok: true });
}