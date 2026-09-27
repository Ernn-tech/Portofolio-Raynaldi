export default function MetaHeader({ fontFamily, variant, size = "25px" }: { fontFamily: string; variant: string; size?: string }) {
  return (
    <div className="flex justify-between items-center w-full py-2 border-b border-bone text-[12px] text-onyx">
      <div className="tracking-[0.08em] font-normal">
        {fontFamily}&nbsp;&nbsp;&nbsp;&nbsp;{variant}
      </div>
      <div className="flex items-center gap-4 text-graphite">
        <span>{size}</span>
        {/* Outline fullscreen icon glyph */}
        <svg className="w-3 h-3 stroke-current fill-none" viewBox="0 0 24 24">
          <path strokeWidth="2" d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
        </svg>
      </div>
    </div>
  );
}