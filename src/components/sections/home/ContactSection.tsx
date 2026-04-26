import { ContactForm } from './ContactForm'
import styles from './ContactSection.module.css'

export function ContactSection() {
  return (
    <section className={styles.section} id="consultation" aria-labelledby="contact-title">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>Start a Project</p>
          <h2 id="contact-title" className={styles.headline}>
            Ready to initiate your
            <br />
            next <em>deployment?</em>
          </h2>
          <p className={styles.sub}>
            Stop managing legacy debt. Let&apos;s architect a system that accelerates your
            business objectives — starting this week.
          </p>
          <ul className={styles.trust} aria-label="Why work with us">
            <li className={styles.trustItem}>
              <span className={styles.dot} aria-hidden="true" />
              Response within 24 hours
            </li>
            <li className={styles.trustItem}>
              <span className={styles.dot} aria-hidden="true" />
              50+ enterprise projects delivered
            </li>
            <li className={styles.trustItem}>
              <span className={styles.dot} aria-hidden="true" />
              No black boxes, ever
            </li>
            <li className={styles.trustItem}>
              <span className={styles.dot} aria-hidden="true" />
              Full code ownership — yours forever
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
