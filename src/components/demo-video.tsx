"use client";

import { useEffect, useRef } from "react";

export function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playWhenVisible = ([entry]: IntersectionObserverEntry[]) => {
      if (!entry) return;
      if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
        video.preload = "auto";
        void video.play().catch(() => undefined);
        return;
      }
      video.pause();
    };

    const observer = new IntersectionObserver(playWhenVisible, {
      threshold: [0, 0.45, 0.7],
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      id="video"
      className="vid"
      controls
      muted
      playsInline
      preload="none"
      poster="/kit/crestora-poster.webp"
      width={1080}
      height={1920}
      aria-label="30-second Actionpackd real estate demo"
    >
      <source src="/crestora-demo-video.mp4" type="video/mp4" />
    </video>
  );
}
