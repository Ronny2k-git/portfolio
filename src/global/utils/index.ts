export const NAV_ROUTE_ID = [
  { id: 'card-info', label: 'Ronny2k', class: 'text-3xl' },
  { id: 'about', label: 'About Me', class: 'text-lg max-[850px]:hidden' },
  { id: 'skill', label: 'Skills', class: 'text-lg max-[850px]:hidden' },
  { id: 'project', label: 'Projects', class: 'text-lg max-[850px]:hidden' },
  {
    label: 'Source Code',
    class: 'text-lg max-[850px]:hidden',
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
