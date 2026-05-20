"use client";

import SplineEmbed from "@/components/SplineEmbed";
import type { Application } from "@splinetool/runtime";

const ROBOT_SCENE_URL =
  "https://prod.spline.design/UKQ0T8Pf6nc0NRMs/scene.splinecode";

type Camera3D = {
  zoom?: number;
  position?: { x: number; y: number; z: number };
};

function fitRobotInView(app: Application, layout: "anchor" | "mobile") {
  const controls = app.controls as {
    enableRotate?: boolean;
    enableZoom?: boolean;
    enablePan?: boolean;
  } | null;

  if (controls) {
    controls.enableRotate = false;
    controls.enableZoom = false;
    controls.enablePan = false;
  }

  app.setBackgroundColor("transparent");

  const camera = (app as Application & { camera?: Camera3D }).camera;
  if (camera?.position) {
    if (layout === "mobile") {
      camera.position.y += 95;
      camera.position.z *= 1.55;
    } else {
      camera.position.y += 120;
      camera.position.z *= 1.85;
    }
  }
  if (camera && typeof camera.zoom === "number") {
    camera.zoom = layout === "anchor" ? 0.52 : 0.58;
  }
}

interface ProfilRobotSplineProps {
  layout?: "anchor" | "mobile";
}

export default function ProfilRobotSpline({
  layout = "mobile",
}: ProfilRobotSplineProps) {
  return (
    <SplineEmbed
      scene={ROBOT_SCENE_URL}
      transparentBackground
      onSceneLoad={(app) => fitRobotInView(app, layout)}
      className="absolute inset-0 h-full w-full"
    />
  );
}
