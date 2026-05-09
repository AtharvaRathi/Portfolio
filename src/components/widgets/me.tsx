import { portfolioData } from "@/data/portfolio";
import { MapPin, GraduationCap } from "lucide-react";

export function MeWidget() {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-zinc-200/60 rounded-3xl p-6 shadow-sm max-w-sm">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-zinc-100">
          {portfolioData.avatar ? (
            <img src={portfolioData.avatar} alt="Avatar" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-zinc-200" />
          )}
        </div>
        <div>
          <h3 className="font-semibold text-zinc-900">{portfolioData.name}</h3>
          <p className="text-sm text-zinc-500">{portfolioData.role}</p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="flex items-center gap-1 px-2.5 py-1 bg-zinc-100 text-zinc-600 rounded-lg text-xs font-medium">
          <MapPin className="w-3 h-3" /> {portfolioData.location}
        </span>
        <span className="flex items-center gap-1 px-2.5 py-1 bg-zinc-100 text-zinc-600 rounded-lg text-xs font-medium">
          <GraduationCap className="w-3 h-3" /> {portfolioData.education}
        </span>
      </div>
      
      <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">
        {portfolioData.about}
      </p>
    </div>
  );
}
