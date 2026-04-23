"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import Image from "next/image";

const cards = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell border-t border-edge/80">
      <SectionHeading
        kicker="Projects"
        title="Work that blends clarity and motion"
        description="Project cards are built with image zoom, animated overlays, and clear technical context."
      />

      <motion.div
        variants={cards}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={card}
            className="group overflow-hidden rounded-2xl border border-edge bg-card"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 transition duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />

              <a
                href={project.link}
                className="absolute inset-0 flex translate-y-2 items-end justify-between p-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
              >
                <span className="rounded-full border border-white/50 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-white">
                  {project.id}. Case Study
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-black">
                  Open
                </span>
              </a>
            </div>

            <div className="space-y-3 p-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-xs uppercase tracking-[0.14em] text-secondary">{project.tech}</p>
              <p className="text-sm leading-relaxed text-secondary">{project.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
