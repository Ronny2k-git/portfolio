export type SkillCardProps = {
  title?: string
}

export function SkillCard({ title }: SkillCardProps) {
  return (
    <div className="flex flex-col p-4 items-start pb-20 gap-4 rounded-lg bg-black/30">
      <span className="text-lg font-bol text-gray-400">{title}</span>
      {/* Knowledge bar */}
      <div className="w-full max-w-[15rem] h-5 bg-blue-400" />
    </div>
    // UPDATE THIS BAR LATER TO USE THE OBJECT PERCENTAGE
  )
}
