export const profile = {
  name: "Suraj Khandbale",
  role: "Senior Frontend Engineer",
  location: "Pune, India",
  email: "surajkhandbale@gmail.com",
  phones: ["8554057290", "7972624283"],
  linkedin: "https://www.linkedin.com/in/suraj-khandbale-7b33ba14b",
  summary:
    "Senior Frontend Engineer with 6+ years building scalable, high-performance web applications with React, Next.js, Angular, and Vue. I translate Figma and Zeplin designs into responsive, accessible, pixel-perfect interfaces, with a focus on component-driven architecture, state management, and performance.",
  tagline: "6+ years shipping component-driven, accessible frontends — from Figma handoff through state management and API integration — across EdTech, fintech, and SaaS products.",
  resumeUrl: "/suraj-khandbale-resume.pdf",
} as const;

export const stack = [
  "React.js",
  "Next.js",
  "Angular 16",
  "Vue.js",
  "TypeScript",
  "Tailwind CSS",
] as const;

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Angular 16", "Vue.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    label: "UI & styling",
    items: ["Tailwind CSS", "Material UI", "Bootstrap 4/5", "SCSS / SASS", "Responsive design"],
  },
  {
    label: "State & data",
    items: ["TanStack Query", "Redux Toolkit", "REST APIs", "Axios"],
  },
  {
    label: "Design handoff",
    items: ["Figma", "Zeplin", "Design systems", "Component libraries", "Wireframing"],
  },
  {
    label: "Quality & performance",
    items: ["Cross-browser testing", "Lighthouse optimization", "Debugging", "Performance profiling"],
  },
  {
    label: "Accessibility",
    items: ["WCAG compliance", "Semantic HTML", "ARIA standards", "Keyboard navigation"],
  },
  {
    label: "Tooling",
    items: ["Git / GitHub", "VS Code", "Chrome DevTools", "Jira", "Agile / Scrum"],
  },
] as const;

export type Project = {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "lms",
    title: "Learning Management System",
    company: "HubbleHox",
    period: "2023 — Present",
    description:
      "Redesigned an enterprise LMS with a fully responsive architecture, rebuilding shared UI into reusable components to cut development effort across the platform.",
    tags: ["React.js", "Material UI", "Tailwind CSS", "TanStack Query"],
  },
  {
    id: "survey-builder",
    title: "Dynamic Survey Builder",
    company: "HubbleHox",
    period: "2023 — Present",
    description:
      "Built a multi-level survey platform with conditional logic, customizable workflows, and real-time previews for academic and non-academic survey teams.",
    tags: ["Angular 16", "Component architecture", "Real-time preview"],
  },
  {
    id: "staff-selection",
    title: "Hubble STAR™ (Smart Staff Selection)",
    company: "HubbleHox",
    period: "2023 — Present",
    description:
      "Frontend for a staff evaluation and selection workflow, built with reusable design patterns shared across the HubbleHox product suite.",
    tags: ["React.js", "Design systems"],
  },
  {
    id: "neetocode",
    title: "neetoCode & BigBinary Academy",
    company: "BigBinary",
    period: "2021 — 2023",
    description:
      "Contributed to two SaaS products serving thousands of users, improving usability, accessibility, and platform performance within a component-driven codebase.",
    tags: ["React.js", "Next.js", "Accessibility"],
  },
  {
    id: "investyadnya",
    title: "InvestYadnya",
    company: "JAWK Softwares",
    period: "2021",
    description:
      "A share-market education platform, built by translating Zeplin designs into responsive, high-fidelity, cross-browser-consistent interfaces.",
    tags: ["Responsive UI", "Zeplin to code", "Cross-browser"],
  },
  {
    id: "taxsutra",
    title: "Taxsutra Reservoir",
    company: "Webonise",
    period: "2019 — 2021",
    description:
      "A cross-publisher eBook platform for tax and legal professionals; optimized for a seamless reading experience across mobile and desktop.",
    tags: ["SCSS", "Bootstrap", "Responsive design"],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Sr. Frontend UI Developer",
    company: "HubbleHox Pvt Ltd",
    location: "Mumbai, India",
    period: "Nov 2023 — Present",
    bullets: [
      "Led frontend development of enterprise-grade applications using React.js, Angular 16, Material UI, and Tailwind CSS.",
      "Redesigned the LMS with a fully responsive architecture, improving usability across desktop, tablet, and mobile.",
      "Built reusable UI components and design patterns, reducing development effort across applications.",
      "Integrated TanStack Query for API caching and background sync, cutting redundant requests.",
      "Built a dynamic survey builder in Angular 16 with conditional logic and real-time previews.",
    ],
  },
  {
    role: "Software Engineer",
    company: "BigBinary",
    location: "Remote",
    period: "Jun 2021 — Sep 2023",
    bullets: [
      "Developed scalable frontend applications with React.js and Next.js for SaaS products serving thousands of users.",
      "Contributed to BigBinary Academy and neetoCode, improving UX, accessibility, and usability.",
      "Followed component-driven architecture, responsive design, and accessibility best practices in an Agile team.",
    ],
  },
  {
    role: "Software Engineer",
    company: "JAWK Softwares",
    location: "Pune, India",
    period: "Mar 2021 — May 2021",
    bullets: [
      "Built InvestYadnya, a share-market education platform, from Zeplin designs into responsive UI.",
      "Ensured cross-browser compatibility and mobile responsiveness across the platform.",
    ],
  },
  {
    role: "Frontend UI Developer",
    company: "Webonise Pvt Ltd",
    location: "Pune, India",
    period: "Dec 2019 — Mar 2021",
    bullets: [
      "Converted complex Zeplin wireframes into interactive, standards-compliant frontends for Taxsutra.",
      "Optimized Taxsutra Reservoir, a cross-publisher eBook platform, for responsive reading on any device.",
      "Built responsive pages for Webonise.com using HTML5, SCSS, Bootstrap, and jQuery.",
    ],
  },
  {
    role: "Frontend UI Developer (Intern)",
    company: "Spidrontech LLP",
    location: "Pune, India",
    period: "Apr 2018 — Feb 2019",
    bullets: [
      "Built responsive interfaces with Angular 6, HTML5, and CSS3 for Toquing, a French food-sharing platform.",
      "Created fully responsive pages from Figma designs for Colisdays, a traveller-shipper platform.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering, Computer Science",
    school: "Anantrao Pawar College of Engineering & Research, Pune",
    period: "2014 — 2017",
  },
  {
    degree: "Diploma, Computer Science",
    school: "Shri Chhatrapati Sambhajiraje Polytechnic, Pune",
    period: "2012 — 2014",
  },
];
