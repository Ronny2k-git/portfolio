import { GithubIcon, TwitterIcon } from '../icons'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-4 px-16 flex items-center justify-between border-b border-gray-700/30">
      {/* Nav Bar */}
      <nav className="flex items-center gap-x-12 text-lg font-bold text-gray-400 ">
        <h1 className="text-3xl ">Ronny2k</h1>
        <a>Test1</a>
        <a>Test2</a>
        <a>Test3</a>
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
