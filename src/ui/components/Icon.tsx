import type { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  fill?: boolean
  grad?: number
  wght?: 100 | 200 | 300 | 400 | 500 | 600 | 700
  opsz?: number
}

export function Icon({
  fill,
  grad,
  wght,
  opsz,
  children,
  className,
  ...props
}: IconProps) {
  const style = {
    ...props.style,
    fontVariationSettings: `'wght' ${wght ?? 400}, 'FILL' ${fill ? 1 : 0}, 'GRAD' ${grad ?? 0}, 'opsz' ${opsz ?? 24}`,
  }

  // The stylesheet was imported on the index.html file
  return (
    <span
      translate="no"
      {...props}
      className={twMerge(className, 'material-symbols-rounded notranslate')}
      style={style}
    >
      {children}
    </span>
  )
}

// Use this tags below on index.html
//  <!-- Preconnect Google Fonts -->
// <!-- <link rel="preconnect" href="https://fonts.googleapis.com" />
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> -->

// <!-- Material Symbols -->
// <!-- <link
//   rel="preload"
//   href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded&display=swap:opsz,wght,FILL,GRAD@20..48,100..700,0..1,0..200"
//   as="style"
//   onload="
//     this.onload = null
//     this.rel = 'stylesheet'
//   "
// /> -->
