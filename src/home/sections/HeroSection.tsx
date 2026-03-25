import { CardInfo } from '../components'
import { HOME_CIRCLE_LOGO } from '../utils'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="
        relative flex w-full h-[44rem] justify-center items-center
        overflow-hidden
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[31rem] h-[31rem] rounded-full bg-[radial-gradient(circle,rgba(201,160,60,0.10),transparent_70%)]" />
      </div>

      {/* Outer orbit ring */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-[43rem] h-[43rem] 
          border border-bg-border rounded-full "
      >
        {/* Middle ring */}
        <div
          className="
            flex items-center justify-center w-[36rem] h-[36rem] border border-bg-border/90 rounded-full "
        >
          {/* Inner dashed rotating ring */}
          <div className=" absolute w-[30rem] h-[30rem] border border-dashed border-bg-border rounded-full " />

          {/* Orbiting logos */}
          <div className="z-50 will-change-transform orbit absolute flex items-center justify-center ">
            {HOME_CIRCLE_LOGO.map((logo) => (
              <img
                key={logo.src}
                alt={logo.alt}
                src={logo.src}
                className={`${logo.class} rounded-full object-cover shadow-glow-solar p-1`}
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
