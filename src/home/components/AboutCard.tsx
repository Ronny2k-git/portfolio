import { Card } from '@/ui/components'
import { twMerge } from 'tailwind-merge'

type AboutCardProps = {
  title: string
  description?: string
  items?: Array<string>
  className?: string
}

export function AboutCard({
  title,
  description,
  items,
  className,
}: AboutCardProps) {
  return (
    <Card
      className={twMerge('p-8 border-0 gap-4 rounded-4xl', className)}
      variant={'basic'}
    >
      <h3 className="text-xl font-bold text-solar">{title}</h3>

      {description && (
        <p className="text-base leading-relaxed text-gray-400">{description}</p>
      )}

      {items && (
        <ul className="flex flex-col gap-2 text-base text-gray-400">
          {items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      )}
    </Card>
  )
}
