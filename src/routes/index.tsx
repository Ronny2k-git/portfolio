import { scrollToContainer } from '@/global/utils'
import {
  ProjectCard,
  SectionCard,
  SectionHeader,
  SkillCard,
  Tag,
} from '@/home/components'
import { AboutSection, HeroSection } from '@/home/sections'
import { ExperienceSidebar } from '@/home/subcomponents'
import { ExperienceCard } from '@/home/subcomponents/ExperienceCard'
import {
  HOME_METAVAULT_PROJECT,
  HOME_PROJECT_TECHS,
  HOME_SECONDARY_PROJECTS,
  MY_PROJECTS_TIMELINE,
  SKILL_CARD_DATABASES_AND_INFRA,
  SKILL_CARD_LANGUAGES,
  SKILL_CARD_WEB3,
} from '@/home/utils'
import { Card } from '@/ui/components'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Code } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

export default function Home() {
  // TO DO TOMORROW MORNING:

  // 1 SEPARATE THE CODE BY SECTION COMPONENTS
  // 2 UPDATE THE WHOLE WEBSITE DESIGN
  // 3 UPDATE MYEXPERIENCE SECTION AND ADD TABS
  // 4
  // 5

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full max-w-[1800px] h-full py-30 px-4 lg:px-8 xl:px-20">
        <h1 className="z-10 lg:hidden mb-20 max-md:text-2xl text-4xl text-gray-400 text-center">
          View on Desktop for a better experience
        </h1>

        <div className="flex flex-col w-full gap-40">
          {/* First Section  */}
          <HeroSection />

          {/* About Section*/}
          <AboutSection />

          {/* Skill Cards Section */}
          <section
            id="skill"
            className="scroll-mt-[5rem] relative flex flex-col w-full items-center gap-20 text-solar"
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

          {/* My projects Section*/}
          <motion.section
            id="project"
            className="scroll-mt-[12rem] flex w-full flex-col items-center gap-20 text-solar"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 120 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full max-lg:flex flex-col grid max-lg:grid-cols-1 max-desktop-lg:grid-cols-2 grid-cols-2 gap-6">
              <div className="flex flex-col items-center gap-6">
                <SectionHeader
                  className="max-lg:hidden"
                  section="Projects"
                  number={3}
                  title="Selected Projects"
                  description="Personal projects built to explore new technologies — 2024 to present."
                />

                {/* Description & Techs tag */}
                <Card className="w-full h-full rounded-4xl p-4 sm:p-8">
                  <div className="flex flex-col h-full gap-6">
                    {/* Mobile title */}
                    <div className="hidden max-lg:flex flex-col items-center justify-center mb-2 gap-2 text-gray-500">
                      <div className="flex items-center text-solar gap-2 text-3xl max-sm:text-2xl">
                        <Code className="h-8 w-8 sm:h-10 sm:w-10" />
                        My Projects
                      </div>
                      <span className="text-xs text-gray-400">
                        Projects from 2024 — Present.
                      </span>
                    </div>

                    <p className="text-gray-400">
                      <span className="text-blue-200">Personal</span> projects
                      created to explore{' '}
                      <span className="text-blue-200">new</span> technologies
                      and ideas, primarily for{' '}
                      <span className="text-blue-200">study</span> purposes.
                      With a focus on{' '}
                      <span className="text-blue-200">database</span>{' '}
                      interactions and blockchain{' '}
                      <span className="text-blue-200">smart contracts</span>.
                    </p>

                    <div className="text-gray-400">
                      <span className="text-blue-200">Languages</span>,{' '}
                      <span className="text-blue-200">frameworks</span> and{' '}
                      <span className="text-blue-200">tools</span> I used to
                      build these projects:
                    </div>

                    {/* Tags */}
                    <ul
                      className="flex flex-wrap gap-2 max-sm:justify-center text-black cursor-pointer"
                      translate="no"
                    >
                      {HOME_PROJECT_TECHS.map((tech, index) => {
                        return (
                          <li key={index}>
                            <Tag
                              text={tech.label}
                              icon={
                                <img
                                  className="size-4 rounded-full"
                                  src={tech.icon}
                                  alt={tech.alt}
                                />
                              }
                            />
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </Card>
              </div>

              {/* Main Project */}
              <div className="flex flex-col items-center gap-6">
                {/* Projects Time Line */}
                <Card
                  className="hidden lg:flex items-center gap-1 justify-center min-h-28 px-6 py-4 rounded-4xl"
                  variant={'secondary'}
                >
                  <div className="flex gap-4">
                    {MY_PROJECTS_TIMELINE.map((project, index) => (
                      <div key={project.id} className="flex items-center gap-2">
                        <button
                          className="flex flex-col items-center gap-2"
                          onClick={() => scrollToContainer(project.id)}
                        >
                          <img
                            className="w-26 h-12 border border-gray-600 rounded-xl object-cover hover:scale-105 cursor-pointer"
                            src={project.img}
                            alt={project.alt}
                          />
                          <span className="text-xs text-gray-400">
                            {project.date}
                          </span>
                        </button>

                        {/* Line between the projects*/}
                        {index < MY_PROJECTS_TIMELINE.length - 1 && (
                          <div className="w-10 mx-2 -mt-4 h-px bg-gray-400"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Description & Techs tag */}
                <Card
                  variant={'basic'}
                  className="h-full grid max-desktop-lg:col-span-1 max-desktop-lg:grid-cols-1 grid-cols-2 gap-6 p-4 rounded-4xl"
                >
                  {HOME_METAVAULT_PROJECT.map((project) => (
                    <ProjectCard
                      id={project.id}
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
              </div>

              {/* Secondary Projects */}
              <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-6 col-span-2">
                {HOME_SECONDARY_PROJECTS.map((project) => (
                  <Card
                    key={project.title}
                    variant={'basic'}
                    className="p-4 rounded-4xl"
                  >
                    <ProjectCard
                      id={project.id}
                      className={`${project.class}`}
                      key={project.title}
                      image={project.image}
                      title={project.title}
                      description={project.description}
                      github={project.github}
                      live={project.live}
                    />
                  </Card>
                ))}
              </div>
            </div>
          </motion.section>

          {/* My experience Section */}
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
        </div>
      </div>
    </main>
  )
}
