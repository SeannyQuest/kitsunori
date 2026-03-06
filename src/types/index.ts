export type DietaryTag = "GF" | "V" | "VG" | "SPICY" | "NUTS" | "DF";

export interface MenuCategory {
  id: string;
  name: string;
  sort_order: number;
  is_active: boolean;
}

export interface MenuItem {
  id: string;
  category_id: string;
  category?: MenuCategory;
  name: string;
  description: string;
  price: number; // in dollars
  image_url: string | null;
  dietary_tags: DietaryTag[];
  is_available: boolean;
  sort_order: number;
}

export interface CartItem {
  menu_item: MenuItem;
  quantity: number;
  special_instructions: string;
}

export type OrderStatus = "pending" | "preparing" | "ready" | "picked_up";

export interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  pickup_time: string;
  status: OrderStatus;
  total_amount: number;
  stripe_payment_id: string | null;
  created_at: string;
  order_items?: OrderItem[];
}

export interface OrderItem {
  id: string;
  order_id: string;
  menu_item_id: string;
  menu_item?: MenuItem;
  quantity: number;
  special_instructions: string;
  item_price: number;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  event_date: string;
  party_size: number;
  message: string;
  created_at: string;
  is_read: boolean;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
}
