import { FadeUp } from '@/components/ui/FadeUp'
import styles from './Approach.module.css'

const steps = [
  { num: '// 01', title: 'Systems Thinking First', em: '', desc: "We map the entire system, not just the feature, before writing a line of code. Every architectural decision is made with the full system's trajectory in mind." },
  { num: '// 02', title: 'Test-Driven', em: 'Development', desc: 'We write tests before implementation, not as an afterthought. This forces clarity of intent and makes refactoring safe at any scale.' },
  { num: '// 03', title: 'Strict CI/CD', em: 'by Default', desc: 'Automated pipelines catch regressions before they reach production. Every merge is reviewed, tested, and validated without exception.' },
  { num: '// 04', title: 'Ownership,', em: 'Not Handoff', desc: 'We treat your codebase as if it is ours. Full documentation, clean abstractions, and zero vendor lock-in. You own everything we ship, forever.' },
  { num: '// 05', title: 'Iterative,', em: 'Not Waterfall', desc: 'Rapid cycles with working software at every stage. We ship, measure, and improve so your product evolves alongside your users.' },
]

export function Approach() {
  return (
    <section className={styles.section} aria-labelledby="approach-title">
      <div className={styles.inner}>
        <FadeUp className={styles.header}>
          <p className={styles.eyebrow}>// Engineering approach</p>
          <h2 id="approach-title" className={styles.title}>
            How we think<br />before we <em>build</em>
          </h2>
        </FadeUp>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <FadeUp key={step.num} className={styles.step} delay={i * 60}>
              <div className={styles.stepNum}>{step.num}</div>
              <h3 className={styles.stepTitle}>
                {step.title} {step.em && <em>{step.em}</em>}
              </h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
