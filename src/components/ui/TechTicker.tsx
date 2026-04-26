'use client'

import styles from './TechTicker.module.css'
import { techStack } from '@/lib/data/services'

// Duplicate for seamless infinite loop
const items = [...techStack, ...techStack]

export function TechTicker() {
  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.track}>
        {items.map((tech, i) => (
          <span key={i} className={styles.item}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
