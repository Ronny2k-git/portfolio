type SectionCardProps = {
  title: string
}

export function SectionCard({ title }: SectionCardProps) {
  return (
    <div
      role="heading"
      aria-level={3}
      className="flex items-center justify-center min-h-32 rounded-xl border border-blue-400/20 bg-blue-500/10 p-4 py-6 text-center font-display text-3xl font-bold text-blue-300"
    >
      {title}
    </div>
  )
}
