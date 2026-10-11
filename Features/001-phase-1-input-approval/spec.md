# Feature Specification: Phase 1 - Confirm Portfolio Inputs and Privacy Approval

**Feature Branch**: `001-phase-1-input-approval`

**Created**: 2026-10-10

**Status**: Draft

**Input**: User description: "Take phase1 from roadmap.sh and write spec for it."

## User Scenarios & Testing

### User Story 1 - Assemble a verifiable content package (Priority: P1)

As the portfolio owner, I want each proposed resume detail, contact link, experience claim, and asset traced to a source so that only accurate, supportable material is considered for publication.

**Why this priority**: The portfolio must not publish unsupported professional claims or invented work. A review cannot be meaningful without knowing what each candidate item says and where it came from.

**Independent Test**: Inspect the Phase 1 input inventory and confirm each candidate item has a category, proposed public content or asset, source, requiredness, and current disposition. No site implementation is needed to perform this test.

**Acceptance Scenarios**:

1. **Given** a resume, contact endpoint, experience claim, or asset is proposed, **When** it is added to the inventory, **Then** its source and intended public use are recorded.
2. **Given** a factual claim cannot be supported by an authoritative source, **When** the claim is reviewed, **Then** it is held or rejected and is not included in the approved package.
3. **Given** the employer name is included in a proposed claim, **When** the claim is reviewed, **Then** the proposed public wording is “Dhan AI” and its factual accuracy is still checked against an authoritative source.

### User Story 2 - Review publication and privacy risk (Priority: P1)

As the portfolio owner, I want to review each proposed item for confidentiality, privacy, and permission to publish so that private, confidential, or unapproved material is excluded.

**Why this priority**: Phase 1 is not complete unless both content and privacy are approved by a human. This review prevents confidential employer or customer information and personal information from entering the public portfolio.

**Independent Test**: Review every candidate item against the privacy guardrails and verify it has a separate recorded privacy outcome and rationale.

**Acceptance Scenarios**:

1. **Given** an item contains credentials, internal URLs, confidential employer or customer information, a phone number, personal location, or unapproved asset, **When** it is reviewed, **Then** it is excluded or held until the information is removed and the safe version is reviewed.
2. **Given** an asset's ownership or permission to publish is unclear, **When** it is reviewed, **Then** its privacy outcome is held or rejected and it is not handed off for publication.
3. **Given** an item passes content review, **When** its privacy review is still pending, **Then** it is not considered approved for publication.

### User Story 3 - Approve and hand off Phase 1 inputs (Priority: P1)

As the portfolio owner, I want to record an explicit decision on the complete input package so that Phase 2 can use only content approved for accuracy and privacy.

**Why this priority**: The roadmap makes human approval of content and privacy the exit gate for Phase 1. The handoff must make that approval auditable and prevent unresolved material from advancing.

**Independent Test**: Inspect the final approval record and verify it identifies the reviewed package, Sireesha Kandula as portfolio owner, approval date, separate content and privacy decisions, and that every required item is resolved.

**Acceptance Scenarios**:

1. **Given** all required items have approved content and privacy outcomes and optional items have explicit dispositions, **When** Sireesha Kandula records approval for both content and privacy, **Then** the package is eligible for handoff to Phase 2.
2. **Given** a required item is held, unreviewed, or rejected without an approved replacement, **When** Phase 1 completion is evaluated, **Then** the gate remains blocked.
3. **Given** an optional item is absent or intentionally excluded, **When** the portfolio owner records it as not applicable or excluded with a rationale, **Then** it does not block the gate unless it is required for another approved V1 outcome.
4. **Given** automated checks pass or a planning document says “Ready for Build,” **When** approval is evaluated, **Then** neither is accepted as a substitute for the portfolio owner's explicit content and privacy approval.
5. **Given** Phase 1 is approved, **When** inputs are handed to Phase 2, **Then** only the approved versions are included and held, rejected, or unreviewed items are not included.

## Edge Cases

- A source is missing, outdated, or conflicts with another source: hold the affected claim until the owner resolves the conflict using an authoritative source.
- A candidate asset has unclear ownership, licensing, consent, or employer/customer confidentiality: exclude or hold it; do not infer permission from repository presence.
- A contact link is stale, private, or not controlled by the portfolio owner: do not approve it until its destination and intended public use are verified.
- A claim contains both supportable and unsupported details: split or revise it, then review the public version as a new candidate.
- An approved item changes after sign-off: invalidate its prior approval and repeat the relevant content and privacy reviews before handoff.
- A required category has no safe, verifiable input: Phase 1 remains blocked until an approved alternative is supplied or the owner explicitly revises the requirement.
- An optional category has no candidate: record an explicit not-applicable disposition and rationale rather than treating silence as approval.

## Requirements

### Functional Requirements

- **FR-001**: Phase 1 MUST cover the roadmap input categories: resume, contact links, public-safe experience, and assets.
- **FR-002**: Phase 1 MUST also review other V1 public claims and content identified by the mission, including the professional introduction/About content, skills, and Work content; it MUST NOT invent projects, metrics, or outcomes.
- **FR-003**: The input inventory MUST identify each candidate item, its category, proposed public version, source, requiredness, and disposition.
- **FR-004**: Every factual professional claim MUST have an authoritative source or be held or rejected. The inventory MUST retain enough source information for a human reviewer to verify the claim.
- **FR-005**: Each candidate item MUST receive separate content and privacy decisions. Each decision MUST record its outcome, reviewer, date, and rationale or evidence.
- **FR-006**: Content outcomes MUST distinguish at least approved, held, and rejected. Privacy outcomes MUST distinguish at least approved, held, and rejected. An item MUST NOT be approved for publication unless both outcomes are approved.
- **FR-007**: Each candidate item MUST be identified as required or optional. A missing or excluded optional item MUST have an explicit not-applicable or excluded disposition and rationale; absence MUST NOT count as implicit approval.
- **FR-008**: A rejected candidate MUST NOT be included in the Phase 2 handoff. A required item that is held, unreviewed, or rejected without an approved replacement MUST block Phase 1 completion.
- **FR-009**: The review MUST exclude or hold inaccurate or unverifiable claims, fabricated projects or outcomes, credentials, internal URLs, confidential employer or customer information, and assets without approval to publish.
- **FR-010**: The review MUST exclude the portfolio owner's phone number, personal location, family details, and hobby details from V1 public content, consistent with the mission guardrails.
- **FR-011**: Proposed employer wording MUST use “Dhan AI.” Its factual accuracy and the specific claim in which it appears MUST still be source-verified before approval.
- **FR-012**: The Phase 1 approval record MUST name Sireesha Kandula as portfolio owner and record the reviewed package/version, approval date, and explicit separate approval for content and privacy.
- **FR-013**: Phase 1 MUST remain incomplete until the portfolio owner has approved both content and privacy and all required items have approved outcomes.
- **FR-014**: The Phase 2 handoff MUST contain only the approved public versions and their supporting approval record. Automation results and “Ready for Build” labels MUST NOT substitute for human approval.
- **FR-015**: Analytics MUST remain outside the Phase 1 input gate unless it is explicitly proposed as a public-facing input and reviewed under these requirements.
- **FR-016**: This feature MUST define an approval and handoff process only; it MUST NOT require building the portfolio site, implementing CI, or releasing the site.

### Key Entities

- **Candidate Input**: A proposed public content item or asset, with category, proposed version, source, requiredness, and disposition.
- **Review Decision**: A content or privacy assessment for a candidate input, with outcome, reviewer, date, rationale, and supporting evidence.
- **Approval Package**: The versioned set of candidate inputs and review decisions presented to the portfolio owner for the Phase 1 gate.
- **Phase 1 Approval Record**: The portfolio owner's explicit content and privacy approval, associated with the reviewed package and date, or a record that the gate remains blocked.

## Success Criteria

### Measurable Outcomes

- **SC-001**: 100% of candidate inputs in the Phase 1 package have a category, source, requiredness, and explicit disposition.
- **SC-002**: 100% of proposed public claims and assets have separate recorded content and privacy outcomes before approval.
- **SC-003**: 100% of items included in the Phase 2 handoff have approved content and privacy outcomes and supporting evidence.
- **SC-004**: Phase 1 is marked complete only when Sireesha Kandula's dated approval of both content and privacy is recorded and no required item is held, unreviewed, or rejected without an approved replacement.
- **SC-005**: 0 held, rejected, unreviewed, or unapproved items are included in the Phase 2 handoff.

## Assumptions

- Sireesha Kandula is the portfolio owner and the human approver for the Phase 1 gate, as confirmed by the user.
- “Dhan AI” is the intended employer wording, as confirmed by the user; the supporting public claim still requires source verification.
- The exact resume version, contact endpoints, experience claims, and publishable assets will be supplied or confirmed during Phase 1; this specification does not assert that they are already approved.
- The PRD's “Ready for Build” status is not evidence that Phase 1 content or privacy approval has occurred.
- A referenced PRD DOCX that is not available in the workspace is not required if equivalent authoritative sources are supplied; no claim may rely on an unavailable source.
- Optional analytics is not part of this phase by default.
- This specification is a draft of the approval requirements and does not itself approve any content or asset.
