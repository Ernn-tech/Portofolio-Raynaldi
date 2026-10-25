"use client";

import { useState } from "react";
import Preloader from "./components/common/Preloader";
import Navbar from "./components/common/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ProjectSection from "./components/sections/ProjectSection";
import DarkFeaturesSection from "./components/sections/DarkFeaturesSection";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className="min-h-screen bg-[#10110f] text-[#f1f0e9] selection:bg-[#ccff00] selection:text-[#10110f]">
      {/* Preloader Gate / Opening */}
      <Preloader onComplete={() => setHasEntered(true)} />

      {/* Main Content (Muncul setelah Gate Terbuka) */}
      <div className={`transition-opacity duration-700 ${hasEntered ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <HeroSection />
        <ProjectSection />
        <DarkFeaturesSection />

        {/* Footer Minimalist */}
        <footer className="max-w-[1180px] mx-auto px-6 h-[90px] border-t border-[#30312c] flex items-center justify-between font-mono text-[10px] text-[#777970] mt-10">
          <p>&copy; {new Date().getFullYear()} PUTRA RAYNALDI GULTOM. ALL RIGHTS RESERVED.</p>
          <a href="#" className="hover:text-[#ccff00] transition-colors uppercase">
            BACK TO TOP &uarr;
          </a>
        </footer>
      </div>
    </main>
  );
}