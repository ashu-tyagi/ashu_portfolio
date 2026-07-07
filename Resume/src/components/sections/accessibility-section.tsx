"use client";

import { accessibilityFeatures } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import {
  Keyboard,
  Eye,
  Volume2,
  Palette,
  MousePointer,
  FileText,
} from "lucide-react";

const featureIcons = [FileText, Keyboard, Palette, Volume2, Eye, MousePointer];

export function Accessibility() {
  return (
    <section
      id="accessibility"
      className="section-padding"
      aria-labelledby="accessibility-heading"
    >
      <div className="container-wide">
        <SectionHeading
          label="Accessibility"
          title="WCAG 2.1 AA Expertise"
          subtitle="Accessibility is not an afterthought — it's engineered into every component from the start."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {accessibilityFeatures.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <ScrollReveal key={feature.title} delay={index * 0.08}>
                <article className="group h-full rounded-xl border border-border p-6 transition-all hover:border-accent/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 flex flex-col items-center rounded-xl border border-accent/20 bg-accent/5 p-8 text-center md:p-12">
            <p className="text-lg font-medium">WCAG-Aligned Accessible Interfaces</p>
            <p className="mt-2 max-w-lg text-sm text-muted-foreground">
              Developed accessible and responsive user interfaces aligned with WCAG guidelines —
              with automated Lighthouse audits and manual screen reader testing on every release.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
