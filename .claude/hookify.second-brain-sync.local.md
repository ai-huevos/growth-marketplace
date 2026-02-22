---
name: second-brain-sync-reminder
enabled: true
event: file
conditions:
  - field: file_path
    operator: regex_match
    pattern: docs/second-brain/.*\.md$
action: warn
---

**Second Brain sync triggered.** The native hook is syncing this file to NotebookLM and running consistency validation automatically.

After the sync completes, check `docs/second-brain-backlog.md` for any new validation issues. If new issues were appended:

1. Read the latest entries in `docs/second-brain-backlog.md`
2. For each open issue (`- [ ]`), decide if it needs immediate action or can wait
3. If fixing now: resolve the issue, then mark it `- [x]` in the backlog
4. If deferring: leave it open — it becomes a work item for the next session

**Do not ignore backlog items.** Each represents a real inconsistency in the second-brain knowledge base.
