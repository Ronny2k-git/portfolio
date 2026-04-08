import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { Tabs as PrimitiveTabs } from 'radix-ui'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { Divider } from './Divider'

const tabsListVariants = cva('flex w-full gap-2 sm:gap-4', {
  variants: {
    direction: {
      vertical: 'flex-col',
      horizontal: 'flex-row overflow-x-auto',
    },
  },
  defaultVariants: {
    direction: 'vertical',
  },
})

const tabsTriggerVariants = cva(
  'group flex gap-4 rounded-xl border border-bg-border cursor-pointer transition-colors',
  {
    variants: {
      variant: {
        basic: 'bg-card-basic data-[state=active]:border-solar',
        basic2: 'bg-card-basic',
      },
      size: {
        md: 'p-4',
        sm: 'p-3',
      },
      direction: {
        vertical: 'w-full',
        horizontal: 'whitespace-nowrap',
      },
    },
    defaultVariants: {
      variant: 'basic',
      size: 'md',
    },
  },
)

export type TabsProps = {
  defaultValue: string
  direction: 'vertical' | 'horizontal'
  tabListStyle?: string
  tabList?: Array<{
    id: number
    value: string
    label: string
    role?: string
    year?: string
  }>
  tabContent?: Array<{
    value: string
    content: ReactNode
  }>
} & VariantProps<typeof tabsTriggerVariants>

export function Tabs({
  defaultValue,
  variant,
  size,
  direction,
  tabListStyle,
  tabList,
  tabContent,
}: TabsProps) {
  return (
    <PrimitiveTabs.Root className="w-full" defaultValue={defaultValue}>
      <div className="flex max-md:flex-col gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          <PrimitiveTabs.List
            className={twMerge(tabsListVariants({ direction }), tabListStyle)}
          >
            {tabList?.map((tab) => (
              <PrimitiveTabs.Trigger
                key={tab.id}
                value={tab.value}
                className={tabsTriggerVariants({ variant, size, direction })}
              >
                <div
                  className="size-2 mt-1.5 rounded-full bg-bg-border group-data-[state=active]:bg-solar 
                  sm:group-data-[state=active]:shadow-solar-sm"
                />

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

        <Divider className="md:hidden " />

        {/* Right column */}
        <div className="w-full md:min-w-[26rem]">
          {tabContent?.map((tab) => (
            <PrimitiveTabs.Content key={tab.value} value={tab.value}>
              {tab.content}
            </PrimitiveTabs.Content>
          ))}
        </div>
      </div>
    </PrimitiveTabs.Root>
  )
}
