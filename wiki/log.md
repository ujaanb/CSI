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

## [2026-07-16] meta | Build revision-hub pages for cases 2–8
- Added seven full-notes HTML pages to `Outcomes/` from the newly provided PDFs (cases 2–8): Bill – Emergency, Amy Carter – Low Mood, Phillip Craven – Breathlessness, Anna Taylor – Abdominal Pain, Paul Bennett – Back Pain, Lucy Allen – Diarrhoea, Lucy Benjamin – Complications of Crohn's.
- Extracted a shared `Outcomes/style.css` (sticky topic nav, Q&A cards, tables, flow diagrams) used by all new case pages.
- Updated `Outcomes/index.html` to list all 8 cases and removed the "more cases coming" placeholder.
- Scope note: these are revision-hub HTML outputs only. The underlying wiki source/entity/concept ingest for cases 2–8 (per §5.1) is not yet done and remains pending.
- Decode confidence medium: PDF text extraction reordered phrases in all seven Notion exports; a fidelity caveat is included on each page.
- Files touched: `Outcomes/style.css`, `Outcomes/bill-emergency.html`, `Outcomes/amy-carter-low-mood.html`, `Outcomes/phillip-craven-breathlessness.html`, `Outcomes/anna-taylor-abdominal-pain.html`, `Outcomes/paul-bennett-back-pain.html`, `Outcomes/lucy-allen-diarrhoea.html`, `Outcomes/lucy-benjamin-crohns-complications.html`, `Outcomes/index.html`, `wiki/log.md`.
