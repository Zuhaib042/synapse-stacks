import Link from 'next/link'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'yellow' | 'ghost' | 'ghostLight'

interface ButtonProps {
  href: string
  variant?: ButtonVariant
  children: React.ReactNode
  className?: string
  external?: boolean
}

export function Button({
  href,
  variant = 'primary',
  children,
  className = '',
  external = false,
}: ButtonProps) {
  const cls = [styles.btn, styles[variant], className].filter(Boolean).join(' ')

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}
