# Sireesha Kandula QA Engineering Portfolio Constitution

## Core Principles

### I. Code Quality and Product Fit
Production code MUST follow `specs/techstack.md` and solve an approved portfolio need. Components MUST have clear responsibilities, accessible semantics, and behavior that can be understood and verified. Avoid unnecessary dependencies, duplicated logic, and abstractions without a concrete use case. This keeps a small static site easy to change safely.

### II. Behavior-Focused Testing
Changes MUST include tests proportionate to their risk. Cover reusable logic and component behavior with unit tests, user flows and interactions with integration tests, and critical recruiter/mobile journeys with end-to-end tests where practical. Bug fixes MUST include a regression check. When automation is impractical, document the manual verification performed; do not pursue an arbitrary coverage percentage.

### III. Automated Quality Gates
Pull requests MUST pass the available dependency installation, lint, test, production static-build, and build-validation checks before merge. Add automated accessibility or link checks when supported by the project tooling. A failed required check blocks merge; passing automation is evidence, not approval.

### IV. Human Review and Release
A human MUST review changes before merge and approve production release. Review MUST verify user-visible behavior, responsive and keyboard usability, and the accuracy and privacy of published content and assets. Automation MUST NOT independently approve professional claims, confidential-content decisions, or production deployment. Verify the live site after release and revert a faulty release through Git.

### V. Maintainability Through Simplicity
Keep content in version-controlled static data and UI in focused, reusable components. Prefer existing project patterns and browser capabilities over new dependencies. Update relevant tests and documentation with behavior changes. Design only for approved V1 needs; defer architecture for future features until they are approved.

## Technical and Product Constraints

- Use React, JavaScript, and Tailwind CSS, with build-time static output for GitHub Pages. Runtime SSR and a persistent backend are out of scope.
- V1 MUST NOT add authentication, a database or CMS, payments, or a backend contact form.
- Meet the responsive and WCAG 2.2 AA goals in `specs/techstack.md`; respect reduced-motion preferences.
- Follow `specs/mission.md`: publish only accurate, approved professional information. Never expose secrets, confidential employer or customer data, a public phone number, or personal location.
- Work samples and results MUST NOT be fabricated; publish case studies only when the artifacts are real and approved for public sharing.

## Development Workflow and Quality Gates

- Keep changes scoped to the approved requirement and validate them locally before opening a pull request.
- Pull requests MUST include relevant automated checks and a concise description of behavior and verification.
- Required CI checks MUST pass before a human reviewer approves merge. Production deployment MUST follow the approved merge to `main`.
- After deployment, verify critical navigation and resume/contact paths. If the release is faulty, revert the responsible change and redeploy.

## Governance

This constitution governs specifications, plans, tasks, implementation, and reviews. `specs/mission.md`, `specs/techstack.md`, and `specs/roadmap.md` provide supporting project context; conflicts with this constitution or between those references MUST be raised for human resolution, not silently ignored.

Amendments require human review and MUST update this document's version and amendment date. Use semantic versioning: MAJOR for incompatible governance changes, MINOR for new or materially expanded principles, and PATCH for clarifications that do not change obligations. Pull-request reviewers MUST check compliance with these principles; a justified exception requires explicit human approval and documentation in the change.

**Version**: 1.0.0 | **Ratified**: 2026-10-07 | **Last Amended**: 2026-10-07
