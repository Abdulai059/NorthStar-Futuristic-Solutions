"use client";
import Toggle from "../data/toggle";

import SectionTitle from "@/components/section-title";
import { CircleCheckIcon, CircleDollarSignIcon } from "lucide-react";
import { useState } from "react";

interface PricingData {
  name: string;
  pricing: number;
  mostPopular?: boolean;
  features: string[];
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const pricingData: PricingData[] = [
    {
      name: "Free",
      pricing: 0,
      features: [
        "1 project",
        "AI-generated starter layout",
        "Basic components library",
        "Launchify subdomain",
        "Community support",
        "Limited customization",
      ],
    },
    {
      name: "Pro",
      pricing: 19,
      mostPopular: true,
      features: [
        "Unlimited projects",
        "AI-powered components",
        "Custom domains",
        "Advanced customization",
        "Analytics dashboard",
        "Email support",
        "Export-ready pages",
      ],
    },
    {
      name: "Enterprise",
      pricing: 49,
      features: [
        "Unlimited projects & teams",
        "Advanced AI automation",
        "Team collaboration",
        "Enterprise-grade security",
        "Priority 24/7 support",
        "Custom integrations",
        "SLA & compliance support",
      ],
    },
  ];

  return (
    <>
      <div id="pricing" className="flex flex-col items-center py-16 px-4 mt-20">
        <SectionTitle
          icon={<CircleDollarSignIcon className="text-primary" />}
          badge="Pricing"
          title="Simple, transparent pricing"
          description="Flexible pricing options designed to meet your needs whether you're just getting started or scaling up."
        />

        <Toggle isYearly={isYearly} setIsYearly={setIsYearly} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
          {pricingData.map((plan: PricingData, index: number) => (
            <div
              key={index}
              className={
                plan.mostPopular
                  ? "bg-gradient-to-r from-primary to-orange-300 rounded-2xl p-1 sm:p-2 hover:shadow-lg transition-shadow"
                  : ""
              }
            >
              {plan.mostPopular && (
                <p className="text-center text-green-700 text-sm py-1.5">
                  Popular
                </p>
              )}
              <div
                key={index}
                className={`rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-white ${!plan.mostPopular ? "border border-neutral-200 hover:shadow-lg transition-shadow" : ""}`}
              >
                <h3 className="text-neutral-700 text-sm mb-6">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-2xl sm:text-[28px] text-neutral-900">
                    {isYearly
                      ? `$${plan.pricing - Math.round(plan.pricing * 0.15)}`
                      : `$${plan.pricing}`}
                  </span>
                  <span className="text-neutral-600 text-xs">/ month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-zinc-500"
                    >
                      <CircleCheckIcon size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full cursor-pointer py-3 rounded-full bg-gradient-to-r from-green-500 to-green-300 text-white text-sm hover:opacity-95 transition-opacity">
                  Get started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
