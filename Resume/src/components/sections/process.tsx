"use client";

import { processSteps } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function Process() {
  return (
    <section
      id="process"
      className="section-padding bg-muted/30"
      aria-labelledby="process-heading"
    >
      <div className="container-wide">
        <SectionHeading
          label="Process"
          title="Engineering Workflow"
          subtitle="From Figma design to production-ready React — a systematic pipeline that scales."
        />

        <div className="relative overflow-hidden">
          <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" role="list">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 0.1}>
                <li className="relative">
                  <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-md h-full">
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {step.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium"
                        >
                          {tool}
                        </span>
                      ))}
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
