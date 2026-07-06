-- Instrumentacion (Revenue OS) — fallback INSERTs pendientes de flush
-- Generado por /post-discovery (sales-orchestrator) sobre el deal Anagram
-- org_id se resuelve de public.organizations donde name = 'ai-huevos'
-- Mecanismo de escritura preferido (en orden): execute_sql (Supabase MCP) -> psql "$DATABASE_URL" (local, puerto 54332) -> este archivo (fallback)
-- Ninguno de los dos primeros mecanismos estaba disponible en esta ejecucion; se deja aqui para que el agente principal haga el flush.

-- 1. Checkpoint PULSO dentro de CONVERTIR (from_stage = to_stage, no hay avance de fase todavia)
insert into public.stage_transitions
  (org_id, from_stage, to_stage, headline_metric_key, metric_value, scale)
values (
  (select id from public.organizations where name = 'ai-huevos'),
  'CONVERTIR', 'CONVERTIR', 'pulso_discovery', 18, '0-25'
);

-- 2. Log de ejecucion + score de calidad de extraccion
-- NOTA: {{PROFILE_ID}} y {{MODEL_ID}} deben ser resueltos por el agente que haga el flush
-- (perfil que ejecuto el comando y modelo usado). No se cuenta con esos valores en esta corrida.
with log as (
  insert into public.ai_execution_logs (org_id, profile_id, skill_slug, model_id)
  values (
    (select id from public.organizations where name = 'ai-huevos'),
    '{{PROFILE_ID}}', 'post-discovery', '{{MODEL_ID}}'
  ) returning id
)
insert into public.execution_scores (execution_id, org_id, score_key, score_value, source)
select log.id,
  (select id from public.organizations where name = 'ai-huevos'),
  'discovery_quality', 0.95, 'rule'
from log;

-- Notas de calidad de extraccion (base del score 0.95):
-- Las 10 secciones del framework (business-context.md) tienen datos reales extraidos de las 2 transcripciones.
-- Gaps menores marcados como "No mencionado": revenue anual exacto, fecha de fundacion de la marca,
-- conteo exacto de empleados (solo "casi 100"), y ausencia de pricing-grid.md formal para ai-huevos
-- (sizing basado en pricing citado textualmente por Daniel Cardona en las llamadas).

-- 3. Log de ejecucion + score de calidad de conversacion (/sales-coach)
-- Fuente: coaching-report.md — scorecard 0-85 aplicado a las 2 discovery calls (Call 1: 22/85 Critico,
-- Call 2: 40/85 Aceptable). score_value = promedio de ambas calls normalizado 0-1: (22+40)/2/85 = 0.36
-- NOTA: {{PROFILE_ID}} y {{MODEL_ID}} deben ser resueltos por el agente que haga el flush
-- (perfil que ejecuto el comando y modelo usado). No se cuenta con esos valores en esta corrida.
with log as (
  insert into public.ai_execution_logs (org_id, profile_id, skill_slug, model_id)
  values (
    (select id from public.organizations where name = 'ai-huevos'),
    '{{PROFILE_ID}}', 'sales-coach', '{{MODEL_ID}}'
  ) returning id
)
insert into public.execution_scores (execution_id, org_id, score_key, score_value, source)
select log.id,
  (select id from public.organizations where name = 'ai-huevos'),
  'conversation_quality', 0.36, 'llm_judge'
from log;

-- 4. Revision retroactiva de la propuesta ya enviada (2026-07-01) contra proposal-pricing-agent.md
-- Ver detalle completo en clients/ai-huevos/deals/anagram/proposal-review.md
-- NOTA: {{PROFILE_ID}} y {{MODEL_ID}} deben ser resueltos por el agente que haga el flush
-- (perfil que ejecuto la revision retroactiva y modelo usado). No se cuenta con esos valores en esta corrida.
with log as (
  insert into public.ai_execution_logs (org_id, profile_id, skill_slug, model_id)
  values (
    (select id from public.organizations where name = 'ai-huevos'),
    '{{PROFILE_ID}}', 'proposal-pricing-agent', '{{MODEL_ID}}'
  ) returning id
)
insert into public.execution_scores (execution_id, org_id, score_key, score_value, comment, source)
select log.id,
  (select id from public.organizations where name = 'ai-huevos'),
  'proposal_review',
  0.38,
  'Revision retroactiva: gate PULSO 18/25 < 23 -> el sistema habria devuelto DENIED antes de generar cualquier '
  || 'propuesta o tier (Constitucion Art. VII). La propuesta se envio de todas formas el 2026-07-01. Score 38/100 '
  || 'evalua la calidad del artefacto enviado (no la decision de enviarlo, que ya viola el gate): pricing rationale '
  || '10/25 (SKU add-on de $1,500 sin racional documentado + descuento a $500 solo en el email de portada, nunca '
  || 'en el documento), deal-context alignment 12/25 (cubre bien la objecion "50% humano" de Jina, ignora/contradice '
  || 'el pedido de freemium de Tomas), diff-vs-grid 8/25 (grid no instalada; 2 de 3 precios del paquete final sin '
  || 'trazabilidad previa al envio), riesgos 8/25 (garantias genericas, sin Risk Matrix explicito, doble vigencia '
  || 'contradictoria: 30 dias en el documento vs. 5 dias habiles en el email). Errores de ejecucion agravantes: '
  || 'Jina Prince (gatekeeper de ROI) quedo fuera del envio original por typo de correo (jjprince vs jprince), solo '
  || 'lo vio 2 dias despues via reply-all, reduciendo su ventana real del descuento; NDA recibido 2026-07-04 aun sin '
  || 'leer por el vendedor a la fecha de esta revision.',
  'human'
from log;
