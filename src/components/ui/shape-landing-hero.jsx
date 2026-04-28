import { GLSLHills } from "./glsl-hills";
import { motion } from "framer-motion";
import { Circle, ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function HeroGeometric({
  badge = "From Sketch to Scale",
  title1 = "I Build",
  title2 = "the Web You Imagine",
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
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <GLSLHills />

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 mb-8 md:mb-12 backdrop-blur"
          >
            <Circle className="h-2 w-2 fill-cyan-400" />
            <span className="text-sm text-white/80 tracking-wide">
              {badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 md:mb-12 text-center"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] text-white">
              <span className="block">
                {title1}
              </span>
              <span
                className={cn(
                  "block bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-violet-400"
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-12 text-center"
          >
            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-12 text-center"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.4 + i * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <div className="text-4xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-violet-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-violet-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500" />
              <Button
                onClick={onViewProjects}
                className="relative rounded-2xl px-8 py-6 text-base font-semibold bg-neutral-900/80 hover:bg-neutral-800/80 backdrop-blur-sm border border-white/10 text-white transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-2xl"
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
                className="rounded-2xl px-8 py-6 text-base font-medium text-neutral-300 border border-neutral-700 hover:bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span>Resume</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Divider and footer CTA */}
          <motion.div
            custom={5}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6 text-center"
          >
            <div className="w-12 h-px bg-linear-to-r from-transparent via-neutral-700 to-transparent" />

            {/* Profile card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 px-4 py-3 rounded-full bg-white/5 border border-neutral-800 backdrop-blur-lg hover:bg-white/10 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 rounded-full bg-linear-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shrink-0"
              >
                RS
              </motion.div>
              <div className="text-left">
                <div className="font-semibold text-white text-sm">
                  {name}
                </div>
                <div className="text-[11px] text-neutral-400">
                  Open to select projects
                </div>
              </div>
            </motion.div>

            {/* Footer text */}
            <p className="text-sm text-neutral-400 max-w-sm">
              {footerNote}
            </p>

            {/* Let's build CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={onHire}
                className="rounded-full px-7 py-4 text-sm font-semibold bg-linear-to-r from-cyan-600 to-violet-600 hover:from-cyan-700 hover:to-violet-700 text-white transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Let's Build Together
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { HeroGeometric };
