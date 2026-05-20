"use client";

import AnimatedShapeVisual from "@/components/AnimatedShapeVisual";

const FLOWING_RIBBON_EMBED_URL =
  "https://my.spline.design/flowingribbon-3eTeIXKL0ko8t6u2Lh5PPzir/";

export default function CvFlowingRibbonBackground() {
  return (
    <AnimatedShapeVisual
      embedUrl={FLOWING_RIBBON_EMBED_URL}
      backgroundColor="#ffffff"
      interactive
      variant="cv-ribbon"
      className="relative h-full w-full"
    />
  );
}
