"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedWidgetProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedWidget({ children, delay = 0, className = "" }: AnimatedWidgetProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
