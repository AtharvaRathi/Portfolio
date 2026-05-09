import { portfolioData } from "@/data/portfolio";
import { Download, FileText } from "lucide-react";

export function ResumeWidget() {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-zinc-200/60 rounded-3xl p-6 shadow-sm max-w-sm">
      <h3 className="font-semibold text-zinc-900 mb-3 flex items-center gap-2">
        <FileText className="w-4 h-4 text-[#B7669A]" />
        Resume Summary
      </h3>
      <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
        {portfolioData.resume.summary}
      </p>
      
      <a 
        href={portfolioData.resume.downloadLink}
        className="flex justify-between items-center px-4 py-3 bg-zinc-50 border border-zinc-200/60 rounded-xl hover:bg-zinc-100 transition-colors group"
      >
        <span className="text-sm font-medium text-zinc-700">Download Full Resume</span>
        <Download className="w-4 h-4 text-zinc-400 group-hover:text-[#B7669A] transition-colors" />
      </a>
    </div>
  );
}
