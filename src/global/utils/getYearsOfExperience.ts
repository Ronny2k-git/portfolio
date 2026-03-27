export function getYearsOfExperience(startDate: string) {
  const start = new Date(startDate)
  const now = new Date()
  const years = now.getFullYear() - start.getFullYear()

  const hasCompletedYear =
    now.getMonth() > start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate())

  return hasCompletedYear ? years : years - 1
}
