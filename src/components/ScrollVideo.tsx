"use client";

import { useEffect, useRef } from "react";

export default function ScrollVideo({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const video = document.createElement("video");
    video.src = src;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";

    let ready = false;

    video.addEventListener("loadeddata", () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ready = true;
      ctx.drawImage(video, 0, 0);
    });

    video.addEventListener("seeked", () => {
      if (ready && ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      }
    });

    const onScroll = () => {
      if (!ready || !video.duration) return;
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when top of container hits bottom of viewport
      // 1 when bottom of container hits top of viewport
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
      const targetTime = progress * video.duration;
      if (Math.abs(video.currentTime - targetTime) > 0.03) {
        video.currentTime = targetTime;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [src]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
