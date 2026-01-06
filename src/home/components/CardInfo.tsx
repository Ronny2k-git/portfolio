import { useEffect, useState } from 'react'
import { Tag } from './Tag'

const MAIN_STACK = [
  'JavaScript',
  'TypeScript',
  'React',
  'SolidJS',
  'Next.js',
  'CSS3',
  'HTML5',
  'Tailwind CSS',
  'Solidity',
  'Rust',
]

const NAMES = ['Ronny EDM', 'Web3 Dev']

export function CardInfo() {
  const [nameIndex, setNameIndex] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setNameIndex((prev) => (prev + 1) % NAMES.length)
      setAnimationKey((k) => k + 1)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const currentName = NAMES[nameIndex]

  return (
    <div
      className="
        relative z-50
        flex items-center justify-center
        max-sm:w-[21.2rem]
        size-[27rem]
        py-6 sm:rounded-full rounded-4xl via-[#1A1E1F] to-[#262A2C]
        bg-linear-to-b 
        shadow-[0_0_30px_rgba(255,255,255,0.1)]
      "
    >
      {/* Content */}
      <section className="w-full p-4 sm:p-8 relative z-10 flex flex-col items-center gap-6 max-sm:gap-8 text-center">
        {/* Label */}
        <p className="sm:hidden text-sm uppercase tracking-widest font-semiboldold text-gray-400">
          My name is
        </p>

        {/* Animated name */}
        <span
          key={animationKey}
          className="
            px-4 text-5xl sm:text-6xl font-name font-bold text-solar 
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] hover:scale-110"
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
        <div className=" h-px w-full bg-gray-400" />
        {/* Role */}
        <p className="text-base sm:text-xl text-gray-400 max-sm:text-gray-400 rounded-full">
          A Web Developer focused on Web3
        </p>
        {/* Stack */}
        <div className="sm:hidden mt-4 flex flex-col items-center">
          <span className="text-sm uppercase tracking-widest text-gray-500">
            Main stack
          </span>

          <ul className="mt-3 flex max-w-[20rem] flex-wrap items-center justify-center gap-2">
            {MAIN_STACK.map((tech) => (
              <Tag key={tech} text={tech} className="text-sm cursor-pointer" />
            ))}
          </ul>
        </div>

        <p className="max-sm:hidden text-sm text-gray-400/90 max-sm:text-black/70">
          Building modern, performant, and decentralized web applications
        </p>
      </section>
    </div>
  )
}
