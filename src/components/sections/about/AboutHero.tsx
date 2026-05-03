import { metrics } from '@/lib/data/metrics'
import styles from './AboutHero.module.css'

export function AboutHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.inner}>
        <div>
          <p className={styles.eyebrow}>// About SynapseStacks</p>
          <h1 className={styles.title}>
            We build systems<br />that <em>outlast</em><br />the hype.
          </h1>
          <p className={styles.lead}>
            SynapseStacks is a premium software engineering agency. We are not a feature factory. We
            are an engineering partner, and everything we build is designed to adapt, scale, and
            outperform.
          </p>
        </div>

        <div className={styles.statGrid} aria-label="Company statistics">
          {metrics.map((metric) => (
            <div key={metric.label} className={styles.stat}>
              <div className={styles.statAccent} style={{ background: metric.accentColor }} aria-hidden="true" />
              <div className={styles.statVal}>{metric.value}</div>
              <div className={styles.statLabel}>{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
