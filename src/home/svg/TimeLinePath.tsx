export function TimelinePath() {
  return (
    <svg
      viewBox="0 0 1000 400"
      className="absolute inset-0 w-full h-full"
      fill="none"
    >
      <path
        d="
          M 80 40
          V 320
          H 360
          V 40
          H 640
          V 320
          H 920
        "
        stroke="url(#timelineGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <defs>
        <linearGradient id="timelineGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
    </svg>
  )
}
