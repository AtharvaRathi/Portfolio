"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TerminalScreen({ onClose }: { onClose: () => void }) {
  const [history, setHistory] = useState<string[]>([
    "Welcome to AtharvaOS v1.0.0",
    "Type 'help' for a list of commands."
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const args = cmd.trim().toLowerCase().split(" ");
    const command = args[0];
    
    let output = "";
    switch (command) {
      case "help":
        output = "Available commands: help, whoami, clear, exit, sudo hire atharva";
        break;
      case "whoami":
        output = "guest_user";
        break;
      case "clear":
        setHistory([]);
        return;
      case "exit":
        onClose();
        return;
      case "sudo":
        if (args.join(" ") === "sudo hire atharva") {
          output = "Authentication successful. Access granted. Expect a highly skilled developer on your team.";
        } else {
          output = "Sorry, user is not in the sudoers file. This incident will be reported.";
        }
        break;
      case "":
        return;
      default:
        output = `Command not found: ${command}`;
    }
    setHistory((prev) => [...prev, `> ${cmd}`, output]);
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center font-mono"
      >
        <div className="w-full max-w-4xl h-full max-h-[80vh] bg-zinc-950 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden flex flex-col">
          <div className="bg-zinc-900 border-b border-zinc-800 p-3 flex items-center justify-between">
            <div className="flex gap-2">
              <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-zinc-400 text-xs">guest@atharva-portfolio:~</span>
            <div className="w-10"></div>
          </div>
          <div className="flex-1 p-4 overflow-y-auto text-green-500 text-sm sm:text-base">
            {history.map((line, i) => (
              <div key={i} className="mb-1 opacity-90">{line}</div>
            ))}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-blue-400">➜</span>
              <span className="text-cyan-400">~</span>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCommand(input);
                  setInput("");
                }}
                className="flex-1 flex"
              >
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  autoFocus
                  className="flex-1 bg-transparent border-none outline-none text-green-400"
                />
              </form>
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
