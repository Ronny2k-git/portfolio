import { Card } from '@/ui/components'
import { twMerge } from 'tailwind-merge'

type SectionHeaderProps = {
  title: string
  icon?: React.ReactNode
  description: string
  className?: string
}

export function SectionHeader({
  title,
  icon,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <Card
      className={twMerge(
        'flex items-center p-4 min-h-28 justify-center gap- rounded-4xl',
        className,
      )}
      variant={'secondary'}
    >
      <div className="flex items-center gap-2">
        {icon && <span>{icon}</span>}

        <h2 className="text-3xl sm:text-4xl max-sm:text-center font-bold font-display text-solar">
          {title}
        </h2>
      </div>

      <span className="text-gray-400 text-center">{description}</span>
    </Card>
  )
}
