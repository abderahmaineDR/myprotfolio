export type NavItem = {
  id: string;
  label: string;
};

export type TechGroup = {
  category: string;
  items: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

export type Project = {
  id: string;
  title: string;
  tech: string;
  image: string;
  link: string;
  description: string;
};

export const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export const heroStats = [
  { value: "3+", label: "Years Experience" },
  { value: "7+", label: "Projects Delivered" },
  { value: "10K+", label: "Focused Hours" }
];

export const techGroups: TechGroup[] = [
  { category: "Frontend", items: ["React", "Next.js", "Tailwind", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs"] },
  { category: "Database", items: ["PostgreSQL", "Supabase"] },
  { category: "Tools", items: ["GSAP", "GitHub", "Vercel"] }
];

export const experiences: Experience[] = [
  {
    company: "Strativ AB",
    role: "Software Engineer (Frontend)",
    period: "Dec 2024 - Present",
    summary:
      "Lead frontend architecture for product surfaces with reusable systems, high interaction quality, and performance-first delivery."
  },
  {
    company: "Digital Studio",
    role: "Frontend Developer",
    period: "2022 - 2024",
    summary:
      "Built conversion-focused websites and internal dashboards with clear UX hierarchy and polished motion design."
  },
  {
    company: "Freelance",
    role: "Frontend Engineer",
    period: "2021 - 2022",
    summary:
      "Shipped branded portfolio and SaaS landing pages for founders with clean component architecture and scalable styling."
  }
];

export const projects: Project[] = [
  {
    id: "01",
    title: "Electro EV",
    tech: "Next.js / Tailwind / Headless CMS",
    image: "/project-insight.svg",
    link: "#",
    description: "High-conversion EV platform with strong content hierarchy and editorial flexibility."
  },
  {
    id: "02",
    title: "Insight Dashboard",
    tech: "Next.js / TypeScript / Framer Motion",
    image: "/project-commerce.svg",
    link: "#",
    description: "Analytics experience with advanced filtering, smooth transitions, and polished table interactions."
  },
  {
    id: "03",
    title: "Motion Portfolio",
    tech: "React / GSAP / Vercel",
    image: "/project-motion.svg",
    link: "#",
    description: "Story-driven portfolio with parallax depth, refined pacing, and premium UI micro-interactions."
  },
  {
    id: "04",
    title: "MAB Portfolio",
    tech: "Next.js / TypeScript / Framer Motion",
    image: "/project-mab-portfolio.png",
    link: "#",
    description: "Minimal dark-themed personal website with multilingual navigation and a clear, focused hero section."
  }
];
