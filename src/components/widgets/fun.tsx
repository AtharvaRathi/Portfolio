"use client";

import { portfolioData } from "@/data/portfolio";
import { Sparkles } from "lucide-react";
import { AnimatedWidget } from "../ui/animated-widget";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 260, damping: 20 } },
};

export function FunWidget() {
  return (
    <AnimatedWidget className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800/60 rounded-[2rem] p-6 shadow-sm max-w-sm transition-colors duration-300">
      <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2 transition-colors duration-300">
        <div className="p-1.5 bg-[#B7669A]/10 rounded-lg text-[#B7669A]">
          <Sparkles className="w-4 h-4" />
        </div>
        Fun Facts
      </h3>
      <motion.ul variants={containerVariants} initial="hidden" animate="show" className="space-y-4">
        {portfolioData.fun.map((fact, idx) => (
          <motion.li variants={itemVariants} key={idx} className="flex gap-3 text-[13px] text-zinc-600 dark:text-zinc-300 leading-relaxed bg-zinc-50/50 dark:bg-zinc-900/50 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800/50 transition-colors duration-300">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B7669A] shrink-0" />
            <span>{fact}</span>
          </motion.li>
        ))}
      </motion.ul>
    </AnimatedWidget>
  );
}
