import { NextRequest, NextResponse } from "next/server";

async function sendSms(phone: string, message: string) {
  const res = await fetch("https://textbelt.com/text", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone, message, key: process.env.TEXTBELT_API_KEY }),
  });
  const json = await res.json();
  console.log(`[designers-choice textbelt] ${phone}:`, json);
}

export async function POST(req: NextRequest) {
  const { name, phone, email, occasion, colors, flowerType, budget, fulfillment, address, cardMessage } = await req.json();

  const message = [
    `Ann's Flowers - Designer's Choice Order`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
    `Occasion: ${occasion}`,
    `Budget: $${budget}`,
    `Fulfillment: ${fulfillment === "delivery" ? `Delivery to ${address}` : "Pickup"}`,
    colors ? `Colors: ${colors}` : null,
    flowerType ? `Flowers: ${flowerType}` : null,
    cardMessage ? `Card: ${cardMessage}` : null,
  ].filter(Boolean).join("\n");

  await Promise.all([
    sendSms(process.env.OWNER_PHONE_1!, message),
    sendSms(process.env.OWNER_PHONE_2!, message),
  ]);

  return NextResponse.json({ ok: true });
}
