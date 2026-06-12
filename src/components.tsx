import { useEffect, useState } from "react";
import type {
  Language,
  LocalizedText,
  PortfolioMode,
  ProjectFilter,
  siteCopy,
} from "./data/content";
import type { Project } from "./data/projects";

type SiteCopy = typeof siteCopy;

export function ArrowIcon() {
  return (
    <svg className="hand-icon" aria-hidden="true" viewBox="0 0 40 24">
      <path d="M2 12h32M23 3l11 9-11 9" />
    </svg>
  );
}

function HandmadeIcon({ name }: { name: "github" | "resume" | "menu" | "close" }) {
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

  if (name === "close") {
    return (
      <svg className="hand-icon" aria-hidden="true" viewBox="0 0 32 32">
        <path d="M8 8l16 16M24 8 8 24" />
      </svg>
    );
  }

  return (
    <svg className="hand-icon" aria-hidden="true" viewBox="0 0 32 32">
      <path d="M6 9h20M6 16h20M6 23h20" />
    </svg>
  );
}

export function ScrollProgress({ progress }: { progress: number }) {
  return (
    <div className="scroll-progress" aria-hidden="true">
      <span style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}

export function TopNav({
  copy,
  language,
  onToggleLanguage,
  activeSection,
}: {
  copy: SiteCopy["nav"];
  language: Language;
  onToggleLanguage: () => void;
  activeSection: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { id: "selected-works", href: "#selected-works", label: copy.works[language] },
    { id: "research", href: "#research", label: copy.research[language] },
    { id: "links", href: "#links", label: copy.links[language] },
  ];

  return (
    <header className="top-nav">
      <a className="nav-logo" href="#top" aria-label="JT home">
        JT
      </a>
      <nav aria-label="Primary navigation" className="nav-links">
        {links.map((link) => (
          <a
            href={link.href}
            aria-current={activeSection === link.id ? "page" : undefined}
            key={link.id}
          >
            {link.label}
          </a>
        ))}
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
        aria-hidden={!isMenuOpen}
        className={`mobile-nav ${isMenuOpen ? "open" : ""}`}
      >
        {links.map((link) => (
          <a
            href={link.href}
            aria-current={activeSection === link.id ? "page" : undefined}
            key={link.id}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function ModeSwitcher({
  modes,
  copy,
  language,
  activeMode,
  onChange,
}: {
  modes: readonly PortfolioMode[];
  copy: SiteCopy["modes"];
  language: Language;
  activeMode: PortfolioMode;
  onChange: (mode: PortfolioMode) => void;
}) {
  return (
    <div className="mode-switcher" aria-label="Lab mode selector">
      {modes.map((mode) => (
        <button
          type="button"
          className={activeMode === mode ? "active" : ""}
          aria-pressed={activeMode === mode}
          onClick={() => onChange(mode)}
          key={mode}
        >
          <span>{copy[mode].label[language]}</span>
        </button>
      ))}
    </div>
  );
}

export function ProjectFilterBar({
  filters,
  copy,
  language,
  activeFilter,
  onChange,
}: {
  filters: readonly ProjectFilter[];
  copy: SiteCopy["filters"];
  language: Language;
  activeFilter: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
}) {
  return (
    <div className="filter-bar" aria-label="Project filters">
      {filters.map((filter) => (
        <button
          type="button"
          className={activeFilter === filter ? "active" : ""}
          aria-pressed={activeFilter === filter}
          onClick={() => onChange(filter)}
          key={filter}
        >
          {copy[filter][language]}
        </button>
      ))}
    </div>
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
  expanded,
  onToggle,
  onOpenCaseFile,
}: {
  project: Project;
  language: Language;
  copy: SiteCopy["project"];
  featured?: boolean;
  expanded: boolean;
  onToggle: () => void;
  onOpenCaseFile: () => void;
}) {
  const toggleLabel =
    language === "en"
      ? `${expanded ? copy.collapse.en : copy.expand.en} ${featured ? "featured " : ""}${
          project.title
        }`
      : `${copy[expanded ? "collapse" : "expand"].zh}${featured ? "精选 " : " "}${
          project.title
        }`;
  const caseFileLabel =
    language === "en"
      ? `Open ${featured ? "featured " : ""}${project.title} case file`
      : `打开${featured ? "精选 " : " "}${project.title} 案例档案`;

  return (
    <article
      className={`project-card accent-${project.accent} ${featured ? "featured" : ""} ${
        expanded ? "expanded" : ""
      }`}
      aria-label={`${featured ? "featured " : ""}${project.title} project card`}
      data-featured={featured ? "true" : undefined}
    >
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
        <div className="project-tags" aria-label={`${project.title} ${copy.tags[language]}`}>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {expanded ? (
          <div className="project-details">
            <DetailLine label={copy.problem[language]} text={project.problem[language]} />
            <DetailLine label={copy.built[language]} text={project.built[language]} />
            <DetailLine label={copy.impact[language]} text={project.impact[language]} />
          </div>
        ) : null}
        <ul aria-label={`${project.title} ${copy.stackLabel[language]}`}>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-actions">
          <button
            type="button"
            className="project-inline-button"
            aria-expanded={expanded}
            onClick={onToggle}
          >
            {toggleLabel} <ArrowIcon />
          </button>
          {project.caseFile ? (
            <button type="button" className="project-inline-button case" onClick={onOpenCaseFile}>
              {caseFileLabel} <ArrowIcon />
            </button>
          ) : project.github ? (
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
      </div>
    </article>
  );
}

function DetailLine({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <strong>{label}</strong>
      <p>{text}</p>
    </div>
  );
}

export function CaseFileDrawer({
  project,
  copy,
  language,
  onClose,
}: {
  project: Project | null;
  copy: SiteCopy["caseFile"];
  language: Language;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, project]);

  if (!project?.caseFile) {
    return null;
  }

  const sections: [LocalizedText, LocalizedText][] = [
    [copy.background, project.caseFile.background],
    [copy.role, project.caseFile.role],
    [copy.method, project.caseFile.method],
    [copy.result, project.caseFile.result],
  ];

  return (
    <div className="case-file-backdrop">
      <aside
        className="case-file-drawer"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} case file`}
      >
        <div className="case-file-top">
          <div>
            <span>{copy.title[language]}</span>
            <h2>{project.title}</h2>
          </div>
          <button type="button" aria-label={copy.close[language]} onClick={onClose}>
            <HandmadeIcon name="close" />
          </button>
        </div>
        <p className="case-file-summary">{project.caseFile.summary[language]}</p>
        <div className="case-file-sections">
          {sections.map(([label, text]) => (
            <section key={label.en}>
              <h3>{label[language]}</h3>
              <p>{text[language]}</p>
            </section>
          ))}
        </div>
        {project.github ? (
          <a className="case-file-link" href={project.github} target="_blank" rel="noreferrer">
            {copy.links[language]} <ArrowIcon />
          </a>
        ) : null}
      </aside>
    </div>
  );
}

export function FooterLinks({
  copy,
  language,
  resumeHref,
}: {
  copy: SiteCopy["footer"];
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
