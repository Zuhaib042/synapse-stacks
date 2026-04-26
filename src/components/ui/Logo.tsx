import Link from 'next/link'
import styles from './Logo.module.css'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: number
}

export function LogoIcon({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="34" height="34" rx="8" fill="#3B5BDB" />
      <path d="M17 9l8.5 4.25L17 17.5 8.5 13.25z" fill="white" />
      <path
        d="M8.5 17.5l8.5 4.25 8.5-4.25"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M8.5 21.75l8.5 4.25 8.5-4.25"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function Logo({ variant = 'light', size = 34 }: LogoProps) {
  return (
    <Link href="/" className={styles.logo} aria-label="SynapseStacks — Home">
      <LogoIcon size={size} />
      <span className={variant === 'dark' ? styles.textDark : styles.text}>
        SynapseStacks
      </span>
    </Link>
  )
}
