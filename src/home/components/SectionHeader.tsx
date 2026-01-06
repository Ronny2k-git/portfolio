export function SectionHeader({ title }: { title: string; subtitle?: string }) {
  return (
    <div
      className="
          px-6 py-3 rounded-2xl bg-black/10 border border-white/10 backdrop-blur
          shadow-[0_0_15px_rgba(255,255,255,0.05)]
        "
    >
      <h2 className="text-3xl font-bold font-display text-solar">{title}</h2>
    </div>
  )
}
