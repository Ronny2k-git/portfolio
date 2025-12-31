import { CardInfo } from '@/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-30 px-4 bg-black/90 overflow-x-hidden">
      {/* Circles */}
      <div className="flex items-center justify-center w-[39rem] h-[39rem] md:w-[42rem] md:h-[42rem] border-2 border-dashed border-gray-700 rounded-full overflow-x-hidden">
        <div className="flex items-center justify-center w-[33.5rem] h-[33.5rem] md:w-[36.5rem] md:h-[36.5rem] border-2 border-dashed border-gray-700 rounded-full">
          {/* Orbiting */}
          <div className="orbit absolute flex items-center justify-center ">
            <div className="planet-orbit">
              <img
                src="/profile.png"
                className="planet size-36 object-cover bg-blue-400 rounded-full "
              />
            </div>
          </div>

          {/* My Skills */}
          <CardInfo />
        </div>
      </div>
    </div>
  )
}
