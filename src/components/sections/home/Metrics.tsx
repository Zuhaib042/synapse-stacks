import { metrics } from '@/lib/data/metrics'
import styles from './Metrics.module.css'

export function Metrics() {
  return (
    <section className={styles.metrics} aria-label="Key metrics">
      <div className={styles.inner}>
        {metrics.map((metric) => (
          <div key={metric.label} className={styles.card}>
            <div className={styles.gridBg} aria-hidden="true" />
            <div
              className={styles.accent}
              style={{ background: metric.accentColor }}
              aria-hidden="true"
            />
            <div className={styles.number}>{metric.value}</div>
            <div className={styles.label}>{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
