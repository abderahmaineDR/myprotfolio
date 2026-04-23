"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { techGroups } from "@/lib/portfolio-data";
import { Database, Layers3, Server, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const icons = {
  Frontend: Layers3,
  Backend: Server,
  Database,
  Tools: Wrench
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const card = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

export function TechStackSection() {
  return (
    <section id="tech-stack" className="section-shell border-t border-edge/80">
      <SectionHeading
        kicker="Tech Stack"
        title="Stack organized by capability"
        description="A practical, performance-first stack across frontend, backend, data, and tooling."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 grid gap-4 md:grid-cols-2"
      >
        {techGroups.map((group) => {
          const Icon = icons[group.category as keyof typeof icons];
          return (
            <motion.article
              key={group.category}
              variants={card}
              className="rounded-2xl border border-edge bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-glow"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-edge bg-black/30 p-2 text-white">
                  <Icon size={18} strokeWidth={1.9} />
                </div>
                <h3 className="text-lg font-semibold">{group.category}</h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-edge px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
