create table if not exists public.videos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  title text not null,
  channel text not null,
  category text not null,
  subcategory text,
  status text not null,
  rating integer default 0,
  priority text,
  language text,
  type text,
  url text,
  insight text,
  test_idea text,
  notes text,
  watched_at date,
  duration_minutes integer default 0,
  tags text[] default '{}',
  created_at timestamptz default now()
);

alter table public.videos enable row level security;

create policy "Users can view own videos"
  on public.videos
  for select
  using (auth.uid() = user_id);

create policy "Users can insert own videos"
  on public.videos
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update own videos"
  on public.videos
  for update
  using (auth.uid() = user_id);

create policy "Users can delete own videos"
  on public.videos
  for delete
  using (auth.uid() = user_id);
