export default function FloatingCard() {
  return (
    <div className="hidden lg:block absolute left-12 bottom-16 bg-[var(--color-paper-white)]/85 backdrop-blur-md p-4 rounded-[16px] border border-white/20 shadow-lg max-w-[280px]">
      <div className="text-[12px] text-[var(--color-stone-gray)] mb-1">Status Terkini</div>
      <div className="text-[14px] font-[500] text-[var(--color-ink-charcoal)]">Aktif merancang sistem web modular &amp; e-commerce.</div>
    </div>
  );
}