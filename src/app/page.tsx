import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { AboutSection } from "@/components/about-section";
import { ProjectSection } from "@/components/project-section";
import { WorkExperienceSection } from "@/components/work-experience-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

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
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
