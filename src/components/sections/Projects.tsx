import Image from "next/image";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section-shell section-pad projects">
      <SectionHeading
        eyebrow="MY WORK"
        title="Featured Projects"
        description="Recent work focused on useful products, considered interfaces, and modern technologies."
      />
      <div className="projects-grid">
        {projects.filter((project) => project.featured).map((project, index) => (
          <article className="project-card" key={project.id}>
            <div className={`project-preview preview-${project.imageTone}`}>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} application screenshot`}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 1050px) 50vw, 540px"
                  className="project-real-shot"
                />
              ) : (
                <div className="project-image-placeholder" aria-hidden="true">
                  {project.title}
                </div>
              )}
              <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="project-content">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-list">
                {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <div className="project-actions">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live demo <ExternalLink size={15} />
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Github size={15} /> Source code <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
