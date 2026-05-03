import { FadeUp } from '@/components/ui/FadeUp'
import { metrics } from '@/lib/data/metrics'
import styles from './Metrics.module.css'

const accentVariants = [styles.numberNeon, '', styles.numberAccent, '']

export function Metrics() {
  return (
    <section className={styles.metrics} aria-label="Key metrics">
      {metrics.map((metric, i) => (
        <FadeUp
          key={metric.label}
          className={styles.cell}
          delay={i * 80}
          style={{ transitionDelay: `${i * 80}ms` } as React.CSSProperties}
        >
          <div className={styles.accent} style={{ background: metric.accentColor }} aria-hidden="true" />
          <div className={`${styles.number} ${accentVariants[i] ?? ''}`}>{metric.value}</div>
          <div className={styles.label}>{metric.label}</div>
        </FadeUp>
      ))}
    </section>
  )
}
