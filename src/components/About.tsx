"use client";

import { useRef } from "react";
import { useInView } from "./useInView";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8" ref={ref}>
        <div className="section-divider mb-20" />

        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
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
                  01
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">
                About
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-8">
            <div
              className={`space-y-6 transition-all duration-700 delay-200 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90">
                I&apos;m a Senior Frontend Engineer with over 5 years of
                experience building production-grade web applications. Currently
                based in{" "}
                <span className="text-amber font-medium">Kigali, Rwanda</span>,
                I lead a team of 10 developers at PivotAccess Ltd, where I
                combine technical expertise with mentorship to deliver
                high-quality software.
              </p>

              <p className="text-base font-light leading-relaxed text-muted">
                My work spans the full frontend stack &mdash; from architecting
                scalable React and Next.js applications to implementing
                accessible, responsive interfaces with Tailwind CSS. I&apos;m
                passionate about code quality, having improved clean commit rates
                by 30% through structured peer review processes and reduced
                onboarding time from two weeks to just three days through
                knowledge-sharing workshops.
              </p>

              <p className="text-base font-light leading-relaxed text-muted">
                Before my current role, I worked as a Software Engineer at Grade
                Arc in Minneapolis, where I built GraphQL architectures with 99%
                uptime and designed CI/CD pipelines that cut deployment times in
                half. I hold a Bachelor&apos;s of Engineering in Computer
                Software Engineering from The African Leadership University.
              </p>

              <div className="pt-8 flex flex-wrap gap-6">
                {[
                  {
                    icon: (
                      <svg
                        className="w-5 h-5"
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
                    ),
                    label: "Kigali, Rwanda",
                  },
                  {
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    ),
                    label: "PivotAccess Ltd",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-muted"
                  >
                    <span className="text-amber">{item.icon}</span>
                    <span className="text-sm font-light">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
