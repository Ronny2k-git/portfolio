import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type { ComponentPropsWithRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const cardStyle = cva('w-full flex flex-col relative h-auto', {
  variants: {
    variant: {
      basic: 'bg-black/20',
      secondary: 'bg-gray-800',
      gradient:
        'bg-linear-to-b via-[#1A1E1F] to-[#262A2C] shadow-[0_0_30px_rgba(255,255,255,0.1)]',
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
