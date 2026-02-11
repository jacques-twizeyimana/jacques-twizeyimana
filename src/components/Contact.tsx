"use client";

import { useRef } from "react";
import { useInView } from "./useInView";

const contactLinks = [
  {
    label: "Email",
    value: "twizojacques@gmail.com",
    href: "mailto:twizojacques@gmail.com",
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
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+250 786 904 652",
    href: "tel:+250786904652",
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
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "twizeyimana-jacques",
    href: "https://linkedin.com/in/twizeyimana-jacques",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="section-divider mb-20" />

        <div ref={ref}>
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-amber" />
              <span className="text-amber font-mono text-xs tracking-[0.3em] uppercase">
                05
              </span>
              <div className="w-8 h-px bg-amber" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Let&apos;s Work
              <br />
              <span className="gradient-text">Together</span>
            </h2>
            <p className="text-muted text-base font-light leading-relaxed max-w-md mx-auto">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
            {contactLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`group relative p-6 bg-surface border border-border hover:border-amber/30 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,160,84,0.08)] ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-amber/60 group-hover:text-amber transition-colors duration-300">
                  {link.icon}
                </div>
                <div className="text-xs font-mono text-amber/60 tracking-widest uppercase mb-2">
                  {link.label}
                </div>
                <div className="text-sm text-muted group-hover:text-foreground transition-colors duration-300 break-all">
                  {link.value}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
