#!/usr/bin/env bash
# Batch-convert all Context Profiles Collection JSON → os/lenses/<domain>/<lens_id>.md
# Uses the numeric prefix in filenames (1-15) to map to domain folders.
# Handles Norman collision (appears in both Domain 6 and Domain 15).
# Idempotent: safe to re-run.

set -euo pipefail

SRC="${1:-/Users/naboo/Downloads/AIHUEVOS_BRANDBOOK/Context Profiles Collection}"
DEST_ROOT="os/lenses"

domain_for() {
  case "$1" in
    1)  echo "offer-engineering" ;;
    2)  echo "persuasion" ;;
    3)  echo "positioning" ;;
    4)  echo "ux-research" ;;
    5)  echo "thinking-models" ;;
    6)  echo "product-design" ;;
    7)  echo "sales-influence" ;;
    8)  echo "trust-ethics" ;;
    9)  echo "strategy-innovation" ;;
    10) echo "data-viz" ;;
    11) echo "forecasting" ;;
    12) echo "systems-ops" ;;
    13) echo "quality" ;;
    14) echo "ai-future" ;;
    15) echo "visual-design" ;;
    *)  echo "uncategorized" ;;
  esac
}

count=0
skipped=0
collisions=()

for f in "$SRC"/*.json; do
  base=$(basename "$f" .json)
  num="${base%%-*}"
  rest="${base#*-}"
  domain=$(domain_for "$num")
  lens_id="$rest"

  # Handle Norman collision (Domain 6 + Domain 15)
  if [ "$rest" = "norman" ]; then
    if [ "$num" = "6" ]; then
      lens_id="norman-product"
    elif [ "$num" = "15" ]; then
      lens_id="norman-visual"
    fi
  fi

  target="$DEST_ROOT/$domain/$lens_id.md"

  if [ "$domain" = "uncategorized" ]; then
    echo "⚠ SKIP — unknown domain prefix '$num' in $base.json"
    skipped=$((skipped+1))
    continue
  fi

  node scripts/convert-lens.mjs "$f" "$target" >/dev/null
  echo "✓ $domain/$lens_id.md"
  count=$((count+1))
done

echo ""
echo "Converted: $count"
echo "Skipped:   $skipped"
