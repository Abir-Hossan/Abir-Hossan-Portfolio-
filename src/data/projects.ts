export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: "studiospace",
    title: "StudioSpace",
    category: "Creative Space Marketplace",
    description: "Find and book creative spaces, from photo studios to podcast rooms.",
    highlights: "Studio search and filters, booking requests, and a host dashboard for managing listings.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "REST API", "MongoDB"],
    image: "/images/projects/studiospace.webp",
    githubUrl: "https://github.com/Abir-Hossan/StudioSpace",
    liveUrl: "https://studio-space-sepia.vercel.app/",
  },
  {
    id: "bazardor",
    title: "BazarDor",
    category: "Market Price Comparison",
    description: "Compare prices for everyday products in one place.",
    highlights: "Price comparison backed by PostgreSQL and Drizzle ORM, with account access through Better Auth.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Better Auth"],
    image: "/images/projects/bazardor.webp",
    githubUrl: "https://github.com/Abir-Hossan/BazarDor",
    liveUrl: "https://bazar-dor-chi-gold.vercel.app/",
  },
  {
    id: "fitlog",
    title: "FitLog",
    category: "Fitness Tracker",
    description: "Log workouts and review your training progress over time.",
    highlights: "Workout logging and progress tracking in a Next.js interface backed by a REST API.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    image: "/images/projects/fitlog.webp",
    githubUrl: "https://github.com/Abir-Hossan/FitLog-Project",
    liveUrl: "https://fit-log-project-ecru.vercel.app/",
  },
];
