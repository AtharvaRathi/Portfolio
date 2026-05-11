import { portfolioData } from "@/data/portfolio";
import { MapPin, Calendar, Briefcase } from "lucide-react";

export function ExperienceWidget() {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-zinc-200/60 rounded-3xl p-5 shadow-sm max-w-lg w-full">
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="w-4 h-4 text-[#B7669A]" />
        <h3 className="text-sm font-semibold text-zinc-700 uppercase tracking-wider">Experience</h3>
      </div>

      <div className="relative space-y-6">
        {/* vertical timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-200" />

        {portfolioData.experience.map((exp, i) => (
          <div key={i} className="relative pl-6">
            {/* dot */}
            <div
              className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                exp.type === "current"
                  ? "bg-[#B7669A] border-[#B7669A] shadow-[0_0_6px_rgba(183,102,154,0.5)]"
                  : "bg-white border-zinc-300"
              }`}
            />

            <div>
              <div className="flex flex-wrap items-start justify-between gap-1 mb-0.5">
                <h4 className="text-sm font-semibold text-zinc-900">{exp.title}</h4>
                <span className="flex items-center gap-1 text-xs text-zinc-400 shrink-0">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-medium text-[#B7669A] italic">{exp.company}</span>
                <span className="flex items-center gap-0.5 text-xs text-zinc-400">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </span>
                {exp.type === "current" && (
                  <span className="px-2 py-0.5 rounded-full bg-[#B7669A]/10 text-[#B7669A] text-[10px] font-semibold tracking-wide">
                    CURRENT
                  </span>
                )}
              </div>

              <ul className="space-y-1.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-xs text-zinc-600 leading-relaxed">
                    <span className="mt-1 w-1 h-1 rounded-full bg-zinc-400 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
