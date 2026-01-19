import { Tag } from './Tag'

type Tech = {
  label: string
  icon: string
}

type ProjectCardProps = {
  title: string
  description: string
  image: string
  techs: Array<Tech>
  github?: string
  live?: string
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
  techs,
  github,
  live,
}: ProjectCardProps) {
  return (
    <div className="group w-full flex flex-col overflow-hidden rounded-2xl border border-orange-500/10 bg-black/40 backdrop-blur-sm transition hover:border-orange-500/30">
      {/* Banner */}
      <div className="relative aspect-video w-full max-h-[27rem] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 transition group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-4 flex-1">
        <h3 className="text-xl font-semibold text-gray-400">{title}</h3>

        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>

        {/* Tech stack */}
        <div className="flex flex-col gap-4 justify-end h-full">
          <ul className="flex flex-wrap gap-2 text-black cursor-pointer">
            {techs.map((tech, index) => (
              <Tag
                key={index}
                text={tech.label}
                icon={<img className="size-4 rounded-full" src={tech.icon} />}
              />
            ))}
          </ul>

          {/* Actions */}
          <div className="mt-2 flex gap-4 text-sm">
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
      </div>
    </div>
  )
}
