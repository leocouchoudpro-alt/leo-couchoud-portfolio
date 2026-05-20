"use client";

import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";
import {
  Component,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from "react";

class SplineErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function disableCameraControls(app: Application) {
  const controls = app.controls as {
    enableRotate?: boolean;
    enableZoom?: boolean;
    enablePan?: boolean;
  } | null;

  if (controls) {
    controls.enableRotate = false;
    controls.enableZoom = false;
    controls.enablePan = false;
  }
}

export interface SplineEmbedProps {
  scene: string;
  fallback?: ReactNode;
  transparentBackground?: boolean;
  className?: string;
}

export default function SplineEmbed({
  scene,
  fallback = null,
  transparentBackground = false,
  className = "absolute inset-0 h-full w-full",
}: SplineEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLoad = useCallback(
    (app: Application) => {
      disableCameraControls(app);
      if (transparentBackground) {
        app.setBackgroundColor("transparent");
      }
    },
    [transparentBackground]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (!el.contains(e.target as Node)) return;
      window.scrollBy({ top: e.deltaY, left: e.deltaX });
    };

    el.addEventListener("wheel", onWheel, { capture: true, passive: true });

    return () => {
      el.removeEventListener("wheel", onWheel, { capture: true });
    };
  }, []);

  return (
    <SplineErrorBoundary fallback={fallback ?? <></>}>
      <div ref={containerRef} className={className}>
        <Spline
          scene={scene}
          onLoad={handleLoad}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </SplineErrorBoundary>
  );
}
