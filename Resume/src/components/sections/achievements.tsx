"use client";

import { achievements } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { Award, TrendingUp, Zap } from "lucide-react";

const icons = [Award, TrendingUp, Zap];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="section-padding bg-muted/30"
      aria-labelledby="achievements-heading"
    >
      <div className="container-wide">
        <SectionHeading
          label="Achievements"
          title="Outstanding Contributions"
          subtitle="Recognized performance improvements and exceptional UI engineering impact across organizations."
        />

        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            return (
              <StaggerItem key={achievement.title}>
                <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{achievement.title}</h3>
                  <p className="mt-1 text-sm text-accent">{achievement.organization}</p>
                  {achievement.period && (
                    <p className="mt-1 text-xs text-muted-foreground">{achievement.period}</p>
                  )}
                  <ul className="mt-4 flex-1 space-y-2" role="list">
                    {achievement.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
