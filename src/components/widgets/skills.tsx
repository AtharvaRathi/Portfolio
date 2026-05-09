import { portfolioData } from "@/data/portfolio";

export function SkillsWidget() {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-zinc-200/60 rounded-3xl p-5 shadow-sm max-w-sm">
      <div className="space-y-4">
        <div>
          <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Frontend</h4>
          <div className="flex flex-wrap gap-1.5">
            {portfolioData.skills.frontend.map(s => (
              <span key={s} className="px-2.5 py-1 bg-zinc-100 text-zinc-700 rounded-lg text-xs">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Backend & DB</h4>
          <div className="flex flex-wrap gap-1.5">
            {[...portfolioData.skills.backend, ...portfolioData.skills.databases].map(s => (
              <span key={s} className="px-2.5 py-1 bg-zinc-100 text-zinc-700 rounded-lg text-xs">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">AI & Tools</h4>
          <div className="flex flex-wrap gap-1.5">
            {[...portfolioData.skills.ai, ...portfolioData.skills.tools].map(s => (
              <span key={s} className="px-2.5 py-1 bg-zinc-100 text-zinc-700 rounded-lg text-xs">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
