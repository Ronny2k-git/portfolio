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

      <div className="flex flex-col w-full gap-40 ">
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
          <div className="w-full max-w-7xl grid max-lg:grid-cols-1 grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center justify-center p-4 h-32 bg-gray-800 rounded-4xl">
                <SectionHeader
                  title="About Me"
                  description=""
                  icon={
                    <Icon className="!text-5xl sm:!text-6xl">
                      account_circle
                    </Icon>
                  }
                />
              </div>

              {/* About me Cards */}
              <Card className="w-full h-full rounded-4xl p-6">
                <h3 className="text-gray-400">
                  A brief description of my experience and what I enjoy
                  building.
                </h3>
              </Card>
            </div>

            {/* Projects */}
            <Card variant={'basic'} className="p-6 gap-4 rounded-4xl">
              {ABOUT_CARDS.map((card, index) => {
                return (
                  <AboutCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    items={card.items}
                  />
                )
              })}
            </Card>
          </div>
        </section>

        {/* Skill Cards Section */}
        <section
          id="skill"
          className="relative flex flex-col w-full items-center gap-20 text-solar"
        >
          <div className="flex flex-col items-center justify-center p-4 min-w-[24rem] h-28 bg-gray-800 rounded-4xl">
            <SectionHeader
              title="My Skills"
              description="A brief description of my experience and what I enjoy building."
              icon={<Icon className="!text-5xl sm:!text-6xl">psychology</Icon>}
            />
            {/* <span className="text-gray-400">
                  Projects from 2024 — Present
                </span> */}
          </div>

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
          <div className="w-full grid max-lg:grid-cols-1 max-desktop-lg:grid-cols-2 grid-cols-3 gap-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center justify-center p-4 h-32 bg-gray-800 rounded-4xl">
                <SectionHeader
                  title="My Projects"
                  icon={<Icon className="!text-5xl sm:!text-6xl">work</Icon>}
                />
                <span className="text-gray-400">
                  Projects from 2024 — Present
                </span>
              </div>

              {/* Description & Techs tag */}
              <Card className="w-full max-desktop-lg:h-auto h-full  rounded-4xl p-6">
                <div className="flex flex-col max-sm:items-center h-full gap-6">
                  <h3>MY DESCRIPTION WILL BE HERE</h3>

                  <p className="text-gray-400">
                    Languages, frameworks and platforms I used to build these
                    projects:
                  </p>
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
              className="grid max-desktop-lg:col-span-1 max-desktop-lg:grid-cols-1 col-span-2 grid-cols-2 gap-6 p-6 rounded-4xl"
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
