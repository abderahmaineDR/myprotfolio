"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell border-t border-edge/80">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl rounded-3xl border border-edge bg-card p-8 text-center md:p-12"
      >
        <p className="section-kicker">Contact</p>
        <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Have a project in mind?</h2>
        <p className="mt-5 text-sm leading-relaxed text-secondary md:text-base">
          Let&apos;s craft something clean, high-performance, and unforgettable.
        </p>

        <a
          href="mailto:hello@example.com"
          className="mt-8 inline-flex items-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.04] hover:bg-white hover:text-black"
        >
          hello@example.com
        </a>
      </motion.div>
    </section>
  );
}
