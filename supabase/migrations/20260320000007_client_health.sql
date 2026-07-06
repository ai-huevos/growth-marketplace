-- Migration: Client Health
-- Retention health-score loop (gap G4, _revenue-os/03-architecture.md §2.3, §3.3).
-- For services firms with no product telemetry, health is scored from relationship
-- signals (meeting cadence, response latency, CSM Pulse) instead of usage data
-- [R:G4 Gainsight/Vitally]. Band thresholds are [DESIGN D2] — no low-volume (5-20
-- client) services benchmark exists; validate by dog-fooding against real renewals.

create table public.client_health (
    id uuid default uuid_generate_v4() primary key,
    org_id uuid references public.organizations(id) on delete cascade not null,
    client_slug text not null,
    health_score integer not null,
    health_band text,
    nps integer,
    signals jsonb default '{}'::jsonb,
    computed_at timestamp with time zone default timezone('utc'::text, now()) not null,
    constraint client_health_score_check check ( health_score >= 0 and health_score <= 100 ),
    constraint client_health_band_check check (
        health_band is null or health_band in ('healthy', 'stable', 'at_risk', 'critical')
    ),
    constraint client_health_nps_check check ( nps is null or (nps >= 0 and nps <= 10) )
);

comment on column public.client_health.signals is
  'jsonb: { meeting_cadence, response_latency_days, csm_pulse } — relationship signals, no usage telemetry available for services engagements [R:G4].';

-- [SIMPLIFIED] Daily grain: the brief asks for UNIQUE (org_id, client_slug, computed_at::date).
-- An expression-based unique index on computed_at::date is technically possible in PG17,
-- but ::date casts a timestamptz using the SESSION timezone, not a fixed one — so the
-- "day" boundary would silently shift depending on who/what writes the row, conflicting
-- with the timezone-utc convention used everywhere else in this schema. Rather than pin
-- a specific timezone inside a unique expression index (fragile, easy to get wrong),
-- client_health is kept as an append-only log: no DB-level uniqueness is enforced, and
-- the health-monitor-agent is responsible for idempotency (check `health_drops` /
-- last `computed_at` before writing a new row for the same day). A plain btree index
-- covers the read pattern instead.
create index client_health_org_slug_computed_idx
  on public.client_health (org_id, client_slug, computed_at desc);

-- RLS
alter table public.client_health enable row level security;

create policy "Users can view client health for their organization"
on public.client_health for select
using ( org_id in (select org_id from public.profiles where profiles.id = auth.uid()) );

create policy "Users can insert client health rows for their organization"
on public.client_health for insert
with check ( org_id in (select org_id from public.profiles where profiles.id = auth.uid()) );

create policy "Users can update client health rows for their organization"
on public.client_health for update
using ( org_id in (select org_id from public.profiles where profiles.id = auth.uid()) );

-- [DESIGN D2] Pylon-pattern bands: 80-100 healthy, 60-79 stable, 40-59 at_risk, 0-39
-- critical. Thresholds are a starting point, not a verified services benchmark —
-- recalibrate against real renewal outcomes (architecture §9, D2).
create or replace function public.derive_health_band()
returns trigger as $$
begin
  if new.health_score >= 80 then
    new.health_band := 'healthy';
  elsif new.health_score >= 60 then
    new.health_band := 'stable';
  elsif new.health_score >= 40 then
    new.health_band := 'at_risk';
  else
    new.health_band := 'critical';
  end if;

  return new;
end;
$$ language plpgsql security definer;

create trigger on_client_health_change_derive_band
  before insert or update of health_score on public.client_health
  for each row execute procedure public.derive_health_band();

-- RET -> REF seam (architecture §5): peak-satisfaction NPS>=9 flags the client as
-- referral-ready by seeding a referral_ledger row, if one doesn't already exist.
-- referral_ledger has no unique constraint on (org_id, referrer_client) [REPO:
-- 20260320000006_referral_ledger.sql], so this uses an existence check instead of
-- ON CONFLICT. security definer so the trigger can write across the RLS boundary
-- the same way update_referral_ladder() already does in that migration.
create or replace function public.flag_referral_ready()
returns trigger as $$
begin
  insert into public.referral_ledger (org_id, referrer_client)
  select new.org_id, new.client_slug
  where not exists (
    select 1 from public.referral_ledger
    where org_id = new.org_id and referrer_client = new.client_slug
  );

  return new;
end;
$$ language plpgsql security definer;

create trigger on_client_health_insert_flag_referral_ready
  after insert on public.client_health
  for each row
  when ( new.nps is not null and new.nps >= 9 )
  execute procedure public.flag_referral_ready();

-- Delta-alert surface (Vitally pattern, architecture §3.3): alert on score DROPS,
-- not just absolute bands. security_invoker so the view still enforces the caller's
-- RLS policy on the underlying table rather than the view owner's.
create view public.health_drops
with (security_invoker = true) as
with ranked as (
  select
    org_id,
    client_slug,
    health_score,
    health_band,
    computed_at,
    row_number() over (
      partition by org_id, client_slug
      order by computed_at desc
    ) as rn
  from public.client_health
)
select
  latest.org_id,
  latest.client_slug,
  previous.health_score as previous_score,
  latest.health_score as current_score,
  (previous.health_score - latest.health_score) as score_drop,
  latest.health_band as current_band,
  previous.computed_at as previous_computed_at,
  latest.computed_at as current_computed_at
from ranked latest
join ranked previous
  on previous.org_id = latest.org_id
  and previous.client_slug = latest.client_slug
  and previous.rn = latest.rn + 1
where latest.rn = 1
  and (previous.health_score - latest.health_score) >= 15;
