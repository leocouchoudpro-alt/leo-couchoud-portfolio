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

interface RigueurTechniqueVisualProps {
  scene?: string;
}

export default function RigueurTechniqueVisual({
  scene,
}: RigueurTechniqueVisualProps) {
  if (scene) {
    return <RigueurTechniqueSpline scene={scene} />;
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/rigueur-technique.gif"
      alt="Rigueur technique"
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}
