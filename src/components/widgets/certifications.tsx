"use client";

import { portfolioData } from "@/data/portfolio";
import { Award, CheckCircle, Clock } from "lucide-react";
import { AnimatedWidget } from "../ui/animated-widget";
import { motion } from "framer-motion";

const issuerColors: Record<string, string> = {
  "Harvard University": "bg-[#A51C30]/10 text-[#A51C30]",
  "Y Combinator": "bg-orange-50 text-orange-600",
  "Meta": "bg-blue-50 text-blue-600",
  "Yale University": "bg-[#00356B]/10 text-[#00356B]",
  "Microsoft": "bg-sky-50 text-sky-600",
  "IIM Ahmedabad": "bg-amber-50 text-amber-700",
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 260, damping: 20 } },
};

export function CertificationsWidget() {
  return (
    <AnimatedWidget className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800/60 rounded-[2rem] p-6 shadow-sm max-w-lg w-full transition-colors duration-300">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-[#B7669A]/10 rounded-xl text-[#B7669A]">
          <Award className="w-4 h-4" />
        </div>
        <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider transition-colors duration-300">Certifications</h3>
      </div>

      <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-3">
        {portfolioData.certifications.map((cert, i) => {
          const colorClass = issuerColors[cert.issuer] ?? "bg-zinc-100 text-zinc-700";
          return (
            <motion.div
              variants={itemVariants}
              key={i}
              className="flex items-start gap-3 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800/50 hover:border-zinc-200 dark:hover:border-zinc-700 hover:shadow-sm bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all cursor-default"
            >
              {/* Status icon */}
              <div className="mt-0.5 shrink-0">
                {cert.status === "completed" ? (
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Clock className="w-4 h-4 text-amber-500" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-bold text-zinc-900 dark:text-zinc-100 leading-snug transition-colors duration-300">{cert.name}</p>
                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${colorClass} transition-colors duration-300`}>
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 transition-colors duration-300">via {cert.platform}</span>
                  {cert.status === "ongoing" && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 text-[10px] font-bold">
                      ONGOING
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatedWidget>
  );
}
