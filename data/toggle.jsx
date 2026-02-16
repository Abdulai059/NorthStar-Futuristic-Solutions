"use client";
import { useState } from "react";

export default function Toggle({ isYearly, setIsYearly }) {
  const [hovered, setHovered] = useState(null);
  return (
    <div
      className="relative p-1 mt-10 
      bg-linear-to-b from-[#141414] to-[#242424]
      border border-bc rounded-full 
      inline-flex items-center mb-16 w-60
      shadow-[inset_10px_0_10px_black]"
    >
      {hovered && (
        <div
          className={`absolute top-1 left-1 w-[calc(50%-4px)] h-10.5 rounded-full
            bg-bc
            shadow-[inset_0_2px_7px_#ffffff29]
            transition-all duration-200
            ${hovered === "yearly" ? "translate-x-full" : "translate-x-0"}
          `}
        />
      )}

      <div
        className={`absolute top-1 left-1 w-[calc(50%-4px)] h-10.5 rounded-full
          bg-linear-to-b from-[#f2f2f2] to-[#b3b3b3]
          shadow-[inset_0_2px_7px_#fff]
          transition-all duration-300
          ${isYearly ? "translate-x-full" : "translate-x-0"}
        `}
      />

      <button
        onMouseEnter={() => setHovered("monthly")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => setIsYearly(false)}
        className={`relative z-10 flex-1 py-2.5 rounded-full text-sm font-medium transition-colors
          ${!isYearly ? "text-black" : "text-zinc-300 hover:text-white"}
        `}
      >
        Monthly
      </button>

      <button
        onMouseEnter={() => setHovered("yearly")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => setIsYearly(true)}
        className={`relative z-10 flex-1 py-2.5 rounded-full text-sm font-medium flex items-center justify-center gap-1 transition-colors
          ${isYearly ? "text-black" : "text-zinc-300 hover:text-white"}
        `}
      >
        Yearly
        <span className="text-xs text-primary">15% off</span>
      </button>
    </div>
  );
}
