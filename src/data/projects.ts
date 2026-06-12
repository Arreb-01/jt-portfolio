import type { LocalizedText } from "./content";

export type Accent = "blue" | "yellow" | "pink" | "red" | "mint" | "paper";

export type Project = {
  caseNo: string;
  title: string;
  description: LocalizedText;
  role: LocalizedText;
  stack: string[];
  github?: string;
  accent: Accent;
  icon: string;
  image: string;
  imageAlt: string;
};

export const selectedWorks: Project[] = [
  {
    caseNo: "01",
    title: "On-Call Agent",
    description: {
      en: "Intelligent on-call and incident response assistant",
      zh: "智能值班与事件响应助手",
    },
    role: {
      en: "Turns troubleshooting SOPs into a traceable workflow across retrieval, semantic recall, and agent dialogue.",
      zh: "把故障排查 SOP 拆成检索、语义召回和 Agent 对话三段流程，让值班响应更可追踪。",
    },
    stack: ["FastAPI", "BGE", "SSE", "Function Calling"],
    github: "https://github.com/Arreb-01/On-Call-Agent",
    accent: "blue",
    icon: "Bot",
    image: "/images/project-on-call.svg",
    imageAlt: "Hand-drawn bot answering an incident chat bubble",
  },
  {
    caseNo: "02",
    title: "AI Sourcing",
    description: {
      en: "AI-powered supplier discovery and evaluation platform",
      zh: "AI 驱动的供应商发现与评估平台",
    },
    role: {
      en: "Connects lead search, web extraction, information parsing, and team delivery into one automated evaluation pipeline.",
      zh: "把线索搜索、网页抓取、信息抽取和团队推送连成一条自动化评估管线。",
    },
    stack: ["OpenClaw", "Bright Data", "GLM", "Feishu Bot"],
    accent: "mint",
    icon: "Search",
    image: "/images/project-ai-sourcing.svg",
    imageAlt: "Hand-drawn supplier cards under a magnifying glass",
  },
  {
    caseNo: "03",
    title: "Circuit Hero",
    description: {
      en: "Circuit knowledge graph and learning assistant",
      zh: "电路知识图谱与学习助手",
    },
    role: {
      en: "Translates circuit knowledge graphs into a story-driven web game with level feedback for abstract concepts.",
      zh: "将电路知识图谱转译成剧情式网页游戏，用闯关反馈帮助青少年理解抽象概念。",
    },
    stack: ["JavaScript", "Game UX", "Education"],
    github: "https://github.com/Arreb-01/circuit-hero",
    accent: "pink",
    icon: "Circuit",
    image: "/images/project-circuit-hero.svg",
    imageAlt: "Hand-drawn robot cube flying over circuit traces",
  },
  {
    caseNo: "04",
    title: "RAG Shopping Guide",
    description: {
      en: "RAG-based shopping decision guide",
      zh: "基于 RAG 的购物决策指南",
    },
    role: {
      en: "Builds a demo-ready shopping Q&A prototype with Android, FastAPI, Chroma, and large language models.",
      zh: "用 Android、FastAPI、Chroma 和大模型构建可演示的导购问答原型。",
    },
    stack: ["RAG", "FastAPI", "Chroma", "Android"],
    github: "https://github.com/Arreb-01/ragshopguide",
    accent: "yellow",
    icon: "Cart",
    image: "/images/project-rag-shopping.svg",
    imageAlt: "Hand-drawn shopping cart with search and chat bubbles",
  },
];

export const aiProjects: Project[] = [
  ...selectedWorks.slice(0, 2),
  {
    caseNo: "05",
    title: "Campus AI Learning Assistant",
    description: {
      en: "AI assistant for campus learning scenarios",
      zh: "校园学习场景 AI 助手",
    },
    role: {
      en: "Uses 300+ survey responses to refine needs, prompt structure, memory behavior, and mistake-book features.",
      zh: "基于 300+ 问卷反馈收敛需求，迭代 prompt 架构、记忆机制和错题本功能。",
    },
    stack: ["Prompt Design", "Product Research", "AI Tutor"],
    accent: "pink",
    icon: "Study",
    image: "/images/project-ai-sourcing.svg",
    imageAlt: "Hand-drawn research cards and evaluation marks",
  },
  selectedWorks[3],
  {
    caseNo: "06",
    title: "JiuGong Melody Generation",
    description: {
      en: "Lyric-driven melody prediction experiment",
      zh: "歌词驱动旋律预测实验",
    },
    role: {
      en: "Explores melody generation with the JiuGong dataset and frames music information retrieval as part of the AI/ML portfolio.",
      zh: "基于九宫大成数据集探索旋律生成，把音乐信息处理纳入 AI/ML 项目集合。",
    },
    stack: ["Python", "Music IR", "ML"],
    github: "https://github.com/Arreb-01/jiugong-melody-generation",
    accent: "red",
    icon: "Wave",
    image: "/images/project-circuit-hero.svg",
    imageAlt: "Hand-drawn signal lines and creative system sketch",
  },
  {
    caseNo: "07",
    title: "Pipa AMT Evaluation",
    description: {
      en: "Automatic transcription evaluation for traditional pipa music",
      zh: "传统琵琶音乐自动转录系统评估",
    },
    role: {
      en: "Evaluates AMT systems for traditional pipa music and studies model adaptation on non-Western music data.",
      zh: "围绕传统琵琶音乐评估自动转录系统，关注非西方音乐数据中的模型适配问题。",
    },
    stack: ["Python", "AMT", "Evaluation"],
    github: "https://github.com/Arreb-01/pipa-amt-evaluation",
    accent: "blue",
    icon: "Pipa",
    image: "/images/project-on-call.svg",
    imageAlt: "Hand-drawn analysis assistant sketch",
  },
];

export const mediaProjects: Project[] = [
  selectedWorks[2],
  {
    caseNo: "08",
    title: "Shapeville",
    description: {
      en: "Interactive Java Swing app for geometry learning",
      zh: "几何学习 Java Swing 交互应用",
    },
    role: {
      en: "Breaks geometry concepts into small interactive tasks to lower the entry barrier for learning.",
      zh: "用小型交互练习把几何知识拆成可操作任务，降低学习入口难度。",
    },
    stack: ["Java", "Swing", "Education"],
    github: "https://github.com/Arreb-01/Shapeville",
    accent: "paper",
    icon: "Shape",
    image: "/images/project-circuit-hero.svg",
    imageAlt: "Hand-drawn geometric learning scene",
  },
  {
    caseNo: "09",
    title: "Li Brocade Mini Game",
    description: {
      en: "Web mini game about Li brocade intangible heritage",
      zh: "网页端非遗黎锦小游戏",
    },
    role: {
      en: "Turns Li brocade cultural content into lightweight web interaction that can be played and explored.",
      zh: "把非遗黎锦文化内容转译成轻量网页互动，让文化信息可以被玩和探索。",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Arreb-01/small-HTML-Game",
    accent: "paper",
    icon: "Play",
    image: "/images/project-rag-shopping.svg",
    imageAlt: "Hand-drawn interactive game collage",
  },
  {
    caseNo: "10",
    title: "Traditional Clothing Visualization",
    description: {
      en: "Information visualization site for traditional Chinese clothing",
      zh: "中国传统服饰信息可视化网站",
    },
    role: {
      en: "Presents traditional clothing materials through web visuals and information hierarchy, with clear browsing paths.",
      zh: "用网页视觉和信息组织方式呈现传统服饰资料，强调浏览路径和视觉层级。",
    },
    stack: ["HTML", "Visualization", "Digital Media"],
    github: "https://github.com/Arreb-01/-",
    accent: "paper",
    icon: "Viz",
    image: "/images/project-ai-sourcing.svg",
    imageAlt: "Hand-drawn visualization board collage",
  },
];

export const recognition: [string, LocalizedText][] = [
  [
    "Digital Art Therapy",
    {
      en: "Research on affective computing and dynamic audiovisual feedback",
      zh: "情绪计算与动态视听反馈研究",
    },
  ],
  [
    "Computer Design",
    {
      en: "Second Prize, Chinese Collegiate Computing Design Competition",
      zh: "全国大学生计算机设计大赛二等奖",
    },
  ],
  [
    "Digital Media",
    {
      en: "Third Prize, Digital Media Technology Works and Creative Competition",
      zh: "数媒科技作品及创意竞赛三等奖",
    },
  ],
  [
    "Math Modeling",
    {
      en: "Third Prize, Greater Bay Area Cup Financial Math Modeling",
      zh: "大湾区杯金融数学建模三等奖",
    },
  ],
] as const;
