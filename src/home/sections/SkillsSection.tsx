import { motion } from 'framer-motion'
import { SectionCard, SectionHeader, SkillCard } from '../components'
import {
  SKILL_CARD_DATABASES_AND_INFRA,
  SKILL_CARD_LANGUAGES,
  SKILL_CARD_WEB3,
} from '../utils'

export function SkillsSection() {
  return (
    <section
      id="skill"
      className="relative flex flex-col w-full items-center gap-20 text-solar"
    >
      <div className="flex flex-col w-full max-lg:gap-6 gap-20">
        <SectionHeader
          className="max-lg:hidden"
          section="Skills"
          number={2}
          title="Technical Toolkit"
        />

        {/* Languages & Frameworks*/}
        <motion.div
          className="w-full z-40 max-md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid grid-cols-3 xl:grid-cols-4 gap-4"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 120 }}
          transition={{ duration: 1 }}
        >
          <SectionCard title="Languages & Frameworks" />

          {SKILL_CARD_LANGUAGES.map((card) => (
            <SkillCard key={card.lang} pct={card.pct} title={card.lang} />
          ))}
        </motion.div>
      </div>

      {/* Databases & Infra */}
      <motion.div
        className="w-full max-md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid grid-cols-3 xl:grid-cols-4 gap-4"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 120 }}
        transition={{ duration: 1 }}
      >
        <SectionCard title="Databases & Infra" />
        {SKILL_CARD_DATABASES_AND_INFRA.map((card) => (
          <SkillCard key={card.lang} title={card.lang} pct={card.pct} />
        ))}
      </motion.div>

      {/* WEB3 Libraries */}
      <motion.div
        className="w-full max-md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid grid-cols-3 xl:grid-cols-4 gap-4"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 120 }}
        transition={{ duration: 1 }}
      >
        <SectionCard title="WEB3 Libraries" />

        {SKILL_CARD_WEB3.map((card) => (
          <SkillCard key={card.lang} title={card.lang} pct={card.pct} />
        ))}
      </motion.div>
    </section>
  )
}
