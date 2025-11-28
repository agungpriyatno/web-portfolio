import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProjectSection } from "@/components/project-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { WorkExperienceSection } from "@/components/work-experience-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TechStackSection />
        <AboutSection />
        <ProjectSection />
        <WorkExperienceSection />
        {/* <BlogSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
