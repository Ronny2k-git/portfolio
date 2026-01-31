import { Card } from '@/ui/components'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

type ProjectCardProps = {
  title: string
  description: string
  image: string
  github?: string
  live?: string
  className?: string
}

export function ProjectCard({
  title,
  description,
  image,
  github,
  live,
  className,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card
      className={twMerge(
        'group w-full relative rounded-4xl backdrop-blur-sm transition',
        className,
      )}
    >
      {/* Banner */}
      <div className="relative rounded-2xl aspect-video min-h-[16rem] h-full w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-2xl object-cover object-top transition duration-500 lg:group-hover:scale-105"
        />

        {/* Desktop overlay (hover only) */}
        <div
          className={
            'max-lg:hidden absolute inset-0 bg-black/75 opacity-0 transition duration-300 group-hover:opacity-100'
          }
        />

        {/* Mobile overlay (state only) */}
        <div
          className={twMerge(
            'absolute inset-0 bg-black/75 lg:hidden',
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
          )}
        />
      </div>

      {/* Content */}
      <div
        className={twMerge(
          'absolute flex flex-col h-full gap-4 p-4 sm:p-6 ',
          !isOpen && 'opacity-0 pointer-events-none lg:pointer-events-auto',
          'lg:opacity-0 lg:group-hover:opacity-100',
        )}
      >
        <div className="flex flex-col gap-2 sm:gap-4">
          <h3 className="text-xl font-semibold text-gray-400">{title}</h3>

          <p className="max-sm:text-sm text-base text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="flex h-full justify-between items-end gap-4 text-sm">
          <div className="flex gap-4">
            {github && (
              <a
                href={github}
                target="_blank"
                className="text-orange-300 hover:text-solar transition"
              >
                GitHub →
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                className="text-orange-300 hover:text-solar transition"
              >
                Live →
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Mobile button to show the card description */}
      <button
        className="absolute max-[1025px]:flex hidden text-blue-300 border bg-gray-900 bottom-2 right-2 text-xs py-1 px-3 
      rounded-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close Details' : 'View Details'}
      </button>
    </Card>
  )
}
