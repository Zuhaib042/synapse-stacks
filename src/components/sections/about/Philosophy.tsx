import { FadeUp } from '@/components/ui/FadeUp'
import styles from './Philosophy.module.css'

export function Philosophy() {
  return (
    <section className={styles.section} aria-labelledby="philosophy-title">
      <div className={styles.inner}>
        <FadeUp className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Our Philosophy</p>
            <h2 id="philosophy-title" className={styles.title}>
              Software as a<br />
              <em>living system</em>
            </h2>
          </div>
          <div className={styles.body}>
            <p>
              We view software not as a collection of features, but as a living system. Every
              component must interact seamlessly, predictably, and securely. We discard the
              superfluous to focus on structural integrity and real user value.
            </p>
            <p>
              This means we approach every engagement with the same question: what does this system
              need to <em>be</em>, not just do? The architecture must serve not only today&apos;s
              requirements, but the demands of the business three years from now.
            </p>
          </div>
        </FadeUp>

        {/* Quote card */}
        <FadeUp className={styles.quote}>
          {/* Horizontal rule decoration */}
          <svg
            style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.06 }}
            viewBox="0 0 600 240"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {[40, 80, 120, 160, 200].map((y) => (
              <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="white" strokeWidth="1" />
            ))}
          </svg>
          <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
          <p className={styles.quoteText}>
            Complexity is a liability. We engineer the simplest possible solution for the hardest
            possible problems — and we hold that standard on every commit.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
