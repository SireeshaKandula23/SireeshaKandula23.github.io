# Research: Phase 1 Input Approval

**Feature**: `001-phase-1-input-approval`

## Decisions

### 1. Use version-controlled Markdown for the review package

**Decision**: Keep the inventory, review outcomes, and approval record as small Markdown documents in the repository's feature/documentation area when the actual Phase 1 inputs are assembled.

**Rationale**: Markdown is readable in code review, diffable, requires no application code or new dependency, and fits the repository's documentation-only scope. Use one inventory row per proposed public claim or asset so each can have its own source and review outcomes.

**Alternatives considered**:
- A spreadsheet or online document: may be convenient for tabular editing, but adds an external location and can separate decisions from the versioned public package.
- YAML/JSON: structured, but less comfortable for human review and unnecessary without a consumer or validation tool.
- A custom application or CMS: conflicts with Phase 1's limited scope and creates unnecessary data collection and maintenance.

### 2. Reference authoritative sources without copying sensitive originals

**Decision**: Record a source reference sufficient for the owner to find and verify the evidence. Keep original resumes, private contact details, confidential materials, and unapproved assets outside the public repository. Store only the proposed public-safe version needed for review.

**Rationale**: The repository is intended for a public portfolio. Committing source material before privacy and publication review could expose the very information this phase is meant to protect.

**Alternatives considered**:
- Commit all source documents for traceability: rejected because repository visibility could expose private or confidential data.
- Record claims without a source: rejected because accuracy would not be independently verifiable.

### 3. Keep content and privacy decisions separate

**Decision**: For each item, record separate `Approved`, `Held`, or `Rejected` outcomes for content and privacy. Record the reviewer, date, and rationale/evidence for each decision.

**Rationale**: A fact can be accurate but not safe or permitted to publish. One combined status would hide that distinction and could let an accurate but confidential claim pass the gate.

**Alternatives considered**:
- One combined approval status: rejected because it does not show which review is incomplete or failed.
- Automated classification: rejected as a substitute for the constitution's required human review.

### 4. Treat optional absence as an explicit disposition

**Decision**: Mark every candidate as required or optional. An optional absent/excluded item needs a recorded `Not applicable` or `Excluded` disposition and rationale. Missing status is never approval. A required unresolved item blocks completion.

**Rationale**: The roadmap lists broad input classes, while the mission permits a Work foundation without invented projects. Explicit per-item requiredness allows an honest absence without silently weakening the gate.

### 5. Make the package approval explicit and version-bound

**Decision**: Record the package identifier/revision, Sireesha Kandula as portfolio owner, the date, and explicit separate content and privacy approval. Any material change after sign-off supersedes the prior approval for the changed package and requires review again.

**Rationale**: The Phase 1 gate is a human decision, not a property of passing CI or a planning label. Binding approval to the reviewed package makes the handoff auditable.

**Alternatives considered**:
- Treat PRD status or CI success as approval: rejected by the roadmap and constitution.
- Leave approval implicit in a commit: rejected because authorship/merge does not record separate content and privacy decisions.

### 6. Do not add application or CI behavior

**Decision**: Keep this phase to a documented human workflow and records. Do not build a web form, API, backend, automated approval check, or CI gate.

**Rationale**: FR-016 excludes site implementation and automation. The repository currently has no application source tree, and the roadmap places CI and site work in later phases.

## Resolved Assumptions

- Use “Dhan AI” as proposed employer wording per the user's decision; still verify the factual claim against an authoritative source.
- Sireesha Kandula is the portfolio owner and approver per the user's decision.
- Exact resume version, contact endpoints, experience claims, and assets remain inputs to the human review, not assumptions that they are already approved.
- Analytics remains outside this gate by default.
- No machine-readable contract is needed because no API or automated consumer is in scope.
