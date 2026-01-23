import { Card, Icon } from '@/ui/components'
import { twMerge } from 'tailwind-merge'
import { Tag } from '../components'

const COMPANY_TECHS = [
  { label: 'Solidity', icon: '/logos/solidity-logo.png' },
  { label: 'React', icon: '/logos/tag/react-logo.webp' },
  { label: 'Wagmi', icon: '/logos/tag/wagmi.png' },
  { label: 'Viem', icon: '/logos/tag/viem.png' },
  { label: 'Tailwind', icon: '/logos/tag/tailwind.png' },
  { label: 'CSS', icon: '/logos/tag/css.png' },
  { label: 'Radix Ui', icon: '/logos/tag/radix-logo.png' },
  { label: 'Zod', icon: '/logos/tag/zod.png' },
  { label: 'PlanetScale', icon: '/logos/tag/planet-scale.png' },
  { label: 'Local Storage', icon: '/logos/tag/local-storage.png' },
  { label: 'React hook form', icon: '/logos/tag/hook-form.png' },
  { label: 'Tanstack Query', icon: '/logos/tag/tanstack.png' },
]

export function ExperienceSidebar({ className = '' }: { className?: string }) {
  return (
    <Card
      variant="basic"
      className={twMerge(
        'rounded-4xl h-full p-6 xl:p-14 gap-4 lg:gap-8',
        className,
      )}
    >
      {/* Mobile Heading */}
      <div className="hidden max-lg:flex flex-col items-center text-gray-500">
        <div className="flex items-center text-solar gap-2 text-3xl max-sm:text-2xl">
          <Icon className="!text-5xl max-sm:!text-4xl">deployed_code</Icon>
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
