"use client";

import { useEffect, useRef, useState } from "react";

type UseViewportActiveOptions = {
  /** Charge un peu avant d’entrer à l’écran */
  rootMargin?: string;
  /** Visible dès le montage (ex. hero) */
  initialActive?: boolean;
  /** Décharge hors écran pour libérer le GPU */
  unloadWhenHidden?: boolean;
};

/**
 * Active le rendu lourd uniquement quand l’élément est proche du viewport.
 * Réduit les bugs GPU sur mobile sans changer le design une fois affiché.
 */
export function useViewportActive({
  rootMargin = "240px 0px",
  initialActive = false,
  unloadWhenHidden = true,
}: UseViewportActiveOptions = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(initialActive);
  const allowUnloadRef = useRef(!initialActive);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          allowUnloadRef.current = true;
          setShouldRender(true);
        } else if (unloadWhenHidden && allowUnloadRef.current) {
          setShouldRender(false);
        }
      },
      { rootMargin, threshold: 0.02 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, unloadWhenHidden]);

  return { ref, shouldRender };
}
