import { motion } from 'framer-motion'
import { Tabs } from 'radix-ui'
import { SectionHeader } from '../components'
import { ExperienceCard } from '../subcomponents'
import { MY_EXPERIENCE } from '../subcomponents/utils'

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

      <Tabs.Root
        className="w-full flex max-md:flex-col gap-6"
        defaultValue={'freelance'}
      >
        <Tabs.List className="w-full md:w-1/2 md:min-w-[20rem] flex flex-col gap-2">
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
        {MY_EXPERIENCE.map((card) => (
          <Tabs.Content value={card.value}>
            <ExperienceCard
              logo={card.logo}
              company={card.company}
              role={card.role}
              date={card.date}
              firstDescription={card.firstDescription}
              // tech={card.tech}
              contributions={card.contributions}
            />
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </motion.section>
  )
}
