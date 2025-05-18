;import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";

export const Home = () => {
  return (
    <div className="h-screen w-screen">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
