import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(200).optional().default(""),
});

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    if (rawBody.length > 12_000) {
      return NextResponse.json({ error: "Message is too large." }, { status: 413 });
    }

    const body: unknown = JSON.parse(rawBody);
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check your name, email, and message, then try again." },
        { status: 400 },
      );
    }

    // Quietly accept honeypot submissions without sending email.
    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      return NextResponse.json(
        { error: "Message delivery is not configured yet. Please email Abir directly." },
        { status: 503 },
      );
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: parsed.data.email,
        subject: `Portfolio message from ${parsed.data.name}`,
        text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\n${parsed.data.message}`,
      }),
      cache: "no-store",
    });

    if (!emailResponse.ok) {
      return NextResponse.json(
        { error: "Email delivery failed. Please try again later or email directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request. Please try again." }, { status: 400 });
  }
}
