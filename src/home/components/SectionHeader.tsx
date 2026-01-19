type SectionHeaderProps = {
  title: string
  icon?: React.ReactNode
}

export function SectionHeader({ title, icon }: SectionHeaderProps) {
  return (
    <header
      className="
          flex items-center gap-4
          
        "
    >
      {icon && <span>{icon}</span>}

      <h2 className="text-4xl font-bold font-display text-solar">{title}</h2>
    </header>
  )
}
