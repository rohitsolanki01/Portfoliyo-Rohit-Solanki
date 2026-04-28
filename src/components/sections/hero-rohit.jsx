"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Download, Mail } from "lucide-react";

// Premium Aurora Background - luxury gradient effect
function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora gradient layers - smooth flowing motion */}
      <div className="absolute inset-0 opacity-30 dark:opacity-50">
        {/* Layer 1: Cyan to Violet aurora */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(90deg,
                rgba(6, 182, 212, 0.4) 0%,
                rgba(34, 197, 94, 0.2) 25%,
                rgba(139, 92, 246, 0.3) 50%,
                rgba(168, 85, 247, 0.2) 75%,
                rgba(6, 182, 212, 0.4) 100%
              )
            `,
            backgroundSize: "200% 100%",
            backgroundPosition: "0% 50%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Layer 2: Animated radial gradient for depth */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 40% 50%,
                rgba(6, 182, 212, 0.25) 0%,
                rgba(139, 92, 246, 0.15) 30%,
                transparent 70%
              )
            `,
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Premium glow orbs for luxury effect */}
      {/* Cyan glow - top left */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent 70%)",
          top: "-10%",
          left: "-5%",
        }}
        animate={{
          scale: [0.95, 1.1, 0.95],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Violet glow - bottom right */}
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.25), transparent 70%)",
          bottom: "-8%",
          right: "-2%",
        }}
        animate={{
          scale: [1.05, 0.95, 1.05],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Emerald accent - center right */}
      <motion.div
        className="absolute w-72 h-72 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(34, 197, 94, 0.2), transparent 70%)",
          top: "30%",
          right: "15%",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Vignette overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at center,
              rgba(255, 255, 255, 0) 0%,
              rgba(0, 0, 0, 0.05) 100%
            )
          `,
        }}
      />

      {/* Dark mode overlay */}
      <div className="absolute inset-0 dark:bg-neutral-950/20 pointer-events-none" />
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

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
      {/* Aurora background */}
      <AuroraBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Status badge with animation */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full 
              border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 
              backdrop-blur-xl hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-300"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex h-2.5 w-2.5 rounded-full bg-cyan-500"
            />
            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 tracking-wide">
              {tagline}
            </span>
          </motion.div>

          {/* Main headline with letter spacing reveal */}
          <div className="mb-8 overflow-hidden">
            <motion.h1 
              variants={itemVariants}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.1]"
            >
              {titleWords.map((line, lineIndex) => (
                <div key={lineIndex} className="overflow-hidden">
                  <motion.span
                    className="block text-transparent bg-clip-text bg-linear-to-r 
                      from-neutral-900 via-neutral-800 to-neutral-700
                      dark:from-white dark:via-white dark:to-neutral-200"
                    initial={{ y: 60 }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 0.5 + lineIndex * 0.2,
                      duration: 0.8,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                </div>
              ))}
            </motion.h1>
          </div>

          {/* Subtitle with refined animation */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 
              mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {description}
          </motion.p>

          {/* Stats section with stagger */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.2 + i * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <div className="text-4xl md:text-5xl font-bold tracking-tighter text-transparent 
                  bg-clip-text bg-linear-to-r from-cyan-600 to-violet-600 
                  dark:from-cyan-400 dark:to-violet-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA section with premium button design */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            {/* Primary CTA with glow effect */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-linear-to-r from-cyan-600 to-violet-600 
                rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-500" />
              <Button
                onClick={onViewProjects}
                className="relative rounded-2xl px-8 py-6 text-base font-semibold
                  bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-50
                  text-white dark:text-black transition-all duration-300
                  flex items-center gap-3 shadow-lg hover:shadow-2xl"
              >
                <span>View Case Studies</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={onResume}
                variant="ghost"
                className="rounded-2xl px-8 py-6 text-base font-medium
                  text-neutral-700 dark:text-neutral-300 
                  border border-neutral-300 dark:border-neutral-700
                  hover:bg-neutral-100 dark:hover:bg-neutral-900
                  transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span>Resume</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Divider and footer CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-6 pt-8"
          >
            <div className="w-12 h-px bg-linear-to-r from-transparent via-neutral-300 
              dark:via-neutral-700 to-transparent" />

            {/* Profile card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 px-4 py-3 rounded-full 
                bg-white/50 dark:bg-white/5 border border-neutral-200 dark:border-neutral-800
                backdrop-blur-lg hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 rounded-full bg-linear-to-br from-cyan-500 to-violet-600 
                  flex items-center justify-center text-white font-bold text-sm shrink-0"
              >
                RS
              </motion.div>
              <div className="text-left">
                <div className="font-semibold text-neutral-900 dark:text-white text-sm">
                  {name}
                </div>
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  Open to select projects
                </div>
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.p
              className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm"
            >
              {footerNote}
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={onHire}
                className="rounded-full px-7 py-4 text-sm font-semibold
                  bg-linear-to-r from-cyan-600 to-violet-600 
                  hover:from-cyan-700 hover:to-violet-700
                  text-white transition-all duration-300
                  shadow-lg hover:shadow-2xl flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Let's Build Together
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
