"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

type CursorState = "default" | "hover-btn" | "hover-link" | "hover-input" | "click";

export function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isSnapping, setIsSnapping] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const dotX = useSpring(mouseX, { damping: 30, stiffness: 500, mass: 0.3 });
  const dotY = useSpring(mouseY, { damping: 30, stiffness: 500, mass: 0.3 });

  const snapX = useMotionValue(-200);
  const snapY = useMotionValue(-200);
  const snapW = useMotionValue(32);
  const snapH = useMotionValue(32);
  const snapBR = useMotionValue(16);

  const snapXSpring = useSpring(snapX, { damping: 22, stiffness: 300 });
  const snapYSpring = useSpring(snapY, { damping: 22, stiffness: 300 });
  const snapWSpring = useSpring(snapW, { damping: 22, stiffness: 300 });
  const snapHSpring = useSpring(snapH, { damping: 22, stiffness: 300 });
  const snapBRSpring = useSpring(snapBR, { damping: 22, stiffness: 300 });

  const snapToElement = useCallback((el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    const style = window.getComputedStyle(el);
    const br = parseFloat(style.borderRadius) || 8;
    setIsSnapping(true);
    snapX.set(rect.left - 4);
    snapY.set(rect.top - 4);
    snapW.set(rect.width + 8);
    snapH.set(rect.height + 8);
    snapBR.set(Math.min(br + 6, 9999));
  }, [snapX, snapY, snapW, snapH, snapBR]);

  const resetSnap = useCallback(() => {
    setIsSnapping(false);
    snapW.set(32);
    snapH.set(32);
    snapBR.set(16);
  }, [snapW, snapH, snapBR]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("ontouchstart" in window) return;

    const onMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);

      if (!isSnapping) {
        snapX.set(e.clientX - 16);
        snapY.set(e.clientY - 16);
      }

      const target = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
      if (target) {
        const interactive = target.closest("button, a, input, textarea, select, [role='button']") as HTMLElement;
        if (interactive && isSnapping) {
          const rect = interactive.getBoundingClientRect();
          const style = window.getComputedStyle(interactive);
          const br = parseFloat(style.borderRadius) || 8;
          snapX.set(rect.left - 4);
          snapY.set(rect.top - 4);
          snapW.set(rect.width + 8);
          snapH.set(rect.height + 8);
          snapBR.set(Math.min(br + 6, 9999));
        }
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("button, a, input, textarea, select, [role='button']") as HTMLElement;
      if (interactive) {
        const tag = interactive.tagName.toLowerCase();
        if (tag === "a") setCursorState("hover-link");
        else if (tag === "input" || tag === "textarea") setCursorState("hover-input");
        else setCursorState("hover-btn");
        snapToElement(interactive);
      } else {
        setCursorState("default");
        resetSnap();
      }
    };

    const onLeave = () => { setIsVisible(false); setCursorState("default"); resetSnap(); };
    const onEnter = () => setIsVisible(true);
    const onDown = () => setCursorState("click");
    const onUp = () => {
      const target = document.elementFromPoint(
        mouseX.get() + 16,
        mouseY.get() + 16
      ) as HTMLElement;
      const interactive = target?.closest("button, a, input") as HTMLElement;
      setCursorState(interactive ? "hover-btn" : "default");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [isVisible, isSnapping, mouseX, mouseY, snapX, snapY, snapW, snapH, snapBR, snapToElement, resetSnap]);

  return (
    <>
      {/* Hide native cursor */}
      <style>{`* { cursor: none !important; }`}</style>

      <AnimatePresence>
        {isVisible && (
          <>
            {/* Morphing highlight blob that snaps to elements */}
            <motion.div
              className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
              style={{
                x: snapXSpring,
                y: snapYSpring,
                width: snapWSpring,
                height: snapHSpring,
                borderRadius: snapBRSpring,
              }}
            >
              <motion.div
                className="w-full h-full"
                animate={{
                  backgroundColor: cursorState === "click"
                    ? "rgba(183,102,154,0.3)"
                    : isSnapping
                    ? "rgba(183,102,154,0.1)"
                    : "transparent",
                  borderWidth: isSnapping ? 2 : 0,
                  borderStyle: "solid",
                  borderColor: isSnapping
                    ? cursorState === "hover-input"
                      ? "rgba(183,102,154,0.7)"
                      : "rgba(183,102,154,0.3)"
                    : "transparent",
                  scale: cursorState === "click" ? 0.95 : 1,
                }}
                transition={{ duration: 0.12 }}
                style={{ borderRadius: "inherit" }}
              />
            </motion.div>

            {/* Trailing precision dot */}
            <motion.div
              className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
              style={{ x: dotX, y: dotY, width: 32, height: 32 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B7669A] transition-all duration-150"
                style={{
                  width: isSnapping ? 3 : 7,
                  height: isSnapping ? 3 : 7,
                  opacity: isSnapping ? 0.4 : 0.9,
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
