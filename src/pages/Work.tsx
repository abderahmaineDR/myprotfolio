import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/i18n/LanguageContext";
import project1Image from "@/assets/project-1.jpg";
import project2Image from "@/assets/project-2.jpg";

const Work = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Portfolio for a Content Creator",
      description:
        "A modern, performance-focused portfolio designed to showcase a content creator's brand, social presence, and creative work. Built with smooth motion and clean storytelling.",
      tags: ["Portfolio", "Branding", "Animation", "Frontend"],
      technologies: [t.home.skills.react, t.home.skills.typescript, t.home.skills.css],
      image: project1Image,
      fallbackImage: `${import.meta.env.BASE_URL}project-1.jpg`,
      link: "https://rwisiidriss.vercel.app/",
    },
    {
      title: "Webify TN — Agency Website",
      description:
        "A professional agency website focused on trust, conversion, and service clarity. Built as a fast static site with strong responsive behavior.",
      tags: ["Agency", "Business", "Responsive", "Frontend"],
      technologies: [t.home.skills.html, t.home.skills.css, t.home.skills.javascript],
      image: project2Image,
      fallbackImage: `${import.meta.env.BASE_URL}project-2.jpg`,
      link: "https://www.webify.tn/",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-container pt-32 sm:pt-36">
        <div className="surface-card p-7 sm:p-10">
          <span className="kicker">{t.nav.work}</span>
          <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">{t.work.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{t.work.subtitle}</p>
        </div>
      </section>

      <section className="section-container pt-6">
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="surface-card overflow-hidden"
            >
              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className={index % 2 === 1 ? "order-2 lg:order-2" : "order-1"}>
                  <div className="h-full min-h-[240px] w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = project.fallbackImage;
                      }}
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "order-1 lg:order-1" : "order-2"}>
                  <div className="p-6 sm:p-8">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-2xl font-semibold text-foreground">{project.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="rounded-full bg-card px-3 py-1 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">
                      {t.work.viewProject}
                      <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-container pt-6">
        <div className="surface-card flex flex-col items-center justify-between gap-5 p-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{t.home.buildTogether}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t.home.aboutTeaser}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:justify-end">
            <Link to="/contact" className="btn-primary">
              {t.home.getInTouch}
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link to="/about" className="btn-outline">
              {t.home.learnMore}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;
