#!/usr/bin/env bash
#
# second-brain-sync.sh — Sync a file into the Growth Marketplace second-brain
#
# Usage:
#   ./scripts/second-brain-sync.sh <file> [--copy] [--git] [--dry-run] [--title "Custom Title"]
#
# What it does:
#   1. Auto-detects the next NN- number in docs/second-brain/
#   2. Generates a slug from the filename (or --title)
#   3. Moves (or copies with --copy) the file to docs/second-brain/NN-slug.md
#   4. Uploads to NotebookLM via `nlm source add`
#   5. Optionally stages + commits with --git
#
# Examples:
#   ./scripts/second-brain-sync.sh research-output.md
#   ./scripts/second-brain-sync.sh "Content Mavericks Guide.md" --copy --dry-run
#   ./scripts/second-brain-sync.sh notes.md --title "quiz-funnel-research" --git
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
NC='\033[0m' # No Color

# ─── Defaults ────────────────────────────────────────────────────────────────

DRY_RUN=false
COPY_MODE=false
GIT_COMMIT=false
CUSTOM_TITLE=""

# ─── Functions ───────────────────────────────────────────────────────────────

usage() {
    echo "Usage: $0 <file> [options]"
    echo ""
    echo "Options:"
    echo "  --copy       Copy file instead of moving it"
    echo "  --git        Stage and commit after sync"
    echo "  --dry-run    Show what would happen without doing it"
    echo "  --title STR  Override the slug (e.g. 'quiz-funnel-research')"
    echo "  --help       Show this help"
    exit 1
}

slugify() {
    echo "$1" \
        | sed 's/\.md$//' \
        | tr '[:upper:]' '[:lower:]' \
        | sed 's/[^a-z0-9áéíóúñü]/-/g' \
        | sed 's/--*/-/g' \
        | sed 's/^-//' \
        | sed 's/-$//'
}

next_number() {
    local max=0
    for f in "${SECOND_BRAIN_DIR}"/[0-9][0-9]-*.md; do
        [ -f "$f" ] || continue
        num=$(basename "$f" | grep -oE '^[0-9]+' | sed 's/^0*//')
        num=${num:-0}
        if (( num > max )); then
            max=$num
        fi
    done
    printf "%02d" $(( max + 1 ))
}

log_info()    { echo -e "${BLUE}[INFO]${NC}  $*"; }
log_success() { echo -e "${GREEN}[OK]${NC}    $*"; }
log_warn()    { echo -e "${YELLOW}[WARN]${NC}  $*"; }
log_error()   { echo -e "${RED}[ERROR]${NC} $*"; }
log_dry()     { echo -e "${YELLOW}[DRY]${NC}   $*"; }

# ─── Parse Arguments ─────────────────────────────────────────────────────────

INPUT_FILE=""

while [[ $# -gt 0 ]]; do
    case "$1" in
        --copy)     COPY_MODE=true; shift ;;
        --git)      GIT_COMMIT=true; shift ;;
        --dry-run)  DRY_RUN=true; shift ;;
        --title)    CUSTOM_TITLE="$2"; shift 2 ;;
        --help|-h)  usage ;;
        -*)         log_error "Unknown option: $1"; usage ;;
        *)
            if [[ -z "$INPUT_FILE" ]]; then
                INPUT_FILE="$1"
            else
                log_error "Multiple input files not supported"
                usage
            fi
            shift
            ;;
    esac
done

if [[ -z "$INPUT_FILE" ]]; then
    log_error "No input file specified"
    usage
fi

# ─── Resolve Input ───────────────────────────────────────────────────────────

# Handle relative paths from repo root
if [[ ! -f "$INPUT_FILE" ]] && [[ -f "${REPO_ROOT}/${INPUT_FILE}" ]]; then
    INPUT_FILE="${REPO_ROOT}/${INPUT_FILE}"
fi

if [[ ! -f "$INPUT_FILE" ]]; then
    log_error "File not found: $INPUT_FILE"
    exit 1
fi

INPUT_BASENAME="$(basename "$INPUT_FILE")"

# ─── Compute Target ──────────────────────────────────────────────────────────

NEXT_NUM=$(next_number)

if [[ -n "$CUSTOM_TITLE" ]]; then
    SLUG=$(slugify "$CUSTOM_TITLE")
else
    SLUG=$(slugify "$INPUT_BASENAME")
fi

TARGET_FILENAME="${NEXT_NUM}-${SLUG}.md"
TARGET_PATH="${SECOND_BRAIN_DIR}/${TARGET_FILENAME}"

# ─── Summary ─────────────────────────────────────────────────────────────────

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo " Second Brain Sync"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
log_info "Source:  $INPUT_FILE"
log_info "Target:  $TARGET_PATH"
log_info "Action:  $(if $COPY_MODE; then echo 'COPY'; else echo 'MOVE'; fi)"
log_info "NLM:     nlm source add $NLM_NOTEBOOK --file ... --title \"$TARGET_FILENAME\" --wait"
if $GIT_COMMIT; then
    log_info "Git:     Will stage + commit"
fi
echo ""

# ─── Execute ─────────────────────────────────────────────────────────────────

if $DRY_RUN; then
    log_dry "Would $(if $COPY_MODE; then echo 'copy'; else echo 'move'; fi) file to $TARGET_PATH"
    log_dry "Would run: nlm source add $NLM_NOTEBOOK --file \"$TARGET_PATH\" --title \"$TARGET_FILENAME\" --wait"
    if $GIT_COMMIT; then
        log_dry "Would run: git add \"$TARGET_PATH\" && git commit -m \"docs(second-brain): add $TARGET_FILENAME\""
    fi
    echo ""
    log_success "Dry run complete — no changes made"
    exit 0
fi

# Step 1: Move or copy
if $COPY_MODE; then
    cp "$INPUT_FILE" "$TARGET_PATH"
    log_success "Copied to $TARGET_PATH"
else
    mv "$INPUT_FILE" "$TARGET_PATH"
    log_success "Moved to $TARGET_PATH"
fi

# Step 2: Upload to NLM
log_info "Uploading to NotebookLM..."
if command -v nlm &>/dev/null; then
    if nlm source add "$NLM_NOTEBOOK" --file "$TARGET_PATH" --title "$TARGET_FILENAME" --wait; then
        log_success "Uploaded to NotebookLM as \"$TARGET_FILENAME\""
    else
        log_warn "NLM upload failed — file is in place, upload manually"
    fi
else
    log_warn "nlm CLI not found — file is in place, upload manually"
fi

# Step 3: Git commit (optional)
if $GIT_COMMIT; then
    log_info "Staging and committing..."
    cd "$REPO_ROOT"
    git add "$TARGET_PATH"
    # If we moved (not copied), also stage the deletion of the original
    if ! $COPY_MODE; then
        git add "$INPUT_FILE" 2>/dev/null || true
    fi
    git commit -m "docs(second-brain): add $TARGET_FILENAME"
    log_success "Committed"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
log_success "Sync complete: $TARGET_FILENAME"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
