"use client";

export default function DarkFeaturesSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16">
      <div className="relative rounded-3xl p-10 overflow-hidden shadow-2xl bg-[#1C1714]/80 border border-[#D97706]/20 backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          
          {/* Kolom Kiri: Teks Filosofi */}
          <div className="max-w-[600px]">
            <p className="text-[12px] tracking-[0.15em] text-[#D97706] uppercase mb-3 font-semibold">
              FILOSOFI & PENDEKATAN
            </p>
            <h2 className="text-[40px] md:text-[52px] font-bold tracking-tight text-white leading-none mb-6">
              Estetika bertemu fungsi nyata.
            </h2>
            <p className="text-[16px] text-white leading-relaxed">
              Setiap baris kode ditulis bukan sekadar agar berfungsi, melainkan untuk menciptakan pengalaman estetis yang tenang bagi pengguna akhir.
            </p>
          </div>

          {/* Kolom Kanan: Quote Card */}
          <div className="w-full lg:w-auto">
            <div className="border border-[#D97706]/30 bg-[#12100E]/60 rounded-2xl p-8 max-w-[420px] shadow-lg">
              <p className="text-[16px] italic text-white leading-relaxed">
                &ldquo;Simplicity is about subtracting the obvious and adding the meaningful.&rdquo;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}