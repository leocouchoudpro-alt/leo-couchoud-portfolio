"use client";

import dynamic from "next/dynamic";

const ProfilRobotSpline = dynamic(() => import("@/components/ProfilRobotSpline"), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 bg-[#f3f3f3] animate-pulse"
      aria-hidden
    />
  ),
});

interface ProfilRobotVisualProps {
  variant?: "anchor" | "mobile";
}

export default function ProfilRobotVisual({
  variant = "mobile",
}: ProfilRobotVisualProps) {
  if (variant === "anchor") {
    return (
      <div className="profil-robot-frame relative h-full w-full">
        <ProfilRobotSpline layout="anchor" />
      </div>
    );
  }

  return (
    <div className="profil-robot-frame profil-robot-frame--mobile relative h-full w-full">
      <ProfilRobotSpline layout="mobile" />
    </div>
  );
}
