import { Tabs } from '@/ui/components'
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
      className="scroll-mt-[12rem] flex w-full flex-col gap-10 text-solar"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 120 }}
      transition={{ duration: 1 }}
    >
      <SectionHeader
        className="max-lg:hidden"
        section="Projects"
        number={3}
        title="Selected Projects"
        description="Personal projects created to explore new technologies and ideas, primarily for study purposes, focusing on database and blockchain interactions."
      />

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
              banner={project.banner}
              logo={project.logo}
              title={project.title}
              date={project.date}
              description={project.description}
              github={project.github}
              live={project.live}
              tech={project.techs}
            />
          ),
        }))}
      />
    </motion.section>
  )
}
