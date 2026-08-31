"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ArrowUp, Mic, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { playClickSound } from "@/utils/sounds";

interface ChatInputProps {
  onAsk: (question: string) => void;
  isLoading: boolean;
  isChatMode?: boolean;
}

// Extend Window type to include webkit speech recognition
declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

export function ChatInput({ onAsk, isLoading, isChatMode = false }: ChatInputProps) {
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognitionAPI) {
      setSpeechSupported(true);
      const rec = new SpeechRecognitionAPI();
      rec.continuous = false;
      rec.interimResults = true;
      rec.lang = "en-US";

      rec.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = Array.from(event.results)
          .map((r) => r[0].transcript)
          .join("");
        setQuery(transcript);
      };

      rec.onend = () => {
        setIsListening(false);
      };

      rec.onerror = () => {
        setIsListening(false);
      };

      setRecognition(rec);
    }
  }, []);

  const toggleVoice = useCallback(() => {
    if (!recognition) return;
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      setQuery("");
      recognition.start();
      setIsListening(true);
    }
  }, [recognition, isListening]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim() || isLoading) return;
    if (isListening) recognition?.stop();
    playClickSound();
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
        placeholder={isListening ? "Listening..." : "Ask me anything..."}
        disabled={isLoading}
        className="flex-1 bg-transparent border-none py-4 pl-6 pr-3 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 dark:placeholder:text-zinc-400 focus:outline-none disabled:opacity-50 text-[15px]"
      />

      {/* Voice button — shown only if supported */}
      {speechSupported && (
        <button
          type="button"
          onClick={toggleVoice}
          className="relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all"
          title={isListening ? "Stop listening" : "Voice input"}
        >
          <AnimatePresence mode="wait">
            {isListening ? (
              <motion.div
                key="listening"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute inset-0 rounded-full bg-red-500/10 flex items-center justify-center"
              >
                {/* Pulsing ring */}
                <span className="absolute inset-0 rounded-full bg-red-400/20 animate-ping" />
                <Mic className="w-4 h-4 text-red-500 relative z-10" />
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="w-10 h-10 flex items-center justify-center"
              >
                <Mic className="w-4 h-4 text-zinc-400 dark:text-zinc-500 hover:text-[#B7669A] dark:hover:text-[#B7669A] transition-colors" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      )}

      {/* Send button */}
      <button
        type="submit"
        disabled={isLoading || !query.trim()}
        className="flex-shrink-0 mr-2 w-10 h-10 rounded-full bg-[#B7669A] text-white disabled:bg-zinc-200 disabled:text-zinc-400 dark:disabled:bg-zinc-800 flex items-center justify-center transition-colors"
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : isChatMode ? (
          <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
        ) : (
          <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
        )}
      </button>
    </motion.form>
  );
}
