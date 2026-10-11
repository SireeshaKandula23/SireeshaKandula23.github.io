# Quickstart: Phase 1 Input Approval

This guide describes the human workflow for assembling and reviewing the Phase 1 package. It does not approve any current content or replace the portfolio owner's review.

## 1. Start a package

- Assign a package ID and revision.
- Create an inventory with one row per proposed public claim, contact endpoint, resume item, or asset.
- Include About/introduction, skills, and Work content so all V1 public claims are covered.
- Mark each row `Required` or `Optional` and record its source reference.
- Keep original resumes, private contact information, confidential materials, and unapproved assets outside the public repository. Do not paste sensitive source content into the inventory.

## 2. Verify content

For each proposed item:

- Check the exact proposed public version against an authoritative source.
- Verify contact destinations and asset ownership/permission.
- Use “Dhan AI” for proposed employer wording and verify the associated claim.
- Hold or reject unsupported, conflicting, outdated, or fabricated claims. Do not invent projects, metrics, or outcomes.
- Record a content decision, reviewer, date, and evidence/rationale.

## 3. Review privacy and permission

For each proposed item, separately check for confidential employer/customer information, credentials, internal URLs, phone number, personal location, family/hobby details, and assets without publication approval.

- Record a separate privacy decision, reviewer, date, and evidence/rationale.
- If information must be removed or permission/source confirmation is needed, mark the item `Held` and record the next action.
- Do not treat a content approval as privacy approval.

## 4. Resolve every item

- Approve only items with both content and privacy outcomes `Approved`.
- Keep required held, unreviewed, or rejected items out of the handoff and keep the package blocked.
- Mark optional absent/excluded items explicitly as `Not applicable` or `Excluded`, with rationale.
- If an approved public version changes, update the package revision and repeat the applicable reviews.

## 5. Record the gate decision

Sireesha Kandula reviews the complete package and records:

- Package ID and revision.
- Approval date and approver identity.
- Explicit content approval.
- Explicit privacy approval.
- Any remaining exclusions or rationale.

The package is Phase 1 complete only when both approvals are recorded, every required item is approved in both reviews, and every optional absence/exclusion is explicit. CI status and “Ready for Build” labels are not approval evidence.

## 6. Hand off to Phase 2

Provide only approved public versions and the associated approval record. Exclude held, rejected, unreviewed, or private source material. If the gate is blocked, hand off the open items as blockers rather than marking Phase 1 complete.
