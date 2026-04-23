"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/lib/portfolio-data";
import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell border-t border-edge/80">
      <SectionHeading
        kicker="Experience"
        title="Timeline of recent roles"
        description="Focused on frontend engineering, scalable architecture, and polished interaction quality."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-10 border-l border-edge pl-6 md:pl-8"
      >
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="group relative mb-7 rounded-2xl border border-edge bg-card p-6 transition duration-300 hover:border-secondary"
          >
            <span className="absolute -left-[2.1rem] top-8 h-3 w-3 rounded-full border border-edge bg-bg md:-left-[2.6rem]" />
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-semibold">{experience.company}</h3>
              <p className="text-xs uppercase tracking-[0.18em] text-secondary">{experience.period}</p>
            </div>
            <p className="mt-2 text-sm font-medium text-secondary">{experience.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">
              {experience.summary}
            </p>
          </article>
        ))}
      </motion.div>
    </section>
  );
}
