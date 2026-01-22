import { motion } from 'framer-motion'
import { TIMELINE } from '../utils'

export function TimeLineDesktop() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Vertical bar */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="absolute h-full w-[2.5px] bg-gradient-to-b from-blue-400 via-gray-400 to-blue-400"
      />

      <div className="flex flex-col gap-4">
        {TIMELINE.map((item, index) => {
          const isLeft = index % 2 === 0

          return (
            <div key={item.title} className="relative flex items-center w-full">
              {/* Skills */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10 hover:scale-110">
                <div className="size-12 rounded-full bg-black/70 flex items-center justify-center shadow-[0_0_20px_rgba(96,165,250,0.35)]">
                  <img
                    className=" text-blue-300 rounded-full size-11"
                    src={item.img}
                  ></img>
                </div>
              </div>

              {/* Horizontal line */}
              <div
                className={`absolute top-1/2 h-[2px] bg-white/5
                  ${isLeft ? 'right-1/2 w-[50%]' : 'left-1/2 w-[50%]'}`}
              />

              {/* Content */}
              <div
                className={`w-[53%]
                  ${isLeft ? 'text-right pr-16' : 'text-left pl-16 ml-auto'}`}
              >
                <div
                  className={`flex items-center gap-2 ${isLeft ? 'justify-end' : ''}`}
                >
                  <span>{item.code}</span>

                  <h4 className="text-base font-semibold text-solar">
                    {item.title}
                  </h4>
                </div>
                <p className="mt-1 text-xs text-gray-400 max-w-xs ml-auto">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
