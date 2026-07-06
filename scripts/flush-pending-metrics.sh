#!/usr/bin/env bash
#
# flush-pending-metrics.sh — Apply queued Revenue OS instrumentation writes
#
# Instrumentation commands (prospect, post-discovery, sales-coach, desk-work,
# follow-up in os/skills/sales-orchestrator/commands/) fall back to writing
# their stage_transitions / execution_scores INSERT statements to
# clients/<client>/deals/<deal>/pending-metrics.sql whenever neither the
# Supabase MCP nor a reachable local DB is available at run time — so no
# data point is silently lost. This script finds those queued files, applies
# each one against the local Supabase instance, and archives what succeeded.
#
# Usage:
#   ./scripts/flush-pending-metrics.sh [--dry-run]
#
# Behavior:
#   - Skips (does not fail) if the local DB is unreachable — warns and exits 0
#     so this is safe to run speculatively (e.g. from a cron/loop).
#   - On successful apply: renames <file>/pending-metrics.sql to
#     pending-metrics.applied.sql (never deletes data).
#   - On failed apply: leaves the file in place, warns, continues to the next.
#   - Never touches files outside clients/*/deals/*/pending-metrics.sql.
#
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DB_URL="${DATABASE_URL:-postgresql://postgres:postgres@127.0.0.1:54332/postgres}"
DRY_RUN=false

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=true ;;
    *) echo "Unknown argument: $arg" >&2; exit 1 ;;
  esac
done

if ! command -v psql >/dev/null 2>&1; then
  echo -e "${YELLOW}[WARN]${NC} psql not found on PATH — skipping flush." >&2
  exit 0
fi

if ! psql "$DB_URL" -c '\q' >/dev/null 2>&1; then
  echo -e "${YELLOW}[WARN]${NC} Local Supabase DB unreachable at $DB_URL — skipping flush (files left in place)." >&2
  exit 0
fi

mapfile -t pending_files < <(find "$REPO_ROOT/clients" -type f -path '*/deals/*/pending-metrics.sql' 2>/dev/null | sort)

if [ "${#pending_files[@]}" -eq 0 ]; then
  echo "No pending-metrics.sql files found."
  exit 0
fi

applied=0
failed=0

for file in "${pending_files[@]}"; do
  echo "── $file"

  if [ "$DRY_RUN" = true ]; then
    echo "  [dry-run] would apply and archive as ${file%.sql}.applied.sql"
    continue
  fi

  if psql "$DB_URL" -v ON_ERROR_STOP=1 -f "$file" >/dev/null 2>&1; then
    mv "$file" "${file%.sql}.applied.sql"
    echo -e "  ${GREEN}applied${NC} -> ${file%.sql}.applied.sql"
    applied=$((applied + 1))
  else
    echo -e "  ${RED}FAILED${NC} — left in place for manual review" >&2
    failed=$((failed + 1))
  fi
done

echo ""
echo "Done. Applied: $applied  Failed: $failed  Total: ${#pending_files[@]}"

if [ "$failed" -gt 0 ]; then
  exit 1
fi
