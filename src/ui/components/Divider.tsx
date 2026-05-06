import { twMerge } from 'tailwind-merge'

export function Divider({ className }: { className?: string }) {
  return (
    <div className={twMerge('h-[0.5px] w-full bg-solar-dim/30', className)} />
  )
}
