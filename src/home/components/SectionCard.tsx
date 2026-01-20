import { twMerge } from 'tailwind-merge'

type SectionCardProps = {
  title: string
  className?: string
}

export function SectionCard({ title, className }: SectionCardProps) {
  return (
    <div
      role="heading"
      aria-level={3}
      className={twMerge(
        `flex items-center justify-center min-h-32 rounded-xl bg-gray-800 text-solar 
       p-4 py-6 text-center font-display text-3xl`,
        className,
      )}
    >
      {title}
    </div>
  )
}
