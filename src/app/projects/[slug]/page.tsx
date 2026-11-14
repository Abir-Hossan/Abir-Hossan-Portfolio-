import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, CheckCircle2, Code2, Layers3, Target, Workflow, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import CaseStudyGallery from "@/components/projects/CaseStudyGallery";

const caseDetails: Record<string, {
  overview: string; challenge: string; approach: string; implementation: string;
  features: { title: string; description: string }[]; outcomes: string[];
}> = {
  studiospace: {
    overview: "A marketplace concept that connects creators who need production-ready spaces with hosts who manage studios, stages, and creative venues.",
    challenge: "Finding a suitable creative space can involve comparing scattered listings, production facilities, availability, and pricing. Hosts also need a clear workflow for maintaining listings and handling incoming requests.",
    approach: "StudioSpace brings discovery, detailed studio information, and booking requests into one experience. Creators can review a space before requesting a booking, while hosts can manage listings and follow booking activity from a dedicated workspace.",
    implementation: "The frontend is built with Next.js and TypeScript and connects to an Express REST API backed by MongoDB. The booking flow records a price snapshot with each request, helping preserve the quoted amount even if a listing rate changes later.",
    features: [
      { title: "Studio discovery", description: "Explore creative spaces and review listing information in a consistent marketplace experience." },
      { title: "Detailed listings", description: "Bring galleries, production specifications, amenities, and pricing together on the studio page." },
      { title: "Booking requests", description: "Let creators submit booking requests with the quoted price recorded for that request." },
      { title: "Host workspace", description: "Give hosts a central dashboard for listings, booking activity, and request management." },
    ],
    outcomes: ["Creator-facing marketplace flow", "Host dashboard and listing management", "REST API backed by MongoDB", "Booking request price snapshot"],
  },
  bazardor: {
    overview: "A market-price comparison platform designed to make everyday product prices easier to browse and compare.",
    challenge: "When product prices are spread across different sources, it becomes harder to understand current market differences. BazarDor focuses on presenting product prices in a clear, comparable format.",
    approach: "The interface organizes product information into a browsable experience, helping visitors scan prices and compare everyday items. Account access supports authenticated user experiences.",
    implementation: "The application uses Next.js and TypeScript for the web experience, PostgreSQL for relational data, and Drizzle ORM for database access. Better Auth handles the authentication layer.",
    features: [
      { title: "Price overview", description: "Present everyday product prices in a clear, scannable interface." },
      { title: "Product comparison", description: "Make it easier to review multiple products and their listed prices." },
      { title: "Structured data", description: "Use PostgreSQL with Drizzle ORM to work with relational application data." },
      { title: "Authentication", description: "Integrate Better Auth for account-related functionality." },
    ],
    outcomes: ["Next.js and TypeScript application", "PostgreSQL data layer", "Drizzle ORM integration", "Better Auth integration"],
  },
  fitlog: {
    overview: "A fitness tracking application focused on recording workouts and reviewing training activity over time.",
    challenge: "Keeping a consistent record of workouts can be difficult when training activity is spread across notes or disconnected tools. FitLog brings workout logging and progress review into one interface.",
    approach: "FitLog provides a workout-focused interface where users can explore the workout library, log training activity, and review their progress through a dedicated application experience.",
    implementation: "The project uses a React and Next.js interface with TypeScript and Tailwind CSS. A REST API supports the application's data workflow for recording and reviewing workout activity.",
    features: [
      { title: "Workout library", description: "Browse exercise options through a structured workout interface." },
      { title: "Workout logging", description: "Record training activity in a focused workflow." },
      { title: "Progress review", description: "Keep workout history available for reviewing activity over time." },
      { title: "Responsive interface", description: "Use a modern web interface designed to work across screen sizes." },
    ],
    outcomes: ["React and Next.js interface", "TypeScript codebase", "Tailwind CSS styling", "REST API integration"],
  },
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);
  if (!project) return { title: "Project not found | Abir Hossan" };
  return {
    title: `${project.title} — Case Study | Abir Hossan`,
    description: project.description,
  };
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);
  const details = caseDetails[slug];
  if (!project || !details) notFound();

  const gallery = project.id === "studiospace"
    ? [
        { src: "/images/projects/studiospace.webp", alt: "StudioSpace studio listing and booking details page", label: "Studio details and booking flow", width: 1920, height: 4039 },
        { src: "/images/projects/studiospace-dashboard.webp", alt: "StudioSpace host dashboard with booking and listing management", label: "Host dashboard", width: 1440, height: 1825 },
      ]
    : [
        { src: project.image, alt: `${project.title} application interface`, label: `${project.title} application preview`, width: project.id === "fitlog" ? 1280 : 1280, height: project.id === "fitlog" ? 719 : 720 },
      ];

  return (
    <main className="case-study-page">
      <div className="case-study-glow case-study-glow-one" />
      <div className="case-study-glow case-study-glow-two" />
      <article className="case-study-container">
        <nav className="case-study-topbar" aria-label="Project navigation">
          <Link href="/#projects" className="case-study-back"><ArrowLeft size={15} /> <span>Back to Featured Projects</span></Link>
          <span className="case-study-topbar-note">PROJECT / {String(projects.findIndex((item) => item.id === project.id) + 1).padStart(2, "0")}</span>
        </nav>

        <header className="case-study-hero">
          <div className="case-study-hero-copy">
            <p className="case-study-eyebrow"><Sparkles size={13} /> {project.category}</p>
            <h1>{project.title}<span>.</span></h1>
            <p className="case-study-lead">{project.description}</p>
            <div className="case-study-tech" aria-label="Technologies used">
              {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
            <div className="case-study-actions">
              {project.liveUrl && <a className="case-study-button case-study-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo <ExternalLink size={14} /></a>}
              {project.githubUrl && <a className="case-study-button case-study-secondary" href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github size={15} /> Source Code <ArrowUpRight size={14} /></a>}
            </div>
          </div>
          <aside className="case-study-hero-aside">
            <span className="case-study-aside-label">PROJECT SNAPSHOT</span>
            <div><small>TYPE</small><strong>{project.category}</strong></div>
            <div><small>STACK</small><strong>{project.technologies.length} technologies</strong></div>
            <div><small>DELIVERABLE</small><strong>Full-stack web application</strong></div>
          </aside>
        </header>

        <section className="case-study-gallery-section" aria-label="Project screenshots">
          <div className="case-study-section-heading">
            <div><p className="case-study-section-label">THE INTERFACE</p><h2>A closer look at the product</h2></div>
            <span>Click any image to expand</span>
          </div>
          <CaseStudyGallery images={gallery} />
        </section>

        <section className="case-study-overview">
          <div className="case-study-overview-title">
            <p className="case-study-section-label">PROJECT OVERVIEW</p>
            <h2>Designed around a real workflow.</h2>
          </div>
          <p>{details.overview}</p>
        </section>

        <div className="case-study-content-grid">
          <section className="case-study-info-card">
            <div className="case-study-info-icon"><Target size={18} /></div>
            <p className="case-study-section-label">01 / THE CHALLENGE</p>
            <h2>The problem worth solving</h2>
            <p>{details.challenge}</p>
          </section>
          <section className="case-study-info-card">
            <div className="case-study-info-icon"><Workflow size={18} /></div>
            <p className="case-study-section-label">02 / THE APPROACH</p>
            <h2>How the experience works</h2>
            <p>{details.approach}</p>
          </section>
          <section className="case-study-info-card case-study-implementation">
            <div className="case-study-info-icon"><Code2 size={18} /></div>
            <p className="case-study-section-label">03 / IMPLEMENTATION</p>
            <h2>Under the hood</h2>
            <p>{details.implementation}</p>
            <div className="case-study-stack">
              {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          </section>
        </div>

        <section className="case-study-features">
          <div className="case-study-section-heading">
            <div><p className="case-study-section-label">CORE CAPABILITIES</p><h2>What the product brings together</h2></div>
            <Layers3 size={21} />
          </div>
          <div className="case-study-feature-grid">
            {details.features.map((feature, index) => (
              <article className="case-study-feature-card" key={feature.title}>
                <span className="case-study-feature-number">{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{feature.title}</h3><p>{feature.description}</p></div>
                <CheckCircle2 size={16} />
              </article>
            ))}
          </div>
        </section>

        <section className="case-study-outcomes">
          <div><p className="case-study-section-label">PROJECT HIGHLIGHTS</p><h2>Key implementation points</h2></div>
          <ul>{details.outcomes.map((outcome) => <li key={outcome}><CheckCircle2 size={15} />{outcome}</li>)}</ul>
        </section>

        <footer className="case-study-footer">
          <div><p className="case-study-section-label">HAVE A PROJECT IN MIND?</p><h2>Let’s build something useful.</h2><p>Have an idea or want to discuss a project? Let’s connect.</p></div>
          <div className="case-study-footer-actions">
            <Link href="/#contact" className="case-study-button case-study-primary">Get in touch <ArrowUpRight size={15} /></Link>
            <Link href="/#projects" className="case-study-footer-back">Explore more projects</Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
