import { CardInfo } from '../components'
import { HOME_CIRCLE_LOGO } from '../utils'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative rounded-4xl flex w-full h-[44rem] justify-center items-center 
          overflow-x-clip"
    >
      <div
        className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-[43rem] h-[43rem] border-2 
           border-dashed border-gray-700/50 rounded-full"
      >
        <div className="flex items-center justify-center w-[36rem] h-[36rem] border-2 border-dashed border-gray-700 rounded-full">
          {/* Orbiting */}
          <div className="z-0 orbit absolute flex items-center justify-center ">
            {HOME_CIRCLE_LOGO.map((logo) => (
              <img
                key={logo.src}
                alt={logo.alt}
                src={logo.src}
                className={`${logo.class} rounded-full object-cover`}
              />
            ))}
          </div>

          {/* Main Card */}
          <CardInfo />
        </div>
      </div>
    </section>
  )
}
