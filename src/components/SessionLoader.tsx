"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

const STORAGE_KEY = "portfolio-loader-shown";

type Status = "checking" | "loading" | "exiting" | "done";

export default function SessionLoader({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(STORAGE_KEY);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (alreadyShown || reducedMotion) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setStatus("done");
    } else {
      setStatus("loading");
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setStatus("exiting");
  };

  const handleExitComplete = () => {
    setStatus((prev) => (prev === "exiting" ? "done" : prev));
  };

  const contentHidden = status === "loading" || status === "exiting";

  return (
    <>
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        {status === "loading" && <LoadingScreen onComplete={handleComplete} />}
      </AnimatePresence>
      <div
        style={{
          opacity: contentHidden ? 0 : 1,
          transition: "opacity 0.5s ease-out",
        }}
      >
        {children}
      </div>
    </>
  );
}
