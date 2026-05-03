import { FadeUp } from '@/components/ui/FadeUp'
import styles from './Philosophy.module.css'

export function Philosophy() {
  return (
    <section className={styles.section} aria-labelledby="philosophy-title">
      <div className={styles.inner}>
        <FadeUp className={styles.left}>
          <p className={styles.eyebrow}>// Our philosophy</p>
          <h2 id="philosophy-title" className={styles.title}>
            Software as a<br /><em>living system</em>
          </h2>
        </FadeUp>

        <FadeUp className={styles.right} delay={80}>
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

        <FadeUp className={styles.quote} delay={120}>
          <p className={styles.quoteText}>
            &ldquo;Complexity is a liability. We engineer the simplest possible solution for the
            hardest possible problems, and we hold that <em>standard</em> on every commit.&rdquo;
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
