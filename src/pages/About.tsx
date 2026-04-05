import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const headlineLines = [
  "I don't just build websites.",
  "I craft digital experiences.",
];

const storyBlocks = [
  {
    title: "How It Started",
    body: "I started with curiosity for how interfaces shape trust. From the first landing page, I cared less about decoration and more about clarity, speed, and structure.",
  },
  {
    title: "Where I Am Today",
    body: "Today I build clean, fast, minimal websites and lead WebifyTN. Every project is designed to feel effortless for users and maintainable for teams.",
  },
  {
    title: "My Philosophy",
    body: "Design is not noise. Code is not chaos. I believe in intentional systems: sharp hierarchy, strong performance, and interfaces that respect attention.",
  },
  {
    title: "The Goal",
    body: "To help founders and brands launch digital products that look premium, perform instantly, and communicate with confidence.",
  },
];

const principles = ["Minimal", "Fast", "Intentional"];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const About = () => {
  const { scrollYProgress } = useScroll();
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -110]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-container relative overflow-hidden pt-32 sm:pt-36">
        <motion.div style={{ y: orbY }} className="pointer-events-none absolute left-10 top-20 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="relative space-y-10 rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-7 sm:p-10"
        >
          <motion.span variants={reveal} className="kicker border-white/15 bg-white/5 text-zinc-300">
            About
          </motion.span>

          <motion.div variants={container} className="space-y-2">
            {headlineLines.map((line) => (
              <motion.h1 key={line} variants={reveal} className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                {line}
              </motion.h1>
            ))}
          </motion.div>

          <motion.p variants={reveal} className="max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            I am a frontend developer and founder building high-impact websites where performance, structure, and design clarity work together.
          </motion.p>
        </motion.div>
      </section>

      <section className="section-container pt-6">
        <div className="space-y-5">
          {storyBlocks.map((block, index) => {
            const isRight = index % 2 === 1;

            return (
              <motion.article
                key={block.title}
                initial={{ opacity: 0, y: 50, x: isRight ? 30 : -30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.06 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] p-6 sm:p-7 ${isRight ? "md:ml-auto md:w-[78%]" : "md:w-[78%]"}`}
              >
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-400/90 to-blue-700/70 opacity-80" />
                <div className="ml-3">
                  <h2 className="text-xl font-semibold text-white sm:text-2xl">{block.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                    {block.body.split(" ").map((word, i) => {
                      const highlight = ["clean,", "fast,", "minimal", "performance,", "clarity,", "intentional", "premium,", "instantly,"].includes(word);

                      return (
                        <span
                          key={`${word}-${i}`}
                          className={highlight ? "transition-colors duration-300 group-hover:text-blue-300" : ""}
                        >
                          {word}{" "}
                        </span>
                      );
                    })}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="section-container pt-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-8 text-center sm:p-10"
        >
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-500/15 to-transparent" />
          <h2 className="mt-5 text-3xl font-bold text-white sm:text-5xl">Minimal. Fast. Intentional.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            No clutter. Just results. Every decision is made to reduce friction and increase impact.
          </p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="mx-auto mt-7 grid max-w-3xl gap-3 sm:grid-cols-3"
          >
            {principles.map((item) => (
              <motion.div
                key={item}
                variants={reveal}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="rounded-xl border border-white/10 bg-[#101010] px-4 py-3 text-sm font-semibold text-blue-200"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="section-container pt-6">
        <div className="surface-card flex flex-col items-center justify-between gap-5 p-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Ready to build something sharp?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Let&apos;s create a digital experience that feels premium and performs at speed.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:justify-end">
            <Link to="/work" className="btn-primary">
              View My Work
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link to="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
