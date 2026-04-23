import { Navbar } from "@/components/navigation/navbar";
import { AboutSection } from "@/sections/about";
import { ContactSection } from "@/sections/contact";
import { ExperienceSection } from "@/sections/experience";
import { FooterSection } from "@/sections/footer";
import { HeroSection } from "@/sections/hero";
import { ProjectsSection } from "@/sections/projects";
import { TechStackSection } from "@/sections/tech-stack";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
