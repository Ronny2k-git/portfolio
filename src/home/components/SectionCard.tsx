type SectionCardProps = {
  title: string
}

export function SectionCard({ title }: SectionCardProps) {
  return (
    <div
      role="heading"
      aria-level={3}
      className="flex items-center justify-center min-h-32 rounded-xl bg-gray-800 text-solar 
       p-4 py-6 text-center font-display text-3xl "
    >
      {title}
    </div>
  )
}
