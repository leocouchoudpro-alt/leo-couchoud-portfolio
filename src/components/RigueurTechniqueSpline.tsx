"use client";

import Spline from "@splinetool/react-spline";
import { Component, type ReactNode } from "react";

// Fichier local = pas de souci CORS (téléchargé depuis Spline)
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

interface RigueurTechniqueSplineProps {
  scene?: string;
}

export default function RigueurTechniqueSpline({
  scene = SCENE_URL,
}: RigueurTechniqueSplineProps) {
  return (
    <SplineErrorBoundary fallback={<GifFallback />}>
      <div className="absolute inset-0 h-full w-full">
        <Spline
          scene={scene}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </SplineErrorBoundary>
  );
}
