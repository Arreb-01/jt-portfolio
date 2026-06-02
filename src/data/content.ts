export type Language = "en" | "zh";

export type LocalizedText = Record<Language, string>;

export const siteCopy = {
  nav: {
    works: { en: "Works", zh: "Works" },
    research: { en: "Research", zh: "Research" },
    links: { en: "Links", zh: "Links" },
    openMenu: { en: "Open navigation", zh: "打开导航" },
    closeMenu: { en: "Close navigation", zh: "关闭导航" },
    jumpLinks: { en: "Jump to links", zh: "跳转到链接" },
    toggleLanguage: { en: "中文", zh: "EN" },
    toggleLabel: {
      en: "Switch language to Chinese",
      zh: "切换语言为英文",
    },
  },
  hero: {
    note: {
      en: "Building ideas into real-world impact.",
      zh: "Building ideas into real-world impact.",
    },
    subtitle: {
      en: "I build creative AI tools, interactive systems, and data-driven prototypes that are usable, presentable, and ready to iterate.",
      zh: "我关注 AI 工具、交互系统与数据驱动的创意项目，把技术原型做成可使用、可展示、可迭代的作品。",
    },
    actionsLabel: { en: "Primary actions", zh: "Primary actions" },
    selectedWorks: { en: "Selected Works", zh: "Selected Works" },
    github: { en: "GitHub", zh: "GitHub" },
    resume: { en: "Resume PDF", zh: "Resume PDF" },
  },
  sections: {
    selectedWorks: { en: "Selected Works", zh: "Selected Works" },
    featuredProjects: { en: "Featured Projects", zh: "Featured Projects" },
    viewAllWorks: { en: "View All Works", zh: "View All Works" },
    aiProjects: { en: "AI & ML Projects", zh: "AI & ML Projects" },
    media: { en: "Interactive Media", zh: "Interactive Media" },
    mediaIntro: {
      en: "Interactive installations, educational games, digital experiences, and information visualization.",
      zh: "交互装置、教育游戏、数字体验与信息可视化。",
    },
    recognition: { en: "Research & Recognition", zh: "Research & Recognition" },
  },
  project: {
    position: { en: "Position", zh: "Position" },
    build: { en: "Build", zh: "Build" },
    caseNote: { en: "Case note", zh: "Case note" },
    stackLabel: { en: "technology stack", zh: "technology stack" },
  },
  motionNotes: {
    label: { en: "Motion design notes", zh: "Motion design notes" },
    items: {
      en: [
        "hover lift -4px / shadow +4px",
        "button color inversion",
        "stagger reveal",
        "sticker micro-rotation",
        "reduced-motion fallback",
      ],
      zh: [
        "hover lift -4px / shadow +4px",
        "button color inversion",
        "stagger reveal",
        "sticker micro-rotation",
        "reduced-motion fallback",
      ],
    },
  },
  footer: {
    statement: {
      en: "Open to creative AI tools, interactive media, and product prototypes.",
      zh: "Open to creative AI tools, interactive media, and product prototypes.",
    },
    github: { en: "GitHub", zh: "GitHub" },
    resume: { en: "Resume PDF", zh: "Resume PDF" },
  },
} as const;
