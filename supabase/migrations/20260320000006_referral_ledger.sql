-- Migration: Referral Ledger
-- Tracks referral counts per referrer and drives the referral ladder
-- (1 referral = case-study feature, 3 = discounted engagement, 5 = co-marketing
-- partner). Rung recalculation is automation-on-threshold, not manual.

create table public.referral_ledger (
    id uuid default uuid_generate_v4() primary key,
    org_id uuid references public.organizations(id) on delete cascade not null,
    referrer_client text,
    referral_count integer default 0,
    ladder_rung integer default 0,
    last_reward_at timestamp with time zone
);

-- RLS
alter table public.referral_ledger enable row level security;

create policy "Users can view referral ledger for their organization"
on public.referral_ledger for select
using ( org_id in (select org_id from public.profiles where profiles.id = auth.uid()) );

create policy "Users can insert referral ledger rows for their organization"
on public.referral_ledger for insert
with check ( org_id in (select org_id from public.profiles where profiles.id = auth.uid()) );

create policy "Users can update referral ledger rows for their organization"
on public.referral_ledger for update
using ( org_id in (select org_id from public.profiles where profiles.id = auth.uid()) );

-- Automation-on-threshold: recompute ladder_rung whenever referral_count crosses
-- 1, 3, or 5; stamp last_reward_at when the rung actually advances.
create or replace function public.update_referral_ladder()
returns trigger as $$
declare
  computed_rung integer;
begin
  if new.referral_count >= 5 then
    computed_rung := 3;
  elsif new.referral_count >= 3 then
    computed_rung := 2;
  elsif new.referral_count >= 1 then
    computed_rung := 1;
  else
    computed_rung := 0;
  end if;

  if (tg_op = 'INSERT' and computed_rung > 0)
     or (tg_op = 'UPDATE' and computed_rung > old.ladder_rung) then
    new.last_reward_at := timezone('utc'::text, now());
  end if;

  new.ladder_rung := computed_rung;

  return new;
end;
$$ language plpgsql security definer;

create trigger on_referral_count_change_update_ladder
  before insert or update of referral_count on public.referral_ledger
  for each row execute procedure public.update_referral_ladder();
