import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type { ComponentPropsWithRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const cardStyle = cva('w-full flex flex-col relative h-auto', {
  variants: {
    variant: {
      basic: 'bg-card-basic border border-bg-border hover:border-border-hi',
      secondary: ` border border-bg-border hover:border-border-hi`,
      gradient: ` bg-card-basic border border-bg-border shadow-[0_0_40px_rgba(201,160,60,0.08)]
         hover:border-border-hi hover:transition duration-300 bg-[radial-gradient(circle_at_center,rgba(201,160,60,0.08),transparent_70%)]`,
      gradient2:
        'border border-gray-700 bg-gradient-to-bl from-black via-zinc-900 to-black/50',
    },
  },
})

export type CardProps = ComponentPropsWithRef<'div'> & {
  className?: string
} & VariantProps<typeof cardStyle>

export function Card({
  variant = 'basic',
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div className={twMerge(cardStyle({ variant }), className)} {...props}>
      {children}
    </div>
  )
}
