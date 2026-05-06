import { motion } from 'framer-motion'
import { AboutCard, SectionHeader } from '../components'
import { TimeLine } from '../subcomponents'
import { ABOUT_CARDS } from '../utils'

export function AboutSection() {
  return (
    <motion.section
      id="about"
      className="scroll-mt-[12rem] flex flex-col w-full justify-center gap-10 text-solar"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 120 }}
      transition={{ duration: 1 }}
    >
      <SectionHeader
        className="max-lg:hidden"
        section="About"
        number={1}
        title="My Learning Journey"
        description={'A litle bit about me and my learning journey.'}
      />

      {/* Info Cards */}
      <div className=" w-full flex flex-col gap-6">
        {/* About me Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-2 sm:gap-4">
          {ABOUT_CARDS.map((card, index) => {
            return (
              <AboutCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                items={card.items}
                className={`
                  ${index === 0 ? 'col-span-2 md:col-span-1' : ''}
                 `}
              />
            )
          })}
        </div>

        {/* My Timeline */}
        <TimeLine />
      </div>
    </motion.section>
  )
}
