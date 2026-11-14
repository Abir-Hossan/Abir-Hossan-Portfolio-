"use client";

import { useEffect, useState } from "react";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { navigation, site } from "@/data/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    navigation.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a className="brand" href="#home" aria-label="Abir Hossan home" onClick={closeMenu}>
          <span className="brand-mark">
            A<span>.</span>
          </span>
          <span>ABIR HOSSAN</span>
        </a>

        <nav
          id="primary-navigation"
          className={`desktop-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              className={activeSection === item.href ? "active" : ""}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            className="button button-small button-outline resume-button"
            href={site.resumePath}
            download="Abir_Hossan_Resume.pdf"
          >
            <ArrowDownToLine size={16} /> Resume
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
