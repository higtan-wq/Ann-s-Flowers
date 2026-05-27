import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const RECIPIENTS = [
    `${process.env.OWNER_PHONE_1}@txt.att.net`,
    `${process.env.OWNER_PHONE_2}@txt.att.net`,
  ];
  const { name, phone, cardMessage, productName } = await req.json();

  const text = [
    `Pickup Order - Ann's Flowers`,
    `Item: ${productName}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    cardMessage ? `Card: ${cardMessage}` : null,
  ].filter(Boolean).join("\n");

  await resend.emails.send({
    from: "orders@annsflowersashland.com",
    to: RECIPIENTS,
    subject: `Pickup Order: ${productName} - ${name}`,
    text,
  });

  return NextResponse.json({ ok: true });
}
