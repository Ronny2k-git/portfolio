import { Card } from '@/ui/components'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { AboutCard, SectionHeader, TimelineSection } from '../components'
import { ABOUT_CARDS } from '../utils'

export function AboutSection() {
  return (
    <motion.section
      id="about"
      className="scroll-mt-[12rem] flex flex-col w-full items-center justify-center gap-20 text-solar"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 120 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-lg:grid-cols-1 grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-6 ">
          <SectionHeader
            className="max-lg:hidden"
            section="About"
            number={1}
            title="My Learning Journey"
            description={'A litle bit about me and my learning journey.'}
          />

          {/* My Timeline */}
          <Card className="w-full h-full gap-5 items-center rounded-4xl p-4 lg:p-6">
            <div className="flex items-center text-solar gap-2 text-2xl max-sm:text-xl lg:mb-10 text-center">
              <Clock className="h-7 w-7 sm:h-8 sm:w-8" />
              My learning journey
            </div>

            <TimelineSection />
          </Card>
        </div>

        {/* About me Cards */}
        <Card
          variant={'basic'}
          className="p-4 sm:p-6 h-full items-center justify-center gap-4 rounded-4xl"
        >
          {ABOUT_CARDS.map((card, index) => {
            return (
              <AboutCard
                className="min-h-[13rem]"
                key={index}
                title={card.title}
                description={card.description}
                items={card.items}
              />
            )
          })}
        </Card>
      </div>
    </motion.section>
  )
}
