import { Card, Divider } from '@/ui/components'
import { Tag } from 'lucide-react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

type ProjectCardProps = {
  id?: string
  image: string
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
  image,
  title,
  date,
  github,
  live,
  description,
  tech,
  className,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  // TO DO LATER:

  // 1 FINISH UPDATING THIS CARD
  // 2 DOWNLOAD AND IMPLEMENT THE PROJECT LOGOS
  // 3 IMPLEMENT A BANNER THAT WILL ONLY BE SHOWED ON DESKTOP (LG)

  return (
    // <Card
    //   id={id}
    //   className={twMerge(
    //     'group w-full relative rounded-4xl backdrop-blur-sm border-0 transition',
    //     className,
    //   )}
    //   variant={'basic'}
    // >
    //   {/* Banner */}
    //   <div className="relative rounded-2xl aspect-video min-h-[15rem] h-full w-full overflow-hidden">
    //     <img
    //       src={image}
    //       alt={title}
    //       className="h-full w-full rounded-2xl object-cover object-top transition duration-500 lg:group-hover:scale-105"
    //     />

    //     {/* Desktop overlay (hover only) */}
    //     <div
    //       className={
    //         'max-lg:hidden absolute inset-0 bg-black/75 opacity-0 transition duration-300 group-hover:opacity-100'
    //       }
    //     />

    //     {/* Mobile overlay (state only) */}
    //     <div
    //       className={twMerge(
    //         'absolute inset-0 bg-black/75 lg:hidden',
    //         isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
    //       )}
    //     />
    //   </div>

    //   {/* Content */}
    //   <div
    //     className={twMerge(
    //       'absolute flex flex-col h-full gap-4 p-4 sm:p-6 ',
    //       !isOpen && 'opacity-0 pointer-events-none lg:pointer-events-auto',
    //       'lg:opacity-0 lg:group-hover:opacity-100',
    //     )}
    //   >
    //     <div className="flex flex-col gap-2 sm:gap-4">
    //       <h3 className="text-xl font-semibold text-white/80">{title}</h3>

    //       <p className="max-sm:text-sm text-[15px] lg:text-base text-gray-300">
    //         {description}
    //       </p>
    //     </div>

    //     {/* Actions */}
    //     <div className="flex h-full justify-between items-end gap-4 text-sm">
    //       <div className="flex text-xs font-semibold gap-4 uppercase font-display">
    //         {github && (
    //           <a
    //             href={github}
    //             target="_blank"
    //             className="text-orange-300/90 hover:text-solar border-b transition"
    //             aria-label={`View the projects's source code`}
    //           >
    //             GitHub →
    //           </a>
    //         )}
    //         {live && (
    //           <a
    //             href={live}
    //             target="_blank"
    //             className="text-orange-300/90 border-b transition"
    //             aria-label={`View the project live`}
    //           >
    //             Live →
    //           </a>
    //         )}
    //       </div>
    //     </div>
    //   </div>

    //   {/* Mobile button to show the card description */}
    //   <button
    //     className="absolute max-[1025px]:flex hidden text-white/85 border border-solar/90 bg-solar-dim/70 0 bottom-2 right-2 text-xs py-1 px-3
    //   rounded-2xl cursor-pointer"
    //     onClick={() => setIsOpen(!isOpen)}
    //   >
    //     {isOpen ? 'Close Details' : 'View Details'}
    //   </button>
    // </Card>
    <Card
      variant="secondary"
      className={twMerge('rounded-4xl p-4 sm:p-8 overflow-hidden', className)}
    >
      {/* HEADER */}
      <div className=" flex gap-4">
        <img
          src={image}
          alt="The company's logo"
          className="border border-border-hi/55 min-h-12 min-w-12 max-h-12 max-w-12 sm:min-h-15 
           sm:min-w-15 sm:max-h-15 sm:max-w-15 rounded-2xl "
        />

        <div className="flex flex-col gap-2 font-mono">
          <div className="flex flex-wrap items-center gap-4">
            <span
              className="text-2xl font-display font-semibold text-white-glow"
              translate="no"
            >
              {title}
            </span>

            <div className="flex gap-2">
              <a
                href={github}
                target="_blank"
                aria-label="Go to the company website (new tab)"
                className="text-muted-hi text-xs hover:text-solar border-b"
              >
                ⟶ Github
              </a>

              {live && (
                <a
                  href={live}
                  target="_blank"
                  aria-label="Go to the company website (new tab)"
                  className="text-muted-hi text-xs hover:text-solar border-b"
                >
                  ⟶ Live
                </a>
              )}
            </div>
          </div>

          {/* <span className="text-xs">{role} </span> */}
          <span className="text-xs text-muted">{date}</span>
        </div>
      </div>

      {/* Overview */}
      <p className="text-muted text-[15px] max-sm:mt-4 p-2 sm:p-4">
        {description}
      </p>

      <Divider />

      {/* Tech Stach */}
      <div className="flex flex-col p-4 gap-2 text-muted">
        <span className="text-[13px] uppercase font-display">Skills used</span>

        <ul className="flex flex-wrap gap-2">
          {tech?.map((item, index) => (
            <li key={index} className="flex max-sm:text-center flex-wrap gap-2">
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
    </Card>
  )
}
