"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    if (onComplete) {
      setTimeout(() => {
        onComplete();
      }, 1000);
    }
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#10110f] overflow-hidden"
        >
          {/* Top Curtain */}
          <motion.div
            initial={{ y: 0 }}
            animate={isOpen ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#10110f] border-b border-[#30312c] z-10"
          />

          {/* Bottom Curtain */}
          <motion.div
            initial={{ y: 0 }}
            animate={isOpen ? { y: "100%" } : { y: 0 }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#10110f] border-t border-[#30312c] z-10"
          />

          {/* Teks & Gate Control di Tengah */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="relative z-20 flex flex-col items-center text-center px-6"
          >
            {/* Status Kicker */}
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#ccff00] uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-ping" />
              PORTFOLIO EXPERIENCE
            </span>

            {/* Main Greeting dengan Full Gradient Animation */}
            <h1 className="text-[32px] sm:text-[48px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-[#ffffff] to-[#ccff00] animate-ambient-slow mb-3">
              Hai, Saya Al/Ray.
            </h1>
            
            <p className="font-mono text-[13px] text-[#8c8e84] mb-8">
              Nice to meet you. Welcome to my digital workspace.
            </p>

            {/* Trigger Button */}
            <button
              onClick={handleOpen}
              className="group relative font-mono text-[11px] font-bold bg-[#171815] text-[#f1f0e9] border border-[#30312c] px-8 py-4 rounded hover:border-[#ccff00] hover:text-[#ccff00] transition-all shadow-2xl flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 tracking-widest uppercase">ENTER GATE</span>
              <span className="relative z-10 text-[#ccff00] group-hover:translate-x-1 transition-transform">&rarr;</span>
              <div className="absolute inset-0 bg-[#ccff00]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}