-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create Organizations table
create table public.organizations (
    id uuid default uuid_generate_v4() primary key,
    name text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create User Profiles table (links auth.users to organizations)
create table public.profiles (
    id uuid references auth.users(id) on delete cascade primary key,
    org_id uuid references public.organizations(id) on delete cascade not null,
    first_name text,
    last_name text,
    role text default 'member'::text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create Diagnostic Results table
create table public.diagnostic_results (
    id uuid default uuid_generate_v4() primary key,
    org_id uuid references public.organizations(id) on delete cascade not null,
    raw_answers jsonb not null,
    pulso_score jsonb not null,
    plainiq_score integer not null,
    recommended_phase text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.organizations enable row level security;
alter table public.profiles enable row level security;
alter table public.diagnostic_results enable row level security;

-- Policies for Organizations
create policy "Users can view their own organization" 
on public.organizations for select 
using ( id in (select org_id from public.profiles where profiles.id = auth.uid()) );

-- Policies for Profiles
create policy "Users can view profiles in their organization"
on public.profiles for select
using ( org_id in (select org_id from public.profiles where profiles.id = auth.uid()) );

create policy "Users can update their own profile"
on public.profiles for update
using ( id = auth.uid() );

-- Policies for Diagnostic Results
create policy "Users can view diagnostic results for their organization"
on public.diagnostic_results for select
using ( org_id in (select org_id from public.profiles where profiles.id = auth.uid()) );

-- Add trigger to create profile when auth.user is created (Optional but standard)
create or replace function public.handle_new_user()
returns trigger as $$
declare
  new_org_id uuid;
begin
  -- First, create an organization automatically
  insert into public.organizations (name)
  values (coalesce(new.raw_user_meta_data->>'company_name', 'My Workspace'))
  returning id into new_org_id;

  -- Then, create the profile
  insert into public.profiles (id, org_id, first_name, last_name, role)
  values (
    new.id, 
    new_org_id,
    new.raw_user_meta_data->>'first_name', 
    new.raw_user_meta_data->>'last_name',
    'admin'
  );

  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
