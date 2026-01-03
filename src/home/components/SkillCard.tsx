import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export type SkillCardProps = {
  title?: string
  pct: number
  className?: string
}

export function SkillCard({ title, pct, className }: SkillCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  // Animate the knowledge bar only if the user is
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.4 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={twMerge(
        `flex flex-col p-4 items-start py-8 gap-4 rounded-lg bg-black/30`,
        className,
      )}
    >
      <span className="text-lg font-bol text-gray-400">{title}</span>
      {/* Knowledge bar container*/}
      <div className="w-full max-w-[15rem] h-5 rounded-sm bg-gray-800 overflow-hidden">
        <div
          className="w-full h-full bg-blue-400 transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${pct}%` : '0%',
          }}
        />
      </div>
    </div>
  )
}
