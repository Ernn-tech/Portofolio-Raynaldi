"use client";

import { motion, Variants } from "framer-motion";

interface TitleWord {
  text: string;
  isAccent?: boolean;
  isOutline?: boolean;
  isGradient?: boolean;
}

export default function HeroSection() {
  const titleWords: TitleWord[] = [
    { text: "DIGITAL", isAccent: false, isOutline: false, isGradient: true },
    { text: "CRAFT", isAccent: false, isOutline: true, isGradient: false },
    { text: "CREATOR.", isAccent: true, isOutline: false, isGradient: true },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };

  return (
    <section className="relative max-w-[1180px] mx-auto px-6 pt-20 pb-16 overflow-hidden">
      
      {/* Layer Ambient Gradient Glow Bolak-Balik di Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-gradient-to-r from-[#ccff00]/20 via-transparent to-[#ccff00]/20 animate-ambient-slow rounded-2xl" />
      
      {/* Light Orbs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#ccff00]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 -right-10 w-80 h-80 bg-[#ccff00]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* Content Layer */}
      <div className="relative z-10">
        
        {/* Top Status */}
        <div className="flex items-center gap-3 text-[#a3a59a] font-mono text-[10px] tracking-[0.08em] mb-8">
          <span className="w-2 h-2 bg-[#ccff00] rounded-full shadow-[0_0_12px_#ccff0070] animate-ping" />
          <span>MAHASISWA & DIGITAL CREATOR</span>
          <span className="text-[#66685f]">// JAKARTA SELATAN</span>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title & Bio */}
          <div className="lg:col-span-7">
            <motion.h1 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-[clamp(48px,7.5vw,105px)] leading-[0.94] tracking-[-0.095em] mb-8 font-bold text-[#f1f0e9]"
            >
              {titleWords.map((word, idx) => (
                <motion.span 
                  key={idx} 
                  variants={wordVariants}
                  className={`inline-block mr-3 ${
                    word.isOutline ? "text-transparent [-webkit-text-stroke:1px_#a9aa9f]" : ""
                  } ${
                    word.isGradient 
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-[#ffffff] to-[#ccff00] animate-ambient-slow" 
                      : ""
                  } ${word.isAccent ? "block" : ""}`}
                >
                  {word.text}
                </motion.span>
              ))}
            </motion.h1>
            
            <p className="max-w-[480px] text-[#a5a69d] text-[15px] leading-[1.8] mb-10">
              Halo, gw <strong>Putra Raynaldi Gultom (Ray/Al)</strong>. Mahasiswa Bisnis Digital LP3I yang hobi ngeracik web modern, <em>streetwear branding</em> Lumilab, dan eksplorasi data.
            </p>

            <div className="flex items-center gap-6">
              <a 
                href="#projects" 
                className="font-mono text-[11px] font-bold bg-[#ccff00] text-[#10110f] px-6 py-3.5 rounded hover:bg-[#c2ef4f] transition-colors tracking-wider uppercase inline-flex items-center gap-2 shadow-[0_0_20px_rgba(215,255,104,0.2)]"
              >
                Explore Works <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: User Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] border border-[#30312c] rounded-md p-3 bg-[#171815]/90 backdrop-blur-sm shadow-2xl">
              <div className="relative h-[420px] rounded overflow-hidden bg-[#20211d]">
                <img 
                  src="/foto-gue.png" 
                  alt="Putra Raynaldi" 
                  className="w-full h-full object-cover"
                />
                
                {/* Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#10110f]/90 backdrop-blur-md border border-[#30312c] px-4 py-3 rounded flex justify-between items-center font-mono text-[10px]">
                  <span className="text-[#f1f0e9] font-bold">PUTRA RAYNALDI</span>
                  <span className="text-[#ccff00]">DEV & CREATOR</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Meta Footer */}
        <div className="flex flex-wrap justify-between text-[#6f7167] border-t border-[#30312c] pt-5 mt-20 font-mono text-[9px] tracking-wider">
          <span>POLITEKNIK LP3I JAKARTA</span>
          <span>NEXT.JS & TAILWIND CSS</span>
          <span>STATUS: ACTIVE</span>
        </div>

      </div>

    </section>
  );
}