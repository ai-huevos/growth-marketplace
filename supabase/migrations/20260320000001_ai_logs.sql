-- Migration: AI Execution Logs

create table public.ai_execution_logs (
    id uuid default uuid_generate_v4() primary key,
    org_id uuid references public.organizations(id) on delete cascade not null,
    profile_id uuid references public.profiles(id) on delete cascade not null,
    skill_slug text not null,
    model_id text not null,
    latency_ms integer,
    prompt_tokens integer,
    completion_tokens integer,
    quality_score integer, -- 1 to 5 stars
    user_feedback text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS
alter table public.ai_execution_logs enable row level security;

create policy "Users can view logs for their organization"
on public.ai_execution_logs for select
using ( org_id in (select org_id from public.profiles where profiles.id = auth.uid()) );

create policy "Users can insert their own logs"
on public.ai_execution_logs for insert
with check ( profile_id = auth.uid() );
