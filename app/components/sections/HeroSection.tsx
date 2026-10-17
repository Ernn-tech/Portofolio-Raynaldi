"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between min-h-[80vh]">
      
      {/* Kolom Kiri: Foto Galeri dengan Animasi */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
      >
        <div className="relative overflow-hidden group cursor-pointer">
          <img 
            src="/foto gue.png" 
            alt="Foto Al Bae"
            className="w-full max-w-[380px] h-auto object-cover transition-all duration-700 ease-in-out"
          />
        </div>
      </motion.div>

      {/* Kolom Kanan: Teks & Bio dengan Animasi */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-1/2 flex flex-col items-start"
      >
        <h1 className="text-[40px] md:text-[50px] leading-tight tracking-[0.015em] font-bold text-white mb-3">
          Putra Raynaldi Gultom
        </h1>
        <p className="text-[12px] tracking-[0.05em] text-[#D97706] uppercase mb-6 font-semibold">
          AKA. RAY
        </p>
        <p className="text-[16px] leading-[1.6] text-white mb-8 max-w-[540px]">
          Mahasiswa yang antusias ngembangin web, aktif di organisasi kampus, dan hobi ngeracik kode dengan teknologi modern.
        </p>
        <a 
          href="#projects"
          className="inline-flex items-center text-[14px] font-bold uppercase tracking-wider text-[#FBBF24] hover:text-white transition-colors"
        >
          Lihat Proyek &rarr;
        </a>
      </motion.div>

    </section>
  );
}