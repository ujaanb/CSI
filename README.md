# Phase 1B CSI Study Wiki

A personal study wiki for the Phase 1B CSI medicine course at Imperial College London. It integrates lectures, learning objectives, notes, and supporting sources into a cited, interconnected knowledge base for revision and assessment preparation.

## How to use it

1. Add one source at a time to the appropriate folder under `raw/`.
2. Ask the agent to ingest that source.
3. Review the takeaways before the agent writes or updates wiki pages.
4. Ask questions against the wiki; useful answers can be saved under `wiki/analyses/`.
5. Request a wiki health check periodically to identify gaps, stale claims, and broken links.

## Structure

```text
.
├── AGENTS.md           # operating schema and maintenance rules
├── README.md           # project introduction
├── Outcomes/           # HTML revision pages for the live site
├── docs/
│   └── LLM-WIKI.md     # reference description of the wiki pattern
├── raw/                # immutable source documents
└── wiki/               # LLM-maintained knowledge pages
    ├── index.md        # canonical page catalog
    └── log.md          # append-only operation history
```

The domain and maintenance contract are defined in [`AGENTS.md`](./AGENTS.md). Start navigation from [`wiki/index.md`](./wiki/index.md). Browse the revision site pages under [`Outcomes/`](./Outcomes/).
