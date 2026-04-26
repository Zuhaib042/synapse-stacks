import { FadeUp } from '@/components/ui/FadeUp'
import styles from './Approach.module.css'

const steps = [
  {
    num: '01',
    title: 'Systems Thinking First',
    desc: 'We map the entire system — not just the feature — before writing a line of code. Every architectural decision is made with the full system\'s trajectory in mind.',
  },
  {
    num: '02',
    title: 'Test-Driven Development',
    desc: 'We write tests before implementation, not as an afterthought. This forces clarity of intent and makes refactoring safe at any scale.',
  },
  {
    num: '03',
    title: 'Strict CI/CD by Default',
    desc: 'Automated pipelines catch regressions before they reach production. Every merge is reviewed, tested, and validated — without exception.',
  },
  {
    num: '04',
    title: 'Ownership, Not Handoff',
    desc: 'We treat your codebase as if it is ours. Full documentation, clean abstractions, and zero vendor lock-in. You own everything we ship — forever.',
  },
  {
    num: '05',
    title: 'Iterative, Not Waterfall',
    desc: 'Rapid cycles with working software at every stage. We ship, measure, and improve — so your product evolves alongside your users.',
  },
]

const chips = ['Agile Delivery', 'TDD', 'Code Reviews', 'Zero Black Boxes', 'Full Ownership']

export function Approach() {
  return (
    <section className={styles.section} aria-labelledby="approach-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Engineering Approach</p>
        <h2 id="approach-title" className={styles.title}>
          How we think
          <br />
          before we build
        </h2>

        <div className={styles.grid}>
          {/* Steps list */}
          <div className={styles.steps}>
            {steps.map((step) => (
              <FadeUp key={step.num} className={styles.step}>
                <div className={styles.stepNum}>{step.num}</div>
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Visual card */}
          <FadeUp className={styles.visual}>
            {/* Layered wireframe background */}
            <svg
              className={styles.visualBg}
              viewBox="0 0 480 480"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="40" y="20" width="400" height="60" rx="5" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
              <rect x="24" y="96" width="400" height="60" rx="5" stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="none" />
              <rect x="8" y="172" width="400" height="60" rx="5" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
              <line x1="100" y1="80" x2="84" y2="96" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="300" y1="80" x2="284" y2="96" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <circle cx="100" cy="50" r="3" fill="rgba(242,200,75,0.5)" />
              <circle cx="200" cy="50" r="3" fill="rgba(255,255,255,0.2)" />
              <circle cx="84" cy="126" r="3" fill="rgba(91,142,240,0.5)" />
            </svg>

            <div className={styles.visualContent}>
              <div className={styles.visualTitle}>
                Startup agility.
                <br />
                Enterprise rigor.
              </div>
              <p className={styles.visualBody}>
                We operate at the speed of a product team with the discipline of an enterprise
                engineering org. That combination is rare — and it&apos;s the only mode we know.
              </p>
            </div>

            <div className={styles.chips}>
              {chips.map((chip) => (
                <span key={chip} className={styles.chip}>
                  {chip}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
