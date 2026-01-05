type SectionCardProps = {
  title: string
}

export function SectionCard({ title }: SectionCardProps) {
  return (
    <div
      role="heading"
      aria-level={3}
      className="flex items-center justify-center min-h-32 rounded-xl border border-orange-400/20 bg-orange-500/10 text-orange-300 
       p-4 py-6 text-center font-display text-3xl font-bold "
    >
      {title}
    </div>
  )
}
