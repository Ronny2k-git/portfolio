import { ExperienceCard } from '@/home/subcomponents'
import { MY_EXPERIENCE } from '@/home/subcomponents/utils'
import { Tabs as PrimitiveTabs } from 'radix-ui'
import type { ReactNode } from 'react'

export type TabsProps = {
  children: ReactNode
  tabList?: Array<{
    id: number
    value: string
    label: string
    role?: string
    year: string
  }>
}

export function Tabs({ children, tabList }: TabsProps) {
  return (
    <PrimitiveTabs.Root className="w-full" defaultValue="freelance">
      <div className="flex max-md:flex-col gap-6">
        {/* Coluna esquerda */}
        <div className="flex flex-col gap-6 md:min-w-[15rem] md:max-w-[27rem]">
          {children}

          <PrimitiveTabs.List className="flex flex-col gap-2 max-sm:gap-4 w-full">
            {tabList?.map((tab) => (
              <PrimitiveTabs.Trigger
                key={tab.id}
                value={tab.value}
                className="group flex gap-4 bg-card-basic p-4 rounded-xl border border-bg-border
                          data-[state=active]:border-solar"
              >
                <div className="size-2 mt-1.5 rounded-full bg-bg-border group-data-[state=active]:bg-solar" />

                <div className="flex flex-col gap-1 items-start">
                  <span className="font-display font-semibold text-white-glow">
                    {tab.label}
                  </span>

                  {tab.role && (
                    <span className="text-xs font-mono text-muted">
                      {tab.role}
                    </span>
                  )}

                  {tab.year && (
                    <span className="text-xs font-mono text-muted">
                      {tab.year}
                    </span>
                  )}
                </div>
              </PrimitiveTabs.Trigger>
            ))}
          </PrimitiveTabs.List>
        </div>

        {/* Coluna direita */}
        <div className="w-full md:min-w-[26rem]">
          {MY_EXPERIENCE.map((card) => (
            <PrimitiveTabs.Content key={card.value} value={card.value}>
              <ExperienceCard
                logo={card.logo}
                company={card.company}
                website={card.website}
                role={card.role}
                date={card.date}
                firstDescription={card.firstDescription}
                tech={card.tech}
                contributions={card.contributions}
              />
            </PrimitiveTabs.Content>
          ))}
        </div>
      </div>
    </PrimitiveTabs.Root>
  )
}
