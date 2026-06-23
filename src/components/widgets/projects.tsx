"use client";

import { portfolioData } from "@/data/portfolio";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectModal } from "./project-modal";
import { TiltCard } from "../ui/tilt-card";
import { MagneticButton } from "../ui/magnetic-button";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 260, damping: 20 } },
};

export function ProjectsWidget() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Record<string, unknown> | null>(null);

  // Manage body scroll lock
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="w-full max-w-[800px]">
        <div className="relative group">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            ref={scrollContainerRef}
            drag="x"
            dragConstraints={{ right: 0, left: -((portfolioData.projects.length - 1) * 300) }}
            dragElastic={0.15}
            whileTap={{ cursor: "grabbing" }}
            className="flex overflow-x-auto gap-5 pb-6 pt-2 snap-x snap-mandatory no-scrollbar px-4 md:px-2 cursor-grab"
          >
            {portfolioData.projects.map((project) => (
              <motion.div
                key={project.name}
                variants={itemVariants}
                className="snap-start shrink-0 w-[80vw] sm:w-72 h-[340px]"
              >
                <TiltCard onClick={() => setSelectedProject(project)} className="w-full h-full group/card">
                  <motion.div
                    layoutId={`project-container-${project.name}`}
                    className="w-full h-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800/60 rounded-3xl shadow-sm flex flex-col overflow-hidden transition-colors duration-300"
                  >
                    {/* Card Image Area */}
                    <div className="relative h-40 w-full shrink-0 overflow-hidden bg-zinc-100 dark:bg-zinc-800 transition-colors duration-300">
                      {project.image && (
                        <motion.img
                          layoutId={`project-image-${project.name}`}
                          src={project.image}
                          alt={project.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex flex-col z-10">
                        <motion.span
                          layoutId={`project-category-${project.name}`}
                          className="text-[10px] font-bold text-white/90 uppercase tracking-wider mb-1 block w-fit"
                        >
                          {project.category}
                        </motion.span>
                        <motion.h4
                          layoutId={`project-title-${project.name}`}
                          className="font-bold text-white text-lg leading-tight line-clamp-1 w-fit"
                        >
                          {project.name}
                        </motion.h4>
                      </div>
                    </div>

                    {/* Card Content Area */}
                    <div className="p-5 flex flex-col flex-1 bg-white/80 dark:bg-zinc-900/80 transition-colors duration-300">
                      <p className="text-[13px] text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3 leading-relaxed flex-1 pointer-events-none transition-colors duration-300">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-[10px] font-medium border border-zinc-200/50 dark:border-zinc-700/50 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-0.5 rounded-md bg-zinc-50 dark:bg-zinc-800/50 text-zinc-400 dark:text-zinc-500 text-[10px] font-medium border border-zinc-200/50 dark:border-zinc-700/50 transition-colors duration-300">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="pointer-events-auto">
              <MagneticButton
                onClick={(e) => {
                  e.stopPropagation();
                  scroll("left");
                }}
                className="p-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg text-zinc-600 dark:text-zinc-400 flex items-center justify-center transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </MagneticButton>
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="pointer-events-auto">
              <MagneticButton
                onClick={(e) => {
                  e.stopPropagation();
                  scroll("right");
                }}
                className="p-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg text-zinc-600 dark:text-zinc-400 flex items-center justify-center transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
