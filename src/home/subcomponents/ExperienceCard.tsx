import { Card } from '@/ui/components'
import { MoveRight } from 'lucide-react'
import { Tag } from '../components'

export type ExperienceCardProps = {
  id?: number
  value?: 'freelance'
  logo: string
  company: string
  role: string
  date: string
  firstDescription: string
  tech?: Array<{ label: string; icon: string; alt: string }>
  contributions?: Array<string>
}

export function ExperienceCard({
  logo,
  company,
  role,
  date,
  firstDescription,
  tech,
  contributions,
}: ExperienceCardProps) {
  return (
    <Card
      variant="secondary"
      className="rounded-4xl p-4 sm:p-8 overflow-hidden "
    >
      {/* HEADER */}
      <div className=" flex gap-4">
        <img
          src={logo}
          alt="The company's logo"
          className="border border-border-hi/55 min-h-12 min-w-12 max-h-12 max-w-12 sm:min-h-15 
           sm:min-w-15 sm:max-h-15 sm:max-w-15 rounded-2xl "
        />

        <div className="flex flex-col gap-2 font-mono">
          <span
            className="text-2xl font-display font-semibold text-white-glow"
            translate="no"
          >
            {company}
          </span>

          <span className="text-xs">{role} </span>
          <span className="text-xs text-muted">{date}</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col gap-4 sm:gap-8">
        <p className="text-muted text-[15px]">{firstDescription}</p>

        <div className="flex flex-col gap-2 text-muted">
          <span className="text-[13px] uppercase font-display">
            Skills used
          </span>

          <ul className="flex flex-wrap gap-2">
            {tech?.map((item, index) => (
              <li
                key={index}
                className="flex max-sm:text-center flex-wrap gap-2"
              >
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

        {/* CONTRIBUTIONS */}
        <div className="flex flex-col gap-2">
          <span className="text-[13px] text-muted uppercase font-display">
            Activities
          </span>

          <ul className="flex flex-col gap-1">
            {contributions?.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-muted-hi text-[15px]"
              >
                <MoveRight className="min-h-3 min-w-3 max-h-3 max-w-3 text-solar" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}
