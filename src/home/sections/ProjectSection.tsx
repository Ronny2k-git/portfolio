import { Card, Tabs } from '@/ui/components'
import { motion } from 'framer-motion'
import { ProjectCard, SectionHeader } from '../components'
import { PROJECTS } from '../utils'

const projectTabs = PROJECTS.map((project, index) => ({
  id: index,
  value: project.id,
  label: project.title,
  year: project.date,
}))

export function ProjectSection() {
  return (
    <motion.section
      id="project"
      className="scroll-mt-[12rem] flex w-full flex-col gap-20 text-solar"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 120 }}
      transition={{ duration: 1 }}
    >
      <SectionHeader
        className="max-lg:hidden"
        section="Projects"
        number={3}
        title="Selected Projects"
        description="Personal projects built to explore new technologies — 2024 to present."
      />

      <div className="w-full flex flex-col ">
        {/* Description */}
        {/* <div className="flex flex-col gap-6">
          <Card className="w-full h-full gap-4 rounded-4xl p-4 sm:p-8">
            <span className="text-sm font-semibold font-display uppercase text-muted-hi/80">
              Overview ( 2024 — Present )
            </span>

            <p className="text-[15px] leading-relaxed text-muted-hi">
              <span className="text-solar">Personal</span> projects created to
              explore new technologies and ideas, primarily for{' '}
              <span className="text-solar">study</span> purposes. With a focus
              on <span className="text-solar">database</span> interactions and
              blockchain <span className="text-solar">smart contracts</span>.
            </p>
          </Card>
        </div> */}

        <Tabs
          defaultValue="metavault"
          direction="vertical"
          tabList={projectTabs}
          tabListStyle="w-full md:min-w-[18rem] lg:min-w-[27rem] md:max-w-[27rem]"
          tabContent={PROJECTS.map((project) => ({
            value: project.id,
            content: (
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
            ),
          }))}
          children={
            <Card className="w-full h-full md:max-w-[27rem] gap-4 rounded-4xl p-4 sm:p-8">
              <span className="text-sm font-semibold font-display uppercase text-muted-hi/80">
                Overview ( 2024 — Present )
              </span>

              <p className="text-[15px] leading-relaxed text-muted-hi">
                <span className="text-solar">Personal</span> projects created to
                explore new technologies and ideas, primarily for{' '}
                <span className="text-solar">study</span> purposes. With a focus
                on <span className="text-solar">database</span> interactions and
                blockchain <span className="text-solar">smart contracts</span>.
              </p>
            </Card>
          }
        />

        {/* {PROJECTS.map((project) => (
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
        ))} */}

        {/* Projects Stack */}
        {/* <Card
          className="flex items-center justify-center p-4 sm:p-8 rounded-4xl"
          variant={'basic'}
        >
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold font-display uppercase text-muted-hi/80">
              Technologies used in these projects:
            </span>

            
            <ul
              className="flex flex-wrap gap-2 max-sm:justify-center "
              translate="no"
            >
              {HOME_PROJECT_TECHS.map((tech, index) => {
                return (
                  <li key={index}>
                    <Tag
                      className="cursor-pointer"
                      text={tech.label}
                      icon={
                        <img
                          className="size-4 rounded-full "
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
        </Card> */}

        {/* Projects */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-2">
          {PROJECTS.map((project) => (
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
        </div> */}
      </div>
    </motion.section>
  )
}
