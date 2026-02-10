import { Icon } from '@/ui/components'
import { useEffect, useState } from 'react'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  {
    ;/ *Only show the button when the scroll */
  }
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
     border-gray-700/60 hover:bg-black/20 rounded-2xl"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Icon className="!text-4xl cursor-pointer">arrow_upward</Icon>
    </button>
  )
}
