import {
  AboutCard,
  CardInfo,
  ProjectCard,
  SectionCard,
  SectionHeader,
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
  component: Home,
})

function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-30 px-4 lg:px-24 bg-black/90 overflow-x-hidden">
      <h1 className="z-10 md:hidden mb-10 text-4xl text-gray-400 text-center">
        View on Desktop for a better experience
      </h1>

      <div className="flex flex-col gap-40 ">
        {/* Circles */}
        <div
          className="relative rounded-4xl flex w-full h-[44rem] py-5 justify-center items-center 
          overflow-x-clip"
        >
          <section
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

              {/* My Skills */}
              <CardInfo />
            </div>
          </section>
        </div>

        {/* About me Section*/}
        <section
          id="about"
          className="flex flex-col w-full items-center justify-center gap-20 text-solar"
        >
          <SectionHeader title="About Me" />

          <div className="border border-orange-500/10 p-8 bg-black/40 rounded-2xl grid w-full max-w-7xl max-md:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-6">
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
          className="relative flex flex-col w-full items-center gap-20 text-solar"
        >
          <SectionHeader title="My Skills" />

          {/* Languages & Frameworks*/}
          <div className="w-full z-40 max-md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid grid-cols-3 xl:grid-cols-4 gap-4">
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

        {/* My projects Section*/}
        <section
          id="project"
          className="flex w-full flex-col items-center gap-20 text-solar"
        >
          <SectionHeader title="My Projects" />

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
