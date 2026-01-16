import { twMerge } from 'tailwind-merge'

export type TagProps = {
  icon?: React.ReactNode
  text: string
  className?: string
}

export function Tag({ icon, text, className }: TagProps) {
  return (
    <div
      className={twMerge(
        'rounded-full flex items-center gap-2 py-1 px-3 text-gray-300 bg-gray-800 border border-gray-500 backdrop-blur-sm hover:bg-gray-800/70 hover:scale-105 transition ',
        className,
      )}
    >
      {icon && icon}
      <span className="text-xs">{text}</span>
    </div>
  )
}
