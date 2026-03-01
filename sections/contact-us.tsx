"use client";

import {
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const contactInfo = [
  {
    icon: <MapPin className="size-4 text-primary" />,
    label: "Location",
    value: "Accra, Greater Accra, Ghana",
  },
  {
    icon: <Phone className="size-4 text-primary" />,
    label: "Phone",
    value: "+233 XX XXX XXXX",
  },
  {
    icon: <Mail className="size-4 text-primary" />,
    label: "Email",
    value: "hello@northstarfs.com",
  },
];

function FloatingField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <label className="block text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mb-1">
        {label}
      </label>
      {children}
      {error && <p className="text-[10px] text-red-400 mt-1.5">{error}</p>}
    </div>
  );
}

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (_data: FormData) => {
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("sent");
    reset();
  };

  const fieldClass = (hasError: boolean) =>
    `w-full bg-transparent border-b py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300  ${
      hasError
        ? "border-red-500 focus:border-red-400"
        : "border-zinc-700 hover:border-zinc-500 focus:border-primary"
    }`;

  return (
    <div className="py-0 md:py-20 px-4">
      <div className="text-center mb-20">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase text-primary mb-5">
          <Mail className="size-3.5" />
          Contact Us
        </span>
        <h2 className="text-2xl md:text-4xl text-white mb-4 tracking-tight">
          Let's build something <br /> <span>together.</span>
        </h2>
        <p className="text-sm text-secondary max-w-sm mx-auto leading-relaxed">
          Tell us about your project and we'll get back to you within 24 hours.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-5  flex-col gap-12 md:gap-20">
        <div className="md:col-span-2 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="group flex items-center gap-4 p-4 rounded-xl border border-grayc bg-btn-bg hover:border-primary/30 transition-all duration-200"
              >
                <div className="size-9 rounded-lg border border-grayc bg-background flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-grayc bg-btn-bg p-5 hidden md:block">
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mb-4">
              Avg. Response Time
            </p>
            <div className="flex items-end gap-1.5 h-14">
              {[35, 60, 45, 75, 50, 90, 65].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-primary/15 border-t border-primary/30"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between mt-3">
              <p className="text-[10px] text-zinc-600 ">Mon — Sun</p>
              <p className="text-[10px] ">
                <span className="text-primary font-semibold">{"< 24 hrs"}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center text-center gap-5 border border-grayc rounded-2xl bg-btn-bg px-8 py-16">
              <div className="size-16 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="size-7 text-primary" />
              </div>
              <div>
                <h3 className="font-gt text-xl text-white mb-2">
                  Message sent!
                </h3>
                <p className="text-sm text-secondary max-w-xs leading-relaxed">
                  Thanks for reaching out. We'll be in touch within 24 hours.
                </p>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="text-xs text-primary underline underline-offset-4 hover:text-white transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="border border-grayc rounded-2xl bg-btn-bg p-7 md:p-9 flex flex-col gap-8"
            >
              <div className="grid sm:grid-cols-2 gap-8">
                <FloatingField label="Full Name" error={errors.name?.message}>
                  <input
                    placeholder="Kwame Mensah"
                    className={fieldClass(!!errors.name)}
                    {...register("name", { required: "Name is required" })}
                  />
                </FloatingField>

                <FloatingField
                  label="Email Address"
                  error={errors.email?.message}
                >
                  <input
                    type="email"
                    placeholder="kwame@business.com"
                    className={fieldClass(!!errors.email)}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                </FloatingField>
              </div>

              <FloatingField label="Subject" error={errors.subject?.message}>
                <select
                  defaultValue=""
                  className={`${fieldClass(!!errors.subject)} appearance-none cursor-pointer`}
                  {...register("subject", {
                    required: "Please select a subject",
                  })}
                >
                  <option value="" disabled className="bg-zinc-900">
                    Select a service...
                  </option>
                  <option value="invoicing" className="bg-zinc-900">
                    School Invoicing & Payments
                  </option>
                  <option value="inventory" className="bg-zinc-900">
                    Inventory Management
                  </option>
                  <option value="content" className="bg-zinc-900">
                    Content Factory
                  </option>
                  <option value="custom" className="bg-zinc-900">
                    Custom Solution
                  </option>
                  <option value="other" className="bg-zinc-900">
                    Other
                  </option>
                </select>
              </FloatingField>

              <FloatingField label="Message" error={errors.message?.message}>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project, goals, or questions..."
                  className={`${fieldClass(!!errors.message)} resize-none`}
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 20,
                      message: "At least 20 characters",
                    },
                  })}
                />
              </FloatingField>

              <div className="md:flex flex-col md:flex-row items-center justify-between pt-1">
                <p className="text-xs text-zinc-600 ">
                  * We never share your data.
                </p>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center gap-2 bg-primary text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-lg hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {status === "sending" ? (
                    <>
                      <span className="animate-pulse">Sending</span>
                      <Send className="size-3.5 animate-pulse" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="size-3.5 group-hover:translate-x-1 text-white transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
