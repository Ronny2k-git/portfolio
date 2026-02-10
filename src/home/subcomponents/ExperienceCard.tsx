import { Card, Icon } from '@/ui/components'
import { EXPERIENCE_HIGHLIGHTS } from './utils'

export function ExperienceCard() {
  return (
    <Card variant="gradient2" className="rounded-4xl overflow-hidden">
      {/* Banner */}
      <div className="relative hover:scale-102">
        <img
          src="/home/company-banner.png"
          className="aspect-square sm:aspect-video  max-h-[25rem] w-full object-cover max-sm:object-right"
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute bottom-6 left-6 flex items-center gap-4">
          <img
            src="/home/company-logo.png"
            className="border border-indigo-300 min-h-15 min-w-15 max-h-15 max-w-15 rounded-full bg-black/40"
          />

          <div>
            <h3 className="text-2xl text-indigo-300" translate="no">
              Fjord Foundry
            </h3>
            <p className="text-sm text-gray-400">
              Frontend Developer · Oct 2024 — Nov 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-8">
        <p className="text-gray-400 leading-relaxed">
          Worked on Web3-focused applications, contributing to frontend
          architecture, UI development, and blockchain integrations. Focused on
          building scalable, maintainable interfaces and improving user
          experience in production-level products.
        </p>

        <div className="flex flex-col gap-8">
          <h4 className="text-xl text-indigo-300">What I did</h4>

          <ul className="flex flex-col gap-3">
            {EXPERIENCE_HIGHLIGHTS.map((item) => (
              <li key={item.id} className="flex gap-3 text-gray-400">
                <Icon className="text-indigo-300">{item.icon}</Icon>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}
