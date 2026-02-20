"use client";

import { useFadeIn } from "@/hooks/useFadeIn";
import { Zap, Palette, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "WhatsApp-to-Invoice Copilot",
    desc: "Turn WhatsApp orders into organized invoices automatically. Perfect for schools, shops, and pharmacies needing faster processing and fewer errors.",
    tag: "Automation",
  },
  {
    icon: Palette,
    title: "Content Factory",
    desc: "Consistent branded posts, captions, and short videos every month. We help small businesses stay visible online without the stress of content creation.",
    tag: "Content",
  },
  {
    icon: BarChart3,
    title: "Ops Automation Starter",
    desc: "Eliminate repetitive manual work with simple automations like form-to-sheet workflows, alerts, and dashboards — built in under a week.",
    tag: "Operations",
  },
];

export default function ServicePage() {
  const { ref, fadeUp } = useFadeIn();

  return (
    <section
      ref={ref}
      className="relative py-10 px-6 md:px-[5vw] overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        <div style={fadeUp(0)} className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            What We Offer
          </span>

          <h1
            className="font-medium text-3xl md:text-4xl text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Our AI-Powered Service Packages
          </h1>

          <p className="text-secondary text-sm max-w-lg mx-auto leading-relaxed">
            Practical automation and AI systems designed to help schools, shops,
            and small businesses in Tamale work smarter and grow faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, title, desc, tag }, i) => (
            <div
              key={title}
              style={fadeUp(0.1 + i * 0.12)}
              className="relative border border-grayc rounded-sm p-7 group transition-all duration-300 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 20% 20%, rgba(238,72,34,0.06) 0%, transparent 60%)",
                }}
              />

              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 border bg-grayc/30 border-grayc">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                <span
                  className="text-[10px] font-semibold tracking-widest uppercase px-2 py-1 rounded-full"
                  style={{
                    color: "#ee4822",
                    background: "rgba(238,72,34,0.08)",
                    border: "1px solid rgba(238,72,34,0.15)",
                  }}
                >
                  {tag}
                </span>
              </div>

              <h3
                className="font-medium text-sm text-white mb-3"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {title}
              </h3>

              <p className="text-secondary text-xs leading-relaxed">{desc}</p>

              <div
                className="mt-4 flex items-center gap-1.5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: "#ee4822" }}
              >
                Learn more
                <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
