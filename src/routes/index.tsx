import { CardInfo, SkillCard } from '@/home/components'
import {
  HOME_CIRCLE_LOGO,
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
      <h1 className="z-10 md:hidden text-4xl text-gray-300 pb-10 text-center">
        View on Desktop for a better experience
      </h1>

      {/* Circles */}
      <section
        id="card-info"
        className="flex items-center justify-center w-[39rem] h-[39rem] md:w-[42rem] md:h-[42rem] border-2 border-dashed border-gray-700 rounded-full overflow-x-hidden"
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

      {/* Skill Cards Section */}
      <section
        id="skill"
        className="flex flex-col w-full items-center py-40 gap-20 text-blue-300"
      >
        <h2 className="text-4xl font-bold">My Skills</h2>

        {/* Languages & Frameworks*/}
        <div className="w-full flex flex-col text-blue-300/90">
          <h3 className="pb-10 pl-2 text-2xl font-bold">
            Languages & Frameworks
          </h3>

          <div className="w-full max-md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid grid-cols-3 xl:grid-cols-4 gap-4">
            {SKILL_CARD_LANGUAGES.map((card, index) => (
              <SkillCard key={card.lang} pct={card.pct} title={card.lang} />
            ))}
          </div>
        </div>

        {/* Databases & Infra*/}
        <div className="w-full flex flex-col text-blue-300/90">
          <h3 className="pb-10 pl-2 text-2xl font-bold">Databases & Infra</h3>

          <div className="w-full max-md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid grid-cols-3 xl:grid-cols-4 gap-4">
            {SKILL_CARD_DATABASES_AND_INFRA.map((card, index) => (
              <SkillCard key={card.lang} title={card.lang} pct={card.pct} />
            ))}
          </div>
        </div>

        {/* WEB3 Libraries*/}
        <div className="w-full flex flex-col text-blue-300/90">
          <h3 className="pb-10 pl-2 text-2xl font-bold">WEB3 Libraries</h3>

          <div className="w-full max-md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid grid-cols-3 xl:grid-cols-4 gap-4">
            {SKILL_CARD_WEB3.map((card, index) => (
              <SkillCard key={card.lang} title={card.lang} pct={card.pct} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
