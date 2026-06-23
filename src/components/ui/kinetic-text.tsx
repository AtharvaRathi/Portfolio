"use client";

import { motion } from "framer-motion";

interface KineticTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function KineticText({ text, className = "", delay = 0 }: KineticTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { 
      y: "100%", 
      filter: "blur(10px)",
      opacity: 0
    },
    show: {
      y: "0%",
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 150,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, idx) => (
        <div key={idx} className="overflow-hidden inline-flex mr-[0.25em] mb-[0.1em]">
          <motion.span variants={item} className="inline-block">
            {word}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
}
