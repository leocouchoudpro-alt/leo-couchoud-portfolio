"use client";

import AnimatedShapeVisual from "@/components/AnimatedShapeVisual";
import { useViewportActive } from "@/hooks/useViewportActive";

/** Animation Spline — uniquement dans le hero (ne suit plus le scroll) */
export default function PageBackgroundAnimation() {
  const { ref, shouldRender } = useViewportActive({
    initialActive: true,
    rootMargin: "120px 0px",
  });

  return (
    <div
      ref={ref}
      className="motion-reduce:hidden absolute inset-0 z-0 h-full w-full bg-[#f9f9f9] pointer-events-auto"
    >
      <AnimatedShapeVisual
        variant="hero"
        interactive
        backgroundColor="#f9f9f9"
        className="h-full w-full"
        enabled={shouldRender}
      />
    </div>
  );
}
