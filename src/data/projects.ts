import type { LocalizedText, ProjectFilter } from "./content";

export type Accent = "blue" | "yellow" | "pink" | "red" | "mint" | "paper";

export type CaseFile = {
  summary: LocalizedText;
  background: LocalizedText;
  role: LocalizedText;
  method: LocalizedText;
  result: LocalizedText;
};

export type Project = {
  id: string;
  caseNo: string;
  title: string;
  category: Exclude<ProjectFilter, "all">;
  description: LocalizedText;
  role: LocalizedText;
  problem: LocalizedText;
  built: LocalizedText;
  impact: LocalizedText;
  stack: string[];
  tags: string[];
  github?: string;
  accent: Accent;
  icon: string;
  image: string;
  imageAlt: string;
  caseFile?: CaseFile;
};

export const allProjects: Project[] = [
  {
    id: "on-call-agent",
    caseNo: "01",
    title: "On-Call Agent",
    category: "ai-tools",
    description: {
      en: "Intelligent on-call and incident response assistant",
      zh: "智能值班与事件响应助手",
    },
    role: {
      en: "Turns troubleshooting SOPs into a traceable workflow across retrieval, semantic recall, and agent dialogue.",
      zh: "把故障排查 SOP 拆成检索、语义召回和 Agent 对话三段流程，让值班响应更可追踪。",
    },
    problem: {
      en: "Incident response notes were scattered across SOPs, chat history, and repeated manual checks.",
      zh: "值班响应信息分散在 SOP、聊天记录和重复手动排查中，难以快速复用。",
    },
    built: {
      en: "A traceable incident workflow with BGE retrieval, semantic recall, SSE updates, and function-calling dialogue.",
      zh: "构建包含 BGE 检索、语义召回、SSE 更新和函数调用对话的可追踪响应流程。",
    },
    impact: {
      en: "Made each answer easier to audit by connecting suggestions back to sources and workflow steps.",
      zh: "让每次建议都能回到来源和流程节点，便于复盘与审查。",
    },
    stack: ["FastAPI", "BGE", "SSE", "Function Calling"],
    tags: ["AI Ops", "RAG", "Workflow"],
    github: "https://github.com/Arreb-01/On-Call-Agent",
    accent: "blue",
    icon: "Bot",
    image: "/images/project-on-call.svg",
    imageAlt: "Hand-drawn bot answering an incident chat bubble",
    caseFile: {
      summary: {
        en: "An AI incident assistant that turns retrieval, semantic recall, and dialogue into an auditable response loop.",
        zh: "一个把检索、语义召回与对话串成可审查响应闭环的 AI 值班助手。",
      },
      background: {
        en: "On-call scenarios need speed, but they also need evidence. The project starts from SOP-heavy troubleshooting and makes the response path visible.",
        zh: "值班场景需要速度，也需要证据。项目从 SOP 密集型排障出发，让响应路径变得可见。",
      },
      role: {
        en: "Designed the product flow, structured retrieval steps, and shaped the assistant response pattern for reviewable decisions.",
        zh: "设计产品流程、拆分检索步骤，并塑造可复盘的助手响应模式。",
      },
      method: {
        en: "Combined BGE retrieval, semantic recall, streaming feedback, and function calling so the assistant can guide work instead of only answering.",
        zh: "结合 BGE 检索、语义召回、流式反馈和函数调用，让助手不仅回答问题，也能引导排障流程。",
      },
      result: {
        en: "A demo-ready system where suggestions can be checked against sources, steps, and prior context.",
        zh: "形成一个可演示系统，建议可以按来源、步骤和上下文进行核验。",
      },
    },
  },
  {
    id: "ai-sourcing",
    caseNo: "02",
    title: "AI Sourcing",
    category: "ai-tools",
    description: {
      en: "AI-powered supplier discovery and evaluation platform",
      zh: "AI 驱动的供应商发现与评估平台",
    },
    role: {
      en: "Connects lead search, web extraction, information parsing, and team delivery into one automated evaluation pipeline.",
      zh: "把线索搜索、网页抓取、信息抽取和团队推送连成一条自动化评估管线。",
    },
    problem: {
      en: "Supplier discovery required slow manual research, repeated website reading, and inconsistent evaluation notes.",
      zh: "供应商发现依赖慢速人工调研、重复网页阅读和不一致的评估记录。",
    },
    built: {
      en: "An automated sourcing pipeline across OpenClaw, Bright Data, GLM parsing, and Feishu Bot delivery.",
      zh: "构建跨 OpenClaw、Bright Data、GLM 解析和飞书 Bot 推送的自动化寻源管线。",
    },
    impact: {
      en: "Converted fragmented research into a repeatable evaluation flow that can be handed to a team.",
      zh: "把零散调研转化为可复用、可交付给团队的评估流程。",
    },
    stack: ["OpenClaw", "Bright Data", "GLM", "Feishu Bot"],
    tags: ["Automation", "Product Ops", "Extraction"],
    accent: "mint",
    icon: "Search",
    image: "/images/project-ai-sourcing.svg",
    imageAlt: "Hand-drawn supplier cards under a magnifying glass",
    caseFile: {
      summary: {
        en: "A supplier intelligence workflow that moves from lead search to structured team delivery.",
        zh: "一个从线索搜索走到结构化团队交付的供应商智能工作流。",
      },
      background: {
        en: "Supplier research is valuable only when it becomes comparable evidence, not a pile of pages.",
        zh: "供应商调研只有转化成可比较证据才有价值，而不是停留在一堆网页材料。",
      },
      role: {
        en: "Mapped the sourcing journey, selected automation points, and organized the final delivery shape for team use.",
        zh: "梳理寻源旅程、选择自动化节点，并组织面向团队使用的交付形态。",
      },
      method: {
        en: "Linked search, web extraction, LLM parsing, and Feishu delivery into one pipeline with consistent evaluation fields.",
        zh: "将搜索、网页抽取、大模型解析与飞书推送连接成一条包含统一评估字段的流程。",
      },
      result: {
        en: "Reduced the distance between raw online research and a usable supplier shortlist.",
        zh: "缩短从线上原始调研到可用供应商候选列表之间的距离。",
      },
    },
  },
  {
    id: "circuit-hero",
    caseNo: "03",
    title: "Circuit Hero",
    category: "interactive-media",
    description: {
      en: "Circuit knowledge graph and learning assistant",
      zh: "电路知识图谱与学习助手",
    },
    role: {
      en: "Translates circuit knowledge graphs into a story-driven web game with level feedback for abstract concepts.",
      zh: "将电路知识图谱转译成剧情式网页游戏，用闯关反馈帮助青少年理解抽象概念。",
    },
    problem: {
      en: "Circuit concepts can feel abstract before learners see relationships, feedback, and consequences.",
      zh: "电路概念在学习者看到关系、反馈和结果之前，很容易显得抽象。",
    },
    built: {
      en: "A story-driven learning game that turns circuit knowledge into levels, feedback, and visible progression.",
      zh: "构建剧情式学习游戏，把电路知识转化为关卡、反馈和可见进度。",
    },
    impact: {
      en: "Made technical knowledge easier to approach through interaction instead of static explanation.",
      zh: "让技术知识通过交互而不是静态讲解变得更容易进入。",
    },
    stack: ["JavaScript", "Game UX", "Education"],
    tags: ["Learning", "Game UX", "Knowledge Graph"],
    github: "https://github.com/Arreb-01/circuit-hero",
    accent: "pink",
    icon: "Circuit",
    image: "/images/project-circuit-hero.svg",
    imageAlt: "Hand-drawn robot cube flying over circuit traces",
  },
  {
    id: "rag-shopping-guide",
    caseNo: "04",
    title: "RAG Shopping Guide",
    category: "ai-tools",
    description: {
      en: "RAG-based shopping decision guide",
      zh: "基于 RAG 的购物决策指南",
    },
    role: {
      en: "Builds a demo-ready shopping Q&A prototype with Android, FastAPI, Chroma, and large language models.",
      zh: "用 Android、FastAPI、Chroma 和大模型构建可演示的导购问答原型。",
    },
    problem: {
      en: "Shopping decisions need specific product evidence instead of generic model advice.",
      zh: "购物决策需要具体商品证据，而不是泛泛的大模型建议。",
    },
    built: {
      en: "A RAG shopping Q&A prototype with a mobile client, vector retrieval, and answer grounding.",
      zh: "构建包含移动端、向量检索和答案溯源的 RAG 导购问答原型。",
    },
    impact: {
      en: "Showed how retrieval can make consumer-facing AI advice more concrete and inspectable.",
      zh: "展示检索如何让面向消费者的 AI 建议更具体、更可检查。",
    },
    stack: ["RAG", "FastAPI", "Chroma", "Android"],
    tags: ["RAG", "Mobile", "Shopping"],
    github: "https://github.com/Arreb-01/ragshopguide",
    accent: "yellow",
    icon: "Cart",
    image: "/images/project-rag-shopping.svg",
    imageAlt: "Hand-drawn shopping cart with search and chat bubbles",
  },
  {
    id: "campus-ai-learning-assistant",
    caseNo: "05",
    title: "Campus AI Learning Assistant",
    category: "product-research",
    description: {
      en: "AI assistant for campus learning scenarios",
      zh: "校园学习场景 AI 助手",
    },
    role: {
      en: "Uses 300+ survey responses to refine needs, prompt structure, memory behavior, and mistake-book features.",
      zh: "基于 300+ 问卷反馈收敛需求，迭代 prompt 架构、记忆机制和错题本功能。",
    },
    problem: {
      en: "Students wanted learning support, but the feature set needed evidence before becoming a product direction.",
      zh: "学生需要学习支持，但功能方向需要先有用户证据再进入产品定义。",
    },
    built: {
      en: "A product research loop using 300+ survey responses to shape prompt structure, memory, and mistake-book behavior.",
      zh: "基于 300+ 份问卷建立产品研究闭环，收敛 prompt、记忆和错题本功能。",
    },
    impact: {
      en: "Turned scattered learning needs into a clearer AI tutor product hypothesis.",
      zh: "把分散的学习需求转化为更清晰的 AI 学习助手产品假设。",
    },
    stack: ["Prompt Design", "Product Research", "AI Tutor"],
    tags: ["Survey", "AI Tutor", "Product"],
    accent: "pink",
    icon: "Study",
    image: "/images/project-ai-sourcing.svg",
    imageAlt: "Hand-drawn research cards and evaluation marks",
    caseFile: {
      summary: {
        en: "A user-evidence-led AI tutor concept shaped by 300+ campus learning survey responses.",
        zh: "一个由 300+ 份校园学习问卷驱动的 AI 学习助手概念。",
      },
      background: {
        en: "Campus AI tools can easily become generic chatbots unless they are grounded in real student routines.",
        zh: "校园 AI 工具如果不扎根真实学生场景，很容易变成泛用聊天机器人。",
      },
      role: {
        en: "Collected and interpreted needs, then translated them into prompt, memory, and mistake-book product decisions.",
        zh: "收集并解读需求，再把它们转译为 prompt、记忆和错题本功能决策。",
      },
      method: {
        en: "Used survey patterns to prioritize scenarios, define assistant behavior, and reduce vague feature ideas.",
        zh: "利用问卷模式确定场景优先级、定义助手行为，并压缩模糊功能想法。",
      },
      result: {
        en: "A clearer AI tutor direction that connects product features to student evidence.",
        zh: "形成更清晰的 AI 学习助手方向，让功能与学生证据建立联系。",
      },
    },
  },
  {
    id: "jiugong-melody-generation",
    caseNo: "06",
    title: "JiuGong Melody Generation",
    category: "music-ml",
    description: {
      en: "Lyric-driven melody prediction experiment",
      zh: "歌词驱动旋律预测实验",
    },
    role: {
      en: "Explores melody generation with the JiuGong dataset and frames music information retrieval as part of the AI/ML portfolio.",
      zh: "基于九宫大成数据集探索旋律生成，把音乐信息处理纳入 AI/ML 项目集合。",
    },
    problem: {
      en: "Melody prediction needs a bridge between lyric structure, music features, and model evaluation.",
      zh: "旋律预测需要连接歌词结构、音乐特征和模型评估。",
    },
    built: {
      en: "A music ML experiment that uses lyric-driven features to explore melody prediction behavior.",
      zh: "构建歌词驱动特征的音乐机器学习实验，探索旋律预测行为。",
    },
    impact: {
      en: "Added a model-evaluation project to the portfolio beyond application-only AI systems.",
      zh: "让作品集不仅有应用型 AI 系统，也包含模型评估型项目。",
    },
    stack: ["Python", "Music IR", "ML"],
    tags: ["Music IR", "Evaluation", "ML"],
    github: "https://github.com/Arreb-01/jiugong-melody-generation",
    accent: "red",
    icon: "Wave",
    image: "/images/project-circuit-hero.svg",
    imageAlt: "Hand-drawn signal lines and creative system sketch",
  },
  {
    id: "pipa-amt-evaluation",
    caseNo: "07",
    title: "Pipa AMT Evaluation",
    category: "music-ml",
    description: {
      en: "Automatic transcription evaluation for traditional pipa music",
      zh: "传统琵琶音乐自动转录系统评估",
    },
    role: {
      en: "Evaluates AMT systems for traditional pipa music and studies model adaptation on non-Western music data.",
      zh: "围绕传统琵琶音乐评估自动转录系统，关注非西方音乐数据中的模型适配问题。",
    },
    problem: {
      en: "Music transcription systems often underperform when the data is traditional and non-Western.",
      zh: "当数据来自传统非西方音乐时，自动转录系统往往表现不稳定。",
    },
    built: {
      en: "An AMT evaluation workflow for pipa music that compares model behavior on domain-specific material.",
      zh: "构建面向琵琶音乐的 AMT 评估流程，比较模型在领域材料上的表现。",
    },
    impact: {
      en: "Highlighted the need to evaluate AI systems beyond mainstream Western datasets.",
      zh: "强调 AI 系统需要在主流西方数据集之外进行评估。",
    },
    stack: ["Python", "AMT", "Evaluation"],
    tags: ["AMT", "Pipa", "Evaluation"],
    github: "https://github.com/Arreb-01/pipa-amt-evaluation",
    accent: "blue",
    icon: "Pipa",
    image: "/images/project-on-call.svg",
    imageAlt: "Hand-drawn analysis assistant sketch",
  },
  {
    id: "shapeville",
    caseNo: "08",
    title: "Shapeville",
    category: "interactive-media",
    description: {
      en: "Interactive Java Swing app for geometry learning",
      zh: "几何学习 Java Swing 交互应用",
    },
    role: {
      en: "Breaks geometry concepts into small interactive tasks to lower the entry barrier for learning.",
      zh: "用小型交互练习把几何知识拆成可操作任务，降低学习入口难度。",
    },
    problem: {
      en: "Geometry learning becomes harder when learners cannot manipulate concepts directly.",
      zh: "如果学习者不能直接操作概念，几何学习会变得更困难。",
    },
    built: {
      en: "A Java Swing learning app with small interactive tasks around geometry concepts.",
      zh: "构建围绕几何概念的小型 Java Swing 交互学习应用。",
    },
    impact: {
      en: "Lowered the first-step barrier by turning abstract shapes into hands-on tasks.",
      zh: "把抽象图形转成动手任务，降低学习入口难度。",
    },
    stack: ["Java", "Swing", "Education"],
    tags: ["Education", "Interaction", "Java"],
    github: "https://github.com/Arreb-01/Shapeville",
    accent: "paper",
    icon: "Shape",
    image: "/images/project-circuit-hero.svg",
    imageAlt: "Hand-drawn geometric learning scene",
  },
  {
    id: "li-brocade-mini-game",
    caseNo: "09",
    title: "Li Brocade Mini Game",
    category: "interactive-media",
    description: {
      en: "Web mini game about Li brocade intangible heritage",
      zh: "网页端非遗黎锦小游戏",
    },
    role: {
      en: "Turns Li brocade cultural content into lightweight web interaction that can be played and explored.",
      zh: "把非遗黎锦文化内容转译成轻量网页互动，让文化信息可以被玩和探索。",
    },
    problem: {
      en: "Cultural information is often displayed as static text instead of a memorable interaction.",
      zh: "文化信息常常被静态陈列，而不是形成有记忆点的交互。",
    },
    built: {
      en: "A lightweight web game that makes Li brocade culture playable and explorable.",
      zh: "构建轻量网页小游戏，让黎锦文化内容可以被玩和探索。",
    },
    impact: {
      en: "Turned heritage content into an approachable digital experience.",
      zh: "把非遗内容转化为更易接近的数字体验。",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    tags: ["Culture", "Game", "Web"],
    github: "https://github.com/Arreb-01/small-HTML-Game",
    accent: "paper",
    icon: "Play",
    image: "/images/project-rag-shopping.svg",
    imageAlt: "Hand-drawn interactive game collage",
  },
  {
    id: "traditional-clothing-visualization",
    caseNo: "10",
    title: "Traditional Clothing Visualization",
    category: "interactive-media",
    description: {
      en: "Information visualization site for traditional Chinese clothing",
      zh: "中国传统服饰信息可视化网站",
    },
    role: {
      en: "Presents traditional clothing materials through web visuals and information hierarchy, with clear browsing paths.",
      zh: "用网页视觉和信息组织方式呈现传统服饰资料，强调浏览路径和视觉层级。",
    },
    problem: {
      en: "Traditional clothing materials need a clearer visual hierarchy for browsing and comparison.",
      zh: "传统服饰资料需要更清晰的视觉层级来支持浏览与比较。",
    },
    built: {
      en: "An information visualization site with organized browsing paths for clothing material.",
      zh: "构建信息可视化网站，用清晰路径组织服饰资料。",
    },
    impact: {
      en: "Made archival cultural material easier to scan and understand on the web.",
      zh: "让档案式文化资料在网页上更易浏览和理解。",
    },
    stack: ["HTML", "Visualization", "Digital Media"],
    tags: ["Visualization", "Culture", "Web"],
    github: "https://github.com/Arreb-01/-",
    accent: "paper",
    icon: "Viz",
    image: "/images/project-ai-sourcing.svg",
    imageAlt: "Hand-drawn visualization board collage",
  },
];

export const selectedWorkIds = [
  "on-call-agent",
  "ai-sourcing",
  "circuit-hero",
  "rag-shopping-guide",
] as const;

export const mediaProjectIds = [
  "circuit-hero",
  "shapeville",
  "li-brocade-mini-game",
  "traditional-clothing-visualization",
] as const;

export const selectedWorks = allProjects.filter((project) =>
  selectedWorkIds.includes(project.id as (typeof selectedWorkIds)[number]),
);

export const mediaProjects = allProjects.filter((project) =>
  mediaProjectIds.includes(project.id as (typeof mediaProjectIds)[number]),
);

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
