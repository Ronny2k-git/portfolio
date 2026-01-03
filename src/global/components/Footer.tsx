import { GithubIcon, TwitterIcon } from '../icons'

export default function Footer() {
  return (
    <footer className="w-full bg-black/90">
      {/* Footer content with borders */}
      <div
        className="
          flex
          items-center
          justify-center
          py-4
          border-y-2
          border-dashed
          border-gray-700/60
        "
      >
        <div className="flex flex-col items-center gap-6 text-lg font-bold text-gray-400">
          <p className="text-3xl">Ronny2k</p>
          <div className="flex gap-4 text-base font-normal cursor-pointer">
            {/* {ADD ICONS LATER, ACTUALLY I WILL CREATE A COMPONENT FOR EACH ICON} */}
            <span className="flex gap-2 hover:underline">
              <GithubIcon />
              Github
            </span>
            <span className="flex gap-2 hover:underline">
              <TwitterIcon />
              Twitter
            </span>
          </div>

          <span className="text-sm text-gray-400/90 font-normal">
            © Ronny Edson 2026 Inc. All rights reserved.
          </span>
        </div>
      </div>

      {/* Extra space below the bottom border */}
      <div className="pb-20" />
    </footer>
  )
}
