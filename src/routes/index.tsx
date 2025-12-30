import { CardInfo } from '@/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-30 px-4 bg-black/90 overflow-x-hidden">
      {/* Circles */}
      <div className="flex items-center justify-center w-[42rem] h-[42rem] md:w-[46rem] md:h-[46rem] border-2 border-dashed border-gray-700 rounded-full">
        <div className="flex items-center justify-center w-[36rem] h-[36rem] md:w-[40rem] md:h-[40rem] border-2 border-dashed border-gray-700 rounded-full">
          <CardInfo />
        </div>
      </div>
    </div>
  )
}
