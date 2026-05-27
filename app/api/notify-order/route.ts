import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const RECIPIENTS = [
    `${process.env.OWNER_PHONE_1}@txt.att.net`,
    `${process.env.OWNER_PHONE_2}@txt.att.net`,
  ];
  const { name, phone, product, type, address, card } = await req.json();

  const text = [
    `${type === "delivery" ? "Delivery" : "Pickup"} Order - Ann's Flowers`,
    `Item: ${product}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    type === "delivery" && address ? `Address: ${address}` : null,
    card ? `Card: ${card}` : null,
  ].filter(Boolean).join("\n");

  await resend.emails.send({
    from: "orders@annsflowersashland.com",
    to: RECIPIENTS,
    subject: `${type === "delivery" ? "Delivery" : "Pickup"} Order: ${product} - ${name}`,
    text,
  });

  return NextResponse.json({ ok: true });
}
