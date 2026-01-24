import { TwitterIcon } from '@/global/icons'
import { Card, Icon } from '@/ui/components'
import { twMerge } from 'tailwind-merge'
import { Tag } from '../components'
import { COMPANY_TECHS } from './utils'

export function ExperienceSidebar({ className = '' }: { className?: string }) {
  return (
    <Card
      variant="basic"
      className={twMerge(
        'rounded-4xl h-full p-6 lg:p-10 xl:p-14 gap-4 lg:gap-8',
        className,
      )}
    >
      {/* Mobile Heading */}
      <div className="hidden max-lg:flex flex-col items-center text-gray-500">
        <div className="flex items-center text-solar gap-2 text-3xl max-sm:text-2xl">
          <Icon className="!text-5xl max-sm:!text-4xl">timeline</Icon>
          My Experience
        </div>
        <span className="text-xs text-gray-400">Oct 2024 - Nov 2025</span>
      </div>

      <div className="flex flex-col lg:gap-2">
        <p className="text-base text-gray-500">Role</p>
        <p className="text-blue-200 max-sm:text-base text-lg">
          Frontend Developer - Intern / Junior
        </p>
      </div>

      <div className="flex flex-col lg:gap-2">
        <p className="text-base text-gray-500">Company</p>
        <p className="text-blue-200 max-sm:text-base text-lg">Fjord Foundry</p>

        <div className="flex items-center gap-2 justify-between">
          <a
            href="https://www.fjordfoundry.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-200/90 hover:underline"
          >
            www.fjordfoundry.com
          </a>

          <a
            href="https://twitter.com/fjordfoundry"
            target="_blank"
            rel="noopener noreferrer"
            className="border p-2 border-gray-700/80 hover:bg-black/40 rounded-full"
          >
            <TwitterIcon className="size-4" />
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:gap-2">
        <p className="text-base text-gray-500">Period</p>
        <p className="text-blue-200 max-sm:text-base text-lg">
          Oct 2024 - Nov 2025
        </p>
      </div>
      {/* Tech Stack */}

      <div className="flex flex-col gap-4">
        <p className="text-gray-400">Tech Stack</p>

        <ul className="flex flex-wrap gap-2 text-black cursor-pointer">
          {COMPANY_TECHS.map((tech, index) => {
            return (
              <Tag
                key={index}
                text={tech.label}
                icon={<img className="size-4 rounded-full" src={tech.icon} />}
              />
            )
          })}
        </ul>
      </div>
    </Card>
  )
}
