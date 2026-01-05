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
        size-[28rem]
        py-6
        shadow-[0_0_80px_rgba(246,161,59,0.25]
      "
    >
      {/* 🔶 Background image (desktop) */}
      <div
        className="
          absolute inset-0
          hidden sm:block
          bg-[url('/home/sun.png')]
          bg-cover
          opacity-80
          z-10
        "
      />

      {/* 🔶 Background color (mobile) */}
      <div
        className="
          absolute inset-0
          sm:hidden
         bg-black/30
          rounded-4xl
          
        "
      />

      {/* Content */}
      <section className="relative z-10 flex flex-col items-center gap-6 max-sm:gap-8 text-center">
        {/* Label */}
        <p className="sm:hidden text-sm uppercase tracking-widest font-semiboldold text-gray-400">
          My name is
        </p>
        {/* Animated name */}
        <span
          key={animationKey}
          className="
            px-4
            text-5xl sm:text-6xl
            font-name font-bold
            text-gray-800
            max-sm:text-solar
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]
          "
        >
          {currentName.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block animate-letter"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {char}
            </span>
          ))}
        </span>
        {/* Divider */}
        <div className="sm:hidden h-0.5 w-full bg-gradient-to-r from-transparent via-gray-900/70" />
        {/* Role */}
        <p className="text-base sm:text-xl text-gray-800 max-sm:text-gray-400 rounded-full">
          A Web Developer focused on Web3
        </p>

        {/* Stack */}
        <div className="sm:hidden mt-4 flex flex-col items-center">
          <span className="text-sm uppercase tracking-widest text-gray-400">
            Main stack
          </span>

          <ul className="mt-3 flex max-w-[20rem] flex-wrap items-center justify-center gap-2">
            {MAIN_STACK.map((tech) => (
              <Tag key={tech} text={tech} className="text-sm cursor-pointer" />
            ))}
          </ul>
        </div>

        <p className="max-sm:hidden max-w-[20rem] text-gray-700 max-sm:text-black/70">
          Building decentralized experiences with modern web technologies
        </p>
      </section>
    </div>
  )
}
