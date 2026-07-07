"use client";

import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding"
      aria-labelledby="experience-heading"
    >
      <div className="container-wide">
        <SectionHeading
          label="Experience"
          title="Career Timeline"
          subtitle="A track record of building UI platforms at scale across healthcare, SaaS, and enterprise."
        />

        <div className="relative overflow-hidden">
          <div
            className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-8 md:block lg:left-1/2 lg:-translate-x-px"
            aria-hidden="true"
          />

          <ol className="space-y-16 md:space-y-24" role="list">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.company} delay={index * 0.1}>
                <li
                  className={cn(
                    "relative md:grid md:grid-cols-2 md:gap-12 lg:gap-24",
                    index % 2 === 0 ? "lg:[&>div:first-child]:text-right" : "lg:[&>div:first-child]:order-2"
                  )}
                >
                  <div className="mb-4 md:mb-0 lg:pr-12">
                    <div
                      className={cn(
                        "hidden lg:absolute lg:top-2 lg:left-1/2 lg:-translate-x-1/2 lg:block",
                        "h-3 w-3 rounded-full border-2 border-accent bg-background"
                      )}
                      aria-hidden="true"
                    />
                    <p className="text-sm font-medium text-accent">{exp.period}</p>
                    <h3 className="mt-1 text-2xl font-semibold">{exp.role}</h3>
                    <p className="text-muted-foreground">
                      {exp.company} · {exp.location}
                    </p>
                  </div>

                  <div className={cn(index % 2 !== 0 && "lg:order-1 lg:pr-12 lg:text-right")}>
                    <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/30">
                      <ul className="space-y-3" role="list">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                          >
                            <span
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                              aria-hidden="true"
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
