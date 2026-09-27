export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[var(--color-midnight-wine)] text-white py-16 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="text-[26px] font-[460] mb-2 text-white">Mari Terhubung dengan Raynaldi</h2>
          <p className="text-[14px] text-white/70">Terbuka untuk kolaborasi, magang, atau diskusi projek kreatif.</p>
        </div>
        <div className="flex gap-6 text-[14px] font-[460]">
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" className="text-white/80 hover:text-white transition-colors">Email &rarr;</a>
          <a href="https://www.instagram.com/kchrayy/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">Instagram &rarr;</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">LinkedIn &rarr;</a>
        </div>
      </div>
    </footer>
  );
}