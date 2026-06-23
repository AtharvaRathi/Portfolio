"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HomeView } from "@/components/home-view";
import { ChatView } from "@/components/chat-view";
import { portfolioData } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.error || `API Error: ${res.status}`);
      }

      const data = await res.json();
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.answer,
        widget: data.widget || data.relatedSection || predefinedWidget || null,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error: unknown) {
      const err = error as Error;
      console.error(err);
      
      const isRateLimit = err.message?.includes("429") || err.message?.includes("503") || err.message?.includes("Too Many Requests") || err.message?.includes("quota") || err.message?.toLowerCase().includes("high demand") || err.message?.toLowerCase().includes("service unavailable");
      
      let fallbackContent = isRateLimit 
        ? "Wow, I'm getting a lot of messages right now and hit my AI rate limit! 😅 Here is some quick info, but feel free to browse the UI or contact me directly!"
        : "Sorry, I couldn't process that right now through the AI. Here is some quick info instead!";
      
      const q = question.toLowerCase();
      let widgetToShow = predefinedWidget || null;

      if (!widgetToShow) {
        if (q.includes("project")) widgetToShow = "projects";
        else if (q.includes("skill") || q.includes("tech") || q.includes("stack")) widgetToShow = "skills";
        else if (q.includes("experience") || q.includes("work") || q.includes("intern")) widgetToShow = "experience";
        else if (q.includes("contact") || q.includes("email") || q.includes("reach")) widgetToShow = "contact";
        else if (q.includes("cert")) widgetToShow = "certifications";
        else if (q.includes("fun") || q.includes("about") || q.includes("who")) widgetToShow = "me";
      }

      if (!widgetToShow) {
         fallbackContent = isRateLimit 
           ? "I'm currently experiencing high traffic and my AI has hit its rate limit (429). Please try again later, or use the buttons below to navigate my portfolio!"
           : "Sorry, I couldn't process that right now. Please try using the quick links below!";
      }

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: fallbackContent,
        widget: widgetToShow,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-hidden w-full transition-colors duration-300">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Giant faded background text */}
      <div className="fixed top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-[0.02] dark:opacity-[0.015] select-none text-[30vw] font-black tracking-tighter text-zinc-900 dark:text-zinc-100 whitespace-nowrap transition-colors duration-300">
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
