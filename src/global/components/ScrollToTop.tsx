import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 900)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      className="size-12 bottom-10 fixed flex justify-center items-center right-4 z-50 text-gray-400/90 border
     border-border-hi hover:border-solar/70 bg-card-basic rounded-2xl"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp height={30} width={30} className="cursor-pointer" />
    </button>
  )
}
