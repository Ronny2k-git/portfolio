import { CardInfo } from '@/home/components'
import { HOME_CIRCLE_LOGO } from '@/home/utils'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-30 px-4 bg-black/90 overflow-x-hidden">
      <h1 className="md:hidden text-4xl text-gray-300 pb-10 text-center">
        View on Desktop for a better experience
      </h1>

      {/* Circles */}
      <section
        id="card-info"
        className="flex items-center justify-center w-[39rem] h-[39rem] md:w-[42rem] md:h-[42rem] border-2 border-dashed border-gray-700 rounded-full overflow-x-hidden"
      >
        <div className="flex items-center justify-center w-[33.5rem] h-[33.5rem] md:w-[36.5rem] md:h-[36.5rem] border-2 border-dashed border-gray-700 rounded-full">
          {/* Orbiting */}
          <div className="orbit absolute flex items-center justify-center ">
            {HOME_CIRCLE_LOGO.map((logo) => (
              <img
                src={logo.src}
                className={`${logo.class} rounded-full object-cover`}
              />
            ))}
          </div>

          {/* My Skills */}
          <CardInfo />
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-40 text-4xl font-bold text-blue-300">
        <h2 className="pb-20">My Skills</h2>
      </section>
    </div>
  )
}
