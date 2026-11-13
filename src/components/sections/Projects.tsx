import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section-shell section-pad projects">
      <SectionHeading
        eyebrow="MY WORK"
        title="Featured Projects"
        description="Three web applications with live demos and source code."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" id={`project-${project.id}`} key={project.id}>
            <div className="project-preview">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} application screenshot`}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 1050px) 50vw, 365px"
                  className="project-real-shot"
                />
              ) : (
                <div className="project-image-placeholder" aria-hidden="true">
                  {project.title}
                </div>
              )}

            </div>
            <div className="project-content">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-highlights">{project.highlights}</p>
              <div className="tech-list">
                {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <div className="project-actions">
                <Link href={`/projects/${project.id}`} aria-label={`View ${project.title} case study`}>Case study <ArrowUpRight size={14} /></Link>
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

