"use client";

import { useRef } from "react";
import { useInView } from "./useInView";

const skillCategories = [
  {
    title: "Frontend",
    description: "Core expertise",
    skills: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    description: "Full-stack capabilities",
    skills: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "Java",
      "Spring Boot",
      "Python",
      "Django",
      "PHP",
      "Laravel",
    ],
  },
  {
    title: "Data & APIs",
    description: "Data layer & integration",
    skills: ["GraphQL", "REST APIs", "MongoDB", "PostgreSQL", "SQL", "MySQL"],
  },
  {
    title: "DevOps & Tools",
    description: "Infrastructure & workflow",
    skills: [
      "Git",
      "Docker",
      "Linux",
      "CI/CD",
      "GitLab Actions",
      "Jest",
      "Cypress",
      "C++",
    ],
  },
];

function SkillCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`group relative p-6 md:p-8 bg-surface border border-border hover:border-amber/20 transition-all duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Corner accent */}
      <div className="absolute top-0 left-0 w-8 h-px bg-amber transition-all duration-500 group-hover:w-16" />
      <div className="absolute top-0 left-0 w-px h-8 bg-amber transition-all duration-500 group-hover:h-16" />

      <div className="mb-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-1">
          {category.title}
        </h3>
        <p className="text-xs font-mono text-amber/60 tracking-widest uppercase">
          {category.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="skill-tag px-3 py-1.5 text-xs font-mono tracking-wider text-muted bg-surface-lighter border border-border rounded-full cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="section-divider mb-20" />

        <div ref={ref}>
          <div
            className={`mb-16 transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-amber" />
              <span className="text-amber font-mono text-xs tracking-[0.3em] uppercase">
                03
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Skills & Tools
            </h2>
            <p className="text-muted text-sm font-light leading-relaxed max-w-lg">
              A comprehensive toolkit built over 5+ years of shipping web
              applications across the full stack.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {skillCategories.map((cat, i) => (
              <SkillCard key={cat.title} category={cat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
