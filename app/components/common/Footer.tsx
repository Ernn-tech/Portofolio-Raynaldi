"use client";

export default function Footer() {
  return (
    <footer className="max-w-[1200px] mx-auto px-6 py-16">
      <div className="relative rounded-3xl p-10 overflow-hidden shadow-2xl bg-[#1C1714]/80 border border-[#D97706]/20 backdrop-blur-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight mb-3">
            Mari Terhubung dengan Raynaldi
          </h2>
          <p className="text-[16px] text-white">
            Terbuka untuk kolaborasi, magang, atau diskusi projek kreatif.
          </p>
        </div>

        <div className="flex items-center gap-6 flex-wrap">
          <a 
            href="https://mail.google.com/mail/u/0/#inbox/FMfcgzQhWnqrPXGQnQDcczXgrtRlTRQX?compose=new" 
            className="text-[14px] font-semibold text-[#FBBF24] hover:text-white uppercase tracking-wider transition-colors"
          >
            Email &rarr;
          </a>
          <a 
            href="https://www.instagram.com/kchrayy/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[14px] font-semibold text-[#FBBF24] hover:text-white uppercase tracking-wider transition-colors"
          >
            Instagram &rarr;
          </a>
          <a 
            href="https://putraraynaldi.blogspot.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[14px] font-semibold text-[#FBBF24] hover:text-white uppercase tracking-wider transition-colors"
          >
            Blogspot &rarr;
          </a>
        </div>

      </div>
    </footer>
  );
}