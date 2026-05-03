'use client'

import { FadeUp } from '@/components/ui/FadeUp'
import { ContactForm } from './ContactForm'
import styles from './ContactSection.module.css'

export function ContactSection() {
  return (
    <section className={styles.section} id="consultation" aria-labelledby="contact-title">
      <div className={styles.inner}>
        <FadeUp className={styles.left}>
          <p className={styles.eyebrow}>Start a Project</p>
          <h2 id="contact-title" className={styles.title}>
            Ready to initiate your<br />next <em>deployment?</em>
          </h2>
          <p className={styles.sub}>
            Stop managing legacy debt. Let&apos;s architect a system that accelerates
            your business objectives, starting this week.
          </p>
          <ul className={styles.bullets}>
            <li>Response within 24 hours</li>
            <li>50+ enterprise projects delivered</li>
            <li>No black boxes, ever</li>
            <li>Full code ownership, yours forever</li>
          </ul>
        </FadeUp>

        <FadeUp delay={120} className={styles.right}>
          <ContactForm />
        </FadeUp>
      </div>
    </section>
  )
}
