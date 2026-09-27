export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-[var(--color-warm-parchment)]/80 backdrop-blur-[12px] border-b border-[var(--color-soft-mist)] flex items-center justify-between px-8 md:px-16">
      <div className="font-semibold text-[16px] tracking-tight text-[var(--color-ink-charcoal)]">
        Raynaldi<span className="text-[var(--color-royal-violet)]">.</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-[16px] font-[460] text-[var(--color-ink-charcoal)]">
        <a href="#about" className="hover:text-[var(--color-royal-violet)] transition-colors">About</a>
        <a href="#projects" className="hover:text-[var(--color-royal-violet)] transition-colors">Projects</a>
        <a href="#stack" className="hover:text-[var(--color-royal-violet)] transition-colors">Ray</a>
      </nav>
      <div className="flex items-center gap-4">
        <a href="#contact" className="hidden sm:inline-block text-[14px] text-[var(--color-ink-charcoal)] hover:opacity-70 transition-opacity">
          Contact
        </a>
        <a 
          href="#projects" 
          className="bg-[var(--color-lilac-mist)] text-[var(--color-ink-charcoal)] border border-[var(--color-ink-charcoal)] px-4 py-1.5 rounded-[8px] text-[14px] font-medium hover:opacity-90 transition-opacity"
        >
          Explore Work
        </a>
      </div>
    </header>
  );
}