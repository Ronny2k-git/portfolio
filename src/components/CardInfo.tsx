const MAIN_STACK = [
  'JavaScript',
  'TypeScript',
  'React',
  'SolidJS',
  'Next.js',
  'CSS3',
  'HTML5',
  'Tailwind CSS',
  'Solidity',
]

export function CardInfo() {
  return (
    <div className="w-[20.5rem] h-auto md:w-[24.5rem] p-6 flex items-center justify-center flex-col bg-gray-800/20 rounded-4xl text-gray-400 border border-gray-800">
      {/* My Infos */}
      <section className="flex flex-col gap-6">
        <p className="text-lg">My name is:</p>
        {/* Use a customized name later */}
        <span className="px-6 text-4xl md:text-5xl text-blue-300 font-semibold">
          Ronny Edson
        </span>

        <hr className="text-gray-700/70" />

        <p className="text-lg">I'm a:</p>

        <div className="flex flex-col text-lg">
          <p>Web Developer Focused on Web3</p>

          {/* Stack */}
          <div className="mt-6 flex flex-col items-start">
            <span className="text-sm uppercase tracking-widest text-gray-500">
              Main stack
            </span>

            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {MAIN_STACK.map((tech) => (
                <li
                  key={tech}
                  className="
                px-3 py-1
                rounded-full
                bg-blue-500/10
                text-blue-300
                border border-blue-500/20
              "
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
