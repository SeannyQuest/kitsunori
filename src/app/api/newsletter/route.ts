import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // TODO: Connect to Supabase
    // const { error } = await supabase
    //   .from("newsletter_subscribers")
    //   .upsert({ email }, { onConflict: "email" });

    // TODO: Send welcome email via Resend

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
