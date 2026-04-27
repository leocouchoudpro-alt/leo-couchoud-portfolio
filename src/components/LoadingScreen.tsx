"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const WORDS = ["Analyser", "Concevoir", "Inspirer"];
const TOTAL_DURATION = 2700;
const WORD_INTERVAL = 900;
const COMPLETE_DELAY = 400;

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => {
        if (prev >= WORDS.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, WORD_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const start = performance.now();
    let rafId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / TOTAL_DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        rafId = requestAnimationFrame(tick);
      } else {
        timeoutId = setTimeout(() => onCompleteRef.current(), COMPLETE_DELAY);
      }
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      role="status"
      aria-live="polite"
      aria-label="Chargement du portfolio"
    >
      <motion.div
        className="absolute top-8 left-8 md:top-12 md:left-12 text-xs md:text-sm text-muted uppercase tracking-[0.3em]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        aria-hidden="true"
      >
        Portfolio
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-6xl md:text-8xl lg:text-9xl font-display text-text tabular-nums"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        aria-hidden="true"
      >
        {Math.round(progress).toString().padStart(3, "0")}
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50" aria-hidden="true">
        <motion.div
          className="h-full origin-left"
          style={{
            background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
            boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
