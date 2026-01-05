type AboutCardProps = {
  title: string
  description?: string
  items?: Array<string>
}

export function AboutCard({ title, description, items }: AboutCardProps) {
  return (
    <div
      className="w-full flex flex-col p-8 gap-4 rounded-lg bg-black/40 border border-orange-300/20 hover:border-orange-500/30
        hover:bg-black/50"
    >
      <h3 className="text-xl font-bold text-orange-300">{title}</h3>

      {description && (
        <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      )}

      {items && (
        <ul className="flex flex-col gap-2 text-sm text-gray-400">
          {items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
