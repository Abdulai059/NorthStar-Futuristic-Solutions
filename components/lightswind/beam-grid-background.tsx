"use client";

import React, { useEffect, useRef, useState } from "react";

export interface BeamGridBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  gridSize?: number;
  gridColor?: string;
  darkGridColor?: string;
  beamColor?: string;
  darkBeamColor?: string;
  beamSpeed?: number;
  beamThickness?: number;
  beamGlow?: boolean;
  glowIntensity?: number;
  beamCount?: number;
  extraBeamCount?: number;
  idleSpeed?: number;
  interactive?: boolean;
  asBackground?: boolean;
  className?: string;
  children?: React.ReactNode;
  showFade?: boolean;
  fadeIntensity?: number;
}

const BeamGridBackground: React.FC<BeamGridBackgroundProps> = ({
  gridSize = 40,
  gridColor = "#e5e7eb",
  darkGridColor = "#27272a",
  beamColor = "rgba(0, 180, 255, 0.8)",
  darkBeamColor = "rgba(0, 255, 255, 0.8)",
  beamSpeed = 0.1,
  beamThickness = 3,
  beamGlow = true,
  glowIntensity = 50,
  beamCount = 8,
  extraBeamCount = 3,
  idleSpeed = 1.15,
  interactive = true,
  asBackground = true,
  showFade = true,
  fadeIntensity = 20,
  className,
  children,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastMouseMoveRef = useRef(Date.now());

  // --- Dark Mode Detection ---
  useEffect(() => {
    const updateDarkMode = () => {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(
        document.documentElement.classList.contains("dark") || prefersDark,
      );
    };
    updateDarkMode();
    const observer = new MutationObserver(() => updateDarkMode());
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // --- Drawing Logic ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d")!;
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const cols = Math.floor(rect.width / gridSize);
    const rows = Math.floor(rect.height / gridSize);

    // Initialize vertical beams only
    const createBeam = (type: "primary" | "extra") => ({
      x: Math.floor(Math.random() * cols),
      y: Math.floor(Math.random() * rows),
      dir: "y" as const,
      offset: Math.random() * gridSize,
      speed:
        type === "primary"
          ? beamSpeed + Math.random() * 0.3
          : beamSpeed * 0.5 + Math.random() * 0.1,
      type,
    });

    const primaryBeams = Array.from({ length: beamCount }, () =>
      createBeam("primary"),
    );
    const extraBeams = Array.from({ length: extraBeamCount }, () =>
      createBeam("extra"),
    );

    const allBeams = [...primaryBeams, ...extraBeams];

    const updateMouse = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      lastMouseMoveRef.current = Date.now();
    };

    if (interactive) window.addEventListener("mousemove", updateMouse);

    const draw = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);

      const lineColor = isDarkMode ? darkGridColor : gridColor;
      const activeBeamColor = isDarkMode ? darkBeamColor : beamColor;

      // Draw grid
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      for (let x = 0; x <= rect.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, rect.height);
        ctx.stroke();
      }
      for (let y = 0; y <= rect.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(rect.width, y);
        ctx.stroke();
      }

      const now = Date.now();
      const idle = now - lastMouseMoveRef.current > 2000;

      // Draw vertical beams
      allBeams.forEach((beam) => {
        ctx.strokeStyle = activeBeamColor;
        ctx.lineWidth =
          beam.type === "extra" ? beamThickness * 0.75 : beamThickness;

        ctx.shadowBlur = beamGlow ? glowIntensity : 0;
        ctx.shadowColor = beamGlow ? activeBeamColor : "transparent";

        const x = beam.x * gridSize;
        const beamLength = gridSize * 1.5;
        const start = -beamLength + (beam.offset % (rect.height + beamLength));

        ctx.beginPath();
        ctx.moveTo(x, start);
        ctx.lineTo(x, start + beamLength);
        ctx.stroke();

        beam.offset += idle ? beam.speed * idleSpeed * 60 : beam.speed * 60;
        if (beam.offset > rect.height + beamLength) beam.offset = -beamLength;
      });

      ctx.shadowBlur = 0;

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (interactive) window.removeEventListener("mousemove", updateMouse);
    };
  }, [
    gridSize,
    beamColor,
    darkBeamColor,
    gridColor,
    darkGridColor,
    beamSpeed,
    beamCount,
    extraBeamCount,
    beamThickness,
    glowIntensity,
    beamGlow,
    isDarkMode,
    idleSpeed,
    interactive,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className || ""}`}
      {...props}
      style={{
        position: asBackground ? "absolute" : "relative",
        top: asBackground ? 0 : undefined,
        left: asBackground ? 0 : undefined,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        ...(props.style || {}),
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 bg-white dark:bg-black"
          style={{
            maskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
            WebkitMaskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
          }}
        />
      )}

      {!asBackground && (
        <div className="relative z-0 w-full h-full">{children}</div>
      )}
    </div>
  );
};

export default BeamGridBackground;
