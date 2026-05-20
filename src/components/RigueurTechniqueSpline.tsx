"use client";

import Spline from "@splinetool/react-spline/next";

interface RigueurTechniqueSplineProps {
  scene: string;
}

export default function RigueurTechniqueSpline({
  scene,
}: RigueurTechniqueSplineProps) {
  return (
    <div className="absolute inset-0 w-full h-full [&_canvas]:!w-full [&_canvas]:!h-full">
      <Spline scene={scene} className="w-full h-full" />
    </div>
  );
}
