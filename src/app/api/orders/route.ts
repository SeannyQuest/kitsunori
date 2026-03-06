import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customer_name, customer_phone, customer_email, pickup_time, items, total_amount } = body;

    if (!customer_name || !customer_email || !items?.length) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Save to Supabase
    // const { data: order, error } = await supabase
    //   .from("orders")
    //   .insert({
    //     customer_name,
    //     customer_email,
    //     customer_phone,
    //     pickup_time,
    //     status: "pending",
    //     total_amount,
    //   })
    //   .select()
    //   .single();

    // TODO: Insert order_items
    // TODO: Send confirmation email via Resend

    const orderNumber = `KN-${Date.now().toString().slice(-6)}`;

    return NextResponse.json({ success: true, order_number: orderNumber });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  // TODO: Fetch orders from Supabase (admin only — add auth check)
  return NextResponse.json({ orders: [] });
}
