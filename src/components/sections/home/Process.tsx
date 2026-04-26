import { processSteps } from '@/lib/data/metrics'
import styles from './Process.module.css'

export function Process() {
  return (
    <section className={styles.section} aria-labelledby="process-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>How We Work</p>
        <h2 id="process-title" className={styles.title}>
          Startup agility.
          <br />
          Enterprise rigor.
        </h2>

        <div className={styles.grid}>
          {processSteps.map((step) => (
            <div key={step.num} className={styles.step}>
              <div
                className={styles.stepBar}
                style={{ background: step.accentColor }}
                aria-hidden="true"
              />
              <div className={styles.stepNum}>{step.num}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
