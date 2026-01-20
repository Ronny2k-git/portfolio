import { Card } from '@/ui/components'
import { twMerge } from 'tailwind-merge'

type SectionCardProps = {
  title: string
  className?: string
}

export function SectionCard({ title, className }: SectionCardProps) {
  return (
    <Card
      role="heading"
      aria-level={3}
      className={twMerge(
        ` items-center justify-center min-h-32 rounded-xl text-solar 
       p-4 py-6 text-center font-display text-3xl`,
        className,
      )}
      variant={'secondary'}
    >
      {title}
    </Card>
  )
}
