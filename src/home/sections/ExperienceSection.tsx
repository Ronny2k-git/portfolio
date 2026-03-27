import { Card } from '@/ui/components'
import { motion } from 'framer-motion'
import { Tabs } from 'radix-ui'
import { SectionHeader } from '../components'
import { ExperienceCard } from '../subcomponents'

const experienceTabs = [
  { id: 1, value: 'freelance', label: 'Freelance', role: 'Frontend Developer' },
  {
    id: 2,
    value: 'fjord',
    label: 'Fjord Foundry',
    role: 'Junior Frontend Developer',
  },
]

export function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="scroll-mt-[12rem] flex flex-col w-full gap-20 text-solar"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 120 }}
      transition={{ duration: 1 }}
    >
      <SectionHeader
        section="Career"
        number={4}
        title="My Experience"
        description="A summary of my experience and growth as a developer."
      />

      <div className="flex gap-6">
        <div className="flex flex-col gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card className="w-[30rem] h-20 rounded-2xl" variant={'basic'} />
          ))}
        </div>

        <ExperienceCard />
      </div>

      <Tabs.Root className="w-full flex gap-6">
        <Tabs.List className="w-full flex flex-col gap-2">
          {experienceTabs.map((tab) => (
            <Tabs.Trigger
              className="bg-card-basic p-4 rounded-xl border border-bg-border cursor-pointer"
              key={tab.id}
              value={tab.value}
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {/* Experience Cards */}
        {}
        <Tabs.Content value=""></Tabs.Content>
      </Tabs.Root>
    </motion.section>
  )
}
