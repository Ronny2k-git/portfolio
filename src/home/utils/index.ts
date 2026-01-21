// CIRCLES SECTION

export const HOME_CIRCLE_LOGO = [
  {
    src: '/logos/solidity-logo.png',
    class: 'planet1 translate-x-[19rem] -translate-y-[17rem] size-14',
  },
  {
    src: '/logos/vite-logo.png',
    class: 'planet1 -translate-y-[13rem] size-14',
  },
  {
    src: '/logos/ts-logo.png',
    class: 'planet1 translate-x-[25.5rem] -translate-y-[1rem] size-14',
  },
  {
    src: '/logos/eth-logo.png',
    class: 'planet2 translate-x-[4rem] translate-y-[15.5rem] size-14',
  },
  {
    src: '/logos/react-logo.png',
    class: 'planet2 -translate-x-[18rem] translate-y-[11rem] size-16',
  },
  {
    src: 'profile.png',
    class:
      'planet1 -translate-x-[31rem] -translate-y-[6rem] size-42 border-2 border-blue-300',
  },
]

// ABOUT SECTION
export const ABOUT_CARDS = [
  {
    title: 'Who I Am',
    description:
      'I’m Ronny, a Web Developer from Brazil focused on modern frontend and Web3 applications. Over the last two years, I’ve been actively working with blockchain technologies, smart contracts, and Web3 ecosystems.',
  },
  {
    title: 'What I Do',
    items: [
      'Frontend architecture',
      'Web3 integrations',
      'UI performance optimization',
      'Clean & scalable code',
    ],
  },
  {
    title: 'Focus',
    items: ['Web3', 'Frontend', 'UX', 'Performance'],
  },
]

export const TIMELINE = [
  {
    code: 1,
    title: 'HTML / CSS',
    description: 'Semantic, layouts, responsibility, design systems etc',
    img: '/logos/html-css-logo.png',
  },
  {
    code: 2,
    title: 'JS / TS',
    description: 'Logic, state management, scalable codebases etc',
    img: '/logos/js-ts-logo.png',
  },
  {
    code: 3,
    title: 'React / Next',
    description: 'Reusable components, states, UI, and SSR',
    img: '/logos/react-logo.png',
  },
  {
    code: 4,
    title: 'Frameworks',
    description: 'Using frameworks: vite, tanstack, solid etc',
    img: '/logos/framework-logo.png',
  },
  {
    code: 5,
    title: 'Database',
    description: 'Data modeling and backend integrations',
    img: '/logos/database.png',
  },
  {
    code: 6,
    title: 'Web3',
    description: 'Smart contracts and blockchain interactions',
    img: '/logos/web3-logo.png',
  },
]

// SKILL CARDS SECTION

export const SKILL_CARD_LANGUAGES = [
  { lang: 'JavaScript / TypeScript', pct: 80 },
  { lang: 'React / NextJS', pct: 90 },
  { lang: 'Solid / SolidJS', pct: 65 },
  { lang: 'Vite / Tanstack Start', pct: 85 },
  { lang: 'CSS3', pct: 80 },
  { lang: 'HTML5', pct: 85 },
  { lang: 'Tailwind CSS', pct: 85 },
  { lang: 'Solidity', pct: 35 },
  { lang: 'Rust', pct: 20 },
]

export const SKILL_CARD_DATABASES_AND_INFRA = [
  { lang: 'MySQL', pct: 80 },
  { lang: 'PlanetScale', pct: 60 },
  { lang: 'PostgreSQL', pct: 70 },
  { lang: 'Docker', pct: 40 },
  { lang: 'Neon', pct: 30 },
]

export const SKILL_CARD_WEB3 = [
  { lang: 'Ethers.js', pct: 40 },
  { lang: 'Web3JS', pct: 40 },
  { lang: 'Wagmi', pct: 80 },
  { lang: 'Viem', pct: 80 },
  { lang: 'RaimbowKit', pct: 85 },
]

// MY PROJECTS SECTION

export const HOME_PROJECT_TECHS = [
  { label: 'Solidity', icon: '/logos/solidity-logo.png' },
  { label: 'React', icon: '/logos/tag/react-logo.webp' },
  { label: 'Tanstack', icon: '/logos/tag/tanstack.png' },
  { label: 'Wagmi', icon: '/logos/tag/wagmi.png' },
  { label: 'Viem', icon: '/logos/tag/viem.png' },
  { label: 'Tailwind', icon: '/logos/tag/tailwind.png' },
  { label: 'CSS', icon: '/logos/tag/css.png' },
  { label: 'Zod', icon: '/logos/tag/zod.png' },
  { label: 'MySQL', icon: '/logos/tag/mysql.png' },
  { label: 'PlanetScale', icon: '/logos/tag/planet-scale.png' },
  { label: 'Neon', icon: '/logos/tag/neon.png' },
  { label: 'i18next', icon: '/logos/tag/i18next.png' },
  { label: 'Local Storage', icon: '/logos/tag/local-storage.png' },
  { label: 'React hook form', icon: '/logos/tag/hook-form.png' },
]

export const HOME_METAVAULT_PROJECT = [
  {
    title: 'Metavault',
    description:
      'A decentralized Web3 platform where users can create on-chain vaults, execute trades, monitor active and completed vaults, and manage their profiles directly on the blockchain. I worked on this project for 3 months.',
    image: '/home/metavault.png',
    github: 'https://github.com/Ronny2k-git/metavault',
    live: 'https://metavault-phi.vercel.app/',
    class: 'max-[1300px]:col-span-1 col-span-2',
  },
]

export const HOME_SECONDARY_PROJECTS = [
  {
    title: 'Vault Marketplace',
    description:
      'A decentralized web3 marketplace when you can create your own vault on the blockchain to save your tokens and manage them on sepolia network, allowing users to deposit, withdraw, and explore active or finalized vaults',
    image: '/home/vault-marketplace.png',
    github: 'https://github.com/Ronny2k-git/vault-marketplace',
    class: 'col-span-1',
  },
  {
    title: 'Marketplace',
    description:
      'A marketplace where you can buy products, add them to the cart and create you own product on the website. I worked on this project for two weeks. It was one of my first projects when I started studying programming in 2023.',
    image: '/home/marketplace.png',
    github: 'https://github.com/Ronny2k-git/marketplace',
    class: 'col-span-1',
  },
]
