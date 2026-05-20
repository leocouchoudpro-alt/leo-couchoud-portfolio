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
    // Dézoome pour éviter que le bras soit coupé sur les bords du canvas
    app.setZoom(0.72);
  }, []);

  return (
    <SplineEmbed
      scene={SCENE_URL}
      transparentBackground
      onSceneLoad={handleSceneLoad}
      className="absolute -inset-[15%] h-[130%] w-[130%] overflow-visible [&_div]:!overflow-visible"
    />
  );
}
