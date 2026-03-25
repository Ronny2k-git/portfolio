import { MobileTimeline, TimeLineDesktop } from '../subcomponents'

export function TimelineSection() {
  return (
    <>
      <div className="hidden lg:block w-full">
        <TimeLineDesktop />
      </div>

      <div className="block lg:hidden w-full">
        <MobileTimeline />
      </div>
    </>
  )
}
