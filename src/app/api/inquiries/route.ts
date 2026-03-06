import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, event_date, party_size, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Save to Supabase
    // const { error } = await supabase
    //   .from("inquiries")
    //   .insert({ name, email, phone, event_date, party_size, message, is_read: false });

    // TODO: Send notification email to restaurant via Resend

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  // TODO: Fetch inquiries from Supabase (admin only)
  return NextResponse.json({ inquiries: [] });
}
