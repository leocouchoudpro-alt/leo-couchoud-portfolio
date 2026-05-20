"use client";

import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";
import {
  Component,
  useCallback,
  useRef,
  type ReactNode,
  type WheelEvent,
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

function collectHoverTargets(app: Application): string[] {
  const targets: string[] = [];
  const events = app.getSplineEvents();

  for (const [id, objEvents] of Object.entries(events)) {
    if (objEvents && "mouseHover" in objEvents) {
      targets.push(id);
    }
  }

  if (targets.length === 0) {
    const named = app.findObjectByName("Sphere") ?? app.findObjectByName("Circle");
    if (named) targets.push(named.uuid);
  }

  return targets;
}

interface RigueurTechniqueSplineProps {
  scene?: string;
}

export default function RigueurTechniqueSpline({
  scene = SCENE_URL,
}: RigueurTechniqueSplineProps) {
  const appRef = useRef<Application | null>(null);
  const hoverTargetsRef = useRef<string[]>([]);

  const handleLoad = useCallback((app: Application) => {
    disableCameraControls(app);
    appRef.current = app;
    hoverTargetsRef.current = collectHoverTargets(app);
  }, []);

  const playHover = useCallback(() => {
    const app = appRef.current;
    if (!app) return;
    hoverTargetsRef.current.forEach((target) => {
      app.emitEvent("mouseHover", target);
    });
  }, []);

  const resetHover = useCallback(() => {
    const app = appRef.current;
    if (!app) return;
    hoverTargetsRef.current.forEach((target) => {
      app.emitEventReverse("mouseHover", target);
    });
  }, []);

  const handleWheel = useCallback((e: WheelEvent<HTMLDivElement>) => {
    window.scrollBy({ top: e.deltaY, left: e.deltaX });
  }, []);

  return (
    <SplineErrorBoundary fallback={<GifFallback />}>
      <div className="absolute inset-0 h-full w-full">
        <Spline
          scene={scene}
          onLoad={handleLoad}
          className="h-full w-full [&_canvas]:pointer-events-none"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Calque transparent : scroll page + hover, sans bloquer la scène */}
        <div
          className="absolute inset-0 z-10 cursor-default"
          aria-hidden
          onWheel={handleWheel}
          onMouseEnter={playHover}
          onMouseLeave={resetHover}
        />
      </div>
    </SplineErrorBoundary>
  );
}
