# Implementation Plan: Phase 2 Portfolio Build

**Branch**: `002-phase-2-portfolio-build` | **Date**: 2026-10-11 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `Features/002-phase-2-portfolio-build/spec.md`

## Summary

Deliver the V1 public portfolio surface — Home, About, Experience, Skills, Work, Resume, and Contact — as a responsive React application styled with Tailwind CSS and emitted as a static build for GitHub Pages. Content is sourced from version-controlled static data populated only from the approved Phase 1 handoff. Publication of real professional claims, contact endpoints, and the resume asset is gated on Phase 1 approval, which is currently **Blocked**.

## Technical Context

**Language/Version**: JavaScript (ES2022), React 18

**Primary Dependencies**: React, React DOM, Vite (static build), Tailwind CSS. Icon assets via optimized SVG or a single lightweight icon package. No backend or data-layer dependencies.

**Storage**: Version-controlled static content modules in the repository. No database, CMS, or runtime content API.

**Testing**: Component and behavior tests with a React testing library and the Vite-native test runner; a focused end-to-end check of the recruiter journey and keyboard traversal. Accessibility assertions via an automated a11y checker where practical.

**Target Platform**: Static site on GitHub Pages over HTTPS. Current Chrome, Edge, Firefox, and Safari on desktop, tablet, and mobile.

**Project Type**: Single static frontend web application; no backend tier.

**Performance Goals**: Fast first render for a content site — minimal JavaScript, minimal font and image requests, no render-blocking third-party scripts.

**Constraints**: No runtime SSR, persistent server, authentication, database, payments, or backend contact form. Must honor `prefers-reduced-motion`. Must meet WCAG 2.2 AA goals. Asset and link paths must resolve under the configured GitHub Pages base path. Must publish no phone number, personal location, confidential information, or fabricated results.

**Scale/Scope**: One single-visitor-facing static site with seven V1 destinations and a small fixed content set; no multi-user or scaling concerns.

## Constitution Check

*GATE: Must pass before implementation. Re-check after design changes.*

| Principle | Assessment |
|---|---|
| I. Code Quality and Product Fit | **Conditional pass.** The planned scope maps directly to approved PRD/TRD V1 needs. Must follow `specs/techstack.md`, which mandates Tailwind CSS — see violation CT-001. |
| II. Behavior-Focused Testing | **Fails for the current prototype.** No tests exist in the repository. The plan adds component tests for navigation and content rendering plus an end-to-end recruiter and keyboard journey. Tracked as CT-002. |
| III. Automated Quality Gates | **Deferred, not waived.** CI wiring is roadmap Phase 3, but this feature must leave install, lint, test, and production build runnable locally so Phase 3 can enforce them. |
| IV. Human Review and Release | **Pass as planned.** No release occurs in this feature. Content publication remains gated on the Phase 1 owner approval; automation must not infer approval. |
| V. Maintainability Through Simplicity | **Pass as of 2026-10-11.** Content stays as static version-controlled data in focused components, and styling now uses Tailwind utilities with tokens in `tailwind.config.js` rather than a bespoke stylesheet. |

**Gate result**: Implementation of *real published content* is **blocked** until `Features/001-phase-1-input-approval/approval-register.md` records owner content and privacy approval and a Phase 2 handoff. Structural and styling work may proceed against placeholder content.

## Design and Delivery

1. Establish Tailwind CSS as the styling system, with design tokens (color, type scale, spacing, radius, elevation) expressed in Tailwind configuration rather than bespoke stylesheets, so utilities stay consistent and mobile-first.
2. Model content as static data modules — profile, roles, capabilities, work items, contact endpoints, resume asset — so every published string has one source and can be traced to an approved register entry.
3. Build the seven V1 destinations as focused, accessible components sharing a single page shell with persistent navigation, a current-destination indicator, landmark structure, and a skip link.
4. Implement responsive layout mobile-first, verifying 320px through 1920px with no horizontal scrolling, and ensure decorative overflow clipping never disables sticky positioning.
5. Add tests proportionate to risk: navigation and current-destination behavior, content rendering driven by data, omission of unapproved items, and an end-to-end recruiter and keyboard-traversal journey.
6. Configure the static build for the GitHub Pages base path and verify the built output serves and navigates correctly from that path.
7. Keep the Resume download and Contact endpoints unpublished until their Phase 1 entries are approved and verified; never construct or guess a URL, handle, or profile slug.

### Research and Design Outputs

- Content data shape and the mapping from each published field to its Phase 1 register ID.
- Tailwind token configuration derived from the approved visual direction.
- Accessibility verification approach for keyboard, landmark, contrast, and reduced-motion requirements.
- No API contract is required; this feature has no server interface.

## Project Structure

### Documentation (this feature)

```text
Features/002-phase-2-portfolio-build/
├── spec.md
├── plan.md
└── tasks.md
```

### Source Code (repository root)

```text
index.html                 # Static entry document and SEO metadata
vite.config.js             # Static build and GitHub Pages base path
tailwind.config.js         # Design tokens and content globs (to be added)
postcss.config.js          # Tailwind pipeline (to be added)
public/                    # Static assets, including the approved resume PDF (to be added)
src/
├── main.jsx               # Application entry and page shell
├── content/               # Version-controlled static content modules (to be added)
├── components/            # Focused, reusable UI components (to be added)
└── styles.css             # Tailwind directives and minimal global base
tests/                     # Component and end-to-end tests (to be added)
```

**Structure Decision**: Keep the existing single static frontend at the repository root rather than introducing a nested app directory, matching the TRD's frontend-only architecture. Content moves out of components into `src/content/` so published claims are traceable to approved register entries, and styling moves from a bespoke stylesheet to Tailwind utilities with tokens in `tailwind.config.js`.

## Complexity Tracking

> Constitution violations that must be resolved or explicitly waived by the portfolio owner.

| ID | Violation | Why It Exists | Resolution / Why A Simpler Path Was Rejected |
|---|---|---|---|
| CT-001 | Existing prototype styled the UI with ~15KB of hand-authored CSS in `src/styles.css` instead of Tailwind CSS, contradicting the constitution's Technical Constraints and `specs/techstack.md`. | The prototype was built ahead of this specification, optimizing for a fast visual result rather than stack compliance. No exception was requested or recorded. | **Resolved 2026-10-11.** Migrated to Tailwind CSS 3.4: tokens now live in `tailwind.config.js`, markup uses mobile-first utilities, and `styles.css` is reduced to the font import, `@tailwind` directives, theme variables, and reduced-motion handling. Visual parity, theme switching, scroll-spy, and responsive behavior verified at 390px and 1280px. |
| CT-002 | No automated tests exist, contradicting Principle II. | Tests were never introduced alongside the prototype. | **Open.** Add component and end-to-end tests as part of this feature (T005, T013, T018, T021, T024, T028, T029). Manual-only verification was rejected because the constitution requires tests proportionate to risk. |
| CT-003 | The prototype publishes professional claims, an email address, and GitHub and LinkedIn URLs while the Phase 1 package is **Blocked**. | Content was taken directly from a chat message and published without routing it through the approval register. | **Partially resolved 2026-10-11.** All three contact endpoints are now owner-supplied, verified, and approved in the register. Experience, skills, About, and Work wording remain unapproved, and the resume PDF is held on privacy grounds, so the site still must not be deployed. |
| CT-004 | The resume PDF at `public/assets/Sireesha Kandula - Resume.pdf` prints a phone number and a personal location, both of which `specs/mission.md` and the constitution prohibit publishing. | The owner supplied their standard resume, which carries full contact details appropriate for private applications but not for a public download. | **Waived 2026-10-11 by explicit owner decision.** The owner was shown the specific exposed values and the irreversibility of public publication, and chose to publish the PDF unmodified. The waiver is recorded in `Features/001-phase-1-input-approval/approval-register.md`. Scope is limited to the PDF asset; the site pages still publish no phone number or location. |

**Status**: CT-001 is resolved and CT-004 is waived by the owner. CT-002 (no tests) and CT-003 (unapproved experience, skills, About, and Work wording) remain open, and CT-003 still blocks public release.
