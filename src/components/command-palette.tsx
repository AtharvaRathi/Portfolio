"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { playClickSound, playHoverSound } from "@/utils/sounds";
import { Terminal, Moon, Sun, Monitor, Download, Mail, LayoutGrid } from "lucide-react";

export function CommandPalette({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    playClickSound();
    command();
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <Command.Dialog 
          open={open} 
          onOpenChange={setOpen} 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-zinc-900/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-white dark:bg-zinc-950 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
          >
            <Command.Input 
              placeholder="Type a command or search..." 
              className="w-full px-4 py-4 bg-transparent border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
            />
            <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-hide">
              <Command.Empty className="py-6 text-center text-zinc-500">No results found.</Command.Empty>
              
              <Command.Group heading="Navigation">
                <Command.Item onSelect={() => runCommand(() => window.scrollTo(0, 0))} onMouseEnter={playHoverSound} className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-900 aria-selected:text-zinc-900 dark:aria-selected:text-zinc-100 text-zinc-600 dark:text-zinc-400">
                  <LayoutGrid className="w-4 h-4" /> Go to Home
                </Command.Item>
              </Command.Group>

              <Command.Group heading="Actions">
                <Command.Item onSelect={() => runCommand(onOpenTerminal)} onMouseEnter={playHoverSound} className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-900 aria-selected:text-zinc-900 dark:aria-selected:text-zinc-100 text-zinc-600 dark:text-zinc-400">
                  <Terminal className="w-4 h-4" /> Open Hacker Terminal
                </Command.Item>
                <Command.Item onSelect={() => runCommand(() => window.open('mailto:me@example.com'))} onMouseEnter={playHoverSound} className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-900 aria-selected:text-zinc-900 dark:aria-selected:text-zinc-100 text-zinc-600 dark:text-zinc-400">
                  <Mail className="w-4 h-4" /> Send Email
                </Command.Item>
                <Command.Item onSelect={() => runCommand(() => window.open('/resume.pdf'))} onMouseEnter={playHoverSound} className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-900 aria-selected:text-zinc-900 dark:aria-selected:text-zinc-100 text-zinc-600 dark:text-zinc-400">
                  <Download className="w-4 h-4" /> Download Resume
                </Command.Item>
              </Command.Group>

              <Command.Group heading="Theme">
                <Command.Item onSelect={() => runCommand(() => setTheme('light'))} onMouseEnter={playHoverSound} className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-900 aria-selected:text-zinc-900 dark:aria-selected:text-zinc-100 text-zinc-600 dark:text-zinc-400">
                  <Sun className="w-4 h-4" /> Light Mode
                </Command.Item>
                <Command.Item onSelect={() => runCommand(() => setTheme('dark'))} onMouseEnter={playHoverSound} className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-900 aria-selected:text-zinc-900 dark:aria-selected:text-zinc-100 text-zinc-600 dark:text-zinc-400">
                  <Moon className="w-4 h-4" /> Dark Mode
                </Command.Item>
                <Command.Item onSelect={() => runCommand(() => setTheme('system'))} onMouseEnter={playHoverSound} className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-900 aria-selected:text-zinc-900 dark:aria-selected:text-zinc-100 text-zinc-600 dark:text-zinc-400">
                  <Monitor className="w-4 h-4" /> System Theme
                </Command.Item>
              </Command.Group>
            </Command.List>
          </motion.div>
        </Command.Dialog>
      )}
    </AnimatePresence>
  );
}
