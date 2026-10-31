# Abir Hossan — Interactive 3D Developer Portfolio

A responsive Next.js portfolio with an interactive Three.js / React Three Fiber skills globe, data-driven project cards, contact form API, and accessibility-conscious motion behavior.

## Requirements

- Node.js 20.9+ (recommended for Next.js 15)
- npm

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. In Windows PowerShell, use `Copy-Item .env.example .env.local` if needed.

## Available scripts

```bash
npm run dev        # local development
npm run typecheck  # TypeScript checks
npm run lint       # ESLint
npm run build      # production build
npm run start      # serve production build
npm run test:e2e   # Playwright end-to-end tests
```

Install Playwright's browser once before running E2E tests:

```bash
npx playwright install chromium
```

## Configure contact details

Edit `.env.local`:

```dotenv
NEXT_PUBLIC_CONTACT_EMAIL=skabirhossan02@gmail.com
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/abir-hossan/30min
RESEND_API_KEY=
CONTACT_TO_EMAIL=skabirhossan02@gmail.com
CONTACT_FROM_EMAIL=your_verified_sender@example.com
```

`NEXT_PUBLIC_CALENDLY_URL` is set to the confirmed **10 Minute Meeting** event URL. The appointment section embeds that event on the page; if the variable is missing in another environment, visitors see an email fallback instead of a placeholder booking link.

For actual contact-form email delivery, add a valid `RESEND_API_KEY` and verified `CONTACT_FROM_EMAIL`; `CONTACT_TO_EMAIL` defaults to your supplied public email. Keep credentials server-side; do not prefix them with `NEXT_PUBLIC_`. If email delivery is not configured, the API returns a clear error instead of falsely claiming the message was sent.

## Add your actual resume

Your supplied resume is included at `public/resume/Abir_Hossan_Resume.pdf`; update it whenever you replace your CV.

## Assets and links

- Put raster image assets as optimized PNG files under `public/images/`.
- Keep project URLs in `src/data/projects.ts`.
- Keep social/contact destinations in `src/data/site.ts` and `.env.local`.
- The supplied portrait and actual FitLog/BazarDor screenshots are included as PNG assets. Public contact email defaults to `skabirhossan02@gmail.com`; Calendly requires the event URL configured in `.env.local`.

## Main structure

```text
src/
  app/api/contact/route.ts   # server-side contact form endpoint
  app/globals.css            # responsive styling
  app/layout.tsx             # metadata and root layout
  app/page.tsx               # page composition
  app/not-found.tsx          # custom 404 page
  components/layout/         # header and footer
  components/sections/       # portfolio sections
  components/three/          # interactive 3D skills globe
  components/ui/             # shared UI components
  data/                      # typed site, project, experience, and skill data
tests/                       # Playwright tests
```

## Verification status

The source package and supplied assets are assembled, but a successful dependency install, TypeScript check, lint run, browser test, and production build have **not** been confirmed in this environment because npm dependency installation could not complete. See `IMPLEMENTATION_REPORT.md` for the status of each check.

The Figma design was inspected at a structural level, but pixel-perfect visual matching has not been verified against rendered screenshots. No deployment was performed and no GitHub push was made.
