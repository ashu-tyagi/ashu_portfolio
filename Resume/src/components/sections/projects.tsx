"use client";

import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-muted/30"
      aria-labelledby="projects-heading"
    >
      <div className="container-wide">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          subtitle="High-impact UI platform projects across healthcare, no-code, and enterprise domains."
        />

        <StaggerContainer className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <StaggerItem key={project.id}>
              <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-lg">
                <div
                  className="relative h-2 bg-gradient-to-r from-accent to-blue-400"
                  aria-hidden="true"
                />
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-accent">
                        {project.company}
                      </p>
                      <CardTitle className="mt-2 text-xl">{project.title}</CardTitle>
                    </div>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                      0{index + 1}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="mt-6 space-y-2" role="list">
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                        <span className="text-accent" aria-hidden="true">
                          →
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <p className="text-lg font-semibold text-accent">{metric.value}</p>
                        <p className="text-xs text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border px-2 py-0.5 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
