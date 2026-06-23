"use client";

import { portfolioData } from "@/data/portfolio";
import { AnimatedWidget } from "../ui/animated-widget";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: "100%", filter: "blur(10px)" },
  show: { 
    opacity: 1, 
    y: "0%", 
    filter: "blur(0px)", 
    transition: { type: "spring" as const, stiffness: 300, damping: 20 } 
  },
};

export function SkillsWidget() {
  return (
    <AnimatedWidget className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800/60 rounded-[2rem] p-5 sm:p-6 shadow-sm max-w-sm transition-colors duration-300">
      <div className="space-y-5 sm:space-y-6">
        <div>
          <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-3">Frontend</h4>
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-2">
            {portfolioData.skills.frontend.map(s => (
              <div key={s} className="overflow-hidden inline-block rounded-xl">
                <motion.span variants={badgeVariants} className="inline-block px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-xs font-medium border border-zinc-200/50 dark:border-zinc-700/50 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-default">
                  {s}
                </motion.span>
              </div>
            ))}
          </motion.div>
        </div>
        <div>
          <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-3">Backend & DB</h4>
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-2">
            {[...portfolioData.skills.backend, ...portfolioData.skills.databases].map(s => (
              <div key={s} className="overflow-hidden inline-block rounded-xl">
                <motion.span variants={badgeVariants} className="inline-block px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-xs font-medium border border-zinc-200/50 dark:border-zinc-700/50 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-default">
                  {s}
                </motion.span>
              </div>
            ))}
          </motion.div>
        </div>
        <div>
          <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-3">AI & Tools</h4>
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-2">
            {[...portfolioData.skills.ai, ...portfolioData.skills.tools].map(s => (
              <div key={s} className="overflow-hidden inline-block rounded-xl">
                <motion.span variants={badgeVariants} className="inline-block px-3 py-1.5 bg-[#B7669A]/10 dark:bg-[#B7669A]/20 text-[#B7669A] dark:text-[#B7669A] text-xs font-semibold border border-[#B7669A]/20 hover:bg-[#B7669A]/20 dark:hover:bg-[#B7669A]/30 transition-colors cursor-default">
                  {s}
                </motion.span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedWidget>
  );
}
