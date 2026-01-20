export const NAV_ROUTE_ID = [
  {
    id: 'card-info',
    label: 'Ronny2k',
    class: 'text-3xl text-solar hover:text-orange-400',
  },
  { id: 'about', label: 'About Me', class: 'text-lg max-lg:hidden' },
  { id: 'skill', label: 'Skills', class: 'text-lg max-lg:hidden' },
  { id: 'project', label: 'Projects', class: 'text-lg max-lg:hidden' },
  {
    id: 'experience',
    label: 'Experience',
    class: 'text-lg max-lg:hidden',
  },
  {
    label: 'Source Code',
    class: 'text-lg max-lg:hidden',
    path: 'https://github.com/Ronny2k-git/portfolio',
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
