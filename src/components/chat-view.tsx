"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ChatInput } from "./chat-input";
import { Message } from "@/app/page";
import { Smile, Briefcase, Layers, PartyPopper, User, FileText } from "lucide-react";

// Placeholder for Widget renderer
import { WidgetRenderer } from "./widgets/widget-renderer";

interface ChatViewProps {
  messages: Message[];
  isLoading: boolean;
  onAsk: (question: string, widget?: string) => void;
}

const chips = [
  { name: "Me", icon: Smile, widget: "me" },
  { name: "Projects", icon: Briefcase, widget: "projects" },
  { name: "Skills", icon: Layers, widget: "skills" },
  { name: "Fun", icon: PartyPopper, widget: "fun" },
  { name: "Contact", icon: User, widget: "contact" },
  { name: "Resume", icon: FileText, widget: "resume" },
];

export function ChatView({ messages, isLoading, onAsk }: ChatViewProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col w-full h-screen pt-6 pb-4"
    >
      {/* Top Header */}
      <motion.div 
        layoutId="avatar"
        className="flex items-center justify-center mb-8 shrink-0 relative z-20"
      >
        <div className="w-16 h-16 rounded-full overflow-hidden border border-zinc-200/50 shadow-sm bg-white">
          {portfolioData.avatar ? (
            <img src={portfolioData.avatar} alt={portfolioData.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-zinc-200" />
          )}
        </div>
      </motion.div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-2 pb-32 scrollbar-hide">
        <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "user" ? (
                  <div className="bg-[#B7669A] text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%] text-[15px] shadow-sm">
                    {msg.content}
                  </div>
                ) : (
                  <div className="w-full">
                    {msg.content && (
                      <div className="bg-white/80 backdrop-blur-md border border-zinc-200/60 text-zinc-800 px-5 py-4 rounded-3xl rounded-tl-sm max-w-[90%] text-[15px] shadow-sm whitespace-pre-wrap leading-relaxed">
                        {msg.content}
                      </div>
                    )}
                    {msg.widget && (
                      <div className="mt-3">
                        <WidgetRenderer type={msg.widget} />
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
            
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start w-full"
              >
                <div className="bg-white/80 backdrop-blur-md border border-zinc-200/60 px-5 py-4 rounded-3xl rounded-tl-sm shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={bottomRef} className="h-4" />
        </div>
      </div>

      {/* Bottom Fixed Area */}
      <motion.div 
        layoutId="search-container"
        className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#fafafa] via-[#fafafa]/80 to-transparent z-30"
      >
        <div className="w-full max-w-3xl mx-auto flex flex-col gap-3">
          {/* Scrollable Chips */}
          <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-hide no-scrollbar mask-edges">
            {chips.map((chip) => (
              <button
                key={chip.name}
                onClick={() => onAsk(`Tell me about your ${chip.name.toLowerCase()}`, chip.widget)}
                className="flex items-center gap-1.5 px-4 py-2 bg-white/60 backdrop-blur-md border border-zinc-200/60 rounded-full text-zinc-600 hover:bg-white hover:text-zinc-900 transition-colors shrink-0 text-sm shadow-sm"
              >
                <chip.icon className="w-3.5 h-3.5 text-[#B7669A]" />
                {chip.name}
              </button>
            ))}
          </div>

          <ChatInput onAsk={onAsk} isLoading={isLoading} isChatMode={true} />
        </div>
      </motion.div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}</style>
    </motion.div>
  );
}
