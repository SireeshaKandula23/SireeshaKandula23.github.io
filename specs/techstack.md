# Technology Stack

## Application

- **Framework:** React, following the TRD's component architecture.
- **Language:** JavaScript, following the TRD's data model and `.jsx`/`.js` examples.
- **Rendering and hosting:** Build-time pre-rendering/static export deployed to GitHub Pages. Do not introduce runtime SSR or a persistent application server.
- **Styling:** Tailwind CSS with responsive, mobile-first utilities; use Flexbox by default and CSS Grid where it clarifies a layout.
- **Content:** Version-controlled static content and structured data in the repository; no database or CMS for V1.
- **Assets and icons:** Static web assets and optimized SVG icons. Resume is a static PDF asset.

## Development and Delivery

- **Environment:** Node.js LTS, npm, and Git.
- **CI/CD:** GitHub Actions for dependency installation, quality checks, production build, and deployment to GitHub Pages.
- **Production runtime:** Static files served over HTTPS by GitHub Pages; no backend, container, or serverless service is required.
- **Browser support:** Current Chrome, Edge, Firefox, and Safari.

## Quality Requirements

- Preserve semantic HTML, keyboard access, visible focus, and WCAG 2.2 AA accessibility goals.
- Validate the production static build and critical navigation, resume, and external-link journeys in CI or focused checks.
- Keep dependencies, JavaScript, images, and font requests minimal. Respect `prefers-reduced-motion`.
- Configure the generated output and asset URLs for the repository's GitHub Pages URL or any configured custom domain.
- Analytics, if added, must be privacy-friendly, avoid unnecessary personally identifiable information, and never block core site functionality.

## Constraints and Decisions

- Use the TRD's React + JavaScript + Tailwind CSS stack consistently in the PRD and implementation.
- Use static export/build-time generation rather than runtime SSR because GitHub Pages does not run a Node.js server.
- No custom API, authentication, database, or backend contact form is part of Version 1.
- Select specific test, lint, and analytics packages during implementation only when needed; the PRD/TRD do not mandate particular libraries.
- Do not commit secrets or publish confidential, unverified, or unapproved content.