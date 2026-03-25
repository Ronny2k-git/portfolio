import { GithubIcon, LinkedInIcon, TwitterIcon } from '../icons'
import { NAV_ROUTE_ID } from '../utils'

const socials = [
  {
    path: 'https://github.com/Ronny2k-git',
    aria: 'View my github profile (new tab)',
    icon: <GithubIcon className="size-4 " />,
  },
  {
    path: 'https://x.com/RonnyEdson27329',
    aria: 'View my twitter profile (new tab)',
    icon: <TwitterIcon className="size-4 " />,
  },
  {
    path: 'https://www.linkedin.com/in/ronny-edson-duarte-bb092b25a/',
    aria: 'View my linkedin profile (new tab)',
    icon: <LinkedInIcon className="size-4 " />,
  },
]

export default function Header() {
  return (
    <header className="flex h-18 items-center justify-between fixed backdrop-blur-md z-50 w-full px-6 lg:px-16 border-b border-bg-border">
      <a href="/#hero" aria-label="Go to hero section">
        <span className="text-2xl text-solar font-serif ">Ronny2k</span>
      </a>

      {/* Nav Bar */}
      <nav className="flex gap-x-10 uppercase tracking-[0.12em] items-center text-muted-hi cursor-pointer">
        {NAV_ROUTE_ID.map((route, index) => (
          <div
            key={`${route.id}_${index}`}
            className="group flex flex-col relative"
          >
            <a
              href={`/#${route.id}`}
              className={`${route.class} hover:text-white/90`}
              aria-label={route.ariaLabel}
            >
              {route.label}
            </a>

            <span
              className="w-full absolute bottom-0 left-0 h-[0.5px] origin-center scale-x-0 bg-solar group-hover:scale-x-100 
              animation duration-300"
            />
          </div>
        ))}
      </nav>

      {/* Socials */}
      <div className="flex items-center gap-4 text-gray-400 cursor-pointer">
        {socials.map((s) => (
          <a
            className=" border border-bg-border hover:text-solar hover:border-solar hover:bg-solar-glow 
            p-2 rounded-full"
            aria-label={s.aria}
            href={s.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </header>
  )
}
