import {
  AboutCard,
  CardInfo,
  ProjectCard,
  SectionCard,
  SectionHeader,
  SkillCard,
  Tag,
  TimelineSection,
} from '@/home/components'
import { ExperienceSidebar } from '@/home/subcomponents'
import { ExperienceCard } from '@/home/subcomponents/ExperienceCard'
import {
  ABOUT_CARDS,
  HOME_CIRCLE_LOGO,
  HOME_METAVAULT_PROJECT,
  HOME_PROJECT_TECHS,
  HOME_SECONDARY_PROJECTS,
  SKILL_CARD_DATABASES_AND_INFRA,
  SKILL_CARD_LANGUAGES,
  SKILL_CARD_WEB3,
} from '@/home/utils'
import { Card, Icon } from '@/ui/components'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/')({
  component: Home,
})

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-black/90 overflow-x-hidden">
      <div className="w-full max-w-[3440px] h-full py-30 px-4 lg:px-8 xl:px-40">
        <h1 className="z-10 lg:hidden mb-20 max-md:text-2xl text-4xl text-gray-400 text-center">
          View on Desktop for a better experience
        </h1>

        <div className="flex flex-col w-full gap-40 ">
          {/* First Section  */}
          <section
            className="relative rounded-4xl mb-10 flex w-full h-[44rem] justify-center items-center 
          overflow-x-clip"
          >
            <div
              id="card-info"
              className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-[43rem] h-[43rem] border-2 
           border-dashed border-gray-700/50 rounded-full"
            >
              <div className="flex items-center justify-center w-[36rem] h-[36rem] border-2 border-dashed border-gray-700 rounded-full">
                {/* Orbiting */}
                <div className="z-0 orbit absolute flex items-center justify-center ">
                  {HOME_CIRCLE_LOGO.map((logo) => (
                    <img
                      key={logo.src}
                      src={logo.src}
                      className={`${logo.class} rounded-full object-cover`}
                    />
                  ))}
                </div>

                {/* Main Card */}
                <CardInfo />
              </div>
            </div>
          </section>

          {/* About me Section*/}
          <motion.section
            id="about"
            className="flex flex-col w-full items-center justify-center gap-20 text-solar"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 120 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full max-lg:grid-cols-1 grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-6">
                <SectionHeader
                  className="max-lg:hidden"
                  title="About Me"
                  icon={
                    <Icon className="!text-5xl sm:!text-6xl">
                      account_circle
                    </Icon>
                  }
                  description={'A bit about me and my learning journey.'}
                />

                {/* My Timeline */}
                <Card className="w-full gap-5 items-center justify-center rounded-4xl p-4 lg:p-6">
                  <div className="flex items-center text-solar gap-2 text-2xl max-sm:text-xl lg:hidden text-center">
                    <Icon className="!text-4xl ">avg_time</Icon>
                    My learning journey
                  </div>

                  <TimelineSection />
                </Card>
              </div>

              {/* About me Cards */}
              <Card
                variant={'basic'}
                className="p-6 h-full items-center justify-center gap-4 rounded-4xl"
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

          {/* Skill Cards Section */}
          <section
            id="skill"
            className="relative flex flex-col w-full items-center gap-20 text-solar"
          >
            <div className="flex flex-col w-full items-center max-lg:gap-6 gap-20">
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

          {/* My projects Section*/}
          <motion.section
            id="project"
            className="flex w-full flex-col items-center gap-20 text-solar"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 120 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full max-lg:flex flex-col grid max-lg:grid-cols-1 max-desktop-lg:grid-cols-2 grid-cols-2 gap-6">
              <div className="flex flex-col items-center gap-6">
                <SectionHeader
                  className="max-lg:hidden"
                  title="My Projects"
                  icon={<Icon className=" !text-5xl sm:!text-6xl">work</Icon>}
                  description=" Projects from 2024 — Present."
                />

                {/* Description & Techs tag */}
                <Card className="w-full h-full rounded-4xl p-8">
                  <div className="flex flex-col max-sm:items-center h-full gap-6">
                    {/* Mobile title */}
                    <div className="hidden max-lg:flex flex-col items-center justify-center mb-2 text-gray-500">
                      <div className="flex items-center text-solar gap-2 text-3xl max-sm:text-2xl">
                        <Icon className="!text-5xl max-sm:!text-4xl">
                          deployed_code
                        </Icon>
                        My Projects
                      </div>
                      <span className="text-xs text-gray-400">
                        Projects from 2024 — Present.
                      </span>
                    </div>

                    <h3 className="text-gray-400">
                      <span className="text-blue-200">Personal</span> projects
                      created to explore{' '}
                      <span className="text-blue-200">new</span> technologies
                      and ideas, primarily for{' '}
                      <span className="text-blue-200">study</span> purposes.
                      With a focus on{' '}
                      <span className="text-blue-200">database</span>{' '}
                      interactions and blockchain{' '}
                      <span className="text-blue-200">smart contracts</span>.
                    </h3>

                    <p className="text-gray-400">
                      Languages, frameworks and platforms I used to build these
                      projects:
                    </p>
                    {/* Tags */}
                    <ul className="flex flex-wrap gap-2 text-black cursor-pointer">
                      {HOME_PROJECT_TECHS.map((tech, index) => {
                        return (
                          <Tag
                            key={index}
                            text={tech.label}
                            icon={
                              <img
                                className="size-4 rounded-full"
                                src={tech.icon}
                              />
                            }
                          />
                        )
                      })}
                    </ul>
                  </div>
                </Card>
              </div>

              {/* Main Project */}
              <Card
                variant={'basic'}
                className="grid max-desktop-lg:col-span-1 max-desktop-lg:grid-cols-1 grid-cols-2 gap-6 p-4 rounded-4xl"
              >
                {HOME_METAVAULT_PROJECT.map((project) => (
                  <ProjectCard
                    className={`${project.class}`}
                    key={project.title}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    github={project.github}
                    live={project.live}
                  />
                ))}
              </Card>

              {/* Secondary Projects */}
              <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-6 col-span-2">
                {HOME_SECONDARY_PROJECTS.map((project) => (
                  <Card
                    key={project.title}
                    variant={'basic'}
                    className="p-4 rounded-4xl"
                  >
                    <ProjectCard
                      className={`${project.class}`}
                      key={project.title}
                      image={project.image}
                      title={project.title}
                      description={project.description}
                      github={project.github}
                    />
                  </Card>
                ))}
              </div>
            </div>
          </motion.section>

          {/* My experience Section */}
          <motion.section
            id="experience"
            className="relative grid lg:grid-cols-2 w-full gap-6 text-solar"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 120 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col gap-6">
              <SectionHeader
                className="max-lg:hidden"
                title="My Experience"
                icon={<Icon className="!text-5xl sm:!text-6xl">timeline</Icon>}
                description="Oct 2024 - Nov 2025"
              />

              <ExperienceSidebar />
            </div>

            {/* {
            TO DO LATER:

            1 PROBABLY ADD SOMETHING BELOW MY EXPERIENCE SECTION
            2 UPDATE THE README FILE
          } */}

            <ExperienceCard />
          </motion.section>
        </div>
      </div>
    </main>
  )
}
