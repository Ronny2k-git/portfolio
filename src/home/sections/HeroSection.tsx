import { HeroCardInfo } from '../components'
import { HOME_CIRCLE_LOGO } from '../utils'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="scroll-mt-[5rem] relative flex w-full h-[44rem] justify-center items-center "
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none ">
        <div
          className="w-[31rem] h-[31rem] rounded-full"
          style={{ background: 'var(--bg-radial-orange)' }}
        />
      </div>

      {/* Outer orbit ring */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-[41rem] h-[41rem] 
          border border-border-hi/50 rounded-full "
      >
        {/* Middle ring */}
        <div
          className="
            flex items-center justify-center w-[34rem] h-[34rem] border border-border-hi/40 rounded-full "
        >
          {/* Inner dashed rotating ring */}
          <div className=" absolute w-[28rem] h-[28rem] border border-dashed border-border-hi/60 rounded-full " />

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
          <HeroCardInfo />
        </div>
      </div>
    </section>
  )
}
