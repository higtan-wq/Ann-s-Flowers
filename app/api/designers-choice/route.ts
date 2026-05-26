import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENTS = [
  `${process.env.OWNER_PHONE_1}@txt.att.net`,
  `${process.env.OWNER_PHONE_2}@txt.att.net`,
];

export async function POST(req: NextRequest) {
  const { name, phone, occasion, colors, flowerType, budget, fulfillment, address, cardMessage } = await req.json();

  const lines = [
    `New Order - Ann's Flowers`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Occasion: ${occasion}`,
    `Budget: $${budget}`,
    `Fulfillment: ${fulfillment === "delivery" ? `Delivery to ${address}` : "Pickup"}`,
    colors ? `Colors: ${colors}` : null,
    flowerType ? `Flowers: ${flowerType}` : null,
    cardMessage ? `Card: ${cardMessage}` : null,
  ].filter(Boolean).join("\n");

  await resend.emails.send({
    from: "orders@annsflowersashland.com",
    to: RECIPIENTS,
    subject: `New Designer's Choice Order from ${name}`,
    text: lines,
  });

  return NextResponse.json({ ok: true });
}
