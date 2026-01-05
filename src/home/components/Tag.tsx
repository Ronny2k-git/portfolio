import { twMerge } from 'tailwind-merge'

export type TagProps = {
  text: string
  className?: string
}

export function Tag({ text, className }: TagProps) {
  return (
    <span
      className={twMerge(
        'rounded-full px-3 py-1 text-xs text-gray-300 bg-gray-800 border border-gray-500 backdrop-blur-sm hover:bg-gray-800/70 hover:scale-105 transition ',
        className,
      )}
    >
      {text}
    </span>
  )
}
