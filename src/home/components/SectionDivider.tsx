export function SectionDivider({
  title,
  textStyle = 'basic',
}: {
  title: string
  textStyle?: 'basic' | 'secondary'
}) {
  return (
    <div className="flex items-center gap-4 justify-center w-full">
      <span
        className={`text-[13px] uppercase font-semibold tracking-[0.12em]
        ${textStyle === 'basic' ? 'text-muted/50' : 'text-solar'}
        `}
      >
        {title}
      </span>

      <hr className="flex-1 border-none h-px bg-linear-to-r from-solar/20 via-solar/20 " />
    </div>
  )
}
