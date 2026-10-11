# Tasks: Phase 2 Portfolio Build

**Input**: Design documents from `Features/002-phase-2-portfolio-build/`

**Prerequisites**: `spec.md`, `plan.md`, and an approved Phase 1 handoff in `Features/001-phase-1-input-approval/approval-register.md`

**Tests**: Required. The constitution mandates tests proportionate to risk, so component and end-to-end tasks are included rather than optional.

**Organization**: Tasks are grouped by the independently testable user stories in `spec.md`. `[P]` marks tasks that may run in parallel because they touch different files.

**Status note**: A UI prototype exists at `index.html`, `src/main.jsx`, `src/styles.css`, and `vite.config.js`. It predates this specification and is unapproved. No task below is marked complete on the basis of that prototype; it is a design reference only.

## Phase 1: Gate and Setup

**Purpose**: Clear the Phase 1 content gate and establish the mandated toolchain before publishing anything real.

- [ ] T001 Confirm the Phase 1 package in `Features/001-phase-1-input-approval/approval-register.md` records owner content approval, privacy approval, and a Phase 2 handoff. **Blocked**: package status is `Blocked`; both approvals are `Not recorded`. Do not publish real content until this clears. (Resolves CT-003)
- [X] T002 Verify each contact endpoint against an authoritative source supplied by the owner — email, GitHub profile, LinkedIn profile. Do not guess, derive, or construct a URL or profile slug. **Done 2026-10-11**: owner supplied `sireesha.kandula2001@gmail.com`, `https://github.com/SireeshaKandula23` (existence confirmed via GitHub API), and `https://www.linkedin.com/in/sireesha-kandula/`. All three are recorded as approved in the Phase 1 register. (Resolves the contact portion of CT-003)
- [X] T003 Obtain the approved resume PDF and place it in `public/assets/` as the single published resume asset. **Done 2026-10-11**: file received at `public/assets/Sireesha Kandula - Resume.pdf`. The privacy conflict (phone number and location printed in the PDF) was raised with the owner and **waived by explicit owner decision**, recorded in the Phase 1 register.
- [X] T004 Add Tailwind CSS and its PostCSS pipeline to `package.json`, and create `tailwind.config.js` and `postcss.config.js` with content globs covering `index.html` and `src/**/*.{js,jsx}`. **Done 2026-10-11**: tailwindcss 3.4, postcss, and autoprefixer installed as dev dependencies. (Resolves CT-001)
- [ ] T005 Add the test runner and React testing library to `package.json`, with `test` and `lint` scripts runnable locally so Phase 3 CI can enforce them. (Resolves CT-002)

**Checkpoint**: Toolchain matches `specs/techstack.md`, and the content gate status is explicit. Structural work may proceed with placeholder content; publication may not.

## Phase 2: Foundational Structure

**Purpose**: Shared shell, tokens, and content model that every user story depends on.

- [X] T006 Express the approved visual direction as Tailwind theme tokens in `tailwind.config.js` — color palette, type scale, spacing, radius, and elevation. **Done 2026-10-11**: colors map to CSS custom properties so the light/dark theme switch continues to work; fonts, display type scale, and shadows are defined in theme.extend.
- [X] T007 Replace `src/styles.css` contents with Tailwind directives plus only the minimal global base that utilities cannot express, removing bespoke component CSS as components are migrated. **Done 2026-10-11**: `styles.css` reduced from ~17KB of bespoke CSS to 1.2KB containing the font import, `@tailwind` directives, theme variables, and reduced-motion handling. All markup now uses Tailwind utilities. (Resolves CT-001)
- [ ] T008 Create `src/content/` modules for profile, roles, capabilities, work items, contact endpoints, and the resume asset. Each published field records the Phase 1 register ID it traces to, and unapproved items are omitted rather than stubbed with invented values.
- [ ] T009 Build the page shell in `src/main.jsx` with semantic landmarks, a skip link, a `main` region, and persistent primary navigation covering all seven V1 destinations.
- [ ] T010 Implement the current-destination indicator in the navigation, exposing it to assistive technology via `aria-current`.

**Checkpoint**: The shell renders with placeholder content, navigation reaches every destination, and no bespoke CSS remains for migrated components.

## Phase 3: User Story 1 - Recruiter evaluates fit quickly (P1)

**Goal**: A visitor immediately understands the professional identity and role focus.

**Independent Test**: Load the site on desktop and mobile; confirm identity, role focus, and navigation are present with no console errors and no horizontal scrolling.

- [ ] T011 [US1] Build the Home/introduction component in `src/components/` from `src/content/` profile data, with the approved introduction and role focus.
- [ ] T012 [US1] Build the About section from approved About content, omitting any claim without an approved register entry.
- [ ] T013 [P] [US1] Add component tests asserting the introduction renders from content data and that unapproved or absent fields render nothing rather than placeholder text.
- [ ] T014 [P] [US1] Add a responsive check covering 320px, 390px, 768px, and 1920px widths asserting no horizontal overflow.

**Checkpoint**: US1 is independently demonstrable and satisfies SC-001 and SC-004 for the home view.

## Phase 4: User Story 2 - Reviewer scans experience and capabilities (P1)

**Goal**: Approved experience and skills are scannable and traceable.

**Independent Test**: Open Experience and Skills; confirm every rendered role and capability maps to approved content data.

- [ ] T015 [US2] Build the Experience component rendering roles from `src/content/`, showing employer, title, period, domain, and approved summary.
- [ ] T016 [US2] Build the Skills component rendering approved capability groups.
- [ ] T017 [US2] Build the Work component presenting an approved capability overview with no invented projects, artifacts, or results.
- [ ] T018 [P] [US2] Add component tests asserting roles and capabilities render from data and that a role absent from content never appears.

**Checkpoint**: US2 is independently demonstrable and satisfies SC-006 for experience and skills.

## Phase 5: User Story 3 - Visitor obtains the resume (P2)

**Goal**: The resume is viewable and downloadable when approved.

**Independent Test**: Open Resume; confirm the download resolves to the approved asset, or that no download control renders when no approved asset exists.

- [ ] T019 [US3] Build the Resume section rendering approved resume content.
- [X] T020 [US3] Wire the download control to the approved PDF in `public/assets/`, rendering no control when the asset is absent or unapproved. Build the href from `import.meta.env.BASE_URL` so it resolves under the configured GitHub Pages base path rather than hardcoding a leading `/`. **Done 2026-10-11**: href is built from `import.meta.env.BASE_URL` with the filename URL-encoded (it contains spaces), and uses the `download` attribute.
- [ ] T021 [P] [US3] Add a test asserting the download control is omitted when no approved resume asset is configured.

**Checkpoint**: US3 is independently demonstrable with no broken or placeholder download.

## Phase 6: User Story 4 - Visitor reaches professional contact paths (P2)

**Goal**: Only verified, approved endpoints are published.

**Independent Test**: Open Contact; confirm only approved endpoints render and resolve to their verified destinations.

- [ ] T022 [US4] Build the Contact section rendering only approved, verified endpoints from content data.
- [ ] T023 [US4] Ensure external profile links set `rel="noreferrer"` (or equivalent) to prevent reverse-tabnabbing.
- [ ] T024 [P] [US4] Add tests asserting an unverified endpoint is never rendered and that no phone number, personal location, or contact form exists anywhere in the output.

**Checkpoint**: US4 is independently demonstrable and satisfies FR-005, FR-014, and FR-015.

## Phase 7: User Story 5 - Keyboard, mobile, and assistive access (P3)

**Goal**: The site meets WCAG 2.2 AA goals across the completed journeys.

**Independent Test**: Complete the recruiter journey using only the keyboard with visible focus throughout.

- [ ] T025 [US5] Verify and fix keyboard operability: logical tab order, visible focus on every interactive element, and a working skip link.
- [ ] T026 [US5] Verify reduced-motion handling so animation and smooth scrolling are suppressed under `prefers-reduced-motion: reduce`.
- [ ] T027 [US5] Verify color contrast meets WCAG 2.2 AA in both light and dark presentations.
- [ ] T028 [P] [US5] Add an automated accessibility check over the rendered page and resolve critical violations. (Satisfies SC-005)
- [ ] T029 [P] [US5] Add an end-to-end test covering the recruiter journey — identity, experience, resume, contact — and keyboard traversal. (Resolves CT-002)

**Checkpoint**: US5 is demonstrable and satisfies SC-003 and SC-005.

## Phase 8: Build, Validation, and Handoff

**Purpose**: Prove the static output is correct and CI-ready for Phase 3.

- [ ] T030 Configure the GitHub Pages base path in `vite.config.js` and confirm asset and internal links resolve from that path. (Satisfies SC-002)
- [ ] T031 Run install, lint, test, and production build locally and record the results. (Satisfies SC-007)
- [ ] T032 Serve the production output from the configured base path and verify navigation, resume access, and contact links.
- [ ] T033 Confirm every published claim, endpoint, and asset traces to an approved Phase 1 register ID, and record the verification. (Satisfies SC-006)
- [ ] T034 Confirm CT-001, CT-002, and CT-003 in `plan.md` are resolved or carry a documented owner waiver before requesting human review.

**Checkpoint**: Phase 2 roadmap gate — "Required pages and navigation are implemented" — is met, with open constitution violations closed or explicitly waived.

## Dependencies

- T001 blocks publication of real content in all later phases; structural tasks may proceed with placeholders.
- T004 and T005 block T006, T007, and all test tasks.
- Phase 2 (T006–T010) blocks all user-story phases.
- T002 blocks T022; T003 blocks T020.
- Phase 8 depends on the completion of every user story in scope.
