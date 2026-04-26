import { Button } from '@/components/ui/Button'
import styles from './AboutCta.module.css'

export function AboutCta() {
  return (
    <div className={styles.section} aria-labelledby="about-cta-title">
      <h2 id="about-cta-title" className={styles.title}>
        Let&apos;s architect something <em>worth building.</em>
      </h2>
      <p className={styles.sub}>
        Stop managing legacy debt. Let&apos;s design a system that accelerates your business
        objectives — starting this week.
      </p>
      <div className={styles.actions}>
        <Button href="mailto:hello@synapsestacks.com" variant="yellow" external>
          Schedule a Free Consultation
        </Button>
        <Button href="/services" variant="ghostLight">
          View Our Services →
        </Button>
      </div>
    </div>
  )
}
