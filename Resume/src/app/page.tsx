import { PageTransition } from "@/components/animations/page-transition";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { EducationSection } from "@/components/sections/education-section";
import { Performance } from "@/components/sections/performance";
import { Accessibility } from "@/components/sections/accessibility-section";
import { Process } from "@/components/sections/process";
import { ResumeSection } from "@/components/sections/resume-section";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <EducationSection />
      <Performance />
      <Accessibility />
      <Process />
      <ResumeSection />
    </PageTransition>
  );
}
