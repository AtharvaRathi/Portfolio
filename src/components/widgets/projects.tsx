import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export function ProjectsWidget() {
  return (
    <div className="flex overflow-x-auto gap-4 pb-4 snap-x no-scrollbar">
      {portfolioData.projects.map((project) => (
        <div key={project.name} className="snap-start shrink-0 w-72 bg-white/80 backdrop-blur-md border border-zinc-200/60 p-5 rounded-3xl shadow-sm flex flex-col h-full">
          <div className="flex items-start justify-between mb-3">
            <h4 className="font-semibold text-zinc-900">{project.name}</h4>
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#B7669A]">
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
          <p className="text-sm text-zinc-600 mb-4 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.techStack.map(tech => (
              <span key={tech} className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-500 text-[11px] font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
