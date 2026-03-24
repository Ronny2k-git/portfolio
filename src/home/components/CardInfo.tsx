import { Card } from '@/ui/components'
import { useEffect, useState } from 'react'
import { MAIN_STACK } from '../utils'
import { Tag } from './Tag'

const NAMES = ['Ronny EDM', 'Frontend']

export function CardInfo() {
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
      className="
        relative z-50 justify-center
        max-sm:max-w-[19.8rem]
        sm:size-[25.5rem]
        sm:rounded-full rounded-4xl

      "
      variant={'gradient'}
    >
      {/* Content */}
      <section className="w-full p-4 sm:p-8 relative z-10 flex flex-col items-center gap-6 max-sm:gap-8 text-center">
        {/* Label */}
        <p className="sm:hidden text-sm uppercase tracking-widest font-semiboldold text-gray-400">
          {nameIndex === 0 ? 'My name is' : 'I am a'}
        </p>

        {/* Animated name */}
        <span
          key={animationKey}
          className="
            px-4 text-[44px] sm:text-6xl font-name font-bold text-solar 
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
        <div className=" h-[1.5px] w-full bg-linear-to-r via-gray-700" />
        {/* Role */}
        <p className="text-lg sm:text-xl text-gray-400 max-sm:text-gray-400 rounded-full">
          Frontend Developer
        </p>
        {/* Stack */}
        <div className="sm:hidden mt-4 flex flex-col items-center">
          <span className="text-sm uppercase tracking-widest text-gray-500">
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

        <p className="max-sm:hidden text-[15px] text-gray-500 max-sm:text-black/70">
          Building modern, performant, and decentralized web applications
        </p>
      </section>
    </Card>
  )
}
