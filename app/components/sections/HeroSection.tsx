"use client";

export default function HeroSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-center gap-16">
      
      {/* Kolom Kiri: Foto Galeri Clean (Hover jadi Grayscale) */}
      <div className="w-full md:w-1/2 flex justify-center">
       <div className="relative overflow-hidden group cursor-pointer">
          <img
            src="/hero-img.png"
            alt="Foto Al Bae"
            className="w-full max-w-[380px] h-auto object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
          />
        </div>
      </div>

      {/* Kolom Kanan: Teks & Bio */}
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <h1 className="text-[40px] leading-tight tracking-[0.015em] font-normal text-black mb-3">
          Putra Raynaldi Gultom
        </h1>
        <p className="text-[12px] tracking-[0.05em] text-[#818181] uppercase mb-6">
          Aka. Ray
        </p>
        <p className="text-[16px] leading-[1.38] text-[#1a1818] mb-8 max-w-[540px]">
          Halo! Saya seorang mahasiswa yang aktif di dunia web development, penggiat organisasi kampus, dan hobi ngerjain berbagai project kreatif mulai dari apparel brand, data analytics, sampe hobi musik.
        </p>
        <a 
          href="#projects" 
          className="inline-block text-[16px] text-black no-underline hover:opacity-70 transition-opacity"
        >
          Lihat Proyek &rarr;
        </a>
      </div>

    </section>
  );
}