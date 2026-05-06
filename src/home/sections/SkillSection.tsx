import { motion } from 'framer-motion'
import { SectionDivider, SectionHeader, SkillCard } from '../components'
import { SKILLS } from '../utils'

export function SkillSection() {
  return (
    <motion.section
      id="skill"
      className="scroll-mt-[12rem] relative flex flex-col w-full gap-20 "
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 120 }}
      transition={{ duration: 1 }}
    >
      <SectionHeader
        className="max-lg:hidden"
        section="Skills"
        number={2}
        title="Technical Toolkit"
      />

      {SKILLS.map((section, index) => (
        <div key={`${section.id}_${index}`} className="flex flex-col gap-6">
          {/* Section Title */}
          <SectionDivider title={section.title} textStyle="secondary" />

          <div className="w-full z-40 gap-4 grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))]">
            {section.items.map((skill, i) => (
              <SkillCard
                key={`${skill.lang}_${i}`}
                pct={skill.pct}
                title={skill.lang}
              />
            ))}
          </div>
        </div>
      ))}
    </motion.section>
  )
}
