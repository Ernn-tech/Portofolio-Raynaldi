import Navbar from "./components/common/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ProjectSection from "./components/sections/ProjectSection";
import DarkFeaturesSection from "./components/sections/DarkFeaturesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#10110f] text-[#f1f0e9] selection:bg-[#d7ff68] selection:text-[#10110f]">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Project & Works Section */}
      <ProjectSection />

      {/* 4. Filosofi & Contact Section */}
      <DarkFeaturesSection />

      {/* 5. Clean Footer Minimalist */}
      <footer className="max-w-[1180px] mx-auto px-6 h-[90px] border-t border-[#30312c] flex items-center justify-between font-mono text-[10px] text-[#777970] mt-10">
        <p>&copy; {new Date().getFullYear()} PUTRA RAYNALDI GULTOM. ALL RIGHTS RESERVED.</p>
        <a href="#" className="hover:text-[#d7ff68] transition-colors uppercase">
          BACK TO TOP &uarr;
        </a>
      </footer>
    </main>
  );
}