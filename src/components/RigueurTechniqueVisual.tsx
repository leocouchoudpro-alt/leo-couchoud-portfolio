"use client";

import dynamic from "next/dynamic";

const RigueurTechniqueSpline = dynamic(
  () => import("@/components/RigueurTechniqueSpline"),
  {
    ssr: false,
    loading: () => (
      <div
        className="absolute inset-0 bg-neutral-900 animate-pulse"
        aria-hidden
      />
    ),
  }
);

export default function RigueurTechniqueVisual() {
  return <RigueurTechniqueSpline />;
}
