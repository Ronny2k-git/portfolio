import { twMerge } from 'tailwind-merge'

export type TagProps = {
  text: string
  className?: string
}

export function Tag({ text, className }: TagProps) {
  return (
    <span
      className={twMerge(
        'rounded-full px-3 py-1 text-xs text-black bg-orange-200/70 border border-orange-300 backdrop-blur-sm hover:bg-orange-300/70 hover:scale-105 transition ',
        className,
      )}
    >
      {text}
    </span>
  )
}
