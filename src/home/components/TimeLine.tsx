const TIMELINE = [
  {
    title: 'HTML / CSS',
    description: 'Semantic, layouts, responsibility, design systems etc',
    img: '/logos/html-css-logo.png',
  },
  {
    title: 'JS / TS',
    description: 'Logic, state management, scalable codebases etc',
    img: '/logos/js-ts-logo.png',
  },
  {
    title: 'React / Next',
    description: 'Reusable components, states, UI, and SSR',
    img: '/logos/react-logo.png',
  },
  {
    title: 'JS Frameworks',
    description: 'Using frameworks such as: vite, tanstack, solid etc',
    img: '/logos/framework-logo.png',
  },
  {
    title: 'Database',
    description: 'Data modeling and backend integrations',
    img: '/logos/database.png',
  },
  {
    title: 'Web3',
    description: 'Smart contracts and blockchain interactions',
    img: '/logos/web3-logo.png',
  },
]

export function Timeline() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="absolute h-full bg-gray-700 w-[2px] " />

      <div className="flex flex-col gap-4">
        {TIMELINE.map((item, index) => {
          const isLeft = index % 2 === 0

          return (
            <div key={item.title} className="relative flex items-center w-full">
              {/* Skills */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10 hover:scale-110">
                <div className="size-12 rounded-full bg-black/70 flex items-center justify-center shadow-[0_0_20px_rgba(96,165,250,0.35)]">
                  <img className=" text-blue-300 " src={item.img}></img>
                </div>
              </div>

              {/* Horizontal line */}
              <div
                className={`absolute top-1/2 h-[2px] bg-white/5
                  ${isLeft ? 'right-1/2 w-[50%]' : 'left-1/2 w-[50%]'}`}
              />

              {/* Content */}
              <div
                className={`w-[53%]
                  ${isLeft ? 'text-right pr-16' : 'text-left pl-16 ml-auto'}`}
              >
                <h4 className="text-base font-semibold text-solar">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs text-gray-400 max-w-xs ml-auto">
                  {item.description}
                </p>
              </div>

              {/* Name */}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// import { Icon } from '@/ui/components'

// const TIMELINE = [
//   {
//     title: 'HTML /',
//     description: 'Foundations of semantic and accessible markup',
//     icon: 'code',
//   },
//   {
//     title: 'CSS',
//     description: 'Layouts, responsiveness, and design systems',
//     icon: 'palette',
//   },
//   {
//     title: 'JavaScript / TypeScript',
//     description: 'Logic, state management, and scalable codebases',
//     icon: 'javascript',
//   },
//   {
//     title: 'React / Next.js',
//     description: 'Component-driven architecture and SSR',
//     icon: 'view_in_ar',
//   },
//   {
//     title: 'Databases',
//     description: 'Data modeling and backend integrations',
//     icon: 'storage',
//   },
//   {
//     title: 'Web3',
//     description: 'Smart contracts and blockchain interaction',
//     icon: 'hub',
//   },
// ]

// export function Timeline() {
//   return (
//     <div className="hidden lg:block relative w-full py-16">
//       {/* Vertical spine */}
//       <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10 -translate-x-1/2" />

//       <div className="flex flex-col gap-2">
//         {TIMELINE.map((item, index) => {
//           const isLeft = index % 2 === 0

//           return (
//             <div key={item.title} className="relative flex items-center w-full">
//               {/* Node */}
//               <div className="absolute left-1/2 -translate-x-1/2 z-10">
//                 <div className="size-12 rounded-full bg-black/70 border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(96,165,250,0.35)]">
//                   <Icon className="!text-2xl text-blue-300">{item.icon}</Icon>
//                 </div>
//               </div>

//               {/* Horizontal line */}
//               <div
//                 className={`absolute top-1/2 h-[2px] bg-white/10
//                   ${isLeft ? 'right-1/2 w-[25%]' : 'left-1/2 w-[25%]'}`}
//               />

//               {/* Content */}
//               <div
//                 className={`w-1/2 px-8
//                   ${isLeft ? 'text-right pr-16' : 'text-left pl-16 ml-auto'}`}
//               >
//                 <h4 className="text-sm font-semibold text-solar">
//                   {item.title}
//                 </h4>
//                 <p className="mt-1 text-xs text-gray-400 max-w-xs ml-auto">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }
