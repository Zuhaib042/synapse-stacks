import { FadeUp } from '@/components/ui/FadeUp'
import { processSteps } from '@/lib/data/metrics'
import styles from './Process.module.css'

const stepTitles: Record<string, { before: string; em: string }> = {
  'Discover & Architect': { before: 'Discover & ', em: 'Architect' },
  'Design & Prototype':   { before: 'Design & ', em: 'Prototype' },
  'Build & Iterate':      { before: 'Build & ', em: 'Iterate' },
  'Deploy & Scale':       { before: 'Deploy & ', em: 'Scale' },
}

export function Process() {
  return (
    <section className={styles.section} aria-labelledby="process-title">
      <div className={styles.inner}>
        <FadeUp className={styles.header}>
          <p className={styles.eyebrow}>// How we work</p>
          <h2 id="process-title" className={styles.title}>
            Startup agility.<br /><em>Enterprise rigor.</em>
          </h2>
        </FadeUp>

        <div className={styles.steps}>
          {processSteps.map((step, i) => {
            const parsed = stepTitles[step.title]
            return (
              <FadeUp key={step.num} className={styles.step} delay={i * 60}>
                <div className={styles.stepNum}>{step.num}</div>
                <h3 className={styles.stepTitle}>
                  {parsed ? (
                    <>{parsed.before}<em>{parsed.em}</em></>
                  ) : step.title}
                </h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
