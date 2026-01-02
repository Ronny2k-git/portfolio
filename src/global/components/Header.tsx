import { GithubIcon, TwitterIcon } from '../icons'
import { scrollToContainer } from '../utils'

const NAV_ROUTE_ID = [
  { id: 'card-info', label: 'Ronny2k', font: 'text-3xl' },
  { id: 'Skill', label: 'Skills', font: 'text-lg' },
  { id: 'project', label: 'Projects', font: 'text-lg' },
  { id: 'test2', label: 'Test2', font: 'text-lg' },
]

export default function Header() {
  return (
    <header className="fixed backdrop-blur-xs top-0 left-0 z-50 w-full py-4 px-16 flex items-center justify-between border-b border-gray-700/30">
      {/* Nav Bar */}
      <nav className="flex gap-x-12 items-center font-bold text-gray-400 cursor-pointer">
        {NAV_ROUTE_ID.map((route) => (
          <div
            key={route.id}
            className={`${route.font}`}
            onClick={() => {
              requestAnimationFrame(() => scrollToContainer(route.id))
            }}
          >
            {route.label}
          </div>
        ))}
      </nav>

      {/* Socials */}
      <div className="flex items-center gap-4 text-gray-400 cursor-pointer">
        <span className="flex gap-2 hover:underline">
          <GithubIcon />
          Github
        </span>
        <span className="flex gap-2 hover:underline">
          <TwitterIcon />
          Twitter
        </span>
      </div>
    </header>
  )
}
