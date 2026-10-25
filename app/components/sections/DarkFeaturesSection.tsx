"use client";

export default function DarkFeaturesSection() {
  const socialLinks = [
    { name: "EMAIL", href: "https://mail.google.com/mail/u/0/#inbox?compose=new" },
    { name: "INSTAGRAM", href: "https://www.instagram.com/kchrayy/?hl=en" },
    { name: "LINKEDIN", href: "https://www.linkedin.com/in/putraraynaldigultom" },
  ];

  return (
    <section className="max-w-[1180px] mx-auto px-6 py-20 text-[#f1f0e9]">
      
      {/* 1. Filosofi & Pendekatan Card dengan Ambient Gradient */}
      <div className="relative border border-[#30312c] rounded-md p-8 md:p-12 bg-[#171815] mb-12 overflow-hidden transition-all hover:border-[#ccff00] group">
        
        {/* Layer Gradient Bolak-Balik */}
        <div className="absolute inset-0 opacity-30 pointer-events-none bg-gradient-to-r from-[#ccff00]/20 via-transparent to-[#ccff00]/20 animate-ambient-slow" />
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-[580px]">
            <span className="font-mono text-[10px] tracking-[0.15em] text-[#ccff00] uppercase mb-3 block font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-ping" />
              FILOSOFI & PENDEKATAN
            </span>
            <h2 className="text-[36px] md:text-[50px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-[#ffffff] to-[#ccff00] animate-ambient-slow leading-tight mb-4">
              Estetika bertemu fungsi nyata.
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#8c8e84] leading-relaxed">
              Setiap baris kode ditulis bukan sekadar agar berfungsi, melainkan untuk menciptakan pengalaman estetis yang tenang dan intuitif bagi pengguna akhir.
            </p>
          </div>

          {/* Quote Box Editorial Style */}
          <div className="w-full md:w-[380px] border border-[#30312c] rounded p-6 bg-[#20211d]/90 backdrop-blur-sm font-mono text-[12px] text-[#a5a69d] italic leading-relaxed">
            &ldquo;Simplicity is about subtracting the obvious and adding the meaningful.&rdquo;
          </div>
        </div>
      </div>

      {/* 2. Contact & Social Links Card dengan Ambient Gradient */}
      <div className="relative border border-[#30312c] rounded-md p-8 md:p-12 bg-[#171815] overflow-hidden transition-all hover:border-[#ccff00] group">
        
        {/* Layer Gradient Bolak-Balik */}
        <div className="absolute inset-0 opacity-30 pointer-events-none bg-gradient-to-r from-[#ccff00]/20 via-transparent to-[#ccff00]/20 animate-ambient-slow" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div>
            <h2 className="text-[32px] md:text-[44px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-[#ffffff] to-[#ccff00] animate-ambient-slow mb-3 leading-tight">
              Mari Terhubung dengan <br className="hidden sm:inline" />
              Raynaldi.
            </h2>
            <p className="text-[14px] text-[#8c8e84]">
              Terbuka untuk kolaborasi, magang, atau diskusi projek kreatif.
            </p>
          </div>

          {/* Grid Social Links */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto font-mono text-[11px]">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#30312c] px-5 py-3.5 rounded bg-[#20211d] text-[#f1f0e9] hover:bg-[#ccff00] hover:text-[#10110f] transition-all flex items-center justify-between gap-3 font-bold group/link"
              >
                <span>{link.name}</span>
                <span className="text-[#ccff00] group-hover/link:text-[#10110f]">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}