"use client";

import { useEffect, useRef, type CSSProperties } from "react";

const SPLINE_EMBED_URL_DEFAULT =
  "https://my.spline.design/animatedshapeblend-TwGn4uGbP2hbwht2yhjK58YU/";

interface AnimatedShapeVisualProps {
  className?: string;
  backgroundColor?: string;
  interactive?: boolean;
  embedUrl?: string;
  /** hero = accueil | cv-ribbon = fond page CV */
  variant?: "default" | "hero" | "cv-ribbon";
  /** Monte l’iframe uniquement quand true */
  enabled?: boolean;
}

export default function AnimatedShapeVisual({
  className = "relative h-full w-full",
  backgroundColor = "#f3f3f3",
  interactive = false,
  embedUrl = SPLINE_EMBED_URL_DEFAULT,
  variant = "default",
  enabled = true,
}: AnimatedShapeVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (!el.contains(e.target as Node)) return;
      window.scrollBy({ top: e.deltaY, left: e.deltaX });
    };

    el.addEventListener("wheel", onWheel, { capture: true, passive: true });
    return () => el.removeEventListener("wheel", onWheel, { capture: true });
  }, []);

  return (
    <div
      ref={containerRef}
      className={`spline-embed-crop ${variant === "hero" ? "spline-embed-crop--hero" : ""} ${variant === "cv-ribbon" ? "spline-embed-crop--cv-ribbon" : ""} ${interactive ? "spline-embed-crop--interactive" : ""} ${className}`}
      style={
        {
          backgroundColor,
          ["--spline-bg" as string]: backgroundColor,
        } as CSSProperties
      }
      aria-hidden={!interactive}
    >
      {enabled ? (
        <div className="spline-embed-crop__stage">
          <iframe
            src={embedUrl}
            title="Animation interactive"
            style={{
              background:
                variant === "cv-ribbon" ? "transparent" : backgroundColor,
            }}
            loading={variant === "hero" ? "eager" : "lazy"}
            allow="autoplay; fullscreen; xr-spatial-tracking"
          />
        </div>
      ) : null}
    </div>
  );
}
