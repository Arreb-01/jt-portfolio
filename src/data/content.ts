export type Language = "en" | "zh";

export type LocalizedText = Record<Language, string>;

export const siteCopy = {
  nav: {
    works: { en: "Works", zh: "作品" },
    research: { en: "Research", zh: "研究" },
    links: { en: "Links", zh: "链接" },
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
      zh: "把想法做成真实世界的影响。",
    },
    subtitle: {
      en: "I build creative AI tools, interactive systems, and data-driven prototypes that are usable, presentable, and ready to iterate.",
      zh: "我关注 AI 工具、交互系统与数据驱动的创意项目，把技术原型做成可使用、可展示、可迭代的作品。",
    },
    actionsLabel: { en: "Primary actions", zh: "主要操作" },
    selectedWorks: { en: "Selected Works", zh: "精选作品" },
    github: { en: "GitHub", zh: "GitHub" },
    resume: { en: "Resume PDF", zh: "简历 PDF" },
  },
  sections: {
    selectedWorks: { en: "Selected Works", zh: "精选作品" },
    featuredProjects: { en: "Featured Projects", zh: "重点项目" },
    viewAllWorks: { en: "View All Works", zh: "查看全部作品" },
    aiProjects: { en: "AI & ML Projects", zh: "AI 与机器学习项目" },
    media: { en: "Interactive Media", zh: "互动媒体" },
    mediaIntro: {
      en: "Interactive installations, educational games, digital experiences, and information visualization.",
      zh: "交互装置、教育游戏、数字体验与信息可视化。",
    },
    recognition: { en: "Research & Recognition", zh: "研究与奖项" },
  },
  project: {
    position: { en: "Position", zh: "定位" },
    build: { en: "Build", zh: "构建" },
    caseNote: { en: "Case note", zh: "项目记录" },
    stackLabel: { en: "technology stack", zh: "技术栈" },
  },
  motionNotes: {
    label: { en: "Motion design notes", zh: "动效设计说明" },
    items: {
      en: [
        "hover lift -4px / shadow +4px",
        "button color inversion",
        "stagger reveal",
        "sticker micro-rotation",
        "reduced-motion fallback",
      ],
      zh: [
        "悬停上移 -4px / 阴影 +4px",
        "按钮颜色反打",
        "错位入场",
        "贴纸微旋转",
        "弱动效兜底",
      ],
    },
  },
  footer: {
    statement: {
      en: "Open to creative AI tools, interactive media, and product prototypes.",
      zh: "关注创意 AI 工具、互动媒体与产品原型。",
    },
    github: { en: "GitHub", zh: "GitHub" },
    resume: { en: "Resume PDF", zh: "简历 PDF" },
  },
} as const;
