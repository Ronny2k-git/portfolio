import { Card, Divider } from '@/ui/components'
import { twMerge } from 'tailwind-merge'
import { Tag } from './Tag'

type ProjectCardProps = {
  id?: string
  banner: string
  logo: string
  title: string
  date?: string
  github?: string
  live?: string
  description: string
  tech?: Array<{ label: string; icon: string; alt: string }>
  className?: string
}

export function ProjectCard({
  id,
  banner,
  logo,
  title,
  date,
  github,
  live,
  description,
  tech,
  className,
}: ProjectCardProps) {
  return (
    <Card
      id={id}
      variant="secondary"
      className={twMerge('rounded-4xl overflow-hidden', className)}
    >
      {/* Header */}
      <div className="w-full flex relative">
        {/* Banner */}
        <img
          alt="The project banner"
          src={banner}
          className="w-full aspect-video max-h-[16rem] object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/95 via-[#0a0a12]/50" />

        {/* Logo + title + date */}
        <div className="absolute bottom-0 w-full p-4 flex sm:items-center gap-4">
          <img
            src={logo}
            alt="The project logo"
            className="border border-border-hi/55 min-h-12 min-w-12 max-h-12 max-w-12 sm:min-h-15 
           sm:min-w-15 sm:max-h-15 sm:max-w-15 rounded-2xl p-1.5"
          />

          <div className="flex gap-2 flex-wrap justify-between w-full font-mono">
            <div className="flex flex-col">
              <span
                className="text-2xl font-display font-semibold text-white-glow"
                translate="no"
              >
                {title}
              </span>

              <span className="text-xs text-muted-hi brightness-125">
                {date}
              </span>
            </div>

            {/*  links */}
            <div className="flex items-end gap-3 uppercase text-[11px] tracking-[0.12em] font-semibold">
              <a
                href={github}
                target="_blank"
                aria-label="Go to the company website (new tab)"
                className="text-solar hover:text-orange-300/90 border-b"
              >
                ⟶ Github
              </a>

              {live && (
                <a
                  href={live}
                  target="_blank"
                  aria-label="Go to the company website (new tab)"
                  className="text-solar hover:text-orange-300/90  border-b"
                >
                  ⟶ Live
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-4">
        {/* Description */}
        <p className="text-muted text-sm">{description}</p>

        <Divider />

        {/* Tech Stach */}
        <div className="flex flex-col gap-4 text-muted">
          <span className="text-[13px] uppercase font-display">
            Skills used
          </span>

          <ul className="flex max-sm:justify-cente flex-wrap gap-2">
            {tech?.map((item, index) => (
              <li key={index} className="flex flex-wrap gap-2">
                <Tag
                  text={item.label}
                  icon={
                    <img
                      className="size-4 rounded-full object-center object-cover"
                      src={item.icon}
                      alt={item.alt}
                    />
                  }
                  className="text-sm cursor-pointer"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}
