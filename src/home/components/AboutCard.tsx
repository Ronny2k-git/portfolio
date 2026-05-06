import { getYearsOfExperience } from '@/global/utils/getYearsOfExperience'
import { Card } from '@/ui/components'
import type { LucideIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

type AboutCardProps = {
  icon: LucideIcon
  title: string
  description?: boolean
  items?: Array<string>
  className?: string
}

export function AboutCard({
  icon: Icon,
  title,
  description,
  items,
  className,
}: AboutCardProps) {
  return (
    <Card
      className={twMerge('p-4 sm:p-6 gap-4 rounded-4xl', className)}
      variant={'basic'}
    >
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5 text-solar shrink-0" />

        <span className="text-sm font-bold text-solar uppercase font-display">
          {title}
        </span>
      </div>

      {description && (
        <p className="text-sm text-muted-hi">
          I’m Ronny, a{' '}
          <span className="text-white/80 font-semibold">
            Frontend Developer
          </span>{' '}
          with{' '}
          <span className="text-white/80 font-semibold">
            {getYearsOfExperience('2024-03-01')}+ years of experience
          </span>
          , specializing in React, TypeScript, and Node.js. I have experience
          building production-ready web applications, integrating APIs, and
          implementing Web3 features.
        </p>
      )}

      {items && (
        <ul className="flex flex-col gap-[1px] text-sm text-muted-hi whitespace-nowrap">
          {items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      )}
    </Card>
  )
}
