import { techStack } from '@/lib/data/services'
import styles from './StackStrip.module.css'

export function StackStrip() {
  return (
    <div className={styles.strip} aria-label="Technologies we work with">
      <span className={styles.label}>Technologies</span>
      {techStack.map((tech) => (
        <span key={tech} className={styles.pill}>
          {tech}
        </span>
      ))}
    </div>
  )
}
