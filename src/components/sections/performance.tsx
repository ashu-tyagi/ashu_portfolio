"use client";

import { performanceMetrics } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { Gauge, Zap, Layers, Timer } from "lucide-react";

const icons = [Gauge, Zap, Layers, Timer, Gauge, Timer];

export function Performance() {
  return (
    <section
      id="performance"
      className="section-padding bg-muted/30"
      aria-labelledby="performance-heading"
    >
      <div className="container-wide">
        <SectionHeading
          label="Performance"
          title="Optimization Metrics"
          subtitle="Measurable improvements in Core Web Vitals, bundle size, and runtime performance."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {performanceMetrics.map((metric, index) => {
            const Icon = icons[index % icons.length];
            const decimals = metric.value % 1 !== 0 ? 1 : 0;

            return (
              <StaggerItem key={metric.label}>
                <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                      <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    </div>
                  </div>
                  <p className="mt-6 text-4xl font-semibold">
                    <AnimatedCounter
                      value={metric.value}
                      suffix={metric.suffix}
                      decimals={decimals}
                    />
                  </p>
                  <p className="mt-2 font-medium">{metric.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{metric.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-16 rounded-xl border border-border p-8">
          <h3 className="text-lg font-semibold">Optimization Strategies</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Code splitting & dynamic imports",
              "Image optimization (AVIF/WebP)",
              "Critical CSS & font subsetting",
              "Prefetch & preconnect hints",
              "Service worker caching",
              "Bundle analysis & tree-shaking",
              "React Server Components",
              "Intersection Observer lazy loading",
            ].map((strategy) => (
              <div
                key={strategy}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {strategy}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
