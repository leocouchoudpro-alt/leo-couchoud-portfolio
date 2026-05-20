"use client";

import SplineEmbed from "@/components/SplineEmbed";

const SCENE_URL = "/rigueur-technique.splinecode";

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

export default function RigueurTechniqueSpline() {
  return (
    <SplineEmbed scene={SCENE_URL} fallback={<GifFallback />} />
  );
}
