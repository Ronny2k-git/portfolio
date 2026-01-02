export const NAV_ROUTE_ID = [
  { id: 'card-info', label: 'Ronny2k', class: 'text-3xl' },
  { id: 'Skill', label: 'Skills', class: 'text-lg max-md:hidden' },
  { id: 'project', label: 'Projects', class: 'text-lg max-md:hidden' },
  {
    label: 'Source Code',
    class: 'text-lg max-md:hidden',
    path: 'https://github.com/Ronny2k-git/portfolio',
  },
]

export function scrollToContainer(id: string) {
  const element = document.getElementById(id)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    console.warn(`Id not found: "${id}"`)
  }
}
