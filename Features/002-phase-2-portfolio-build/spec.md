# Feature Specification: Phase 2 Portfolio Build

**Feature Branch**: `002-phase-2-portfolio-build`

**Created**: 2026-10-11

**Status**: Draft

**Input**: Roadmap Phase 2 — "Build portfolio: Responsive React + JavaScript + Tailwind site with static output for GitHub Pages." Gate: "Required pages and navigation are implemented."

## Context and Gate Dependency

This feature implements the public portfolio surface described in `Sireesha_Kandula_Portfolio_PRD_v1.0.md` and `Sireesha_Kandula_Portfolio_TRD_v1.0.md`, governed by `.specify/memory/constitution.md`, `specs/mission.md`, and `specs/techstack.md`.

Phase 2 depends on the Phase 1 gate in `Features/001-phase-1-input-approval/`. At the time of writing, that package is **Blocked**: no content or privacy approval is recorded, and the handoff section states that no item is approved for publication. Build and layout work may proceed against placeholder content, but **no unapproved claim, contact endpoint, resume file, or asset may be published**.

A working UI prototype exists in the repository (`index.html`, `src/`, `vite.config.js`). It was produced ahead of this specification and is treated as a **design reference, not Phase 2 output**. It does not yet satisfy the Tailwind, testing, or content-approval requirements below. See `plan.md` → Complexity Tracking.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Recruiter evaluates fit quickly (Priority: P1)

A recruiter or engineering leader opens the site and, without scrolling extensively or hunting through menus, understands who Sireesha is, the roles she targets, and her core quality engineering strengths.

**Why this priority**: This is the portfolio's primary purpose in `specs/mission.md`. Without it the site delivers no value, and every other journey depends on the visitor staying past the first screen.

**Independent Test**: Load the home view on desktop and mobile and confirm the professional identity, role focus, and primary navigation are present and reachable without JavaScript errors.

**Acceptance Scenarios**:

1. **Given** a visitor arrives at the site root, **When** the page finishes loading, **Then** a professional introduction and the primary navigation are visible without scrolling on a 1280x800 desktop viewport.
2. **Given** a visitor is on a 390px-wide mobile viewport, **When** the page loads, **Then** content is readable with no horizontal scrolling and navigation is reachable through a mobile control.
3. **Given** the Phase 1 package is not approved, **When** the site is built, **Then** no unapproved claim or contact endpoint is published.

---

### User Story 2 - Reviewer scans experience and capabilities (Priority: P1)

A reviewer reads the professional experience and skills in a scannable format to judge relevance to an open role.

**Why this priority**: Experience and skills are the core evidence a hiring team needs, and the PRD lists both as required V1 content.

**Independent Test**: Navigate to the Experience and Skills destinations and confirm each approved role and capability group renders from version-controlled static content.

**Acceptance Scenarios**:

1. **Given** a visitor selects Experience, **When** the section is shown, **Then** each approved role displays employer, title, period, and approved public summary.
2. **Given** a visitor selects Skills, **When** the section is shown, **Then** approved capability groups are listed in a scannable layout.
3. **Given** a claim is not approved in the Phase 1 register, **When** the page renders, **Then** that claim is absent rather than fabricated or inferred.

---

### User Story 3 - Visitor obtains the resume (Priority: P2)

A visitor views the resume content online and downloads the PDF version.

**Why this priority**: The resume is a required V1 deliverable and a common recruiter action, but the site still communicates value without it.

**Independent Test**: Open the Resume destination and confirm the online summary renders and the download control points at the approved static asset.

**Acceptance Scenarios**:

1. **Given** an approved resume PDF asset exists, **When** a visitor activates the download control, **Then** the approved PDF is served from the static site.
2. **Given** no approved resume PDF exists, **When** the Resume section renders, **Then** the download control is absent or clearly non-published rather than linking to a missing or placeholder file.

---

### User Story 4 - Visitor reaches professional contact paths (Priority: P2)

A visitor contacts Sireesha through approved professional channels.

**Why this priority**: Contact completes the recruiter journey, but it depends entirely on Phase 1 endpoint verification.

**Independent Test**: Open the Contact destination and confirm only verified, approved endpoints appear and resolve to their intended destinations.

**Acceptance Scenarios**:

1. **Given** an approved email, LinkedIn, and GitHub endpoint, **When** the Contact section renders, **Then** each is presented as an actionable link to the approved destination.
2. **Given** an endpoint is unverified or unapproved, **When** the Contact section renders, **Then** that endpoint is not published.
3. **Given** any visitor, **When** the site is inspected, **Then** no phone number, personal location, backend contact form, or login is present.

---

### User Story 5 - Keyboard, mobile, and assistive-technology access (Priority: P3)

A visitor using a keyboard, a small screen, a screen reader, or reduced-motion settings completes the journeys above.

**Why this priority**: WCAG 2.2 AA is a stated requirement, and this journey cuts across all content, so it is verified once the content surfaces exist.

**Independent Test**: Traverse the site using only the keyboard and confirm visible focus, logical order, a skip link, landmark structure, and honored reduced-motion preferences.

**Acceptance Scenarios**:

1. **Given** a keyboard-only visitor, **When** they tab through the page, **Then** focus is always visible and follows a logical reading order.
2. **Given** a visitor with `prefers-reduced-motion: reduce`, **When** the page animates or scrolls, **Then** motion and smooth scrolling are suppressed.
3. **Given** a screen-reader user, **When** they navigate by landmark and heading, **Then** navigation, main content, and section headings are correctly exposed.

### Edge Cases

- What happens when the approved resume PDF is not yet supplied? The Resume download must not link to a missing or placeholder file.
- What happens when a contact endpoint is supplied but unverified? It must not be published, and no slug or URL may be guessed or constructed.
- What happens when the site is served from a GitHub Pages project subpath? All asset and internal links must resolve correctly under that base path.
- What happens on very narrow (320px) or very wide (>1920px) viewports? Content must remain readable with no horizontal scrolling or broken layout.
- How does the system handle decorative overflow elements? Clipping must not disable sticky positioning or create horizontal scrollbars.
- What happens when content grows (longer role summaries, more skills)? Layout must accommodate variable content without clipping text.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The site MUST present the V1 destinations from the PRD navigation: Home, About, Experience, Skills, Work, Resume, and Contact.
- **FR-002**: Navigation MUST allow a visitor to reach every destination from any point in the site.
- **FR-003**: Navigation MUST indicate the visitor's current destination.
- **FR-004**: All published professional content MUST originate from the approved Phase 1 handoff; unapproved items MUST be omitted.
- **FR-005**: The site MUST NOT publish a phone number, personal location, confidential employer or customer information, or fabricated projects, metrics, or outcomes.
- **FR-006**: The site MUST NOT include authentication, a database or CMS, payments, a backend contact form, or any server-side application logic.
- **FR-007**: Portfolio content MUST be maintained as version-controlled static data in the repository.
- **FR-008**: The site MUST render correctly across mobile, tablet, and desktop viewports with no horizontal scrolling.
- **FR-009**: The site MUST meet WCAG 2.2 AA goals, including semantic landmarks, keyboard operability, visible focus, a skip link, and sufficient contrast.
- **FR-010**: The site MUST honor `prefers-reduced-motion: reduce`.
- **FR-011**: The site MUST produce a static production build suitable for GitHub Pages, with asset and link paths correct for the configured base path or custom domain.
- **FR-012**: The site MUST provide professional SEO metadata, including a descriptive title and meta description.
- **FR-013**: The Resume destination MUST present resume content and, when an approved PDF asset exists, offer it as a download.
- **FR-014**: The Contact destination MUST present only approved, verified professional endpoints.
- **FR-015**: External profile links MUST open without exposing the site to reverse-tabnabbing.
- **FR-016**: The Work destination MUST present a capability overview without inventing projects, artifacts, or results.
- **FR-017**: Styling MUST use Tailwind CSS with responsive, mobile-first utilities, per `specs/techstack.md` and the constitution.
- **FR-018**: The implementation MUST include automated tests proportionate to risk, covering reusable logic, component behavior, and the critical recruiter journey.

### Key Entities

- **Profile**: The professional identity shown in the introduction — name, role focus, and approved summary statement.
- **Role**: One approved employment entry — employer, title, period, domain, approved public summary, and associated tools.
- **Capability**: One approved skill grouping — label and approved supporting description.
- **Work Item**: An approved capability overview entry or, when approved artifacts exist, a case study.
- **Contact Endpoint**: One approved, verified professional destination — type (email, LinkedIn, GitHub) and target.
- **Resume Asset**: The approved static resume PDF and its published location.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A visitor can reach all seven V1 destinations from the primary navigation on both desktop and mobile.
- **SC-002**: The production build emits a static site that loads and navigates correctly when served from the configured GitHub Pages base path.
- **SC-003**: A keyboard-only visitor can complete the identity, experience, resume, and contact journeys with visible focus at every step.
- **SC-004**: The site renders without horizontal scrolling at viewport widths from 320px to 1920px.
- **SC-005**: Automated accessibility checks report no critical violations on the published surfaces.
- **SC-006**: Every published claim, endpoint, and asset traces to an approved entry in the Phase 1 register; zero unapproved or fabricated items are published.
- **SC-007**: The repository's automated checks — install, lint, test, and production build — pass for the delivered implementation.

## Assumptions

- The Phase 1 approval package will be completed and handed off before any real professional content is published; this specification does not grant that approval.
- The approved resume PDF will be supplied by the portfolio owner as a static asset; it is not present in the workspace today.
- Contact endpoints will be verified by the owner; no URL, handle, or profile slug will be guessed or derived from resume text.
- Analytics, a blog, case studies, and a dedicated freelance section remain out of scope for V1 per `specs/mission.md`.
- CI automation and release are Phase 3 and Phase 4 concerns and are out of scope for this feature, though the build must be CI-ready.
- The existing UI prototype may inform layout and interaction decisions but carries no approval status and does not satisfy FR-017 or FR-018 as written.
