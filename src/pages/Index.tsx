import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import SkillsTechnologiesShowcase from "@/components/SkillsTechnologiesShowcase";
import abdouImage from "@/assets/abdou.jpg";
import project1Image from "@/assets/project-1.jpg";
import project2Image from "@/assets/project-2.jpg";

const Index = () => {
  const { t } = useLanguage();

  const highlightedProjects = [
    {
      title: "Portfolio for a Content Creator",
      description:
        "A modern, performance-focused portfolio designed to showcase a content creator's brand, social presence, and creative work.",
      tags: ["Portfolio", "Branding", "Animation", "Frontend"],
      image: project1Image,
      link: "https://rwisiidriss.vercel.app/",
    },
    {
      title: "Webify TN — Agency Website",
      description:
        "A professional agency website for Webify TN, focused on delivering clean, fast, and responsive static websites and portfolio solutions.",
      tags: ["Agency", "Business", "Responsive", "Frontend"],
      image: project2Image,
      link: "https://www.webify.tn/",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-container pt-32 sm:pt-36">
        <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="kicker">{t.home.greeting}</span>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">{t.home.name}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{t.home.intro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary group">
                {t.home.getInTouch}
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/work" className="btn-outline group">
                <Eye size={16} className="mr-2" />
                {t.home.viewMyWork}
              </Link>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="surface-card relative overflow-hidden p-6"
          >
            <div className="mesh-bg pointer-events-none absolute inset-0 opacity-80" />
            <div className="relative z-10">
              <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl border border-border bg-secondary">
                <img
                  src={abdouImage}
                  alt="Abderahmaine Dridi"
                  className="h-full w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-muted-foreground">{t.home.aboutTeaser}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <SkillsTechnologiesShowcase />

      <section className="section-container pt-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="kicker">Selected</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground">{t.home.highlightedWorkTitle}</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">{t.home.highlightedWorkSubtitle}</p>
          </div>
          <Link to="/work" className="btn-outline hidden sm:inline-flex">
            {t.home.viewAllProjects}
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {highlightedProjects.map((project) => (
            <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" className="surface-card block overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-5">
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent">
                  {t.home.viewProject}
                  <ArrowRight size={14} className="ml-2" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section-container pt-6">
        <div className="surface-card flex flex-col items-center justify-between gap-5 p-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{t.home.buildTogether}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t.home.aboutTeaser}</p>
          </div>
          <Link to="/contact" className="btn-primary">
            {t.home.getInTouch}
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
