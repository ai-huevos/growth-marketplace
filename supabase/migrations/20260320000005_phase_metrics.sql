-- Migration: Phase Metrics
-- Exactly one headline-metric row per AARRR stage per organization (posthog/fatgraphs
-- pattern: cap at one metric per stage). Provisioned automatically on org creation,
-- backfilled here for organizations that already exist.

create table public.phase_metrics (
    org_id uuid references public.organizations(id) on delete cascade not null,
    stage text not null,
    headline_metric_key text not null,
    current_value numeric default 0,
    gate_value numeric,
    gate_direction text,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
    primary key (org_id, stage),
    constraint phase_metrics_stage_check check (
        stage in (
            'DEFINIR', 'ATRAER', 'CONVERTIR', 'ESCALAR', 'REFERIR',
            'ACQUISITION', 'ACTIVATION', 'RETENTION', 'REVENUE', 'REFERRAL'
        )
    ),
    constraint phase_metrics_gate_direction_check check (
        gate_direction is null or gate_direction in ('above', 'below')
    )
);

-- RLS
alter table public.phase_metrics enable row level security;

create policy "Users can view phase metrics for their organization"
on public.phase_metrics for select
using ( org_id in (select org_id from public.profiles where profiles.id = auth.uid()) );

create policy "Users can update phase metrics for their organization"
on public.phase_metrics for update
using ( org_id in (select org_id from public.profiles where profiles.id = auth.uid()) );

-- Seed function: provisions the 5 headline-metric rows for a newly created organization.
create or replace function public.seed_phase_metrics()
returns trigger as $$
begin
  insert into public.phase_metrics (org_id, stage, headline_metric_key, current_value, gate_value, gate_direction)
  values
    (new.id, 'ACQUISITION', 'icp_qualified_signups', 0, null, null),
    (new.id, 'ACTIVATION', 'ttfv_days', 0, null, 'below'),
    (new.id, 'RETENTION', 'gross_churn', 0, 10, 'below'),
    (new.id, 'REVENUE', 'win_rate', 0, 30, 'above'),
    (new.id, 'REFERRAL', 'referred_pipeline', 0, null, 'above')
  on conflict (org_id, stage) do nothing;

  return new;
end;
$$ language plpgsql security definer;

create trigger on_organization_created_seed_phase_metrics
  after insert on public.organizations
  for each row execute procedure public.seed_phase_metrics();

-- Backfill: provision the 5 rows for organizations that already existed before this migration.
insert into public.phase_metrics (org_id, stage, headline_metric_key, current_value, gate_value, gate_direction)
select o.id, s.stage, s.headline_metric_key, 0, s.gate_value, s.gate_direction
from public.organizations o
cross join (
    values
        ('ACQUISITION', 'icp_qualified_signups', null::numeric, null::text),
        ('ACTIVATION', 'ttfv_days', null::numeric, 'below'),
        ('RETENTION', 'gross_churn', 10::numeric, 'below'),
        ('REVENUE', 'win_rate', 30::numeric, 'above'),
        ('REFERRAL', 'referred_pipeline', null::numeric, 'above')
) as s(stage, headline_metric_key, gate_value, gate_direction)
on conflict (org_id, stage) do nothing;
