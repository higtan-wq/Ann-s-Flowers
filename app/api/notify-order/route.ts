import { NextRequest, NextResponse } from "next/server";

async function sendSms(phone: string, message: string) {
  await fetch("https://textbelt.com/text", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone, message, key: process.env.TEXTBELT_API_KEY }),
  });
}

export async function POST(req: NextRequest) {
  const { name, phone, product, type, address, card } = await req.json();

  const message = [
    `Ann's Flowers - ${type === "delivery" ? "Delivery" : "Pickup"} Order`,
    `Item: ${product}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    type === "delivery" && address ? `Address: ${address}` : null,
    card ? `Card: ${card}` : null,
  ].filter(Boolean).join("\n");

  await Promise.all([
    sendSms(process.env.OWNER_PHONE_1!, message),
    sendSms(process.env.OWNER_PHONE_2!, message),
  ]);

  return NextResponse.json({ ok: true });
}
