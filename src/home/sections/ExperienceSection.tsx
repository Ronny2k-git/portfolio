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

      {/* Experience Content */}
      <Tabs.Root
        className="w-full flex max-md:flex-col gap-6"
        defaultValue={'freelance'}
      >
        <Tabs.List className="flex flex-col gap-2 max-sm:gap-4 w-full md:min-w-[15rem] md:max-w-[27rem] ">
          {experienceTabs.map((tab) => (
            <Tabs.Trigger
              className="group flex gap-4 bg-card-basic p-4 rounded-xl border border-bg-border animation duration-300 cursor-pointer
              data-[state=active]:border-solar "
              key={tab.id}
              value={tab.value}
            >
              {/* Circle Check */}
              <div
                className="size-2 mt-1.5 rounded-full bg-bg-border group-data-[state=active]:bg-solar 
               group-data-[state=active]:shadow-solar-sm"
              />

              <div className="flex flex-col gap-1 items-start">
                <span className="font-display font-semibold text-white-glow">
                  {tab.label}
                </span>
                <span className="text-xs font-mono text-muted">{tab.role}</span>
              </div>
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {/* Experience Cards */}
        {MY_EXPERIENCE.map((card) => (
          <Tabs.Content className="w-full md:min-w-[26rem]" value={card.value}>
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
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </motion.section>
  )
}
