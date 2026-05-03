import { FadeUp } from '@/components/ui/FadeUp'
import { Button } from '@/components/ui/Button'
import styles from './AboutCta.module.css'

export function AboutCta() {
  return (
    <div className={styles.section} aria-labelledby="about-cta-title">
      <div className={styles.glow} aria-hidden="true" />
      <FadeUp>
        <h2 id="about-cta-title" className={styles.title}>
          Let&apos;s architect something<br /><em>worth building.</em>
        </h2>
      </FadeUp>
      <FadeUp delay={80}>
        <p className={styles.sub}>
          Stop managing legacy debt. Let&apos;s design a system that accelerates your business
          objectives, starting this week.
        </p>
      </FadeUp>
      <FadeUp delay={160} className={styles.actions}>
        <Button href="/#consultation" variant="yellow">
          Schedule a Free Consultation
        </Button>
        <Button href="/services" variant="ghost">
          View Our Services →
        </Button>
      </FadeUp>
    </div>
  )
}
