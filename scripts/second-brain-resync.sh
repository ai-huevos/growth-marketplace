#!/usr/bin/env bash
#
# second-brain-resync.sh — Re-sync second-brain docs to NotebookLM
#
# Deletes the old NLM source (by title match) and re-adds the updated file.
# NLM has no "update" command, so this is the only way to refresh content.
#
# Usage:
#   ./scripts/second-brain-resync.sh <file>              # Re-sync one file
#   ./scripts/second-brain-resync.sh --all                # Re-sync ALL second-brain .md files
#   ./scripts/second-brain-resync.sh --list               # Show what would be re-synced (dry run)
#   ./scripts/second-brain-resync.sh <file> --dry-run     # Show what would happen
#
# Examples:
#   ./scripts/second-brain-resync.sh docs/second-brain/02-metodologia-pulso.md
#   ./scripts/second-brain-resync.sh --all
#   ./scripts/second-brain-resync.sh --all --dry-run
#

set -euo pipefail

# ─── Configuration ───────────────────────────────────────────────────────────

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SECOND_BRAIN_DIR="${REPO_ROOT}/docs/second-brain"
NLM_NOTEBOOK="second-brain"

# ─── Colors ──────────────────────────────────────────────────────────────────

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

# ─── Defaults ────────────────────────────────────────────────────────────────

DRY_RUN=false
ALL_MODE=false
LIST_MODE=false
FILES=()

# ─── Parse arguments ─────────────────────────────────────────────────────────

while [[ $# -gt 0 ]]; do
  case "$1" in
    --all)      ALL_MODE=true; shift ;;
    --list)     LIST_MODE=true; shift ;;
    --dry-run)  DRY_RUN=true; shift ;;
    --help|-h)
      head -17 "$0" | tail -15
      exit 0
      ;;
    *)
      FILES+=("$1"); shift ;;
  esac
done

# ─── Validate ────────────────────────────────────────────────────────────────

if ! command -v nlm &>/dev/null; then
  echo -e "${RED}Error: nlm CLI not found. Install it first.${NC}"
  exit 1
fi

if [[ "$ALL_MODE" == true ]]; then
  while IFS= read -r -d '' f; do
    FILES+=("$f")
  done < <(find "$SECOND_BRAIN_DIR" -name "*.md" -print0 | sort -z)
elif [[ "$LIST_MODE" == true ]]; then
  ALL_MODE=true
  DRY_RUN=true
  while IFS= read -r -d '' f; do
    FILES+=("$f")
  done < <(find "$SECOND_BRAIN_DIR" -name "*.md" -print0 | sort -z)
elif [[ ${#FILES[@]} -eq 0 ]]; then
  echo -e "${RED}Error: No files specified. Use --all or provide file paths.${NC}"
  echo "Usage: $0 <file> | --all [--dry-run]"
  exit 1
fi

# ─── Fetch NLM source list once ──────────────────────────────────────────────

echo -e "${BLUE}Fetching NLM source list...${NC}"
NLM_SOURCES=$(nlm source list "$NLM_NOTEBOOK" 2>/dev/null)

# ─── Helper: find source ID by title ─────────────────────────────────────────

find_source_id() {
  local title="$1"
  echo "$NLM_SOURCES" | python3 -c "
import json, sys
data = json.load(sys.stdin)
title = '$title'
for s in data:
    if s['title'] == title:
        print(s['id'])
        sys.exit(0)
sys.exit(1)
" 2>/dev/null || echo ""
}

# ─── Process files ───────────────────────────────────────────────────────────

SYNCED=0
SKIPPED=0
FAILED=0
TOTAL=${#FILES[@]}

echo -e "${CYAN}Processing ${TOTAL} files...${NC}"
echo ""

for filepath in "${FILES[@]}"; do
  # Resolve to absolute path if relative
  if [[ ! "$filepath" = /* ]]; then
    filepath="${REPO_ROOT}/${filepath}"
  fi

  if [[ ! -f "$filepath" ]]; then
    echo -e "${RED}  SKIP  $(basename "$filepath") — file not found${NC}"
    ((SKIPPED++))
    continue
  fi

  filename=$(basename "$filepath")

  # Look for source by filename title
  source_id=$(find_source_id "$filename")

  if [[ -n "$source_id" ]]; then
    if [[ "$DRY_RUN" == true ]]; then
      echo -e "${YELLOW}  WOULD  ${filename} — delete ${source_id} + re-add${NC}"
      ((SYNCED++))
      continue
    fi

    # Delete old source
    echo -ne "${BLUE}  DELETE ${filename} (${source_id})...${NC}"
    if nlm source delete "$source_id" -y &>/dev/null; then
      echo -e " ${GREEN}OK${NC}"
    else
      echo -e " ${RED}FAILED${NC}"
      ((FAILED++))
      continue
    fi

    # Small delay to avoid rate limiting
    sleep 1

    # Re-add updated file
    echo -ne "${BLUE}  ADD    ${filename}...${NC}"
    if nlm source add "$NLM_NOTEBOOK" --file "$filepath" --title "$filename" --wait &>/dev/null; then
      echo -e " ${GREEN}OK${NC}"
      ((SYNCED++))
    else
      echo -e " ${RED}FAILED${NC}"
      ((FAILED++))
    fi
  else
    # Source not found in NLM — add as new
    if [[ "$DRY_RUN" == true ]]; then
      echo -e "${YELLOW}  NEW    ${filename} — would add as new source${NC}"
      ((SYNCED++))
      continue
    fi

    echo -ne "${BLUE}  NEW    ${filename}...${NC}"
    if nlm source add "$NLM_NOTEBOOK" --file "$filepath" --title "$filename" --wait &>/dev/null; then
      echo -e " ${GREEN}OK${NC}"
      ((SYNCED++))
    else
      echo -e " ${RED}FAILED${NC}"
      ((FAILED++))
    fi
  fi
done

# ─── Summary ─────────────────────────────────────────────────────────────────

echo ""
echo -e "${CYAN}═══════════════════════════════════════════${NC}"
if [[ "$DRY_RUN" == true ]]; then
  echo -e "${YELLOW}DRY RUN — no changes made${NC}"
fi
echo -e "  Total:   ${TOTAL}"
echo -e "  Synced:  ${GREEN}${SYNCED}${NC}"
echo -e "  Skipped: ${YELLOW}${SKIPPED}${NC}"
echo -e "  Failed:  ${RED}${FAILED}${NC}"
echo -e "${CYAN}═══════════════════════════════════════════${NC}"
