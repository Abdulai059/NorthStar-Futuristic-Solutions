"use client";
import { steps } from "@/data/steps";
import { fadeUp, useInView } from "@/hooks/useFadeIn";

export default function HowWeWork() {
  const { ref, visible } = useInView();

  return (
    <section ref={ref} className="relative z-10 py-20 px-6 md:px-[5vw]">
      <div className="max-w-6xl mx-auto">
        <div style={fadeUp(visible, 0)} className="text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Our Approach
          </span>
          <h2
            className="font-medium text-2xl md:text-4xl mb-3 text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            How We Work With You
          </h2>
          <p className="text-secondary  text-sm leading-relaxed mx-auto max-w-lg  mb-14">
            A simple, proven four-step process — from first conversation to
            measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-7 h-px transition-all duration-1000"
            style={{
              left: "12.5%",
              right: "12.5%",
              background:
                "linear-gradient(90deg, rgba(238,72,34,0.5), rgba(238,72,34,0.15), rgba(238,72,34,0.5))",
              opacity: visible ? 1 : 0,
              transition: "opacity 1s ease 0.4s",
            }}
          />

          {steps.map(({ num, title, desc }, i) => (
            <div
              key={num}
              style={fadeUp(visible, 0.1 + i * 0.1)}
              className="text-center relative group"
            >
              <div
                className="w-14 h-14 rounded-full text-white font-bold text-lg flex items-center justify-center mx-auto mb-5 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30"
                style={{
                  background: "linear-gradient(135deg, #ee4822, #c93a18)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                {num}
              </div>
              <h3
                className="font-medium text-sm text-white mb-2"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-secondary text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
