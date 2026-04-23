"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="section-shell border-t border-edge/80 text-center">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl"
      >
        <p className="section-kicker">About</p>
        <h2 className="mt-4 text-4xl font-semibold md:text-5xl">This is me.</h2>
        <p className="mt-8 text-sm leading-relaxed text-secondary md:text-base">
          I design and engineer premium interfaces that feel deliberate, fast, and human. My work
          blends strong visual hierarchy with scalable frontend architecture.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">
          I care deeply about motion pacing, interaction feedback, and systems that teams can extend
          with confidence over time.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">
          My philosophy is simple: fewer elements, better decisions, clearer outcomes.
        </p>
      </motion.div>
    </section>
  );
}
