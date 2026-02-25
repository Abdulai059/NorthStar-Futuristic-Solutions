"use client";

import { useState } from "react";
import { Users, Target, Rocket } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const features = [
  {
    icon: Target,
    color: "text-primary",
    title: "Mission-Driven",
    desc: "We exist to make practical AI accessible to schools, shops, and NGOs in Northern Ghana — tools that work for you, not against you.",
  },
  {
    icon: Users,
    color: "text-emerald-400",
    title: "Local Expertise",
    desc: "Born and based in Tamale. We understand the real challenges of Northern Ghanaian businesses because we live them every day.",
  },
  {
    icon: Rocket,
    color: "text-amber-400",
    title: "Fast & Affordable",
    desc: "No long timelines or corporate pricing. We build and deliver working automations in days, priced for the local market.",
  },
];

function SectionBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 border border-grayc px-4 py-1.5 rounded-full mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
        {label}
      </span>
    </div>
  );
}

export default function AboutSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const activeIndex = hovered ?? 0;

  const { ref, fadeUp } = useFadeIn();

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 md:px-[5vw] overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div style={fadeUp(0)} className="text-center mb-16">
          <SectionBadge label="About NorthStar" />
          <h2
            className="font-medium text-3xl md:text-4xl text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Built for Local Impact
          </h2>
          <p className="text-secondary text-sm max-w-lg mx-auto leading-relaxed">
            NorthStar Futuristic Solutions is Tamale's AI automation partner —
            helping small organizations work smarter with tools that are simple,
            affordable, and built for the real world.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-16">
          {/* Left Card */}
          <div
            style={fadeUp(0.15)}
            className="relative w-full max-w-sm lg:max-w-md flex-shrink-0 order-2 lg:order-1 mt-8 lg:mt-0"
          >
            <div
              className="relative rounded-sm overflow-hidden border border-grayc"
              style={{ aspectRatio: "4/5" }}
            >
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-10">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500"
                  style={{
                    background: "linear-gradient(135deg, #ee4822, #c93a18)",
                    boxShadow:
                      activeIndex === 0
                        ? "0 0 60px rgba(238,72,34,0.4)"
                        : activeIndex === 1
                          ? "0 0 60px rgba(52,211,153,0.25)"
                          : "0 0 60px rgba(251,191,36,0.25)",
                  }}
                >
                  <span
                    className="text-3xl font-bold text-white"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    NFS
                  </span>
                </div>

                <div className="text-center space-y-2 transition-all duration-500">
                  <p
                    className="text-lg font-medium text-white"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {features[activeIndex].title}
                  </p>
                  <p className="text-secondary text-xs leading-relaxed max-w-[200px] mx-auto">
                    {features[activeIndex].desc}
                  </p>
                </div>

                <div className="flex gap-2 mt-2">
                  {features.map((_, i) => (
                    <div
                      key={i}
                      className="h-1 rounded-full transition-all duration-300"
                      style={{
                        width: activeIndex === i ? "24px" : "8px",
                        background:
                          activeIndex === i
                            ? "#ee4822"
                            : "rgba(255,255,255,0.15)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div
            style={fadeUp(0.25)}
            className="w-full max-w-md order-1 lg:order-2"
            onMouseLeave={() => setHovered(null)}
          >
            {features.map(({ icon: Icon, color, title, desc }, i) => (
              <div
                key={title}
                style={fadeUp(0.35 + i * 0.1)}
                className="group cursor-pointer"
                onMouseEnter={() => setHovered(i)}
              >
                <div
                  className={`flex gap-5 p-6 rounded-sm border transition-all duration-300 ${
                    activeIndex === i
                      ? "border-grayc bg-grayc"
                      : "border-transparent hover:border-grayc hover:bg-grayc/50"
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300"
                    style={{
                      background:
                        activeIndex === i
                          ? "rgba(238,72,34,0.1)"
                          : "transparent",
                      border:
                        activeIndex === i
                          ? "1px solid rgba(238,72,34,0.2)"
                          : "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>

                  <div className="space-y-1.5">
                    <h3
                      className="text-sm font-medium text-white"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {title}
                    </h3>
                    <p className="text-secondary text-xs leading-relaxed max-w-xs">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="px-6 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-medium text-primary transition-all duration-200 hover:gap-3"
              >
                Work with us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
