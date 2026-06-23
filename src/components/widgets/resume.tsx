"use client";

import { portfolioData } from "@/data/portfolio";
import { Download, FileText } from "lucide-react";
import { AnimatedWidget } from "../ui/animated-widget";

export function ResumeWidget() {
  return (
    <AnimatedWidget className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800/60 rounded-[2rem] p-5 sm:p-6 shadow-sm max-w-sm transition-colors duration-300">
      <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2 text-lg transition-colors duration-300">
        <div className="p-1.5 bg-[#B7669A]/10 rounded-lg text-[#B7669A]">
          <FileText className="w-4 h-4" />
        </div>
        Resume Summary
      </h3>
      <p className="text-[13px] text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed bg-zinc-50/50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800/50 transition-colors duration-300">
        {portfolioData.resume.summary}
      </p>
      
      <a 
        href={portfolioData.resume.downloadLink}
        className="flex justify-between items-center px-5 py-3.5 bg-zinc-900 dark:bg-zinc-100 rounded-2xl hover:bg-zinc-800 dark:hover:bg-white transition-all hover:scale-[1.02] active:scale-[0.98] group shadow-md"
      >
        <span className="text-[13px] font-bold text-white dark:text-zinc-900 transition-colors duration-300">Download Full Resume</span>
        <Download className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-white dark:group-hover:text-zinc-900 transition-colors duration-300" />
      </a>
    </AnimatedWidget>
  );
}
