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

const SCENE_URL = "/rigueur-technique.splinecode";

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

function GifFallback() {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/rigueur-technique.gif"
      alt="Rigueur technique"
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
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

interface RigueurTechniqueSplineProps {
  scene?: string;
}

export default function RigueurTechniqueSpline({
  scene = SCENE_URL,
}: RigueurTechniqueSplineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLoad = useCallback((app: Application) => {
    disableCameraControls(app);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Scroll la page même si Spline capte la molette
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
    <SplineErrorBoundary fallback={<GifFallback />}>
      <div ref={containerRef} className="absolute inset-0 h-full w-full">
        <Spline
          scene={scene}
          onLoad={handleLoad}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </SplineErrorBoundary>
  );
}
