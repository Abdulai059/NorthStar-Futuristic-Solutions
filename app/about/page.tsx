"use client";

import { useEffect, useRef, useState } from "react";
import Layout from "../(public-pages)/layout";
import HowWeWork from "@/components/ui/HomeWeWork";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function fadeUp(visible: boolean, delay = 0) {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  };
}

function fadeIn(visible: boolean, delay = 0) {
  return {
    opacity: visible ? 1 : 0,
    transition: `opacity 0.7s ease ${delay}s`,
  };
}

const stats = [
  { num: "50+", label: "Businesses Served" },
  { num: "10×", label: "Faster Task Completion" },
  { num: "100%", label: "Local-First Focus" },
  { num: "3", label: "Core Service Areas" },
];

const values = [
  {
    icon: "⚡",
    title: "Simplicity",
    desc: "Solutions must be easy to use and implement — from day one.",
  },
  {
    icon: "📈",
    title: "Impact",
    desc: "Every automation should create measurable, real-world value.",
  },
  {
    icon: "🌍",
    title: "Local First",
    desc: "We prioritize the needs and realities of Northern Ghanaian businesses.",
  },
  {
    icon: "🤝",
    title: "Trust & Transparency",
    desc: "Affordable, honest, and accountable delivery — always.",
  },
  {
    icon: "📚",
    title: "Continuous Learning",
    desc: "Improving systems, workflows, and knowledge every single day.",
  },
  {
    icon: "🛡️",
    title: "Reliability",
    desc: "We show up, we deliver, and we stand behind our work.",
  },
];

const timeline = [
  {
    step: "1",
    title: "The Idea",
    desc: "Founder Abdul-Fatahi Adam identifies a gap: local businesses need tech that works for them, not against them.",
  },
  {
    step: "2",
    title: "First Pilot",
    desc: "Built automation systems for a private school and retail shop — proving simple tools deliver real results.",
  },
  {
    step: "3",
    title: "NFS Launch",
    desc: "NorthStar Futuristic Solutions officially opens its doors to schools, NGOs, and businesses across Northern Ghana.",
  },
  {
    step: "4",
    title: "Growing Impact",
    desc: "Expanding services, growing the team, and helping more organizations work smarter every day.",
  },
];

const whyItems = [
  {
    title: "Rooted in Tamale",
    desc: "We're local. We understand your market, your customers, and your challenges firsthand.",
  },
  {
    title: "Fast Delivery",
    desc: "No months-long projects. We build fast and deliver measurable outcomes quickly.",
  },
  {
    title: "No Tech Overwhelm",
    desc: "Simple tools, plain language, and step-by-step guidance — even if you're not tech-savvy.",
  },
  {
    title: "Fully Documented",
    desc: "Every workflow comes with clear docs so your team can take over with confidence.",
  },
  {
    title: "Affordable & Fair",
    desc: "Priced for Northern Ghana's reality — not for multinational corporate budgets.",
  },
  {
    title: "Purpose-Driven AI",
    desc: "We cut through the hype and deliver AI that is practical, not performative.",
  },
];

function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex items-center pt-28 pb-20 px-6 md:px-[5vw] overflow-hidden min-h-[92vh]">
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <div style={fadeUp(mounted, 0.1)}>
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-grayc px-4 py-1.5 rounded-full text-white text-xs font-medium tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Based in Tamale, Northern Ghana
            </div>
          </div>

          <div style={fadeUp(mounted, 0.25)}>
            <h1
              className="font-medium text-3xl md:text-5xl leading-[1.15] mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              AI Solutions Built for{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ee4822, #ff7a57)",
                }}
              >
                Local Impact
              </span>
            </h1>
          </div>

          <div style={fadeUp(mounted, 0.4)}>
            <p className="text-secondary text-sm leading-relaxed max-w-md mb-10">
              NorthStar Futuristic Solutions empowers schools, shops, NGOs, and
              small businesses in Northern Ghana to automate tasks, generate
              leads, and create content — using simple AI systems that actually
              work.
            </p>
          </div>

          <div style={fadeUp(mounted, 0.55)} className="flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="bg-primary text-white font-medium px-7 py-3 rounded-sm text-sm shadow-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 transition-all duration-200"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Book a Session
            </a>
            <a
              href="#story"
              className="border border-grayc text-secondary px-7 py-3 rounded-sm text-sm hover:border-primary/60 hover:text-white transition-all duration-200"
            >
              Our Story ↓
            </a>
          </div>
        </div>

        {/* Right — Orbital Graphic */}
        <div
          style={fadeIn(mounted, 0.35)}
          className="hidden lg:flex justify-center items-center"
        >
          <div className="relative w-[420px] h-[420px]">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute rounded-full border"
                style={{
                  inset: `${i * 15}%`,
                  borderColor:
                    i === 0
                      ? "rgba(238,72,34,0.18)"
                      : i === 1
                        ? "rgba(255,255,255,0.08)"
                        : "rgba(212,212,212,0.06)",
                  animation: `spin ${[22, 15, 10][i]}s linear infinite ${i === 1 ? "reverse" : ""}`,
                }}
              />
            ))}

            <div
              className="absolute inset-[35%] rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #1a1a1a, #2e2e2e)",
                border: "1px solid rgba(238,72,34,0.35)",
                boxShadow:
                  "0 0 60px rgba(238,72,34,0.18), inset 0 0 30px rgba(0,0,0,0.4)",
              }}
            >
              <span
                className="text-4xl font-bold"
                style={{
                  color: "#ee4822",
                  textShadow: "0 0 20px rgba(238,72,34,0.7)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                NFS
              </span>
            </div>

            {[
              { text: "🤖 AI Automation", pos: "top-3 left-4" },
              { text: "📊 Data Insights", pos: "top-3 right-4" },
              { text: "📣 Lead Generation", pos: "bottom-8 left-0" },
              { text: "✍️ Content Creation", pos: "bottom-8 right-0" },
            ].map(({ text, pos }, idx) => (
              <div
                key={text}
                className={`absolute ${pos} px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap`}
                style={{
                  backgroundColor: "rgba(20,20,20,0.9)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#e5e5e5",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                  animation: `float ${2.5 + idx * 0.4}s ease-in-out infinite alternate`,
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes float { from { transform: translateY(0px); } to { transform: translateY(-8px); } }
      `}</style>
    </section>
  );
}

function StatsBar() {
  const { ref, visible } = useInView();

  return (
    <div ref={ref} className="relative z-10 py-16 px-6 md:px-[5vw]">
      {/* Divider line */}
      <div
        className="max-w-6xl mx-auto mb-12 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(238,72,34,0.3), transparent)",
        }}
      />
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(({ num, label }, i) => (
          <div key={label} style={fadeUp(visible, i * 0.1)}>
            <div
              className="font-extrabold text-4xl mb-1"
              style={{
                fontFamily: "'Syne', sans-serif",
                color: "#ee4822",
                textShadow: "0 0 30px rgba(238,72,34,0.3)",
              }}
            >
              {num}
            </div>
            <div className="text-secondary text-sm">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MissionSection() {
  const { ref, visible } = useInView();

  return (
    <section ref={ref} className="relative z-10 py-20 px-6 md:px-[5vw]">
      <div className="max-w-6xl mx-auto">
        <div style={fadeUp(visible, 0)}>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Mission & Vision
          </span>
          <h2
            className="font-medium text-2xl md:text-4xl mb-12"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            What Drives Us Forward
          </h2>
        </div>

        {/* Mission / Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {[
            {
              icon: "🎯",
              title: "Our Mission",
              body: "To provide small organizations in Tamale and Northern Ghana with practical AI tools that automate tasks, generate leads, and simplify work — without requiring new staff or complex software.",
            },
            {
              icon: "🔭",
              title: "Our Vision",
              body: "To be the go-to AI automation and support partner for Northern Ghana's small and mid-sized organizations — helping hundreds of businesses modernize operations without the tech headache.",
            },
          ].map(({ icon, title, body }, i) => (
            <div
              key={title}
              style={fadeUp(visible, 0.15 + i * 0.15)}
              className="relative border border-grayc rounded-sm p-8 overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(238,72,34,0.06) 0%, transparent 60%)",
                }}
              />
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/5 pointer-events-none" />
              <span className="text-3xl mb-5 block">{icon}</span>
              <h3
                className="font-medium text-lg mb-3 text-white"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div style={fadeUp(visible, 0.3)}>
          <h3
            className="font-medium text-xl mb-2 text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Core Values
          </h3>
          <p className="text-secondary text-sm mb-8">
            The principles that guide every solution we build and every
            relationship we keep.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              style={fadeUp(visible, 0.35 + i * 0.07)}
              className="border border-grayc rounded-sm p-5 hover:border-primary/40 hover:-translate-y-1 group transition-all duration-300"
            >
              <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform duration-200 inline-block">
                {icon}
              </span>
              <h4
                className="font-medium text-sm text-primary mb-1"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {title}
              </h4>
              <p className="text-secondary text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  const { ref, visible } = useInView();

  return (
    <section
      id="story"
      ref={ref}
      className="relative z-10 py-20 px-6 md:px-[5vw]"
    >
      {/* Section background accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 15% 50%, rgba(238,72,34,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left */}
        <div>
          <div style={fadeUp(visible, 0)}>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              Our Story
            </span>
            <h2
              className="font-medium text-2xl md:text-4xl mb-5 text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Homegrown Solutions for
              <br />
              Local Challenges
            </h2>
          </div>
          <div style={fadeUp(visible, 0.15)}>
            <p className="text-secondary text-sm leading-relaxed mb-4">
              NorthStar Futuristic Solutions was founded in Tamale with a single
              goal: to make practical AI accessible to businesses that are often
              overlooked by technology providers.
            </p>
            <p className="text-secondary text-sm leading-relaxed">
              We saw small schools struggling with fee tracking, retail shops
              manually managing stock, and NGOs overwhelmed by repetitive tasks.
              Instead of building complicated software, we chose a smarter path
              — leveraging tools like Make.com, Google Sheets, and ChatGPT to
              build simple systems that work today.
            </p>
          </div>
        </div>

        {/* Right — Timeline */}
        <div style={fadeIn(visible, 0.2)} className="relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />

          {timeline.map(({ step, title, desc }, i) => (
            <div
              key={step}
              style={fadeUp(visible, 0.1 + i * 0.12)}
              className="relative mb-8 last:mb-0"
            >
              <div
                className="absolute -left-8 w-7 h-7 rounded-full border-2 border-primary flex items-center justify-center text-primary text-xs font-bold transition-all duration-300"
                style={{
                  backgroundColor: visible
                    ? "rgba(238,72,34,0.1)"
                    : "transparent",
                  transitionDelay: `${0.1 + i * 0.12}s`,
                }}
              >
                {step}
              </div>
              <h4
                className="font-medium text-sm text-primary mb-1"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {title}
              </h4>
              <p className="text-secondary text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  const { ref, visible } = useInView();

  return (
    <section ref={ref} className="relative z-10 py-20 px-6 md:px-[5vw]">
      <div className="max-w-6xl mx-auto">
        <div style={fadeUp(visible, 0)}>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Meet the Founder
          </span>
          <h2
            className="font-medium text-2xl md:text-4xl mb-10 text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            The Person Behind NFS
          </h2>
        </div>

        <div style={fadeUp(visible, 0.15)}>
          <div className="relative border border-grayc rounded-sm p-8 md:p-12 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 items-center overflow-hidden group hover:border-primary/30 transition-colors duration-500">
            {/* Glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 20% 50%, rgba(238,72,34,0.05) 0%, transparent 60%)",
              }}
            />

            <div
              className="absolute top-0 right-8 text-[9rem] leading-none font-bold text-primary/5 select-none pointer-events-none"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              "
            </div>

            {/* Avatar */}
            <div className="relative mx-auto sm:mx-0 flex-shrink-0">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl"
                style={{
                  background: "linear-gradient(135deg, #ee4822, #c93a18)",
                  fontFamily: "'Syne', sans-serif",
                  boxShadow: "0 0 30px rgba(238,72,34,0.25)",
                }}
              >
                AA
              </div>
              <div
                className="absolute inset-[-4px] rounded-full border border-primary/30"
                style={{ animation: "pulse-ring 2.5s ease-in-out infinite" }}
              />
            </div>

            {/* Info */}
            <div>
              <h3
                className="font-medium text-lg text-white mb-0.5"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Abdul-Fatahi Adam
              </h3>
              <p className="text-primary text-xs font-medium mb-4">
                Founder & CEO — NorthStar Futuristic Solutions
              </p>
              <blockquote className="border-l-2 border-primary pl-4 text-secondary text-sm italic leading-relaxed">
                "I founded NFS to bridge the gap between small businesses and
                modern technology — making tools work for people, not the other
                way around. Every solution we build starts with a real problem
                faced by a real business in our community."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse-ring {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%       { opacity: 0.7; transform: scale(1.04); }
        }
      `}</style>
    </section>
  );
}

function WhyNFS() {
  const { ref, visible } = useInView();

  return (
    <section ref={ref} className="relative z-10 py-20 px-6 md:px-[5vw]">
      <div className="max-w-6xl mx-auto">
        <div style={fadeUp(visible, 0)}>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Why Choose NFS
          </span>
          <h2
            className="font-medium text-2xl md:text-4xl mb-3 text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Our Promise to You
          </h2>
          <p className="text-secondary text-sm leading-relaxed max-w-lg mb-12">
            Real solutions from a team that understands where you're coming from
            and where you want to go.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyItems.map(({ title, desc }, i) => (
            <div
              key={title}
              style={fadeUp(visible, 0.1 + i * 0.08)}
              className="flex gap-4 items-start border border-grayc rounded-sm p-5 hover:border-primary/40 hover:-translate-y-1 group transition-all duration-300"
            >
              <div className="w-7 h-7 rounded-sm bg-primary/10 flex items-center justify-center text-primary text-sm flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors duration-200">
                ✓
              </div>
              <div>
                <h4
                  className="font-medium text-sm text-white mb-1"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {title}
                </h4>
                <p className="text-secondary text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <Layout>
      <Hero />
      <StatsBar />
      <MissionSection />
      <Story />
      <HowWeWork />
      <Founder />
      <WhyNFS />
    </Layout>
  );
}
