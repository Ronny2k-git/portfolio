import {
  AboutSection,
  ExperienceSection,
  HeroSection,
  ProjectSection,
  SkillSection,
} from '@/home/sections'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

export default function Home() {
  // TO DO TOMORROW MORNING:

  // 1 SEPARATE THE CODE BY SECTION COMPONENTS
  // 2 UPDATE THE WHOLE WEBSITE DESIGN
  // 3 UPDATE MYEXPERIENCE SECTION AND ADD TABS
  // 4 START UPDATING SKILLS SECTION TOMORROW AFTER LUNCH
  // 5

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full max-w-7xl h-full py-30 px-4 lg:px-8 xl:px-20">
        <h1 className="z-10 lg:hidden mb-20 max-md:text-2xl text-4xl text-muted-hi text-center">
          View on Desktop for a better experience
        </h1>

        <div className="flex flex-col w-full gap-40">
          {/* Hero Section  */}
          <HeroSection />

          {/* About Section*/}
          <AboutSection />

          {/* Skill Cards Section */}
          <SkillSection />

          {/* My projects Section*/}
          <ProjectSection />

          {/* My experience Section */}
          <ExperienceSection />
        </div>
      </div>
    </main>
  )
}
