import { useState } from "react";
import {
  BrutalButton,
  FooterLinks,
  ProjectCard,
  SectionHeading,
  TopNav,
} from "./components";
import type { Language } from "./data/content";
import { siteCopy } from "./data/content";
import { aiProjects, mediaProjects, recognition, selectedWorks } from "./data/projects";

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const copy = siteCopy;
  const toggleLanguage = () => setLanguage((current) => (current === "en" ? "zh" : "en"));

  return (
    <main id="top" className="site-shell">
      <TopNav copy={copy.nav} language={language} onToggleLanguage={toggleLanguage} />

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
              href="/JT-Resume.pdf"
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
              key={project.caseNo}
            />
          ))}
        </div>
      </section>

      <section className="ai-section" aria-labelledby="ai-projects">
        <SectionHeading id="ai-projects" title={copy.sections.aiProjects[language]} />
        <div className="compact-grid">
          {aiProjects.map((project) => (
            <ProjectCard
              copy={copy.project}
              language={language}
              project={project}
              key={`${project.caseNo}-${project.title}`}
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
              key={`${project.caseNo}-${project.title}`}
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

      <section className="motion-notes" aria-label={copy.motionNotes.label[language]}>
        {copy.motionNotes.items[language].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <FooterLinks copy={copy.footer} language={language} />
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
