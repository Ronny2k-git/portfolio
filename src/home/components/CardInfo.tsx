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

const NAME = 'Ronny EDM'

export function CardInfo() {
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((k) => k + 1)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="
        relative z-50
        flex items-center justify-center
        max-sm:w-[21.2rem]
        sm:size-[28rem]
        md:size-[30rem]
        p-6
        shadow-[0_0_80px_rgba(246,161,59,0.25]
      "
    >
      {/* 🔶 Background image (desktop) */}
      <div
        className="
          absolute inset-0
          hidden sm:block
          bg-[url('/home/sun.png')]
          bg-cover bg-center
          opacity-85
          blur-[1px
          z-10
        "
      />

      {/* 🔶 Background color (mobile) */}
      <div
        className="
          absolute inset-0
          sm:hidden
          bg-amber-600/90
          rounded-4xl
          
        "
      />

      {/* Content */}
      <section className="relative z-10 flex flex-col items-center gap-6 text-center">
        {/* Label */}
        <p className="text-sm uppercase tracking-widest font-semiboldold text-gray-800 max-sm:text-black">
          My name is
        </p>

        {/* Animated name */}
        <span
          key={animationKey}
          className="
            px-4
            text-5xl sm:text-6xl
            font-display font-semibold
            text-gray-800
            max-sm:text-black/80
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]
          "
        >
          {NAME.split('').map((char, index) => (
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
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gray-900/70" />

        {/* Role */}
        <p className="text-base text-gray-800 max-sm:text-black bg-orange-200/70 px-2 rounded-full">
          Web Developer focused on Web3
        </p>

        {/* Stack */}
        <div className="mt-4 flex flex-col items-center">
          <span className="text-sm uppercase tracking-widest text-gray-800 max-sm:text-black">
            Main stack
          </span>

          <ul className="mt-3 flex max-w-[20rem] flex-wrap items-center justify-center gap-2">
            {MAIN_STACK.map((tech) => (
              <Tag
                key={tech}
                text={tech}
                className="sm:text-sm cursor-pointer"
              />
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
