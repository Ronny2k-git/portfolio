import { Target, User, Wrench } from 'lucide-react'

// CIRCLES SECTION
export const HOME_CIRCLE_LOGO = [
  {
    src: '/logos/aws.webp',
    alt: 'AWS logo',
    class: 'planet1 translate-x-[19rem] -translate-y-[17rem] size-14',
  },
  {
    src: '/logos/node-js.webp',
    alt: 'Node.js logo',
    class: 'planet1 -translate-y-[13.2rem] size-14',
  },
  {
    src: '/logos/js-ts-logo.webp',
    alt: 'Javascript and Typescript logo',
    class: 'planet1 translate-x-[25.2rem] -translate-y-[1rem] size-15',
  },
  {
    src: '/logos/eth-logo.webp',
    alt: 'Ethereum logo',
    class: 'planet2 translate-x-[4rem] translate-y-[15.5rem] size-14',
  },
  {
    src: '/logos/react-logo.webp',
    alt: 'React logo',
    class: 'planet2 -translate-x-[18rem] translate-y-[11rem] size-16',
  },
  {
    src: 'profile.webp',
    alt: 'Ronny Edson profile photo',
    class: 'planet1 -translate-x-[31rem] -translate-y-[6rem] size-42',
  },
]

// MY STACKS
export const MAIN_STACK = [
  { label: 'JavaScript', icon: '/logos/js-logo.webp', alt: 'JavaScript logo' },
  { label: 'TypeScript', icon: '/logos/ts-logo.webp', alt: 'TypeScript logo' },
  { label: 'Node.js', icon: '/logos/node-js.webp', alt: 'Node.js logo' },
  { label: 'React', icon: '/logos/tag/react-logo.webp', alt: 'React logo' },
  { label: 'Vite', icon: '/logos/vite-logo.webp', alt: 'Vite logo' },
  { label: 'Next.js', icon: '/logos/tag/next-js.webp', alt: 'Next.js logo' },
  { label: 'CSS3', icon: '/logos/tag/css.webp', alt: 'CSS3 logo' },
  {
    label: 'Tailwind',
    icon: '/logos/tag/tailwind.webp',
    alt: 'Tailwind CSS logo',
  },
  {
    label: 'Solidity',
    icon: '/logos/solidity-logo.webp',
    alt: 'Solidity logo',
  },
]

// ABOUT ME SECTION
export const ABOUT_CARDS = [
  {
    icon: User,
    title: 'Who I Am',
    description: true,
  },
  {
    icon: Wrench,
    title: 'What I Do',
    items: [
      'Frontend (JS/TS)',
      'Backend (Node.js)',
      'Web3 integrations',
      'UI performance optimization',
      'Clean & scalable code',
    ],
  },
  {
    icon: Target,
    title: 'Focus',
    items: [
      'Web/Web3',
      'Frontend',
      'Backend (Node.js)',
      'UI/UX',
      'Performance',
    ],
  },
]

export const TIMELINE = [
  {
    code: 1,
    title: 'HTML / CSS',
    description: 'Semantic, layouts, responsibility, design systems etc',
    img: '/logos/html-css-logo.webp',
    alt: 'HTML and CSS logos',
  },
  {
    code: 2,
    title: 'JS / TS',
    description: 'Logic, state management, scalable codebases etc',
    img: '/logos/js-ts-logo.webp',
    alt: 'JavaScript and TypeScript logos',
  },
  {
    code: 3,
    title: 'React / Next',
    description: 'Reusable components, states, UI, and SSR',
    img: '/logos/react-logo.webp',
    alt: 'React logo',
  },
  {
    code: 4,
    title: 'Frameworks',
    description: 'Using frameworks: vite, tanstack, solid etc',
    img: '/logos/framework-logo.webp',
    alt: 'Frameworks logo',
  },
  {
    code: 5,
    title: 'DB / Node.js',
    description: 'Data modeling and backend integrations',
    img: '/logos/node-db.webp',
    alt: 'Node.js and database logo',
  },
  {
    code: 6,
    title: 'Web3',
    description: 'Smart contracts and blockchain interactions',
    img: '/logos/web3-logo.webp',
    alt: 'Web3 logo',
  },
]

// SKILL CARDS SECTION
export const SKILLS = [
  {
    id: '1',
    title: 'Languages, Frameworks & Runtimes',
    items: [
      { lang: 'JavaScript / TypeScript', pct: 80 },
      { lang: 'React / Next.js', pct: 85 },
      { lang: 'Node.js (Express)', pct: 75 },
      { lang: 'SolidJS', pct: 65 },
      { lang: 'Vite / Tanstack Start', pct: 85 },
      { lang: 'CSS3 / HTML5', pct: 80 },
      { lang: 'Tailwind CSS', pct: 85 },
      { lang: 'Solidity', pct: 35 },
      { lang: 'Rust', pct: 20 },
    ],
  },
  {
    id: '2',
    title: 'Databases & Infra',
    items: [
      { lang: 'MySQL', pct: 80 },
      { lang: 'PlanetScale', pct: 60 },
      { lang: 'PostgreSQL', pct: 70 },
      { lang: 'Docker', pct: 40 },
      { lang: 'Neon', pct: 30 },
    ],
  },
  {
    id: '3',
    title: 'Web3 Libraries',
    items: [
      { lang: 'Wagmi', pct: 80 },
      { lang: 'Viem', pct: 75 },
      { lang: 'RainbowKit', pct: 85 },
      { lang: 'Ethers.js', pct: 40 },
    ],
  },
]

// MY PROJECTS SECTION
export const HOME_PROJECT_TECHS = [
  { label: 'Next.js', icon: '/logos/tag/next-js.webp', alt: 'Next.js logo' },
  { label: 'Vite', icon: '/logos/vite-logo.webp', alt: 'Vite logo' },

  { label: 'React', icon: '/logos/tag/react-logo.webp', alt: 'React logo' },
  { label: 'Tanstack', icon: '/logos/tag/tanstack.webp', alt: 'TanStack logo' },
  { label: 'Wagmi', icon: '/logos/tag/wagmi.webp', alt: 'Wagmi logo' },
  { label: 'Viem', icon: '/logos/tag/viem.webp', alt: 'Viem logo' },
  {
    label: 'Tailwind',
    icon: '/logos/tag/tailwind.webp',
    alt: 'Tailwind CSS logo',
  },
  { label: 'CSS', icon: '/logos/tag/css.webp', alt: 'CSS logo' },
  { label: 'Zod', icon: '/logos/tag/zod.webp', alt: 'Zod logo' },
  { label: 'MySQL', icon: '/logos/tag/mysql.webp', alt: 'MySQL logo' },
  {
    label: 'PlanetScale',
    icon: '/logos/tag/planet-scale.webp',
    alt: 'PlanetScale logo',
  },
  { label: 'Neon', icon: '/logos/tag/neon.webp', alt: 'Neon database logo' },
  { label: 'i18next', icon: '/logos/tag/i18next.webp', alt: 'i18next logo' },
  {
    label: 'Prisma',
    icon: '/logos/tag/prisma-orm.webp',
    alt: 'Prisma ORM logo',
  },
  {
    label: 'Local Storage',
    icon: '/logos/tag/local-storage.webp',
    alt: 'Local storage icon',
  },
  {
    label: 'React hook form',
    icon: '/logos/tag/hook-form.webp',
    alt: 'React Hook Form logo',
  },
]

export const MY_PROJECTS_TIMELINE = [
  {
    id: 'manager',
    img: '/home/manager.webp',
    alt: 'Product Manager project preview',
    date: 'Nov 2024',
  },
  {
    id: 'vault-marketplace',
    img: '/home/vault-marketplace.webp',
    alt: 'Vault Marketplace project preview',
    date: 'Jan 2025',
  },
  {
    id: 'metavault',
    img: '/home/metavault.webp',
    alt: 'Metavault project preview',
    date: 'Oct 2025',
  },
]

export const PROJECTS = [
  {
    id: 'metavault',
    title: 'Metavault',
    description:
      'A decentralized Web3 platform where users can create on-chain vaults, execute trades, monitor active and completed vaults, and manage their profiles directly on the blockchain. I worked on this project for 3 months.',
    image: '/home/projects/metavault.webp',
    alt: 'Metavault Web3 platform interface',
    github: 'https://github.com/Ronny2k-git/metavault',
    live: 'https://metavault-phi.vercel.app/',
    class: 'max-desktop-lg:col-span-1 col-span-2',
    date: 'Oct 2025',
  },

  {
    id: 'vault-marketplace',
    title: 'Vault Marketplace',
    description:
      'A decentralized web3 marketplace when you can create your own vault on the blockchain to save your tokens and manage them on sepolia network, allowing users to deposit, withdraw, and explore active or finalized vaults',
    image: '/home/projects/vault-marketplace.webp',
    alt: 'Vault Marketplace Web3 interface',
    github: 'https://github.com/Ronny2k-git/vault-marketplace',
    class: 'col-span-1',
    date: 'Jan 2025',
  },
  {
    id: 'manager',
    title: 'Product Manager',
    description:
      'A website where users can create their products to manage inventory and track updates. All data is stored in local storage. I worked on this project for two weeks in the past and recently refactored it.',
    image: '/home/projects/manager.webp',
    alt: 'Product Manager dashboard interface',
    github: 'https://github.com/Ronny2k-git/marketplace',
    live: 'https://product-manager2k.vercel.app/',
    class: 'col-span-1',
    date: 'Nov 2024',
  },
]
