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
