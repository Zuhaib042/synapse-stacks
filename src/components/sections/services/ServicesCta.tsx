import { Button } from '@/components/ui/Button'
import styles from './ServicesCta.module.css'

export function ServicesCta() {
  return (
    <div className={styles.section} aria-labelledby="services-cta-title">
      <h2 id="services-cta-title" className={styles.title}>
        Ready to scope your <em>next project?</em>
      </h2>
      <p className={styles.sub}>
        Tell us what you&apos;re building. We&apos;ll tell you exactly how we&apos;d approach it.
      </p>
      <div className={styles.actions}>
        <Button href="mailto:hello@synapsestacks.com" variant="yellow" external>
          Schedule a Free Consultation
        </Button>
        <Button href="/about" variant="ghostLight">
          Learn how we work →
        </Button>
      </div>
    </div>
  )
}
