"use client";

import { Download, FileText } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

export function ResumeSection() {
  return (
    <section id="resume" className="section-padding bg-muted/30" aria-labelledby="resume-heading">
      <div className="container-wide">
        <SectionHeading
          label="Resume"
          title="Download CV"
          subtitle="Full resume with 10+ years of frontend engineering across Apollo 24|7, Builder.ai, and T-Mobile."
          align="center"
        />

        <ScrollReveal>
          <div className="mx-auto max-w-lg">
            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md md:p-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                <FileText className="h-8 w-8 text-accent" aria-hidden="true" />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {siteConfig.name} — Resume
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {siteConfig.title} · 10+ Years Experience
              </p>

              <ul className="mt-6 space-y-2 text-sm text-muted-foreground" role="list">
                <li>Apollo 24|7 · Builder.ai · T-Mobile B2B Portal</li>
                <li>React.js · Next.js · TypeScript · Design Systems</li>
                <li>WCAG · Core Web Vitals · AI-Assisted Development</li>
              </ul>

              <MagneticButton className="mt-8 w-full">
                <Button asChild size="lg" className="w-full">
                  <a
                    href="/resume/ashu-kumar-resume.pdf"
                    download="React_UI_Developer-Akumar.pdf"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download PDF
                  </a>
                </Button>
              </MagneticButton>

              <p className="mt-4 text-xs text-muted-foreground">
                React_UI_Developer-Akumar.pdf · Updated 2026
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
