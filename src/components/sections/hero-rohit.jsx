"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Download, Mail } from "lucide-react";

function FloatingPaths({ position }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function HeroRohit({
  tagline = "From Sketch to Scale",
  firstLine = "I Build",
  secondLine = "the Web You Imagine",
  description = "Full Stack Developer and React Engineer shipping polished interfaces and stable APIs with measurable business impact.",
  stats = [
    { value: "5+", label: "Projects Completed" },
    { value: "100%", label: "Delivery Focus" },
  ],
  name = "Rohit Solanki",
  footerNote = "Focused on product quality, performance, and developer experience.",
  onViewProjects,
  onResume,
  onHire,
}) {
  const titleWords = [firstLine, secondLine];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950 py-20">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full 
              bg-gradient-to-b from-black/5 to-black/0 dark:from-white/10 dark:to-white/0
              border border-black/10 dark:border-white/10 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-neutral-700 dark:text-neutral-300" />
            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 tracking-wide">
              {tagline}
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter leading-[1.05]">
            {titleWords.map((line, lineIndex) => (
              <span key={lineIndex} className="block">
                {line.split(" ").map((word, wordIndex) => (
                  <span
                    key={`${lineIndex}-${wordIndex}`}
                    className="inline-block mr-3 last:mr-0"
                  >
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={`${lineIndex}-${wordIndex}-${letterIndex}`}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay:
                            0.5 +
                            lineIndex * 0.2 +
                            wordIndex * 0.08 +
                            letterIndex * 0.025,
                          type: "spring",
                          stiffness: 150,
                          damping: 25,
                        }}
                        className="inline-block text-transparent bg-clip-text 
                          bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                          dark:from-white dark:to-white/80"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-base md:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex items-center justify-center gap-8 md:gap-14 mb-12"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                {i > 0 && (
                  <div className="h-10 w-px bg-neutral-300 dark:bg-neutral-700 -ml-4 md:-ml-7" />
                )}
                <div className="text-left">
                  <div className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <div
              className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Button
                onClick={onViewProjects}
                variant="ghost"
                className="rounded-[1.15rem] px-8 py-6 text-base font-semibold backdrop-blur-md 
                  bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                  text-black dark:text-white transition-all duration-300 
                  group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                  hover:shadow-md dark:hover:shadow-neutral-800/50"
              >
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                  View Projects
                </span>
                <ArrowRight className="ml-3 h-5 w-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300" />
              </Button>
            </div>

            <Button
              onClick={onResume}
              variant="ghost"
              className="rounded-2xl px-7 py-6 text-base font-medium text-neutral-700 
                dark:text-neutral-300 hover:text-black dark:hover:text-white gap-2"
            >
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            className="flex flex-col items-center gap-4 pt-8 border-t border-neutral-200/60 dark:border-neutral-800/60 max-w-md mx-auto"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 flex items-center justify-center text-white dark:text-black font-bold text-sm shadow-lg">
                RS
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-neutral-950" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-neutral-900 dark:text-white text-sm">
                  {name}
                </div>
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  Available for new opportunities
                </div>
              </div>
            </div>

            <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 max-w-sm leading-relaxed">
              {footerNote}
            </p>

            <Button
              onClick={onHire}
              className="mt-2 rounded-full px-6 py-5 text-sm font-semibold
                bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100
                text-white dark:text-black transition-all duration-300
                hover:-translate-y-0.5 hover:shadow-lg gap-2"
            >
              <Mail className="h-4 w-4" />
              Hire Me
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
