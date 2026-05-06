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
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 font-mono text-solar text-sm ">
        <span className="w-8 h-px bg-solar" />
        <span>{String(number).padStart(2, '0')} </span> -
        <span className="uppercase">{section}</span>
      </div>

      <h2 className="max-sm:text-3xl text-4xl max-w-[14rem] leading-tight font-bold font-serif text-white/90">
        {title}
      </h2>

      {description && (
        <p className="text-sm text-muted max-w-[30rem]">{description}</p>
      )}
    </div>
  )
}
