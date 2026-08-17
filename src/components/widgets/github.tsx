"use client";

import { useEffect, useState } from "react";
import { AnimatedWidget } from "@/components/ui/animated-widget";
import { Github, Star } from "lucide-react";

export function GitHubWidget() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <AnimatedWidget className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800/60 rounded-[2rem] p-5 sm:p-6 shadow-sm max-w-sm transition-colors duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 text-lg">
          <div className="p-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100">
            <Github className="w-5 h-5" />
          </div>
          Live GitHub Stats
        </h3>
        {data && (
          <a href={data.html_url} target="_blank" rel="noreferrer" className="text-xs font-medium text-[#B7669A] hover:underline">
            View Profile
          </a>
        )}
      </div>

      {loading ? (
        <div className="space-y-4 animate-pulse">
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2"></div>
          <div className="h-16 bg-zinc-200 dark:bg-zinc-800 rounded-xl"></div>
          <div className="h-16 bg-zinc-200 dark:bg-zinc-800 rounded-xl"></div>
        </div>
      ) : data?.error ? (
        <p className="text-sm text-zinc-500">Could not load GitHub stats.</p>
      ) : (
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-xl p-3 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-zinc-900 dark:text-zinc-100">{data.public_repos}</span>
              <span className="text-xs text-zinc-500 font-medium">Public Repos</span>
            </div>
            <div className="flex-1 bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-xl p-3 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-zinc-900 dark:text-zinc-100">{data.followers}</span>
              <span className="text-xs text-zinc-500 font-medium">Followers</span>
            </div>
          </div>

          {data.repos?.length > 0 && (
            <div className="mt-4">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Recently Updated</h4>
              <div className="space-y-2">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {data.repos.map((repo: any) => (
                  <a 
                    key={repo.name} 
                    href={repo.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="block bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-100 dark:border-zinc-800/50 rounded-xl p-3 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-[#B7669A] transition-colors">{repo.name}</span>
                      {repo.language && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                          {repo.language}
                        </span>
                      )}
                    </div>
                    {repo.description && (
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate mb-2">{repo.description}</p>
                    )}
                    <div className="flex items-center gap-3 text-xs text-zinc-400">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" /> {repo.stars}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </AnimatedWidget>
  );
}
