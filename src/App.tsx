import {
  BrutalButton,
  FooterLinks,
  ProjectCard,
  SectionHeading,
  TopNav,
} from "./components";
import { aiProjects, mediaProjects, recognition, selectedWorks } from "./data/projects";

export default function App() {
  return (
    <main id="top" className="site-shell">
      <TopNav />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-note hero-note-pink">
          Building ideas into real-world impact.
          <ArrowDoodle />
        </div>
        <div className="hero-mark">
          <h1 id="hero-title">JT</h1>
        </div>
        <div className="hero-copy">
          <p className="identity-label blue">AI Application Builder</p>
          <p className="identity-label yellow">Digital Media Technologist</p>
          <p className="hero-subtitle">
            我关注 AI 工具、交互系统与数据驱动的创意项目，把技术原型做成可使用、可展示、可迭代的作品。
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <BrutalButton href="#selected-works" label="Selected Works" variant="paper" />
            <BrutalButton
              href="https://github.com/Arreb-01"
              label="GitHub"
              variant="mint"
              icon="github"
            />
            <BrutalButton href="/JT-Resume.pdf" label="Resume PDF" variant="pink" icon="resume" />
          </div>
        </div>
        <div className="hero-collage" aria-hidden="true">
          <img src="/images/hero-system-board.svg" alt="" />
        </div>
      </section>

      <section className="works-section" aria-labelledby="selected-works">
        <div className="section-topline">
          <SectionHeading id="selected-works" title="Selected Works" label="Featured Projects" />
          <a
            className="small-action"
            href="https://github.com/Arreb-01?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            View All Works
          </a>
        </div>
        <div className="featured-grid">
          {selectedWorks.map((project) => (
            <ProjectCard project={project} featured key={project.caseNo} />
          ))}
        </div>
      </section>

      <section className="ai-section" aria-labelledby="ai-projects">
        <SectionHeading id="ai-projects" title="AI & ML Projects" />
        <div className="compact-grid">
          {aiProjects.map((project) => (
            <ProjectCard project={project} key={`${project.caseNo}-${project.title}`} />
          ))}
        </div>
      </section>

      <section className="media-section" aria-labelledby="interactive-media">
        <div className="media-intro">
          <h2 id="interactive-media">Interactive Media</h2>
          <p>交互装置、教育游戏、数字体验与信息可视化。</p>
        </div>
        <div className="media-list">
          {mediaProjects.map((project) => (
            <ProjectCard project={project} key={`${project.caseNo}-${project.title}`} />
          ))}
        </div>
      </section>

      <section id="research" className="research-section" aria-labelledby="recognition-title">
        <SectionHeading id="recognition-title" title="Research & Recognition" />
        <div className="recognition-row">
          {recognition.map(([title, description], index) => (
            <article className={`recognition-card card-${index}`} key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="motion-notes" aria-label="Motion design notes">
        <span>hover lift -4px / shadow +4px</span>
        <span>button color inversion</span>
        <span>stagger reveal</span>
        <span>sticker micro-rotation</span>
        <span>reduced-motion fallback</span>
      </section>

      <FooterLinks />
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
