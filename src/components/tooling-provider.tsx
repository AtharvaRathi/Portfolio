"use client";

import { useState } from "react";
import { CommandPalette } from "./command-palette";
import { TerminalScreen } from "./terminal";

export function ToolingProvider({ children }: { children: React.ReactNode }) {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <>
      {children}
      <CommandPalette onOpenTerminal={() => setIsTerminalOpen(true)} />
      {isTerminalOpen && <TerminalScreen onClose={() => setIsTerminalOpen(false)} />}
    </>
  );
}
