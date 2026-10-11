# Data Model: Phase 1 Input Approval

## Candidate Input

One proposed public-facing claim, link, resume item, or asset.

| Field | Required | Description |
|---|---|---|
| `input_id` | Yes | Stable identifier within the package, such as `EXP-001` or `ASSET-001`. |
| `category` | Yes | Resume, contact, experience, About, skill, Work, or asset. |
| `proposed_public_version` | Yes | Exact text, destination URL, or asset name intended for publication; do not paste private source material. |
| `source_reference` | Yes for factual claims/assets | Authoritative location or reference the owner can use to verify the claim or permission. |
| `requiredness` | Yes | `Required` or `Optional`, with rationale when needed. |
| `disposition` | Yes | `Proposed`, `Not applicable`, or `Excluded`; non-proposed dispositions require rationale. |
| `content_review` | Yes | Review decision for accuracy and supportability. |
| `privacy_review` | Yes | Separate decision for confidentiality, personal data, and permission to publish. |
| `next_action` | When held/rejected | What must be verified, revised, replaced, or removed before reconsideration. |

### Review Decision

A content or privacy review associated with one candidate input.

| Field | Required | Description |
|---|---|---|
| `decision_type` | Yes | `Content` or `Privacy`. |
| `outcome` | Yes | `Approved`, `Held`, or `Rejected`. |
| `reviewer` | Yes | Human who made this decision. The package approver is Sireesha Kandula. |
| `review_date` | Yes | Date the decision was made. |
| `rationale_or_evidence` | Yes | Brief reason and source/evidence reference supporting the decision. |

### Approval Package

A versioned collection of candidate inputs and their review decisions submitted at the Phase 1 gate.

| Field | Required | Description |
|---|---|---|
| `package_id` | Yes | Stable package identifier. |
| `package_revision` | Yes | Revision identifying the exact content reviewed; update after material changes. |
| `package_status` | Yes | Derived status: `Draft`, `In Review`, `Blocked`, `Approved`, or `Superseded`. |
| `items` | Yes | Candidate inputs and associated review decisions. |
| `owner_approval` | At gate | Separate content and privacy decisions by Sireesha Kandula, with approval date. |

### Phase 1 Approval Record

The decision for a specific package revision.

| Field | Required | Description |
|---|---|---|
| `package_id` and `package_revision` | Yes | Bind the approval to the reviewed package. |
| `approver` | Yes | Sireesha Kandula, portfolio owner. |
| `approval_date` | When approved | Date of explicit approval. |
| `content_approval` | Yes | Explicit owner approval or not approved. |
| `privacy_approval` | Yes | Explicit owner approval or not approved. |
| `handoff_reference` | When approved | Location of the approved public versions handed to Phase 2. |

## State and Gate Rules

- A candidate input is publishable only when both its content and privacy outcomes are `Approved`.
- An optional candidate that is absent or excluded must have an explicit disposition and rationale; it does not need review as a proposed public item.
- A required candidate without both approved outcomes blocks package approval.
- `Blocked` applies while a required item is held, rejected without an approved replacement, or not reviewed.
- `Approved` applies only when required items are approved, optional items have explicit dispositions, and the owner has recorded separate content and privacy approval for that package revision.
- A material edit after approval creates a new package revision; the previous approval does not automatically cover the changed item or revision. Re-review affected items and record a new package-level approval before handoff.
- `Superseded` marks a previously reviewed package revision replaced by a later revision.
- The Phase 2 handoff contains approved public versions only. Exclude held, rejected, unreviewed, or private source material.
