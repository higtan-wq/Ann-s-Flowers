import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  // TODO: send SMS via email-to-SMS gateway once carrier info is available
  // e.g. send email to 2561234567@vtext.com with order summary
  console.log("[designers-choice submission]", data);

  return NextResponse.json({ ok: true });
}
