import { useState } from "react";
import type { Language, LocalizedText } from "./data/content";
import type { Project } from "./data/projects";

export function ArrowIcon() {
  return (
    <svg className="hand-icon" aria-hidden="true" viewBox="0 0 40 24">
      <path d="M2 12h32M23 3l11 9-11 9" />
    </svg>
  );
}

function HandmadeIcon({ name }: { name: "github" | "resume" | "menu" }) {
  if (name === "github") {
    return (
      <svg className="hand-icon github-mark" aria-hidden="true" viewBox="0 0 32 32">
        <path d="M16 3C8.8 3 3 8.8 3 16c0 5.3 3.2 9.9 7.8 11.9.6.1.8-.3.8-.6v-3c-3.2.7-3.9-1.2-3.9-1.2-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2.1.1 3 .4C20.4 8.7 21.4 9 21.4 9c.7 1.7.3 2.9.2 3.2.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.5.4.9 1.2.9 2.4v3.7c0 .3.2.7.9.6C23.8 25.9 27 21.3 27 16 27 8.8 21.2 3 16 3Z" />
      </svg>
    );
  }

  if (name === "resume") {
    return (
      <svg className="hand-icon" aria-hidden="true" viewBox="0 0 32 32">
        <path d="M8 3h12l6 6v20H8Z" />
        <path d="M20 3v8h7M12 16h12M12 21h10M12 26h8" />
      </svg>
    );
  }

  return (
    <svg className="hand-icon" aria-hidden="true" viewBox="0 0 32 32">
      <path d="M6 9h20M6 16h20M6 23h20" />
    </svg>
  );
}

export function TopNav({
  copy,
  language,
  onToggleLanguage,
}: {
  copy: {
    works: LocalizedText;
    research: LocalizedText;
    links: LocalizedText;
    openMenu: LocalizedText;
    closeMenu: LocalizedText;
    jumpLinks: LocalizedText;
    toggleLanguage: LocalizedText;
    toggleLabel: LocalizedText;
  };
  language: Language;
  onToggleLanguage: () => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="top-nav">
      <a className="nav-logo" href="#top" aria-label="JT home">
        JT
      </a>
      <nav aria-label="Primary navigation" className="nav-links">
        <a href="#selected-works">{copy.works[language]}</a>
        <a href="#research">{copy.research[language]}</a>
        <a href="#links">{copy.links[language]}</a>
      </nav>
      <button
        className="language-toggle"
        type="button"
        aria-label={copy.toggleLabel[language]}
        onClick={onToggleLanguage}
      >
        {copy.toggleLanguage[language]}
      </button>
      <button
        className={`menu-button ${isMenuOpen ? "open" : ""}`}
        type="button"
        aria-label={isMenuOpen ? copy.closeMenu[language] : copy.openMenu[language]}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <HandmadeIcon name="menu" />
      </button>
      <a className="nav-arrow" href="#links" aria-label={copy.jumpLinks[language]}>
        ↗
      </a>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`mobile-nav ${isMenuOpen ? "open" : ""}`}
      >
        <a href="#selected-works" onClick={() => setIsMenuOpen(false)}>
          {copy.works[language]}
        </a>
        <a href="#research" onClick={() => setIsMenuOpen(false)}>
          {copy.research[language]}
        </a>
        <a href="#links" onClick={() => setIsMenuOpen(false)}>
          {copy.links[language]}
        </a>
      </nav>
    </header>
  );
}

export function BrutalButton({
  href,
  label,
  variant,
  icon,
}: {
  href: string;
  label: string;
  variant: "paper" | "mint" | "pink" | "blue";
  icon?: "github" | "resume";
}) {
  const isExternal = href.startsWith("http");
  const iconNode =
    icon === "github" ? (
      <HandmadeIcon name="github" />
    ) : icon === "resume" ? (
      <HandmadeIcon name="resume" />
    ) : null;

  return (
    <a
      className={`brutal-button ${variant}`}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {iconNode ? (
        <span className="button-icon" aria-hidden="true">
          {iconNode}
        </span>
      ) : null}
      <span>{label}</span>
      <ArrowIcon />
    </a>
  );
}

export function SectionHeading({
  id,
  title,
  label,
}: {
  id: string;
  title: string;
  label?: string;
}) {
  return (
    <div className="section-heading">
      <h2 id={id}>{title}</h2>
      {label ? <span>{label}</span> : null}
    </div>
  );
}

export function ProjectCard({
  project,
  language,
  copy,
  featured = false,
}: {
  project: Project;
  language: Language;
  copy: {
    position: LocalizedText;
    build: LocalizedText;
    caseNote: LocalizedText;
    stackLabel: LocalizedText;
  };
  featured?: boolean;
}) {
  return (
    <article className={`project-card accent-${project.accent} ${featured ? "featured" : ""}`}>
      <div className="project-visual">
        <div className="project-title-block">
          <p className="case-number">CASE {project.caseNo}</p>
          <h3>{project.title}</h3>
        </div>
        <img className="project-art" src={project.image} alt={project.imageAlt} loading="lazy" />
        <span className="icon-sticker">{project.icon}</span>
      </div>
      <div className="project-body">
        <p className="project-description">
          <span>{copy.position[language]}</span>
          {project.description[language]}
        </p>
        <p className="project-role">
          <span>{copy.build[language]}</span>
          {project.role[language]}
        </p>
        <ul aria-label={`${project.title} ${copy.stackLabel[language]}`}>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {project.github ? (
          <a
            href={project.github}
            aria-label={`${project.title} GitHub`}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowIcon />
          </a>
        ) : (
          <span className="project-link-muted">
            {copy.caseNote[language]} <ArrowIcon />
          </span>
        )}
      </div>
    </article>
  );
}

export function FooterLinks({
  copy,
  language,
  resumeHref,
}: {
  copy: {
    statement: LocalizedText;
    github: LocalizedText;
    resume: LocalizedText;
  };
  language: Language;
  resumeHref: string;
}) {
  return (
    <footer id="links" className="footer">
      <p>{copy.statement[language]}</p>
      <div className="footer-actions">
        <a href="https://github.com/Arreb-01" target="_blank" rel="noreferrer">
          <HandmadeIcon name="github" /> {copy.github[language]}
        </a>
        <a href={resumeHref}>
          <HandmadeIcon name="resume" /> {copy.resume[language]}
        </a>
      </div>
    </footer>
  );
}
