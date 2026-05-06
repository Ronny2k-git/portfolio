import { getYearsOfExperience } from '@/global/utils/getYearsOfExperience'
import { Card } from '@/ui/components'
import { useEffect, useState } from 'react'
import { MAIN_STACK } from '../utils'
import { Tag } from './Tag'

const NAMES = ['Ronny EDM', 'Frontend']

export function HeroCardInfo() {
  const [nameIndex, setNameIndex] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setNameIndex((prev) => (prev + 1) % NAMES.length)
      setAnimationKey((k) => k + 1)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const currentName = NAMES[nameIndex]

  return (
    <Card
      className=" relative z-50 flex items-center justify-center max-sm:max-w-[19.8rem] sm:size-[23rem] 
      rounded-[32px] sm:rounded-full "
      variant={'gradient'}
    >
      {/* Content */}
      <div className="w-full p-4 sm:p-8 relative z-10 flex flex-col items-center gap-6 max-sm:gap-8 text-center">
        {/* Label */}
        <p className="sm:hidden text-sm uppercase tracking-widest font-semiboldold text-gray-400">
          {nameIndex === 0 ? 'My name is' : 'Working with'}
        </p>

        {/* Animated name */}
        <span
          key={animationKey}
          className="
            text-5xl sm:text-[3rem] font-serif leading-[1.05] text-solar tracking-tight
            hover:scale-110 whitespace-nowrap"
          translate="no"
        >
          {currentName.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block animate-letter"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </span>

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r via-solar/70 my-2" />

        {/* Role */}
        <p className="text-lg text-muted font-mono tracking-wide">
          // Frontend Developer
          <span className="text-solar/75 block">
            {getYearsOfExperience('2024-03-01')}+ years exp
          </span>
        </p>

        {/* Stack */}
        <div className="sm:hidden mt-4 flex flex-col items-center">
          <span className="text-sm uppercase tracking-widest text-muted-hi">
            Main stack
          </span>

          <ul
            className="mt-3 flex max-w-[20rem] flex-wrap items-center justify-center gap-2"
            translate="no"
          >
            {MAIN_STACK.map((tech, index) => (
              <li key={index}>
                <Tag
                  text={tech.label}
                  icon={
                    <img
                      className="size-4 rounded-full object-center object-cover"
                      src={tech.icon}
                      alt={tech.alt}
                    />
                  }
                  className="text-sm cursor-pointer"
                />
              </li>
            ))}
          </ul>
        </div>

        <p className="max-sm:hidden text-sm max-w-[260px] text-muted-hi">
          Building <span className="text-white/85">scalable</span>,{' '}
          <span className="text-white/85">high-performance</span> web
          applications and <span className="text-white/85">decentralized</span>{' '}
          systems.
        </p>
      </div>
    </Card>
  )
}
