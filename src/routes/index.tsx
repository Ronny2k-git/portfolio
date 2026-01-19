import {
  AboutCard,
  CardInfo,
  ProjectCard,
  SectionCard,
  SectionHeader,
  SkillCard,
  Tag,
} from '@/home/components'
import {
  ABOUT_CARDS,
  HOME_CIRCLE_LOGO,
  HOME_PROJECTS,
  HOME_PROJECT_TECHS,
  SKILL_CARD_DATABASES_AND_INFRA,
  SKILL_CARD_LANGUAGES,
  SKILL_CARD_WEB3,
} from '@/home/utils'
import { Card, Icon } from '@/ui/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center py-30 px-4 lg:px-24 bg-black/90 overflow-x-hidden">
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

              {/* Main Card */}
              <CardInfo />
            </div>
          </section>
        </div>

        {/* About me Section*/}
        <section
          id="about"
          className="flex flex-col w-full items-center justify-center gap-20 text-solar"
        >
          <Card
            className="p-6 rounded-4xl border border-gray-800 max-w-7xl bg-linear-to-bl justify-center items-center gap-6 shadow-none "
            variant={'gradient'}
          >
            <SectionHeader
              title="About Me"
              icon={
                <Icon className="!text-5xl sm:!text-6xl">account_circle</Icon>
              }
              description="A brief description of my experience and what I enjoy building."
            />

            <div className="flex flex-col gap-8">
              {ABOUT_CARDS.map((card, index) => {
                const isLeft = index % 2 === 0

                return (
                  <div
                    className={`flex w-full ${
                      isLeft ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div className="w-full md:max-w-[60%]">
                      <AboutCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        items={card.items}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </Card>
        </section>

        {/* Skill Cards Section */}
        <section
          id="skill"
          className="relative flex flex-col w-full items-center gap-20 text-solar"
        >
          <SectionHeader
            title="My Skills"
            icon={<Icon className="!text-5xl sm:!text-6xl">psychology</Icon>}
            description="Languages, frameworks and platforms I work with or have worked with in the past"
          />

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
          <div className="flex flex-col items-center justify-center gap-6 ">
            <div className="w-full grid max-lg:grid-cols-1 max-[1300px]:grid-cols-2 grid-cols-3 gap-6">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-center p-4 h-32 gap-8 bg-gray-800 rounded-4xl w-full">
                  <SectionHeader
                    className="!text-xl"
                    title="My Projects"
                    icon={<Icon className="!text-5xl sm:!text-6xl">work</Icon>}
                  />
                </div>

                {/* Description & Techs tag */}
                <Card className="h-full rounded-4xl p-6">
                  <div className="flex flex-col h-full gap-6">
                    MY DESCRIPTION WILL BE HERE
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

              {/* Projects */}
              <Card
                variant={'basic'}
                className="grid max-[1300px]:col-span-1 max-[1300px]:grid-cols-1 col-span-2 grid-cols-2 gap-6 p-6 rounded-4xl"
              >
                {HOME_PROJECTS.map((project) => (
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
            </div>
          </div>
        </section>

        {/* My experience Section */}
        <section className="flex w-full items-center justify-center gap-20 text-solar">
          <SectionHeader
            title="My Experience"
            icon={<Icon className="!text-5xl sm:!text-6xl">timeline</Icon>}
            description=""
          />

          {/* {
          1 UPDATE THE ABOUT ME SECTION

          2 CREATED A CARD AROUND THE CONTENT WITH A TITLE AND AN ICON(FJORD FOUDNRY) 
          
          PROBABLY THIS SECTION WILL BE A LARGE CARD WITH A FJORD'S BANNER AND A DESCRIPTION
          ABOUT WHAT I DID IN THE COMPANY.
          } */}
        </section>
      </div>
    </main>
  )
}
