"use client";

import dynamic from "next/dynamic";
import { useViewportActive } from "@/hooks/useViewportActive";

const RigueurTechniqueSpline = dynamic(
  () => import("@/components/RigueurTechniqueSpline"),
  { ssr: false }
);

function RigueurPlaceholder() {
  return (
    <div
      className="absolute inset-0 bg-neutral-900 animate-pulse"
      aria-hidden
    />
  );
}

export default function RigueurTechniqueVisual() {
  const { ref, shouldRender } = useViewportActive({ rootMargin: "280px 0px" });

  return (
    <div ref={ref} className="absolute inset-0">
      {shouldRender ? <RigueurTechniqueSpline /> : <RigueurPlaceholder />}
    </div>
  );
}
