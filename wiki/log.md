# Wiki Log

Append-only timeline of wiki operations. Newest entries at the bottom.

Entry header format (mandatory, parseable by `grep "^## \[" wiki/log.md`):
`## [YYYY-MM-DD] <operation> | <short title>`

Allowed operations:
- `ingest` — a raw source was processed into wiki content.
- `query` — an answer was generated from wiki pages.
- `lint` — a health-check pass over wiki structure/content.
- `meta` — schema/index/log/structure maintenance.

---

## [2026-07-15] meta | Instantiate template for Phase 1B CSI
- Bound the wiki domain to the Phase 1B CSI medicine course at Imperial College London.
- Defined the study goal, scope boundary, primary tag, and medicine-specific entity and concept categories.
- Rewrote the project README and synchronized the domain shown in the wiki index.
- Established the documented `docs/`, `raw/`, and `wiki/` structure.
- Files touched: `AGENTS.md`, `README.md`, `wiki/index.md`, `wiki/log.md`.

## [2026-07-15] ingest | Mina Shahnawaz – Tiredness (CSI case)
- Ingested `raw/pdfs/1. Mina Shahnawaz - Tiredness.pdf` (Notion export) as the first source.
- Created source page `wiki/sources/mina-shahnawaz-tiredness.md`.
- Created 5 concept pages: `tiredness-vs-fatigue`, `fatigue-differential-diagnosis`, `hpt-axis`, `immune-tolerance`, `affinity-maturation`.
- Created 6 entity pages: `hypothyroidism`, `hashimotos-disease`, `thyroid-peroxidase`, `regulatory-t-cells`, `lithium`, `amiodarone`.
- Created `wiki/overview.md` synthesis page and updated `wiki/index.md`.
- Decode confidence medium: PDF text extraction garbled some sentences (Hashimoto's immune sequence, AIRE/T cell selection); flagged for verification in affected pages' Open questions.
- Files touched: `wiki/sources/mina-shahnawaz-tiredness.md`, `wiki/concepts/*` (5), `wiki/entities/*` (6), `wiki/overview.md`, `wiki/index.md`, `wiki/log.md`.

## [2026-07-15] meta | Move HTML outputs into Outcomes/
- Created `Outcomes/` for all CSI HTML revision/site pages.
- Moved the revision hub and tiredness full-notes page into `Outcomes/`; left a root `index.html` redirect for GitHub Pages.
- Updated relative links and the README structure note.
- Files touched: `Outcomes/index.html`, `Outcomes/tiredness-key-concepts.html`, `index.html`, `README.md`, `wiki/log.md`.
