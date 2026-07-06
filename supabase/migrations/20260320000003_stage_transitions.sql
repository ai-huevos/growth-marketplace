-- Migration: Stage Transitions
-- Records phase/AARRR stage transitions per organization. Each row is one named
-- transition event with the headline metric that triggered it and the scale it
-- was measured on. Scales differ across phases (PULSO 0-25, PlainIQ 0-40, etc.)
-- so drift must stay observable per-event, never averaged across scales.

create table public.stage_transitions (
    id uuid default uuid_generate_v4() primary key,
    org_id uuid references public.organizations(id) on delete cascade not null,
    from_stage text,
    to_stage text not null,
    headline_metric_key text,
    metric_value numeric,
    scale text,
    occurred_at timestamp with time zone default timezone('utc'::text, now()) not null,
    constraint stage_transitions_from_stage_check check (
        from_stage is null or from_stage in (
            'DEFINIR', 'ATRAER', 'CONVERTIR', 'ESCALAR', 'REFERIR',
            'ACQUISITION', 'ACTIVATION', 'RETENTION', 'REVENUE', 'REFERRAL'
        )
    ),
    constraint stage_transitions_to_stage_check check (
        to_stage in (
            'DEFINIR', 'ATRAER', 'CONVERTIR', 'ESCALAR', 'REFERIR',
            'ACQUISITION', 'ACTIVATION', 'RETENTION', 'REVENUE', 'REFERRAL'
        )
    )
);

-- RLS
alter table public.stage_transitions enable row level security;

create policy "Users can view stage transitions for their organization"
on public.stage_transitions for select
using ( org_id in (select org_id from public.profiles where profiles.id = auth.uid()) );

create policy "Users can insert stage transitions for their organization"
on public.stage_transitions for insert
with check ( org_id in (select org_id from public.profiles where profiles.id = auth.uid()) );
