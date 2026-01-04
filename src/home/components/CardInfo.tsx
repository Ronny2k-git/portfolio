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
    <div className="z-10 w-[21.3rem] h-auto md:w-[24.5rem] p-6 flex items-center justify-center flex-col bg-gray-800/20 rounded-4xl text-gray-400 border border-gray-800">
      {/* My Infos */}
      <section className="flex flex-col gap-6">
        <p className="text-lg">My name is:</p>
        {/* Use a customized name later */}
        <span
          key={animationKey}
          className=" px-4 text-5xl md:text-6xl text-blue-300 font-semibold "
        >
          {NAME.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block animate-letter font-display"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {char}
            </span>
          ))}
        </span>

        <hr className="text-gray-700/70" />

        <p className="text-lg">I'm a:</p>
        <div className="flex flex-col text-lg text-center">
          <p>Web Developer Focused on Web3</p>

          {/* Stack */}
          <div className="mt-6 flex flex-col items-start">
            <span className="text-sm uppercase tracking-widest text-gray-500">
              Main stack
            </span>

            <ul className="mt-3 flex flex-wrap gap-2">
              {MAIN_STACK.map((tech) => (
                <Tag
                  key={tech}
                  text={tech}
                  className="text-sm hover:scale-105 cursor-pointer"
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
