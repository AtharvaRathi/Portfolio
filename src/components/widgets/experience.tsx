"use client";

import { portfolioData } from "@/data/portfolio";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import { AnimatedWidget } from "../ui/animated-widget";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 260, damping: 20 } },
};

const bulletVariants = {
  hidden: { opacity: 0, y: "100%", filter: "blur(10px)" },
  show: { 
    opacity: 1, 
    y: "0%", 
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 200, damping: 20 } 
  },
};

const bulletContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

export function ExperienceWidget() {
  return (
    <AnimatedWidget className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800/60 rounded-[2rem] p-6 shadow-sm max-w-xl w-full transition-colors duration-300">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-[#B7669A]/10 rounded-xl text-[#B7669A]">
          <Briefcase className="w-4 h-4" />
        </div>
        <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider transition-colors duration-300">Experience</h3>
      </div>

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-zinc-100 dark:bg-zinc-800 rounded-full transition-colors duration-300" />

        <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-8">
          {portfolioData.experience.map((exp, i) => (
            <motion.div variants={itemVariants} key={i} className="relative pl-8">
              <div
                className={`absolute left-[-1px] top-1.5 w-4 h-4 rounded-full border-[3px] dark:border-zinc-900 transition-colors duration-300 ${
                  exp.type === "current"
                    ? "bg-[#B7669A] border-white shadow-[0_0_0_2px_rgba(183,102,154,0.3)]"
                    : "bg-zinc-300 dark:bg-zinc-600 border-white shadow-[0_0_0_2px_rgba(228,228,231,1)] dark:shadow-[0_0_0_2px_rgba(82,82,91,1)]"
                }`}
              />

              <div className="bg-zinc-50/50 dark:bg-zinc-900/50 rounded-2xl p-5 border border-zinc-100 dark:border-zinc-800/50 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900 overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">{exp.title}</h4>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-white dark:bg-zinc-950 px-2.5 py-1 rounded-full border border-zinc-200/60 dark:border-zinc-800/60 shrink-0 shadow-sm transition-colors duration-300">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-sm font-bold text-[#B7669A]">{exp.company}</span>
                  <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                  <span className="flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                  {exp.type === "current" && (
                    <>
                      <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span className="px-2 py-0.5 rounded-full bg-[#B7669A]/10 text-[#B7669A] text-[10px] font-bold tracking-wide uppercase border border-[#B7669A]/20">
                        Current
                      </span>
                    </>
                  )}
                </div>

                {/* Kinetic Typography Bullet Points */}
                <motion.ul variants={bulletContainerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed overflow-hidden transition-colors duration-300">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0" />
                      <motion.span variants={bulletVariants} className="inline-block">
                        {b}
                      </motion.span>
                    </li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedWidget>
  );
}
