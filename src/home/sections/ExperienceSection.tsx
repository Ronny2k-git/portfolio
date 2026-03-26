import { motion } from 'framer-motion'
import { SectionHeader } from '../components'
import { ExperienceCard, ExperienceSidebar } from '../subcomponents'

export function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="scroll-mt-[12rem] relative grid lg:grid-cols-2 w-full gap-6 text-solar"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 120 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col gap-6">
        <SectionHeader
          section="Career"
          number={4}
          title="My Experience"
          description="Oct 2024 – Now"
        />

        <ExperienceSidebar />
      </div>

      <ExperienceCard />
    </motion.section>
  )
}
