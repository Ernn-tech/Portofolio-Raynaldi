export default function DarkFeaturesSection() {
  return (
    <section className="w-full bg-[var(--color-deep-lagoon)] text-white py-24 px-6 md:px-12 my-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[12px] tracking-widest uppercase text-[var(--color-lilac-mist)] mb-2 block">Filosofi &amp; Pendekatan</span>
          <h2 className="text-[36px] md:text-[64px] font-[460] tracking-tight leading-[0.96] mb-6 text-white">
            Estetika bertemu fungsi nyata.
          </h2>
          <p className="text-[16px] text-white/80 leading-[1.5] mb-8">
            Setiap baris kode ditulis bukan sekadar agar berfungsi, melainkan untuk menciptakan pengalaman estetis yang tenang bagi pengguna akhir.
          </p>
        </div>
        <div className="border border-white/20 p-8 rounded-[16px] bg-white/5 backdrop-blur-sm">
          <p className="text-[18px] italic font-[460] text-white/90">
            &ldquo;Simplicity is about subtracting the obvious and adding the meaningful.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}