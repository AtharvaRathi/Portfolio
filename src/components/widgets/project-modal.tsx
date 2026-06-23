"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Globe } from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "../ui/magnetic-button";
import { KineticText } from "../ui/kinetic-text";

interface ProjectModalProps {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  project: any;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [linksOpen, setLinksOpen] = useState(false);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        layoutId={`project-container-${project.name}`}
        className="relative w-full max-w-2xl overflow-hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 rounded-[2rem] shadow-2xl z-10 flex flex-col max-h-[90vh]"
      >
        {/* Header Image Area */}
        <div className="relative h-72 w-full shrink-0 bg-zinc-100 dark:bg-zinc-900">
          {project.image && (
            <motion.img
              layoutId={`project-image-${project.name}`}
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 dark:from-zinc-950/95 dark:via-zinc-950/40 to-transparent" />
          
          <div className="absolute top-4 right-4">
            <MagneticButton
              onClick={onClose}
              className="p-3 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 backdrop-blur-md rounded-full text-zinc-800 dark:text-zinc-200 transition-colors flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </MagneticButton>
          </div>

          <div className="absolute bottom-6 left-8 right-8">
            <div className="flex items-center gap-3 mb-2">
              <motion.span 
                layoutId={`project-category-${project.name}`}
                className="px-3 py-1 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-full text-xs font-semibold text-[#B7669A] uppercase tracking-wider"
              >
                {project.category}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="px-3 py-1 bg-zinc-900/10 dark:bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-zinc-700 dark:text-zinc-300"
              >
                {project.year}
              </motion.span>
            </div>
            <motion.h2 
              layoutId={`project-title-${project.name}`}
              className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight"
            >
              {project.name}
            </motion.h2>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: "spring", damping: 20 }}
          className="p-8 overflow-y-auto no-scrollbar flex flex-col gap-8"
        >
          {/* Kinetic Text Reveal for description */}
          <KineticText 
            text={project.description} 
            delay={0.15}
            className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-[16px] font-medium"
          />

          <div>
            <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech: string, i: number) => (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.05, type: "spring", stiffness: 300 }}
                  key={tech}
                  className="px-4 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-sm font-medium border border-zinc-200 dark:border-zinc-800"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Expandable Links Accordion */}
          {project.links && Object.keys(project.links).length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/50"
            >
              <button
                onClick={() => setLinksOpen(!linksOpen)}
                className="w-full px-5 py-4 flex items-center justify-between text-sm font-bold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 transition-colors"
              >
                Project Links
                <motion.div animate={{ rotate: linksOpen ? 180 : 0 }}>
                  <ChevronDown className="w-5 h-5 text-zinc-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {linksOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 flex flex-col gap-3">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-bold text-zinc-700 dark:text-zinc-300 hover:border-[#B7669A] dark:hover:border-[#B7669A] hover:text-[#B7669A] dark:hover:text-[#B7669A] transition-colors shadow-sm"
                        >
                          <Globe className="w-4 h-4" />
                          View Live Site
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm group"
                        >
                          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                          GitHub Repository
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
