"use client";

import { portfolioData } from "@/data/portfolio";
import { MapPin, GraduationCap } from "lucide-react";
import { AnimatedWidget } from "../ui/animated-widget";

export function MeWidget() {
  return (
    <AnimatedWidget className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800/60 rounded-[2rem] p-6 shadow-sm max-w-sm transition-colors duration-300">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 border-2 border-white dark:border-zinc-800 shadow-sm shrink-0 transition-colors duration-300">
          {portfolioData.avatar ? (
            <img src={portfolioData.avatar} alt="Avatar" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-zinc-200 dark:bg-zinc-700 transition-colors duration-300" />
          )}
        </div>
        <div>
          <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg transition-colors duration-300">{portfolioData.name}</h3>
          <p className="text-[13px] font-medium text-[#B7669A]">{portfolioData.role}</p>
        </div>
      </div>
      
      <div className="flex flex-col gap-2.5 mb-5">
        <span className="flex items-center gap-2.5 px-3 py-2 bg-zinc-50/80 dark:bg-zinc-900/80 border border-zinc-100 dark:border-zinc-800/50 text-zinc-600 dark:text-zinc-300 rounded-xl text-[12px] font-medium transition-colors duration-300">
          <MapPin className="w-4 h-4 text-zinc-400 dark:text-zinc-500" /> {portfolioData.location}
        </span>
        <span className="flex items-center gap-2.5 px-3 py-2 bg-zinc-50/80 dark:bg-zinc-900/80 border border-zinc-100 dark:border-zinc-800/50 text-zinc-600 dark:text-zinc-300 rounded-xl text-[12px] font-medium transition-colors duration-300">
          <GraduationCap className="w-4 h-4 text-zinc-400 dark:text-zinc-500 shrink-0" /> <span className="line-clamp-1">{portfolioData.education}</span>
        </span>
      </div>
      
      <p className="text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed bg-zinc-50/50 dark:bg-zinc-900/50 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800/50 transition-colors duration-300">
        {portfolioData.about}
      </p>
    </AnimatedWidget>
  );
}
