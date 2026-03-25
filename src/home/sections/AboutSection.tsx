import { Card } from '@/ui/components'
import { motion } from 'framer-motion'
import { AboutCard, SectionHeader, TimelineSection } from '../components'
import { ABOUT_CARDS } from '../utils'

export function AboutSection() {
  return (
    <motion.section
      id="about"
      className="scroll-mt-[12rem] flex flex-col w-full justify-center gap-20 text-solar"
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
      <div className="w-full max-lg:grid-cols-1 grid grid-cols-2 gap-6">
        {/* My Timeline */}
        <Card className="w-full h-full gap-5 items-center justify-center rounded-4xl p-4 lg:p-6">
          <TimelineSection />
        </Card>

        {/* About me Cards */}
        <div className="grid gap-4">
          {ABOUT_CARDS.map((card, index) => {
            return (
              <AboutCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                items={card.items}
              />
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
