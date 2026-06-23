"use client";

import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, Globe } from "lucide-react";
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
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 260, damping: 20 } },
};

export function ContactWidget() {
  return (
    <AnimatedWidget className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800/60 rounded-[2rem] p-5 sm:p-6 shadow-sm max-w-sm transition-colors duration-300">
      <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2 text-lg transition-colors duration-300">Let&apos;s Connect</h3>
      <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mb-5 sm:mb-6 leading-relaxed transition-colors duration-300">{portfolioData.contact.callToAction}</p>
      
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-3 sm:flex sm:justify-around items-center border-t border-zinc-100 dark:border-zinc-800 pt-5 gap-y-6 transition-colors duration-300">
        {portfolioData.contact.phone && (
          <motion.a variants={itemVariants} href={`tel:${portfolioData.contact.phone}`} className="flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-[#B7669A] dark:hover:text-[#B7669A] group transition-colors">
            <Phone className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            <span className="text-[11px] font-bold tracking-wide">Phone</span>
          </motion.a>
        )}

        {portfolioData.contact.website && (
          <motion.a variants={itemVariants} href={`https://${portfolioData.contact.website}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-[#B7669A] dark:hover:text-[#B7669A] group transition-colors">
            <Globe className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            <span className="text-[11px] font-bold tracking-wide">Website</span>
          </motion.a>
        )}

        {portfolioData.contact.email && (
          <motion.a variants={itemVariants} href={`mailto:${portfolioData.contact.email}`} className="flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-[#B7669A] dark:hover:text-[#B7669A] group transition-colors">
            <Mail className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            <span className="text-[11px] font-bold tracking-wide">Email</span>
          </motion.a>
        )}
        
        {portfolioData.contact.github && (
          <motion.a variants={itemVariants} href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-[#B7669A] dark:hover:text-[#B7669A] group transition-colors">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            <span className="text-[11px] font-bold tracking-wide">GitHub</span>
          </motion.a>
        )}

        {portfolioData.contact.linkedin && (
          <motion.a variants={itemVariants} href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-[#B7669A] dark:hover:text-[#B7669A] group transition-colors">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            <span className="text-[11px] font-bold tracking-wide">LinkedIn</span>
          </motion.a>
        )}

        {portfolioData.contact.twitter && (
          <motion.a variants={itemVariants} href={portfolioData.contact.twitter} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-[#B7669A] dark:hover:text-[#B7669A] group transition-colors">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            <span className="text-[11px] font-bold tracking-wide">Twitter</span>
          </motion.a>
        )}
      </motion.div>
    </AnimatedWidget>
  );
}
