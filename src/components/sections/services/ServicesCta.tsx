import { FadeUp } from '@/components/ui/FadeUp'
import { Button } from '@/components/ui/Button'
import styles from './ServicesCta.module.css'

export function ServicesCta() {
  return (
    <div className={styles.section} aria-labelledby="services-cta-title">
      <div className={styles.glow} aria-hidden="true" />
      <FadeUp>
        <h2 id="services-cta-title" className={styles.title}>
          Ready to scope your <em>next project?</em>
        </h2>
      </FadeUp>
      <FadeUp delay={80}>
        <p className={styles.sub}>
          Tell us what you&apos;re building. We&apos;ll tell you exactly how we&apos;d approach it.
        </p>
      </FadeUp>
      <FadeUp delay={160} className={styles.actions}>
        <Button href="/#consultation" variant="yellow">
          Schedule a Free Consultation
        </Button>
        <Button href="/about" variant="ghost">
          Learn how we work →
        </Button>
      </FadeUp>
    </div>
  )
}
