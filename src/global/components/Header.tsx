import { GithubIcon, TwitterIcon } from '../icons'
import { NAV_ROUTE_ID, scrollToContainer } from '../utils'

export default function Header() {
  return (
    <header className="flex items-center justify-between fixed backdrop-blur-xs z-50 w-full p-4 lg:px-14 2xl:px-40 border-b border-gray-700/30">
      {/* Nav Bar */}

      <nav className="flex gap-x-12 font-display items-center text-gray-400 cursor-pointer">
        {NAV_ROUTE_ID.map((route, index) => (
          <a
            key={`${route.id}_${index}`}
            href={route.path ? route.path : undefined}
            className={`${route.class} hover:text-gray-300`}
            onClick={() => {
              requestAnimationFrame(() => scrollToContainer(route.id!))
            }}
          >
            {route.label}
          </a>
        ))}
      </nav>

      {/* Socials */}
      <div className="flex items-center gap-4 text-gray-400 cursor-pointer">
        <a
          className="brightness-80 hover:brightness-120 "
          href="https://github.com/Ronny2k-git"
        >
          <GithubIcon className="hover:scale-3d" />
        </a>
        <a
          className="brightness-80 hover:brightness-120 "
          href="https://x.com/RonnyEdson27329"
        >
          <TwitterIcon />
        </a>
      </div>
    </header>
  )
}
