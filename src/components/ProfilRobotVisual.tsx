"use client";

import dynamic from "next/dynamic";
import { useViewportActive } from "@/hooks/useViewportActive";

const ProfilRobotSpline = dynamic(() => import("@/components/ProfilRobotSpline"), {
  ssr: false,
});

function RobotPlaceholder() {
  return (
    <div
      className="absolute inset-0 bg-[#f3f3f3] animate-pulse"
      aria-hidden
    />
  );
}

interface ProfilRobotVisualProps {
  variant?: "anchor" | "mobile";
}

export default function ProfilRobotVisual({
  variant = "mobile",
}: ProfilRobotVisualProps) {
  const { ref, shouldRender } = useViewportActive({ rootMargin: "320px 0px" });
  const frameClass =
    variant === "anchor"
      ? "profil-robot-frame relative h-full w-full"
      : "profil-robot-frame profil-robot-frame--mobile relative h-full w-full";

  return (
    <div ref={ref} className={frameClass}>
      {shouldRender ? (
        <ProfilRobotSpline layout={variant === "anchor" ? "anchor" : "mobile"} />
      ) : (
        <RobotPlaceholder />
      )}
    </div>
  );
}
