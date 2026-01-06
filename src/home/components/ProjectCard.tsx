import { Tag } from './Tag'

type ProjectCardProps = {
  title: string
  description: string
  image: string
  techs: Array<string>
  github?: string
  live?: string
}

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
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 transition group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-xl font-semibold text-gray-400">{title}</h3>

        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>

        {/* Tech stack */}
        <ul className="flex flex-wrap gap-2 text-black cursor-pointer">
          {techs.map((tech) => (
            <Tag key={tech} text={tech}></Tag>
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
  )
}
