"use client";

import SplineEmbed from "@/components/SplineEmbed";

const SCENE_URL = "/robot-arm.splinecode";

export default function RobotArmSpline() {
  return (
    <SplineEmbed scene={SCENE_URL} transparentBackground />
  );
}
