import { Card } from '@/ui/components'
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

  // Animate the knowledge bar
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.4 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <Card
      ref={ref}
      className={twMerge(
        `flex flex-col p-3 items-start gap-3 rounded-2xl`,
        className,
      )}
    >
      <span className="text-sm font-semibold font- text-white/85">{title}</span>

      {/* Knowledge bar container*/}
      <div className="w-full max-w-[15rem] h-1 rounded-sm bg-bg-border overflow-hidden">
        <div
          className="w-full h-full bg-linear-to-l to-solar-dim via-solar/85 from-solar/85 transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${pct}%` : '0%',
          }}
        />
      </div>
    </Card>
  )
}
