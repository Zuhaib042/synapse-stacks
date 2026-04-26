'use client'

import { useEffect, useRef } from 'react'
import styles from './FadeUp.module.css'

interface FadeUpProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function FadeUp({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
  ...rest
}: FadeUpProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = delay ? `${delay}ms` : ''
          el.classList.add(styles.visible)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const cls = [styles.fadeUp, className].filter(Boolean).join(' ')

  return (
    // @ts-expect-error — generic polymorphic element
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  )
}
