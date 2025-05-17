import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";

export const Home = () => {
  return (
    <div className="min-h-screen w-screen">
      <Header />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
