"use client";

import AnimatedShapeVisual from "@/components/AnimatedShapeVisual";

/** Animation Spline — uniquement dans le hero (ne suit plus le scroll) */
export default function PageBackgroundAnimation() {
  return (
    <div className="motion-reduce:hidden absolute inset-0 z-0 h-full w-full bg-[#f9f9f9] pointer-events-auto">
      <AnimatedShapeVisual
        variant="hero"
        interactive
        backgroundColor="#f9f9f9"
        className="h-full w-full"
      />
    </div>
  );
}
