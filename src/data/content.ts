export type Language = "en" | "zh";

export type LocalizedText = Record<Language, string>;

export type PortfolioMode = "ai-product" | "creative-tech" | "research";

export type ProjectFilter =
  | "all"
  | "ai-tools"
  | "product-research"
  | "interactive-media"
  | "music-ml";

export const resumeLinks: Record<Language, string> = {
  en: "/CV_Ma_Jiatong.pdf",
  zh: "/Ma-Jiatong-Resume-ZH.pdf",
};

export const modeOrder: PortfolioMode[] = ["ai-product", "creative-tech", "research"];

export const projectFilters: ProjectFilter[] = [
  "all",
  "ai-tools",
  "product-research",
  "interactive-media",
  "music-ml",
];

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
      en: "AI Creative Lab. Filed, tested, shipped.",
      zh: "AI 创意实验室。归档、验证、上线。",
    },
    subtitle: {
      en: "I build creative AI tools, interactive systems, and data-driven prototypes that are usable, presentable, and ready to iterate.",
      zh: "我关注 AI 工具、交互系统与数据驱动的创意项目，把技术原型做成可使用、可展示、可迭代的作品。",
    },
    actionsLabel: { en: "Primary actions", zh: "主要操作" },
    selectedWorks: { en: "Selected Lab Work", zh: "精选实验项目" },
    github: { en: "GitHub", zh: "GitHub" },
    resume: { en: "Resume PDF", zh: "中文简历 PDF" },
    activeTrack: { en: "Featured lab track", zh: "当前实验方向" },
  },
  modes: {
    "ai-product": {
      label: { en: "AI Product", zh: "AI 产品" },
      title: { en: "AI Product Builder", zh: "AI 产品构建者" },
      subtitle: {
        en: "I turn ambiguous AI use cases into traceable product workflows, tested prototypes, and demo-ready systems.",
        zh: "我把模糊的 AI 场景转化为可追踪的产品流程、可测试的原型和可演示的系统。",
      },
      featured: { en: "On-Call Agent", zh: "On-Call Agent" },
      filter: "ai-tools",
    },
    "creative-tech": {
      label: { en: "Creative Tech", zh: "创意技术" },
      title: { en: "Creative Systems Lab", zh: "创意系统实验室" },
      subtitle: {
        en: "I design interactive media systems where abstract knowledge becomes playable, explorable, and easier to understand.",
        zh: "我设计交互媒体系统，把抽象知识转译成可游玩、可探索、易理解的体验。",
      },
      featured: { en: "Circuit Hero", zh: "Circuit Hero" },
      filter: "interactive-media",
    },
    research: {
      label: { en: "Research", zh: "研究" },
      title: { en: "Research to Prototype", zh: "研究到原型" },
      subtitle: {
        en: "I connect user evidence, model evaluation, and experimental data into product decisions with visible reasoning.",
        zh: "我把用户证据、模型评估和实验数据连接成有清晰依据的产品决策。",
      },
      featured: { en: "Campus AI Learning Assistant", zh: "校园 AI 学习助手" },
      filter: "product-research",
    },
  },
  filters: {
    all: { en: "All", zh: "全部" },
    "ai-tools": { en: "AI Tools", zh: "AI 工具" },
    "product-research": { en: "Product Research", zh: "产品研究" },
    "interactive-media": { en: "Interactive Media", zh: "交互媒体" },
    "music-ml": { en: "Music & ML", zh: "音乐与机器学习" },
  },
  sections: {
    selectedWorks: { en: "Selected Lab Work", zh: "精选项目" },
    featuredProjects: { en: "Filed Experiments", zh: "已归档实验" },
    viewAllWorks: { en: "View All Works", zh: "查看全部作品" },
    projectLab: { en: "Project Laboratory", zh: "项目实验室" },
    media: { en: "Interactive Media", zh: "交互媒体" },
    mediaIntro: {
      en: "Playable systems, educational experiences, cultural prototypes, and information visualization.",
      zh: "可游玩的系统、教育体验、文化原型与信息可视化。",
    },
    recognition: { en: "Research & Recognition", zh: "研究与认可" },
  },
  project: {
    position: { en: "Position", zh: "定位" },
    build: { en: "Build", zh: "构建" },
    problem: { en: "Problem", zh: "问题" },
    built: { en: "Built", zh: "构建" },
    impact: { en: "Impact", zh: "结果" },
    tags: { en: "Tags", zh: "标签" },
    expand: { en: "Expand", zh: "展开" },
    collapse: { en: "Collapse", zh: "收起" },
    openCaseFile: { en: "Open Case File", zh: "打开案例档案" },
    caseNote: { en: "Case note", zh: "案例记录" },
    stackLabel: { en: "technology stack", zh: "技术栈" },
  },
  caseFile: {
    title: { en: "Case File", zh: "案例档案" },
    background: { en: "Background", zh: "背景" },
    role: { en: "My Role", zh: "我的职责" },
    method: { en: "Method", zh: "方法" },
    result: { en: "Result", zh: "结果" },
    links: { en: "Links", zh: "链接" },
    close: { en: "Close case file", zh: "关闭案例档案" },
  },
  labPrinciples: {
    label: { en: "Lab principles", zh: "实验室原则" },
    items: {
      en: [
        "Human-centered AI",
        "Prototype to product",
        "Playable systems",
        "Research-backed decisions",
        "Fast iteration",
      ],
      zh: ["以人为中心的 AI", "从原型到产品", "可游玩的系统", "研究支持决策", "快速迭代"],
    },
  },
  footer: {
    statement: {
      en: "Open to creative AI tools, interactive media, and product prototypes.",
      zh: "期待参与 AI 工具、交互媒体与产品原型相关机会。",
    },
    github: { en: "GitHub", zh: "GitHub" },
    resume: { en: "Resume PDF", zh: "中文简历 PDF" },
  },
} as const;
