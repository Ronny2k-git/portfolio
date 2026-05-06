import { Tabs } from '@/ui/components'
import { motion } from 'framer-motion'
import { SectionHeader } from '../components'
import { ExperienceCard } from '../subcomponents'
import { MY_EXPERIENCE } from '../subcomponents/utils'

const experienceTabList = MY_EXPERIENCE.map((exp, index) => ({
  id: index,
  value: exp.value,
  label: exp.company,
  role: exp.role,
}))

export function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="scroll-mt-[12rem] flex flex-col w-full gap-10 text-solar"
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

      <Tabs
        defaultValue="freelance"
        direction="vertical"
        tabList={experienceTabList}
        tabListStyle="w-full md:min-w-[18rem] lg:min-w-[27rem] md:max-w-[27rem]"
        tabContent={MY_EXPERIENCE.map((card) => ({
          value: card.value,
          content: (
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
          ),
        }))}
      />
    </motion.section>
  )
}
