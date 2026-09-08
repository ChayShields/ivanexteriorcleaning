import { NextResponse } from "next/server";
import { business } from "@/lib/business";

interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  postcode?: string;
  message?: string;
  context?: string;
  company?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a real visitor never fills this hidden field, so a non-empty
  // value here means a bot submitted the form. Return a fake success so
  // bots don't learn to look for a different signal.
  if (payload.company) {
    return NextResponse.json({ ok: true });
  }

  const { name, phone, email, postcode, message } = payload;

  if (!name || !phone || !email || !postcode || !message) {
    return NextResponse.json({ error: "Please fill in all fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const brevoApiKey = process.env.BREVO_API_KEY;
  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL ?? business.email;

  if (!brevoApiKey) {
    console.warn(
      "BREVO_API_KEY is not configured. Enquiry received but no email was sent:",
      { name, phone, email, postcode, message, context: payload.context }
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  const emailResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": brevoApiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: {
        name: business.name,
        email: `enquiries@${new URL(business.siteUrl).hostname.replace(/^www\./, "")}`,
      },
      to: [{ email: notifyEmail }],
      replyTo: { email, name },
      subject: `New enquiry from ${name}${payload.context ? ` (${payload.context})` : ""}`,
      textContent: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Postcode: ${postcode}`,
        payload.context ? `Page: ${payload.context}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    }),
  });

  if (!emailResponse.ok) {
    console.error("Failed to send enquiry email", await emailResponse.text());
    return NextResponse.json(
      { error: "We couldn't send your enquiry right now. Please call us instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
