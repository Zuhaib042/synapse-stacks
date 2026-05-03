import { techStack } from '@/lib/data/services'
import styles from './StackStrip.module.css'

const items = [...techStack, ...techStack]

export function StackStrip() {
  return (
    <div className={styles.strip} aria-label="Technologies we work with" aria-hidden="true">
      <div className={styles.track}>
        {items.map((tech, i) => (
          <span key={i} className={styles.item}>{tech}</span>
        ))}
      </div>
    </div>
  )
}
