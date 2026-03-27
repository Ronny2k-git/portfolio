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
  tech?: [{ label: string; icon: string; alt: '' }]
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
    <Card variant="secondary" className="rounded-4xl overflow-hidden ">
      {/* Banner */}
      <div className="relative hover:scale-102">
        <img
          src="/home/company-banner.webp"
          alt="The company's banner"
          className="aspect-square sm:aspect-video  max-h-[25rem] w-full object-cover max-sm:object-right"
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute bottom-6 left-6 flex items-center gap-4">
          <img
            src={logo}
            alt="The company's logo"
            className="border border-indigo-300 min-h-15 min-w-15 max-h-15 max-w-15 rounded-full bg-black/40"
          />

          <div>
            <span className="text-2xl text-indigo-300" translate="no">
              {company}
            </span>

            <p className="text-sm text-gray-400">
              {role} · {date}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-8">
        <p className="text-gray-400">{firstDescription}</p>

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

        <div className="flex flex-col gap-8">
          <ul className="flex flex-col gap-3">
            {contributions?.map((item, index) => (
              <li key={index} className="flex gap-3 text-gray-400">
                <MoveRight className="size-3 text-solar" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}

// <div className="p-6 flex flex-col gap-8">
//       <p className="text-gray-400 leading-relaxed">
//         Worked on Web3-focused applications, contributing to frontend
//         architecture, UI development, and blockchain integrations. Focused on
//         building scalable, maintainable interfaces and improving user
//         experience in production-level products.
//       </p>

//       <div className="flex flex-col gap-8">
//         <ul className="flex flex-col gap-3">
//           {EXPERIENCE_HIGHLIGHTS.map((item) => (
//             <li key={item.id} className="flex gap-3 text-gray-400">
//               <CheckCircle className="min-h-6 min-w-6 text-indigo-300" />
//               {item.text}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
