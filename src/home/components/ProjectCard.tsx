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

// UPDATE THIS CARD LATER, PROBABLY WILL BE SOMETHING LIKE:

// 1 THE DESCRIPTION WILL BE DISPLAYED WHEN THE USER HOVERS THE MOUSE OVER IT AND THE BANNER
//   IMAGE WILL SCALE UP (105 MAYBE)
// 2 THE CARD BANNER WILL BE ASPECT-VIDEO
// 3 WILL BE A SECTION CALLED: TECNOLOGIES USED TO BUILD IT (TAGS)
// 4 THE NAVIGATION LINKS (GIT AND LIVE) WILL BE ABSOLUTE (ABOVE THE IMAGE)

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
      <div className="relative bg-b aspect-video min-h-[16rem] rounded-4xl w-full max-h-[27rem] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/90 opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="absolute hidden group-hover:flex flex-col h-full gap-4 p-6 ">
        <h3 className="text-xl font-semibold text-gray-400">{title}</h3>

        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>

        {/* Actions */}
        <div className="flex h-full items-end gap-4 text-sm">
          {github && (
            <a
              href={github}
              target="_blank"
              className="text-gray-400 hover:text-solar transition"
            >
              GitHub →
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              className="text-gray-400 hover:text-solar transition"
            >
              Live →
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}
