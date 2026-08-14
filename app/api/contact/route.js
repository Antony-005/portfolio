import { NextResponse } from "next/server";
import { Resend } from "resend";

// Setup (one-time):
// 1. Sign up at resend.com and grab an API key (free tier: 3,000 emails/mo)
// 2. Add to .env.local (and to your Vercel project's Environment Variables):
//      RESEND_API_KEY=re_xxxxxxxxxxxx
//      CONTACT_TO_EMAIL=your-real-inbox@example.com
// 3. Until you verify your own sending domain in Resend, you must send FROM
//    "onboarding@resend.dev" (below) — Resend rejects unverified domains.
//    Once your domain is verified there, swap the "from" address to your own,
//    e.g. "Portfolio <hello@antonyochieng.dev>".

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const data = await request.json();
  const { name, email, projectType, budget, timeline, message } = data || {};

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectType}`,
        `Budget: ${budget}`,
        `Timeline: ${timeline}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });
  } catch (err) {
    console.error("Resend send failed:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}