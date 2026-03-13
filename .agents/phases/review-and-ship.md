# Phase: REVIEW (Human-in-the-Loop)
**Objective:** Present the validated drafts and the `test_report.md` to the user via the `notify_user` UI for explicit approval. Implements the "Propose-then-Commit" architecture.

---

# Phase: SHIP (Distribution & Deployment)
**Objective:** Execute the final approved drafts to their respective channels or CMS via MCP tools.
**Execution Logic:**
- If WordPress/Contentful MCP is active: Push blog posts as `draft` status.
- If Mailchimp/Hubspot MCP is active: Create new email campaigns.
- Otherwise, package all assets into a neatly organized `.zip` file or a final `approved_deliverables/` folder for manual human upload.
