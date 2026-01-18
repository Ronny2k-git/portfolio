type SectionHeaderProps = {
  title: string
  description?: string
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <header
      className="
          px-6 py-4 flex flex-col items-center gap-4 rounded-2xl bg-black/10 border border-white/10 backdrop-blur
          shadow-[0_0_15px_rgba(255,255,255,0.05)]
        "
    >
      <h2 className="text-3xl font-bold font-display text-solar">{title}</h2>

      {description && (
        <p className="max-w-xl text-center text-gray-400">{description}</p>
      )}
    </header>
  )
}
