import Image from "next/image";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-copy">
        <div className="status-pill">
          <span className="status-dot" /> Full-Stack Developer
        </div>
        <p className="hero-intro">Hi, I’m</p>
        <h1>
          Abir <span>Hossan</span>
        </h1>
        <h2>
          Building modern web applications
          <br className="desktop-break" /> with real-world impact.
        </h2>
        <p className="hero-description">
          I build modern, scalable, and user-centric web applications. I work with
          React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, and modern tools
          to turn ideas into real products.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Get in touch <ArrowRight size={17} />
          </a>
          <a className="button button-outline" href="#projects">
            View my work <MoveUpRight size={16} />
          </a>
        </div>

        <div className="social-row" aria-label="Social profiles">
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Github />
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <Linkedin />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email Abir">
            <Mail />
          </a>
        </div>
      </div>

      <div className="hero-art hero-portrait-art" aria-label="Portrait of Abir Hossan">
        <Image
          src="/images/hero/abir-hossan.webp"
          alt="Abir Hossan wearing a black mask and black hoodie"
          fill
          priority
          sizes="(max-width: 800px) 100vw, 48vw"
          className="hero-portrait-image"
        />
        <div className="art-topline">
          <span>
            <Sparkles size={14} /> SYSTEM / PORTFOLIO
          </span>
          <span>01 — 06</span>
        </div>
        <div className="art-chip chip-react">
          <span className="chip-dot" /> React / UI
        </div>
        <div className="art-chip chip-node">
          <span className="chip-dot cyan" /> Node / API
        </div>
        <div className="art-chip chip-typescript">TS</div>
        <div className="art-footer">
          <span>BUILDING DIGITAL EXPERIENCES</span>
          <span>◉ ONLINE</span>
        </div>
      </div>
    </section>
  );
}
