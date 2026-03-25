#!/bin/bash
# second-brain-sync.sh — PostToolUse hook for docs/second-brain/*.md
#
# Triggered after Write/Edit on second-brain docs.
# 1. Syncs file to NotebookLM via nlm CLI
# 2. Runs consistency validation query
# 3. Appends issues to docs/second-brain-backlog.md
#
# Input: JSON on stdin from Claude Code hook system
# Output: JSON on stdout (systemMessage for Claude)

set -euo pipefail

# --- Read hook input ---
INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')
TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name // empty')

# --- Guard: only act on docs/second-brain/*.md ---
if [[ -z "$FILE_PATH" ]]; then
  exit 0
fi

if [[ "$FILE_PATH" != */docs/second-brain/*.md ]]; then
  exit 0
fi

# --- Derive paths ---
FILENAME=$(basename "$FILE_PATH")
PROJECT_DIR=$(echo "$INPUT" | jq -r '.cwd // empty')
BACKLOG_FILE="${PROJECT_DIR}/docs/second-brain-backlog.md"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M')

# --- Step 1: Sync to NLM ---
SYNC_OUTPUT=$(nlm source add second-brain --file "$FILE_PATH" --title "$FILENAME" --wait 2>&1) || true
SYNC_SUCCESS=$?

# --- Step 2: Validate consistency ---
VALIDATION_QUERY="Analyze the source '${FILENAME}' for consistency with the rest of the notebook. Check for:
1. Contradictions with other sources (conflicting numbers, dates, names)
2. Stale data (outdated counts, old terminology, deprecated references)
3. Missing cross-references (mentions concepts without linking to their source doc)
4. Terminology drift (same concept called different names across docs)

If everything is consistent, respond with exactly: VALID
If issues found, list each as: ISSUE: [description]"

VALIDATION_RAW=$(nlm notebook query second-brain "$VALIDATION_QUERY" 2>&1) || true

# --- Step 3: Extract answer from NLM JSON and parse issues ---
# nlm returns JSON like {"answer": "ISSUE: ...\nISSUE: ..."} or plain text
ANSWER=$(echo "$VALIDATION_RAW" | jq -r '.answer // empty' 2>/dev/null)
if [[ -z "$ANSWER" ]]; then
  # Fallback: treat raw output as the answer (non-JSON response)
  ANSWER="$VALIDATION_RAW"
fi

# Split ISSUE: lines from the answer text
HAS_ISSUES=false
ISSUES=""

if echo "$ANSWER" | grep -q "ISSUE:"; then
  HAS_ISSUES=true
  # Extract each ISSUE: line, handling both literal newlines and \n in JSON strings
  ISSUES=$(echo "$ANSWER" | tr '\\n' '\n' | grep "ISSUE:" | sed 's/^[[:space:]]*//' || true)
fi

# --- Step 4: Append to backlog if issues found ---
if [ "$HAS_ISSUES" = true ]; then
  # Initialize backlog file if it doesn't exist
  if [ ! -f "$BACKLOG_FILE" ]; then
    cat > "$BACKLOG_FILE" << 'HEADER'
# Second Brain — Validation Backlog

Issues detected by automated NLM validation after second-brain doc syncs. Each entry is an actionable work item.

## Format

- **[ ]** = Open issue, needs resolution
- **[x]** = Resolved

---

HEADER
  fi

  # Append new issues (one checkbox per ISSUE: line)
  {
    echo ""
    echo "### ${TIMESTAMP} — ${FILENAME} (${TOOL_NAME})"
    echo ""
    echo "$ISSUES" | while IFS= read -r line; do
      issue_text=$(echo "$line" | sed 's/^ISSUE:[[:space:]]*//')
      if [[ -n "$issue_text" ]]; then
        echo "- [ ] ${issue_text}"
      fi
    done
    echo ""
  } >> "$BACKLOG_FILE"

  # Return message to Claude
  ISSUE_COUNT=$(echo "$ISSUES" | grep -c "ISSUE:" || echo "0")
  cat << EOF
{
  "systemMessage": "NLM Sync completed for ${FILENAME}. Validation found ${ISSUE_COUNT} issue(s) — appended to docs/second-brain-backlog.md. Review the backlog when convenient."
}
EOF
else
  # Clean sync, no issues
  cat << EOF
{
  "systemMessage": "NLM Sync completed for ${FILENAME}. Validation: PASSED — no inconsistencies detected."
}
EOF
fi
