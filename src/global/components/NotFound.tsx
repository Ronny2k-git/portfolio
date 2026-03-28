export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black/20 px-4">
      <h1 className="text-[6rem] font-bold text-muted-hi mb-4 animate-pulse">
        404
      </h1>

      <p className="text-xl text-muted mb-8 text-center max-w-lg">
        Oops! Looks like you're lost. The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        aria-label="Return to homepage"
        className="bg-solar hover:bg-solar/90 transition-colors text-gray-950 px-6 py-3 rounded-lg font-medium"
      >
        Return to homepage
      </a>
    </div>
  )
}
