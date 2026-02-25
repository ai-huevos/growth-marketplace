#!/usr/bin/env bash
#
# kai-nlm-upload.sh — Upload all KAI Partners brand resources + outputs to NotebookLM
#
# Usage:
#   ./scripts/kai-nlm-upload.sh [--notebook ALIAS] [--dry-run] [--profile PROFILE]
#
# Default notebook: "kai-partners" (override with --notebook)
# Requires: nlm CLI authenticated (`nlm login`)
#
# What it uploads:
#   Section 1: Brand Config (brand-voice, acf-profile, creation-myth)
#   Section 2: Content Bank (blog, carousel, LinkedIn posts)
#   Section 3: Sequences (origen, pulsar, reengagement)
#   Section 4: Funnel Architecture + Quiz Funnel
#   Section 5: Offer Architecture (ESCALA value ladder)
#   Section 6: Case Studies (finkargo)
#   Section 7: VOC (prospect language bank)
#   Section 8: Website (landing page)
#   Section 9: Delivery (mapa energía, propuesta AIOS, sprint SOP)
#   Section 10: Integrations (Kit, n8n, Notion, Tally, Webflow)
#   Section 11: Launch (dashboard, validation gates)
#   Section 12: Sales Decks (G3 board deck)
#   Section 13: Rebrand Intelligence (competitive, ICP, positioning, product marketing)
#   Section 14: Second Brain (rebrand master doc)
#   Section 15: Client README
#

set -euo pipefail

# ─── Configuration ───────────────────────────────────────────────────────────

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
KAI_DIR="${REPO_ROOT}/clients/kai-partners"
DOCS_DIR="${REPO_ROOT}/docs"
SECOND_BRAIN_DIR="${REPO_ROOT}/docs/second-brain"

# ─── Colors ──────────────────────────────────────────────────────────────────

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m'

# ─── Defaults ────────────────────────────────────────────────────────────────

NLM_NOTEBOOK="kai-partners"
NLM_PROFILE=""
DRY_RUN=false
WAIT_FLAG="--wait"
RETRY_MAX=3
RETRY_DELAY=3

# ─── Counters ────────────────────────────────────────────────────────────────

TOTAL=0
SUCCESS=0
FAILED=0
SKIPPED=0

# ─── Parse Arguments ─────────────────────────────────────────────────────────

while [[ $# -gt 0 ]]; do
    case "$1" in
        --notebook)   NLM_NOTEBOOK="$2"; shift 2 ;;
        --profile)    NLM_PROFILE="--profile $2"; shift 2 ;;
        --dry-run)    DRY_RUN=true; shift ;;
        --no-wait)    WAIT_FLAG=""; shift ;;
        --help|-h)
            echo "Usage: $0 [--notebook ALIAS] [--profile NAME] [--dry-run] [--no-wait]"
            echo ""
            echo "Options:"
            echo "  --notebook ALIAS  NLM notebook alias (default: kai-partners)"
            echo "  --profile NAME    NLM auth profile to use"
            echo "  --dry-run         Show what would be uploaded without doing it"
            echo "  --no-wait         Don't wait for source processing"
            exit 0
            ;;
        *) echo "Unknown option: $1"; exit 1 ;;
    esac
done

# ─── Functions ───────────────────────────────────────────────────────────────

log_header()  { echo -e "\n${BOLD}${CYAN}═══ $* ═══${NC}"; }
log_info()    { echo -e "${BLUE}[INFO]${NC}  $*"; }
log_success() { echo -e "${GREEN}[OK]${NC}    $*"; }
log_warn()    { echo -e "${YELLOW}[WARN]${NC}  $*"; }
log_error()   { echo -e "${RED}[FAIL]${NC}  $*"; }
log_dry()     { echo -e "${YELLOW}[DRY]${NC}   $*"; }

upload_source() {
    local file_path="$1"
    local title="$2"

    TOTAL=$((TOTAL + 1))

    if [[ ! -f "$file_path" ]]; then
        log_warn "File not found: $file_path — skipping"
        SKIPPED=$((SKIPPED + 1))
        return
    fi

    if $DRY_RUN; then
        log_dry "Would upload: $title"
        log_dry "  File: $file_path"
        return
    fi

    local attempt=0
    while (( attempt < RETRY_MAX )); do
        attempt=$((attempt + 1))
        if nlm source add "$NLM_NOTEBOOK" $NLM_PROFILE --file "$file_path" --title "$title" $WAIT_FLAG 2>&1; then
            log_success "$title"
            SUCCESS=$((SUCCESS + 1))
            return
        else
            if (( attempt < RETRY_MAX )); then
                log_warn "Attempt $attempt failed for '$title' — retrying in ${RETRY_DELAY}s..."
                sleep "$RETRY_DELAY"
            fi
        fi
    done

    log_error "Failed after $RETRY_MAX attempts: $title"
    FAILED=$((FAILED + 1))
}

# ─── Pre-flight Check ───────────────────────────────────────────────────────

echo ""
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BOLD} KAI Partners → NotebookLM Upload${NC}"
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
log_info "Notebook:  $NLM_NOTEBOOK"
log_info "Dry run:   $DRY_RUN"
if [[ -n "$NLM_PROFILE" ]]; then
    log_info "Profile:   $NLM_PROFILE"
fi
echo ""

if ! $DRY_RUN; then
    if ! command -v nlm &>/dev/null; then
        log_error "nlm CLI not found. Install: pip install notebooklm-cli"
        exit 1
    fi

    # Check auth
    if ! nlm login --check $NLM_PROFILE 2>/dev/null; then
        log_error "Not authenticated. Run: nlm login"
        exit 1
    fi
    log_success "NLM authentication verified"
fi

# ═══════════════════════════════════════════════════════════════════════════════
# SECTION 1: Brand Config — The DNA
# ═══════════════════════════════════════════════════════════════════════════════

log_header "1/15 — Brand Config"

upload_source \
    "${KAI_DIR}/brand-config/brand-voice.md" \
    "KAI Brand Voice — Voz, Tono y Estilo"

upload_source \
    "${KAI_DIR}/brand-config/acf-profile.md" \
    "KAI ACF Profile — Perfil de Marca"

upload_source \
    "${KAI_DIR}/brand-config/creation-myth.md" \
    "KAI Creation Myth — Mito de Origen"

# ═══════════════════════════════════════════════════════════════════════════════
# SECTION 2: Content Bank
# ═══════════════════════════════════════════════════════════════════════════════

log_header "2/15 — Content Bank"

upload_source \
    "${KAI_DIR}/content-bank/blog-metafora-sol.md" \
    "KAI Blog — Metáfora del Sol"

upload_source \
    "${KAI_DIR}/content-bank/carousel-3-razones.md" \
    "KAI Carousel — 3 Razones"

upload_source \
    "${KAI_DIR}/content-bank/linkedin-posts-semana-1-2.md" \
    "KAI LinkedIn Posts — Semana 1-2"

# ═══════════════════════════════════════════════════════════════════════════════
# SECTION 3: Email Sequences
# ═══════════════════════════════════════════════════════════════════════════════

log_header "3/15 — Email Sequences"

upload_source \
    "${KAI_DIR}/sequences/secuencia-origen.md" \
    "KAI Secuencia — Origen (Welcome)"

upload_source \
    "${KAI_DIR}/sequences/secuencia-pulsar.md" \
    "KAI Secuencia — Pulsar (Nurture)"

upload_source \
    "${KAI_DIR}/sequences/secuencia-reengagement.md" \
    "KAI Secuencia — Re-Engagement"

# ═══════════════════════════════════════════════════════════════════════════════
# SECTION 4: Funnel Architecture + Quiz
# ═══════════════════════════════════════════════════════════════════════════════

log_header "4/15 — Funnel Architecture + Quiz"

upload_source \
    "${KAI_DIR}/funnel-architecture/funnel-blueprint.md" \
    "KAI Funnel Blueprint — Arquitectura Completa"

upload_source \
    "${KAI_DIR}/quiz-funnel/diagnostico-energia-ai.md" \
    "KAI Quiz — Diagnóstico Energía AI"

# ═══════════════════════════════════════════════════════════════════════════════
# SECTION 5: Offer Architecture
# ═══════════════════════════════════════════════════════════════════════════════

log_header "5/15 — Offer Architecture"

upload_source \
    "${KAI_DIR}/offer-architecture/escala-value-ladder.md" \
    "KAI ESCALA — Value Ladder"

# ═══════════════════════════════════════════════════════════════════════════════
# SECTION 6: Case Studies
# ═══════════════════════════════════════════════════════════════════════════════

log_header "6/15 — Case Studies"

upload_source \
    "${KAI_DIR}/case-studies/finkargo.md" \
    "KAI Case Study — Finkargo"

# ═══════════════════════════════════════════════════════════════════════════════
# SECTION 7: VOC (Voice of Customer)
# ═══════════════════════════════════════════════════════════════════════════════

log_header "7/15 — VOC (Voice of Customer)"

upload_source \
    "${KAI_DIR}/voc/prospect-language-bank.md" \
    "KAI VOC — Prospect Language Bank"

# ═══════════════════════════════════════════════════════════════════════════════
# SECTION 8: Website
# ═══════════════════════════════════════════════════════════════════════════════

log_header "8/15 — Website"

upload_source \
    "${KAI_DIR}/website/landing-page.md" \
    "KAI Landing Page — Copy + Estructura"

# ═══════════════════════════════════════════════════════════════════════════════
# SECTION 9: Delivery SOPs
# ═══════════════════════════════════════════════════════════════════════════════

log_header "9/15 — Delivery SOPs"

upload_source \
    "${KAI_DIR}/delivery/mapa-energia-template.md" \
    "KAI Delivery — Mapa de Energía Template"

upload_source \
    "${KAI_DIR}/delivery/propuesta-aios-build.md" \
    "KAI Delivery — Propuesta AIOS Build"

upload_source \
    "${KAI_DIR}/delivery/sprint-sop.md" \
    "KAI Delivery — Sprint SOP"

# ═══════════════════════════════════════════════════════════════════════════════
# SECTION 10: Integrations (Build Specs)
# ═══════════════════════════════════════════════════════════════════════════════

log_header "10/15 — Integrations"

upload_source \
    "${KAI_DIR}/integrations/kit-sequences-build-spec.md" \
    "KAI Integration — Kit Email Sequences Build Spec"

upload_source \
    "${KAI_DIR}/integrations/n8n-scoring-workflow.md" \
    "KAI Integration — n8n Lead Scoring Workflow"

upload_source \
    "${KAI_DIR}/integrations/notion-leads-database.md" \
    "KAI Integration — Notion Leads Database"

upload_source \
    "${KAI_DIR}/integrations/tally-quiz-build-spec.md" \
    "KAI Integration — Tally Quiz Build Spec"

upload_source \
    "${KAI_DIR}/integrations/webflow-landing-build-spec.md" \
    "KAI Integration — Webflow Landing Build Spec"

# ═══════════════════════════════════════════════════════════════════════════════
# SECTION 11: Launch
# ═══════════════════════════════════════════════════════════════════════════════

log_header "11/15 — Launch"

upload_source \
    "${KAI_DIR}/launch/launch-dashboard.md" \
    "KAI Launch Dashboard — Métricas y Gates"

upload_source \
    "${KAI_DIR}/launch/validation-gates.md" \
    "KAI Validation Gates — Pre-Launch QA"

# ═══════════════════════════════════════════════════════════════════════════════
# SECTION 12: Sales Decks
# ═══════════════════════════════════════════════════════════════════════════════

log_header "12/15 — Sales Decks"

upload_source \
    "${KAI_DIR}/sales-decks/g3-logistica-board-deck.md" \
    "KAI Sales Deck — G3 Logística Board Presentation"

# ═══════════════════════════════════════════════════════════════════════════════
# SECTION 13: Rebrand Intelligence
# ═══════════════════════════════════════════════════════════════════════════════

log_header "13/15 — Rebrand Intelligence"

upload_source \
    "${DOCS_DIR}/rebrand-intelligence-brief.md" \
    "KAI Rebrand — Intelligence Brief"

upload_source \
    "${DOCS_DIR}/rebrand-competitive-analysis.md" \
    "KAI Rebrand — Competitive Analysis"

upload_source \
    "${DOCS_DIR}/rebrand-icp-analysis.md" \
    "KAI Rebrand — ICP Analysis"

upload_source \
    "${DOCS_DIR}/rebrand-positioning.md" \
    "KAI Rebrand — Positioning Strategy"

upload_source \
    "${DOCS_DIR}/rebrand-product-marketing.md" \
    "KAI Rebrand — Product Marketing"

upload_source \
    "${DOCS_DIR}/panel-convergence-report.md" \
    "KAI Rebrand — Panel Convergence Report"

# ═══════════════════════════════════════════════════════════════════════════════
# SECTION 14: Second Brain (Rebrand Master Doc)
# ═══════════════════════════════════════════════════════════════════════════════

log_header "14/15 — Second Brain"

upload_source \
    "${SECOND_BRAIN_DIR}/27-rebrand-kai-partners.md" \
    "KAI Rebrand — Master Plan (Second Brain 27)"

# ═══════════════════════════════════════════════════════════════════════════════
# SECTION 15: Client README
# ═══════════════════════════════════════════════════════════════════════════════

log_header "15/15 — Client README"

upload_source \
    "${KAI_DIR}/README.md" \
    "KAI Partners — Client README (Index)"

# ═══════════════════════════════════════════════════════════════════════════════
# SUMMARY
# ═══════════════════════════════════════════════════════════════════════════════

echo ""
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BOLD} Upload Summary${NC}"
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "  Notebook:  ${CYAN}${NLM_NOTEBOOK}${NC}"
echo -e "  Total:     ${BOLD}${TOTAL}${NC} sources"

if $DRY_RUN; then
    echo -e "  Mode:      ${YELLOW}DRY RUN — no changes made${NC}"
else
    echo -e "  Success:   ${GREEN}${SUCCESS}${NC}"
    if (( FAILED > 0 )); then
        echo -e "  Failed:    ${RED}${FAILED}${NC}"
    fi
    if (( SKIPPED > 0 )); then
        echo -e "  Skipped:   ${YELLOW}${SKIPPED}${NC}"
    fi
fi

echo ""

if (( FAILED > 0 )); then
    log_warn "Some uploads failed. Re-run to retry, or check 'nlm source list $NLM_NOTEBOOK'"
    exit 1
fi

log_success "All KAI Partners brand resources uploaded to NotebookLM!"
echo ""
echo "Next steps:"
echo "  1. Open NotebookLM and select the '$NLM_NOTEBOOK' notebook"
echo "  2. Verify all ${TOTAL} sources appear"
echo "  3. Start a conversation: 'Dame un resumen de toda la marca KAI Partners'"
echo ""
