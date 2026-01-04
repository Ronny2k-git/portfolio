import {
  AboutCard,
  CardInfo,
  ProjectCard,
  SectionCard,
  SkillCard,
} from '@/home/components'
import {
  ABOUT_CARDS,
  HOME_CIRCLE_LOGO,
  HOME_PROJECTS,
  SKILL_CARD_DATABASES_AND_INFRA,
  SKILL_CARD_LANGUAGES,
  SKILL_CARD_WEB3,
} from '@/home/utils'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-30 px-4 lg:px-24 bg-black/90 overflow-x-hidden">
      <h1 className="z-10 md:hidden mb-10 text-4xl text-gray-300 text-center">
        View on Desktop for a better experience
      </h1>

      <div className="flex flex-col gap-40">
        {/* Circles */}
        <div className="relative h-[43rem] py-5 flex w-full justify-center overflow-x-clip">
          <section
            id="card-info"
            className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-[39rem] h-[39rem] md:w-[43rem] md:h-[43rem] border-2 
           border-dashed border-gray-700/50 rounded-full"
          >
            <div className="flex items-center justify-center w-[33.5rem] h-[33.5rem] md:w-[36.5rem] md:h-[36.5rem] border-2 border-dashed border-gray-700 rounded-full">
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

              {/* My Skills */}
              <CardInfo />
            </div>
          </section>
        </div>

        {/* About me */}
        <section
          id="about"
          className="flex flex-col w-full items-center justify-center gap-20 text-blue-300"
        >
          <h2 className="text-4xl font-bold font-display">About Me</h2>

          <div className="grid w-full max-w-7xl max-md:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_CARDS.map((card, index) => (
              <AboutCard
                key={index}
                title={card.title}
                description={card.description}
                items={card.items}
              />
            ))}
          </div>
        </section>

        {/* Skill Cards Section */}

        <section
          id="skill"
          className="relative flex flex-col w-full items-center gap-20 text-blue-300"
        >
          <h2 className="text-4xl font-bold font-display">My Skills</h2>

          {/* Languages & Frameworks*/}
          <div className="w-full max-md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid grid-cols-3 xl:grid-cols-4 gap-4">
            <SectionCard title="Languages & Frameworks" />

            {SKILL_CARD_LANGUAGES.map((card) => (
              <SkillCard key={card.lang} pct={card.pct} title={card.lang} />
            ))}
          </div>

          {/* Databases & Infra */}
          <div className="w-full max-md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid grid-cols-3 xl:grid-cols-4 gap-4">
            <SectionCard title="Databases & Infra" />

            {SKILL_CARD_DATABASES_AND_INFRA.map((card) => (
              <SkillCard key={card.lang} title={card.lang} pct={card.pct} />
            ))}
          </div>

          {/* WEB3 Libraries */}
          <div className="w-full max-md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid grid-cols-3 xl:grid-cols-4 gap-4">
            <SectionCard title="WEB3 Libraries" />

            {SKILL_CARD_WEB3.map((card) => (
              <SkillCard key={card.lang} title={card.lang} pct={card.pct} />
            ))}
          </div>
        </section>

        {/* My projects */}
        <section
          id="project"
          className="flex w-full flex-col items-center gap-20 text-blue-300"
        >
          <h2 className="text-4xl font-bold font-display">My Projects</h2>

          <div className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {HOME_PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
