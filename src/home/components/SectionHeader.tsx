type SectionHeaderProps = {
  section: string
  number: number
  title: string
  description?: string
  className?: string
}

export function SectionHeader({
  section,
  number,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 font-mono text-solar text-sm ">
        <span className="w-8 h-px bg-solar" />
        <span>{String(number).padStart(2, '0')} </span> -
        <span className="uppercase">{section}</span>
      </div>

      <h2 className="max-sm:text-4xl text-5xl max-w-[17rem] leading-tight font-bold font-serif text-white/90">
        {title}
      </h2>

      {description && <p className="text-[15px] text-muted">{description}</p>}
    </div>
  )
}
