-- Migration: Deliverables

create table public.deliverables (
    id uuid default uuid_generate_v4() primary key,
    org_id uuid references public.organizations(id) on delete cascade not null,
    profile_id uuid references public.profiles(id) on delete cascade not null,
    skill_slug text not null,
    title text not null,
    content text not null,
    status text default 'draft'::text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS
alter table public.deliverables enable row level security;

create policy "Users can view deliverables for their organization"
on public.deliverables for select
using ( org_id in (select org_id from public.profiles where profiles.id = auth.uid()) );

create policy "Users can insert deliverables into their organization"
on public.deliverables for insert
with check ( org_id in (select org_id from public.profiles where profiles.id = auth.uid()) );

create policy "Users can update deliverables in their organization"
on public.deliverables for update
using ( org_id in (select org_id from public.profiles where profiles.id = auth.uid()) );
