# Abir Hossan — Full-Stack Developer Portfolio

A responsive, data-driven Next.js portfolio featuring project case studies, an interactive skills section, optimized local imagery, and a server-backed contact form.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

On Windows PowerShell, use `Copy-Item .env.example .env.local`. Open http://localhost:3000.

## Scripts

```bash
npm run dev        # development server
npm run typecheck  # TypeScript validation
npm run lint       # ESLint
npm run build      # production build
npm run start      # production server
npm run test:e2e   # Playwright end-to-end tests
```

Install the Playwright browser before running E2E tests: `npx playwright install chromium`.

## Contact form configuration

The contact form submits to `/api/contact`. Configure these server-only variables in `.env.local` to enable delivery through Resend:

```dotenv
RESEND_API_KEY=
CONTACT_TO_EMAIL=skabirhossan02@gmail.com
CONTACT_FROM_EMAIL=your_verified_sender@example.com
NEXT_PUBLIC_CONTACT_EMAIL=skabirhossan02@gmail.com
```

Keep `RESEND_API_KEY` private and never prefix it with `NEXT_PUBLIC_`. The form reports a clear error and offers direct email when delivery credentials are missing.

## Update portfolio content

- Featured projects and their technology badges: `src/data/projects.ts`
- Profile links and navigation: `src/data/site.ts`
- Skills displayed in the category tabs: `src/components/sections/Skills.tsx`
- Case-study copy and gallery composition: `src/app/projects/[slug]/page.tsx`
- Images: `public/images/`
- Resume: `public/resume/Abir_Hossan_Resume.pdf`

## Project structure

```text
src/
  app/
    api/contact/route.ts   # validated server-side email endpoint
    projects/[slug]/       # generated project case-study routes
    globals.css            # responsive design system and page styling
    layout.tsx              # metadata and root layout
    page.tsx                # homepage composition
  components/
    layout/                 # navigation and footer
    projects/               # screenshot gallery and lightbox
    sections/               # hero, about, projects, skills, contact
    ui/                     # shared UI primitives
  data/                     # typed site and project content
tests/                      # Playwright end-to-end coverage
```

## Verification

Run `npm run typecheck`, `npm run lint`, `npm run test:e2e`, and `npm run build` before deployment. The supplied source archive is not a substitute for testing in the target deployment environment.
