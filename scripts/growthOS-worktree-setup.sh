#!/usr/bin/env bash
#
# growthOS-worktree-setup.sh — Create branches and worktrees for GrowthOS migration waves
#
# Usage:
#   ./scripts/growthOS-worktree-setup.sh <wave> [--dry-run]
#
# Waves:
#   wave1   phase-2 branch + worktree ../growth-wt-phase2
#   wave2   phase-3a, phase-3b, phase-3c branches + worktrees
#   wave3   phase-3d, phase-4, phase-5 branches + worktrees (run after wave2 merged)
#   wave4   phase-6, phase-7 branches + worktrees (run after wave3 merged)
#
# Must be run from repo root. Worktrees are created in the parent directory (sibling to repo).
# See docs/growthOS-worktree-cloud-deployment.md for merge order and agent instructions.
#

set -euo pipefail

# ─── Configuration ───────────────────────────────────────────────────────────

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PARENT_DIR="$(dirname "$REPO_ROOT")"
ORIGIN_DEV="origin/development"

# ─── Colors ──────────────────────────────────────────────────────────────────

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# ─── Defaults ────────────────────────────────────────────────────────────────

DRY_RUN=false

# ─── Functions ───────────────────────────────────────────────────────────────

usage() {
    echo "Usage: $0 <wave> [--dry-run]"
    echo ""
    echo "Waves:"
    echo "  wave1   phase-2 (dotcom-secrets → motor-de-ofertas)"
    echo "  wave2   phase-3a, phase-3b, phase-3c (parallel P1 renames)"
    echo "  wave3   phase-3d, phase-4, phase-5 (sequential)"
    echo "  wave4   phase-6, phase-7 (PM evolution + MCP bridge)"
    echo ""
    echo "Options:"
    echo "  --dry-run   Print commands only, do not run"
    echo "  --help      Show this help"
    exit "${1:-1}"
}

log_info()    { echo -e "${BLUE}[INFO]${NC}  $*"; }
log_success() { echo -e "${GREEN}[OK]${NC}    $*"; }
log_warn()    { echo -e "${YELLOW}[WARN]${NC}  $*"; }
log_dry()     { echo -e "${YELLOW}[DRY]${NC}   $*"; }

run() {
    if $DRY_RUN; then
        log_dry "$*"
    else
        "$@"
    fi
}

branch_exists() {
    git rev-parse --verify "$1" &>/dev/null
}

worktree_exists() {
    local dir_name=$1
    git worktree list --porcelain | grep -q "worktree $PARENT_DIR/$dir_name"
}

ensure_development() {
    run git fetch origin development
    if ! run git rev-parse --verify "$ORIGIN_DEV" &>/dev/null; then
        echo "Error: $ORIGIN_DEV not found. Run: git fetch origin development"
        exit 1
    fi
}

create_branch_from_development() {
    local branch=$1
    if branch_exists "$branch"; then
        log_warn "Branch $branch already exists, skipping"
    else
        run git branch "$branch" "$ORIGIN_DEV"
        log_success "Branch $branch created from $ORIGIN_DEV"
    fi
}

add_worktree() {
    local dir_name=$1
    local branch=$2
    local path="$PARENT_DIR/$dir_name"
    if worktree_exists "$dir_name"; then
        log_warn "Worktree $path already exists, skipping"
    else
        run git worktree add "$path" "$branch"
        log_success "Worktree $path (branch $branch)"
    fi
}

do_wave1() {
    log_info "Wave 1: phase-2"
    ensure_development
    create_branch_from_development "phase-2"
    add_worktree "growth-wt-phase2" "phase-2"
}

do_wave2() {
    log_info "Wave 2: phase-3a, phase-3b, phase-3c"
    ensure_development
    for b in phase-3a phase-3b phase-3c; do
        create_branch_from_development "$b"
    done
    add_worktree "growth-wt-phase3a" "phase-3a"
    add_worktree "growth-wt-phase3b" "phase-3b"
    add_worktree "growth-wt-phase3c" "phase-3c"
}

do_wave3() {
    log_info "Wave 3: phase-3d, phase-4, phase-5"
    ensure_development
    for b in phase-3d phase-4 phase-5; do
        create_branch_from_development "$b"
    done
    add_worktree "growth-wt-phase3d" "phase-3d"
    add_worktree "growth-wt-phase4" "phase-4"
    add_worktree "growth-wt-phase5" "phase-5"
}

do_wave4() {
    log_info "Wave 4: phase-6, phase-7"
    ensure_development
    for b in phase-6 phase-7; do
        create_branch_from_development "$b"
    done
    add_worktree "growth-wt-phase6" "phase-6"
    add_worktree "growth-wt-phase7" "phase-7"
}

# ─── Parse arguments ──────────────────────────────────────────────────────────

WAVE=""

while [[ $# -gt 0 ]]; do
    case "$1" in
        --dry-run) DRY_RUN=true; shift ;;
        --help|-h) usage 0 ;;
        wave1|wave2|wave3|wave4)
            if [[ -n "$WAVE" ]]; then
                echo "Error: only one wave at a time"
                usage
            fi
            WAVE="$1"
            shift
            ;;
        *)
            echo "Error: unknown argument $1"
            usage
            ;;
    esac
done

if [[ -z "$WAVE" ]]; then
    echo "Error: specify wave (wave1, wave2, wave3, wave4)"
    usage
fi

# Must run from repo root so worktrees go to parent dir
cd "$REPO_ROOT"
if ! git rev-parse --is-inside-work-tree &>/dev/null; then
    echo "Error: not inside a git repository"
    exit 1
fi

# ─── Execute ──────────────────────────────────────────────────────────────────

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo " GrowthOS worktree setup: $WAVE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

case "$WAVE" in
    wave1) do_wave1 ;;
    wave2) do_wave2 ;;
    wave3) do_wave3 ;;
    wave4) do_wave4 ;;
    *) echo "Error: unknown wave $WAVE"; exit 1 ;;
esac

echo ""
log_success "Done. See docs/growthOS-worktree-cloud-deployment.md for merge order and agent prompts."
echo ""
