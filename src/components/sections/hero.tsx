"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { heroContent } from "@/data/portfolio";
import { siteConfig } from "@/lib/constants";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="relative items-end flex items-center overflow-hidden section-padding pt-32"
      aria-labelledby="hero-heading"
    >
    <div className="container-wide grid lg:grid-cols-12 gap-4">
      <div className="container-wide md:col-span-12 lg:col-span-6">
        <motion.p
          className="mb-6 text-sm font-medium uppercase tracking-widest text-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {heroContent.greeting}
        </motion.p>

        <motion.h2
          id="hero-heading"
          className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {heroContent.name.split(" ")[0]}{" "}
          <span className="gradient-text">{heroContent.name.split(" ")[1]}</span>
        </motion.h2>

        <motion.p
          className="mt-4 text-base font-medium text-muted-foreground md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {siteConfig.headline}
        </motion.p>

        <motion.p
          className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl lg:text-xl text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {heroContent.tagline}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          aria-label="Areas of expertise"
        >
          {heroContent.expertise.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MagneticButton>
            <Button asChild size="lg">
              <Link href={heroContent.cta.primary.href}>
                {heroContent.cta.primary.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button asChild variant="outline" size="lg">
              <Link href={heroContent.cta.secondary.href}>
                {heroContent.cta.secondary.label}
              </Link>
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
      <div className="container-wide md:col-span-12 lg:col-span-6 flex justify-center items-end">
        <div>
        <img src="/images/ashu_designer_developer.jpg" alt="Hero Image" className="w-full h-full object-cover" />
        </div>
      </div>
      </div>

      <div
        className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl md:h-96 md:w-96"
        aria-hidden="true"
      />
    </section>
  );
}
