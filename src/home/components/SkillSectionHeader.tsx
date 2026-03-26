export function SkillSectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 justify-center w-full">
      <span className="text-[13px] uppercase text-solar font-semibold tracking-[0.12em]">
        {title}
      </span>
      <hr className="flex-1 border-none h-px bg-linear-to-r from-solar/20 via-solar/20 " />
    </div>
  )
}
