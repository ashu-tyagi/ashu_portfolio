"use client";

import { certificates, coreExpertise, education, languages } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { GraduationCap, BookOpen, Globe, Sparkles } from "lucide-react";

export function EducationSection() {
  return (
    <section
      id="education"
      className="section-padding"
      aria-labelledby="education-heading"
    >
      <div className="container-wide">
        <SectionHeading
          label="Education"
          title="Academic & Professional Training"
          subtitle="BCA from IGNOU combined with Arena Animation Academy frontend development certification."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <StaggerContainer className="grid gap-6 md:grid-cols-2">
              {education.map((item) => (
                <StaggerItem key={item.degree}>
                  <article className="h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <GraduationCap className="h-5 w-5 text-accent" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.degree}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.institution}
                          {item.period ? ` · ${item.period}` : ""}
                        </p>
                        {item.detail && (
                          <p className="mt-2 text-xs text-muted-foreground">{item.detail}</p>
                        )}
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal delay={0.2}>
              <div className="mt-8">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-accent">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  Certifications
                </h3>
                {certificates.map((cert) => (
                  <article
                    key={cert.title}
                    className="rounded-xl border border-border bg-muted/30 p-6"
                  >
                    <h4 className="font-semibold">{cert.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{cert.institution}</p>
                    <ul className="mt-4 space-y-2" role="list">
                      {cert.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-accent" aria-hidden="true">→</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="mt-8 rounded-xl border border-border p-6">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-accent">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Core Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {coreExpertise.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-foreground md:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* <ScrollReveal delay={0.15}>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 font-semibold">
                <Globe className="h-5 w-5 text-accent" aria-hidden="true" />
                Languages
              </h3>
              <ul className="mt-6 space-y-4" role="list">
                {languages.map((lang) => (
                  <li key={lang.name} className="flex items-center justify-between">
                    <span className="font-medium">{lang.name}</span>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                      {lang.proficiency}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          */}
        </div>
      </div>
    </section>
  );
}
