"use client";

import AnimatedShapeVisual from "@/components/AnimatedShapeVisual";
import { useViewportActive } from "@/hooks/useViewportActive";

const FLOWING_RIBBON_EMBED_URL =
  "https://my.spline.design/flowingribbon-3eTeIXKL0ko8t6u2Lh5PPzir/";

export default function CvFlowingRibbonBackground() {
  const { ref, shouldRender } = useViewportActive({ rootMargin: "200px 0px" });

  return (
    <div ref={ref} className="relative h-full w-full">
      <AnimatedShapeVisual
        embedUrl={FLOWING_RIBBON_EMBED_URL}
        backgroundColor="#ffffff"
        interactive
        variant="cv-ribbon"
        className="relative h-full w-full"
        enabled={shouldRender}
      />
    </div>
  );
}
