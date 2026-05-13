import { Button } from '@/components/ui/Button'
import styles from './FinalCta.module.css'

export function FinalCta() {
  return (
    <section className={styles.section} id="consultation" aria-labelledby="cta-title">
      <h2 id="cta-title" className={styles.title}>
        Ready to initiate your
        <br />
        next <em>deployment?</em>
      </h2>
      <p className={styles.sub}>
        Stop managing legacy debt. Let&apos;s architect a system that accelerates your business
        objectives.
      </p>
      <div className={styles.actions}>
        <Button href="mailto:contact@synapsestacks.com" variant="yellow" external>
          Schedule a Free Consultation
        </Button>
        <Button href="/services" variant="ghostLight">
          View Our Services →
        </Button>
      </div>
    </section>
  )
}
