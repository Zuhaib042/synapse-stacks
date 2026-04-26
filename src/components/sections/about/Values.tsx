import { FadeUp } from '@/components/ui/FadeUp'
import styles from './Values.module.css'

const values = [
  {
    icon: '◈',
    iconBg: 'rgba(242,200,75,0.15)',
    title: 'Radical Simplicity',
    desc: 'Complexity is a liability. We engineer the simplest possible solution for the hardest possible problems. Every abstraction must earn its place, and every dependency must justify its existence.',
  },
  {
    icon: '◈',
    iconBg: 'rgba(91,142,240,0.15)',
    title: 'Engineering Rigor',
    desc: 'We do not cut corners. Test-driven development, strict CI/CD pipelines, and peer code reviews are non-negotiable. Quality assurance is not a phase — it is a practice embedded in every line we ship.',
  },
  {
    icon: '◈',
    iconBg: 'rgba(110,201,122,0.15)',
    title: 'Transparent Partnership',
    desc: 'No black boxes. We operate as a direct extension of your internal team — transparent progress, honest assessments, and communication that respects your time and intelligence.',
  },
]

export function Values() {
  return (
    <section className={styles.section} aria-labelledby="values-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Core Values</p>
          <h2 id="values-title" className={styles.title}>
            What we believe
            <br />
            shapes how we build
          </h2>
        </header>

        <div className={styles.grid}>
          {values.map((value, i) => (
            <FadeUp key={value.title} delay={i * 80} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.badge} style={{ background: value.iconBg }}>
                  {value.icon}
                </div>
                <h3 className={styles.cardTitle}>{value.title}</h3>
              </div>
              <p className={styles.cardDesc}>{value.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
