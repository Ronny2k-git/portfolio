import { twMerge } from 'tailwind-merge'

type SectionHeaderProps = {
  title: string
  icon?: React.ReactNode
  className?: string
}

export function SectionHeader({ title, icon, className }: SectionHeaderProps) {
  return (
    <header
      className={twMerge('flex items-center justify-center gap-4', className)}
    >
      {icon && <span>{icon}</span>}

      <h2 className="text-3xl sm:text-4xl max-sm:text-center font-bold font-display text-solar">
        {title}
      </h2>
    </header>
  )
}
