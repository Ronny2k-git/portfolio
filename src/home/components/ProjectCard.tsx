import { Card } from '@/ui/components'
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
  return (
    <Card
      className={twMerge(
        'group w-full relative rounded-4xl backdrop-blur-sm transition',
        className,
      )}
    >
      {/* Banner */}
      <div className="relative rounded-2xl aspect-video min-h-[16rem] h-full w-full max-h-[27rem] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-2xl object-cover object-top transition duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/75 opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="absolute hidden group-hover:flex flex-col h-full gap-4 p-6 ">
        <h3 className="text-xl font-semibold text-gray-400">{title}</h3>

        <p className="text-sm text-gray-300 leading-relaxed">{description}</p>

        {/* Actions */}
        <div className="flex h-full items-end gap-4 text-sm">
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
    </Card>
  )
}
