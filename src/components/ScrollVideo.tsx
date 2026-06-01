"use client";

import { useEffect, useRef } from "react";
import { useViewportActive } from "@/hooks/useViewportActive";

export default function ScrollVideo({ src }: { src: string }) {
  const { ref: containerRef, shouldRender } = useViewportActive({
    rootMargin: "240px 0px",
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas || !shouldRender) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const video = document.createElement("video");
    video.src = src;
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";

    let ready = false;
    let disposed = false;

    const drawFrame = () => {
      if (!ready || !ctx || disposed) return;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    };

    video.addEventListener("loadeddata", () => {
      if (disposed) return;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ready = true;
      drawFrame();
    });

    video.addEventListener("seeked", drawFrame);

    const updateFromScroll = () => {
      if (!ready || !video.duration || disposed) return;
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(
        0,
        Math.min(1, (vh - rect.top) / (vh + rect.height))
      );
      const targetTime = progress * video.duration;
      if (Math.abs(video.currentTime - targetTime) > 0.04) {
        video.currentTime = targetTime;
      }
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = 0;
        updateFromScroll();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateFromScroll();

    return () => {
      disposed = true;
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      video.removeAttribute("src");
      video.load();
    };
  }, [src, shouldRender, containerRef]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="h-full w-full object-cover"
        aria-hidden={!shouldRender}
      />
    </div>
  );
}
