"use client";

import { useRef } from "react";
import { useInView } from "./useInView";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section id="education" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="section-divider mb-20" />

        <div className="grid md:grid-cols-12 gap-12 md:gap-16" ref={ref}>
          {/* Label */}
          <div className="md:col-span-4">
            <div
              className={`transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-amber" />
                <span className="text-amber font-mono text-xs tracking-[0.3em] uppercase">
                  04
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">
                Education
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-8">
            <div
              className={`relative p-8 md:p-10 bg-surface border border-border group hover:border-amber/20 transition-all duration-700 delay-200 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-12 h-px bg-amber transition-all duration-500 group-hover:w-20" />
              <div className="absolute top-0 right-0 w-px h-12 bg-amber transition-all duration-500 group-hover:h-20" />
              <div className="absolute bottom-0 left-0 w-12 h-px bg-amber transition-all duration-500 group-hover:w-20" />
              <div className="absolute bottom-0 left-0 w-px h-12 bg-amber transition-all duration-500 group-hover:h-20" />

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-light border border-border rounded-full mb-6">
                <span className="font-mono text-xs text-amber">Jun 2024</span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                The African Leadership University
              </h3>
              <p className="text-amber font-medium text-sm mb-2">
                Bachelor&apos;s of Engineering, Computer Software Engineering
              </p>
              <p className="text-muted text-sm font-light flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-amber/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Kigali, Rwanda
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
