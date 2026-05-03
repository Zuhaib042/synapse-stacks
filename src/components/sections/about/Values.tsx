import { FadeUp } from '@/components/ui/FadeUp'
import styles from './Values.module.css'

const values = [
  {
    accentColor: 'var(--neon)',
    title: 'Radical Simplicity',
    desc: 'Complexity is a liability. We engineer the simplest possible solution for the hardest possible problems. Every abstraction must earn its place, and every dependency must justify its existence.',
  },
  {
    accentColor: 'var(--accent)',
    title: 'Engineering Rigor',
    desc: 'We do not cut corners. Test-driven development, strict CI/CD pipelines, and peer code reviews are non-negotiable. Quality assurance is not a phase. It is a practice embedded in every line we ship.',
  },
  {
    accentColor: 'var(--purple-light)',
    title: 'Transparent Partnership',
    desc: 'No black boxes. We operate as a direct extension of your internal team: transparent progress, honest assessments, and communication that respects your time and intelligence.',
  },
]

export function Values() {
  return (
    <section className={styles.section} aria-labelledby="values-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>// Core values</p>
            <h2 id="values-title" className={styles.title}>
              What we believe<br />shapes how we <em>build</em>
            </h2>
          </div>
          <p className={styles.headerSub}>
            Three principles that govern every engagement, every architectural decision, and every
            line of code we ship.
          </p>
        </header>

        <div className={styles.grid}>
          {values.map((value, i) => (
            <FadeUp key={value.title} delay={i * 80} className={styles.card}>
              <div className={styles.accentBar} style={{ background: value.accentColor }} aria-hidden="true" />
              <h3 className={styles.cardTitle}>{value.title}</h3>
              <p className={styles.cardDesc}>{value.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
