"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Github,
  Globe2,
  Layers3,
  LockKeyhole,
  Package,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

type Skill = {
  name: string;
  mark?: string;
  icon?: typeof Code2;
  color: string;
  description: string;
};

const categories = ["Frontend", "Backend / Database", "Tools"] as const;
type Category = (typeof categories)[number];

const skills: Record<Category, Skill[]> = {
  Frontend: [
    { name: "Next.js", mark: "N", color: "#f8fafc", description: "React framework" },
    { name: "React.js", mark: "⚛", color: "#61dafb", description: "Component-based UI" },
    { name: "JavaScript", mark: "JS", color: "#f7df1e", description: "Modern ES6+" },
    { name: "TypeScript", mark: "TS", color: "#3178c6", description: "Typed JavaScript" },
    { name: "Tailwind CSS", mark: "≈", color: "#38bdf8", description: "Utility-first styling" },
    { name: "HTML5", mark: "5", color: "#e96228", description: "Semantic markup" },
    { name: "CSS3", mark: "3", color: "#38a5e8", description: "Responsive styling" },
    { name: "DaisyUI", mark: "d", color: "#a78bfa", description: "Tailwind components" },
    { name: "HeroUI", mark: "H", color: "#e5e7eb", description: "React UI components" },
    { name: "Responsive", icon: Globe2, color: "#67e8f9", description: "Mobile-first layouts" },
  ],
  "Backend / Database": [
    { name: "Node.js", mark: "JS", color: "#83cd29", description: "JavaScript runtime" },
    { name: "Express.js", icon: Server, color: "#e5e7eb", description: "Backend framework" },
    { name: "REST API", icon: Braces, color: "#c4b5fd", description: "API development" },
    { name: "MongoDB", icon: Database, color: "#47a248", description: "NoSQL database" },
    { name: "PostgreSQL", mark: "PG", color: "#699eca", description: "Relational database" },
    { name: "Drizzle ORM", icon: Workflow, color: "#c5f467", description: "TypeScript ORM" },
    { name: "Better Auth", icon: LockKeyhole, color: "#e5e7eb", description: "Authentication" },
  ],
  Tools: [
    { name: "Git", icon: GitBranch, color: "#f05032", description: "Version control" },
    { name: "GitHub", icon: Github, color: "#f8fafc", description: "Code collaboration" },
    { name: "VS Code", mark: "⌘", color: "#38a5e8", description: "Code editor" },
    { name: "npm", icon: Package, color: "#cb3837", description: "Package management" },
    { name: "Vercel", mark: "▲", color: "#f8fafc", description: "Deployment platform" },
    { name: "Terminal", icon: Terminal, color: "#86efac", description: "CLI workflow" },
    { name: "Postman", mark: "↗", color: "#ff6c37", description: "API testing" },
    { name: "VS / Browser DevTools", icon: Layers3, color: "#a78bfa", description: "Debugging tools" },
  ],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("Frontend");
  const reduceMotion = useReducedMotion();
  const activeSkills = useMemo(() => skills[activeCategory], [activeCategory]);

  return (
    <section id="skills" className="skills-section section-pad">
      <div className="section-shell">
        <SectionHeading
          eyebrow="MY SKILLS"
          title="Technologies I Work With"
          description="I work with modern technologies to build fast, scalable, and user-friendly web applications. Here are some of the core tools and frameworks I use to bring digital experiences to life."
        />

        <div className="reference-skills-tabs" role="tablist" aria-label="Skill categories">
          {categories.map((category) => (
            <button
              className={`reference-skills-tab${activeCategory === category ? " is-active" : ""}`}
              key={category}
              type="button"
              role="tab"
              id={`skills-tab-${categories.indexOf(category)}`}
              aria-selected={activeCategory === category}
              aria-controls="skills-panel"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.ul
          id="skills-panel"
          className="skills-tile-grid reference-skills-grid"
          role="tabpanel"
          aria-labelledby={`skills-tab-${categories.indexOf(activeCategory)}`}
          key={activeCategory}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          {activeSkills.map(({ name, mark, icon: Icon, color, description }, index) => (
            <motion.li
              className="skills-tile reference-skill-card"
              key={name}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: reduceMotion ? 0 : index * 0.035 }}
            >
              <span className="skills-tile-icon reference-skill-mark" style={{ color }} aria-hidden="true">
                {Icon ? <Icon size={31} strokeWidth={1.8} /> : mark}
              </span>
              <span className="reference-skill-name">{name}</span>
              <span className="reference-skill-description">{description}</span>
            </motion.li>
          ))}
        </motion.ul>
        <div className="reference-skills-footnote">
          <span className="reference-skills-live-dot" aria-hidden="true" />
          <span>{activeSkills.length} technologies &amp; capabilities</span>
          <span className="reference-skills-footnote-right">Explore by category</span>
        </div>
      </div>
    </section>
  );
}
