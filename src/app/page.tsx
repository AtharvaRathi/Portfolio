"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HomeView } from "@/components/home-view";
import { ChatView } from "@/components/chat-view";
import { portfolioData } from "@/data/portfolio";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  widget?: string | null;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const isChatMode = messages.length > 0;

  const handleAsk = async (question: string, predefinedWidget?: string) => {
    if (!question.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, predefinedWidget }),
      });

      if (!res.ok) throw new Error("Failed");

      const data = await res.json();
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.answer,
        widget: data.widget || data.relatedSection || predefinedWidget || null,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I couldn't process that right now.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-hidden w-full">
      {/* Giant faded background text */}
      <div className="fixed top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-[0.02] select-none text-[30vw] font-black tracking-tighter text-zinc-900 whitespace-nowrap">
        {portfolioData.nickname.toLowerCase()}
      </div>

      <div className="relative z-10 w-full flex-1 flex flex-col h-full max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {!isChatMode ? (
            <HomeView key="home" onAsk={handleAsk} />
          ) : (
            <ChatView key="chat" messages={messages} isLoading={isLoading} onAsk={handleAsk} />
          )}
        </AnimatePresence>
      </div>

      {!isChatMode && (
        <footer className="relative z-10 py-6 text-center text-zinc-400 text-xs w-full">
          Powered by Next.js & Gemini
        </footer>
      )}
    </main>
  );
}
