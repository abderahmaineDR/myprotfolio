import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { BrainCircuit, Compass, Lightbulb, Puzzle } from "lucide-react";
import { SiCss, SiHtml5, SiJavascript, SiPython, SiReact, SiTypescript } from "react-icons/si";
import type { IconType } from "react-icons";

type TechSkill = {
  name: string;
  Icon: IconType;
  iconBg: string;
  iconText: string;
};

type FoundationNode = {
  label: string;
  Icon: typeof BrainCircuit;
  x: number;
  y: number;
};

type LanguageLevel = {
  code: string;
  name: string;
  level: string;
  proficiency: number;
};

const techSkills: TechSkill[] = [
  { name: "React", Icon: SiReact, iconBg: "bg-blue-400/20", iconText: "text-blue-300" },
  { name: "HTML", Icon: SiHtml5, iconBg: "bg-blue-500/20", iconText: "text-blue-300" },
  { name: "CSS", Icon: SiCss, iconBg: "bg-blue-300/20", iconText: "text-blue-200" },
  { name: "JavaScript", Icon: SiJavascript, iconBg: "bg-indigo-400/20", iconText: "text-indigo-300" },
  { name: "TypeScript", Icon: SiTypescript, iconBg: "bg-blue-400/20", iconText: "text-blue-300" },
  { name: "Python", Icon: SiPython, iconBg: "bg-sky-400/20", iconText: "text-sky-300" },
];

const foundationNodes: FoundationNode[] = [
  { label: "Analytical Skills", Icon: Compass, x: 18, y: 20 },
  { label: "Algorithms", Icon: BrainCircuit, x: 78, y: 22 },
  { label: "Logical Reasoning", Icon: Lightbulb, x: 26, y: 74 },
  { label: "Problem Solving", Icon: Puzzle, x: 76, y: 74 },
];

const foundationConnections: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [0, 3],
];

const languages: LanguageLevel[] = [
  { code: "AR", name: "Arabic", level: "Native", proficiency: 100 },
  { code: "FR", name: "French", level: "Native-like", proficiency: 90 },
  { code: "EN", name: "English", level: "Advanced", proficiency: 80 },
  { code: "DE", name: "German", level: "Beginner", proficiency: 30 },
];

const sectionTransition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: sectionTransition,
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const LanguageMeter = ({ language, index }: { language: LanguageLevel; index: number }) => {
  const meterRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(meterRef, { once: true, margin: "-80px" });
  const counter = useMotionValue(0);
  const rounded = useTransform(counter, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => setDisplayValue(latest));
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(counter, language.proficiency, {
      duration: 0.8,
      delay: index * 0.1,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [counter, index, isInView, language.proficiency]);

  return (
    <motion.div
      ref={meterRef}
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-2xl border border-white/10 bg-[#101010] p-4 shadow-[0_14px_40px_-26px_rgba(56,189,248,0.45)]"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-white">{language.name}</p>
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">{language.level}</p>
        </div>
        <span className="rounded-lg border border-white/10 bg-black/30 px-2 py-1 text-xs font-semibold text-zinc-300">
          {language.code}
        </span>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${language.proficiency}%` : "0%" }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
      <p className="mt-3 text-right text-sm font-semibold text-blue-300">{displayValue}%</p>
    </motion.div>
  );
};

const SkillsTechnologiesShowcase = () => {
  return (
    <section className="section-container pt-6" id="skills-technologies">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={containerVariants}
        className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-[#0a0a0a] p-6 sm:p-8 md:p-10"
        style={{ fontFamily: "Inter, 'Plus Jakarta Sans', sans-serif" }}
      >
        <div aria-hidden className="pointer-events-none absolute -top-20 left-10 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-16 right-8 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="relative z-10 space-y-8">
          <motion.div variants={itemVariants} className="max-w-3xl">
            <span className="kicker border-white/15 bg-white/5 text-zinc-300">Skills & Technologies</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">A layered look at how I build and think</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              The stack, the mental models, and the communication range that shape my development workflow.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
            </div>
            <div className="group/tech grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {techSkills.map(({ name, Icon, iconBg, iconText }) => (
                <motion.div
                  key={name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] p-4 transition-opacity duration-300 group-hover/tech:opacity-75 hover:!opacity-100"
                >
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -inset-12 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.45 }}
                    style={{
                      background:
                        "radial-gradient(circle at 24% 20%, rgba(59,130,246,0.3), rgba(59,130,246,0) 58%)",
                    }}
                  />
                  <div className="relative z-10 flex items-center gap-3">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/35 ${iconBg} ${iconText}`}
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{name}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="hidden space-y-4 md:block">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold text-white">Foundation</h3>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f0f0f] p-4 sm:p-6">
              <motion.svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden
              >
                {foundationConnections.map(([from, to], index) => (
                  <motion.line
                    key={`${from}-${to}`}
                    x1={foundationNodes[from].x}
                    y1={foundationNodes[from].y}
                    x2={foundationNodes[to].x}
                    y2={foundationNodes[to].y}
                    stroke="rgba(96,165,250,0.35)"
                    strokeWidth="0.55"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.12 + index * 0.08, ease: "easeOut" }}
                  />
                ))}
              </motion.svg>

              <div className="relative h-[270px] sm:h-[300px]">
                {foundationNodes.map(({ label, Icon, x, y }, index) => (
                  <motion.div
                    key={label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute w-36 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-[#131313] p-3 text-center shadow-[0_14px_32px_-24px_rgba(59,130,246,0.75)] backdrop-blur-none"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <span className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-400/15 text-blue-300">
                      <Icon size={15} />
                    </span>
                    <p className="text-xs font-medium leading-tight text-zinc-200">{label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold text-white">Languages</h3>
            </div>
            <motion.div variants={containerVariants} className="grid gap-3 lg:grid-cols-2">
              {languages.map((language, index) => (
                <LanguageMeter key={language.name} language={language} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsTechnologiesShowcase;
