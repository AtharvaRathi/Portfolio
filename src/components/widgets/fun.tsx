import { portfolioData } from "@/data/portfolio";
import { Sparkles } from "lucide-react";

export function FunWidget() {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-zinc-200/60 rounded-3xl p-5 shadow-sm max-w-sm">
      <h3 className="font-semibold text-zinc-900 mb-3 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-[#B7669A]" />
        Fun Facts
      </h3>
      <ul className="space-y-3">
        {portfolioData.fun.map((fact, idx) => (
          <li key={idx} className="text-sm text-zinc-600 leading-relaxed">
            • {fact}
          </li>
        ))}
      </ul>
    </div>
  );
}
