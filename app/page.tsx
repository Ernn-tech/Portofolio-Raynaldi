import Navbar from "@/app/components/common/Navbar";
import Footer from "@/app/components/common/Footer";
import HeroSection from "@/app/components/sections/HeroSection";
import ProjectsSection from "@/app/components/sections/ProjectSection";
import DarkFeatureSection from "@/app/components/sections/DarkFeaturesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-warm-parchment)] text-[var(--color-ink-charcoal)] selection:bg-[var(--color-lilac-mist)] font-sans antialiased">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <DarkFeatureSection />
      <Footer />
    </main>
  );
}