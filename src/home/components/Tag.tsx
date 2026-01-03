import { twMerge } from 'tailwind-merge'

export type TagProps = {
  text: string
  className?: string
}

export function Tag({ text, className }: TagProps) {
  return (
    <span
      className={twMerge(
        'rounded-full bg-blue-500/10 border border-blue-500/30 px-3 py-1 text-xs text-blue-300',
        className,
      )}
    >
      {text}
    </span>
  )
}
