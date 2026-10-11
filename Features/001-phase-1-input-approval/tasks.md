# Tasks: Phase 1 Input Approval

**Input**: Design documents from `Features/001-phase-1-input-approval/`

**Prerequisites**: `spec.md`, `plan.md`, `research.md`, `data-model.md`, and `quickstart.md`

**Tests**: No software tests apply. Verification is a documented human review against the acceptance criteria in `spec.md`.

**Organization**: Tasks are grouped by the three independently reviewable user stories. All approval decisions remain with Sireesha Kandula as portfolio owner.

## Phase 1: Setup and Source Readiness

**Purpose**: Confirm prerequisites and prepare a review package without exposing private source material.

- [ ] T001 Confirm the portfolio owner can access authoritative sources for the current resume, contact endpoints, experience, About/skills/Work claims, and candidate assets. Keep source files in their authoritative private locations unless public storage is approved. **Blocked**: owner access is not confirmed and these source materials are not present in the workspace.
- [X] T002 Create `Features/001-phase-1-input-approval/approval-register.md` with the fields in `data-model.md`, a package ID/revision, and an initially unapproved status. Do not record approval before the reviews are complete.

**Checkpoint**: If authoritative sources are unavailable, record the missing inputs as blockers and do not proceed to approval.

## Phase 2: User Story 1 - Assemble a Verifiable Content Package (Priority: P1)

**Goal**: Inventory proposed public content and assets with sources and explicit requiredness.

**Independent Test**: Every proposed item has a category, proposed public-safe version, source reference, requiredness, and disposition; unsupported claims are held or rejected.

- [ ] T003 [US1] Add one register entry for every proposed resume detail, contact endpoint, experience claim, About/introduction statement, skill, Work item, and asset; record the source reference and intended public use.
- [ ] T004 [US1] Mark each entry `Required` or `Optional` and record the rationale for optional or absent items; do not treat an empty field as an approved disposition.
- [ ] T005 [US1] Verify factual claims and contact destinations against authoritative sources; use “Dhan AI” as the proposed employer wording, and hold any claim whose evidence is missing, conflicting, outdated, or unverifiable.

**Checkpoint**: The content inventory is complete enough for independent content and privacy review; no unsupported claim is marked approved.

## Phase 3: User Story 2 - Review Publication and Privacy Risk (Priority: P1)

**Goal**: Keep private, confidential, or unauthorized material out of the public portfolio.

**Independent Test**: Every proposed item has separate content and privacy outcomes with reviewer, date, and rationale/evidence; prohibited or unapproved material is held or rejected.

- [ ] T006 [US2] Record a separate content outcome for every proposed item (`Approved`, `Held`, or `Rejected`) with reviewer, date, and evidence/rationale.
- [ ] T007 [US2] Record a separate privacy outcome for every proposed item (`Approved`, `Held`, or `Rejected`), checking confidential employer/customer details, credentials, internal URLs, phone number, personal location, and asset publication permission.
- [ ] T008 [US2] Hold or reject items with unresolved source, permission, confidentiality, or privacy concerns; record the next action and keep private source material outside the repository.
- [ ] T009 [US2] Record explicit `Not applicable` or `Excluded` dispositions and rationale for optional absent or excluded items; required held or rejected items remain blockers until an approved replacement is reviewed.

**Checkpoint**: No item is treated as publishable unless both its content and privacy outcomes are approved.

## Phase 4: User Story 3 - Approve and Hand Off Phase 1 Inputs (Priority: P1)

**Goal**: Record the portfolio owner's gate decision for a specific package revision and hand off only approved material.

**Independent Test**: The approval record names Sireesha Kandula, package ID/revision, date, and separate content/privacy decisions; all required items are approved and optional absences are explicit.

- [ ] T010 [US3] Evaluate the package against the Phase 1 gate: all required items must have approved content and privacy outcomes, and every optional absent/excluded item must have an explicit disposition.
- [ ] T011 [US3] If the gate passes, record Sireesha Kandula's dated, explicit approval of content and privacy for the package revision in `approval-register.md`; otherwise record the package as blocked and list remaining blockers.
- [ ] T012 [US3] Prepare the Phase 2 handoff with only approved public versions and their source/approval references; exclude held, rejected, unreviewed, private, or confidential material.
- [ ] T013 [US3] If any approved item changes after review, create a new package revision and repeat the affected reviews and package-level approval before handoff.

**Checkpoint**: Do not mark Phase 1 complete based on CI results, a planning label, or an implicit decision.

## Phase 5: Final Review

**Purpose**: Verify the completed package respects the privacy guardrails and gate criteria.

- [ ] T014 Review `approval-register.md` against SC-001 through SC-005 in `spec.md`; verify every candidate has the required fields and every handed-off item has both approvals.
- [ ] T015 Confirm no held, rejected, unreviewed, or private source material is included in the Phase 2 handoff and no forbidden personal or confidential information is present.
- [ ] T016 Confirm the final status is `Approved` only when the owner's separate content and privacy approvals are recorded; otherwise retain `Blocked` and document outstanding items.

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)** must finish before review work. Missing authoritative inputs block the affected items; they do not justify guessing or skipping review.
- **User Story 1 (Phase 2)** establishes the candidate inventory and evidence needed by the privacy review.
- **User Story 2 (Phase 3)** requires the inventory from User Story 1 and must finish before the owner gate.
- **User Story 3 (Phase 4)** depends on resolved content/privacy decisions and is the only phase that records the final approval and handoff.
- **Final Review (Phase 5)** follows the approval decision and verifies the package and handoff.

### User Story Dependencies

- **User Story 1**: Begins after source readiness; no other story is a prerequisite.
- **User Story 2**: Depends on the candidate inventory from User Story 1.
- **User Story 3**: Depends on completed content and privacy outcomes from User Stories 1 and 2.

## Implementation Strategy

Complete the input package first, then perform separate content and privacy reviews, and finally record the owner gate and Phase 2 handoff. Work may stop at any checkpoint with a `Blocked` status when inputs or evidence are missing. No site code, CI configuration, automated approval, or release task is in scope.
