"use client";

import { useState } from "react";
import { ArrowRight, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

interface ChatInputProps {
  onAsk: (question: string) => void;
  isLoading: boolean;
  isChatMode?: boolean;
}

export function ChatInput({ onAsk, isLoading, isChatMode = false }: ChatInputProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim() || isLoading) return;
    onAsk(query);
    setQuery("");
  };

  return (
    <motion.form 
      layoutId="chat-input"
      onSubmit={handleSubmit}
      className="relative flex items-center shadow-sm rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl h-14 w-full transition-all hover:shadow-md focus-within:shadow-md focus-within:border-zinc-300 dark:focus-within:border-zinc-700"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask me anything..."
        disabled={isLoading}
        className="flex-1 bg-transparent border-none py-4 px-6 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 dark:placeholder:text-zinc-400 focus:outline-none disabled:opacity-50 text-[15px]"
      />
      <button
        type="submit"
        disabled={isLoading || !query.trim()}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#B7669A] text-white disabled:bg-zinc-200 disabled:text-zinc-400 flex items-center justify-center transition-colors"
      >
        {isChatMode ? (
          <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
        ) : (
          <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
        )}
      </button>
    </motion.form>
  );
}
