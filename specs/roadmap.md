# V1 Roadmap

| Phase | Deliverable | Gate |
|---|---|---|
| 1. Confirm inputs | Approve resume, contact links, public-safe experience, and assets. | Human approves content and privacy. |
| 2. Build portfolio | Responsive React + JavaScript + Tailwind site with static output for GitHub Pages. | Required pages and navigation are implemented. |
| 3. Automate validation | GitHub Actions runs lint, tests, production build, and available accessibility/link checks on pull requests. | Failures block progress; passing checks move the change to human review. |
| 4. Review and release | Review content, mobile/keyboard usability, and production behavior; deploy on approved merge to `main`. | Human approves merge; verify the live site and revert the change if release is faulty. |

Automation may advance a change after required checks pass, but it does not approve public claims, confidential-content decisions, or production releases.