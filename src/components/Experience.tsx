"use client";

import { useRef } from "react";
import { useInView } from "./useInView";

const experiences = [
  {
    company: "PivotAccess Ltd",
    role: "Senior Frontend Developer",
    location: "Kigali, Rwanda",
    period: "Apr 2023 - Present",
    highlights: [
      "Led a team of 10 junior frontend developers, overseeing project development and ensuring adherence to timelines and quality standards.",
      "Championed knowledge-sharing workshops on React best practices and TypeScript, reducing onboarding duration from two weeks to just 3 days.",
      "Orchestrated structured peer review processes resulting in a 30% increase in clean commit rates.",
      "Improved code quality metrics by 15% through rigorous testing with Jest and Cypress, leveraging TypeScript's static typing.",
      "Streamlined deployment processes using GitLab Actions, reducing deployment time by 30%.",
      "Built robust REST API integrations and responsive, accessible designs using Tailwind CSS and Next.js.",
      "Collaborated with UI/UX designers, enhancing user satisfaction ratings by 20%.",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Jest",
      "Cypress",
      "GitLab CI",
    ],
  },
  {
    company: "Grade Arc",
    role: "Software Engineer",
    location: "Minneapolis, MN",
    period: "Feb 2021 - Mar 2023",
    highlights: [
      "Led implementation of advanced caching strategies within GraphQL architectures, achieving 99%+ system uptime.",
      "Streamlined development by integrating automated testing frameworks, reducing code review cycles by 30%.",
      "Achieved on-time release of seven key updates through strategic planning and resource allocation.",
      "Directed collaborative sessions resulting in zero post-launch defects across four consecutive releases.",
      "Designed CI/CD pipelines and automated testing procedures, reducing deployment times by 50%.",
    ],
    tech: [
      "React",
      "GraphQL",
      "Node.js",
      "CI/CD",
      "Automated Testing",
    ],
  },
  {
    company: "Yombi Labs Ltd",
    role: "Software Engineer",
    location: "Kigali, Rwanda",
    period: "Sept 2019 - Feb 2021",
    highlights: [
      "Engineered a scalable front-end architecture using Angular and Bootstrap, improving maintainability and performance.",
      "Constructed high-performance backend API services using Java and Spring Boot.",
      "Developed comprehensive API documentation using Swagger and OpenAPI.",
      "Implemented in-memory caching and optimized MySQL queries, achieving a 40% decrease in page load times.",
      "Achieved 95% test coverage using JUnit and Mockito, reducing production bugs by 60%.",
    ],
    tech: [
      "Angular",
      "Java",
      "Spring Boot",
      "MySQL",
      "Swagger",
      "JUnit",
    ],
  },
];

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.15 });

  return (
    <div ref={ref} className="relative pl-8 md:pl-12 pb-16 last:pb-0 group">
      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-1 w-3 h-3 border-2 border-amber bg-background rounded-full transition-all duration-500 ${
          isInView ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      />
      {/* Timeline line */}
      <div className="absolute left-[5px] top-4 bottom-0 w-px bg-border group-last:hidden" />

      <div
        className={`transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {/* Period badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-light border border-border rounded-full mb-4">
          <span className="font-mono text-xs text-amber">{exp.period}</span>
        </div>

        {/* Header */}
        <div className="mb-4">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
            {exp.company}
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <span className="text-amber font-medium">{exp.role}</span>
            <span className="text-border">|</span>
            <span>{exp.location}</span>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-3 mb-6">
          {exp.highlights.map((h, i) => (
            <li key={i} className="flex gap-3 text-sm font-light text-muted leading-relaxed">
              <span className="text-amber/60 mt-1.5 shrink-0">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="1.5" />
                </svg>
              </span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs font-mono tracking-wider text-amber/80 bg-amber/[0.06] border border-amber/10 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="section-divider mb-20" />

        <div className="grid md:grid-cols-12 gap-12 md:gap-16" ref={ref}>
          {/* Label */}
          <div className="md:col-span-4">
            <div
              className={`md:sticky md:top-28 transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-amber" />
                <span className="text-amber font-mono text-xs tracking-[0.3em] uppercase">
                  02
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Experience
              </h2>
              <p className="text-muted text-sm font-light leading-relaxed">
                Over 5 years of building and shipping software across startups
                and established companies.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="md:col-span-8">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
