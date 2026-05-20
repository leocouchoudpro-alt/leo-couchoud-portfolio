"use client";

import dynamic from "next/dynamic";

const RobotArmSpline = dynamic(() => import("@/components/RobotArmSpline"), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 bg-neutral-100/60 animate-pulse"
      aria-hidden
    />
  ),
});

export default function RobotArmVisual() {
  return <RobotArmSpline />;
}
