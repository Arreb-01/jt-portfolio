import { useEffect, useMemo, useState } from "react";
import {
  BrutalButton,
  CaseFileDrawer,
  FooterLinks,
  ModeSwitcher,
  ProjectCard,
  ProjectFilterBar,
  ScrollProgress,
  SectionHeading,
  TopNav,
} from "./components";
import type { Language, PortfolioMode, ProjectFilter } from "./data/content";
import { modeOrder, projectFilters, resumeLinks, siteCopy } from "./data/content";
import { allProjects, mediaProjects, recognition, selectedWorks } from "./data/projects";

const sectionIds = ["selected-works", "project-lab", "interactive-media", "research", "links"];

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [activeMode, setActiveMode] = useState<PortfolioMode>("ai-product");
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("ai-tools");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const [openCaseFileId, setOpenCaseFileId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("selected-works");
  const [scrollProgress, setScrollProgress] = useState(0);

  const copy = siteCopy;
  const resumeHref = resumeLinks[language];
  const activeModeCopy = copy.modes[activeMode];
  const openCaseFileProject = allProjects.find((project) => project.id === openCaseFileId) ?? null;
  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? allProjects
        : allProjects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  const toggleLanguage = () => setLanguage((current) => (current === "en" ? "zh" : "en"));
  const changeMode = (mode: PortfolioMode) => {
    setActiveMode(mode);
    setActiveFilter(copy.modes[mode].filter);
    setExpandedProjectId(null);
  };
  const toggleProject = (projectId: string) =>
    setExpandedProjectId((current) => (current === projectId ? null : projectId));

  useEffect(() => {
    const updateScrollState = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setScrollProgress(Math.min(1, Math.max(0, progress)));

      let active: string | undefined;
      for (let index = sectionIds.length - 1; index >= 0; index -= 1) {
        const id = sectionIds[index];
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 110) {
          active = id;
          break;
        }
      }
      if (active) {
        setActiveSection(active === "project-lab" || active === "interactive-media" ? "selected-works" : active);
      }
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <main id="top" className={`site-shell mode-${activeMode}`}>
      <ScrollProgress progress={scrollProgress} />
      <TopNav
        copy={copy.nav}
        language={language}
        onToggleLanguage={toggleLanguage}
        activeSection={activeSection}
      />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-note hero-note-pink">
          {copy.hero.note[language]}
          <ArrowDoodle />
        </div>
        <div className="hero-mark">
          <h1 id="hero-title">JT</h1>
        </div>
        <div className="hero-copy">
          <p className="identity-label blue">AI Application Builder</p>
          <p className="identity-label yellow">Digital Media Technologist</p>
          <p className="hero-subtitle">{copy.hero.subtitle[language]}</p>
          <div className="lab-console">
            <p className="console-kicker">AI CREATIVE LAB</p>
            <h2>{activeModeCopy.title[language]}</h2>
            <p>{activeModeCopy.subtitle[language]}</p>
            <span>
              {copy.hero.activeTrack[language]}
              {language === "en" ? ": " : "："}
              {activeModeCopy.featured[language]}
            </span>
            <ModeSwitcher
              modes={modeOrder}
              copy={copy.modes}
              language={language}
              activeMode={activeMode}
              onChange={changeMode}
            />
          </div>
          <div className="hero-actions" aria-label={copy.hero.actionsLabel[language]}>
            <BrutalButton
              href="#selected-works"
              label={copy.hero.selectedWorks[language]}
              variant="paper"
            />
            <BrutalButton
              href="https://github.com/Arreb-01"
              label={copy.hero.github[language]}
              variant="mint"
              icon="github"
            />
            <BrutalButton
              href={resumeHref}
              label={copy.hero.resume[language]}
              variant="pink"
              icon="resume"
            />
          </div>
        </div>
        <div className="hero-collage" aria-hidden="true">
          <img src="/images/hero-system-board.svg" alt="" />
        </div>
      </section>

      <section className="works-section" aria-labelledby="selected-works">
        <div className="section-topline">
          <SectionHeading
            id="selected-works"
            title={copy.sections.selectedWorks[language]}
            label={copy.sections.featuredProjects[language]}
          />
          <a
            className="small-action"
            href="https://github.com/Arreb-01?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            {copy.sections.viewAllWorks[language]}
          </a>
        </div>
        <div className="featured-grid">
          {selectedWorks.map((project) => (
            <ProjectCard
              copy={copy.project}
              language={language}
              project={project}
              featured
              expanded={expandedProjectId === `featured-${project.id}`}
              onToggle={() => toggleProject(`featured-${project.id}`)}
              onOpenCaseFile={() => setOpenCaseFileId(project.id)}
              key={project.id}
            />
          ))}
        </div>
      </section>

      <section id="project-lab" className="ai-section" aria-labelledby="project-lab-title">
        <div className="section-topline lab-topline">
          <SectionHeading id="project-lab-title" title={copy.sections.projectLab[language]} />
          <ProjectFilterBar
            filters={projectFilters}
            copy={copy.filters}
            language={language}
            activeFilter={activeFilter}
            onChange={setActiveFilter}
          />
        </div>
        <div className="compact-grid" aria-label="Project laboratory">
          {filteredProjects.map((project) => (
            <ProjectCard
              copy={copy.project}
              language={language}
              project={project}
              expanded={expandedProjectId === project.id}
              onToggle={() => toggleProject(project.id)}
              onOpenCaseFile={() => setOpenCaseFileId(project.id)}
              key={project.id}
            />
          ))}
        </div>
      </section>

      <section className="media-section" aria-labelledby="interactive-media">
        <div className="media-intro">
          <h2 id="interactive-media">{copy.sections.media[language]}</h2>
          <p>{copy.sections.mediaIntro[language]}</p>
        </div>
        <div className="media-list">
          {mediaProjects.map((project) => (
            <ProjectCard
              copy={copy.project}
              language={language}
              project={project}
              expanded={expandedProjectId === `media-${project.id}`}
              onToggle={() => toggleProject(`media-${project.id}`)}
              onOpenCaseFile={() => setOpenCaseFileId(project.id)}
              key={project.id}
            />
          ))}
        </div>
      </section>

      <section id="research" className="research-section" aria-labelledby="recognition-title">
        <SectionHeading id="recognition-title" title={copy.sections.recognition[language]} />
        <div className="recognition-row">
          {recognition.map(([title, description], index) => (
            <article className={`recognition-card card-${index}`} key={title}>
              <h3>{title}</h3>
              <p>{description[language]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-principles" aria-label={copy.labPrinciples.label[language]}>
        {copy.labPrinciples.items[language].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <FooterLinks copy={copy.footer} language={language} resumeHref={resumeHref} />
      <CaseFileDrawer
        project={openCaseFileProject}
        copy={copy.caseFile}
        language={language}
        onClose={() => setOpenCaseFileId(null)}
      />
    </main>
  );
}

function ArrowDoodle() {
  return (
    <svg aria-hidden="true" viewBox="0 0 80 30">
      <path d="M4 17c28 2 49-4 69-13M61 3l14 1-8 12" />
    </svg>
  );
}
