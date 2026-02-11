"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-amber/[0.03] blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-amber/[0.02] blur-[100px]" />
      </div>

      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#d4a054 1px, transparent 1px), linear-gradient(90deg, #d4a054 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 w-full">
        <div className="flex flex-col items-start">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="w-12 h-px bg-amber" />
            <span className="text-amber font-mono text-xs tracking-[0.3em] uppercase">
              Senior Frontend Engineer
            </span>
          </div>

          {/* Name */}
          <h1
            className={`font-serif font-bold leading-[0.9] tracking-tight mb-8 transition-all duration-700 delay-200 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground">
              Jacques
            </span>
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl gradient-text mt-2">
              Twizeyimana
            </span>
          </h1>

          {/* Description */}
          <p
            className={`max-w-xl text-muted text-base md:text-lg font-light leading-relaxed mb-12 transition-all duration-700 delay-400 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Building performant, accessible web experiences from Kigali, Rwanda.
            I lead teams and craft interfaces with React, Next.js, and
            TypeScript.
          </p>

          {/* CTA Row */}
          <div
            className={`flex flex-wrap items-center gap-4 transition-all duration-700 delay-500 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-amber text-[#0a0a0a] text-sm font-medium tracking-wider uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,160,84,0.3)]"
            >
              <span className="relative z-10">Get in Touch</span>
              <svg
                className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <div className="absolute inset-0 bg-amber-light translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-sm font-light tracking-wider uppercase text-muted hover:text-foreground hover:border-amber/40 transition-all duration-300"
            >
              View Work
            </a>
          </div>

          {/* Stats row */}
          <div
            className={`flex flex-wrap gap-12 mt-20 pt-10 border-t border-border/50 transition-all duration-700 delay-700 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "10+", label: "Developers Led" },
              { value: "20+", label: "Projects Delivered" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-muted text-xs tracking-widest uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-muted text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-amber/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
