import type {
  Achievement,
  Certificate,
  Education,
  Experience,
  Language,
  Metric,
  ProcessStep,
  Project,
  Skill,
} from "@/types/portfolio";

export const heroContent = {
  greeting: "Senior Frontend Engineer",
  name: "Ashu Tyagi",
  tagline:
    "Designing and developing scalable, responsive, and high-performance web applications with React.js, Next.js, and TypeScript — backed by 10+ years of frontend engineering expertise.",
  expertise: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Design Systems",
    "UI Architecture",
    "Core Web Vitals",
    "WCAG Accessibility",
    "AI-Assisted Dev",
  ],
  cta: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Download Resume", href: "#resume" },
  },
};

export const aboutContent = {
  subtitle: "Senior Frontend Engineer building scalable, high-performance UI",
  intro:
    "I'm Ashu Tyagi — a Senior Frontend Engineer based in Delhi/NCR with 10+ years designing and developing enterprise web applications.",
  paragraphs: [
    "Senior Frontend Engineer with 10+ years of experience designing and developing scalable, responsive, and high-performance web applications. Specialized in React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, and SCSS with over 6 years of expertise in modern frontend development.",
    "Experienced in UI Architecture, Design Systems, reusable component libraries, frontend performance optimization, Core Web Vitals, accessibility (WCAG), and responsive design. Skilled at translating Figma designs into production-ready applications.",
    "I leverage AI tools including Cursor AI, Claude AI, and ChatGPT to improve coding, debugging, documentation, and development productivity — while maintaining engineering quality and design system standards.",
  ],
  currentRole: {
    title: "Senior Software Engineer",
    company: "Apollo 24|7",
    period: "Nov 2020 — Present",
  },
  focusAreas: [
    "UI Architecture",
    "Design Systems",
    "Component Libraries",
    "Figma-to-Code",
    "Core Web Vitals",
    "WCAG Accessibility",
    "TypeScript",
    "AI-Assisted Development",
  ],
  stats: [
    { label: "Years Experience", value: 10, suffix: "+" },
    { label: "React.js Experience", value: 6, suffix: "+ yrs" },
    { label: "Lighthouse Score", value: 90, suffix: "+" },
    { label: "Load Time Saved", value: 50, suffix: "%" },
  ],
};

export const coreExpertise = [
  "UI Engineering",
  "React.js",
  "Next.js",
  "Frontend Architecture",
  "Design System Architecture",
  "Component Libraries",
  "Storybook",
  "Figma to Code",
  "Responsive Design",
  "HTML5",
  "CSS3",
  "SCSS",
  "Accessibility (WCAG)",
  "Performance Optimization",
  "Core Web Vitals",
  "Technical SEO",
  "Reusable UI Components",
];

export const skills: Skill[] = [
  { name: "React.js", category: "Frontend", level: 95 },
  { name: "Next.js", category: "Frontend", level: 93 },
  { name: "JavaScript (ES6+)", category: "Frontend", level: 94 },
  { name: "TypeScript", category: "Frontend", level: 92 },
  { name: "HTML5", category: "Frontend", level: 95 },
  { name: "CSS3", category: "Frontend", level: 94 },
  { name: "SCSS", category: "Styling & UI", level: 94 },
  { name: "CSS Modules", category: "Styling & UI", level: 92 },
  { name: "Bootstrap", category: "Styling & UI", level: 88 },
  { name: "Responsive UI", category: "Styling & UI", level: 95 },
  { name: "Design Systems", category: "Styling & UI", level: 93 },
  { name: "Component-Driven Dev", category: "Architecture", level: 94 },
  { name: "Reusable UI Libraries", category: "Architecture", level: 93 },
  { name: "REST API Integration", category: "Architecture", level: 90 },
  { name: "Core Web Vitals", category: "Performance", level: 92 },
  { name: "Lazy Loading", category: "Performance", level: 91 },
  { name: "Code Splitting", category: "Performance", level: 90 },
  { name: "WCAG / A11y", category: "Performance", level: 92 },
  { name: "Technical SEO", category: "Performance", level: 86 },
  { name: "Git", category: "Tools & Workflow", level: 90 },
  { name: "Webpack", category: "Tools & Workflow", level: 85 },
  { name: "Vite", category: "Tools & Workflow", level: 88 },
  { name: "Lighthouse", category: "Tools & Workflow", level: 91 },
  { name: "Figma", category: "Tools & Workflow", level: 92 },
  { name: "Cursor AI", category: "Tools & Workflow", level: 90 },
  { name: "Claude AI", category: "Tools & Workflow", level: 88 },
  { name: "ChatGPT", category: "Tools & Workflow", level: 88 },
];

export const skillCategories = [
  "Frontend",
  "Styling & UI",
  "Architecture",
  "Performance",
  "Tools & Workflow",
] as const;

export const experiences: Experience[] = [
  {
    company: "Apollo 24|7",
    role: "Senior Software Engineer",
    period: "Nov 2020 — Present",
    location: "India",
    highlights: [
      "Developed scalable and responsive enterprise web applications using React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3, and SCSS",
      "Improved website performance — reduced page load time from 6 seconds to 3 seconds with 90+ Lighthouse/PageSpeed scores",
      "Optimized Core Web Vitals (LCP, CLS, FCP) using code splitting, lazy loading, image optimization, and rendering improvements",
      "Designed and developed reusable UI components and shared component libraries for consistency and maintainability",
      "Translated Figma designs into pixel-perfect, accessible, reusable React components following Design System principles",
      "Worked with Product Managers, UX Designers, and Developers to build responsive, accessible (WCAG), pixel-perfect interfaces",
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "SCSS", "Figma", "Storybook"],
  },
  {
    company: "Builder.ai",
    role: "Software Engineer",
    period: "Jun 2019 — Nov 2020",
    location: "India",
    highlights: [
      "Developed scalable Angular-based SaaS interfaces supporting cross-browser compatibility across large-scale user environments",
      "Engineered reusable frontend components and optimized SCSS architecture for maintainable UI systems",
      "Improved frontend performance by reducing DOM complexity and eliminating render-blocking resources",
      "Collaborated on frontend architecture and performance improvements",
    ],
    technologies: ["Angular", "SCSS", "HTML5", "CSS3", "JavaScript"],
  },
  {
    company: "Agan Technology (HCL)",
    role: "Software Engineer",
    period: "Dec 2018 — Jun 2019",
    location: "India",
    highlights: [
      "Engineered UI for T-Mobile order management system — enterprise B2B platform",
      "Built Angular-based reusable UI components and integrated APIs",
      "Reduced enterprise application load time from 20s to 4s through performance optimization",
      "Diagnosed and resolved 80%+ frontend performance bottlenecks",
      "Improved frontend architecture and maintainability",
    ],
    technologies: ["Angular", "HTML5", "SCSS", "JavaScript", "REST APIs"],
  },
  {
    company: "Satya Infosys (NSF India)",
    role: "UI/UX Developer",
    period: "Jul 2018 — Dec 2018",
    location: "India",
    highlights: [
      "Developed responsive UI layouts using HTML5, CSS3, and JavaScript",
      "Implemented modern UI/UX practices and frontend standards",
      "Built maintainable frontend structures with optimized styling",
      "Worked on accessibility and frontend performance best practices",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
  },
  {
    company: "Optimise Media Group",
    role: "Web Developer",
    period: "Jul 2017 — Feb 2018",
    location: "India",
    highlights: [
      "Developed responsive web pages, reducing page load time by 40% and improving mobile performance scores to 90+",
      "Ensured cross-browser compatibility and responsive consistency",
      "Translated design mockups into responsive, pixel-perfect web interfaces",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
  {
    company: "Nextspace Technologies",
    role: "UI Developer",
    period: "Jul 2014 — Jul 2017",
    location: "Delhi, India",
    highlights: [
      "Designed UI wireframes and refined user experience, reducing usability issues and improving user journey flow",
      "Crafted responsive, pixel-perfect interfaces ensuring consistency across devices and screen sizes",
      "Received Outstanding Contribution recognition (Jun 2014 — Jul 2017)",
      "Worked closely with UI/UX teams on frontend implementation",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Wireframing", "UI/UX"],
  },
];

export const projects: Project[] = [
  {
    id: "apollo-247",
    title: "Apollo 24|7 Healthcare Platform",
    company: "Apollo Hospitals",
    description:
      "Large-scale healthcare platform built with React.js, Next.js, and SCSS — focused on reusable UI components, design systems, and production-scale performance.",
    highlights: [
      "Improved Core Web Vitals and frontend performance at production scale",
      "Designed and developed reusable UI components integrated with scalable design systems",
      "Optimized rendering performance and reduced page load time (6s → 3s)",
      "Achieved 90+ Lighthouse/PageSpeed scores across modules",
    ],
    metrics: [
      { label: "Load Time", value: "6s → 3s" },
      { label: "Lighthouse", value: "90+" },
      { label: "Stack", value: "React + Next" },
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "SCSS", "Figma"],
  },
  {
    id: "builder-ai",
    title: "Builder.ai SaaS Platform",
    company: "Builder.ai",
    description:
      "Scalable Angular-based SaaS interfaces with reusable frontend components and optimized SCSS architecture for large-scale user environments.",
    highlights: [
      "Developed scalable Angular-based SaaS interfaces with cross-browser compatibility",
      "Engineered reusable frontend components and optimized SCSS architecture",
      "Reduced DOM complexity and eliminated render-blocking resources",
      "Improved frontend maintainability through modular component structure",
    ],
    metrics: [
      { label: "Platform", value: "SaaS" },
      { label: "Focus", value: "Performance" },
      { label: "Stack", value: "Angular + SCSS" },
    ],
    technologies: ["Angular", "SCSS", "HTML5", "CSS3", "JavaScript"],
  },
  {
    id: "tmobile-portal",
    title: "T-Mobile B2B Portal",
    company: "T-Mobile (via Agan Technology / HCL)",
    description:
      "Enterprise order management platform UI — Angular-based reusable components with dramatic load time and performance improvements.",
    highlights: [
      "Engineered UI for T-Mobile order management system",
      "Built Angular-based reusable UI components and integrated APIs",
      "Reduced enterprise application load time from 20s to 4s",
      "Diagnosed and resolved 80%+ frontend performance bottlenecks",
    ],
    metrics: [
      { label: "Load Time", value: "20s → 4s" },
      { label: "Bottlenecks", value: "80%+" },
      { label: "Stack", value: "Angular UI" },
    ],
    technologies: ["Angular", "HTML5", "SCSS", "JavaScript", "REST APIs"],
  },
];

export const achievements: Achievement[] = [
  {
    title: "Outstanding Contribution",
    organization: "Nextspace Technology Pvt Ltd",
    period: "Jun 2014 — Jul 2017",
    highlights: [
      "Recognized for exceptional UI development and design contribution",
      "Designed UI wireframes and refined user experience, improving user journey flow",
      "Crafted responsive, pixel-perfect interfaces across devices and screen sizes",
    ],
  },
  {
    title: "Performance — T-Mobile B2B Portal",
    organization: "Agan Technology (HCL)",
    period: "Dec 2018 — Jun 2019",
    highlights: [
      "Reduced enterprise application load time from 20 seconds to 4 seconds",
      "Diagnosed and resolved 80%+ frontend performance bottlenecks",
      "Built reusable Angular-based UI components at enterprise scale",
    ],
  },
  {
    title: "Lighthouse & Mobile Performance",
    organization: "Apollo 24|7 / Optimise Media Group",
    period: "2017 — Present",
    highlights: [
      "Achieved 90+ Lighthouse/PageSpeed scores on optimized applications",
      "Reduced page load time from 6s to 3s at Apollo 24|7",
      "Improved mobile performance scores to 90+ at Optimise Media Group",
      "Reduced page load time by 40% through frontend optimization",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "IGNOU",
    period: "2008",
    detail: "Bachelor's degree in Computer Applications",
  },
  {
    degree: "AAASP Certification",
    institution: "Arena Animation Academy, Delhi",
    detail: "Design & frontend development professional training",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Arena Animation Academy (AAASP)",
    institution: "Arena Animation Academy, Delhi",
    highlights: [
      "Built responsive UI layouts using HTML5, CSS3, and JavaScript",
      "Developed real-world web interfaces following modern UI/UX practices",
      "Applied web standards, accessibility, and performance best practices",
    ],
  },
];

export const languages: Language[] = [
  { name: "Hindi", proficiency: "Native" },
  { name: "English", proficiency: "Professional" },
];

export const performanceMetrics: Metric[] = [
  {
    label: "Lighthouse Score",
    value: 90,
    suffix: "+",
    description: "Achieved 90+ Lighthouse/PageSpeed scores on optimized applications",
  },
  {
    label: "Load Time (Apollo)",
    value: 50,
    suffix: "%",
    description: "Reduced page load time from 6 seconds to 3 seconds",
  },
  {
    label: "Load Time (T-Mobile)",
    value: 80,
    suffix: "%",
    description: "Reduced enterprise application load time from 20s to 4s",
  },
  {
    label: "Bottlenecks Resolved",
    value: 80,
    suffix: "%+",
    description: "Diagnosed and resolved major frontend performance bottlenecks",
  },
  {
    label: "Mobile Performance",
    value: 90,
    suffix: "+",
    description: "Improved mobile performance scores to 90+",
  },
  {
    label: "Page Load Improved",
    value: 40,
    suffix: "%",
    description: "Optimise Media Group — responsive web page optimization",
  },
];

export const accessibilityFeatures = [
  {
    title: "WCAG Compliance",
    description:
      "Built responsive, accessible (WCAG) and pixel-perfect user interfaces in collaboration with UX designers and product teams.",
  },
  {
    title: "Semantic HTML5",
    description:
      "Structured applications with HTML5 semantic elements, proper landmark regions, and heading hierarchy for screen readers.",
  },
  {
    title: "Keyboard Navigation",
    description:
      "Full tab order, focus management, skip links, and visible focus indicators meeting WCAG 2.1 AA standards.",
  },
  {
    title: "Cross-Browser Compatibility",
    description:
      "Developed scalable interfaces with cross-browser compatibility across large-scale enterprise user environments.",
  },
  {
    title: "Reduced Motion",
    description:
      "All animations respect prefers-reduced-motion with instant fallbacks for vestibular accessibility.",
  },
  {
    title: "Responsive & Inclusive",
    description:
      "Translated Figma designs into pixel-perfect, accessible, reusable React components for all device form factors.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Figma Design",
    description:
      "Collaborate with UX designers and Product Managers to review Figma designs and component specifications.",
    tools: ["Figma", "Dev Mode", "Design Reviews"],
  },
  {
    step: 2,
    title: "Design System",
    description:
      "Apply Design System principles — SCSS architecture, CSS Modules, and token-based styling for consistency.",
    tools: ["SCSS", "CSS Modules", "Design Tokens"],
  },
  {
    step: 3,
    title: "Components",
    description:
      "Build reusable React/Next.js components with TypeScript, component-driven development, and variant APIs.",
    tools: ["React.js", "Next.js", "TypeScript"],
  },
  {
    step: 4,
    title: "Storybook",
    description:
      "Document component states, interactions, and accessibility notes in isolated Storybook stories.",
    tools: ["Storybook", "Component Docs", "A11y Addon"],
  },
  {
    step: 5,
    title: "Integration",
    description:
      "Integrate components with REST APIs, code splitting, lazy loading, and rendering optimizations.",
    tools: ["REST APIs", "Code Splitting", "Lazy Loading"],
  },
  {
    step: 6,
    title: "Performance & AI",
    description:
      "Validate Core Web Vitals, Lighthouse scores, WCAG compliance — leverage AI tools for productivity.",
    tools: ["Lighthouse", "WCAG Audit", "Cursor AI", "Claude AI"],
  },
];

export const experienceSummary = [
  "Developed scalable and responsive enterprise web applications using React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3, and SCSS",
  "Improved website performance by reducing page load time from 6 seconds to 3 seconds and achieving 90+ Lighthouse/PageSpeed scores",
  "Optimized Core Web Vitals (LCP, CLS, FCP) using code splitting, lazy loading, image optimization, and rendering improvements",
  "Designed and developed reusable UI components and shared component libraries to improve consistency and maintainability",
  "Worked with Product Managers, UX Designers, and Developers to build responsive, accessible (WCAG), pixel-perfect interfaces",
  "Translated Figma designs into pixel-perfect, accessible, reusable React components following Design System principles",
  "Used Cursor AI, Claude AI, and ChatGPT to improve coding, debugging, documentation, and development productivity",
];
