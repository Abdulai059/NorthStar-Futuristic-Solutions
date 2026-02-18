import React, { useEffect, useRef, useState } from "react";

const BeamGridBackground = ({
  gridSize = 40,
  gridColor = "#e5e7eb",
  darkGridColor = "#27272a",
  beamColor = "rgba(0, 180, 255, 0.8)",
  darkBeamColor = "rgba(0, 255, 255, 0.8)",
  beamSpeed = 0.1,
  beamThickness = 1,
  beamGlow = true,
  glowIntensity = 50,
  beamCount = 8,
  extraBeamCount = 3,
  idleSpeed = 1.15,
  asBackground = true,
  showFade = true,
  fadeIntensity = 20,
  className,
  children,
  style,
  ...props
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const cols = Math.floor(rect.width / gridSize);
    const rows = Math.floor(rect.height / gridSize);

    const primaryBeams = Array.from({ length: beamCount }).map(() => ({
      x: Math.floor(Math.random() * cols),
      y: Math.floor(Math.random() * rows),
      dir: Math.random() > 0.5 ? "x" : "y",
      offset: Math.random() * gridSize,
      speed: beamSpeed + Math.random() * 0.3,
      type: "primary",
    }));

    const extraBeams = Array.from({ length: extraBeamCount }).map(() => ({
      x: Math.floor(Math.random() * cols),
      y: Math.floor(Math.random() * rows),
      dir: Math.random() > 0.5 ? "x" : "y",
      offset: Math.random() * gridSize,
      speed: beamSpeed * 0.5 + Math.random() * 0.1,
      type: "extra",
    }));

    const allBeams = [...primaryBeams, ...extraBeams];

    let animFrameId;

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

      // Draw beams
      allBeams.forEach((beam) => {
        ctx.strokeStyle = activeBeamColor;
        ctx.lineWidth =
          beam.type === "extra" ? beamThickness * 0.75 : beamThickness;

        if (beamGlow) {
          ctx.shadowBlur = glowIntensity;
          ctx.shadowColor = activeBeamColor;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        if (beam.dir === "x") {
          const y = beam.y * gridSize;
          const beamLength = gridSize * 1.5;
          const start = -beamLength + (beam.offset % (rect.width + beamLength));
          ctx.moveTo(start, y);
          ctx.lineTo(start + beamLength, y);
          ctx.stroke();
          beam.offset += beam.speed * idleSpeed * 60;
          if (beam.offset > rect.width + beamLength) beam.offset = -beamLength;
        } else {
          const x = beam.x * gridSize;
          const beamLength = gridSize * 1.5;
          const start =
            -beamLength + (beam.offset % (rect.height + beamLength));
          ctx.moveTo(x, start);
          ctx.lineTo(x, start + beamLength);
          ctx.stroke();
          beam.offset += beam.speed * idleSpeed * 60;
          if (beam.offset > rect.height + beamLength) beam.offset = -beamLength;
        }
      });

      ctx.shadowBlur = 0;
      animFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameId);
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
        ...(style || {}),
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
