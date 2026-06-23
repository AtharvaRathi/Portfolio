"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ChatInput } from "./chat-input";
import { Smile, Briefcase, Layers, PartyPopper, User, FileText, History, Award } from "lucide-react";

const navButtons = [
  { name: "Me", icon: Smile, widget: "me" },
  { name: "Projects", icon: Briefcase, widget: "projects" },
  { name: "Skills", icon: Layers, widget: "skills" },
  { name: "Experience", icon: History, widget: "experience" },
  { name: "Certs", icon: Award, widget: "certifications" },
  { name: "Fun", icon: PartyPopper, widget: "fun" },
  { name: "Contact", icon: User, widget: "contact" },
  { name: "Resume", icon: FileText, widget: "resume" },
];

interface HomeViewProps {
  onAsk: (question: string, widget?: string) => void;
}

export function HomeView({ onAsk }: HomeViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ duration: 0.4 }}
      className="flex-1 flex flex-col items-center justify-center w-full min-h-[80vh]"
    >
      <motion.p layoutId="tagline" className="text-zinc-900 dark:text-zinc-200 font-semibold text-base tracking-tight mb-1 transition-colors duration-300">
        {portfolioData.tagline}
      </motion.p>
      
      <motion.h1 layoutId="title" className="text-5xl md:text-[4.5rem] font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-10 text-center transition-colors duration-300">
        I&apos;m {portfolioData.name}
      </motion.h1>

      <motion.div layoutId="avatar" className="relative w-40 h-40 md:w-48 md:h-48 mb-8 z-10">
        {portfolioData.avatar ? (
          <img 
            src={portfolioData.avatar} 
            alt={portfolioData.name} 
            className="w-full h-full object-cover"
            style={{ 
              maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
            }}
          />
        ) : (
          <div className="w-full h-full bg-zinc-200 rounded-full" />
        )}
      </motion.div>

      <motion.div layoutId="search-container" className="w-full max-w-xl z-20 relative">
        <ChatInput onAsk={onAsk} isLoading={false} />
      </motion.div>

      <motion.div 
        layoutId="grid-buttons"
        className="flex flex-wrap justify-center gap-3 mt-6 w-full max-w-3xl z-20"
      >
        {navButtons.map((btn) => (
          <button
            key={btn.name}
            onClick={() => onAsk(`Tell me about your ${btn.name.toLowerCase()}`, btn.widget)}
            className="flex flex-col items-center justify-center gap-2 w-24 h-24 md:w-28 md:h-28 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-lg border border-white/50 dark:border-zinc-800/50 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] hover:bg-white/60 dark:hover:bg-zinc-800/60 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.7)] hover:border-white/80 dark:hover:border-zinc-700 transition-all group"
          >
            <btn.icon className="w-5 h-5 text-[#B7669A] group-hover:scale-110 transition-transform" strokeWidth={2} />
            <span className="text-[13px] font-medium text-zinc-700 dark:text-zinc-300">{btn.name}</span>
          </button>
        ))}
      </motion.div>
    </motion.div>
  );
}
