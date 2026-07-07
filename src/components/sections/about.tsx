"use client";

import { motion, type Variants } from "framer-motion";
import { aboutContent, experienceSummary } from "@/data/portfolio";
import { siteConfig } from "@/lib/constants";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckCircle2, Briefcase, MapPin, Mail } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export function About() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <div className="container-wide">
        <SectionHeading
          label="About"
          title={aboutContent.subtitle}
          subtitle={aboutContent.intro}
        />

        <div className="grid gap-16 lg:grid-cols-5 lg:gap-12">
          {/* Main content */}
          <div className="lg:col-span-3">
            <motion.div
              className="space-y-6 text-base text-muted-foreground leading-relaxed md:text-lg"
              initial={reducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {aboutContent.paragraphs.map((paragraph, i) => (
                <motion.p key={i} custom={i} variants={fadeUp}>
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              className="mt-10"
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="mb-5 text-sm font-medium uppercase tracking-widest text-accent">
                What I Do
              </h3>
              <ul className="space-y-3" role="list" aria-label="Key experience highlights">
                {experienceSummary.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed md:text-base">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="mt-10"
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
                Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {aboutContent.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <motion.div
              className="space-y-4"
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {/* Current role card */}
              <div className="rounded-xl border border-accent/20 bg-accent/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Briefcase className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-accent">
                      Currently
                    </p>
                    <p className="mt-1 font-semibold">{aboutContent.currentRole.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {aboutContent.currentRole.company}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {aboutContent.currentRole.period}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact quick info */}
              <div className="rounded-xl border border-border p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {siteConfig.location}
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {aboutContent.stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="rounded-xl border border-border p-5 transition-colors hover:border-accent/30"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  >
                    <p className="text-2xl font-semibold md:text-3xl">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-snug">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
