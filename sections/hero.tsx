"use client";

import { heroStats } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 }
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to("[data-parallax='slow']", {
        yPercent: -16,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to("[data-parallax='fast']", {
        yPercent: -24,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="bg-grid relative isolate overflow-hidden px-6 pb-20 pt-36 md:px-10 md:pb-24 md:pt-44"
    >
      <div
        aria-hidden
        data-parallax="slow"
        className="pointer-events-none absolute -left-20 top-20 h-60 w-60 rounded-full bg-sky-400/20 blur-3xl"
      />
      <div
        aria-hidden
        data-parallax="fast"
        className="pointer-events-none absolute -right-20 bottom-16 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-shell grid items-end gap-12 pt-0 md:grid-cols-[1.05fr,0.95fr]"
      >
        <div>
          <motion.p variants={item} className="section-kicker">
            Frontend Developer
          </motion.p>

          <motion.h1
            variants={container}
            className="mt-6 text-5xl font-semibold leading-[0.95] sm:text-6xl md:text-7xl"
          >
            <motion.span variants={item} className="block">
              FRONTEND
            </motion.span>
            <motion.span variants={item} className="block text-secondary">
              DEVELOPER
            </motion.span>
          </motion.h1>
        </div>

        <div>
          <motion.p
            variants={item}
            className="max-w-xl text-base leading-relaxed text-secondary md:text-lg"
          >
            Hi! I&apos;m Abdou, a creative frontend developer building high-performance,
            conversion-focused web experiences with clean systems and premium interaction detail.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.04] hover:bg-white hover:text-black"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-full border border-edge bg-card px-6 py-3 text-sm font-semibold text-text transition hover:border-secondary"
            >
              View Work
            </a>
          </motion.div>

          <motion.ul variants={container} className="mt-10 grid grid-cols-3 gap-3 md:gap-4">
            {heroStats.map((stat) => (
              <motion.li
                key={stat.label}
                variants={item}
                className="rounded-xl border border-edge bg-card px-3 py-3 md:px-4"
              >
                <p className="text-lg font-semibold md:text-2xl">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-secondary">{stat.label}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}
