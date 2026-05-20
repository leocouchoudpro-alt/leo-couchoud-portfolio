"use client";

import SplineEmbed from "@/components/SplineEmbed";
import type { Application } from "@splinetool/runtime";
import { useCallback } from "react";

const SCENE_URL = "/robot-arm.splinecode";

function hideFloor(app: Application) {
  app.findObjectByName("Floor")?.hide();

  app.getAllObjects().forEach((obj) => {
    const lower = obj.name.toLowerCase();
    if (lower === "floor" || lower.includes("floor material")) {
      obj.hide();
    }
  });
}

export default function RobotArmSpline() {
  const handleSceneLoad = useCallback((app: Application) => {
    hideFloor(app);
  }, []);

  return (
    <SplineEmbed
      scene={SCENE_URL}
      transparentBackground
      onSceneLoad={handleSceneLoad}
    />
  );
}
