import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="contact-reference-section">
      <div className="contact-reference-inner">
        <h2>Contact</h2>
        <p className="contact-reference-description">
          I’m currently looking to join a cross-functional team that values improving people’s<br className="contact-desktop-break" />
          lives through accessible design, or have a project in mind? Let’s connect.
        </p>
        <a className="contact-reference-email" href={`mailto:${site.email}`}>{site.email}</a>
        <div className="contact-reference-socials" aria-label="Social links">
          <a href={`mailto:${site.email}`} aria-label="Send email"><Mail size={19} /></a>
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
        </div>
      </div>
    </section>
  );
}
