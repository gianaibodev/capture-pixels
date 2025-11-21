-- Run this SQL in your Supabase SQL Editor to set up the database

create table if not exists site_content (
  id bigint primary key generated always as identity,
  content jsonb not null,
  updated_at timestamptz default now()
);

-- Insert initial default content row (empty object for now, will be populated on first save)
insert into site_content (content) values ('{}');

-- (Optional) Enable Row Level Security
alter table site_content enable row level security;

-- Allow read access to everyone (public site needs to read)
create policy "Public Read Access" on site_content for select using (true);

-- Allow update access (in a real app, restrict this to authenticated admins)
-- For now, we will allow public updates for the demo, or you can use the Service Role key in your app to bypass RLS.
create policy "Public Update Access" on site_content for update using (true);
create policy "Public Insert Access" on site_content for insert with check (true);
