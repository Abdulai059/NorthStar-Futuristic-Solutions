"use client";

import { Zap, Palette, BarChart3 } from "lucide-react";
import Layout from "../(public-pages)/layout";

const services = [
  {
    icon: Zap,
    title: "WhatsApp-to-Invoice Copilot",
    desc: "Auto-convert WhatsApp orders into invoices — fast, accurate, zero manual work.",
    tag: "Automation",
  },
  {
    icon: Palette,
    title: "Content Factory",
    desc: "Branded posts, captions, and videos every month — effortlessly consistent.",
    tag: "Content",
  },
  {
    icon: BarChart3,
    title: "Ops Automation Starter",
    desc: "Workflows, alerts, and dashboards that cut repetitive tasks — live in days.",
    tag: "Operations",
  },
];

export default function ServiceSection() {
  return (
    <Layout>
      <section
        id="services"
        className="relative py-20 px-6 md:px-[5vw] overflow-hidden"
      >
        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-[10px] font-semibold tracking-widest uppercase mb-4 text-primary">
              What We Offer
            </span>

            <h1
              className=" text-3xl md:text-4xl font-medium text-white mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our AI-Powered Service Packages
            </h1>

            <p className="text-xs max-w-lg mx-auto leading-relaxed text-secondary">
              AI tools built for businesses in Tamale — simple, affordable, and
              effective.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, desc, tag }) => (
              <div
                key={title}
                className="relative p-6 rounded-xl border border-grayc bg-btn-bg hover:border-primary/30 hover:bg-grayc transition-all duration-300 group flex flex-col gap-5"
              >
                {/* Icon + Tag row */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(238,72,34,0.1)",
                      border: "1px solid rgba(238,72,34,0.2)",
                    }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <span
                    className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full text-primary"
                    style={{
                      background: "rgba(238,72,34,0.08)",
                      border: "1px solid rgba(238,72,34,0.15)",
                    }}
                  >
                    {tag}
                  </span>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5 flex-1">
                  <h3 className="font-medium text-sm text-foreground">
                    {title}
                  </h3>
                  <p className="text-xs leading-relaxed text-secondary">
                    {desc}
                  </p>
                </div>

                {/* Learn more */}
                <div className="flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300">
                  Learn more
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200 inline-block">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
