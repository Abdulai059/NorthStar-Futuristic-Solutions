"use client";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "#Services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <>
      <nav className="z-50 flex items-center justify-between w-full py-4 px-4 md:px-16 lg:px-24 xl:px-40 text-sm">
        <div className="flex items-center gap-2.5">
          <div className="flex flex-col leading-none">
            <span className="font-[var(--font-gt)] text-white text-base tracking-tight">
              North<span className="text-primary">Star</span>
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-zinc-500">
              Futuristic Solutions
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-zinc-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="hidden md:block px-7 py-2 bg-primary hover:bg-grayc active:scale-95 transition-all rounded-sm text-white"
        >
          Get started
        </Link>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden active:scale-90 transition text-white"
        >
          <MenuIcon className="size-5" />
        </button>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[99] bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-[100] bg-background border-l border-grayc flex flex-col md:hidden transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-grayc">
          <div className="flex items-center gap-2.5">
            <div className="flex flex-col leading-none">
              <span className="font-[var(--font-gt)] text-white text-base tracking-tight">
                North<span className="text-primary">Star</span>
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-zinc-500">
                Futuristic Solutions
              </span>
            </div>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-zinc-400 hover:text-white transition p-1"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col px-4 py-6 gap-1 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between px-3 py-3 rounded-lg text-secondary hover:text-white hover:bg-grayc transition-all duration-150 text-sm group"
            >
              {link.label}
              <svg
                className="size-3.5 text-zinc-600 group-hover:text-zinc-400 transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="px-6 pb-10 pt-4 border-t border-grayc">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-grayc active:scale-95 transition-all rounded-sm text-white text-sm font-medium"
          >
            Get Started
            <svg
              className="size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
