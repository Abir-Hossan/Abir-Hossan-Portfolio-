# Portfolio maintenance notes

This report describes the current source tree after the cleanup pass. It does not claim a production build or deployment has succeeded.

- Removed the unused Three.js / React Three Fiber skills globe and its skill-data module.
- Removed the unused Three.js, Drei, React Three Fiber, Tailwind build plugin, and Tailwind package dependencies from this portfolio repository. The portfolio uses its authored CSS; Tailwind remains listed as a technology used by the FitLog project.
- Removed unused DaisyUI and HeroUI claims from the skills cards.
- Kept project technology badges aligned with the declared stacks in `src/data/projects.ts`.
- Replaced the Gmail-draft-only contact form with a validated `/api/contact` submission flow using server-side Resend credentials.
- Added a honeypot field, request-size validation, accessible submission feedback, and clear missing-configuration errors.
- Replaced obsolete Calendly/appointment tests with tests for the current Home, About, Projects, Skills, Contact, project case studies, image lightbox, and contact form.
- Removed generated TypeScript build cache and stale TypeScript include paths.
- Added missing project-card text styles and contact form interaction states.

## Verification status

Dependency installation and automated checks must be run in an environment with npm registry access. No successful production build, browser run, or deployment is claimed by this report.
