import { NextRequest, NextResponse } from "next/server";
import { isStoreOpen } from "@/lib/hours";

async function sendSms(phone: string, message: string) {
  const res = await fetch("https://textbelt.com/text", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone, message, key: process.env.TEXTBELT_API_KEY }),
  });
  const json = await res.json();
  console.log(`[textbelt] ${phone}:`, json);
}

export async function POST(req: NextRequest) {
  if (!isStoreOpen()) {
    return NextResponse.json({ ok: false, error: "Store is currently closed." }, { status: 503 });
  }
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
