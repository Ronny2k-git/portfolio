import { socials } from './Header'

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Footer content and borders */}
      <div className="flex items-center justify-center py-4 border-y-2 border-dashed border-muted/30">
        <div className="flex flex-col items-center font-display gap-6">
          <p className="text-3xl text-solar font-serif">Ronny2k</p>

          <div className="flex gap-4 text-base text-muted-hi cursor-pointer">
            {socials.map((social) => (
              <a
                href={social.path}
                className="flex items-center gap-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.aria}
              >
                {social.icon}
                {social.label}
              </a>
            ))}
          </div>

          <span className="text-sm text-muted">
            © Ronny Edson 2026 Inc. All rights reserved.
          </span>
        </div>
      </div>

      {/* Extra space below the bottom border */}
      <div className="pb-20" />
    </footer>
  )
}
