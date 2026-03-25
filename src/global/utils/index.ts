export const NAV_ROUTE_ID = [
  {
    id: 'about',
    label: 'About Me',
    ariaLabel: 'Go to About Me section',
    class: 'text-[13px] font-semibold max-lg:hidden',
  },
  {
    id: 'skill',
    label: 'Skills',
    ariaLabel: 'Go to Skills section',
    class: 'text-[13px] font-semibold max-lg:hidden',
  },
  {
    id: 'project',
    label: 'Projects',
    ariaLabel: 'Go to Projects section',
    class: 'text-[13px] font-semibold max-lg:hidden',
  },
  {
    id: 'experience',
    label: 'Experience',
    ariaLabel: 'Go to Experience section',
    class: 'text-[13px] font-semibold max-lg:hidden',
  },
]

export function scrollToContainer(id: string) {
  const element = document.getElementById(id)

  if (!element) {
    console.warn(`Id not found: "${id}"`)
    return
  }

  const headerHeight = 90
  const y = element.getBoundingClientRect().top + window.scrollY - headerHeight

  window.scrollTo({ top: y, behavior: 'smooth' })
}
