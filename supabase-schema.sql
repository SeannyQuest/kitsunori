-- Kitsu Nori — Supabase PostgreSQL Schema
-- Run this in the Supabase SQL editor

-- Enable UUID extension
create extension if not exists "pgcrypto";

-- ==========================================
-- MENU
-- ==========================================

create table if not exists menu_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists menu_items (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references menu_categories(id) on delete cascade,
  name text not null,
  description text not null default '',
  price numeric(10, 2) not null check (price >= 0),
  image_url text,
  dietary_tags text[] not null default '{}',
  is_available boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ==========================================
-- ORDERS
-- ==========================================

create type order_status as enum ('pending', 'preparing', 'ready', 'picked_up', 'cancelled');

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  customer_email text not null,
  customer_phone text not null default '',
  pickup_time text not null,
  status order_status not null default 'pending',
  total_amount numeric(10, 2) not null check (total_amount >= 0),
  stripe_payment_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  menu_item_id uuid not null references menu_items(id),
  quantity integer not null check (quantity > 0),
  special_instructions text not null default '',
  item_price numeric(10, 2) not null check (item_price >= 0),
  created_at timestamptz not null default now()
);

-- ==========================================
-- INQUIRIES & CONTACTS
-- ==========================================

create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null default '',
  event_date date,
  party_size integer,
  message text not null default '',
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

-- ==========================================
-- NEWSLETTER
-- ==========================================

create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  subscribed_at timestamptz not null default now()
);

-- ==========================================
-- INDEXES
-- ==========================================

create index if not exists idx_menu_items_category on menu_items(category_id);
create index if not exists idx_menu_items_available on menu_items(is_available);
create index if not exists idx_orders_status on orders(status);
create index if not exists idx_orders_created on orders(created_at desc);
create index if not exists idx_order_items_order on order_items(order_id);
create index if not exists idx_inquiries_created on inquiries(created_at desc);
create index if not exists idx_inquiries_unread on inquiries(is_read) where is_read = false;

-- ==========================================
-- UPDATED_AT TRIGGER
-- ==========================================

create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_menu_items_updated_at
  before update on menu_items
  for each row execute function update_updated_at_column();

create trigger update_orders_updated_at
  before update on orders
  for each row execute function update_updated_at_column();

-- ==========================================
-- ROW LEVEL SECURITY (RLS)
-- ==========================================

-- Menu items and categories are public read
alter table menu_categories enable row level security;
alter table menu_items enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;
alter table inquiries enable row level security;
alter table newsletter_subscribers enable row level security;

-- Public can read active menu
create policy "Public can read active categories"
  on menu_categories for select
  using (is_active = true);

create policy "Public can read available items"
  on menu_items for select
  using (is_available = true);

-- Orders: insert only via service role (server-side)
create policy "Service role can manage orders"
  on orders for all
  using (auth.role() = 'service_role');

create policy "Service role can manage order items"
  on order_items for all
  using (auth.role() = 'service_role');

-- Inquiries: insert only via service role
create policy "Service role can manage inquiries"
  on inquiries for all
  using (auth.role() = 'service_role');

-- Newsletter: insert via service role
create policy "Service role can manage newsletter"
  on newsletter_subscribers for all
  using (auth.role() = 'service_role');

-- ==========================================
-- SEED MENU CATEGORIES
-- ==========================================

insert into menu_categories (name, sort_order) values
  ('Starters', 1),
  ('Sushi & Sashimi', 2),
  ('Specialty Rolls', 3),
  ('Entrées', 4),
  ('Sides', 5),
  ('Desserts', 6),
  ('Drinks & Sake', 7)
on conflict do nothing;
