import { portfolioData } from "@/data/portfolio";
import { Award, CheckCircle, Clock } from "lucide-react";

const issuerColors: Record<string, string> = {
  "Harvard University": "bg-[#A51C30]/10 text-[#A51C30]",
  "Y Combinator": "bg-orange-50 text-orange-600",
  "Meta": "bg-blue-50 text-blue-600",
  "Yale University": "bg-[#00356B]/10 text-[#00356B]",
  "Microsoft": "bg-sky-50 text-sky-600",
  "IIM Ahmedabad": "bg-amber-50 text-amber-700",
};

export function CertificationsWidget() {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-zinc-200/60 rounded-3xl p-5 shadow-sm max-w-lg w-full">
      <div className="flex items-center gap-2 mb-4">
        <Award className="w-4 h-4 text-[#B7669A]" />
        <h3 className="text-sm font-semibold text-zinc-700 uppercase tracking-wider">Certifications</h3>
      </div>

      <div className="space-y-3">
        {portfolioData.certifications.map((cert, i) => {
          const colorClass = issuerColors[cert.issuer] ?? "bg-zinc-100 text-zinc-700";
          return (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50/50 transition-all"
            >
              {/* Status icon */}
              <div className="mt-0.5 shrink-0">
                {cert.status === "completed" ? (
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Clock className="w-4 h-4 text-amber-500" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-zinc-900 leading-snug">{cert.name}</p>
                <div className="flex flex-wrap items-center gap-1.5 mt-1">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${colorClass}`}>
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] text-zinc-400">via {cert.platform}</span>
                  {cert.status === "ongoing" && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 text-[10px] font-semibold">
                      ONGOING
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
