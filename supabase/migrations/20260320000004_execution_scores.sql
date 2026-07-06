-- Migration: Execution Scores
-- Outcome scores linked to an ai_execution_logs run (langfuse/langsmith pattern:
-- outcomes as separate keyed score records, not baked into the log row).
-- Constitution quality gates (Art. VII) become score_key values here.

create table public.execution_scores (
    id uuid default uuid_generate_v4() primary key,
    execution_id uuid references public.ai_execution_logs(id) on delete cascade not null,
    org_id uuid references public.organizations(id) on delete cascade not null,
    score_key text not null,
    score_value numeric,
    comment text,
    source text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    constraint execution_scores_source_check check ( source in ('human', 'rule', 'llm_judge') )
);

-- RLS
alter table public.execution_scores enable row level security;

create policy "Users can view execution scores for their organization"
on public.execution_scores for select
using ( org_id in (select org_id from public.profiles where profiles.id = auth.uid()) );

create policy "Users can insert execution scores for their organization"
on public.execution_scores for insert
with check ( org_id in (select org_id from public.profiles where profiles.id = auth.uid()) );
