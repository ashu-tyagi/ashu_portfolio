"use client";

import { skills, skillCategories } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

function SkillBar({ name, level }: { name: string; level: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="group">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-accent"
          initial={{ width: reducedMotion ? `${level}%` : "0%" }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 1, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const grouped = skillCategories
    .map((cat) => ({
      category: cat,
      items: skills.filter((s) => s.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section
      id="skills"
      className="section-padding bg-muted/30"
      aria-labelledby="skills-heading"
    >
      <div className="container-wide">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          subtitle="A decade of depth across design systems, performance, and accessible UI engineering."
        />

        <StaggerContainer className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {grouped.map(({ category, items }) => (
            <StaggerItem key={category}>
              <div className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                <h3 className="mb-6 text-sm font-medium uppercase tracking-widest text-accent">
                  {category}
                </h3>
                <div className="space-y-5">
                  {items.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
