"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ChatResponse {
  answer: string;
  relatedSection: string | null;
}

export function AskAI() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<ChatResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: query }),
      });

      if (!res.ok) {
        throw new Error("Failed to get response");
      }

      const data = await res.json();
      setResponse(data);
      setQuery("");
    } catch {
      setError("Sorry, I couldn't answer that right now. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      <form 
        onSubmit={handleSubmit}
        className="relative flex items-center shadow-sm rounded-full border border-zinc-200 bg-white h-14"
      >
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask me anything..."
          disabled={isLoading}
          className="flex-1 bg-transparent border-none py-4 px-6 text-zinc-900 placeholder:text-zinc-400 focus:outline-none disabled:opacity-50 text-base"
        />
        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#c68aa9] text-white disabled:bg-zinc-200 disabled:text-zinc-400 flex items-center justify-center transition-colors"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>

      {/* Answer Area */}
      <div className="mt-6">
        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 text-zinc-500 py-4 px-6 bg-zinc-50 rounded-2xl border border-zinc-100"
            >
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
              <span className="text-sm">Thinking...</span>
            </motion.div>
          )}

          {error && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="py-4 px-6 bg-red-50 text-red-600 rounded-2xl border border-red-100 text-sm text-center"
            >
              {error}
            </motion.div>
          )}

          {response && !isLoading && (
            <motion.div
              key="answer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-6 px-6 bg-white rounded-3xl border border-zinc-200 shadow-md text-left"
            >
              <p className="text-zinc-800 leading-relaxed whitespace-pre-wrap">
                {response.answer}
              </p>
              
              {response.relatedSection && (
                <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center">
                  <button 
                    onClick={() => scrollToSection(response.relatedSection as string)}
                    className="flex items-center gap-1.5 text-xs font-medium text-[#c68aa9] hover:text-[#a06883] transition-colors"
                  >
                    View {response.relatedSection.charAt(0).toUpperCase() + response.relatedSection.slice(1)}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
